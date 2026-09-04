# Solution Architect (Associate Solution Architect) - Psychometric Assessments

## Introduction

This document is written for you: an assessor evaluating a candidate for associate solution architect within the UK Government Digital and Data profession, whether for recruitment or for a promotion decision. It gives you a structured, job-specific psychometric assessment to administer, built around the accountabilities and skills of this exact role level.

Psychometric assessments are structured exercises that measure the mental skills and judgement a candidate brings to the work. They are used across the UK public sector, both in recruitment and in professional development, because - administered consistently - they give a fairer, more consistent picture of how someone thinks than an interview or a CV alone can. For an associate solution architect, this material matters because the role sits at the meeting point of technology, people, and organisational goals. A candidate in this role helps frame problems, supports the design of solutions, communicates with technical and non-technical stakeholders, and learns how decisions are made and governed. All of that depends on clear reasoning, careful reading, comfort with numbers, and sound judgement in tricky situations - the four things this assessment tests.

This document is organised into four main assessment sections, each matched to the role and level:

1. **Workplace job-specific cognitive assessment** (allow roughly 15-30 minutes) - tests pattern recognition, logical deduction, error checking, and prioritisation using the kinds of artefacts an associate solution architect handles, such as architecture diagrams, design documents, and technology roadmaps.
2. **Workplace job-specific numeric reasoning assessment** (allow a similarly timed session, with strict pacing per item) - tests working with budgets, capacity figures, licensing costs, and performance metrics that appear in real solution design work.
3. **Workplace job-specific verbal reasoning assessment** (allow roughly a minute per question) - tests reading dense material carefully, such as government standards, governance policies, and stakeholder emails, and drawing only the conclusions the text supports.
4. **Workplace job-specific situational judgement assessment** (untimed or generously timed - judgement, not speed, is what is measured) - tests choosing effective actions in realistic workplace dilemmas involving supervisors, stakeholders, and multidisciplinary teams.

Each section explains what the assessment measures, maps it to the specific skills in the role profile, gives a generous set of items with full worked answers and explanations, and finishes with guidance on what to encourage and what to watch for while a candidate works through it.

Administer this fairly and consistently. Use the same items and the same time limit for every candidate you assess against this role level - do not tailor the questions, drop items, or vary the time given between candidates, or comparisons between them stop being meaningful. Keep the worked answers and explanations back as your answer key: they are for scoring, not for the candidate to see beforehand or during the assessment. Once you have scored a candidate's responses, debrief them - walk through where their reasoning matched the worked answer and where it diverged, so the exercise is useful to them regardless of outcome. Finally, treat the result as one input among several in a hiring or promotion decision, never the sole basis for one: combine it with the interview, any work sample, and the candidate's evidence against the role profile, and see the advisory below before you rely on it at all.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment is a targeted psychometric test that measures the exact mental processes needed for this role, rather than abstract intelligence. Instead of puzzles about shapes or dictionary words, it uses practical scenarios and data drawn from the everyday work of an associate solution architect: architecture diagrams, design documents, standards checklists, technology roadmaps, and stakeholder requirements. The aim is simple - to predict how well a candidate can spot patterns, follow logical chains, catch errors, prioritise tasks, and solve problems in the situations they will actually face at work.

Deliver this online or on paper, timed, over 15 to 30 minutes. The items below are multiple-choice, and a candidate's results are best read against a benchmark group of similar candidates rather than judged in isolation. If your platform or process supports it, offer a short set of ungraded practice questions first so the candidate can get used to the format, and consider recording both accuracy and time taken rather than a single raw score - a candidate who works carefully but a little slower may still be a stronger hire than one who rushes and errs.

Because this is associate level, the items below focus on well-understood technology, managed levels of complexity, and situations where the candidate works with the support of more experienced architects. Do not expect a candidate at this level to make enterprise-wide strategic calls; look instead for clear reasoning, attention to detail, and the instinct to support a team well. That is what this section is built to reveal.

### What it measures for the role

Each cognitive dimension maps directly onto skills named in the role profile:

- **Pattern recognition** supports the skill of **Technical design throughout the life cycle**, where the role profile expects the candidate to "work with well-understood technology and identify appropriate patterns". Spotting that a new problem resembles a known integration pattern, or that three services share the same failure mode, is core architecture thinking.
- **Logical deduction** supports **Making architectural decisions**, where the role profile expects the candidate to "describe the reasoning behind architectural design decisions" and "gather information to inform decisions". If A depends on B, and B is being decommissioned, what follows for A? Architects reason like this constantly.
- **Error checking** supports **Architecture communication** and compliance with standards and governance. This role reviews design documents, diagrams, and decision records, and needs to notice when a document contradicts itself or a diagram does not match its description.
- **Prioritisation** supports **Problem definition and shaping**, where the role profile expects the candidate to "help to frame a problem characterised by managed levels of complexity, complication, or risk". Deciding which constraint matters most, or which task to do first under supervision, is a daily judgement this section probes.
- **Problem solving** supports **Architect for the whole context**, where the role profile expects the candidate to "identify relevant information that can inform your architectural work, such as strategies, roadmaps, policies and technical trends", and combine those inputs into sensible options.

The items below use artefacts an associate solution architect genuinely handles: solution options papers, environment diagrams, decision logs, technology roadmaps, and governance checklists, all set in a UK government digital context.

### Practice questions

**Question 1 (easy) - Pattern recognition in environments**

A team manages four environments for a citizen-facing licensing service. The deployment sequence so far has been: Development, then Test, then Staging, then Production. A release note says version 2.4 has passed Development and Test. According to the established pattern, which environment should version 2.4 be deployed to next?

- A) Production
- B) Staging
- C) Development
- D) Test

**Correct answer: B) Staging.**

**Explanation:** The sequence follows a fixed progression: Development, Test, Staging, Production. Version 2.4 has completed the first two stages, so the next stage in the pattern is Staging. Option A skips a stage, which would break the governance pattern the team complies with. Options C and D are stages already completed. In real work, recognising and respecting release patterns is part of complying with standards and governance - deployments that skip Staging are a classic source of production incidents, and a candidate who spots a skipped stage is demonstrating real value to a team.

**Question 2 (easy) - Logical deduction from constraints**

A senior architect tells the candidate: "All services that store citizen personal data must complete a Data Protection Impact Assessment (DPIA) before go-live. The appointment-booking service stores citizen personal data." Which conclusion must be true?

- A) The appointment-booking service has already completed a DPIA
- B) The appointment-booking service must complete a DPIA before go-live
- C) The appointment-booking service cannot go live
- D) All services must complete a DPIA before go-live

**Correct answer: B.**

**Explanation:** This is a straightforward logical syllogism. The rule applies to all services storing citizen personal data; the appointment-booking service is one of those; therefore the rule applies to it. Option A confuses "must complete" with "has completed" - we know the obligation exists, not whether it has been met. Option C goes too far: the service can go live once the DPIA is done. Option D overgeneralises: the rule stated applies only to services storing citizen personal data, not to all services. Careful deduction like this underpins the role's skill in describing the reasoning behind architectural decisions - a strong answer keeps the obligation and its fulfilment clearly separate, rather than collapsing them into one.

**Question 3 (moderate) - Error checking a design document**

The candidate is proofreading a solution design document before it goes to the architecture review board. The document states:

1. "Section 2: The solution will use the department's approved cloud platform and managed PostgreSQL database service."
2. "Section 4: All data will be stored in the on-premises Oracle database to minimise change."
3. "Section 5: Database backups will use the cloud platform's automated snapshot feature."

Which pair of statements is inconsistent?

- A) Sections 2 and 4
- B) Sections 2 and 5
- C) Sections 4 and 5
- D) Both A and C

**Correct answer: D) Both A and C.**

**Explanation:** Section 2 says data lives in a cloud-managed PostgreSQL database, while Section 4 says all data lives in an on-premises Oracle database - a direct contradiction (pair A). Section 5 then relies on cloud snapshot features, which contradicts Section 4's on-premises claim (pair C). Sections 2 and 5 are consistent with each other, so pair B is fine. Catching contradictions before a governance review saves a team embarrassment and rework, and it is exactly the kind of supporting contribution expected of an associate: a candidate who catches this is helping their team achieve its objectives by making documents watertight before they reach assurance gates.

**Question 4 (moderate) - Prioritisation under supervision**

It is Monday morning. The candidate's supervising solution architect is in workshops all day. They have four tasks:

1. Finish the diagram for Thursday's architecture review board submission (deadline: Wednesday noon for the pack)
2. Respond to a developer's question blocking their work today on which messaging pattern to use
3. Read a new technology trends briefing circulated for general awareness
4. Book a room for next month's community of practice session

What is the most sensible order to tackle them?

- A) 1, 2, 3, 4
- B) 2, 1, 4, 3
- C) 3, 2, 1, 4
- D) 2, 4, 1, 3

**Correct answer: B) 2, 1, 4, 3.**

**Explanation:** The developer's question is blocking someone's work right now, so unblocking them first has the greatest immediate impact on the team - and if the question is beyond the candidate's confidence level, the right first move is still to engage with it, even if that means gathering the details to escalate. The review board diagram has a hard deadline of Wednesday, so it comes next with plenty of margin. Booking a room is quick and time-sensitive only loosely, so it beats the trends briefing, which is important for staying up to date on technology trends but has no deadline. Option A delays an actively blocked colleague; option C puts general reading before urgent work; option D leaves the deadline-bound diagram too late relative to a trivial admin task. Prioritisation questions reward thinking about impact and deadlines together - watch for whether the candidate's reasoning does this, not just whether they land on B.

**Question 5 (moderate) - Pattern recognition in incident data**

The candidate reviews a log of incidents affecting three services over four weeks:

- Week 1: Service A timeout, Service B normal, Service C timeout
- Week 2: Service A normal, Service B normal, Service C timeout
- Week 3: Service A timeout, Service B normal, Service C timeout
- Week 4: Service A normal, Service B normal, Service C timeout

Services A and C both call the same legacy address-lookup API; Service B does not. Which statement best fits the pattern?

- A) Service B is the root cause of the timeouts
- B) Service C has an issue every week, and Service A intermittently; the shared legacy API is a plausible common factor worth investigating
- C) The legacy API is definitely the root cause
- D) The timeouts are random and show no pattern

**Correct answer: B.**

**Explanation:** The data shows Service C failing all four weeks and Service A failing alternate weeks, while Service B - the only service not using the legacy API - never fails. That correlation makes the shared API a plausible common factor, which is precisely how an architect frames a hypothesis. Option C overstates the evidence: correlation is a lead, not proof, and saying "definitely" skips the investigation step. Option A contradicts the data - Service B never failed. Option D ignores the clear regularity. Notice the careful wording of B: "plausible" and "worth investigating". Gathering information to inform decisions, rather than jumping to conclusions, is a named behaviour in the Making architectural decisions skill this role profile sets out - a strong candidate's answer will reflect that caution.

