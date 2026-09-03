# Senior Business Analyst - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for senior business analyst, within the UK Government Digital and Data profession. At this level a candidate has a good understanding of strategic arenas and leads large or complex projects, with functional or people management responsibilities, mentoring, best-practice development, stakeholder relationship ownership, and community of practice management. The material is job-specific: it uses the kinds of artefacts a senior business analyst genuinely handles — process models, requirements catalogues, options appraisals, acceptance criteria, stakeholder communications, and user research findings — rather than abstract puzzles.

This document covers four types of assessment, each in its own section:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving.
2. **Workplace job-specific numeric reasoning assessment** — percentages, ratios, weighted averages, rates, and interpreting tables and charts.
3. **Workplace job-specific verbal reasoning assessment** — precise comprehension, True/False/Cannot-say discipline, inference, and clear-writing judgement.
4. **Workplace job-specific situational judgement assessment** — realistic dilemmas involving leadership of analysis, stakeholder pressure, evidence integrity, and developing others.

Each section explains what the assessment measures and why it matters at this level, maps its dimensions to the named skills in the role, gives a substantial set of practice questions with full worked explanations for use as an answer key, then gives administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and the same time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Offer any unscored practice questions the platform provides. Because at this level a candidate is expected to lead, mentor, and hold positions under pressure without much of their reasoning being checked by anyone senior to them, several situational judgement items deliberately have no single flawless option — score for the quality and calibration of the judgement shown, not only whether the letter matches the key. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Instead of a generic intelligence test, a candidate is presented with the everyday materials of the job — process maps, requirements traceability matrices, data models, options appraisals, test plans, and prioritisation frameworks — and asked to reason quickly and accurately about them.

These assessments are usually taken online, timed between 15 and 30 minutes, covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is typically norm-referenced, often adaptive, with speed and accuracy reported separately. Most platforms offer unscored practice questions before the timer starts; encourage the candidate to take them.

This kind of assessment matters for a senior business analyst because structured thinking is the core of the role's professional value. This is the person a programme trusts to hold a steady understanding of how a business area really works while everything around it changes — keeping many moving parts in mind at once, from which requirements trace to which business needs, to where a proposed solution contradicts a policy constraint. Because this level leads complex projects and reviews the work of others, the assessment also tests whether subtle errors in artefacts the candidate did not create themselves get caught.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role profile:

- **Pattern recognition** maps to **Business modelling** and **Digital and data systems analysis**: leading the modelling of processes, systems and data at varying levels of complexity means recognising recurring structures across large and messy information sets, and spotting where a model deviates from its own conventions.
- **Logical deduction** maps to **Context, problem and option analysis**: leading the approach to understanding context, problems and root causes requires reasoning validly from evidence to conclusions, and evaluating multiple options without deducing more than the evidence supports.
- **Error checking** maps to **Defining and managing business needs, user needs and requirements** and **Testing (business analysis)**: ensuring requirements can be traced through design, build, test, tender and evaluation phases, and reviewing prototypes, test plans and test outcome reports, both depend on spotting inconsistencies between artefacts quickly and reliably.
- **Prioritisation** maps to **Adapting to delivery methodologies** and **Defining and managing business needs, user needs and requirements**: negotiating and agreeing delivery priorities with the team and stakeholders, and co-ordinating the prioritisation of requirements, both require rapidly ranking what matters most under competing pressures.
- **Applied problem solving** maps to **Business process improvement** and **User experience analysis**: leading process analysis to define performance problems and opportunities, and articulating how user experience needs affect system design, both mean decomposing tangled situations into parts that can be reasoned about and recombined into recommendations.

### Practice questions

Present these to the candidate; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in a requirements catalogue**

A programme's requirements catalogue uses a fixed identifier convention: functional requirements are labelled FR-nnn, non-functional requirements NFR-nnn, and business rules BR-nnn, where nnn is a three-digit number allocated sequentially within each type. Reviewing a junior analyst's latest additions: (1) FR-041: The caseworker can reassign a case to another team. (2) NFR-012: Case search results must return within 2 seconds. (3) FR-13: The applicant receives an email confirmation on submission. (4) BR-007: An application older than 12 months is archived. Which entry breaks the catalogue's convention?

- A) Entry 1
- B) Entry 2
- C) Entry 3
- D) Entry 4

**Correct answer: C**

**Explanation:** The convention requires a three-digit number, so the thirteenth functional requirement must be written FR-013, not FR-13. This looks trivial, but identifier discipline is what makes traceability work — automated tools and traceability matrices match on exact identifiers, and "FR-13" will silently fail to link to test cases referencing "FR-013". This tests catching a small convention breach before a catalogue is baselined, and being able to explain to a junior colleague why it matters rather than fixing it silently — part of developing best practice at this level.

**Question 2 (easy) — Logical deduction from a policy constraint**

A policy constraint states: "An application may be fast-tracked only if the applicant has provided verified identity evidence." A caseworker says: "This application has verified identity evidence." Which one of the following conclusions must be true?

- A) The application will be fast-tracked.
- B) The application is eligible to be considered for fast-tracking, so far as this constraint is concerned.
- C) The application meets all fast-track criteria.
- D) The application would have been rejected without the evidence.

**Correct answer: B**

**Explanation:** The constraint states a necessary condition, not a sufficient one, so A and C overreach. D confuses fast-track eligibility with rejection of the whole application. Only B confines itself to what the constraint guarantees. This tests the necessary-versus-sufficient distinction, one of the most common sources of requirements defects — analysts who write "only if" when they mean "if" create business rules that behave very differently from what policy intended, directly relevant to assessing the implications of business and policy constraints.

**Question 3 (easy) — Error checking a process model**

A swim-lane process model for a grant application shows: Applicant submits form → Caseworker validates form → If invalid, caseworker returns form to applicant with reasons → Finance officer schedules payment. What is the most significant structural gap?

- A) The model does not name the software system used at each step.
- B) There is no path showing what happens when the form is valid, between validation and payment scheduling.
- C) The applicant lane should come after the caseworker lane.
- D) Step 3 should be worded in passive voice for consistency.

**Correct answer: B**

**Explanation:** The model jumps from validation to payment scheduling with no step showing approval or a decision outcome for a valid form, leaving the most common path through the process undocumented. Option A is enrichment, not a gap; C and D are cosmetic. This tests reviewing a model for logical completeness — does every decision point have all its outcomes, does the happy path actually reach the end — central to leading the modelling of business processes at varying levels of complexity.

**Question 4 (moderate) — Prioritisation across a senior analyst's week**

Monday morning presents: (1) a programme board on Wednesday needing an options appraisal for a critical build-versus-buy decision, without which the decision slips a month; (2) a mentored junior analyst's first process improvement proposal, needing review before Friday's presentation; (3) an overnight email from a senior stakeholder, unhappy that a requirement she considers vital has been deprioritised, sharp in tone, no meeting booked; (4) a community of practice session in two weeks with an agenda not yet drafted. Which sequencing is most defensible?

- A) 3, 1, 2, 4 — an unhappy senior stakeholder always comes first
- B) 1, 3, 2, 4 — board-blocking appraisal first, then a same-day holding response to the stakeholder, then the mentee, then the agenda
- C) 1, 2, 3, 4 — strict deadline order
- D) 2, 1, 3, 4 — developing others always comes first

