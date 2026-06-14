# Prison Visitor Guide — Project Instructions

## What This Is
A national reference website (prisonvisitorguide.org) for families of incarcerated people. Factual, organized information about prison visiting procedures, communication, costs, and rights — state by state, facility by facility.

## The #1 Rule: Tone
**Strictly informational. Like Wikipedia.** No emotional language, no advice-giving, no therapy speak, no condescension, no overuse of "loved one." This is non-negotiable. See `scripts/lint-tone.mjs` for the enforced banned phrase list.

## Before Bulk Content Work
**Read [SCALING.md](SCALING.md) at the start of any session that creates or modifies more than one content file.** It is the project's institutional memory — every rule in it exists because someone broke it and Lindsey caught it. Skipping it means repeating prior mistakes.

## Owner
Lindsey Leplae. Non-technical — communicates in vibes and goals, not specs. Don't show her code unless she asks. Translate her intent; don't ask her to be more precise.

## Multi-Agent Setup
- **Claude Code** (this agent) — Orchestrator. Owns vision, judgment, quality gate.
- **Codex** — Builder. Writes most code via terminal CLI.
- **Gemini** — Designer/tiebreaker.

### How to Call Them
```bash
# Codex
eval "$(/opt/homebrew/bin/brew shellenv)"
cat prompt.md | codex exec --json -s danger-full-access -C /Users/lindseyleplae/Documents/GitHub/prison-info-project-2026 -o output.md -

# Gemini
eval "$(/opt/homebrew/bin/brew shellenv)"
cat prompt.md | gemini -p "Your instructions here"
```

## Technical Architecture
- **Framework:** Astro 6 (static mode, zero client JS by default)
- **Content:** Markdown + YAML frontmatter in Astro content collections
- **Styling:** Vanilla CSS with custom properties
- **Search:** Pagefind (full-text) + pre-built JSON (facility finder)
- **Hosting:** GitHub Pages via GitHub Actions
- **Visual regression:** Playwright screenshots compared against baselines

## Key Files
| File | Purpose |
|------|---------|
| SPEC.md | Master blueprint — architecture, content model, decisions |
| SCALING.md | Discipline + process + traps for bulk content work — READ FIRST |
| DECISIONS.md | Judgment calls already made (content + design) — follow, don't re-decide |
| ROADMAP.md | 50-state coverage tracker — update whenever a state's status changes |
| TASKS.md | Active task tracking |
| PLAYBOOK.md | How to add a new state or facility (step-by-step) |
| src/content.config.ts | Zod schemas — strict validation of every content field |
| src/content/ | All site content (Markdown + frontmatter) |
| src/data/state-visiting-rules.ts | Statewide rules card, one entry per state (required for new states) |
| src/data/system-source-labels.ts | Source-label names per corrections system |
| src/styles/tokens.css | Design tokens (Grounded Guide theme) |
| src/pages/showcase.astro | Living style guide — every component on one page |
| scripts/lint-tone.mjs | Tone validation — catches banned phrases |
| scripts/check-links.mjs | Internal link validation |
| scripts/check-freshness.mjs | Fails on pages past their reviewBy date |
| scripts/check-sources.mjs | Fails on guides/facilities without sources |
| scripts/check-a11y.mjs | WCAG 2.1 A/AA (axe) on one page per layout |
| scripts/check-external-links.mjs | Outbound source links still respond |
| scripts/visual-check.mjs | Screenshot comparison vs baselines |

## Content Types
- **National Guide** — broad topic (e.g., "Visiting Basics")
- **State Overview** — landing page per state (auto-shows state guides + facility cards)
- **State Guide** — state-specific version of a topic
- **Facility Page** — individual prison/facility info
- **Tool** — printable quick reference
- **Static Page** — about, privacy, terms

## Design Theme: Grounded Guide
- Primary: `#3D405B` (slate blue-grey)
- Background: `#FAF9F3` (soft ecru — deliberately less yellow, June 2026)
- Card: `#FDFCF8` (slightly brighter ecru)
- Text: `#2D2F42` (deep slate)
- Body font: Inter / system sans-serif
- Heading font: Inter / system sans-serif

## Critical Rules
1. All content tone must be strictly informational (run `npm run lint:tone`)
2. Every fact is sourced or attributed — never invented. Every guide and facility page cites `sources:` (enforced by `check:sources`). When in doubt, leave it out.
3. All styling goes through CSS custom properties — never hardcoded color values
4. Adding a state or facility = content files plus the two data entries in PLAYBOOK Step 5 (`state-visiting-rules.ts`, `system-source-labels.ts`), nothing else
5. Verify-before-relying language is layout-injected on every facility page; state guides end with a "Verify Before Acting" callout
6. No live status claims — reference info only, never real-time data
7. Mobile-first — majority of users are on phones, often with bad signal
8. WCAG 2.1 AA minimum accessibility (enforced by `npm run check:a11y`)
9. Judgment calls already made live in DECISIONS.md — follow them, don't re-decide them

