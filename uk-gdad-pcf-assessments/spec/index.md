# Assessments — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy, the
role index, slugs, style and licensing. This file covers only what is specific
to assessments.

## Purpose

For every role level, practice material for the kinds of psychometric
assessment an employer might use when hiring or promoting into that job.

Employers increasingly use *workplace job-specific* assessments — ones tied to
the actual skills and duties of the role — rather than generic aptitude tests.
This project writes practice material of that kind, aligned to the skills the
framework names for each level.

**This is practice material, not an assessment instrument.** It is not
validated, not normed, and not fit for making decisions about people. Every
document says so in its `## Advisory` section, and that section is required.

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

`uk-gdad-pcf-role-summaries/roles/<slug>.md` — the role, the level and the
skills. Scenarios come from the accountabilities the summary lists, so that the
material is about the job rather than about puzzles.

## Output

`roles/<slug>.md`, the same slug as the summary.

### Title

```
# <Level> - Psychometric Assessment Resources
```

Title case. Where naming both the role and the level reads better, use
`# <Role> (<Level>) - Psychometric Assessment Resources`. Only the
`- Psychometric Assessment Resources` suffix is enforced.

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

`## Advisory` carries this, in substance and preferably verbatim:

> This assessment information is created by AI and is work in progress for
> educational purposes. If you intend to use it in any way, please consult with
> your organization's appropriate teammates, such as with human resources staff,
> or people and organizational development staff, or legal compliance staff.

### Writing the four assessment sections

Each section explains the assessment type, then gives practice material drawn
from this role level's work:

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

Give worked answers and explain why the right answer is right. A practice item
without an explanation teaches nothing.

Register follows seniority, as in the root specification: junior levels get
simpler scenarios and more scaffolding; principal levels get ambiguity, conflict
between good options, and consequences that land on other teams.

## Authoring

1. Read the summary for the slug; list the skills and accountabilities.
2. Read the reference file for each assessment type, and the relevant legal file.
3. Draft the seven sections in order.
4. Write `roles/<slug>.md`.
5. Run `bin/check` from the repository root.
6. Human review, against both the summary and the legal constraints.

## Quality bar

- Every scenario is recognisably this role at this level.
- Every practice item has a worked answer and an explanation.
- No item depends on knowledge outside the passage or the role.
- No item correlates with anything other than job performance.
- The advisory is present and unmodified.
