---
name: Attributed claims OK; making up facts is not
description: When something is genuinely useful but not in an official source, attribute it ("visitors have reported"); never invent.
type: feedback
---

Lindsey's direction (2026-04-29): "Even if we can't factually say state something as, like, definitive, like, cell service at the unit or whatever. We can say things like, people have reported that cell signal isn't good or whatever. Like, but, yeah, just make sure that you're not just making up a bunch of information. This is really, really, really, really important."

**Why:** The site's value depends on adding practical information families can't easily get from official state DOC sources. Some of the most useful info (cell signal, processing-time experiences, what the parking area is really like) is not in any official document. The choice between "perfect official sourcing only" and "make stuff up" is a false dichotomy. There is a middle path: attributed claims sourced to visitor experience, family forums, or known nonprofit guidance.

**How to apply:**

**Allowed attribution patterns:**
- "Visitors have reported that..." (for cell signal, parking experience, processing wait times that aren't officially documented)
- "Online forums for prison families frequently note that..." (for repeated patterns observed in r/PrisonTalk, family Facebook groups, etc.)
- "Friends Outside / TIFA (Texas Inmate Families Association) advises..." (for nonprofit-sourced practical info)
- "Per visitor accounts on [community forum]..." (when there's a single notable source)

**Hard rules:**
- Never invent a specific fact. "The parking lot has 47 spots" is wrong if you don't know. "Parking is available on-site" is fine; "Parking can fill on busy weekends per visitor accounts" is fine if that pattern is observed in family forums.
- Attribute when uncertain. If it can't be attributed AND can't be verified, omit it.
- Do not turn attributed claims into instructions. "Visitors have reported limited cell signal in the parking area" is fine. "If signal is poor, you may want to..." crosses into advice-giving.
- Do not exaggerate the source. "Some visitors have noted X" if there are isolated reports; "Visitors commonly report X" only if the pattern is widely documented.

**When Codex is producing content:**
- Default to TDCJ-sourced facts where they exist.
- Where supplemental info would be useful but TDCJ doesn't document it, look for attributed sources (visitor forums, nonprofit handbooks, news coverage with concrete observations).
- If even attributed sources are unavailable, omit rather than guess.

**When Claude is reviewing:**
- For each unsupported claim, ask: is this verifiable from a source, or am I/Codex inferring it? If inferring, it must be either attributed or removed.
- For each "[verb] have reported that..." sentence, ask: is the source actually visitor accounts, or am I dressing up an inference?
