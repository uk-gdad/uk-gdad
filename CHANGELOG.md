# Changelog

Notable changes to this repository. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

This project does not publish versioned releases: the website is the artefact
and it is republished whenever content changes. Entries are grouped by the date
the work landed on `main`.

## [Unreleased]

### Added

- Repository documentation: `LICENSE.md`, `CITATION.cff`, `NEWS.md`,
  `COMPARISONS.md`, `BENCHMARKS.md`, `INSTALL.md`, `CODEOWNERS`,
  `MAINTAINERS.md`, `CHANGELOG.md`, and `AI_STATEMENT.md`.
- `spec/trusted-publishing/`: the project's policy on OIDC-based Trusted
  Publishing for any future package registry release. Referenced from
  `README.md`, `AGENTS/website.md`, and `uk-gdad.github.io/spec/index.md`,
  alongside a note that the website's GitHub Pages deploy already
  authenticates with OpenID Connect rather than a stored secret.

### Fixed

- The role summary route now sets `csr = false`, like every other content route.
  All 205 summary pages had been shipping a client-side bundle to hydrate a page
  with nothing to hydrate; a summary page dropped from 5 KB to 3.5 KB gzipped.

## 2026-09-04

### Added

- **`uk-gdad-pcf-psychometric-assessments-by-yourself`**: 205 self-practice
  psychometric assessment documents, sharing the assessor-administered
  sibling's document contract but written for the reader to work through on
  their own.
- **`uk-gdad-pcf-competency-assessments-by-yourself`**: 205 self-rating
  competency assessment documents, generated from the assessor-administered
  sibling's matrix — same skills, same baselines, same behavioural
  indicators — rewritten for the reader to complete about themselves.
- The website now vendors and routes all four newly split/added projects:
  `/assessments-by-assessor/<slug>/`, `/assessments-by-yourself/<slug>/`,
  `/competency-assessments-by-assessor/<slug>/` and
  `/competency-assessments-by-yourself/<slug>/`.
- `.claude/skills/uk-gdad-skill` and `.claude/skills/uk-gdad-maintainer-skill`:
  two Claude Code skills for using and for maintaining this repository.
- `llms.txt` and `llms.json` at the repository root, plus a site-facing
  `llms.txt` served at `https://uk-gdad.github.io/llms.txt`.

### Changed

- **`uk-gdad-pcf-psychometric-assessments` split** into
  `uk-gdad-pcf-psychometric-assessments-by-assessor` (assessor-administered,
  en-GB advisory, answer key withheld) and `-by-yourself` (self-practice, the
  original en-US-advisory framing preserved). `bin/check`, `bin/serial-comma`,
  the website's vendoring and routing, and every cross-reference across
  `spec/`, `AGENTS/`, `README.md` and `index.md` updated to match.
- **`uk-gdad-pcf-competency-assessments` renamed** to
  `uk-gdad-pcf-competency-assessments-by-assessor`, for naming consistency
  with the psychometric assessment split.
- `AGENTS/assessments.md` split into `AGENTS/assessments-by-assessor.md` and
  `AGENTS/assessments-by-yourself.md`; `AGENTS/competency-assessments.md`
  renamed to `AGENTS/competency-assessments-by-assessor.md` with a new
  `AGENTS/competency-assessments-by-yourself.md` alongside it.
- The 205 `uk-gdad-pcf-roles-skills-gap-forms` "Practice assessment" links
  now point at `uk-gdad-pcf-psychometric-assessments-by-yourself` instead of
  the retired singular project. The `uk-gdad-pcf-role-level-start-here`
  "Explore the framework" section across all 205 files now links to nine
  sibling pages instead of seven — both assessment voices and both
  competency assessment voices.
- Document-count prose across `spec/index.md`, `AGENTS.md`, `README.md` and
  `index.md` corrected from "five further documents" (already stale before
  today — it omitted competency assessments) to eight further documents,
  nine per role level including the canonical summary.

### Fixed

- `bin/check` was failing outright: it referenced the deleted
  `uk-gdad-pcf-psychometric-assessments` directory in `DERIVED`,
  `REQUIRED_SECTIONS`, `REQUIRED_TITLE_SUFFIX` and `SITE_CONTENT`. Now passes
  cleanly across all nine role projects.
- `bin/serial-comma` was silently skipping both competency assessment
  projects — they were never added to its `TARGETS` glob.
- 41 of the 205 `uk-gdad-pcf-competency-assessments-by-assessor` files used a
  same-page anchor link, `[Fair and lawful use](#fair-and-lawful-use)`, that
  assumed the referenced section lived in the document itself rather than in
  the project's `spec/index.md`. This had gone unnoticed because the website
  never rendered these documents before today; wiring them in surfaced it as
  a prerender warning. Fixed to a relative link, matching the other 78 files
  that already had it right.

## 2026-08-26

### Changed

- Moved the outreach plan from `spec/promote/` to `help/outreach/`. `spec/`
  holds contracts that `bin/check` enforces; guidance belongs elsewhere.
  `bin/serial-comma` now covers `help/` too.

## 2026-08-25

### Added

- **Skills gap forms are fillable in the browser.** Answer prompts render as
  text boxes, ratings as radio groups, and tick lists as checkboxes. Answers
  save to the reader's own browser and export as TSV or JSON. Nothing is
  submitted anywhere. `src/lib/server/gapform.ts` and
  `static/assets/gapform.js`.
- **The serial comma**, as a rule in `spec/serial-comma/`, applied across the
  prose this repository writes, with `bin/serial-comma` to enforce it and
  `bin/serial-comma-declined.md` to record the judgements a person has made.
- **A fifth document for every role level**: 205 skills gap forms, checked by
  `bin/check` for one block per skill its summary names, in the summary's order.

### Fixed

- Every form field is named by the question it answers. Sixty-four fields on a
  page had shared the accessible name "Your answer:", which made the forms
  unusable with a screen reader.
- The status line no longer announces on every keystroke, and the save flushes
  on `pagehide` so the last words typed are not lost.
- Thirty serial commas that reading found to be wrong, mostly two-item pairs
  whose preceding comma was a clause boundary.
- Two fields on one form shared the export key `Q27`; the second now takes a
  letter.
- The deploy workflow moved off deprecated Node 20.

## 2026-08-23

### Added

- **First publication.** Four document sets covering 205 role levels: role
  summaries, upskilling resources, CPD checklists, and practice assessments.
- The website at <https://uk-gdad.github.io>, a SvelteKit project that
  prerenders every document, with `bin/publish` to push it.
- `spec/` as the single source of truth, and `bin/check` as that specification
  expressed as code.
- `AGENTS.md` and `AGENTS/` working notes, and `index.md` as the manual.
- The skills self-assessment tool.

### Fixed

- Three skill names corrected against the published framework catalogue, and a
  fourth (`Ownership and topic` → `Ownership and initiative`).
- The self-assessment sliders did not register a rating.

### Removed

- Upskilling documents that were not in the canonical role index.
