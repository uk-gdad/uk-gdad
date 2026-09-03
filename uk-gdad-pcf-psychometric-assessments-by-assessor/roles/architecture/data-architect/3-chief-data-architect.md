# Data Architect (Chief Data Architect) - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace psychometric assessment to a candidate for chief data architect - whether as part of a formal selection process, a development centre, or a talent review panel.

Workplace job-specific psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural judgement that predict performance in a specific role. At this level, they are rarely about raw speed of calculation or trivia. Instead, they probe the capabilities that distinguish an effective chief data architect: the ability to see patterns across multiple data models and organisational domains, to reason rigorously about governance and risk, to interpret dense policy and standards documentation with precision, to work confidently with budgets, capacity figures, and assurance metrics, and to exercise sound judgement in politically sensitive, cross-government situations where the stakes are high and the audiences are senior.

This document covers four assessment types, each in its own section:

1. A workplace job-specific cognitive ability assessment, testing pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts a chief data architect genuinely handles - data models, metadata repositories, assurance reports, and architecture standards.
2. A workplace job-specific numeric reasoning assessment, testing interpretation of tables, percentages, ratios, budgets, and performance metrics drawn from realistic data architecture and governance contexts.
3. A workplace job-specific verbal reasoning assessment, testing precise comprehension of the dense written material this role lives in - data strategies, standards, governance policies, ministerial correspondence, and cross-government agreements.
4. A workplace job-specific situational judgement assessment, testing how a candidate would navigate the real dilemmas of senior data leadership - stakeholder conflict, assurance failures, innovation timing, and community leadership.

Each section explains what the assessment measures, maps it explicitly to the skills in the role profile, provides substantial practice questions with worked answers held back as your answer key, and closes with administration tips and common pitfalls for you to watch for when running and scoring the session.

How to use this resource: administer the same items and the same time limit to every candidate you assess for this role level - consistency across candidates is what makes any comparison between them fair and defensible. Keep the worked answers and explanations back from the candidate until scoring and debrief; they are your answer key, not preparation material for the candidate to see in advance. Brief the candidate clearly on format and timing before you begin, and use the explanations not only to mark each answer right or wrong but to notice the quality of a candidate's reasoning - where they showed care, where they jumped to a plausible-sounding conclusion, where their judgement stood out. Treat the situational judgement scenarios especially as a basis for a genuine debrief conversation about how the candidate would lead. And remember throughout that this assessment is one input among several in a hiring or promotion decision, never the sole basis for one.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment is a targeted psychometric test that measures the exact mental processes needed for the role, rather than abstract intelligence. Unlike a generic IQ test, it uses practical workplace scenarios, artefacts, and data formats that mirror what a chief data architect actually handles: enterprise data models, metadata repository extracts, assurance findings, standards documents, and architecture decision records.

Administer it as a timed exercise of 15 to 30 minutes if you are running it under exam conditions, and score objectively against the worked answers below rather than against overall impression. If you use an online platform, some are adaptive, adjusting question difficulty based on the candidate's previous answers, and most provide short, ungraded practice questions first so the candidate can get comfortable with the interface before the scored items begin. Where you can, record speed and accuracy separately rather than reducing the result to a single score, so a considered, accurate candidate is not penalised against a fast, careless one.

Why does this matter for the role? A chief data architect sets the vision for the organisation's use of data as directed by the appropriate governance body. They oversee the design of multiple data models simultaneously, are accountable for assuring data models at project and enterprise level, and are responsible for ensuring the organisation's systems align with the enterprise data architecture. Every one of those accountabilities depends on high-order cognitive skills: spotting the inconsistency in a model that three review boards have missed, deducing the downstream consequence of a schema change, prioritising among competing architectural risks, and holding the "larger picture" in mind while diagnosing a specific fault. This assessment makes those capabilities visible and measurable, so that you can compare candidates on them directly.

### What it measures

Mapped explicitly to the skills in the role profile:

- **Data modelling**: pattern recognition across entity-relationship structures, spotting where two models describe the same real-world concept differently, and recognising opportunities for reuse and alignment of data models across organisations. Questions present model fragments and ask the candidate to find inconsistencies, infer missing relationships, or classify models using a categorisation method.
- **Data analysis and synthesis**: logical deduction from data profiling results and source system analysis, drawing only the conclusions the evidence supports.
- **Data governance and data standards**: error checking against stated rules - given a standard, which artefacts comply and which do not? Given a governance control, which risk does it actually mitigate?
- **Metadata management**: reasoning about repository structures, lineage chains, and the logical consequences of stale or missing metadata.
- **Problem management**: anticipating problems, understanding how a problem fits into the larger picture, and structured fault diagnosis - the assessment's prioritisation and problem-solving items map directly to this skill.
- **Strategic thinking**: evaluating whether a chain of reasoning genuinely supports a strategic conclusion, and identifying the hidden assumption in a plausible-sounding argument.

### Practice questions

**Question 1 (easy) - Pattern recognition in model categorisation**

An organisation categorises its data models using a three-part code: a letter for scope (E = enterprise, D = domain, P = project), a digit for maturity (1 = draft, 2 = reviewed, 3 = assured), and a letter for modelling level (C = conceptual, L = logical, Y = physical). The candidate reviews this sequence of recently registered models: E1C, E2C, E3C, D1L, D2L, D3L, P1Y, P2Y, ...

Which code logically continues the sequence?

A) P3Y
B) E1L
C) P3C
D) D1Y

**Correct answer: A.**

**Explanation:** The sequence groups models in threes by scope (E, E, E, then D, D, D, then P, P, ...), advances maturity 1 to 3 within each group, and holds the modelling level constant within each group (C for enterprise, L for domain, Y for project). The third project model should therefore be maturity 3 with physical level: P3Y. This mirrors real work: a chief data architect who designs the method to categorise data models within an organisation must be able to verify instantly that registrations follow the scheme, and spot the one that does not.

**Question 2 (easy) - Error checking against a data standard**

An organisation's data standard states: "Every master data entity must have exactly one designated authoritative source system, a named information asset owner, and a retention schedule. Reference data entities require an authoritative source and a review cycle, but not a retention schedule."

The candidate reviews four register entries:

1. Entity "Citizen" (master data): authoritative source = CRM-1; owner = Head of Operations; retention schedule = 25 years.
2. Entity "Country Codes" (reference data): authoritative source = ISO feed; review cycle = annual.
3. Entity "Case" (master data): authoritative sources = CMS-2 and CMS-3; owner = Casework Director; retention schedule = 7 years.
4. Entity "Benefit Type" (reference data): authoritative source = Policy team spreadsheet; review cycle = none recorded; retention schedule = 3 years.

Which entries breach the standard?

A) 3 only
B) 4 only
C) 3 and 4
D) 2, 3 and 4

**Correct answer: C.**

**Explanation:** Entry 1 is fully compliant. Entry 2 is compliant: reference data needs a source and review cycle, both present. Entry 3 breaches the "exactly one authoritative source" rule because it lists two source systems - a classic real-world failure caught during enterprise assurance. Entry 4 breaches because a reference entity must have a review cycle and none is recorded; the presence of an unnecessary retention schedule is not itself a breach, but the missing review cycle is. So entries 3 and 4 breach. Careful reading of "exactly one" and "requires" is the whole game here - this is precisely the discipline a chief data architect applies when advocating for, and overseeing compliance with, data policies and standards, and this item tests whether the candidate reads conditions with that same precision.

**Question 3 (moderate) - Logical deduction from profiling results**

A team's data profiling of a legacy licensing system reports the following, all verified as true:

- Every record with a null "issue_date" also has status "pending".
- No record with status "pending" has a fee recorded.
- Some records with status "active" have a null "renewal_date".

Which one of the following conclusions must be true?

A) All records with status "pending" have a null issue_date.
B) No record with a null issue_date has a fee recorded.
C) Some records with a fee recorded have a null renewal_date.
D) Every record with an issue_date has a fee recorded.

**Correct answer: B.**

**Explanation:** From the first statement, null issue_date implies status pending. From the second, pending implies no fee. Chaining them: null issue_date implies no fee recorded - conclusion B follows necessarily. A reverses the first implication (pending records might still have issue dates). C is plausible but not compelled: we know some active records lack renewal dates, but nothing tells us any of those have fees. D is an unsupported universal claim. This is the syllogistic core of data analysis and synthesis: presenting clear insights to colleagues means never claiming more than the profiling evidence entails.

**Question 4 (moderate) - Prioritisation of assurance findings**

The candidate is accountable for assuring data models at enterprise level. Their review backlog contains four findings, and they can commission only one deep-dive this week:

1. A project team has used a non-standard date format in a physical model for an internal reporting tool due to retire in six months.
2. Two flagship programmes have independently modelled "address" in incompatible ways, and both models are about to be baselined into contracts with different suppliers.
3. A domain model is missing three optional descriptive attributes recommended by the style guide.
4. The metadata repository shows one enterprise entity with an outdated definition, already queued for the next scheduled refresh.

Which finding should be prioritised, and why?

A) Finding 1, because date-format errors propagate quickly.
B) Finding 2, because incompatible baselined models will lock divergence into supplier contracts.
C) Finding 3, because style-guide compliance sets the tone for the community.
D) Finding 4, because enterprise entities matter more than project artefacts.

**Correct answer: B.**

**Explanation:** Prioritisation at chief level weighs impact, urgency, and reversibility. Finding 2 scores highest on all three: incompatibility in a core entity like "address" across two flagship programmes creates enduring integration cost; the models are "about to be baselined into contracts", making the window to act short; and once embedded in supplier contracts, the divergence becomes expensive and slow to reverse. Finding 1 is contained and time-limited (retirement in six months). Finding 3 concerns optional attributes - low impact. Finding 4 is already queued for remediation. This exercises problem management (anticipate problems and defend against them at the right time) and the accountability for reuse and alignment of data models across organisations.

**Question 5 (moderate) - Spotting the inconsistency between models**

Two domain models describe the same operational reality. Model A states: "A Grant is awarded to exactly one Applicant. An Applicant may hold many Grants." Model B, from a partner directorate, states: "An Award links one Application to one Funding Stream. An Application is submitted by one or more Organisations acting jointly."

A programme board asks whether the two models can be aligned so that Model B's "Award" records can populate Model A's "Grant" entity. What is the most significant structural obstacle?

A) The entity names differ, so alignment is impossible.
B) Model A assumes a single recipient per grant, while Model B permits jointly submitting organisations, so one Award may map to multiple recipients.
C) Model B includes Funding Stream, which Model A lacks.
D) Model A allows an applicant to hold many grants, which Model B forbids.

**Correct answer: B.**

**Explanation:** Naming differences (A) are superficial and resolved by mapping - exactly the reuse-and-alignment work the data modelling skill in this role profile describes. An extra entity (C) is an extension, not an obstacle; Model A can simply not consume Funding Stream. Option D is false: Model B says nothing forbidding an organisation from having many applications. The genuine structural conflict is cardinality: Model A's "exactly one Applicant" cannot faithfully represent Model B's joint submissions by "one or more Organisations". Recognising cardinality conflicts - not cosmetic differences - is the heart of assessing whether models genuinely fulfil the needs of the organisation.

**Question 6 (moderate) - Metadata lineage deduction**

A metadata repository records these lineage facts:

- Dashboard K reads only from Dataset P.
- Dataset P is produced by transformation T, whose only inputs are Datasets Q and R.
- Dataset Q is extracted nightly from System X.
- Dataset R is extracted weekly from System Y.

