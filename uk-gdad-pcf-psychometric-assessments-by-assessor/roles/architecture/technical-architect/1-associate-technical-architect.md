# Technical Architect (Associate Technical Architect) - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace psychometric assessment to a candidate for associate technical architect. It gives you structured, job-specific material to present to the candidate — cognitive, numeric reasoning, verbal reasoning, and situational judgement items — each with a worked answer and explanation that forms your answer key. Hold the answer key back from the candidate until the session is complete and you are ready to score and debrief.

A psychometric assessment is a structured way of measuring how a candidate thinks, reasons, and makes decisions. Employers use these assessments because they are fair, consistent, and focused on the mental skills a job really needs, rather than on how polished a candidate's CV looks — which matters especially at associate level, where a candidate may be early in their architecture career and have less to show on paper than a more senior applicant.

An associate technical architect supports technical architects in putting forward designs as solutions to technology challenges, usually under supervision. The role works closely with developers when designing appropriate solutions, and builds understanding of the overall strategy and how the work supports it. The assessments in this document reflect exactly that world: practice questions about design options, architecture diagrams, decision records, capacity figures, standards documents, and everyday situations with developers, senior architects, and delivery teams.

This document is organised into four main assessment sections, each matching a common type of workplace psychometric test:

1. **Workplace job-specific cognitive assessment** - pattern spotting, error checking, logical reasoning, and problem solving using the kinds of artefacts the role handles every day.
2. **Workplace job-specific numeric reasoning assessment** - working with numbers such as hosting costs, capacity figures, and performance metrics.
3. **Workplace job-specific verbal reasoning assessment** - reading and interpreting written material such as standards, policies, and emails.
4. **Workplace job-specific situational judgement assessment** - choosing effective actions in realistic workplace dilemmas.

Each section explains what the assessment measures, maps it to the specific skills in this role level's profile, provides practice questions with full worked answers, and finishes with notes for you on administering that section and on the pitfalls candidates commonly fall into.

How should you administer this document? Present the same items, in the same order, under the same time limit, to every candidate for this role level — consistency is what makes any comparison across candidates defensible. Because this is an entry-level assessment, it is fair to tell the candidate in advance roughly what to expect (question formats, rough timings) so nerves do not distort the result; do not share the worked answers or explanations. Once the candidate has completed all four sections, use the worked answers to score their responses, and use the explanations to debrief them afterwards — a debrief that is honest and encouraging serves an associate-level candidate especially well, since this stage of a career is exactly where a little formative feedback pays off.

Treat this document as one input among several, never as the sole basis for a decision. See the advisory below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes the role needs, using practical scenarios rather than abstract puzzles. Instead of a generic IQ test, the candidate sees questions built around the everyday tasks and artefacts of an associate technical architect: design diagrams, dependency lists, decision records, error logs, and prioritisation choices.

Typically these assessments are taken online and are timed, usually 15 to 30 minutes. Questions are objectively scored, and results are compared against a benchmark or norm group rather than judged on gut feeling. Many platforms give a few ungraded practice questions first so the candidate can get used to the interface, and some adapt the difficulty of later questions based on earlier answers. Employers often receive a breakdown of speed versus accuracy rather than a single score, so a candidate working carefully should not be scored worse than one who rushes.

Why does this matter for the role? Architecture work is fundamentally about thinking clearly under constraints. When supporting a technical architect in putting forward a design, the role holder must spot inconsistencies between a diagram and its description, deduce what happens when one component fails, check a design document for errors before it goes to review, and decide which of several tasks to tackle first. A cognitive assessment simulates exactly these thinking skills in a compressed, measurable form. A candidate doing well shows they can reason reliably about systems, which is the heart of technical design.

At associate level, remember that candidates are often early in their career and may not have taken an assessment like this before. The questions start gently and build up, and every answer below comes with a full explanation so you can debrief the reasoning step by step, not just the result.

### What it measures for this role level

Each cognitive dimension maps directly to skills named in the role profile:

- **Pattern recognition** supports the skill of **Technical design throughout the life cycle**: working with well-understood technology and identifying appropriate patterns. Spotting that three services share the same integration style, or that a sequence of releases follows a cycle, is pattern recognition in action.
- **Logical deduction** supports **Making architectural decisions**: describing the reasoning behind architectural design decisions and gathering information to inform them. Deduction is how a candidate moves from "the database must stay in the UK" and "this supplier hosts only in Ireland" to "this supplier cannot host the database".
- **Error checking** supports **Architecture communication**: gathering and explaining information to be used in architecture representations. A diagram that contradicts its own key, or a table that disagrees with its summary, will mislead technical and non-technical stakeholders alike, so catching such errors is vital.
- **Prioritisation** supports **Architect for the whole context** and **Community collaboration**: identifying relevant information such as strategies, roadmaps and policies, and understanding the work of others and the importance of team dynamics. Choosing which piece of information or which request matters most is a daily judgement.
- **Problem solving** supports **Strategy design** and **Technical design throughout the life cycle**: explaining how organisational objectives link to designing strategy, and creating technical designs characterised by managed levels of risk, impact, and complexity. Problem solving is how a candidate turns a messy challenge into a managed design.

### Practice questions

Present these one at a time. Give the candidate time to read the scenario and choose an answer before moving on; the worked answer and explanation below each item form your answer key.

**Question 1 (easy) - Pattern recognition**

A team's services follow a naming pattern for their environments. The candidate sees this list:

- payments-dev, payments-test, payments-prod
- licensing-dev, licensing-test, licensing-prod
- appointments-dev, appointments-test, ?

Which environment name completes the pattern?

A) appointments-live
B) appointments-prod
C) prod-appointments
D) appointments-staging

**Correct answer: B**

**Explanation:** Each service has three environments with the suffixes -dev, -test, and -prod, in that order. The appointments service already has -dev and -test, so the missing item is appointments-prod. Option A uses a different word ("live"), option C reverses the order of the parts, and option D introduces a suffix that no other service uses. In real work, consistent naming patterns like this help everyone find things quickly, and noticing when a name breaks the pattern is a simple but genuinely useful architectural habit.

**Question 2 (easy) - Logical deduction**

A senior technical architect tells the candidate two facts about a design for a citizen-facing service:

1. All components that store citizen data must be hosted in the UK region.
2. The document store in the design stores citizen data.

Which conclusion must be true?

A) The document store is the only component storing citizen data.
B) The document store must be hosted in the UK region.
C) All components must be hosted in the UK region.
D) The document store cannot be replaced with another product.

**Correct answer: B**

**Explanation:** This is a classic deduction. The rule applies to every component that stores citizen data; the document store is such a component; therefore the rule applies to it. Option A goes beyond the facts - other components might also store citizen data. Option C over-applies the rule to components that may store no citizen data at all. Option D talks about product choice, which the facts say nothing about. When describing the reasoning behind architectural decisions, this "rule plus fact gives conclusion" structure is exactly the kind of clear logic senior architects and governance boards want to see.

**Question 3 (easy) - Error checking**

The candidate is checking a component table in a design document before it goes to their team's architecture review. The document's summary says: "The service has four components: a web frontend, an API, a queue, and a database. Only the API talks to the database."

The table says:

| Component | Talks to |
|---|---|
| Web frontend | API |
| API | Queue, Database |
| Queue | Database |
| Database | (none) |

What is the inconsistency?

A) The table lists five components.
B) The table shows the queue talking to the database, but the summary says only the API talks to the database.
C) The table shows the web frontend talking to the database.
D) There is no inconsistency.

**Correct answer: B**

**Explanation:** Compare each claim in the summary with the table. The component count matches (four components), so A is wrong. The web frontend talks only to the API in the table, so C is wrong. But the summary claims "only the API talks to the database", while the table shows the queue also talking to the database - a direct contradiction, so B is correct and D is not. Catching this kind of mismatch before a review meeting saves everyone time and protects the credibility of the document. When gathering and explaining information for architecture representations, cross-checking words against diagrams and tables is one of the role's most valuable contributions.

**Question 4 (moderate) - Logical deduction**

The candidate is gathering information to inform a decision about message formats. They learn:

1. If a service publishes events, it must use the approved event schema.
2. The booking service uses the approved event schema.
3. The reporting service does not use the approved event schema.

Which conclusion must be true?

A) The booking service publishes events.
B) The reporting service does not publish events.
C) The booking service does not publish events.
D) The reporting service uses a different schema for publishing events.

**Correct answer: B**

**Explanation:** Be careful here - this question tests a common logical trap. Rule 1 says publishing events requires the approved schema. The reporting service lacks the approved schema, so it cannot be publishing events (if it were, it would break rule 1). That makes B correct. Option A is the trap: using the approved schema does not prove the booking service publishes events - a service might adopt the schema for other reasons, or simply be ready to publish later. The rule works in one direction only. Option C contradicts nothing but is not proven either. Option D assumes the reporting service publishes events, which we just showed it cannot. In architecture governance, mistaking "A requires B" for "B proves A" leads to wrong conclusions about compliance, so this distinction really matters.

**Question 5 (moderate) - Prioritisation**

It is Monday morning. The candidate has four items on their list:

1. Review a developer's pull request that is blocking their work today.
2. Update an architecture diagram for a show-and-tell on Thursday.
3. Respond to a governance query about a design decision; the assurance board meets tomorrow morning.
4. Read a new technology trends report a senior architect shared "when you get a chance".

Which order best balances urgency and impact?

A) 4, 2, 3, 1
B) 1, 3, 2, 4
C) 3, 1, 2, 4
D) 2, 1, 3, 4

**Correct answer: C**

**Explanation:** Two items are time-critical: the governance query (board meets tomorrow morning) and the blocking pull request (blocking a colleague today). Both must come first. The governance query has a hard external deadline and affects assurance of the whole design, and responding may take longer or need input from others, so starting it first is safest; the pull request review is also urgent but is within the candidate's own control and can follow immediately. The diagram is needed Thursday, so it comes third, and the trends report is explicitly "when you get a chance", so it comes last. Option B is a reasonable second choice, but option C better recognises that an external governance deadline tomorrow morning outranks an internal blocker that can still be cleared today. Understanding architectural governance and assurance relevant to the work includes respecting its deadlines; supporting team dynamics means unblocking colleagues quickly too - the skill is sequencing both sensibly.

**Question 6 (moderate) - Pattern recognition**

The candidate is studying how their organisation's services handle user file uploads, looking for an appropriate pattern to reuse. They note:

