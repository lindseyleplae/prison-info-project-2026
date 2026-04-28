# Prison Visitor Guide — Rebuild Specification

**Last updated:** 2026-03-29
**Status:** Active — Phase 1 in progress

This is the master blueprint for the site rebuild. All agents (Claude Code, Codex, Gemini) reference this document. If something isn't in here, it hasn't been decided yet.

---

## 1. What This Is

A national reference website for families of incarcerated people. Factual, organized, comprehensive information about visiting procedures, communication options, costs, and rights — state by state, facility by facility.

**Domain:** prisonvisitorguide.org
**Email:** prisonvisitorguide@gmail.com

## 2. The #1 Rule: Tone

**Strictly informational. Like Wikipedia.**

- No emotional language ("this is hard," "give yourself grace," "you're not alone")
- No advice-giving ("we recommend," "you should consider")
- No therapy speak ("it's okay to feel," "take care of yourself")
- No condescension ("don't worry," "it may seem overwhelming")
- No overuse of "loved one" — vary: "the incarcerated person," "the person you're visiting," "they/them"
- State facts. Describe processes. Let the reader draw their own conclusions.

This tone is non-negotiable. It is the foundation of the site's credibility with an audience that has been patronized by every other resource.

## 3. Who Uses This

- **Primary:** Family members (often mothers, wives, girlfriends) of incarcerated people
- **Context:** Stressed, navigating bureaucracy, often on mobile phones, sometimes limited tech literacy
- **Need:** Clear answers fast. "My person is at San Quentin. What do I need to know?"
- **Don't need:** Sympathy, emotional support, or being talked down to

## 4. Technical Architecture

### Stack
- **Framework:** Astro (static mode, zero client JS by default)
- **Content:** Markdown with YAML frontmatter, organized in Astro content collections
- **Styling:** Vanilla CSS with custom properties (tokens), split into logical files
- **JavaScript:** Only where needed — facility search/filter, mobile nav, print helpers
- **Search:** Pagefind for full-text; pre-built JSON index for structured facility finder
- **Hosting:** GitHub Pages via GitHub Actions
- **No:** CMS, Tailwind, MDX, heavy frameworks, databases, servers

### Why Astro
- Zero JS shipped by default (critical for slow mobile connections near prisons)
- Content collections with Zod schema validation (catches errors before deploy)
- Component/layout reuse (no more duplicated headers/footers)
- First-class static output for GitHub Pages
- Adding a page = adding a file, nothing else

### Content Types
| Type | What | Example |
|------|------|---------|
| National Guide | Broad topic, applies everywhere | "Visiting Basics," "Sending Money" |
| State Overview | Landing page for a state | "California," "Texas" |
| State Guide | State-specific version of a topic | "Visiting in California (CDCR)" |
| Facility Page | Individual prison/facility info | "San Quentin," "CIM Chino" |
| Tool | Printable quick reference | "First Visit Checklist," "Phone Numbers" |
| Static Page | About, privacy, terms | — |

### Content Model: Facility Page (frontmatter)
```yaml
title: San Quentin State Prison
slug: san-quentin
state: ca
system: CDCR
aliases: [SQ, San Quentin]
city: San Quentin
county: Marin
address: "1 Main Street, San Quentin, CA 94964"
securityLevel: Level II
contact:
  mainPhone: "415-454-1460"
  visitingOffice: "415-454-1460 ext 5678"
  emergencyHotline: "1-800-374-8474"
providers:
  phone: ViaPath (GTL)
  video: GettingOut
  money: ConnectNetwork
visiting:
  days: "Saturday-Sunday"
  hours: "9:00 AM - 3:00 PM"
  scheduling: VSA (online)
  contactVisits: true
links:
  official: "https://www.cdcr.ca.gov/facility-locator/sq/"
  inmateLocator: "https://inmatelocator.cdcr.ca.gov"
  directions: "https://maps.google.com/..."
summary: "Level II state prison in Marin County. One of California's oldest and most well-known facilities."
lastVerified: 2026-03-29
reviewBy: 2026-06-29
```
(Markdown body follows for detailed visiting notes, directions, parking, nearby services, tips)