System Y suffered a silent corruption affecting all its extracts for the past three days. Yesterday's extract of Dataset Q completed cleanly. Today is the day after Dataset R's weekly extract ran. Which statement must be true?

A) Dashboard K is unaffected because Dataset Q is clean.
B) Dashboard K is potentially showing corrupted figures, because Dataset R's most recent weekly extract fell within the corruption window.
C) Dashboard K is unaffected because transformation T would reject corrupted input.
D) Dataset P is unaffected because only one of its two inputs is corrupted.

**Correct answer: B.**

**Explanation:** R's weekly extract ran yesterday, within the three-day corruption window, so R is suspect. T consumes both Q and R, so P inherits R's corruption risk, and K reads only P, so K is potentially compromised. A and D fail because one clean input does not cleanse a blended output. C invents a validation behaviour the facts never state - a classic trap of assuming controls exist. This tests exactly the discipline behind communicating the value of metadata repositories: only recorded lineage lets a chief data architect trace impact this quickly, and only disciplined reasoning stops that impact being over- or under-stated.

**Question 7 (moderate) - Governance rule application**

A data governance framework, aligned with wider governance including budget governance, includes this control: "Any change to an enterprise data model that affects more than one business domain must be approved by the Data Design Authority (DDA). Changes within a single domain may be approved by the domain data steward, unless the change alters an entity marked as critical, in which case DDA approval is required regardless of scope."

Which change requires DDA approval?

A) Renaming an attribute on a single-domain entity not marked critical.
B) Adding an optional attribute to the "Payment" entity, marked critical, used only within the finance domain.
C) A domain steward reordering attributes in a logical model diagram with no semantic change.
D) Correcting a typo in the description field of a non-critical, single-domain entity.

**Correct answer: B.**

**Explanation:** Work the rule as written. A: single domain, not critical - steward approval suffices. B: single domain, but the entity is marked critical, triggering the "regardless of scope" clause - DDA approval required. C and D are single-domain, non-critical, and arguably not even model changes in the semantic sense. The assessment skill here is applying nested conditional logic accurately under time pressure - the same skill a chief data architect uses daily when deciding where standards need to be set and how exceptions flow through assurance mechanisms.

**Question 8 (hard) - Problem diagnosis across the larger picture**

Three symptoms surface in the same fortnight:

- The customer insight team reports duplicate citizen records appearing in their analytical store.
- The operations directorate reports that address updates made in the case management system are not reflected in outbound correspondence.
- The metadata repository shows that the "golden record" matching service's configuration was last updated 14 months ago, despite two new source systems being onboarded since.

As chief data architect, which single underlying hypothesis best explains all three symptoms?

A) The analytical store's deduplication job has a defect.
B) The correspondence system is reading a stale address table.
C) The master data matching service has not been reconfigured for the new source systems, so records from those systems are neither matched nor propagated correctly.
D) The two new source systems have poor data quality.

**Correct answer: C.**

**Explanation:** Test each hypothesis against all three symptoms, not just one. A explains duplicates but not the address propagation failure. B explains the correspondence issue but not the duplicates. D might contribute to both but does not explain why the failures began recently while the matching configuration is 14 months stale. C explains everything: unmatched records from new sources appear as duplicates downstream, and updates entering via unconfigured paths never reach the golden record that correspondence relies on; the metadata evidence directly supports it. This is problem management as the role profile defines it - understanding how a problem fits into the larger picture and describing it so others can act.

**Question 9 (hard) - Deductive reasoning about standards adoption**

The candidate is deciding where standards need to be set across the organisation. Their analysis established these facts:

- If a standard is mandated without tooling support, compliance falls below 40%.
- Every standard with compliance below 40% is withdrawn within two years.
- The proposed address standard will be mandated next quarter.
- Tooling support for the address standard cannot be funded until the following financial year, which begins five months after the mandate.

Assuming the facts hold and no other factors intervene, which conclusion is best supported?

A) The address standard will certainly be withdrawn within two years.
B) If tooling support is not delivered, the address standard's compliance will fall below 40% and it will be withdrawn within two years.
C) The address standard will achieve compliance above 40% once tooling arrives.
D) Standards should never be mandated before tooling exists.

**Correct answer: B.**

**Explanation:** A overreaches: tooling arrives five months after mandate, and the facts do not state how quickly the sub-40% compliance effect takes hold or whether a five-month unsupported window is enough to trigger it - so certainty is not available. C asserts a converse the premises never state (tooling is necessary for compliance in the first rule's logic, not sufficient). D is a policy generalisation, not a deduction. B correctly chains the conditionals while preserving the conditional form: without tooling, compliance falls below 40%, and sub-40% compliance leads to withdrawal. Precision about what follows and what merely might follow is exactly what the advice a chief data architect gives to project teams and governance bodies must carry.

**Question 10 (hard) - Pattern recognition in assurance metrics**

A quarterly enterprise assurance dashboard shows the count of models failing assurance, by quarter: Q1: 24, Q2: 12, Q3: 18, Q4: 9, Q5: 15, Q6: ?

The pattern alternates two operations. What is the expected Q6 value, and what is the pattern?

A) 21 - add 6 after each halving
B) 7.5 - halve every quarter
C) 12 - the series oscillates around 15
D) 22 - add 7 after each halving

**Correct answer: A.**

**Explanation:** Trace the operations: 24 halved is 12 (Q2); 12 plus 6 is 18 (Q3); 18 halved is 9 (Q4); 9 plus 6 is 15 (Q5). A purely mechanical continuation would halve again to get 7.5 - but a count of failing models cannot be fractional, which is the signal that the mechanical reading is wrong. The consistent whole-number reading is that the series alternates "halve" and "add 6" as paired operations, and the only offered answer that both fits the add-6-after-halving structure and respects the integer constraint is 15 + 6 = 21. Option B applies the pattern mechanically and produces an impossible count; C and D fit no operation in the series. This question deliberately rewards candidates who sanity-check answers against real-world constraints (a model cannot fail by half) rather than applying a pattern blindly - the same instinct a chief data architect applies when a metric on a governance dashboard looks arithmetically plausible but operationally absurd.

**Question 11 (hard) - Innovation adoption logic**

The candidate is evaluating when to adopt an emerging data catalogue technology, exercising the data innovation skill. Their criteria: adopt only when (i) at least two comparable government organisations have run it in production for a year, and (ii) it supports the metadata standard natively, or a funded adapter project exists. Current facts: three departments run it in production, one for 14 months, the others for 7 and 5 months; native support for the metadata standard is absent; an adapter project is scoped but its funding decision is pending next month.

What is the correct adoption decision now?

A) Adopt now - three departments use it in production.
B) Do not adopt yet - criterion (i) is unmet because only one organisation has a full year in production, and criterion (ii) is unmet because the adapter is not yet funded.
C) Do not adopt yet - criterion (i) is met but criterion (ii) is not.
D) Adopt now, conditional on the funding decision.

**Correct answer: B.**

**Explanation:** Criterion (i) requires at least two organisations with a year in production; only one qualifies (14 months), so (i) fails - option C's claim that (i) is met is wrong. Criterion (ii) requires native support (absent) or a funded adapter (pending is not funded), so (ii) also fails. Both criteria are unmet; B states this precisely. A counts deployments without checking duration; D converts a pending fact into an assumed one. Recognising the appropriate timing for adoption means holding one's own criteria steady against enthusiasm - the discipline this question tests.

**Question 12 (very hard) - Multi-constraint scheduling and prioritisation**

The candidate must sequence four assurance reviews with one senior reviewer available. Constraints:

- Review W (payments model) must complete before the DDA meets in 3 weeks.
- Review X (identity model) cannot start until an external security opinion arrives in 1 week.
- Review Y (reporting model) takes 2 weeks; W takes 1 week; X takes 2 weeks; Z (reference data) takes 1 week.
- Review Z's project team is only available in weeks 2 and 3.
- The reviewer handles one review at a time, starting now (week 1).

Which sequence satisfies every constraint?

A) W (week 1), Z (week 2), X (weeks 3-4), Y (weeks 5-6)
B) X (weeks 1-2), W (week 3), Z (week 4), Y (weeks 5-6)
C) Y (weeks 1-2), W (week 3), X (weeks 4-5), Z (week 6)
D) Z (week 1), W (week 2), X (weeks 3-4), Y (weeks 5-6)

**Correct answer: A.**

**Explanation:** Test A: W in week 1 completes before the week-3 DDA deadline; Z in week 2 falls inside the project team's weeks 2-3 availability; X starts week 3, after the security opinion arrives at end of week 1; Y follows without constraint. All constraints hold. B fails immediately because X cannot start until week 2 (opinion arrives after 1 week). C completes W in week 3 - arguably at the deadline, but Z runs in week 6, outside the team's weeks 2-3 window - fails. D schedules Z in week 1, outside the availability window - fails. Constraint-satisfaction under time pressure mirrors how a chief data architect oversees the full data product life cycle across parallel projects: the right answer is rarely the obvious first ordering, and one overlooked constraint invalidates an otherwise elegant plan.

**Question 13 (very hard) - Identifying the flawed assumption in a strategic argument**

A director presents this argument to the governance body: "Our data strategy requires all analytical datasets to be catalogued by 2027. The catalogue currently grows by 200 datasets per quarter. We have 1,600 uncatalogued datasets and eight quarters remaining. Therefore we will meet the target without additional investment."

As chief data architect, which unstated assumption is the argument most critically dependent on?

A) That the catalogue tooling will remain available.
B) That no new uncatalogued datasets will be created during the eight quarters, and the cataloguing rate will not decline.
C) That the 2027 target is genuinely required by the strategy.
D) That 200 datasets per quarter is an impressive rate.

**Correct answer: B.**

**Explanation:** The arithmetic (200 x 8 = 1,600) works only if the backlog is static and the rate constant. In reality, organisations create datasets continuously, and cataloguing rates often slow as the easy datasets are done first - so B is the load-bearing assumption; if it fails, the conclusion collapses. A matters but is a background operational assumption, not the argument's critical dependency. C challenges the premise rather than finding the hidden assumption. D is irrelevant. Evaluating current strategies to ensure business requirements are being met - the strategic thinking skill this role profile names - is largely the craft of surfacing exactly these silent assumptions before the governance body commits to them.

### Administration tips

- Have the candidate's real working context in mind when you brief them, but administer the items exactly as written; do not substitute a live artefact from their own work, however tempting, because that breaks comparability across candidates.
- Brief the candidate on the "must be true" versus "could be true" standard before they start. At this level, the common trap is not inability but over-inference born of experience - a candidate who knows what usually happens may answer with that rather than with what necessarily follows, so it helps to remind them the test asks for logical necessity.
- When you mark, check that answers respect operational reality, as in Question 10 - a strong candidate's working should notice that a count of models cannot be fractional. Treat that kind of sanity-check as a positive sign of judgement, not just correct arithmetic.
- Set and hold a consistent time budget for every candidate: the easier pattern and rule-checking items should take under a minute each, leaving proportionately more time for the multi-constraint problems. Do not let one candidate run over on a single item while another is held to time.
- If you can, give the candidate a short, ungraded warm-up - two or three logic puzzles - before the scored items begin, so their first cognitive effort of the session is not also their first scored question.

### Common pitfalls

