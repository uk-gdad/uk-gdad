# Assessments — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy, the
role index, slugs, style, and licensing. This file covers only what is specific
to assessments.

## Purpose

For every role level, an assessor-administered psychometric assessment of the
kind an employer might use when hiring or promoting into that job: a
structured set of job-specific items an assessor presents to a candidate, with
the worked answer and explanation held back as an answer key until scoring.

Employers increasingly use *workplace job-specific* assessments — ones tied to
the actual skills and duties of the role — rather than generic aptitude tests.
This project writes assessment material of that kind, aligned to the skills the
framework names for each level, for the assessor administering it rather than
the candidate sitting it.

**This is not a validated assessment instrument.** It is not piloted, not
normed, and not checked for adverse impact, and a result from it must never be
the sole basis for a hiring, promotion, pay, performance or disciplinary
decision. Used inconsistently across candidates, an instrument like this can
produce unlawful adverse impact — see the legal files below. Every document
says so in its `## Advisory` section, and that section is required.

## Reference material

The four assessment types, each with what it measures, how it is built, worked
examples and common pitfalls:

- [Workplace job-specific cognitive ability assessment](workplace-job-specific-cognitive-ability-assessment.md)
- [Workplace job-specific numeric reasoning assessment](workplace-job-specific-numeric-reasoning-assessment.md)
- [Workplace job-specific verbal reasoning assessment](workplace-job-specific-verbal-reasoning-assessment.md)
- [Workplace job-specific situational judgement assessment](workplace-job-specific-situational-judgement-assessment.md)

The legal position, which constrains what may be written and how it may be
used:

- [United Kingdom legal aspects](legal/united-kingdom-legal-aspects-about-workplace-psychometric-testing.md)
- [United States legal aspects](legal/united-states-legal-aspects-about-workplace-psychometric-assessment.md)

Read the relevant legal file before writing situational judgement material, in
particular. Questions that correlate with a protected characteristic rather than
with job performance are the failure mode to avoid.

## Input

`uk-gdad-pcf-role-summaries/roles/<slug>.md` — the role, the level, and the
skills. Scenarios come from the accountabilities the summary lists, so that the
material is about the job rather than about puzzles.

## Who this is written for

An assessor: a line manager, a panel, or a reviewer, administering this to a
candidate for the role level — not the candidate's own practice material.
Every item's worked answer and explanation is the assessor's answer key, held
back and not shown to the candidate until scoring and debrief. Say this
plainly in `## Introduction`, and address the reader as the assessor
throughout: "present this to the candidate", "the candidate is asked to…",
"a strong candidate's answer will…" — never "you" meaning the person being
assessed.

## Output

`roles/<slug>.md`, the same slug as the summary.

### Title

```
# <Level> - Psychometric Assessments
```

Title case. Where naming both the role and the level reads better, use
`# <Role> (<Level>) - Psychometric Assessments`. Only the
`- Psychometric Assessments` suffix is enforced.

### Required sections

In this order:

| Section | Target length | What it holds |
| --- | --- | --- |
| `## Introduction` | short | Friendly framing: what this is and how to use it |
| `## Advisory` | fixed | The standing caution, below |
| `## Workplace job-specific cognitive assessment` | ~4,000 words | |
| `## Workplace job-specific numeric reasoning assessment` | ~4,000 words | |
| `## Workplace job-specific verbal reasoning assessment` | ~4,000 words | |
| `## Workplace job-specific situational judgement assessment` | ~4,000 words | |
| `## Conclusion` | short | Friendly close: what to do next |

Word counts are targets. `bin/check` enforces the sections, not the lengths.

### The advisory

`## Advisory` carries this verbatim:

> This assessment is created by AI and is a work in progress for educational
> purposes. It is not a validated assessment instrument — it has not been
> piloted, normed or checked for adverse impact — and a result from it must
> never be the sole basis for a hiring, promotion, pay, performance or
> disciplinary decision. Before using it, consult your organisation's human
> resources, people development, occupational psychology or legal compliance
> colleagues.

This project's advisory was rewritten from an earlier, self-practice framing
that carried the older, en-US-spelled paragraph quoted in
[`AGENTS/writing.md`](../../AGENTS/writing.md). This one is en-GB throughout,
matches the wording adopted for `uk-gdad-pcf-competency-assessments-by-assessor`, and adds
the adverse-impact caution that a hiring-facing instrument needs and a
self-practice one did not.

### Writing the four assessment sections

Each section explains the assessment type, then gives structured material for
the assessor to administer, drawn from this role level's work:

- **Cognitive** — pattern, inference and problem-solving items set in the
  role's domain.
- **Numeric reasoning** — the numbers this role actually handles: capacity,
  cost, throughput, error rates, sample sizes.
- **Verbal reasoning** — passages of the kind the role reads: incident reports,
  policy, user research findings, architecture decision records. True / False /
  Cannot Say items answerable from the passage alone.
- **Situational judgement** — scenarios from the accountabilities the summary
  lists, with response options ranked by what the framework says good looks like
  at this level.

Give worked answers and explain why the right answer is right. An item without
an explanation teaches an assessor nothing about what a good answer looks like.
Write each explanation about the candidate in the third person — "this tests
whether the candidate can…", "a strong answer identifies…" — not as coaching
addressed to the person being tested.

`## Introduction` says, near the top, how to administer the section fairly:
the same time limit and the same items for every candidate for a given role
level, the answer key kept from the candidate until after, and a note on
timing (each section's practice questions carry a rough time-per-item, useful
for planning a session).

Register follows seniority, as in the root specification, but describes the
candidate the section is built to test, not the assessor reading it: junior
levels get simpler scenarios and more scaffolding in the item design; principal
levels get ambiguity, conflict between good options, and consequences that land
on other teams.

## Authoring

1. Read the summary for the slug; list the skills and accountabilities.
2. Read the reference file for each assessment type, and the relevant legal file.
3. Draft the seven sections in order, addressed to the assessor throughout.
4. Write `roles/<slug>.md`.
5. Run `bin/check` from the repository root.
6. Human review, against both the summary and the legal constraints.

## Quality bar

- Every scenario is recognisably this role at this level.
- Every item has a worked answer and an explanation, written for the assessor
  reading it, not as coaching addressed to the candidate.
- No item depends on knowledge outside the passage or the role.
- No item correlates with anything other than job performance.
- `## Introduction` says this is administered by an assessor, and how to
  administer it fairly and consistently.
- The advisory is present, unmodified, and names the adverse-impact risk.
