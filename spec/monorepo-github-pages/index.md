# Monorepo GitHub pages

Goal: publish Monorope GitHub pages by using the monorepo git subtree to export a sibling read-only repo.

This project is a monorepo: `~/git/<organization>/<repo>`

This project contains a GitHub pages subproject: `~/git/<organization>/<repo>/<repo>.github.io`

The GitHub pages subproject uses:

- [GitHub Pages](https://pages.github.com/)
- [SvelteKit](https://svelte.dev/docs/kit/)
- [Lily Design System](https://github.com/LilyDesignSystem/lily-design-system)

## Publish

To publish the GitHub pages subproject, use git subtree to derive a sibling top-level read-only export project: `~/git/<organization>/<repo>.github.io`

## Makefile

Provide a `Makefile` task `make github-pages` that runs the subtree push:

```
git subtree push --prefix=<repo>.github.io <remote> main
```

`<remote>` is whatever git remote points at the sibling export project; it
need not be named `github-pages` itself. Where a project already has a script
that runs this command with its own safety checks (uncommitted-changes guard,
a lint or validation pass), the Makefile task should call that script rather
than repeat the raw command, so there is one place those checks live.

In this project, that script is [`bin/publish`](../../bin/publish), the remote
is `github-pages`, and the subproject is `uk-gdad.github.io`:

```
.PHONY: github-pages
github-pages:
	bin/publish
```

## Maintenance

Always maintain the GitHub pages subproject: `~/git/<organization>/<repo>/<repo>.github.io`

To maintain the sibling top-level read-only export project, always use git subtree; never work directly in: `~/git/<organization>/<repo>.github.io`
