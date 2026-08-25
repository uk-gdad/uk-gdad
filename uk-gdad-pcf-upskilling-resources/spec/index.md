# Upskilling resources — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy, the
role index, slugs, style, and licensing. This file covers only what is specific
to upskilling resources.

## Purpose

For every role level, a starting set of places to learn the job: courses, blog
posts, research, videos, and books. Good starting points, not a catalogue.

## Input

`uk-gdad-pcf-role-summaries/roles/<slug>.md` — nothing else. The role, the level
and the skills named there decide what to search for. Do not derive one level's
document from another level's document; a senior developer and a lead developer
need different material even when the role is the same.

## Output

`roles/<slug>.md`, the same slug as the summary.

### Title

```
# <Level> - upskill resources
```

Sentence case, level name as the framework writes it, e.g.
`# Senior developer - upskill resources`.

### Opening

Prose, then the standing notes. Every file opens with the same four points, in
this order:

1. What the page is: learning and growth resources for this work role.
2. What it contains: courses, blogs, research articles, videos, books.
3. What it is for: upskilling, training, professional development, career
   advancement.
4. That these are starting points, not a comprehensive catalogue.

Then a short paragraph specific to this level — what the level actually needs,
and what the list therefore emphasises. This is the only part of the opening
that varies, and it is what makes the document worth reading.

Then the feedback note: GitHub issues and pull requests welcome; resources are
found via AI search and then human-reviewed; a contact address.

### Required sections

In this order:

| Section | Items | Source |
| --- | ---: | --- |
| `## Coursera courses` | 3 | <https://coursera.org> |
| `## Udemy courses` | 3 | <https://udemy.com> |
| `## Skillsoft courses` | 3 | <https://skillsoft.com> |
| `## edX courses` | 3 | <https://edx.org> |
| `## MIT OpenCourseWare courses` | 3 | <https://ocw.mit.edu> |
| `## Blog posts` | 10 | anywhere |
| `## Research articles` | 10 | anywhere |
| `## Videos` | 10 | YouTube and similar |
| `## Books on Amazon` | 10 | Kindle store |
| `## Professional development tips` | — | written, not sourced |

Item counts are the target, not a hard rule; `bin/check` enforces that the
section exists, not how many items it holds.

### Item format

One markdown list item per resource:

```
- [Title](URL): One or two sentences on what it covers and who it suits.
```

Rules:

- **Original content only.** A course, a post, a paper, a video, a book. Not a
  "top 10 tools" listicle, not a channel, not a magazine, not a meta-study, not
  an advertisement.
- **The link resolves** at the time of writing, and points at the thing itself,
  not a search result.
- **The summary is specific.** "Covers system design trade-offs for services
  under load" beats "a great resource for developers".
- **No duplicates within a file**, and no filler to reach a count. Eight real
  blog posts beat ten with two invented.

## Authoring

1. Read the summary for the slug.
2. Search each named source in turn for the role and its skills.
3. Draft. If the output arrives as numbered `Title:` / `URL:` / `Summary:`
   blocks, [`bin/cook`](../../bin/cook) reformats it into the list format above
   and normalises the shouted headings.
4. Write `roles/<slug>.md`.
5. Run `bin/check` from the repository root.
6. Human review: open a sample of the links and confirm they are what the
   summary claims.

## Quality bar

- Every link resolves and is the resource named.
- The level-specific paragraph says something true about this level that is not
  true of its neighbours.
- Nothing in the file was copied from another role level's file.
