# Website

The static site published at <https://uk-gdad.github.io>. SvelteKit,
prerendered, built with the Lily Design System™. It renders seven documents
per role level — summary, start here, upskilling, development, assessment (by
assessor and by yourself, two separate projects sharing this route shape) and
skills gap form — across 1,632 pages. A ninth document, a
self-rating competency assessment, exists for every role level but is not yet
wired into this site — see the root `spec/index.md` § Known drift. Its inputs
are vendored: edit the source and run `./bin/sync`, never the copies.

Part of the [UK GDAD PCF repository](../AGENTS.md). The repository-wide rules —
taxonomy, slugs, the role index, writing style, licensing — live there and in
[`spec/index.md`](../spec/index.md). Do not restate them here.

@../spec/index.md
@spec/index.md
@../AGENTS/repository.md
@../AGENTS/taxonomy.md
@../AGENTS/writing.md
@../AGENTS/website.md
@../AGENTS/validation.md

---

Run `../bin/check` from the repository root before committing.
