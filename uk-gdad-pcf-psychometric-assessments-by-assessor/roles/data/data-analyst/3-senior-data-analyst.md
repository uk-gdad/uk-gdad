# Data Analyst (Senior Data Analyst) - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for senior data analyst, a role within the UK Government Digital and Data profession that leads data analysis in a team or across an area. Whether you are running a hiring panel, an internal progression board, or a development review, this resource gives you a structured, job-specific assessment to present to the candidate, together with the answer key and the reasoning behind every answer, held back here for your use in scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the cognitive and behavioural capabilities that predict performance in a specific role. For a senior data analyst, they are not abstract puzzles. Well-designed assessments mirror the real substance of the job: quality assuring statistical outputs across a team, spotting the flaw in a data pipeline before it reaches a minister's briefing, interpreting a dense data-sharing agreement, weighing up how to handle a stakeholder who wants a chart to say something the data does not support. Used well, they are objective, they reduce bias, and they reveal how a candidate thinks under realistic pressure — something a CV cannot show. Used inconsistently — different items or different time limits for different candidates, or an assessor's own judgement substituted for the answer key — they introduce exactly the unfairness they are meant to guard against, so administer the same items, in the same way, under the same time limit, to every candidate you assess for this role level.

This document is organised into four assessment areas, each of which is commonly used for senior analytical roles in the UK public sector:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, and prioritisation using the artefacts a senior data analyst genuinely handles: datasets, pipelines, quality assurance logs, and analytical code.
2. **Workplace job-specific numeric reasoning assessment** — interpreting tables, percentages, ratios, budgets, and performance metrics of the kind a senior data analyst leads others through every week.
3. **Workplace job-specific verbal reasoning assessment** — drawing precise conclusions from dense written material such as data ethics policies, governance frameworks, stakeholder emails, and analytical reports.
4. **Workplace job-specific situational judgement assessment** — realistic dilemmas involving the stakeholders this role deals with: a team, senior leaders, policy colleagues, data governance boards, and the public whose data the role stewards.

Each section explains what the assessment measures, maps it explicitly to the skills in the role profile, provides a substantial bank of practice questions with worked answers for you to draw on when assembling a session, and closes with preparation and delivery notes and common pitfalls to watch for.

How to use this resource: select the items you intend to use before the session, and use the same set and the same time limit for every candidate you assess at this level — each section's practice questions carry a rough time-per-item, which you can use to plan how long to allow. Keep the worked answers and explanations back as your answer key; do not share them with the candidate before the assessment, and use them to score consistently and to structure a useful debrief afterwards. Remember that this assessment is one input among several: it should sit alongside a candidate's application, interview, and any other evidence, and must never be the sole basis for a decision about them.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes a senior data analyst needs, using practical workplace scenarios rather than abstract puzzles. Unlike a generic IQ test, every question is built from the tasks and data formats a senior data analyst genuinely handles: analytical datasets, transformation pipelines, quality assurance checklists, code review comments, and delivery plans. The purpose is to predict on-the-job performance — how quickly and accurately a candidate can spot a pattern, deduce a rule, find an error, or decide what to do first.

Typical format and timing: these assessments are usually delivered online, timed at around 15 to 30 minutes, with objective scoring against a benchmark or norm group. Questions are validated so that they predict job success without bias, and most platforms give the candidate a few ungraded practice items first so they can get used to the interface. Some modern platforms are adaptive, adjusting difficulty based on the candidate's previous answers, and employers often receive a breakdown of speed versus accuracy rather than a single score. For a senior role, expect the items to lean towards multi-step reasoning: not just "what is the pattern?" but "which of these five plausible explanations survives all the evidence?"

This assessment matters for this role because cognitive agility is the engine behind almost everything in the senior data analyst role profile. When a senior data analyst quality assures statistical techniques and analytical outputs across a team, they are doing high-speed error checking. When they plan the framework of an analytical data model based on appropriate data sources, they are doing structured logical deduction. When they lead the improvement of processes and ways of working with data, they are recognising patterns in how work flows and where it breaks. The assessment simply isolates and measures those mental muscles, which is why it belongs in an assessment for this role level.

### What it measures for this role

Mapping the standard cognitive dimensions to the skills named in the role profile:

- **Error checking and attention to detail** maps directly to *Applying statistical and analytical tools and techniques*, particularly the duty to quality assure statistical techniques and analytical outputs across a team. Items present outputs containing subtle inconsistencies — a total that does not reconcile, a join that silently dropped records — and ask the candidate to find them fast.
- **Logical deduction** maps to *Data preparation and linkage* (planning the framework of an analytical data model based on appropriate data sources) and *Developing code for analysis* (designing and implementing the analytical approach, including code, using appropriate standards, and tests). The candidate must infer what must be true, what cannot be true, and what remains unknown from a set of rules about data.
- **Pattern recognition** maps to *Data management* (monitoring and improving data management practices in the team) and *Data visualisation* (using a range of data visualisations to simplify a complex story). Spotting the trend, the seasonality, or the anomaly is the core act.
- **Prioritisation and problem solving** maps to *Managing a data project* (planning and implementing different stages of the data project life cycle) and *Delivering business impact through data* (developing scalable data products that align to organisational priorities). Items ask the candidate to sequence work under constraints.
- **Working-memory reasoning** underpins *Communicating between the technical and non-technical*: holding a technical chain of logic in mind while restating it simply is a cognitive skill, and several items test it.

### Practice questions

Each of these questions carries a rough time allowance, from around 90 seconds to 3 minutes depending on difficulty, useful when planning how long to give a candidate for this section. The worked answer and reasoning that follow each question are the answer key: keep them from the candidate until scoring.

**Question 1 (easy) — Error checking a summary table**

A team publishes a monthly summary of digital service transactions. A junior analyst sends the candidate this draft for quality assurance:

| Region | Transactions (Apr) | Transactions (May) | Change |
|---|---|---|---|
| North East | 12,400 | 13,020 | +9% |
| London | 45,150 | 43,344 | -4% |
| Wales | 8,200 | 9,020 | +10% |
| Scotland | 21,600 | 22,464 | +4% |
| **Total** | **87,350** | **87,848** | **+0.6%** |

One row contains an internal inconsistency. Which one?

A) North East
B) London
C) Wales
D) Scotland

**Answer: A) North East.**

**Explanation:** Check each stated percentage against the raw figures. North East: 13,020 − 12,400 = 620; 620 ÷ 12,400 = 5.0%, but the table claims +9% — inconsistent. London: 45,150 × 0.96 = 43,344 — matches exactly, consistent. Wales: 8,200 × 1.10 = 9,020 — consistent. Scotland: 21,600 × 1.04 = 22,464 — consistent. As a final habit, verify the totals too: April sums to 87,350 and May sums to 13,020 + 43,344 + 9,020 + 22,464 = 87,848, both matching the table, and 498 ÷ 87,350 ≈ 0.6%. So the single inconsistency is North East's stated change. Note the efficient technique: exact long division is not needed for every row — sanity-checking with easy multipliers (×1.10, ×0.96) and computing precisely only where a row looks doubtful is the faster route. This reconcile-every-derived-figure habit is exactly what should catch an error like this before a minister quotes it, and it is what quality assuring analytical outputs across a team requires.

**Question 2 (easy) — Logical deduction from pipeline rules**

An analytical pipeline applies these rules, in order, to incoming case records:

1. If a record has no National Insurance number, route it to the manual-review queue.
2. If a record is a duplicate of one already processed this month, discard it.
3. If a record's date of birth implies an age over 120, route it to the data-quality queue.
4. Otherwise, load it to the analytical model.

A record arrives that is a duplicate of one processed this month and has no National Insurance number. What happens to it?

A) It is discarded
B) It goes to the manual-review queue
C) It goes to the data-quality queue
D) It is loaded to the analytical model

**Answer: B) It goes to the manual-review queue.**

**Explanation:** The rules apply in order, and rule 1 fires first: the record has no National Insurance number, so it is routed to manual review before the duplicate check at rule 2 is ever reached. This is a classic sequencing deduction. The trap is to reason about which rule feels most "important" (deduplication) rather than which rule executes first. This is precisely the kind of logic a senior data analyst must hold exactly when designing and implementing analytical approaches using appropriate standards and tests — a pipeline is not a set of simultaneous conditions but an ordered procedure.

**Question 3 (moderate) — Pattern recognition in a data-quality metric**

A team tracks the weekly percentage of records failing validation in a feed from another department:

Week 1: 2.1% • Week 2: 2.3% • Week 3: 2.2% • Week 4: 6.8% • Week 5: 2.4% • Week 6: 2.3% • Week 7: 7.1% • Week 8: 2.5% • Week 9: 2.4% • Week 10: 7.0%

Which explanation best fits the pattern?

A) Data quality is steadily deteriorating across the period
B) A recurring event every third week causes a spike in failures
C) The validation rules were changed permanently in week 4
D) The failures are random noise around a stable mean

**Answer: B) A recurring event every third week causes a spike in failures.**

**Explanation:** Isolate the anomalies: weeks 4, 7, and 10 spike to around 7% while all other weeks sit in a tight 2.1–2.5% band. The spikes are evenly spaced — every three weeks — which points to a periodic cause, such as a monthly batch job, a three-weekly upload from a legacy system, or a rota-driven process. Option A fails because the baseline weeks show only a gentle drift (2.1 to 2.5), not deterioration to 7%. Option C fails because a permanent rule change would raise *all* subsequent weeks, but weeks 5, 6, 8 and 9 return to baseline. Option D fails because genuine random noise would not produce three equal spikes at equal intervals. This is the pattern-recognition discipline behind monitoring and improving data management practices in a team: separate the baseline from the periodic signal before hypothesising a cause.

**Question 4 (moderate) — Prioritisation under a deadline**

It is Monday morning. A team's sprint ends Friday, when a dashboard goes to the department's executive committee. Four tasks compete for the candidate's attention:

- **Task W:** A stakeholder has emailed asking for an extra breakdown on the dashboard, "if possible". Effort: 1 day. No other task depends on it.
- **Task X:** The dashboard's underlying data model has a known join defect that inflates one KPI by roughly 8%. Effort: 1 day. Tasks Y and W both display figures derived from this model.
- **Task Y:** The accessibility review of the dashboard found colour-contrast failures that must be fixed before publication. Effort: 2 days. Independent of W and X, but cannot start until X is fixed because the charts must be rebuilt from corrected data.
- **Task Z:** Writing the quality assurance log required by the department's analytical standards. Effort: 1 day. Must be completed last, after all other changes.

In what order should the work be sequenced?

A) W, X, Y, Z
B) X, Y, W, Z
C) X, W, Y, Z
D) Y, X, Z, W

**Answer: B) X, Y, W, Z.**

**Explanation:** Draw the dependency chain. X blocks Y (charts must be rebuilt from corrected data) and X also affects W (the extra breakdown would otherwise be built on inflated figures). Z must be last. So X must come first. Y takes 2 days and is mandatory (accessibility failures must be fixed before publication); W is optional ("if possible") and takes 1 day. After X (Monday), Y runs Tuesday–Wednesday, W runs Thursday, Z runs Friday: everything lands. Option C also starts with X, but doing optional W before mandatory Y is poor risk management: if anything slips, the discretionary task should be the casualty, not the accessibility fix. This mirrors two skills directly: planning and implementing different stages of the data project life cycle, and advising others on inclusive, accessible data visualisations — accessibility is a duty, not a nice-to-have.

