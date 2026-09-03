# Assessments (by assessor)

Contract: [`uk-gdad-pcf-psychometric-assessments-by-assessor/spec/index.md`](../uk-gdad-pcf-psychometric-assessments-by-assessor/spec/index.md).

See also [`AGENTS/assessments-by-yourself.md`](assessments-by-yourself.md), the
sibling project written for the candidate's own practice rather than for the
person administering it. The two projects share the same document contract —
same seven sections, same title shape — and are written from the same role
summary, but the voice and the advisory differ throughout.

## What this is, and is not

An assessor-administered workplace job-specific psychometric assessment,
written against the skills the framework names for a role level. It is
written for the assessor — a manager, panel, or reviewer — administering it to
a candidate, not for the candidate's own practice. Every item's worked answer
and explanation is the assessor's answer key: held back and not shown to the
candidate until scoring and debrief.

It is **not** a validated assessment instrument. It is not piloted, not
normed, and not checked for adverse impact, and a result from it must never be
the sole basis for a hiring, promotion, pay, performance or disciplinary
decision. Every file says so in `## Advisory`, and `bin/check` enforces that
the section exists.

It is also not the [competency assessment](competency-assessments.md), which
measures demonstrated skill against a baseline rather than testing reasoning
and judgement through items.

## Shape

Seven `##` sections in order:

1. `## Introduction` — friendly framing
2. `## Advisory` — the standing caution, verbatim
3. `## Workplace job-specific cognitive assessment`
4. `## Workplace job-specific numeric reasoning assessment`
5. `## Workplace job-specific verbal reasoning assessment`
6. `## Workplace job-specific situational judgement assessment`
7. `## Conclusion` — friendly close

Sections 3–6 target ~4,000 words each. Length is not enforced.

## Read first

The four reference files in `uk-gdad-pcf-psychometric-assessments-by-assessor/spec/`
describe each assessment type — what it measures, how items are built, worked
examples, pitfalls. The two files in `spec/legal/` describe the UK and US legal
position.

Read the legal file before writing situational judgement material. The failure
mode to avoid is an item that correlates with a protected characteristic rather
than with job performance.

## Writing items

Draw scenarios from the accountabilities the summary lists, so the material is
about the job rather than about puzzles:

- **Cognitive** — inference and problem-solving in the role's domain.
- **Numeric** — the numbers this role handles: capacity, cost, throughput,
  error rates, sample sizes.
- **Verbal** — passages this role reads: incident reports, policy, research
  findings, architecture decision records. True / False / Cannot Say, answerable
  from the passage alone.
- **Situational judgement** — options ranked by what good looks like *at this
  level*, per the framework.

Every item gets a worked answer and an explanation of why it is right, written
in the third person about the candidate ("this tests whether the candidate
can…"), not as coaching addressed to the person being tested. An item without
one teaches an assessor nothing.

`## Introduction` says how to administer fairly: the same items and the same
time limit for every candidate for a role level, and the answer key held back
until scoring.

## Register

Register describes the candidate the item is built to test, not the assessor
reading it. Junior levels get simpler scenarios and more scaffolding.
Principal levels get ambiguity, two defensible options in tension, and
consequences landing on other teams.
