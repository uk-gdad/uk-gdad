# Upskilling resources

Contract: [`uk-gdad-pcf-upskilling-resources/spec/index.md`](../uk-gdad-pcf-upskilling-resources/spec/index.md).

## Shape

Title `# <Level> - upskill resources`, then a fixed opening, then ten `##`
sections in a fixed order: five course sources, then blog posts, research
articles, videos, books, and a written tips section.

## Item format

```
- [Title](URL): One or two sentences on what it covers and who it suits.
```

## What counts

**Yes:** a course, a post, a paper, a talk, a book. Something a person can work
through.

**No:** listicles ("top 10 tools for X"), channels rather than videos,
magazines rather than books, meta-studies, marketing pages, search-result URLs.

## The paragraph that matters

Between the standing opening and the first section, write one paragraph specific
to this level: what it actually needs, and what the list therefore emphasises.
It is the only bespoke prose in the document, and it is what stops the page
reading like a generated list. It should be true of this level and not of the
level above or below it.

## Working with raw AI output

Search output often arrives as numbered blocks:

```
1. **Title:** Some Course
   **Provider:** Coursera
   **URL:** https://…
   **Summary:** …
```

`bin/cook` converts that to the required list format and normalises shouted
headings (`COURSERA COURSES` → `## Coursera courses`):

```sh
bin/cook draft.md > roles/<slug>.md
```

It needs `gsed` (`brew install gnu-sed`). See `bin/cook-test.md` for the cases
it handles. Always read the result — it is a sed script, not a parser.

## Before committing

- Open a sample of links and confirm they are what the summary claims.
- Check no section is missing: `bin/check` will tell you.
- Check nothing was copied from a neighbouring level.