- Service A: upload goes to quarantine storage, virus scan runs, clean files move to main storage.
- Service B: upload goes to quarantine storage, virus scan runs, clean files move to main storage.
- Service C: upload goes straight to main storage, virus scan runs afterwards in place.
- Service D: upload goes to quarantine storage, virus scan runs, clean files move to main storage.

A senior architect asks: "What is the established pattern, and which service deviates?"

A) Scan-after-storage is the pattern; A, B and D deviate.
B) Quarantine-scan-promote is the pattern; C deviates.
C) There is no consistent pattern across the services.
D) All four services follow the same pattern.

**Correct answer: B**

**Explanation:** Three of the four services (A, B, D) follow the same three-step sequence: quarantine first, scan, then promote clean files to main storage. That repetition across independent services is what makes it the established pattern. Service C reverses the safety order by storing before scanning, so it is the deviation. Option A mistakes the exception for the rule. Options C and D ignore the clear majority behaviour. Recognising the dominant pattern - and being able to say precisely how the outlier differs - is exactly what "work with well-understood technology and identify appropriate patterns" means in practice. It also matters for risk: C's approach leaves potentially unsafe files in main storage, a point worth raising when describing managed levels of risk in a design.

**Question 7 (moderate) - Error checking**

A deployment checklist in a design document reads:

1. Deploy database schema changes.
2. Deploy the new API version, which requires the new schema.
3. Deploy the frontend, which requires the new API version.
4. Run smoke tests against the frontend.
5. Switch traffic to the new version before smoke tests complete.

Which step contains a logical error?

A) Step 2, because the API should deploy before the schema.
B) Step 3, because the frontend never depends on the API.
C) Step 5, because traffic should switch only after smoke tests pass.
D) Step 4, because smoke tests are unnecessary.

**Correct answer: C**

**Explanation:** Steps 1-3 follow dependencies correctly: schema first, then the API that needs it, then the frontend that needs the API. Step 4 is normal good practice. Step 5 is the error: switching real user traffic to a version before its smoke tests complete defeats the purpose of testing - if the tests then fail, users are already on a broken version. The safe order is test first, switch after. Options A and B invert real dependencies, and D dismisses a valuable safety check. Spotting ordering errors like this is part of providing guidance and support to teams using technical designs throughout the life cycle - a checklist is a design artefact too, and it deserves the same careful review as a diagram.

**Question 8 (moderate) - Problem solving**

A developer tells the candidate: "Our batch job fails every night it runs after the data import, but never on nights when the import is skipped." The batch job reads the same table the import writes to. Which is the most reasonable first hypothesis to investigate?

A) The batch job has a random defect unrelated to the import.
B) The import changes or locks data in a way that breaks the batch job, so the interaction between the two needs examining.
C) The night-time server maintenance window causes both problems.
D) The batch job fails because of network issues.

**Correct answer: B**

**Explanation:** Good problem solving starts with the strongest correlation. The failure appears only when the import runs, and the two processes share a table - that points squarely at an interaction between them, such as locking, timing, or unexpected data. Option A ignores the clear correlation ("random" defects do not track another job's schedule). Options C and D introduce causes with no supporting evidence: maintenance and network problems would not neatly follow the import schedule. Notice that B is phrased as a hypothesis to investigate, not a conclusion - the next step would still be gathering information (logs, timings, lock reports) before deciding. That is precisely the "gather information to inform decisions" behaviour in the Making architectural decisions skill: form the most plausible hypothesis from evidence, then test it.

**Question 9 (moderate) - Pattern recognition and sequence**

An organisation releases its shared platform on a repeating cycle: feature release, feature release, hardening release, then the cycle repeats. The last four releases were: hardening (v12), feature (v13), feature (v14), and then v15. Following the cycle, what type is v15, and what type will v16 be?

A) v15 is a feature release; v16 is a feature release.
B) v15 is a hardening release; v16 is a feature release.
C) v15 is a feature release; v16 is a hardening release.
D) v15 is a hardening release; v16 is a hardening release.

**Correct answer: B**

**Explanation:** Write out the cycle: feature, feature, hardening, repeat. Map the known releases onto it: v13 feature, v14 feature - that completes the two feature releases, so v15 must be the hardening release, and v16 starts the next cycle as a feature release. This matches v12 also being a hardening release exactly three versions earlier, which confirms the pattern. Option B captures both facts. Working out where a release sits in a repeating cycle sounds simple, but it is genuinely useful when planning design changes around release schedules and roadmaps - part of identifying relevant information, such as roadmaps, that can inform architectural work.

**Question 10 (challenging) - Logical deduction with multiple constraints**

The candidate is helping select a hosting option for a new internal service. The constraints are:

1. The service must integrate with the identity platform, which is available only from Network Zone A or Zone B.
2. Budget rules exclude the premium tier.
3. Zone B supports only premium-tier hosting.
4. Zone C is the cheapest option.

Which zone can host the service?

A) Zone A
B) Zone B
C) Zone C
D) None of the zones

**Correct answer: A**

**Explanation:** Work through the constraints one at a time, eliminating as you go. Constraint 1 limits the choice to Zone A or Zone B (so Zone C is out, however cheap - option C is a distractor that tempts with price while ignoring the integration requirement). Constraint 3 says Zone B requires premium tier, and constraint 2 forbids premium tier, so Zone B is out. That leaves Zone A, and nothing rules it out, so A is correct and D is wrong. This elimination method - list constraints, apply each one, see what survives - is exactly how architects justify decisions to governance boards: not "Zone A felt right" but "Zones B and C are excluded by constraints 3+2 and 1 respectively". Practising this structure makes decision records clearer and reasoning easier to assure.

**Question 11 (challenging) - Error checking under detail pressure**

The candidate is proofreading a table of API endpoints against the standards note: "All endpoints must use plural nouns, lowercase paths, and version prefix /v1/."

| # | Endpoint |
|---|---|
| 1 | /v1/licences |
| 2 | /v1/Payments |
| 3 | /v1/appointment |
| 4 | /v1/documents |
| 5 | /licences/v1 |

Which endpoints break the standard, and why?

A) 2 only (uppercase)
B) 2, 3 and 5 (uppercase; singular noun; version prefix misplaced)
C) 3 and 5 only (singular noun; misplaced version)
D) 1, 2 and 4 (various)

**Correct answer: B**

**Explanation:** Check each endpoint against all three rules. Endpoint 1: plural, lowercase, /v1/ prefix - compliant. Endpoint 2: "Payments" has an uppercase P - breaks the lowercase rule. Endpoint 3: "appointment" is singular - breaks the plural rule. Endpoint 4: compliant. Endpoint 5: the version appears at the end, not as a prefix - breaks the prefix rule. So endpoints 2, 3, and 5 fail, which is option B. The trap in this question is stopping after the first error found (option A) or spotting the two "structural" errors but missing the capital letter (option C). In real standards reviews, systematic checking - every item against every rule - is what makes a review trustworthy. It is slower than skimming, but a checklist habit catches what skimming misses.

**Question 12 (challenging) - Problem solving with trade-offs**

A senior architect asks the candidate to propose how a form-submission service should handle a downstream case-management system that is offline for maintenance two hours each week. Users must be able to submit forms at any time. Which design best manages risk while keeping complexity low?

A) Reject submissions during the maintenance window with an error page.
B) Queue submissions durably and forward them when the case-management system returns, telling users their form was received.
C) Build a full duplicate of the case-management system for failover.
D) Ask the case-management team to cancel their maintenance window.

**Correct answer: B**

**Explanation:** The requirement is that users can submit at any time; the constraint is a known, short, regular outage. A durable queue absorbs submissions during the window and forwards them afterwards - a well-understood pattern (store and forward) that fully meets the user need with modest complexity. Option A fails the requirement outright and harms users. Option C meets the requirement but at wildly disproportionate cost and complexity for a two-hour weekly window - a classic case of unmanaged complexity. Option D pushes the problem onto another team and probably fails, since maintenance exists for good reasons. B illustrates the phrase in the role profile "create technical designs characterised by managed levels of risk, impact, and complexity": the design manages the risk (lost submissions), limits the impact (users see a normal confirmation), and keeps complexity proportionate. Also note the pattern-recognition element: recognising this as a store-and-forward problem allows reuse of a proven solution rather than inventing one.

**Question 13 (challenging) - Prioritisation with incomplete information**

Ten minutes before a design review, the candidate notices three issues in the design document being presented:

1. A typo in the title page.
2. The capacity estimate uses last year's user numbers, which have since doubled.
3. One diagram uses an old colour scheme.

There is time to raise only one issue with the presenting architect before the meeting. Which should it be?

A) The typo, because first impressions matter.
B) The colour scheme, because visual consistency aids communication.
C) The capacity estimate, because a doubled user base could invalidate the design's sizing conclusions.
D) None - interrupting before a meeting is unhelpful.

**Correct answer: C**

**Explanation:** Rank the issues by their impact on the decision the review will make. The typo and colour scheme are cosmetic: they affect polish, not conclusions. The capacity estimate is substantive: if user numbers have doubled, the sizing, cost, and possibly the whole approach could be wrong, and a review that endorses the design on stale numbers produces a flawed decision. Raising it quietly beforehand gives the presenter the chance to caveat the figures - far better than the error surfacing mid-meeting or, worse, never. Option D confuses politeness with helpfulness; a brief, well-chosen heads-up is exactly the kind of collaborative support the Community collaboration skill describes. The general lesson: when time is short, prioritise by consequence, not by how easy something is to fix.

### Notes for the assessor

- **What good preparation looks like, if you offer any steer beforehand.** Candidates who spend time before the assessment reading a design document, diagram, or decision record and asking "what patterns do I see, what would break, is anything inconsistent" tend to do well — this reflects genuine day-to-day practice for the role, so there is no harm in mentioning it if your process allows a general steer.
- **The elimination habit.** For deduction questions, a strong candidate crosses out options that contradict a stated fact rather than hunting for a "right-feeling" answer. This is worth noting if the candidate talks through their reasoning.
- **One-way rules are the classic trap.** "All X must have Y" does not mean "everything with Y is X" (see Questions 2 and 4). Many candidates at this level fall for this, and it is a fair thing to explore in debrief rather than treat as disqualifying.
- **Timing.** This section is typically 15 to 30 minutes; brief the candidate on the overall time budget and let them know if your platform allows flagging a question and returning to it.
- **Interface run-through.** Let the candidate use any practice or interface run-through your platform offers; unfamiliarity with the interface is not what this section is meant to measure.
- **A calm setting produces a truer result.** This is worth remembering especially for a candidate early in their career, who may be more nervous than the material warrants.

