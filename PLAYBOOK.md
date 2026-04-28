# Playbook: Adding Content to Prison Visitor Guide

This document is for any AI agent (or future Lindsey) adding content to the site. Following it ensures every new state, facility, and guide is consistent with what's already there.

**Owner non-negotiables:**
1. Tone is strictly informational. Like Wikipedia. No emotional language, no advice-giving.
2. Adding content = creating Markdown files. Never touch CSS, layouts, or schemas unless explicitly asked.
3. Always run quality gates before declaring done.

---

## Adding a New State

### Step 1: Research first
Before writing any files, gather facts from official sources (the state's Department of Corrections website is always source #1):

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
lastReviewed: 2026-MM-DD
---
```

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
[Open with a short framing sentence, then a key-info block with the FULL multi-day schedule as a bulleted list.]

:::key-info
**Hours:**
- Friday: 12:00 p.m. - 6:30 p.m.
- Saturday-Sunday: 7:00 a.m. - 2:00 p.m.
- [Other windows if any]

**Scheduling:** [How to book.]

**What to bring:** [Photo ID required, plus any facility-specific items.]

**What's not allowed:** [Standard restrictions, brief.]
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

### Step 5: Run quality gates

```bash
npm run build         # Must pass — schema and syntax errors will surface here
npm run check:links   # Validates every internal link
npm run lint:tone     # Hard-fails on banned phrases
npm run visual-check  # Confirms no visual regressions
```

If build fails on schema validation, the error will tell you exactly which file and which field is wrong. Fix it.

If tone lint hard-fails, look at the flagged file — replace the banned phrase with factual framing.

### Step 6: Don't change anything else

Adding a state should NEVER require:
- Editing layouts or components
- Editing CSS
- Editing the schema
- Editing existing content for other states

If you find yourself needing to do any of those, stop and surface the question. Something is wrong.

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
| `npm run build` | Astro compiles all pages, schema validates every frontmatter field |
| `npm run check:links` | All internal links resolve to existing pages |
| `npm run lint:tone` | No banned phrases in any content file |
| `npm run visual-check` | Screenshots match visual baselines (catches accidental design regressions) |

If all four pass, you're good to ship.
