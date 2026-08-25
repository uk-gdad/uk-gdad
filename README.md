# United Kingdom (UK) Government Digital and Data (GDAD)

An open, community-built companion to the UK Government Digital and Data (GDAD)
Profession Capability Framework (PCF).

The framework at <https://ddat-capability-framework.service.gov.uk/> describes
the digital and data roles used across UK government. This repository restates
it as plain files you can read, grep and link to — and adds four more documents
for every role level: upskilling resources, a development checklist, practice
assessment material, and a skills gap form to fill in.

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
| [Upskilling resources](uk-gdad-pcf-upskilling-resources) | Courses, blog posts, research, videos, books | 205 |
| [CPD checklists](uk-gdad-pcf-continuing-professional-development-checklists) | Continuing professional development, per level | 205 |
| [Assessments](uk-gdad-pcf-assessments) | Practice cognitive, numeric, verbal and situational judgement material | 205 |
| [Skills gap forms](uk-gdad-pcf-roles-skills-gap-forms) | A form HR sends and an employee fills in, one per level | 205 |
| [Skills self-assessment](uk-gdad-pcf-skills-self-assessment) | A single-page tool for rating yourself | 1 |
| [Website](uk-gdad.github.io) | The published static site | — |

Covering **8 professions**, **52 roles**, **205 role levels** and **183 skills** —
**1,025 documents** in all, published as **1,222 web pages**.

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

# One role level, five ways
SLUG=software-development/software-developer/4-senior-developer
cat uk-gdad-pcf-role-summaries/roles/$SLUG.md
cat uk-gdad-pcf-upskilling-resources/roles/$SLUG.md
cat uk-gdad-pcf-continuing-professional-development-checklists/roles/$SLUG.md
cat uk-gdad-pcf-assessments/roles/$SLUG.md
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

**Publish the website.** `bin/publish` checks the repository, then pushes
`uk-gdad.github.io/` to its own repository, where GitHub Actions builds it and
GitHub Pages serves it.

More in the [manual](index.md), including tutorials for finding your role,
adding a role level, and publishing the site.

## How it fits together

One **slug** identifies a role level everywhere — in all five projects, and as
the URL on the website:

```
software-development/software-developer/4-senior-developer
```

`uk-gdad-pcf-role-summaries/roles/` is the role index: it defines which role
levels exist, and the other four projects mirror it exactly, 205 files each.

Derived documents are always written from the canonical summary, never from
each other:

```
role summary ──┬──> upskilling resources
               ├──> CPD checklist
               ├──> assessment
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

## Contributing

Corrections are welcome — a wrong link, a stale role level, a checklist item
that does not work in practice.

1. Read [spec/index.md](spec/index.md) for the contract your change must meet.
2. Make the change in the canonical project first, then the derived ones.
3. Run `bin/check`.
4. If you touched content, run `uk-gdad.github.io/bin/sync`.
5. Open an issue or a pull request here — not on
   [uk-gdad.github.io](https://github.com/uk-gdad/uk-gdad.github.io), which is
   published from this repository by `bin/publish` and overwritten on each
   publish.

Working with an AI coding agent? [AGENTS.md](AGENTS.md) and [AGENTS/](AGENTS)
hold the working notes; `CLAUDE.md` points at them.

## Licence

Role summaries are adapted from the Government Digital and Data Profession
Capability Framework, © Crown copyright, available under the
[Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
Attribution is required wherever they are republished.

Everything written for this repository — upskilling, CPD, assessments, skills
gap forms, the tooling and the website — is offered under the same terms.

Contact: Joel Henderson <joel@joelparkerhenderson.com>
