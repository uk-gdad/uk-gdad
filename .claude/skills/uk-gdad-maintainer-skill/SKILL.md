---
name: uk-gdad-maintainer-skill
description: Use this skill when working ON the uk-gdad/uk-gdad repository itself — adding or editing a role summary, upskilling resources, a CPD checklist, a psychometric or competency assessment, or a skills gap form; adding a new role level; running bin/check, bin/cook, or bin/serial-comma; syncing or publishing the uk-gdad.github.io website. Triggers on requests to write, fix, or check content in any uk-gdad-pcf-* project directory, or to sync/publish the site. Do not use this for questions about USING the published content — see uk-gdad-skill for that.
---

# UK GDAD PCF — maintaining the repository

This skill is for contributing to the `uk-gdad/uk-gdad` repository — the
source of `spec/index.md` and every `uk-gdad-pcf-*` project. If the request
is instead about using the published content (finding a role, reading a
document, self-assessing), use `uk-gdad-skill` instead.

**Read `spec/index.md` first, always.** It is the single source of truth;
these notes are the practice that goes with it. If anything here conflicts
with `spec/index.md`, the spec wins — it may have changed since this skill
was written.

## The one invariant

`uk-gdad-pcf-role-summaries/roles/` defines which of the 205 role levels
exist. Eight other role projects mirror it exactly — same paths, same file
names, 205 files each:

- `uk-gdad-pcf-role-level-start-here`
- `uk-gdad-pcf-upskilling-resources`
- `uk-gdad-pcf-continuing-professional-development-checklists`
- `uk-gdad-pcf-psychometric-assessments-by-assessor` and `-by-yourself`
- `uk-gdad-pcf-competency-assessments-by-assessor` and `-by-yourself`
- `uk-gdad-pcf-roles-skills-gap-forms`

A **slug** — e.g. `data/data-analyst/2-data-analyst` — is a role level's
identity everywhere: the path under each project's `roles/`, and the URL
path on the website. Never rename or renumber a slug in one project without
doing the same in all nine, then re-running `bin/check`.

## Writing one derived document

1. Read `uk-gdad-pcf-role-summaries/roles/<slug>.md` — the role, the level,
   its accountabilities, and its skills. This is the whole input for most
   projects.
2. Read the target project's own `spec/index.md` for its document contract
   (required title, required sections).
3. Draft. **Never copy a neighbouring level's document** — the whole point
   of a per-level instrument is that levels differ.
4. **Exception**: the two "by yourself" projects
   (`uk-gdad-pcf-psychometric-assessments-by-yourself` and
   `uk-gdad-pcf-competency-assessments-by-yourself`) are generated from
   their "by assessor" sibling for the same slug, not drafted from the
   summary directly — see each project's own `spec/index.md` for exactly
   what carries over unchanged and what gets rewritten for voice.
5. Write to `<project>/roles/<slug>.md` — the same slug, no exceptions.
6. Run `bin/check` from the repository root.
7. Human review. Nothing here is publishable unreviewed.

## Adding a new role level

The framework has published a level this repository does not carry yet:
write the canonical summary first, then all eight derived documents for the
same slug, then run `bin/check` — it will report exactly which projects are
still missing the slug. See `index.md` § Tutorial: add a role level for a
full worked example.

## Helper scripts (repository root)

- `bin/check` — validates everything in `spec/index.md` that can be checked
  mechanically. Run before every commit that touches content.
  `bin/check --list` prints the canonical role index; `--quiet` prints only
  failures.
- `bin/cook draft.md` — reformats raw AI search output (numbered
  `Title:`/`URL:`/`Summary:` blocks, shouted headings) into the markdown
  upskilling resources require. Needs GNU sed (`brew install gnu-sed`).
- `bin/serial-comma` — reports lists missing a serial comma across the prose
  this repository writes; `--write` applies safe fixes; `--held` lists the
  ones needing a person; `bin/serial-comma-declined.md` records past
  judgement calls so they are not re-litigated.
- `bin/normalize` — historical one-off migration, not part of the pipeline.

## The website

`uk-gdad.github.io` vendors its inputs — it never reads the sibling projects
directly, so it stays buildable once pushed to its own repository.

- After touching any content, run `uk-gdad.github.io/bin/sync`, then
  `bin/check` again — it verifies vendored copies match their sources byte
  for byte.
- `cd uk-gdad.github.io && pnpm check` (svelte-check, must be clean) and
  `pnpm build` (must complete with no prerender errors — a broken internal
  link fails the build) before considering a website change done.
- **Two projects are not on the website yet**:
  `uk-gdad-pcf-competency-assessments-by-assessor` and `-by-yourself`. See
  `spec/index.md` § Known drift before assuming they should be linked from
  anywhere on the site.
- **Never edit `uk-gdad.github.io/content/`, `src/lib/lily/`, or
  `static/tools/`** — all vendored. Edit the source project, then sync.
- **Publish** with `bin/make-github-pages` (or `make github-pages`) from the
  repository root — never by committing inside `uk-gdad.github.io/` itself,
  which is a `git subtree` publishing target. A commit made there blocks the
  next publish.

## Writing style (advisory, see `AGENTS/writing.md` for the full rule)

- Address the reader as "you"; register follows seniority — plainer and more
  explained at junior levels, denser and more assumed at senior ones.
- en-GB spelling throughout prose written here, with documented exceptions
  for text quoted verbatim from an earlier framing (see `AGENTS/writing.md`
  § Spelling for the current list).
- Serial comma before the closing conjunction in a list of three or more,
  except in anything quoted — a skill name, framework wording, or a
  third-party title.
- The advisory/caution section in every derived document is required, not
  boilerplate to trim — the material is unvalidated AI-assisted content that
  people may use for real career decisions.

## Before finishing any content change

Run `bin/check` from the repository root. A change is not done until it
passes.
