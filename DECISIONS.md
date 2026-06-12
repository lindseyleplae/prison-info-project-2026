# Decisions: Judgment Calls Already Made

This file records the design and content judgment calls that have already been decided, so nobody re-litigates them — and so an AI agent building new pages produces the same site, not a plausible variation of it. SCALING.md covers *process* discipline; this file covers *what the site has decided to be*.

If a new situation genuinely doesn't fit one of these decisions, surface it to Lindsey — don't quietly decide differently.

---

## Content decisions

### Second person is allowed for procedure, never for feelings or advice
The site uses "you" freely when walking through a process ("You'll provide your ID", "Mail it in and wait"). What's banned is second-person *emotional or advisory* framing ("you should", "don't worry", "you may feel"). The litmus: an imperative inside a `:::steps` block describing a procedure is fine; an imperative telling the reader how to live ("Have a backup plan", "Check with local organizations") is not — recast as a third-person fact.

### Verify language is layout-injected; authors don't hand-write it
Every facility page automatically gets "confirm before relying on it" language three times: the site-wide disclaimer bar, the statewide-rules card, and the Sources block intro. Facility authors do not add their own generic "call to verify" boilerplate. State guides are the one place a hand-written closing **"Verify Before Acting"** warning callout is part of the template — every state guide ends with one, naming the state-specific things to confirm (hotline, portal, vendor).