### Content Model: State Guide (frontmatter)
```yaml
title: Visiting in California
slug: visiting
state: ca
topic: visiting
relatedNationalGuide: visiting-basics
system: CDCR
order: 1
sources:
  - name: CDCR Visiting Regulations
    url: "https://www.cdcr.ca.gov/visitors/"
  - name: Title 15, California Code of Regulations
lastReviewed: 2026-03-29
```

### Content Model: State Config (data file)
```yaml
# src/content/states/ca.md frontmatter
name: California
abbreviation: CA
system: CDCR
systemFullName: California Department of Corrections and Rehabilitation
terminology:
  facility: institution
  inmate: incarcerated person
  locator: Inmate Locator
hotlines:
  visitingStatus: "1-800-374-8474"
  ombudsman: "1-877-317-0055"
links:
  main: "https://www.cdcr.ca.gov"
  facilityLocator: "https://www.cdcr.ca.gov/facility-locator/"
  inmateLocator: "https://inmatelocator.cdcr.ca.gov"
  visitingInfo: "https://www.cdcr.ca.gov/visitors/"
facilityCount: 32
```

### Cross-Cutting Automation
Adding a new state = adding content files. Nothing else changes.
- Navigation auto-generates from states collection
- Breadcrumbs auto-generate from route params
- Sitemaps auto-generate from built routes
- Related links computed from topic/state relationships
- Footer, header, disclaimer — all shared components

## 5. Design System: Grounded Guide

The design theme is "Grounded Guide" — slate blue-grey on warm aged paper. Feels like a quality reference textbook: warm, institutional, trustworthy without being flashy.

### Palette (current — see `src/styles/tokens.css` for source of truth)
| Token | Value | Use |
|-------|-------|-----|
| --color-primary | #3D405B | Headings, links, primary actions (slate blue-grey) |
| --color-primary-hover | #2D2F42 | Hover/active states |
| --color-bg | #FDFCF0 | Page background (warm aged paper) |
| --color-bg-card | #FEFDF5 | Card/component backgrounds (slight warm white) |
| --color-bg-secondary | #F2F1E1 | Reality check, alternating sections |
| --color-bg-footer | #2D2F42 | Footer + disclaimer bar |
| --color-text | #2D2F42 | Body text |
| --color-text-secondary | #50526E | Supporting text |
| --color-text-muted | #74768A | Tertiary text, timestamps |
| --color-border | #E0DFD0 | Borders, dividers |

### Typography
- **All text:** Inter (system fallback). Single sans-serif family for both headings and body to keep things clean.
- Body line-height: 1.75 for long-form readability
- Max paragraph width: 70 characters
- **Scale:** 1.25x ratio
- **Body size:** 16px (1rem)
- **Line height:** 1.6 for body, 1.2 for headings
- **Max content width:** 760px
- **Max page width:** 1200px (for sidebar TOC layout)

### Component Library
| Component | Purpose | Visual Treatment |
|-----------|---------|-----------------|
| Reality Check | What actually happens vs expectations | Full-width, subtle warm background, thick left border in primary |
| Warning Callout | Important cautions, disclaimers | Orange-tinted background, warning icon |
| Tip Callout | Helpful practical suggestions | Green-tinted background, lightbulb icon |
| Info Callout | Standard procedures, general info | Blue-tinted background, info icon |
| Steps | Multi-step processes | Large serif numerals with vertical connecting line |
| Quick Facts | Facility overview card | Prominent card with icon-labeled fields (phone, hours, address) |
| Cost Table | Fee/price comparisons | Responsive table → stacked cards on mobile |
| TOC (Desktop) | Guide navigation | Sticky sidebar, tracks scroll position |
| TOC (Mobile) | Guide navigation | Bottom-sheet, triggered by floating button |
| Breadcrumbs | Location hierarchy | Subtle, above page title |
| Disclaimer Bar | Legal notice | Top of every page, compact, non-dismissible |
| Facility Card | Search result / directory listing | Card with name, state, type, quick info |

### Responsive Strategy
- **Desktop (>1024px):** Content column + sticky sidebar TOC
- **Tablet (768-1024px):** Full-width content, collapsible TOC
- **Mobile (<768px):** Single column, bottom-sheet TOC, stacked tables
- **Touch targets:** Minimum 48px height
- **Tables:** Transform to stacked cards on mobile (never horizontal scroll)