**Correct answer: B**

**Explanation:** Item 1 is both urgent and high impact — a slipped board decision delays the programme a month. Item 3 matters but does not require full resolution today; a prompt, respectful holding reply costs twenty minutes and can run alongside item 1. Option A over-weights seniority against a hard governance deadline; C ignores the relationship cost of silence; D inverts impact ordering. This tests reasoning about impact and urgency together, including the pattern of sequencing a small action inside a larger one rather than treating choices as pure either/or.

**Question 5 (moderate) — Logical deduction about requirement dependencies**

Traceability analysis establishes: (i) requirement R1 (online payment) depends on R2 (identity verification); (ii) R2 depends on R3 (integration with the identity platform); (iii) R3 has been descoped from the current release. Assuming a requirement can only be delivered in this release if everything it depends on is delivered in this release, which conclusion must be true?

- A) R1 and R2 cannot be delivered in the current release.
- B) R1 will be delivered in a future release.
- C) R2 was descoped because R3 was descoped.
- D) The current release has no payment functionality.

**Correct answer: A**

**Explanation:** R3 is out of this release; R2 depends on R3, so R2 cannot be delivered either; R1 depends on R2, so R1 cannot be delivered. B goes beyond the evidence; C invents a causal story the facts do not state; D overgeneralises from one requirement to all payment functionality. This tests deducing the full consequences of a dependency chain and no more — tracing what silently falls out of scope when one item is descoped is a core part of co-ordinating and reviewing the prioritisation of requirements.

**Question 6 (moderate) — Pattern recognition in defect data**

Defect counts by screen during user acceptance testing: Search 4, Case summary 5, Evidence upload 21, Payments 6, Letters 3, with test coverage roughly equal across screens. What is the most reasonable first interpretation of the evidence upload figure?

- A) The evidence upload developers are underperforming and should be replaced.
- B) Evidence upload is a defect cluster warranting investigation — its requirements, design or technical complexity may differ from the other screens.
- C) The other screens were not tested properly, so their counts are artificially low.
- D) The defect counts are within normal variation and no action is needed.

**Correct answer: B**

**Explanation:** Four screens cluster between 3 and 6 defects; one shows 21, roughly four times the cluster, with coverage held approximately equal, so the difference is unlikely to be a testing artefact. Option A leaps from symptom to blame without evidence; C contradicts the stem. This tests treating a defect cluster as a prompt for inquiry — asking what it says about the quality of the requirements and acceptance criteria for that screen before asking what it says about anyone's code — a core part of reviewing test outcome reporting.

**Question 7 (moderate) — Error checking acceptance criteria against a requirement**

Requirement FR-022: "A caseworker must be able to place a case on hold for up to 28 calendar days, after which the case automatically returns to the active queue." Draft acceptance criteria: (1) holding for 28 days or fewer sets status "On hold"; (2) when the entered duration elapses, status becomes "Active" and the case appears in the active queue; (3) entering 30 days saves the case with a 30-day hold. Which criterion contradicts the requirement?

- A) Criterion 1
- B) Criterion 2
- C) Criterion 3
- D) None — all three are consistent with FR-022

**Correct answer: C**

**Explanation:** The requirement caps holds at 28 calendar days; criterion 3 has the system accept and save a 30-day hold, directly violating the cap. Criteria 1 and 2 restate the requirement's two halves faithfully. This tests reading each criterion's outcome clause, not just its trigger — criterion 3 reads like a plausible boundary test, and a hurried review might assume it tests rejection when the "then" clause actually saves the hold.

**Question 8 (moderate) — Applied problem solving on root causes**

Call volumes to a benefits helpline rose 40% in March. Facts: a new online claim form launched 1 March; the top March call reason, absent in February, is "confusion about question 7 on the new form"; average call handling time is unchanged; web analytics show 62% of users abandon the online form at question 7. What is the strongest analytical conclusion?

- A) The helpline needs 40% more staff.
- B) Question 7 of the new form is causing user confusion, driving both form abandonment and calls; redesigning it should be evaluated as the primary intervention.
- C) Users prefer telephone channels to online forms.
- D) The form should be withdrawn and the old process restored.

**Correct answer: B**

**Explanation:** Timing, the new call reason, and an independent data source (web analytics) all converge on question 7 — about as strong as root cause analysis gets. Option A treats the symptom and locks in the cost of the defect forever; C draws an unsupported general conclusion; D is disproportionate to a single defective question. This tests leading root cause analysis by seeking independent evidence sources that converge, then proposing the smallest intervention aimed at the cause.

**Question 9 (hard) — Multi-constraint scheduling of analysis activities**

Scheduling four activities in a discovery week (Monday to Friday, at most one per day): stakeholder interviews (S), process observation (O), a findings playback (P), and a prioritisation workshop (W). Constraints: (i) S and O must both be complete before P; (ii) P must occur the day immediately before W; (iii) the operations team can only host O on Tuesday or Wednesday; (iv) the sponsor, who must attend P, is unavailable Wednesday. On which day must P take place?

- A) Tuesday
- B) Wednesday
- C) Thursday
- D) Friday

**Correct answer: C**

**Explanation:** P and W are consecutive, so P is at latest Thursday (W Friday). P cannot be Wednesday (sponsor unavailable). P cannot be Tuesday or Monday, since both S and O must precede it and only one activity fits per day. That leaves Thursday, with a feasible schedule such as S Monday, O Tuesday, P Thursday, W Friday. This tests systematic constraint-satisfaction reasoning — deducing "the playback can only be Thursday" rather than testing options one at a time.

**Question 10 (hard) — Deduction from conflicting model versions**

Two versions of a data model: Version 1 — every case has exactly one assigned caseworker. Version 2 — a case may have multiple assigned caseworkers during handover periods, otherwise exactly one. Operational reality: handovers exist and last up to five working days. If the build team implements Version 1, which consequence must follow during handover periods?

- A) The system will crash during handovers.
- B) The system cannot represent the true state — either the outgoing or incoming caseworker's assignment must be omitted or the handover modelled some other way outside the case-caseworker relationship.
- C) Caseworkers will refuse to use the system.
- D) Handover periods will shorten to zero days.

**Correct answer: B**

**Explanation:** Version 1's cardinality makes it logically impossible to record two simultaneous assignments, so during a real handover the system cannot represent reality — teams will record only one name or invent workarounds. Option A confuses a modelling gap with a technical failure; C and D predict outcomes the facts do not determine. This tests using systems analysis to identify a gap between a model and the operation it must represent, and surfacing the discrepancy before it is built in, when a cardinality change costs an hour rather than a migration.

**Question 11 (hard) — Prioritisation with hidden dependencies**

Four analysis tasks for next sprint, each one analyst-week, with two analyst-weeks available: (1) acceptance criteria for the release's committed features, needed mid-sprint; (2) options for a policy change announced last week, minister interested, no committed date; (3) updating the process model library, overdue housekeeping; (4) investigating a data quality issue that, if confirmed, would invalidate the benefits baseline used in task 2's options analysis. Which pair should be scheduled this sprint?