**Question 6 (moderate) - Logical deduction with roadmaps**

The department's technology roadmap states: "The legacy document store will be decommissioned in Q3 next year. Any solution going live after Q1 next year must not create new dependencies on the legacy document store." A team's new casework solution is scheduled to go live in Q2 next year, and one design option uses the legacy document store for file storage. What follows?

- A) The option is acceptable because the store still exists in Q2
- B) The option conflicts with the roadmap rule and needs to change or be justified as an exception
- C) The casework solution must be delayed until Q3
- D) The roadmap must be wrong

**Correct answer: B.**

**Explanation:** The rule covers any solution going live after Q1 next year; Q2 is after Q1; therefore the rule applies, and the design option that creates a new dependency on the legacy store conflicts with it. Option A confuses physical availability with policy compliance - the store existing does not make new dependencies permissible. Option C invents a remedy the rule does not require; the sensible response is to change the design or seek a formally governed exception. Option D is not a deduction at all. This is a classic example of the Architect for the whole context skill: roadmaps are exactly the "relevant information that can inform your architectural work", and spotting a conflict early is far cheaper than discovering it at a governance review.

**Question 7 (moderate) - Error checking a diagram against its description**

A context diagram shows: Citizen -> Web Frontend -> API Gateway -> Booking Service -> Payments Provider. The accompanying text says: "The citizen interacts with the web frontend, which calls the booking service directly. The booking service then calls the payments provider through the API gateway." How many discrepancies are there between the diagram and the text?

- A) None
- B) One
- C) Two
- D) Three

**Correct answer: C) Two.**

**Explanation:** Compare each hop. Discrepancy one: the diagram routes the frontend through the API gateway to the booking service, but the text says the frontend calls the booking service "directly". Discrepancy two: the diagram shows the booking service calling the payments provider directly, but the text says that call goes "through the API gateway". The citizen-to-frontend hop matches in both. Diagram-versus-text mismatches are among the most common defects in architecture documents, and they cause real confusion for delivery teams. The Architecture communication skill includes creating and using different architecture representations - and those representations must agree with each other, or stakeholders will trust neither.

**Question 8 (hard) - Multi-step problem solving**

A team must choose a file-scanning approach for citizen document uploads. Constraints gathered so far:

1. Security policy: all uploads must be virus-scanned before being stored in the case system.
2. Performance requirement: citizens must receive upload confirmation within 5 seconds.
3. The approved scanning service takes 8-20 seconds per file.
4. The case system rejects unscanned files.

Which design option satisfies all constraints?

- A) Scan the file synchronously, then confirm the upload once scanning completes
- B) Store the file directly in the case system and scan it afterwards
- C) Confirm receipt into a quarantine area within 5 seconds, scan asynchronously, then move the file into the case system only after a clean scan
- D) Ask the security team to waive the scanning requirement

**Correct answer: C.**

**Explanation:** Work through the constraints. Option A fails constraint 2: scanning takes 8-20 seconds, so synchronous confirmation cannot happen within 5 seconds. Option B fails constraints 1 and 4: the file would enter the case system unscanned, which policy forbids and the system rejects. Option D is not a design solution and abandons a legitimate security control. Option C separates "we have received your file" from "your file is accepted", using a quarantine-then-promote pattern: the citizen gets fast confirmation, scanning happens asynchronously, and only clean files reach the case system. This is a well-understood pattern for exactly this problem - identifying appropriate patterns for well-understood technology is a named behaviour at this level, and it is worth watching for in a candidate's answer. Notice how the right answer satisfies every constraint rather than trading one off silently.

**Question 9 (hard) - Deduction across multiple rules**

Three governance rules apply to a solution:

1. If a service handles payments, it must complete a security review.
2. If a service completes a security review, it must have a named technical owner.
3. Services without a named technical owner cannot be deployed to production.

A service handles payments and currently has no named technical owner. Which statement must be true?

- A) The service can be deployed to production once the security review is complete
- B) The service cannot currently be deployed to production, and it must both complete a security review and gain a named technical owner
- C) The security review is optional because there is no technical owner
- D) The service does not handle payments if it has no technical owner

**Correct answer: B.**

**Explanation:** Chain the rules. Rule 1: payments means a security review is required. Rule 3: no named technical owner means no production deployment - which applies right now. Rule 2 tells us the review itself requires a named owner, reinforcing that the owner must be appointed. So the service is currently blocked from production and needs both the review and the owner - exactly option B. Option A ignores the owner requirement. Option C reverses the logic of rule 2: the review requiring an owner does not make the review optional. Option D is a non sequitur. Multi-rule deduction like this mirrors real architectural governance, where several policies interact and the architect must state clearly what is required and why - the heart of describing the reasoning behind decisions.

**Question 10 (hard) - Prioritising risks**

The candidate's supervising architect asks them to list which of four identified risks should be raised first at the weekly risk review. The risks are:

1. A third-party API the solution depends on will retire its current version in 18 months
2. The solution's single database instance has no failover, and the service goes live to the public in 3 weeks
3. A junior developer prefers a different code formatting style to the team standard
4. The project wiki contains some out-of-date diagrams

Which risk should be raised first?

- A) Risk 1
- B) Risk 2
- C) Risk 3
- D) Risk 4

**Correct answer: B) Risk 2.**

**Explanation:** Prioritise by combining impact and urgency. Risk 2 combines high impact (a public service failing with no failover affects citizens directly) with high urgency (go-live in 3 weeks leaves little time to fix it). Risk 1 is genuinely important but has an 18-month horizon, so it is raised and tracked, not urgent. Risk 3 is a team-working preference, not an architectural risk - it belongs in a team retrospective, not a risk review. Risk 4 matters for communication quality but has low immediate impact. Managing risks "in a transparent way" is in this role's description: transparency means raising the right risks at the right forum with honest severity, not burying the serious one among trivia.

**Question 11 (moderate) - Spotting the odd one out**

A team catalogues integration approaches used across the department. Which of the following is NOT an integration pattern?

- A) Publish-subscribe messaging
- B) Request-response API call
- C) Batch file transfer
- D) Quarterly budget review

**Correct answer: D) Quarterly budget review.**

**Explanation:** Publish-subscribe, request-response, and batch file transfer are all recognised ways for systems to exchange data - classic integration patterns an associate solution architect will meet constantly when working with well-understood technology. A quarterly budget review is a financial governance activity, not a way systems communicate. This question looks simple, but classification skills matter: architects constantly sort information into categories (pattern versus principle, requirement versus constraint, risk versus issue), and muddled categories lead to muddled documents. An easy, confident answer here is a good sign that a candidate's mental filing system for architecture concepts is forming well.

**Question 12 (hard) - Working backwards from an outcome**

A design review found that a proposed solution fails the department's accessibility standard because a document-preview feature relies on a third-party viewer that does not support screen readers. The team has three weeks before the review board reconvenes. Which sequence of steps is the most logical way to resolve this?

- A) Remove the accessibility requirement from the solution scope
- B) Identify alternative viewers or native rendering approaches that meet the standard, assess them against the other constraints, recommend one with reasons, and update the design
- C) Keep the current viewer and add a note saying accessibility will be fixed later
- D) Escalate to the review board that the standard is too strict

**Correct answer: B.**

**Explanation:** The failure is specific (the viewer lacks screen reader support), so the logical response is to generate options that fix that specific failure, evaluate them against all constraints (not just accessibility), and document the reasoning - which maps directly onto the Problem definition and shaping skill named in the role profile: "help to create options for solving problems at an appropriate level of detail". Option A abandons a mandatory standard; accessibility is a legal requirement for UK public sector services, not an optional scope item. Option C defers a known compliance failure, which governance boards rightly reject. Option D challenges the standard rather than the design, without any evidence the standard is at fault. The disciplined move - options, assessment, recommendation, updated design - is the pattern a strong candidate follows.

**Question 13 (easy) - Sequence completion**

A supervising architect describes the standard lifecycle documents follow: Draft, then Peer review, then Architecture review, then Approved, then Published. A document has just completed Peer review. What is its next stage?

- A) Published
- B) Draft
- C) Architecture review
- D) Approved

**Correct answer: C) Architecture review.**

**Explanation:** The lifecycle is a fixed sequence, and the stage after Peer review is Architecture review. Options A and D skip stages, and option B moves backwards. Simple sequence questions like this check whether a candidate can hold a process in mind and apply it accurately - the same mental habit needed when complying with standards and governance. This is a good early indicator: a candidate who answers quickly and correctly here should have time in hand for the harder questions later in the section.

**Question 14 (moderate) - Combining information sources**

The candidate is helping shape options for replacing a paper-based grant application process. They have gathered: the departmental digital strategy (which mandates "digital by default" services), a policy requiring assisted-digital support for users who cannot use online services, and a technical trends briefing noting the department's growing use of its existing forms platform. Which option best reflects all three inputs?

- A) An online application built on the existing forms platform, with a telephone-assisted route for users who need support
- B) An online-only application built on a brand-new custom platform
- C) Keeping the paper process but scanning the forms into a document store
- D) A telephone-only service, since some users cannot get online

**Correct answer: A.**

**Explanation:** The skill being tested is synthesis: combining strategy, policy, and technical trend information into one coherent option - the essence of "identify relevant information that can inform your architectural work". Option A honours the digital-by-default strategy (online application), the assisted-digital policy (telephone-assisted route), and the technical trend (reuse of the existing forms platform). Option B ignores both the assisted-digital policy and the reuse trend, adding cost and excluding users. Option C is not digital by default - scanning paper digitises storage, not the service. Option D inverts the strategy entirely, serving the exception case as the only case. When several legitimate inputs all point somewhere, the strongest option is usually the one that needs no input to be quietly ignored.

### Preparation tips

- **A well-prepared candidate has practised with real artefacts.** Someone who has re-read design documents or decision logs and actively hunted for inconsistencies, in the way Question 3 and Question 7 require, tends to build error-checking instincts faster than someone who has only worked abstract puzzles. This is useful context if a candidate mentions their preparation during debrief.
- **Listen for verbalised deductions.** A candidate who talks through their reasoning - "the rule covers X; this is an X; therefore..." - is demonstrating exactly the skill of describing the reasoning behind decisions that this role level names. If your process allows a candidate to think aloud, encourage it.
- **Keep the timing consistent.** These items are designed to run to 15-30 minutes; give every candidate for this role level the same time allowance so accuracy under mild time pressure is measured fairly rather than being an artefact of how much time different candidates happened to get.
- **Expect candidates to bank easy marks first.** A candidate who answers quick questions decisively and flags harder multi-step ones to revisit is using their time well; this is a reasonable strategy to explain if a candidate asks how to approach the paper.
- **Set candidates up to do their best work.** A quiet room and, where your platform offers one, an ungraded warm-up set before the timed items reduce the chance that a poor result reflects nerves or unfamiliarity with the format rather than capability. Remember the benchmark for this assessment reflects associate level - do not compare an associate candidate's performance to what you would expect from a principal architect.

