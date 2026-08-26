# Benchmarks

This is a documentation project and a static website, so the numbers that matter
are corpus size, how long the checks take, and what a reader downloads. There is
no runtime to profile: nothing executes on a server, because there is no server.

Measured on 2026-08-26, on an Apple Silicon Mac, at commit `c9a33a5`. Reproduce
any of them with the commands given.

## Corpus

| Project | Files | Words |
| --- | ---: | ---: |
| Role summaries | 205 | 96,280 |
| Upskilling resources | 205 | 345,827 |
| CPD checklists | 205 | 411,357 |
| Assessments | 205 | 3,564,961 |
| Skills gap forms | 205 | 828,493 |
| **Total** | **1,025** | **5,246,918** |

```sh
find uk-gdad-pcf-assessments/roles -name '*.md' | wc -l
cat uk-gdad-pcf-assessments/roles/**/*.md | wc -w
```

The assessments are two-thirds of the words: each carries four assessment
sections, and the contract asks for roughly 4,000 words per section.

## Checks

| Command | Time | What it covers |
| --- | ---: | --- |
| `bin/check` | 0.19s | 1,025 documents, every rule in `spec/index.md` that can be checked mechanically |
| `bin/serial-comma` | 11.8s | every line of prose this repository writes |
| `pnpm check` | 4s | 337 files, svelte-check |
| `pnpm build` | 6.5s | 1,222 prerendered pages |

`bin/check` reads and parses every document in a fifth of a second, which is the
number that matters: a check nobody minds running is a check that gets run.
`bin/serial-comma` is sixty times slower for a reason worth knowing: it runs a
dozen regular expressions against every line of those 5.2 million words, and one
of them is an alternation over every skill name in the framework. It is meant to
run before a commit that touches prose, not on every save.

## The built site

| | |
| --- | ---: |
| Pages prerendered | 1,222 |
| Build directory | 129 MB |
| Build time | 6.5s |

Page weight, as served with gzip:

| Page | Raw | Gzipped |
| --- | ---: | ---: |
| A role summary | 16 KB | 3.5 KB |
| A skills gap form, ~100 controls | 80 KB | 16 KB |
| `assets/style.css`, whole site | 20 KB | 4 KB |
| `assets/gapform.js`, gap forms only | 12 KB | 3 KB |

```sh
gzip -c build/roles/software-development/software-developer/4-senior-developer/index.html | wc -c
```

## JavaScript

The site's rule is that a content page carries no client-side JavaScript. Every
content route sets `csr = false`, so SvelteKit prerenders the page and ships no
router, no hydration payload, and no framework bundle.

| Route | Scripts on the page |
| --- | --- |
| Role summary, upskilling, CPD, assessment | none |
| Skills gap form | one, `gapform.js`, 3 KB gzipped |
| `/roles/`, `/skills/` (searchable indexes) | the app bundle, because they are interactive |

The gap form's script is the single exception, and it is deliberate: it saves a
reader's answers in their own browser and exports them. It is plain ES5-era
JavaScript with no build step and no dependencies.

**This measurement found a defect.** Until commit `c9a33a5`, the role summary
route was the one content route that had not set `csr = false`, so all 205 of
those pages shipped a 5.3 KB inline bootstrap and pulled the app bundle in order
to hydrate a page with nothing on it. Fixing it took a summary page from 20 KB
to 16 KB raw, and from 5 KB to 3.5 KB gzipped. The benchmark was worth writing
for that alone.

## Accessibility

Not speed, but measured the same way, across all 1,222 pages and in three
browser engines:

| Check | Result |
| --- | --- |
| Duplicate element ids | 0 pages |
| Labels pointing at nothing | 0 pages |
| Form controls with no accessible name | 0 |
| Groups with no accessible name | 0 |
| Pages without exactly one `h1` | 0 |
| Skipped heading levels | 0 pages |
| Console errors, Chromium, Firefox, WebKit | 0 |

## What is not measured

- **Link rot.** Several hundred external URLs, no automated check. See
  [AI_STATEMENT.md](AI_STATEMENT.md) section 8.
- **Assessment word counts.** The contract asks for approximately 4,000 words
  per section; actual lengths vary widely and nothing enforces it. Recorded
  under Known drift in [`spec/index.md`](spec/index.md).
- **Real-world page timing.** No field data. The site is static files on GitHub
  Pages, and the numbers above are what a browser has to fetch.