- **Assuming unstated controls exist.** Watch for candidates who assume validation, review gates, or rollback exist because they should, rather than reasoning only from what the scenario states, as in Question 6. A candidate's working that names an assumption the scenario never gave is a marking flag, even if their final answer happens to be right.
- **Confusing plausibility with necessity.** Some candidates will be drawn to the option that describes what usually happens in government data programmes rather than what the given facts strictly entail. When marking, check that the candidate's reasoning traces back to the stated facts, not to general experience.
- **Time sink questions.** A candidate may get anchored on one hard constraint-satisfaction item and rush everything after it. If you are observing the session, note whether time pressure rather than reasoning ability explains a late flurry of weak answers.
- **Mechanical pattern application.** A candidate who applies an arithmetic pattern without checking whether the result makes sense for the quantity being counted (Question 10) has missed a genuine reasoning step, even if their arithmetic is correct.
- **Skimming nested conditions.** Rules with "unless" and "regardless of scope" clauses (Question 7) punish fast readers. When scoring, distinguish a candidate who misread a conditional clause from one who reasoned soundly but reached the wrong conclusion for some other reason - the feedback each needs is different.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data drawn from the real demands of the role. It is emphatically not an abstract mathematics exam: the questions focus on business arithmetic - percentages, ratios, cost-benefit estimations, budget allocations, and capacity figures - presented through tables, charts, and datasets of the kind that cross a chief data architect's desk every week.

Typical characteristics to replicate when you administer this: the inputs are realistic artefacts such as programme budgets, storage capacity tables, data quality dashboards, licensing cost schedules, and assurance throughput metrics. Provide an onscreen or handheld calculator, because this assessment prioritises interpretation over mental arithmetic. Set strict time limits - often around a minute to ninety seconds per question - so quick, accurate data extraction is tested as much as computation, and hold the same limit for every candidate. Brief candidates to watch especially for scale qualifiers such as "in thousands" or "per quarter"; misreading them is the single most common cause of lost marks, and it is worth telling candidates that in advance rather than letting it be a silent trap.

Why this matters for the role: a chief data architect is accountable for supporting and aligning to the organisation's data strategy, and strategy at this level is argued in numbers - the cost of duplicated data platforms, the risk-weighted value of an assurance programme, the capacity headroom of shared services, the business case for a metadata repository. They align data governance with wider governance, explicitly including budget governance. When communicating different options to a board, "taking into account risks and uncertainties" almost always means comparing quantified scenarios. This assessment tests whether a candidate can do that quickly, accurately, and without being misled by presentation.

### What it measures

Mapped to the skills in the role profile:

- **Communicating data**: turning complex numerical data into clear, actionable conclusions - most questions are, at heart, "what do these figures actually show?"
- **Data governance (data architect)**: aligning data governance with budget governance; questions use funding tables, cost allocations, and assurance investment trade-offs.
- **Data analysis and synthesis**: extracting the relevant figures from profiling outputs and dashboards, and computing rates, proportions, and trends correctly.
- **Strategic thinking**: evaluating options quantitatively - projected savings, adoption curves, and whether a plan's arithmetic actually supports its conclusion.
- **Data standards and metadata management**: compliance percentages, repository coverage rates, and the cost of non-compliance.
- **Problem management**: spotting when a number is inconsistent with its context, and quantifying the size of a problem before proposing mitigation.

### Practice questions

**Question 1 (easy) - Percentage compliance**

A data standards compliance dashboard shows that of 480 registered datasets, 312 fully comply with the organisation's metadata standard. What percentage do not fully comply?

A) 65%
B) 35%
C) 42%
D) 30%

**Correct answer: B.**

**Explanation:** Compliant proportion: 312 / 480 = 0.65, so 65% comply. Non-compliant: 100% - 65% = 35%, which is 168 datasets (480 - 312 = 168; 168 / 480 = 0.35). Option A is the trap for candidates who compute the compliant share but answer the question actually asked - always check whether the question wants compliance or non-compliance before marking a wrong answer down to arithmetic error.

**Question 2 (easy) - Budget share**

The data architecture function's annual budget is £2.4 million, allocated as: staff 55%, tooling 25%, training and community 10%, contingency 10%. The governance body asks for tooling to be increased by £120,000, funded entirely from contingency. What is the new contingency allocation in pounds?

A) £120,000
B) £240,000
C) £360,000
D) £96,000

**Correct answer: A.**

**Explanation:** Contingency starts at 10% of £2,400,000 = £240,000. Removing £120,000 leaves £240,000 - £120,000 = £120,000. Tooling rises from £600,000 (25%) to £720,000, and total remains £2.4 million. The arithmetic is simple; the skill this item tests is holding the "funded entirely from contingency" condition steady while the percentages try to distract - exactly the discipline of aligning data governance with budget governance.

**Question 3 (moderate) - Data quality improvement rate**

A data profiling exercise on the citizen master dataset finds 18,400 records with address quality defects out of 920,000 records. After the matching service is reconfigured, a re-profile finds 11,960 defective records. By what percentage did the defect count fall, and what is the new defect rate?

A) 35% fall; new rate 1.3%
B) 65% fall; new rate 1.3%
C) 35% fall; new rate 2.0%
D) 30% fall; new rate 1.5%

**Correct answer: A.**

**Explanation:** Fall in defects: 18,400 - 11,960 = 6,440. Percentage fall: 6,440 / 18,400 = 0.35 = 35%. New defect rate: 11,960 / 920,000 = 0.013 = 1.3%. Option B confuses the remaining share (11,960 / 18,400 = 65%) with the fall. When a chief data architect presents clear insights to colleagues to support the end use of the data, the difference between "defects fell 35%" and "65% of defects remain" is the difference between a good headline and a wrong one.

**Question 4 (moderate) - Storage capacity and growth**

An enterprise data platform currently holds 640 TB and grows at 5% per quarter (compounding). The platform's funded capacity ceiling is 780 TB. Will the platform breach its ceiling within four quarters, and roughly when?

A) No - four quarters of growth reaches approximately 778 TB, just under the ceiling.
B) Yes - it breaches in quarter 3.
C) Yes - it breaches in quarter 4 at approximately 795 TB.
D) No - growth is linear, reaching 768 TB.

**Correct answer: A.**

**Explanation:** Compound at 5%: Q1: 640 x 1.05 = 672 TB. Q2: 672 x 1.05 = 705.6 TB. Q3: 705.6 x 1.05 = 740.88 TB. Q4: 740.88 x 1.05 = 777.9 TB. That is just below 780 TB, so no breach within four quarters - but the headroom at the end of Q4 is only about 2 TB, meaning a breach is virtually certain early in quarter 5. Option D applies simple rather than compound growth (640 x 1.20 = 768). A chief data architect would report both facts to the governance body: technically within ceiling this year, but the funding decision for expansion cannot wait - communicating options while taking account of risks and uncertainties.

**Question 5 (moderate) - Cost per model assured**

An enterprise assurance team of 4 FTE costs £380,000 per year fully loaded and assured 95 data models last year. A proposal adds 1 FTE at £85,000, with an expected uplift to 130 models assured per year. What is the change in cost per model assured?

A) Falls from £4,000 to £3,577 - roughly an 11% reduction
B) Rises from £4,000 to £4,650
C) Falls from £4,000 to £3,577 - roughly a 22% reduction
D) Falls from £3,800 to £3,500

**Correct answer: A.**

**Explanation:** Current cost per model: £380,000 / 95 = £4,000. Proposed: (£380,000 + £85,000) / 130 = £465,000 / 130 = £3,576.92, approximately £3,577. Reduction: (£4,000 - £3,577) / £4,000 = £423 / £4,000 = 0.1058, roughly 11%. Option C pairs the right figures with a wrong percentage - a reminder that a candidate should finish the calculation rather than pattern-match to plausible-looking numbers. Unit-cost analysis like this is precisely how a chief data architect justifies assurance investment when aligning with budget governance.

**Question 6 (moderate) - Ratio of reuse**

Across government, a team surveys 240 data models in its domain cluster. They classify 96 as "aligned to a shared cross-government model", 84 as "locally bespoke but mappable", and the remainder as "incompatible". What is the ratio of aligned to mappable to incompatible models, in simplest form?

A) 8 : 7 : 5
B) 96 : 84 : 60
C) 4 : 3 : 2
D) 8 : 7 : 6

**Correct answer: A.**

**Explanation:** Incompatible: 240 - 96 - 84 = 60. Ratio 96 : 84 : 60. Divide by the greatest common divisor, 12: 96/12 = 8, 84/12 = 7, 60/12 = 5, giving 8 : 7 : 5. Option B is the unsimplified ratio; C and D each mis-simplify one term. Reuse-and-alignment metrics like these are the evidence base when a chief data architect works across government recognising opportunities for the reuse and alignment of data models in different organisations.

**Question 7 (moderate) - Weighted risk scoring**

An assurance mechanism scores each system's data risk as: (data sensitivity score x 0.5) + (volume score x 0.2) + (integration criticality score x 0.3), each component scored 1-10. Three systems are assessed:

| System | Sensitivity | Volume | Integration |
|---|---|---|---|
| Grants platform | 6 | 8 | 4 |
| Identity service | 9 | 5 | 9 |
| Reporting store | 4 | 9 | 6 |

Which system has the highest weighted risk score, and what is it?

A) Identity service, 8.2
B) Grants platform, 5.8
C) Identity service, 7.7
D) Reporting store, 6.4

**Correct answer: A.**

**Explanation:** Grants: (6 x 0.5) + (8 x 0.2) + (4 x 0.3) = 3.0 + 1.6 + 1.2 = 5.8. Identity: (9 x 0.5) + (5 x 0.2) + (9 x 0.3) = 4.5 + 1.0 + 2.7 = 8.2. Reporting: (4 x 0.5) + (9 x 0.2) + (6 x 0.3) = 2.0 + 1.8 + 1.8 = 5.6. Identity service leads at 8.2. Option D miscalculates the reporting store; option C is a near-miss arithmetic slip (forgetting one component's decimal). Weighted scoring is the arithmetic backbone of "assure corporate services by understanding important risks and providing mitigation through assurance mechanisms" - and this item checks whether the candidate can execute it flawlessly under time pressure.

**Question 8 (hard) - Metadata repository business case**

A metadata repository licence costs £150,000 per year plus £60,000 annual support. Implementation is a one-off £220,000 in year 1. The repository is expected to save analysts 15 minutes per data discovery task; the organisation performs approximately 48,000 such tasks per year, and analyst time is costed at £52 per hour. Assuming the savings accrue in full in both years, what is the approximate net financial position over the first two years?

A) Net benefit of approximately £608,000
B) Net cost of approximately £150,000
C) Net benefit of approximately £624,000
D) Net benefit of approximately £828,000

**Correct answer: A.**

**Explanation:** Annual time saving: 48,000 tasks x 15 minutes = 720,000 minutes = 12,000 hours. Annual value: 12,000 hours x £52 = £624,000. Two-year benefit: 2 x £624,000 = £1,248,000. Two-year cost: implementation £220,000 + 2 x (£150,000 licence + £60,000 support) = £220,000 + £420,000 = £640,000. Net position: £1,248,000 - £640,000 = £608,000 net benefit. Option C is the single-year gross saving masquerading as a net figure; option D forgets the £220,000 implementation cost (£1,248,000 - £420,000 = £828,000); option B is what a sceptic gets by counting two years of costs against only one year of benefit - a scenario worth acknowledging when presenting, because in reality benefits rarely start on day one. This is the arithmetic behind "communicate the value of metadata repositories": a governance body will probe exactly these terms - benefit start date, running costs, and the difference between gross and net - so a strong candidate's answer states each assumption as they compute, and that habit is worth noting favourably even where the final figure is slightly off.

**Question 9 (hard) - Interpreting a data quality dashboard**

A quarterly dashboard reports completeness of five critical entities (percentage of mandatory attributes populated):

