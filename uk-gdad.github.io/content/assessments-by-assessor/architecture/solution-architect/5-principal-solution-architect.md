# Solution Architect (Principal Solution Architect) - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace psychometric assessment to a candidate for principal solution architect. It gives you structured, job-specific material to present to the candidate — cognitive, numeric reasoning, verbal reasoning, and situational judgement items — each with a worked answer and explanation that forms your answer key. Hold the answer key back from the candidate until the session is complete and you are ready to score and debrief; showing it in advance defeats the exercise.

Psychometric assessments are structured, standardised exercises that measure the mental processes and judgement a role genuinely requires. For a principal solution architect, that means far more than abstract puzzles. Well-designed assessments for this level probe how a candidate reasons about interdependent systems, how they interpret programme budgets and supplier cost models, how precisely they read policy and contractual language, and how they exercise judgement in politically sensitive, high-risk situations. Employers in the UK public sector use assessments of this kind because they are evidence-based predictors of performance, and because they help make selection fairer and more consistent — values that align closely with the Government Digital and Data profession's commitment to openness and inclusion.

This document is organised into four main assessment sections, each of which follows the same structure:

- **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts a principal solution architect handles every day: architecture decision records, dependency maps, governance schedules, and risk registers.
- **Workplace job-specific numeric reasoning assessment** — programme budgets, supplier cost comparisons, capacity planning figures, and performance metrics, with the arithmetic worked through in full.
- **Workplace job-specific verbal reasoning assessment** — dense, role-relevant passages drawn from standards, policies, contracts, and stakeholder correspondence, followed by True / False / Cannot Say and comprehension questions.
- **Workplace job-specific situational judgement assessment** — realistic dilemmas involving senior stakeholders, junior architects, technology partners, and governance boards, with detailed discussion of why each response option is stronger or weaker.

Each section explains what the assessment measures, maps it explicitly to the skills in this role level's profile, provides substantial practice questions with worked explanations, and closes with notes for you on administering that section and on the pitfalls candidates commonly fall into.

How should you administer this document? Present the same items, in the same order, under the same time limit, to every candidate for this role level — consistency is what makes any comparison across candidates defensible. Before the session, tell the candidate roughly how long each section will take and what format to expect (multiple choice, True/False/Cannot Say, most-effective/least-effective ranking), but do not share the worked answers or explanations in advance. Once the candidate has completed all four sections, use the worked answers to score their responses, and use the explanations to debrief them afterwards on what a strong answer looked like and why.

Treat this document as one input among several. A single timed exercise is a narrow window onto a candidate's reasoning, and it should sit alongside a structured interview, a review of their portfolio or track record, and any other evidence your process gathers — never as the sole basis for a decision. See the advisory below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes the role demands, using practical scenarios and data rather than abstract puzzles. Unlike a generic intelligence test, every question mimics the everyday tasks and artefacts of the job: for a principal solution architect, that means architecture decision records, dependency diagrams, governance board papers, technology roadmaps, standards compliance matrices, and programme risk registers.

These assessments are typically delivered online, timed at around 15 to 30 minutes, and objectively scored against a benchmark or norm group. Some platforms use adaptive testing, adjusting question difficulty based on the candidate's previous answers, and most provide short, ungraded practice questions first so the interface holds no surprises. Employers usually receive a breakdown of speed versus accuracy rather than a single score, so a candidate who works carefully and steadily should not be marked down against one who rushes.

For a principal solution architect, the cognitive assessment matters because the role is fundamentally about structured reasoning under constraint. The role holder makes and guides architectural design decisions characterised by high levels of risk and complexity, leads the framing of problems so complex or complicated that a solution cannot be created until the problem itself has been properly shaped, checks the coherence of technical designs produced by teams of more junior architects, spots the contradiction buried in a dependency map, and decides which of several competing programme issues to address first. A well-designed cognitive assessment samples precisely these processes, so use it to see how the candidate reasons, not only what they conclude.

### What it measures for this role level

The assessment dimensions map directly to skills named in the role profile:

- **Logical deduction and inference** maps to the skill of **making architectural decisions**: reasoning from constraints, standards, and dependencies to a sound conclusion, especially where risk and complexity are high, and where the role must identify and address architectural risks across the organisation or wider government.
- **Pattern recognition** maps to **architect for the whole context**: assessing how trends in society and industry practices might impact the organisation, recognising recurring structures across programmes, and anticipating changes to policy so the architecture builds resilience.
- **Error checking** maps to **technical design throughout the life cycle**: reviewing technical designs characterised by high risk, impact, and complexity, and using feedback to optimise and refine standards — which requires spotting inconsistencies between a design document, its diagrams, and the standards it claims to meet.
- **Prioritisation and problem solving** map to **problem definition and shaping** and to the role's leadership duties: leading multiple architecture projects or programmes, deciding where attention and a team's effort will do the most good, and helping others challenge requirements and assumptions.
- **Rule application** maps to the duty to **comply with standards and governance**, and to leading and evolving architectural governance and assurance.

### Practice questions

Present these to the candidate under light time pressure — around two to three minutes per question. The worked answer and explanation below each item form your answer key; read them carefully so you can debrief the reasoning as well as the result, since the reasoning path is the real content of a good debrief, even where the candidate answered correctly.

**Question 1 (easy) — Logical deduction from governance rules**

An organisation's architecture governance framework contains these rules:

- Rule 1: Any solution processing citizen personal data must complete a Data Protection Impact Assessment (DPIA) before design assurance.
- Rule 2: Any solution with projected annual running costs above £1 million must be reviewed by the Investment Board before design assurance.
- Rule 3: Design assurance must be completed before any solution enters public beta.

A programme within the candidate's portfolio proposes a citizen-facing eligibility checker with projected annual running costs of £1.4 million. It has completed its DPIA and its Investment Board review, but design assurance is scheduled for next month. The delivery team wants to enter public beta this week.

Which statement is correct?

A) The solution may enter public beta because both the DPIA and the Investment Board review are complete.
B) The solution may not enter public beta because design assurance has not been completed.
C) The solution may enter public beta if the DPIA is re-approved.
D) The solution may not enter public beta because its running costs exceed £1 million.

**Correct answer: B.**

**Explanation:** Rule 3 is the operative rule: design assurance must precede public beta, and design assurance has not happened. Option A is tempting because two of the three gates are complete, but completing prerequisites for design assurance is not the same as completing design assurance itself. Option D misreads Rule 2 — cost triggers an Investment Board review, which has been done; cost does not itself block beta. Option C invents a rule that does not exist. In governance reasoning, the correct approach is to apply only the rules given, in the order their dependencies require — exactly what is expected when representing architectural governance as part of wider organisational governance.

**Question 2 (easy) — Error checking a decision record**

The candidate is reviewing an architecture decision record (ADR) drafted by one of their solution architects. It contains these statements:

1. "Decision: We will adopt the department's approved API gateway for all external integrations."
2. "Context: Three of our five external integrations currently bypass the gateway."
3. "Consequence: After implementation, all five external integrations will route through the gateway, requiring migration of the two integrations that currently bypass it."

Which inconsistency should be flagged?

A) Statement 1 contradicts statement 2.
B) Statement 3 says two integrations need migration, but statement 2 says three integrations currently bypass the gateway.
C) Statement 2 contradicts statement 3 about the total number of integrations.
D) There is no inconsistency.

**Correct answer: B.**

**Explanation:** The context says three of five integrations bypass the gateway, so three — not two — need migration. The totals (five integrations) are consistent between statements 2 and 3, so C is wrong; and a decision to adopt the gateway does not contradict a context describing current non-compliance, so A is wrong. This is the classic error-checking skill of a design review: cross-checking every quantitative claim in one part of a document against its counterpart elsewhere. Small numerical slips in ADRs propagate into migration plans, cost estimates, and assurance evidence, so principals are expected to catch them.

**Question 3 (moderate) — Dependency sequencing**

A programme has six workstreams with these dependencies:

- Identity platform (A) must complete before Case management (B) and Citizen portal (C).
- Case management (B) must complete before Reporting (D).
- Citizen portal (C) must complete before Reporting (D) and Notifications (E).
- Legacy decommissioning (F) can only start after Reporting (D) and Notifications (E) are both complete.

If each workstream takes exactly one quarter and unlimited workstreams can run in parallel, what is the minimum number of quarters to complete all six?

A) 3
B) 4
C) 5
D) 6

**Correct answer: B.**

**Explanation:** Trace the longest dependency chain (the critical path). Quarter 1: A (nothing else can start, since B, C depend on A, and D, E, F depend on those). Quarter 2: B and C in parallel. Quarter 3: D (needs B and C, both now done) and E (needs C) in parallel. Quarter 4: F (needs D and E). Four quarters. The critical path is A → B/C → D/E → F, four steps long. Option A ignores that F must wait for two predecessors that themselves wait for A's successors; option C or D would follow if a candidate serialised work that can run in parallel. Reading dependency structures accurately is the core of leading multiple architecture programmes: the critical path, not the workstream count, determines the earliest finish.

**Question 4 (moderate) — Pattern recognition across incident data**

Reviewing the last twelve months of major incidents across a solution portfolio, the candidate observes:

- January: payment service outage — root cause: expired certificate.
- March: document service outage — root cause: expired certificate.
- May: identity service degradation — root cause: unpatched middleware.
- July: payment service outage — root cause: expired certificate.
- September: reporting service outage — root cause: unpatched middleware.
- November: notification service outage — root cause: expired certificate.

Which architectural response addresses the dominant pattern most directly?

A) Mandate quarterly penetration testing across all services.
B) Introduce automated certificate lifecycle management and expiry monitoring as a cross-cutting platform capability.
C) Migrate the payment service to a new supplier, since it failed twice.
D) Require every service team to maintain its own incident runbook.

**Correct answer: B.**

**Explanation:** Four of six incidents share one root cause: certificate expiry, occurring across four different services. The pattern is systemic, not service-specific, so the architectural response should be a cross-cutting capability rather than a per-service fix. Option C treats a symptom in one service while the cause recurs portfolio-wide. Options A and D are worthy practices but do not address the identified pattern — penetration testing targets security vulnerabilities, and runbooks improve response rather than prevention. This is pattern recognition in service of identifying and addressing architectural risks across the organisation: the principal's job is to lift recurring local failures into a single systemic intervention.

**Question 5 (moderate) — Prioritisation under constraint**

It is Monday morning. Four items compete for the candidate's attention:

1. A junior architect needs a decision today on an integration pattern, or their team is blocked for the sprint.
2. The design authority board meets Thursday and the candidate has not yet reviewed the two submissions they must chair.
3. A director has asked for "a quick view" on a supplier's new roadmap announcement by the end of the week.
4. A programme risk the candidate owns — a legacy contract expiring in nine months — needs its mitigation plan refreshed this month.

The candidate has meetings covering most of today. What is the most defensible ordering of their available effort this week?

A) 2, 3, 4, 1
B) 1, 2, 3, 4
C) 4, 1, 2, 3
D) 3, 1, 2, 4

**Correct answer: B.**

**Explanation:** Item 1 has the nearest hard deadline (today) and blocks other people's work — unblocking a team costs perhaps an hour and prevents a sprint-sized loss; it also serves the duty to lead and support more junior architects. Item 2 is next: Thursday is a fixed governance commitment the role holder chairs, and arriving unprepared undermines the assurance function they lead. Item 3 has an end-of-week deadline and can follow. Item 4 is important but has a month of runway; scheduling it deliberately later in the week or next week is sound risk management, not neglect. The reasoning pattern is: deadline proximity multiplied by consequence of delay multiplied by number of people blocked. Options placing item 3 or 4 first confuse seniority of the requester or size of the risk with urgency of the action.

