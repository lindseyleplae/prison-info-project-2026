// Automated re-verification of facility pages against their official sources.
//
// WHY THIS EXISTS
// Every facility page promises a `reviewBy` date. Keeping ~850 pages (×2 for the
// Spanish twins) re-checked by hand does not scale. This script does the routine
// part automatically: for each page that is due, it re-fetches the page's cited
// official source(s), asks a model whether the source still supports the page's
// key facts, and then:
//   - CONFIRM  → the source still supports the facts → bump lastVerified/reviewBy
//                (and the Spanish twin's sourceReviewed). This is the common case
//                and the ONLY thing written automatically.
//   - CHANGE   → the source explicitly states a different value → DO NOT edit the
//                page. Record exactly what changed (old vs. new + a source quote)
//                for a human to fix carefully in BOTH languages. Facts are woven
//                through the prose, so a blind field patch would leave the page
//                self-contradictory — that edit needs judgment, not automation.
//   - FLAG     → source unreachable / bot-blocked / too thin to confirm → leave
//                the page alone and surface it. Never fake a verification.
//
// The bar is deliberately conservative: silence in a source is never treated as a
// change, and a page is only auto-confirmed when the source positively supports
// its continued operation and core facts. When in doubt, it flags.
//
// USAGE
//   node scripts/reverify.mjs [--due-within=N] [--limit=N] [--state=xx]
//                             [--apply] [--stub]
//   --due-within=N  include pages with reviewBy <= today + N days (default 0)
//   --limit=N       cap the number of pages this run (default: no cap)
//   --state=xx      only that state's pages (handy for testing)
//   --apply         write date bumps to disk (default: dry-run, report only)
//   --stub          skip the model call; decide from fetch success only
//                   (plumbing test — no API key needed)
// ENV
//   ANTHROPIC_API_KEY        required unless --stub
//   REVERIFY_MODEL           default claude-haiku-4-5-20251001
//   REVERIFY_INTERVAL_DAYS   days to push reviewBy on confirm (default 90)
//   REVERIFY_NOW             YYYY-MM-DD override for "today" (deterministic runs)
//
// OUTPUT
//   Prints a summary and writes reverify-summary.md (consumed by the workflow).

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parse as parseYaml } from 'yaml';
import * as cheerio from 'cheerio';

const FACILITIES = path.resolve('src/content/facilities');
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MODEL = process.env.REVERIFY_MODEL || 'claude-haiku-4-5-20251001';
const INTERVAL_DAYS = Number(process.env.REVERIFY_INTERVAL_DAYS || 90);
const FETCH_TIMEOUT_MS = 20000;
const MAX_SOURCE_CHARS = 12000;
// A realistic desktop-browser UA. These are public government pages the site
// already cites; many DOC sites reject unknown user-agents outright, so we send
// a normal browser string to read the same page a visitor would.
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

// ---- args ----
const args = new Map();
for (const a of process.argv.slice(2)) {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  if (m) args.set(m[1], m[2] === undefined ? true : m[2]);
}
const DUE_WITHIN = Number(args.get('due-within') || 0);
const LIMIT = args.has('limit') ? Number(args.get('limit')) : Infinity;
const STATE = args.get('state') || null;
const APPLY = args.has('apply');
const STUB = args.has('stub');

function referenceNow() {
  const o = process.env.REVERIFY_NOW;
  if (o) return new Date(`${o}T00:00:00Z`);
  return new Date();
}
const NOW = referenceNow();
const todayISO = NOW.toISOString().slice(0, 10);
const reviewByISO = new Date(NOW.getTime() + INTERVAL_DAYS * MS_PER_DAY)
  .toISOString()
  .slice(0, 10);

function splitFrontmatter(raw) {
  if (!raw.startsWith('---')) return null;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return null;
  const block = raw.slice(3, end);
  const body = raw.slice(end + 4);
  let data;
  try {
    data = parseYaml(block) ?? {};
  } catch {
    return null;
  }
  return { data, body };
}

// Collect EN facility pages that are due (skip the es/ twins here; we edit them
// alongside their English source when applying).
async function collectDue() {
  const names = await fs.readdir(FACILITIES);
  const due = [];
  for (const name of names) {
    if (!name.endsWith('.md')) continue; // skips the es/ subdirectory
    const p = path.join(FACILITIES, name);
    const raw = await fs.readFile(p, 'utf8');
    const fm = splitFrontmatter(raw);
    if (!fm || fm.data.draft === true) continue;
    if (fm.data.lang && fm.data.lang !== 'en') continue;
    const reviewBy = fm.data.reviewBy ? new Date(`${fm.data.reviewBy}T00:00:00Z`) : null;
    if (!reviewBy || Number.isNaN(reviewBy.getTime())) continue;
    const dueBy = new Date(NOW.getTime() + DUE_WITHIN * MS_PER_DAY);
    if (reviewBy > dueBy) continue;
    if (STATE && fm.data.state !== STATE) continue;
    due.push({ file: p, name, data: fm.data, body: fm.body, reviewBy });
  }
  due.sort((a, b) => a.reviewBy - b.reviewBy); // oldest first
  return due.slice(0, LIMIT);
}