### Dollar figures appear only when attributed and dated
A specific number (rate, fee, limit) appears on a page only if it is published by an official source and the page says so ("TDCJ lists calls at $0.06 per minute", "CDCR's maximum monthly canteen draw is $300 (CCR Title 15 §3090(b))"). Generic "typical cost" tables with invented ranges are banned — they were removed from the national guides in June 2026 because they rot and mislead. When no official figure exists, describe the *cost structure* ("a flat fee, sometimes plus a percentage") and point to where the current number lives (the provider's fee schedule, the state guide).

### National guides describe patterns; state guides carry the numbers
National guides explain how systems generally work and explicitly defer specifics: "the state guides on this site carry sourced rates where the corrections department publishes them." They cite national-level sources (BOP, FCC, Prison Policy Initiative, ACLU). State guides cite the state's DOC and statutes and carry the actual figures.

### Never link to a specific state from national content
National guide prose links to `/states/` (the hub), never to an individual state page. A hand-listed "[California] (more states coming soon)" line went stale the day Texas shipped. The hub link never goes stale.

### Cite by name only when a URL can't be verified
If an official source's website blocks verification (fcc.gov, vsa.cdcr.ca.gov reject non-browser requests), cite the source by name without a URL rather than attach a link nobody confirmed. The Sources component renders name-only entries fine. Never attach an unverified URL, and never label a link with a name that doesn't match the actual page.

### Facility pages spend words only on what's true at that facility
Statewide rules (dress code, ID, items, approval) render automatically from `src/data/state-visiting-rules.ts` via the `<StateVisitingRules>` card. The hand-written body carries the local knowledge: the drive, the parking, the named hospital, how this unit's custody mix changes a visit. The unified template's section set (Overview / What Makes X Different / Visiting Hours and Procedures / Getting There and Parking / Phones, Mail, and Video / Nearby Services / Learn More) is the structure for every facility page — content can lead with the reader's journey, but headings keep the template's names and title case.

### No notoriety content — a fact earns its place by affecting a visit
Facility pages never mention celebrity or high-profile inmates, infamous crimes, or "famous for" trivia, even when widely reported. This is a serious reference for families, not a curiosity site (decided June 2026: the Menendez brothers were deliberately left off the R.J. Donovan page). The test for any facility fact: does it change a visit or the family's planning? Officially published operational facts pass that test even when sensitive — e.g., a unit's partial air-conditioning status from TDCJ's own project page stays in, sourced and dated.

### "What the source doesn't publish" is content, not a gap
When an official source is silent ("ADOC does not publish per-unit visiting hours online"), the page says so plainly and tells the reader to call. Stating the boundary of what's known is part of the site's credibility. Never fill the silence with a guess — this matters most in low-resource states.

### State pages group facilities by who they house
Once a state lists six or more facilities, its page splits them under "Women's facilities" and "Men's facilities" headings (decided June 2026, Lindsey's call): the one fact every visiting family knows instantly is whether their person is a man or a woman, and the split cuts a 20-item wall down to the relevant handful. Every facility carries a required `population` field (`men` / `women` / `men-and-women`); a facility housing both appears in both groups. States under six facilities keep a single flat list. If lists outgrow this (e.g., Texas men's at 40+), the next split is by region/cluster — not yet built.

### Facility sources render in a fixed order
Official facility page → policy source(s) from frontmatter → inmate locator. The labels for the official page and locator come from `src/data/system-source-labels.ts`, keyed by system, with accurate generic fallbacks. The label must match what the linked page calls itself.

---

## Design decisions

### Navigation is built for 50 states, not 2
- The header "States" item is a plain link to `/states/` — no dropdown. (The National Guides dropdown stays: five stable items.)
- The footer has a three-link **Browse** group (All states / Find a facility / Search), never a per-state list.
- State cards on the homepage and `/states/` flow in a responsive `card-grid` (auto-fill columns at ≥48rem).
- Nothing anywhere enumerates states by hand. Header, footer, and index pages read the `states` collection; content links point to the `/states/` hub.

### Adding a state = content files + two data entries, nothing else
The two sanctioned non-content touches when adding a state: a `StateVisitingRules` entry in `src/data/state-visiting-rules.ts` (the statewide card) and, optionally, a `systemSourceLabels` entry in `src/data/system-source-labels.ts` (nicer source labels). Layouts, components, CSS, and schemas stay untouched. If a new state seems to require more than this, something is wrong — stop and surface it.

### All color goes through tokens, and AA contrast is enforced
Every color is a custom property in `src/styles/tokens.css`. `npm run check:a11y` runs axe (WCAG 2.1 A/AA) against one page per layout and fails the build pipeline on violations. Two contrast rules already encoded in tokens: `--color-text-muted` is the *darkest* muted that passes 4.5:1 on the paper backgrounds, and the dark footer uses its own light-on-dark secondary (`--color-footer-text-secondary`) because the light-background text tokens fail on it.

### Whole cards are links
Any card with a hover style is fully clickable — the card itself is an `<a>` (`.section-card`) or uses the overlay pattern with `z-index: 1` (`.facility-card`). A "looks clickable but isn't" element is worse than no hover style.

### Pages that aren't for readers are noindex and out of the sitemap
`/showcase/` (the internal style guide) and the 404 page carry `noindex`; showcase is filtered out of the sitemap. Reader-facing pages are all indexed.

### Mobile interactive state comes from JS, not focus pseudo-classes
Hover/focus dropdown CSS is scoped to `@media (min-width: 64rem)`. Mobile menus toggle via `data-` attributes set by the header script. (See SCALING.md "CSS traps" for the failure this prevents.)

### Form fields always get a label
Search inputs and selects use a visually hidden `<label class="sr-only">` when the design has no visible label. Placeholder text is not a label.

---

## Process decisions

### Gates run in three places, by failure type
- **`npm run validate`** (local, before declaring work done): type check, tone, build, internal links, freshness, strict sources, accessibility.
- **Deploy CI** (on every push to `main`): everything a push can break — type check, tone, build, internal links, strict sources, accessibility. A red deploy means the push introduced the problem.
- **Weekly scheduled audit** (`content-audit.yml`): freshness and external links — things that fail because *time passed*, not because of a push. They alert without blocking an unrelated deploy.

### Visual baselines change only with sign-off
`npm run visual-check` compares against committed baselines. Refreshing baselines is the acceptance step for an intentional visual change — it happens deliberately, with Lindsey aware, never as a side effect of making a red check green.

### Guides bump `lastReviewed` when content changes; facilities bump `lastVerified` + `reviewBy`
Any material edit to a page's facts updates its date. `reviewBy` is ~3 months out. A page past `reviewBy` is treated as unverified until re-checked (the weekly audit flags it).
