# Prison Visitor Guide — Project Instructions

## What This Is
A national reference website (prisonvisitorguide.org) for families of incarcerated people. Factual, organized information about prison visiting procedures, communication, costs, and rights — state by state, facility by facility.

## The #1 Rule: Tone
**Strictly informational. Like Wikipedia.** No emotional language, no advice-giving, no therapy speak, no condescension, no overuse of "loved one." This is non-negotiable. See `scripts/lint-tone.mjs` for the enforced banned phrase list.

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
| TASKS.md | Active task tracking |
| PLAYBOOK.md | How to add a new state or facility (step-by-step) |
| src/content.config.ts | Zod schemas — strict validation of every content field |
| src/content/ | All site content (Markdown + frontmatter) |
| src/styles/tokens.css | Design tokens (Grounded Guide theme) |
| src/pages/showcase.astro | Living style guide — every component on one page |
| scripts/lint-tone.mjs | Tone validation — catches banned phrases |
| scripts/check-links.mjs | Internal link validation |
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
- Background: `#FDFCF0` (warm aged paper)
- Card: `#FEFDF5` (slightly warmer white)
- Text: `#2D2F42` (deep slate)
- Body font: Inter / system sans-serif
- Heading font: Inter / system sans-serif

## Critical Rules
1. All content tone must be strictly informational (run `npm run lint:tone`)
2. All styling goes through CSS custom properties — never hardcoded color values
3. Adding a state or facility = adding content files only, nothing else
4. Every facility page should include "call to verify" language
5. No live status claims — reference info only, never real-time data
6. Mobile-first — majority of users are on phones, often with bad signal
7. WCAG 2.1 AA minimum accessibility

## Quality Gates (run before any deploy)
```bash
npm run build         # Builds all pages, fails on schema or syntax errors
npm run check:links   # Validates every internal link
npm run lint:tone     # Hard-fails on banned phrases
npm run visual-check  # Screenshots key pages, compares vs baselines
```

## Current Scope
- California (CDCR): 6 state guides + 2 facility pages
- Texas (TDCJ): 6 state guides + 4 facility pages
- 5 national guides
- 36 pages total

## Email
prisonvisitorguide@gmail.com (all mailto: links)

## Adding New Content
See PLAYBOOK.md for the step-by-step process.