**Question 6 (moderate) — Logical deduction from standards compliance**

An organisation's technology standards state:

- All new services must be hosted on one of the two approved cloud platforms, unless a formal exemption is granted.
- Formal exemptions are granted only where a statutory or security requirement cannot be met on the approved platforms.
- Services holding data classified SECRET cannot be hosted on either approved platform.

A team proposes a new service that will hold SECRET-classified data. Which conclusion follows logically?

A) The service cannot be built.
B) The service must be granted a formal exemption, because a security requirement cannot be met on the approved platforms.
C) The service qualifies for consideration of a formal exemption, since its security requirement cannot be met on the approved platforms.
D) The standards are contradictory and must be rewritten.

**Correct answer: C.**

**Explanation:** Follow the rules precisely. SECRET data cannot be hosted on the approved platforms, so the security requirement genuinely cannot be met there — which is exactly the condition under which exemptions "are granted only". Note the logical subtlety: the standard says exemptions are granted *only where* the condition holds; it does not say exemptions are *always* granted where the condition holds. The condition is necessary, not sufficient — so B overstates (it asserts the exemption must be granted), while C states precisely what follows: the service meets the necessary condition to be considered. A is too strong; D is wrong because the rules are consistent. Distinguishing necessary from sufficient conditions is a recurring trap in governance language, and principals who lead and evolve governance frameworks must read them exactly.

**Question 7 (moderate) — Error checking a capacity table**

A solution design submitted for the candidate's review includes this table:

| Environment | Instances | vCPU per instance | Total vCPU |
|---|---|---|---|
| Development | 2 | 4 | 8 |
| Test | 4 | 4 | 16 |
| Staging | 4 | 8 | 24 |
| Production | 8 | 8 | 64 |
| **Total** | **18** | — | **120** |

Which cells are wrong?

A) Staging total vCPU only.
B) Staging total vCPU and the grand total vCPU.
C) Production total vCPU and the grand total instances.
D) Nothing is wrong.

**Correct answer: B.**

**Explanation:** Check each row: Development 2 × 4 = 8 (correct). Test 4 × 4 = 16 (correct). Staging 4 × 8 = 32, not 24 (wrong). Production 8 × 8 = 64 (correct). Instances: 2 + 4 + 4 + 8 = 18 (correct). Grand total vCPU as stated: 8 + 16 + 24 + 64 = 112, but the table says 120 — and with the corrected staging figure it should be 8 + 16 + 32 + 64 = 120. So the grand total is arithmetically consistent with the *corrected* staging figure but inconsistent with the stated one: two cells conflict and at least the staging cell is definitely wrong given the row inputs. The safest finding to report is B — the staging row is internally wrong, and the totals row does not sum the stated column. This mirrors real design review: totals that "look right" can conceal compensating errors, so a careful candidate verifies each row against its own inputs, then the column against its rows.

**Question 8 (moderate) — Problem definition and hidden assumptions**

A policy team asks the candidate to "replace the case management system because it cannot handle the new legislation coming into force next year." Before commissioning a solution, they probe the problem. Which single question most directly tests the *assumption* embedded in the request?

A) "Which supplier should we procure the replacement from?"
B) "What specifically does the new legislation require that the current system cannot do, and have we confirmed it cannot be configured or extended to do it?"
C) "How much budget is available for the replacement?"
D) "When does the new legislation come into force?"

**Correct answer: B.**

**Explanation:** The request embeds two assumptions: that the legislation creates requirements the current system cannot meet, and that replacement (rather than extension, configuration, or process change) is the only remedy. Option B tests both at once and re-frames the conversation from a predetermined solution ("replace the system") to a defined problem ("meet these specific legislative requirements"). Options A and C accept the replacement assumption and jump to implementation; option D gathers useful context but challenges nothing. This is the essence of the skill of problem definition and shaping: leading the framing of a problem characterised by complexity and risk, and helping others challenge requirements and assumptions before money is committed.

**Question 9 (hard) — Deduction across multiple constraints**

The candidate is selecting a target architecture for a shared document service. The constraints are:

- Constraint 1: If the service uses the legacy data centre, it cannot meet the new resilience standard.
- Constraint 2: The service must meet the new resilience standard.
- Constraint 3: If the service uses Cloud Platform X, then it must use the department's identity broker.
- Constraint 4: The identity broker does not support the legacy authentication protocol.
- Constraint 5: Two consuming systems currently require the legacy authentication protocol, and they must be supported at go-live.

Which conclusion follows necessarily?

A) The service must use Cloud Platform X.
B) If the service uses Cloud Platform X, the two consuming systems cannot be supported at go-live without an additional mechanism outside the identity broker.
C) The two consuming systems must be modernised before the service can be built.
D) The service must use the legacy data centre.

**Correct answer: B.**

**Explanation:** Work through the chain. Constraints 1 and 2 rule out the legacy data centre (using it prevents meeting a mandatory standard), so D is impossible — but that does not force Platform X specifically, since other compliant options may exist, so A overreaches. If Platform X is chosen, constraint 3 mandates the identity broker; constraint 4 says the broker cannot serve the legacy protocol; constraint 5 says that protocol must be supported at go-live. Therefore, on Platform X, the legacy-protocol systems need some mechanism beyond the broker — an adapter, a federation gateway, or similar. That is exactly what B states, and only B. C converts one possible mitigation into a necessity, which the constraints do not require. High-complexity architectural decisions are usually exactly this: not "which answer is right" but "which consequences follow necessarily from each option" — the discipline behind making decisions characterised by high levels of risk and complexity.

**Question 10 (hard) — Pattern recognition in technology trends**

Over three years, the candidate observes these developments relevant to their organisation:

- Year 1: A major cloud supplier announces end-of-support for the database version underpinning two of the organisation's critical services.
- Year 2: Central government publishes strengthened guidance on exit planning and avoiding supplier lock-in.
- Year 2: The organisation's largest supplier acquires the niche vendor providing its case management product.
- Year 3: The same supplier announces that the case management product will be folded into its proprietary platform suite.

Which strategic architectural posture do these signals, taken together, most strongly support?

A) Accelerate adoption of the supplier's proprietary platform suite to benefit from integration.
B) Establish portability and exit provisions as first-class architectural requirements: open standards for data and interfaces, documented exit plans, and contractual exit rights across the portfolio.
C) Freeze all procurement until the market stabilises.
D) Migrate everything to open-source software immediately.

**Correct answer: B.**

**Explanation:** The pattern across all four signals is concentration of dependency and erosion of choice: forced upgrades, consolidation of vendors, and absorption of niche products into proprietary suites — precisely the trend the strengthened government guidance anticipates. The proportionate architectural response is to make portability a standing requirement, not an afterthought: open data standards, interface contracts owned by the organisation, and exit plans with teeth. Option A increases exposure to the identified risk. Option C is passive and unrealistic — legislation and service demand do not pause. Option D mistakes one tactic for a strategy and ignores cost, capability, and transition risk. This question exercises architect for the whole context: assessing how industry trends might impact the organisation and anticipating change so the architecture builds in resilience.

**Question 11 (hard) — Prioritising architectural risks**

An organisation-wide architecture risk register contains four open risks:

- Risk W: A single engineer holds all knowledge of a critical integration layer. Likelihood: high. Impact if realised: severe service outage lasting weeks. No mitigation in place.
- Risk X: A supplier contract for a medium-importance system expires in 18 months with no renewal decision. Likelihood: certain (the date will arrive). Impact: manageable with 12 months' notice.
- Risk Y: A new service's design deviates from the API standard. Likelihood: certain (it is already built). Impact: increased integration cost on future projects, no service risk.
- Risk Z: Emerging legislation may require data residency changes within two years. Likelihood: medium. Impact: major re-platforming if unaddressed.

Which risk should command the most urgent personal attention, and why?

A) Risk X, because its likelihood is certain.
B) Risk Y, because the deviation already exists.
C) Risk W, because high likelihood and severe impact with no mitigation gives it the largest unmitigated exposure and the shortest fuse.
D) Risk Z, because legislation always takes precedence.

**Correct answer: C.**

**Explanation:** Risk exposure is likelihood multiplied by impact, adjusted for time available to act and mitigation already in place. Risk W scores highest on every axis: high likelihood, severe impact, zero mitigation, and it could crystallise tomorrow — a single resignation or illness away. Risk X is certain but low-exposure: 18 months of runway against a 12-month need means the correct action is to schedule a decision, not to escalate today. Risk Y is a sunk deviation whose cost is real but bounded and future-facing; it belongs in governance follow-up. Risk Z is significant and deserves a watching brief with early options analysis — but its two-year horizon and medium likelihood place it behind W. Options A, B, and D each seize on a single attribute (certainty, existence, the word "legislation") rather than weighing exposure and urgency together, which is the discipline of managing risks and decisions in a transparent way.

**Question 12 (hard) — Error checking a migration sequence**

A migration plan for decommissioning a legacy platform lists these steps:

1. Build new integration layer.
2. Migrate consumer systems to new integration layer.
3. Decommission legacy platform.
4. Run parallel operation of legacy and new integration layers for one quarter.
5. Complete data reconciliation between platforms.

The plan states the steps will be executed "in the order listed". What is the critical sequencing error?

A) Step 5 should come first.
B) Steps 4 and 5 are listed after step 3, but parallel running and data reconciliation are only meaningful while the legacy platform still exists — they must precede decommissioning.
C) Step 1 should follow step 2.
D) There is no sequencing error; the order is defensible.

**Correct answer: B.**

**Explanation:** Parallel operation (step 4) requires both platforms to be running, and data reconciliation (step 5) requires both datasets to exist for comparison. Executing them after decommissioning (step 3) is logically impossible: the legacy side has been switched off. The correct order is 1, 2, 4, 5, 3 — build, migrate, run in parallel, reconcile, then decommission. Option C is backwards (consumers cannot migrate to a layer that does not exist), and option A puts reconciliation before there is anything to reconcile. Spotting impossible orderings before they reach a programme plan is exactly the review duty of a principal guiding technical designs throughout the life cycle — sequencing errors that survive review become outages and data loss in production.

**Question 13 (hard) — Problem solving with incomplete information**

Two departments each run their own grants administration system. A cross-government initiative asks the candidate to propose a shared service. Department A's system handles 40,000 cases a year with bespoke workflows; Department B's handles 250,000 simple, high-volume cases. Early workshops reveal that each department believes the shared service should be "their system, adopted by the other". The candidate has no mandate to impose a choice.

As the first architectural move, which is strongest?

A) Commission an independent evaluation to score both systems and declare a winner.
B) Define the shared problem first: jointly document the common capabilities, the genuinely divergent needs, and the outcomes both departments must achieve — before any discussion of which system, if either, survives.
C) Propose building a brand-new system to avoid favouring either department.
D) Recommend the higher-volume system, since it demonstrably scales.

**Correct answer: B.**

**Explanation:** The presented question — "whose system wins?" — is a solution framing, not a problem framing, and adopting it guarantees a loser and an adversarial dynamic. The strongest first move is to lead the framing of the problem: establish the shared outcomes, separate common capabilities from genuinely divergent needs (bespoke workflows versus high-volume simplicity may indicate two service tiers, not one winner), and only then evaluate options — which might include either system, a composite, or a new build. Option A entrenches the win/lose frame and invites the losing department to dispute the scoring. Options C and D each pre-select a solution before the problem is defined. This mirrors the skills of problem definition and shaping and of strategy design: connecting strategies across organisations starts by getting parties to agree on the problem, because agreement on problems is cheaper and more durable than agreement on solutions.