- A) Tasks 1 and 2
- B) Tasks 1 and 4
- C) Tasks 2 and 4
- D) Tasks 1 and 3

**Correct answer: B**

**Explanation:** Task 1 is anchored — developers need it mid-sprint. Task 4 is logically prior to task 2: if the data quality issue would invalidate the benefits baseline, doing task 2 first risks producing an appraisal built on bad data, work that may need redoing and advice a minister might act on before the flaw surfaces. This tests ordering by logical dependency, not just urgency and importance — analysis that validates the foundations of other analysis often deserves to jump the queue.

**Question 12 (hard) — Applied problem solving under ambiguity**

A director asks for the licensing process to be made faster. Analysis shows: end-to-end elapsed time averages 40 working days; actual processing effort totals 6 hours per application; 25 of the 40 days are spent waiting for an external agency's check, completed in 3 days once started but only begun after a weekly batch transfer; internal quality checks account for 8 days, rework loops for 5 days, and the remainder is queue time. Which improvement hypothesis should be investigated first?

- A) Train staff to reduce the 6 hours of processing effort.
- B) Replace the weekly batch transfer to the external agency with a daily or real-time transfer, attacking the largest single block of elapsed time.
- C) Eliminate internal quality checks to save 8 days.
- D) Hire more staff to reduce queue time.

**Correct answer: B**

**Explanation:** Of the 25 external-agency days, up to 22 are waiting caused substantially by weekly batching — the largest block of dead time with an identifiable mechanical cause. Option A optimises the smallest number in the problem (6 hours is under 2% of 40 days); C trades speed for risk with no evidence the checks add no value, especially given 5 days of rework already exist. This tests separating effort from elapsed time, finding the largest wait, identifying its mechanism, and intervening there first.

### Administration tips

- **Score for whether a candidate distinguishes necessary from sufficient conditions** — a large share of deduction questions and real requirements defects turn on exactly this.
- **Watch for whether a candidate finishes a systematic pass before stopping** at the first inconsistency found, since a second, subtler issue often exists.
- **Note whether a candidate separates touch time from elapsed time** in process questions, since they carry different improvement levers.
- **Note whether a candidate weighs impact, urgency and dependency together** in prioritisation items, rather than applying seniority or deadline order alone.
- **Offer the platform's unscored practice questions**, and keep timing consistent across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that deduces more than the evidence supports** by importing plausible context.
- **Missing when a candidate stops after finding one inconsistency** in an artefact rather than completing a systematic check.
- **Crediting an answer that confuses touch time with elapsed time.**
- **Rewarding an answer that lets seniority override logical sequencing** in a prioritisation question.
- **Penalising a candidate for treating adaptive difficulty as a sign of struggling** — increasing difficulty typically reflects correct answers.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures a candidate's ability to interpret, manipulate and draw sound conclusions from quantitative information of the kind this role genuinely handles. It is not a mathematics exam — the arithmetic rarely goes beyond percentages, ratios, averages, rates, and simple projections. It tests whether a candidate can extract the right numbers from tables and charts, perform the right operations under time pressure, and recognise what a number does and does not show.

These assessments are usually taken online, timed between 20 and 40 minutes, with 15 to 25 questions, each based on a table, chart, or short data-rich passage. A calculator and rough paper are usually allowed.

This matters for a senior business analyst because numeric reasoning is load-bearing at this level: defining success measures and baselines, quantifying the effects of change, appraising options with costs and benefits, reviewing test outcome reports full of pass rates and defect counts, and challenging performance claims made by suppliers and stakeholders. Because this level reviews others' work and develops best practice, a wrong denominator or a misread chart that survives review can misdirect a programme board.

### How this assessment maps to the role

- **Percentages and percentage change** map to **Business process improvement**: defining performance problems and assessing improvements means computing and comparing rates correctly, including the difference between percentage points and percentages.
- **Ratios and proportions** map to **Context, problem and option analysis**: options appraisals turn on cost per transaction, benefit-cost ratios, and proportional allocation of shared costs across options.
- **Averages and distributions** map to **Business modelling** and **Testing (business analysis)**: modelling how a process performs requires knowing when a mean misleads, and test outcome reports demand correct aggregation of pass rates across unevenly sized test suites.
- **Rates and capacity arithmetic** map to **Adapting to delivery methodologies** and **Defining and managing business needs, user needs and requirements**: negotiating delivery priorities honestly requires converting velocity, capacity, and demand into feasible scope.
- **Reading tables and charts** maps to **User experience analysis** and **Stakeholder relationship management**: analytics funnels, survey results and dashboard extracts are how user experience evidence arrives, and communicating clearly with stakeholders means presenting numbers that survive scrutiny.

### Practice questions

Present these to the candidate under the timing above; a calculator and rough paper are appropriate. Do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Percentage of a total**

A digital service received 12,400 applications last month; 3,100 through the assisted digital telephone channel and the rest online. What percentage were submitted online?

- A) 25%
- B) 66%
- C) 75%
- D) 79%

**Correct answer: C**

**Explanation:** Online = 9,300; 9,300 ÷ 12,400 = 75%. Option A is the assisted digital share, the wrong complement. This tests re-reading which share a question actually wants — channel-share calculations like this appear constantly when evidencing whether assisted digital provision is proportionate.

**Question 2 (easy) — Percentage change in a process metric**

Average end-to-end processing time for a licence application fell from 32 working days to 24 working days. What is the percentage reduction?

- A) 8%
- B) 25%
- C) 33%
- D) 75%

**Correct answer: B**

**Explanation:** Reduction = 8 days; 8 ÷ 32 (the original) = 25%. Option C (33%) divides by the new value instead, overstating an improvement in a way a finance reviewer will catch. This tests always dividing by the baseline for a reduction — the credibility of a benefits claim rests on this convention.

**Question 3 (easy) — Reading a simple table**

Completed story points across four sprints: 34, 28, 42, 36. What is the mean velocity?

- A) 34
- B) 35
- C) 36
- D) 38

**Correct answer: B**

**Explanation:** Sum = 140; ÷4 = 35. The values range from 28 to 42, and 35 sits comfortably inside that range. This tests a basic average and sanity-checking it against the data's range, informing honest, evidence-based conversations about delivery priorities.

**Question 4 (moderate) — Percentage points versus percentages**

A first-time form completion rate rose from 60% to 69%. A draft press line says the rate "rose by 9%". What is the accurate characterisation?

- A) The rate rose by 9 percentage points, which is a 15% relative increase.
- B) The rate rose by 9%, exactly as drafted.
- C) The rate rose by 15 percentage points.
- D) The rate rose by 9 percentage points, which is a 9% relative increase.

**Correct answer: A**

**Explanation:** Percentage-point change = 9 points; relative increase = 9 ÷ 60 = 15%. The draft mislabels the unit and understates the relative improvement. This tests catching a common real-world miscommunication — the analyst is the quality gate between a metric and the message before publication.

**Question 5 (moderate) — Weighted average across test suites**

A test outcome report states an overall pass rate of "80% (average of the two suites)": Suite A, 120 cases, 90% pass rate; Suite B, 40 cases, 70% pass rate. What is the correct overall pass rate?

