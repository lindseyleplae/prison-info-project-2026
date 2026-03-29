# Prison Visitor Guide — Style Guide

## Overview

This document is the single source of truth for how every page on the Prison Visitor Guide website must be built. Use this guide every time you create a new page to ensure consistency, proper styling, and correct structure.

---

## CRITICAL CONTENT RULE: TONE

**Strictly informational. This is the #1 most important rule.**

- Write like Wikipedia or a government reference guide
- Present facts, not advice or emotional support
- No encouragement, empathy, or comfort language
- No phrases like: "don't worry", "you'll be okay", "this is the hardest part", "your emotions spike", "the main event", "pro tip"
- Never tell visitors how they should feel or what will happen emotionally
- State information neutrally and objectively

**Example - WRONG:**
> "Your first visit can feel intimidating, so don't worry—it gets easier! We'll help you through the emotional journey."

**Example - RIGHT:**
> "First visits follow a standard procedure: submission of visitor application, approval, check-in at facility, security screening, and visitation in designated area."

---

## Site Identity

- **Site Name:** "Prison Visitor Guide"
- **Used in:** Header logo/link, browser title, footer
- **Consistency:** Use exactly this name everywhere; do not shorten or vary it
- **Contact Email:** prisonvisitorguide@gmail.com
- **All mailto: links** must use `href="mailto:prisonvisitorguide@gmail.com"`
- **Site-title link** must always point to the homepage (`index.html`) using the correct relative path for the page's depth (see CSS Stylesheet Paths section — same depth rules apply)

---

## HTML Structure (All Pages)

### DOCTYPE & Language
```html
<!DOCTYPE html>
<html lang="en">
```

### Head Section
Every page must include:
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Name] — Prison Visitor Guide</title>
  <link rel="stylesheet" href="[PATH_TO_CSS]/style.css">
</head>
```

### Page Title Format
Format: `[Page Name] — Prison Visitor Guide`

Examples:
- `Your First Visit — Prison Visitor Guide`
- `San Quentin State Prison — Prison Visitor Guide`
- `Mail & Packages — Prison Visitor Guide`

### Body Structure (in order)
```html
<body>
  <div class="disclaimer-bar">...</div>
  <header class="site-header">...</header>
  <main>
    <!-- Page content -->
  </main>
  <footer>...</footer>
</body>
```

---

## CSS Stylesheet Link Paths

Use relative paths based on the page's location:

| Page Location | Path |
|---|---|
| Root (index.html, about.html) | `href="css/style.css"` |
| /guides/ | `href="../css/style.css"` |
| /states/[state]/ | `href="../../css/style.css"` |
| /states/[state]/guides/ | `href="../../../css/style.css"` |
| /states/[state]/facilities/ | `href="../../../css/style.css"` |

---

## Disclaimer Bar

Required on every page. Place immediately inside `<body>`, before header.

```html
<div class="disclaimer-bar">
  This site is for informational purposes only and is not legal advice. Information comes from publicly available sources, including official corrections department materials and community resources. Always verify details with the facility, as policies can change without notice.
</div>
```

---

## Header Structure

```html
<header class="site-header">
  <div class="header-inner">
    <a href="[PATH_TO_INDEX]" class="site-title">Prison Visitor Guide</a>
    <nav class="site-nav">
      <div class="nav-dropdown">
        <span class="nav-label">Guides</span>
        <div class="dropdown-menu">
          <a href="...">Guide Name</a>
          <a href="...">Guide Name</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <span class="nav-label">States</span>
        <div class="dropdown-menu">
          <a href="...">State Name</a>
        </div>
      </div>
      <a href="[PATH_TO_ABOUT]">About</a>
    </nav>
  </div>
</header>
```

**Important:**
- The site-title link text must be exactly "Prison Visitor Guide"
- Dropdowns use `<span class="nav-label">` (not `<a>` tags) for triggers
- Dropdown links use regular `<a>` tags inside `.dropdown-menu`
- The nav-label automatically displays a dropdown indicator (▾) via CSS

---

## Main Content Area

### Critical: Using `<article class="container">`

**All content MUST be wrapped in `<article class="container">`** (not just `<div class="container">`).

This is critical because the CSS stylesheet scopes all typography rules (h2, h3, p, ul, ol, li, strong, etc.) to the `article` selector. Without `<article>`, headings, paragraphs, and lists will be unstyled.

```html
<article class="container">
  <!-- All page content goes here -->