**Question 5 (moderate) — Error checking analytical code logic**

A team member's code is meant to compute the median processing time for completed applications only. The logic, described in review, is:

1. Read all application records.
2. Filter to records where `status = "completed"`.
3. Replace missing `processing_days` values with 0.
4. Sort by `processing_days` and take the middle value.

Which step introduces a systematic bias, and in which direction?

A) Step 2 — it biases the median upward
B) Step 3 — it biases the median downward
C) Step 4 — it biases the median upward
D) Step 3 — it biases the median upward

**Answer: B) Step 3 — it biases the median downward.**

**Explanation:** Replacing missing values with 0 injects artificial values at the very bottom of the distribution. Every injected 0 shifts the middle position of the sorted list towards smaller values, so the reported median is pulled downward — the service appears faster than it is. The correct treatment is to exclude records with missing `processing_days` (or investigate why they are missing), not to impute an extreme value. Step 2 is legitimate given the stated aim; step 4 is a fair description of a median. This is the archetypal review comment a senior data analyst makes when leading collaboration to review and improve analytical approaches, including shared code: an innocuous-looking data-cleaning line that silently changes the statistic. Naming the *direction* of the bias matters too — a senior analyst tells stakeholders not just "the number is wrong" but "the number flatters us".

**Question 6 (moderate) — Deduction from a data dictionary**

A data dictionary for a source system states:

- Every `case` has exactly one `owner_team`.
- A `case` may have zero or more `contact_events`.
- Every `contact_event` belongs to exactly one `case`.
- A `case` is `closed` only if it has at least one `contact_event`.

An extract shows a `closed` case with an `owner_team` of "Unassigned" and no linked `contact_events`. What can validly be concluded?

A) The data dictionary is wrong
B) The extract violates the documented rules, so either the extract or the source data has a defect
C) The case was closed in error and should be reopened
D) "Unassigned" is not a real team, so the first rule is broken

**Answer: B) The extract violates the documented rules, so either the extract or the source data has a defect.**

**Explanation:** The rules say a closed case must have at least one contact event; the extract shows a closed case with none. That is a contradiction between documentation and data — but deduction stops there. It cannot be concluded that the dictionary is wrong (A): the defect may be in the extraction join, which could have dropped the contact events. It cannot be concluded that the case should be reopened (C): that is an operational decision requiring investigation, not a logical entailment. Option D fails because "Unassigned" may be a legitimate team value — the rule requires exactly one owner_team, and the case has exactly one. The disciplined conclusion is the weakest claim consistent with the evidence: something, somewhere, is defective. This is the habit behind ensuring a team understands the importance of data quality and modelling: distinguish what the data *proves* from what it merely *suggests*.

**Question 7 (moderate) — Pattern completion in a series of releases**

A team's data product releases follow a versioning pattern driven by content: 2.1.0, 2.1.1, 2.1.2, 2.2.0, 2.2.1, 3.0.0, 3.0.1, 3.0.2, 3.1.0, ...

Given the documented convention that the first number increments for breaking schema changes, the second for new backward-compatible features, and the third for fixes, which of the following release sequences would be *invalid* under the convention?

A) 3.1.0 → 3.1.1 → 3.2.0
B) 3.1.0 → 4.0.0 → 4.0.1
C) 3.1.0 → 3.2.1 → 3.2.2
D) 3.1.0 → 3.1.1 → 4.0.0

**Answer: C) 3.1.0 → 3.2.1 → 3.2.2.**

**Explanation:** Under the convention, introducing new features moves 3.1.0 to 3.2.**0** — the fix counter resets to zero when the feature counter increments. Jumping straight from 3.1.0 to 3.2.1 skips 3.2.0, which the convention cannot produce: there is no release event that increments the second number and simultaneously sets the third to 1. Options A, B and D all follow legal steps (fix, then feature; breaking change, then fix; fix, then breaking change). This is abstract rule-following of the kind that underpins leading the application and improvement of processes and ways of working with data: conventions only protect the team if everyone can reason precisely about what they permit and forbid.

**Question 8 (hard) — Multi-condition deduction about data sources**

The candidate is planning the framework of an analytical data model. Four possible sources are available, with these constraints:

- Source P updates daily but excludes records from before 2022.
- Source Q covers all years but updates quarterly.
- Source R updates daily and covers all years, but its licence prohibits linkage to person-level records.
- Source S is person-level, covers all years, updates monthly, and permits linkage.

The model must: (i) support person-level linkage, (ii) include historical records from 2019 onwards, and (iii) refresh headline (non-linked) aggregate figures at least weekly.

Which combination satisfies all three requirements with the fewest sources?

A) S alone
B) P and S
C) R and S
D) P, Q and S

**Answer: C) R and S.**

**Explanation:** Test each option against all three requirements. S alone (A): satisfies linkage (i) and history (ii), but refreshes monthly, failing the weekly aggregate requirement (iii). P and S (B): P refreshes daily, but P excludes pre-2022 records — the weekly *aggregates* drawn from P would omit 2019–2021; whether that fails depends on whether headline aggregates need full history, and since the model must "include historical records from 2019 onwards" it cannot be guaranteed that (ii) and (iii) hold together from P; S covers history but only monthly. B is therefore not safely compliant. R and S (C): S provides person-level linkage and full history (i, ii); R provides daily, all-years aggregates for the weekly headline refresh, and the linkage prohibition is irrelevant because R is used only for non-linked aggregates (iii). All three requirements met with two sources. D also works but uses three sources, failing the "fewest" criterion. The skill exercised here is exactly planning the framework of an analytical data model based on appropriate data sources: matching source properties — coverage, cadence, licence terms — to model requirements, and noticing that a licence restriction only bites if the source is used for the restricted purpose.

**Question 9 (hard) — Diagnosing a discrepancy between two outputs**

Two dashboards report "active users" for the same service in June. Dashboard A (built by the candidate's team) shows 41,200. Dashboard B (built by a supplier) shows 46,900. The candidate establishes these facts:

1. Both draw from the same raw event table.
2. Dashboard A counts a user as active if they completed at least one transaction in June.
3. Dashboard B counts a user as active if they logged in at least once in June.
4. Every transaction requires a login.
5. Some users log in but do not transact.

Which statement must be true?

A) Dashboard B's figure will always be greater than or equal to Dashboard A's
B) The difference of 5,700 equals the number of users who logged in but never transacted in June
C) Dashboard A has a defect because its figure is lower
D) The two dashboards cannot be reconciled without new data collection

**Answer: A) Dashboard B's figure will always be greater than or equal to Dashboard A's.**

**Explanation:** Fact 4 means every transacting user is also a logging-in user, so A's population is a subset of B's; a subset can never be larger, hence B ≥ A always. Option B is tempting but subtly wrong as a "must": the difference equals the number of users who logged in and never transacted *only if* both dashboards deduplicate users identically and cover exactly the same date boundaries — nothing in the facts guarantees that, so it is plausible but not entailed. Option C mistakes a definitional difference for a defect: both dashboards may be perfectly correct implementations of different definitions. Option D is too strong: the facts show the discrepancy is largely definitional, so reconciliation is analytical, not a data-collection problem. This is the senior analyst's daily bread — leading communication of data with stakeholders means explaining that two "conflicting" numbers can both be right, and that the fix is a shared definition, not a witch-hunt.

**Question 10 (hard) — Spotting the flaw in an analytical inference**

A colleague presents this finding to a programme board: "Local offices that adopted our new triage data product in 2024 cleared cases 22% faster than offices that did not adopt it. Therefore, rolling the product out to all offices will cut national case-clearance times by roughly 22%."

As the reviewer, which is the single most important logical weakness to raise?

A) The percentage should be recalculated as a median rather than a mean
B) Adoption was voluntary, so adopting offices may differ systematically from non-adopters in ways that also affect clearance speed
C) The sample of offices is too small for any conclusion
D) Case-clearance time is the wrong metric for triage products

**Answer: B) Adoption was voluntary, so adopting offices may differ systematically from non-adopters.**

**Explanation:** The inference leaps from an observed association in a self-selected group to a causal, generalisable effect. Offices that chose to adopt early are plausibly better-resourced, better-led, or already faster — classic selection bias/confounding. Until that is addressed (through matching, difference-in-differences on pre-adoption trends, or a staged rollout acting as a natural experiment), the 22% cannot be attributed to the product, let alone projected nationally. Option A is a methods detail, not the core flaw; option C asserts a fact not in evidence (the passage says nothing about sample size); option D attacks the metric without justification. Quality assuring statistical techniques across a team means ranking flaws by how much they threaten the conclusion — and challenging the causal leap first is what increases stakeholder understanding and trust rather than nitpicking.

**Question 11 (hard) — Working-memory reasoning across a transformation chain**

A dataset passes through four transformations:

1. **Filter:** remove records where `region` is null (removes 5% of records).
2. **Join:** left-join to a reference table on `postcode`; 3% of remaining records find no match and receive null enrichment fields.
3. **Derive:** compute `rate = events ÷ population`, where `population` comes from the enrichment fields.
4. **Aggregate:** average `rate` by region.

If nulls propagate silently (any calculation involving null yields null, and nulls are excluded from averages), which records end up silently excluded from the final regional averages, beyond the 5% removed at step 1?

A) None — the left join preserves all records
B) The 3% of records that found no postcode match, because their `rate` is null and drops out of the average
C) All records in regions with any unmatched postcode
D) Records with `events = 0`

**Answer: B) The 3% with no postcode match.**

**Explanation:** Walk the chain while holding each rule in mind. The left join (step 2) preserves the records but leaves their enrichment fields — including `population` — null. Step 3 then computes `rate = events ÷ null = null` for exactly those records. Step 4 excludes nulls from averages, so those records vanish from the final figures without any error being raised. Option A confuses "row preserved" with "row contributing to the result". Option C over-extends: only the unmatched records themselves drop out, not their whole region. Option D is wrong because `events = 0` yields a valid rate of 0, which *is* included. This is precisely the reasoning behind designing analytical approaches with appropriate standards and tests: a senior analyst insists on a test asserting "records entering step 3 with null population = records reported as excluded", turning silent loss into visible, logged loss.

**Question 12 (moderate) — Prioritising quality assurance effort**

The candidate has one day to quality assure four outputs before publication. Past QA logs show these defect rates and these consequences of a missed defect:

- Output 1: statistical bulletin table — historical defect rate 1 in 5; a missed defect would require a public correction notice.
- Output 2: internal exploratory notebook — defect rate 1 in 3; a missed defect would mislead the candidate's own team for a week.
- Output 3: automated dashboard fed by tested pipeline — defect rate 1 in 50; a missed defect auto-corrects at next refresh.
- Output 4: ad hoc figure for a parliamentary question — defect rate 1 in 10; a missed defect would misinform Parliament.

Only two outputs can be deeply QA'd, with the others lightly checked. Which two get deep QA?

A) Outputs 1 and 2
B) Outputs 1 and 4
C) Outputs 2 and 4
D) Outputs 3 and 4

**Answer: B) Outputs 1 and 4.**

**Explanation:** Prioritise by expected harm: likelihood × consequence. Output 1 combines a high defect rate (20%) with a severe consequence (public correction). Output 4 has a moderate defect rate (10%) but the gravest consequence available — misinforming Parliament, which in the UK public sector carries constitutional weight. Output 2 has the highest defect rate (33%) but the lowest external consequence: it is internal and exploratory, and its audience (the team itself) is well placed to catch problems. Output 3 is low-likelihood and self-correcting. The reasoning mirrors leading the improvement of processes and ways of working with data: QA capacity is finite, so a senior analyst allocates it by risk, and can explain that allocation to stakeholders in exactly these terms.

