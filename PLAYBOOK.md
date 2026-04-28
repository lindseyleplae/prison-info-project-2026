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

```yaml
---
title: "Union Correctional Institution"
slug: union
state: fl
system: FDC
summary: "[One-sentence summary]"
aliases:
  - [common nicknames]
city: [City]
county: [County]
address: "[Full address]"
securityLevel: "[Maximum/Medium/etc]"
facilityType: "State Prison"
contact:
  mainPhone: "([area]) [number]"
providers:
  phone: [Provider name]
  video: [Provider name]
visiting:
  days: "[Saturday-Sunday or specific days]"
  hours: "[8:00 AM - 5:00 PM]"
  scheduling: "[How visits are scheduled]"
  contactVisits: true
links:
  official: "[URL]"
  inmateLocator: "[URL]"
lastVerified: 2026-MM-DD
reviewBy: 2026-MM-DD  # Set ~3 months out
---

:::key-info
**Location:** [Brief location description]

**Capacity:** [Approximate, if known]

**Notable:** [Any distinguishing features]

**Visitation:** [Standard schedule + scheduling method]
:::

## Overview
[1-2 paragraphs about the facility's role, history, character]

## Visiting Basics
[Specifics for THIS facility — not general state rules. Link to the state visiting guide for general rules.]

## Directions
[How to get there from the nearest major city]

## Parking and Entry
[Practical visitor logistics]

## Nearby Services
[Gas, food, lodging — frame as factual, not sales-y]

## Learn More
- [Visiting in [State]](/states/[state]/guides/visiting/)
- [Mail and Packages in [State]](/states/[state]/guides/mail/)
- [Phone and Video Calls in [State]](/states/[state]/guides/phone-video/)
- [Transfers in [State]](/states/[state]/guides/transfers/)
```

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