### Common candidate pitfalls

- **Racing for speed at the cost of accuracy.** Because platforms often report speed and accuracy separately, a slower, careful candidate usually deserves at least as much credit as a fast, careless one — do not let apparent slowness at this level count against a candidate whose answers are accurate.
- **Answering from experience instead of from the question.** A candidate may know a "better" real-world design than any option offered; the question asks for reasoning within the scenario given. Score against the facts on the page.
- **Stopping at the first plausible answer.** As Question 11 shows, several options can each contain a grain of truth. A strong candidate checks all options against all the given rules before committing.
- **Getting stuck on one hard question.** A single multi-stage problem can quietly consume a quarter of the available time. If your platform allows flagging and returning, mention this to the candidate beforehand.
- **Skipping any practice questions offered.** A candidate who skips the warm-up learns the interface during scored questions instead — encourage them to take it.
- **Reading too much into a single wrong answer.** At associate level, this section measures potential and developing skill, not mastery. A wrong answer or two is not itself a red flag; look at the overall pattern.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how well a candidate analyses, interprets, and makes sound decisions using numerical data. It is not a maths exam: no calculus or algebraic proofs are required. Instead, it mimics the data-handling demands of the actual role: reading tables, comparing costs, working out percentages and ratios, and drawing the right conclusion from figures.

Typical characteristics: the inputs are realistic business data such as graphs, cost tables, capacity figures, and project schedules; the maths itself is basic (percentages, ratios, unit conversions, cost comparisons); most assessments allow or provide an on-screen calculator, because they prioritise interpretation over mental arithmetic; and there is usually a strict time limit, so quick and accurate data extraction matters.

Why does this matter for an associate technical architect? Numbers run quietly through almost everything the role does. When helping a technical architect compare hosting options, the comparison is largely numerical: monthly costs, storage growth, request volumes. When checking whether a design can handle expected demand, the role holder is reasoning about capacity figures and peak ratios. When a roadmap says user numbers will double, the role needs to work out what that means for the design. And when explaining a recommendation to non-technical stakeholders, being able to say "option B costs 18% less over three years" is far more persuasive than "option B seems cheaper". Sound numeric reasoning makes a design credible and communication concrete.

At associate level, the questions use straightforward arithmetic on realistic data. The challenge is usually care and interpretation - reading the right row, noticing the units, comparing like with like - rather than difficult calculation. The practice questions below are built entirely from the kinds of figures the role handles, and every explanation shows the arithmetic step by step.

### What it measures for this role level

- **Reading and interpreting data tables** supports **Architect for the whole context**: strategies, roadmaps, and technology trend reports are full of charts and figures, and identifying the relevant information means extracting the right numbers accurately.
- **Cost and percentage calculations** support **Making architectural decisions**: gathering information to inform decisions very often means comparing costs, growth rates, and utilisation percentages between options, then describing the numerical reasoning behind the choice.
- **Capacity and ratio reasoning** supports **Technical design throughout the life cycle**: creating designs with managed levels of risk means checking that storage, throughput, and headroom figures actually add up, and adapting the design when the numbers change during delivery.
- **Presenting figures clearly** supports **Architecture communication**: when gathering and explaining information for architecture representations, the numbers quoted to technical and non-technical stakeholders must be correct and correctly derived.
- **Understanding objectives in numbers** supports **Strategy design**: organisational objectives often arrive as targets - "reduce hosting spend by 20%", "support 50,000 users" - and linking objectives to design means translating those targets into concrete figures.

### Practice questions

Let the candidate use an on-screen calculator if your platform provides one — most workplace numeric assessments do. The explanations below show every step of the arithmetic, so you can check a candidate's working against them.

**Question 1 (easy) - Reading a cost table**

The candidate is comparing monthly hosting costs for a service across three environments:

| Environment | Compute | Storage | Network |
|---|---|---|---|
| Development | £180 | £40 | £20 |
| Test | £260 | £60 | £30 |
| Production | £940 | £220 | £120 |

What is the total monthly cost of the production environment?

A) £1,160
B) £1,280
C) £1,220
D) £1,300

**Correct answer: B**

**Explanation:** Add the three production figures: £940 + £220 + £120. Step by step: £940 + £220 = £1,160, then £1,160 + £120 = £1,280. Option A is the trap for stopping after two of the three columns. Checking that every column the question asks about has been included is good practice - in real cost summaries, forgetting a category (often network) is one of the most common errors in draft design documents.

**Question 2 (easy) - Percentage of total**

Using the same table, total monthly cost across all three environments is £1,870. Approximately what percentage of the total does the development environment (£240) represent?

A) About 8%
B) About 13%
C) About 18%
D) About 24%

**Correct answer: B**

**Explanation:** Development costs £180 + £40 + £20 = £240. The percentage is 240 ÷ 1,870 × 100. Compute: 240 ÷ 1,870 ≈ 0.1283, so about 12.8%, which rounds to 13%. A quick sanity check: 10% of £1,870 is £187, and £240 is a bit more than that, so "a bit more than 10%" confirms 13% and rules out the other options. This estimate-first habit is a great time-saver in timed tests and a good way to catch calculator slips.

**Question 3 (easy) - Percentage increase**

A roadmap states that a service's registered users will grow from 40,000 to 46,000 over the next year. What is the percentage increase?

A) 6%
B) 12%
C) 15%
D) 20%

**Correct answer: C**

**Explanation:** Percentage increase = (change ÷ original) × 100. The change is 46,000 − 40,000 = 6,000. Then 6,000 ÷ 40,000 = 0.15, which is 15%. The most common error is dividing by the new value: 6,000 ÷ 46,000 ≈ 13%, which is close to option B - a deliberately tempting distractor. Dividing by the original (starting) figure is the rule for an increase. Growth figures like this feed directly into capacity planning, so getting the direction of the division right genuinely matters in the role's work.

**Question 4 (moderate) - Capacity headroom**

A design document says the API can handle 1,200 requests per second (rps) at maximum. Current peak traffic is 750 rps. The team wants at least 30% headroom above current peak at all times. Does the design meet the headroom rule, and what is the maximum peak traffic it can support under the rule?

A) Yes; up to about 923 rps
B) Yes; up to 840 rps
C) No; the design supports only 900 rps under the rule
D) No; headroom rules require 1,560 rps capacity

**Correct answer: A**

**Explanation:** The rule requires capacity ≥ peak × 1.30. Check current peak: 750 × 1.30 = 975 rps required, and capacity is 1,200 rps, so yes, the rule is met. The maximum peak the rule allows is capacity ÷ 1.30 = 1,200 ÷ 1.3 ≈ 923 rps. So option A is right on both counts. Option D misapplies the rule by inflating capacity (1,200 × 1.3 = 1,560) instead of comparing capacity to inflated peak - a subtle but important difference. Headroom arithmetic like this appears constantly in technical design reviews, and being able to run it confidently supports creating designs with managed levels of risk.

**Question 5 (moderate) - Comparing supplier costs**

The candidate is gathering information to inform a decision between two managed database suppliers:

- Supplier X: £0.14 per GB per month, plus a fixed platform fee of £150 per month.
- Supplier Y: £0.22 per GB per month, no fixed fee.

The service stores 1,600 GB. Which supplier is cheaper per month, and by how much?

A) X is cheaper by £22
B) Y is cheaper by £22
C) Y is cheaper by £128
D) They cost the same

**Correct answer: B**

**Explanation:** Work out each supplier's full monthly cost, remembering fixed fees. Supplier X: 1,600 × £0.14 = £224 for storage, plus the £150 platform fee, giving £224 + £150 = £374 per month. Supplier Y: 1,600 × £0.22 = £352 per month, with nothing to add. Compare: £352 is less than £374, so Y is cheaper, by £374 − £352 = £22 per month. Option A is the trap for people who compute both totals correctly but then read the comparison backwards; option C is the trap for comparing only the storage components (£352 − £224 = £128) and forgetting the fixed fee entirely. The deeper lesson for the role: fixed fees change which option is cheaper at different volumes. At small volumes, Y's lack of fixed fee wins; at large volumes, X's lower unit rate wins. Including every cost component - unit costs and fixed fees - is essential when gathering information to inform a supplier decision, and quoting a like-for-like total is what makes a comparison trustworthy in a decision record.

**Question 6 (moderate) - Break-even calculation**

Using the suppliers from Question 5 (X: £0.14/GB + £150 fixed; Y: £0.22/GB, no fixed fee), at what storage volume do the two suppliers cost the same per month?

A) 1,500 GB
B) 1,875 GB
C) 2,100 GB
D) 1,250 GB

**Correct answer: B**

**Explanation:** Set the monthly costs equal: 0.14v + 150 = 0.22v. Subtract 0.14v from both sides: 150 = 0.08v. Divide: v = 150 ÷ 0.08 = 1,875 GB. Verify: X at 1,875 GB costs 1,875 × 0.14 + 150 = 262.50 + 150 = £412.50; Y costs 1,875 × 0.22 = £412.50. They match, confirming B. If a service's storage is forecast to grow past 1,875 GB within the contract period, that changes which supplier the design should recommend - a lovely example of how a roadmap figure (growth forecast) feeds an architectural decision.

**Question 7 (moderate) - Ratios in a design**

A design allocates virtual machines to services in the ratio 3:2:1 for the frontend, API, and batch processing respectively. The platform team has approved a total of 18 virtual machines. How many does the API tier get?

A) 3
B) 6
C) 9
D) 12

**Correct answer: B**

**Explanation:** The ratio 3:2:1 has 3 + 2 + 1 = 6 parts in total. Each part is 18 ÷ 6 = 3 machines. The API tier has 2 parts: 2 × 3 = 6 machines. (Frontend gets 9, batch gets 3; check: 9 + 6 + 3 = 18.) Ratio allocations appear in real designs whenever a fixed budget of machines, storage, or budget is split between tiers. The reliable method is always: total the parts, find the value of one part, multiply. The distractors correspond to the other tiers' allocations, so read carefully which tier the question asks about.

**Question 8 (moderate) - Units and rates**

A batch import processes 4,500 records per minute. The nightly import file contains 1.62 million records. The import window is 7 hours. Will the import fit in the window, and how long will it take?