### Common pitfalls

- **Overreaching beyond the evidence.** As in Question 5, a candidate who answers "definitely the root cause" when the data only supports "plausible factor" is overreaching. These items deliberately include an overconfident option to distinguish candidates who reason carefully from those who do not.
- **Confusing obligation with completion.** "Must complete a DPIA" does not mean one has been completed. A candidate who reads modal verbs (must, may, should) carelessly will trip on this.
- **Skipping stages in patterns.** When a sequence or lifecycle is given, the correct answer respects every stage. Options that jump ahead are traps for a candidate reading too quickly.
- **Losing time on one hard question.** Speed and accuracy are best reported separately, but a candidate who struggles for ten minutes on one question starves every other question of time. If you are timing candidates live, a gentle prompt to move on and return can be appropriate, if your process allows it.
- **Answering from personal workplace experience instead of the question.** A candidate's own department's real release process may differ from the one described in the item. The correct answer uses only the rules the question gives - watch for candidates who import outside assumptions instead.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates how well a candidate analyses, interprets, and makes logical decisions using numerical data. It deliberately mimics the data-handling demands of the real role, focusing on practical business mathematics rather than abstract formulas. For an associate solution architect, that means the numbers architects genuinely meet: hosting and licensing costs, capacity and performance figures, user volumes, project budgets, and comparisons between solution options.

Maths confidence is not the point being tested. These items rarely go beyond percentages, ratios, averages, simple cost comparisons, and reading values accurately from tables and charts. Allow, or provide, an on-screen calculator, because the real skill being measured is interpretation - extracting the right numbers, applying the right operation, and sanity-checking the result - not mental arithmetic. What makes this section challenging is the time limit: apply strict pacing per item, so quick and accurate data extraction is part of what is measured, not just correctness.

Question inputs look like the tables in this section: cost comparisons between cloud options, monthly transaction volumes, performance dashboards, or licence pricing tiers. At associate level, the numbers a candidate handles in real work often support a senior architect's options paper - "which option is cheaper over three years?", "will this capacity handle peak demand?" - so the items below are built around exactly those situations. A candidate who is confident with this kind of arithmetic will be noticeably more useful in design discussions, because they can check claims on the spot rather than taking them on trust - that is what this section is designed to reveal.

### What it measures for the role

Numeric reasoning connects to the role profile in specific, practical ways:

- **Commercial perspective** requires the ability to "show an awareness of government commercial processes". Comparing supplier quotes, understanding total cost of ownership, and spotting when a discount changes a ranking are all numeric skills wrapped in commercial awareness.
- **Making architectural decisions** requires the ability to "gather information to inform decisions". Much of that information is numeric: latency figures, error rates, storage growth, cost per transaction. An option paper without numbers is opinion; with numbers it is evidence.
- **Problem definition and shaping** includes helping to "create options for solving problems at an appropriate level of detail". Costing options at the right level of precision - not spuriously exact, not hopelessly vague - is a numeric judgement.
- **Working within business and technical constraints** (from the role description) often means working within a budget or a capacity ceiling, both of which are numbers.
- **Technical design throughout the life cycle** involves designs with "managed levels of risk, impact, and complexity" - and sizing that risk and impact frequently involves volumes, percentages, and growth rates.

Every item below uses data an associate solution architect in a UK government department could plausibly meet this month.

### Practice questions

**Question 1 (easy) - Reading a cost table**

A team compares monthly hosting costs for a citizen appointments service across three options:

| Option | Compute | Storage | Support |
|---|---|---|---|
| Cloud A | £1,200 | £300 | £250 |
| Cloud B | £1,050 | £450 | £300 |
| On-premises | £900 | £500 | £600 |

Which option has the lowest total monthly cost?

- A) Cloud A
- B) Cloud B
- C) On-premises
- D) They are all equal

**Correct answer: A) Cloud A.**

**Explanation:** Add each row. Cloud A: 1,200 + 300 + 250 = £1,750. Cloud B: 1,050 + 450 + 300 = £1,800. On-premises: 900 + 500 + 600 = £2,000. Cloud A is cheapest at £1,750. The trap here is anchoring on a single column: On-premises has the cheapest compute (£900), and a rushed reader might pick it. Always total the whole row before comparing - partial costs mislead. This mirrors real options papers, where a headline figure often hides support or storage costs that change the ranking.

**Question 2 (easy) - Percentage increase**

A licensing service handled 40,000 applications last quarter. This quarter it handled 46,000. What is the percentage increase?

- A) 6%
- B) 13%
- C) 15%
- D) 17%

**Correct answer: C) 15%.**

**Explanation:** Percentage increase = (new - old) / old x 100. That is (46,000 - 40,000) / 40,000 x 100 = 6,000 / 40,000 x 100 = 15%. Option A confuses the absolute increase (6,000) with a percentage. Option B comes from dividing by the new figure (6,000 / 46,000 is about 13%) - a very common error; always divide by the original value. Growth figures like this feed directly into capacity planning: if applications grow 15% a quarter, an architect must ask whether the current design can absorb compound growth.

**Question 3 (moderate) - Ratios in team capacity**

A delivery team has 3 developers for every 1 tester. The programme is scaling the team to 24 developers while keeping the same ratio. How many testers will there be?

- A) 6
- B) 8
- C) 12
- D) 21

**Correct answer: B) 8.**

**Explanation:** The ratio of developers to testers is 3:1, so testers = developers / 3 = 24 / 3 = 8. Option A might come from misreading the ratio as 4:1. Option C halves the developers instead of dividing by three. Option D subtracts 3 rather than dividing. Ratio questions reward writing the relationship down before calculating. In practice, architects meet ratios constantly: requests per instance, records per batch, environments per service - and a design that assumes the wrong ratio fails at scale.

**Question 4 (moderate) - Three-year cost comparison**

Two options for a document-processing capability:

- Option X: £25,000 one-off implementation, then £2,000 per month running costs.
- Option Y: £5,000 one-off implementation, then £2,750 per month running costs.

Over a full three-year period, which option costs less, and by how much?

- A) Option X, by £7,000
- B) Option Y, by £7,000
- C) Option X, by £2,000
- D) Option Y, by £2,000

**Correct answer: A) Option X, by £7,000.**

**Explanation:** Three years is 36 months. Option X: 25,000 + (2,000 x 36) = 25,000 + 72,000 = £97,000. Option Y: 5,000 + (2,750 x 36) = 5,000 + 99,000 = £104,000. Option X is cheaper by 104,000 - 97,000 = £7,000. The commercial lesson: a lower up-front cost (Option Y) can be the more expensive choice once running costs compound - the essence of total cost of ownership, a core idea in government commercial awareness. Spending programmes are usually assessed over multiple years precisely to catch this.

**Question 5 (moderate) - Capacity headroom**

A booking API is provisioned to handle 500 requests per second. Current peak load is 320 requests per second, and the service team forecasts peak load will grow by 25% next year. Will next year's forecast peak fit within current capacity, and what is the forecast figure?

- A) Yes - forecast peak is 400 requests per second
- B) No - forecast peak is 525 requests per second
- C) Yes - forecast peak is 345 requests per second
- D) No - forecast peak is 640 requests per second

**Correct answer: A) Yes - forecast peak is 400 requests per second.**

**Explanation:** Growth of 25% on 320 = 320 x 1.25 = 400 requests per second, which is below the 500 capacity, leaving 100 requests per second of headroom (20% of capacity). Option C adds 25 requests rather than 25%. Option D doubles incorrectly (320 x 2 = 640). Option B mistakenly grows the capacity figure (500 x 1.05) or simply misapplies the numbers. Capacity questions are bread-and-butter for solution architects: the arithmetic is easy, but choosing the right base figure (current peak, not average, not capacity) is where care is needed.

**Question 6 (moderate) - Licence tier pricing**

A software supplier prices user licences in tiers:

| Tier | Users covered | Price per user per year |
|---|---|---|
| 1 | First 100 users | £120 |
| 2 | Next 200 users (101-300) | £90 |
| 3 | Users above 300 | £60 |

A service needs licences for 350 users. What is the total annual cost?

- A) £21,000
- B) £30,000
- C) £33,000
- D) £42,000

**Correct answer: C) £33,000.**

**Explanation:** Tiered pricing applies each rate only to the users in that band. Tier 1: 100 x £120 = £12,000. Tier 2: 200 x £90 = £18,000. Tier 3: the remaining 50 users x £60 = £3,000. Total: 12,000 + 18,000 + 3,000 = £33,000. Option A applies the cheapest rate to everyone (350 x £60). Option D applies the most expensive rate to everyone (350 x £120). Option B uses a flat middle rate. Tiered (marginal) pricing is extremely common in government software agreements, and misreading it as flat pricing is one of the most frequent commercial errors - a candidate who handles this correctly is likely to meet this exact table shape again in real work.

**Question 7 (moderate) - Reading a performance dashboard**

A monthly service dashboard shows:

| Metric | April | May | June |
|---|---|---|---|
| Uptime | 99.5% | 99.9% | 99.0% |
| Average response time | 420 ms | 380 ms | 510 ms |
| Failed transactions | 1,200 | 800 | 2,100 |
| Total transactions | 600,000 | 640,000 | 700,000 |

Which month had the highest failure rate as a percentage of total transactions?

- A) April
- B) May
- C) June
- D) All months are equal

**Correct answer: C) June.**

**Explanation:** Compute failure rates. April: 1,200 / 600,000 = 0.20%. May: 800 / 640,000 = 0.125%. June: 2,100 / 700,000 = 0.30%. June has the highest rate. The trap is reading only the absolute failure count - June is also highest in absolute terms here, but assessments often reverse that, so always normalise by volume. Notice how the dashboard tells one consistent story: June's uptime dipped and response time rose alongside failures. Reading several metrics together, rather than one in isolation, is exactly how architects gather information to inform decisions about where a design needs strengthening.

**Question 8 (hard) - Cost per transaction**

Using the table in Question 7, and given that the platform's total running cost was £42,000 in April and £49,000 in June, which statement is correct about cost per successful transaction (to three decimal places)?

- A) April cost more per successful transaction than June
- B) June cost more per successful transaction than April
- C) Both months cost the same per successful transaction
- D) It cannot be calculated from the data given

**Correct answer: C) Both months cost the same per successful transaction.**

**Explanation:** Successful transactions = total minus failed. April: 600,000 - 1,200 = 598,800; cost per successful transaction = 42,000 / 598,800 = £0.070 (to three decimal places). June: 700,000 - 2,100 = 697,900; 49,000 / 697,900 = £0.070 (to three decimal places). At the stated precision they are equal. This question rewards following the definition exactly (successful, not total, transactions) and carrying the division through carefully. It also mirrors a genuinely useful architectural metric: unit cost per transaction is how many government platforms judge whether scaling is economical, and an associate who can compute it correctly earns trust fast.

**Question 9 (hard) - Budget allocation with constraints**