- A) 80%
- B) 82%
- C) 85%
- D) 87.5%

**Correct answer: C**

**Explanation:** Suite A passes = 108; Suite B passes = 28; total = 136 of 160 = 85%. The report's 80% is the unweighted mean, ignoring that Suite A is three times larger. This tests computing passes rather than averaging averages of unevenly sized groups — a common error in test and performance reporting that reviewing test outcome reporting exists to catch.

**Question 6 (moderate) — Capacity and demand arithmetic**

A team of 4 analysts each has 6 productive hours per day, 5 days a week. Next sprint (2 weeks) requires 130 hours of workshops and 80 hours of documentation. One analyst is on leave for the whole second week. How much spare capacity does the team have?

- A) The team is 10 hours over capacity
- B) 0 hours — exactly at capacity
- C) 20 hours spare
- D) 30 hours spare

**Correct answer: B**

**Explanation:** Full capacity = 240 hours; leave loses 30 hours; available = 210 hours; demand = 210 hours; spare = 0. This tests careful capacity arithmetic (option D forgets the leave adjustment; option A misapplies it to both weeks), and, for a strong candidate's answer, flagging that exactly-at-capacity is itself a finding worth escalating before the sprint starts, since a plan with zero slack fails the first time anything slips.

**Question 7 (moderate) — Cost per transaction comparison**

An appraisal compares two solutions for 60,000 applications per year. Option 1: £480,000 running cost plus £120,000 licence. Option 2: £390,000 running cost plus £150,000 licence, automating 80%, with the remaining 20% handled manually at £15 per application. What is the cost per application for Option 2?

- A) £9.00
- B) £10.00
- C) £12.00
- D) £13.00

**Correct answer: C**

**Explanation:** Automated cost = £540,000; manual = 12,000 × £15 = £180,000; total = £720,000 ÷ 60,000 = £12.00 (Option 1 is £10.00 per application, cheaper despite its higher licence cost). Option A forgets the manual tail. This tests full-cost thinking on a hybrid solution with a manual exception path — pricing the exception path is central to evaluating multiple options.

**Question 8 (moderate) — Interpreting a funnel**

Application journey: 20,000 start; 16,000 complete section 1; 15,200 complete section 2; 9,120 complete section 3; 8,900 submit. Which section has the highest drop-off rate relative to the users entering it?

- A) Section 1
- B) Section 2
- C) Section 3
- D) Submission step

**Correct answer: C**

**Explanation:** Drop-off rates: Section 1, 20%; Section 2, 5%; Section 3, 40%; Submission, ≈2.4%. Section 3 loses double section 1's rate. This tests computing per-step drop-off against each step's own entrants rather than absolute numbers or cumulative completion, both of which can mask where a journey actually breaks.

**Question 9 (hard) — Benefits projection with ramp-up**

A process change saves 5 minutes per case at £30 per hour fully loaded staff cost. Annual volume 240,000, four equal quarters. It goes live at the start of Q2, realising 50% of the saving in its first live quarter due to ramp-up, then 100% thereafter. What is the total saving in year 1?

- A) £600,000
- B) £375,000
- C) £450,000
- D) £300,000

**Correct answer: B**

**Explanation:** Value per case = £2.50; quarterly volume = 60,000; Q1 £0, Q2 (50%) £75,000, Q3 and Q4 £150,000 each; total £375,000. Option A ignores both the Q1 gap and ramp-up. This tests building a quarterly benefits profile explicitly rather than a naive full-year, full-rate figure, which systematically overstates year 1 savings — a habit finance reviewers watch for.

**Question 10 (hard) — Ratio reasoning in prioritisation scoring**

A prioritisation framework scores features as value ÷ effort. Feature X: value 60, effort 20. Feature Y: value 45, effort 12. Feature Z: value 90, effort 36. A stakeholder argues Z must come first "because it has by far the highest value". What is the correct order?

- A) Z, X, Y
- B) X, Y, Z
- C) Y, X, Z
- D) Y, Z, X

**Correct answer: C**

**Explanation:** Ratios: X 3.0, Y 3.75, Z 2.5. Order: Y, X, Z. The stakeholder ranks by the numerator alone; the highest-value item is actually the least efficient use of capacity per point of effort. This tests instant, correct value-per-effort ranking, with a strong candidate's answer noting that a genuinely indivisible strategic commitment can still justify overriding the score, so long as the override is explicit and evidenced.

**Question 11 (hard) — Spotting a misleading average**

A supplier reports average call-handling time of 8 minutes as evidence of "efficient operation". The underlying sample of 1,000 calls: 700 routine calls averaging 4 minutes; 250 standard casework calls averaging 10 minutes; 50 complex calls averaging 54 minutes. Verify the average, and identify the most analytically important observation.

- A) The average is wrong; the true mean is 12 minutes.
- B) The average is approximately right (8.1 minutes), but the mean is inflated by a small number of very long calls; the median call is a 4-minute routine call, and complex calls consume about a third of total handling time.
- C) The average is approximately right, which confirms the operation is efficient.
- D) The average is wrong; the true mean is 6 minutes.

**Correct answer: B**

**Explanation:** Total minutes = 2,800 + 2,500 + 2,700 = 8,000 ÷ 1,000 = 8.0 minutes, confirming the supplier's figure arithmetically. But the median sits among the routine calls, and the 50 complex calls (5% of volume) consume ≈34% of handling time. This tests verifying a headline average correctly while checking whether it conceals a distribution — a mean is a summary, not a diagnosis.

**Question 12 (hard) — Reconciling two data sources**

A dashboard shows 5,200 applications received in June; the case management system shows 4,940 new cases created. Both systems function correctly. 180 applications were withdrawn before a case was created, and duplicate submissions are merged before case creation. How many June applications were duplicates that were merged?

- A) 80
- B) 180
- C) 260
- D) 440

**Correct answer: A**

**Explanation:** Applications received = cases created + withdrawn + duplicates merged; 5,200 = 4,940 + 180 + duplicates; duplicates = 80. Option C quotes the raw gap without accounting for withdrawals. This tests decomposing a discrepancy into named causes rather than treating the gap itself as a finding — the deeper understanding of how systems work that systems analysis calls for.

### Administration tips

- **Score for whether a candidate writes the denominator down** before computing any rate or share.
- **Watch for whether a candidate weights averages of unevenly sized groups** correctly.
- **Note whether a candidate builds a time-phased benefits profile** rather than a naive full-year, full-rate figure.
- **Note whether a candidate decomposes a discrepancy into named causes** rather than treating the gap as the finding itself.
- **Allow a calculator and rough paper**, and keep timing consistent across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that divides by the wrong base** in a percentage change or funnel drop-off calculation.
- **Crediting an answer that averages averages** from different-sized groups without weighting.
- **Missing when a candidate conflates percentage points with percentages.**
- **Missing when a candidate ignores time-phasing** in an annualised benefits calculation.
- **Crediting an answer that quotes a discrepancy between two sources without decomposing it.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate extracts meaning from written material of the kind this role handles daily — policy extracts, service standards, stakeholder emails, supplier proposals, research summaries and governance papers — and how soundly they reason from what a text actually says, as opposed to what they expect it to say.