| Entity | Q1 | Q2 | Q3 |
|---|---|---|---|
| Citizen | 91% | 93% | 94% |
| Address | 82% | 80% | 86% |
| Case | 77% | 79% | 78% |
| Payment | 96% | 96% | 95% |
| Organisation | 68% | 74% | 79% |

Which entity showed the largest percentage-point improvement from Q1 to Q3, and what was it?

A) Organisation, 11 percentage points
B) Address, 6 percentage points
C) Organisation, 16.2%
D) Citizen, 3 percentage points

**Correct answer: A.**

**Explanation:** Q1-to-Q3 changes: Citizen +3, Address +4, Case +1, Payment -1, Organisation +11. Organisation improves most, by 11 percentage points (68% to 79%). Option C is the relative change (11/68 = 16.2%) mislabelled as the answer - the question asked for percentage points. Option B misreads Address's dip-and-recover pattern (net +4, not +6). Distinguishing percentage points from percentage change is a signature trap in numeric tests and in real governance reporting alike; presenting one as the other in a board paper is exactly the kind of miscommunication the communicating data skill in this role profile exists to prevent.

**Question 10 (hard) - Programme funding allocation**

The data strategy programme has £5.6 million to allocate across four workstreams in the ratio 4 : 3 : 2 : 5 (platform, governance, community, migration respectively). Mid-year, £700,000 is cut, applied proportionally. How much does the governance workstream lose, and what is its revised allocation?

A) Loses £150,000; revised £1,050,000
B) Loses £175,000; revised £1,225,000
C) Loses £150,000; revised £1,200,000
D) Loses £140,000; revised £1,060,000

**Correct answer: A.**

**Explanation:** Ratio total: 4 + 3 + 2 + 5 = 14 parts. Each part: £5,600,000 / 14 = £400,000. Governance (3 parts): £1,200,000. Proportional cut: governance share of £700,000 is (3/14) x £700,000 = £150,000. Revised: £1,200,000 - £150,000 = £1,050,000. Option C gives the original allocation as "revised". Option B misassigns 3.5 parts. Ratio-based allocation and proportional reduction is bread-and-butter arithmetic for a chief data architect defending workstreams through budget governance in a spending-review climate.

**Question 11 (hard) - Adoption curve versus target**

A data standards adoption plan requires 90% of the organisation's 340 in-scope systems to comply within three years. Current compliance: 136 systems. The remediation pipeline upgrades systems at a steady 55 systems per year, but 10% of upgraded systems regress within the same year and must be redone the following year (counting against that year's 55). How many compliant systems will there be at the end of year 3, and is the target met?

A) 288 systems (about 85%) - target missed
B) 301 systems (about 89%) - target missed
C) 306 systems (90%) - target met exactly
D) 271 systems (about 80%) - target missed

**Correct answer: A.**

**Explanation:** Target: 90% of 340 = 306 systems. Effective net progress: each year 55 systems are upgraded but 10% (5.5, call it 5-6) regress and consume next year's capacity. Year 1: 136 + 55 = 191, minus 5.5 regressed = 185.5 net compliant entering year 2. Year 2: 55 upgrades, of which 5.5 slots effectively redo regressions; net new = 55 - 5.5 = 49.5 plus recovery of the 5.5 = net +55 gross but 10% of this year's upgrades (5.5) regress again: compliant approximately 185.5 + 55 - 5.5 = 235. Year 3: similarly +49.5 net plus the ongoing 5.5 redo churn: approximately 235 + 55 - 5.5 = 284.5, and adding back the final year's in-flight redos gives approximately 288. Compliance: 288 / 340 = 84.7%, short of 306. The precise modelling can vary by a few systems depending on assumptions, but every defensible reading lands well short of target - which is the strategic point. When evaluating current strategies to ensure business requirements are being met, an adoption plan that looks sufficient on gross throughput (55 x 3 = 165 new; 136 + 165 = 301, already short) fails even faster once regression churn is modelled. A candidate who spots that the gross plan misses before even modelling churn has found the fastest route to the right answer under exam conditions.

**Question 12 (very hard) - Cost of divergent models**

Two programmes built divergent "address" models. Integration between them requires a translation service costing £95,000 per year to operate, plus an average of 12 defects per year each costing £4,500 to resolve. Converging the models is a one-off project estimated at £310,000, after which translation and defect costs cease, but convergence adds £20,000 per year in shared model governance. Over a four-year horizon, what is the net saving from converging at the start of year 1?

A) £286,000
B) £306,000
C) £206,000
D) £366,000

**Correct answer: C.**

**Explanation:** Status quo annual cost: £95,000 translation + (12 x £4,500) defects = £95,000 + £54,000 = £149,000 per year. Over four years: 4 x £149,000 = £596,000 avoided if convergence happens at the start of year 1. Convergence cost over the same horizon: £310,000 one-off + (4 x £20,000) ongoing governance = £310,000 + £80,000 = £390,000. Net saving: £596,000 - £390,000 = £206,000. Option A (£286,000) is exactly £80,000 too high - it is what results from forgetting that the converged state carries £20,000 per year of governance cost; the distractors are deliberately spaced by that governance term because omitting the target state's running costs is the most common real-world business-case error. Option D nets only the one-off cost against gross savings. A strong candidate totals both cost structures over the same horizon before differencing, and states explicitly that the saving is net of new governance overheads - the kind of statement that lets a figure survive scrutiny in front of a board.

**Question 13 (very hard) - Capacity, concurrency and the larger picture**

A shared analytical platform serves 3 departments. Peak concurrent query load is 420 queries; the platform sustains 500. Department A plans a new service adding 15% to peak load; Department B plans one adding 60 queries; Department C will retire a service, removing 8% of the current peak. All changes land next quarter. What is the projected peak load, and what headroom remains?

A) 509.4 queries - the platform is over capacity by about 9 queries
B) 489 queries - headroom of 11 queries
C) 509 queries - headroom of 9 queries
D) 449 queries - headroom of 51 queries

**Correct answer: A.**

**Explanation:** Department A adds 15% of 420 = 63 queries. Department B adds 60. Department C removes 8% of 420 = 33.6 queries. Projected peak: 420 + 63 + 60 - 33.6 = 509.4. Capacity is 500, so the platform is over capacity by 9.4 queries - roughly 2% over. Option C computes the same figure but misreads it as headroom; option B subtracts A's addition incorrectly. The strategic insight matters more than the decimals: three individually reasonable changes, each approved in isolation by different governance routes, combine to breach shared capacity. This is the numeric face of problem management - anticipating problems and defending against them at the right time - and of the accountability a chief data architect holds for ensuring systems are designed in accordance with the enterprise data architecture rather than approved piecemeal.

**Question 14 (moderate) - Licensing consolidation savings**

An organisation runs three separate data catalogue tools inherited from a machinery-of-government merger, costing £84,000, £126,000, and £57,000 per year respectively. Consolidating onto the mid-priced tool requires expanding its licence by 40% of its current cost, plus a one-off migration cost of £95,000. What is the payback period for consolidation, to the nearest quarter of a year?

A) About 1 year
B) About 0.75 years (three quarters)
C) About 1.25 years
D) About 2 years

**Correct answer: A.**

**Explanation:** Current total annual cost: £84,000 + £126,000 + £57,000 = £267,000. Consolidated annual cost: £126,000 x 1.40 = £176,400. Annual saving: £267,000 - £176,400 = £90,600. Payback: £95,000 one-off / £90,600 per year = 1.05 years - about 1 year to the nearest quarter. Option B tempts candidates who forget the 40% licence expansion and divide £95,000 by the larger, wrong saving of £141,000 (£95,000 / £141,000 = 0.67); option D doubles the migration cost or halves the saving. Payback arithmetic is the lingua franca of consolidation cases, and rationalising duplicated tooling after organisational change is a recurring chief data architect duty - a candidate fluent in it can answer the finance director's first question before it is asked, which is worth watching for.

**Question 15 (hard) - Assurance throughput and utilisation**

An assurance team has 5 reviewers. Each has 46 working weeks per year, of which 20% is consumed by community, training, and governance duties. A standard model review takes 1.5 reviewer-weeks; an enterprise-level review takes 4 reviewer-weeks. Next year's demand forecast is 96 standard reviews and 14 enterprise reviews. What is the approximate utilisation of the team's available review capacity?

A) About 109% - the team is over capacity
B) About 87% - comfortable headroom
C) About 100% - exactly at capacity
D) About 76% - substantial spare capacity

**Correct answer: A.**