A) Yes; it takes 6 hours
B) Yes; it takes 4.5 hours
C) No; it takes 7.5 hours
D) No; it takes 9 hours

**Correct answer: A**

**Explanation:** Total time = records ÷ rate = 1,620,000 ÷ 4,500 = 360 minutes. Convert to hours: 360 ÷ 60 = 6 hours. Six hours is inside the 7-hour window, so the answer is A, with one hour of spare time. Two habits keep a candidate safe here. First, writing units at every step (records ÷ records-per-minute gives minutes). Second, noticing the scale words: "1.62 million" must become 1,620,000 before dividing - misreading scale qualifiers such as "in thousands" or "in millions" is one of the most common mistakes in numeric assessments, and in real capacity tables too. As a design point, one hour of spare time is only about 17% headroom, worth flagging if record volumes are growing.

**Question 9 (challenging) - Multi-step budget calculation**

A team's annual hosting budget is £60,000. Current monthly spend is £4,200. From month 7, a new feature will add £600 per month to the spend. Will the team stay within budget for the 12-month year, and what is the projected total?

A) Yes; £54,000
B) Yes; £54,600
C) No; £61,200
D) Yes; £57,600

**Correct answer: A**

**Explanation:** Split the year into two periods and cost each one. Months 1-6: 6 × £4,200 = £25,200. Months 7-12: the spend rises to £4,200 + £600 = £4,800 per month, so 6 × £4,800 = £28,800. Total: £25,200 + £28,800 = £54,000, which is comfortably within the £60,000 budget - option A. A second route confirms it, because multi-step money questions reward a cross-check: a full year at the baseline £4,200 would cost 12 × £4,200 = £50,400; the £600 uplift applies for 6 months, adding 6 × £600 = £3,600; and £50,400 + £3,600 = £54,000. Both routes agree, which gives real confidence in the answer. The distractors punish specific mistakes: option D (£57,600) comes from applying the £4,800 rate to all 12 months (12 × £4,800 = £57,600), forgetting that the uplift starts at month 7; option C (£61,200) comes from the same error plus adding the £3,600 uplift again on top; option B tacks one spurious extra £600 onto the correct total. The two-route check - computing the answer two different ways (period-by-period, and baseline-plus-extra) - is the hero habit here. When budget figures feed an architectural recommendation, that cross-check is cheap insurance, and it is a habit worth noting favourably if a candidate's working shows it.

**Question 10 (challenging) - Performance metrics table**

The candidate is reviewing performance test results for three design options:

| Option | Average response (ms) | 95th percentile (ms) | Error rate | Monthly cost |
|---|---|---|---|---|
| Alpha | 120 | 480 | 0.2% | £2,000 |
| Beta | 150 | 310 | 0.1% | £2,400 |
| Gamma | 95 | 900 | 0.4% | £1,800 |

The service standard requires: 95th percentile under 500 ms AND error rate at or below 0.2%. Of the options that meet the standard, which is the cheapest?

A) Alpha
B) Beta
C) Gamma
D) None meet the standard

**Correct answer: A**

**Explanation:** Apply the standard to each option. Alpha: 480 ms < 500 ms and 0.2% ≤ 0.2% - passes (note "at or below" includes 0.2% exactly). Beta: 310 ms < 500 ms and 0.1% ≤ 0.2% - passes. Gamma: 900 ms fails the percentile test, so it is out despite the attractive average (95 ms) and the lowest cost. Of the passers, Alpha (£2,000) is cheaper than Beta (£2,400), so Alpha wins. Two lessons: first, averages can hide bad tail behaviour - Gamma's fast average conceals a slow 95th percentile, which is why standards target percentiles; second, filter-then-compare is the right order - eliminate options that fail hard requirements before comparing on cost. This mirrors real architectural decision-making: requirements first, preferences second.

**Question 11 (challenging) - Growth projection with compounding**

Storage for a service currently stands at 800 GB and grows by 10% per quarter. The allocated storage limit is 1,150 GB. After how many quarters will the storage first exceed the limit?

A) 3 quarters
B) 4 quarters
C) 5 quarters
D) 6 quarters

**Correct answer: B**

**Explanation:** Growth of 10% per quarter compounds: each quarter multiplies the previous total by 1.1. Quarter 1: 800 × 1.1 = 880 GB. Quarter 2: 880 × 1.1 = 968 GB. Quarter 3: 968 × 1.1 = 1,064.8 GB - still under 1,150. Quarter 4: 1,064.8 × 1.1 = 1,171.28 GB - over the limit. So the storage first exceeds the limit after 4 quarters, option B. The classic error is simple (non-compounding) addition: 10% of 800 is 80, and 800 + 4 × 80 = 1,120, which stays under the limit and suggests a later breach - that is why option C tempts. Real storage, user, and cost growth usually compounds, so quarter-by-quarter multiplication is the safe method. Knowing that the design breaches its storage allocation in about a year is exactly the kind of information a candidate would be expected to raise when adapting a technical design during delivery.

**Question 12 (challenging) - Cost per transaction comparison**

Two integration approaches are being compared for a service that processes 250,000 transactions per month:

- Approach P: fixed platform cost £1,500/month plus £0.004 per transaction.
- Approach Q: no fixed cost, £0.011 per transaction.

Which approach is cheaper at the current volume, and what is the monthly saving?

A) P is cheaper by £250
B) Q is cheaper by £250
C) P is cheaper by £1,250
D) Q is cheaper by £2,750

**Correct answer: A**

**Explanation:** Approach P: 250,000 × £0.004 = £1,000, plus £1,500 fixed = £2,500 per month. Approach Q: 250,000 × £0.011 = £2,750 per month. P is cheaper by £2,750 − £2,500 = £250, so option A. Option D quotes Q's total cost as if it were a saving - a reminder to answer the exact question asked. It is also worth knowing where the break-even sits: P and Q cost the same when 1,500 + 0.004t = 0.011t, so 1,500 = 0.007t, giving t ≈ 214,286 transactions. Above that volume P wins (as here); below it Q wins. If the roadmap predicted volumes falling below about 214,000, the recommendation would flip - linking a strategic forecast directly to a design choice, which is the essence of the Strategy design skill.

**Question 13 (challenging) - Availability percentages**

A service comprises two components in a chain: the frontend has 99.9% availability and the API behind it has 99.5% availability. Both must work for the service to work. What is the approximate overall availability, and roughly how many hours of downtime per year does it imply? (There are about 8,760 hours in a year.)

A) 99.9%; about 9 hours
B) 99.7%; about 26 hours
C) 99.4%; about 53 hours
D) 99.5%; about 44 hours

**Correct answer: C**

**Explanation:** When components are chained (both must work), multiply their availabilities: 0.999 × 0.995 = 0.994005, or about 99.4%. Downtime fraction is 1 − 0.994 = 0.006, and 0.006 × 8,760 ≈ 52.6 hours per year, so option C. The common misconception is taking the better figure (option A) or the worse figure alone (option D); in a chain the combined availability is always slightly worse than the weakest link, because failures in different components add up. This little multiplication is one of the most practically useful pieces of arithmetic in technical architecture: it shows why adding components to a chain reduces reliability, and why designs sometimes need redundancy. Being able to walk a stakeholder through it - "two nines-ish components in a row give you about 53 hours of downtime a year" - is powerful, plain-English architecture communication.

**Question 14 (challenging) - Reading a utilisation chart described in text**

A monitoring report states: "Average CPU utilisation across the four production servers was 45% in June. Server 1 averaged 80%, Server 2 averaged 50%, and Server 3 averaged 30%." What did Server 4 average?

A) 20%
B) 25%
C) 30%
D) 45%

**Correct answer: A**

**Explanation:** If the average of four values is 45%, their total is 4 × 45 = 180 percentage points. The three known servers total 80 + 50 + 30 = 160. Server 4 must therefore average 180 − 160 = 20%, option A. This "work backwards from the average" technique appears often in numeric tests. It also reveals a real design insight hiding in the numbers: the load is badly unbalanced - Server 1 runs at 80% while Server 4 idles at 20% - so the headline average of 45% disguises a hotspot. When gathering figures for an architecture representation, it is worth asking what the spread looks like behind the average; a healthy-looking mean can hide an unhealthy distribution.

**Question 15 (moderate) - Percentage decrease against a target**

An organisational objective says: "Reduce the service's monthly hosting spend by at least 20% by year end." Spend at the start of the year was £5,500 per month. It is now £4,510 per month. Has the objective been met, and what is the actual percentage reduction so far?

A) Yes; 18% reduction
B) No; 18% reduction
C) Yes; 22% reduction
D) No; 22% reduction

**Correct answer: B**

**Explanation:** Percentage reduction = (original − new) ÷ original × 100. The reduction is £5,500 − £4,510 = £990. Then 990 ÷ 5,500 = 0.18, which is 18%. The target is "at least 20%", and 18% falls short, so the objective has not yet been met - option B. The pairing of options is deliberate: the arithmetic (18%) and the judgement (met or not) are tested together, and a correct calculation followed by a careless comparison lands on option A. Also notice the wrong-base trap: dividing by the new figure gives 990 ÷ 4,510 ≈ 22%, which makes the target look achieved (option C) - dividing by the wrong base does not just change the number, it can flip the conclusion. This is exactly how organisational objectives link to design work in the Strategy design skill: a strategic target arrives as a percentage, and the role includes translating it faithfully into "we need to find another £110 or more of monthly savings" for the team.

### Notes for the assessor

- **The core four.** Percentages (of, increase, decrease), ratios, rates with units, and averages cover most questions at this level — a candidate fluent in these should move through the section comfortably.
- **Dividing by the original for percentage change.** This is the single most common trap in the section (see Questions 3 and 15); a wrong answer that used the new figure as the base is diagnostic rather than a sign of weak arithmetic generally.
- **Estimation habits.** A candidate who visibly estimates before calculating ("about 10%... a bit more") is showing good practice, not corner-cutting — it catches calculator slips.
- **Units.** Records ÷ records-per-minute = minutes; GB × £-per-GB = £. If a candidate's answer has mismatched units, that is often the fastest way to spot where they went wrong.
- **Calculator.** Confirm the candidate has one, or that your platform provides one — the assessment measures interpretation, not mental arithmetic.
- **The two-route check.** A candidate who verifies an answer a second way (as the explanation to Question 9 does) is demonstrating a valuable professional habit, worth noting even where time pressure means they cannot always do it.

