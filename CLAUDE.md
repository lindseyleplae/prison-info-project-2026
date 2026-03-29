# Memory

## Me
Lindsey Leplae, creator of Prison Visitor Guide (prisonvisitorguide.org). Building a national reference website for families of incarcerated people. Not a computer science background — needs technical concepts explained clearly. Has a strong vision for the end product and wants Claude to be a proactive partner, not just follow instructions.

## Key Decisions Made
| Decision | Details |
|----------|---------|
| **Site name** | "Prison Visitor Guide" (in header), domain: prisonvisitorguide.org |
| **Tone** | STRICTLY informational. No emotional language, no advice, no condescension. Like Wikipedia. This is the #1 rule. |
| **Theme** | Warm Editorial — terracotta accent (#c05621), cream background (#fffbf0), Georgia serif headings, gold accents |
| **Architecture** | Static HTML/CSS only. No JavaScript. Planned for GitHub Pages. |
| **Content structure** | National overview → State-specific guides → Individual facility pages |
| **Homepage approach** | Short orientation paragraphs that funnel to state-level detailed guides |
| **Email** | prisonvisitorguide@gmail.com |

## Active Project
| Name | What |
|------|------|
| **Prison Visitor Guide** | National reference website about prison visiting procedures, policies, and related processes |
→ Details: memory/projects/prison-visitor-guide.md

## Terms
| Term | Meaning |
|------|---------|
| **the website** | Prison Visitor Guide site (_Website directory) |
| **the style guide** | STYLE-GUIDE.md in _Website directory — single source of truth for page structure |
| **content tracker** | CONTENT-TRACKER.md — inventory of all pages and their status |
| **tone examples** | Reference doc with before/after writing examples (bundled in skill) |
| **warm editorial** | The chosen design theme |
| **article wrapper** | `<article class="container">` — CRITICAL for styling. Without it, pages have no formatting. |
| **TOC** | Table of contents on guide pages — must use anchor links |

## Preferences
- Explain technical concepts clearly — no CS background
- Be a proactive partner: suggest improvements, flag issues, don't just follow orders
- If something should be a skill or organizational tool, just suggest it or do it
- Keep the site consistent and clean — this will be high-volume
- Don't use emotional/advisory language on the website, ever
- When in doubt, read the style guide before making changes
- Always update CONTENT-TRACKER.md when pages change

## Critical Technical Rules (Quick Reference)
- Content goes in `<article class="container">` NOT `<div class="container">`
- CSS paths depend on page depth (see STYLE-GUIDE.md)
- Site-title always links to homepage with correct relative path
- All mailto: links → prisonvisitorguide@gmail.com
- TOC items must be `<a href="#id">` links with matching section ids
- No inline styles, no JavaScript
- CSS variables use `--color-` prefix (e.g., `var(--color-text-light)`)

→ Full glossary: memory/glossary.md
→ Full project details: memory/projects/prison-visitor-guide.md
→ Site rules: _Website/STYLE-GUIDE.md
