# AI statement

| | |
| --- | --- |
| Version | 1.0.0 |
| Effective date | 2026-08-26 |
| Status | Active |
| Author and owner | Joel Parker Henderson, maintainer |
| Canonical location | `AI_STATEMENT.md` at the repository root |
| Licence | Open Government Licence v3.0, like the rest of the project |
| Review | on any trigger in section 9 |

**Abstract.** This document discloses how artificial intelligence is used in
this project. Unlike most such statements, the answer is not "AI helped write
the code": **the majority of what this project publishes is AI-generated
prose**, and a reader may act on it in their career. That makes the disclosure
the important document in this repository rather than a formality at the bottom
of it.

The key words **shall**, **should**, and **may** are used as requirement,
recommendation, and permission.

## 1. Scope

This covers everything in the repository: the five document sets, the
specifications, the notes, the scripts, and the website — and this file.

It does not cover an AI system in the product, because there is none. **The
website ships no AI.** No model is trained, embedded, or called when a page is
served. Every page is static HTML built ahead of time. The one script on a
content page saves a reader's answers in their own browser
([`gapform.js`](uk-gdad.github.io/static/assets/gapform.js)) and sends nothing
anywhere.

## 2. Terms

This uses the W3C AI Content Disclosure vocabulary rather than inventing one:
**none** (entirely human-authored), **ai-assisted** (human-authored; AI edited
or filled in), **ai-generated** (AI-generated with human prompting and review),
**autonomous** (AI-generated without meaningful human oversight).

## 3. Accountability

One named human — the maintainer in [MAINTAINERS.md](MAINTAINERS.md) — is
accountable for every file here, whatever produced the bytes. A tool **shall
not** be named as an author of the work; responsibility that cannot be borne
cannot be assigned. Commits carry a `Co-Authored-By` trailer for the assisting
tool as a matter of record, which is attribution of labour, not of
responsibility.

## 4. Where AI is used, and at what level

| Material | Level | Notes |
| --- | --- | --- |
| Role summaries (205 files) | none | Adapted from the published framework. Human-transcribed against the source; a change needs a source, not a judgement |
| Upskilling resources (205) | ai-generated | Searched and drafted with AI, then reviewed. Every course, article, video, and book must exist and its link must resolve |
| CPD checklists (205) | ai-generated | General sections from a shared template; the per-level section drafted against the summary |
| Assessments (205) | ai-generated | Practice material written against the skills each summary names |
| Skills gap forms (205) | ai-generated | Written against the summary, quoting the framework's own wording for what each level expects |
| Specifications, notes, scripts, website | ai-generated | Written in directed sessions and reviewed before merge |
| What the framework says | none | Never inferred. Where a summary and a derived document disagree, the summary wins |

**autonomous** appears in no row, and that is the point of the next section.

## 5. Human oversight

The maintainer directs the work, reads the result, and merges it. Nothing lands
on its own authority. A decision that exists only inside a tool session is not a
decision this project has made.

The honest limit of that oversight is stated in section 8: 5.2 million words
have not each been read as carefully as this sentence.

## 6. What is checked, and what that proves

Every change passes the same gates, whoever wrote it.

- **[`bin/check`](bin/check)** is the specification expressed as code. It
  verifies the role index, that all five projects mirror it exactly, that every
  document carries its required sections, that every skills gap form covers
  exactly the skills its summary names in the summary's order, and that the
  website's vendored copies match their sources byte for byte.
- **[`bin/serial-comma`](bin/serial-comma)** applies one prose rule
  mechanically, and records in
  [`bin/serial-comma-declined.md`](bin/serial-comma-declined.md) every line a
  person read and decided against, so a judgement is made once.
- **The website build fails on a broken internal link**, because prerendering
  crawls every one of them.

**What none of that proves is that a document is true.** The gates check
structure, coverage, and consistency. No check can tell whether a course is
worth taking, whether an assessment item is fair, or whether advice about a
role level is good. That is the residual risk, and it is why the advisory below
is on every page.

## 7. The advisory, and why it is not boilerplate

Every derived document states that it is AI-assisted, is work in progress, is
for educational purposes, and that a reader should consult their organisation's
human resources, people development, or legal colleagues before relying on it.
`bin/check` enforces its presence in the assessments.

That paragraph is load-bearing. People make career decisions on this kind of
page: what to learn, what to ask for, whether to go for promotion. **The
assessments are not a validated instrument** — not normed, not validated, and
not fit for making decisions about people. **The skills gap forms are not an
assessment of anyone.** Anyone republishing this material **shall** carry the
advisory with it.

## 8. Limitations and residual risks

This section exists because a disclosure without one is marketing.

- **Scale exceeds review depth.** This is 1,025 documents and roughly 5.2
  million words, maintained by one person. The honest claim is that the
  structure is enforced, the rules are written down, and the material has been
  reviewed. "Every sentence has been independently verified" would not be true.
- **Link rot is unaddressed.** The upskilling documents name several hundred
  external URLs. No automated link check runs. Some are already dead.
- **Invention is the failure mode to fear.** The rule is that nothing may be
  named that does not exist, and a short list beats a padded one. It is enforced
  by review, not by a check, so it can fail silently.
- **The framework moves.** The summaries reflect the framework as read on the
  date they were written. Upstream changes are not tracked automatically.
- **Known drift is recorded, not hidden.** [`spec/index.md`](spec/index.md) has
  a section listing what is known to be inconsistent and why it has not been
  fixed, including skill names that no longer match the published catalogue.
- **This is a self-declaration.** Nobody has audited it. The checkable artifacts
  in section 6 are the counterweight: they can disagree with this document, and
  if they do, this document is wrong.

## 9. Review and change

Revised when the tooling changes materially, when a claim here stops being true,
when a binding rule emerges that touches this use, or when the framework's
owners ask for something different. The change lands as a commit like anything
else, and the version and the log below update in the same one.

## 10. Reporting

A suspected accuracy, provenance, or licensing problem — including a claim in
this document that does not survive checking — is a report this project wants.
Open an issue at <https://github.com/uk-gdad/uk-gdad/issues> and cite this file,
or email <joel@joelparkerhenderson.com> for anything sensitive.

## Annex A. Change log

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 2026-08-26 | First issue. |

## Annex B. Machine-readable summary

Levels per the W3C AI Content Disclosure vocabulary in section 2; the prose
above is authoritative where the two could disagree.

```yaml
ai-statement:
  version: 1.0.0
  last-updated: 2026-08-26
  vocabulary: w3c-ai-content-disclosure
  disclosure-default: ai-generated
  tools:
    - name: Claude Code
      provider: Anthropic
  content:
    role-summaries: none
    upskilling-resources: ai-generated
    cpd-checklists: ai-generated
    assessments: ai-generated
    skills-gap-forms: ai-generated
    specifications-and-tooling: ai-generated
  ships-ai-system: false
  autonomous-use: none
```
