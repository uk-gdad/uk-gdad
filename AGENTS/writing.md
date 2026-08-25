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

Two exceptions, left as they are because they are quoted or inherited:

- The advisory paragraph says "organization's". It is quoted verbatim across all
  205 assessment files; changing it means changing all of them at once.
- CPD checklist general sections use en-US in places, inherited from
  `spec/template.md`. Fix the template, and every file follows.

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