These assessments are usually taken online, timed between 15 and 25 minutes. A short passage is followed by a series of questions: True / False / Cannot say; inference; and clear-writing judgement. The cardinal rule is answering using only the information in the passage — outside knowledge, however expert, must be set aside.

This matters for a senior business analyst because verbal precision is a professional instrument: requirements are sentences, and an ambiguous modal verb or an unquantified adjective can change what gets built. This level reads policy constraints and must assess their implications without over- or under-reading them, owns stakeholder relationships, and reviews and quality-assures the documents of analysts being mentored.

### How this assessment maps to the role

- **Precise comprehension** maps to **Defining and managing business needs, user needs and requirements**: defining requirements that can be traced through design, build, test, tender and evaluation depends on reading source material with exactness, and knowing when a sentence is ambiguous.
- **True/False/Cannot-say discipline** maps to **Context, problem and option analysis**: leading the approach to understanding a problem means separating what evidence states from what it merely suggests, and holding "we don't know yet" as a legitimate finding.
- **Inference judgement** maps to **Stakeholder relationship management**: identifying and resolving issues and influencing stakeholders requires reading correspondence for what it commits to, what it avoids committing to, and what can fairly be inferred.
- **Clear-writing judgement** maps to **Business modelling** and **User experience analysis**: articulating how user experience needs affect design, and documenting models others rely on, both demand plain, unambiguous prose, and the ability to spot and repair unclear prose in others' drafts.
- **Reading standards and guidance** maps to **Adapting to delivery methodologies** and **Testing (business analysis)**: applying the Service Standard, test strategies and methodology guidance correctly starts with reading them correctly, including their qualifiers and exceptions.

### Practice questions

Present each passage and its questions in order. Instruct the candidate to answer using only what the passage says. Do not reveal the correct answers or explanations until after they have responded.

*Passage 1 (for Questions 1–5)*

"From 1 April, applicants who are resident in the United Kingdom and have held residency for at least 12 months are eligible for the standard grant. Applicants with less than 12 months' residency may be eligible for the transitional grant, subject to a caseworker assessment. The transitional grant is paid at 60% of the standard rate. Caseworker assessments must be completed within 15 working days of application. Where an assessment is not completed in time, the application is escalated to a senior caseworker; escalation does not change the eligibility criteria that apply. Applications made before 1 April continue under the previous scheme rules."

**Question 1 (easy)**

Statement: "An applicant with 8 months' UK residency who applies on 10 April will automatically receive the transitional grant."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage says such applicants "may be eligible... subject to a caseworker assessment" — the opposite of automatic. This tests recognising a statement that strengthens the passage's modality ("may" becomes "will") as false rather than unverifiable, the same discipline that stops a discretionary policy provision being turned into a mandatory system rule.

**Question 2 (easy)**

Statement: "The transitional grant is paid at a lower rate than the standard grant."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** 60% of a rate is lower than the full rate, a one-step arithmetic inference legitimately contained in the passage. This tests recognising when a statement's strength matches the passage's own, and labelling what is stated versus what is interpreted — a hallmark of trustworthy briefing.

**Question 3 (moderate)**

Statement: "If a caseworker assessment takes 20 working days, the applicant becomes ineligible for the transitional grant."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage specifies escalation as the consequence of a late assessment, and states explicitly that "escalation does not change the eligibility criteria that apply". This tests catching the real analytical trap of conflating a service-level breach with an eligibility change — systems built by teams who confuse the two wrongly reject applicants.

**Question 4 (moderate)**

Statement: "Most applicants for the transitional grant receive a decision within 15 working days."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage states a requirement (assessments must be completed within 15 days) but nothing about actual performance against it. This tests distinguishing normative statements from empirical ones — a process model built from policy alone describes the intended process, and only observation or data establishes the actual one.

**Question 5 (moderate) — Inference**

Which of the following is best supported by the passage?

- A) The department expects some assessments to exceed 15 working days.
- B) Senior caseworkers apply stricter eligibility criteria than caseworkers.
- C) Applications made on 31 March will be assessed under the new scheme rules.
- D) The standard grant requires no caseworker assessment.

**Correct answer: A**

**Explanation:** Designing an explicit escalation mechanism for late assessments is fair, modest evidence the author anticipates the event occurring. B and C are directly contradicted; D over-reads silence about the standard grant's assessment as a statement that none is required. This tests choosing the inference requiring the smallest step beyond the text — the same calibrated-inference skill needed to notice what a supplier's carefully worded proposal conspicuously does not promise.

*Passage 2 (for Questions 6–8)*

"Thanks for the options paper. I found the analysis of Options 1 and 2 thorough, and I accept the recommendation in principle. However, before I take this to the investment committee, I need the Option 3 costings validated by finance — the committee will not accept analyst estimates for a spend of this size. I also think the risks section understates the dependency on the identity platform team; their roadmap slipped twice last year. If validation is complete by Friday, I will circulate the paper for Tuesday's committee. Please also ensure the glossary is updated; two committee members are new to the programme."

**Question 6 (moderate) — Comprehension**

What has the director committed to doing?

- A) Presenting the paper at Tuesday's committee regardless of validation status.
- B) Circulating the paper for Tuesday's committee, if finance validation of Option 3 costings is complete by Friday.
- C) Accepting the recommendation and instructing delivery to begin.
- D) Rewriting the risks section personally.

**Correct answer: B**

**Explanation:** The commitment is explicitly conditional. Option C overstates "accept... in principle" as an instruction to proceed. This tests mapping exactly what a stakeholder has and has not committed to, and under what conditions — reporting a commitment without its condition manufactures one the stakeholder never made.

**Question 7 (moderate) — Inference**

What can be most safely inferred about the director's view of the risks section?

- A) The director believes the identity platform dependency is riskier than the paper currently conveys.
- B) The director believes the risks section should be deleted.
- C) The director believes the identity platform team is incompetent.
- D) The director believes all risks in the paper are understated.

**Correct answer: A**

**Explanation:** The director states the specific dependency is understated, evidenced by roadmap slippage. C converts an observation about slippage into an unstated character judgement; D generalises from one risk to all. This tests reading feedback for its actual scope, no narrower and no wider — the response should strengthen the specific dependency risk, not rewrite the whole section defensively.

**Question 8 (moderate) — Clear-writing judgement**

Which reply most clearly and faithfully reflects the email?

- A) "Thanks — I'll get finance to validate Option 3 costings by Friday, strengthen the identity platform dependency risk with the slippage history, and update the glossary for the new members. I'll confirm status Thursday so you have certainty before circulating."
- B) "Thanks — all agreed, the paper will be at committee Tuesday."
- C) "Thanks — I'll action your comments as soon as possible."
- D) "Thanks — noted on the costings. I don't agree the risks are understated, but I'll look at the glossary."

**Correct answer: A**

**Explanation:** Option A restates each requested action specifically, reflects the Friday condition, and adds a sensible coordination step. Option B asserts an unconditional outcome; C is contentless; D picks an unnecessary fight and ignores the most time-critical item. This tests writing a reply that is specific, faithful to the source, and adds only coordination value.

*Passage 3 (for Questions 9–12)*

