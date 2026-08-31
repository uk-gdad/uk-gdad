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

File `Makefile` provides task `make github-pages` that delegates to POSIX
shell script `bin/make-github-pages`, which runs the subtree push:

```
git subtree push --prefix=<repo>.github.io github-pages main
```

The remote is always named `github-pages`, the same as the task and the
script — one name, so nothing is left to guess. The script, not the Makefile,
carries the safety checks (an uncommitted-changes guard, a lint or validation
pass), so there is one place those checks live and the Makefile task stays a
one-line delegation:

```
.PHONY: github-pages
github-pages:
	bin/make-github-pages
```

In this project, the subproject is `uk-gdad.github.io` and the script is
[`bin/make-github-pages`](../../bin/make-github-pages).

## Maintenance

Always maintain the GitHub pages subproject: `~/git/<organization>/<repo>/<repo>.github.io`

To maintain the sibling top-level read-only export project, always use git subtree; never work directly in: `~/git/<organization>/<repo>.github.io`