### Notes for the assessor

- **What a well-prepared candidate does well.** Strong candidates read governance and standards language for words like "only", "unless", "must", and "may" rather than skimming past them; most wrong answers in the deduction questions above come from converting "only if" into "if". This is worth listening for when the candidate explains their reasoning.
- **Timing.** Budget around two to three minutes per question overall; tell the candidate this before they start, so pacing decisions are theirs to make rather than a surprise.
- **Verification habits.** For table-checking questions (Questions 7 and 12), a strong candidate checks each row against its own inputs before checking totals — compensating errors hide in totals. This is worth noting in a debrief even where the candidate reached the right answer.
- **Calm, systematic working beats speed.** Because platforms typically report speed and accuracy separately, do not let apparent deliberateness count against a candidate whose answers are consistently correct; a candidate treating the session like a design review — prepared, deliberate, unrushed — is showing good practice, not slowness.

### Common candidate pitfalls

- **Answering from experience rather than the text.** Candidates with deep expertise are often tempted to import context the question does not contain. The assessment measures reasoning from the material given, not recall, so mark strictly against the stated rules and data.
- **Over-engineering the reasoning.** Senior candidates can see many considerations in every scenario. Each timed question has one operative rule or pattern; a candidate who finds it and moves on, rather than constructing the full trade-off analysis they would do at work, is using their time well — this is not a sign of superficial thinking.
- **Time-sink questions.** A candidate anchoring on one hard multi-stage question and starving the rest of the paper is a common pattern; if your platform allows flagging and returning, brief the candidate that this is available.
- **Speed-accuracy imbalance.** Because employers usually see speed and accuracy separately, a flurry of fast wrong answers reads worse than a steady, accurate pace — factor this into how you interpret a fast finisher's score.
- **Missing the question stem's exact ask.** "Which conclusion follows necessarily?" is different from "which option is most advisable?" — when debriefing an unexpected wrong answer, check first whether the candidate answered the question actually asked.


## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates how well a candidate analyses, interprets, and makes sound decisions using numerical data drawn from the real demands of the role. It is emphatically business mathematics, not abstract formulae: the inputs are the tables, budgets, capacity figures, and supplier cost models a principal solution architect already works with, and the operations are percentages, ratios, weighted comparisons, and cost-benefit estimation.

Typical characteristics: questions are built on realistic data — programme budgets, licensing tables, hosting cost projections, performance dashboards; most assessments allow or provide an on-screen calculator, because they prioritise interpretation over mental arithmetic; and there is a strict time limit, often around a minute to ninety seconds per question, which rewards quick, accurate extraction of the relevant figures from a busy table.

For a principal solution architect this assessment matters more than it might first appear. The role takes a leading part in the overall direction of business and digital capabilities, which means the financial consequences of architectural choices land on the role holder's desk: whole-life costs of build-versus-buy decisions, supplier bid comparisons under a contractual framework, capacity and licensing projections for a programme of solutions, and the benefit cases that persuade an investment board. An architect who cannot interrogate the numbers cannot challenge them — and challenging numbers is often where the best architectural decisions begin.

### What it measures for this role level

- **Cost modelling and supplier comparison** maps to the **commercial perspective** skill: identifying appropriate contractual frameworks and approaches, and identifying, evaluating and selecting appropriate suppliers — which in practice means normalising unlike pricing structures so they can be compared fairly.
- **Budget and resource arithmetic** maps to the duty to **work within business and technical constraints** and to understand external drivers such as financial constraints: reading programme budget tables, computing variances, and testing whether a proposed design fits its funding envelope.
- **Capacity and performance interpretation** maps to **technical design throughout the life cycle**: sizing infrastructure, projecting growth, and checking that a design's claimed capacity arithmetic is right.
- **Weighted decision arithmetic** maps to **making architectural decisions**: scoring options against weighted criteria transparently, so that decisions with high levels of risk and complexity can be defended in governance.
- **Trend projection** maps to **architect for the whole context** and **strategy design**: extrapolating demand, cost, or adoption trends to inform strategies and technology partner roadmaps.

### Practice questions

Let the candidate use a calculator freely — most platforms provide one. The skill being measured is choosing the right numbers and the right operations, not mental arithmetic, and every explanation below shows the arithmetic in full so you can check a candidate's working against it.

**Question 1 (easy) — Percentage of budget**

A programme's annual budget is £4.8 million. The architecture and design function accounts for 12.5% of it. How much is allocated to architecture and design?

A) £480,000
B) £600,000
C) £560,000
D) £625,000

**Correct answer: B.**

**Explanation:** 12.5% of £4,800,000 = 0.125 × 4,800,000 = £600,000. A quick sanity check: 12.5% is one-eighth, and 4,800,000 ÷ 8 = 600,000. Recognising convenient fraction equivalents (12.5% = 1/8, 25% = 1/4, 20% = 1/5) is one of the fastest legitimate shortcuts in timed numeric tests.

**Question 2 (easy) — Percentage change in running costs**

A legacy case management platform cost £1,250,000 to run last year. After migration to a cloud platform, this year's running cost is £950,000. What is the percentage reduction?

A) 24%
B) 30%
C) 25%
D) 20%

**Correct answer: A.**

**Explanation:** Reduction = 1,250,000 − 950,000 = £300,000. Percentage reduction = 300,000 ÷ 1,250,000 = 0.24 = 24%. The classic trap is dividing by the *new* figure: 300,000 ÷ 950,000 ≈ 31.6%, close to option B. Percentage change is always measured against the original (starting) value. When savings figures are presented to an investment board, this distinction is exactly the kind of thing a sharp finance director will check.

**Question 3 (moderate) — Comparing supplier licence models**

The candidate is evaluating two suppliers for an integration platform to serve 340 users.

- Supplier P: £42,000 annual platform fee, plus £180 per user per year.
- Supplier Q: no platform fee, £310 per user per year.

Which supplier is cheaper for 340 users, and by how much per year?

A) Supplier P, by £2,200
B) Supplier Q, by £2,200
C) Supplier P, by £3,200
D) They cost the same.

**Correct answer: A.**

**Explanation:** Supplier P: 42,000 + (180 × 340) = 42,000 + 61,200 = £103,200. Supplier Q: 310 × 340 = £105,400. Difference: 105,400 − 103,200 = £2,200 in favour of Supplier P. Worth noticing for real procurement work: the break-even point is where 42,000 + 180u = 310u, i.e. 42,000 = 130u, so u ≈ 323 users. Below 323 users Q is cheaper; above it, P is. Evaluating suppliers means finding not just today's answer but the crossover point at which the answer changes — because user counts move over a contract's life.

**Question 4 (moderate) — Whole-life cost over a contract term**

A proposed solution has these costs: £850,000 implementation in year 1; £320,000 running cost per year for each of years 1 to 5; and a £150,000 exit and data migration cost in year 5. What is the total whole-life cost over the five-year term?

A) £2,450,000
B) £2,600,000
C) £2,280,000
D) £1,750,000

**Correct answer: B.**

**Explanation:** Running costs: 320,000 × 5 = £1,600,000. Add implementation: 1,600,000 + 850,000 = £2,450,000. Add exit cost: 2,450,000 + 150,000 = £2,600,000. Option A is the result of forgetting the exit cost — a mistake with a real-world echo, since exit and transition costs are the most commonly omitted line in whole-life cost cases, and government guidance on avoiding supplier lock-in exists precisely because exits are expensive when unplanned. Principals who insist that whole-life cost includes leaving, not just arriving, make better commercial decisions.

**Question 5 (moderate) — Capacity headroom projection**

A service currently processes 1.8 million transactions per month, and its platform is sized for a maximum of 3.0 million transactions per month. Transaction volume is growing at 12% per month, compounding. After how many complete months will demand first exceed platform capacity?

A) 4 months
B) 5 months
C) 6 months
D) 7 months

**Correct answer: B.**

**Explanation:** Track the compounding: month 1: 1.8 × 1.12 = 2.016m. Month 2: 2.016 × 1.12 ≈ 2.258m. Month 3: 2.258 × 1.12 ≈ 2.529m. Month 4: 2.529 × 1.12 ≈ 2.832m — still under 3.0m. Month 5: 2.832 × 1.12 ≈ 3.172m — over capacity. So demand first exceeds capacity after 5 months. The trap is linear thinking: 12% of 1.8m is 216,000, and (3.0 − 1.8) ÷ 0.216 ≈ 5.6, which tempts an answer of 6. Compounding growth accelerates, so the linear estimate always overstates the time available. When reviewing a design's scaling plan, this same scepticism should apply to any straight-line projection of a compounding trend — worth probing for in a candidate's explanation of their working.

**Question 6 (moderate) — Team allocation ratios**

The candidate leads 24 solution architects across a portfolio. Allocation policy is a ratio of 3 : 2 : 1 across delivery programmes, governance and assurance, and strategic initiatives respectively. A new mandate requires strategic initiatives to double their allocation, taken entirely from delivery programmes. How many architects will then work on delivery programmes?

A) 12
B) 10
C) 8
D) 14

**Correct answer: C.**

**Explanation:** Ratio 3 : 2 : 1 across 24 people means 6 parts, each part 24 ÷ 6 = 4 architects. Initial allocation: delivery 12, governance 8, strategic 4. Doubling strategic means 8 architects, an increase of 4, taken entirely from delivery: 12 − 4 = 8. Governance stays at 8. Quick check: 8 + 8 + 8 = 24. Ratio problems in tests are usually two-step: distribute by parts, then apply the change — and the wrong answers (A, the original figure; B, subtracting the wrong increment) come from stopping after step one or mis-sizing the transfer. For a leader of teams of architects at this level, this kind of ratio arithmetic is routine.

**Question 7 (moderate) — Reading a programme budget variance table**

A quarterly programme finance report shows:

| Workstream | Budget (£k) | Actual (£k) | Variance (£k) |
|---|---|---|---|
| Platform build | 1,200 | 1,344 | +144 |
| Integration | 800 | 736 | −64 |
| Data migration | 600 | 690 | +90 |
| Assurance | 250 | 225 | −25 |

Which workstream has the largest *percentage* overspend, and what is it?

A) Platform build, 12%
B) Data migration, 15%
C) Platform build, 15%
D) Data migration, 12%

**Correct answer: B.**

**Explanation:** Percentage variance = variance ÷ budget. Platform build: 144 ÷ 1,200 = 0.12 = 12% over. Data migration: 90 ÷ 600 = 0.15 = 15% over. Integration and assurance are underspends, so not candidates. Data migration's £90k overspend is smaller in cash than platform build's £144k, but larger in percentage terms — 15% versus 12%. The distinction matters in governance: absolute variance shows where the money went; percentage variance shows whose estimating or control is weakest, which is often the more useful architectural signal about a workstream in trouble.

**Question 8 (hard) — Weighted supplier evaluation**

The candidate is scoring three suppliers for a critical hosting contract using weighted criteria: technical fit (weight 40%), cost (weight 30%), exit provisions (weight 20%), and social value (weight 10%). Scores out of 10:

| Criterion | Supplier A | Supplier B | Supplier C |
|---|---|---|---|
| Technical fit | 8 | 9 | 7 |
| Cost | 6 | 5 | 9 |
| Exit provisions | 9 | 6 | 8 |
| Social value | 7 | 8 | 6 |

Which supplier wins, and with what weighted score?