## Quality Gates (run before any deploy)
```bash
npm run validate      # Full pipeline: type check, tone, build, internal links,
                      # freshness, strict sources, accessibility
npm run visual-check  # Screenshots key pages, compares vs baselines
```
Deploy CI re-runs the push-sensitive gates on every push to main; a weekly
scheduled workflow (content-audit.yml) re-runs freshness + external links.

## Current Scope
- California (CDCR): 6 state guides + 31 facility pages — all 31 open CDCR adult institutions
- Texas (TDCJ): 6 state guides + 22 facility pages
- Utah (UDC): 6 state guides + 2 facility pages
- Wyoming (WDOC): 6 state guides + 5 facility pages
- Delaware (DDOC): 6 state guides + 4 facility pages
- Rhode Island (RIDOC): 6 state guides + 6 facility pages
- Vermont (VTDOC): 6 state guides + 6 facility pages
- New Hampshire (NHDOC): 6 state guides + 3 facility pages
- Mississippi (MDOC): 6 state guides + 9 facility pages — all 6 MDOC state institutions (Parchman, CMCF, SMCI, Marshall County, Walnut Grove, Delta) + both private prisons that hold MS inmates (East Mississippi, Wilkinson County, both MTC) + Tallahatchie (CoreCivic, out-of-state men); the ~15 county regional facilities and the community/restitution centers are a separate jail/community tier, noted in the overview but not individually covered (like LA parish jails)
- Louisiana (DPS&C): 6 state guides + 8 facility pages — all eight DPS&C state prisons (parish jails out of scope)
- Maine (Maine DOC): 6 state guides + 6 facility pages — completes northern New England (ME/NH/VT)
- Virginia (VADOC): 6 state guides + 25 facility pages — all 25 VADOC "major institutions" (incl. Greensville [men's reception + former execution chamber], Fluvanna [women's intake] + VCCW [women], Red Onion + Wallens Ridge [Level 5 supermax], Sussex I [former death row], Marion [mental-health treatment], Lawrenceville [state-run since Aug 2024 — Virginia's last private prison ended], the new builds Beaumont/Indian Creek [SUD treatment]/St. Brides [reentry], and the far-southwest coalfield prisons). VADOC's separate tier — work centers, field units, CCAP diversion centers, secure hospital units, and probation/parole districts — is noted in the overview but not individually paged. Virginia abolished the death penalty in 2021 (no death row) and parole in 1995. Comms: ViaPath (phones, video, scheduler), JPay money; mail is photocopied in-house (no off-site vendor), legal mail to the Central Mail Distribution Center in State Farm; visits by online application to the Central Visitation Unit + ViaPath reservation
- New Jersey (NJDOC): 6 state guides + 9 facility pages — completes the system (all nine adult state prisons)
- Oregon (ODOC): 6 state guides + 12 facility pages — all twelve ODOC prisons
- Colorado (CDOC): 6 state guides + 20 facility pages — all 18 state-operated adult prisons (the East Cañon Complex near Cañon City: Colorado State Penitentiary, Centennial, Colorado Territorial [oldest, 1871], Fremont, Arrowhead, Four Mile, Skyline; plus Sterling [largest], Limon, Arkansas Valley, Buena Vista, Trinidad [physically in Model], Delta, Rifle; the Denver intake center DRDC; and the Pueblo campus — La Vista [women] and San Carlos [Level V residential mental-health, men and women]) + Denver Women's, plus both CoreCivic private prisons that hold CDOC men (Bent County, Crowley County). The Youthful Offender System, community corrections, boot camp/CCAP sub-units, and closed facilities (Kit Carson, Fort Lyon) are noted in the overview but not paged. Colorado abolished the death penalty in 2020 (no death row). Comms via Securus; most facilities photocopy incoming personal mail on-site (no off-site scanning vendor)
- Michigan (Michigan DOC): 6 state guides + 26 facility pages — all 26 currently-open MDOC prisons. Upper Peninsula: Marquette, Alger, Baraga (Level V max), Chippewa, Kinross, Newberry. Lower Peninsula: Oaks, Earnest C. Brooks, Muskegon, Lakeland, the Ionia cluster (Bellamy Creek, Ionia [I-Max, Level V], Handlon), Carson City, Central Michigan + St. Louis (both in St. Louis), Saginaw, Thumb, Macomb, Gus Harrison, the Jackson cluster (Egeler [men's reception], G. Robert Cotton, Cooper Street, Parnall), Woodland Center (inpatient psychiatric), and Women's Huron Valley (the only women's prison + women's reception). Closed prisons (Michigan Reformatory, Ojibway, etc.), county jails, federal facilities, and the Detroit Detention Center (now Detroit PD) are out of scope. No death penalty (constitutional ban). Comms: ViaPath phones, JPay tablets/email/money; mail photocopied on-site in black and white (no off-site vendor); all visits by ViaPath appointment
- Connecticut (Connecticut DOC): 6 state guides + 13 facility pages — all 13 adult facilities (unified jail/prison system)
- Alabama (ADOC): 6 state guides + 14 facility pages — all 14 ADOC major correctional facilities (Holman [primary male death row + the state's only execution chamber], Donaldson [secondary death-row housing], St. Clair [maximum security], Limestone [largest], Kilby [statewide men's reception/classification center], Bibb, Bullock [mental-health mission], Easterling, Ventress [substance-abuse mission], Fountain, Staton, Elmore, Hamilton Aged & Infirmed Center, and Tutwiler [women's prison + statewide women's reception + female death row]); the ~12 community/work-release centers, the private Alabama Therapeutic Education Facility, and the two not-yet-open new megaprisons (Elmore County's Governor Kay Ivey Correctional Complex and the planned Escambia County prison) are noted in the overview but not individually paged. Statewide changes: ICSolutions handles all communications (Aug 2025); personal mail is digital via an off-site San Antonio scanning center (Oct 2025), with legal mail still to the facility
- Arkansas (ADC): 6 state guides + 18 facility pages — all major ADC units (Cummins, McPherson, Ouachita River, Varner/Supermax, Tucker, Larry B. Norris, East Arkansas Regional, Grimes, Benny Magness, Wrightsville, Hawkins women's center, Delta Regional, the 3 Pine Bluff Complex units, Benton, Texarkana, White River); small work-release/community-correction centers and the brand-new Parker-Reed Women's Health Unit (no published visiting info) are noted in the overview but not individually paged
- West Virginia (WV DCR): 6 state guides + 8 facility pages — all eight WV DCR state prisons (Mount Olive, Lakin, Huttonsville, Saint Marys, Salem, Denmar, Pruntytown, Stevens); unified prison/regional-jail system
- Nebraska (NDCS): 6 state guides + 8 facility pages — all eight current NDCS facilities (Nebraska State Penitentiary, Tecumseh, Nebraska Correctional Center for Women, Reception and Treatment Center, Omaha Correctional Center, Nebraska Correctional Youth Facility, and the Lincoln and Omaha community corrections centers); heavily overcrowded system, off-site mail scanning (TextBehind), two independent oversight offices. The Work Ethic Camp (McCook) left the state system in late 2025 (converted to federal ICE detention), so NDCS now runs eight facilities, not nine.
- Georgia (GDC): 6 state guides + 8 facility pages (launch) — GDC runs ~34 state prisons + 4 private prisons (CoreCivic/GEO). First batch: the men's diagnostic prison (GDCP, Jackson — men's death row + the state execution chamber), all five women's prisons (Lee Arrendale [women's diagnostic + women's death row + the only all-female inmate fire station], Pulaski, Whitworth, Emanuel, McRae [former federal CoreCivic prison, state-run women's prison since Jan 2025]), the statewide medical hub (Augusta State Medical), and Metro Reentry (Atlanta). The ~26 remaining men's close/medium state prisons + 4 private prisons are still to build. County correctional institutions, transitional centers, and probation detention centers are a separate tier noted in the overview, not paged. Georgia has an active death penalty (death row + execution chamber at GDCP; women under death sentence at Lee Arrendale). Comms: Securus phones, JPay money; incoming mail currently goes to the facility (an off-site centralization RFP is pending), books publisher/retailer-only; visiting by online application + appointment via GDC's portal
- Ohio (ODRC): 6 state guides + 8 facility pages (launch) — ODRC runs ~28 institutions (two privately operated: Lake Erie [CoreCivic], North Central [MTC]) plus a third private prison (Northeast Ohio Correctional Center) holding some Ohio inmates with federal detainees. First batch: both men's reception centers (Correctional Reception Center, Orient [most of Ohio]; Lorain, Grafton [Stark/Summit/Cuyahoga counties]), the women's spine (Ohio Reformatory for Women [women's reception + women's death row + oldest, 1916], Dayton), Ross [current men's death row, relocated from Chillicothe CI in 2024], Southern Ohio/SOCF [Lucasville — the state execution chamber], Ohio State Penitentiary [supermax/Level E], and Franklin Medical Center [statewide medical hospital, men and women]. The ~20 remaining state prisons + private prisons are still to build; county jails, community-based correctional facilities (CBCFs), and transitional centers are a separate tier noted in the overview, not paged. Ohio keeps the death penalty but has not executed anyone since 2018 (governor's pause). Comms: ViaPath (phones, tablets, video; ConnectNetwork money); incoming personal mail goes to the off-site ODRC Mail Processing Center in Youngstown (scanned to tablets), with legal mail/publications/packages to the facility; visiting by approved-list application + ViaPath reservation. Independent oversight is CFIS in the Ohio Attorney General's office (replaced the CIIC in 2025)
- 5 national guides
- 449 pages live

## Email
prisonvisitorguide@gmail.com (all mailto: links)

## Adding New Content
See PLAYBOOK.md for the step-by-step process.
