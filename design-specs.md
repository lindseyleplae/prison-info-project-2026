# Design Specifications — Final (for Codex)

This merges Gemini's structural proposals with the agreed palette and my editorial calls.

## tokens.css (complete)

```css
:root {
  /* === PALETTE === */
  /* Primary — Oxblood / Deep Terracotta */
  --color-primary: #8C3015;
  --color-primary-hover: #6D2510;
  --color-primary-light: #B84D2A;

  /* Background */
  --color-bg: #F9F7F3;
  --color-bg-card: #FFFFFF;
  --color-bg-secondary: #F0EEEA;
  --color-bg-footer: #2D3748;

  /* Text */
  --color-text: #2D3748;
  --color-text-secondary: #5C5C5A;
  --color-text-muted: #8C8C8A;
  --color-text-inverse: #E2E8F0;

  /* Accent */
  --color-gold: #D4AF37;
  --color-gold-light: #E8D48B;

  /* Borders */
  --color-border: #E5E4DF;
  --color-border-light: #EDECE8;

  /* === SEMANTIC CALLOUT COLORS === */
  --color-warning-bg: #FFF8F0;
  --color-warning-border: #E8A065;
  --color-warning-text: #744210;

  --color-tip-bg: #F0FFF4;
  --color-tip-border: #68D391;
  --color-tip-text: #22543D;

  --color-info-bg: #EBF8FF;
  --color-info-border: #63B3ED;
  --color-info-text: #2A4365;

  --color-reality-bg: #FAF5EF;
  --color-reality-border: #8C3015;
  --color-reality-text: #5B3A1A;

  /* === SPACING (8px base) === */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */

  /* === TYPOGRAPHY === */
  --font-heading: 'Source Serif 4', Georgia, 'Times New Roman', serif;
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

  /* Type Scale (1.25 ratio) */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-snug: 1.35;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;

  /* Font Weights */
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* === LAYOUT === */
  --content-width: 720px;
  --page-width: 1120px;
  --sidebar-width: 260px;

  /* === SHADOWS === */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03);

  /* === BORDERS === */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;

  /* === TRANSITIONS === */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;

  /* === BREAKPOINTS (reference only — use in @media) === */
  /* Mobile: <640px */
  /* Tablet: 640px - 1023px */
  /* Desktop: >=1024px */
}
```

## Typography Spec

| Element | Font | Size | Weight | Line-Height | Color |
|---------|------|------|--------|-------------|-------|
| h1 | Source Serif 4 | 2.25rem (36px) | 700 | 1.2 | --color-text |
| h2 | Source Serif 4 | 1.5rem (24px) | 700 | 1.2 | --color-text |
| h3 | Source Serif 4 | 1.25rem (20px) | 600 | 1.35 | --color-text |
| h4 | System sans | 1.125rem (18px) | 600 | 1.35 | --color-text |
| body | System sans | 1rem (16px) | 400 | 1.625 | --color-text |
| small/meta | System sans | 0.875rem (14px) | 400 | 1.5 | --color-text-secondary |
| caption | System sans | 0.75rem (12px) | 500 | 1.5 | --color-text-muted |
| Links | System sans | inherit | 500 | inherit | --color-primary |
| Link:hover | | | | | --color-primary-hover (underline) |
| Link:visited | | | | | --color-primary (no purple) |

## Layout System

### Desktop (>=1024px): Content + Sidebar
```css
.page-layout {
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.page-layout--with-toc {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  gap: var(--space-12);
  align-items: start;
}

.page-layout__sidebar {
  position: sticky;
  top: var(--space-8);
}

.page-layout__content {
  max-width: var(--content-width);
}
```

### Mobile (<1024px): Single column, TOC becomes bottom sheet
```css
@media (max-width: 1023px) {
  .page-layout--with-toc {
    grid-template-columns: 1fr;
  }
  .page-layout__sidebar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    /* Bottom sheet behavior via JS */
  }
}
```

## Component Patterns

### Disclaimer Bar (every page)
```html
<div class="disclaimer-bar" role="alert">
  <p>This guide is for informational purposes only. Not legal advice. Not affiliated with any government agency. <a href="/about">Learn more</a></p>
</div>
```
- Background: --color-text (dark)
- Text: --color-text-inverse
- Compact, 1 line on desktop, wraps on mobile
- Non-dismissible, always visible at top

### Reality Check
```html
<aside class="reality-check" role="note" aria-label="Reality check">
  <div class="reality-check__label">Reality Check</div>
  <p class="reality-check__content">Visiting rooms typically have hard seating, variable lighting, and inconsistent temperature control. Background noise from multiple visits can affect conversation.</p>
</aside>
```
- Left border: 4px solid --color-primary
- Background: --color-reality-bg
- Label: uppercase, letter-spaced, --text-xs, --weight-bold
- Content: --font-heading (serif), --text-lg for weight/authority
- Padding: --space-6

### Callouts (Warning / Tip / Info)
```html
<div class="callout callout--warning" role="note">
  <span class="callout__icon" aria-hidden="true">⚠️</span>
  <div class="callout__body">
    <strong class="callout__title">Verify Before Visiting</strong>
    <p>Always call the facility before traveling. Lockdowns and schedule changes happen without notice.</p>
  </div>
</div>
```
- Flex layout: icon + body
- Border: 1px solid [variant border color]
- Background: [variant bg color]
- Border-radius: --radius-md
- Padding: --space-4
- Icon: fixed width, flex-shrink: 0