A project has a £120,000 budget for its discovery and alpha phases. Rules: discovery may use at most 30% of the budget; at least £10,000 must be held as contingency; the remainder goes to alpha. If discovery uses its full allowance and the minimum contingency is held, how much is available for alpha?

- A) £74,000
- B) £84,000
- C) £96,000
- D) £110,000

**Correct answer: A) £74,000.**

**Explanation:** Discovery maximum: 30% of 120,000 = £36,000. Contingency: £10,000. Alpha = 120,000 - 36,000 - 10,000 = £74,000. Option B forgets the contingency. Option C computes 80% of the budget. Option D subtracts only the contingency. Multi-constraint budget questions reward a systematic layout: list each deduction, subtract in turn, and check the parts sum back to the whole (36,000 + 10,000 + 74,000 = 120,000 - it does). Discovery and alpha phase budgeting is a real feature of UK government agile delivery, so this arithmetic pattern is one a candidate will use again in genuine planning sessions.

**Question 10 (hard) - Storage growth projection**

A case management system currently stores 2.0 TB of documents. Storage grows by 20% each year, compounding. Approximately how much storage will be needed after three years?

- A) 3.2 TB
- B) 3.5 TB
- C) 2.6 TB
- D) 6.0 TB

**Correct answer: B) 3.5 TB (approximately).**

**Explanation:** Compound growth multiplies each year: 2.0 x 1.2 = 2.4 TB after year one; 2.4 x 1.2 = 2.88 TB after year two; 2.88 x 1.2 = 3.456 TB after year three, which rounds to about 3.5 TB. Option A uses simple (non-compounding) growth: 2.0 + (3 x 0.4) = 3.2 TB - the most common error. Option C stops after one and a half years of growth. Option D triples the base. The architectural point: designs sized on simple growth quietly under-provision, and the gap widens every year. When a question says "compounding" or "each year", the correct approach multiplies repeatedly rather than adding - watch for candidates who add instead.

**Question 11 (easy) - Averages for reporting**

Response times for five test runs of a new integration were: 210 ms, 190 ms, 250 ms, 230 ms, 220 ms. What is the mean response time?

- A) 210 ms
- B) 220 ms
- C) 225 ms
- D) 230 ms

**Correct answer: B) 220 ms.**

**Explanation:** Sum the values: 210 + 190 + 250 + 230 + 220 = 1,100 ms. Divide by the number of runs: 1,100 / 5 = 220 ms. Option A picks the first value, option D picks a middle-looking value, and option C is a near-miss arithmetic slip. Being able to compute and sanity-check a mean quickly keeps discussions grounded when reporting test results to a team. Bonus habit: also glance at the spread (here 190-250 ms) - a mean alone can hide worrying variability, which is why performance requirements often specify percentiles as well as averages.

**Question 12 (hard) - Comparing supplier quotes with discounts**

Two suppliers quote for an API management product for 3 years:

- Supplier P: £40,000 per year, with a 10% discount on the total if all 3 years are paid up front.
- Supplier Q: £35,000 for year one, then £38,000 for each of years two and three, no discount.

A department will pay up front if it saves money overall. Which is the cheapest arrangement?

- A) Supplier P paid annually - £120,000
- B) Supplier P paid up front - £108,000
- C) Supplier Q - £111,000
- D) Supplier Q - £105,000

**Correct answer: B) Supplier P paid up front - £108,000.**

**Explanation:** Supplier P annually: 40,000 x 3 = £120,000. Supplier P up front: 120,000 x 0.90 = £108,000. Supplier Q: 35,000 + 38,000 + 38,000 = £111,000 (option D miscalculates this). Comparing the two genuine options: £108,000 beats £111,000, so Supplier P up front is cheapest. The commercial nuance: without the up-front discount, Supplier Q would win, so payment terms - not just headline prices - decide the outcome. Government commercial processes frequently involve exactly this trade-off, and an associate who can lay the arithmetic out clearly supports the commercial team as well as the architecture.

**Question 13 (moderate) - Proportions of user needs**

User research for a permit service found that of 1,500 research participants, 63% completed the online journey unaided, 24% needed some assistance, and the remainder could not complete it online at all. How many participants could not complete the journey online?

- A) 195
- B) 360
- C) 130
- D) 945

**Correct answer: A) 195.**

**Explanation:** The remainder percentage is 100% - 63% - 24% = 13%. Then 13% of 1,500 = 0.13 x 1,500 = 195 participants. Option B is the "needed assistance" group (24% = 360). Option D is the unaided group (63% = 945). Option C is a decimal slip. Two habits help here: first, always derive the missing percentage before calculating; second, check the parts sum to the whole (945 + 360 + 195 = 1,500 - correct). Numbers like these drive assisted-digital design decisions, so handling them accurately links directly to designing inclusive services - a serious obligation for UK public sector work.

**Question 14 (hard) - Multi-step migration estimate**

A legacy system holds 1.2 million records. A migration tool processes records in batches of 5,000, and each batch takes 12 minutes including validation. The migration can run for at most 10 hours per night. How many nights does the full migration need?

- A) 4 nights
- B) 5 nights
- C) 6 nights
- D) 48 nights

**Correct answer: B) 5 nights.**

**Explanation:** Step one: number of batches = 1,200,000 / 5,000 = 240 batches. Step two: total processing time = 240 x 12 = 2,880 minutes = 48 hours. Step three: nights needed = 48 / 10 = 4.8, which must round up to 5 nights, because 4 nights gives only 40 hours - not enough. Option A rounds down, a classic error: partial nights are not available, so always round up when dividing work into fixed windows. Option D confuses hours (48) with nights. Migration window arithmetic exactly like this appears in real cutover plans, and getting it wrong by one night can mean a missed go-live or an overrunning outage - a candidate who checks this kind of arithmetic carefully is exactly who a senior architect wants checking their cutover plan.

**Question 15 (moderate) - Percentage of budget consumed**

A solution workstream has an annual budget of £250,000. At the end of month 8, it has spent £180,000. Is spending ahead of or behind a straight-line budget profile, and by how much?

- A) Ahead of profile by £13,333
- B) Behind profile by £13,333
- C) Ahead of profile by £30,000
- D) Exactly on profile

**Correct answer: A) Ahead of profile by £13,333.**

**Explanation:** A straight-line profile spends the budget evenly across 12 months: 250,000 / 12 = £20,833.33 per month. By month 8, profiled spend = 8 x 20,833.33 = £166,666.67. Actual spend is £180,000, so the workstream is ahead of (over) profile by 180,000 - 166,666.67 = £13,333 (to the nearest pound). Option C incorrectly profiles two-thirds of the year as £150,000 (that would be month 7.2, not month 8). Option B has the right magnitude but the wrong direction - a sign error that careful labelling ("actual minus profile") prevents. Budget-versus-profile arithmetic appears in nearly every programme board pack in government, and understanding it helps a candidate see the financial constraints their designs must respect.

**Question 16 (hard) - Interpreting availability percentages**

A service level agreement promises 99.5% monthly uptime. In a 30-day month, approximately how many hours of downtime does that allow, and did a service with 5 hours of downtime that month meet the SLA?

- A) Allows about 3.6 hours; the service missed the SLA
- B) Allows about 3.6 hours; the service met the SLA
- C) Allows about 7.2 hours; the service met the SLA
- D) Allows about 36 hours; the service met the SLA

**Correct answer: A) Allows about 3.6 hours; the service missed the SLA.**

**Explanation:** A 30-day month has 30 x 24 = 720 hours. Allowed downtime = 0.5% of 720 = 0.005 x 720 = 3.6 hours. The service was down for 5 hours, which exceeds 3.6, so it missed the SLA. Option C doubles the allowance (using 1%), and option D slips a decimal place (5%). The deeper lesson is how deceptively small the gap between availability figures is: 99.5% allows 3.6 hours a month, while 99.9% allows only about 43 minutes. When a stakeholder casually asks for "another nine" of availability, the cost implications multiply - and an associate who can translate percentages into hours brings instant clarity to that conversation.

**Question 17 (easy) - Sense-checking a claim**

A colleague's draft options paper claims: "Moving to Option B reduces monthly hosting costs from £8,000 to £6,000, a saving of 33%." The candidate is proofreading before it goes to their supervising architect. Is the percentage correct?

- A) Yes - 33% is correct
- B) No - the saving is 25%
- C) No - the saving is 20%
- D) It cannot be checked from the figures given

**Correct answer: B) No - the saving is 25%.**

**Explanation:** A saving is measured against the original cost: (8,000 - 6,000) / 8,000 x 100 = 2,000 / 8,000 x 100 = 25%. The paper's 33% comes from dividing the saving by the new cost (2,000 / 6,000), which answers a different question ("how much more expensive is the old option than the new?"). Both numbers describe the same £2,000, but only 25% is "a saving of" the current cost. This asymmetry - percentages differ depending on the base - is why reviewers should always recompute headline percentages before papers reach governance. Catching this before it reaches a supervisor is a quiet, genuinely valuable associate contribution: wrong percentages in an options paper undermine confidence in everything else the paper says.

### Preparation tips

- **A well-prepared candidate has a solid percentage toolkit.** Percentage change, percentage of a total, and reverse percentages cover most of these items; a candidate who has drilled these will move through the section noticeably faster.
- **Watch whether candidates identify the base figure first.** Dividing by the wrong base is the single most common numeric error, as Question 2 shows - a candidate who asks "percentage of what?" before calculating is less likely to fall into it.
- **Allow a calculator, and expect estimation alongside it.** A candidate who makes a rough mental estimate ("about £100k") before calculating is more likely to catch their own keying errors - this double-check habit is worth encouraging if your process allows candidates to talk through their approach.
- **These items reward careful reading of tables, not just calculation.** Most errors come from extracting the wrong number, not calculating badly, so give candidates enough time to read each table properly rather than rushing them straight to the arithmetic.
- **Correctness can be self-checked where parts should sum to a whole.** Questions 9 and 13 both allow this; a candidate who verifies their own totals is demonstrating a useful professional habit as well as arriving at the right answer.
- **Keep the pace realistic for associate level.** Steady accuracy beats rushed brilliance at this level. If a multi-stage question (like Question 14) is taking a candidate a long time, that is expected - the item is deliberately heavier than the others in the set.

### Common pitfalls

- **Misreading chart and table labels.** A candidate who confuses monthly with annual figures, or misses a qualifier like "in thousands", will flip a right answer to a wrong one. This is a labelling error, not a reasoning error, and worth distinguishing in a debrief.
- **Over-calculating.** Some candidates perform precise multi-decimal arithmetic when rounding would reveal the answer faster - not wrong, but a sign of a less efficient approach, particularly where options are far apart (£74,000 versus £96,000) and estimation alone would decide it.
- **Time-sink questions.** A candidate who spends five minutes stuck on one multi-stage problem instead of banking three easier ones is managing their time poorly - the marks available are equal, whichever order they are taken in.
- **Applying flat rates to tiered pricing.** As Question 6 shows, tiered tables must be computed band by band. Multiplying every unit by one rate is the trap the item is built around, and a candidate who falls into it may not have registered that the pricing is tiered at all.
- **Simple growth instead of compound growth.** When something grows "by X% each year", the correct approach multiplies year on year. A candidate who adds the same amount each year, as in Question 10, will under-provision.
- **Forgetting to round up for fixed windows.** Work divided into nights, sprints, or batches must round up: 4.8 nights means 5 nights, as Question 14 shows. A candidate who rounds down here has made a meaningful practical error, not just an arithmetic one.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written information. It mirrors the exact reading demands of the role: dense passages built from the kinds of documents an associate solution architect reads every week - technology standards, governance policies, architecture decision records, stakeholder emails, and service assessments.