**Explanation:** Available capacity: 5 reviewers x 46 weeks = 230 reviewer-weeks, minus 20% overhead = 230 x 0.80 = 184 reviewer-weeks for reviews. Demand: (96 x 1.5) + (14 x 4) = 144 + 56 = 200 reviewer-weeks. Utilisation: 200 / 184 = 1.087, about 109% - the team is roughly 16 reviewer-weeks over capacity. Option C is what results from forgetting the 20% overhead (200 / 230 = 87% - which is option B's figure mislabelled); option D miscomputes demand. The managerial consequence matters more than the decimals: at 109% forecast utilisation a chief data architect must either add capacity, reduce review scope, or triage demand - and this is exactly the quantified argument they would take to budget governance rather than letting the queue silently lengthen and assurance quality silently fall.

### Administration tips

- Have the core toolkit in mind when you brief and observe: percentages, percentage points versus percentage change, ratios, weighted averages, compound growth, and unit costs. These six patterns cover the vast majority of questions at this level, and knowing them lets you recognise quickly which kind of slip a wrong answer reflects.
- Remind candidates to read tables fast but questions slowly. Most errors at senior level are extraction errors (wrong row, wrong period, wrong unit), not calculation errors, so when marking a wrong answer, check first whether the candidate extracted the right figures before concluding they cannot do the arithmetic.
- Provide a calculator for arithmetic, but do not expect it to replace estimation. A strong candidate's working will show an order-of-magnitude estimate before the precise computation; if their final figure disagrees wildly with that estimate and they do not notice, that is worth recording as a gap in the debrief.
- Draw on real, currently relevant artefacts when preparing a session outside these set items: a recent assurance dashboard, a programme's budget spreadsheet, a platform capacity report. Doing so keeps the assessment grounded in the organisation's actual numbers, provided you administer it identically to every candidate for the role level.
- In the business-case questions (8 and 12 especially), check whether the candidate's answer identifies when benefits start and whether the new state carries running costs; getting either wrong moves the final figure by six figures, and noticing that distinction is itself a signal worth recording.
- Note which items a candidate answers quickly and correctly and which take disproportionate time; a ratio-simplification question and a three-stage business case are scored the same, but timing differences tell you about a candidate's judgement under pressure.
- If timing feels unfamiliar to a candidate, a short, clearly-labelled practice item before the scored session begins helps separate unfamiliarity with the format from genuine numeric weakness - keep this consistent across candidates.

### Common pitfalls

- **Misreading chart and table labels.** Watch for candidates confusing quarterly with annual figures, or ignoring scale qualifiers like "in thousands" - the tables in this section are dense on purpose, at chief level, so a wrong answer here can reflect careless extraction rather than weak numeric reasoning.
- **Percentage points versus percentages.** A candidate who reports an 11 percentage-point rise as "16.2% improvement" (or vice versa) has made an error that is both a test trap and a genuine governance-paper hazard - flag it specifically in feedback, since it recurs in real board papers.
- **Over-calculating.** Some strong candidates perform full precision arithmetic where an order-of-magnitude estimate would have eliminated three options in seconds (Question 11 rewards estimation before modelling); this is not wrong, but slow candidates who over-calculate throughout may be showing a habit worth exploring in debrief.
- **Time sink questions.** A candidate may get anchored on a multi-stage business case while easier ratio and percentage items go unanswered. If you are observing live, note whether a strong candidate's weak overall score is really a pacing problem.
- **Forgetting the new state's costs.** Check whether a candidate's business-case answer nets a one-off investment against gross savings without accounting for the ongoing running costs of the target state - a common and consequential omission.
- **Answering the mirror question.** Some candidates compute compliance when the question asks for non-compliance, or headroom when it asks for breach. When marking, check the candidate answered the question actually posed, not its natural complement.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written business information. It mirrors the exact reading demands of the role: dense passages drawn from data strategies, governance policies, standards documents, assurance reports, cross-government agreements, and senior correspondence, followed by statements the candidate must judge as True, False, or Cannot Say, plus multiple-choice comprehension items.

The defining rule to explain in your briefing is fact-based logic: the candidate must answer based strictly on the text provided, setting aside outside knowledge, however extensive. "True" means the passage states it or it follows necessarily from what is stated. "False" means the passage contradicts it. "Cannot Say" means the passage provides insufficient information either way - even where a candidate's own experience tells them the statement is almost certainly correct in the real world; make this distinction clear before the session starts, since it is the single most common source of confusion. Set the time limit tightly, often under a minute per question, to simulate the pace at which the role requires triaging a crowded inbox before a board meeting - and hold that limit consistently across every candidate.

Why this matters for the role: a chief data architect lives in precise language. They create data standards for the organisation, where a single modal verb - "must" versus "should" - changes what compliance means. They are accountable for assuring data models, which requires reading design documentation exactly as written rather than as intended. They support or host difficult discussions with diverse senior stakeholders, where misquoting a policy by one clause can cost them the room. And they communicate between the technical and non-technical, which begins with extracting precisely what a text does and does not commit to. This assessment measures that precision directly.

### What it measures

Mapped to the skills in the role profile:

- **Communicating between the technical and non-technical**: interpreting the needs and commitments embedded in stakeholder correspondence, and distinguishing what was actually agreed from what was merely discussed.
- **Data standards**: parsing normative language - must, should, may, unless, except - exactly as written, because a chief data architect both writes standards and adjudicates compliance with them.
- **Data governance (data architect)**: reading governance frameworks and terms of reference closely enough to know precisely which body approves what, under which conditions.
- **Communicating data**: identifying the actual claim a report makes, including its caveats and uncertainties, before re-communicating it to others.
- **Data analysis and synthesis**: separating evidence from interpretation in analytical write-ups.
- **Strategic thinking**: detecting the difference between a strategy's stated commitments, aspirations, and assumptions.

### Practice questions

**Passage A - Extract from a departmental data strategy**

"The department will establish a single enterprise data model for its priority domains by the end of the spending review period. Priority domains are those designated annually by the Data Governance Board. Systems procured after the strategy's publication date must demonstrate alignment to the enterprise data model before receiving approval to proceed to public beta. Legacy systems are expected to align at their next major upgrade, although the Board may grant time-limited exemptions where alignment costs are demonstrably disproportionate. Nothing in this strategy removes the obligations placed on the department by existing legislation concerning the handling of personal data."

**Question 1 (easy) - True / False / Cannot Say**

Statement: Systems procured after the strategy's publication must demonstrate alignment to the enterprise data model before approval to proceed to public beta.

A) True
B) False
C) Cannot Say

**Correct answer: A - True.**

**Explanation:** This is a near-verbatim restatement of the third sentence: "Systems procured after the strategy's publication date must demonstrate alignment to the enterprise data model before receiving approval to proceed to public beta." Easy items like this test careful matching of the statement against the exact wording - note "must" in both - and a well-prepared candidate should answer them quickly and accurately.

**Question 2 (easy) - True / False / Cannot Say**

Statement: All legacy systems must align to the enterprise data model at their next major upgrade.

A) True
B) False
C) Cannot Say

**Correct answer: B - False.**

**Explanation:** The passage says legacy systems "are expected to align at their next major upgrade, although the Board may grant time-limited exemptions". The statement's "All ... must" contradicts the text twice over: "expected to" is weaker than "must", and the exemption clause means alignment is explicitly not universal. This is the must/should/expected distinction a chief data architect polices every day when advocating for, and overseeing compliance with, data policies and standards - the passage's normative language simply does not support the absolute claim.

**Question 3 (moderate) - True / False / Cannot Say**

Statement: The Data Governance Board designates priority domains every year.

A) True
B) False
C) Cannot Say

**Correct answer: A - True.**

**Explanation:** The passage states: "Priority domains are those designated annually by the Data Governance Board." "Designated annually by" directly supports "designates every year". Some candidates choose Cannot Say because the passage does not describe the Board actually doing it in any given year - but the passage's definitional sentence asserts the annual designation as how priority domains come to be, which is sufficient. This item tests whether the candidate over-thinks plainly stated text rather than reading it directly.

**Question 4 (moderate) - True / False / Cannot Say**

Statement: The strategy reduces the department's obligations under data protection legislation.

A) True
B) False
C) Cannot Say

**Correct answer: B - False.**

**Explanation:** The final sentence states: "Nothing in this strategy removes the obligations placed on the department by existing legislation concerning the handling of personal data." A strategy that removes nothing cannot be said to reduce those obligations - the passage directly contradicts the statement. Note the precision required: if the statement had said "the strategy changes how the department documents its legislative obligations", the answer would be Cannot Say, because the passage is silent on documentation. The contradiction here is specific and textual.

**Question 5 (moderate) - True / False / Cannot Say**

Statement: The Board has granted at least one exemption to a legacy system.

A) True
B) False
C) Cannot Say

**Correct answer: C - Cannot Say.**

**Explanation:** The passage says the Board "may grant time-limited exemptions" - a power, not a record of use. Whether any exemption has actually been granted is simply not addressed. A candidate's professional experience may suggest exemption powers are always used eventually; the item tests whether they can suspend exactly that experience and answer from the text alone. "May" grants possibility; it reports no events. This is the single most common Cannot Say pattern: converting a stated power or possibility into an assumed fact.

**Passage B - Email from a director general**

"Thank you for the data architecture assurance report. I accept the finding that the casework programme's data model diverges from the enterprise standard in its handling of household relationships. However, I do not accept the recommendation to pause the programme's beta launch, given the Minister's public commitment to the launch date. I have asked the programme director to fund a remediation workstream, to report monthly to your Data Design Authority, beginning after launch. I would welcome your view on whether monthly reporting gives your team sufficient oversight, or whether the DDA requires an interim gate before the service scales nationally."

**Question 6 (moderate) - Multiple choice comprehension**

Which of the following best describes the director general's position?

A) They reject the assurance report and its recommendation.
B) They accept the finding but reject the recommendation to pause, proposing post-launch remediation with monthly reporting instead.
C) They accept both the finding and the recommendation, subject to ministerial approval.
D) They defer the entire decision to the Data Design Authority.

**Correct answer: B.**

**Explanation:** The email accepts "the finding that the casework programme's data model diverges" and explicitly does not accept "the recommendation to pause the programme's beta launch", proposing a funded remediation workstream reporting monthly. A overstates the rejection (the finding is accepted); C reverses the recommendation decision; D confuses an invitation for a view ("I would welcome your view") with a delegation of the decision. Reading senior correspondence at this resolution - what precisely is accepted, rejected, proposed, and asked - is the daily substance of communicating between the technical and non-technical at the most senior levels.

**Question 7 (moderate) - True / False / Cannot Say**

Statement: The Minister has publicly committed to the beta launch date.

A) True
B) False
C) Cannot Say

**Correct answer: A - True.**

**Explanation:** The director general writes "given the Minister's public commitment to the launch date". The email asserts this as fact, and in verbal reasoning, the passage's assertions are treated as true for the purpose of the assessment. Some candidates hesitate because the claim is second-hand; but Cannot Say applies when the passage gives no information, not when the information arrives via the author's assertion. The passage explicitly states the commitment exists and is public.

**Question 8 (hard) - True / False / Cannot Say**

Statement: The remediation workstream will begin before the beta launch.

A) True
B) False
C) Cannot Say

**Correct answer: B - False.**

**Explanation:** The email states the workstream is "to report monthly to your Data Design Authority, beginning after launch". The most natural and grammatically supported reading is that the workstream's reporting - and the arrangement itself - begins after launch, which contradicts "will begin before the beta launch". Candidates who parse "beginning after launch" as attaching only to the reporting might argue Cannot Say about when work itself starts; the test rewards the direct reading, and the statement as worded ("will begin before") finds no support and direct contradiction in the only temporal anchor the text provides. When the only time reference in the passage places the activity after launch, a statement placing it before launch is false. In assurance work, this is exactly the clause a chief data architect would tighten before agreeing: "beginning after launch" should specify what begins - the work or merely the reporting.

**Passage C - Extract from a proposed cross-government data standard**

"This standard defines the exchange format for organisation identifiers across participating bodies. Participation is voluntary for arm's-length bodies but mandatory for ministerial departments from April next year. A participating body must publish a conformance statement within three months of adoption and must renew it annually thereafter. Where a participating body operates systems that cannot yet conform, it must publish a divergence register describing each non-conforming system and its remediation date. The standard does not apply to identifiers used solely within a single system that are never exchanged."

**Question 9 (hard) - True / False / Cannot Say**

Statement: An arm's-length body that chooses not to participate must publish a divergence register.

A) True
B) False
C) Cannot Say

**Correct answer: B - False.**

**Explanation:** The divergence register obligation attaches to "a participating body [that] operates systems that cannot yet conform". Participation is voluntary for arm's-length bodies; one that chooses not to participate is not a participating body, so no obligation in the passage reaches it. The statement asserts an obligation the text confines to participants - contradiction, hence False. This is scope-tracing: every "must" in a standard binds a defined subject, and a chief data architect's job as the author of organisational data standards is to know exactly who each obligation binds - this item compresses that craft into forty-five seconds.

**Question 10 (hard) - True / False / Cannot Say**

Statement: A ministerial department that adopts the standard in June must publish its first conformance statement by September of the same year.

A) True
B) False
C) Cannot Say

**Correct answer: A - True.**

**Explanation:** The passage: "A participating body must publish a conformance statement within three months of adoption." A ministerial department that adopts in June is a participating body; three months from June is September. The statement follows necessarily from the rule plus ordinary calendar arithmetic - the kind of small inferential step verbal reasoning items expect a candidate to make. Note what would flip the answer: if the statement had said "by August", it would contradict the three-month window and be False; if it had concerned a body whose participation status was unstated, Cannot Say would enter the frame.

**Question 11 (hard) - True / False / Cannot Say**

Statement: Identifiers exchanged between two systems operated by the same participating body are outside the standard's scope.

A) True
B) False
C) Cannot Say

**Correct answer: B - False.**

**Explanation:** The exclusion is precise: "identifiers used solely within a single system that are never exchanged". Identifiers exchanged between two systems fail both limbs of the exclusion - they are not within a single system, and they are exchanged. Since the passage defines the standard as covering "the exchange format for organisation identifiers", an exchange between two systems falls inside scope even when one body operates both systems; nothing in the text limits "exchange" to exchanges between different bodies. The statement claims an exemption the text does not grant, and the definition contradicts it. Reading exclusion clauses at this precision is exactly how a chief data architect decides where standards need to be set and how compliance questions get adjudicated - most real disputes live in exactly this kind of clause.

**Passage D - Extract from an assurance report to the governance body**