"Each requirement must be uniquely identified, testable, and traceable to a business need. A requirement is testable if an objective procedure can determine whether it is met. Requirements expressed as user needs should follow the format 'As a [user], I need [capability], so that [outcome]'. Non-functional requirements must specify measurable thresholds; the words 'fast', 'easy', 'intuitive' and 'secure' must not appear without an accompanying measure. Where a requirement derives from legislation, the requirement must cite the specific provision, and any simplification of legislative language must be verified by the legal team before the requirement is baselined. Draft requirements may be shared with delivery teams for early feedback, but only baselined requirements may be used for formal estimation."

**Question 9 (moderate)**

Statement: "A requirement stating 'The service must be easy to use' complies with the standard if user research supports it."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The standard prohibits "easy" appearing without an accompanying measure; research support is not a measure. This tests recognising that evidence and expressibility are different quality dimensions — a requirement can be well-evidenced and still untestable as written, a distinction directly relevant to making requirements traceable into test.

**Question 10 (moderate)**

Statement: "Delivery teams are prohibited from seeing requirements before they are baselined."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage expressly permits sharing drafts for early feedback; the restriction applies only to formal estimation. This tests reading a rule's precise scope — distinguishing "seeing" (allowed) from "formally estimating against" (baselined only) — since collapsing the distinction in either direction causes real harm.

**Question 11 (hard) — Applying multiple rules**

A draft requirement: "REQ-104: As a caseworker, I need to see an applicant's document history, so that I can make evidence-based decisions. (Derives from the Data Handling Act, summarised: records must be reviewable.)" It has not been to the legal team. Which single statement is most accurate?

- A) The requirement is fully compliant and may be baselined.
- B) The requirement follows the user-need format, but it cannot be baselined until the legal team verifies the simplified legislative language, and it must cite the specific provision rather than the Act generally.
- C) The requirement is non-compliant because caseworkers are not users.
- D) The requirement is non-compliant because it lacks a measurable threshold.

**Correct answer: B**

**Explanation:** The format is compliant, but the requirement cites only the Act generally, not a specific provision, and its simplification has not been verified by legal. C invents a rule the standard does not state; D misapplies the measurable-threshold rule, which attaches to non-functional requirements, not this functional one. This tests systematic clause-by-clause checking against a standard, and modelling good review practice — naming what is right, what is missing, and the path to compliance.

**Question 12 (hard) — Clear-writing judgement on a requirement rewrite**

The draft requirement reads: "NFR-020: Search must be fast." Which rewrite best satisfies the standard while remaining faithful to the intent?

- A) "NFR-020: Search must be fast and intuitive for all users."
- B) "NFR-020: Search results must be returned quickly enough that users are satisfied."
- C) "NFR-020: Search results must be displayed within 2 seconds for 95% of queries under normal load, measured monthly from server logs."
- D) "NFR-020: The search infrastructure must be scalable."

**Correct answer: C**

**Explanation:** Option C supplies a threshold, a coverage level, a condition, and a measurement method — an objective procedure can determine compliance. Option A adds a second banned word; B replaces one unmeasurable word with an unmeasurable clause; D changes the subject entirely, failing the faithfulness test. This tests converting an aspiration into an acceptance criterion via quantity, coverage, conditions, and measurement source.

### Administration tips

- **Score for whether a candidate distinguishes False from Cannot say precisely** — False requires contradiction, not merely absence of confirmation.
- **Watch for whether a candidate notices strengthened modality** — "may" quietly becoming "will" in a statement.
- **Note whether a candidate reads a rule's precise scope** rather than collapsing a deliberate distinction.
- **Note whether a candidate matches a response's scope to feedback's actual scope**, neither narrower nor wider.
- **Keep timing consistent** across candidates for this level, and expect a candidate to pace by passage rather than by question.

### Common pitfalls to watch for when scoring

- **Rewarding an answer built from domain expertise** rather than the passage alone.
- **Missing when a candidate treats silence as denial** — a passage that does not mention something neither confirms nor denies it.
- **Crediting an answer with scope creep in reading feedback** — treating a specific critique as a critique of everything, or of nothing.
- **Rewarding a polite but imprecise clear-writing answer** over a specific, faithful one.
- **Missing when a candidate conflates a normative claim with an empirical one.**

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment (SJT) presents realistic workplace dilemmas and asks a candidate to judge the effectiveness of possible responses. There is often no single objectively "right" action; responses are scored against a framework of professional behaviours agreed with subject matter experts — for this role, behaviours such as user focus, collaboration, ownership, appropriate escalation, developing others, and inclusion.

These assessments are usually taken online, over 25 to 45 minutes with 8 to 15 scenarios. Common formats include choosing the most effective response, the most and least effective, ranking all responses, or rating each independently. Scoring compares judgements to a key derived from experienced practitioners and the employing organisation's values — for government digital roles, the Service Standard's user-centred ethos and Civil Service behaviours strongly inform the key.

This matters for a senior business analyst because the SJT is arguably the assessment closest to the real job. This level is defined not by analysis alone but by leadership of analysis: mentoring others, developing best practice, owning stakeholder relationships, managing a community of practice. The hardest moments in the week are rarely analytical — they are judgement calls about stakeholder pressure, a mentee's substandard work, delivery pace colliding with rigour, or a recommendation being overruled.

### How this assessment maps to the role

- **Ownership and delivery focus** map to **Adapting to delivery methodologies**: scenarios test whether outcomes keep moving while trade-offs are honestly communicated, and whether iterative delivery's value is actively communicated rather than defended reluctantly.
- **Stakeholder influence and escalation** map to **Stakeholder relationship management**: identifying and resolving issues, influencing stakeholders, and building long-term strategic relationships, including judging when to persist, compromise, or escalate without burning trust.
- **Evidence integrity** maps to **Context, problem and option analysis** and **Business process improvement**: scenarios probe whether findings, baselines and options appraisals stay honest under political or commercial pressure.
- **Developing others** maps to this level's mentoring and best-practice duties and its testing review responsibilities: senior-role SJTs reliably include a struggling-colleague scenario, testing the balance of support, standards and deadlines.
- **User focus and inclusion** map to **User experience analysis**: ensuring services meet business and user needs, including users who are digitally excluded, even when they are the least represented voice in the room.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Stakeholder pressure on a finding**

Process analysis shows a business unit's cherished workaround adds four days to case processing. The unit head, a key stakeholder needed for the next phase, asks for the finding to be removed from the report because "it makes my team look bad". What is the most effective response?

- A) Remove the finding to preserve the relationship; raise it informally later.
- B) Keep the finding, but meet the unit head first to share the evidence, understand the workaround's origins, and agree how the report can present the finding fairly — including any genuine mitigations the unit has.
- C) Keep the finding unchanged and copy the unit head's director when circulating the report.
- D) Offer to soften the wording so the four-day impact is no longer quantified.

**Correct answer: B**

**Explanation:** Option B keeps the finding (integrity), engages the stakeholder before publication, seeks the workaround's context, and offers fair framing rather than suppression. Option A sacrifices integrity and teaches the stakeholder that pressure works; C escalates before attempting resolution; D corrupts the evidence. This tests refusing to sacrifice either evidence integrity or the relationship, the combination stakeholder relationship management describes.

**Question 2 (easy) — Mentee's work below standard**

