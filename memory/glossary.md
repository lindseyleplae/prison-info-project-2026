# Glossary

Workspace shorthand, terms, and internal language for the Prison Visitor Guide project.

## Project Terms
| Term | Meaning | Context |
|------|---------|---------|
| the website | Prison Visitor Guide website | Static HTML/CSS site in _Website directory |
| the style guide | STYLE-GUIDE.md | Single source of truth for page structure and rules |
| content tracker | CONTENT-TRACKER.md | Tracks every page, its status, and what needs work |
| tone examples | references/tone-examples.md | Before/after writing examples bundled in the skill |
| warm editorial | Design theme name | Terracotta, cream, Georgia serif, gold accents |
| article wrapper | `<article class="container">` | Required HTML wrapper for all page content; without it, CSS doesn't apply |
| TOC | Table of contents | Anchor-linked section list on guide pages |
| design tokens | CSS custom properties in :root | Color, font, and layout variables |

## Site Architecture Terms
| Term | Meaning |
|------|---------|
| national guide | Guide in /guides/ — general info applying to all states |
| state guide | Guide in /states/[state]/guides/ — state-specific procedures |
| facility page | Page in /states/[state]/facilities/ — individual prison visiting info |
| state overview | Index page at /states/[state]/index.html — landing page for a state |
| disclaimer bar | Required info bar at top of every page body |
| nav dropdown | CSS-only hover dropdown in site header |
| nav-label | `<span>` trigger for dropdown (not an `<a>` tag) |
| hover bridge | CSS pseudo-element trick that keeps dropdown open when moving mouse to it |

## Design Theme Details
| Token | Value | Usage |
|-------|-------|-------|
| --color-accent | #c05621 | Primary accent (warm orange/terracotta) |
| --color-bg | #fffbf0 | Page background (warm cream) |
| --color-gold | #ecc94b | Gold decorative accents |
| --color-text | #2d3748 | Main text color |
| --color-footer-bg | #2d3748 | Dark footer background |
| --font-serif | Georgia | Headings font |
| --font-sans | system fonts | Body text font |

## CSS Classes (Most Common)
| Class | When to use |
|-------|-------------|
| .container | Standard width wrapper (860px) |
| .page-header | H1 + subtitle at top of page |
| .page-toc | Table of contents box |
| .key-info | Fact list box (warm bg, gold border) |
| .callout-warning | Safety/legal warning (red border) |
| .callout-tip | Helpful info (gold border) |
| .reality-check | Real-world context box |
| .steps / .step | Numbered sequential process |
| .cost-table | Financial/fee data table |
| .suggestions | Feedback/corrections box |
| .divider | Horizontal separator between sections |
| .quick-facts | Facility info box |

## Page Status Labels
| Status | Meaning |
|--------|---------|
| Draft | Written but not reviewed for tone/accuracy |
| Review | Complete, needs tone and accuracy check |
| Published | Reviewed and ready for public |
| Needs Update | Published but contains outdated info |
| Planned | Not yet created |

## Tone Rules (Quick Reference)
| Instead of... | Write... |
|---------------|----------|
| "don't worry" | (just state the fact) |
| "we recommend" | describe the options |
| "it can be hard" | describe the situation |
| "your loved one" | "the incarcerated person" |
| "pro tip" | present the information directly |
| "unfortunately" | just state the fact |
| "stay strong" | omit entirely |
| "the good news is" | state the fact without positive framing |
