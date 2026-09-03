# Competency assessments (by yourself) — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy, the
role index, slugs, style, and licensing. This file covers only what is specific
to this project.

- [Purpose](#purpose)
- [What this is not](#what-this-is-not)
- [Input](#input)
- [Output](#output)
- [The rating scale](#the-rating-scale)
- [Writing the sections](#writing-the-sections)
- [Register](#register)
- [Retired levels](#retired-levels)
- [Authoring](#authoring)
- [Quality bar](#quality-bar)
- [Registration](#registration)

## Purpose

For every role level, a self-rating version of the competency assessment: the
same matrix, the same skills, the same five-point scale, but written for the
reader to complete about themselves, at their own pace, without anyone else in
the room.

See [`uk-gdad-pcf-competency-assessments-by-assessor`](../uk-gdad-pcf-competency-assessments-by-assessor)
for the sibling this project is derived from — same skill-by-skill matrix,
same baselines and behavioural indicators, written instead for a manager,
panel or reviewer judging someone else. The two share a document contract
(same nine sections, same title shape, same skill coverage rule) and are
generated from the same source material, but every section that addresses the
reader is rewritten for self-assessment: friendly, encouraging, and honest
about the fact that a rating you give yourself carries less weight than one an
assessor gives you, precisely because nobody is checking it.

**This is not a validated assessment instrument**, and it is not even the
assessor-administered version of one. It has not been piloted, normed, or
checked for adverse impact, and a self-rating from it must never be presented
as equivalent to a formal assessment for a hiring, promotion, pay, performance
or disciplinary decision. Every document says so in its `## Advisory` section,
and that section is required.

## What this is not

| Not | Which is | Where |
| --- | --- | --- |
| An assessor's judgement | The same matrix, completed about someone else by a manager, panel or reviewer | `uk-gdad-pcf-competency-assessments-by-assessor` |
| A performance review | A management process the organisation owns | Not here |
| A psychometric assessment | Tests reasoning and judgement through practice items, either administered or self-practised | `uk-gdad-pcf-psychometric-assessments-by-assessor`, `uk-gdad-pcf-psychometric-assessments-by-yourself` |
| A self-rated skills gap form | Covers job tasks, legal compliance and HR practice as well as skills | `uk-gdad-pcf-roles-skills-gap-forms` |
| A whole-catalogue self-rating | 189 skills, no role context, nothing saved | `uk-gdad-pcf-skills-self-assessment` |
| Legal advice | Named duties, not interpreted ones | See the assessor project's own [Fair and lawful use](../uk-gdad-pcf-competency-assessments-by-assessor/spec/index.md#fair-and-lawful-use) |

The skills gap form and this assessment share the same 0–4 scale points
deliberately, so a person familiar with one recognises the shape of the other.

## Input

Two sources, both required:

1. `uk-gdad-pcf-role-summaries/roles/<slug>.md` — the role, the level, the
   duties, the accountabilities and the skills, in the summary's order.
2. `uk-gdad-pcf-competency-assessments-by-assessor/roles/<slug>.md` — the
   already-written matrix for the same slug: the baseline points, the
   behavioural indicators, and the evidence-gathering prompts. This project
   never invents a different baseline or a different set of indicators from
   its sibling — the framework's own description of the level does not change
   depending on who is holding the pen, only the voice does.

## Output

`roles/<slug>.md`, the same slug as the summary.

### Title

```
# <Level> - Competency Assessment
```

Identical title shape to the assessor-administered sibling, including the
same parenthetical option for naming both the role and the level. The project
directory, not the title, is what tells the two apart — the same pattern used
for the two psychometric assessment projects.

### Required sections

In this order — the same nine as the assessor-administered sibling, so
`bin/check` enforces both projects the same way:

| Section | What it holds |
| --- | --- |
| `## Introduction` | What this is, and an invitation to be honest with yourself |
| `## Advisory` | The standing caution, below |
| `## How to use this assessment` | Preparing, rating on evidence, staying consistent, staying kind |
| `## Rating scale` | The 0–4 scale, with a worked example |
| `## About this role level` | The role, the level, its duties, its accountabilities and the skills it names |
| `## Competency matrix` | One block per skill in the summary, carried over from the assessor-administered sibling |
| `## Overall determination` | The same skill-by-skill table, with guidance on reading your own result |
| `## Assessor notes and evidence log` | Kept as the heading both projects share; the content is a self-reflection log, not an assessor's notes |
| `## Conclusion` | What to do with the result |

### The advisory

`## Advisory` carries this verbatim:

> This competency assessment is created by AI and is a work in progress for
> educational purposes. It is not a validated assessment instrument — it has
> not been piloted, normed or checked for adverse impact — and a rating you
> give yourself here must never be treated as equivalent to a formal
> assessment for a hiring, promotion, pay or performance decision. Use it for
> your own reflection, and talk to your manager, a mentor, or your
> organisation's people development team about what you find.

Written for this project from the start, so it is en-GB throughout — there is
no earlier, self-practice framing to preserve here the way there was for
`uk-gdad-pcf-psychometric-assessments-by-yourself`. See
[`AGENTS/writing.md`](../../AGENTS/writing.md) § Spelling.

## The rating scale

The same five-point proficiency scale as the sibling project — see its
[Rating scale](../uk-gdad-pcf-competency-assessments-by-assessor/spec/index.md#the-rating-scale).
The worked example carries over from the sibling, reworded from "a candidate
who…" into "if you…", since there is no candidate here, only the reader.

## Writing the sections

This project is produced by transforming the assessor-administered sibling,
not by drafting fresh judgement calls, so "writing" here mostly means
rewriting voice rather than rewriting substance.

**Copied unchanged from the sibling:** the skill list and order, every
skill's baseline point, every skill's behavioural indicators, and the
`## About this role level` section (it already describes the role in neutral,
third-person terms that read the same whether an assessor or the role-holder
is reading them).

**Rewritten for the reader rating themselves:**

- `## Introduction` — replaces the sibling's "this is for an assessor…"
  framing with an invitation to the reader: what the exercise is for, and that
  honesty with yourself is the only thing that makes it worth doing.
- `## How to use this assessment` — the sibling's Preparing / Scoring /
  Consistency / Fairness structure becomes Preparing / Rate on evidence / Be
  consistent with yourself / Be kind, and be honest — dropping the
  multiple-assessor and adverse-impact guidance that only makes sense when
  someone else is doing the rating.
- **Evidence to gather**, within each skill block — the sibling's
  interview-style prompts ("ask the candidate to…", "review a sample the
  candidate has…") become first-person reflection prompts ("think about a
  time when you…", "look back at a piece of work you…").
- `## Overall determination` — the same skill-by-skill table, with guidance
  on what your own pattern of ratings might mean, and a self-facing version of
  the closing checklist.
- `## Assessor notes and evidence log` — the heading stays (so both projects
  satisfy the same `REQUIRED_SECTIONS` entry in `bin/check`), but the fields
  become a personal log: the date, which kinds of evidence you drew on, your
  overall notes, and what you want to follow up on — with a line suggesting
  you ask a manager, mentor or trusted colleague for a second opinion if you
  want one, rather than the sibling's "a second assessor is recommended."
- `## Conclusion` — closes by encouraging the reader to treat a low rating as
  a starting point rather than a verdict, and links the same two sibling
  documents (CPD checklist, upskilling resources) the assessor-administered
  version links.

## Register

Register follows the role level being rated, the same axis as the sibling
project: a trainee-level document uses plain, close-supervision language
throughout; a principal-level document assumes more and talks about judgement
and influence rather than supervised tasks. The tone addressed to the reader —
in `## Introduction`, `## How to use this assessment` and `## Conclusion` —
is warm and encouraging at every level, more so than the assessor-facing
sibling's even-toned prose, because the reader here is judging themselves and
the whole point of the exercise fails if it feels punitive.

## Retired levels

The four `chief-digital-and-data` roles the framework marks `NOT IN USE` are
handled the same way as the sibling project: no published baseline, so the
matrix records observed practice rather than a pass or fail, and the
`## Overall determination` checklist asks whether the evidence you gathered
about yourself was sufficient rather than whether you met a target that does
not exist.

## Authoring

1. Read `uk-gdad-pcf-role-summaries/roles/<slug>.md` for the role and level
   sentences used in `## Introduction`.
2. Read `uk-gdad-pcf-competency-assessments-by-assessor/roles/<slug>.md` for
   the matrix content to carry over.
3. Rewrite the sections listed above; carry the rest across unchanged.
4. Write `roles/<slug>.md`.
5. Run `bin/check` from the repository root.
6. Human review — the voice transform is mechanical in places, so check that
   nothing reads as if it were still addressed to an assessor.

## Quality bar

- Every skill the summary names has a block, in the summary's order, matching
  its sibling's baseline and behavioural indicators exactly.
- Nothing in the document addresses the reader as an assessor judging someone
  else — every instruction is second person, addressed to the reader about
  themselves.
- The advisory is present and unmodified.
- The sibling documents linked in `## Conclusion` resolve to the same slug.

## Registration

Registered in [`bin/check`](../../bin/check) the same way as its sibling: in
`DERIVED`, in `REQUIRED_SECTIONS` and `REQUIRED_TITLE_SUFFIX` under this
project's own key, and in `SKILL_BLOCK_PROJECTS` so its `### Skill:` blocks
are checked against the summary the same way. Like its sibling, it is not, at
present, vendored by the website — see the root
[`spec/index.md`](../../spec/index.md) § Known drift.