### Common candidate pitfalls

- **Misreading scale qualifiers.** "1.62 million", "in thousands", "per quarter" - a missed qualifier multiplies the error by a thousand. Check whether a wrong answer traces back to a missed qualifier.
- **Confusing monthly and annual figures.** Cost tables mix monthly rates with annual budgets constantly (as in Question 9); a candidate who does not convert to a common period before comparing will produce inconsistent answers.
- **Forgetting fixed costs.** Comparing only unit rates while ignoring platform or licence fees flips many cost comparisons (Questions 5 and 12).
- **Using simple growth where compounding applies.** Growth percentages usually compound (Question 11); a candidate who adds instead of multiplying period by period will understate growth and overstate headroom.
- **Over-calculating.** Where options are far apart, an estimate is enough - this is efficient use of time, not a shortcut to penalise.
- **Time-sink questions.** One multi-stage question can eat several easy questions' worth of time; if your platform allows flagging and returning, note whether the candidate uses it.
- **Answering a different question than the one asked.** "Which is cheaper and by how much" is not "what does the expensive one cost" (Question 12) - worth checking when an answer is wrong in a way that suggests the question was misread rather than miscalculated.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how well a candidate understands, analyses, and draws correct conclusions from written material - and, crucially, how well they resist reading things into a text that are not actually there. The passages mirror the reading demands of the real role: technology standards, hosting policies, governance guidance, stakeholder emails, and design review notes.

The classic format gives a passage followed by statements, and for each statement the candidate chooses one of three answers:

- **True**: the passage says this, directly or by clear logical implication.
- **False**: the passage contradicts this.
- **Cannot Say**: the passage neither confirms nor contradicts it - there is not enough information in the text alone.

The candidate answers based strictly on the passage, ignoring anything they happen to know from outside. Some tests add multiple-choice comprehension questions (for example, "which statement best summarises the policy's requirement?"). Timing is usually tight - often less than a minute per question - to simulate reading under workplace pressure.

Why does this matter for an associate technical architect? The role runs on careful reading. The role holder identifies relevant information in strategies, roadmaps, and policies that can inform architectural work; misreading one clause of a hosting policy can send a design down the wrong path for weeks. Gathering and explaining information for architecture representations means that what is passed on to technical and non-technical stakeholders must faithfully reflect the source. Describing the reasoning behind decisions means writing something governance reviewers will parse closely. And the discipline of "Cannot Say" - refusing to treat an assumption as a fact - is precisely the discipline of good architectural analysis: knowing the difference between what a document states, what it implies, and what is merely being guessed.

At associate level, the passages below use realistic but accessible language, and every explanation points back to the exact wording that justifies the answer. That wording-first habit is the single most important thing this section rewards.

### What it measures for this role level

- **Precise extraction of rules** supports **Architect for the whole context**: policies, standards, and roadmaps are rule-bearing documents, and identifying the relevant information means extracting exactly what they require, permit, and forbid - no more, no less.
- **Distinguishing stated facts from assumptions** supports **Making architectural decisions**: gathering information to inform decisions is only useful if a candidate records what sources actually say. "The policy requires X" and "I assumed X" must never blur together in a decision record.
- **Faithful summarising** supports **Architecture communication**: explaining information for architecture representations to a mixed audience of technical and non-technical stakeholders requires a summary that preserves the source's meaning, including its hedges ("may", "should", "must").
- **Reading others' work accurately** supports **Community collaboration**: understanding the work of others starts with reading their documents, review comments, and emails as they were written, not as they might be expected to read.
- **Interpreting strategy language** supports **Strategy design**: vision statements, mission statements, and strategies use deliberately layered language ("we will explore", "we are committed to"), and describing their purpose and application depends on reading those signals correctly.

### Practice questions

Present each passage to the candidate and have them answer the statements strictly from the text. The explanations below quote the exact wording that decides each answer, and form your answer key.

---

**Passage A - Hosting policy extract**

"All new services must be hosted on the approved cloud platform unless an exemption is granted by the architecture review board. Exemptions are granted only where a service has a demonstrable technical requirement that the approved platform cannot meet. Services hosted under an exemption must be reviewed annually. Existing services are encouraged, but not required, to migrate to the approved platform."

**Question 1 (easy):** True, False, or Cannot Say: "A new service may be hosted off the approved platform if the architecture review board grants an exemption."

**Correct answer: True**

**Explanation:** The first sentence contains its own exception: new services must use the approved platform "unless an exemption is granted by the architecture review board". An exemption therefore permits off-platform hosting for a new service. The statement matches the policy's exact structure, so it is True.

**Question 2 (easy):** True, False, or Cannot Say: "Existing services must migrate to the approved platform."

**Correct answer: False**

**Explanation:** The final sentence says existing services "are encouraged, but not required, to migrate". The statement claims migration is mandatory ("must"), which directly contradicts "not required". This is the classic must-versus-should trap: policy language draws sharp lines between obligation and encouragement. When summarising a policy for a team, preserving these modal verbs exactly is what makes a summary trustworthy.

**Question 3 (moderate):** True, False, or Cannot Say: "The architecture review board meets monthly to consider exemption requests."

**Correct answer: Cannot Say**

**Explanation:** The passage tells us the board grants exemptions, but it says nothing at all about how often the board meets. A candidate might know from their own workplace that such boards often meet monthly - but that is outside knowledge, and verbal reasoning forbids it. Nothing in the text confirms or contradicts the meeting schedule, so the answer is Cannot Say. Learning to notice "the text is silent on this" is the single most valuable skill this test format teaches.

**Question 4 (moderate):** True, False, or Cannot Say: "A new service whose requirements the approved platform can fully meet could still be granted an exemption for cost reasons."

**Correct answer: False**

**Explanation:** The second sentence restricts exemptions tightly: they are granted "only where a service has a demonstrable technical requirement that the approved platform cannot meet". The word "only" excludes every other ground, including cost. If the platform can fully meet the requirements, the sole permitted ground is absent, so a cost-based exemption would contradict the policy. Watch for "only" in policy texts - it is one of the most decision-relevant words in the English language, and one of the easiest to skim past.

---

**Passage B - Email from a delivery manager**

"Hi - quick update before Thursday's review. The payments team has finished the integration design and the security team has reviewed it, though they have asked for two changes to the key-handling approach before they will sign it off. The performance figures look fine on current volumes, but we have not yet tested at the volumes forecast for next spring. I would like the architecture session on Thursday to focus on the key-handling changes, as the deadline for the security sign-off is the end of the month."

**Question 5 (easy):** True, False, or Cannot Say: "The security team has signed off the integration design."

**Correct answer: False**

**Explanation:** The email says the security team "have asked for two changes to the key-handling approach before they will sign it off". The phrase "before they will sign it off" tells us sign-off has not yet happened and is conditional on the changes. The statement claims sign-off is complete, which the text contradicts. Reading review status accurately matters: reporting a design as "signed off" when it is "conditionally awaiting changes" could mislead a whole governance chain.

**Question 6 (moderate):** True, False, or Cannot Say: "The design's performance is adequate for the volumes forecast for next spring."

**Correct answer: Cannot Say**

**Explanation:** The email says performance "looks fine on current volumes, but we have not yet tested at the volumes forecast for next spring". The spring-volume performance is explicitly untested: the text neither confirms it will be adequate nor says it will be inadequate. It is an open question - the very reason the writer mentions it. Answering True here means confusing "not yet shown to be a problem" with "shown not to be a problem", a distinction that sits at the heart of managing risk in technical designs.

**Question 7 (moderate) - Multiple choice:** Which of the following best states the action the delivery manager is requesting?

A) That the security team relax their two requested changes.
B) That Thursday's architecture session concentrate on the key-handling changes.
C) That performance testing at spring volumes be scheduled immediately.
D) That the sign-off deadline be moved to the end of the month.

**Correct answer: B**

**Explanation:** The request is explicit: "I would like the architecture session on Thursday to focus on the key-handling changes". Option B restates this almost word for word. Option A reverses the direction of the request - the writer wants to address the changes, not resist them. Option C is a plausible future action the email hints at, but it is not requested. Option D misreads the deadline: the end of the month is stated as the existing deadline, not a proposed change. In a busy week, an associate architect reads dozens of such emails; extracting the actual request, rather than a nearby plausible idea, is what keeps support to senior architects genuinely useful.

---

**Passage C - Technology standards note**

"Teams should prefer well-understood, widely adopted technologies over novel alternatives. A novel technology may be adopted where the team can show that established options have a material shortfall for the use case, and where a fallback plan exists. Any adoption of a novel technology must be recorded as an architectural decision, including the reasoning and the fallback plan. Decision records are reviewed by the architecture community of practice, which meets fortnightly."

**Question 8 (moderate):** True, False, or Cannot Say: "Adopting a novel technology requires recording an architectural decision."

**Correct answer: True**

**Explanation:** The third sentence is unambiguous: "Any adoption of a novel technology must be recorded as an architectural decision". The word "any" makes the rule universal and "must" makes it mandatory, so the statement is True. Notice how this standard mirrors the role's own skill set: describing the reasoning behind architectural design decisions is not just an assessment topic, it is a codified requirement in many organisations' standards.

**Question 9 (moderate):** True, False, or Cannot Say: "Teams are forbidden from using novel technologies."

**Correct answer: False**

**Explanation:** The standard says teams "should prefer" established technologies, and then sets out exactly when a novel technology "may be adopted" (material shortfall plus fallback plan). A conditional permission is not a prohibition - the text explicitly provides a route to adoption, so "forbidden" contradicts it. This is the mirror image of the must/should trap: "prefer X" does not mean "never Y". Standards are usually written as defaults with documented exceptions, and reading them as absolute bans (or as mere suggestions) both lead to poor architectural advice.

**Question 10 (challenging):** True, False, or Cannot Say: "A team that shows a material shortfall in established options may adopt a novel technology even without a fallback plan, provided they record the decision."

**Correct answer: False**

**Explanation:** Read the conditions carefully: adoption is allowed "where the team can show that established options have a material shortfall for the use case, and where a fallback plan exists". The "and" makes both conditions necessary - shortfall alone is not enough. The statement drops the fallback-plan condition, so it describes something the standard does not permit; recording the decision (the third sentence) is an additional obligation, not a substitute for the missing condition. Compound conditions joined by "and" versus "or" change everything in standards documents; this is exactly the kind of close reading that architectural governance and assurance work demands.

