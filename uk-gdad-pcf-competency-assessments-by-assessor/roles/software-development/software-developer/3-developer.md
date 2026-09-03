# Software developer (Developer) - Competency Assessment

## Introduction

This assessment is for an assessor — a line manager, a technical panel member,
or a reviewer — judging whether a candidate or employee has the baseline
abilities the UK GDAD Profession Capability Framework expects of a **Developer**,
within the **Software developer** role. It measures demonstrated skill against
the framework's own description of this role level, for a hiring decision, a
promotion board, onboarding into a new team, or a periodic capability check.

Use it alongside whatever other evidence your process already gathers. It is
one input among several, never the whole of a decision — see `## Advisory`
below for why.

## Advisory

This competency assessment is created by AI and is a work in progress for
educational purposes. It is not a validated assessment instrument — it has
not been piloted, normed or checked for adverse impact — and a rating on this
form must never be the sole basis for a hiring, promotion, pay, performance or
disciplinary decision. Before using it, consult your organisation's human
resources, people development, occupational psychology or legal compliance
colleagues.

## How to use this assessment

**Preparing.** Read `## About this role level` before you score anything, so
the rest of the matrix makes sense against the actual duties and
accountabilities of a Developer. Gather whatever evidence exists ahead of the
session: a CV or portfolio, code the person has written or reviewed, a
structured interview, a work sample or take-home exercise, direct observation,
or references.

**Score on evidence, not impression.** Every rating must trace back to
something the person did, said, produced, or was observed doing — a piece of
code, an answer to a specific question, a description of an incident they
handled. If you cannot point to evidence for a rating, record it as unknown
rather than guess at a number that feels about right.

**Be consistent.** Score every candidate for this role level the same way,
against the same evidence types wherever possible. Where the decision matters —
a hiring or promotion decision especially — have more than one assessor score
independently before comparing notes and reconciling any difference.

