# Writing

The contract is in [`spec/index.md` § Writing style](../spec/index.md#writing-style).
This is how to hold to it.

## Who you are writing for

The person doing the job. Address them as "you". Not their manager, not a
recruiter, not a policy team.

## Register follows seniority

The same instruction at two levels should not read the same way.

> **Apprentice developer** — Ask for a code review on everything you write for
> the first few months. Reviews are how the team teaches, not a test you pass.

> **Principal developer** — Set the review standard for the teams you influence,
> and make sure it survives your absence. If reviews stop when you are away, you
> have built a dependency rather than a practice.

Junior levels: concrete, small, supported, explained. Senior levels: ambiguity,
trade-offs, effects on other teams, developing others.

## Tone

Friendly, helpful, encouraging. Not corporate, not chirpy, not stern.

- Good: "This one takes practice. Start with a small service you already know."
- Bad: "Leverage synergies across the delivery landscape."
- Bad: "You must demonstrate competence in this area."

## The serial comma

A list of three or more items takes a comma before its final conjunction. The
rule is in [`spec/serial-comma/`](../spec/serial-comma/index.md).

```
Courses, articles, and books.    <- yes
Courses, articles and books.     <- no
```

`bin/serial-comma` applies it to the lists it can judge safely:

```sh
bin/serial-comma           # report what would change; change nothing
bin/serial-comma --write   # make the changes
bin/serial-comma --held    # the lists that need a person, not a script
```

It cannot always tell a list of three from a pair hung off a sentence. When it
proposes a comma that is wrong, or `--held` hands you a list it will not judge,
read the line and add it to `bin/serial-comma-declined.md`. That file is the
record of every such decision, so `--held` printing nothing means nobody has
work waiting rather than that nobody has looked.

It governs prose written here and stops at anything quoted. Leave the comma
as published in:

- framework wording quoted in a form or a summary
- a skill name — `Applied maths, statistics and scientific practices` is a join
  key, and a comma changes it into a different skill
- an official title, such as *Digital, Data and Technology*
- a course, article, video, or book title, and the name of its author

## Spelling

en-GB throughout for prose this repository writes: *organisation*, *prioritise*,
*behaviour*, *centred*, *programme*. The framework is en-GB too.

`cspell.json` sets `"language": "en-GB"`, so the spell checker agrees:

```sh
npx cspell "*.md" "spec/**/*.md" "AGENTS/**/*.md"
```

It is not wired into `bin/check`, because the corpus names hundreds of people
and products it cannot know.

The corpus was swept for en-US spellings on 2026-08-26: 729 changed, and what
survives is deliberate. Left as it is, because it is quoted rather than written
here:

- **The advisory paragraph** says "organization's", and "people and
  organizational development staff". It is quoted verbatim in 390 files, and the
  whole block is skipped rather than the line — only two of its four lines carry
  a phrase worth matching on, and it is the fourth that holds the spelling.
- **Third-party titles**, whether written as a link, in bold, or in running
  prose: a Coursera *Specialization*, Google's *Dataplex Universal Catalog*, the
  *Business Architecture Center of Excellence*, the *SBI (Situation-Behavior-Impact)*
  model. The working rule is that a capitalised word in the middle of a sentence
  is a name, and a name's spelling is not ours to correct.
- **Words the notes quote on purpose**, like "recognized" in this file.

Three words are deliberately out of scope, because each needs a person:
*program* (correct for computer programs, and the framework uses it that way),
*practice* and *practise* (the noun and the verb differ), and *licence* and
*license* (same, and the file is `LICENSE.md`).

## The advisory is not optional

Every derived document says it is AI-assisted, work in progress, for educational
purposes, and that the reader should talk to their organisation's HR, people
development or legal colleagues before relying on it. In assessments this is the
`## Advisory` section and `bin/check` enforces it.

This is not boilerplate to be trimmed. The material is unvalidated, and people
make career decisions on this kind of page.

## Never invent

- A course, article, video, or book named in an upskilling document must exist,
  and the link must resolve when you write it.
- A skill attributed to a role level must be in that level's summary.
- If you cannot find ten good blog posts, list eight. Padding a list with
  invented entries is worse than a short list.