</article>
```

### Breadcrumb Navigation

Place breadcrumbs in their own `<div class="container">` before the `<article>`:

```html
<div class="container">
  <p class="breadcrumb">
    <a href="...">Home</a> /
    <a href="...">Section</a> /
    Current Page
  </p>
</div>

<article class="container">
  <!-- page content -->
</article>
```

### Page Header

Inside the `<article>`, place the page header with h1 and optional subtitle:

```html
<div class="page-header">
  <h1>Page Title</h1>
  <p class="subtitle">Optional subtitle describing the page</p>
</div>
```

---

## Table of Contents (TOC)

**Required for pages with 3+ sections. Optional for shorter pages.**

Place TOC immediately after page-header, inside the `<article>`:

```html
<div class="page-toc">
  <p class="page-toc-label">On this page:</p>
  <ol>
    <li><span class="toc-number">1</span> <a href="#section-id">Section Name</a></li>
    <li><span class="toc-number">2</span> <a href="#section-id">Section Name</a></li>
    <li><span class="toc-number">3</span> <a href="#section-id">Section Name</a></li>
  </ol>
</div>
```

**Requirements:**
- TOC items are `<a>` links with `href="#section-id"` pointing to corresponding section
- Each section must have a matching `id` attribute on its `<section>` or `<h2>` element
- Use `<span class="toc-number">` for numbering
- Label text: "On this page:" (using `<p class="page-toc-label">`)

**Example — Section with matching id:**
```html
<h2 id="before-first-visit">Before Your First Visit</h2>
```

---

## Content Styling Classes

### Container Classes

| Class | Usage |
|---|---|
| `.container` | Standard width content wrapper (860px max). Use for page content. |
| `.container-narrow` | Narrow content wrapper (720px max). Use when narrower layout is needed. |

### Layout Elements

| Class | Usage |
|---|---|
| `.page-header` | Page title section (h1 + optional subtitle). Adds top padding. |
| `.page-toc` | Table of contents box. Bordered, rounded corners, light background. |
| `.section-divider` | Horizontal divider between sections. Use sparingly. |
| `.divider` | Lightweight horizontal divider between content within article. |
| `.hero` | Homepage hero section. Centered, large title, subtitle. Use only on homepage. |
| `.hero-accent` | Decorative gold line under hero title. Use only on homepage. |

### Callout & Info Boxes

| Class | Usage |
|---|---|
| `.start-here` | Highlighted box for introductory content. Warm background, left border. Use on homepage. |
| `.key-info` | Key information box. Warm background, gold left border. Use for fact lists. |
| `.callout` | General callout box with content inside. Warm background, accent left border. |
| `.callout-title` | Title for callout box (when using `.callout`). |
| `.callout-warning` | Red-bordered callout for warnings. Use for safety/legal warnings. |
| `.callout-tip` | Gold-bordered callout for tips/hints. Use for helpful information. |
| `.callout-success` | Green-bordered callout for positive information. |
| `.reality-check` | "Reality check" box for important contextual info. Warm background, accent border. |
| `.reality-check-label` | Label for reality check box. Use `<p class="reality-check-label">Label</p>`. |
| `.quick-facts` | Quick facts box for facility pages. Warm background, gold border. |
| `.key-info-item` | Individual fact item inside quick-facts. Use `<div>` with strong/label text. |

### Lists & Steps

| Class | Usage |
|---|---|
| `.guide-list` | Editorial-style list of guides. Items separated by borders. |
| `.guide-item` | Individual guide item in guide-list. |
| `.steps` | Numbered step sequence. Uses CSS counters. |
| `.step` | Individual step in steps. Numbered circle, content. |
| `.step-content` | Wrapper for content inside step. |
| `.link-list` | Vertical list of links with arrow decorators. |
| `.overview-topic` | Topic box on homepage overview section. Bordered, light background. |
| `.read-more` | Text for "read more" links. Bolder font weight. |

### Typography & Content

| Class | Usage |
|---|---|
| `.section-heading` | Large section heading (36px). Appears on homepage, state pages. Has gold underline. |
| `.breadcrumb` | Breadcrumb navigation. Light text, smaller font. |
| `.subtitle` | Subtitle text under headings. Lighter color, slightly larger font. |
| `.cost-table` | Data table for costs/fees. Striped rows, professional styling. |
| `.cost-amount` | Highlight a cost amount in text/table. Bold. |

### State & Navigation

| Class | Usage |
|---|---|
| `.state-card` | State information card. Warm background, accent border. Use on state listing pages. |
| `.nav-dropdown` | Dropdown navigation container. Hover behavior. |
| `.nav-label` | Trigger text for dropdown (span, not a tag). Auto-adds ▾ indicator. |
| `.dropdown-menu` | Menu that appears on hover. Positioned absolutely. |

### Sections & Layout

| Class | Usage |
|---|---|
| `.visiting-section` | Section within facility page about visiting info. Structural only. |
| `.nearby-amenities` | Section for nearby amenities on facility pages. Structural only. |
| `.other-facilities` | Section listing other related facilities. Structural only. |
| `.more-info` | Section with "Learn More" links. Structural only. |
| `.reality-checks` | Container for multiple reality-check boxes. Structural only. |
| `.suggestions` or `.suggestions-box` | Box suggesting feedback/corrections. Muted background, dashed border. |

### Footer

| Class | Usage |
|---|---|
| `.site-footer` | Footer element wrapper. Dark background. |
| `.footer-inner` | Max-width container inside footer. |
| `.footer-grid` | Grid layout for footer sections. Auto-responsive columns. |
| `.footer-section` | Individual footer section (h4 + ul). |
| `.footer-bottom` | Bottom text/copyright. Bordered top, smaller font. |

---

## Design Tokens (CSS Variables)

All defined in `:root` selector. Use these variables for consistency.

### Colors

```css
--color-text: #2d3748;                  /* Main text color */
--color-text-light: #5a4a42;            /* Secondary/lighter text */
--color-accent: #c05621;                /* Primary accent (warm orange) */
--color-accent-hover: #9c4318;          /* Accent on hover (darker) */
--color-gold: #ecc94b;                  /* Gold decorative color */
--color-bg: #fffbf0;                    /* Page background (warm cream) */
--color-bg-warm: #fef5e7;               /* Warm background for boxes */
--color-bg-muted: #f5eee5;              /* Muted background */
--color-border: #e6d5c8;                /* Border color */
--color-header-bg: #fffbf0;             /* Header background */
--color-footer-bg: #2d3748;             /* Footer background (dark) */
--color-footer-text: #e6d5c8;           /* Footer text (light) */
--color-footer-heading: #ecc94b;        /* Footer headings (gold) */
```

### Typography

```css
--font-serif: Georgia, 'Times New Roman', serif;     /* Serif font for headings */
--font-sans: -apple-system, BlinkMacSystemFont,     /* Sans-serif for body */
             'Segoe UI', 'Helvetica Neue', sans-serif;