**Stay fair.** An unvalidated, AI-drafted instrument like this one, used
inconsistently between candidates, can produce unlawful adverse impact even
when no assessor intends it. Score only demonstrated, job-related behaviour;
never let a rating be shaped by anything else. See
[Fair and lawful use](#fair-and-lawful-use) in this project's specification
for the constraints that follow from that, and keep your notes in the
evidence log to what a person actually did or produced.

## Rating scale

Every skill in the competency matrix is rated on the same five-point scale:

| Value | Rating | Meaning |
| ---: | --- | --- |
| 0 | None | No demonstrated experience of this skill |
| 1 | Beginner | Just starting to learn the skill; requires close supervision |
| 2 | Intermediate | Knows the basics and can perform tasks with some guidance |
| 3 | Advanced | Has a strong grasp of the skill and can work independently |
| 4 | Expert | Demonstrates full mastery and can teach or guide others in the skill |

This is a **proficiency** scale, not a frequency scale: it rates how well the
person does the thing, on the evidence available, not how often they happen to
do it.

**Worked example**, using Systems design: a person rated 1 — Beginner can
follow an existing detailed design and implement it, but cannot yet turn a
logical design into a physical one without close guidance, and their
documentation of the work is thin or inconsistent. A person rated 2 —
Intermediate can produce a detailed design for a well-understood piece of
system with some review from a colleague, choosing a reasonable pattern from
ones they already know, and documents it to a usable standard. A person rated
3 — Advanced translates logical designs into physical designs independently,
documents the work fully using the team's required standards and tools —
including prototyping tools where appropriate — and can judge for themselves
when a design's risk or complexity needs another pair of eyes.

## About this role level

**The role.** A software developer designs, runs and improves software that
meets user needs. In this role, a software developer is responsible for
writing clean, secure code following a test-driven approach, and creates code
that is open by default and easy for others to reuse.

**This level.** A Developer delivers software components that form part of a
product. At this role level, a Developer will:

- develop software to meet user needs
- follow best practice guidelines and help to improve those guidelines
- write clean, secure and well-tested code
- coach and mentor more junior colleagues
- operate the services they build and identify issues in production

**Where this sits in the ladder.** The Software developer role has nine
published levels, in order:

1. Apprentice developer
2. Junior developer
3. **Developer** — this level
4. Senior developer
5. Senior developer (management)
6. Lead developer
7. Lead developer (management)
8. Principal developer
9. Principal developer (management)

A Developer is the third rung: past the closely-supervised apprentice and
junior stages, delivering components independently, coaching those still
learning, and — new at this level — carrying responsibility for what happens
to their code once it is running in production. It sits below the wider
technical and process-improvement scope expected of a Senior developer.

**The skills this level names**, in the framework's order:

- Availability and capacity management
- Development process optimisation
- Information security
- Modern development standards
- Programming and build (software engineering)
- Prototyping
- Service support
- Systems design
- Systems integration
- User focus

## Competency matrix

### Skill: Availability and capacity management

**What the framework expects at this level**

A Developer manages service components to ensure they meet business needs and
key performance indicators (KPIs).

**Baseline for this role level**

Baseline: 2 — Intermediate. A Developer is accountable for operating the
services they build and identifying issues in production, which requires
knowing how the components they own are meant to perform and noticing when
they are not — but the framework does not yet ask them to set or negotiate the
KPIs themselves, which is a wider service-ownership responsibility that grows
at the levels above.

**Behavioural indicators**

- 0 — None: Cannot say what "normal" looks like for a service component they
  work on — no sense of its expected response time, error rate, or capacity
  limits.
- 1 — Beginner: Can read a dashboard or alert for a component they own when
  pointed at it, but needs a colleague to explain what the numbers mean and
  whether they are a problem.
- 2 — Intermediate: Monitors the components they are responsible for against
  agreed KPIs day to day, and raises a concern — such as rising latency or a
  capacity limit approaching — before it becomes an incident.
- 3 — Advanced: Investigates and resolves an availability or capacity issue in
  a component they own without supervision, and adjusts the component's
  configuration or code to bring it back within its KPIs.
- 4 — Expert: Sets sensible KPIs for a new component from first principles,
  and coaches other developers on how to design for availability and capacity
  rather than only reacting to breaches.

**Evidence to gather**

- Ask the person to walk through a dashboard or monitoring tool for a service
  component they have owned, and explain what each metric means and what
  "healthy" looks like.
- A structured interview question: describe a time a service component you
  were responsible for came close to, or breached, a capacity or availability
  target, and what you did.
- Review a runbook, alert configuration, or capacity plan they authored or
  updated.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Development process optimisation

**What the framework expects at this level**

A Developer explains the importance of developing process efficiency and the
common ways in which processes are optimised, supports specific activities to
improve development processes, and identifies obvious deficiencies.

**Baseline for this role level**

Baseline: 1 — Beginner. The framework's own wording at this level is about
explaining, supporting and spotting the obvious — not leading or designing
process change, which is a heavier accountability that belongs to more senior
levels. An assessor should expect a Developer to notice and articulate a
problem, and pitch in on a fix someone else is driving, rather than to run
process improvement themselves.

**Behavioural indicators**

- 0 — None: Follows the team's process as given, with no view on whether it
  works well or badly.
- 1 — Beginner: Can describe, when asked, why the team's process includes a
  particular step (such as code review or a deployment gate), even if they
  have not suggested a change to it.
- 2 — Intermediate: Notices an obvious inefficiency in the development
  process — a slow build, a manual step that keeps causing mistakes — and
  raises it with the team, sometimes helping to try a fix.
- 3 — Advanced: Proposes and helps implement a specific process improvement,
  such as a change to the branching strategy or the review checklist, and
  checks afterwards whether it actually helped.
- 4 — Expert: Diagnoses process problems that are not obvious from a single
  symptom, and designs and leads a change to the team's development process
  that other developers adopt.

**Evidence to gather**

- A structured interview question: tell me about a time you noticed something
  slow or error-prone in how your team builds, tests, or ships software, and
  what you did about it.
- Ask them to describe the current development process on a team they have
  worked on, and identify one thing they think works well and one that does
  not.
- Review a retrospective note, pull request, or ticket where they raised or
  contributed to a process change.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Information security

**What the framework expects at this level**

A Developer designs solutions and services with security controls included,
specifically engineered to mitigate security threats.

**Baseline for this role level**

Baseline: 2 — Intermediate. Writing "clean, secure and well-tested code" is
one of the accountabilities named for this exact level, so a Developer should
be past treating security as an afterthought — but designing controls against
a specifically identified threat model, rather than applying general good
practice, is where independence typically strengthens at the next level up.

**Behavioural indicators**

- 0 — None: Writes code without considering common security risks, and cannot
  name a security control relevant to the work they do.
- 1 — Beginner: Applies a security control when told to (such as validating
  input, or using a provided authentication library), but would not think to
  add one unprompted.
- 2 — Intermediate: Routinely applies well-known secure coding practices
  relevant to the work — input validation, parameterised queries, not logging
  secrets — without being told, and can explain the threat each one mitigates.
- 3 — Advanced: Given a new feature, identifies the security threats it
  introduces and designs controls to mitigate them before writing the code,
  independently.
- 4 — Expert: Reviews other developers' designs for security gaps they missed,
  and improves the team's shared practice — a checklist, a library, a
  standard — so the same class of threat is mitigated automatically in future.

**Evidence to gather**

- A work sample or take-home exercise that includes at least one deliberate
  security weakness, and ask the person to find and fix it.
- A structured interview question: describe a security control you added to a
  piece of work, and what threat it was protecting against.
- Review a pull request they authored for how it handles input, secrets, or
  access control, or ask them to review a snippet with a planted flaw and talk
  through what they find.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Modern development standards

**What the framework expects at this level**

A Developer applies modern development standards and supports others in
applying them.

**Baseline for this role level**

Baseline: 2 — Intermediate. This level explicitly pairs "apply" with "support
others in applying" — a Developer is expected not only to follow the team's
standards but to help a more junior colleague follow them too, which is
consistent with the level's coaching accountability, though not yet the
standard-setting expected further up the ladder.

**Behavioural indicators**

- 0 — None: Unaware of the team's development standards, or does not follow
  them without being corrected.
- 1 — Beginner: Follows the team's standards when reminded — a linter flags
  it, or a reviewer points it out — but does not apply them unprompted.
- 2 — Intermediate: Applies the team's development standards consistently in
  their own work without needing reminders.
- 3 — Advanced: Applies the standards consistently and helps a more junior
  colleague understand and apply them too — in review comments, in pairing, or
  by walking someone through why a standard exists.
- 4 — Expert: Identifies where the team's standards are out of date against
  current good practice, and leads updating them.

**Evidence to gather**

- Review pull requests they have authored for consistent adherence to the
  team's documented coding standards.
- Review review comments they have left on a junior colleague's pull request,
  looking for explanation as well as correction.
- A structured interview question: tell me about a time you helped someone
  else on your team follow a coding standard or convention they were new to.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Programming and build (software engineering)

**What the framework expects at this level**

A Developer collaborates with others when necessary to review specifications,
and uses the agreed specifications to design, code, test and document programs
or scripts of medium-to-high complexity, using the right standards and tools.

**Baseline for this role level**

Baseline: 3 — Advanced. This is the skill the level's own title names most
directly — a Developer "delivers software components that form part of a
product" — and the framework's wording ("medium-to-high complexity", "the
right standards and tools") describes someone who works independently on
substantial pieces of work, which is the definition of Advanced on this scale.

**Behavioural indicators**

- 0 — None: Cannot take a specification and turn it into working, tested code
  without step-by-step direction.
- 1 — Beginner: Implements a specification for a simple, well-bounded piece of
  work with close supervision, and needs help choosing the right approach.
- 2 — Intermediate: Implements a specification for a moderately complex
  component with some guidance, and writes tests and documentation to a basic
  but adequate standard.
- 3 — Advanced: Independently designs, codes, tests and documents a component
  of medium-to-high complexity from an agreed specification, choosing
  appropriate standards and tools, and raises sensible questions when the
  specification itself is unclear or incomplete.
- 4 — Expert: Takes on the most complex components in the team's backlog,
  sets the technical approach others follow, and reviews and improves other
  developers' designs, code, tests and documentation.

**Evidence to gather**

- A work sample or take-home coding exercise of realistic, medium complexity,
  assessed for design, correctness, test coverage and documentation.
- A code review sample: give them an unfamiliar piece of code and ask them to
  review it as if for a pull request.
- A structured interview question: walk me through a component you designed
  and built end to end, including a decision you had to make that the
  specification did not cover.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Prototyping

**What the framework expects at this level**

A Developer approaches prototyping as a team activity, actively soliciting
prototypes and testing with others; establishes design patterns and iterates
them; and uses a variety of prototyping methods, choosing the most
appropriate.

**Baseline for this role level**

Baseline: 2 — Intermediate. The framework describes a Developer as an active
participant who solicits and tests prototypes with the team and chooses
between methods they already know, rather than someone who originates a
team's whole prototyping approach — that broader ownership sits with more
senior levels.

**Behavioural indicators**

- 0 — None: Does not prototype before building — goes straight to a finished
  implementation even where a rough version first would have surfaced
  problems earlier.
- 1 — Beginner: Builds a prototype when asked to, using whichever method a
  colleague suggests, without testing it with anyone else.
- 2 — Intermediate: Chooses a reasonable prototyping method for a given
  problem from ones they know, builds it, and actively gets feedback from
  colleagues or users before committing to a full implementation.
- 3 — Advanced: Establishes a design pattern from a prototype and iterates it
  across more than one round of feedback, adjusting the approach as new
  information comes in.
- 4 — Expert: Introduces a prototyping method new to the team where it suits
  the problem better than the ones already in use, and coaches others in using
  it well.

**Evidence to gather**

- A structured interview question: describe a prototype you built to answer a
  specific question, who you tested it with, and what you changed as a
  result.
- Review an early throwaway version of a feature they built, alongside the
  final implementation, and ask what changed and why.
- Ask them to sketch, in an interview, two different ways they might prototype
  a given feature and explain which they would pick and why.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Service support

**What the framework expects at this level**

A Developer helps fix service faults following agreed procedures, and carries
out maintenance tasks on service support infrastructure.

**Baseline for this role level**

Baseline: 2 — Intermediate. This pairs with the level's own accountability to
"operate the services you build and identify issues in production" — a
Developer is expected to competently follow the team's agreed fault-fixing and
maintenance procedures, but the framework's wording ("following agreed
procedures") stops short of asking them to write those procedures themselves.

**Behavioural indicators**

- 0 — None: Has not been involved in fixing a live service fault or carrying
  out maintenance on service infrastructure.
- 1 — Beginner: Can carry out a documented maintenance task or fault-fixing
  step when talked through it, but would not know where to start unsupervised.
- 2 — Intermediate: Follows the team's agreed procedures to help fix a service
  fault or carry out routine maintenance, without needing step-by-step
  supervision.
- 3 — Advanced: Takes a lead role in fixing a live fault within the team's
  agreed procedures — coordinating the immediate fix, communicating status,
  and identifying the root cause — and carries out more complex maintenance
  tasks independently.
- 4 — Expert: Identifies gaps or weaknesses in the team's fault-fixing or
  maintenance procedures from direct experience, and improves them for future
  use.

**Evidence to gather**

- A structured interview question: describe a production fault you helped
  fix, what the agreed procedure was, and what your part in it was.
- Review an incident write-up, runbook update, or maintenance log entry they
  authored.
- Ask a referee about a specific incident the person was involved in resolving
  or supporting.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Systems design

**What the framework expects at this level**

A Developer translates logical designs into physical designs, produces
detailed designs, and effectively documents all work using required
standards, methods and tools, including prototyping tools where appropriate.
They design systems characterised by managed levels of risk, manageable
business and technical complexity, and meaningful impact, working with well
understood technology and identifying appropriate patterns.

**Baseline for this role level**

Baseline: 2 — Intermediate. The framework is explicit that the complexity and
risk this level designs for is "managed" and "manageable", and the technology
is "well understood" — real, independent design work, but bounded, which
distinguishes it from the less-constrained design scope at levels above.

**Behavioural indicators**

- 0 — None: Cannot turn a logical design into a physical one, or produces
  designs without documentation that anyone else could follow.
- 1 — Beginner: Produces a physical design for a simple, well-bounded piece of
  work with close review, and documents it inconsistently.
- 2 — Intermediate: Independently translates a logical design into a physical
  one for a component of manageable complexity, choosing a familiar,
  appropriate pattern, and documents the work to the team's required
  standard.
- 3 — Advanced: Produces detailed designs for components with meaningful
  business or technical complexity, using prototyping tools where they help,
  and identifies risk in a design before it becomes a problem.
- 4 — Expert: Designs systems that go beyond well understood technology,
  identifying or adapting patterns for genuinely novel problems, and sets the
  design documentation standard other developers follow.

**Evidence to gather**

- A design exercise: give them a logical design or a set of requirements and
  ask them to produce and document a physical design for it.
- Review a design document or architecture decision record they have
  authored.
- A structured interview question: talk me through a design you produced,
  including a pattern you chose and why it fitted the problem.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Systems integration

**What the framework expects at this level**

A Developer builds and tests simple interfaces between systems, and works on
more complex integration as part of a wider team.

**Baseline for this role level**

Baseline: 2 — Intermediate. The framework's own split — independent for simple
interfaces, team-supported for complex integration — describes someone
competent but not yet expected to lead integration work alone, which matches
this level's place below the wider technical scope of a senior developer.

**Behavioural indicators**

- 0 — None: Has not built or tested an interface between two systems.
- 1 — Beginner: Can implement a simple, well-specified interface between two
  systems with guidance, but needs help testing it thoroughly.
- 2 — Intermediate: Independently builds and tests a simple interface between
  systems, and contributes usefully to a more complex integration effort as
  part of a wider team.
- 3 — Advanced: Takes a substantial share of the design and delivery of a
  complex, multi-system integration, coordinating with the rest of the team on
  interface contracts and testing.
- 4 — Expert: Leads the integration approach for a complex, multi-system
  piece of work, and resolves integration problems that cut across teams'
  boundaries.

**Evidence to gather**

- A work sample: ask them to design and build a small interface between two
  systems, including how they would test it.
- A structured interview question: describe the most complex system
  integration you have worked on, your specific part in it, and a problem
  that came up at the boundary between systems.
- Review an interface contract, API specification, or integration test suite
  they authored or contributed to.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: User focus

**What the framework expects at this level**

A Developer collaborates with user researchers and can represent users
internally; explains the difference between user needs and the desires of the
user; champions user research to focus on all users; prioritises and defines
approaches to understand the user story, guiding others in doing so; and
offers recommendations on the best tools and methods to use.

**Baseline for this role level**

Baseline: 2 — Intermediate. "Guiding others" and "champions" in the framework's
own wording point toward more than passive participation, but this level is
not yet the one that sets a team's or product's overall research strategy —
that reads as a heavier, more senior accountability than the wording here
supports.

**Behavioural indicators**

- 0 — None: Builds features without reference to user needs, or cannot
  explain who the software is for.
- 1 — Beginner: Can repeat a user need described by someone else, but does
  not distinguish it from what a user says they want, and does not raise user
  impact unprompted.
- 2 — Intermediate: Collaborates with user researchers, represents users'
  needs accurately when discussing a piece of work internally, and can explain
  the difference between a stated desire and an underlying need.
- 3 — Advanced: Actively champions user research reaching all relevant users
  — not just the most vocal or accessible ones — and guides a more junior
  colleague in how to understand and use a user story.
- 4 — Expert: Recommends and justifies the choice of research tools and
  methods for a piece of work, and shapes how the wider team prioritises user
  needs against other pressures.

**Evidence to gather**

- A structured interview question: describe a time a stated user request
  turned out to differ from the underlying user need, and how you found that
  out.
- Ask them to describe how they would go about understanding the needs of
  users for a feature they have not built before, and what methods they would
  choose.
- Review a piece of work where they collaborated with a user researcher, or
  ask a referee about how they represented users in a team discussion.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

## Overall determination

| Skill | Baseline target | Rating given | Met baseline? |
| --- | --- | --- | --- |
| Availability and capacity management | 2 — Intermediate | | |
| Development process optimisation | 1 — Beginner | | |
| Information security | 2 — Intermediate | | |
| Modern development standards | 2 — Intermediate | | |
| Programming and build (software engineering) | 3 — Advanced | | |
| Prototyping | 2 — Intermediate | | |
| Service support | 2 — Intermediate | | |
| Systems design | 2 — Intermediate | | |
| Systems integration | 2 — Intermediate | | |
| User focus | 2 — Intermediate | | |

The baseline for this role level is normally met when every skill is rated at
or above its baseline target. One or two skills below target is not
automatically a fail: weigh how central that skill is to the level's
accountabilities — Programming and build sits at the heart of what a Developer
delivers, for example, so a shortfall there carries more weight than one in
Development process optimisation — consider whether the gap looks quickly
coachable once the person is in post, and record your reasoning in the
evidence log below, not just the numbers in this table.

- [ ] Meets baseline for this role level
- [ ] Does not yet meet baseline
- [ ] Meets baseline, with development areas noted below

This determination is an input to your organisation's own recruitment,
promotion or development process, never the decision itself. Combine it with
whatever else your process requires before acting on it.

## Assessor notes and evidence log

**Candidate or employee name:**

**Assessor name:**

**Date:**

**Evidence sources used** (tick all that apply):

- [ ] CV or portfolio
- [ ] Structured interview
- [ ] Work sample or task
- [ ] References
- [ ] Direct observation
- [ ] Other (describe below)

**Overall notes:**

**Follow-up actions:**

For any hiring or promotion decision, a second assessor or a panel calibration
session is strongly recommended before this determination is acted on. Two
assessors scoring the same evidence independently, then reconciling any
difference, is one of the more effective ways to catch an inconsistent or
unfair rating before it affects someone.

## Conclusion

This assessment gives you a structured, evidence-based view of how a
candidate or employee's demonstrated skills compare against what the UK GDAD
framework expects of a Developer. What you do with that view is your
organisation's own process to run: a hiring panel weighs it against other
candidates' evidence and the role's requirements; a line manager uses it to
shape a development conversation; an onboarding review uses it to plan support
for someone's first months.

Where you have noted development areas — a skill rated below its baseline, or
one you could not gather enough evidence for — two documents in this
repository can help build a plan from here: the
[continuing professional development checklist](../../../../uk-gdad-pcf-continuing-professional-development-checklists/roles/software-development/software-developer/3-developer.md)
turns each of this level's skills into concrete things to do, and the
[upskilling resources](../../../../uk-gdad-pcf-upskilling-resources/roles/software-development/software-developer/3-developer.md)
document lists courses, articles, videos and books to work through.

Whatever the result, treat this as one input among several, not a verdict.
You are assessing someone doing a job that matters, in a process that matters
to them — take the same care with this document that you would want taken over
your own record.
