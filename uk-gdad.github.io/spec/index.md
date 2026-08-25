# Website — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy, the
role index and slugs. This file covers only the website.

## Purpose

Publish everything in this repository as a static website at
<https://uk-gdad.github.io>, so that a role level can be read, searched and
linked to without cloning anything.

## Constraints

- **Static.** Every page is prerendered to HTML at build time. There is no
  server, no database and no runtime API. GitHub Pages serves the `build/`
  directory as files.
- **Self-contained.** The project builds from its own directory. It reads
  nothing outside itself at build time, so that it still builds after being
  pushed to its own repository. Inputs are vendored — see below.
- **Accessible.** Semantic HTML, one `h1` per page, visible focus, skip link,
  breadcrumbs, and no colour-only signalling. Content pages carry no client-side
  JavaScript, with one exception: a skills gap form loads
  `static/assets/gapform.js`, which saves the reader's answers in their own
  browser and exports them. The form works without it — the controls are plain
  HTML — so the buttons that script owns stay hidden until it runs.

## Stack

| Piece | Choice | Why |
| --- | --- | --- |
| Framework | SvelteKit 2, Svelte 5 runes | Prerendering with a real router |
| Adapter | `@sveltejs/adapter-static` | Plain files for GitHub Pages |
| Markdown | `marked` | Rendered at build time, never in the browser |
| Design | [Lily Design System™](https://lilydesignsystem.com/) | Headless Svelte components, Lily class names |
| Package manager | pnpm | |

Lily components are headless: they carry class names and accessibility
semantics, and no styles. All styling is in `static/assets/style.css`, which
defines the Lily tokens with a palette close to UK government digital services.

## Vendored inputs

Refreshed by `bin/sync`, verified by the repository's `bin/check`:

| Path | Copied from |
| --- | --- |
| `content/role-summaries/` | `uk-gdad-pcf-role-summaries/roles/` |
| `content/upskilling-resources/` | `uk-gdad-pcf-upskilling-resources/roles/` |
| `content/continuing-professional-development-checklists/` | `uk-gdad-pcf-continuing-professional-development-checklists/roles/` |
| `content/assessments/` | `uk-gdad-pcf-assessments/roles/` |
| `content/roles-skills-gap-forms/` | `uk-gdad-pcf-roles-skills-gap-forms/roles/` |
| `src/lib/lily/` | Lily Design System, per `bin/lily-components.txt` |
| `static/tools/skills-self-assessment.html` | `uk-gdad-pcf-skills-self-assessment/index.html` |

Never edit a vendored file. Edit the source and re-run `bin/sync`.

## URLs

Trailing slashes always. The slug from the root specification is the path.

| Path | Page | Count |
| --- | --- | ---: |
| `/` | Home | 1 |
| `/professions/` | All professions | 1 |
| `/professions/<profession>/` | One profession, its roles and levels | 8 |
| `/roles/` | Role finder, searchable | 1 |
| `/roles/<slug>/` | Role summary, parsed into sections | 205 |
| `/upskilling/<slug>/` | Upskilling resources | 205 |
| `/continuing-professional-development/<slug>/` | CPD checklist | 205 |
| `/assessments/<slug>/` | Practice assessment | 205 |
| `/skills-gap-forms/<slug>/` | Skills gap form | 205 |
| `/skills/` | All skills, searchable | 1 |
| `/skills/<skill>/` | One skill and every level that expects it | 183 |
| `/skills-self-assessment/` | The self-assessment tool | 1 |
| `/about/` | Provenance, licensing, how it is built | 1 |
| `/sitemap.xml` | Every URL above | 1 |

A URL that 404s at build time fails the build. Prerendering crawls every link.

## Content handling

- **Summaries** are parsed by `src/lib/server/content.ts` into role, level,
  duties and skills, then rendered as structured HTML — not as markdown.
- **Derived documents** are rendered from markdown at build time. Headings get
  stable ids and feed an on-page contents list.
- **Links inside markdown** that point at `.md` files are rewritten to site
  URLs where they resolve, and rendered as plain text where they do not, so a
  placeholder never becomes a broken link.
- **Retired levels** are titled by their role name and marked with a badge,
  rather than being titled `NOT IN USE`.
- **Skills gap forms** are meant to be filled in, so `src/lib/server/gapform.ts`
  renders their answer prompts as textareas and their tick lists as radio or
  checkbox groups while the markdown renders. Every control is plain HTML, with
  no form element and no action. Each carries a `data-key` — `Q17`, or
  `Rating: User focus` — which is its column heading in an export and its key in
  the JSON. Where one question carries both a tick list and a free-text
  follow-up, the second field takes a letter: `Q27`, then `Q27b`.
- **Every control names itself.** A tick list is a `fieldset` labelled by its
  question; a rating is a `fieldset` with a legend naming its skill; a textarea
  is labelled by its question *and* by its own "Your answer:" label, because
  otherwise sixty fields on a page would all announce the same three words.
- **Answers on a skills gap form** are saved to `localStorage` by
  `static/assets/gapform.js`, under the page's own path, and restored on the
  next visit. The toolbar it reveals exports them as TSV (a row of headings, a
  row of answers, with tabs and newlines backslash-escaped) or as JSON, and
  clears both the form and the saved copy. Nothing is sent anywhere: there is no
  server to send it to. It flushes on `pagehide`, so the last words typed
  before a tab closes are not lost, and its status line repeats the message
  already in the markup when it saves, so the live region announces restoring,
  exporting, clearing and failing — and stays silent while someone types.

## Build and deploy

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm check      # svelte-check, must be clean
pnpm build      # build/, 1,222 pages
pnpm preview    # production-mode preview
./bin/sync      # refresh vendored inputs
```

This project is developed as a subdirectory of
<https://github.com/uk-gdad/uk-gdad> and published to a repository of its own,
<https://github.com/uk-gdad/uk-gdad.github.io>, by `bin/publish` at that
repository's root — `git subtree push --prefix=uk-gdad.github.io site main`.
That is why the self-contained constraint above exists: the pushed repository
has the site at its root and nothing else, so it must build from its own
directory.

The site repository is a publishing target. It is never committed to directly; a
commit there has no common ancestor with the next subtree split and blocks the
next publish.

GitHub Actions builds and deploys on push to `main`, per
`.github/workflows/deploy.yml`. Repository settings: Pages → Build and
deployment → Source → GitHub Actions.

## Quality bar

- `pnpm check` reports zero errors and zero warnings.
- `pnpm build` completes with no prerender errors, so every internal link
  resolves.
- No page logs an error in the browser console.
- The repository's `bin/check` passes, so vendored content is not stale.