**Question 13 (hard) — Inference from an incomplete A/B comparison**

A team trials two versions of a data-collection form. Version A was live in weeks 1–4; Version B in weeks 5–8. Completion rates: A = 68%, B = 74%. A stakeholder concludes Version B is better. Which single additional fact would most seriously undermine that conclusion?

A) Week 5 coincided with a national advertising campaign that drove motivated users to the service
B) Version B's completion rate varied between 72% and 76% across its four weeks
C) The form is only available in English
D) Version A had been live for two years before the trial

**Answer: A) The advertising campaign.**

**Explanation:** The trial is a before/after comparison, not a randomised concurrent test, so anything that changed *at the same time* as the version switch is a confounder. A campaign that drove motivated users into weeks 5–8 could raise completion regardless of the form design, directly explaining the 6-point gap. Option B describes normal variation within B and slightly *supports* stability; option C affects both versions equally; option D might matter (novelty effects) but is a weaker, more speculative threat than a documented concurrent traffic change. Identifying the strongest single threat to an inference — rather than listing every imaginable caveat — is what makes a senior analyst's quality assurance useful to decision-makers and is central to developing valuable statistical insights and reports.

### Preparation and delivery notes

- **Items can be drawn from real artefacts.** A recent QA log, pipeline specification, or code review from your own organisation's data team can be adapted into further items in the same style: what must be true, what could be true, what breaks first? This is often better source material than any test publisher sells, and keeps the assessment grounded in your organisation's own work.
- **Expect strong candidates to pace-switch deliberately.** Senior-level items reward knowing when to compute exactly and when to estimate. A candidate who visibly decides within seconds whether a question needs precision or approximation is showing exactly the judgement this assessment is built to measure.
- **Watch for candidates who can talk through their reasoning.** Because this role routinely translates between the technical and non-technical, following an item with a brief "talk me through that" question — where time allows — can reveal a candidate's reasoning far better than the choice alone.
- **Control for fatigue and environment.** Cognitive scores are measurably sensitive to fatigue, so schedule sessions at a consistent time of day across candidates where practicable, and give every candidate the same ungraded practice items first so the format itself is not a source of unfairness.
- **Do not penalise "Cannot be determined" style answers.** At senior level, recognising the limit of the evidence is a sign of strength, not indecision, and should be scored accordingly.

### Common pitfalls

- **Accepting the frame handed to them.** Weaker candidates verify only the figures the question points at. A strong candidate verifies totals, definitions, and rule order too — as Questions 1 and 2 showed.
- **Choosing the "important-feeling" answer over the logically entailed one.** Options C in Questions 6 and 9 feel managerially sensible but overreach the evidence. Deduction questions score the weakest claim the evidence forces, not the boldest.
- **Time-sink questions.** Getting stuck on one multi-stage item while easier marks go unanswered is the classic score-killer. A candidate who flags, skips, and returns is using their time well.
- **Over-calculating.** Performing exact arithmetic when a rounding check would eliminate three options wastes the assessment's scarcest resource: time.
- **Assuming experience replaces the stated rules.** The assessment's pipeline conventions or data dictionary may differ from a candidate's own department's. The strongest answers come from the text in front of the candidate, not from habit.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data presented the way the job presents it: tables, performance dashboards, budget sheets, capacity plans, and survey results. It focuses on applied business mathematics — percentages, ratios, rates, weighted averages, and cost-benefit estimation — rather than abstract formulae. Most versions allow or provide an on-screen calculator, because the test is about interpretation and judgement, not mental arithmetic for its own sake.

Typical format and timing: strictly timed (often around 45–75 seconds per question, or 20–30 minutes for 15–25 questions), multiple choice, delivered online. The time pressure is deliberate: it simulates the reality of being asked "so what does this mean?" in a meeting, with the table on screen and a decision pending.

It may feel odd that a senior data analyst — someone who leads statistical work for a living — should be assessed on numeracy at all. But the assessment measures something specific and worth measuring at this level: fast, accurate extraction and manipulation of figures *without* the usual tooling. In this role, a senior data analyst quality assures numbers others produce, often live in meetings; sanity-checks a contractor's capacity model on the spot; catches the percentage-point/percent confusion in a draft submission minutes before it goes to a director. The assessment isolates that unaided fluency. Senior-level versions also weight the *interpretive* step more heavily: not just "compute the change" but "which conclusion does this table actually license?"

### What it measures for this role

Mapping numeric reasoning dimensions to the skills named in the role profile:

- **Percentages, rates and ratios** map to *Applying statistical and analytical tools and techniques* — leading the development of valuable statistical insights and reports requires instant fluency with growth rates, proportions, and rate-versus-count distinctions.
- **Tables and multi-source data extraction** map to *Data preparation and linkage* and *Data management*: combining figures across tables mirrors joining sources, and spotting when two tables use different denominators mirrors data-quality monitoring.
- **Budget and resource calculations** map to *Managing a data project* — planning stages of the data project life cycle means costing team time, licence fees, and infrastructure against a fixed budget, and communicating progress in numbers stakeholders trust.
- **Performance metrics and trade-offs** map to *Delivering business impact through data*: defining and communicating the scope of business impact requires quantifying value — time saved, error rates reduced, uptake increased — credibly and precisely.
- **Interpreting charts and summary statistics** maps to *Data visualisation*: knowing what a chart's numbers can and cannot support is the numerical backbone of simplifying a complex story honestly.

### Practice questions

A calculator may be provided, as most workplace numeric reasoning assessments allow one — the test is about interpretation, not unaided arithmetic. Each item carries a rough time allowance: 60–90 seconds for easy items, up to 3 minutes for hard ones, useful for planning the session. Full arithmetic is shown in every explanation, as the answer key.

**Question 1 (easy) — Percentage change in service demand**

A digital service processed 62,500 applications in Q1 and 71,875 in Q2. What was the percentage increase?

A) 12%
B) 15%
C) 13%
D) 9.4%

**Answer: B) 15%.**

**Explanation:** Increase = 71,875 − 62,500 = 9,375. Percentage increase = 9,375 ÷ 62,500 = 0.15 = 15%. A quick sanity check: 10% of 62,500 is 6,250 and 5% is 3,125; together 9,375 — exactly the increase, confirming 15%. Option D (9.4%) is the trap for dividing by the *new* figure (9,375 ÷ 71,875): the change should always be divided by the original value. This original-versus-new denominator error is one of the most common defects a senior data analyst catches when quality assuring analytical outputs across a team.

**Question 2 (easy) — Reading a data-quality table**

A team monitors four data feeds:

| Feed | Records received | Records failing validation |
|---|---|---|
| Benefits | 48,000 | 1,920 |
| Housing | 15,500 | 930 |
| Transport | 92,000 | 2,760 |
| Health | 26,000 | 1,300 |

Which feed has the highest validation failure *rate*?

A) Benefits
B) Housing
C) Transport
D) Health

**Answer: B) Housing.**

**Explanation:** Compute each rate: Benefits 1,920 ÷ 48,000 = 4.0%; Housing 930 ÷ 15,500 = 6.0%; Transport 2,760 ÷ 92,000 = 3.0%; Health 1,300 ÷ 26,000 = 5.0%. Housing is highest at 6%. The trap is Transport, which has the highest *count* of failures (2,760) but the lowest rate. Distinguishing counts from rates is fundamental to monitoring and improving data management practices: the feed that generates the most failure tickets is not necessarily the feed with the worst quality, and improvement effort should usually follow the rate, scaled by impact.

**Question 3 (moderate) — Project budget with licence costs**

A data project budget is £186,000 for the year. Staff costs are £12,400 per month. Analytical software licences cost £9,500 per year plus £45 per user per month for 6 users. What remains for infrastructure and contingency?

A) £24,460
B) £27,700
C) £25,060
D) £21,940

**Answer: A) £24,460.**

**Explanation:** Break the committed spend into fixed and variable components. Staff: £12,400 × 12 = £148,800. Licences: fixed £9,500 per year, plus variable £45 × 6 users × 12 months = £45 × 72 = £3,240, so licences total £12,740. Committed spend = £148,800 + £12,740 = £161,540. Remainder = £186,000 − £161,540 = £24,460. Option C (£25,060) comes from computing the variable licences over only 6 users × 10 months; option B (£27,700) forgets the £3,240 variable element; option D (£21,940) mistakenly deducts an extra half-month of staff cost. When planning and costing the stages of a data project life cycle, exactly this layered fixed-plus-variable structure is where errors hide — separating fixed and variable components, computing each fully, and reconciling at the end is the discipline a strong candidate's answer demonstrates.

**Question 4 (moderate) — Weighted average satisfaction score**

Three user groups rated a new data product. Group sizes and mean scores: policy analysts (120 users, mean 4.2), operational staff (300 users, mean 3.6), senior leaders (30 users, mean 4.5). What is the overall mean score across all users (to one decimal place)?

A) 4.1
B) 3.8
C) 3.9
D) 3.7

**Answer: B) 3.8.**

**Explanation:** Weight each mean by its group size. Total score points = (120 × 4.2) + (300 × 3.6) + (30 × 4.5) = 504 + 1,080 + 135 = 1,719. Total users = 120 + 300 + 30 = 450. Overall mean = 1,719 ÷ 450 = 3.82, which rounds to 3.8. The trap answer is A (4.1), the simple average of the three means (4.2 + 3.6 + 4.5) ÷ 3 — wrong because the groups differ hugely in size. Weighted versus unweighted averages is a distinction a senior data analyst defends constantly when leading the development of statistical insights: an unweighted mean silently over-represents the smallest, often most senior, user group.

**Question 5 (moderate) — Percentage points versus percentages**

A quarterly report states: "Data completeness for the case-management feed improved from 80% to 88%." Which of the following is the only fully correct way to describe the improvement?

A) An 8% improvement
B) An 8 percentage-point improvement, equivalent to a 10% relative increase
C) A 10 percentage-point improvement
D) An 88% improvement

**Answer: B) An 8 percentage-point improvement, equivalent to a 10% relative increase.**

**Explanation:** The absolute change is 88 − 80 = 8 percentage points. The relative change is 8 ÷ 80 = 0.10 = 10%. Option A conflates points with percent — saying "8% improvement" implies 80 × 1.08 = 86.4%, which is not what happened. This distinction is a signature senior-analyst correction: leading communication of data with stakeholders and adapting to their needs means offering both framings (points for precision, relative change for scale), which prevents both under- and over-selling the improvement, and models exactly the standard a senior data analyst quality assures across a team.

**Question 6 (moderate) — Capacity planning for a pipeline**

A nightly pipeline processes 4.2 million records in 3 hours 30 minutes. Volumes are forecast to grow 40% next year. The overnight processing window is 6 hours, but departmental standards require 25% headroom (the job must be designed to finish within 75% of the window). Assuming processing time scales linearly with volume, will next year's job meet the standard?

A) Yes — it will take 4.9 hours, within the 6-hour window
B) No — it will take 4.9 hours, exceeding the 4.5-hour design limit
C) Yes — it will take 4.2 hours, within the 4.5-hour design limit
D) No — it will take 5.6 hours, exceeding the window itself

**Answer: B) No — it will take 4.9 hours, exceeding the 4.5-hour design limit.**

