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
  JavaScript at all.

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

## Build and deploy

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm check      # svelte-check, must be clean
pnpm build      # build/, 1,017 pages
pnpm preview    # production-mode preview
./bin/sync      # refresh vendored inputs
```

GitHub Actions builds and deploys on push to `main`, per
`.github/workflows/deploy.yml`. Repository settings: Pages → Build and
deployment → Source → GitHub Actions.

## Quality bar

- `pnpm check` reports zero errors and zero warnings.
- `pnpm build` completes with no prerender errors, so every internal link
  resolves.
- No page logs an error in the browser console.
- The repository's `bin/check` passes, so vendored content is not stale.
