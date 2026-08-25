# UK GDAD PCF — specification

This is the single source of truth for the repository. Every rule that governs
the shape of the content lives here. The project specifications under
`*/spec/index.md` refine this one for a single project; they never contradict
it and never repeat it.

Every rule below that can be checked mechanically is checked by
[`bin/check`](../bin/check). If a rule is not enforced there, it is marked
**advisory**.

- [Purpose](#purpose)
- [Taxonomy](#taxonomy)
- [Projects](#projects)
- [Role index](#role-index)
- [Document contracts](#document-contracts)
- [Writing style](#writing-style)
- [Provenance and licensing](#provenance-and-licensing)
- [Pipeline](#pipeline)
- [Website](#website)
- [Validation](#validation)
- [Change control](#change-control)
- [Known drift](#known-drift)

## Purpose

The United Kingdom Government Digital and Data (GDAD) Profession Capability
Framework (PCF) describes the digital and data roles used across UK government,
at <https://ddat-capability-framework.service.gov.uk/>. It says what each role
is, what each level of that role is accountable for, and which skills it needs.

This repository does three things with that framework:

1. **Restates** it as one plain-text file per role level, so that people and
   software can read it without scraping a website or parsing a spreadsheet.
2. **Extends** it with four further documents per role level: upskilling
   resources, a continuing professional development checklist, a practice
   assessment, and a skills gap form for an employee to fill in.
3. **Publishes** all of it as a static website.

Non-goals: this repository is not the framework, does not set pay or grading,
and does not replace an organisation's own guidance. It is a community project.

## Taxonomy

Four nouns, used in this order and never interchangeably:

| Term | Meaning | Count |
| --- | --- | --- |
| **Profession** | The broadest grouping, e.g. `software-development` | 8 |
| **Role** | A job within a profession, e.g. `software-developer` | 52 |
| **Role level** | A seniority step within a role, e.g. `4-senior-developer` | 205 |
| **Skill** | A named capability a role level requires, e.g. `User focus` | 183 distinct |

The eight professions, and what each contains:

| Profession | Roles | Role levels |
| --- | ---: | ---: |
| `architecture` | 7 | 27 |
| `chief-digital-and-data` | 4 | 4 |
| `data` | 9 | 36 |
| `it-operations` | 12 | 46 |
| `product-and-delivery` | 6 | 21 |
| `quality-assurance-testing` | 3 | 10 |
| `software-development` | 3 | 24 |
| `user-centred-design` | 8 | 37 |
| **Total** | **52** | **205** |

Of the 205 role levels, 201 are in use and 4 are retired. A retired level is
marked in its summary by the literal text `Role level: NOT IN USE`; all four are
in `chief-digital-and-data`. Retired levels keep their files, so that links to
them stay valid and so that the count is stable.

The 183 skills are named 1,719 times across the 205 summaries. The most common
are `User focus` (65 levels), `Problem management` (52) and
`Availability and capacity management` (41). A skill name is the join key
between role levels: two levels naming the same skill are describing the same
capability at different depths.

A skill name may be qualified for a particular role, and the qualified name is a
**different** skill: `User focus`, `User focus (content design)` and
`User focus (frontend developer)` are three of the 183. Match skill names
exactly; a prefix match conflates them.

## Projects

| Directory | What it holds | Documents |
| --- | --- | --- |
| [`uk-gdad-pcf-role-summaries`](../uk-gdad-pcf-role-summaries/spec/index.md) | The framework restated. **Canonical.** | 205 |
| [`uk-gdad-pcf-upskilling-resources`](../uk-gdad-pcf-upskilling-resources/spec/index.md) | Courses, posts, research, videos, books | 205 |
| [`uk-gdad-pcf-continuing-professional-development-checklists`](../uk-gdad-pcf-continuing-professional-development-checklists/spec/index.md) | CPD checklists | 205 |
| [`uk-gdad-pcf-assessments`](../uk-gdad-pcf-assessments/spec/index.md) | Practice psychometric assessments | 205 |
| [`uk-gdad-pcf-roles-skills-gap-forms`](../uk-gdad-pcf-roles-skills-gap-forms/spec/index.md) | Skills gap forms, sent by HR and filled in by an employee | 205 |
| [`uk-gdad-pcf-skills-self-assessment`](../uk-gdad-pcf-skills-self-assessment/spec/index.md) | A standalone self-rating tool | 1 |
| [`uk-gdad.github.io`](../uk-gdad.github.io/spec/index.md) | The published website | — |

The skill catalogue and how the repository's vocabularies compare against it:
[`spec/skills.md`](skills.md).

Every project has the same shape:

```
<project>/
├── spec/index.md     What this project's documents must contain
└── roles/            One markdown file per role level
    └── <profession>/<role>/<level>.md
```

## Role index

`uk-gdad-pcf-role-summaries/roles/` **is** the role index. It defines which role
levels exist. The other four role projects mirror it exactly: same paths, same
file names, 205 files each. A file that exists in one and not the others is a
defect, not a variation.

### Path shape

```
roles/<profession>/<role>/<number>-<level>.md    (201 files)
roles/<profession>/<role>.md                     (4 files)
```

The second shape is used only where the framework defines a role with no levels
beneath it — the four `chief-digital-and-data` roles.

Rules:

- Every path segment is kebab-case: lowercase ASCII, digits, single hyphens.
- `<profession>` is one of the eight profession slugs above.
- `<number>` orders the levels within a role, starting at 1, with no gaps and
  no duplicates. It is a display order, not a grade.
- `<level>` is the level name in kebab-case. Where the framework distinguishes a
  technical and a management track at the same level, the management one is
  suffixed `-management`, e.g. `5-senior-developer-management.md`.

### Slugs

The path minus `roles/` and minus `.md` is the **slug**, and it is the identity
of a role level everywhere in this repository:

```
software-development/software-developer/4-senior-developer
```

The same slug addresses the same role level in all five projects, and it is the
URL path on the website. Never renumber or rename a file without changing it in
all five projects and re-running `bin/check`.

## Document contracts

### Role summaries

Plain text, not markdown — no headings, no emphasis. Line-oriented so that
software can parse it without a markdown library. The shape:

```
<Profession> role: <Role>
- <one sentence describing the role>

In this role, you will:
- <duty>

Role level: <Level>
- <one sentence describing the level>

At this role level, you will:
- <accountability>

Skill: <Skill name>
- <what the skill means at this level>
```

Required: line 1 matches `<Profession> role: <Role>`; exactly one `Role level:`
line; at least one `Skill:` line. The `In this role, you will:` and
`At this role level, you will:` blocks are optional — not every level has both.

A skill name may appear more than once in one file, where the framework lists a
skill under more than one heading. Consumers merge the bullets under one skill.

### Derived documents

Each derived project has a required title and a set of required `##` sections.
Extra sections are allowed; missing ones are a defect.

| Project | Title | Required sections |
| --- | --- | --- |
| Upskilling | `# <Level> - upskill resources` | Coursera courses · Udemy courses · Skillsoft courses · edX courses · MIT OpenCourseWare courses · Blog posts · Research articles · Videos · Books on Amazon · Professional development tips |
| CPD | `# UK GDAD PCF Continuing Professional Development Checklist` | Types · Phases · Events · Teamwork · UK GDAD PCF Role Skill Specifics |
| Assessments | `# <Level> - Psychometric Assessment Resources` | Introduction · Advisory · Workplace job-specific cognitive assessment · Workplace job-specific numeric reasoning assessment · Workplace job-specific verbal reasoning assessment · Workplace job-specific situational judgement assessment · Conclusion |
| Skills gap forms | `# <Level> - skills gap form` | Introduction · Advisory · How to fill in this form · Rating scale · About this role level · Job tasks · Job skills · Job performance expectations · Legal compliance · Human resources best practices · Your development priorities · Next steps |

Only the `- Psychometric Assessment Resources` suffix is enforced on assessment
titles. The part before it names the level in title case, and where the role and
level names differ usefully it may name both, e.g.
`# Data Analyst (Senior Data Analyst) - Psychometric Assessment Resources`.
55 of the 205 use that parenthetical form.

The CPD title is identical in all 205 files: the level is identified by the file
path, and the general checklists that open the document are the same for
everyone. The level-specific material is under
`## UK GDAD PCF Role Skill Specifics`.

### Links

**Advisory.** Links between documents are written as relative markdown links to
the `.md` file. The website rewrites them to site URLs. A link that cannot be
resolved to a real document is rendered as plain text, so a placeholder such as
`[Search YouTube for "…"](…)` degrades quietly rather than breaking a page.

## Writing style

**Advisory** unless stated otherwise.

- **Audience** is the person doing the job, addressed as "you".
- **Tone** is friendly, helpful and encouraging. Not corporate, not breezy.
- **Register follows seniority.** Apprentice and junior levels get plainer
  language and more explanation; lead and principal levels get denser language
  and assume more.
- **Spelling** is en-GB in prose that this repository writes: *organisation*,
  *prioritise*, *behaviour*. Framework text is quoted as published, and the
  framework itself uses en-GB.
- **The serial comma** goes before the conjunction that closes a list of three
  or more items: *apples, bananas, and oranges*. See
  [`spec/serial-comma/`](serial-comma/index.md). It applies to prose this
  repository writes, and not to anything quoted: the framework's own wording,
  a skill name from the catalogue, an official title such as *Digital, Data and
  Technology*, or a third-party course, article, or book title all keep the
  punctuation they were published with. [`bin/serial-comma`](../bin/serial-comma)
  applies the rule where a list is unmistakable, and `--held` lists the ones
  that need a person instead. Not enforced by `bin/check`, because telling a
  list from a clause is a judgement.
- **The advisory is required.** Every derived document states that its content
  is AI-assisted, is work in progress, is for educational purposes, and that the
  reader should consult their organisation's HR, people development or legal
  colleagues before relying on it. In assessments this is the `## Advisory`
  section and is enforced.
- **No invented facts.** A course, article, or book named in an upskilling
  document must exist and the link must resolve at the time of writing.

## Provenance and licensing

- Role summaries are adapted from the Government Digital and Data Profession
  Capability Framework, © Crown copyright, available under the
  [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
  Attribution is required wherever they are republished.
- Upskilling, CPD and assessment documents are written for this repository. They
  are AI-assisted with human review, and every one of them says so.
- Third-party material — course titles, article titles, book titles — is
  referenced by title and link only. Nothing is reproduced.

## Pipeline

A derived document is produced from the canonical summary, never from another
derived document:

```
role summary ──┬──> upskilling resources
               ├──> CPD checklist
               ├──> assessment
               └──> skills gap form
```

The steps, for one role level:

1. Read `uk-gdad-pcf-role-summaries/roles/<slug>.md`. It gives the role, the
   level and the skills, which is the whole input.
2. Read the project's `spec/index.md` for the document contract.
3. Research and draft. For upskilling, search the named sources; do not copy
   another level's document.
4. Write to `<project>/roles/<slug>.md` — the same slug, no exceptions.
5. Run `bin/check`.
6. Review as a human. Nothing here is publishable unreviewed.

Three helpers support step 3, all at the repository root:

- [`bin/cook`](../bin/cook) reformats raw AI output — numbered `Title:` / `URL:` /
  `Summary:` blocks and shouted headings — into the required markdown. Uses
  `gsed`. See `bin/cook-test.md` for worked examples.
- [`bin/serial-comma`](../bin/serial-comma) applies the serial comma rule to the
  prose this repository writes, and leaves quoted text alone. It reports by
  default and changes nothing without `--write`. See
  [`spec/serial-comma/`](serial-comma/index.md).
- [`bin/normalize`](../bin/normalize) is a historical one-off that moved a flat
  file layout into the current `<profession>/<role>/<level>.md` tree. Kept for
  the record; it is not part of the pipeline.

## Website

`uk-gdad.github.io` is a SvelteKit project that prerenders every document to
static HTML. It **vendors** its inputs rather than reading across directories,
so that it stays buildable when it is pushed to its own repository:

- `uk-gdad.github.io/content/<project>/` is a byte-for-byte copy of each
  project's `roles/` tree.
- `uk-gdad.github.io/src/lib/lily/` is a copy of the Lily Design System Svelte
  components listed in `uk-gdad.github.io/bin/lily-components.txt`.
- `uk-gdad.github.io/static/tools/skills-self-assessment.html` is a copy of the
  self-assessment tool.

Skills gap forms are the one document kind the site does more than render: it
turns their `*Your answer:*` prompts and tick lists into HTML form controls, so
that a reader can fill the form in on screen. Their answers are saved in that
reader's own browser and can be exported as TSV or as JSON; nothing is submitted
and nothing reaches the site. See
[the project specification](../uk-gdad-pcf-roles-skills-gap-forms/spec/index.md).

`uk-gdad.github.io/bin/sync` refreshes all three. `bin/check` verifies that the
copies match their sources byte for byte, so stale vendored content is a
failing check rather than a silent inconsistency.

[`bin/publish`](../bin/publish) publishes the site: it runs `bin/check`, then
`git subtree push --prefix=uk-gdad.github.io site main` to
<https://github.com/uk-gdad/uk-gdad.github.io>, where GitHub Actions builds it
and GitHub Pages serves it. That repository is a publishing target and is never
committed to directly.

## Validation

```sh
bin/check           # every rule above that can be checked; exit 1 on failure
bin/check --quiet   # failures only
bin/check --list    # the canonical role index, one slug per line
```

Run it before every commit that touches content. It checks:

1. The canonical index parses: path shape, profession names, level numbering.
2. The four derived projects mirror the canonical index exactly.
3. Every summary has a role line, one level line and at least one skill.
4. Every derived document has its required title and required sections.
5. Every skills gap form carries one block per skill its summary names, in the
   summary's order, with the skill name exactly as written.
6. The website's vendored content matches its sources byte for byte.
7. Every Lily component named in the manifest is vendored.

Adding a rule to this specification means adding it to `bin/check`, or marking
it **advisory** because it needs human judgement.

## Change control

- **Content changes** — one role level at a time, through the pipeline above.
- **Contract changes** — change this file first, then `bin/check`, then bring
  all 205 documents into line. A contract that 204 files meet is not a contract.
- **Taxonomy changes** — the framework changes upstream from time to time. When
  it does, update the summaries first, then the derived projects, then the
  counts in this file. `bin/check --list` diffed against the previous output
  shows exactly what moved.

## Known drift

Recorded rather than fixed, because fixing needs a decision or a source that
this repository does not hold.

1. **Skill vocabularies.** Three lists exist: the framework's published
   catalogue (185 skills), the `Skill:` names across the 205 summaries (183),
   and the self-assessment tool's list (189). They have been compared against
   the catalogue and reconciled as far as the source allows — see
   [`spec/skills.md`](skills.md).

   What remains: 7 catalogue skills that no summary names, which may simply
   belong to roles or levels this repository does not carry; and 5 names used
   here and in the tool that the catalogue no longer lists, all content-design
   related, which look like an upstream reorganisation. Mapping those needs the
   framework's content designer role pages, not a judgement call here.

2. **Assessment word counts.** The contract asks for approximately 4,000 words
   per assessment section. Actual lengths vary widely. Not enforced.
3. **Link rot.** Upskilling documents name several hundred external URLs. No
   automated link check runs. Advisory only.
4. **A run-on bullet in one summary.** In
   `data/digital-evaluator/5-head-of-digital-evaluation`, the second bullet of
   *Evaluation delivery* runs two expectations together with no separator:
   "assure the evaluation work of digital evaluator teams define best practice
   and methodologies for evaluation and ensure they are shared across teams".
   The summary quotes the framework as published, so it is left as it is. The
   skills gap form for that level separates the two and says why, so a reader
   comparing the two counts does not think one of them is wrong.