**Explanation:** Current time = 3.5 hours. With 40% more volume and linear scaling: 3.5 × 1.40 = 4.9 hours. The design limit is 75% of the 6-hour window = 4.5 hours. Since 4.9 > 4.5, the job breaches the headroom standard even though it fits the raw window (4.9 < 6). Option A answers the wrong question — the standard is the design limit, not the window. This two-constraint structure (hard limit plus headroom policy) is typical of the standards a senior data analyst enforces when leading the application and improvement of processes and ways of working with data: meeting the letter of the window while breaching the resilience standard is still a fail, and optimisation work would need to be scheduled this year, not next.

**Question 7 (moderate) — Interpreting a conversion funnel**

A new online form has this funnel for 20,000 visitors: 20,000 start page → 14,000 begin form (70%) → 9,800 complete section 1 (70% of beginners) → 8,820 complete section 2 (90% of section-1 completers) → 8,379 submit (95% of section-2 completers). The service owner wants to raise end-to-end completion from its current level to 50% of visitors. If all other stages stay the same, what must the "begin form" rate become?

A) 80%
B) 84%
C) 75%
D) It cannot be done by changing that stage alone

**Answer: B) 84%.**

**Explanation:** Current end-to-end rate = 8,379 ÷ 20,000 = 41.9%. The downstream chain after "begin form" converts at 0.70 × 0.90 × 0.95 = 0.5985. For end-to-end 50%: required begin rate × 0.5985 = 0.50, so required begin rate = 0.50 ÷ 0.5985 = 0.8354 ≈ 84%. Check: 20,000 × 0.84 × 0.5985 = 10,055 ≈ 50.3% — meets the target. Since 84% < 100%, option D is wrong: it is achievable, though ambitious (a 14-point jump). Funnel decomposition like this is core to delivering business impact through data — it converts a vague target ("get completion to half") into a specific, ownable stage-level goal a senior data analyst can communicate to the service team.

**Question 8 (hard) — Cost-benefit of automation**

A team spends 22 staff-hours per week manually preparing a weekly report. An automation project would cost 190 staff-hours to build and would cut preparation to 4 staff-hours per week. Staff time is costed at £42 per hour. After how many weeks of operation does the automation break even, and what is the first-year (52-week) net saving in pounds?

A) Breaks even in week 11; net saving £31,332
B) Breaks even in week 9; net saving £39,312
C) Breaks even in week 11; net saving £39,312
D) Breaks even in week 10; net saving £31,332

**Answer: A) Breaks even in week 11; net saving £31,332.**

**Explanation:** Weekly saving = 22 − 4 = 18 hours. Break-even in hours: 190 ÷ 18 = 10.56 weeks, so the build cost is fully repaid during week 11 — the first *completed* break-even week is week 11. First-year net saving in hours = (18 × 52) − 190 = 936 − 190 = 746 hours. In pounds: 746 × £42 = £31,332. Check the multiplication: 700 × 42 = 29,400; 46 × 42 = 1,932; total 31,332 — confirmed. Option C pairs the right break-even with the gross (not net) saving: 936 × 42 = £39,312 ignores the build cost. Business cases like this are the arithmetic heart of identifying opportunities to develop data products that deliver business impact — and presenting *net* figures, with the investment openly subtracted, is what makes value claims credible to finance colleagues.

**Question 9 (hard) — Sampling for a quality audit**

A candidate audits a dataset of 250,000 records by checking a random sample of 400. The sample shows 22 records with a critical address error. Which is the best estimate of the total number of affected records, and roughly how should the uncertainty be presented?

A) 13,750 records; present as an exact count
B) 13,750 records; present as an estimate of roughly 8,000–19,000 given sampling error
C) 5,500 records; present as an estimate
D) 22 records; the error only affects the sample

**Answer: B) 13,750 records, presented with a range of roughly 8,000–19,000.**

**Explanation:** Sample error rate = 22 ÷ 400 = 5.5%. Scaled to the population: 250,000 × 0.055 = 13,750. But a sample of 400 carries sampling error: the standard error of the proportion is √(0.055 × 0.945 ÷ 400) ≈ √(0.00013) ≈ 0.0114, so a 95% interval is roughly 5.5% ± 2.2 points, i.e. about 3.3%–7.7%, or roughly 8,000–19,000 records — exactly the honest range option B presents. Option A's false precision is the classic failure: quoting 13,750 as a fact invites a stakeholder to plan remediation around a number that could plausibly be 9,000 or 18,000. Communicating estimates with proportionate uncertainty is central to engaging stakeholders to increase understanding and trust in statistical techniques — trust grows when the numbers carry their own health warnings.

**Question 10 (hard) — Reconciling two performance metrics**

A dashboard shows the mean case-processing time fell from 12.0 to 10.0 days after a process change, while the median rose from 7.0 to 8.0 days. A director asks: "Which number is right?" What is the correct interpretation?

A) The metrics contradict each other, so the data is faulty
B) Both are right: the change likely shortened the longest cases (pulling the mean down) while typical cases got slightly slower (pushing the median up)
C) The median is always right; processing got worse
D) The mean is always right; processing got better

**Answer: B) Both are right.**

**Explanation:** The mean is sensitive to extreme values; the median is not. A change that dramatically reduces a small number of very long cases (say, from 90 days to 30) can lower the mean substantially while leaving most cases untouched — and if typical cases slowed slightly (7 → 8 days), the median rises. There is no contradiction: the two statistics answer different questions ("total workload burden per case" versus "the typical user's experience"). Numerically, imagine 9 cases at 7 days and 1 at 57 days: mean 12, median 7. After the change: 9 cases at 8 days and 1 at 28: mean 10, median 8. Both movements reproduced. The senior-analyst duty here is to lead communication that adapts to stakeholder needs: a strong candidate's answer tells the director *both* stories and names which metric matches their actual question, rather than crowning one number "right".

**Question 11 (hard) — Ratio reasoning across linked tables**

Table 1 shows an analytical model links records from two sources: of 60,000 records in Source A, 45,000 link successfully to Source B. Table 2 shows that of the linked records, 9,000 relate to urban areas and the rest to rural. Of the *unlinked* records, two-thirds relate to urban areas. A colleague computes "urban share = 9,000 ÷ 60,000 = 15%" for the whole of Source A. What is the correct urban share of Source A?

A) 15%
B) 31.7%
C) 20%
D) 36%

**Answer: B) 31.7%.**

**Explanation:** Break the population into linked and unlinked parts. Linked: 45,000, of which 9,000 urban. Unlinked: 60,000 − 45,000 = 15,000, of which two-thirds are urban = 10,000. Total urban = 9,000 + 10,000 = 19,000. Urban share = 19,000 ÷ 60,000 = 0.3167 ≈ 31.7%. The colleague's error was computing a share of the *whole* using a numerator drawn only from the *linked* subset — and because linkage failure is correlated with urban status (unlinked records are disproportionately urban), the bias is large: 15% versus the true 31.7%. This is the quantitative heart of data preparation and linkage: linkage is rarely random, so any statistic computed on linked records alone inherits the linkage bias, and ensuring a team understands that is explicitly part of the senior data analyst role.

**Question 12 (moderate) — Chart-based estimation under time pressure**

A bar chart in a performance pack shows monthly API calls (in millions): Jan 3.2, Feb 3.4, Mar 3.9, Apr 4.1, May 4.6, Jun 5.0. A stakeholder asks: "If this growth continues, roughly when do we hit our 8 million monthly capacity limit?" Which is the best quick estimate?

A) Around October–November this year
B) Around February–March next year
C) In about three years
D) Next month

**Answer: B) Around February–March next year.**

**Explanation:** Estimate the trend: growth from 3.2 to 5.0 over five month-steps = 1.8 million ÷ 5 ≈ 0.36 million per month. Gap to the limit: 8.0 − 5.0 = 3.0 million. Months needed ≈ 3.0 ÷ 0.36 ≈ 8.3 months after June — pointing to February–March of next year. Under test conditions, resist fitting anything fancier: linear extrapolation with a clear caveat is the right speed-accuracy trade. Note also the professional framing a senior data analyst would add in real life: extrapolation assumes the trend continues, and the recommendation would be for capacity planning to start well before the estimated date. Quick, transparent estimation like this — with assumptions stated — is exactly how a senior data analyst communicates data projects' operational implications to stakeholders.

**Question 13 (hard) — Choosing the right denominator for an equalities breakdown**

An accessibility analysis of a digital service shows: 2,400 of 40,000 users (6%) used assistive technology; of those, 1,800 completed their transaction. Overall, 34,000 of 40,000 users completed. A draft report states: "Assistive-technology users account for only 5.3% of completions (1,800 ÷ 34,000), so accessibility is not a significant issue." What is the correct comparison, and what does it show?

A) Compare completion rates: 75% for assistive-technology users versus 85.5% overall — a ten-point gap indicating a real accessibility problem
B) The draft is right: 5.3% is small, so the issue is minor
C) Compare 1,800 to 2,400 only: 75% completion is high, so there is no problem
D) Compare 6% to 5.3%: the shares are similar, so there is no problem

**Answer: A) Compare completion rates: 75% versus 85.5%.**

**Explanation:** The question "do assistive-technology users succeed as often as everyone else?" requires comparing like-for-like *rates*: assistive-technology completion = 1,800 ÷ 2,400 = 75%; non-assistive completion = (34,000 − 1,800) ÷ (40,000 − 2,400) = 32,200 ÷ 37,600 = 85.6% (the overall rate is 34,000 ÷ 40,000 = 85%). A gap of roughly ten percentage points means one in ten assistive-technology users who would complete under equal conditions currently do not. The draft's 5.3%-of-completions framing is a denominator sleight: a small group will always be a small share of completions even when severely disadvantaged. Option D compares two share-of-total figures that are both dominated by group size rather than experience. Catching denominator choices that hide inequality is where numeric skill serves the duty to advise on inclusive, accessible outputs and to constructively challenge — accessibility conclusions should always rest on rates within groups, not shares across them.

**Question 14 (moderate) — Index numbers in a published series**

A published series indexes data-request volumes to a 2021 baseline of 100. The index reads: 2021 = 100, 2022 = 112, 2023 = 126, 2024 = 140. A briefing note claims: "Volumes grew 14% in 2024." Is the claim correct?

A) Yes — the index rose 14 points, which is 14% growth
B) No — 2024 growth was 140 ÷ 126 = 11.1%, because index points are not percentages except against the baseline year
C) No — growth was 40% in 2024
D) Cannot be determined from an index

**Answer: B) No — 2024 growth was approximately 11.1%.**

**Explanation:** Index points measure change relative to the *baseline* year, so a rise from 126 to 140 is 14 points but only 14 ÷ 126 = 11.1% year-on-year growth. The 14-point rise would equal 14% growth only if the previous year's index stood at 100. Option C confuses the cumulative growth since 2021 (40%) with the single-year figure. Option D is too pessimistic: an index supports all relative comparisons; only absolute volumes are hidden. Index-number slips like this appear constantly in briefing materials, and correcting them gently — showing the divisor — is part of leading the development of statistical insights and reports that stakeholders can trust. It also illustrates why the quality assurance role extends beyond a team's own outputs to the way others quote them: the analyst's number was right; the briefing writer's interpretation was not, and a published series should carry a footnote pre-empting exactly this misreading.

### Preparation and delivery notes