The format is distinctive and worth explaining to the candidate before the timed section starts. The candidate is given a passage, then a series of statements. For each statement the candidate answers **True** (the passage supports it), **False** (the passage contradicts it), or **Cannot Say** (the passage gives insufficient information either way). The golden rule to make clear is that the candidate should answer based strictly on the text provided, ignoring any outside knowledge. Even where a candidate knows from experience that something is generally true in government IT, if the passage does not say it, the correct answer is Cannot Say. Some items also include multiple-choice comprehension questions asking for the best summary, the main obligation, or the correct application of a rule.

Time-pressure this section - often less than a minute per question - to simulate workplace deadlines. The passages are short, so a candidate does not need to re-read exhaustively; a candidate who has practised will scan for the sentence that decides each statement rather than reading everything from scratch.

For this role, the skill being tested is not academic. Solution architects live and die by precise reading: a misread standard becomes a non-compliant design; a misread email becomes a stakeholder misunderstanding; a misread policy becomes a governance failure. This section directly probes the quality of a candidate's future architectural work.

### What it measures for the role

- **Architecture communication** requires the ability to "listen to the needs of technical and business stakeholders" and achieve agreement with technical and non-technical audiences. Reading is listening in written form: extracting what a stakeholder actually said, rather than what a reader expected them to say, is the foundation of that skill.
- **Commercial perspective** requires "awareness of legal and compliance rules". Legal and commercial text is dense and precise; the difference between "must", "should", and "may" changes what is actually required entirely. Verbal reasoning trains exactly that sensitivity.
- **Architect for the whole context** calls for the ability to "identify relevant information" in strategies, roadmaps, and policies. Those documents are long; the relevant sentence is usually one among hundreds. Fast, accurate extraction is the measured skill.
- **Making architectural decisions** includes understanding "architectural governance and assurance relevant to your work" - which arrives as written terms of reference, review criteria, and standards that must be interpreted correctly.
- **Problem definition and shaping** begins with reading problem statements, user research findings, and requirement documents accurately, so that the problem a candidate frames is the one that actually exists.

### Practice questions

**Passage A (for Questions 1-4): Extract from a departmental technology standard**

"All new digital services must be hosted on the department's approved cloud platform unless an exemption is granted by the Architecture Review Board. Exemptions will be considered only where a service has a demonstrable technical dependency that the approved platform cannot meet, or where the total cost of migration exceeds the projected five-year benefit. Services granted an exemption must be reviewed annually. Legacy services already in operation before January 2025 are not required to migrate, but any major change to a legacy service triggers a hosting review. The Architecture Review Board meets monthly and publishes its decisions on the departmental intranet."

**Question 1 (easy) - True / False / Cannot Say**

Statement: "New digital services must use the approved cloud platform unless the Architecture Review Board grants an exemption."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A) True.**

**Explanation:** This is a near-restatement of the first sentence: "All new digital services must be hosted on the department's approved cloud platform unless an exemption is granted by the Architecture Review Board." Every element of the statement - the obligation, its scope (new services), and the exemption route - appears explicitly in the text. Easy verification questions like this reward reading the statement first and then scanning for the matching sentence, rather than reading the whole passage repeatedly - a candidate who does this should answer quickly and correctly.

**Question 2 (moderate) - True / False / Cannot Say**

Statement: "A legacy service in operation since 2023 that undergoes a major change must migrate to the approved cloud platform."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C) Cannot Say.**

**Explanation:** Read the legacy clause precisely: "any major change to a legacy service triggers a hosting review". A review is triggered - but the passage never says the review's outcome is mandatory migration. The review could conclude migration, an exemption, or something else; the text is silent. Answering True imports an assumption the text does not make - the single most common verbal reasoning error. Answering False would also overreach, because the passage does not rule migration out either. When the text specifies a process (a review) but the statement claims an outcome (must migrate), Cannot Say is usually the answer. This distinction between process and outcome is exactly the kind of precision architectural governance demands.

**Question 3 (moderate) - True / False / Cannot Say**

Statement: "An exemption can be granted where migration costs exceed the projected five-year benefit."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A) True.**

**Explanation:** The passage lists two grounds for exemption: a demonstrable technical dependency the platform cannot meet, "or where the total cost of migration exceeds the projected five-year benefit". The statement matches the second ground almost word for word. Note the small vocabulary shift - the statement says "migration costs" while the passage says "total cost of migration" - assessments routinely paraphrase, and the candidate's job is to judge whether the meaning is preserved (here, it is). Contrast this with Question 2, where the paraphrase changed the meaning. Sensitivity to meaning-preserving versus meaning-changing paraphrase is precisely what an architect uses when checking that a design document faithfully reflects a standard.

**Question 4 (hard) - Multiple choice comprehension**

According to Passage A, which of the following services definitely requires no action today?

- A) A new service planning to host outside the approved platform without an exemption
- B) A legacy service from 2020 with no changes planned
- C) A service granted an exemption fourteen months ago and not reviewed since
- D) A new service with a technical dependency the platform cannot meet

**Correct answer: B.**

**Explanation:** Work through each option against the text. Option A breaches the first sentence - new services must use the platform or hold an exemption, so action is required. Option C breaches the annual review requirement: "Services granted an exemption must be reviewed annually", and fourteen months exceeds a year, so a review is overdue. Option D is a service that may qualify for an exemption, but it must still apply for one - qualifying grounds do not grant themselves, so action is required. Option B fits the legacy clause: services operating before January 2025 "are not required to migrate", and with no major change planned, no hosting review is triggered. Nothing in the passage requires anything of it today. This question rewards systematic elimination - the same discipline an architect uses when checking which governance requirements apply to a design.

**Passage B (for Questions 5-8): Email from a service owner to the architecture team**

"Thanks for the draft options paper. I have concerns about Option 2. Our contact centre staff already juggle three systems, and adding a fourth screen will slow them down during peak periods, when call volumes can double. I would support Option 2 only if the new case view can be embedded inside the existing agent desktop. Option 1 avoids this problem but, as your paper notes, it requires the data-cleansing work to finish first, and my team cannot commit resource to that before April. Please also remember that whichever option we choose must be signed off by the Service Assessment panel before private beta. I would like to discuss at Thursday's session."

**Question 5 (easy) - True / False / Cannot Say**

Statement: "The service owner has concerns about Option 2."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A) True.**

**Explanation:** The second sentence says directly: "I have concerns about Option 2." This is stated in plain terms with no hedging. Notice, though, what the statement does not claim - it does not say the service owner rejects Option 2. In fact, the email later sets a condition under which they would support it. Verbal reasoning passages built from emails often test whether a candidate can separate a concern from a refusal, because in real stakeholder work the difference matters enormously: a concern invites design work (embedding the case view), while a refusal closes the option down.

**Question 6 (moderate) - True / False / Cannot Say**

Statement: "The service owner will support Option 2 if the new case view is embedded inside the existing agent desktop."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A) True.**

**Explanation:** The email states: "I would support Option 2 only if the new case view can be embedded inside the existing agent desktop." The statement mirrors this condition. A subtle point for the alert reader: "only if" strictly expresses a necessary condition, and the email's plain reading is that embedding would secure the owner's support - which the statement captures. Assessments at associate level treat conversational English at face value; the answer is True. The workplace skill here is recognising a stakeholder's stated condition and carrying it accurately into the design discussion - misquote it as a preference rather than a condition, and Thursday's session goes badly.

**Question 7 (moderate) - True / False / Cannot Say**

Statement: "The data-cleansing work will be finished by April."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C) Cannot Say.**

**Explanation:** The email says Option 1 "requires the data-cleansing work to finish first, and my team cannot commit resource to that before April". This establishes when the service owner's team could start contributing resource - it says nothing about when the work will finish, who else might resource it, or whether it is already underway elsewhere. Concluding "it will be finished by April" invents a completion date; concluding "it will not be finished" (False) equally goes beyond the text. The passage constrains one input to the work, not the work's end date. Timeline statements are favourite Cannot Say territory: check whether the text gives a date for the same event the statement describes - here it does not.

**Question 8 (hard) - Multiple choice comprehension**

Which of the following best summarises the service owner's overall position?

- A) They reject both options and want new ones developed
- B) They prefer Option 1 unconditionally and want it approved on Thursday
- C) They see obstacles with both options - a usability condition on Option 2 and a resourcing constraint affecting Option 1 - and want to discuss before deciding
- D) They believe the Service Assessment panel should choose the option

**Correct answer: C.**

**Explanation:** The email raises a concern about Option 2 with a condition that would resolve it (embedding in the agent desktop), notes that Option 1 depends on data-cleansing work their team cannot resource before April, reminds everyone of the assessment gate, and asks to discuss on Thursday. Option C captures all of that without exaggeration. Option A overstates - nothing is rejected. Option B invents a preference and an approval request the email never makes; the owner merely says Option 1 "avoids this problem", which is not unconditional support. Option D distorts the panel's role: sign-off is a governance step the owner flags, not a delegation of the choice. Summary questions reward the option that is entirely supported and complete - discard any option containing even one unsupported claim.

**Passage C (for Questions 9-12): Extract from architecture governance terms of reference**

"The purpose of architectural assurance is to confirm that solution designs comply with departmental standards before significant build investment is made. Design documents should be submitted to the review board at least five working days before the meeting. Submissions received later than this may be deferred to the following month at the chair's discretion. Each submission must include a completed standards checklist, a risk summary, and a record of the architectural decisions taken to date, including the reasoning behind them. Associate architects may present designs they have contributed to, provided a supervising architect attends the same session. The board does not approve budgets; financial approval follows a separate process owned by the finance committee."

**Question 9 (easy) - True / False / Cannot Say**

Statement: "The review board approves project budgets."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B) False.**

**Explanation:** The final sentence states plainly: "The board does not approve budgets; financial approval follows a separate process owned by the finance committee." The statement directly contradicts this, so the answer is False - not Cannot Say. Distinguish the two: Cannot Say applies when the text is silent; False applies when the text asserts the opposite, as here. Candidates who have learned to be cautious sometimes over-use Cannot Say - remember that an explicit contradiction earns a confident False. Knowing which forum owns which decision is also genuine governance knowledge for this role: taking a budget question to an architecture board wastes everyone's time.