### Accessibility
- WCAG 2.1 AA minimum (aim for AAA on text contrast)
- Semantic HTML throughout (article, nav, aside, section)
- ARIA roles on callout boxes (role="note")
- Skip-to-content link
- Proper heading hierarchy (never skip levels)
- Focus-visible styles on all interactive elements

## 6. Information Architecture

### Site Map
```
/ (Homepage — search-first, route to state/facility)
├── /guides/
│   ├── visiting-basics/
│   ├── first-visit/
│   ├── staying-in-touch/
│   ├── sending-money/
│   └── know-your-rights/
├── /states/
│   ├── california/
│   │   ├── (overview)
│   │   ├── guides/visiting/
│   │   ├── guides/mail/
│   │   ├── guides/phone-video/
│   │   ├── guides/money/
│   │   ├── guides/medical/
│   │   ├── guides/transfers/
│   │   ├── facilities/san-quentin/
│   │   └── facilities/cim-chino/
│   └── texas/
│       ├── (overview)
│       ├── guides/...
│       └── facilities/...
├── /facilities/ (searchable directory of all facilities)
├── /tools/ (printable quick reference)
├── /search/ (full-text search)
├── /about/
├── /privacy/
└── /terms/
```

### Homepage Strategy
The homepage is a router, not a destination.
1. **Above fold:** Large search bar — "Which facility are you visiting?"
2. **Quick paths:** Find a Facility | National Guides | Browse by State
3. **State grid:** Scales from 2 to 50 with a simple card grid
4. **No hero images, no inspirational messaging, no decoration**

## 7. Build & Quality Pipeline

### On Every PR
1. Schema validation (Zod) — all content has required fields
2. Tone lint — hard-fail banned phrases, soft-warn suspicious patterns
3. Build site
4. Internal link check
5. Accessibility smoke tests (axe-core)

### On Deploy (merge to main)
1. All PR checks
2. Pagefind index generation
3. Deploy to GitHub Pages

### Tone Linting Rules
**Hard fail (blocked phrases):**
- "give yourself grace"
- "you're not alone"
- "it's okay to feel"
- "take care of yourself"
- "don't worry"
- "this is hard"
- "we recommend"
- "pro tip"

**Soft warn (review needed):**
- "loved one" appearing 3+ times on a page
- Exclamation marks in content (outside UI elements)
- "unfortunately," "frustrating," "overwhelming," "difficult"
- Any second-person emotional framing ("you may feel...")

## 8. Migration Plan

### Phase 1: Foundation
- Set up Astro project, schemas, layouts, components
- Build with placeholder content to validate architecture

### Phase 2: Migration
- Script-assisted extraction of existing HTML → Markdown
- Manual review of every migrated page
- Verify rendered output matches original content

### Phase 3: New Features
- Facility search/finder
- Homepage redesign
- Sticky TOC, responsive tables, print styles
- Mobile navigation

### Phase 4: Texas
- Research TDCJ procedures (visiting, mail, phone, money, medical)
- Create Texas state config + guides + initial facility pages
- Validate the "add a new state" workflow works cleanly

### Phase 5: Launch
- Full tone audit
- Accessibility audit
- SEO structure
- GitHub Actions pipeline
- Deploy

## 9. Decisions Log

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-03-29 | Astro over Eleventy/Hugo | Best balance of type safety, content collections, zero-JS default, and AI maintainability |
| 2026-03-29 | Source Serif 4 for headings only | Sets institutional tone without font-load penalty on mobile |
| 2026-03-29 | Refined palette (oxblood primary, bone bg) | Better contrast, more archival/institutional feel, less "blog" |
| 2026-03-29 | Two search systems (JSON facility finder + Pagefind) | Structured facility search needs different approach than full-text guide search |
| 2026-03-29 | No heavy interactive map at launch | Mobile users on bad connections near prisons can't afford the payload |
| 2026-03-29 | Texas as second state in rebuild | Validates scalability of the content model with a different state system (TDCJ) |
| 2026-03-29 | No CMS at launch | File-based content is simpler, safer, easier to validate |
| 2026-03-29 | Tone lint in CI | Catches drift automatically; doesn't replace editorial judgment |
| 2026-03-29 | No "live status" on facility pages | We can't guarantee real-time accuracy; frame as reference info with "call to verify" |
