# UK GDAD PCF — manual

Everything in this repository, how to use it, and how to add to it.

- [Orientation](#orientation)
- [Tutorial: find your role and plan a quarter](#tutorial-find-your-role-and-plan-a-quarter)
- [Tutorial: add a role level](#tutorial-add-a-role-level)
- [Tutorial: publish the website](#tutorial-publish-the-website)
- [Reference: the five document types](#reference-the-five-document-types)
- [Reference: slugs and paths](#reference-slugs-and-paths)
- [Reference: commands](#reference-commands)
- [Recipes](#recipes)
- [Questions](#questions)

Related: [README](README.md) · [specification](spec/index.md) ·
[agent notes](AGENTS.md) · [website](https://uk-gdad.github.io)

---

## Orientation

The UK Government Digital and Data Profession Capability Framework describes
digital and data jobs across government: which roles exist, what each level of a
role is accountable for, and which skills it needs.

This repository takes that framework and does three things.

**Restates it.** One plain-text file per role level, so the framework can be
read by a person with `cat` or by a program with a five-line parser — no
scraping, no spreadsheet.

**Extends it.** Four further documents per role level, because knowing what a
level requires is only the first question. The next four are *how do I learn
this*, *how do I keep developing*, *what might I be assessed on*, and *where am
I against this today* — the last of these a form to read and fill in.

**Publishes it.** A static website at <https://uk-gdad.github.io> where all of
it is browsable, searchable and linkable.

The numbers:

| | |
| --- | ---: |
| Professions | 8 |
| Roles | 52 |
| Role levels | 205 (201 in use, 4 retired) |
| Distinct skills | 183 |
| Documents | 1,230 |
| Website pages | 1,427 |

### The shape of it

```
uk-gdad/
├── spec/index.md          The single source of truth
├── bin/check              That specification, as an executable
├── index.md               This manual
│
├── uk-gdad-pcf-role-summaries/                 CANONICAL — defines what exists
├── uk-gdad-pcf-role-level-start-here/          ─┐
├── uk-gdad-pcf-upskilling-resources/            │
├── uk-gdad-pcf-continuing-professional-…/       ├─ derived, mirror the canonical
├── uk-gdad-pcf-psychometric-assessments/        │
├── uk-gdad-pcf-roles-skills-gap-forms/         ─┘
├── uk-gdad-pcf-skills-self-assessment/         A single-page rating tool
└── uk-gdad.github.io/                          The published site
```

Every role project has the same two things inside: `spec/index.md` saying what
its documents must contain, and `roles/` holding them.

---

## Tutorial: find your role and plan a quarter

You are a senior developer. You want a development plan you will actually
follow. Fifteen minutes.

### 1. Find your role level

On the web, use [Find a role](https://uk-gdad.github.io/roles/) and search
"senior developer". In the files:

```sh
bin/check --list | grep senior-developer
```

```
software-development/software-developer/4-senior-developer
software-development/software-developer/5-senior-developer-management
```

Two, because the framework splits this level into a technical track and a
management track. Take the first.

### 2. Read what the level expects

```sh
cat uk-gdad-pcf-role-summaries/roles/software-development/software-developer/4-senior-developer.md
```

```
Software development role: Software developer
- A software developer designs, runs and improves software that meets user needs.

Role level: Senior developer
- A senior developer delivers and integrates software to form a complete service.

At this role level, you will:
- plan and lead development on sets of related stories
- have an understanding of the whole system and take responsibility for teaching this to others
- coach and mentor more junior colleagues
...

Skill: Modern development standards
- apply modern development standards and support others in applying them
```

Ten skills are named. That list is the agenda.

### 3. Rate yourself

Open the [skills self-assessment](https://uk-gdad.github.io/tools/skills-self-assessment.html)
and score each skill from 0 (none) to 4 (expert). Nothing is sent anywhere and
nothing is saved, so download the result when you are done — it writes
`skills.tsv`, one header row and one data row.

```sh
head -2 ~/Downloads/skills.tsv | cut -f1-4
```

### 4. Pick two or three gaps

Not ten. Two or three that matter for the work actually in front of you. The
gap that matters is where a low score meets something your team needs this
quarter.

### 5. Turn each gap into a plan

For learning material:

```sh
cat uk-gdad-pcf-upskilling-resources/roles/software-development/software-developer/4-senior-developer.md
```

For the habit rather than the course:

```sh
sed -n '/## UK GDAD PCF Role Skill Specifics/,$p' \
  uk-gdad-pcf-continuing-professional-development-checklists/roles/software-development/software-developer/4-senior-developer.md
```

Those items are markdown task items. Copy the handful you chose into your own
notes and tick them off.

### 6. See where the skill goes next

Every skill page lists every level that expects it, so you can read the same
skill one level up and see what changes:

<https://uk-gdad.github.io/skills/user-focus/>

That is usually a better prompt than a job description.

---

## Tutorial: add a role level

The framework has published a new level. Adding it means six files and one
check. Never fewer than six — a level that exists in one project and not the
others fails `bin/check`.

### 1. Work out the slug

```
<profession>/<role>/<number>-<level>
```

Check the numbering already in use so the new one follows without a gap:

```sh
ls uk-gdad-pcf-role-summaries/roles/data/data-engineer/
```

```
1-data-engineer.md  2-senior-data-engineer.md  3-lead-data-engineer.md  4-head-of-data-engineering.md
```

A new level between 2 and 3 means renumbering 3 and 4 — in all six projects.

### 2. Write the summary

Plain text, not markdown. See
[the contract](uk-gdad-pcf-role-summaries/spec/index.md).

```sh
cat > uk-gdad-pcf-role-summaries/roles/data/data-engineer/5-principal-data-engineer.md <<'EOF'
Data role: Data engineer
- A data engineer builds and maintains the systems that move and store data.

Role level: Principal data engineer
- A principal data engineer sets data engineering direction across teams.

At this role level, you will:
- set technical direction for data platforms across more than one team

Skill: Data modelling
- set data modelling standards and hold teams to them
EOF
```

### 3. Write the five derived documents

Same slug, in each of the other five projects. Each has its own contract:

- [Start here](uk-gdad-pcf-role-level-start-here/spec/index.md) — title
  `# Principal data engineer - start here`, three required sections: Purpose,
  Explore the framework, Learning pathway.
- [Upskilling](uk-gdad-pcf-upskilling-resources/spec/index.md) — title
  `# Principal data engineer - upskill resources`, ten required sections.
- [CPD](uk-gdad-pcf-continuing-professional-development-checklists/spec/index.md) —
  the general sections from `spec/template.md`, plus a level-specific section.
- [Assessments](uk-gdad-pcf-psychometric-assessments/spec/index.md) — seven required
  sections including the advisory.
- [Skills gap forms](uk-gdad-pcf-roles-skills-gap-forms/spec/index.md) — title
  `# Principal data engineer - skills gap form`, twelve required sections, and
  numbered questions running in one sequence through the document.

Write each one from the summary, never from a neighbouring level's document.

### 4. Check

```sh
bin/check
```

```
uk-gdad-pcf-psychometric-assessments: missing data/data-engineer/5-principal-data-engineer.md
```

Exactly what is left to do. When it passes:

```
canonical role levels: 205
all checks passed
```

### 5. Sync the website

```sh
uk-gdad.github.io/bin/sync
bin/check
```

Skip this and `bin/check` reports the vendored copies as stale — which is the
whole point of checking them.

---

## Tutorial: publish the website

### Run it locally

```sh
cd uk-gdad.github.io
pnpm install
pnpm dev                 # http://localhost:5173
```

### Build it

```sh
pnpm check               # svelte-check; must be clean
pnpm build               # build/ — 1,427 prerendered pages
pnpm preview             # serve the built site
```

Prerendering crawls every internal link, so a broken link fails the build. That
is deliberate: with 1,427 pages, the build is the only link checker that will
ever keep up.

### Publish it

The site lives here as `uk-gdad.github.io/` and is published to a repository of
its own, <https://github.com/uk-gdad/uk-gdad.github.io>, where GitHub Actions
builds it (`.github/workflows/deploy.yml`) and GitHub Pages serves it at
<https://uk-gdad.github.io>.

From the repository root, once the site changes are committed:

```sh
bin/make-github-pages --dry-run    # check, and report what would be pushed
bin/make-github-pages              # check, then push
make github-pages                  # same as bin/make-github-pages
```

`bin/make-github-pages` runs `bin/check` first — the site vendors `content/`
from the five role projects, and a stale copy would otherwise be published as
the real thing — then hands the push to `git subtree`:

```sh
git subtree push --prefix=uk-gdad.github.io github-pages main
```

`git subtree` splits the history of `uk-gdad.github.io/` into a synthetic branch
whose commits are only that subdirectory's, with the site at the root, and
pushes that. So the site repository is a genuine repository — it clones, builds
and deploys on its own — with no trace of the other 820 files here.

The `github-pages` remote is set up once:

```sh
git remote add github-pages git@github.com:uk-gdad/uk-gdad.github.io.git
```

**The site repository is a publishing target, not a place to work.** Never
commit to it directly, and never accept a pull request there. A commit made on
that side has no common ancestor with the next split, so the next
`bin/make-github-pages` is rejected as a non-fast-forward, and the only cures
are a force push that discards it or a rewrite of the subtree history.
Everything — including the workflow file and the site's own `README.md` — is
edited here and pushed out.

For a custom domain, add `static/CNAME` and update the origin in
`static/robots.txt` and `src/routes/sitemap.xml/+server.ts`.

### Change how it looks

All styling is in `static/assets/style.css`. The components in `src/lib/lily/`
are headless — they carry class names and ARIA and no styles — so restyling
means editing the stylesheet, not the components. Never edit `src/lib/lily/`
itself; it is vendored from the Lily Design System by `bin/sync`.

---

## Reference: the five document types

### Role summary — what the level is

Plain text. Line-oriented, so a parser needs only string prefixes:

| Prefix | Meaning |
| --- | --- |
| `<Profession> role: <Role>` | Line 1 |
| `Role level: <Level>` | Exactly one per file |
| `In this role, you will:` | Opens the role duty list |
| `At this role level, you will:` | Opens the accountability list |
| `Skill: <Name>` | Opens a skill block |
| `- <text>` | A bullet in the block above |

Two things to know: a file may name the same skill twice, so merge before
counting; and four retired levels say `Role level: NOT IN USE`.

### Upskilling resources — where to learn it

Markdown. Ten sections: Coursera, Udemy, Skillsoft, edX, and MIT OpenCourseWare
courses; blog posts; research articles; videos; books; and written tips.

```
- [Software Product Management Specialization](https://www.coursera.org/specializations/product-management): Agile software management practices for leading a team of developers.
```

Original content only — a course, a post, a paper, a talk, a book. Not
listicles, channels, magazines, or marketing pages.

### CPD checklist — how to keep developing

Markdown task items. Four general sections shared by every file — Types, Phases,
Events, Teamwork — and one that is per-level:
`## UK GDAD PCF Role Skill Specifics`.

```
- [ ] Lead the response to one incident this quarter, and write the timeline up
      the same week while it is fresh.
```

Things to do, not things to know.

### Assessment — what you might be assessed on

Markdown, seven sections: introduction, advisory, then cognitive, numeric
reasoning, verbal reasoning and situational judgement, then a conclusion.

Practice material only. It is not validated, not normed, and not fit for making
decisions about people — which is what the required `## Advisory` section says.

### Skills gap form — where you are against it today

Markdown, twelve sections: introduction, advisory, how to fill it in, the rating
scale, about the level, then job tasks, job skills, job performance
expectations, legal compliance, human resources best practices, development
priorities, and next steps.

Human resources sends it; an employee reads it and fills it in. Questions are
numbered in one run through the whole document, so answers travel back on their
own:

```
**Q17.** Which recurring problem originates with a supplier? What have you done
about it?

*Your answer:*
```

The markdown is plain markdown, and the website makes it fillable: an answer
prompt becomes a textarea, a rating becomes a radio group, and a tick list
becomes checkboxes or radios. Answers are saved in the reader's own browser and
export as TSV or JSON, keyed by question number. Nothing is submitted — there is
no server to submit to.

The core is `## Job skills`: one block per skill the summary names, in the
summary's order, giving what the framework expects at this level, what that
looks like in practice, and what changes at the next level — then a 0–4 rating
scale and two to four questions.

Three rules make one good, and all three are about honesty:

- **Say what the framework actually says.** Where a level repeats the one below,
  say so. Where it drops a skill, narrows, or sits below its own subordinate,
  say that too. Never smooth an anomaly into a clean progression.
- **Never guess about another level.** Every "identical at X" or "a step up from
  X" is a claim about a different summary. Read it. `bin/check` cannot verify
  these, and a wrong one is confidently wrong about someone's next step.
- **Separate capability from access.** The most useful answer on these forms is
  "I could do this and nobody has ever asked me to", so where a skill needs
  authority, a team or a budget the reader may not have, say so in the block.

---

## Reference: slugs and paths

A **slug** is the path under `roles/` without the extension:

```
software-development/software-developer/4-senior-developer
```

It is the identity of a role level everywhere:

| Where | Form |
| --- | --- |
| Summary | `uk-gdad-pcf-role-summaries/roles/<slug>.md` |
| Upskilling | `uk-gdad-pcf-upskilling-resources/roles/<slug>.md` |
| CPD | `uk-gdad-pcf-continuing-professional-development-checklists/roles/<slug>.md` |
| Assessment | `uk-gdad-pcf-psychometric-assessments/roles/<slug>.md` |
| Skills gap form | `uk-gdad-pcf-roles-skills-gap-forms/roles/<slug>.md` |
| Website | `https://uk-gdad.github.io/roles/<slug>/` |

Rules: kebab-case throughout; the profession is one of the eight; the number
orders levels within a role starting at 1 with no gaps; `-management` marks the
management track of a split level. The four retired
`chief-digital-and-data` roles have no level directory and no number.

---

## Reference: commands

| Command | What it does |
| --- | --- |
| `bin/check` | Validate against `spec/index.md`; exit 1 on failure |
| `bin/check --quiet` | Failures only |
| `bin/check --list` | The canonical role index, one slug per line |
| `bin/cook draft.md` | Reformat raw AI output into the required markdown |
| `bin/serial-comma` | Report the lists missing a serial comma; change nothing |
| `bin/serial-comma --write` | Add the commas it can judge safely |
| `bin/serial-comma --held` | The lists that need a person, not a script |
| `bin/serial-comma-declined.md` | Lines a reader decided against, and the script skips |
| `bin/make-github-pages` | Check, then push `uk-gdad.github.io/` to the site repository |
| `bin/make-github-pages --dry-run` | Check, and report what would be pushed |
| `make github-pages` | Same as `bin/make-github-pages` |
| `uk-gdad.github.io/bin/sync` | Refresh the website's vendored inputs |
| `cd uk-gdad.github.io && pnpm dev` | Run the site locally |
| `cd uk-gdad.github.io && pnpm build` | Build the site |

`bin/cook` needs GNU sed (`brew install gnu-sed`). `bin/serial-comma` never
touches quoted text — the framework's wording, a skill name, an official title,
or a third-party title — and reports before it writes. `bin/normalize` is a
historical one-off migration, kept for the record, not part of the pipeline.

---

## Recipes

**Every level that expects a skill**

```sh
grep -rl "^Skill: User focus$" uk-gdad-pcf-role-summaries/roles \
  | sed 's|.*/roles/||; s|\.md$||' | sort
```

Anchor the end of the line. Some skills are qualified for a particular role, so
`User focus`, `User focus (content design)` and `User focus (frontend
developer)` are three different skills — 65, 6 and 6 levels respectively. Drop
the `$` and you get 77.

**The skills one level expects**

```sh
grep "^Skill: " uk-gdad-pcf-role-summaries/roles/data/data-analyst/3-senior-data-analyst.md \
  | sed 's/^Skill: //' | sort -u
```

**Skill frequency across the framework**

```sh
grep -rh "^Skill: " uk-gdad-pcf-role-summaries/roles \
  | sed 's/^Skill: //' | sort | uniq -c | sort -rn | head
```

**Levels in one profession**

```sh
bin/check --list | grep '^user-centred-design/'
```

**Every link in an upskilling document**

```sh
grep -o 'https\?://[^)]*' \
  uk-gdad-pcf-upskilling-resources/roles/data/data-analyst/2-data-analyst.md
```

**Levels missing a derived document** — `bin/check` reports these, but to see
them directly:

```sh
comm -23 \
  <(cd uk-gdad-pcf-role-summaries/roles && find . -name '*.md' | sort) \
  <(cd uk-gdad-pcf-psychometric-assessments/roles && find . -name '*.md' | sort)
```

**A role's levels in order**

```sh
ls uk-gdad-pcf-role-summaries/roles/software-development/software-developer/
```

**How one skill changes across a role** — the check to run before writing any
"identical at X" or "a step up from X" claim in a skills gap form:

```sh
ROLE=uk-gdad-pcf-role-summaries/roles/it-operations/infrastructure-engineer
for f in "$ROLE"/*.md; do
  echo "== $(basename "$f" .md)"
  awk '/^Skill: Coding and scripting$/{f=1;next} /^Skill:/{f=0} f&&/^- /' "$f"
done
```

Levels that print the same bullets are identical in the published text; that is
worth saying in the form, and worth never guessing at. Note that a `-management`
sibling is the same level on a different track, so it is not the next step.

**Every question in a skills gap form**

```sh
grep -n '^\*\*Q[0-9]*\.' \
  uk-gdad-pcf-roles-skills-gap-forms/roles/data/data-analyst/3-senior-data-analyst.md
```

They run in one sequence from `Q1` through the whole document, so an answer
carries its own number and can travel back without the form.

---

## Questions

**Is this official?** No. It is a community project. The role summaries are
adapted from the official framework under the Open Government Licence v3.0;
everything else is written here. For anything affecting pay, grading,
recruitment or promotion, use the official framework and talk to your
organisation.

**How much of this is AI-generated?** The start here, upskilling, CPD,
assessment and skills gap form documents are AI-assisted with human review,
and every one of them says so. Role summaries are adapted from the published
framework.

**Why plain text for the summaries and markdown for everything else?** Summaries
are data — read far more often by programs than by people, and worth being able
to parse with string prefixes alone. The other five are prose for people, where
markdown earns its keep.

**Why six files per role level instead of one?** Different lifecycles. A
summary changes when the framework changes. A start-here page is the one
written to be read first, and links out to the rest. Upskilling links rot. CPD
advice matures. Assessments are the longest documents by far — 3.5 million
words across the corpus, against 96,000 for the summaries — and nobody reading
a summary wants to scroll past them. Skills gap forms are the only ones
written to be *filled in* rather than read, which is why they carry a rating
scale and numbered questions and nothing else does.

**Can I fill a skills gap form in on the website?** No. Every page is
prerendered static HTML — there is no server and nothing to submit to, and each
form says so in `## How to fill in this form`. Print it, or copy the questions
into whatever your organisation uses. The questions are numbered in one run so
the answers make sense on their own.

**Why does the website copy content in rather than reading the projects?** So it
still builds when it is pushed to its own repository, where the sibling projects
do not exist. `bin/check` verifies the copies match byte for byte, so stale
content is a failing check rather than a silent inconsistency.

**A link is dead. A checklist item does not work. A level is wrong.** Open an
issue or a pull request. Read [spec/index.md](spec/index.md) first for the
contract your change has to meet, then run `bin/check`.

**Something does not match the official framework.** The framework changes
upstream. Update the summaries from a fresh download, then run
`bin/check --list` and diff it against the previous output — that diff is the
work list for the other five projects. Known mismatches are recorded under
[known drift](spec/index.md#known-drift).