- **The core four recur constantly.** Percentage change (always divided from the original), percentage points versus percent, weighted averages, and rate-versus-count cover well over half of senior-level numeric items, and mirror the QA comments a senior data analyst routinely writes for others.
- **The assessment removes the candidate's usual tools.** A senior data analyst normally reaches for code or a spreadsheet; this format allows only an on-screen calculator, so it tests table-based calculation and unaided fluency rather than tool use.
- **Strong candidates estimate first and compute second.** Guessing an answer's magnitude before calculating, then checking the computed result against that estimate, is a habit that catches errors within the question's own time budget — worth watching for in candidates who work through items visibly.
- **Unit and scale qualifiers are where senior-level errors actually occur.** "In thousands", "per 1,000 population", "quarterly" — a senior analyst's errors are rarely arithmetic; they are unit errors, so items are built to test attention to them.
- **These items are simplified versions of real weekly work.** Every item mirrors numbers a senior data analyst handles routinely, which is worth explaining to a candidate who finds the time pressure unfamiliar.
- **Mental-percentage shortcuts separate strong from average performance.** Knowing that 1% of 62,500 is 625 makes 15% a two-step mental sum; knowing that dividing by 0.75 is multiplying by 4/3 turns headroom calculations into instant checks. A candidate who visibly uses shortcuts like these is demonstrating the on-the-spot verification this role needs in meetings.

### Common pitfalls

- **Misreading chart and table labels** — confusing monthly with annual data, or ignoring "in thousands"/"in millions" qualifiers. At senior level the arithmetic is rarely the hard part; the reading is.
- **Over-calculating** — performing exact multi-step computation when estimation or elimination of implausible options would answer faster. Three options in a typical item can often be discarded on magnitude alone.
- **Wrong denominator, right arithmetic** — as Questions 1, 11 and 13 showed, most serious numeric errors are perfectly calculated answers to the wrong question. A strong candidate always asks: share of *what*?
- **False precision under pressure** — reporting a sampled or extrapolated figure as exact. The best senior candidates annotate their answer choice mentally with its uncertainty, and the best options in interpretive items usually do the same.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written material of the kind this role deals with daily: data ethics policies, data-sharing agreements, governance framework documents, stakeholder emails, analytical reports, and departmental standards. Passages use genuine professional terminology, and the candidate must answer strictly from the text provided — outside knowledge, however expert, must be set aside.

The dominant format is a short, dense passage followed by statements the candidate classifies as **True** (the passage says or logically entails it), **False** (the passage contradicts it), or **Cannot Say** (the passage provides insufficient information either way). Multiple-choice comprehension items — "which statement best summarises the author's position?" — are also common. Timing is tight, typically under a minute per question, simulating the reality of absorbing a policy paper minutes before a meeting.

For a senior data analyst this assessment carries particular weight. The role profile asks a senior data analyst to listen to and interpret the needs of technical and non-technical stakeholders, to assess and constructively challenge proposed data ethics policies, and to advocate for data governance policies across their organisation. Every one of those duties begins with precise reading: noticing that a policy says "should" rather than "must", that an agreement permits linkage "for the purposes specified in Schedule 2" and no others, that a stakeholder's email asks a subtly different question from the one a team answered. The Cannot Say discipline — refusing to conclude beyond the text — is the same intellectual honesty a senior data analyst applies when refusing to conclude beyond the data.

### What it measures for this role

Mapping verbal reasoning dimensions to the skills named in the role profile:

- **Precise extraction of rules and obligations** maps to *Data ethics and privacy* (assessing and constructively challenging proposed data ethics policies; working with stakeholders to identify and address ethical and privacy concerns) and *Data management* (advocating for data governance policies and guidelines). Policies bind only as written — modal verbs, scope clauses, and exceptions decide everything.
- **Distinguishing fact from inference** maps to *Applying statistical and analytical tools and techniques*: quality assuring a report includes checking that its prose claims match what its analysis actually shows.
- **Identifying core arguments and audience needs** maps to *Communicating between the technical and non-technical* and *Data visualisation* (adapting a story to the needs of multidisciplinary stakeholders): before a message can be adapted, the one received must be accurately parsed.
- **Tracking conditions and dependencies in prose** maps to *Managing a data project* (communicating progress with stakeholders; defining problem statements) and *Data preparation and linkage*: specifications and agreements are prose descriptions of logic, and misreading them becomes defective pipelines.
- **Reading critically without over-reading** maps to *Delivering business impact through data*: defining and communicating the scope of impact requires exact language about what the evidence does and does not support.

### Practice questions

For each passage, the candidate answers the statements strictly from the text. Explanations point back to the exact wording, and form the answer key.

**Passage A — Draft data ethics policy extract**

*"Analysts must complete a Data Ethics Screening for any new analysis involving person-level data. Where the screening identifies a high ethical risk, the analysis must not proceed until the Departmental Data Ethics Committee has approved a mitigation plan. Analyses using only aggregated data published under the Open Government Licence are exempt from screening. The Committee aims to review submitted mitigation plans within fifteen working days, although complex cases may take longer. Screening decisions must be recorded in the project's quality log, and should be revisited if the scope of the analysis changes materially."*

**Question 1 (easy) — True / False / Cannot Say**

Statement: "An analysis of aggregated data published under the Open Government Licence requires a Data Ethics Screening."

**Answer: False.**

**Explanation:** The passage states directly: "Analyses using only aggregated data published under the Open Government Licence are exempt from screening." The statement contradicts this, so it is False. One nuance rewards careful reading: the exemption applies to analyses using *only* such data. An analysis mixing OGL aggregates with person-level data would need screening — but the statement as posed describes an analysis of the exempt kind, so False stands. Reading exemption clauses at this level of precision is exactly what assessing and constructively challenging proposed data ethics policies demands.

**Question 2 (moderate) — True / False / Cannot Say**

Statement: "The Departmental Data Ethics Committee will review a mitigation plan within fifteen working days."

**Answer: Cannot Say.**

**Explanation:** The passage says the Committee "*aims* to review submitted mitigation plans within fifteen working days, although complex cases may take longer." An aim is not a guarantee, and the passage explicitly allows longer for complex cases. The statement asserts what *will* happen; the text supports only what is intended to happen. It is not False — the passage does not say the Committee will fail to meet fifteen days — and not True, because "aims to" plus an explicit exception cannot entail "will". This aim/commitment distinction is one of the most frequently tested — and most operationally important — distinctions in public sector documents, including the service-level statements a senior data analyst makes to stakeholders about their own team's turnaround times.

**Question 3 (moderate) — True / False / Cannot Say**

Statement: "A screening decision must be revisited if the scope of the analysis changes materially."

**Answer: False.**

**Explanation:** Look at the exact verbs: decisions "*must* be recorded in the project's quality log, and *should* be revisited if the scope of the analysis changes materially." The recording is mandatory ("must"); the revisiting is recommended ("should"). The statement upgrades "should" to "must", which the passage does not support — so, as a claim about what the policy requires, it is False. Modal-verb precision is not pedantry: when advocating for data governance policies within a team and across an organisation, the difference between a mandatory control and a recommendation determines what can be enforced, what can be audited, and what can only be encouraged.

**Question 4 (easy) — Multiple choice**

Which of the following best describes when an analysis must halt under the policy?

A) Whenever a Data Ethics Screening is completed
B) When screening identifies a high ethical risk, until a mitigation plan is approved by the Committee
C) Whenever person-level data is used
D) When the quality log has not been updated

**Answer: B.**

**Explanation:** The passage's second sentence gives the precise halting condition: "Where the screening identifies a high ethical risk, the analysis must not proceed until the Departmental Data Ethics Committee has approved a mitigation plan." Option A over-generalises (screenings that find low risk do not halt anything); option C confuses the trigger for *screening* with the trigger for *halting*; option D invents a condition the passage never states. Extracting the exact conditional structure — trigger, obligation, release condition — is the reading skill behind implementing compliant processes in a team.

**Passage B — Email from a policy director**

*"Thanks to your team for the regional analysis. I'm presenting to the Programme Board on Thursday and want to lead with your finding that the pilot reduced average waiting times. Before I do: my private office tells me the Board members are sceptical of pilots after last year's rollout issues, and at least two members will push hard on whether the effect will hold at national scale. I need one slide, no more, that makes the strongest honest case. If the evidence doesn't stretch to national projections, I'd rather know now than be caught out in the room. Can your team also flag anything in the analysis a hostile reader could seize on?"*

**Question 5 (moderate) — True / False / Cannot Say**

Statement: "The director is asking the team to produce national-scale projections."

**Answer: False.**

**Explanation:** The director asks for "one slide... that makes the strongest honest case" and explicitly says: "If the evidence doesn't stretch to national projections, I'd rather know now than be caught out in the room." That is a request for an honest assessment of whether projections are supportable — not an instruction to produce them. The statement misreads a conditional openness as a demand, so it is False. Parsing what stakeholders are actually asking for — rather than what a hurried reading suggests — is the first behaviour listed under communicating between the technical and non-technical: listen to and interpret the needs of stakeholders, and manage their expectations.

**Question 6 (moderate) — True / False / Cannot Say**

Statement: "At least two Programme Board members believe the pilot's effect will not hold at national scale."

**Answer: Cannot Say.**

**Explanation:** The email reports, second-hand, that "at least two members will push hard on whether the effect will hold at national scale." Pushing hard on a question signals scepticism or challenge — it does not entail a settled belief that the effect will not hold. A rigorous questioner may be undecided, or even supportive but testing the evidence. The passage neither confirms nor denies the members' actual beliefs, so Cannot Say. This distinction — between what stakeholders *ask* and what they *believe* — matters when preparing to support or host difficult discussions with diverse senior stakeholders: preparing for challenge is not the same as assuming opposition.

**Question 7 (easy) — Multiple choice**

Which response best matches the director's stated needs?

A) A ten-slide technical annex covering methodology in full
B) One slide with the waiting-time finding, its confidence limits, an explicit statement of what cannot yet be claimed at national scale, and a short list of known limitations
C) One slide projecting national savings, since the Board wants ambition
D) A recommendation that the director not present the finding until a national study is complete

**Answer: B.**

**Explanation:** The email specifies: one slide ("one slide, no more"), the strongest *honest* case, early warning if national projections are unsupported, and flags for "anything in the analysis a hostile reader could seize on". Option B answers all four. Option A ignores the explicit length constraint; option C fabricates claims the director specifically asked not to be caught out on; option D over-corrects — the director asked for honest limits, not withdrawal of a genuine finding. Matching the response to the request's exact terms is adapting communication to stakeholder needs and requirements, verbatim from the role level description.

**Passage C — Data-sharing agreement clause**

*"The Recipient may use the Shared Data solely for the statistical purposes described in Schedule 2. The Recipient shall not attempt to re-identify any individual from the Shared Data, nor link the Shared Data to any other dataset containing personal identifiers, except where such linkage is expressly authorised in Schedule 2 and carried out within the Secure Research Environment. Outputs derived from the Shared Data may be published only after disclosure control review confirms that no output enables identification of an individual, whether alone or in combination with other publicly available information."*

**Question 8 (hard) — True / False / Cannot Say**

Statement: "The Recipient may link the Shared Data to a dataset containing personal identifiers if the linkage is carried out within the Secure Research Environment."

**Answer: Cannot Say.**

