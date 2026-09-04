# News

What has changed lately, in plain language. For the commit-level record, see
[CHANGELOG.md](CHANGELOG.md).

## 2026-09-04 — Two assessment voices, twice over

Psychometric assessments were always written from one point of view — an
assessor holding an answer key back from a candidate. They now come in two:
[`uk-gdad-pcf-psychometric-assessments-by-assessor`](uk-gdad-pcf-psychometric-assessments-by-assessor)
keeps that framing, and a new sibling,
[`-by-yourself`](uk-gdad-pcf-psychometric-assessments-by-yourself), rewrites
every one of the 205 documents as practice material for the reader to work
through alone. The website now publishes both, at `/assessments-by-assessor/`
and `/assessments-by-yourself/`.

Competency assessments got the same treatment:
[`uk-gdad-pcf-competency-assessments-by-assessor`](uk-gdad-pcf-competency-assessments-by-assessor)
(renamed for consistency with the split above) keeps its skill-by-skill
matrix for a manager or panel to complete about someone else, and a new
[`-by-yourself`](uk-gdad-pcf-competency-assessments-by-yourself) sibling
carries the exact same matrix — same skills, same baselines, same
behavioural indicators — rewritten for the reader to rate themselves. Both
are now on the website too, at `/competency-assessments-by-assessor/` and
`/competency-assessments-by-yourself/` — they had never been wired in, even
before today's split.

The repository now has nine role-level projects instead of six, and 1,845
documents where there were 1,230, published as 2,042 web pages where there
were 1,427.

Also new: two [Claude Code](https://claude.com/claude-code) skills for
working with this repository, and `llms.txt`/`llms.json` files for AI
agents exploring it.

## 2026-08-26 — Repository documentation

The standard files a reader or an evaluator looks for: how to
[install](INSTALL.md) it, what it [compares](COMPARISONS.md) to, what it
[measures](BENCHMARKS.md), who [maintains](MAINTAINERS.md) it, how to
[cite](CITATION.cff) it, and — the one that matters most here — an
[AI statement](AI_STATEMENT.md) saying plainly that most of what this project
publishes is AI-generated prose that a reader may act on in their career.

Writing the benchmarks found a defect: the role summary route was the one
content route that had not disabled client-side rendering, so all 205 of those
pages were shipping a framework bundle to hydrate a page with nothing on it.
Fixed; a summary page went from 5 KB to 3.5 KB gzipped.

## 2026-08-25 — Skills gap forms became fillable

The 205 skills gap forms used to say there was nothing to type into. Now there
is. Every answer prompt is a text box, every rating is a set of radio buttons,
and every tick list is real tick boxes. Answers save in your own browser as you
type, and **Export TSV** or **Export JSON** takes them away with you.
Nothing is sent anywhere, because there is no server to send it to.

Checked in Chromium, Firefox, and WebKit, and across all 1,222 pages for
duplicate ids, unlabelled controls, and heading order.

## 2026-08-25 — The serial comma

The repository adopted the serial comma: 2,675 commas across the prose written
here, with [`bin/serial-comma`](bin/serial-comma) to keep it that way. Nothing
quoted moved — not the framework's own wording, not a skill name, not a
third-party title.

## 2026-08-25 — A fifth document for every role level

[Skills gap forms](uk-gdad-pcf-roles-skills-gap-forms): a form human resources
sends and an employee fills in, covering the skills the framework names for
their level, with the job tasks, performance expectations, legal compliance, and
development priorities around them. 205 of them, one per role level.

## 2026-08-23 — First publication

Four document sets, 205 role levels, and the website at
<https://uk-gdad.github.io>.

## Press and enquiries

**Contact:** Joel Parker Henderson <joel@joelparkerhenderson.com>

If you are writing about this project, three things are worth stating, and this
project would rather you had them from here than had to work them out:

1. **It is unofficial.** Not a government service, not endorsed by one. The
   authoritative framework is at
   <https://ddat-capability-framework.service.gov.uk/>, maintained by the
   Government Digital Service.
2. **The role summaries are Crown copyright**, adapted under the
   [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/),
   and attribution is required wherever they are republished. See
   [LICENSE.md](LICENSE.md).
3. **The other five documents are AI-generated with human review**, and are
   unvalidated. The practice assessments are not an assessment instrument. See
   [AI_STATEMENT.md](AI_STATEMENT.md).

Useful numbers, all reproducible from [BENCHMARKS.md](BENCHMARKS.md):
8 professions, 52 roles, 205 role levels, 183 distinct skills, 1,230 documents,
1,427 web pages.

Where this project takes its own news: [help/outreach](help/outreach/index.md).
