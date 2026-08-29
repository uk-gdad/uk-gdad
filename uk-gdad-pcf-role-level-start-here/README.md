# UK GDAD PCF role level start here

The first page for every role level in the United Kingdom Government Digital
and Data (GDAD) Profession Capability Framework (PCF): what the level is for,
where the rest of this repository's documents for it live, and a learning
pathway from zero to skilled.

**205 documents wanted**, one per role level, each written from that level's
[role summary](../uk-gdad-pcf-role-summaries). This project is a rollout in
progress — see [spec/index.md](spec/index.md) § Status.

## What a document contains

A title, then three sections:

| Section | What it holds |
| --- | --- |
| Purpose | One paragraph, grounded in this level's own accountabilities |
| Explore the framework | Six links to this level's other pages on the published site |
| Learning pathway | One checklist item per skill, ordered for a novice, each ending in an "Ask AI" prompt |

The learning pathway never links to a specific resource or names a specific
product — it coaches the reader to ask AI and to judge what they get back, per
[spec/index.md](spec/index.md).

## Use it

```sh
cat roles/quality-assurance-testing/test-engineer/2-test-engineer.md
```

Or read it on the web: <https://uk-gdad.github.io/> (this project is not yet
wired into the website's build — see the root `spec/index.md` § Website).

## Contributing

Read [spec/index.md](spec/index.md), write one role level's page from its
summary, then run `../bin/check` from the repository root.

Contact: Joel Henderson <joel@joelparkerhenderson.com>

## Licence

Open Government Licence v3.0. See [LICENSE.md](LICENSE.md).
