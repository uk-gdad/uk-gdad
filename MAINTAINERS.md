# Maintainers

This file is the roster, and the honest answer to the question anyone relying on
this material should ask: *what happens if the person who can fix it is
unavailable?*

It describes the project as it is in git history on the day you read it, not a
structure the project hopes to grow into.

## Roster

| Person | Contact | Role | Since |
| --- | --- | --- | --- |
| Joel Parker Henderson | <joel@joelparkerhenderson.com> · [ORCID 0009-0000-4681-282X](https://orcid.org/0009-0000-4681-282X) | Maintainer (sole) | 2026-08-23 |

**The bus factor of this project is one.** One person has write access, one
person can publish the website, and one person can accept a change. No second
maintainer exists, no organisation stands behind the project, and no legal
entity is a party to it.

Nothing elsewhere in this repository should be read as softening that.

## Publishing identities

These are the accounts that can put bytes in front of a reader. Writing the
inventory down is the point: one nobody has recorded is one nobody can hand
over.

| Identity | What it publishes | Recovery if unavailable |
| --- | --- | --- |
| The `uk-gdad` GitHub organisation | the repository, its issues, and its history | GitHub's account-recovery process, between GitHub and the account holder |
| The `uk-gdad/uk-gdad.github.io` repository | the built website, through GitHub Actions and GitHub Pages | as above; it is a publishing target and holds no source of its own |
| The Codeberg and GitLab mirrors | the same history, pushed by the same `git push` | independent accounts, same holder |

**The honest reading:** every identity terminates at one person's accounts.
There is no escrow and no second holder. That is the residual risk, stated
rather than mitigated, because no mitigation is available to a one-person
project without an entity behind it.

## If the maintainer is unavailable

There is no succession plan a document can create. What exists instead:

- **Nothing published disappears.** The website is static files already served,
  and the repository is mirrored to three hosts on two continents. A reader
  mid-way through a skills gap form is not affected by maintainer availability.
- **Nothing new ships.** No corrections, no new role levels when the framework
  changes upstream, and no fix to a document that turns out to be wrong. Given
  that the derived documents are AI-assisted and unvalidated, that matters:
  see [AI_STATEMENT.md](AI_STATEMENT.md).
- **The work is not lost.** The licence is the Open Government Licence, the
  history is public, every rule is written down in [`spec/`](spec) and most of
  them are enforced by [`bin/check`](bin/check). A fork is a complete and
  legitimate continuation, and the project's position is that it should be
  taken rather than waited for.
- **The framework itself is unaffected.** The authoritative source is
  <https://ddat-capability-framework.service.gov.uk/>, maintained by the
  Government Digital Service, and it does not depend on this project in any way.

If you depend on this material and that position is not acceptable — it
reasonably may not be — the mitigation is on your side: take a copy, or use the
official framework directly.

## Adding a maintainer

There is no committee to convince. Send a few good pull requests, then ask.
What changes when someone joins: a row in the table above, their address in
[CODEOWNERS](CODEOWNERS), and a second holder against whichever publishing
identities permit one.

## Reporting a problem

- **A document that is wrong** — open an issue at
  <https://github.com/uk-gdad/uk-gdad/issues>. Corrections to the role summaries
  need a source in the published framework; see
  [AGENTS/role-summaries.md](AGENTS/role-summaries.md).
- **Anything sensitive** — email <joel@joelparkerhenderson.com> rather than
  opening an issue.
- **A licensing or attribution concern**, including from the framework's owners
  — email the same address. See [LICENSE.md](LICENSE.md).
