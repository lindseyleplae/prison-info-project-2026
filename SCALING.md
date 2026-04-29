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
- Keep this file updated as new lessons surface

---

*Last updated: 2026-04-29*
*Add updates inline as new lessons emerge. This file is the project's institutional memory for scaling.*