**Explanation:** The clause permits such linkage only "where such linkage is expressly authorised in Schedule 2 *and* carried out within the Secure Research Environment" — two conditions joined by "and". The statement gives only one condition (the environment) and is silent on Schedule 2 authorisation. If Schedule 2 authorises the linkage, the statement's scenario is permitted; if not, it is prohibited. Because the passage does not tell us what Schedule 2 contains, the statement cannot be classified as True or False: Cannot Say. Candidates often mark this False, reasoning that one condition alone is insufficient — but the statement does not say Schedule 2 authorisation is absent; it simply does not mention it. Conjunctive conditions and silent premises are the hardest verbal reasoning pattern, and the one most relevant to working with stakeholders to identify and address privacy concerns in real agreements.

**Question 9 (moderate) — True / False / Cannot Say**

Statement: "Outputs may be published once the analysis is complete, provided the Recipient is confident no individual can be identified."

**Answer: False.**

**Explanation:** The clause requires that outputs "may be published only after disclosure control *review* confirms" non-identifiability — a formal review step, not the Recipient's own confidence. The statement substitutes self-assessed confidence for the required review, contradicting the "only after" condition. Note also the review's demanding standard: identification "whether alone or in combination with other publicly available information" — the mosaic effect. This is the difference between a control that exists on paper and one that is operationally testable — precisely what someone researching developments in data ethics and privacy to improve compliance and processes is expected to recognise: "the analyst was confident" is not auditable; "disclosure control review confirmed" is.

**Question 10 (hard) — Multiple choice**

A colleague proposes publishing a table derived from the Shared Data showing counts by local authority and rare medical condition, arguing "each count is above zero so no one is identified". Under the clause, which is the strongest objection?

A) Publication is forbidden because the data is shared
B) The table has not passed disclosure control review, and small counts for rare conditions in small areas may enable identification in combination with other publicly available information
C) Schedule 2 does not mention publication
D) Counts should be percentages instead

**Answer: B.**

**Explanation:** Two failures, both anchored in the text. Procedurally, publication is permitted "only after disclosure control review confirms" safety — the colleague's personal reasoning does not satisfy that. Substantively, the review standard covers identification "in combination with other publicly available information": a count of 1 or 2 for a rare condition in a small local authority could identify someone when combined with, say, local news coverage — which is why "above zero" is the wrong test. Option A over-reads (publication is conditionally permitted, not forbidden); option C speculates about Schedule 2's content, which the passage does not reveal; option D is a presentational preference, not an objection grounded in the clause. Constructing the strongest *textually grounded* objection is precisely how a senior analyst constructively challenges proposals.

**Passage D — Extract from an analytical standards document**

*"Reproducibility is a core requirement of analysis used in government decision-making. Analysis is reproducible when another analyst, given the same data and code, can regenerate the published outputs. Teams should prefer code-based workflows over manual manipulation of data, because manual steps are difficult to document and repeat. Where manual steps are unavoidable, they must be documented in sufficient detail for another analyst to repeat them exactly. Peer review of code is expected for all analysis rated business-critical, and is encouraged for all other analysis. The senior analyst responsible for an output remains accountable for its quality regardless of who performed the analysis."*

**Question 11 (easy) — True / False / Cannot Say**

Statement: "Peer review of code is required for all analysis."

**Answer: False.**

**Explanation:** The passage differentiates: peer review "is *expected* for all analysis rated business-critical, and is *encouraged* for all other analysis." The statement flattens this two-tier requirement into a universal mandate, which the text contradicts. Notice the graded vocabulary — required/expected/encouraged form a compliance ladder, and standards documents choose each rung deliberately. Guiding others in producing analytical approach documentation and leading collaboration to review shared code means operating exactly this ladder: knowing what can be insisted on for business-critical work versus what can only be promoted elsewhere.

**Question 12 (moderate) — True / False / Cannot Say**

Statement: "If a junior analyst on a team makes an error in a business-critical output, the responsible senior analyst remains accountable for the output's quality."

**Answer: True.**

**Explanation:** The final sentence states: "The senior analyst responsible for an output remains accountable for its quality regardless of who performed the analysis." The statement is a direct instantiation: the junior performed the analysis; accountability sits with the responsible senior analyst. This is True by straightforward entailment — the "regardless of who performed" clause exists precisely to cover delegation. Beyond the test, this sentence describes the working reality of the role: guiding others in appropriate practices for preparing, managing and using data is not just coaching — it is the mechanism by which a senior data analyst discharges an accountability that cannot be delegated.

**Question 13 (hard) — Multiple choice**

Which statement best captures the passage's position on manual data manipulation?

A) Manual steps are prohibited in government analysis
B) Manual steps are discouraged because they are hard to document and repeat, but permitted where unavoidable, provided they are documented exactly
C) Manual steps are acceptable if the analyst is experienced
D) Manual steps are acceptable only in analysis that is not business-critical

**Answer: B.**

**Explanation:** Reconstruct the passage's structure: a preference ("Teams should prefer code-based workflows"), a reason ("because manual steps are difficult to document and repeat"), a concession ("Where manual steps are unavoidable"), and a condition ("must be documented in sufficient detail for another analyst to repeat them exactly"). Option B reproduces all four elements. Option A converts a preference into a prohibition; option C introduces analyst experience, which the passage never mentions; option D wrongly imports the business-critical distinction from the peer-review sentence into the manual-steps rule. Assembling an author's full position — preference, reason, concession, condition — rather than quoting one clause is the summarising skill exercised whenever standards are translated into a team's ways of working.

**Question 13a (moderate) — True / False / Cannot Say**

Statement: "Analysis is reproducible when another analyst can regenerate the published outputs from the same data and code."

**Answer: True.**

**Explanation:** This is a near-verbatim restatement of the passage's definition: "Analysis is reproducible when another analyst, given the same data and code, can regenerate the published outputs." The statement reorders the sentence but preserves every element — same data, same code, another analyst, regenerated outputs — so it is entailed and True. Items like this exist partly as calibration: not every statement is a trap, and candidates who have become over-suspicious start marking Cannot Say on straightforward entailments, losing easy marks. The professional parallel is real too: when guiding others in producing analytical approach documentation, definitions like this one are the anchor to quote, verbatim, so the whole team tests reproducibility against the same standard rather than private variations of it.

**Passage E — Executive summary of a data project progress report**

*"The Customer Insight Data Product entered private beta in June, two weeks later than planned, following delays in agreeing the data-quality acceptance criteria with the supplying directorate. Uptake among the twelve invited policy teams has been strong: nine are active weekly users. Early feedback indicates that the product's local-area breakdowns are its most valued feature, although three teams reported difficulty interpreting the confidence intervals displayed alongside small-area estimates. The project remains within its approved budget. Public beta is scheduled for October, contingent on resolution of the outstanding accessibility audit findings and sign-off from the Data Governance Board. If sign-off is not obtained by mid-September, the October date will not be achievable."*

**Question 14 (moderate) — True / False / Cannot Say**

Statement: "The project is behind schedule and over budget."

**Answer: False.**

**Explanation:** Treat the two claims separately, because a compound statement is only True if every part is supported. Behind schedule: the passage says private beta entered "two weeks later than planned" — supported. Over budget: the passage states "The project remains within its approved budget" — directly contradicted. Since one conjunct is contradicted by the text, the compound statement as a whole is False. Compound statements are a favourite senior-level trap: candidates who verify only the first clause mark True and move on. When communicating progress of data projects with stakeholders, a senior data analyst applies the same decomposition in reverse — schedule, budget, scope and risk are reported as separate dimensions precisely so that one amber cannot hide behind another green.

**Question 15 (hard) — True / False / Cannot Say**

Statement: "If the Data Governance Board signs off by mid-September, public beta will go ahead in October."

**Answer: Cannot Say.**

**Explanation:** Read the conditions with care. October is "contingent on resolution of the outstanding accessibility audit findings *and* sign-off from the Data Governance Board" — two necessary conditions. The passage's final sentence adds that missing mid-September sign-off makes October unachievable; that makes timely sign-off *necessary*, but nowhere does the text make it *sufficient*. Even with sign-off in hand, the accessibility findings might remain unresolved, and October could still slip. The statement asserts sufficiency ("if sign-off... will go ahead"), which the text does not entail: Cannot Say. Distinguishing necessary from sufficient conditions is the sharpest reading skill tested at this level, and it is one exercised whenever planning stages of the data project life cycle: knowing which dependencies are individually fatal and which are jointly required determines what gets escalated first — and note that the accessibility dependency echoes the duty to support inclusive, accessible outputs, which is a release condition here, not a courtesy.

### Preparation and delivery notes

- **A candidate's own expertise is the biggest hazard for them.** An experienced candidate knows what data-sharing agreements *usually* say, and the test asks what *this one* says. The strongest candidates consciously suspend prior knowledge for each item and answer from the text alone.
- **Modal verbs and quantifiers decide most answers.** Must, should, may, aims to, all, only, unless, except: at senior level these small words carry the weight. Candidates who visibly snag on them tend to score well.
- **Cannot Say is the discriminating category.** Does the text *entail* the statement (True)? Does it *contradict* it (False)? Anything else — however plausible — is Cannot Say. Plausible-but-unstated is the single most-tested pattern, and worth explaining clearly in any debrief.
- **These items can be adapted from real material.** A real policy or agreement can be turned into three further statements: one entailed, one contradicted, one merely plausible — a useful way to extend this bank with material specific to your organisation.
- **Reading time is the tightest resource.** A candidate who skims a passage for structure first, then reads the statement, then returns to the relevant sentence, uses their time better than one who reads the full passage word-by-word before seeing the question.

### Common pitfalls

- **Importing outside knowledge** — answering from how UK GDPR, the Statistics Code of Practice, or a candidate's own department's standards actually work rather than from the passage. Expert candidates fail verbal items in exactly this way.
- **Upgrading or downgrading modals** — treating "should" as "must" (Question 3) or "aims to" as "will" (Question 2). The passage's obligations are exactly as strong as its verbs.
- **Confusing plausibility with entailment** — marking True because the statement is *probably* right in the real world. If the text does not force it, it is Cannot Say.
- **Missing conjunctive conditions** — where two conditions are joined by "and" (Question 8), satisfying one proves nothing. Scan for the full condition list before judging.
- **Poor time allocation** — spending too long absorbing every detail of the passage up front instead of scanning for the keywords each statement turns on. One minute per question rewards targeted re-reading.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill, and professional conduct through realistic workplace dilemmas. Unlike the cognitive, numeric and verbal tests, there is often no single objectively right answer: several responses may seem reasonable, and the scoring reflects how well a candidate's choices align with the values and behaviours the organisation needs from this role. Formats are typically "select the most effective and least effective actions" from a set, or "rank/rate all options from best to worst". Timing is generous or absent, because the test is about judgement, not speed.

For a senior data analyst in UK government, the values being assessed are well documented: user needs first, openness and transparency, collaboration across disciplines, accessibility and inclusion, evidence-led honesty, and responsible stewardship of the public's data. Layered on top are the specific behaviours of this role level: a senior data analyst guides others rather than just doing the work themselves; leads communication with stakeholders and adapts to their needs; supports or hosts difficult discussions; and is accountable for quality across a team, not just their own outputs.

The scenarios below are drawn directly from those duties. Each involves stakeholders a senior data analyst genuinely faces — their analysts, policy directors, data governance boards, supplier teams, other departments — and each turns on a tension the role really contains: pace versus quality, candour versus diplomacy, helping an individual versus fixing a system, delivering what was asked versus what is needed. Strong answers tend to share a shape: they address the root issue, they are honest early rather than comfortable late, they develop people instead of bypassing them, and they keep the user and the evidence at the centre — a pattern worth watching for across a candidate's answers, not just within any one scenario.