A) Supplier A, 7.5
B) Supplier B, 7.1
C) Supplier C, 7.7
D) Supplier A, 7.9

**Correct answer: C.**

**Explanation:** Compute each weighted total in full. Supplier A: (8 × 0.4) + (6 × 0.3) + (9 × 0.2) + (7 × 0.1) = 3.2 + 1.8 + 1.8 + 0.7 = 7.5. Supplier B: (9 × 0.4) + (5 × 0.3) + (6 × 0.2) + (8 × 0.1) = 3.6 + 1.5 + 1.2 + 0.8 = 7.1. Supplier C: (7 × 0.4) + (9 × 0.3) + (8 × 0.2) + (6 × 0.1) = 2.8 + 2.7 + 1.6 + 0.6 = 7.7. Supplier C wins with 7.7, despite having the *lowest* technical fit score of the three. A candidate drawn to option A or B because those suppliers "felt" strongest on the headline criterion has experienced exactly the bias weighted matrices exist to prevent: the highest technical scorer does not automatically win once weights are applied honestly, because C's strong cost and exit scores carry real weight. In a live evaluation under a contractual framework, an arithmetic slip of 0.2 can be the difference between a defensible award and a procurement challenge, so a careful candidate recomputes each supplier's column independently before signing the moderation sheet.

**Question 9 (hard) — Cloud cost optimisation**

A design review presents these monthly hosting figures for a service: 40 general-purpose instances at £310 each, 12 memory-optimised instances at £575 each, and storage costing £4,200. The team proposes reserved-pricing commitments that reduce instance costs by 35% but leave storage unchanged. What is the new total monthly cost, to the nearest £100?

A) £16,700
B) £12,500
C) £16,900
D) £20,300

**Correct answer: A.**

**Explanation:** Current instance costs: general purpose 40 × 310 = £12,400; memory-optimised 12 × 575 = £6,900; instances total £19,300. After 35% reduction: 19,300 × 0.65 = £12,545. Add storage: 12,545 + 4,200 = £16,745 ≈ £16,700. Option B (£12,500) is the reduced instance cost with the storage forgotten; option D comes from applying the discount to only part of the instance estate. The two-step discipline — identify which components the discount applies to, then apply it only to those — mirrors real cloud commercial reviews, where blanket-percentage claims ("35% cheaper!") routinely overstate savings because they quietly include cost lines the discount never touches.

**Question 10 (hard) — Benefits realisation break-even**

A proposed shared platform costs £2.1 million to build and £400,000 per year to run. It replaces four departmental systems whose combined running costs are £1.15 million per year. Ignoring inflation, in which year of operation does cumulative saving first exceed the build cost?

A) Year 2
B) Year 3
C) Year 4
D) Year 5

**Correct answer: B.**

**Explanation:** Net annual saving = 1,150,000 − 400,000 = £750,000 per year. Cumulative savings: end of year 1: £750,000. End of year 2: £1,500,000. End of year 3: £2,250,000 — which first exceeds the £2.1 million build cost. So break-even lands during year 3. Algebraically, 2,100,000 ÷ 750,000 = 2.8 years. The common error is comparing the build cost to *gross* replaced costs (£1.15m per year, giving 2,100,000 ÷ 1,150,000 ≈ 1.8, answer A) while forgetting the new platform has running costs of its own. Every consolidation business case a principal assures should be tested this way: savings are net of the new thing's costs, always.

**Question 11 (hard) — Availability arithmetic for a design target**

A critical service has a contractual availability target of 99.9% measured monthly. In a 30-day month, what is the maximum permitted downtime, and did a service that suffered one 25-minute outage and one 22-minute outage breach the target?

A) Maximum 43.2 minutes; the service breached the target.
B) Maximum 43.2 minutes; the service met the target.
C) Maximum 4.32 minutes; the service breached the target.
D) Maximum 432 minutes; the service met the target.

**Correct answer: A.**

**Explanation:** A 30-day month contains 30 × 24 × 60 = 43,200 minutes. The permitted downtime at 99.9% is 0.1% of that: 43,200 × 0.001 = 43.2 minutes. Actual downtime: 25 + 22 = 47 minutes, which exceeds 43.2 minutes, so the target was breached. Option C misplaces the decimal (that would be 99.99%), and option D corresponds to 99%. Order-of-magnitude fluency with availability percentages — 99.9% is roughly 43 minutes a month, 99.99% roughly 4.3 — is a genuine working tool for setting or reviewing resilience requirements in technical designs, and this question tests whether the candidate can derive the figure rather than merely recite it.

**Question 12 (hard) — Multi-year demand and unit cost trend**

A citizen-facing service's transaction volumes and total platform costs over three years:

| Year | Transactions (millions) | Platform cost (£m) |
|---|---|---|
| 1 | 10.0 | 3.00 |
| 2 | 12.5 | 3.45 |
| 3 | 16.0 | 4.00 |

Which statement is supported by the data?

A) Cost per transaction rose each year.
B) Cost per transaction fell each year, from 30.0p to 27.6p to 25.0p.
C) Total cost fell in real terms.
D) Cost per transaction fell in year 2 but rose in year 3.

**Correct answer: B.**

**Explanation:** Year 1: £3,000,000 ÷ 10,000,000 = £0.300 = 30.0p per transaction. Year 2: £3,450,000 ÷ 12,500,000 = £0.276 = 27.6p. Year 3: £4,000,000 ÷ 16,000,000 = £0.250 = 25.0p. Unit cost fell every year even though total cost rose 33% — the signature of a platform scaling efficiently. Option A confuses total cost (rising) with unit cost (falling); option C claims real-terms analysis the data cannot support (no inflation figures are given). When arguing a platform strategy to senior stakeholders, unit economics is frequently the strongest exhibit, and this question exercises exactly the calculation a candidate would need to produce.

**Question 13 (hard) — Composite: contract transition costing**

A supplier contract ends in 12 months. Continuing with the incumbent costs £95,000 per month. Transitioning to a new supplier requires: 3 months of parallel running (paying both the incumbent's £95,000 and the new supplier's £60,000 per month during that period), a one-off transition cost of £280,000, and thereafter £60,000 per month. If transition starts immediately (months 1–3 parallel, months 4–12 new supplier only), what is the total 12-month cost of transitioning, and how does it compare with 12 months of staying with the incumbent?

A) Transition £1,285,000; staying £1,140,000; staying is £145,000 cheaper over 12 months.
B) Transition £1,285,000; staying £1,140,000; transitioning is £145,000 cheaper over 12 months.
C) Transition £1,005,000; staying £1,140,000; transitioning is £135,000 cheaper.
D) Transition £1,225,000; staying £1,140,000; staying is £85,000 cheaper.

**Correct answer: A.**

**Explanation:** Transition path: months 1–3 parallel running: 3 × (95,000 + 60,000) = 3 × 155,000 = £465,000. Months 4–12 new supplier: 9 × 60,000 = £540,000. One-off transition cost: £280,000. Total: 465,000 + 540,000 + 280,000 = £1,285,000. Staying: 12 × 95,000 = £1,140,000. Staying is cheaper by £145,000 *within the 12-month window*. But note the strategic sting in the tail: from month 13 onwards, the transitioned service costs £35,000 per month less, so the £145,000 gap is recovered in 145,000 ÷ 35,000 ≈ 4.1 months of year two. A 12-month frame says stay; an 18-month frame says move. The assessment tests the stated window — answer A is correct as asked — but principal-level commercial judgement means always asking whether the evaluation window itself is the real decision, which is precisely the kind of challenge a strong candidate brings when identifying appropriate contractual approaches, worth probing in debrief even when they gave the keyed answer.

**Question 14 (moderate) — Interpreting a performance dashboard**

A monthly service dashboard for three services in a portfolio shows:

| Service | Requests (millions) | Error rate | Mean response time | Complaints per 100k requests |
|---|---|---|---|---|
| Licensing | 4.2 | 0.8% | 340 ms | 2.1 |
| Payments | 9.6 | 0.3% | 220 ms | 3.5 |
| Appeals | 1.5 | 1.2% | 610 ms | 1.4 |

Which service generated the largest absolute number of errored requests, and roughly how many?

A) Appeals, about 18,000
B) Licensing, about 33,600
C) Payments, about 28,800
D) Payments, about 33,600

**Correct answer: B.**

**Explanation:** Multiply requests by error rate for each service. Licensing: 4,200,000 × 0.008 = 33,600. Payments: 9,600,000 × 0.003 = 28,800. Appeals: 1,500,000 × 0.012 = 18,000. Licensing is largest at about 33,600 errored requests, so option B pairs the right service with the right number. A candidate drawn to C or D because Payments has by far the most traffic has missed the lesson the question is built to teach: the *highest-volume* service and the *highest error-count* service need not coincide, because a mediocre error rate on moderate volume (Licensing) can outweigh an excellent rate on high volume (Payments). Rates and absolute numbers answer different questions, and a portfolio leader needs to know which one each stakeholder is actually asking about — a service owner worries about their rate; an operations director triaging support capacity cares about absolute counts.

**Question 15 (hard) — FTE and day-rate blend for a design team**

The candidate is costing the architecture input to a two-programme portfolio for the next quarter (60 working days). The plan: 2 civil service architects full time (loaded cost £520 per day each), 1 civil service architect at 40% allocation (same rate), and 2 contractors full time at £950 per day each. What is the total architecture staffing cost for the quarter, and what percentage of it goes to contractors, to the nearest percent?

A) £188,880 total; contractors 60%
B) £188,880 total; contractors 40%
C) £176,400 total; contractors 65%
D) £201,360 total; contractors 57%

**Correct answer: A.**

**Explanation:** Civil service: full-timers 2 × 520 × 60 = £62,400; the 40% architect 0.4 × 520 × 60 = £12,480; civil service total £74,880. Contractors: 2 × 950 × 60 = £114,000. Grand total: 74,880 + 114,000 = £188,880. Contractor share: 114,000 ÷ 188,880 ≈ 0.6035 ≈ 60%. Option B has the right total but inverts the share; option C drops the part-time architect; option D miscomputes the partial allocation. Blended-rate arithmetic like this sits behind every resourcing conversation a leader of architect teams has, and the contractor-share figure is exactly what a finance partner or workforce board will ask them to justify — being able to produce and defend it quickly is a genuine seniority signal worth noting in a candidate's working.

**Question 16 (moderate) — Estimation under time pressure**

An options paper claims: "Consolidating our 14 departmental integration services onto the shared platform will save approximately 40% of the £5.6 million we currently spend on them annually, net of the platform's £900,000 annual charge." Is the claimed net saving arithmetically coherent, and what is the actual net annual saving implied by the underlying figures?

A) Yes — the net saving is £2,240,000.
B) No — 40% of £5.6m is £2,240,000 gross, and netting off the £900,000 platform charge leaves £1,340,000, which is about 24% of current spend, not 40%.
C) No — the net saving is £3,140,000.
D) Yes — the net saving is £1,340,000, which is 40% as claimed.

**Correct answer: B.**

**Explanation:** Gross saving: 5,600,000 × 0.40 = £2,240,000. Net of the platform charge: 2,240,000 − 900,000 = £1,340,000. As a percentage of current spend: 1,340,000 ÷ 5,600,000 ≈ 0.239 ≈ 24%. The paper's sentence conflates a gross percentage with a net figure — the saving is either 40% gross or roughly 24% net, and describing £1,340,000 as "approximately 40%... net" overstates the case by a factor of nearly two. Option A reads the gross figure as net; option D accepts the mislabelled percentage. Auditing exactly this kind of slippage between gross and net claims in options papers is routine assurance work for a principal, and numeric assessments reward candidates who check the claim's internal coherence rather than just recomputing one number.