### Steps
```html
<ol class="steps" role="list">
  <li class="step">
    <span class="step__number" aria-hidden="true">1</span>
    <div class="step__content">
      <strong>Submit CDCR Form 106</strong>
      <p>Ask the incarcerated person to request the form, then fill it out and mail it to the visiting sergeant.</p>
    </div>
  </li>
</ol>
```
- Number: 28px circle, --color-primary bg, white text, --font-heading
- Vertical connecting line between steps (2px --color-border, positioned on the number column)
- Content: normal body styling
- Gap: --space-4 between number and content
- Margin: --space-8 between steps

### Quick Facts Card (facility pages)
```html
<div class="quick-facts">
  <div class="quick-facts__item">
    <span class="quick-facts__label">Phone</span>
    <span class="quick-facts__value"><a href="tel:4154541460">(415) 454-1460</a></span>
  </div>
  <div class="quick-facts__item">
    <span class="quick-facts__label">Hours</span>
    <span class="quick-facts__value">Sat–Sun, 9 AM – 3 PM</span>
  </div>
  <div class="quick-facts__item">
    <span class="quick-facts__label">Address</span>
    <span class="quick-facts__value">1 Main St, San Quentin, CA 94964</span>
  </div>
  <div class="quick-facts__item">
    <span class="quick-facts__label">Security</span>
    <span class="quick-facts__value">Level II</span>
  </div>
  <div class="quick-facts__actions">
    <a href="tel:4154541460" class="btn btn--primary">Call to Verify</a>
    <a href="https://maps.google.com/..." class="btn btn--secondary" target="_blank">Get Directions</a>
  </div>
</div>
```
- Background: --color-bg-card
- Border: 2px solid --color-primary
- Border-radius: --radius-lg
- Shadow: --shadow-lg
- Grid layout: 2 columns on desktop, 1 on mobile
- Label: --text-sm, --weight-semibold, --color-text-secondary, uppercase
- Value: --text-base, --weight-medium, --color-text
- Actions: full-width buttons at bottom
- "Call to Verify" is the PRIMARY action — prominent, --color-primary bg

### Facility Hero (revised — no live status)
```html
<header class="facility-hero">
  <div class="facility-hero__meta">
    <span class="facility-hero__type">Level II · Male · CDCR</span>
  </div>
  <h1 class="facility-hero__name">San Quentin State Prison</h1>
  <p class="facility-hero__location">San Quentin, Marin County, California</p>
  <div class="facility-hero__verify">
    <p>Visiting schedules change without notice. <strong>Always call before traveling.</strong></p>
    <a href="tel:4154541460" class="btn btn--primary btn--large">Call Visiting Office: (415) 454-1460</a>
    <span class="facility-hero__updated">Info last verified: March 2026</span>
  </div>
</header>
```
- No "OPEN/CLOSED" status — we can't guarantee accuracy
- "Call before traveling" is the persistent message
- "Last verified" date builds trust through transparency
- Phone number is the dominant CTA

### Table of Contents (Desktop — sticky sidebar)
```html
<nav class="toc" aria-label="Table of contents">
  <div class="toc__title">On This Page</div>
  <ol class="toc__list">
    <li><a href="#visitor-approval" class="toc__link">Visitor Approval Process</a></li>
    <li><a href="#dress-code" class="toc__link">Dress Code</a></li>
    <li><a href="#what-to-bring" class="toc__link toc__link--active">What to Bring</a></li>
  </ol>
</nav>
```
- Sticky, top: --space-8
- Title: --text-sm, --weight-bold, uppercase, letter-spaced
- Links: --text-sm, --color-text-secondary, no underline
- Active link: --color-primary, --weight-semibold, left border 2px
- Scroll tracking via IntersectionObserver (lightweight JS)

### Table of Contents (Mobile — bottom sheet)
```html
<button class="toc-trigger" aria-expanded="false" aria-controls="mobile-toc">
  Contents ↑
</button>
<nav id="mobile-toc" class="toc-sheet" aria-label="Table of contents" hidden>
  <!-- Same list as desktop -->
</nav>
```
- Fixed bottom, full width
- Trigger button: --color-primary bg, white text, centered
- Sheet slides up, overlays content
- Dismiss on link click or tap outside

### Facility Card (for search results / directory)
```html
<a href="/states/california/facilities/san-quentin/" class="facility-card">
  <div class="facility-card__state">California</div>
  <h3 class="facility-card__name">San Quentin State Prison</h3>
  <div class="facility-card__details">
    <span>Level II · Male</span>
    <span>San Quentin, CA</span>
  </div>
  <div class="facility-card__quick">
    <span>Weekends · 9AM–3PM</span>
  </div>
</a>
```
- Background: --color-bg-card
- Border: 1px solid --color-border
- Hover: shadow-md, border-color --color-primary
- Padding: --space-5
- Border-radius: --radius-md
- State label: --text-xs, --weight-bold, uppercase, --color-primary

### Cost Table (responsive)
Desktop: standard table. Mobile: stacked cards.
```css
@media (max-width: 639px) {
  .cost-table thead { display: none; }
  .cost-table tr {
    display: block;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-4);
    margin-bottom: var(--space-3);
  }
  .cost-table td {
    display: flex;
    justify-content: space-between;
    padding: var(--space-1) 0;
  }
  .cost-table td::before {
    content: attr(data-label);
    font-weight: var(--weight-semibold);
    color: var(--color-text-secondary);
  }
}
```

## Print Stylesheet Highlights
```css
@media print {
  .disclaimer-bar, .toc, .facility-hero__verify .btn,
  header, footer, nav { display: none; }
  body { font-size: 11pt; line-height: 1.4; color: #000; }
  a { color: #000; text-decoration: none; }
  a[href]::after { content: " (" attr(href) ")"; font-size: 9pt; }
  .callout { border: 1px solid #999; page-break-inside: avoid; }
  .quick-facts { border: 2px solid #000; page-break-inside: avoid; }
  h2, h3 { page-break-after: avoid; }
}
```