### What it measures for this role

Mapping situational judgement dimensions to the skills named in the role profile:

- **Leading and developing others** maps to this role level's duties to guide others in appropriate practices for preparing, managing and using data, and to lead the improvement of ways of working. Scenarios test whether a candidate coaches and builds capability or simply takes work over.
- **Stakeholder communication under pressure** maps to *Communicating between the technical and non-technical* — managing expectations, handling active and reactive communication, and supporting or hosting difficult discussions with diverse senior stakeholders.
- **Ethical stewardship** maps to *Data ethics and privacy* (identifying and addressing ethical and privacy concerns with stakeholders) and *Data management* (advocating for effective governance even when it is inconvenient).
- **Analytical integrity** maps to *Applying statistical and analytical tools and techniques* — quality assuring outputs and defending sound methods when results are unwelcome.
- **Delivery judgement** maps to *Managing a data project* and *Delivering business impact through data* — sequencing, escalating, descoping, and communicating progress honestly across the project life cycle.

### Practice questions

Each scenario has a most-effective and a least-effective answer, forming the answer key; where the format is most/least effective, a candidate chooses one of each. The commentary below is for your use in scoring and debrief.

**Question 1 (moderate) — The chart that says too much**

A policy director's office returns the candidate's team's draft slide pack with one chart altered: the y-axis now starts at 40% rather than 0%, making a 3-percentage-point improvement look dramatic. The pack goes to the minister's office tomorrow morning. The private secretary emails: "Tidied the visuals — hope you don't mind. Please confirm the pack is good to go."

A) Confirm the pack, since the underlying numbers are unchanged and the axis choice is presentational.
B) Reply confirming everything except the chart, explaining briefly why the truncated axis overstates the change, and attach a corrected chart that still presents the improvement clearly and positively.
C) Escalate immediately to the director that their office has manipulated the team's analysis.
D) Restore the chart without comment and confirm the pack.

**Most effective: B. Least effective: A.**

**Explanation:** Option B corrects the substance (a truncated axis materially misleads about effect size), does it at the working level where the change originated, assumes good faith ("tidied the visuals" suggests helpfulness, not manipulation), and — crucially — offers an alternative that still meets the office's legitimate need to present the improvement well. That is textbook adapting a story to stakeholder needs without sacrificing honesty. Option A is least effective: confirming the pack makes the candidate accountable for a misleading visual heading to a minister; "the numbers are unchanged" is exactly the rationalisation the quality assurance role exists to resist. Option C escalates before attempting working-level resolution and attributes motive without evidence — poor stakeholder management even when the concern is sound. Option D fixes the chart but silently: it forfeits the chance to explain the standard, invites a repeat next month, and risks the office reinstating their version. The role is to increase understanding and trust in analytical standards, which requires the explanation, not just the correction.

**Question 2 (moderate) — The struggling analyst and the deadline**

A data analyst on the candidate's team has spent four days building a linkage between two administrative datasets and match rates are far below what the project plan assumed. The deliverable is due to a cross-government working group in three days. Reviewing their work, the candidate spots the likely cause: they are matching on raw address strings rather than using the standardised address identifiers. The analyst is visibly demoralised.

A) Take over the linkage personally tonight; it can likely be fixed in a day and the deadline is close.
B) Sit with the analyst, share the diagnosis, agree the revised approach, and let them implement it with a checkpoint tomorrow; in parallel, alert the working group chair that match-rate figures may land a day later than planned.
C) Tell the analyst to keep trying their current approach — struggling builds resilience — and quietly prepare a fallback.
D) Reassign the task to the strongest analyst and move the struggling analyst to easier work.

**Most effective: B. Least effective: C.**

**Explanation:** Option B does three senior things simultaneously: it transfers capability (sharing the diagnosis and letting the analyst implement builds the skill the role requires a senior data analyst to grow — guiding others in appropriate practices for preparing and using data), it protects delivery through a checkpoint, and it manages stakeholder expectations early rather than hoping — honest, proactive communication of project progress. Option C is least effective: withholding a diagnosis already held is not development, it is neglect; the analyst burns three more days, the deadline is missed anyway, and the "resilience" framing disguises a failure to coach. Option A rescues the deadline at the cost of the person: the analyst learns that struggling means being bypassed, and the team's bus-factor problem worsens — a senior analyst who does the work of juniors is failing at their actual job. Option D similarly solves today by shrinking a colleague's future, and signals to the whole team that difficulty is punished. Note the pattern across strong SJT answers: develop the person *and* protect the delivery *and* tell stakeholders early — these are rarely in as much tension as pressure makes them feel.

**Question 3 (hard) — The convenient dataset**

A programme team asks the candidate to enrich their analysis using a dataset of customer records that another team "already has on a shared drive". The candidate establishes that the dataset was extracted two years ago for a different, completed project, and the data-sharing agreement that covered it specified use for that project only. The programme lead says: "It's already in the building, the agreement's ancient history, and re-requesting will take six weeks we don't have."

A) Use the dataset but minimise it — drop the most sensitive fields — since a reduced version is proportionate.
B) Decline to use the dataset; explain that the agreement's purpose limitation still binds; immediately contact the data owner to seek fast-track authorisation for the new purpose, and offer the programme an interim analysis using data legitimately held.
C) Refuse and report the programme lead to the information governance team for attempting misuse.
D) Agree, provided the programme lead emails confirmation that they accept responsibility.

**Most effective: B. Least effective: D.**

**Explanation:** Option B holds the ethical line — purpose limitation does not lapse because data is conveniently located; "already in the building" is a description of risk, not a permission — while behaving like a partner rather than a blocker: it pursues the fastest legitimate route (the data owner may well fast-track a purpose extension) and keeps the programme moving with an interim product. That combination is exactly working with stakeholders to identify and address ethical and privacy concerns, and it is how a senior data analyst demonstrates that ethics fits the wider organisational context rather than obstructing it. Option D is least effective: an email transferring "responsibility" transfers nothing — the use would still breach the agreement, and the senior data professional advising it would have knowingly facilitated unlawful processing; seeking a paper shield instead of a lawful basis is the worst instinct this scenario can surface. Option A misunderstands minimisation: reducing fields does not create a lawful purpose. Option C leaps to enforcement before dialogue; the programme lead has proposed something improper, but likely from deadline pressure rather than bad faith, and the response should be to challenge constructively first, keeping escalation for refusal to comply.

**Question 4 (moderate) — Two masters, one week**

A team supports two directorates. Both have asked for substantial analysis due the same Friday: Directorate A needs evidence for a spending review submission; Directorate B needs analysis for an operational decision about staffing a new service. The team can deliver one fully, or both at roughly 60% depth. Both directors consider their need critical, and neither knows about the other's request.

A) Deliver both at 60% depth and hope it suffices; keeping both directors happy protects the team.
B) Decide unilaterally that the spending review matters more, deliver A fully, and tell B afterwards.
C) Contact both directors (or their offices) today, make the conflict visible, present the options with a professional recommendation on relative priority and what "60% depth" would actually omit, and ask for a joint or escalated steer.
D) Ask the team's analysts to work the weekend to deliver both fully.

**Most effective: C. Least effective: D.**

**Explanation:** Option C treats prioritisation between directorates as what it is: a business decision that needs the business's information and authority, informed by professional advice. Making the conflict visible early, translating "60% depth" into concrete omissions ("no regional breakdowns; sensitivity analysis dropped"), and recommending rather than merely asking — this is leading communication of data projects with stakeholders and managing expectations, done properly. It also protects both directors from discovering the conflict after the fact. Option D is least effective: it hides a real capacity problem by spending the team's goodwill and health, sets a precedent that conflicting demands are resolved through analyst weekends, and directly contradicts the duty to lead sustainable ways of working — a team that absorbs every collision never gets a functioning prioritisation process. Option B usurps a judgement that is not the candidate's alone (they may be wrong about the relative stakes, and B's operational decision may be time-critical in ways they cannot see) and damages trust with a blindsided stakeholder. Option A avoids the difficult conversation by unilaterally degrading both products — and "60% depth" chosen silently is a quality decision stakeholders never agreed to.

**Question 5 (hard) — The unwelcome finding**

A team's evaluation finds that a flagship digital programme, sponsored by the candidate's own director-general, shows no measurable improvement in user outcomes. The analysis is solid: the candidate has quality assured it personally, and a peer team has reviewed the code. A director asks the candidate, before the findings go up: "Can you take another look at the methodology? I'm not sure the Board will find this credible."

A) Re-examine the methodology as asked, and if it holds, say so clearly, offering to present the findings to the Board personally alongside their limitations and any constructive framing — such as what the data suggests about why outcomes have not moved.
B) Rerun the analysis with alternative model specifications until a version shows a positive effect, since reasonable methods differ.
C) Refuse to look again, stating the analysis is final and any further review would be political interference.
D) Soften the report's language so the findings read ambiguously, avoiding a confrontation.

**Most effective: A. Least effective: B.**

**Explanation:** First, notice what the director actually asked: for another look and for credibility — a legitimate request, and one the quality assurance role should welcome rather than resent. Option A takes the request at face value, re-verifies, and then does the senior thing: stands behind sound analysis in plain terms, volunteers to face the difficult audience personally (supporting and hosting difficult discussions with senior stakeholders is this role level, verbatim), and adds value by explaining *why* outcomes have not moved — turning an unwelcome verdict into useful evidence. Option B is least effective and is the gravest professional failure available here: specification-searching for a preferred answer corrupts the evidence base, breaches every analytical standard a senior analyst is accountable for upholding, and — once discovered, as it tends to be — destroys precisely the trust in statistics the role exists to build. Option D is B's quieter sibling: strategic ambiguity misleads by omission and fails the transparency owed to a Board making spending decisions. Option C mistakes defensiveness for integrity — refusing re-examination is itself unscientific, attributes bad faith prematurely, and forfeits the chance to make the findings land credibly.

**Question 6 (moderate) — The inaccessible dashboard**

A dashboard the candidate's team built eighteen months ago is now used across three directorates. A colleague with a visual impairment emails the candidate directly: the dashboard's colour-only encoding and unlabelled charts make it unusable with a screen reader, and they have been relying on a teammate to read figures aloud "which is embarrassing for both of us". The team's roadmap is full for the next two months.

A) Thank them, explain the roadmap is full, and add accessibility improvements to the backlog for consideration next quarter.
B) Thank them warmly for raising it; deliver a rapid interim fix within days (an accessible data table alongside each chart); schedule the full remediation onto the roadmap by trading out lower-priority work; and initiate an accessibility review of the team's other products, since this defect is unlikely to be unique.
C) Suggest they submit a formal accessibility complaint so the issue gains the weight needed to displace roadmap items.
D) Ask the colleague's teammate to continue assisting until the team has capacity.

**Most effective: B. Least effective: D.**

**Explanation:** Option B recognises what this is: not a feature request but an exclusion happening now, with legal force (public sector accessibility regulations) and a human cost the colleague has already found "embarrassing" to work around. The interim fix (accessible tables are quick and genuinely usable) shrinks the harm within days; the roadmap trade acknowledges that accessibility outranks lower-priority enhancements; and extending the review to other products treats the report as a signal about the team's practice — advising and supporting others in developing inclusive, accessible data visualisations, plus suggesting improvements to visualisation processes and standards, both verbatim from the role's skills. Option D is least effective: it converts a systemic defect into a permanent burden on two individuals, one of whom has just described the arrangement as degrading — it normalises exclusion as a workaround. Option A treats a live inequality as an ordinary backlog item and leaves the colleague unusably served for months. Option C outsources to the affected person the work of making their own inclusion important enough — procedurally tidy, humanly poor, and an abdication of exactly the advocacy this seniority exists to provide.

