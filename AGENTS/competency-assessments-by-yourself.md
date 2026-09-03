# Competency assessments (by yourself)

Contract: [`uk-gdad-pcf-competency-assessments-by-yourself/spec/index.md`](../uk-gdad-pcf-competency-assessments-by-yourself/spec/index.md).

See also [`AGENTS/competency-assessments-by-assessor.md`](competency-assessments-by-assessor.md),
the sibling this project is derived from. The two share a matrix — same
skills, same baselines, same behavioural indicators — but every section that
addresses the reader is rewritten here for someone rating themselves.

## What this is, and is not

The same competency matrix as the by-assessor sibling, completed by the
reader about themselves: a skill-by-skill self-rating against the framework's
own description of a role level, 0–4 against observable behaviour, with no
assessor in the room.

It is **not** a validated assessment instrument, and it carries less weight
than even its own unvalidated sibling, because nobody is checking the rating
against evidence but the person giving it. Every file says so in
`## Advisory`, and `bin/check` enforces that the section exists.

It is also not the [skills gap form](roles-skills-gap-forms.md), which covers
job tasks and legal compliance as well as skills, and it is not the
[psychometric assessment](assessments-by-yourself.md), which tests reasoning
and judgement through practice items rather than demonstrated skill.

## This project is generated from its sibling

Unlike most projects here, this one is not drafted fresh from the role
summary — it is produced by transforming
[`uk-gdad-pcf-competency-assessments-by-assessor`](../uk-gdad-pcf-competency-assessments-by-assessor)'s
existing matrix for the same slug. The skill list, the baseline points and the
behavioural indicators carry over unchanged, because the framework's own
description of a role level does not depend on who is holding the pen. What
changes is voice: anything written to an assessor about "the candidate" is
rewritten to address the reader directly about themselves.

## Shape

The same nine `##` sections as the by-assessor sibling, in the same order —
`bin/check` enforces both projects against the same section list:

1. `## Introduction` — an invitation to rate yourself honestly, not a brief to an assessor
2. `## Advisory` — the standing caution, verbatim (see [its own wording](../uk-gdad-pcf-competency-assessments-by-yourself/spec/index.md#the-advisory) — it is not the same text as the sibling's)
3. `## How to use this assessment` — preparing, rating on your own evidence, staying consistent, staying kind to yourself
4. `## Rating scale` — the same 0–4 proficiency scale, with the worked example reworded to "if you…"
5. `## About this role level` — carried over unchanged from the sibling
6. `## Competency matrix` — the sibling's blocks, with evidence-to-gather prompts turned into self-reflection prompts
7. `## Overall determination` — the same skill table, with guidance on reading your own pattern of ratings
8. `## Assessor notes and evidence log` — heading kept for contract parity; content is a personal reflection log
9. `## Conclusion` — encourages treating a low rating as a starting point, not a verdict

## Writing it

Read the sibling file for the same slug and the role summary, then rewrite
only what needs a different voice — see
[the project specification](../uk-gdad-pcf-competency-assessments-by-yourself/spec/index.md)
§ Writing the sections for exactly which sections are copied unchanged and
which are rewritten, and how.

## Register

Follows the sibling's register rule — how senior the role level being rated
is, not the reader's tone — but the tone addressed to the reader is warmer and
more encouraging than the sibling's even-toned assessor prose at every level,
because a self-rating exercise that feels punitive defeats its own purpose.
