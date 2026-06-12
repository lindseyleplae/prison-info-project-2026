# Playbook: Adding Content to Prison Visitor Guide

This document is for any AI agent (or future Lindsey) adding content to the site. Following it ensures every new state, facility, and guide is consistent with what's already there.

**Owner non-negotiables:**
1. Tone is strictly informational. Like Wikipedia. No emotional language, no advice-giving.
2. Adding content = creating Markdown files (plus the two sanctioned data entries in Step 5). Never touch CSS, layouts, or schemas unless explicitly asked.
3. Every guide and facility page cites its sources (`sources:` frontmatter — enforced by `check:sources`).
4. Always run quality gates (`npm run validate`) before declaring done.

**Read [DECISIONS.md](DECISIONS.md) before writing content** — it records the judgment calls already made (tone boundaries, when dollar figures are allowed, how sources are cited, design rules). New pages must follow them.

---

## Adding a New State

### Step 1: Research first
Before writing any files, gather facts from official sources (the state's Department of Corrections website is always source #1):

**Build the source map before writing a single page.** Assemble and keep the authoritative sources for the state: the DOC site, the visitation policy (often a PDF), the inmate locator, the phone/commissary vendor, and any regional family-support nonprofit. Content is written *from* that map — every claim should trace back to something on it (see SCALING.md rule 6 and "Accuracy in practice: point to volatile facts").

**If a source doesn't publish a fact, say so — never fill the gap with a guess.** "The [DOC] does not publish per-facility visiting hours online; call the facility to confirm" is the correct output when the official source is silent. This matters most in lower-resource states (e.g. Alabama, Arkansas), where less is published online than in California: the discipline is identical, but the temptation to invent is higher. For facts that change often (rates, hours, vendor names), point to the source for confirmation rather than memorializing a value that will rot.

**State-level data:**
- Official agency name + abbreviation (e.g., "Texas Department of Criminal Justice (TDCJ)")
- Total facility count
- Visiting/offender info hotline numbers
- URLs: main site, facility locator, inmate locator, visiting info portal

**For each guide topic** (visiting, mail, phone-video, money, medical, transfers):
- The specific process in this state (how to apply, what forms, fees, providers)
- What's different from the national guide
- Reality checks — common ways this state's process surprises people

**For each facility you'll add** (start with 3-5 best-known):
- Official name + nicknames
- City, county, full address
- Security level + facility type
- Main phone, visiting office phone if different
- Visiting hours and days
- Phone/video provider for that facility

### Step 2: Create the state config

Path: `src/content/states/[2-letter-code].md`

Example: `src/content/states/fl.md`

The state page renders a "Someone was just sentenced? Start here." sequence card automatically when `links.inmateLocator` is set — always set it (the locator URL must be verified, and its label comes from `system-source-labels.ts`).

```yaml
---
title: Florida
slug: florida
state: fl
abbreviation: FL
system: FDC
systemFullName: "Florida Department of Corrections (FDC)"
summary: "Guides and facility information for FDC (Florida Department of Corrections) prisons."
hotlines:
  visiting status: "[number]"
  inmate information: "[number]"
facilityCount: [number]
lastReviewed: 2026-MM-DD
---

[Brief intro paragraph: agency name, facility count, key hotline. ONE paragraph only — the page auto-generates the guide and facility cards below.]
```

### Step 3: Create the 6 state guides

Each goes in `src/content/state-guides/[state]-[topic].md`. The 6 topics, in order:

1. `[state]-visiting.md` — visitor approval, scheduling, dress code, what to bring
2. `[state]-mail.md` — addressing mail, what's accepted, photo rules, books, packages
3. `[state]-phone-video.md` — provider, rates, video options, tablets, messaging
4. `[state]-money.md` — trust fund deposits, methods, fees, deductions, commissary limits
5. `[state]-medical.md` — sick call, co-pays, mental health, grievances
6. `[state]-transfers.md` — how transfers work, location tracking, visiting list impacts

#### Frontmatter template (all guides)
```yaml
---
title: "[Topic] in [State] ([System])"
slug: [topic]
state: [2-letter]
topic: [topic-slug]
relatedNationalGuide: [national-guide-slug]
system: [System Abbrev]
description: "[One-sentence summary of what's in this guide]"
sources:
  - name: "[Name of the official DOC page — must match what the page calls itself]"
    url: "[verified URL]"
  - name: "[Policy/statute source, e.g. administrative code]"
    url: "[verified URL]"
lastReviewed: 2026-MM-DD
---
```

`sources` is required in practice — the strict sources gate fails any guide without it. Verify every URL responds before citing it; if an official site blocks non-browser requests, cite it by name with no `url` (see DECISIONS.md). `relatedNationalGuide` renders a "see also" pointer to the national guide at the bottom of the page automatically.

#### Content structure (every guide)
1. **Open with `:::key-info{title="Key info"}`** — 3-5 most important facts (hotline, application process, key rates)
2. **First major section** — `## [Topic-specific opening]` (e.g., "Getting Approved" for visiting)
3. **Use `## h2` for major sections** (~5-8 per guide)
4. **Use `:::callout{variant="warning"}`** for critical cautions (e.g., "Bringing a phone is a felony")
5. **Use `:::callout{variant="tip"}`** for practical helpful info
6. **Use `:::reality-check{title="..."}`** for honest descriptions of what actually happens
7. **Use `:::steps`** for multi-step processes (numbered)
8. **End with a verify-before-acting callout** reminding people rules change

#### Tone — what TO write
- "TDCJ does not notify families when an incarcerated person is transferred."
- "The medical co-pay is $13.55 per visit for the first seven visits each fiscal year."
- "Bringing a cell phone into a TDCJ unit is classified as a felony under Texas law."

#### Tone — what NOT to write
- "Unfortunately, TDCJ won't let you know when your loved one is moved."
- "Don't worry about the co-pay if you can't afford it."
- "Be very careful — don't forget your phone!"

### Step 4: Create facility pages

Path: `src/content/facilities/[state]-[slug].md`

Example: `src/content/facilities/fl-union.md`

#### Visual rules — DON'T BREAK THESE
The facility page layout auto-renders a "Quick facts" sidebar from frontmatter. Anything that violates these rules will look broken on the live page:

1. **DO NOT add `## Quick Facts` (or any duplicate Quick Facts heading) in the body content.** The sidebar widget already creates this. A body heading creates an empty section.
2. **Keep `visiting.hours` short and scannable** — it renders as a single line in the sidebar. Use one weekend range like `"8:30 AM - 2:30 PM (Sat-Sun)"`. Multi-day breakdowns ("Friday X-Y; Saturday-Sunday A-B; Monday by appointment") look terrible squished into the sidebar.
3. **Put detailed/multi-day visiting schedules in the body's `## Visiting Basics` section** where there is room for them.
4. **Keep `visiting.days` short** too — `"Friday-Sunday"` not `"Friday-Sunday plus Monday by appointment for selected units"`.
5. **`visitingOffice` (in `contact:`) is the schema field name** — not `visitingPhone`. Always include the area code in parentheses.

#### The unified facility template
Every facility page follows this structure. Sections marked OPTIONAL only appear when there's real, factual content for them — never include an empty section.

**Apply the value test to every paragraph (SCALING.md, "The value test").** A facility page earns its place by carrying what's true *only at this facility* — the drive, the parking, the on-the-ground services, the way this unit's custody mix changes a visit. The make-or-break statewide rules (dress code, ID, item limits, the approval process) **are already on the page automatically**: `<StateVisitingRules>` injects a single-source card (from `src/data/state-visiting-rules.ts`) after the summary on every facility page. Do **not** hand-write those rules into the body — no generic "What to bring" / "What's not allowed" lists, no dress-code enumeration, no ID rules. Spend the body's hand-written words on facility-specific content and link to the state guide for the rest. A focused facility page that adds local knowledge beats a long one padded with statewide boilerplate.

```markdown
---
title: "[Full official name]"
slug: [lowercase-hyphenated]
state: [2-letter]
system: [System Abbrev]
summary: "[One sentence, 15-25 words, factual]"
aliases:
  - [common abbreviations / nicknames]
city: [City]
county: [County]
address: "[Full visitor mailing address]"
securityLevel: "[Level / Mixed (Level X-Y) / Reception Center]"
facilityType: "[State Prison / Reception Center / Women's Prison]"
population: [men / women / men-and-women]  # REQUIRED — drives the men's/women's grouping on state pages
contact:
  mainPhone: "([area]) [number]"
  visitingOffice: "([area]) [number] ext. [if known]"
providers:
  phone: "ViaPath (GTL)"  # CDCR statewide; check for other states
  video: "[Provider]"  # OPTIONAL
visiting:
  days: "[Short string, e.g. 'Friday-Sunday']"
  hours: "[SHORT summary that fits the sidebar, e.g. '8:30 AM - 2:30 PM (Sat-Sun)']"
  scheduling: "[1 sentence]"
  contactVisits: true  # or false
links:
  official: "[Official facility URL]"
  inmateLocator: "[State inmate locator URL]"
sources:
  - name: "[Statewide visitation policy document, e.g. 'TDCJ Inmate Rules and Regulations for Visitation']"
    url: "[verified URL]"
lastVerified: YYYY-MM-DD
reviewBy: YYYY-MM-DD  # ~3 months out
---

[OPTIONAL warning callout — only when there's something critical
the visitor must know first, e.g. CIM is a reception center and
the person may have been transferred. Most facilities don't need this.]
:::callout{variant="warning"}
**Important:** [Single factual paragraph.]
:::

:::key-info
**Location:** [City, county, brief context]

**Capacity:** [Approximate beds, with custody mix if known]

**Notable:** [One factual distinguishing feature]

**Visitation:** [Snapshot — days and primary hours]
:::

## Overview
[1-2 short paragraphs on the facility's role and population.]

## What Makes [Facility] Different  [OPTIONAL]
[Bulleted list of 3-5 factual differentiators. Skip the section
if the facility doesn't have a real distinguishing feature.]

## Visiting Hours and Procedures
[Open with a short framing sentence, then a key-info block with the FULL multi-day schedule as a bulleted list. Include ONLY facility-specific
fields: Hours and Scheduling. Do NOT add "What to bring" or "What's not
allowed" — the auto-injected statewide card already carries ID, items,
dress code, and the approval process.]

:::key-info
**Hours:**
- Friday: 12:00 p.m. - 6:30 p.m.
- Saturday-Sunday: 7:00 a.m. - 2:00 p.m.
- [Other windows if any]

**Scheduling:** [How to book — facility-specific specifics only.]
:::

[1-2 paragraphs of facility-specific visiting context — RHU rules,
walk-in windows, count pauses, non-contact visit rules. End with a
link to the state visiting guide for general statewide rules.]

## Getting There and Parking
[Short opening sentence on the location.]

:::key-info
**From [Major City 1]:** [Highway routing + drive time]

**From [Major City 2]:** [Highway routing + drive time]

**From [Major City 3]:** [Highway routing + drive time]

**Parking:** [Where, free/paid, peak time advice]

**Entry:** [Check-in location, ID requirements]
:::

## Phones, Mail, and Video  [OPTIONAL]
[Only include if there's something facility-specific. Most facilities
use the same statewide providers — skip if there's nothing different.]

## Nearby Services
[1-2 paragraphs on gas, food, lodging in the area. Factual, not
promotional. Note when services are sparse and where to detour.]

## Learn More
For detailed information about visiting and communicating with someone at a [State] state prison:

- [Visiting in [State]](/states/[state]/guides/visiting/) — approval process, dress code, scheduling
- [Mail & Packages](/states/[state]/guides/mail/) — what you can send and what gets rejected
- [Phone & Video Calls](/states/[state]/guides/phone-video/) — accounts, call costs, video visits
- [Sending Money](/states/[state]/guides/money/) — how to add funds to a trust account
- [Medical & Mental Health](/states/[state]/guides/medical/) — healthcare in [State] facilities
- [Transfers](/states/[state]/guides/transfers/) — what happens during transfers
```

#### What NOT to include
- `## Quick Facts` heading in the body — the sidebar widget already shows this
- Hand-coded `## Other [State] Facilities` cross-link sections — the layout doesn't auto-generate these so they go stale
- Filler "Reception Center Operations" / "Facility Visit Information" sections with multiple `:::reality-check` blocks of stilted auto-generated language
- "Tips for Managing X Visits" sections — advice-giving violates tone rules
- Multi-day schedules in the `visiting.hours` frontmatter field — those go in the body's key-info block

**How facility Sources render:** the layout automatically builds the Sources list as official facility page → your frontmatter `sources` → inmate locator, using the labels in `src/data/system-source-labels.ts`. The frontmatter `sources` entry is for the policy document (the statewide visitation rulebook); don't repeat the official page or locator there.

### Step 5: Add the two data entries

These are the only non-content files a new state touches:

1. **`src/data/state-visiting-rules.ts` (required).** Add the state's entry: dress code spelled out, plus one-line ID/items/scheduling summaries, all matching the state visiting guide verbatim in substance. Without this entry, the state's facility pages have no statewide-rules card. Follow the existing TDCJ/CDCR entries.
2. **`src/data/system-source-labels.ts` (recommended).** Add the system's official-directory and inmate-locator page names so facility Sources are labeled precisely ("ADOC Facility Directory") instead of generically ("Official facility page"). The label must match what the linked page actually calls itself.

### Step 6: Run quality gates

```bash
npm run validate      # The full pipeline: type check, tone, build, internal
                      # links, freshness, strict sources, accessibility
npm run visual-check  # Confirms no visual regressions vs baselines
```

If build fails on schema validation, the error will tell you exactly which file and which field is wrong. Fix it.

If tone lint hard-fails, look at the flagged file — replace the banned phrase with factual framing.

If `check:sources` fails, a guide is missing `sources:` frontmatter or a facility has neither `sources` nor `links.official`.

### Step 7: Don't change anything else

Adding a state should NEVER require:
- Editing layouts or components
- Editing CSS
- Editing the schema
- Editing existing content for other states
- Editing the header, footer, or any index page (they read the content collections)

The only sanctioned non-content edits are the two data entries in Step 5. If you find yourself needing anything else, stop and surface the question. Something is wrong.

---

## Adding a New Facility to an Existing State

Same as Step 4 above. Just add the file. The state's overview page auto-discovers it and adds a card.

---

## Updating Existing Content

When policies, fees, or contacts change:

1. Update the affected file(s)
2. Update the `lastReviewed` (for guides) or `lastVerified` (for facilities) date
3. For facilities, also update `reviewBy` to ~3 months out
4. Run quality gates

---

## Deploy

The site auto-deploys to GitHub Pages on every push to `main`. See DEPLOY.md for the pipeline details and how to set up a new contributor.

---

## Quality Gate Cheatsheet

| Command | What it checks |
|---------|---------------|
| `npm run validate` | The full pipeline below (except visual-check and external links), in order |
| `npm run check` | TypeScript/Astro type errors |
| `npm run build` | Astro compiles all pages, schema validates every frontmatter field |
| `npm run check:links` | All internal links resolve to existing pages |
| `npm run lint:tone` | No banned phrases in any content file |
| `npm run check:freshness` | No facility page past its `reviewBy` date |
| `REQUIRE_SOURCES=1 npm run check:sources` | Every guide and facility cites a source |
| `npm run check:a11y` | WCAG 2.1 A/AA (axe) passes on one page per layout |
| `npm run check:external-links` | Outbound DOC/source links still respond (run before adding states; also runs weekly in CI) |
| `npm run visual-check` | Screenshots match visual baselines (catches accidental design regressions) |

If `npm run validate` and `npm run visual-check` pass, you're good to ship. Deploy CI re-runs the push-sensitive gates; a weekly scheduled workflow re-runs freshness and external links.
