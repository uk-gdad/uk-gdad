# Competency assessments — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy, the
role index, slugs, style, and licensing. This file covers only what is specific
to competency assessments.

- [Purpose](#purpose)
- [What this is not](#what-this-is-not)
- [Input](#input)
- [Output](#output)
- [The rating scale](#the-rating-scale)
- [Writing the sections](#writing-the-sections)
- [Register](#register)
- [Fair and lawful use](#fair-and-lawful-use)
- [Retired levels](#retired-levels)
- [Authoring](#authoring)
- [Quality bar](#quality-bar)
- [Registration](#registration)

## Purpose

For every role level, a formal competency assessment: a matrix that measures a
person's specific skills, knowledge, and behaviours against the framework's own
description of that role level, and answers one question —

> **Does this person possess the baseline abilities required to do this job?**

It is written for the person doing the measuring: a line manager, a panel, or a
reviewer, evaluating a candidate or an employee. It is not the person's own
self-report.

**This is not a validated assessment instrument.** It has not been piloted,
normed, or checked for adverse impact, and it must never be the sole basis for
a hiring, promotion, pay, performance or disciplinary decision. Every document
says so in its `## Advisory` section, and that section is required.

## What this is not

| Not | Which is | Where |
| --- | --- | --- |
| A performance review | A management process the organisation owns | Not here |
| A psychometric assessment | Tests reasoning and judgement through practice items an assessor administers | `uk-gdad-pcf-psychometric-assessments-by-assessor` |
| The same matrix, self-rated | This exact matrix, completed by the reader about themselves | `uk-gdad-pcf-competency-assessments-by-yourself` |
| A self-rated skills gap form | The employee's own view of their own gaps | `uk-gdad-pcf-roles-skills-gap-forms` |
| A whole-catalogue self-rating | 189 skills, no role context, nothing saved | `uk-gdad-pcf-skills-self-assessment` |
| Legal advice | Named duties, not interpreted ones | See [Fair and lawful use](#fair-and-lawful-use) |

The skills gap form and this assessment share the same 0–4 scale points
deliberately — the words differ (this project's scale describes proficiency
directly: Beginner, Intermediate, Advanced, Expert; the gap form's describes
frequency of independent practice) because the two documents measure different
things for different readers, but a person familiar with one recognises the
shape of the other.

## Input

`uk-gdad-pcf-role-summaries/roles/<slug>.md` — the role, the level, the duties,
the accountabilities and the skills, in the summary's order. This is the whole
input. Do not read an adjacent level's summary and do not derive one level's
assessment from another level's assessment — the whole point of a per-level
instrument is that the baseline differs.

## Output

`roles/<slug>.md`, the same slug as the summary.

### Title

```
# <Level> - Competency Assessment
```

Title case. Where naming both the role and the level reads better, use
`# <Role> (<Level>) - Competency Assessment`. Only the
`- Competency Assessment` suffix is enforced.

Where the level name itself carries the `-management` track — the summary says
`Role level: Senior developer - management` — put the track in parentheses:
`# Senior developer (management) - Competency Assessment`.

### Required sections

In this order:

| Section | What it holds |
| --- | --- |
| `## Introduction` | Who this is for, what it measures, and how it fits an assessment process |
| `## Advisory` | The standing caution, below |
| `## How to use this assessment` | Preparing, gathering evidence, scoring, staying fair |
| `## Rating scale` | The 0–4 scale, with a worked example |
| `## About this role level` | The role, the level, its duties, its accountabilities and the skills it names |
| `## Competency matrix` | One block per skill in the summary — the heart of the document |
| `## Overall determination` | A scoring summary table and guidance on combining skill ratings into a result |
| `## Assessor notes and evidence log` | A structured space to record evidence, notes and follow-up actions |
| `## Conclusion` | What to do with the result |

Extra `##` sections are allowed. A missing one is a defect.

### The advisory

`## Advisory` carries this verbatim:

> This competency assessment is created by AI and is a work in progress for
> educational purposes. It is not a validated assessment instrument — it has
> not been piloted, normed or checked for adverse impact — and a rating on this
> form must never be the sole basis for a hiring, promotion, pay, performance or
> disciplinary decision. Before using it, consult your organisation's human
> resources, people development, occupational psychology or legal compliance
> colleagues.

Written for this project from the start, so it is en-GB throughout, unlike the
older advisory paragraph carried in some other projects — see
[`AGENTS/writing.md`](../../AGENTS/writing.md) § Spelling.

## The rating scale

Every skill in the competency matrix is rated on the same five-point scale:

| Value | Rating | Meaning |
| ---: | --- | --- |
| 0 | None | No demonstrated experience of this skill |
| 1 | Beginner | Just starting to learn the skill; requires close supervision |
| 2 | Intermediate | Knows the basics and can perform tasks with some guidance |
| 3 | Advanced | Has a strong grasp of the skill and can work independently |
| 4 | Expert | Demonstrates full mastery and can teach or guide others in the skill |

This is a **proficiency** scale, not a frequency scale: it rates how well the
person does the thing, on the evidence available, not how often they do it or
how they feel about it. `## Rating scale` states this, gives the table, and
then one worked example — using a skill this role level actually names —
showing what evidence at two or three different points on the scale would look
like, so an assessor can calibrate before they start.

## Writing the sections

### Introduction

Say plainly who this is for (an assessor) and what it is for (judging whether
someone meets the baseline this role level requires — for a hiring decision, a
promotion board, onboarding, or a capability check against the framework). Name
the role and the level. State that this is one input among several, never the
whole of a decision, and point at `## Advisory` for why.

### How to use this assessment

Practical guidance for the assessor, covering:

- **Preparing** — read `## About this role level` first, and gather whatever
  evidence exists before scoring: a CV or portfolio, a structured interview,
  a work sample or task, direct observation, or references.
- **Scoring on evidence, not impression** — every rating must trace to
  something the person did, said, produced, or was observed doing. An
  assessor who cannot point to evidence for a rating should record it as
  unknown rather than guess.
- **Consistency** — score the same way for every candidate for the same role
  level, and where possible have more than one assessor score independently
  before comparing notes, especially for a hiring or promotion decision.
- **A line on fairness**, pointing at [Fair and lawful use](#fair-and-lawful-use)
  below — never let a rating be influenced by anything other than
  demonstrated, job-related evidence.

### About this role level

The same comprehensive explanation as the skills gap form's equivalent
section, from the summary, in plain words: what the role is, what this level
is and where it sits among the role's other levels (name them, in order), the
duties and the accountabilities, and the full list of skills this level names.
Adapt the framework's wording; do not add expectations it does not state.

### Competency matrix

One `### Skill: <name>` block per skill the summary names, in the summary's
order, using the skill name exactly as written — including any qualifier,
because `User focus` and `User focus (content design)` are different skills.
Where the summary names the same skill twice, merge the bullets into one block;
never write the skill twice.

Each block has these parts, in this order, all required:

1. **What the framework expects at this level** — the summary's bullets for
   this skill, restated plainly and truly.
2. **Baseline for this role level** — which single point on the 0–4 scale is
   the baseline an assessor should expect a person to meet at this role level,
   for this skill, and one sentence on why — grounded in the level's
   accountabilities and its place in the role's ladder. A trainee's baseline
   for most skills sits at 1 or 2; a lead's or principal's sits at 3 or 4. Two
   different skills at the same level can have different baselines where the
   framework's own wording supports it — say so rather than flattening every
   skill in a block to the same number.
3. **Behavioural indicators** — a five-row list, 0 through 4, each one to two
   sentences of concrete, observable behaviour **for this specific skill**,
   not a generic proficiency ladder copied across skills. Someone reading only
   this list should be able to place a real observation at the right point.
4. **Evidence to gather** — two to four concrete ways an assessor could
   actually gather evidence for this skill: a work sample or task, a
   structured interview question, something to ask a referee, a document to
   review, a scenario to observe. Specific to this role's actual work, not
   generic ("ask about the skill").
5. **Rate this skill** — the five-row rating checklist, always all five,
   always in order, followed by a single free-text `*Assessor notes:*` prompt
   for the evidence and reasoning behind the rating given.

```
### Skill: Incident management

**What the framework expects at this level**

...

**Baseline for this role level**

Baseline: 2 — Intermediate. ...

**Behavioural indicators**

- 0 — None: ...
- 1 — Beginner: ...
- 2 — Intermediate: ...
- 3 — Advanced: ...
- 4 — Expert: ...

**Evidence to gather**

- ...

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*
```

Rating rows are always unchecked task items; the website, if this project is
ever wired into it, would render them as controls the same way it does for the
skills gap form.

### Overall determination

A summary table listing every skill in the matrix with its baseline target and
two blank columns — Rating given and Met baseline? — for the assessor to
complete after scoring every block. Then guidance, in prose, on combining the
individual ratings into a result:

- The baseline is normally met when every skill is rated at or above its
  baseline target.
- One or two skills below target is not automatically a fail — say what a
  reasonable assessor does next: weigh how central the skill is to the level's
  accountabilities, consider whether the shortfall is coachable quickly after
  appointment, and record the reasoning rather than only the number.
- A closing checkbox list for the overall result:
  `- [ ] Meets baseline for this role level` /
  `- [ ] Does not yet meet baseline` /
  `- [ ] Meets baseline, with development areas noted below`.
- A reminder that this determination is an input to the organisation's own
  process, never the decision itself.

### Assessor notes and evidence log

A structured space, not free prose: fields for the candidate or employee's
name, the assessor's name, the date, which evidence sources were used (a
checklist: CV or portfolio, structured interview, work sample or task,
references, direct observation, other), a free-text space for overall notes,
a free-text space for follow-up actions, and a line recommending a second
assessor or panel calibration for any hiring or promotion decision.

### Conclusion

Close by saying what happens next: the result feeds into the organisation's own
process; if development areas were noted, point at the sibling documents for
the same slug as relative markdown links —

```
../../../../uk-gdad-pcf-continuing-professional-development-checklists/roles/<slug>.md
../../../../uk-gdad-pcf-upskilling-resources/roles/<slug>.md
```

Four `../` from a three-segment slug; three from a two-segment one — the four
`chief-digital-and-data` roles sit directly under their profession directory.
Restate, briefly, that this is one input among several. Close professionally —
the reader is a colleague doing a hard, high-stakes job well.

## Register

Register follows seniority, as in the root specification, but the axis it
moves along here is different from a document written for a candidate: it is
**how senior the role being assessed is**, not how senior the assessor is. A
trainee-level assessment describes plain, close-supervision indicators and
simple evidence to gather; a principal-level assessment describes judgement,
influence over other teams, and evidence that takes longer to surface (a track
record, not a single task). The prose written *to the assessor* — in
`## Introduction` and `## How to use this assessment` — stays even-toned across
every level; it is the *content of the matrix* that moves with seniority.

## Fair and lawful use

These are not advisory. A document that breaks one of them is a defect.

- **Evidence only.** Every rating and every indicator must be about
  demonstrated, job-related behaviour. Never write an indicator, an evidence
  prompt, or a note field that invites information about a protected
  characteristic under the Equality Act 2010, health information, a diagnosis,
  trade union membership, political opinion, immigration status, criminal
  record, caring responsibilities or financial circumstances.
- **Name the risk, do not soften it.** `## How to use this assessment` and
  `## Advisory` must be explicit that an unvalidated, AI-drafted instrument
  used inconsistently can produce unlawful adverse impact, and that consistent,
  evidence-based administration by more than one assessor materially reduces
  that risk.
- **No comparison between people.** Nothing in the document ranks, percentiles,
  or compares one candidate against another; it measures one person against the
  framework's own description of the role level.
- **Warn where the work is sensitive**, the same way the skills gap form does:
  security architects, network architects, data architects and similar posts
  get a line in `## How to use this assessment` reminding the assessor not to
  record classified material or live vulnerability detail in the evidence log.

## Retired levels

Four `chief-digital-and-data` roles are published by the framework but marked
`NOT IN USE`. Write their assessments the way the skills gap form handles them:
say plainly, in `## Introduction` and `## About this role level`, that the
framework publishes the role but marks the level not in use, so there is no
published standard to set a baseline against. Keep one `### Skill:` block per
published skill name, in the framework's order; each says **"No expectation is
published for this skill at this level"**, keeps the rating scale and evidence
prompts reframed around the person's actual practice, and skips step 2
(Baseline for this role level), since the framework gives nothing to set a
baseline from.

## Authoring

1. Read `uk-gdad-pcf-role-summaries/roles/<slug>.md`. List the duties, the
   accountabilities and the skills in the summary's order, merging any skill
   named twice.
2. Judge each skill's baseline point on the 0–4 scale from the level's place in
   its role's ladder and from the accountability bullets — not from habit; two
   role families at "the same" seniority word their accountabilities
   differently, and the baseline should say what this level's own text
   supports.
3. Draft the nine sections in order.
4. Write `roles/<slug>.md`.
5. Run `bin/check` from the repository root.
6. Human review, ideally including someone who does human resources or
   occupational assessment work, with the summary open alongside.

## Quality bar

- Every skill the summary names has a block, and every block has all five
  parts, in order.
- The behavioural indicators are specific to that skill — a reader could not
  swap them into a different skill's block unnoticed.
- The advisory is present and unmodified.
- Nothing asks for, or invites, information the organisation should not hold.
- No comparison or ranking language anywhere in the file.
- Nothing was copied from another role level's assessment. The baseline points
  and the behavioural indicators should read as written for this level's own
  accountabilities, not the level above or below.

## Registration

This project mirrors the canonical role index, the same as the other derived
projects, and is registered in [`bin/check`](../../bin/check): it is in
`DERIVED`, its nine sections are in `REQUIRED_SECTIONS`, and
`- Competency Assessment` is in `REQUIRED_TITLE_SUFFIX`. `bin/check` also
enforces, the same way it does for the skills gap form, that this project's
`### Skill:` blocks are exactly the skills each summary names, in the summary's
order, named exactly.

It is not, at present, vendored by the website — see the root
[`spec/index.md`](../../spec/index.md) § Website for what is. Wiring it in (a
`content/competency-assessments/` copy, a route, and a `SITE_CONTENT` entry in
`bin/check`) is a separate piece of work.