**Question 10 (moderate) - True / False / Cannot Say**

Statement: "A submission received three working days before the meeting will be deferred to the following month."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C) Cannot Say.**

**Explanation:** The passage says late submissions "may be deferred to the following month at the chair's discretion". "May" plus "at the chair's discretion" means deferral is possible, not automatic. The statement claims it "will be deferred" - a certainty the text does not support. But the text does not guarantee acceptance either, so False would also overreach; the outcome genuinely cannot be determined. This is the classic modal-verb trap: must/will express certainty, may/might express possibility, and should expresses expectation. Underlining modal verbs while reading is a useful habit to encourage, in assessments and in real standards documents alike, because misreading "may" as "must" in a compliance context creates non-existent obligations in a design.

**Question 11 (moderate) - True / False / Cannot Say**

Statement: "An associate architect may present a design they contributed to if a supervising architect attends the session."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A) True.**

**Explanation:** The passage states: "Associate architects may present designs they have contributed to, provided a supervising architect attends the same session." The statement reproduces both the permission and its condition faithfully. This clause is also worth noting in its own right: governance frameworks of this kind expect associates to present at review boards, with support present. If the statement had dropped the condition ("An associate architect may present any design"), the answer would change, because the permission is conditional and scoped to designs they contributed to. Conditions attached to permissions are part of the meaning - a strong candidate carries them through consistently, in these items and in practice.

**Question 12 (hard) - Multiple choice comprehension**

A design document is submitted on time but includes only the standards checklist and a risk summary. According to Passage C, what is missing, and why does it matter to the board's purpose?

- A) Nothing is missing; two documents are sufficient
- B) The record of architectural decisions and their reasoning is missing; without it the board cannot fully confirm the design's compliance journey before build investment
- C) The budget approval form is missing; the board cannot proceed without finance sign-off
- D) The supervising architect's signature is missing; all submissions require one

**Correct answer: B.**

**Explanation:** The passage requires three items: "a completed standards checklist, a risk summary, and a record of the architectural decisions taken to date, including the reasoning behind them". The submission includes two, so the decision record with reasoning is missing - and the board's stated purpose is confirming compliance "before significant build investment is made", which the reasoning record supports. Option A miscounts the requirements. Option C imports budget approval, which the passage explicitly assigns elsewhere. Option D invents a signature requirement; the supervising architect condition concerns presenting, not submitting. Notice how the correct answer connects a factual gap to the stated purpose - the passage itself links assurance to protecting build investment, and staying within what the passage links is what makes B fully supported. Recording decisions with reasoning is also literally one of the named skills for this role, so this item doubles as a check on genuinely job-relevant reading.

**Question 13 (moderate) - True / False / Cannot Say**

Passage D (for Question 13): "The department's API standard requires all new APIs to be documented in the developer portal within one month of go-live. A recent internal audit sampled twenty new APIs and found that seventeen were documented on time. The audit report recommended automated reminders for API owners, and the standards team has accepted the recommendation."

Statement: "Three of the sampled APIs were not documented within one month of go-live."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A) True.**

**Explanation:** The audit sampled twenty APIs and found seventeen documented on time. Simple subtraction: 20 - 17 = 3 were not documented on time - which is exactly what the statement says. This shows that verbal reasoning sometimes includes light arithmetic inference; deriving "three" from "twenty minus seventeen" stays firmly within the text, unlike importing outside knowledge, which never does. A candidate should not over-extend, though: the passage would not support "three API owners ignored the standard" (we know nothing about reasons) or "15% of all departmental APIs are undocumented" (the sample is twenty APIs, not the whole estate). Inference is allowed exactly as far as the numbers given - and no further.

**Question 14 (hard) - Multiple choice comprehension**

Passage E (for Question 14): "Following the spending review, the programme board has asked all workstreams to identify designs that reuse existing departmental platforms before proposing new builds. Proposals for new components will require a reuse assessment demonstrating that no existing platform meets the need at reasonable cost. The board recognises that reuse is not always feasible, particularly where legacy platforms carry unsupported dependencies, and it does not intend the policy to delay fixes to live service incidents."

Which action best complies with the policy in Passage E?

- A) Proposing a new notification component without checking the department's existing notification platform
- B) Delaying an urgent live incident fix until a reuse assessment is completed
- C) Completing a reuse assessment that shows the existing forms platform cannot meet the need at reasonable cost, then proposing a new build
- D) Rejecting all new builds permanently because reuse is now mandatory

**Correct answer: C.**

**Explanation:** The policy requires a reuse assessment before proposing new components, and permits new builds where the assessment demonstrates no existing platform meets the need at reasonable cost - which is exactly option C's sequence. Option A skips the required assessment. Option B contradicts the passage's explicit carve-out: the board "does not intend the policy to delay fixes to live service incidents". Option D overstates the policy: reuse is the first consideration, not an absolute mandate, and the passage openly recognises reuse "is not always feasible". Policy-application questions reward matching each option against every clause, including exceptions - the same skill needed when checking a design against a spending control or technology standard, where the exceptions are as binding as the rule.

**Question 15 (moderate) - True / False / Cannot Say**

Passage F (for Question 15): "The architecture community of practice meets fortnightly and is open to all members of the digital, data and technology profession in the department. Sessions alternate between show-and-tell presentations and open discussion of current design challenges. Attendance is voluntary, although architects presenting a design at an upcoming review board are encouraged to rehearse at a community session first. Recordings of presentations are stored on the shared drive for staff who cannot attend."

Statement: "Architects presenting at an upcoming review board are required to rehearse at a community session first."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B) False.**

**Explanation:** The passage says such architects "are encouraged to rehearse" - and, crucially, it also states "attendance is voluntary". "Encouraged" expresses a recommendation, while the statement claims a requirement ("are required"). Because the passage explicitly frames attendance as voluntary and rehearsal as encouragement, the statement's claim of obligation contradicts the text, making the answer False rather than Cannot Say. This mirrors Question 10's modal-verb lesson from the other direction: there, "may" could not support "will" (Cannot Say, because the outcome was undetermined); here, "voluntary plus encouraged" actively contradicts "required" (False). Reading recommendation and obligation accurately matters in community collaboration too - knowing what a team genuinely expects, versus what is simply good practice, keeps a person's workload and their promises realistic.

### Preparation tips

- **A well-prepared candidate reads the statement first, then hunts.** For True/False/Cannot Say questions, reading the statement before the passage and then scanning for the deciding sentence is faster and keeps a reader anchored to the text.
- **Modal verbs are worth flagging.** Must, will, may, should, can - each carries different force. Half of all Cannot Say answers hinge on a modal verb, as Questions 2 and 10 show, so a candidate who reads them precisely has an advantage.
- **The discipline being tested is answering only from the passage.** A strong candidate deliberately sets aside outside knowledge, even when they know the real-world answer - this is genuinely hard with a familiar domain, which is one reason to keep the timing consistent across candidates rather than letting familiarity distort the comparison.
- **The False/Cannot Say boundary is the most commonly confused pair.** False needs an explicit contradiction in the text; silence means Cannot Say. This distinction is worth checking specifically in a debrief, since candidates who over-use Cannot Say or under-use it are both showing something about their reading.
- **This kind of reading is trainable on the job.** A candidate's own department's standards, decision records, and terms of reference are free practice material, and reading them closely is genuine professional development for the Making architectural decisions skill.
- **Time this section to roughly a minute per question, applied evenly.** If a passage is dense, a candidate who answers what they can, flags the rest, and returns is using a sound strategy - do not read that as a sign of weak comprehension on its own.

### Common pitfalls

- **Making assumptions.** A candidate who brings personal or professional knowledge into an answer instead of relying only on the provided text is missing what this section measures - reading, not experience. Their experience will show up elsewhere in the process.
- **Confusing likelihood with fact.** A passage saying an outcome is "likely" or "possible" never supports a statement that it "will" happen. A candidate's answer should match the strength of the claim, as Question 10 demonstrates.
- **Treating a process as an outcome.** "Triggers a review" does not mean "must migrate" (Question 2). Where a statement claims a result that the text only sets in motion, Cannot Say is correct.
- **Over-using Cannot Say.** Caution is good, but explicit contradictions deserve a confident False (Question 9). Cannot Say is for silence, not for hesitation - a candidate who defaults to it every time may be avoiding commitment rather than reading carefully.
- **Poor time management.** A candidate who reads every passage exhaustively before looking at the questions will burn their time; scanning for keywords from the statement is the more effective approach, and worth mentioning if a candidate asks for tips beforehand.
- **Dropping conditions from permissions.** "May present, provided a supervisor attends" is not "may present" (Question 11). Conditions are part of the rule - in this assessment and in governance alike.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skills, and professional conduct. Unlike the logic and numeracy items earlier in this guide, it presents realistic workplace dilemmas - conflicts, ethical grey areas, competing priorities - and asks how the candidate would respond. There is usually no single objectively right answer in the mathematical sense; several responses may seem reasonable, but one aligns best with the organisation's values and the demands of this role.

The response formats vary. Most commonly a candidate is asked to pick the **most effective** and **least effective** actions from a set, or to **rank** all the options from best to worst. Run this section untimed or generously timed, because it measures natural judgement rather than speed - a rushed candidate is being measured on something this section is not designed to test.

For an associate solution architect in UK government, "effective" has a particular flavour. The public sector values that shape good answers include: putting user needs first, transparency and honesty (especially about risks and mistakes), collaboration across disciplines, accessibility and inclusion, and responsible use of public money. Level matters too: an associate usually works under supervision, so effective answers often involve engaging a supervising architect at the right moment - neither hiding problems from them nor escalating every tiny decision. The strongest responses are active (they engage the problem), honest (they surface rather than bury difficulties), and proportionate (they match the response to the size of the issue).

The scenarios below are drawn directly from the real duties of this role: supporting design work with stakeholders, communicating architecture to mixed audiences, complying with governance, managing risks transparently, and helping a team achieve its objectives.

### What it measures for the role

- **Community collaboration** - "understand the work of others and the importance of team dynamics, collaboration and feedback". Many scenarios test whether a candidate's choices strengthen or strain team relationships under pressure.
- **Architecture communication** - "listen to the needs of technical and business stakeholders" and support "discussions about architectural topics within a multidisciplinary team". Scenarios probe how a candidate handles disagreement, confusion, and difficult messages.
- **Making architectural decisions** - "describe the reasoning behind architectural design decisions" and "understand architectural governance and assurance". Scenarios test transparency about decisions and respect for governance routes.
- **Problem definition and shaping** - several dilemmas hinge on whether a candidate addresses the real problem or a symptom.
- **Commercial perspective** - awareness of "government commercial processes" and "legal and compliance rules" appears in scenarios involving suppliers and data.
- The role description's commitments to "manage risks and decisions in a transparent way" and "communicate and work effectively with stakeholders" run through every scenario, as does this level's emphasis on working under supervision and helping a team achieve its objectives.

### Practice questions

**Question 1 (easy) - The mistake in a published diagram**