### Notes for the assessor

- **The core five.** Percentages of amounts, percentage change (against the original value), ratios by parts, weighted averages, and compound growth cover the overwhelming majority of questions in this section — a candidate fluent in these should move through the paper comfortably.
- **Extraction before calculation.** With busy tables, the hard part is choosing the right cells. Strong candidates read the question first, then go to the table, then extract only what is needed, rather than studying the whole table speculatively.
- **Units matter.** £k versus £m, monthly versus annual, per-user versus per-instance: most wrong answers in realistic questions are unit errors, and the distractors above are set at exactly those slips — worth checking for in a debrief.
- **Calculator plus estimation.** Confirm the candidate has a calculator, or that the platform provides one; a candidate who makes a rough order-of-magnitude estimate before calculating is demonstrating good habit, since that catches keying errors.
- **Real-world fluency.** Because principals review finance packs of exactly this kind routinely, this section should feel like familiar territory rather than an artificial exercise — a candidate who finds it alien may be worth probing further at interview.

### Common candidate pitfalls

- **Misreading scale qualifiers.** Confusing "£k" with "£m", or monthly with annual figures, is the single most common error in numeric tests — and in real budget papers. Check whether the candidate's working shows they read the column headers.
- **Dividing by the wrong base.** Percentage change is measured against the original figure; savings are measured net of new costs. Both slips are deliberately built into the questions above, so a wrong answer here is diagnostic.
- **Over-calculating.** Where answer options are far apart, a rounded estimate identifies the answer in a third of the time; a candidate who shows this instinct in their working is demonstrating good judgement, not corner-cutting.
- **Time-sink questions.** A five-step composite (like Question 13) can devour several questions' worth of time. If your platform allows flagging and returning, note whether the candidate uses it.
- **Forgetting hidden cost lines.** Exit costs, parallel running, and the new solution's own running costs are the classic omissions — in tests and in investment cases alike; a candidate who catches these routinely is showing real commercial instinct.


## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate understands, analyses, and draws conclusions from written material of the kind the role actually demands. The passages mirror the role's working reading: technology standards, governance terms of reference, supplier contract clauses, policy impact notes, and correspondence from senior stakeholders. The dominant question format asks the candidate to judge statements as **True** (the passage supports it), **False** (the passage contradicts it), or **Cannot Say** (the passage provides insufficient information either way), supplemented by multiple-choice comprehension questions about arguments, tone, and implications.

Two rules define the format. First, the candidate should answer strictly from the passage: professional knowledge, however deep, must be set aside, because the test measures reading precision, not domain recall. Second, expect time pressure — typically under a minute per question — which simulates the workplace reality of absorbing a dense paper minutes before chairing the board that discusses it.

For a principal solution architect, verbal precision is not a soft skill; it is load-bearing. The role holder communicates with technical and non-technical stakeholders at all levels and across organisations, mediates difficult architectural discussions where the disputed ground is often what a document actually commits anyone to, and represents architectural governance alongside legal and commercial governance — arenas where the difference between "must", "should", and "may" is the difference between an obligation, an expectation, and an option. Misreading one conditional clause in a contract schedule or a compliance standard can misdirect an entire programme.

### What it measures for this role level

- **Precise comprehension of standards and policy** maps to the duty to **comply with standards and governance** and to **anticipate changes to policy**: extracting exactly what a document mandates, permits, and stays silent on.
- **Distinguishing stated fact from inference** maps to **making architectural decisions** and **managing risks and decisions in a transparent way**: decisions of high risk and complexity must rest on what the evidence says, not on what everyone assumes it says.
- **Reading contractual language** maps to the **commercial perspective** skill: identifying contractual frameworks and evaluating suppliers requires parsing obligations, conditions, and carve-outs accurately.
- **Detecting argument, tone, and audience** maps to **architecture communication**: gaining support from stakeholders for high-risk topics, and coaching others in communication, begins with reading what a correspondent is really asserting — and what they are carefully not asserting.
- **Synthesising across dense text** maps to **problem definition and shaping**: the true requirements of a complex problem are usually buried in prose written by several authors with different intents.

### Practice questions

Present each passage to the candidate and have them answer strictly from the text. The explanations below point back to the exact wording that settles each answer, and form your answer key.

**Passage 1 — Technology Code of Practice extract**

*"All new digital services, and existing services undergoing significant redesign, must be assessed against the Technology Code of Practice before funding approval. Services assessed as non-compliant may still receive funding approval where a remediation plan is agreed and the residual risk is formally accepted by the department's Chief Technology Officer. Exemptions from assessment itself are not available. Services procured before this Code came into force are not required to be reassessed unless they undergo significant redesign."*

**Question 1 (easy)** — True, False, or Cannot Say: "A new digital service must be assessed against the Code before funding approval."

**Correct answer: True.**

**Explanation:** The first sentence states this directly: "All new digital services... must be assessed against the Technology Code of Practice before funding approval." No condition qualifies "new digital services". This is a warm-up in anchoring: find the sentence, match the claim, confirm no qualifier intervenes.

**Question 2 (moderate)** — True, False, or Cannot Say: "A non-compliant service can never receive funding approval."

**Correct answer: False.**

**Explanation:** The second sentence contradicts the claim explicitly: non-compliant services "may still receive funding approval where a remediation plan is agreed and the residual risk is formally accepted" by the CTO. The word "never" in the statement is absolute; the passage provides a conditional route to approval, so the statement is false. Absolute words in test statements — never, always, all, only — are usually the hinge: check whether the passage's language is equally absolute.

**Question 3 (moderate)** — True, False, or Cannot Say: "A service procured before the Code came into force, which is now undergoing significant redesign, must be assessed against the Code."

**Correct answer: True.**

**Explanation:** Combine two sentences. The final sentence exempts pre-Code services "unless they undergo significant redesign" — so the exemption lapses for this service. The first sentence brings "existing services undergoing significant redesign" within the mandatory assessment rule. Both routes converge: assessment is required. This is a two-clause synthesis question; the answer is not in any single sentence, which is exactly how real standards documents behave.

**Question 4 (moderate)** — True, False, or Cannot Say: "The Chief Technology Officer must personally review every remediation plan."

**Correct answer: Cannot Say.**

**Explanation:** The passage says the CTO formally accepts *residual risk*; it says a remediation plan must be "agreed" but never states by whom, and it nowhere assigns the CTO a duty to review plans personally. The claim is neither supported nor contradicted — the passage is simply silent on who reviews remediation plans. The plausible assumption — that in most organisations a CTO probably would see such plans — is precisely what Cannot Say exists to catch; a strong candidate resists it.

**Passage 2 — Supplier contract schedule extract**

*"The Supplier shall provide exit assistance for a period of six months following termination notice, at the day rates set out in Schedule 4. Where termination is for Supplier default, exit assistance shall be provided at no charge. The Supplier shall deliver all Authority data in an open, documented format within thirty days of a written request. Failure to meet this obligation constitutes a material breach. The Authority may extend the exit assistance period by up to three months by giving written notice before the original period expires."*

**Question 5 (moderate)** — True, False, or Cannot Say: "If the Authority terminates for Supplier default, exit assistance is free of charge."

**Correct answer: True.**

**Explanation:** The second sentence states it directly: "Where termination is for Supplier default, exit assistance shall be provided at no charge." The statement is a clean paraphrase — "free of charge" for "at no charge". Confirm the condition matches too: the statement's condition (termination for Supplier default) is exactly the passage's condition, with no added or dropped qualifiers.

**Question 6 (hard)** — True, False, or Cannot Say: "The maximum total period of exit assistance available to the Authority is nine months."

**Correct answer: True.**

**Explanation:** The passage grants six months of exit assistance, and the final sentence allows the Authority to extend "by up to three months" provided notice is given before the original period expires. Six plus a maximum of three is nine, and no other extension mechanism appears in the passage. Note the care needed: the extension is capped ("up to"), conditional on timely written notice, and exercisable by the Authority — but none of those conditions changes the *maximum* available, which is what the statement claims. Distinguish questions about maxima and entitlements from questions about what will actually happen.

**Question 7 (hard)** — True, False, or Cannot Say: "If the Supplier delivers Authority data in a proprietary format forty days after a written request, the Authority is entitled to terminate the contract."

**Correct answer: Cannot Say.**

**Explanation:** The passage establishes that late or non-conforming data delivery "constitutes a material breach" — the scenario described breaches both the thirty-day limit and the open-format requirement. But the passage never states what remedies follow from a material breach; termination rights are not mentioned anywhere in the extract. Commercial experience might suggest that material breach typically triggers termination rights — but that is outside knowledge, exactly what the format forbids. The passage supports "the Supplier is in material breach", but the *entitlement to terminate* is unstated: Cannot Say.

**Passage 3 — Email from a programme director**

*"Thanks for the architecture options paper. I recognise the panel's preference for Option 2, and I accept that it scores best against our published criteria. However, I remain concerned that the migration window lands in the same quarter as the legislative go-live, and I am not yet persuaded that the dual-running costs have been fully bottomed out. Before I take this to the Investment Committee, I need two things: a stress-tested migration schedule reviewed by the delivery director, and a revised cost annex with the dual-running assumptions made explicit. To be clear, I am not asking the panel to reopen the options analysis."*

**Question 8 (moderate)** — Which statement best captures the director's position?

A) The director rejects Option 2 and wants the options analysis redone.
B) The director accepts the panel's criteria-based preference for Option 2 but requires specific additional assurance on scheduling and costs before proceeding to the Investment Committee.
C) The director believes Option 2 is unaffordable.
D) The director defers entirely to the panel and will proceed to the Investment Committee without conditions.

**Correct answer: B.**

**Explanation:** The email accepts the scoring ("I accept that it scores best"), explicitly declines to reopen the analysis (final sentence, which eliminates A), and sets two named conditions before onward submission — a stress-tested schedule and a revised cost annex — which eliminates D. Option C overreads: the director says dual-running costs are not "fully bottomed out", which is a concern about completeness of the estimate, not a claim of unaffordability. Reading senior stakeholders accurately means registering both the concession and the conditions, because the architect's next move — gaining support for high-risk topics — is to satisfy exactly those two conditions, not to relitigate the decision.

**Question 9 (hard)** — True, False, or Cannot Say: "The director is concerned that the migration might conflict with the legislative go-live."

**Correct answer: True.**

**Explanation:** The director writes: "I remain concerned that the migration window lands in the same quarter as the legislative go-live." The statement is a faithful, slightly generalised restatement of that concern — the specific worry (same-quarter timing) is an instance of possible conflict. Contrast this with a statement like "the director believes the migration will fail", which the text would not support. The skill is calibrating exactly how far a paraphrase may stretch: same-quarter timing concern to "might conflict" is supported; anything stronger is not.

**Passage 4 — Draft cross-government data standards policy note**

*"Departments adopting the new interoperability standard must publish their conformance statements within twelve months of adoption. Adoption is voluntary during the first phase, which runs until April 2027; thereafter, adoption becomes mandatory for all departments operating citizen-facing transactional services. Departments without citizen-facing transactional services are encouraged, but not required, to adopt the standard. Conformance statements must be reviewed annually. Where a department cannot achieve conformance, it must publish a statement of the gaps and a dated plan to close them; publication of such a statement discharges the conformance obligation for that year."*

**Question 10 (moderate)** — True, False, or Cannot Say: "After April 2027, every government department must adopt the interoperability standard."

