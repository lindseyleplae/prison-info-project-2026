# Prison Visitor Guide

**Domain:** prisonvisitorguide.org (LIVE as of Apr 2026, HTTPS enabled)
**Email:** prisonvisitorguide@gmail.com
**Status:** Active, in development
**Hosting:** GitHub Pages, auto-deploy via GitHub Actions on push to main
**Technology:** Astro 6 (static mode, zero client JS by default), Markdown content collections, vanilla CSS

## What It Is
A national reference website that compiles publicly available information about prison visiting procedures, policies, and related processes across the United States. Sources include official corrections department websites, state regulations, published policies, and advocacy organizations.

## Design (Grounded Guide theme)
- **Primary:** #3D405B (slate blue-grey)
- **Background:** #FDFCF0 (warm aged paper)
- **Card:** #FEFDF5 (slightly warmer white)
- **Text:** #2D2F42 (deep slate)
- **Typography:** Inter / system sans-serif throughout
- **Tokens:** All styling via CSS custom properties in src/styles/tokens.css

## Current Coverage (~36 pages)
- **National guides:** 5 (visiting basics, first visit, staying in touch, sending money, know your rights)
- **States:** California (CDCR), Texas (TDCJ)
- **California:** 6 state guides + 2 facility pages (San Quentin, CIM Chino)
- **Texas:** 6 state guides + 4 facility pages
- **Showcase page:** /showcase/ — living style guide of every component

## Key Files (all paths relative to repo root)
| File | Purpose |
|------|---------|
| SPEC.md | Master blueprint — architecture, content model, decisions |
| TASKS.md | Active task tracking |
| PLAYBOOK.md | How to add a new state or facility (step-by-step) |
| CLAUDE.md | Project instructions for Claude (tone rules, theme, etc.) |
| src/content.config.ts | Zod schemas — strict validation of every content field |
| src/content/ | All site content (Markdown + frontmatter) |
| src/styles/tokens.css | Design tokens |
| src/pages/showcase.astro | Component showcase |
| scripts/lint-tone.mjs | Banned phrase enforcement |
| scripts/check-links.mjs | Internal link validation |

## Quality Gates (run before any deploy)
- `npm run build` — fails on schema/syntax errors
- `npm run check:links` — internal link validation
- `npm run lint:tone` — hard-fails on banned phrases
- `npm run visual-check` — Playwright screenshot comparison

## Multi-Agent Setup
- **Claude Code** — Orchestrator (vision, judgment, quality gate)
- **Codex** — Builder (writes most code via terminal CLI)
- **Gemini** — Designer/tiebreaker

## Planned States (Priority order)
1. Florida (large system, high demand)
2. New York, Illinois, Ohio, Georgia, Pennsylvania (medium priority)
3. Expand existing California (30 of 32 CDCR institutions still need pages)
4. Expand existing Texas (~97 of 101 TDCJ units still need pages)