```

### Layout

```css
--container: 860px;         /* Standard max-width */
--container-narrow: 720px;  /* Narrow layout max-width */
```

---

## Page Templates

### Template 1: National Guide Page

Location: `/guides/[guide-name].html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Guide Name] — Prison Visitor Guide</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <div class="disclaimer-bar">
    This site is for informational purposes only and is not legal advice. Information comes from publicly available sources, including official corrections department materials and community resources. Always verify details with the facility, as policies can change without notice.
  </div>

  <header class="site-header">
    <div class="header-inner">
      <a href="../index.html" class="site-title">Prison Visitor Guide</a>
      <nav class="site-nav">
        <div class="nav-dropdown">
          <span class="nav-label">Guides</span>
          <div class="dropdown-menu">
            <a href="visiting-basics.html">Visiting Basics</a>
            <a href="first-time.html">Your First Visit</a>
            <a href="staying-in-touch.html">Staying in Touch</a>
            <a href="sending-money.html">Sending Money</a>
            <a href="know-your-rights.html">Know Your Rights</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <span class="nav-label">States</span>
          <div class="dropdown-menu">
            <a href="../states/california/index.html">California</a>
          </div>
        </div>
        <a href="../about.html">About</a>
      </nav>
    </div>
  </header>

  <main>
    <div class="container">
      <p class="breadcrumb">
        <a href="../index.html">Home</a> /
        <a href="../index.html#guides">Guides</a> /
        [Guide Name]
      </p>
    </div>

    <article class="container">
      <div class="page-header">
        <h1>[Guide Name]</h1>
        <p class="subtitle">Subtitle describing guide content</p>
      </div>

      <!-- Include TOC if 3+ sections -->
      <div class="page-toc">
        <p class="page-toc-label">On this page:</p>
        <ol>
          <li><span class="toc-number">1</span> <a href="#section-id">Section Name</a></li>
          <li><span class="toc-number">2</span> <a href="#section-id">Section Name</a></li>
        </ol>
      </div>

      <!-- Content sections with matching ids -->
      <h2 id="section-id">Section Name</h2>
      <p>Content paragraph.</p>

      <div class="divider"></div>

      <h2 id="another-section">Another Section</h2>
      <p>More content.</p>

    </article>

    <div class="container">
      <div class="suggestions">
        <h2>Have a correction or suggestion?</h2>
        <p>Help us keep this guide accurate and useful.</p>
        <p><a href="mailto:prisonvisitorguide@gmail.com">Send us your feedback &#8594;</a></p>
      </div>
    </div>
  </main>

  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-section">
          <h4>Guides</h4>
          <ul>
            <li><a href="visiting-basics.html">Visiting Basics</a></li>
            <li><a href="first-time.html">Your First Visit</a></li>
            <li><a href="staying-in-touch.html">Staying in Touch</a></li>
            <li><a href="sending-money.html">Sending Money</a></li>
            <li><a href="know-your-rights.html">Know Your Rights</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>States</h4>
          <ul><li><a href="../states/california/index.html">California</a></li></ul>
        </div>
        <div class="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="../about.html">About This Site</a></li>
            <li><a href="mailto:prisonvisitorguide@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">Not affiliated with any corrections department. Information may change without notice.</div>
    </div>
  </footer>
