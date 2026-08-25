# Taxonomy and glossary

## The four nouns

Use these exactly; they are not interchangeable.

- **Profession** — the broadest grouping. 8 of them. Slug like
  `software-development`.
- **Role** — a job within a profession. 52 of them. Slug like
  `software-developer`.
- **Role level** — a seniority step within a role. 205 of them. Slug like
  `4-senior-developer`.
- **Skill** — a named capability a role level requires. 183 distinct, named
  1,719 times. A skill name is the join key between levels.

Skill names can be qualified for a role, and the qualified name is a different
skill: `User focus` (65 levels), `User focus (content design)` (6) and
`User focus (frontend developer)` (6). Match skill names exactly — a prefix
match over-counts.

## The eight professions

| Slug | Roles | Levels |
| --- | ---: | ---: |
| `architecture` | 7 | 27 |
| `chief-digital-and-data` | 4 | 4 |
| `data` | 9 | 36 |
| `it-operations` | 12 | 46 |
| `product-and-delivery` | 6 | 21 |
| `quality-assurance-testing` | 3 | 10 |
| `software-development` | 3 | 24 |
| `user-centred-design` | 8 | 37 |

## Level naming

Levels run roughly: apprentice or trainee → junior or associate → the role
itself → senior → lead → principal or head of. Not every role has every step,
and the numbering is display order within the role, not a grade.

Where the framework splits a level into a technical and a management track, the
management file is suffixed `-management`:

```
4-senior-developer.md
5-senior-developer-management.md
```

## Retired levels

Four `chief-digital-and-data` roles are published but not in use. Their files
say `Role level: NOT IN USE`. Keep them, label them, do not hide them. They have
no level number, so they sit directly under the profession directory.

## Glossary

- **GDAD** — Government Digital and Data. The profession. Formerly DDaT
  (Digital, Data and Technology); the official framework site still uses `ddat`
  in its URL.
- **PCF** — Profession Capability Framework.
- **CPD** — Continuing Professional Development.
- **Slug** — the path identity of a role level. See `AGENTS/repository.md`.
- **Canonical** — of `uk-gdad-pcf-role-summaries`: it defines what exists.
- **Derived** — of the other four role projects: they follow the canonical index.
- **Vendored** — of the website's inputs: copied in, never edited in place.
