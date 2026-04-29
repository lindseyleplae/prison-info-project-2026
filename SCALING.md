# Scaling Manual: How to Build Content Without Breaking Things

This file is for any AI agent (Claude, Codex, Gemini) or future contributor doing bulk content work on the Prison Visitor Guide. **Read this before starting any session that touches more than one content file.**

It exists because we have repeatedly shipped work that passed every automated check and still looked broken on the live site. Every rule in this document is here because someone broke it and Lindsey caught it. None of these are theoretical.

---

## The five rules that override everything else

### 1. Think before you write.
Before drafting any page, ask: *what would actually be useful to a family member visiting this facility for the first time?* Not "what does the template require." If the template would produce a generic page, the template is wrong, not your judgment. Surface it.

### 2. Visual quality is the bar, not schema validation.
A page can pass `npm run build`, `npm run lint:tone`, and `npm run check:links` and still look completely broken on the live site. **Quality gates passing is necessary but not sufficient.** You have not finished a content task until you have looked at the rendered HTML or the live page.

### 3. Render-check before pushing.
Before commit, build locally and inspect the rendered HTML for at least one representative page in the batch. Pay specific attention to anywhere a frontmatter field gets rendered into the layout (sidebar widgets, hero blocks, callouts). If you cannot describe what each new page actually looks like, you have not earned the right to push.

### 4. Tone is non-negotiable and the tone linter is not enough.
The tone linter catches a fixed list of banned phrases. It does not catch advice-giving, second-person preachy framing, or editorializing. You must read every page Codex writes and check tone manually.

### 5. Preserve facts when restructuring.
Rewriting an existing page means starting from the existing facts and improving the structure — not generating new prose from scratch. Any verified contact info, address, schedule, or facility-specific detail in the old version must survive the rewrite or be replaced with a verified source.

### 6. Sourced or attributed — never invented.
For any factual claim on a page, you must be able to point to a source. The hierarchy:
1. **Official source** (state DOC website, government data) — preferred for addresses, phones, schedules, capacity, custody levels, formal rules.
2. **Attributed source** (visitor forums, nonprofit handbooks like Friends Outside or TIFA, news coverage with concrete observations) — acceptable for practical info that families commonly need but isn't formally documented (cell signal, processing-time experience, parking-lot patterns). Frame as "Visitors have reported that..." or "Per [source]...". Never dress up an inference as if it were attributed.
3. **No source** — omit. Do not guess. "The parking lot has 47 spots" is wrong if you don't know it. "Parking is available on-site" is fine when verified; "Parking can fill on busy weekends per visitor accounts" is fine when the pattern is observed in family forums.

This is not theoretical: the site is a public reference families rely on during real prison visits. A made-up number that families plan around can cause real harm. When in doubt, leave it out.

---

## Lindsey's reality (the human side)

- She is non-technical. She cannot review every page individually, and she should not have to.
- She communicates in vibes and goals, not specs. "These look good. Lets implement for all of them" means "do the same pattern across the rest of the site, applying judgment about edge cases."
- She trusts the orchestrator (Claude) to translate her intent into precise tasks for builders (Codex).
- When something looks broken, she tells you in plain English ("the times look messed up"). Your job is to find the root cause, not just patch the surface.
- She is shipping a public website families will use during real prison visits. Mistakes erode the trust the site is built on.

---

## The multi-agent workflow

Claude orchestrates. Codex builds. Gemini designs. The full protocol is in `Assistant/CLAUDE.md` and `Assistant/agent-configs/`. The short version for content work:

1. **Claude** writes the brief (file paths, template, tone rules, constraints, required reading).
2. **Codex** drafts the content (research, schema-correct frontmatter, body content).
3. **Claude** reviews tone, fact accuracy, and visual rendering.
4. **Claude** commits and pushes (never Codex — Claude is the quality gate).

If the brief is vague, Codex produces vague work. Investing 5-10 extra minutes on a precise brief saves an hour of fix-up.

---

## Before starting any bulk content work

This is a real checklist. Do every item before drafting a single page.

- [ ] Read `CLAUDE.md` — current project rules, design tokens, owner non-negotiables
- [ ] Read `PLAYBOOK.md` — current step-by-step + the unified facility template
- [ ] Read `SPEC.md` — content model and architecture decisions
- [ ] Read `src/content.config.ts` — the Zod schema. Frontmatter must validate or build fails.
- [ ] Read `src/lib/remark-content-blocks.mjs` — the supported directive blocks (`:::callout`, `:::key-info`, `:::reality-check`, `:::steps`, `:::cost-table`, `:::quick-facts`)
- [ ] Read 1-2 existing files of the type you're creating (e.g. for a new facility, read `src/content/facilities/ca-folsom.md` and `ca-cim-chino.md`)
- [ ] Read `memory/feedback_visual_quality.md` and any other recent feedback memories
- [ ] Skim the layout file that will render your content (e.g. `src/layouts/FacilityLayout.astro` for facility pages) — know what each frontmatter field becomes in the UI

