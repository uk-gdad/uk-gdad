# Install

Most people do not need to install anything.

## Just read it

<https://uk-gdad.github.io>

Start at [Find a role](https://uk-gdad.github.io/roles/), or follow a
[skill](https://uk-gdad.github.io/skills/) across every level that expects it.
Nothing to install, no account, no tracking. The skills gap forms can be filled
in on the page, and the answers stay in your own browser.

## Take a copy

The documents are plain markdown. Clone the repository and you have all 1,845 of
them, greppable and diffable:

```sh
git clone https://github.com/uk-gdad/uk-gdad.git
cd uk-gdad
```

Mirrors, if GitHub is blocked on your network:

```sh
git clone https://codeberg.org/uk-gdad/uk-gdad.git
git clone https://gitlab.com/uk-gdad/uk-gdad.git
```

Find the file for one role level — the path is the slug:

```sh
cat uk-gdad-pcf-role-summaries/roles/software-development/software-developer/4-senior-developer.md
```

The same slug addresses that level in all nine projects, and is the URL path on
the website.

## Check it

`bin/check` needs Python 3 and nothing else. It validates the whole repository
against [`spec/index.md`](spec/index.md) in about a fifth of a second:

```sh
bin/check              # full report; exit 1 on failure
bin/check --quiet      # failures only
bin/check --list       # the canonical role index, one slug per line
```

## Run the website

Needs [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/installation).
The deploy workflow builds on Node 24, so that is the version the published site
is known to build with; `package.json` pins nothing.

```sh
cd uk-gdad.github.io
pnpm install
pnpm dev                 # http://localhost:5173
```

Other commands:

```sh
pnpm check               # svelte-check; must be clean
pnpm build               # build/ — 1,632 prerendered pages, about 6 seconds
pnpm preview             # serve the production build
./bin/sync               # refresh the vendored content after editing documents
```

The site reads its content from `uk-gdad.github.io/content/`, which is a copy of
the five `roles/` trees. Edit the source documents, then run `./bin/sync`, or
`bin/check` will tell you the copies are stale.

## The other tools

Both are optional, and both live at the repository root.

```sh
bin/serial-comma            # report prose missing a serial comma; change nothing
bin/serial-comma --write    # apply it
bin/cook draft.md           # reformat raw AI output into the required markdown
```

`bin/cook` needs GNU sed (`brew install gnu-sed`).

## Publish

Only the maintainer can, and it needs push access to the site repository:

```sh
bin/make-github-pages --dry-run    # check, and report what would be pushed
bin/make-github-pages              # check, then push
```

## If something does not work

- **`bin/check` reports a stale copy** — run `uk-gdad.github.io/bin/sync`.
- **`pnpm build` fails on a link** — prerendering crawls every internal link, so
  a broken one fails the build. That is deliberate. The message names the page.
- **Anything else** — open an issue at
  <https://github.com/uk-gdad/uk-gdad/issues>.
