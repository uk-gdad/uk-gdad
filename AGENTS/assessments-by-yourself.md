# Assessments (by yourself)

Contract: [`uk-gdad-pcf-psychometric-assessments-by-yourself/spec/index.md`](../uk-gdad-pcf-psychometric-assessments-by-yourself/spec/index.md).

See also [`AGENTS/assessments-by-assessor.md`](assessments-by-assessor.md), the
sibling project written for the person administering an assessment rather
than for the candidate's own practice. The two projects share the same
document contract — same seven sections, same title shape — and are written
from the same role summary, but the voice and the advisory differ throughout.

## What this is, and is not

Practice psychometric assessment material for every role level: the kinds of
workplace job-specific item an employer might use when hiring or promoting
into that job, written for the reader to work through themselves, at their
own pace, before reading each answer.

It is **practice material, not an assessment instrument**. It is not
validated, not normed, and not fit for making decisions about people. Every
file says so in `## Advisory`, and `bin/check` enforces that the section
exists. Unlike [the by-assessor sibling](assessments-by-assessor.md), this
project's advisory keeps its original en-US-spelled wording — see
[`AGENTS/writing.md`](writing.md) § Spelling — because it was written first
and the by-assessor project's advisory is the later, en-GB rewrite.

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

The four reference files in `uk-gdad-pcf-psychometric-assessments-by-yourself/spec/`
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

Every item gets a worked answer and an explanation of why it is right,
addressed to the reader in the second person ("try this before reading on",
"a strong answer here would…") — coaching, not a third-person answer key. An
item without an explanation teaches the reader nothing.

`## Introduction` invites the reader to attempt each question honestly before
reading the answer, since the explanation is where the learning happens, not
the score.

## Register

Register describes the reader attempting the item at this level: junior
levels get simpler scenarios and more scaffolding. Principal levels get
ambiguity, two defensible options in tension, and consequences landing on
other teams.
