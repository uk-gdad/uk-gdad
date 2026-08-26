# UK GDAD PCF role summaries

The United Kingdom Government Digital and Data (GDAD) Profession Capability
Framework (PCF) restated as one plain-text file per role level.

Source: <https://ddat-capability-framework.service.gov.uk/>

**205 role levels** across 8 professions and 52 roles. This project is
**canonical**: `roles/` defines which role levels exist, and the other three
role projects in this repository mirror it exactly.

## Format

Plain text, not markdown, despite the `.md` extension. Line-oriented, so that a
program can read it with string prefixes and no markdown library:

```
Software development role: Software developer
- A software developer designs, runs and improves software that meets user needs.

In this role, you will:
- be responsible for writing clean, secure code following a test-driven approach

Role level: Senior developer
- A senior developer delivers and integrates software to form a complete service.

At this role level, you will:
- plan and lead development on sets of related stories
- coach and mentor more junior colleagues

Skill: Modern development standards
- apply modern development standards and support others in applying them
```

Full contract: [spec/index.md](spec/index.md).

## Layout

```
roles/<profession>/<role>/<number>-<level>.md
```

```sh
cat roles/software-development/software-developer/4-senior-developer.md
ls roles/data/data-analyst/
../bin/check --list | grep '^architecture/'
```

Four `chief-digital-and-data` roles are published but not in use; their files sit
directly under the profession and say `Role level: NOT IN USE`.

## Two things to watch

- **A file may name the same skill twice**, where the framework lists it under
  two headings. Merge the bullets before counting skills.
- **Skill names can be qualified for a role.** `User focus`,
  `User focus (content design)` and `User focus (frontend developer)` are three
  different skills. Match exactly.

## Licence

Adapted from the Government Digital and Data Profession Capability Framework,
© Crown copyright, under the
[Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
([SPDX: OGL-UK-3.0](https://spdx.org/licenses/OGL-UK-3.0.html)). See [LICENSE.md](LICENSE.md).