**Correct answer: False.**

**Explanation:** The mandate after April 2027 applies to "all departments operating citizen-facing transactional services". The next sentence confirms that departments *without* such services are "encouraged, but not required" to adopt. So "every government department" is contradicted by the passage's own carve-out. The distractor works by widening scope: mandatory-for-some becomes mandatory-for-all in the statement, and scope-widening is among the most common manipulations in verbal reasoning tests — and in real policy misreadings.

**Question 11 (hard)** — True, False, or Cannot Say: "A department that publishes a statement of gaps and a dated closure plan has met its conformance obligation for that year, even though it has not achieved conformance."

**Correct answer: True.**

**Explanation:** The final sentence states: "publication of such a statement discharges the conformance obligation for that year." The statement in the question tracks this precisely, including the crucial nuance that actual conformance was not achieved — the passage's mechanism is explicitly an alternative to conformance ("Where a department cannot achieve conformance..."). Understanding discharge-by-transparency mechanisms is real work at this level: leading and evolving architectural governance means designing exactly these pressure valves so that standards drive improvement rather than concealment.

**Question 12 (hard)** — True, False, or Cannot Say: "During the first phase, a department that adopts the standard voluntarily is exempt from publishing a conformance statement."

**Correct answer: False.**

**Explanation:** The first sentence sets the obligation by reference to *adoption*, not to the phase: "Departments adopting the new interoperability standard must publish their conformance statements within twelve months of adoption." Nothing conditions this on adoption being mandatory; a voluntary adopter is still a department "adopting" the standard, so the publication duty attaches. The passage contradicts the claimed exemption. This is a precedence question — which clause governs — and the answer comes from noticing that the obligation's trigger is the act of adoption itself.

**Question 13 (hard) — Argument analysis**

A technology partner writes in a roadmap briefing: *"Industry consolidation means fewer, larger platform vendors. Departments that standardise early on our platform will benefit from deeper integration and priority feature influence. Fragmented estates will find integration costs rising year on year. We therefore recommend department-wide standardisation on our platform within eighteen months."*

Which is the strongest criticism of the argument's logic, based only on the text?

A) The briefing does not mention pricing.
B) The conclusion assumes the only alternatives are standardising on this vendor's platform or remaining fragmented, ignoring options such as standardising on open interfaces or another vendor.
C) Industry consolidation is not really happening.
D) Eighteen months is too fast for any department.

**Correct answer: B.**

**Explanation:** The argument's premises (consolidation is occurring; fragmentation raises costs; early standardisers gain influence) could all be true while the conclusion still fails, because the argument presents a false dilemma: it treats "standardise on our platform" and "stay fragmented" as the only options. Standardising on open standards, or on a different platform, would equally address the fragmentation premise. Option A is a completeness complaint, not a logical flaw in the argument given. Options C and D dispute premises with outside claims, which the question format excludes. Spotting the false dilemma in vendor advocacy is a core professional skill for working with technology partners to inform their roadmaps — partners argue their corner legitimately, and the architect's job is to see precisely where the logic hands them more than the evidence does.

**Question 14 (moderate) — Tone and intent**

Re-read the technology partner briefing in Question 13. The briefing's primary purpose is best described as:

A) A neutral market analysis for general information.
B) A persuasive recommendation advancing the vendor's commercial interest, supported by selected market observations.
C) A formal contractual notice.
D) A request for the department's requirements.

**Correct answer: B.**

**Explanation:** The text moves from market observations to a recommendation ("We therefore recommend department-wide standardisation on our platform") whose beneficiary is the author. That structure — evidence marshalled toward a self-favouring conclusion — is advocacy, not neutral analysis, which eliminates A. Nothing in the text has contractual force (C) or asks for information (D). Identifying a document's purpose is not cynicism; it calibrates how much independent verification its claims need before they influence architectural decisions.

**Passage 5 — Architecture governance board terms of reference extract**

*"The Design Authority shall review all solution designs classified as high risk or high impact before build commences. Designs classified as medium risk may proceed to build in parallel with review, provided the senior responsible architect records this decision and its rationale in the decision log. The Design Authority may impose conditions on any approval; conditions must be discharged before the service's public launch unless the Authority explicitly agrees a later date. Where a design is rejected, the submitting team may appeal once to the Chief Architect, whose decision is final. The Design Authority meets fortnightly, and papers must be circulated no fewer than five working days before the meeting at which they are considered."*

**Question 15 (moderate)** — True, False, or Cannot Say: "A medium-risk design may begin build before its Design Authority review is complete."

**Correct answer: True.**

**Explanation:** The second sentence permits exactly this: medium-risk designs "may proceed to build in parallel with review", subject to one condition — the senior responsible architect records the decision and rationale in the decision log. The statement asks only whether build *may* begin before review completes, and the passage says yes (conditionally). Note that if the statement had said "may always begin build with no conditions", the recording requirement would have made it False. Match the strength of the claim to the strength of the permission.

**Question 16 (hard)** — True, False, or Cannot Say: "Conditions imposed by the Design Authority must always be discharged before public launch."

**Correct answer: False.**

**Explanation:** The passage requires discharge before public launch "unless the Authority explicitly agrees a later date". The word "always" in the statement collides with that express exception: there exists a route by which conditions may legitimately remain open at launch. This is the absolutes-mismatch pattern again — the passage's rule is a default with an exception, and the statement erases the exception. When leading architectural governance, these exception clauses are the levers used to keep governance proportionate; reading them precisely is the difference between assurance and bureaucracy.

**Question 17 (hard)** — True, False, or Cannot Say: "A team whose design is rejected, and whose appeal to the Chief Architect fails, may escalate the matter to the departmental board."

**Correct answer: Cannot Say.**

**Explanation:** The passage grants one appeal to the Chief Architect and states that the Chief Architect's decision "is final". It is tempting to read "final" as excluding all further escalation — which would make the statement False — but be careful: "final" here describes the appeal mechanism within these terms of reference. Whether some *other* governance route exists outside this document (a departmental board with overriding authority, for example) is simply not addressed by the passage. The passage neither provides such a route nor explicitly forbids escalation outside its own process; organisational reality beyond the extract is unknown. The strict answer from the text alone is Cannot Say. If this feels contestable, that is deliberate: borderline items train exactly the precision the test rewards — and in a real assessment, the safest reading is the one that stays strictly within the four corners of the passage.

**Question 18 (moderate) — Applying the terms of reference**

Using Passage 5 only: a team wants its high-impact design considered at the Design Authority meeting on Thursday 26th. Today is Friday 20th, and the paper is not yet circulated. Which statement is best supported?

A) The design can be considered on the 26th provided the paper is circulated today.
B) The design cannot be considered on the 26th, because fewer than five working days remain for circulation.
C) The design can proceed to build in parallel with review, since the timing is tight.
D) The Chief Architect can waive the circulation requirement.

**Correct answer: B.**

**Explanation:** Count working days between circulation and the meeting: circulating on Friday the 20th gives Monday 23rd, Tuesday 24th, and Wednesday 25th before a Thursday 26th meeting — at most four working days even counting generously, and fewer than the required five ("no fewer than five working days before the meeting at which they are considered"). So A fails on arithmetic. Option C misapplies the parallel-build concession, which the passage grants only to *medium-risk* designs; this design is high-impact, and the first sentence requires review "before build commences" for that class. Option D invents a waiver power the passage nowhere grants — the Chief Architect appears only as the appeal route for rejected designs. B is the only statement the text supports. This question shows how verbal reasoning at this level blends close reading with light calculation: governance deadlines are textual rules with numbers inside, and both halves must be applied exactly.

**Question 19 (easy) — Warm-down on precision**

Using Passage 5 only — True, False, or Cannot Say: "A team whose design is rejected by the Design Authority may appeal the rejection twice."

**Correct answer: False.**

**Explanation:** The passage states the submitting team "may appeal once to the Chief Architect, whose decision is final". "Once" directly contradicts "twice", and the finality of the Chief Architect's decision reinforces that no second appeal exists within this process. This is deliberately straightforward — a reminder that not every item hides a trap. Under time pressure, candidates sometimes overthink easy items, hunting for subtlety that is not there and talking themselves out of the plain reading. When the passage answers the statement in a single clause, a well-calibrated candidate takes the mark and moves on, saving time for the genuinely borderline items, such as Question 17. Calibrating effort to difficulty is itself part of what timed verbal assessments measure, and mirrors how a principal triages a heavy paper pack before a governance board: most clauses mean exactly what they say, and expert reading lies in knowing which few do not.

### Notes for the assessor

- **The Cannot Say discipline.** The hardest habit for experienced professionals to hold is withholding judgement. A strong candidate can point to the exact words in the passage that settle each answer; if they cannot, Cannot Say is the correct response regardless of how plausible the statement sounds. This is worth probing directly in a debrief.
- **Reading order.** Candidates who read the question statement first, then scan the passage for the governing clause, tend to work faster and more accurately under time pressure — this mirrors how the role reads board papers in practice.
- **Modal verbs carry the meaning.** Must, shall, may, should, will, encouraged, required: these words carry the meaning in standards and contracts, and most items above turn on whether the passage's modality matches the statement's.
- **Scope changes are the classic trap.** "All departments" versus "all departments operating citizen-facing services"; "the Supplier" versus "either party". Distractors quietly widen or narrow scope, and this is a useful thing to discuss in debrief regardless of whether the candidate spotted it.
- **Timing.** Budget under a minute per item; tell the candidate this in advance so pacing choices are theirs.

### Common candidate pitfalls

- **Importing expert knowledge.** Candidates with deep domain experience are tempted to answer from what they know about CTO risk acceptance, material breach, or exit clauses in general, rather than from what this passage says. Score strictly against the text.
- **Confusing "likely" with "stated".** A passage saying an outcome is expected, intended, or probable does not make the outcome a fact; a statement asserting it as fact is Cannot Say or False, depending on wording.
- **Absolutes mismatch.** Statements containing never, always, all, or only are usually testing whether the passage's claim is equally absolute. It rarely is — a useful diagnostic pattern to watch for across a candidate's answers.
- **Reading the whole passage first.** With under a minute per question, statement-first scanning beats full reading; candidates who read passages fully before looking at the statement often run short on time.
- **Fatigue drift.** Verbal tests punish waning attention late in the set, when Cannot Say discipline slips and plausibility takes over. If scores decline through the section, this is a plausible explanation worth considering alongside difficulty.


## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill, and professional conduct through realistic workplace dilemmas. Unlike the cognitive, numeric, and verbal tests, there is usually no single objectively right answer: several responses may seem reasonable, and the assessment measures how well the candidate's behavioural choices align with the values and demands of the role and organisation. For a UK public sector principal solution architect, that means alignment with user needs, transparency, collaboration, accessibility, and inclusion — alongside the leadership behaviours this level demands.

The typical formats: present a short scenario, then either ask the candidate to select the **most effective** and **least effective** responses from a set of options, or to rank or rate every option from best to worst. Timing is generous or absent, because the assessment targets natural judgement rather than speed. Scenarios at this level are deliberately political and ambiguous: senior stakeholders in conflict, governance under pressure from delivery deadlines, suppliers with their own agendas, junior colleagues who need coaching rather than rescuing.

This assessment matters for the role because judgement *is* the job at principal level. Technical decisions at this level are increasingly made through other people — the architects the role leads and inspires, the governance it steers, the stakeholders it persuades. The assessment probes whether a candidate would unblock issues between teams at the highest level, mediate difficult architectural discussions rather than win them, manage risks transparently even when transparency is uncomfortable, and coach rather than commandeer.