</body>
</html>
```

### Template 2: State Guide Page

Location: `/states/[state]/guides/[guide-name].html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Guide Name] — Prison Visitor Guide</title>
  <link rel="stylesheet" href="../../../css/style.css">
</head>
<body>
  <div class="disclaimer-bar">
    This site is for informational purposes only and is not legal advice. Information comes from publicly available sources, including official [STATE] corrections department materials and community resources. Always verify details with the facility, as policies can change without notice.
  </div>

  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="site-title">Prison Visitor Guide</a>
      <nav class="site-nav">
        <div class="nav-dropdown">
          <span class="nav-label">Guides</span>
          <div class="dropdown-menu">
            <a href="../../../guides/visiting-basics.html">Visiting Basics</a>
            <a href="../../../guides/first-time.html">Your First Visit</a>
            <a href="../../../guides/staying-in-touch.html">Staying in Touch</a>
            <a href="../../../guides/sending-money.html">Sending Money</a>
            <a href="../../../guides/know-your-rights.html">Know Your Rights</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <span class="nav-label">States</span>
          <div class="dropdown-menu">
            <a href="../index.html">[State Name]</a>
          </div>
        </div>
        <a href="../../../about.html">About</a>
      </nav>
    </div>
  </header>

  <main>
    <article class="container">
      <p class="breadcrumb">
        <a href="../../../index.html">Home</a> /
        <a href="../index.html">[State Name]</a> /
        [Guide Name]
      </p>

      <div class="page-header">
        <h1>[Guide Name] in [State Code]</h1>
        <p class="subtitle">Description of guide</p>
      </div>

      <!-- Include key info early if relevant -->
      <div class="key-info">
        <p class="key-info-label">Key Information</p>
        <ul>
          <li><strong>Point:</strong> Information</li>
          <li><strong>Point:</strong> Information</li>
        </ul>
      </div>

      <!-- TOC for longer guides -->
      <div class="page-toc">
        <p class="page-toc-label">On This Page</p>
        <ol>
          <li><span class="toc-number">1</span> <a href="#section-id">Section Name</a></li>
        </ol>
      </div>

      <!-- Content -->
      <h2 id="section-id">Section Name</h2>
      <p>Content.</p>

    </article>

    <div class="container">
      <div class="suggestions">
        <h2>Have a correction or suggestion?</h2>
        <p>Help us keep this guide accurate and useful.</p>
        <p><a href="mailto:prisonvisitorguide@gmail.com">Send us your feedback &#8594;</a></p>
      </div>
    </div>
  </main>

  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-section">
          <h4>Guides</h4>
          <ul>
            <li><a href="../../../guides/visiting-basics.html">Visiting Basics</a></li>
            <li><a href="../../../guides/first-time.html">Your First Visit</a></li>
            <li><a href="../../../guides/staying-in-touch.html">Staying in Touch</a></li>
            <li><a href="../../../guides/sending-money.html">Sending Money</a></li>
            <li><a href="../../../guides/know-your-rights.html">Know Your Rights</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>States</h4>
          <ul><li><a href="../index.html">[State Name]</a></li></ul>
        </div>
        <div class="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="../../../about.html">About This Site</a></li>
            <li><a href="mailto:prisonvisitorguide@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">Not affiliated with any corrections department. Information may change without notice.</div>
    </div>
  </footer>
