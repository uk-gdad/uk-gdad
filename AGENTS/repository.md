# Repository

## Layout

```
uk-gdad/
├── spec/index.md                 Single source of truth
├── bin/
│   ├── check                     Validates the repository against spec/
│   ├── cook                      Reformats raw AI output into required markdown
│   ├── cook-test.md              Worked examples for bin/cook
│   ├── serial-comma              Applies the serial comma to prose written here
│   ├── publish                   Pushes uk-gdad.github.io/ to the site repository
│   └── normalize                 Historical one-off migration; not in the pipeline
├── AGENTS.md, AGENTS/            These notes
├── README.md                     Orientation
├── index.md                      The manual: tutorials, examples, reference
│
├── uk-gdad-pcf-role-summaries/               205 files — CANONICAL
├── uk-gdad-pcf-upskilling-resources/         205 files
├── uk-gdad-pcf-continuing-professional-development-checklists/  205 files
├── uk-gdad-pcf-assessments/                  205 files
├── uk-gdad-pcf-roles-skills-gap-forms/       205 files
├── uk-gdad-pcf-skills-self-assessment/       A single-page self-rating tool
└── uk-gdad.github.io/                        The published website
```

Each role project holds `spec/index.md` and `roles/`. Nothing else.

## The one invariant

`uk-gdad-pcf-role-summaries/roles/` defines which role levels exist. The other
four role projects mirror it exactly — same paths, same names, 205 files each.

The **slug** is the path under `roles/` without `.md`:

```
software-development/software-developer/4-senior-developer
```

One slug addresses the same role level in all five projects, and is the URL path
on the website. Changing a slug means changing five files and re-running
`bin/check`.

## Working here

- **Read `spec/index.md` first.** It holds the contracts. These notes hold the
  practice.
- **One role level at a time.** Never generate a document by copying a
  neighbouring level's document; the levels differ, and that is the point.
- **Always from the summary.** Derived documents are written from the canonical
  summary, never from another derived document.
- **Run `bin/check` before committing.** It is fast and it catches everything
  mechanical.
- **Re-run `uk-gdad.github.io/bin/sync` after touching content**, or `bin/check`
  will report the website's vendored copies as stale.
- **Publish the site with `bin/publish`**, never by committing in the site
  repository. It is a subtree publishing target; a commit made there breaks the
  next push.

## Do not

- Edit anything under `uk-gdad.github.io/content/`, `uk-gdad.github.io/src/lib/lily/`,
  or `uk-gdad.github.io/static/tools/` — all vendored. Edit the source, then sync.
- Add a file to one role project without adding it to the other four.
- Write `TODO` into a published document. An unwritten section is a defect.
- Add a role level that the framework does not publish.

## Commits

One project per commit where possible. Message says what changed and for which
role levels, e.g. `Add upskilling resources for data profession levels`.
