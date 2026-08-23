# Assessments

Contract: [`uk-gdad-pcf-assessments/spec/index.md`](../uk-gdad-pcf-assessments/spec/index.md).

## What this is, and is not

Practice material for workplace job-specific psychometric assessment, written
against the skills the framework names for a role level.

It is **not** an assessment instrument. It is not validated, not normed, and not
fit for making decisions about people. Every file says so in `## Advisory`, and
`bin/check` enforces that the section exists.

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

The four reference files in `uk-gdad-pcf-assessments/spec/` describe each
assessment type — what it measures, how items are built, worked examples,
pitfalls. The two files in `spec/legal/` describe the UK and US legal position.

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

Every item gets a worked answer and an explanation of why it is right. An item
without one teaches nothing.

## Register

Junior levels get simpler scenarios and more scaffolding. Principal levels get
ambiguity, two defensible options in tension, and consequences landing on other
teams.