// Extract readable text from raw HTML, the same way for both fetch paths.
function htmlToText(html) {
  const $ = cheerio.load(html);
  $('script, style, noscript, svg').remove();
  return $('body').text().replace(/\s+/g, ' ').trim().slice(0, MAX_SOURCE_CHARS);
}

// A shared headless browser, launched only if something actually needs it.
// Launching costs a few seconds, so runs whose sources all answer a plain fetch
// never pay for it.
let browserPromise = null;
let browserUnavailable = false;

async function getBrowser() {
  if (browserUnavailable) return null;
  if (!browserPromise) {
    browserPromise = (async () => {
      const { chromium } = await import('playwright');
      return chromium.launch({ args: ['--disable-dev-shm-usage'] });
    })().catch((e) => {
      // No browser binary (or no Playwright) — degrade to fetch-only rather
      // than failing the run. Those pages just stay "could not verify".
      console.warn(`browser fallback unavailable: ${e.message}`);
      browserUnavailable = true;
      return null;
    });
  }
  return browserPromise;
}

export async function closeBrowser() {
  if (!browserPromise) return;
  const b = await browserPromise.catch(() => null);
  if (b) await b.close().catch(() => {});
}

// Some DOC sites refuse a scripted request (403) or render their content with
// JavaScript, so a plain fetch returns a shell. Florida, Arkansas, and Arizona
// all do this, which is why ~170 of their pages could never be auto-verified —
// not because anything was wrong with them. A real browser reads them fine.
async function fetchViaBrowser(url) {
  const browser = await getBrowser();
  if (!browser) return { ok: false, reason: 'browser unavailable' };
  let context;
  try {
    context = await browser.newContext({ userAgent: UA });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: FETCH_TIMEOUT_MS });
    // Give client-rendered content a moment to populate, but never hang on a
    // page that keeps a socket open (chat widgets, analytics beacons).
    await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
    const text = htmlToText(await page.content());
    if (text.length < 200) return { ok: false, reason: 'thin page (browser)' };
    return { ok: true, text, via: 'browser' };
  } catch (e) {
    return { ok: false, reason: `browser: ${e.message.split('\n')[0].slice(0, 60)}` };
  } finally {
    await context?.close().catch(() => {});
  }
}

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  let plain;
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': UA, accept: 'text/html,application/xhtml+xml' },
    });
    if (!res.ok) plain = { ok: false, reason: `HTTP ${res.status}`, status: res.status };
    else {
      const text = htmlToText(await res.text());
      plain = text.length < 200 ? { ok: false, reason: 'thin/JS-only page' } : { ok: true, text };
    }
  } catch (e) {
    plain = { ok: false, reason: e.name === 'AbortError' ? 'timeout' : 'network error' };
  } finally {
    clearTimeout(timer);
  }

  if (plain.ok) return plain;

  // Retry in a browser only for the failures a browser can actually fix:
  // bot-blocking and JS-rendered pages. A 404 means the source genuinely moved
  // (the content audit reports those separately), and a network error or
  // timeout will not improve — retrying either would just burn time.
  const worthRetrying =
    plain.reason === 'thin/JS-only page' ||
    (plain.status && plain.status !== 404 && plain.status !== 410);
  if (!worthRetrying) return plain;

  const viaBrowser = await fetchViaBrowser(url);
  return viaBrowser.ok ? viaBrowser : { ...plain, reason: `${plain.reason}; ${viaBrowser.reason}` };
}

// Pick up to two sources: the official facility page, plus any "visiting" source.
function chooseSources(data) {
  const out = [];
  const seen = new Set();
  const add = (url, label) => {
    if (url && !seen.has(url)) {
      seen.add(url);
      out.push({ url, label });
    }
  };
  add(data.links?.official, 'Official facility page');
  for (const s of data.sources || []) {
    if (/visit/i.test(s.name || '')) add(s.url, `Visiting source: ${s.name}`);
  }
  if (out.length === 0 && (data.sources || [])[0]) add(data.sources[0].url, data.sources[0].name);
  return out.slice(0, 2);
}

function firstCallout(body) {
  const m = body.match(/:::callout\{[^}]*\}([\s\S]*?):::/);
  return m ? m[1].replace(/\*\*/g, '').replace(/\s+/g, ' ').trim().slice(0, 500) : '';
}