**Question 11 (challenging):** True, False, or Cannot Say: "The architecture community of practice approves or rejects novel technology adoptions."

**Correct answer: Cannot Say**

**Explanation:** The text says decision records "are reviewed by" the community of practice. Reviewing is not necessarily approving or rejecting - a review might be advisory, or for information, or might indeed carry approval power; the passage simply does not say what the review's authority is. Because the text is silent on approval power, the answer is Cannot Say. Be alert to verbs like "reviewed", "considered", and "assured": they describe governance activity without defining decision rights, and assuming decision rights that a document does not grant is a common and costly misreading.

---

**Passage D - Strategy extract**

"Our digital strategy commits us to reducing duplication across departmental services. Over the next three years we will consolidate common capabilities - such as document storage, identity, and notifications - onto shared platforms. Departments will retain responsibility for services that are unique to their users. Where a shared platform does not yet meet a department's accessibility requirements, the department may continue with its existing solution until the platform does."

**Question 12 (moderate):** True, False, or Cannot Say: "Under the strategy, departments will stop running services that are unique to their users."

**Correct answer: False**

**Explanation:** The third sentence states the opposite: "Departments will retain responsibility for services that are unique to their users." Consolidation applies to "common capabilities", not unique services. This distinction - what is in scope versus out of scope - is the first thing to establish when reading any strategy, and misreporting scope is one of the fastest ways to alarm stakeholders unnecessarily.

**Question 13 (challenging):** True, False, or Cannot Say: "A department whose accessibility requirements are unmet by a shared platform is permanently exempt from moving to it."

**Correct answer: False**

**Explanation:** The final sentence allows a department to "continue with its existing solution until the platform does" meet its accessibility requirements. The word "until" makes the exemption temporary and conditional, not permanent. The statement's word "permanently" contradicts the time-limited nature of the concession. Small words - until, unless, only, may, must - carry the load in strategy and policy documents; verbal reasoning tests are largely tests of whether a candidate lets them. It is also worth noticing the value embedded in the text: accessibility requirements are treated as a legitimate reason to delay consolidation, reflecting how seriously UK public sector strategies treat accessibility.

**Question 14 (challenging) - Multiple choice:** Which statement best summarises the strategy's overall approach?

A) Immediate mandatory migration of all services to shared platforms.
B) Consolidation of common capabilities onto shared platforms over three years, with departments keeping unique services and a temporary accessibility-based concession.
C) A recommendation that departments consider shared platforms where convenient.
D) Outsourcing all common capabilities to external suppliers.

**Correct answer: B**

**Explanation:** Option B captures all four load-bearing elements of the passage: the what (consolidate common capabilities), the when (over three years), the scope limit (departments retain unique services), and the concession (accessibility, temporary). Option A overstates both speed ("immediate") and scope ("all services"). Option C understates the commitment - "commits us" and "we will" signal firm intent, not a suggestion. Option D introduces outsourcing, which the passage never mentions. Summarising a strategy for a design document or a stakeholder briefing is precisely this exercise: keep every load-bearing element, add nothing. If a summary would lead a reader to a different decision than the source would, it is not a faithful summary.

**Question 15 (challenging):** True, False, or Cannot Say: "Identity is one of the capabilities the strategy considers common across departments."

**Correct answer: True**

**Explanation:** The second sentence lists examples: "common capabilities - such as document storage, identity, and notifications". Identity is explicitly named as an example of a common capability, so the statement is True. Note the role of "such as": it signals a non-exhaustive list, so the strategy may treat other capabilities as common too - but the statement only claims identity is one of them, which the text directly supports. Had the statement said "identity and payments", the answer would change to Cannot Say, because payments is not mentioned. Precision about exactly what is claimed, clause by clause, is how a candidate avoids both over-reading and under-reading.

---

**Passage E - Design review feedback note**

"Thank you for presenting the draft design for the appointment-booking service. The board endorses the overall approach, subject to two conditions. First, the design must document how personal data will be deleted when a booking is cancelled; the current draft describes retention but not deletion. Second, the proposed caching layer should be reconsidered: the board is not convinced the expected traffic justifies its complexity, though it accepts the final judgement rests with the delivery team. A revised document addressing the first condition is required before the design can proceed to build. The board thanks the associate architect for the clarity of the diagrams, which made the data flows easy to follow."

**Question 16 (moderate):** True, False, or Cannot Say: "The design cannot proceed to build until the data-deletion documentation is added."

**Correct answer: True**

**Explanation:** Two sentences combine to make this True. The first condition requires the design to "document how personal data will be deleted", and the penultimate sentence states: "A revised document addressing the first condition is required before the design can proceed to build." The statement restates that requirement faithfully. Note the asymmetry between the two conditions: the deletion documentation is a hard gate ("required before the design can proceed"), while the caching reconsideration is softer. Reading which conditions are gates and which are advice is essential when helping a team respond to governance feedback - treating advice as a gate wastes effort, and treating a gate as advice stalls the whole design.

**Question 17 (challenging):** True, False, or Cannot Say: "The board has instructed the team to remove the caching layer."

**Correct answer: False**

**Explanation:** The board says the caching layer "should be reconsidered" and that it "accepts the final judgement rests with the delivery team". An instruction to remove would take the decision away from the team; the text explicitly leaves the decision with the team. "Reconsider" is a request to re-examine, not a verdict - so the statement contradicts the passage and is False. This mirrors real governance language: boards often distinguish carefully between conditions (binding) and advice (persuasive but not binding), and a summary to the team must preserve that distinction exactly.

**Question 18 (challenging):** True, False, or Cannot Say: "The current draft design does not describe how long personal data is retained."

**Correct answer: False**

**Explanation:** The passage says "the current draft describes retention but not deletion". So the draft does describe retention - the gap is deletion. The statement claims retention is missing, which the text contradicts, making it False. A hasty reader sees "personal data... not documented" and marks True; the precise wording assigns the gap to deletion only. When relaying review feedback to developers, this level of precision determines whether the team fixes the right gap. Getting it wrong here would send someone off to write retention documentation that already exists, while the real blocker - deletion - remains unaddressed and the design stays gated.

**Question 19 (moderate) - Multiple choice:** Which of the following best describes the board's overall verdict?

A) The design is rejected and must be substantially redrafted.
B) The design is fully approved with no further work needed.
C) The overall approach is endorsed, with one binding condition on data deletion and one piece of advice about caching.
D) The board deferred its decision until traffic figures are available.

**Correct answer: C**

**Explanation:** The opening sentence sets the verdict: "The board endorses the overall approach, subject to two conditions." Option C reflects that endorsement and correctly characterises the two conditions as they are written - the deletion documentation is binding (it gates progress to build), while the caching point is advisory (final judgement "rests with the delivery team"). Option A overstates the outcome: an endorsement with conditions is the opposite of a rejection. Option B ignores the conditions entirely. Option D invents a deferral the passage never mentions - the board decided, it simply attached conditions. Governance outcomes usually live on this spectrum between approve and reject, and reporting the precise position on that spectrum, including which strings are attached and how binding each one is, is one of the most valuable communication services an associate architect can offer a team after any review.

### Notes for the assessor

- **Statement-first reading.** Candidates who skim the passage once for structure, then let each statement send them back to the exact sentence that decides it, tend to work faster and more accurately — this is worth discussing in debrief regardless of outcome.
- **Modal verbs carry the meaning.** Must, should, may, encouraged, required, only, unless, until, and - these small words decide most answers in this section (see Questions 2, 4, 10, and 13).
- **The Cannot Say discipline.** Before marking an answer True, a strong candidate can point to the exact words that say so; if they cannot, and nothing contradicts the statement either, Cannot Say is correct. This is often the hardest habit for an early-career candidate to hold under pressure, and is worth probing gently in debrief rather than treating as a simple pass/fail signal.
- **Timing.** Budget under a minute per question; tell the candidate this in advance so pacing choices are theirs, and mention whether your platform allows flagging and returning to a question.
- **Untested is not the same as failing.** Passages in this section deliberately test the difference between "not yet shown" and "shown not" — a candidate who conflates the two is worth a note for debrief, since this distinction also matters in real risk management.

### Common candidate pitfalls

- **Bringing outside knowledge.** A candidate may know perfectly well how exemption boards usually work; the assessment only credits what the passage says. Score from the text alone.
- **Confusing likelihood with fact.** "The migration is expected to finish by March" does not make "the migration will finish by March" True. Expectations, forecasts, and intentions are not outcomes.
- **Missing "only", "and", "unless", "until".** As Questions 4, 10, and 13 show, one small word flips the answer.
- **Treating "should" as "must".** Encouragement is not obligation (Question 2).
- **Over-summarising.** When a multiple-choice option drops a load-bearing element (a time limit, a condition, a scope boundary), it is wrong even if everything it keeps is accurate (Question 14).
- **Reading the whole passage exhaustively first.** Under time pressure, deep-reading the passage before seeing any statements wastes effort on parts no question touches - candidates who do this often run short on time even when their reading is accurate.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment (often called an SJT) evaluates a candidate's decision-making, interpersonal skills, and professional conduct. Unlike the cognitive, numeric, and verbal tests, it has no arithmetic and no strict logic puzzle. Instead, it presents realistic workplace dilemmas - short scenarios involving conflict, pressure, ambiguity, or ethics - and asks how the candidate would respond.

Key characteristics: scenarios are short, hypothetical, and drawn from the real texture of the job; there is usually no single objectively right answer, but some responses fit the organisation's values and the role's demands much better than others; response formats typically ask the candidate to pick the **most effective** and **least effective** actions from a set, or to rank or rate all the options; and timing is usually generous or absent, because the test measures natural judgement rather than speed.

For an associate technical architect in the UK public sector, the "values" side of the test has a clear shape. Effective answers tend to reflect: putting user needs first; transparency and honesty, especially about problems and mistakes; collaboration across disciplines and teams; respect for governance and assurance processes; accessibility and inclusion as non-negotiables; and knowing when to act versus when to involve a supervising technical architect. That last point deserves emphasis. At associate level, a candidate usually works under supervision, and the strongest answers often combine taking sensible initiative with keeping the senior architect appropriately informed. Escalating everything looks passive; escalating nothing looks reckless; judging what to handle and what to raise is the craft this section is built to probe.