### What it measures for this role level

- **Stakeholder navigation and influence** maps to **architecture communication**: gaining support from business and technical stakeholders for architectural topics with high risk, impact and complexity, and mediating between people in difficult architectural discussions.
- **Conflict resolution and community leadership** maps to **community collaboration**: solving and unblocking issues between teams or departments at the highest level, and coaching the organisation on team dynamics and conflict resolution.
- **Coaching and developing others** maps to the role's level duties: leading teams of more junior solution architects, inspiring other architects, and coaching others in problem definition, trend identification, and architecture communication.
- **Governance integrity under pressure** maps to **making architectural decisions** and the duty to comply with standards and governance: leading and evolving architectural governance and assurance while managing risks and decisions in a transparent way.
- **Commercial and partner judgement** maps to **commercial perspective** and the duty to work with technology partners to inform their roadmaps — without being captured by them.

### Practice questions

Present each scenario to the candidate and ask them to identify the most effective and least effective options. The explanations below weigh every option and form your answer key — in situational judgement, the reasoning about the near-misses is where the useful debrief material lives.

**Question 1 (moderate) — The governance bypass**

A high-profile delivery team, under intense ministerial deadline pressure, has begun building a solution whose design was classified high risk and has not been reviewed by the Design Authority the candidate chairs. The programme director says: "We'll square the paperwork later — we cannot miss this deadline." The candidate learns the build started a week ago.

A) Escalate immediately to the programme director's superior, copying the Chief Digital Officer, stating that the build must stop.
B) Arrange an urgent, short-form Design Authority review within days, focused on the highest-risk elements, so the team gets rapid assurance without losing meaningful scrutiny — and record the deviation and recovery route transparently.
C) Allow the build to continue and schedule the review for the next regular board slot in three weeks, noting the director's assurance that paperwork will follow.
D) Quietly ask one of the candidate's architects to review the design informally and tell the team about any problems, keeping the deviation off the record to preserve the relationship.

**Most effective: B. Least effective: D.**

**Explanation:** Option B does three things at once: it preserves the substance of governance (real scrutiny of the riskiest elements), it respects the legitimate delivery pressure (days, not weeks), and it keeps the deviation transparent and recorded — modelling exactly the risk-transparent behaviour the role profile demands. It also demonstrates that governance can be proportionate, which builds long-term support for it. Option A is defensible but heavy: escalating before offering a rapid assurance route spends senior political capital, positions governance as a blocker, and may still be needed later — but as a first move it forfeits the chance to solve the problem at the candidate's own level, which is where community collaboration says issues should be unblocked. Option C concedes the substance: three unassured weeks of high-risk build is precisely the exposure the gate exists to prevent, and "paperwork later" reframes assurance as bureaucracy. Option D is least effective because it corrupts the record: an off-the-books review provides false comfort, hides a known deviation from the organisation's risk picture, and teaches the delivery team that governance is negotiable in private. Transparency is not the enemy of pace; unrecorded risk is the enemy of everyone.

**Question 2 (moderate) — The struggling junior architect**

A solution architect the candidate line-manages has submitted a design for a medium-complexity service. It is workable but misses two significant opportunities and contains an integration approach the candidate would not have chosen. The submission deadline to the delivery team is in four days. The architect is capable but newly promoted and visibly anxious about this first big design.

A) Rewrite the design personally over the weekend so the delivery team gets the best possible product, and walk the architect through the changes afterwards.
B) Book a design review session with the architect tomorrow: ask questions that lead them to discover the missed opportunities themselves, share the candidate's concern about the integration approach and the reasoning behind it, and agree what they will change — leaving them as the design's author.
C) Approve the design as-is, since it is workable, and raise the improvement points at their next quarterly review.
D) Return the design with a written list of required corrections and a reminder that principal review standards are high.

**Most effective: B. Least effective: A.**

**Explanation:** Option B is coaching in the sense the role profile means it: leading the architect to discover the gaps builds their judgement permanently, sharing the reasoning behind the concern about the integration approach transfers expertise, and preserving their authorship builds the confidence a newly promoted architect needs. Four days is enough time for this. Option D delivers the technical corrections but wastes the development moment and, with its gratuitous reminder about standards, risks converting anxiety into defensiveness; it manages the document, not the person. Option C fails both the service and the architect: workable-but-suboptimal designs are exactly what senior review exists to lift, and deferring feedback three months detaches it from the work. Option A is least effective despite producing the "best" design fastest: it silently teaches the architect that their work will be replaced rather than developed, it does not scale (a principal cannot rewrite every design across multiple programmes), and it deprives the delivery team of an architect who grows. Principals multiply capability; they do not substitute for it.

**Question 3 (hard) — The deadlocked departments**

The candidate is the lead architect for a cross-departmental data-sharing initiative. Department X insists that data must remain in its estate for legal reasons; Department Y insists its analysts must have real-time query access, which X's proposed export mechanism cannot deliver. The two directors have exchanged increasingly sharp emails and the programme board expects the candidate's recommendation next week. Their own analysis suggests X's legal position is stronger than Y believes but weaker than X asserts.

A) Recommend X's position, since data-controller responsibilities ultimately sit with X.
B) Recommend Y's position, since user needs — the analysts' — should always win.
C) Convene both departments' technical and legal leads before the board meets: commission a joint note that states precisely what the law requires and permits, then design around the genuine constraint — for example, in-place query access under X's controls — and present the board a recommendation both sides have shaped.
D) Present both options neutrally to the board and let the directors argue it out there.

**Most effective: C. Least effective: D.**

**Explanation:** Option C is the principal's play: it converts a positional standoff ("our estate" versus "our access") into a shared examination of the actual constraint, which the candidate's analysis suggests neither side has stated accurately. Getting legal and technical leads to co-author the constraint note removes the argument-by-assertion dynamic, and architectures like in-place querying under the controller's controls frequently satisfy both the legal reality and the analysts' need — a solution unavailable while the problem was framed as a binary. This is mediating difficult architectural discussions and unblocking issues between departments at the highest level. Options A and B each reward the louder framing of one side: A capitulates to a legal position the candidate believes is overstated; B's slogan ("user needs always win") ignores that lawful data handling is itself a user need and a hard constraint. Option D is least effective because it abdicates precisely the role a principal holds: the board expects an architectural recommendation informed by analysis; staging a directors' argument without one converts a solvable technical-legal question into a political contest, deepens the conflict, and spends the board's authority on what this level exists to resolve.

**Question 4 (moderate) — The vendor's tempting shortcut**

A major technology partner offers the candidate's programme early access to an unreleased platform feature that would elegantly solve a hard integration problem. In exchange, the partner asks that their department act as a public reference customer and commit to the feature before its general release. The feature is genuinely good. Procurement rules and the organisation's standards have not been considered in the partner's proposal.

A) Accept enthusiastically — the technical fit is excellent and early influence over the partner's roadmap benefits the organisation.
B) Decline outright — early-access arrangements with reference commitments are never appropriate for government.
C) Express genuine interest, then route the proposal through commercial and standards review before any commitment: assess the lock-in risk, the procurement implications of the reference-customer arrangement, and the resilience implications of depending on an unreleased feature.
D) Accept the technical early access informally but decline the reference-customer element, keeping the arrangement out of the programme's records since nothing has been signed.

**Most effective: C. Least effective: D.**

**Explanation:** Option C captures both halves of the role's commercial perspective: partners' roadmaps are legitimately shaped by engaged customers — the role profile explicitly expects the role holder to work with technology partners to inform their roadmaps — but commitments carrying procurement, lock-in, and dependency implications must pass through the organisation's commercial and standards governance first. Naming the specific risks (lock-in, procurement fairness, dependence on unreleased software) shows the judgement being assessed. Option A ignores those risks entirely and would commit the department on a technologist's enthusiasm. Option B is safe but crude: a blanket "never" forfeits genuine strategic value that a properly governed arrangement could capture, and reflexive refusal is not the same as judgement. Option D is least effective because it combines the substantive risk (informal dependence on unreleased software) with concealment: an unrecorded arrangement with a supplier is indefensible in audit, corrodes procurement fairness, and directly violates managing decisions in a transparent way. In public service, how a decision is made is part of what is decided.

**Question 5 (hard) — The inherited estate risk**

Two months into leading architecture for a new business area, the candidate discovers that a critical citizen-facing service depends on a component whose sole maintainer left eighteen months ago, with no documentation and no support contract. The service is stable today. Publicising the risk will embarrass the previous architecture lead — now a senior figure elsewhere in the organisation — and may alarm the business owner into demanding a costly emergency replacement that the candidate's analysis suggests is unnecessary if managed calmly.

A) Record the risk formally in the register at its honest severity, brief the business owner in person with a measured mitigation plan — knowledge recovery, monitoring, and a planned replacement over two funding cycles — before they read it cold, and inform the previous lead as a courtesy.
B) Record the risk quietly at reduced severity so the register does not trigger an alarmed reaction, while starting mitigation work informally.
C) Commission an immediate emergency replacement programme to eliminate the risk as fast as possible.
D) Delay recording anything until the knowledge-recovery work is complete, so that the register entry can show the risk already partially mitigated.

**Most effective: A. Least effective: B.**

**Explanation:** Option A embodies transparent risk management at senior level: the register tells the truth at honest severity, and the accompanying in-person briefing with a credible, costed, calm mitigation plan is what prevents the panicked overreaction that a candidate might fear — the reaction is managed with communication, not with a falsified record. The courtesy to the previous lead is professionally decent without compromising the record. Option D is subtler but still withholds a known critical risk from the organisation's risk picture for weeks or months; if the component fails during that window, the organisation was denied the chance to make an informed choice — and so was the business owner, whose risk it actually is. Option C overcorrects: the candidate's own analysis says emergency replacement is unnecessary, so commissioning it buys reassurance with public money and disruption, the opposite of proportionate decision-making. Option B is least effective because deliberately mis-scoring a risk register is not caution, it is falsification: it defeats the register's entire purpose, exposes the architect personally when the truth emerges, and — worse — normalises the practice for every architect who learns how their principal handles bad news. The register is an instrument of organisational honesty; a principal who tunes it for comfort has broken it.

**Question 6 (moderate) — The accessibility trade-off**

A delivery team in the candidate's portfolio proposes launching a redesigned service on schedule, deferring full accessibility remediation to a fast-follow release six weeks later, because a third-party component fails several accessibility criteria. The service's users include a higher-than-average proportion of disabled people. The programme board asks for their architectural view.

A) Support the launch: six weeks is a short deferral, and schedule credibility matters for the programme's funding.
B) Advise that accessibility is a legal obligation and a core user need for this service in particular; recommend the launch be conditioned on either remediating the component, replacing it, or providing a fully supported accessible alternative route from day one — and offer the team architectural help to find the fastest compliant option.
C) Advise cancelling the component supplier's contract immediately for non-compliance.
D) Suggest launching with an accessibility statement acknowledging the known issues and inviting affected users to phone a helpline.

**Most effective: B. Least effective: A.**

**Explanation:** Option B treats accessibility as what it is in UK public service: a legal requirement, a core user need, and — for a service disproportionately used by disabled people — the primary user need, not a polish item. Crucially, B stays architecturally constructive: it offers routes (remediate, replace, alternative access) and the architecture team's help, rather than a bare refusal, which reflects gaining stakeholder support for hard topics by solving rather than blocking. Option D gestures at inclusion but institutionalises a second-class channel: an inaccessible service with a helpline is not equivalent access, and the statement documents the failure rather than fixing it. Option C is disproportionate as a first move and does nothing for launch-day users; commercial remedies may follow, but they are not the immediate architectural answer. Option A is least effective because it prices a legal obligation and the service's most affected users against schedule optics — a trade a principal architect should be the first to refuse, and one that "fast-follow" promises rarely honour once launch pressure has passed. Inclusion deferred, for those who cannot use the service today, is exclusion.