"Our profiling of the four source systems feeding the new analytical platform found that three provide organisation identifiers consistent with the enterprise model. The fourth, the grants legacy system, uses a locally minted identifier with no documented mapping. The programme team believes a mapping can be constructed from historical correspondence records, but this has not been tested. If no reliable mapping is achievable, grant records will be unlinkable to the organisation golden record, affecting an estimated 9% of analytical queries. We recommend that mapping feasibility be proven before the platform's assurance gate, and we note that the programme's own risk register does not currently include this risk."

**Question 12 (moderate) - Multiple choice comprehension**

Which statement most accurately reflects the report's assessment of the mapping?

A) A mapping has been constructed from correspondence records but not yet deployed.
B) The programme team believes a mapping can be constructed, but the belief is untested.
C) A reliable mapping is unachievable, so 9% of queries will fail.
D) The mapping risk is recorded on the programme's risk register.

**Correct answer: B.**

**Explanation:** The text: "The programme team believes a mapping can be constructed ... but this has not been tested." B reproduces both the belief and its untested status. A converts belief into completed construction. C converts a conditional ("If no reliable mapping is achievable ...") into a settled fact. D contradicts the report's explicit note that the risk register "does not currently include this risk". Every wrong option here upgrades tentative language into certainty - the precise failure mode the communicating data skill in this role profile guards against when carrying analytical findings to a board: the caveats are part of the finding.

**Question 13 (hard) - True / False / Cannot Say**

Statement: If the mapping proves unreliable, more than 9% of analytical queries will be affected.

A) True
B) False
C) Cannot Say

**Correct answer: B - False.**

**Explanation:** The report says an unreliable mapping would affect "an estimated 9% of analytical queries". The statement claims more than 9% would be affected, which contradicts the estimate the passage gives - within the closed world of the passage, the estimate is the fact. Had the statement said "approximately 9% of queries would be affected", it would be True; had it said "9% of grant records would be unlinkable", it would be False for a different reason - the 9% attaches to queries, not records, and precision about what a percentage measures is a habit this role cannot do without. Candidates tempted by Cannot Say ("estimates can be wrong") are importing outside scepticism; the test's rule is that the passage's claims, including its estimates, are the evidence base.

**Question 14 (moderate) - True / False / Cannot Say**

Statement: The report recommends delaying the platform's assurance gate.

A) True
B) False
C) Cannot Say

**Correct answer: C - Cannot Say.**

**Explanation:** The recommendation is "that mapping feasibility be proven before the platform's assurance gate". That sequences the proof before the gate; it does not say the gate must move. If feasibility can be proven quickly, no delay follows; if not, a delay might - but the report itself neither recommends nor rules out moving the gate. The distinction between "X must happen before Y" and "Y must be delayed" is subtle and entirely real: in assurance practice these are different asks with different political costs, and conflating them in front of a governance body would misrepresent the report. Cannot Say is the disciplined answer.

**Passage E - Extract from the terms of reference of the Data Design Authority**

"The Data Design Authority (DDA) approves changes to enterprise data models and adjudicates disputes concerning data standards. The DDA meets monthly and is quorate when the chief data architect or their nominated deputy and at least three domain representatives are present. Decisions are made by consensus; where consensus cannot be reached, the chair holds a casting vote. Urgent decisions between meetings may be taken by the chair and ratified at the next meeting; any decision not ratified is void from the date of the meeting. The DDA reports quarterly to the Data Governance Board, which may overturn DDA decisions only on grounds of strategic misalignment or legal risk."

**Question 15 (moderate) - True / False / Cannot Say**

Statement: A DDA meeting attended by the chief data architect's nominated deputy and three domain representatives is quorate.

A) True
B) False
C) Cannot Say

**Correct answer: A - True.**

**Explanation:** The quorum rule requires "the chief data architect or their nominated deputy and at least three domain representatives". The described meeting has the nominated deputy (satisfying the first limb via "or") and exactly three domain representatives (satisfying "at least three"). Both limbs are met, so the meeting is quorate. Candidates sometimes stumble on "at least three" (three qualifies) or assume the chief must attend personally (the "or" says otherwise). Parsing conjunctions and disjunctions in governance documents - and versus or, at least versus more than - is a skill a chief data architect exercises every time they check whether a decision of their own authority was validly made.

**Question 16 (hard) - True / False / Cannot Say**

Statement: An urgent decision taken by the chair between meetings has no effect until it is ratified.

A) True
B) False
C) Cannot Say

**Correct answer: B - False.**

**Explanation:** The passage says urgent decisions "may be taken by the chair and ratified at the next meeting; any decision not ratified is void from the date of the meeting". A decision that is void only "from the date of the meeting" if not ratified necessarily had effect between being taken and that meeting - otherwise there would be nothing to void from that date. The statement claims no effect until ratification, which the voiding rule's structure contradicts. This is the hardest kind of verbal item: the answer lives not in any single clause but in what a clause's wording implies about the interim period. It is also exactly the kind of drafting subtlety a chief data architect would interrogate when setting up robust governance processes - does an unratified urgent decision unwind retrospectively or only prospectively? This text answers: prospectively.

**Question 17 (moderate) - True / False / Cannot Say**

Statement: The Data Governance Board may overturn a DDA decision because it disagrees with the technical design choice.

A) True
B) False
C) Cannot Say

**Correct answer: B - False.**

**Explanation:** The passage restricts the Board's power: it "may overturn DDA decisions only on grounds of strategic misalignment or legal risk". Technical disagreement is neither of the two permitted grounds, and the word "only" closes the list. The statement therefore asserts a power the text explicitly limits away - False. If the passage had lacked the word "only", the answer would arguably be Cannot Say, since an open list might admit other grounds; a single word carries the whole question. When a chief data architect drafts or negotiates terms of reference for the governance mechanisms they operate, "only" is one of the most consequential words they will place - this item tests reading it with the weight it deserves.

### Administration tips

- Brief the candidate on the closed-world rule before they start: for every statement, they should ask what the text states, what it contradicts, and what it simply does not address, and label accordingly. Confirm they understand this distinction before the scored items begin, since it drives most of the marking.
- Explain that normative language - must, should, may, expected, unless, except, solely - carries most of the marks in these passages, just as it does in a real standard a candidate would draft or adjudicate. Candidates who read it forensically tend to score well here.
- If you draw material from beyond these set passages, use the candidate's genuine reading diet for the role: a page of a government data strategy, a standard's conformance clause, senior correspondence. Keep the same passage and time limit for every candidate you assess at this level.
- Hold the time limit consistently: strong candidates tend to read the statement first, then hunt the passage for the governing sentence, rather than reading the whole passage deeply before looking at the questions. Do not extend time for candidates who read exhaustively - that is itself useful information about their approach.
- Expect experienced candidates to be tempted to answer from career knowledge rather than the page; that is exactly what the Cannot Say option is calibrated to catch, and a candidate's ability to resist it is a genuine signal, not a technicality.
- When marking a close call, re-read the statement for a quantifier, modal verb, or scope word ("all", "must", "only", "solely") before concluding the candidate misjudged the passage - in the majority of near-miss disagreements at senior level, the ambiguity sits in the statement's wording, not in the candidate's reasoning.

### Common pitfalls

- **Making assumptions.** Watch for candidates importing personal knowledge of standards, governance, or how departments behave instead of relying only on the provided text. Ironically the strongest candidates for this trap are often the most experienced ones - do not mistake confident, experience-based reasoning for correct reasoning if it strays from the passage.
- **Converting possibility into fact.** A candidate who reads "may grant exemptions" as "has granted exemptions", or "believes a mapping can be constructed" as "a mapping exists", has made a specific and common error worth naming precisely in feedback.
- **Misinterpreting nuance.** Some candidates confuse a likely outcome, an estimate, or an expectation stated in the text with an absolute fact - and, in the other direction, some fail to treat the passage's own assertions as true within the assessment's closed world.
- **Scope slippage.** Check whether a candidate applies an obligation to a subject the text does not bind (Question 9), or reads an exclusion more broadly than its exact wording allows (Question 11) - both are precise, nameable errors.
- **Poor time management.** A candidate who reads every passage exhaustively before looking at the questions will typically run short of time; statement-first scanning is faster and more accurate, and its absence is visible if you are observing the session.
- **Answer symmetry bias when marking.** Do not second-guess a correct run of same-category answers on the assumption that a fair test balances True, False, and Cannot Say. Judge each item strictly against its own text, even where a candidate's answers cluster.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill, and professional conduct through realistic workplace dilemmas. Unlike the logic and numeric assessments, there is often no single objectively right answer: several responses may seem reasonable, and the task is to identify which behaviour best fits the role's responsibilities and the organisation's values. Response formats vary: a candidate may be asked to pick the most effective and least effective actions from a set, or to rank or rate every option from best to worst. Timing is usually generous or untimed, because this assessment is interested in a candidate's natural judgement rather than their speed - so there is little reason to press candidates for time here even if you have timed the other three sections tightly.

For a chief data architect, the scenarios are drawn from the genuine dilemmas of senior data leadership in the UK public sector: an assurance finding that collides with a ministerial commitment; two directors general with incompatible data models and equal seniority; an innovation the candidate believes in but whose timing is wrong; a data architecture community losing faith in its standards; a governance body asking them to soften a risk. The values against which options are judged are the values of government digital and data work: user needs first, transparency and candour, collaboration across boundaries, accessibility and inclusion, evidence-based decisions, and responsible stewardship of public money and citizens' data.

Two calibration points to hold in mind before you score. First, effective options at chief level usually act through the right mechanism - governance bodies, accountable owners, standards, and communities - rather than through personal heroics; but they also do not hide behind process when direct senior-to-senior conversation is what the moment requires. Second, least effective options tend to share a signature: they delay action without gaining information, pass a problem to someone who cannot own it, solve the visible symptom while entrenching the underlying divergence, or protect short-term comfort at the cost of transparency.

### What it measures

Mapped to the skills in the role profile:

- **Communicating between the technical and non-technical**: managing expectations of diverse senior stakeholders, choosing when to host the difficult discussion personally, and handling active and reactive communication under pressure.
- **Data governance (data architect)**: routing decisions through the right governance mechanisms, aligning data governance with wider governance, and providing risk mitigation through assurance rather than personal veto.
- **Data standards**: deciding where to hold the line on compliance, where exceptions serve the organisation, and how to keep standards credible while enforcing them.
- **Problem management**: anticipating problems, defending against them at the right time, and building problem-solving capabilities in others rather than solving everything personally.
- **Strategic thinking**: keeping decisions aligned to the data strategy and the larger picture, especially when local pressures argue for expedient divergence.
- **Data innovation**: judging the appropriate timing for adoption - neither chilling innovation nor gambling the enterprise on the unproven.
- **Communicating data**: presenting options with risks and uncertainties honestly, even when a simpler story would be easier to sell.

### Practice questions

**Question 1 (moderate) - The assurance finding and the ministerial deadline**

The candidate's enterprise assurance review finds that a flagship programme's data model handles citizen consent in a way that diverges from the enterprise architecture and will make future cross-service consent management costly. The programme's public beta launches in six weeks, tied to a ministerial announcement. The programme director asks the candidate to hold the finding back until after launch "to avoid destabilising the team".

Options:

A) Agree to hold the finding back; raise it at the first post-launch review.
B) Publish the finding through the normal assurance route now, and simultaneously offer the programme director a proportionate remediation path that does not require moving the launch date.
C) Escalate directly to the permanent secretary that the programme is non-compliant and should be paused.
D) Tell the programme director the wording of the finding will be softened so it reads as an observation rather than a divergence.

**Most effective: B. Least effective: A.**

