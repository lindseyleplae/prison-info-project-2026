# Prison Visitor Guide

**Domain:** prisonvisitorguide.org (planned)
**Email:** prisonvisitorguide@gmail.com
**Status:** Active, in development
**Hosting:** GitHub Pages (planned)
**Technology:** Static HTML/CSS only. No JavaScript, no frameworks, no build tools.

## What It Is
A national reference website that compiles publicly available information about prison visiting procedures, policies, and related processes across the United States. Sources include official corrections department websites, state regulations, published policies, and advocacy organizations.

## Design
- **Theme:** Warm Editorial
- **Colors:** Terracotta accent (#c05621), cream background (#fffbf0), gold decorative (#ecc94b)
- **Typography:** Georgia serif for headings, system sans-serif for body
- **Layout:** Single-column, 860px max-width, responsive

## Current Coverage
- **National guides:** 5 (visiting basics, first visit, staying in touch, sending money, know your rights)
- **States:** California only
- **California guides:** 6 (visiting, mail, phone-video, money, medical, transfers)
- **Facility pages:** 2 (San Quentin, CIM Chino)
- **Total pages:** 16

## Key Files
| File | Purpose |
|------|---------|
| _Website/STYLE-GUIDE.md | Single source of truth for page structure |
| _Website/CONTENT-TRACKER.md | Inventory of all pages and their status |
| _Website/css/style.css | Single shared stylesheet (1052 lines) |
| Skill: prison-visitor-guide | Automated rules for building/editing pages |

## History of Issues (Learn From These)
| Issue | Root Cause | Fix |
|-------|-----------|-----|
| Pages completely unstyled | Content in `<div class="container">` instead of `<article class="container">` | Always use article wrapper |
| Purple visited links | Missing `a:visited` CSS rule | Added to stylesheet |
| Bullet points sticking out left | CSS reset removed padding, insufficient margin-left | Switched to padding-left: 28px |
| Inconsistent typography across pages | 10 pages missing article wrapper | Added article to all pages |
| TOC links not clickable | TOC items were plain text, not `<a>` tags | Rebuilt TOCs with proper anchor links |
| Wrong CSS variable names | Used var(--text-light) instead of var(--color-text-light) | Use full --color- prefix |
| Site title inconsistency | Some pages said "prisonvisitorguide.org", others different | Standardized to "Prison Visitor Guide" |
| Homepage link broken from subpages | Site-title href was "index.html" regardless of depth | Set correct relative path per depth |

## Planned States (Priority)
1. Texas (large system, high demand)
2. Florida (large system)
3. New York
4. Illinois, Ohio, Georgia, Pennsylvania

## Open Items
- Full tone audit needed on most pages (first-time.html was done thoroughly)
- Facility pages need section IDs and TOCs added
- Terms of Use page recommended (legal research done)
- Privacy policy page recommended
- Source citations should be added where practical
- "Last verified" dates should be added to guides
- Deploy to GitHub Pages
- Purchase prisonvisitorguide.org domain