A junior analyst's requirements catalogue, due to the delivery team in three days, has pervasive problems: untestable requirements, missing identifiers, no traceability. The analyst has clearly worked hard. What is the most effective response?

- A) Rewrite it directly tonight; the deadline is what matters.
- B) Return it with a note listing everything wrong and ask for a fix by tomorrow.
- C) Sit down with them promptly, explain the main quality gaps with examples, work through fixing one section together so they see the standard, then agree a plan for them to complete the rest with a checkpoint before the deadline — while deciding whether to flag a possible short delay to the delivery team.
- D) Send it to the delivery team as-is; they can raise defects if it causes problems.

**Correct answer: C**

**Explanation:** Option C holds three commitments at once: the person's development, the quality standard, and the delivery date — teaching through worked example, keeping the work with its owner, inserting a checkpoint, and honestly assessing whether the deadline needs a conversation. Option A develops nobody; B delegates learning to a list with an ultimatum deadline; D abandons both quality and the delivery team. This tests mentoring under deadline pressure without sacrificing either standard or development.

**Question 3 (easy) — User needs versus internal convenience**

In a prioritisation workshop, an operations manager argues for an internal bulk-edit feature next sprint, while user research shows applicants abandoning the journey due to a confusing eligibility checker. Both cannot fit; the operations manager is persistent and senior. What is the most effective response?

- A) Agree to the bulk-edit feature; operations keep the service running and their goodwill matters.
- B) Present the evidence for both items side by side — abandonment data and support costs for the checker, time saved for the bulk edit — recommend the checker fix on impact, and propose a committed slot for the bulk edit in the following sprint.
- C) Tell the operations manager that user needs always beat internal needs, as the Service Standard requires.
- D) Escalate the disagreement to the service owner without attempting to resolve it in the workshop.

**Correct answer: B**

**Explanation:** Option B converts an opinion contest into an evidence comparison, makes a clear recommendation, and treats the losing item respectfully with a concrete commitment. Option A trades user outcomes for comfort; C reaches a defensible conclusion through an alienating method; D escalates prematurely. This tests analysis-led prioritisation that recommends rather than only facilitates, and treats a deferred item respectfully.

**Question 4 (moderate) — Discovering an inconvenient constraint late**

Two weeks before a planned public beta, analysis of a policy document reveals a constraint nobody had spotted: a subset of applicants must receive a paper notification by law, and the service is digital-only for notifications. What is the most effective response?

- A) Raise it immediately with the service owner and delivery manager, bring analysis of which applicants are affected and rough options (delay; manual paper workaround for the affected subset; phased eligibility), and recommend one.
- B) Say nothing until after launch, then raise it as a fast-follow improvement.
- C) Email the policy team asking them to confirm the interpretation, and wait for their reply before telling anyone on the delivery side.
- D) Tell the delivery manager informally but ask them not to tell the service owner until certain.

**Correct answer: A**

**Explanation:** Legal non-compliance affecting citizens is a bright-line issue rewarding immediate, open escalation with analysis attached: who is affected, quantified, and options with a recommendation. Option B knowingly launches an unlawful service; C confuses verification with delay, which can run in parallel with alerting the team; D creates a concealment pact. This tests acting on an implication of a policy constraint even when it is expensive to raise.

**Question 5 (moderate) — A candidate's recommendation is overruled**

After a rigorous options appraisal recommending Option A, the programme board chooses Option B — carrying materially higher delivery risk by the same analysis — weighing factors including ministerial preference. The decision is made. What is the most effective response?

- A) Ask for the dissent to be minuted, then support the implementation of Option B fully — including reshaping the analysis to identify and mitigate Option B's specific risks.
- B) Continue arguing for Option A at each subsequent board until the decision is reversed.
- C) Support Option B publicly but privately tell the team the board got it wrong and the programme will probably fail.
- D) Ask to be moved to a different programme, since the professional advice was ignored.

**Correct answer: A**

**Explanation:** Option A preserves professional integrity (minuted dissent) and redirects expertise to where it now adds most value — attacking Option B's known risks. Option B relitigates a made decision; C is corrosive to team confidence; D treats disagreement as grounds for exit. This tests ownership, resilience, and commitment to collective decisions after a recommendation is overruled through legitimate governance.

**Question 6 (moderate) — Community of practice under delivery pressure**

A delivery manager asks for the next three monthly community of practice sessions to be cancelled because "the programme needs every hour". Attendance has been growing, and junior analysts say the sessions are their main way of learning. What is the most effective response?

- A) Cancel the sessions; the programme's delivery needs are the priority.
- B) Refuse; professional development is protected time and the delivery manager has no authority over it.
- C) Explore the pressure with the delivery manager, then propose a proportionate adjustment — for example shorter sessions, or one session focused on a skill the programme immediately needs — and share evidence of what the community contributes to delivery quality.
- D) Keep running the sessions but stop advertising them, so attendance quietly falls and the conflict disappears.

**Correct answer: C**

**Explanation:** Option C treats the pressure as real, negotiates a solution preserving continuity while visibly serving delivery, and reframes the community from cost to investment with evidence. Option A abandons a leadership responsibility at the first challenge; B treats a negotiation as a jurisdiction dispute; D is passive avoidance. This tests defending community of practice management intelligently rather than either capitulating or entrenching.

**Question 7 (moderate) — Supplier resists analysis**

An external supplier says their delivery is "requirements complete" and resists a request to review acceptance test coverage, citing contract limits on sharing internal test artefacts. A traceability check suggests three requirements have no visible test coverage. What is the most effective response?

- A) Accept their position; contractual boundaries must be respected and challenging them risks the relationship.
- B) Share the traceability analysis with the supplier, naming the three requirements, and ask them to evidence how each will be verified — while checking with a commercial colleague what the contract actually says about acceptance evidence, and keeping the delivery manager informed.
- C) Publicly declare at the next programme meeting that the supplier is hiding test failures.
- D) Quietly write tests for the three requirements personally and say nothing.

**Correct answer: B**

**Explanation:** Option B converts a general demand the supplier can lawyer against into a specific, reasonable question, runs a contractual check in parallel through the commercial function, and keeps the delivery manager informed. Option A confuses respecting a contract with declining to verify acceptance; C accuses ahead of evidence; D hides a gap instead of closing it. This tests evidence-first influence and appropriate use of specialist colleagues.

**Question 8 (moderate) — Inclusion in research and requirements**

All user research participants so far are confident digital users recruited online, while operational data shows about 20% of the service's users come through assisted digital routes. The researcher says the deadline makes further recruitment impossible and "we can pick up edge cases in beta". What is the most effective response?

- A) Accept the researcher's plan; beta exists precisely to catch what alpha misses.
- B) Raise the gap with the researcher and service owner: 20% of users are not an edge case, the requirements and design will be skewed without them, and propose practical fast options — recruiting through the assisted digital support line, existing charity panels, or reviewing the deadline itself — while recording the risk if the gap stays.
- C) Insist the alpha is halted until a fully representative sample is achieved.
- D) Add assumptions about assisted digital users to the requirements, based on experience of similar services.

**Correct answer: B**