**Explanation:** B honours transparency while managing expectations - the essence of communicating between the technical and non-technical. The finding enters governance unaltered, so the assurance mechanism keeps its integrity, while the remediation path shows a strong answer distinguishing the finding (non-negotiable) from the response (negotiable, proportionate, launch-compatible). A is least effective: suppressing an assurance finding at a stakeholder's request corrodes the entire assurance mechanism a chief data architect is accountable for - if findings can be timed for convenience, none of them can be trusted, and the divergence compounds silently during exactly the period when remediation is cheapest. C is disproportionate as a first move: it spends senior capital, bypasses the governance body that directs the role's work, and demands a pause the finding may not justify. D is worse than it looks: quietly recategorising a divergence is a falsification of the assurance record, more insidious than delay because it never surfaces at all.

**Question 2 (moderate) - Two directors, two models**

Two directorates have each built their own "organisation" data model, and both directors - the candidate's peers - insist theirs becomes the enterprise standard. Integration costs are mounting. Each director has hinted that they expect the candidate's support. The data strategy is silent on which model should win.

Options:

A) Back the technically superior model and announce the decision to both directors.
B) Convene a time-boxed, criteria-based evaluation under the Data Design Authority, with both directorates agreeing the criteria before either model is assessed, and commit publicly to adopting the outcome.
C) Propose both models coexist, with a translation layer maintained between them, revisiting the question next year.
D) Ask the governance body to choose, presenting both models without a recommendation to avoid the appearance of bias.

**Most effective: B. Least effective: C.**

**Explanation:** B does three senior things at once: it moves the contest from personality to criteria, it uses the legitimate mechanism (the DDA the candidate leads) so the losing director can accept the outcome without losing face, and agreeing criteria before assessment is the classic device for making a contested decision procedurally fair - this is hosting the difficult discussion rather than avoiding it. A may pick the right model but by the wrong mechanism: an announced personal verdict between two peers converts a design question into a political grievance and undermines the standards-setting process the role is supposed to champion. D is weak in a different way: the governance body directs the chief data architect, but relies on them for exactly this recommendation; arriving without one abdicates the role and usually produces a worse-informed decision. C is least effective because it institutionalises the divergence - a permanent translation layer is the mounting integration cost made policy, and "revisit next year" is delay without new information. Reuse and alignment of models is a core accountability of the role; C abandons it.

**Question 3 (hard) - The innovation the candidate's team loves**

The candidate's data architecture community is enthusiastic about an open-source semantic-layer technology and several architects have begun using it in project work. Their own analysis, exercising the data innovation skill, is that the technology is promising but eighteen months from the maturity their enterprise needs, and unmanaged adoption is already creating unassured variation across projects.

Options:

A) Prohibit use of the technology until it reaches maturity, citing the analysis.
B) Establish a bounded pilot: two named projects, explicit evaluation criteria, a defined review date, and a community-visible write-up - while requiring all other projects to hold to current standards in the meantime.
C) Let adoption continue organically; the community's enthusiasm is evidence, and intervening would damage morale.
D) Adopt the technology as an enterprise standard now to get ahead of the divergence.

**Most effective: B. Least effective: D.**

**Explanation:** B is the textbook expression of "identify areas of innovation in data tools and techniques, and recognise appropriate timing for adoption": it converts scattered enthusiasm into a controlled experiment that generates the evidence a future adoption decision needs, keeps the enterprise assured meanwhile, and treats the community as partners - the pilot's visibility builds problem-solving capability in others rather than hoarding judgement at the top. A is defensible but heavy-handed: prohibition without a path to yes drives experimentation underground and spends the chief data architect's credibility with the community whose standards and ways of working they set. C confuses enthusiasm with evidence and lets unassured variation - the actual current harm - continue. D is least effective: standardising on technology assessed as eighteen months immature gambles the enterprise architecture to resolve a community-management problem, inverting the duty of care the accountable assurer owes.

**Question 4 (moderate) - The governance paper the candidate is asked to soften**

The candidate has drafted a paper for the data governance board stating that the organisation's metadata repository coverage has stalled at 60% and that two critical domains have no metadata stewardship at all. A senior colleague who reviews board papers suggests they "reframe the risks more positively" because the board "responds badly to red status reports".

Options:

A) Keep the risks stated plainly, but restructure the paper so each risk is paired with a costed, decision-ready mitigation option for the board.
B) Accept the reframing; a paper that lands well achieves more than a paper that is right.
C) Refuse to change anything and submit the original draft.
D) Withdraw the paper from this cycle and resubmit when the coverage figures improve.

**Most effective: A. Least effective: D.**

**Explanation:** A embodies communicating data at chief level: "understand and communicate different options, taking into account risks and uncertainties" - the risks stay honest, and pairing each with a decision-ready mitigation is what actually helps a board act rather than flinch; it also respects the legitimate kernel of the colleague's advice (boards need agency, not alarm) without the dishonest part. B trades the board's information quality for comfort - a governance body directed by softened data directs badly, and the eventual correction costs far more credibility than the red status would have. C keeps the content honest but wastes the genuine insight that presentation affects decisions; refusing all change is rigidity, not integrity. D is least effective: it deprives the board of material facts for a full cycle purely to manage optics, leaving critical domains unstewarded and unfunded precisely because the paper reporting the problem was withheld - transparency delayed into uselessness.

**Question 5 (hard) - The cross-government reuse opportunity**

At a cross-government architecture forum, the candidate discovers another department has a mature, well-documented data model for a domain their organisation is about to model from scratch, at an estimated cost of £400,000. Adopting theirs would save most of that, but it would mean accepting some modelling conventions that differ from the candidate's organisation's house style, and their own team is keen to build.

Options:

A) Commission the team to build in-house as planned; alignment with house conventions matters more than reuse.
B) Initiate a structured evaluation of the other department's model against the candidate's actual requirements, involve their team in running it, and if it fits, adopt with a documented mapping of convention differences.
C) Adopt the other department's model immediately by direction, cancelling the in-house work.
D) Ask the team to study the other department's model for ideas, then build a new version incorporating the best of it.

**Most effective: B. Least effective: A.**

**Explanation:** The role profile is explicit: work across government, recognising opportunities for the reuse and alignment of data models in different organisations. B pursues that duty properly - evaluation against real requirements rather than either reflexive adoption or reflexive rejection, and involving the team converts a threat to their build ambitions into shared analytical work, managing internal expectations while managing external alignment. C gets to the probable right answer by the wrong route: adoption by direction without evaluation risks a poor fit and buys team resentment that will surface as passive resistance during implementation. D sounds collaborative but is quietly the most expensive option - it spends most of the £400,000 anyway and yields a third variant model, adding to cross-government divergence in the name of learning from it. A is least effective: spending £400,000 of public money to preserve house style, without even evaluating the alternative, fails the reuse duty, the stewardship of public funds, and the strategic alignment the role exists to provide.

**Question 6 (moderate) - The problem nobody owns**

Duplicate citizen records are causing operational incidents. Investigation shows the root cause spans three teams: a source system, the matching service, and an analytics pipeline - each team insists the defect is elsewhere, and each has closed its ticket. The service desk keeps reopening incidents. This has run for six weeks.

Options:

A) Assemble the three teams, facilitate a joint diagnosis to build a shared description of the end-to-end problem, agree a single problem owner with a cross-team action plan, and take the systemic lesson into the governance processes.
B) Direct the candidate's own architecture team to diagnose the fault and hand each team its fix.
C) Escalate to the three teams' directors that their teams are failing to cooperate.
D) Add the issue to the enterprise risk register and review it at the next quarterly governance board.

**Most effective: A. Least effective: D.**

**Explanation:** This is the problem management skill in this role profile made flesh: "identify and describe problems, and help others to describe them" and "build problem-solving capabilities in others". A treats the real defect - a problem that fits between organisational boundaries and therefore has no describer and no owner - and fixes both the instance and the pattern; facilitating the joint diagnosis rather than performing it yourself is what builds capability that outlasts the incident. B might resolve this incident faster but teaches the organisation that cross-boundary problems are the chief architect's personal job, guaranteeing them the next hundred of them. C escalates the blame dynamic rather than the problem: directors told their teams are "failing to cooperate" defend their teams, and the diagnosis actually needed becomes harder. D is least effective: after six weeks of live operational harm, routing the issue into a quarterly review cycle is delay dressed as governance - registers record risks; they do not resolve incidents.

**Question 7 (hard) - The standard nobody follows**

The address data standard the candidate published eighteen months ago has 30% adoption. Project teams tell their architects, informally, that the standard is too rigid for their delivery timescales, but no formal exemption has ever been requested. Their community of practice has begun quietly advising teams on "pragmatic workarounds".

Options:

A) Enforce the standard: instruct assurance gates to fail any system that does not comply, with immediate effect.
B) Treat the adoption failure as evidence about the standard itself: commission a rapid review with the teams that avoided it, revise the standard or its exemption route where the criticism is fair, then re-launch with the community advocating for it and assurance gates enforcing it thereafter.
C) Withdraw the standard, since a standard with 30% adoption is doing more harm than good.
D) Ask the community of practice to stop advising workarounds and to report teams that use them.

**Most effective: B. Least effective: D.**

**Explanation:** The role sets "the standards and ways of working for the data architecture community", and this scenario tests whether the candidate understands that standards govern by consent as much as by mandate. B reads the situation correctly: 70% avoidance with zero exemption requests is diagnostic - the formal route is not credible, and the informal workaround economy is the community routing around a defect in the standard or its processes. Reviewing with the avoiders, fixing what is fairly criticised, then enforcing what survives gives a standard that is both legitimate and enforced - deciding "how to set" standards, not just what they say. A enforces a possibly defective standard and will convert quiet workarounds into open conflict at every assurance gate, with the chief data architect defending rigidity that has not been re-examined. C overcorrects: withdrawal abandons the interoperability need the standard exists to serve. D is least effective: it turns the community of practice - the chief data architect's primary instrument for building capability and consent - into an informant network, destroying the trust that makes a community function, while doing nothing about why teams avoid the standard.

**Question 8 (moderate) - The non-technical audience**

The candidate has twenty minutes with the departmental executive committee to secure £1.2 million for the metadata repository programme. Their slot follows a difficult finance discussion. The committee includes no technical members. Their draft deck has fourteen slides of architecture diagrams and repository coverage metrics.

Options:

A) Present the deck as drafted; the committee should see the technical evidence behind the request.
B) Rebuild around three things the committee governs: what the organisation cannot currently do (with two concrete service examples), what the £1.2 million buys in capability and risk-reduction terms, and what they are being asked to decide today - holding the technical detail in an annexe.
C) Ask a well-regarded operational director who benefits from the repository to co-present the case with the candidate.
D) Reduce the request to £600,000 to make approval easier after the difficult finance discussion.

**Most effective: B. Least effective: D.**

**Explanation:** This is the purest test of communicating between the technical and non-technical and communicating data: "turn complex data into clear and well understood solutions, which can be acted upon". B translates architecture into the committee's own decision language - capability, risk, money, and a specific ask - which is what "acted upon" means; the annexe respects scrutiny without forcing it. C is genuinely strong and in real life often combines with B: a benefiting operational voice is powerful advocacy; it ranks second only because co-presentation without B's restructuring still delivers the wrong deck. A mistakes evidence for communication: fourteen technical slides to a non-technical committee after a bruising finance item is how good programmes lose fundable arguments. D is least effective: halving the request because of the meeting's mood, rather than because the programme needs less, guarantees an underfunded programme and teaches the committee that the numbers presented are negotiable ambience rather than costed need - undermining every future ask.

**Question 9 (hard) - The strategy drifting out of date**