</body>
</html>
```

### Template 3: Facility Page

Location: `/states/[state]/facilities/[facility].html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Facility Name] — Prison Visitor Guide</title>
  <link rel="stylesheet" href="../../../css/style.css">
</head>
<body>
  <div class="disclaimer-bar">
    This site is for informational purposes only and is not legal advice. Information comes from publicly available sources, including official [STATE] corrections department materials and community resources. Always verify details with the facility, as policies can change without notice.
  </div>

  <header class="site-header">
    <div class="header-inner">
      <a href="../../../index.html" class="site-title">Prison Visitor Guide</a>
      <nav class="site-nav">
        <div class="nav-dropdown">
          <span class="nav-label">Guides</span>
          <div class="dropdown-menu">
            <a href="../../../guides/visiting-basics.html">Visiting Basics</a>
            <a href="../../../guides/first-time.html">Your First Visit</a>
            <a href="../../../guides/staying-in-touch.html">Staying in Touch</a>
            <a href="../../../guides/sending-money.html">Sending Money</a>
            <a href="../../../guides/know-your-rights.html">Know Your Rights</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <span class="nav-label">States</span>
          <div class="dropdown-menu">
            <a href="../index.html">[State Name]</a>
          </div>
        </div>
        <a href="../../../about.html">About</a>
      </nav>
    </div>
  </header>

  <article class="container">
    <p class="breadcrumb">
      <a href="../../../index.html">Home</a> /
      <a href="../index.html">[State Name]</a> /
      [Facility Name]
    </p>

    <div class="page-header">
      <h1>[Facility Name]</h1>
      <p class="subtitle">Location description or visiting summary</p>
    </div>

    <!-- Quick Facts -->
    <section class="quick-facts">
      <h2>Quick Facts</h2>
      <div class="key-info">
        <div class="key-info-item">
          <strong>Facility Code:</strong> [CODE]
        </div>
        <div class="key-info-item">
          <strong>Security Level:</strong> [LEVEL]
        </div>
        <div class="key-info-item">
          <strong>Address:</strong> [ADDRESS]
        </div>
        <div class="key-info-item">
          <strong>Main Phone:</strong> [PHONE]
        </div>
      </div>
    </section>

    <!-- Visiting Section -->
    <section class="visiting-section">
      <h2>Visiting Hours & Basics</h2>
      <p>Introductory paragraph.</p>

      <div class="key-info">
        <p><strong>Standard visiting hours:</strong> [HOURS]</p>
        <p><strong>Contact visits:</strong> [YES/NO/VIDEO]</p>
        <p><strong>What to bring:</strong> [ITEMS]</p>
      </div>

      <h3>Getting There</h3>
      <p>Directions.</p>

      <h3>Parking & Entrance</h3>
      <div class="key-info">
        <p><strong>Parking:</strong> [INFO]</p>
        <p><strong>Check-in:</strong> [INFO]</p>
      </div>
    </section>

    <!-- Nearby Amenities -->
    <section class="nearby-amenities">
      <h2>Nearby Food & Gas</h2>
      <div class="key-info">
        <p><strong>Gas:</strong> [INFO]</p>
        <p><strong>Food:</strong> [INFO]</p>
      </div>
    </section>

    <!-- Reality Checks -->
    <section class="reality-checks">
      <h2><span class="reality-check-label">Additional Information</span></h2>
      <div class="reality-check">
        <h3>Important Detail</h3>
        <p>Information about visiting or facility operations.</p>
      </div>
    </section>

    <!-- Learn More — link to STATE guides, not national -->
    <section class="more-info">
      <h2>Learn More</h2>
      <p>For detailed [state]-specific information:</p>
      <ul>
        <li><a href="../guides/visiting.html">Visiting in [State]</a></li>
        <li><a href="../guides/mail.html">Mail & Packages</a></li>
        <li><a href="../guides/phone-video.html">Phone & Video Calls</a></li>
        <li><a href="../guides/money.html">Sending Money</a></li>
        <li><a href="../guides/medical.html">Medical & Mental Health</a></li>
        <li><a href="../guides/transfers.html">Transfers</a></li>
      </ul>
    </section>

    <!-- Other Facilities -->
    <section class="other-facilities">
      <h2>Other [State] Facilities</h2>
      <ul>
        <li><a href="other-facility.html">Other Facility Name</a></li>
      </ul>
    </section>

  </article>

  <div class="container">
    <div class="suggestions">
      <h2>Have a correction or suggestion?</h2>
      <p>Help us keep this guide accurate and useful.</p>
      <p><a href="mailto:prisonvisitorguide@gmail.com">Send us your feedback &#8594;</a></p>
    </div>
  </div>

  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-section">
          <h4>Guides</h4>
          <ul>
            <li><a href="../../../guides/visiting-basics.html">Visiting Basics</a></li>
            <li><a href="../../../guides/first-time.html">Your First Visit</a></li>
            <li><a href="../../../guides/staying-in-touch.html">Staying in Touch</a></li>
            <li><a href="../../../guides/sending-money.html">Sending Money</a></li>
            <li><a href="../../../guides/know-your-rights.html">Know Your Rights</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>States</h4>
          <ul><li><a href="../index.html">[State Name]</a></li></ul>
        </div>
        <div class="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="../../../about.html">About This Site</a></li>
            <li><a href="mailto:prisonvisitorguide@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">Not affiliated with any corrections department. Information may change without notice.</div>
    </div>
  </footer>