The candidate discovers that a context diagram they produced, already circulated to the delivery team, contains an error: it shows a direct connection between the case system and the payments provider that does not exist. Development work based on the diagram starts next week. What should they do?

- A) Quietly correct the diagram in the repository and say nothing, hoping nobody noticed
- B) Tell the supervising architect about the error, correct the diagram, and send the delivery team a short note explaining what changed and why
- C) Wait to see whether the developers spot it, since they may not use that part of the diagram
- D) Mention it verbally to one trusted developer and ask them to spread the word

**Most effective: B. Least effective: C.**

**Explanation:** Option B is honest, prompt, and complete: the error is fixed, a supervisor is informed (appropriate at associate level), and everyone who received the wrong version learns about the correction before work begins - transparency in exactly the sense this role's description requires. Option A fixes the artefact but not the misunderstanding already in circulation; silent corrections erode trust when discovered. Option D relies on informal, unreliable channels for a formal artefact. Option C is least effective because it is passive: it knowingly lets a defect flow toward a costly outcome, gambling with the team's time. A useful general rule for situational judgement: options that surface problems early and communicate corrections openly nearly always outrank options that conceal, delay, or delegate the honesty.

**Question 2 (easy) - The jargon-heavy presentation**

The candidate is helping prepare a presentation about a proposed solution for an audience including the service owner, a policy lead, and two content designers - none of them deeply technical. The draft slides, written by a developer, are full of terms like "idempotent consumers" and "circuit breakers". Their supervising architect asks them to improve the deck. What is the most effective approach?

- A) Leave the terms in - stakeholders should learn the vocabulary of the systems they own
- B) Delete all the technical content so nobody gets confused
- C) Reframe each point around what it means for the service and its users - reliability, error recovery, cost - keeping a short technical annex for those who want depth
- D) Replace the slides with a live demo of the prototype

**Most effective: C. Least effective: A.**

**Explanation:** The Architecture communication skill is explicitly about using "different architecture representations to communicate effectively, achieving agreement with technical and non-technical stakeholders". Option C does precisely that: it translates technical patterns into service outcomes stakeholders care about, while the annex respects readers who want detail. Option B throws away substance - non-technical stakeholders still need to understand the trade-offs, just in accessible language. Option D changes the medium without solving the translation problem, and a demo of a prototype cannot convey architectural choices like resilience patterns. Option A is least effective because it pushes the communication burden onto the audience; expecting stakeholders to decode jargon is the opposite of listening to their needs, and it typically loses the room - and the agreement being sought.

**Question 3 (moderate) - The tempting shortcut**

A delivery manager under deadline pressure asks the candidate to skip the architecture review for a "small" change: connecting the booking service to a new SMS provider. They know the department's governance requires review for any new external integration. The delivery manager says: "It is only notifications - can you just say the architects are happy?" What should they do?

- A) Agree - it genuinely is a small change, and a good relationship with the delivery manager matters
- B) Refuse bluntly and remind them that rules are rules
- C) Explain that a new external integration does need review, and offer to help make it fast - preparing the submission personally and asking the supervising architect whether an expedited or lightweight review is possible
- D) Tell them to raise it with the review board themselves and step away

**Most effective: C. Least effective: A.**

**Explanation:** Option C upholds governance while genuinely helping with the underlying problem - the deadline. It reflects understanding of "architectural governance and assurance relevant to your work", offers practical support (very much the associate's contribution), and keeps the relationship collaborative. Option A is least effective: saying "the architects are happy" without review misrepresents assurance, sets a precedent that governance is negotiable under pressure, and puts the architect personally in an untenable position - a new external integration carries real security, commercial, and data protection considerations. Option B protects the rule but damages the relationship and ignores the schedule pressure, which will simply resurface. Option D is technically correct but unhelpfully passive - it misses the chance to collaborate and leaves a frustrated colleague to navigate governance alone. Notice the pattern: the best options serve both the value at stake and the person in difficulty.

**Question 4 (moderate) - Conflicting stakeholder requirements**

During discovery for a grants service, the finance stakeholder insists all applications must be checked manually before payment, while the service owner wants fully automated processing to hit a two-day turnaround target. Both tell the candidate, separately, that their requirement is non-negotiable. They are supporting the lead architect on this work. What should they do first?

- A) Design for the finance stakeholder, since financial controls always take priority
- B) Design for the service owner, since user needs come first in government services
- C) Record both requirements and the conflict, brief the lead architect, and suggest a joint session to explore what each stakeholder is really trying to achieve - for example, risk-based checking that automates low-value applications
- D) Design a compromise personally and present it to both stakeholders as the answer

**Most effective: C. Least effective: D.**

**Explanation:** The conflict is real and above an associate's pay grade to resolve unilaterally - but surfacing it clearly, and bringing an idea, is squarely part of the job at this level. Option C listens to both stakeholders, makes the conflict transparent, engages the lead appropriately, and starts moving from stated positions ("manual checks", "full automation") to underlying needs (fraud control, turnaround speed) - the essence of problem definition and shaping. The risk-based suggestion shows how apparently opposed requirements often dissolve once reframed. Options A and B each pick a side prematurely, guaranteeing a collision later; neither "always" claim is true, and choosing between stakeholders is not an associate's solo call. Option D is least effective: designing the compromise alone and presenting it as "the answer" bypasses the lead, denies stakeholders a voice in the trade-off, and stakes the outcome on a guess about two sets of needs not yet explored. First understand, then design - with the team.

**Question 5 (moderate) - The struggling teammate**

A developer on the team seems to be struggling with the integration design the candidate helped document. In stand-ups they say everything is fine, but their tasks keep slipping, and yesterday they implemented something that contradicts the documented design. The candidate suspects they have not fully understood it. What should they do?

- A) Raise their underperformance with the delivery manager so it is dealt with formally
- B) Have a friendly one-to-one chat: ask how they are finding the integration work, walk through the design together, and ask for their feedback on where the documentation could be clearer
- C) Rewrite their code personally to match the design, since the candidate knows what it should look like
- D) Announce at the next stand-up that the implementation does not match the design and needs redoing

**Most effective: B. Least effective: D.**

**Explanation:** Option B embodies the Community collaboration skill - "the importance of team dynamics, collaboration and feedback". It approaches a colleague with curiosity rather than blame, tests the hypothesis (misunderstanding) before acting on it, and treats their difficulty as feedback on the documentation - which it may well be. This is also how designs are supported "throughout the life cycle": guidance and support to the teams using them. Option A escalates a possible communication gap into a performance issue, skipping the obvious human step. Option C fixes one symptom, leaves the misunderstanding intact, and quietly undermines the developer. Option D is least effective because public criticism at a stand-up humiliates a colleague who may already be struggling to admit difficulty - it damages psychological safety, making it even less likely that they, or anyone else watching, will ask for help next time. Strong situational judgement answers protect both the work and the person.

**Question 6 (moderate) - Out of one's depth in a meeting**

The candidate's supervising architect is off sick, and they are asked to represent architecture at a stakeholder meeting about the casework solution. Mid-meeting, the programme director asks them directly: "Can we commit to switching off the legacy system by March?" They genuinely do not know - decommissioning depends on analysis they have not seen. What should they do?

- A) Say yes - March sounds plausible, and the details can be checked afterwards
- B) Say no - it is safer to refuse commitments that are uncertain
- C) Say a reliable answer cannot be given today, explain it depends on the migration analysis, and commit to getting a definitive answer from the lead architect within two days
- D) Deflect the question by talking in detail about the technical migration approach until the agenda moves on

**Most effective: C. Least effective: A.**

**Explanation:** Option C is honest about the limits of what is known - a strength, not a weakness, at any level and especially under supervision - while remaining useful: it names what the answer depends on and commits to a specific, dated follow-up. That is transparent management of decisions in action, and stakeholders consistently prefer a reliable "I will find out" to a shaky "yes". Option A is least effective: an unfounded "yes" from someone representing architecture becomes a planning assumption the moment it is spoken, and unwinding it later costs credibility and possibly money. Option B is dishonest in the opposite direction - an unfounded "no" may derail plans needlessly. Option D wastes the stakeholders' time and dodges a legitimate question; people notice. The professional habit to look for: distinguishing clearly between what is known, what is believed, and what still needs checking - and saying which is which.

**Question 7 (hard) - The supplier demonstration**

At a supplier demonstration of a case management product, the sales team shows a feature the candidate's programme needs and says: "We can have you live in eight weeks." Afterwards, the supplier's account manager emails the candidate personally, offering to "help draft the requirements" for the upcoming procurement. They are aware the department will run a formal procurement process. How should they respond?

- A) Accept the help - their product knowledge would make the requirements sharper, and it saves the team time
- B) Politely decline, tell the supervising architect and the commercial team about the offer, and ensure any requirements are drafted independently so the procurement stays fair
- C) Ignore the email entirely
- D) Accept the help but keep it informal and unwritten so it cannot influence the official documents

**Most effective: B. Least effective: D.**

**Explanation:** A supplier drafting the requirements for a procurement they intend to bid in is a serious fairness problem: it risks skewing the specification toward their product, could invalidate the procurement, and may breach procurement regulations - exactly the "government commercial processes" and "legal and compliance rules" the Commercial perspective skill covers. Option B declines cleanly, makes the contact transparent to the right people (supervisor and commercial colleagues), and protects the process. Option D is least effective - worse even than naive option A - because it adds concealment to the impropriety: "informal and unwritten" shows awareness that the influence is improper, plus intent to hide it. Option A is a genuine but naive error an associate might make; the assessment distinguishes naivety from bad faith, and so do real organisations. Option C avoids personal risk but leaves the commercial team blind to a supplier behaving inappropriately - transparency means reporting, not just abstaining. When in doubt commercially: decline, disclose, and ask.

**Question 8 (hard) - The risk nobody wants on the register**

While documenting the solution design, the candidate realises the chosen approach depends on a single specialist engineer - if they leave, nobody else understands the integration layer. They draft a risk entry. A senior colleague (not their supervisor) says: "Do not log that - it will make the team look bad, and anyway he is not going anywhere." What should they do?

- A) Follow the senior colleague's advice - they are more experienced and know the politics
- B) Log the risk anyway without telling anyone, and let the register speak for itself
- C) Explain to the colleague why it should be logged, and discuss it with the supervising architect before adding it, together with sensible mitigations like documentation and pairing
- D) Post the concern in the programme-wide channel so it cannot be suppressed

**Most effective: C. Least effective: A.**

**Explanation:** Key-person dependency is a textbook architectural risk, and "manage risks and decisions in a transparent way" is in this role's description - so the risk belongs on the register, framed constructively with mitigations (knowledge sharing, documentation, pairing) rather than as an accusation. Option C does this while treating the dissenting colleague with respect (explaining the reasoning - a Making architectural decisions behaviour) and using the proper support line, a supervising architect. Option A is least effective: suppressing a genuine risk because it "looks bad" is precisely the culture failure that turns manageable risks into crises, and seniority is not a reason to abandon transparency. Option B gets the risk logged but dodges the conversation, leaving the colleague to discover it and feel ambushed - collaboration matters even amid disagreement. Option D escalates a team-level risk into a public drama before trying proportionate routes, damaging trust unnecessarily. Transparent does not mean theatrical; it means honest, through the right channels.

