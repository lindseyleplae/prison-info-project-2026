// External-link validation — confirms the official/locator/source URLs we send
// readers to are still alive.
//
// WHY THIS IS SEPARATE FROM check:links
// check-links.mjs validates INTERNAL links offline against the built site and
// runs in the gate. This script hits the live internet, so it is intentionally
// NOT in `npm run validate`: government sites rate-limit, block bots, and have
// transient outages, none of which should break a deploy. Run it on demand
// (e.g. during a content review) to catch links that have genuinely died.
//
// URLs are collected from frontmatter: every value under `links:` and every
// `sources[].url`. A confirmed-dead link (404/410) fails the run; anything else
// non-OK (403 bot-block, 429, 5xx, timeout) is reported as a warning only.

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parse as parseYaml } from 'yaml';

const CONTENT_ROOT = path.resolve('src/content');
const CONCURRENCY = 6;
const TIMEOUT_MS = 15_000;
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36';

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      return entry.isFile() && fullPath.endsWith('.md') ? [fullPath] : [];
    })
  );
  return files.flat();
}

function extractFrontmatter(raw) {
  if (!raw.startsWith('---')) return null;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return null;
  try {
    return parseYaml(raw.slice(3, end)) ?? {};
  } catch {
    return null;
  }
}

function collectUrls(data, rel, urlMap) {
  const add = (url) => {
    if (typeof url !== 'string' || !/^https?:\/\//i.test(url)) return;
    if (!urlMap.has(url)) urlMap.set(url, new Set());
    urlMap.get(url).add(rel);
  };

  if (data.links && typeof data.links === 'object') {
    for (const value of Object.values(data.links)) add(value);
  }
  if (Array.isArray(data.sources)) {
    for (const source of data.sources) add(source?.url);
  }
}

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': USER_AGENT, accept: 'text/html,*/*' }
    });
    return { url, status: response.status, ok: response.ok };
  } catch (error) {
    return { url, status: 0, ok: false, error: error?.name === 'AbortError' ? 'timeout' : String(error?.message ?? error) };
  } finally {
    clearTimeout(timer);
  }
}

async function runPool(urls, worker) {
  const results = [];
  let index = 0;
  const runners = Array.from({ length: Math.min(CONCURRENCY, urls.length) }, async () => {
    while (index < urls.length) {
      const current = urls[index++];
      results.push(await worker(current));
    }
  });
  await Promise.all(runners);
  return results;
}

const files = await walk(CONTENT_ROOT);
const urlMap = new Map();

for (const file of files) {
  const data = extractFrontmatter(await fs.readFile(file, 'utf8'));
  if (!data) continue;
  collectUrls(data, path.relative(process.cwd(), file), urlMap);
}

const urls = [...urlMap.keys()].sort();
console.log(`Checking ${urls.length} unique external URL(s) from frontmatter...\n`);

const results = await runPool(urls, check);
results.sort((a, b) => a.url.localeCompare(b.url));

const dead = [];
const warnings = [];

for (const result of results) {
  const refs = [...(urlMap.get(result.url) ?? [])];
  if (result.ok) {
    console.log(`  ok   ${result.status}  ${result.url}`);
  } else if (result.status === 404 || result.status === 410) {
    dead.push({ ...result, refs });
    console.log(`  DEAD ${result.status}  ${result.url}`);
  } else {
    warnings.push({ ...result, refs });
    console.log(`  warn ${result.status || result.error}  ${result.url}`);
  }
}

if (warnings.length > 0) {
  console.log('\nWarnings (could not confirm OK — may be bot-blocking or transient):');
  for (const w of warnings) {
    console.log(`- [${w.status || w.error}] ${w.url}\n    referenced by: ${w.refs.join(', ')}`);
  }
}

if (dead.length > 0) {
  console.error('\nDead links (404/410) — update or remove:');
  for (const d of dead) {
    console.error(`- ${d.url}\n    referenced by: ${d.refs.join(', ')}`);
  }
  process.exit(1);
}

console.log('\nExternal-link check: no confirmed-dead links.');