**Question 7 (moderate) — The stalled data-quality negotiation**

An analytical data model depends on a feed from an arm's-length body. For three months, 12% of records have arrived with malformed reference codes, forcing the candidate's team into manual repair that consumes about a day each week. The body's data manager has been friendly but nothing changes: "We've logged it with our supplier." A director asks why a team member is spending a day a week on "data cleaning".

A) Continue the manual repairs — the relationship matters, and the fix is logged with their supplier.
B) Build a more sophisticated automated repair so the malformed codes no longer cost manual effort, and stop chasing the body.
C) Quantify the ongoing cost (a day a week, error risk, delayed outputs), propose a specific remedy and date to the body's data manager, copy the agreed data-quality requirements, and if it stalls again, escalate jointly with the director through the formal route the sharing arrangement provides — while keeping the interim manual process documented and safe.
D) Tell the director the delay is the other body's fault and there is nothing more that can be done.

**Most effective: C. Least effective: D.**

**Explanation:** Option C is the full senior toolkit: evidence (quantified cost turns a grumble into a business case), specificity (a named remedy and date converts "logged with our supplier" into an accountable commitment), grounding in the agreed standard (data-quality requirements exist to be invoked — this is advocating for data management policies in practice), and proportionate escalation through the formal route with the director aligned. Keeping the interim process documented protects current outputs meanwhile — monitoring and improving data management practices does not stop while negotiation is under way. Option D is least effective: "their fault, nothing to be done" is untrue (C exists), abandons accountability for the team's own costs, and hands their director a complaint instead of a plan. Option A mistakes conflict-avoidance for relationship management — a relationship that cannot carry a quantified, courteous challenge is not being protected, it is being wasted, and the weekly cost continues indefinitely. Option B fixes the symptom at the analyst's own end, permanently absorbing a cost that belongs upstream, and leaves every *other* consumer of the feed suffering; upstream fixes beat downstream patches, and a senior analyst is placed to insist on them.

**Question 8 (hard) — Ranking: the pre-announcement leak of doubt**

Tomorrow a department publishes statistics the candidate's team produced. Tonight, a journalist emails the candidate directly: "I understand tomorrow's figures will show the programme failing. Care to comment?" Rank these actions from most to least appropriate:

1. Reply "no comment" and delete the email.
2. Do not reply; immediately inform the department's press office and the director, forwarding the email, and follow their steer.
3. Reply confirming the figures are published tomorrow at 9:30am and that the candidate cannot discuss content before publication, then inform the press office.
4. Reply on background to correct the journalist's "failing" framing, since inaccurate coverage would be worse.

**Answer: Best 2, then 3, then 1, then 4.**

**Explanation:** Pre-release access to official statistics is tightly controlled in the UK, and any pre-publication contact with media about content is a serious breach; equally, a journalist claiming knowledge of unpublished figures may indicate a leak, which the department must know about tonight, not tomorrow. Option 2 does everything right: no engagement on content, immediate visibility for the people whose job this is (press office, director), and evidence preserved by forwarding. Option 3 is defensible — the publication time is public information and it routes onward correctly — but replying personally, at all, to a fishing email is a risk a senior analyst need not take; ranking it second reflects that it breaks nothing but is inferior practice. Option 1 fails on two counts: deleting the email destroys evidence of a possible leak, and telling no one leaves the department blind. Option 4 is worst: "on background" commentary about unpublished statistics is itself the breach — it confirms the figures' direction, hands the journalist a source, and could compromise the publication and the analyst's professional standing. The underlying value is transparency *through* proper process: official statistics earn trust precisely because nobody, however senior, trades their content early.

**Question 9 (moderate) — The problem statement that isn't**

A deputy director opens a meeting with: "We need a machine-learning model to predict which applications will be fraudulent. Can your team build it in eight weeks?" The candidate knows the directorate's fraud data is poorly labelled, that no one has defined what "fraudulent" means operationally across the three application routes, and that a simpler rules-based triage might deliver most of the value.

A) Agree to the eight weeks — securing the work matters, and the problems can be surfaced during delivery.
B) Explain the labelling and definition problems, propose a two-week discovery to define the problem statement, assess the data, and compare a simple baseline against the ML approach — with a clear decision point on what to build.
C) Decline: the data is not good enough for machine learning, so the project should not proceed.
D) Build the model on the data as it stands and caveat the outputs heavily.

**Most effective: B. Least effective: A.**

**Explanation:** Option B is the role profile operating as designed: identify and define a problem statement (verbatim from *Managing a data project*) before committing to a solution; plan the discovery stage of the life cycle; and keep the stakeholder's goal — reducing fraud — at the centre while being honest about the route. The baseline comparison matters especially: delivering business impact means the simplest thing that decides well, not the most sophisticated thing that can be built, and a rules-based triage that captures most of the value in a fraction of the time may be the right product. Option A is least effective because it converts known, disclosable risks into a delivery surprise: eight weeks from now the deputy director learns about label quality the way stakeholders hate most — via a slipped deadline — and trust, once spent that way, is hard to rebuild. Option D ships a model whose predictions cannot be trusted for consequential decisions about individuals; caveats do not immunise a fraud model against acting on bad labels, and there are fairness and ethics dimensions to mislabelled fraud data that heavy caveats cannot cure. Option C is honest but lazy: it answers the proposal rather than the need, and forecloses the discovery that would find the workable path.

**Question 10 (hard) — The colleague's shortcut**

While reviewing shared code, the candidate finds that a well-liked, experienced peer — another senior analyst, not someone they manage — has hard-coded a manual "correction" that adjusts a regional figure by a fixed amount, with a comment reading "temp fix per JT, Mar — tidy later". The adjustment has been in production for five months and affects published management information. "JT" appears to be a former team member who has left.

A) Remove the adjustment in the review branch and say nothing — it is clearly stale.
B) Raise it with the peer directly: ask for the provenance, and agree that unless it can be justified and documented within days, it will be jointly removed, the effect on the five months of published figures quantified, and the users of that management information notified with a correction if material.
C) Report the peer to the shared head of profession for falsifying figures.
D) Leave it — it is their code, their accountability, and flagged "temp fix" already.

**Most effective: B. Least effective: A.**

**Explanation:** Option B follows the evidence discipline this situation needs. First, provenance: the adjustment may have had a legitimate basis (a known feed defect JT understood) — asking first is fair and may surface real knowledge before it walks out the door entirely. But B also sets a deadline and a default: undocumented adjustments to published figures cannot persist on charm, and if unjustified, the professional obligations cascade — remove, quantify, and correct the record transparently, because five months of management information may have informed real decisions. That cascade is quality assuring analytical outputs across a team and leading collaboration to review and improve shared code, both verbatim from the role's skills. Option A is least effective, narrowly but decisively: silently removing the adjustment discards the chance to learn whether it encoded something real (an error may be *introduced* by removing it), leaves the five months of affected publications unexamined and uncorrected, teaches the peer nothing, and repeats the original sin — an undocumented change to production figures, just in the opposite direction. Option D confuses code ownership with accountability boundaries: published figures are a shared professional responsibility, and "temp fix" flags the problem without excusing it. Option C skips the collegial step entirely and alleges intent ("falsifying") the evidence does not yet support; escalation is the right second step if B is rebuffed, not the first.

### Preparation and delivery notes

- **Strong answers anchor on the role's values, not instinct under pressure.** They develop others, surface problems early, protect the evidence, include the excluded, and use process without hiding behind it — worth having the role profile and these behaviours to hand while scoring.
- **The best answers typically do two things at once.** They pair integrity with service: decline the improper thing *and* offer the legitimate route; protect the deadline *and* grow the analyst. An option that achieves only one half is usually a distractor, and a candidate who spots only half the pattern is worth probing further in debrief.
- **Weight "least effective" answers as seriously as "most effective".** Least-effective options are often superficially kind (Question 6's option D) or superficially safe (Question 8's "no comment"), and a candidate's reasoning about what harm continues or compounds is often the more revealing answer.
- **Real dilemmas make good debrief material.** Asking a candidate to describe a real situation like one of these, what they did, and what they would do differently, extends the assessment usefully into interview.
- **These items are calibrated against the published public sector value framework**, which genuinely rewards candour, user focus and inclusion — a candidate answering as the best version of a senior public servant is both being honest and scoring well, so there is no separate "what the organisation wants to hear" to watch for.

### Common pitfalls

- **Answering idealistically rather than effectively.** "Escalate to the permanent secretary" or "refuse all compromise" sounds principled but ignores the working-level resolution that solves most problems faster and preserves relationships. Effective answers are usually proportionate.
- **Selecting passive options.** Choices that delay action, pass the problem to someone else, or wait for capacity (Questions 4, 6 and 7 all contain one) consistently score poorly — they leave the harm running.
- **Rescuing instead of leading.** At senior level, personally redoing a junior's work is usually a wrong answer even though it feels responsible. The assessment is calibrated to this level: it wants the coach, not the hero.
- **Treating ethics as a blocker role.** Options that merely refuse (Question 3's C, Question 9's C) score below options that refuse *and* open the legitimate path. Constructive challenge is the standard the role profile itself sets.
- **Ignoring the organisational culture and values.** UK public sector assessments reward transparency, accessibility, evidence-led honesty and collaboration. An answer optimised for private-sector commercial aggression — or for conflict avoidance — will misfire here.

## Conclusion

This resource has given you four assessment types commonly used for senior analytical roles in the UK public sector — cognitive ability, numeric reasoning, verbal reasoning, and situational judgement — each with realistic practice questions built from the actual duties of a senior data analyst, and worked reasoning held back as your answer key.

A few themes are worth carrying into scoring and debrief. Across the cognitive and numeric sections, the recurring lesson is that senior-level errors are rarely arithmetic: they are frame errors — the wrong denominator, the unchecked total, the causal leap from a self-selected sample — so a candidate's working is often more informative than their final choice. In the verbal section, the discipline is textual honesty: a passage's obligations are exactly as strong as its verbs, and "plausible" is never "entailed", so watch for candidates who confuse the two. In the situational judgement section, the strongest answers consistently do two things at once — they hold the line on integrity, accessibility, or governance *and* they open a legitimate path for the stakeholder. That pairing, more than any single technique, is what distinguishes senior judgement, and is worth naming explicitly when you compare candidates.

When scoring, work from the answer key rather than from memory of the discussion: mark each item against its stated correct answer or most/least-effective ranking, and use the explanations to judge partial or borderline reasoning consistently across candidates. Keep your scoring notes and the candidate's responses on record, in line with your organisation's recruitment or assessment record-keeping requirements, and apply the same items and the same time limits to every candidate you assess for this role level — consistency is what makes any comparison between candidates fair.

After scoring, debrief the candidate: share how they performed at a level of detail your process allows, be honest about where an answer fell short of what the role needs, and be specific about strengths worth recognising. A debrief grounded in the explanations above — why an answer is right, not just that it was marked right — gives a candidate something to act on, whether or not this particular process is successful for them.

Finally, remember what this assessment is and is not. It is one structured, job-specific input among several — alongside application, interview, and any other evidence you hold — and it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Use it consistently, keep the answer key confidential until scoring, and consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues wherever this guidance and your own process diverge.