Why does this matter for the role? The associate architect's days are full of small judgement calls: a developer disagrees with a design, a stakeholder asks something beyond current knowledge, a deadline squeezes quality, a review uncovers a mistake. None of these have a formula. SJTs measure exactly this practical wisdom.

### What it measures for this role level

- **Working with developers and teams** maps to **Community collaboration**: understanding the work of others and the importance of team dynamics, collaboration and feedback. Many scenarios test whether a candidate strengthens or strains those dynamics under pressure.
- **Handling design disagreements and decision pressure** maps to **Making architectural decisions**: describing reasoning openly, gathering information before deciding, and respecting architectural governance and assurance are the behaviours strong SJT answers display.
- **Communicating with mixed audiences** maps to **Architecture communication**: several scenarios test how a candidate explains architecture to technical and non-technical stakeholders, and what they do when communication has gone wrong.
- **Balancing the bigger picture** maps to **Architect for the whole context** and **Strategy design**: some dilemmas hinge on noticing the strategy, roadmap, or policy dimension of a local decision, and on linking organisational objectives to what the team builds.
- **Supporting delivery honestly** maps to **Technical design throughout the life cycle**: scenarios about adapting designs during delivery, managing risk, and providing guidance to teams reflect this skill directly.

### Practice questions

Present each scenario to the candidate and ask them to identify the most and least effective options, or to rank the options, as specified. The explanations below form your answer key — there is rarely a perfect option, and the skill being assessed is comparing effectiveness.

**Question 1 (easy) - A developer challenges the design**

The candidate presents a draft integration design to the development team. A senior developer says, in front of everyone: "This won't work - the message sizes will blow past the queue limits." The candidate had not considered message size. What is the MOST effective and the LEAST effective response?

A) Thank them, acknowledge message size had not been considered, and ask them to help check the limits after the meeting.
B) Defend the design firmly; conceding in front of the team would undermine confidence in architecture.
C) Say nothing and change the design quietly afterwards without following up with the developer.
D) Refer the question to the senior technical architect without engaging with it personally.

**Most effective: A. Least effective: B.**

**Explanation:** Option A models everything good at once: openness to feedback (a named behaviour in the Community collaboration skill), honesty about a gap, and turning a challenge into collaboration by involving the expert who spotted it. It also keeps the correction visible, so the team learns the design will be checked. Option B is the least effective: defending a design against evidence not yet examined puts ego above accuracy, damages trust with developers, and risks shipping a genuine defect. Option C fixes the design but wastes the relationship - the developer never learns their feedback landed, which quietly teaches people to stop offering feedback. Option D is not terrible - involving a senior architect on queue limits could be sensible later - but as a first response it is needlessly passive: this is exactly the kind of technical detail an associate can chase down with the developer directly, keeping the senior architect for things that need their authority. Working closely with developers when designing appropriate solutions is literally in the role description; A is that sentence in action.

**Question 2 (easy) - Asked something the candidate does not know**

In a show-and-tell, a non-technical stakeholder asks the candidate: "Is the new design compliant with our data protection obligations?" They genuinely do not know. What is the MOST effective and the LEAST effective response?

A) Give a confident "yes" - the design team probably checked, and it can be verified later.
B) Say a guess would not be appropriate on something that important, commit to finding out with the team's data protection contact, and give a date for the answer.
C) Answer with a long, hedged technical explanation of the data flows so the stakeholder draws their own conclusion.
D) Say "that's not my area" and move to the next question.

**Most effective: B. Least effective: A.**

**Explanation:** Option B is honest, keeps the stakeholder's trust, routes the question to the right expertise, and - crucially - closes the loop with a commitment and a date. Saying "I don't know, and here is exactly how I will find out" is a strength, not a weakness, at every career level, and especially at associate level where no one expects a candidate to know everything. Option A is the least effective by a wide margin: a confident wrong answer about legal compliance could propagate into decisions, and being caught guessing destroys credibility that takes years to build. Transparency is a core public sector value precisely because of moments like this. Option C dodges the question while appearing to answer it - non-technical stakeholders should not have to decode data flows to get a yes or no; that is a failure of architecture communication. Option D is honest but unhelpful: it leaves the stakeholder stranded when a small effort would connect them to the answer. The gap between B and D is the gap between collaboration and mere accuracy.

**Question 3 (moderate) - Deadline pressure versus governance**

A team wants to start building next week to hit a promised milestone. The design includes a novel database technology, and the organisation's standards require an architectural decision record and review before adopting novel technology. The delivery manager says: "Can't we just start and do the paperwork later?" Rank the following from most to least effective:

A) Agree to start building and complete the decision record afterwards.
B) Explain the requirement, propose writing the decision record immediately with the team's input, and ask a senior architect whether a fast-track review is possible to protect the milestone.
C) Refuse to help further until the process is followed, and report the delivery manager's suggestion to the review board.
D) Suggest the team start building the parts of the service that do not depend on the novel database while the decision record and review proceed in parallel.

**Most to least effective: B, D, A, C.**

**Explanation:** B leads because it takes governance seriously while actively working the problem: it explains why the rule exists, starts the required work immediately, and looks for a legitimate way to protect the milestone - respect for assurance plus practical help, exactly what "understand architectural governance and assurance relevant to your work" looks like when deadlines bite. D is a close second and pairs beautifully with B: decoupling the work that does not depend on the pending decision keeps delivery moving without pre-empting the review. (In a real answer a candidate might do both - but ranked separately, B's engagement with the governance requirement itself edges ahead.) A is weak: "paperwork later" inverts the point of a decision record, which exists to shape the decision, not to describe it after the fact; starting to build creates momentum that makes the review a rubber stamp. Yet A at least keeps delivery honest about eventually documenting. C is the least effective despite technically defending the rules: it turns a colleague's ordinary deadline anxiety into a conflict, offers no path forward, and escalates punitively before attempting collaboration. Governance held rigidly without help breeds exactly the resentment that leads teams to bypass governance.

**Question 4 (moderate) - A mistake found in one's own published work**

Two weeks ago the candidate produced a diagram for a design document that has since been circulated to stakeholders. Today they notice the diagram shows citizen data flowing to an analytics service - which is wrong and makes the design look less privacy-safe than it is. What is the MOST effective and the LEAST effective response?

A) Correct the diagram in the master document quietly; the old copies will fade away naturally.
B) Tell the senior architect immediately, correct the diagram, and send a short note to everyone who received the document explaining the error and the correction.
C) Wait to see whether anyone notices before deciding what to do.
D) Correct the diagram and mention it at the next team meeting in three weeks.

**Most effective: B. Least effective: C.**

**Explanation:** B does the three things that matter: it informs the supervisor (who may know of decisions already influenced by the error), fixes the source, and corrects the record with everyone who might act on the wrong version. The error here overstates a privacy risk, which might seem harmless - but stakeholders could be escalating concerns or redesigning processes based on it right now, and an architecture function's credibility rests on the accuracy of its representations. Owning errors quickly and openly is transparency in action, and doing it well as an associate builds more trust than never erring at all. Option C is the least effective: it converts an innocent mistake into concealment, and every day of silence increases both the potential damage and the awkwardness of the eventual correction. Option A fixes the artefact but not the understanding of the people who saw it - the diagram's whole purpose. Option D has the right instincts but the wrong urgency: three weeks is a long time for stakeholders to keep believing citizen data flows somewhere it does not.

**Question 5 (moderate) - Two seniors, two instructions**

A supervising technical architect asks the candidate to document a design using the team's standard template. Later the same day, a principal architect from another programme tells them to use their programme's new format instead, "because everything is moving to it soon". The two formats are incompatible and the document is due Friday. What is the MOST effective and the LEAST effective response?

A) Use the principal architect's format - they are more senior, so their instruction wins.
B) Use the supervising architect's template without mentioning the conflict to anyone.
C) Tell both architects about the conflicting instructions, and ask the supervising architect how they would like to resolve it.
D) Produce the document in both formats to satisfy everyone.

**Most effective: C. Least effective: D.**

**Explanation:** C surfaces the conflict to the people who can actually resolve it, and routes the resolution through the supervising architect - the person accountable for the candidate's work at associate level. It is fast, honest, and keeps both relationships intact; quite possibly the two architects need one conversation with each other that this question will trigger. Option A confuses seniority with authority: the principal architect may be senior, but the task, deadline, and supervision sit with the candidate's own architect, and silently switching formats leaves them surprised on Friday. Option B is closer to defensible - following the line instruction is reasonable - but hiding a known conflict stores up friction and denies the supervisor information they would want. Option D is the least effective despite feeling diplomatic: it doubles the work during a deadline week, resolves nothing (the formats still conflict for every future document), and teaches both seniors that contradicting each other is cost-free because the associate will absorb it. Team dynamics improve when conflicts are surfaced kindly, not absorbed silently.

**Question 6 (challenging) - Accessibility versus deadline**

During delivery, developers discover that the mapping component in the candidate's design does not work with screen readers. Replacing it means slipping the public launch by three weeks; keeping it means launching with a service some users cannot access. The product manager asks for their architectural view. Rank the following from most to least effective:

A) Recommend launching on time and fixing accessibility in a post-launch update.
B) Recommend assessing an accessible alternative immediately, and support the case to leadership for a delay if no quick fix exists, on the grounds that the service must work for everyone.
C) Say the decision is entirely the product manager's and offer no architectural view.
D) Recommend delaying launch indefinitely until a full accessibility audit of every component is complete.

**Most to least effective: B, D, A, C.**

**Explanation:** B is the strongest because it treats accessibility as the non-negotiable it is in UK public services - services must be accessible to everyone, including people using assistive technology - while still engaging practically: assess alternatives first, then support a proportionate delay if needed. It also positions the candidate correctly: giving a clear architectural view and supporting the case, while the launch decision itself sits with the accountable people. D is second, surprisingly perhaps: its instinct (do not launch inaccessible services) is right, but "indefinitely" and "every component" are disproportionate - it swaps a managed three-week slip for an open-ended one, which is unmanaged impact in the other direction. A is weak: "accessible later" means launching a service that excludes some users on day one, and post-launch fixes have a well-known habit of slipping once the launch pressure disappears. It effectively asks the least-served users to wait longest. C is the least effective: when a product manager explicitly asks for an architectural view, offering none is an abdication, not neutrality. This role exists to inform exactly this kind of decision; declining to help is the one choice with no redeeming feature.

**Question 7 (challenging) - A pattern worth raising**