If you skipped any of these, you are about to repeat someone's prior mistake.

---

## Writing a Codex brief

A Codex brief that produces good work has all of these:

1. **Concrete file paths** — not "create a few facility pages," but "create these 5 files at these exact paths."
2. **Required reading list** — the specific files Codex must read FIRST, before drafting.
3. **The exact template** — frontmatter schema and body structure, with examples.
4. **Tone rules with examples** — specific phrases banned, with the factual rewrite shown alongside.
5. **Visual rules with the why** — not just "keep `visiting.hours` short," but "because it renders as a single-line `<dd>` in the sidebar widget."
6. **Constraints on what NOT to modify** — schema, layouts, components, CSS, other states. Codex should stop and surface if it needs any of these.
7. **Output format** — what report Codex should produce when done.
8. **Fact preservation rule** — when rewriting, extract facts from existing files; do not invent new ones.

If your brief is shorter than 200 lines, it is probably too vague. The unification brief that produced the current California pages was 250+ lines. The result was 7 high-quality pages on the first try.

---

## The Claude review checklist (mandatory before any push)

After Codex finishes, Claude must do all of these. No skipping. No "the gates passed so it's fine."

### Tone review
- [ ] Read every file Codex produced. Every word.
- [ ] Check for banned phrases (see below) — even ones not in the linter
- [ ] Check for advice-giving framing ("You should", "Be sure to", "Don't forget to")
- [ ] Check for editorializing ("generally well-organized", "surprisingly easy")
- [ ] Check for "loved one" overuse — prefer "incarcerated person" or specific reference
- [ ] Check for emotional language ("unfortunately", "heartbreaking", "tough")

