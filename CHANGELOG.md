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
