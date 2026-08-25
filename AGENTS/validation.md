# Validation

`bin/check` is `spec/index.md` expressed as code. Every mechanical rule in the
specification is enforced there; every rule that needs human judgement is marked
**advisory** in the specification and is not.

## Running it

```sh
bin/check           # full report, exit 1 on failure
bin/check --quiet   # failures only — use in scripts
bin/check --list    # the canonical role index, one slug per line
```

Run it before every commit that touches content.

## What it checks

1. **Canonical index** — path shape, profession names, kebab-case, and level
   numbering that starts at 1 with no gaps or duplicates.
2. **Mirroring** — the four derived projects hold exactly the canonical set.
3. **Summaries parse** — a role line, exactly one level line, at least one skill.
4. **Document contracts** — required title and required `##` sections, per
   project.
5. **Skill coverage** — each skills gap form has one `### Skill:` block per
   skill its summary names, in the summary's order, named exactly. This is the
   one content rule `bin/check` enforces beyond structure, because a form that
   drops or misnames a skill still passes every other check.
6. **Website freshness** — vendored content matches its sources byte for byte,
   and every Lily component in the manifest is present.

## Common failures

| Message | Cause | Fix |
| --- | --- | --- |
| `is not in the canonical role index` | A file exists in a derived project but not in the summaries | Add the summary, or delete the file |
| `missing <slug>.md` | A summary has no counterpart | Write the derived document |
| `is stale — run …/bin/sync` | Content edited but the website not re-synced | `uk-gdad.github.io/bin/sync` |
| `levels are numbered [1, 2, 4]` | A gap after a deletion | Renumber, in all five projects |
| `is missing section '## …'` | A required heading was renamed or dropped | Restore the exact heading |
| `has no block for skill '…'` | A gap form drops or misnames a skill | Match the summary's skill name exactly |
| `skill blocks are not in the summary's order` | Blocks reordered | Put them back in the summary's order |

## Adding a rule

Adding a rule to the specification means adding it to `bin/check`, or marking it
advisory. A rule stated in prose and enforced nowhere drifts within a month.

Each check is a function that appends to `failures`. Keep the message specific
enough to act on without opening the file: name the project, the slug, and what
was expected.

## Diffing the index across framework updates

```sh
bin/check --list > /tmp/before.txt
# … update summaries from a fresh framework download …
bin/check --list | diff /tmp/before.txt -
```

That diff is exactly what moved, and it is the work list for the other four
projects.