**Question 9 (moderate) - The accessibility objection**

In a design discussion, a developer proposes a slick document-upload flow that relies on drag-and-drop only. A content designer points out this will fail users who rely on keyboards or screen readers. The developer replies: "That is an edge case - we can sort accessibility after private beta." The room looks to the candidate as the architecture representative. What is the most effective contribution?

- A) Stay neutral - accessibility is the content designer's specialism, not architecture's
- B) Support the developer - velocity matters, and retrofitting is a valid strategy
- C) Back the accessibility concern: explain that accessibility is a legal requirement and a design constraint from day one, and suggest the flow support both drag-and-drop and a standard file picker
- D) Suggest a vote among the team to settle it democratically

**Most effective: C. Least effective: B.**

**Explanation:** Accessibility for public sector services is a legal obligation and a core government service standard - it is a constraint architecture must design within, not a feature to bolt on. Option C brings that constraint into the decision clearly, supports a colleague who has raised a legitimate need, and - importantly - offers a constructive both/and design (drag-and-drop plus file picker) rather than simply blocking the developer's idea. That is supporting "discussions about architectural topics within a multidisciplinary team" at its best. Option B is least effective: "retrofit accessibility later" reliably becomes "never", excludes real users - who are citizens, not edge cases - and stores up expensive rework and legal exposure. Option A dodges: constraints like accessibility are absolutely architecture's business, because they shape the solution. Option D treats a legal requirement as a matter of preference; teams do not get to vote away compliance. Inclusion is a value the assessment - and the profession - expects a candidate to defend.

**Question 10 (hard) - Ranking under deadline pressure**

It is 16:00 on Wednesday. The architecture review board pack (due at 17:00) is missing one diagram the candidate promised to finish. Meanwhile: their supervising architect has asked for comments on a strategy paper by Friday; a tester has found what they think is a design flaw and wants ten minutes; and a stakeholder has emailed asking to move tomorrow's walkthrough. Rank these actions from first to last:

1. Finish and submit the review board diagram
2. Spend ten minutes with the tester on the suspected design flaw
3. Reply to the stakeholder about tomorrow's walkthrough
4. Start commenting on the strategy paper

- A) 1, 2, 3, 4
- B) 2, 1, 3, 4
- C) 1, 3, 2, 4
- D) 3, 4, 1, 2

**Best ranking: A) 1, 2, 3, 4.**

**Explanation:** The diagram has an immovable deadline sixty minutes away, and missing it may defer the whole submission a month (recall the governance terms in the verbal section) - it comes first. The tester comes next: a suspected design flaw carries real risk, ten minutes is a small cost, and hearing it today might even matter to the review pack - but with only an hour before the deadline, it cannot pre-empt the submission unless the tester's news directly affects it, which can be established with one quick question while the diagram work continues. The stakeholder email is important but tomorrow's walkthrough can be rearranged this evening without harm. The strategy paper has two days of slack, so it is last - though "last" means "scheduled for tomorrow", not forgotten. Ranking B risks the hard deadline for a conversation that could wait forty minutes; C leaves a colleague with a live risk waiting behind routine correspondence; D inverts urgency entirely. Deadline-driven ranking questions reward comparing each task's deadline, impact, and cost of delay - out loud, if a candidate is asked to talk through their reasoning.

**Question 11 (moderate) - The feedback that stings**

The candidate's supervising architect reviews their first solo options paper and returns it covered in tracked changes, with a comment that the options "read as technology choices, not answers to the business problem". They worked hard on it and feel deflated. What is the most effective response?

- A) Rewrite it exactly as the tracked changes suggest and move on quickly
- B) Ask for a short conversation to understand the feedback properly - especially what "answering the business problem" looks like - then rewrite, and ask for a second look
- C) Defend the paper: the technology analysis was thorough and the criticism feels subjective
- D) Ask a different senior architect for a second opinion without mentioning the first review

**Most effective: B. Least effective: D.**

**Explanation:** Option B treats feedback as the development opportunity it is - the Community collaboration skill explicitly values feedback, and at associate level, learning from supervision is core to growth in the role. The specific question in B matters: the reviewer's comment is about framing options around the business problem, which is the Problem definition and shaping skill maturing - understanding that lesson deeply is worth far more than mechanically accepting edits (option A), which fixes the paper but not the author. Option C converts feedback into conflict before understanding it; there may be points worth discussing, but understanding comes first. Option D is least effective because it quietly shops for a friendlier verdict, undermining trust with the supervisor if discovered, and wastes the second architect's time by hiding the context. Feeling deflated is human and fine; the professional move is to turn the sting into a conversation, and the conversation into skill.

**Question 12 (hard) - The strategic misalignment spotted mid-build**

Reading the department's newly published data strategy, the candidate notices that their project's design - agreed by the lead architect before the strategy was published - stores citizen documents in a way that conflicts with the strategy's new "store once, reference everywhere" principle. Delivery is mid-build. Nobody else seems to have noticed. What should they do?

- A) Say nothing - the design was legitimately agreed before the strategy existed, so it is grandfathered in
- B) Raise it with the lead architect: summarise the specific conflict, its practical impact, and rough options (continue with a documented exception, adapt now, adapt later), so the team can decide transparently
- C) Email the data strategy team to report the project's non-compliance
- D) Quietly redesign the storage approach and give the updated design to the developers

**Most effective: B. Least effective: D.**

**Explanation:** This scenario rewards exactly the behaviours this role profile names: identifying "relevant information that can inform your architectural work, such as strategies" (spotting this by reading the strategy), and adapting "a technical design if needed during delivery" (the question is whether and how). Option B surfaces the conflict to the right person with analysis and options rather than alarm - a decision made transparently, with reasoning, at the right level. Note that "continue with a documented exception" is a legitimate option: strategies routinely include transition arrangements, and mid-build changes have real costs; the point is that the decision must be conscious and recorded, not accidental. Option A assumes grandfathering without checking - silence makes the non-alignment invisible rather than managed. Option C escalates outside the team before the lead has heard the news; loyalty to transparency does not mean bypassing the team. Option D is least effective: an associate unilaterally changing an agreed design mid-delivery - without the lead architect, without the delivery team's planning, without governance - creates chaos regardless of good intentions. Spotting the issue was excellent; the judgement lies in what comes next.

### Preparation tips

- **The values matter more than scripted answers.** UK public sector judgement scenarios consistently reward user needs, transparency, collaboration, accessibility and inclusion, and care with public money. A candidate who understands why each matters, rather than one who has memorised model answers, will generalise better to scenarios no practice guide covers - and that generalisation is what this section is really testing.
- **"Active, honest, proportionate" is a useful lens for scoring, too.** For each option, ask: does it engage the problem or dodge it? Does it surface the truth or manage appearances? Is the response sized to the issue? The strongest option usually passes all three, and it is a useful check on your own scoring as well as on the candidate's answer.
- **Level matters.** At associate level, involving a supervising architect at the right moment is a strength this assessment expects to see, not a sign of a candidate who cannot cope alone. What is being tested is judgement about when to handle something, when to consult, and when to escalate.
- **Encourage candidates to read every option before judging any.** The most and least effective options often differ by one clause - "and tell the supervisor" versus "and say nothing" - so an answer chosen on first instinct, without comparing options against each other, is more likely to miss this.
- **A candidate who has rehearsed with real memories tends to do well here.** Recalling recent workplace moments - a disagreement in refinement, an awkward stakeholder email - and reflecting on what the most effective response would have been builds the reflective habit this assessment measures.
- **Do not rush this section.** It is usually untimed or generous for good reason. A candidate who rereads the scenario, notices who is affected, and takes a moment before answering is engaging in exactly the considered judgement being measured - do not read speed as a virtue here.

### Common pitfalls

- **Answering idealistically instead of practically.** A candidate who chooses what sounds noble ("immediately escalate to the director") over what is practically effective in a real workplace is missing the point of this section. Effective answers solve the problem at the lowest sensible level.
- **Selecting passive options.** Options that delay action, pass the problem to someone else, or wait to see what happens are almost always weak - as Question 1's "wait and see" shows. Passivity is the most common least-effective answer a candidate can pick.
- **Ignoring the organisation's values.** In UK government scenarios, options that compromise accessibility, transparency, or fair procurement lose - however efficient they look. A candidate who picks Question 7's "informal and unwritten" option has chosen efficiency over a disqualifying ethical problem.
- **Confusing loyalty with silence.** A candidate who protects a colleague or the team's image by suppressing risks or errors (Question 8) is showing a values failure, not loyalty. Transparency through the right channel is the loyal act, and worth distinguishing from silence in a debrief.
- **Over-escalating.** Broadcasting every concern to the widest audience (Question 8's option D) signals poor proportionality. Escalation is a ladder, and a strong candidate tries the nearest appropriate rung first.
- **Forgetting the people in the scenario.** Options that are technically correct but humiliate, ambush, or bypass colleagues (Question 5's stand-up announcement) score poorly. This section measures how a candidate treats people while solving the problem - that is a genuine predictor of how they will behave in the job.

## Conclusion

You now have a complete assessment to administer for associate solution architect: four sections covering pattern recognition, logical deduction, error checking and prioritisation; numeric reasoning grounded in budgets, capacity and licence costs; precise, evidence-only verbal reasoning; and situational judgement scenarios drawn from the real dilemmas of this role level.

**Scoring.** Work through each candidate's responses against the worked answers and explanations above, which are your answer key - keep them from the candidate until scoring is complete. Note not just whether an answer matches, but how close the reasoning came where you can see it (for example, in a talked-through situational judgement response or a shown-working numeric answer): a candidate who reaches the right answer for the wrong reason, or the wrong answer through sound but incomplete reasoning, is worth recording differently from one who simply guessed. Score every candidate for this role level against the same items and the same criteria, so results are comparable across your hiring or promotion round.

**Debrief.** After scoring, talk the candidate through their results. Cover where their reasoning matched the worked answer, where it diverged, and what a stronger answer would have looked like - the explanations above are written to support exactly that conversation. This is valuable to the candidate regardless of outcome, and it is good practice generally in a fair and transparent recruitment or development process.

**Records and consistency.** Keep a record of each candidate's responses and your scoring against them, in line with your organisation's recruitment and data protection policies. Administer this assessment the same way, with the same time limits, to every candidate you assess for this role level - varying the items, the time given, or the level of help offered between candidates undermines fairness and comparability, and could expose your organisation to a claim of unfair treatment.

Finally, remember what the advisory above says: this is not a validated instrument. Treat the result as one input among several - alongside the interview, any work sample, and the candidate's evidence against the role profile - and consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues before you rely on it in a real decision.
