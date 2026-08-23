# UK GDAD PCF upskilling resources

Learning and growth resources for every role level in the United Kingdom
Government Digital and Data (GDAD) Profession Capability Framework (PCF):
courses, blog posts, research articles, videos and books.

**205 documents**, one per role level, each written from that level's
[role summary](../uk-gdad-pcf-role-summaries).

These are good starting points, not a comprehensive catalogue. They are found
via AI search and then human-reviewed.

## What a document contains

A title, a short opening that says what the page is and what this level in
particular needs, then ten sections:

| Section | Items |
| --- | ---: |
| Coursera courses | 3 |
| Udemy courses | 3 |
| Skillsoft courses | 3 |
| edX courses | 3 |
| MIT OpenCourseWare courses | 3 |
| Blog posts | 10 |
| Research articles | 10 |
| Videos | 10 |
| Books on Amazon | 10 |
| Professional development tips | — |

Each item is one line:

```
- [Title](URL): One or two sentences on what it covers and who it suits.
```

Original content only — a course, a post, a paper, a talk, a book. Not
listicles, channels, magazines or marketing pages.

Full contract: [spec/index.md](spec/index.md).

## Use it

```sh
cat roles/software-development/software-developer/4-senior-developer.md

# Every link in one document
grep -o 'https\?://[^)]*' roles/data/data-analyst/2-data-analyst.md
```

Or read it on the web: <https://uk-gdad.github.io/upskilling/>

## Contributing

Dead links and better resources are the most useful contributions. Read
[spec/index.md](spec/index.md), make the change, then run `../bin/check` from
the repository root.

Contact: Joel Henderson <joel@joelparkerhenderson.com>
