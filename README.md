# United Kingdom (UK) Government Digital and Data (GDAD)

An open, community-built companion to the UK Government Digital and Data (GDAD)
Profession Capability Framework (PCF).

The framework at <https://ddat-capability-framework.service.gov.uk/> describes
the digital and data roles used across UK government. This repository restates
it as plain files you can read, grep and link to — and adds eight more
documents for every role level: a start-here orientation, upskilling
resources, a development checklist, an assessor-administered psychometric
assessment, a self-practice psychometric assessment, an assessor-administered
competency assessment, a self-rating competency assessment, and a skills gap
form for an employee to fill in.

**Website:** <https://uk-gdad.github.io> · **Manual:** [index.md](index.md) ·
**Specification:** [spec/index.md](spec/index.md)

> This is not a government service. Content beyond the role summaries is
> AI-assisted with human review. For anything that carries weight — pay,
> grading, recruitment, promotion — use the official framework and talk to your
> organisation.

## What is here

| Project | What it holds | Files |
| --- | --- | ---: |
| [Role summaries](uk-gdad-pcf-role-summaries) | The framework restated, one file per role level. **Canonical.** | 205 |
| [Role level start here](uk-gdad-pcf-role-level-start-here) | A first orientation and learning pathway, one per role level | 205 |
| [Upskilling resources](uk-gdad-pcf-upskilling-resources) | Courses, blog posts, research, videos, books | 205 |
| [CPD checklists](uk-gdad-pcf-continuing-professional-development-checklists) | Continuing professional development, per level | 205 |
| [Assessments (by assessor)](uk-gdad-pcf-psychometric-assessments-by-assessor) | Cognitive, numeric, verbal and situational judgement items an assessor administers | 205 |
| [Assessments (by yourself)](uk-gdad-pcf-psychometric-assessments-by-yourself) | The same four assessment types, as practice material you work through yourself | 205 |
| [Competency assessments (by assessor)](uk-gdad-pcf-competency-assessments-by-assessor) | A skill-by-skill competency matrix an assessor rates a candidate against | 205 |
| [Competency assessments (by yourself)](uk-gdad-pcf-competency-assessments-by-yourself) | The same matrix, rated by you about yourself | 205 |
| [Skills gap forms](uk-gdad-pcf-roles-skills-gap-forms) | A form HR sends and an employee fills in, one per level | 205 |
| [Skills self-assessment](uk-gdad-pcf-skills-self-assessment) | A single-page tool for rating yourself | 1 |
| [Website](uk-gdad.github.io) | The published static site | — |

Covering **8 professions**, **52 roles**, **205 role levels** and **183 skills** —
**1,846 documents** in all, published as **2,042 web pages**.

## Quick start

