# Website

Contract: [`uk-gdad.github.io/spec/index.md`](../uk-gdad.github.io/spec/index.md).

## Stack

SvelteKit 2 with Svelte 5 runes, `@sveltejs/adapter-static`, `marked` for
markdown at build time, pnpm, and the
[Lily Design System™](https://lilydesignsystem.com/) for components and class
names. Every page is prerendered; there is no server and no runtime API.

## Commands

```sh
cd uk-gdad.github.io
pnpm install
pnpm dev        # http://localhost:5173
pnpm check      # svelte-check — must be clean
pnpm build      # build/ — 1,222 pages
pnpm preview    # production-mode preview
./bin/sync      # refresh vendored inputs
```

From the repository root, `bin/publish` checks and then publishes.

## Vendored, never edited

- `content/` — a byte-for-byte copy of the five `roles/` trees
- `src/lib/lily/` — Lily components, per `bin/lily-components.txt`
- `static/tools/skills-self-assessment.html` — the self-assessment tool

Edit the source, run `./bin/sync`, then `bin/check` from the repository root.

## Publishing

The site is published to <https://github.com/uk-gdad/uk-gdad.github.io> by
`bin/publish` at the repository root, which runs `bin/check` and then
`git subtree push --prefix=uk-gdad.github.io site main`. GitHub Actions builds
the pushed repository and GitHub Pages serves it.

That repository is a publishing target, not a place to work. A commit made there
directly has no common ancestor with the next subtree split, so the next publish
is rejected. Edit everything here — the workflow file and the site's `README.md`
included. See index.md § Tutorial: publish the website.

## Where the logic lives

- `src/lib/server/content.ts` — reads `content/` at build time. Holds the
  summary parser, the catalog, the skill index, and the markdown renderer.
- `src/lib/server/gapform.ts` — turns a skills gap form's questions, answer
  prompts, and tick lists into form controls while the markdown renders. Only
  that one document kind; everything else stays prose.
- `static/assets/gapform.js` — the only script on a content page, loaded by a
  skills gap form alone. Saves the reader's answers to their own browser and
  exports them as TSV or JSON. It is plain ES5-era JavaScript with no build
  step, because `csr = false` means nothing on the page is hydrated: the
  toolbar's buttons are wired up by id, not by Svelte.
- `src/lib/server/document.ts` — shared load for the four markdown routes.
- `src/lib/types.ts` — shapes shared with the browser. Everything here ships to
  the client, so keep it small.

## Things that bite

- **Rest parameters keep the trailing slash.** `trailingSlash: 'always'` means
  `/roles/a/b/c/` arrives with `params.slug === 'a/b/c/'`. Use `normalizeSlug`.
- **`{#each}` keys must be unique.** Summary bullets repeat, and some summaries
  name a skill twice. A duplicate key throws at hydration and blanks the page,
  while the prerendered HTML looks fine. Do not key a loop on its text.
- **Content routes set `csr = false`.** They are prose with nothing to hydrate;
  this roughly halves the built site.
- **Prerendering crawls every link.** A broken internal link fails the build,
  which is the point. Markdown links to `.md` files are rewritten to site URLs
  where they resolve and rendered as plain text where they do not.

## Accessibility

Semantic HTML, one `h1` per page, breadcrumbs, a skip link, visible focus using
the GOV.UK yellow, and no colour-only signalling. Lily components are headless —
they carry class names and ARIA, and no styles. All styling lives in
`static/assets/style.css`.
