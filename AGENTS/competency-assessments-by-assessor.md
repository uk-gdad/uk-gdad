# Competency assessments (by assessor)

Contract: [`uk-gdad-pcf-competency-assessments-by-assessor/spec/index.md`](../uk-gdad-pcf-competency-assessments-by-assessor/spec/index.md).

See also [`AGENTS/competency-assessments-by-yourself.md`](competency-assessments-by-yourself.md),
the sibling project that carries the same matrix — same skills, same
baselines, same behavioural indicators — rewritten for the reader to complete
about themselves rather than for an assessor judging someone else.

## What this is, and is not

A formal evaluation an assessor uses to judge whether a candidate or employee
possesses the baseline abilities a role level requires — a competency matrix,
one block per skill, rated 0–4 against observable behaviour.

It is **not** a validated assessment instrument. It is not piloted, not
normed, and not checked for adverse impact, and a rating from it must never be
the sole basis for a hiring, promotion, pay, performance or disciplinary
decision. Every file says so in `## Advisory`, and `bin/check` enforces that
the section exists.

It is also not the [skills gap form](roles-skills-gap-forms.md) or the
[psychometric assessment](assessments-by-assessor.md): the gap form is the
employee's own self-report, and the psychometric assessment tests reasoning
and judgement through practice items. This document measures demonstrated
skill against the framework's own description of the role level, and it is
written for the assessor, not the person being assessed.

## Shape

Nine `##` sections in order:

1. `## Introduction` — who this is for and what it measures
2. `## Advisory` — the standing caution, verbatim
3. `## How to use this assessment` — preparing, gathering evidence, scoring, fairness
4. `## Rating scale` — the 0–4 proficiency scale, with a worked example
5. `## About this role level`
6. `## Competency matrix` — one `### Skill:` block per skill the summary names
7. `## Overall determination` — a scoring summary and guidance on combining ratings
8. `## Assessor notes and evidence log`
9. `## Conclusion`

## The rating scale

Every skill is rated 0–4, on proficiency rather than frequency:

| Value | Rating | Meaning |
| ---: | --- | --- |
| 0 | None | No demonstrated experience of this skill |
| 1 | Beginner | Just starting to learn the skill; requires close supervision |
| 2 | Intermediate | Knows the basics and can perform tasks with some guidance |
| 3 | Advanced | Has a strong grasp of the skill and can work independently |
| 4 | Expert | Demonstrates full mastery and can teach or guide others in the skill |

## Read first

[`uk-gdad-pcf-competency-assessments-by-assessor/spec/index.md`](../uk-gdad-pcf-competency-assessments-by-assessor/spec/index.md)
gives the full contract: what each of the five parts of a competency matrix
block must contain, how to set a skill's baseline point on the scale from the
level's own accountabilities, how the overall determination is scored, and the
fairness constraints below.

## Writing a competency matrix block

Draw the baseline and the behavioural indicators from the accountabilities the
summary lists, so the matrix is about this job at this level rather than a
generic ladder copied across skills:

- **Baseline** — the single point on the 0–4 scale a person should meet for
  this skill at this level, justified from the level's place in its role's
  ladder. Different skills at the same level can have different baselines.
- **Behavioural indicators** — five rows, each specific to this skill. A
  reader should not be able to swap an indicator into a different skill's
  block unnoticed.
- **Evidence to gather** — concrete, role-specific ways to gather evidence: a
  work sample, a structured interview question, something to ask a referee.

Every block gets a rating checklist and an assessor notes prompt. A block
without behavioural indicators, or with generic ones, teaches an assessor
nothing about what to look for.

## Fair and lawful use

Read [Fair and lawful use](../uk-gdad-pcf-competency-assessments-by-assessor/spec/index.md#fair-and-lawful-use)
before writing. Every rating and every evidence prompt must be about
demonstrated, job-related behaviour — never a protected characteristic under
the Equality Act 2010, health information, or anything else the [skills gap
form's legal constraints](roles-skills-gap-forms.md) also rule out. Nothing
compares or ranks people against each other; the comparison is always against
the framework's own description of the role level.

## Register

Register follows seniority, but along a different axis from most projects
here: it is how senior *the role being assessed* is, not the assessor. The
prose addressed to the assessor stays even-toned at every level; the matrix's
baselines and behavioural indicators move — a trainee's baseline sits low with
close-supervision indicators, a principal's sits high with indicators about
judgement and influence over other teams.