</body>
</html>
```

---

## Styling Examples

### Callout Boxes

Informational callout (warm background):
```html
<div class="callout">
  <div class="callout-title">Title Here</div>
  <p>Content paragraph.</p>
</div>
```

Warning callout (red border):
```html
<div class="callout-warning">
  <strong>Label:</strong> Warning message text.
</div>
```

Tip callout (gold border):
```html
<div class="callout-tip">
  <strong>Tip:</strong> Helpful information.
</div>
```

Reality check box:
```html
<div class="reality-check">
  <p class="reality-check-label">Label:</p>
  <p>Explanatory text about reality/situation.</p>
</div>
```

### Numbered Steps

```html
<div class="steps">
  <div class="step">
    <div class="step-content">
      <h3>Step Title</h3>
      <p>Step description or instructions.</p>
      <ul>
        <li>List item</li>
        <li>List item</li>
      </ul>
    </div>
  </div>

  <div class="step">
    <div class="step-content">
      <h3>Another Step</h3>
      <p>More content.</p>
    </div>
  </div>
</div>
```

CSS automatically numbers steps with circles and divides them with lines.

### Data Table (Cost Table)

```html
<table class="cost-table">
  <thead>
    <tr>
      <th>Column Header</th>
      <th>Another Column</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
      <td><span class="cost-amount">$XX.XX</span></td>
    </tr>
  </tbody>