function currentFacts(data, body) {
  return {
    title: data.title,
    address: data.address ?? null,
    mainPhone: data.contact?.mainPhone ?? null,
    mailingAddress: data.contact?.mailingAddress ?? null,
    visitingDays: data.visiting?.days ?? null,
    visitingHours: data.visiting?.hours ?? null,
    scheduling: data.visiting?.scheduling ?? null,
    providers: data.providers ?? null,
    statusNote: data.summary ?? '',
    calloutNote: firstCallout(body),
  };
}

const SYSTEM_PROMPT = `You verify whether an official corrections-department web page still supports the facts a reference site publishes about a prison. You are strict and conservative. You never invent facts. Silence in the source is NOT a contradiction. Only report a change when the source EXPLICITLY states a value that differs from the site's current value. Output ONLY a single JSON object, no prose.`;

function buildUserPrompt(facts, sources) {
  const sourceBlock = sources
    .map((s, i) => `[SOURCE ${i + 1} — ${s.label}]\n${s.text}`)
    .join('\n\n');
  return `The reference site currently publishes these facts about a prison:
${JSON.stringify(facts, null, 2)}

Here is the current text of the official source(s):

${sourceBlock}

Decide ONE overall status:
- "confirm": the source(s) positively support the facility's continued operation and its core facts (address and/or visiting info), and CONTRADICT nothing. Use this when things still match.
- "change": at least one fact is EXPLICITLY contradicted by a source (the source clearly states a different address, phone, mailing address, visiting days/hours, scheduling, provider, or that the facility has closed/relocated). List each change.
- "unclear": the source(s) could not be read, look like a navigation/access-denied page, or contain too little to positively support the facts. When in doubt, choose this.

THE TEST FOR "change" IS CONSEQUENCE, NOT WORDING. Ask: acting on the site's
current value, would a family show up on a wrong day, arrive outside real
visiting hours, or send mail somewhere it cannot arrive? If no, it is NOT a
change. Apply these rules before reporting anything:

1. SAME FACT, MORE DETAIL IS NOT A CHANGE. If the source states what the site
   already says and adds elaboration, choose "confirm".
   Site "10:00 a.m.-3:50 p.m." vs source "10:00 am to 3:50 pm, processing begins
   9:30 am, no admittance after 2:00 pm" — same visiting window. NOT a change.
2. FORMATTING AND PHRASING ARE NOT CHANGES. "Fri-Sun" vs "Friday, Saturday and
   Sunday"; "8:30 AM" vs "08:30 a.m."; a summarized sentence vs the source's
   fuller one. NOT changes.
3. INFORMATION THE SITE OMITS IS NOT A CONTRADICTION. If the source lists an
   extra address, an extra audience, or a second schedule the site does not
   mention, that is an omission, not a contradiction. Choose "confirm".
   Only report it if the site's stated value is now WRONG.
4. AN IMPOSSIBLE OR SELF-CONTRADICTORY SOURCE VALUE IS A SOURCE ERROR, NOT A
   CHANGE. A time range that ends before it starts ("11:30 p.m. - 6:00 p.m."),
   or a range spanning nearly a full day ("10:00 AM-9:00 AM"), is a typo on the
   agency's page. Choose "unclear" and say so in the note. Never ask the site to
   publish an impossible time.
5. IF THE SOURCE IS AMBIGUOUS ABOUT WHICH VALUE IS CURRENT, choose "unclear".

Report a change only when you can point to the specific words in the source that
make the site's current value incorrect for someone relying on it.

Return ONLY this JSON:
{
  "status": "confirm" | "change" | "unclear",
  "changes": [
    { "field": "<address|mainPhone|mailingAddress|visitingDays|visitingHours|scheduling|providers|operatingStatus>",
      "current": "<what the site says now>",
      "sourceSays": "<the new value the source states>",
      "quote": "<short exact quote from the source supporting this>" }
  ],
  "note": "<one short sentence>"
}
"changes" must be [] unless status is "change".`;
}

function extractJson(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
}