### Fact review
- [ ] Verify any phone numbers, addresses, hours look reasonable for the facility
- [ ] Confirm linked URLs are well-formed
- [ ] Confirm `lastVerified` and `reviewBy` dates are correct (today's date and ~3 months out)
- [ ] If the rewrite removed information from the existing version, confirm it was outdated/incorrect, not just inconvenient

### Visual / render check
- [ ] Run a clean local build (`rm -rf .astro dist && npm run build`)
- [ ] Inspect the rendered HTML for at least one representative page (`grep` or read `dist/.../index.html`)
- [ ] Check that any multi-line frontmatter content renders correctly
- [ ] Check that key-info blocks, callouts, and bulleted lists inside callouts render as expected
- [ ] Check that times, ratios, and any colon-containing text render inline (the parser fix should handle this; verify it still does)

### Quality gates
- [ ] `npm run build` — passes, no new warnings
- [ ] `npm run lint:tone` — passes, no new soft warnings on YOUR files
- [ ] `npm run check:links` — passes, no broken internal links

### Post-push check
- [ ] Wait for GitHub Actions to deploy
- [ ] Curl the live page: `curl -sI https://prisonvisitorguide.org/...`
- [ ] At least one HTTP 200 confirmation per page added/changed

If you push without doing the visual check and Lindsey catches a rendering issue, you have failed. The cost of a 30-second render check is much lower than the cost of an emergency fix-up after the fact.

---

## Banned phrases and tone traps

The hard linter catches some, but not all. Reject all of these in review:

| Banned | Why | Factual rewrite |
|--------|-----|----------------|
| "Be aware that..." | Preachy second-person | State the fact directly |
| "Don't be surprised if..." | Preachy + emotional | "X happens during Y because..." |
| "Don't be alarmed if..." | Preachy + emotional | "X typically takes Y due to Z." |
| "Have a backup plan" | Advice-giving | Cut, or describe the fact prompting it |
| "Set up X early" | Advice-giving | "X is required for Y." |
| "Be sure to..." | Preachy | "Visitors must..." |
| "You should..." | Preachy second-person | Recast as third-person fact |
| "Loved one" (overused) | Therapy-speak | "Incarcerated person", "the person being visited", or specific name |
| "Unfortunately" | Editorializing | Cut — state the fact alone |
| "Heartbreaking", "tough" | Emotional | Cut — state the fact alone |
| "Generally well-organized" | Editorializing | Cut, or cite a specific factual claim |
| "Surprisingly easy" | Editorializing | Cut — state actual time/distance |
| "Don't count on..." | Preachy | "X is not reliable" or "X is not guaranteed" |

The rule: if a sentence carries an attitude, a feeling, or an instruction to the reader, rewrite it as a third-person factual statement.

---

## Visual rules that must always hold

These are the rules Codex must follow and Claude must verify:

1. **Never put `## Quick Facts` (or any duplicate Quick Facts heading) in body content.** The sidebar widget already renders this. A body heading creates an empty section.

2. **Never cram multi-day visiting schedules into the `visiting.hours` frontmatter field.** It renders as a single line in the sidebar. Use one short range there (e.g. `"8:30 AM - 2:30 PM (Sat-Sun)"`) and put the full breakdown in the body's "Visiting Hours and Procedures" key-info block as a bulleted list.

3. **Never hand-code "Other [State] Facilities" cross-link sections at the bottom.** The layout doesn't auto-update them, so they go stale every time a new facility is added. Leave them out.

4. **Never include filler "Reception Center Operations" / "Facility Visit Information" sections** with multiple `:::reality-check` blocks of stilted auto-generated language. These add no value and they're easy to spot — they're 5+ identical-looking reality-check blocks in a row.

5. **Never include "Tips for Managing X Visits" sections.** Tips are advice-giving by definition. Convert each tip into a factual statement about the facility, or cut.

6. **Never add an empty section heading** with no content under it. If a section has no real content, skip the heading entirely.

7. **Use only the supported directive blocks.** They are: `:::callout{variant="warning"|"tip"|"info"}`, `:::key-info`, `:::reality-check`, `:::steps`, `:::cost-table`, `:::quick-facts`. Anything else won't render.

8. **The colon character `:` inside paragraph text is now safe** thanks to the parser fix in `src/lib/remark-content-blocks.mjs` (April 2026). Times like `12:00 p.m.`, ratios like `3:1`, and ports like `:8080` all render correctly. If this changes, restore the fix before doing any content work.

---

## UI and CSS changes need behavior testing, not just render checks

The "render-check before pushing" rule (rule 3 above) is about confirming the HTML output matches what the markdown said. That's necessary for content work but **insufficient for changes to layouts, components, CSS, or JavaScript.** A page can have perfectly correct HTML and still be broken interactively.

For any change to:
- Layouts (`src/layouts/*.astro`)
- Components (`src/components/*.astro`)
- CSS (`src/styles/*.css`) — especially `:hover`, `:focus`, `:focus-within`, `:active`, transitions, z-index, position
- The header script or any other inline `<script>`
- Anything affecting mobile viewport behavior

**You must also do interactive verification.** Inspecting the rendered HTML doesn't catch:
- Z-index stacking issues (an overlay rendered correctly but invisible behind another element)
- CSS state rules leaking into the wrong viewport (e.g. `:focus-within` keeping mobile menus visible after tap)
- JS that runs but has no visible effect because CSS overrides it
- Hover-vs-touch differences
- Tap targets too small or in the wrong place

### The interactive verification checklist

For UI/CSS changes, before pushing:

1. **Run the dev server** (`npm run dev`) and open the affected page.
2. **Test the actual interaction** — click the thing, tap it, trigger every state. Don't just look at the static page.
3. **Test on a small viewport.** Open DevTools, switch to mobile preview (iPhone SE / 375px width is a good worst case), AND test the live site on your actual phone after deploy. Mobile is the majority of this audience.
4. **Test every state of an interactive component.** Examples:
   - **For a menu:** open, close via the toggle, close by clicking outside, close by scrolling, expand and collapse submenus, navigate links inside it, escape key closes it.
   - **For a card:** tap on heading, tap on body text, tap on description paragraph, tap on white space inside the card. All should follow the same link.
   - **For a callout/box:** confirm spacing on mobile and desktop, confirm text wrapping, confirm any internal lists render as lists not as run-together prose.
5. **Test the worst case explicitly.** If the change touches mobile menu behavior, open the menu and try the things that broke before (scroll, tap submenus, close).

### CSS traps that have actually bitten us — never repeat these

Each of these is in this section because we shipped it broken and Lindsey caught it. Read these BEFORE writing CSS that involves the listed pattern:

- **`:hover`, `:focus`, `:focus-within` rules for hover dropdowns must be scoped to desktop.** Touch devices retain focus on tapped buttons, so a rule like `.menu:focus-within .submenu { display: grid }` will keep the submenu visible on mobile after the user thinks they closed it. Always wrap such rules in `@media (min-width: 64rem)`. Mobile interactive state should come from JS (e.g. `data-open` attributes), not from focus pseudo-classes.

- **Whole-card-clickable overlays need `z-index`.** The pattern is `position: relative` on the card plus `::after { content: ''; position: absolute; inset: 0 }` on the heading link. Without `z-index: 1` on the pseudo, the descriptive paragraph below the heading paints on top in stacking order and eats the click. Always add `z-index: 1` to the overlay. Currently used in `.section-card` and `.facility-card` — follow the same pattern for any new card type.

- **CSS for `:hover` color/border changes implies the whole element is clickable.** If you add a hover style to a container, the user expects to click anywhere in that container and have something happen. Either make the whole container clickable (card-overlay pattern above) or remove the hover style. A "looks clickable but isn't" element is worse than no hover style at all.

- **The Markdown directive parser eats colons in body text** unless the parser fix in `src/lib/remark-content-blocks.mjs` is in place. Times like `12:00`, ratios, ports — all of them — render as broken empty `<div>` elements without that fix. Already fixed (April 2026); just don't remove it.

### When you have to touch a layout/component to do a content task

The PLAYBOOK says "adding a state or facility = content files only, never touch layouts or CSS." That rule still holds. But sometimes a content task surfaces a real layout/CSS bug (e.g. multi-day visiting hours don't render because the field is too long for the sidebar). In that case:

1. **Stop and surface the question to Lindsey.** Don't silently work around it by overstuffing strings or doing weird hacks.
2. If she approves the layout/CSS fix, treat it as a separate change, with the interactive verification checklist above.
3. Update SCALING.md with whatever new trap you uncovered, so the next person doesn't relearn it.

---

## Common scaling tasks

### Adding a new state
See `PLAYBOOK.md` Step 1-6. The state config is one file; the 6 state guides are six files; pick 3-5 best-known facilities to start. **Do not add 20 facilities at once** — Lindsey cannot review that volume, and a flaw in your template would replicate across all of them. Add 5, get feedback, then scale.

### Adding more facilities to an existing state
Use the unified facility template in `PLAYBOOK.md`. **Read 1-2 existing facility pages from the same state first** to absorb the voice and the level of detail. Pick facilities in batches of 3-5.

### Updating existing content
- Bump `lastReviewed` (guides) or `lastVerified` and `reviewBy` (facilities) when you change facts
- If you remove information, it must be because it's wrong or outdated, not because it's inconvenient
- Run all gates and the render check just like for new content

### Restructuring (changing the template for many existing pages)
- Big change. Always confirm direction with Lindsey before starting.
- Brief Codex on the new template AND on extracting facts from old versions.
- Word counts should converge to a tight range after the restructure (a sign that pages are now consistent).
- Update `PLAYBOOK.md` immediately after a successful restructure so the new template is documented.

---

## When something doesn't fit the template

The template exists to keep facility pages consistent. But sometimes a facility genuinely needs a section that's not in the template (e.g., a federal facility with a different visitor approval process, or a death row facility with restricted visiting that warrants its own callout).

**Do not work around the template by overstuffing existing fields.** Instead:

1. Stop and surface the question to Lindsey: "X facility has Y characteristic that doesn't fit the current template. Options: (a) extend the template to handle this case for all facilities, (b) add a one-off section for this facility, (c) skip the unique info."
2. Wait for direction before continuing.

Working around constraints with hacks always produces worse output than asking for clarity.

---

## When you (Claude) make a mistake

Lindsey will catch it eventually. When she does:

1. **Do not minimize.** "It still has the empty heading" is real, not nitpicky.
2. **Find the root cause, not just the surface symptom.** When she said "the visiting times are messed up," the surface symptom was awkward sidebar text; the root cause was the colon parser eating times across all pages.
3. **Fix the underlying bug, not just the file she mentioned.** Other pages have the same problem.
4. **Update the relevant doc** (this file, PLAYBOOK.md, CLAUDE.md, or a memory) so the lesson sticks. The next session needs to start with this knowledge baked in.
5. **Save a feedback memory** if it's a process issue, not just a one-off content fix.

The goal is to make every mistake the last time that mistake happens. If the same class of issue recurs, the doc is failing.

---

## What to never do

- Push without a render check
- Push UI/CSS/component changes without interactive verification on a mobile viewport
- Add CSS hover styles to a container without making the whole container clickable (or remove the hover style)
- Trust the tone linter alone — it doesn't catch advice-giving or editorializing
- Generate content from a blank template without reading existing examples first
- Invent facts when the source isn't clear — write less rather than guess
- Modify the schema, layouts, components, or CSS as part of a content task without flagging it
- Skip the post-push live verification
- Move on after Lindsey reports an issue without confirming you understand the root cause

---

## What to always do

- Read this file at the start of any bulk content session
- Write a precise brief before delegating to Codex
- Review every file Codex produces, not just the report
- Build locally and inspect the rendered HTML
- Run all three quality gates
- Verify the live site after deploy
- For UI/CSS/component changes: actually click and tap the affected interactive elements on a mobile viewport before pushing
- Keep this file updated as new lessons surface

---

*Last updated: 2026-04-29 (added UI/CSS interactive verification section after mobile menu and card-overlay bugs)*
*Add updates inline as new lessons emerge. This file is the project's institutional memory for scaling.*