</table>
```

---

## Common Mistakes to Avoid

### CRITICAL MISTAKES

1. **Using `<div class="container">` instead of `<article class="container">`**
   - This causes ALL typography to be unstyled (headings, paragraphs, lists)
   - Always use `<article class="container">` for content
   - `<div class="container">` is only for breadcrumbs, suggestions box, etc. outside the main article

2. **Forgetting id attributes on sections**
   - If you create a TOC, every section that is linked must have a matching id
   - Example: `<h2 id="visiting-basics">Visiting Basics</h2>` matches `<a href="#visiting-basics">`

3. **Using inline styles instead of CSS classes**
   - Never use `style="..."` attributes
   - All styling goes in the `<link rel="stylesheet">` in the CSS file
   - Find or create the appropriate class, don't inline styles

### TONE MISTAKES

4. **Using emotional/advisory language**
   - Wrong: "Don't worry, you'll get the hang of it!"
   - Right: "Most visitors become familiar with procedures across multiple visits."
   - Wrong: "This can feel intimidating"
   - Right: "The facility has uniformed staff, institutional furniture, and other visitors present"

5. **Giving advice or empathy**
   - Wrong: "We recommend staying positive"
   - Right: "Phone calls are available [details about frequency and cost]"

### STRUCTURAL MISTAKES

6. **Broken CSS variable names**
   - Wrong: `var(--text-light)` (doesn't exist)
   - Right: `var(--color-text-light)` (correct variable name from :root)

7. **Forgetting the disclaimer bar**
   - Every page must have `<div class="disclaimer-bar">` immediately inside `<body>`

8. **Wrong CSS paths**
   - Wrong: Guide page uses `href="css/style.css"` (should be `../css/style.css`)
   - Right: Check the table in the "CSS Stylesheet Link Paths" section for your page location

9. **Missing a:visited color override**
   - Causes purple links to appear (browser default)
   - The stylesheet already handles this globally—just verify links are working

10. **Not including proper TOC link structure**
    - TOC links must be actual `<a>` tags with `href="#id"`
    - Must have matching section `id` on the page
    - Use `<span class="toc-number">` for automatic numbering

---

## When to Use Each Class

### Navigation & Structure
- `.page-toc` - Create table of contents on every 3+ section page
- `.breadcrumb` - Navigation path at top of page
- `.container` / `.container-narrow` - Content width constraints

### Information Boxes
- `.key-info` - Lists of facts (use `<ul>` with `<li>` containing `<strong>` labels)
- `.callout` - General informational callout
- `.callout-warning` - Safety warnings, legal warnings
- `.callout-tip` - Helpful hints
- `.reality-check` - Context about real-world situations
- `.start-here` - Homepage intro box

### Content Organization
- `.steps` - Numbered sequential process
- `.guide-list` - List of guides with descriptions
- `.cost-table` - Financial/fee information

### Page Type Specific
- `.hero` - Homepage only, large centered section
- `.section-heading` - Large section title on homepage/state pages (has gold underline)
- `.quick-facts` - Facility info box
- `.visiting-section`, `.nearby-amenities`, `.other-facilities` - Facility page sections
- `.overview-topic` - Homepage topic overview

---

## Accessibility Considerations

- All links use semantic `<a>` tags with `href` attributes
- Images use `max-width: 100%; height: auto;` for responsiveness
- Font sizes are readable (minimum 15px for body text, 16px base)
- Color contrast maintained throughout (text is dark on light backgrounds)
- TOC uses semantic list structure (`<ol>`)
- Heading hierarchy is maintained (h1 → h2 → h3, no skipping levels)

---

## Responsive Design

The stylesheet includes responsive design for mobile devices (max-width: 768px):
- Header flexes and wraps on mobile
- Navigation wraps
- Font sizes scale down appropriately
- Footer changes to single-column layout

You don't need to add media queries for new pages—the stylesheet handles it globally.

---

## Quick Checklist for New Pages

Use this checklist every time you create a new page:

- [ ] Page in correct location (guides/, states/[state]/guides/, etc.)
- [ ] DOCTYPE and `lang="en"` set
- [ ] Correct `<title>` format: "[Page Name] — Prison Visitor Guide"
- [ ] Correct CSS path for page location
- [ ] Disclaimer bar included
- [ ] Header with correct nav links
- [ ] Breadcrumb navigation in `<div class="container">`
- [ ] All content in `<article class="container">` (NOT `<div>`)
- [ ] Page header with h1 and optional subtitle
- [ ] TOC included if 3+ sections
- [ ] All TOC section links have matching ids on h2/h3 elements
- [ ] No inline styles (use CSS classes only)
- [ ] Tone is informational, not advice-giving
- [ ] Footer with all sections
- [ ] Suggestions/feedback box before footer
- [ ] Footer copyright/disclaimer at bottom

---

## Questions or Inconsistencies?

If you encounter something not covered in this guide:

1. Check existing pages in the same category (guides/, facilities/, etc.) for patterns
2. Consult the style.css file for available classes and their purpose
3. Maintain consistency with existing pages
4. When in doubt, err on the side of simplicity and clarity

This is the single source of truth. All pages must follow this guide.
