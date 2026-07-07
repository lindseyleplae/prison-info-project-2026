# Automated page re-verification

Every facility page promises to be re-checked by a `reviewBy` date. With ~850
pages (plus their Spanish twins) that can't be done by hand. This system does the
routine part automatically, once a week, in the cloud — no one has to kick it off.

## What it does, in plain terms

Every Monday it takes the pages that are due, and for each one it re-reads the
prison's **official source** and compares it to what the site says. Then:

- **Still matches** → it refreshes the review date. (Most pages, every week.)
- **Something changed at the source** → it does **not** guess-edit the page. It
  writes down exactly what changed (old value → new value, with a quote from the
  source) so the change can be made carefully, in both English and Spanish.
- **Couldn't read the source** (site down, or blocks automated reading) → it
  leaves the page alone and lists it. It never fakes a "verified" stamp.

You get a short summary after each run. If anything needs a real edit, it opens a
GitHub issue (which emails you), so the only thing that ever reaches you is the
handful of pages that genuinely changed — and you can hand those to Claude.

## The one thing you need to do (once, ~2 minutes)

The system needs an Anthropic API key to do the reading. Claude can't create or
paste a key for you (that's a security rule), so this one step is yours:

1. Go to **https://console.anthropic.com** → **API Keys** → **Create Key**. Copy it.
2. In GitHub, open this repo → **Settings** → **Secrets and variables** →
   **Actions** → **New repository secret**.
3. Name it exactly `ANTHROPIC_API_KEY`, paste the key in the value box, **Add secret**.

That's it. Nothing else to install.

## Turning it on (start safe, then go hands-off)

By default the weekly run is **report-only** — it reads sources and posts a
summary but changes nothing. This lets us watch the first run or two and confirm
it's making good calls.

When you're ready for it to refresh dates on its own, add one repository
**variable** (Settings → Secrets and variables → Actions → **Variables** tab →
New variable):

- Name: `REVERIFY_APPLY`  Value: `true`

From then on it's fully hands-off: it refreshes the confirmed pages, runs every
quality check, and only publishes if they all pass. To pause it, set that
variable back to `false` (or delete it).

You can also run it any time by hand: repo → **Actions** → **Weekly
re-verification** → **Run workflow** (there's a checkbox there to apply changes
for that one run).

## Cost

The weekly run itself is free (public repo). Only the AI reading costs money —
roughly a few dozen page-reads a week with a low-cost model, likely in the low
tens of dollars a month. It's tunable (the model and how many pages per run are
both settings). The first real run will give an exact number.

## Safety model (why this won't put a wrong fact in front of a family)

- The **only** thing written automatically is a date refresh on a page whose
  source still confirms its facts. Fact edits are never automated, because the
  facts are woven through each page's text and a blind patch would leave the page
  contradicting itself.
- Silence in a source is never treated as a change. A page is only confirmed when
  the source positively supports it; otherwise it's flagged, not stamped.
- Nothing is committed unless the full quality-gate suite (types, tone, build,
  links, freshness, sources) passes first.
- Everything is a normal git commit, so any change is visible and reversible.

---

## Maintainer notes

- **Script:** `scripts/reverify.mjs`. Run locally:
  `node scripts/reverify.mjs --state=or --limit=3 --due-within=400 --stub`
  (`--stub` skips the model and needs no key; drop it and set `ANTHROPIC_API_KEY`
  for a real dry-run; add `--apply` to write date bumps).
- **Workflow:** `.github/workflows/reverify.yml` (Mondays 08:00 UTC + manual).
- **What it checks per page:** operating status + address, phone, mailing
  address, visiting days/hours, scheduling, and comms providers, against
  `links.official` and any `sources[]` entry whose name matches `visit`.
- **Confirm → bump:** `lastVerified`/`reviewBy` on the English page and its ES
  twin (+ the twin's `sourceReviewed`); interval = `REVERIFY_INTERVAL_DAYS`
  (default 90).
- **Known fetch gaps:** a few DOC sites are JS-rendered or bot-hardened (Florida
  is the notable one) and can't be read by a plain fetch — those pages flag as
  "could not verify." A headless-browser fallback (Playwright is already a dep)
  is the natural next step to close that gap.
- **Scope:** facilities only for now. State/national guides cite multiple sources
  and are better re-checked with judgment; they're not in the automated pass yet.
- **Settings:** repo variable `REVERIFY_APPLY` (arm), `REVERIFY_MODEL` (override
  the model); secret `ANTHROPIC_API_KEY`.