**Explanation:** Option B challenges the framing with data, offers realistic recruitment routes, engages the service owner who owns the trade-off, and records the risk if the gap stays. Option A rubber-stamps deferral of the users most likely to be harmed; C may be disproportionate given cheaper remedies exist; D substitutes unvalidated assumption for missing research, worse than a documented gap because it looks like evidence. This tests inclusion, evidence integrity, and proportionate escalation.

**Question 9 (hard) — Most and least effective: conflicting stakeholder demands**

A finance director insists an options appraisal must recommend the lowest-cost option; an operations director insists anything reducing headcount flexibility is unacceptable, whatever the saving. The analysis genuinely supports a middle option that partially satisfies both. Identify the MOST effective and LEAST effective responses.

- A) Present the analysis to both stakeholders together, showing transparently how each option performs against cost, flexibility and other criteria, and recommend the middle option with the trade-offs explicit.
- B) Produce two versions of the appraisal, each emphasising what its recipient wants to see.
- C) Recommend the lowest-cost option, since finance ultimately controls the budget.
- D) Delay the appraisal until the two directors resolve their disagreement between themselves.

**Correct answer: Most effective A; least effective B**

**Explanation:** Option A gives one version of the truth, brings both stakeholders together, makes evaluation criteria explicit, and reaches a clear recommendation. Option B is least effective by a distance — two tailored versions of an appraisal is a breach of analytical integrity that destroys credibility the moment it is discovered. C capitulates without justification; D abdicates the analyst's role of giving directors a shared basis for resolving disagreement. This tests integrity and courage in influencing upward under conflicting stakeholder pressure.

**Question 10 (hard) — Methodology conflict in a multidisciplinary team**

Delivery teams work in two-week sprints, but the programme office requires a fully signed-off requirements specification before development starts, citing audit obligations. Teams are frustrated. What is the most effective response?

- A) Side with the teams and advise them to start building from the backlog; documentation can catch up later.
- B) Side with the programme office; their audit obligation trumps team preference, so enforce full up-front specification.
- C) Design and propose a requirements approach that satisfies both needs — for example, a baselined set of high-level requirements and constraints for audit and traceability, elaborated just-in-time into detailed stories and acceptance criteria each sprint — and agree it with the programme office and the teams, iterating the standard as evidence accumulates.
- D) Ask the programme director to rule on which methodology wins.

**Correct answer: C**

**Explanation:** Option C recognises the conflict is between two legitimate needs, designs a layered requirements model satisfying both, and agrees it with both parties rather than imposing it. Option A creates an audit exposure; B guarantees stale specifications and change-request churn; D escalates a design problem as if it were a dispute, producing losers rather than adopters. This tests determining an appropriate approach within a team's delivery methodology and advising on requirements management across a programme.

**Question 11 (hard) — Evidence integrity versus programme optimism**

Drafting a quarterly benefits report, a candidate finds the flagship process improvement delivering roughly half its forecast saving, largely due to slower-than-assumed digital channel uptake. The programme manager, under pressure, suggests reporting the original forecast "since uptake will catch up", noting the methodology "allows for judgement". What is the most effective response?

- A) Report the original forecast as suggested; forecasts are judgements and the programme manager owns the report.
- B) Report the actual measured benefit alongside a revised, evidenced forecast; include an uptake-recovery analysis showing what would need to be true for catch-up, and proposed actions to drive uptake — then discuss the draft with the programme manager before submission.
- C) Report the actual figure and add a note stating that the programme manager attempted to inflate the benefits.
- D) Ask to be removed from benefits reporting to avoid the conflict.

**Correct answer: B**

**Explanation:** Option B separates measured fact, legitimately judged forecast, and proposed action, which is both honest and more useful than either the stale forecast or the bare shortfall — and discusses the draft with the programme manager first as respect, not weakness. Option A launders hope as measurement; C skips every intermediate step to an accusation; D abandons the duty under pressure. This tests integrity, ownership, and constructive challenge when reporting benefits under pressure.

**Question 12 (hard) — Most and least effective: capability gap in the team**

Functional oversight of four business analysts across two teams reveals wildly varying requirements quality: one team's artefacts are exemplary, the other's regularly cause rework, and its analysts say openly "no one ever showed us a standard". Delivery pressure is constant. Identify the MOST effective and LEAST effective responses.

- A) Publish the exemplary team's artefacts as the standard, pair analysts across teams on live work, run a short community of practice series on the weakest areas, and track rework as the improvement measure.
- B) Report the weaker team's analysts to their line managers as a performance concern requiring formal management.
- C) Personally review and correct every artefact the weaker team produces before it is released.
- D) Wait two more months to gather more evidence before acting.

**Correct answer: Most effective A; least effective B**

**Explanation:** The analysts named the cause: absence of a standard, not absence of effort. Option A creates the missing standard from proven local practice, transfers capability through pairing, uses community of practice machinery for its purpose, and defines a delivery-relevant success measure. Option B punishes people for a standard no one gave them, and teaches the whole function that honesty about gaps is dangerous. Option C caps quality at personal capacity and builds dependency; D delays action on a cause already understood. This tests responding to a diagnosed cause systematically rather than through blame or personal absorption.

### Administration tips

- **Score for whether a candidate holds two goods at once** — evidence and relationship, standards and support, escalation and options — rather than sacrificing one for the other.
- **Watch the escalation gradient a candidate uses**: resolution attempted at the lowest sensible level first, escalation with analysis attached, and immediate escalation reserved for bright-line issues such as legal compliance.
- **Note whether a candidate ranks a "least effective" option by irreversible damage to trust or integrity**, not merely by suboptimality.
- **Note whether a candidate answers at the level being assessed** — responses suited to a junior analyst (do the work yourself, wait to be told, escalate everything) should score lower here.
- **Since these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding conflict-avoidance dressed as diplomacy** — removing findings, tailoring reports to audiences, or quiet workarounds.
- **Missing when a candidate escalates too early or too late** relative to the issue's severity.
- **Rewarding heroic self-sacrifice** — rewriting a mentee's work overnight, or personally reviewing everything forever — over responses that build others' capability.
- **Crediting slogan-based reasoning** ("users always come first", "the contract is the contract") over reasoning through evidence and negotiation.
- **Missing when a candidate's answer ignores a quiet or absent stakeholder** — assisted digital users, junior staff, a supplier's delivery team.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a senior business analyst: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested checking requirements catalogues and process models for structural errors, tracing dependency chains to their real consequences, and applied problem solving that separates effort from elapsed time. The numeric section tested recomputing pass rates, benefits projections and cost-per-transaction comparisons the way a careful reviewer must. The verbal section tested reading policy extracts and stakeholder emails with attention to modality and scope, and clear-writing judgement that preserves meaning under compression. The situational judgement section tested difficult calls involving pressured stakeholders, struggling mentees, resistant suppliers, and users who were not in the room — the leadership dimension of this level.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. On the situational judgement items in particular, score the quality and calibration of the reasoning shown, not only whether the letter matches — a candidate who holds two competing goods at once is showing exactly the judgement this level requires. A debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can think carefully while leading complex analysis, handle numbers that travel unaccompanied into governance papers, read precisely, and exercise sound judgement while owning stakeholder relationships and developing others — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