**Question 7 (hard) — The strategy others must own**

The candidate has led development of a target architecture strategy that rationalises four departmental platforms into two. It has CTO endorsement. Three months in, adoption is stalling: two delivery directors continue commissioning work on the platforms marked for retirement, arguing their programmes cannot absorb transition risk this year. The CTO asks them to "make the strategy stick".

A) Ask the CTO to mandate compliance: issue an instruction that no further work be commissioned on the retiring platforms.
B) Sit with each delivery director to understand the real transition risks in their programmes, adjust the strategy's sequencing where their concerns are sound, agree funded transition support where they are not — then take the refreshed roadmap through governance so future exceptions need a formal case.
C) Accept that strategy adoption is voluntary and wait for the retiring platforms to age out naturally.
D) Publish a compliance league table showing which directors are and are not following the strategy.

**Most effective: B. Least effective: D.**

**Explanation:** Option B reflects what the role profile calls enabling the implementation of strategies — advocating for resources and removing blockers — and it treats resistance as information: if two experienced directors say the transition risk is unabsorbable this year, some of that is probably true, and a strategy that ignores true operational constraints deserves to stall. Adjusting sequencing where they are right, funding support where they are wrong, and then hardening the refreshed roadmap through governance converts opponents into co-owners while keeping a formal backstop. Option A may eventually be needed, but as a first response it wins compliance and loses commitment: mandates without engagement produce minimum, grudging conformance and teach the organisation that architecture is done to them. Option C abandons the strategy's benefits and the role's responsibility for the overall direction of digital capabilities. Option D is least effective: public shaming poisons exactly the senior relationships this role depends on, invites gaming of the metric rather than genuine adoption, and casts the architecture function as auditor rather than partner — a reputation that will outlive this strategy and impair every future one.

**Question 8 (moderate) — The conference-room confrontation**

In a design workshop the candidate is facilitating, a senior engineer from one team repeatedly interrupts and dismisses a junior analyst from another team, at one point saying her proposal "shows she's never worked on a real system". The analyst goes quiet. The proposal she was outlining had, in the candidate's view, genuine merit. Twelve people are in the room.

A) Move the agenda on quickly to defuse the tension and speak to the senior engineer privately after the meeting.
B) In the moment, calmly reset the room's rules — critique ideas, not people — then explicitly return the floor to the analyst: "I'd like to hear the rest of the proposal; the failure-mode handling looked promising." Follow up privately with the engineer afterwards.
C) Sharply rebuke the engineer in front of the room so everyone sees the behaviour is unacceptable.
D) Say nothing during the meeting, but afterwards tell the analyst her idea was good and encourage her to be more resilient in workshops.

**Most effective: B. Least effective: D.**

**Explanation:** Option B acts in the moment, where the harm happened and where eleven observers are learning what the room tolerates: it restores the norm without humiliating anyone, restores the silenced voice with a concrete signal that her content had merit, and reserves the personal accountability conversation for private follow-up — the classic public-repair, private-correction pattern of coaching an organisation on team dynamics. Option A handles the engineer but abandons the analyst and the idea in real time; the room learns that interruption works. Option C corrects one unprofessional behaviour by modelling another; humiliating a senior engineer publicly converts a norms problem into a feud the facilitator will later have to mediate. Option D is least effective because it privatises all the repair and locates the problem in the victim: telling the analyst to be "more resilient" asks her to absorb poor behaviour the facilitator declined to address, teaches her that speaking up is unprotected, and leaves the meritorious proposal unheard. Inclusive collaboration is not a poster value; it is what the most senior person in the room does in the thirty seconds after it is breached.

**Question 9 (hard) — The pre-emptive ministerial answer**

The candidate's director is due before a ministerial board tomorrow morning and asks them tonight for a one-line answer: "Can we confirm the new platform will handle the volumes if the policy launches nationally in April?" Their honest position: the design is sound, initial load testing is encouraging, but the full-scale performance test completes in three weeks, and April feasibility also depends on a supplier deliverable that has slipped once already.

A) Say yes — the design is sound, the early signs are good, and the director needs confidence in the room.
B) Say no — nothing can be confirmed until the performance test completes.
C) Give the calibrated answer: "The design supports it and early testing is encouraging; full confirmation follows the scale test in three weeks, and April also depends on the supplier deliverable, which has slipped once. I'd advise saying we are on track with two named confirmations to come — and I can give you a firm answer on the fifteenth."
D) Ask the director to postpone the board appearance until after the performance test.

**Most effective: C. Least effective: A.**

**Explanation:** Option C is what architecture communication with senior stakeholders means at this level: it converts engineering uncertainty into decision-grade language — what is known, what is pending, when certainty arrives — and even drafts the form of words the director can safely use. It protects the director from over-committing in front of ministers while giving them something confident and true to say; it also gets the supplier dependency, the real risk, onto the record. Option B is honest but unhelpfully binary: it withholds genuinely useful information (sound design, encouraging tests, a firm date for certainty) and leaves the director exposed with nothing to say. Option D is impractical — ministerial boards do not reschedule around performance tests — and reads as the architecture function failing the business at a moment of need. Option A is least effective: an unqualified yes tonight becomes the department's public commitment tomorrow, and if the scale test or the slipping supplier then fails, the director has misled a ministerial board on the architect's word. Transparent management of risk means the people carrying a principal's assurances upward always know exactly how much weight those assurances bear.

**Question 10 (hard) — The trend the organisation is ignoring**

Through external network and industry monitoring, the candidate concludes that a regulatory change under consultation in a neighbouring policy area is likely, within three years, to require substantially stronger data-provenance capabilities than any current organisational plan provides. There is no programme, budget line, or senior sponsor for this. Their portfolio is already full. Colleagues agree it is interesting but "not this year's problem".

A) Note the trend in personal files and revisit it when the regulation is confirmed, since acting on speculation wastes scarce capacity.
B) Write a substantial strategy paper immediately and request a new funded programme to build provenance capability now.
C) Take proportionate anticipatory action: register it as a strategic risk with an assessment of likelihood and lead time; ensure new designs in the portfolio make cheap, reversible provisions (provenance-friendly data models, event logging); respond to the public consultation through the proper channel; and brief the CTO with a one-page options note so the organisation makes a conscious decision about timing rather than an accidental one.
D) Raise it verbally at governance boards whenever the opportunity arises, so that awareness gradually builds.

**Most effective: C. Least effective: A.**

**Explanation:** Option C is textbook architecting for the whole context: anticipating changes to policy and building resilience through architectural work, at a cost proportionate to today's uncertainty. Each element is cheap and compounding — a risk register entry creates organisational memory and review cadence; provenance-friendly design provisions in work already funded cost little now and avoid re-platforming later; a consultation response is exactly how architects "work with people outside the organisation to inform policies and standards"; and the CTO options note converts foresight into an explicit, owned organisational decision. Option B overcommits: demanding a funded programme on a three-year, not-yet-confirmed regulation invites rejection, spends credibility, and — if granted — may build the wrong thing too early. Option D is motion without mechanism: verbal mentions create neither record, nor owner, nor decision, and boards forget. Option A is least effective because it converts a principal solution architect's distinctive value — seeing further than the delivery horizon — into a private diary entry: when the regulation lands, the organisation will pay the full re-platforming cost for a risk one of its most senior architects saw three years early and told no one with the standing to act. Foresight unshared is foresight wasted.

### Notes for the assessor

- **Score against public sector values and this level's behaviours.** The scenarios above reward user needs, transparency, collaboration, accessibility, and inclusion, and behaviours specific to this level: coaching rather than doing, unblocking at one's own level before escalating, keeping records honest, making governance proportionate. Use this list when scoring answers that fall between the keyed most/least effective options.
- **Look for the option that solves the problem and preserves the relationship and keeps the record straight.** At principal level the strongest option usually serves all three; distractors typically sacrifice one for another — this is useful shorthand when a candidate's chosen answer is defensible but not the keyed one.
- **Watch for attractive extremes.** Both "escalate immediately" and "handle it quietly" are usually flanking distractors around a middle option that acts promptly at the candidate's own level with transparency; candidates drawn to an extreme are worth probing further at debrief.
- **The scenario's constraints are deliberately placed.** Deadlines, audiences, and the seniority of the people involved are each there to change the calculus; a candidate's answer that ignores a stated constraint is worth discussing.
- **Judge the candidate's best professional self, not a confession.** The assessment measures a candidate's judgement of effectiveness, not what they actually did once under pressure. Equally, do not reward idealism that ignores practicality: the keyed answers are effective, not saintly.

### Common candidate pitfalls

- **Choosing the idealistic option over the effective one.** "Refuse all vendor engagement" or "always escalate wrongdoing to the top" sound principled but often ignore the practical, proportionate route the role actually requires — a candidate who consistently picks these may be signalling inexperience with the political realities of the role, worth exploring in debrief.
- **Selecting passive or deferring options.** Waiting, watching, scheduling for later, or handing the problem to a board are classic weak choices: they delay action, pass the problem on, or ignore the root cause. Principals are expected to act at their own level first.
- **Solving the technical problem while ignoring the people.** At this level, most scenarios are relationship problems wearing a technical costume; an option that fixes the design but humiliates a team or conceals a decision is rarely the keyed most-effective answer.
- **Ignoring the organisation's values.** UK public sector scenarios reward transparency, inclusion, and collaboration; an option that trades these for speed or comfort is nearly always the keyed "least effective" answer.
- **Overreading the drama.** Some scenarios contain emotive detail (an angry director, an embarrassing predecessor) precisely to test whether the candidate keeps responding to the underlying issue rather than the emotion.

## Conclusion

You have now worked through four substantial assessment domains with the candidate — cognitive, numeric, verbal, and situational judgement — each built from the genuine materials of a principal solution architect's working life: governance rules and decision records, programme budgets and supplier cost models, standards, contracts and stakeholder correspondence, and the politically delicate dilemmas that reach a principal's desk precisely because no one else can resolve them.

When scoring, mark each section against the worked answers above, and note not just whether the candidate reached the correct answer but whether their reasoning matches the explanation — a right answer for the wrong reason, and a wrong answer that reveals sound partial reasoning, both deserve a note in the record. A few themes recur across the domains and are worth watching for: precision (the difference between "only if" and "if", between a percentage of the original and of the new figure, between what a passage states and what it merely makes plausible); transparency, which runs through every judgement scenario, because in public service how a decision is made is inseparable from what is decided; and, in every domain, whether the strongest responses acted at the candidate's own level first — unblocking, coaching, reframing — before reaching for escalation or mandate.

Debrief the candidate promptly, while the session is fresh for both of you. Share which sections went well and which were weaker, using the explanations above to show what a strong answer looked like — this is valuable to the candidate regardless of outcome, and it is good practice, not a concession on rigour. Keep your scoring notes and the candidate's raw answers on file, administered and retained in the same way for every candidate for this role level, so the process stays fair and defensible if it is ever reviewed.

Remember the advisory above: this is not a validated instrument, and no score from it should be the sole basis for a hiring, promotion, pay, performance, or disciplinary decision. Weigh it alongside a structured interview, a portfolio or track record review, and any other evidence your process gathers, and consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues before relying on it.
