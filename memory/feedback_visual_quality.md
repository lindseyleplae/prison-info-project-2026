---
name: Visual quality is the bar before pushing, not after
description: Lindsey will not review every page individually. Visual cleanness is Claude's job to verify before deploy.
type: feedback
---

When generating bulk content (facility pages, state pages, etc.), the work is not "done" when quality gates (build, lint:tone, check:links) pass. The visual rendering must also be clean.

Specifically: any frontmatter field that gets rendered into the layout (sidebar widgets, hero blocks, etc.) must be sized and formatted to fit. Cramming long multi-line strings into single-line `<dd>` elements produces visually broken pages even when all schema validation passes.

**Why:** Lindsey is non-technical and is shipping a public website families will use. She does not have capacity to review every page individually before it goes live. If pages look rough on the live site, that erodes trust in the project. She caught two real visual issues in the first batch of 5 facility pages (empty `## Quick Facts` heading carried over from old templates, and overly long `visiting.hours` strings squished into the sidebar) — these should have been caught BEFORE pushing.

**How to apply:**
- After Codex (or any agent) drafts content, before committing: open one or two of the generated pages in the dev server (or read the layout component to understand what each frontmatter field renders to) and verify the visual output, not just the schema.
- For any field that becomes a single-line UI element, treat as a UI string with a tight character budget — write it like a button label, not a paragraph.
- When updating PLAYBOOK.md after a visual issue surfaces, name the issue specifically so Codex can avoid repeating it.
- If the schema or layout makes it impossible to express something cleanly in the sidebar, surface that as a "the schema needs updating" question rather than working around it with overstuffed strings.