While gathering information for a design, the candidate notices their team is about to build a document-upload capability that two other teams in the organisation have already built separately this year. The organisation's strategy explicitly aims to reduce duplication. Their team's plan is already estimated and scheduled. What is the MOST effective and the LEAST effective response?

A) Say nothing - the plan is already estimated, and raising it now would be disruptive.
B) Raise it with a senior architect and the team: share what the other teams built, and suggest a quick conversation with them before the build starts to see whether reuse is realistic.
C) Unilaterally contact the other teams and announce the team will adopt their component.
D) Mention it informally to a developer friend and leave it at that.

**Most effective: B. Least effective: C.**

**Explanation:** This scenario tests Architect for the whole context: identifying relevant information - here, the strategy and what other teams have built - and letting it inform the work. B does this proportionately: it surfaces the duplication, connects it to the strategic aim, and proposes a small, timeboxed check (one conversation) rather than derailing the schedule. If reuse turns out impractical, the team proceeds with confidence and a documented reason - excellent material for a decision record. Option C is the least effective: an associate announcing an architectural commitment unilaterally bypasses both the team's planning and their own supervision, and may promise something the other teams' components cannot deliver. Good instinct, catastrophic execution. Option A privileges schedule comfort over strategy and users' money; "already estimated" is sunk-cost reasoning, and the cheapest moment to avoid duplication is before the build starts - exactly now. Option D discharges the thought without discharging the responsibility: a corridor mention to a friend is not how relevant strategic information reaches the people planning the work.

**Question 8 (challenging) - Feedback on a struggling teammate's work**

A senior architect asks the candidate to review a design section written by another associate, who they know is having a difficult time personally. The section has real problems: two components are missing and an integration is described incorrectly. Their review comments will be visible to the whole team. What is the MOST effective and the LEAST effective response?

A) Soften the review so the errors sound like minor suggestions, to protect the colleague.
B) Write accurate, specific, respectful comments on the work; separately and privately, offer the colleague help working through the fixes.
C) List every flaw bluntly and comprehensively in the public comments to demonstrate thoroughness.
D) Ask a senior architect to review it instead to avoid the awkwardness.

**Most effective: B. Least effective: A.**

**Explanation:** B separates the two things that must never be traded against each other: the accuracy of the technical record and the dignity of a colleague. The design will be built from this document - missing components and a wrong integration must be recorded plainly, because a soft review that lets defects through harms users, the team, and eventually the colleague themselves when the errors surface later and larger. Meanwhile the private offer of help addresses the human situation with kindness, and models the feedback culture the Community collaboration skill describes. Option A is the least effective precisely because it feels kind: disguising substantive defects as "minor suggestions" corrupts the review record, and reviews only protect quality when they are honest. Kindness belongs in the tone and the private support, not in the accuracy. Option C is honest but careless of tone and framing - "demonstrating thoroughness" makes the review about the reviewer, and public bluntness toward a struggling colleague damages the team dynamics that make future feedback possible. Option D dodges a task the candidate was asked to do and is capable of doing; reviewing peers' work respectfully is a skill to build, not avoid - though asking a senior architect for advice on handling it would be perfectly sensible alongside B.

**Question 9 (challenging) - The strategically awkward shortcut**

Near the end of a delivery phase, the team proposes hard-coding a connection to a specific supplier's notification service "just for now", although the organisation's roadmap says all services will move to a shared, supplier-neutral notification platform within a year. The hard-coding saves four days now but will make the future migration slower. The candidate's senior architect is on leave for two days, and the team wants a steer today. What is the MOST effective response?

A) Approve the shortcut personally; four days is four days.
B) Block the shortcut personally; the roadmap forbids it.
C) Help the team compare the options concretely today - the four days saved now against the estimated future migration cost - propose a middle path such as isolating the connection behind an interface, and confirm the steer with the senior architect when they return in two days.
D) Tell the team no steer is possible until the senior architect returns.

**Most effective: C.**

**Explanation:** This is a judgement-under-supervision question, and C threads the needle. It takes real initiative: it reframes "shortcut versus rules" as a comparison of costs over time, which is what the decision actually is, and it offers a well-known pattern (isolate the dependency behind an interface) that captures most of the four days' saving while protecting most of the future migration - a textbook example of a design with managed risk, impact, and complexity. It also respects the supervision structure honestly: the team gets a usable steer today, clearly labelled as provisional, and the accountable architect confirms it within two days. Options A and B share the same flaw in opposite directions: both exercise an authority an associate does not hold alone, and B additionally misreads the roadmap - a direction of travel is a planning input, not a prohibition, and treating strategy documents as absolute law is the strategic equivalent of the verbal reasoning must/should error. Option D is safe but weak: two days of a blocked team is a real cost, and "wait for my boss" when a candidate is capable of constructing a provisional, reversible recommendation underuses the role. The strongest associates are distinguishable exactly here: initiative that stays inside honest limits.

**Question 10 (challenging) - Explaining a decision the candidate disagrees with**

The architecture review board has decided that the candidate's team must use the organisation's shared identity platform rather than the simpler standalone login their team preferred and the candidate helped design. They think the board weighed the trade-offs wrongly, but the decision is made and properly recorded, and it is now their job to explain it at the team's planning session. What is the MOST effective and the LEAST effective response?

A) Explain the board's reasoning fairly and fully, help the team plan the work, and note that delivery evidence can be gathered to feed back if the decision causes real problems.
B) Tell the team of the disagreement with the decision and encourage them to keep raising objections until it is reversed.
C) Present the decision neutrally but privately reassure the developers that "the board doesn't understand our service".
D) Explain the decision accurately, while being honest that trade-offs were weighed and that a feedback route exists if delivery surfaces real problems.

**Most effective: A. Least effective: C.**

**Explanation:** A and D are close - both are honest and constructive - but A is the strongest because it adds forward motion: it helps the team plan and establishes the legitimate feedback channel (delivery evidence) through which properly made decisions get revisited. This is what respecting architectural governance looks like when a candidate personally disagrees: input was given, the process weighed it, and now the outcome is represented fairly while the honest route for evidence stays open. D is nearly as good and entirely defensible; ranked as "most effective", A's practical planning support gives it the edge. Option B undermines a properly made decision and burns the team's energy on relitigating rather than delivering; persistent objection without new evidence is noise, and the time for advocacy was before the decision. Option C is the least effective and worth understanding deeply: its public half looks professional, but its private half quietly poisons the team's relationship with governance, teaches developers that processes are to be humoured rather than engaged, and casts the candidate as someone who says different things in different rooms. Disagreement handled with integrity builds credibility; corridor disloyalty spends it.

### Notes for the assessor

- **Score against values and the associate-level pattern.** UK public sector judgement questions consistently reward user needs, transparency, collaboration, accessibility, inclusion, and proportionate respect for process. The strongest answers at this level typically combine three moves: engaging constructively, being honest about limits and mistakes, and keeping the supervising architect informed at the right moments — useful shorthand when scoring an answer that falls between the keyed options.
- **Compare options in pairs when scoring a borderline answer.** Most options differ on one dimension - honesty, initiative, respect for people, respect for process - and pairwise comparison helps explain, in debrief, why one option outranked another.
- **Timing.** This section is rarely tightly timed; let the candidate read every option fully rather than rushing them, since the difference between the best and second-best choice often lives in a single clause, such as "without following up" or "on your own authority".
- **Judge the candidate's professional self, not a confession.** The assessment measures a candidate's judgement of what is effective, not what they actually did once under pressure — and an implausibly heroic-sounding answer is often itself a sign of overclaiming, worth a gentle follow-up question in debrief.

### Common candidate pitfalls

- **Choosing the idealistic option over the effective one.** "Delay everything until perfect" sounds principled but often scores poorly because it ignores proportionality (see Question 6, option D).
- **Selecting passive options.** Waiting to see if anyone notices, referring everything upward, saying nothing to avoid disruption - options that delay action, pass the problem on, or ignore the root issue are consistently among the weakest (Questions 1, 4, 7, 9).
- **Confusing escalation with abdication.** Involving a senior architect is often right at associate level - but as part of an answer in which the candidate also engages, not instead of engaging. "Tell my boss and do nothing" rarely scores as the most effective option.
- **Undervaluing the follow-up.** Many second-best options do the main action but skip closing the loop - telling the person who gave feedback, informing recipients of a correction, confirming a provisional steer. The loop-closing clause is frequently what separates the top-scoring option.
- **Ignoring the organisational culture.** Public sector scenarios reward collaboration, openness, and user focus over individual heroics and quiet workarounds. An option that involves handling something significant alone and silently is usually not the keyed most-effective answer.
- **Punishing people to defend process.** Options that enforce rules by threatening or reporting colleagues before attempting a collaborative fix (Question 3, option C) test whether the candidate can hold standards and relationships at the same time.

## Conclusion

You have now worked through this document with the candidate: what psychometric assessments are and why employers use them; how cognitive, numeric, verbal, and situational judgement assessments each map onto the real skills of the role; and more than fifty practice questions built from the genuine materials of an associate technical architect's working week - designs, decision records, cost tables, capacity figures, policies, strategies, review feedback, and the everyday dilemmas of working with developers, senior architects, and stakeholders.

Across the four sections, a few themes are worth watching for when you score and debrief. The elimination logic from the cognitive section is the same logic that makes a decision record persuasive. The percentage, ratio, and headroom arithmetic from the numeric section is the arithmetic behind every hosting comparison and capacity review the role will contribute to. The wording-first discipline of the verbal section - must versus should, only, unless, until, Cannot Say - is the discipline of reading policies and standards accurately. And the judgement patterns from the situational section - engage constructively, be honest about limits, close the loop, keep a supervisor informed - are the habits that build a trusted architect at this level.

Because this is an associate-level assessment, keep the register of your debrief encouraging as well as accurate: this level measures potential and developing skill, not mastery, and a candidate early in their career should leave the session with a clear, honest sense of where they are strong and where a little development will pay off, not a verdict. Score consistently against the worked answers above, note where reasoning was sound even if the final answer was not, and keep your notes and the candidate's raw answers on file, administered the same way for every candidate for this role level.

Remember the advisory above: this is not a validated instrument, and no score from it should be the sole basis for a hiring, promotion, pay, performance, or disciplinary decision. Weigh it alongside a structured interview, any evidence of the candidate's actual work, and any other evidence your process gathers, and consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues before relying on it.