async function callModel(facts, sources) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: buildUserPrompt(facts, sources) }],
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Anthropic API ${res.status}: ${body.slice(0, 300)}`);
  }
  const j = await res.json();
  const text = (j.content || []).map((c) => c.text || '').join('');
  const parsed = extractJson(text);
  if (!parsed || !parsed.status) throw new Error('model returned unparseable JSON');
  return parsed;
}

async function bumpDates(file) {
  let txt = await fs.readFile(file, 'utf8');
  txt = txt
    .replace(/^lastVerified: \d{4}-\d{2}-\d{2}.*$/m, `lastVerified: ${todayISO}`)
    .replace(/^reviewBy: \d{4}-\d{2}-\d{2}.*$/m, `reviewBy: ${reviewByISO}`)
    .replace(/^sourceReviewed: \d{4}-\d{2}-\d{2}.*$/m, `sourceReviewed: ${todayISO}`);
  await fs.writeFile(file, txt);
}

async function confirmPage(page) {
  if (!APPLY) return;
  await bumpDates(page.file);
  const esTwin = path.join(FACILITIES, 'es', page.name);
  try {
    await fs.access(esTwin);
    await bumpDates(esTwin);
  } catch {
    /* no Spanish twin — fine */
  }
}

// ---- dismissed findings ----
// See scripts/reverify-dismissed.json. Each entry silences ONE field on ONE
// page, so any other field on that page still reports normally.
let DISMISSED = [];
try {
  const raw = await fs.readFile(new URL('./reverify-dismissed.json', import.meta.url), 'utf8');
  DISMISSED = JSON.parse(raw).dismissed ?? [];
} catch (e) {
  console.warn(`no dismissal list loaded (${e.code || e.message}) — reporting everything`);
}
function isDismissed(rel, field) {
  const norm = (p) => p.replace(/\\/g, '/');
  return DISMISSED.some((d) => norm(d.file) === norm(rel) && d.field === field);
}

// ---- run ----
const due = await collectDue();
const results = { confirmed: [], changed: [], flagged: [], dismissedCount: 0 };

for (const page of due) {
  const facts = currentFacts(page.data, page.body);
  const sources = chooseSources(page.data);
  const fetched = [];
  for (const s of sources) {
    const r = await fetchText(s.url);
    if (r.ok) fetched.push({ ...s, text: r.text });
  }

  let verdict;
  if (fetched.length === 0) {
    verdict = { status: 'unclear', changes: [], note: 'no source could be fetched' };
  } else if (STUB) {
    verdict = { status: 'confirm', changes: [], note: 'stub: fetched OK, model skipped' };
  } else {
    try {
      verdict = await callModel(facts, fetched);
    } catch (e) {
      verdict = { status: 'unclear', changes: [], note: `model error: ${e.message}` };
    }
  }

  const rel = path.relative(process.cwd(), page.file);
  if (verdict.status === 'confirm') {
    await confirmPage(page);
    results.confirmed.push({ rel, title: facts.title, note: verdict.note });
  } else if (verdict.status === 'change') {
    // Drop findings a human already checked against the source and rejected.
    // These recur every week because the agency's page still carries the error,
    // so no prompt wording stops them. A page whose only findings are dismissed
    // is treated as confirmed — it was verified, just not by the model.
    const kept = (verdict.changes || []).filter((c) => !isDismissed(rel, c.field));
    const dropped = (verdict.changes || []).length - kept.length;
    if (dropped) results.dismissedCount += dropped;
    if (kept.length === 0 && dropped > 0) {
      await confirmPage(page);
      results.confirmed.push({ rel, title: facts.title, note: 'only previously-dismissed findings' });
    } else {
      results.changed.push({ rel, title: facts.title, changes: kept, note: verdict.note });
    }
  } else {
    results.flagged.push({ rel, title: facts.title, note: verdict.note });
  }
  process.stderr.write(
    `${verdict.status.toUpperCase().padEnd(8)} ${facts.title} — ${verdict.note || ''}\n`
  );
}

// ---- summary ----
const lines = [];
lines.push(`# Weekly re-verification — ${todayISO}`);
lines.push('');
lines.push(`Checked **${due.length}** due page(s) (due-within ${DUE_WITHIN}d)${STUB ? ' _(stub mode)_' : ''}.`);
lines.push('');
lines.push(`- ✅ **${results.confirmed.length}** confirmed unchanged${APPLY ? ' → dates refreshed' : ' (dry-run: not written)'}`);
lines.push(`- ✏️ **${results.changed.length}** changed at the source → need a careful bilingual edit`);
lines.push(`- ⚠️ **${results.flagged.length}** could not be verified → left untouched`);
if (results.dismissedCount) {
  lines.push(
    `- 🔕 **${results.dismissedCount}** finding(s) previously checked against the source and dismissed ` +
      '(see `scripts/reverify-dismissed.json`)'
  );
}
lines.push('');
if (results.changed.length) {
  lines.push('## Changed — please review and update (EN + ES)');
  for (const c of results.changed) {
    lines.push(`\n### ${c.title}\n\`${c.rel}\``);
    for (const ch of c.changes) {
      lines.push(`- **${ch.field}**: \`${ch.current}\` → **${ch.sourceSays}**`);
      if (ch.quote) lines.push(`  - source: "${ch.quote}"`);
    }
  }
  lines.push('');
}
if (results.flagged.length) {
  lines.push('## Could not verify (left untouched)');
  for (const f of results.flagged) lines.push(`- ${f.title} — ${f.note} \`${f.rel}\``);
  lines.push('');
}
const summary = lines.join('\n');
await fs.writeFile('reverify-summary.md', summary + '\n');
console.log(summary);

// Release the headless browser if the fallback ever launched one; without this
// the process hangs on an open Chromium.
await closeBrowser();