**Read it on the web.** <https://uk-gdad.github.io> — start at
[Find a role](https://uk-gdad.github.io/roles/), or follow a
[skill](https://uk-gdad.github.io/skills/) across every level that expects it.

**Read it as files.**

```sh
git clone https://github.com/uk-gdad/uk-gdad.git
cd uk-gdad

# What role levels exist?
bin/check --list

# One role level, eight ways
SLUG=software-development/software-developer/4-senior-developer
cat uk-gdad-pcf-role-summaries/roles/$SLUG.md
cat uk-gdad-pcf-upskilling-resources/roles/$SLUG.md
cat uk-gdad-pcf-continuing-professional-development-checklists/roles/$SLUG.md
cat uk-gdad-pcf-psychometric-assessments-by-assessor/roles/$SLUG.md
cat uk-gdad-pcf-psychometric-assessments-by-yourself/roles/$SLUG.md
cat uk-gdad-pcf-competency-assessments-by-assessor/roles/$SLUG.md
cat uk-gdad-pcf-competency-assessments-by-yourself/roles/$SLUG.md
cat uk-gdad-pcf-roles-skills-gap-forms/roles/$SLUG.md

# Which levels need a given skill?
grep -rl "^Skill: User focus" uk-gdad-pcf-role-summaries/roles | wc -l
```

**Run the website.**

```sh
cd uk-gdad.github.io
pnpm install
pnpm dev          # http://localhost:5173
```

**Publish the website.** `bin/make-github-pages` (or `make github-pages`)
checks the repository, then pushes `uk-gdad.github.io/` to its own
repository, where GitHub Actions builds it and GitHub Pages serves it.

More in the [manual](index.md), including tutorials for finding your role,
adding a role level, and publishing the site.

## How it fits together

One **slug** identifies a role level everywhere — in all eight derived
projects, and as the URL on the website:

```
software-development/software-developer/4-senior-developer
```

`uk-gdad-pcf-role-summaries/roles/` is the role index: it defines which role
levels exist, and the other eight projects mirror it exactly, 205 files each.

Derived documents are always written from the canonical summary, never from
each other:

```
role summary ──┬──> start here
               ├──> upskilling resources
               ├──> CPD checklist
               ├──> psychometric assessment (by assessor)
               ├──> psychometric assessment (by yourself)
               ├──> competency assessment (by assessor)
               ├──> competency assessment (by yourself)
               └──> skills gap form
```

Never from each other: a derived document copied from a neighbouring one is how
two levels end up saying the same thing, which is exactly what these documents
exist to distinguish.

## Validate

The specification is executable. `bin/check` enforces every mechanical rule in
[spec/index.md](spec/index.md):

```sh
bin/check           # full report, exit 1 on failure
bin/check --quiet   # failures only
bin/check --list    # the canonical role index
```

Run it before every commit that touches content. It checks the role index, the
mirroring, the document contracts, that every skills gap form covers exactly the
skills its summary names, and that the website's vendored copies are not stale.

## Publishing security

This repository does not publish a package to any registry — there is no npm,
crates.io, or similar release step to secure. The one publishing path is the
website: `.github/workflows/deploy.yml` in
[uk-gdad.github.io](uk-gdad.github.io) already deploys to GitHub Pages using
OpenID Connect (`id-token: write` with `actions/deploy-pages`), so there is no
long-lived deployment secret held anywhere. `bin/make-github-pages`'s push
from this repository to that one is a plain `git subtree push` over a
configured git remote, authenticated the same way any other git push is.

If this project ever does publish a package to a registry, the policy is
Trusted Publishing — OIDC-based, short-lived credentials instead of a stored
API token — once it is production-ready across the forges and registries in
use. See [spec/trusted-publishing/](spec/trusted-publishing/index.md).

## Contributing

Corrections are welcome — a wrong link, a stale role level, a checklist item
that does not work in practice.

1. Read [spec/index.md](spec/index.md) for the contract your change must meet.
2. Make the change in the canonical project first, then the derived ones.
3. Run `bin/check`.
4. If you touched content, run `uk-gdad.github.io/bin/sync`.
5. Open an issue or a pull request here — not on
   [uk-gdad.github.io](https://github.com/uk-gdad/uk-gdad.github.io), which is
   published from this repository by `bin/make-github-pages` and overwritten
   on each publish.

Working with an AI coding agent? [AGENTS.md](AGENTS.md) and [AGENTS/](AGENTS)
hold the working notes; `CLAUDE.md` points at them.

## About this repository

| File | What it answers |
| --- | --- |
| [INSTALL.md](INSTALL.md) | How to read it, take a copy, or run the site |
| [AI_STATEMENT.md](AI_STATEMENT.md) | What is AI-generated here, and what that means for you |
| [COMPARISONS.md](COMPARISONS.md) | How it relates to the official framework, SFIA, and others |
| [BENCHMARKS.md](BENCHMARKS.md) | Corpus size, check times, page weight |
| [NEWS.md](NEWS.md) | What changed lately, and press enquiries |
| [CHANGELOG.md](CHANGELOG.md) | The same, commit by commit |
| [MAINTAINERS.md](MAINTAINERS.md) | Who maintains it, and what happens if they cannot |
| [LICENSE.md](LICENSE.md) | Licensing, in full |
| [CITATION.cff](CITATION.cff) | How to cite it |
| [help/outreach](help/outreach/index.md) | Where to tell people about it |

## Licence

Role summaries are adapted from the Government Digital and Data Profession
Capability Framework, © Crown copyright, available under the
[Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
([SPDX: OGL-UK-3.0](https://spdx.org/licenses/OGL-UK-3.0.html)). Attribution is
required wherever they are republished.

Everything written for this repository — upskilling, CPD, assessments,
competency assessments, skills gap forms, the tooling and the website — is
offered under the same terms. See [LICENSE.md](LICENSE.md).

Contact: Joel Parker Henderson <joel@joelparkerhenderson.com>
