# uk-gdad.github.io

The public website for the [UK GDAD PCF projects](https://github.com/uk-gdad/uk-gdad)
— the United Kingdom Government Digital and Data (GDAD) Profession Capability
Framework (PCF) — at <https://uk-gdad.github.io>.

A SvelteKit project using `@sveltejs/adapter-static` that prerenders **1,427
pages** to plain HTML, built with the
[Lily Design System™](https://lilydesignsystem.com/) and deployed by GitHub
Actions to GitHub Pages.

Specification: [spec/index.md](spec/index.md) · Working notes:
[AGENTS.md](AGENTS.md)

> **This repository is published, not developed.** It is a `git subtree` of
> `uk-gdad.github.io/` in <https://github.com/uk-gdad/uk-gdad>, pushed from
> there by `bin/publish`. Commits and pull requests made here are lost on the
> next publish, and a commit here blocks it. Open issues and pull requests
> against [uk-gdad/uk-gdad](https://github.com/uk-gdad/uk-gdad) instead.

## Layout

```
uk-gdad.github.io/
├── spec/index.md             What this site must do
├── bin/
│   ├── sync                  Vendors Lily components and PCF markdown in
│   └── lily-components.txt   Which Lily components this site uses
├── content/                  Vendored markdown — the source of every role page
│   ├── role-summaries/
│   ├── upskilling-resources/
│   ├── continuing-professional-development-checklists/
│   ├── assessments/
│   └── roles-skills-gap-forms/
├── src/
│   ├── app.html              Document shell
│   ├── lib/
│   │   ├── lily/             Lily components (vendored — do not edit)
│   │   ├── server/           Build-time reading and parsing of content/
│   │   └── types.ts          Shapes shared with the browser
│   └── routes/               One folder per URL
├── static/
│   ├── .nojekyll             Disables Jekyll on GitHub Pages
│   ├── assets/               style.css, favicon.svg
│   └── tools/                The vendored skills self-assessment tool
├── .github/workflows/
│   └── deploy.yml            CI: builds and deploys on push to main
├── svelte.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## URLs

| Path | Page | Pages |
| --- | --- | ---: |
| `/` | Home | 1 |
| `/professions/` | The professions in the framework | 1 |
| `/professions/<profession>/` | One profession: its roles and levels | 8 |
| `/roles/` | Searchable finder across every role level | 1 |
| `/roles/<slug>/` | Role summary: the role, the level, its skills | 205 |
| `/upskilling/<slug>/` | Upskilling resources for that level | 205 |
| `/continuing-professional-development/<slug>/` | Development checklist | 205 |
| `/assessments/<slug>/` | Practice assessment | 205 |
| `/skills-gap-forms/<slug>/` | Skills gap form to read and fill in | 205 |
| `/skills/` | Every skill the framework names | 1 |
| `/skills/<skill>/` | One skill, and every level that expects it | 183 |
| `/skills-self-assessment/` | The self-assessment tool | 1 |
| `/about/` | What this site is and where the content comes from | 1 |
| `/sitemap.xml` | Every URL above | 1 |

A `<slug>` is a role level's path identity, shared with the source projects:
`software-development/software-developer/4-senior-developer`.

## Develop

```sh
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # produces build/ for deploy
pnpm preview      # http://localhost:4173 — production-mode preview
pnpm check        # type-check; must be clean
```

## Sync

`content/`, `src/lib/lily/` and `static/tools/` are **vendored, not authored
here**, so that this project stays buildable on its own once it is pushed to its
public repository. Refresh them after the upstream sources change:

```sh
./bin/sync
```

It reads the sibling UK GDAD PCF projects in the parent directory, and the Lily
Design System at `~/git/lilydesignsystem/lily-design-system` (override with
`LILY_DESIGN_SYSTEM`).

Never edit a vendored file — edit the source and re-sync. The repository's
`bin/check` compares the copies against their sources byte for byte, so a stale
copy is a failing check.

## How the content becomes pages

- **Role summaries** are plain text, not markdown. `src/lib/server/content.ts`
  parses them into role, level, duties and skills, then renders structured HTML.
- **The other five** — start here, upskilling, development, assessments, and
  skills gap forms — are markdown, rendered at build time with `marked`.
  Headings get stable ids and feed an on-page contents list.
- **Gap-form paths end in `/roles`**, exactly as summary paths do, so the link
  rewriter in `content.ts` must test for `skills-gap` **before** it tests for a
  summary. Reordering those tests silently sends every gap-form link to the
  summary instead.
- **Markdown links to `.md` files** are rewritten to site URLs where they
  resolve, and rendered as plain text where they do not, so a placeholder never
  becomes a broken link.
- **Prerendering crawls every link**, so a broken internal link fails the build.

## Deploy

GitHub Actions deploys on push to `main`. In the repository settings, set
**Pages → Build and deployment → Source** to **GitHub Actions**.

For a custom domain, add `static/CNAME` and update the origin in
`static/robots.txt` and `src/routes/sitemap.xml/+server.ts`.

## Licence

Role summaries are adapted from the Government Digital and Data Profession
Capability Framework under the
[Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
The site's own code is offered under the same licence. See [LICENSE.md](LICENSE.md).