The organisation's data strategy, which the candidate is accountable for supporting and aligning to, predates a machinery-of-government change that transferred a major service into the candidate's department. Programmes are now making architecture decisions the strategy does not cover, each inventing its own direction. Refreshing the strategy formally would take the governance body six months.

Options:

A) Instruct programmes to pause architecture decisions in uncovered areas until the strategy refresh completes.
B) Issue interim architecture positions for the uncovered areas under the candidate's own authority now, explicitly labelled as interim, while initiating the formal strategy refresh through the governance body and feeding the interim positions into it as evidence.
C) Allow programmes to proceed on their own judgement and reconcile the divergence during the strategy refresh.
D) Draft the refreshed strategy yourself and circulate it as final, bypassing the six-month governance cycle given the urgency.

**Most effective: B. Least effective: D.**

**Explanation:** Strategic thinking at this level means "define strategies and policies, providing guidance to others on working in the strategic context" - including when the context has a hole in it. B fills the vacuum with legitimate, clearly-labelled interim guidance (a recognised device precisely because it separates speed from permanence), keeps programmes moving, and strengthens rather than bypasses the governance body by feeding it evidence. A stops delivery for six months to protect strategic tidiness - the cost lands on services and users, and the pause is rarely enforceable anyway. C is the quiet failure mode: six months of uncoordinated decisions creates exactly the divergence that costs millions to unwind, and "reconcile later" is problem deferral, not problem management. D is least effective: the role sets the vision "as directed by the appropriate governance body"; a self-issued final strategy is a constitutional overreach that, once noticed, undermines both the strategy's legitimacy and the candidate's own - and at the most senior levels, legitimacy is the currency everything else is bought with.

**Question 10 (hard) - Ranking: the data-sharing request**

A policy director urgently requests that citizen data from the candidate's systems be shared with another department for a cross-government initiative the Minister supports. The candidate's metadata repository shows the receiving purpose was not among those notified for this data. The director says legal can "catch up with the paperwork" after sharing begins.

Rank all four options from most to least effective:

A) Share the data now on the director's assurance, and ask legal to regularise it afterwards.
B) Decline to share until the lawful basis is established; immediately convene data protection, legal, and the receiving department to establish it at pace, and give the director a dated plan within 48 hours.
C) Share a fully anonymised or aggregated extract now if one can satisfy the initiative's immediate need, while the lawful basis for record-level sharing is established in parallel.
D) Refuse the request and report the director's suggestion to the permanent secretary as a data protection incident.

**Most effective ranking: B, C, D, A.**

**Explanation:** B leads because it is a "no, and here is how we get to yes fast" - it protects citizens' data and the department's lawfulness while treating the Minister's initiative as the legitimate priority it is; the dated plan is what makes the refusal constructive rather than obstructive, and it exercises the governance skill this role profile names of providing mitigation through assurance mechanisms. C is a close second and in practice often accompanies B: a privacy-preserving extract may genuinely unblock the initiative - it ranks below B only because offered alone it risks being treated as the permanent answer, quietly deferring the lawful-basis work. D protects the data but torches the relationship and misreads the situation: a director pushing for speed is a stakeholder to be managed and educated, not reported - the role hosts the difficult discussion before escalating it; escalation is the tool held in reserve if pressure continues after refusal. A is last and decisively so: sharing citizens' data without an established lawful basis, on a promise of retrospective paperwork, is the one option that converts a manageable governance problem into an actual breach - unlawful, corrosive of public trust, and precisely what the accountability for data governance exists to prevent. Note the general lesson of the ranking: options that find a fast, lawful path to the stakeholder's goal outrank both capitulation and confrontation.

**Question 11 (moderate) - Building capability versus doing the work**

A talented but inexperienced domain architect brings the candidate a draft data model for a politically visible service. It has a significant flaw in its handling of temporal data that will cause reporting errors. The assurance gate is in two weeks. The candidate could correct the model personally in an afternoon.

Options:

A) Correct the model yourself and send it back with the changes marked, given the deadline.
B) Book a working session that helps the architect discover the flaw through questions, let them redesign it with the candidate's review before the gate, and add temporal modelling to the community's development curriculum.
C) Send the model back marked "not ready for assurance" with a note to review the temporal design.
D) Ask a more senior architect on the team to take over the model.

**Most effective: B. Least effective: D.**

**Explanation:** The problem management skill in this role profile includes "build problem-solving capabilities in others", and at chief level developing the community is not a nice-to-have - it is how the organisation scales beyond any one person's capacity. B achieves everything at once: the flaw is fixed ahead of the gate, the architect learns temporal modelling at the deepest level (guided discovery), their confidence and ownership survive, and the curriculum addition converts one person's gap into community capability - the systemic move that distinguishes a chief architect from a senior reviewer. A fixes the model but teaches nothing except that the chief will catch and correct their errors; it also quietly tells a talented architect their work is taken from them when it matters. C provides the least help of the developmental options: a bare "not ready" with a hint leaves an inexperienced architect to struggle against a deadline, risking both the gate and their morale. D is least effective: removing the architect from a visible piece of work signals - to them and to everyone watching - that visibility is reserved for the already-senior, which is precisely how organisations fail to grow the next generation and how communities learn that stretch work is dangerous to accept.

**Question 12 (hard) - The vendor briefing and the governance body**

A major supplier briefs the candidate's governance body directly, claiming their platform "eliminates the need for enterprise data modelling" and proposing a proof of concept using live citizen data. Two board members are enthusiastic and ask why the candidate's team's modelling programme is still necessary. The candidate is given ten minutes at the next board to respond.

Options:

A) Use the ten minutes to rebut the supplier's claims point by point, demonstrating the technical inaccuracies in their briefing.
B) Acknowledge what is genuinely promising in the technology, explain in the board's own terms what enterprise modelling protects (interoperability, lawful data use, exit costs), propose evaluating the platform through the organisation's standard innovation route using synthetic data, and offer criteria by which the board can judge any such claim in future.
C) Advise the board that supplier briefings should be routed through the candidate's team in future to prevent misinformation.
D) Support the proof of concept as proposed, since the board's enthusiasm makes resistance politically costly.

**Most effective: B. Least effective: D.**

**Explanation:** B is senior stakeholder communication under adversarial conditions: it refuses the trap of a defensive technical rebuttal, gives the board decision-language rather than architecture-language, converts the supplier's momentum into the organisation's governed innovation route (with synthetic rather than live citizen data - a non-negotiable installed without drama), and - the genuinely strategic move - equips the board with evaluation criteria, building their capability to resist the next overclaiming briefing without the chief data architect in the room. A wins the argument and loses the audience: ten minutes of point-by-point rebuttal to enthusiastic non-technical board members reads as territorial defensiveness, however accurate. C may even be sensible policy, but as a ten-minute response it sounds like gatekeeping to a board already wondering if the architect is the bottleneck. D is least effective: it waves live citizen data into an unevaluated supplier proof of concept - a governance and data protection failure - and concedes the premise that the modelling programme needs no defence, purely to avoid discomfort. Political cost deferred at that price compounds.

### Administration tips

- Before scoring, have the same five values in mind for every candidate - for example: citizens' data protected, governance bodies honestly informed, standards credible and consented to, capability built in others, public money stewarded. Most scenario options sort quickly against a list like this, and holding it steady across candidates keeps your scoring consistent.
- Recognise the "no, and here is the path to yes" pattern when you see it in a candidate's answer. At chief level, the most effective option is very often the one that holds the line and offers a fast, legitimate route to the stakeholder's underlying goal - candidates who find this pattern are showing strong judgement.
- Score the mechanism, not just the outcome. Options that reach a good outcome by overreach (deciding what a governance body should decide, personally fixing what a team should learn to fix) should generally rank below options that reach it legitimately, even if their stated outcome looks similar.
- Ask the candidate to consider every option before committing to a ranking, since these distractors are written to sound strong in isolation; their weakness usually appears only in comparison, and a candidate's process of comparison is itself informative.
- Calibrate against effective chief-level behaviour when you score, not against the most cautious possible answer: candid, proportionate, and decisive behaviour should rank above maximally defensive behaviour, even where the defensive option feels safer on paper.
- Use the debrief. These scenarios sit close enough to the real work of the role that a candidate's answers are information about their leadership habits, not just their test technique - a good debrief conversation gets more out of this section than the score alone.

### Common pitfalls

- **Answering idealistically.** A candidate may choose the option that sounds noble rather than the one that is practically effective - refusing all compromise, escalating every conflict, or demanding pauses the organisation cannot afford. When marking, distinguish principled judgement from performative idealism.
- **Selecting passive options.** Quarterly reviews, risk-register entries, and "revisit next year" appear responsible but are usually delay without information gain - the classic least-effective signature. Do not let their responsible-sounding language earn them a higher rank than they deserve.
- **Solving it all personally.** At chief level, options where the candidate proposes doing the work themselves (fix the model, diagnose the fault, write the strategy alone) usually score below options that work through governance, ownership, and capability-building - watch for candidates who default to personal heroics.
- **Ignoring the values context.** UK public sector scenarios reward transparency with governance bodies, protection of citizens' data, cross-government collaboration, and stewardship of public money - an option can be commercially astute and still score poorly against these values, and it is worth explaining that to a candidate in debrief if they are surprised by their result.
- **Punishing stakeholders for pressure.** Reporting, rebuking, or bypassing a stakeholder who pushes back is rarely the most effective first move in the model answers; hosting the difficult discussion comes before escalation. A candidate who escalates too readily is not necessarily wrong to worry, but their sequencing is worth probing.
- **Over-reading the scenario.** Score the candidate's answer to the dilemma as written; do not credit or penalise them for inventing facts ("perhaps the deadline could move") that the scenario does not offer, and do not let a candidate's own invented facts unfairly inflate their apparent judgement.

## Conclusion

You have now administered four substantial assessment domains, each grounded in the real substance of the chief data architect role: a cognitive assessment built from the data models, standards registers, lineage chains, and assurance findings the role handles daily; a numeric assessment drawn from the budgets, capacity figures, compliance rates, and business cases through which the role's strategy is argued and funded; a verbal assessment built from the strategies, standards, governance papers, and senior correspondence the role reads; and a situational judgement assessment reflecting the genuine dilemmas of senior data leadership - assurance under political pressure, contested models, innovation timing, community trust, and the stewardship of citizens' data.

When you score, work through each item against the worked answer and explanation, and note not just whether the candidate reached the correct answer but the quality of the reasoning behind it - where they showed care, where they jumped to a plausible-sounding conclusion, where their judgement stood out. In the situational judgement section especially, the ranking a candidate gives is only half the value; the reasoning they offer for it, drawn out in debrief, tells you far more about how they would actually lead.

For the debrief conversation, share an honest sense of overall performance and the areas of strength and development it points to, without necessarily working through every item or disclosing the full answer key - candidates for other role levels or future rounds may see the same items, and the answer key's value depends on it staying held back. Keep a record of how you administered and scored the assessment: which items were used, what time limits applied, and how you reached your judgement on each section, so the process is defensible and repeatable if it is ever reviewed or challenged.

Administer this consistently: the same items, the same time limits, and the same scoring approach for every candidate you assess against this role level. That consistency is what allows you to compare candidates fairly, and it is also what protects the organisation if a decision is ever questioned.

Finally, hold this assessment in its proper place. It samples important capabilities, but it only samples them; a candidate's track record - models assured, standards adopted, difficult discussions well hosted - is evidence too, and this assessment should sit alongside that evidence in the wider decision, never stand in for it. Consult your organisation's human resources, people development, or legal colleagues on how it should be weighted before you use it to inform a hiring or promotion outcome.
