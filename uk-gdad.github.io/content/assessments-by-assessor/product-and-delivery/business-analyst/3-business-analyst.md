# Business Analyst - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for business analyst, within the UK Government Digital and Data profession. At this level a candidate leads small to medium size projects and supports larger, more complex ones; manages stakeholder relationships in their own right, works independently, and helps develop the business analysis community by sharing best practice and mentoring others. The material is job-specific: it is grounded in the working materials of a practising government business analyst — problem statements and root cause analyses, options appraisals with costs and benefits, process models and business models, requirements catalogues and traceability matrices, stakeholder communications, research findings, test outcome reports, and delivery data from scrum and kanban teams — rather than abstract puzzles.

This document covers four types of assessment, each in its own section:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving.
2. **Workplace job-specific numeric reasoning assessment** — percentages, ratios, weighted averages, rates, trends, and table and chart interpretation.
3. **Workplace job-specific verbal reasoning assessment** — precise comprehension, True/False/Cannot-say discipline, inference, and clear-writing judgement.
4. **Workplace job-specific situational judgement assessment** — realistic dilemmas involving independent delivery, stakeholder management, quality under pressure, and mentoring.

Each section explains what the assessment measures and why it matters at this level, maps its dimensions to the named skills in the role, gives a substantial set of practice questions progressing from easy to hard with fully worked explanations for use as an answer key, then gives administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and the same time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Offer any unscored practice questions the platform provides. Because at this level a candidate is expected to work independently and to hold up under scrutiny without a supervisor checking their reasoning, several items deliberately explore the judgement behind the keyed answer rather than a single "correct" fact — score for the quality of reasoning shown, not only whether the final letter matches. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental operations this role performs daily — pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving — using realistic work material rather than abstract puzzles. Instead of number series and shape rotations, a candidate meets a requirements set that contradicts a policy constraint, a dependency network to sequence, an options matrix with an inconsistency buried in it, or a week of competing demands to order defensibly.

These assessments are usually taken online, timed between 15 and 30 minutes, with roughly 15 to 30 multiple-choice questions. Modern platforms are frequently adaptive, and scoring is typically norm-referenced, with accuracy and speed often reported separately. Most platforms offer unscored practice questions before the timer starts; encourage the candidate to take them.

This kind of assessment matters for a business analyst at this level because independent delivery raises the stakes on unaided thinking. A trainee's reasoning is checked by a supervisor; at this level it frequently is not — problem statements, models, and recommendations often go straight into team plans and governance papers. This assessment measures whether reasoning is fast, accurate, and self-correcting: spotting the inconsistency before the stakeholder does, deducing only what the evidence entails, and ranking competing demands by impact rather than noise.

### How this assessment maps to the role

Each cognitive dimension corresponds to named skills in the role:

- **Pattern recognition** maps to **Business modelling** and **Business process improvement**: modelling elements of the business with limited direction, and analysing processes to identify problems and opportunities, both rest on recognising recurring structures across large, untidy information sets.
- **Logical deduction** maps to **Context, problem and option analysis** and **Defining and managing business needs, user needs and requirements**: defining problem statements, evaluating options, and challenging requirements all require valid reasoning from rules, constraints, and evidence to their actual consequences — no more, no less.
- **Error checking** maps to **Defining and managing business needs, user needs and requirements** and **Testing (business analysis)**: identifying, analysing, challenging and validating requirements, and reviewing prototypes, test plans and outcome reports, are systematic error detection across artefacts that must agree with each other.
- **Prioritisation** maps to the role level and **Adapting to delivery methodologies**: leading small to medium projects while supporting larger ones means sequencing attention defensibly, and adapting what is produced to the team's methodology so that value, not documents, gets delivered.
- **Applied problem solving** maps to **Digital and data systems analysis** and **Business process improvement**: analysing IT system capabilities, developing models with minimal supervision, and designing process improvements all mean decomposing ambiguous situations into examinable parts.

### Practice questions

Present these to the candidate; do not reveal the correct answers or explanations until after they have responded. Items progress from easy to hard.

**Question 1 (easy) — Pattern recognition in a requirements catalogue**

A requirements catalogue convention states: every functional requirement is phrased "The system must/should/could [verb] [object]", with the modal verb reflecting its MoSCoW priority. Reviewing a colleague's additions: (1) The system must validate the applicant's National Insurance number. (2) The system should generate a monthly exceptions report. (3) The system must be user friendly. (4) The system could archive cases closed for more than seven years. Which requirement most clearly breaches good practice, and why?

- A) Requirement 2 — "should" requirements do not belong in a catalogue.
- B) Requirement 3 — it is untestable as written, with no measurable definition of "user friendly".
- C) Requirement 4 — "could" priorities should not be recorded.
- D) Requirement 1 — validation rules are design detail, not requirements.

**Correct answer: B**

**Explanation:** Requirements 2 and 4 use legitimate MoSCoW modals, ruling out A and C. Requirement 1 states a checkable behaviour at an appropriate level, ruling out D. Requirement 3 follows the surface pattern but breaks the deeper rule: it must be verifiable, and "user friendly" names no observable criterion — no test can pass or fail it. This tests distinguishing pattern compliance from testability, and identifies challenging requirements that look tidy on the surface as where an experienced analyst earns their keep — a named part of the role's skill set.

**Question 2 (easy) — Deduction from a policy constraint**

A policy constraint states: "Applications may be processed automatically only if the applicant is over 18, resident in the UK, and no fraud indicator is present. All other applications require manual review." A candidate is told that Application X was processed automatically. Which one of the following must be true?

- A) Application X was processed correctly.
- B) If the rules were followed, the applicant is over 18, UK resident, and free of fraud indicators.
- C) The applicant is over 18, so the application cannot involve fraud.
- D) Application X would have failed manual review.

**Correct answer: B**

**Explanation:** The constraint makes the three conditions jointly necessary for automatic processing, so under the conditional "if the rules were followed", all three held. Without that conditional, nothing is guaranteed, since the system might have a defect — which is why option A overreaches. Option C confuses a screening indicator with ground truth. This tests the distinction between "the rule guarantees X" and "the system's behaviour proves X" — used constantly when developing system requirements and reviewing test outcomes, since specifications describe intended behaviour and only testing connects intention to reality.

**Question 3 (easy) — Prioritising a delivery week**

A candidate leading the analysis on a medium-sized project faces Monday morning with: (1) revised acceptance criteria needed for three stories entering the sprint on Wednesday; (2) a director's office asking for a one-page options-appraisal summary "this week" for a briefing pack; (3) a mentored junior analyst asking for a review of their first stakeholder map — no deadline, but they are blocked until a response comes; (4) the requirements catalogue's routine monthly tidy-up. Which sequencing is most defensible?

- A) 2, 1, 3, 4 — the director outranks everything
- B) 1, 3, 2, 4 — sprint-blocking work first, then unblock the mentee, then the summary, then routine maintenance
- C) 1, 2, 3, 4 — strict order of stated urgency
- D) 3, 1, 2, 4 — mentoring always comes first

**Correct answer: B**

**Explanation:** Item 1 is both urgent and blocking a whole team's sprint, anchoring the early week. The director's summary has slack ("this week", material already exists), while the blocked mentee costs little time to unblock and returns them to productive work immediately — unblocking others cheaply is high-leverage. Option A over-weights seniority against a sprint deadline; C ignores the asymmetry between a blocked person and a flexible deadline; D turns a good instinct into an absolute rule. This tests weighing impact and urgency together, and accounting for who is blocked, rather than sequencing by a single variable.

**Question 4 (easy) — Error checking across artefacts**

A user story reads: "As an applicant, I want to save a partially completed application and return to it later, so that I don't lose my work." Its acceptance criteria include: retention for 28 days, and resumption within that window. The service's published privacy notice states that incomplete application data is deleted after 21 days. What is the most important problem?

- A) The criteria wrongly restrict saving to signed-in applicants.
- B) The criteria contradict the privacy notice's 21-day deletion commitment — the artefacts disagree about retention.
- C) The story lacks a "so that" clause.
- D) Two criteria duplicate each other.

**Correct answer: B**

**Explanation:** The high-value defect is the cross-artefact contradiction: the criteria promise 28 days of retention while the privacy notice — a public commitment with legal weight — promises deletion at 21 days. Building to the criteria would breach the notice; honouring the notice would break the criteria for a week's worth of returning applicants. This tests checking a requirement against its neighbours, not just internally — the expensive errors live between artefacts, and a requirements set can be internally immaculate while still wrong about the world it must live in.

**Question 5 (moderate) — Root cause versus symptom**

A service's completion rate has fallen from 81% to 64% over two months, coinciding with a new identity-verification step; drop-off is concentrated there (30% now abandon); users failing it are not told why; call-centre contacts about "being stuck" have tripled. A stakeholder proposes: "Add more call-centre staff." What is the best characterisation of this proposal?

- A) A sensible root-cause fix, since calls have tripled.
- B) A symptom treatment: it addresses the consequence while leaving the likely root cause — an identity step that fails users without explanation — untouched.
- C) Wrong, because call volumes are unrelated to the completion fall.
- D) The only feasible option, since the identity step is presumably mandatory.

**Correct answer: B**

**Explanation:** The causal chain runs: new step → concentrated abandonment → no explanation given → confused users phone in. Staffing the call centre expands capacity to absorb a consequence while the generator of that consequence runs on. Option D smuggles in "presumably mandatory" and surrenders, when even a mandatory step can be fixed in the dimension that is failing — explanation and recovery routes. This tests understanding problems and root causes before formulating recommendations, a named skill, including the honest acknowledgement that the cause is strongly indicated but not proven.

**Question 6 (moderate) — Deduction with delivery constraints**

A team must deliver features F1, F2, F3, and F4. Constraints: (i) F2 depends on F1's data model being finalised; (ii) F3 and F4 both depend on F2's API; (iii) at most two features can be developed in parallel; (iv) F1 takes one sprint, F2 takes two sprints, F3 and F4 take one sprint each. Development of a dependent feature cannot start until the feature it depends on is fully complete. What is the minimum number of sprints to deliver everything?

- A) 4
- B) 5
- C) 6
- D) 3

**Correct answer: A**

**Explanation:** Sprint 1: F1. Sprints 2–3: F2 (nothing else eligible to run alongside it). Sprint 4: F3 and F4 in parallel, within the parallelism limit. Total: four sprints. The dependency chain F1 → F2 → {F3, F4} has a fixed spine of 1 + 2 + 1 = 4 sprints that no parallelism can compress, since the parallelism limit never actually binds. This tests recognising which constraint is binding — a transferable skill, since real planning conversations routinely spend effort relaxing constraints that were never the bottleneck.

**Question 7 (moderate) — Inconsistency in an options appraisal**

An options appraisal scores three options against weighted criteria (Cost 40%, User impact 40%, Delivery risk 20%): Option A (Enhance existing system): 8, 5, 8, stated weighted total 6.8. Option B (New build): 3, 9, 4, stated weighted total 5.6. Option C (Commercial product): 6, 6, 6, stated weighted total 6.4. The paper recommends Option A "as the highest-scoring option". Which check most undermines confidence in the paper as it stands?

- A) Option B's total is miscalculated — it should be 5.6.
- B) Option C's total is miscalculated: (6×0.4) + (6×0.4) + (6×0.2) = 6.0, not 6.4 — so at least one total is wrong and all three need re-verification, though A's recommendation happens to survive.
- C) The weights are wrong because delivery risk should always outweigh cost.
- D) Option A cannot be best because Option B has the highest single score.

**Correct answer: B**

**Explanation:** Uniform scores make Option C the easy check: 6 everywhere against weights summing to 1.0 must yield exactly 6.0, yet the paper says 6.4. Verifying the others confirms A (6.8) and B (5.6, so option A of the question is itself wrong) are correct. One wrong cell out of three obliges re-verification of the whole table, even though the ranking happens to survive. This tests recomputing at least one row of a scored table — preferably the easiest — before trusting it, a ninety-second habit that regularly finds exactly this kind of error.

**Question 8 (moderate) — Pattern recognition in operational data**

Six months of casework data show: average daily throughput stable, backlog stable, but cases open more than 60 days have grown from 4% to 15% of the backlog, while median open-case age has fallen slightly. What is the most likely explanation of this pattern?

- A) The team has slowed down across the board.
- B) A subset of hard cases is stalling and ageing while the bulk of cases now move slightly faster — the process has bifurcated, which stable averages conceal.
- C) The data must be wrong, since a stable backlog cannot change its age profile.
- D) Nothing needs attention, since throughput and backlog are stable.

**Correct answer: B**

**Explanation:** All three observations fit one story: the process has split into two populations — most cases flowing slightly better, and a growing minority stuck, ageing indefinitely. Aggregate metrics are structurally blind to this, since the stalled tail is small enough not to move averages while often containing the highest-stakes cases. This tests reconciling multiple observations rather than trusting an aggregate that contradicts a more granular one — distributions diagnose, averages anaesthetise.

**Question 9 (moderate) — Choosing the analysis technique**

A programme director asks for help with a contested question: "Should we replace our legacy grants platform, and if so with what?" Different stakeholders are already championing different answers. What is the most appropriate first move?

- A) Run a vendor selection exercise to compare commercial grant platforms.
- B) Establish and agree the problem first: analyse the current situation and its root causes, define an agreed problem statement with success measures, and only then frame options — which may or may not all involve replacement.
- C) Survey staff on which replacement they would prefer.
- D) Draft the business case for replacement, since the director's question implies the decision.

**Correct answer: B**

**Explanation:** The question as posed has a solution baked into it, and stakeholders are already anchored to answers. The analyst's first duty is to reopen the space between problem and solution — what hurts, what causes it, what "better" measurably looks like — before framing options, which legitimately includes non-replacement options. This tests the context, problem and option analysis skill exercised in its correct order: understand root causes, define the problem statement, then develop and evaluate options — never selecting among solutions before establishing the problem.

**Question 10 (hard) — Multi-constraint scheduling under governance**

Planning analysis activities for ten working days (D1–D10) before a gate review on D10: a stakeholder workshop (W, one day, needs the operations lead who is available only D2, D3 and D8); process observation (O, two non-consecutive days, one in each of the two weeks); an options evaluation (E, three consecutive days, cannot start until both W and at least the first O day are done); a findings paper (P, two consecutive days, must finish by D9, cannot start until E is complete). At most one activity per day. Which plan is feasible?

- A) W on D2; O on D3 and D8; E on D4–D6; P on D8–D9
- B) W on D2; O on D1 and D6; E on D3–D5; P on D8–D9
- C) W on D3; O on D4 and D8; E on D5–D7; P on D8–D9
- D) W on D8; O on D2 and D7; E on D9–D10 (compressed); P after the gate

**Correct answer: B**

**Explanation:** Plan A collides O and P on D8. Plan C also collides O and P on D8. Plan D compresses E below its three-day requirement and schedules P after the gate, defeating its purpose. Plan B: W on D2 (operations lead available); O on D1 and D6 (non-consecutive, one per week); E on D3–D5 (starts after W and after the first O day); P on D8–D9 (starts after E completes, finishes by D9); no day carries two activities. This tests checking each plan constraint by constraint and eliminating on the first breach, rather than assuming a plan that looks sensible is feasible.

**Question 11 (hard) — Evaluating an inference from mixed evidence**

Three evidence sources bear on simplifying a benefit application: usability testing (8 participants, all completed the simplified prototype versus 6 of 8 on the current form, median time fell from 24 to 11 minutes); analytics showing 22% abandonment clustered at the income-details section the simplification removes; a caseworker survey where 60% predict increased downstream verification workload because income data already held is "often out of date". Which conclusion best reflects all the evidence?

- A) Proceed without reservation: users complete the simplified form faster and more often.
- B) Do not proceed: caseworkers, who know the process best, predict increased workload.
- C) The user-facing evidence strongly favours simplification, and the caseworker concern identifies a specific, testable risk — recommend proceeding to a limited pilot that measures downstream verification workload and income-data accuracy before full rollout.
- D) The evidence sources contradict each other, so commission more research before any action.

**Correct answer: C**

**Explanation:** The usability results and analytics corroborate each other, converging on the same section. The caseworker survey does not contradict either source — it speaks to a different stage and a different risk, and is prediction rather than observation, pointing at exactly where measurement should go. Option C is the only conclusion that uses all three, proceeding on converging evidence at pilot scale, instrumented against the named risk. This tests synthesising evidence at the strength it actually earns — recommendations at this level are rarely "yes" or "no" but "yes, at this scale, measuring this".

**Question 12 (hard) — The flawed improvement inference**

An argument to a programme board: "After mandatory pre-submission checklists in the north region, rejected applications fell from 18% to 12% in six months. The south region, without checklists, stayed at 17–18%. Checklists therefore cut rejections by a third, and mandating them nationally will save the equivalent of 9,000 rejected applications a year. Also, the north's caseworkers now rate their workload as more manageable, proving checklists reduce workload." Which is the most accurate critique?

- A) The regional comparison is worthless without a randomised trial.
- B) The rejection-rate evidence is reasonably strong — a comparison region strengthens the causal claim — but the national extrapolation assumes regions are alike, and the workload claim is weakest: "proving" overstates a satisfaction rating that could reflect many concurrent factors.
- C) The argument is sound in all respects; the board should mandate checklists nationally.
- D) Percentages cannot be compared across regions, so the whole argument fails.

**Correct answer: B**

**Explanation:** The core evidence is genuinely decent — a sustained fall in the treated region against a flat comparison region is a reasonable working conclusion. The national projection silently assumes other regions share the north's caseload mix and practices; the workload claim is weakest, since a satisfaction rating "proves" nothing about causation given seasonality, staffing changes, or novelty effects could each move it. This tests grading each component of an argument separately rather than accepting or rejecting it wholesale — formulating recommendations considering feasibility, benefits and impact means endorsing what evidence supports and sizing what it merely suggests.

### Administration tips

- **Score for whether a candidate distinguishes what a rule guarantees from what behaviour merely suggests** — a recurring theme at this level.
- **Watch for whether a candidate verifies at least one row of a table** before trusting the whole of it.
- **Note whether a candidate identifies the binding constraint** in a scheduling or dependency question before optimising.
- **Note whether a candidate treats pattern-compliant artefacts with appropriate scepticism** rather than accepting tidy formatting as correctness.
- **Offer the platform's unscored practice questions**, and keep timing consistent across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that trusts a surface-compliant artefact** without checking testability, arithmetic, or cross-artefact consistency.
- **Crediting an answer that deduces from what behaviour implies rather than what rules entail.**
- **Missing when a candidate lets an average conceal a bifurcated or ageing distribution.**
- **Missing when a candidate solves the problem as stated rather than recognising it needs re-establishing first.**
- **Penalising a candidate for a defensible answer expressed differently from the model explanation** — score the reasoning, not just the letter, particularly on the harder items.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately a candidate extracts, manipulates, and interprets the quantitative information this role runs on: percentages and percentage points, ratios and rates, weighted averages, trend data, and figures in tables and charts. The mathematics never exceeds everyday arithmetic; the difficulty lives in selection and interpretation — choosing the right numbers, the right base, and the right operation, then saying only what the result actually supports.

These assessments are usually taken online, timed between 20 and 30 minutes, with 15 to 20 multiple-choice questions, each built around a data presentation. Calculators are usually permitted; offer rough paper.

This matters for a business analyst at this level because numbers travel unaccompanied: percentages in an options appraisal are quoted in the business case, a trend in a findings paper reaches the programme board, a coverage figure in a test summary shapes a go-live conversation. Nobody re-derives the arithmetic downstream — they act on it. This role also includes challenging others' numbers — a supplier's benefits claim, a sponsor's headline average, a dashboard's suspicious step-change.

### How this assessment maps to the role

- **Percentages, percentage points and percentage change** map to **Business process improvement** and **Context, problem and option analysis**: evaluating processes and options means quantifying change correctly and refusing common conflations that distort improvement claims.
- **Weighted averages and distributions** map to **User experience analysis** and **Business process improvement**: presenting research findings accessibly, and analysing operational performance, both require combining unequal groups correctly.
- **Ratios and rates** map to **Adapting to delivery methodologies** and **Digital and data systems analysis**: velocity, throughput, capacity, and volume projections are rates, routine in planning and in specifying systems.
- **Table and chart interpretation** maps to **Defining and managing business needs, user needs and requirements** and **Testing (business analysis)**: traceability matrices, coverage tables, defect summaries and test outcome reports are dense tabular artefacts both produced and reviewed.
- **Trend reading and sense-checking** map to **Stakeholder relationship management**: building consensus with evidence, and using evidence to explain decisions, depends on figures surviving challenge.

### Practice questions

Present these to the candidate under the timing above; a calculator and rough paper are appropriate. Do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Requirements coverage percentage**

A traceability matrix links 85 requirements to test cases; 68 have at least one test case. What percentage of requirements are covered?

- A) 75%
- B) 78%
- C) 80%
- D) 82%

**Correct answer: C**

**Explanation:** 68 ÷ 85 = 0.8 = 80% (68 and 85 both divide by 17, giving 4/5). This tests a straightforward coverage calculation and, for a strong candidate's answer, quoting the pair with the percentage so reviewers can verify instantly and the 17 uncovered requirements stay visible.

**Question 2 (easy) — Average with an outlier**

Seven stakeholder interviews lasted 42, 45, 38, 44, 40, 118, and 43 minutes. What is the mean interview length, and what should be noted about it?

- A) 47 minutes — a typical interview length.
- B) 53 minutes — representative of the sessions.
- C) 53 minutes — but the 118-minute outlier inflates it; the typical interview ran close to 42 minutes.
- D) 42 minutes — the outlier should be silently deleted.

**Correct answer: C**

**Explanation:** Total = 370; mean = 370 ÷ 7 ≈ 53 minutes, but six of seven values cluster between 38 and 45 while one ran to 118 — the mean sits above every value except the outlier, a textbook signal it represents nobody, and the median (43) describes the typical session better. This tests computing correctly, inspecting the distribution, and reporting the number that answers the actual question — the outlier itself is often the more interesting finding, so silent deletion is a data-integrity failure.

**Question 3 (easy) — Percentage change in a KPI**

A service's average end-to-end processing time fell from 12.5 days to 10 days. What percentage improvement is this?

- A) 20%
- B) 25%
- C) 2.5%
- D) 15%

**Correct answer: A**

**Explanation:** Change = 2.5 days; 2.5 ÷ 12.5 (the original value) = 20%. Option B divides by the new value instead — an error that is particularly costly when it is the candidate's own change being evaluated, inflating a claim a reviewer will later discount. This tests always dividing by where a figure started, and, for a strong candidate's answer, having a colleague re-derive a headline benefit figure before it is presented.

**Question 4 (easy) — Reading a two-way defect table**

Defects by component and severity: Application form — Critical 1, Major 6, Minor 18, Total 25. Payments — Critical 3, Major 7, Minor 5, Total 15. Reporting — Critical 0, Major 2, Minor 8, Total 10. Which component should concern an analyst most, and on what basis?

- A) Application form — it has the most defects in total.
- B) Payments — it has the most critical defects and the highest proportion of critical-plus-major defects (10 of 15).
- C) Reporting — fewest defects means poorest testing.
- D) All equally — totals are similar.

**Correct answer: B**

**Explanation:** Application form's critical-plus-major share is 7 of 25 (28%); Payments' is 10 of 15 (≈67%) — two-thirds of its defects are serious, in the component where seriousness is least tolerable since public money moves through it. This tests reading severity structure rather than raw count — option A is the raw-count reflex the table is built to punish, and severity-weighted reading is the difference between "25 beats 15" and the correct answer.

**Question 5 (moderate) — Weighted average across channels**

Satisfaction scores (out of 10) by channel: online 7.8 from 1,500 respondents; phone 6.2 from 400; face-to-face 8.4 from 100. What is the overall average satisfaction across all respondents?

- A) 7.5
- B) 7.6
- C) 7.4
- D) 7.47

**Correct answer: A**

**Explanation:** Weighted total = 11,700 + 2,480 + 840 = 15,020 ÷ 2,000 respondents = 7.51 ≈ 7.5. This tests weighting by respondent count rather than taking the unweighted average of the three scores (which happens to land near the same figure here, a coincidence a candidate should not rely on), and, for a strong candidate's answer, noting the 1.6-point channel gap the overall figure conceals.

**Question 6 (moderate) — Velocity, capacity and a realistic forecast**

A team's velocity over six sprints: 26, 24, 8, 27, 25, 28 story points (the 8 was a sprint disrupted by a production incident). The remaining release backlog is 130 points. What is a defensible forecast in sprints?

- A) 130 ÷ 23 = 5.7, so 6 sprints — using the six-sprint average of 23.
- B) Treat the disrupted sprint as unrepresentative: typical velocity is (26+24+27+25+28) ÷ 5 = 26; 130 ÷ 26 = 5 sprints — while noting the incident risk that the outlier represents.
- C) 130 ÷ 28 = 4.6, so 5 sprints — using the best sprint.
- D) 130 ÷ 8 = 16.25, so 17 sprints — planning for the worst case.

**Correct answer: B**

**Explanation:** The 8-point sprint has a known, identified cause and is a distinct event, not noise. Excluding it transparently, and naming the exclusion, discloses the risk rather than erasing it, letting the decision-maker choose whether to hold contingency for it. This tests excluding identified anomalies openly rather than silently including or ignoring them — the difference between judgement and manipulation, since stakeholders can only trust forecasts whose assumptions they can see.

**Question 7 (moderate) — Percentage points in a benefits claim**

A business case claims: "Digital take-up will rise from 55% to 75%, a 20% increase, reducing per-transaction cost from £8.20 (paper) to £1.30 (digital)." Which correction to the claim's arithmetic and phrasing is right?

- A) The rise is 20 percentage points, which is a 36% relative increase (20 ÷ 55); calling it "a 20% increase" understates it.
- B) The claim is correct as written.
- C) The rise is 20 percentage points, which is a 26.7% relative increase.
- D) The rise should be described as 75 − 55 = 20%, so the phrasing is fine.

**Correct answer: A**

**Explanation:** Percentage-point change = 75 − 55 = 20 points; relative percentage change = 20 ÷ 55 ≈ 36%. Describing it as "a 20% increase" conflates points with percent and, unusually, undersells the change. This tests distinguishing points from percent precisely — the benefits model runs on the point change (each point shifts a fixed slice of volume from £8.20 to £1.30), so a reader who internalises "20%" will mis-model the case.

**Question 8 (moderate) — Ratio reasoning in capacity planning**

A casework function requires caseworkers and quality checkers in the ratio 6:1, and currently has 78 caseworkers and 11 checkers. A planned expansion adds 24 caseworkers. To restore the exact 6:1 ratio after expansion, how many additional checkers must be recruited?

- A) 4
- B) 6
- C) 17
- D) 3

**Correct answer: B**

**Explanation:** After expansion: 102 caseworkers; required checkers at 6:1 = 17; current checkers = 11; additional needed = 6. Option A comes from scaling only the new caseworkers (24 ÷ 6), which assumes the current state is already on-ratio — it is not, since 78 caseworkers require 13 checkers, not 11. This tests computing the full target state rather than ratioing only the increment, since real baselines are usually already off-ratio and incremental thinking silently perpetuates existing gaps.

**Question 9 (moderate) — Interpreting a trend with seasonality**

Monthly applications: January 4,100; February 3,900; March 4,000; April 5,900; May 6,100; June 6,000. Last year's same months: 4,000; 3,850; 3,950; 5,800; 6,050; 5,900. A draft states: "Applications surged 50% between March and April — demand is accelerating and we need urgent capacity expansion." What is the fairest assessment?

- A) The draft is right: a 47.5% month-on-month rise demands urgent expansion.
- B) The March-to-April rise is real but seasonal — last year shows the same April step — and year-on-year growth is only around 1.7%; demand is essentially flat, so the "acceleration" framing is wrong.
- C) Applications are falling, since June is below May.
- D) The data is unusable without daily figures.

**Correct answer: B**

**Explanation:** The month-on-month rise (47.5%) is real, but last year's April also leapt (47%), showing the step is the scheme's seasonal shape. Comparing April to April and June to June instead gives growth of under 2% a year. This tests never interpreting a month-on-month change in seasonal data without the same-period-last-year comparison — a common source of "demand surge" narratives that do not survive scrutiny.

**Question 10 (hard) — Two-stage benefits model**

A channel-shift model: current state 180,000 transactions per year, 30% through the assisted channel at £7.50 each, the rest digital at £1.20. The proposal moves one-third of assisted transactions to digital. What annual saving does the proposal deliver, and what is the new assisted-channel share?

- A) £113,400 saving; assisted share falls to 20%
- B) £340,200 saving; assisted share falls to 10%
- C) £113,400 saving; assisted share falls to 24%
- D) £136,080 saving; assisted share falls to 20%

**Correct answer: A**

**Explanation:** Current assisted volume = 54,000; moved = 18,000; saving per moved transaction = £7.50 − £1.20 = £6.30; annual saving = £113,400; new assisted volume = 36,000, giving a 20% share. This tests staging a benefits model and writing intermediates down, and using an endpoint test (if all 54,000 moved, the saving would cap at £340,200, so a one-third move must yield exactly a third of that) to catch wrong-base errors.

**Question 11 (hard) — Reconciling two reports**

Two reports on the same service last month: Report 1 (operations) — "14,400 cases closed; 82% within the 10-day standard." Report 2 (performance team) — "Cases meeting the 10-day standard: 10,800 of 13,500 relevant cases — 80%." Which explanation is most plausible, and what should be verified before publication?

- A) One team cannot count; report whichever figure looks better.
- B) The reports use different denominators — 14,400 total closures versus 13,500 "relevant" cases — so the definitions of the case population differ; verify what the 900-case difference is and which definition the published standard requires.
- C) The difference is rounding; 80% and 82% are effectively the same.
- D) Average the two: publish 81%.

**Correct answer: B**

**Explanation:** Report 1 implies 11,808 cases within standard; Report 2 gives 10,800 of 13,500 — both numerator and denominator differ, and "relevant" signals that some population definition excludes 900 closures. This tests quantifying a discrepancy before explaining it and identifying that most data discrepancies between teams are definitional, not computational — reconciling definitions before publication prevents a worse version of the conversation happening afterwards, in public.

**Question 12 (hard) — Sample sizes and subgroup claims**

A survey of 1,200 service users found overall satisfaction 72%; among 48 respondents who used the service with a screen reader, satisfaction was 46%. Two draft board-paper statements: (1) "72% of our users are satisfied." (2) "Screen-reader users' satisfaction is 46%, 26 points below average — accessibility must be our top improvement priority." What is the most analytically sound advice?

- A) Both statements are fine as written.
- B) Statement 1 should say "72% of surveyed users" (the survey measures respondents, not all users); statement 2's gap is large and worth acting on, but with n=48 the 46% carries wide uncertainty (roughly ±14 points) — report it as a strong signal warranting priority investigation, and pair it with qualitative evidence rather than presenting the point estimate as precise.
- C) Statement 2 must be deleted: 48 people cannot establish anything.
- D) Statement 1 is wrong because response bias means true satisfaction is certainly lower.

**Correct answer: B**

**Explanation:** Statement 1 needs the honest fix "surveyed users". For statement 2, even at n=48 (uncertainty roughly ±14 points), the plausible range (about 32% to 60%) sits entirely below 72%, so the signal is real, but presenting "46%" as precise invites a challenge that will land — "roughly half, versus nearly three-quarters overall" both survives scrutiny and motivates the same action. This tests calibrating a small-sample finding honestly rather than either treating it as precise or dismissing it — presenting findings accessibly includes presenting uncertainty accessibly.

### Administration tips

- **Score for whether a candidate names the base aloud for every percentage**, and the population for every average.
- **Watch for whether a candidate writes staged intermediate values down** in a multi-step benefits model.
- **Note whether a candidate uses endpoint and benchmark tests** to sanity-check an answer.
- **Note whether a candidate interrogates a figure's definition** — footnotes, "relevant cases", seasonal shapes — before calculating with it.
- **Allow a calculator and rough paper**, and keep timing consistent across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that divides by the new value** in a change calculation.
- **Crediting an answer that averages averages** across unequal groups.
- **Missing when a candidate conflates percentage points with percent.**
- **Crediting an answer that ratios an increment against an already off-ratio baseline.**
- **Missing when a candidate reads a seasonal step as a trend**, or presents a small-sample estimate as precise without sizing its uncertainty.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures the precision with which a candidate reads, interprets, and draws conclusions from written material. Each item presents a short passage — for this role, typically a policy extract, a governance procedure, a ministerial or directorial communication, a research summary, or a standards document — followed by statements or questions. The dominant format is **True / False / Cannot say**. Complementary formats test inference, application of a rule to a scenario, and clear-writing judgement.

These assessments are usually taken online, timed between 15 and 25 minutes, with 15 to 30 questions grouped under passages. The passage is the entire universe of admissible evidence — domain knowledge, however extensive, must be set aside.

This matters for a business analyst at this level because the role converts language into commitments: identifying, analysing, challenging and validating requirements means detecting that "must" has quietly become "should", that a rule governs a different population than assumed, that a stakeholder's "leaning towards" is being briefed as a decision. Problem statements, recommendations, and summaries reach boards where an ambiguous sentence becomes someone else's confident error.

### How this assessment maps to the role

- **Precise comprehension and application of rules** map to **Defining and managing business needs, user needs and requirements**: validating and challenging requirements against source documents means establishing exactly what a policy requires, permits, forbids, and leaves open.
- **True/False/Cannot-say discipline** maps to **Context, problem and option analysis**: formulating recommendations considering feasibility, benefits and impact demands strict separation of what evidence establishes from what is merely plausible.
- **Inference** maps to **Business modelling** and **Digital and data systems analysis**: deriving the consequences of documented rules is how models and specifications are verified against their sources.
- **Reading stakeholder language** maps to **Stakeholder relationship management**: building and reaching consensus requires representing positions exactly — hedges, conditions, and protected concerns included.
- **Clear-writing judgement** maps to **Testing (business analysis)** and **User experience analysis**: acceptance criteria must be unambiguous and findings accessible, both reducing to choosing the shortest faithful formulation of a rule or result.

### Practice questions

Present each passage and its questions in order. Instruct the candidate to answer using only what the passage says. Do not reveal the correct answers or explanations until after they have responded.

*Passage 1 (for Questions 1–3)*

"Spend approval framework (extract): Digital and technology spend above £100,000 requires central assurance approval before contract signature. Spend between £25,000 and £100,000 may be approved by the departmental digital board, provided the proposal demonstrates compliance with the technology code of practice. Spend below £25,000 may be approved at deputy director level, except for any spend on data hosting, which requires digital board approval regardless of value. Approval lapses if the contract is not signed within six months."

**Question 1 (easy)**

Statement: "A £15,000 proposal for data hosting may be approved at deputy director level."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The value routes it under £25,000, but the passage attaches an exception overriding the value-based rule for data hosting "regardless of value" — the passage contradicts the statement. This tests reading a rule then sweeping for exceptions before concluding, since exception clauses routinely sit at the ends of sentences and a category-based exception beats a threshold-based rule wherever they collide.

**Question 2 (easy)**

Statement: "A £60,000 proposal that does not demonstrate compliance with the technology code of practice cannot be approved by the departmental digital board."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The mid-band rule is conditional — "may be approved... provided the proposal demonstrates compliance" — so removing the condition withdraws the permission it qualifies. This tests reading a conditional permission ("may X, provided Y") precisely, since readers routinely under-weight that the discretion exists only inside the stated condition.

**Question 3 (easy)**

Statement: "Central assurance approval takes longer to obtain than digital board approval."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage allocates approval authorities and a lapse rule but never states how long any approval takes. This tests resisting plausible domain knowledge — the more experienced a reader is, the more that knowledge volunteers itself as evidence, and the discipline of asking "does the document say that, or do I?" is what resolves requirements disputes where two experienced people confidently "remember" different rules.

*Passage 2 (for Questions 4–6)*

"From: Director of Service Transformation. Subject: Casework programme — analysis support. Following yesterday's board, three points. First, the board has approved discovery funding for the casework consolidation; it has not approved the programme itself, and colleagues should avoid language suggesting otherwise. Second, I want the discovery's problem definition led by analysis rather than by the incumbent supplier's roadmap — I have seen early drafts that lean heavily on the supplier's framing, and I expect the discovery to test that framing rather than inherit it. Third, the operations directorate has concerns about consolidation affecting local site roles; these concerns are legitimate, and engagement with operational staff should be built into the discovery plan from the start, not added when findings are challenged."

**Question 4 (easy) — Comprehension**

According to the email, what has the board approved?

- A) The casework consolidation programme.
- B) Discovery funding only — and the director explicitly warns against language implying more.
- C) The incumbent supplier's roadmap.
- D) A restructure of local site roles.

**Correct answer: B**

**Explanation:** The first point is built as an approval plus a fence, and option B captures both. This tests transmitting approval status with exact scope — "the board approved it" is among the most consequential misquotes in programme life, converting funding-to-investigate into mandate-to-build, and correcting inflation when heard is core to using evidence to explain decisions.

**Question 5 (moderate)**

Statement: "The director believes the incumbent supplier's framing of the problem is wrong."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The director's objection is methodological — the framing has been adopted without examination — not a verdict that it is false; testing could vindicate the framing entirely. This tests separating "should be independently tested" from "is wrong", since reporting the email as "the director thinks the supplier is wrong" would poison the relationship with an inference the text never makes.

**Question 6 (moderate) — Inference**

Which is the best inference from the director's third point?

- A) The director considers the operations directorate's concerns an obstacle to be managed.
- B) The director expects consolidation to be abandoned if operational staff object.
- C) The director anticipates that discovery findings may be contested, and wants operational engagement done early and genuinely so that findings are robust to that challenge rather than retrofitted against it.
- D) The director believes local site roles will not be affected by consolidation.

**Correct answer: C**

**Explanation:** The final clause concedes findings may be challenged, and the instruction's logic is that early engagement produces findings that withstand challenge, whereas late engagement is defensive. This tests inference from the full logic of a paragraph rather than its tone alone — inclusion of affected staff is framed as analytical robustness, not just courtesy.

*Passage 3 (for Questions 7–9)*

"Requirements management procedure (extract): Each requirement shall have a single named business owner. Requirements without an identified owner shall not enter the prioritisation process. Where two or more stakeholders claim ownership of a requirement, the lead business analyst shall facilitate agreement; if agreement is not reached within ten working days, the service owner shall determine ownership. A requirement's priority may only be changed at a scheduled prioritisation review, except that the service owner may raise (but not lower) a requirement's priority at any time in response to a legal or safety obligation."

**Question 7 (moderate)**

Statement: "The service owner may lower a requirement's priority between scheduled reviews if a legal obligation justifies it."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The parenthetical "(but not lower)" exists precisely to close the door the statement tries to open. This tests reading an asymmetric power precisely — "may raise" and "may change" differ by an entire category of authority, and the difference is invisible at skim speed.

**Question 8 (moderate) — Applying the procedure**

A new requirement has two directors claiming ownership; twelve working days of facilitated discussion have not produced agreement; the delivery team wants it prioritised urgently. What is the correct position?

- A) The requirement may enter prioritisation now, since urgency overrides ownership rules.
- B) The lead business analyst should now determine ownership, having facilitated for more than ten days.
- C) The service owner should now determine ownership; until an owner is identified, the requirement cannot enter prioritisation, however urgent.
- D) The two directors should share ownership so prioritisation can proceed.

**Correct answer: C**

**Explanation:** Twelve days exceeds the ten-day trigger for the service owner to determine ownership, and the unconditional gate — no owner, no prioritisation — carries no urgency exception. Option B misassigns the escalation, since the procedure separates the facilitator role from the decision authority. This tests applying a procedure by chaining its clauses, not by finding one convenient sentence.

**Question 9 (moderate) — Clear-writing judgement**

A programme wiki note summarises the priority-change rule. Which formulation is most accurate and clear?

- A) "Priorities can only be changed at prioritisation reviews."
- B) "Priorities change at scheduled reviews. One exception: the service owner can raise — but not lower — a priority at any time, where a legal or safety obligation requires it."
- C) "Priority modification shall be effectuated exclusively within the parameters of scheduled review governance, subject to certain service-owner prerogatives in exigent circumstances."
- D) "The service owner can change priorities whenever legal issues come up; otherwise wait for a review."

**Correct answer: B**

**Explanation:** Option B preserves the default, the exception's holder, its direction, timing, and trigger. Option A amputates the exception; option D erases the raise-only asymmetry; option C transmits almost nothing usable behind formal phrasing. This tests writing the shortest formulation from which a careful stranger could reconstruct the rule, asymmetries and triggers included.

*Passage 4 (for Questions 10–12)*

"Evaluation of the assisted digital pilot (summary): The pilot offered face-to-face support for the licensing service at six libraries over four months. 380 users were supported; 74% completed their application during the support session, compared with a 58% completion rate among unsupported applicants with similar starting characteristics over the same period. Users supported at the two rural sites accounted for 61% of all supported users. Session demand grew month on month at every site. The evaluation did not measure whether supported users could complete independently on subsequent occasions, and cost per completed application in the pilot was £31 against £4.80 for standard digital completion. The evaluation team notes that pilot sites were selected partly for high expected demand, and cautions against extrapolating demand levels to other locations."

**Question 10 (moderate)**

Statement: "Supported users completed applications at a higher rate than comparable unsupported applicants."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage states this directly with a properly matched comparison ("similar starting characteristics"). This tests recognising exactly how far a sentence of evidence carries — "completed at a higher rate" is an observed outcome, not yet "the support caused the difference" or "the pilot should be rolled out".

**Question 11 (hard)**

Statement: "The pilot demonstrates that assisted digital support reduces long-term demand for support by teaching users to complete applications independently."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The evaluation explicitly did not measure independent completion, and growing pilot demand neither confirms nor contradicts a long-term reduction claim. This tests the distinction between an unmeasured mechanism and a refuted one — an analyst who lets a plausible mechanism ride into a business case on a pilot's coat-tails has converted a measurement gap into a claimed benefit.

**Question 12 (hard) — Inference and synthesis**

A programme board asks what this evaluation supports saying about rolling assisted digital support out nationally. Which response best reflects the passage?

- A) "Roll out nationally: support raises completion by 16 points and demand is growing everywhere."
- B) "Do not roll out: at £31 per completion against £4.80, the economics are prohibitive."
- C) "The pilot shows a real completion benefit for supported users, at materially higher cost per completion; demand patterns from these deliberately high-demand sites — especially the rural concentration — cannot be extrapolated, and repeat-usage effects are unmeasured. A targeted rollout hypothesis (rural-weighted, with independence effects measured) is what the evidence supports testing next."
- D) "The evaluation is too flawed to support any statement."

**Correct answer: C**

**Explanation:** Option C earns each clause from the passage: the completion benefit, the cost differential, the extrapolation caution the evaluators themselves state, the rural concentration, and the unmeasured independence effect named as the next thing to test. This tests producing a board-grade synthesis — benefit sized, cost acknowledged, limits quoted, next test specified — from mixed evidence.

### Administration tips

- **Score for whether a candidate sweeps a passage for exceptions and parentheticals** before concluding, since they cluster at sentence ends.
- **Watch for whether a candidate imports domain knowledge** rather than reading only what the passage establishes — the dominant error at this level.
- **Note whether a candidate distinguishes a methodological objection from a verdict** ("should be tested" versus "is wrong").
- **Note whether a candidate carries a caveat forward in a synthesis** rather than letting it swallow the finding or letting the finding escape it.
- **Keep timing consistent** across candidates for this level, and expect a candidate to read a whole passage before touching statements.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from domain knowledge** rather than the passage.
- **Missing when a candidate stops at a rule and misses its exception**, or applies an exception beyond its stated trigger and direction.
- **Crediting an answer that inflates approval or decision language** — "discovery funding" read as "the programme".
- **Missing when a candidate lets one number veto a synthesis**, or lets a strong finding silence its own caveats.
- **Missing when a candidate confuses "not measured" with either "not real" or "real"** — a measurement gap supports only the conclusion that the next phase should measure it.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment (SJT) presents realistic workplace scenarios and asks which response is most or least effective. The material is interpersonal and organisational rather than technical: a sponsor wants a finding softened, two directors want incompatible things, a mentee's work is not ready, a supplier's claim does not survive scrutiny, a deadline collides with an obligation. Formats vary; there is rarely a flawless choice, and options are scored against a profile agreed by experienced practitioners who know how UK government digital and data teams work.

These assessments are usually taken online, over 20 to 40 minutes with 10 to 20 scenarios, often generously timed because they measure judgement rather than speed. Scoring rewards user focus, evidence integrity, transparent escalation with options attached, proportionate response, collaboration over heroics, inclusion, and the honest handling of mistakes.

This matters for a business analyst at this level because independence relocates the difficulty of the job. The technical work has established methods; the judgement work has only principles, applied under pressure, usually with incomplete information and an audience. Managing stakeholder relationships in one's own right means personally absorbing pressure that used to route around a trainee; leading projects means one's handling of a slipping deadline or a flawed sponsor figure sets the tone for the team; mentoring others means judgement propagates.

### How this assessment maps to the role

- **Independent judgement under pressure** maps to the role level: leading small to medium size projects and working independently means the escalation question changes from "should I ask?" to "what do I decide, what do I recommend, and what genuinely needs a senior decision?"
- **Stakeholder pressure and consensus-building** map to **Stakeholder relationship management**: building and reaching consensus and using evidence to explain decisions means holding evidence steady under sponsor pressure while keeping relationships workable.
- **Evidence and record integrity** map to **Defining and managing business needs, user needs and requirements**, **User experience analysis** and **Testing (business analysis)**: challenging requirements, presenting findings faithfully, and keeping test records truthful are precisely the duties social pressure targets.
- **Delivery behaviours** map to **Adapting to delivery methodologies** and **Business process improvement**: scenarios about scope, pace, and process shortcuts test protecting the purpose of a practice while flexing its weight.
- **Mentoring and community** map to the duty to develop the business analysis community by sharing best practice and mentoring others: scenarios probe whether a candidate builds capability in others rather than dependence on themselves.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded. Every option is something a real professional might do; the differences are in consequences.

**Question 1 (easy) — The sponsor and the inconvenient finding**

A candidate leads the analysis on a process improvement project. The evaluation shows the sponsor's favoured initiative — a triage checklist the sponsor personally championed — has produced no measurable improvement in error rates, though staff report liking it. Presenting a draft before the programme board, the sponsor says: "Drop the error-rate section; the staff feedback tells the real story." What is the most effective response?

- A) Drop the section — the sponsor owns the paper and staff feedback is genuine evidence.
- B) Keep the section unchanged and present it to the board without further discussion with the sponsor.
- C) Explain that the board needs both findings to decide well; offer to present them fairly — no-measurable-effect alongside genuine staff support, with possible explanations and a proposal for what to test next — but be clear the evaluation cannot be presented with the error-rate evidence removed.
- D) Drop the section from the paper but mention the error-rate finding verbally if a board member happens to ask.

**Correct answer: C**

**Explanation:** Option C protects the truthfulness of the evaluation while giving the sponsor everything legitimate they could want: fair framing, the staff-support finding given full weight, explanations explored, and a constructive next step, with a firm boundary stated professionally rather than confrontationally. Option A makes the analyst co-author of a misleading evaluation; option B protects evidence but bruises the relationship needlessly. This tests negotiating framing generously while never negotiating findings.

**Question 2 (easy) — Two directors, one analyst**

A project's steering group includes two directors. Director A says to prioritise fraud-prevention analysis; an hour later Director B emails that citizen-experience must come first, "as agreed at steering". The minutes support neither ordering explicitly, and the plan is the candidate's to propose. What is the most effective response?

- A) Follow Director A's instruction — fraud carries more organisational risk.
- B) Follow Director B's, since it came with a claimed steering mandate.
- C) Draft a short sequencing proposal with the evidence for each ordering (risk exposure, dependency, effort), send it to both directors noting their differing steers, and ask the steering chair to confirm the sequence at or before the next meeting — proposing an interim plan so work continues meanwhile.
- D) Split the team's analysis capacity evenly between both workstreams and tell each director theirs is being prioritised.

**Correct answer: C**

**Explanation:** Option C converts a status contest into an evidence question, makes the disagreement visible to both principals simultaneously, engages the legitimate decision forum, and keeps work moving under a declared interim plan. Options A and B each pick a director by private criterion, guaranteeing one later discovers they were overridden; option D tells each director a different story, ending trust with both when discovered. This tests giving decision-makers well-framed decisions rather than choosing on their behalf or stalling.

**Question 3 (easy) — A candidate's own error, downstream**

Reviewing an old options appraisal now cited in a live business case, a candidate finds an arithmetic error: one option's weighted score was inflated, and correcting it narrows the gap between the recommended option and the runner-up from decisive to marginal. The recommendation might survive on qualitative grounds, but the numbers no longer speak as clearly. The business case goes to committee in three weeks. What is the most effective response?

- A) Say nothing — the recommendation probably survives, and reopening it risks confusion and delay.
- B) Correct the appraisal, inform the business case owner and project sponsor promptly, and provide a short note on what changed, whether the recommendation still holds and on what grounds, in time for the committee.
- C) Quietly correct the archived appraisal so future readers see accurate numbers, without alerting the business case team.
- D) Wait to see whether committee scrutiny catches it; volunteer the correction only if asked.

**Correct answer: B**

**Explanation:** Three weeks is enough time to correct, re-reason, and re-brief calmly. Option B fixes the artefact, informs the people relying on it while they can still act, and does the analytical work the correction creates rather than leaving it to the business case owner. Option A gambles a committee decision on "probably"; option C fixes the record while the live decision proceeds on the flawed copy; option D outsources integrity to the committee's diligence. This tests self-reporting an error with a correction and an impact note rather than concealing it.

**Question 4 (easy) — The methodology mismatch**

A candidate joins a project whose delivery manager runs strict two-week sprints. Discovery-type analysis questions keep being forced into sprint-sized stories, and half-researched requirements are declared "done" when the sprint ends. The team is frustrated with analysis, and the candidate is new. What is the most effective response?

- A) Insist analysis be moved outside the sprint framework entirely, since discovery does not belong in sprints.
- B) Keep forcing analysis into the sprint shapes — consistency with team process matters more than analysis quality.
- C) Talk with the delivery manager about how analysis can flow with the cadence rather than against it — for example, running analysis a sprint ahead of build, using spike stories with explicit questions as their outcome, and defining "done" for analysis stories as validated findings rather than finished features — and propose trying it for two sprints.
- D) Complain to the product manager that the delivery manager does not understand analysis.

**Correct answer: C**

**Explanation:** The named skill of adapting how work and its outputs are produced to the team's delivery methodology means neither exempting analysis from the cadence (option A) nor surrendering its discipline to a mismatched shape (option B). Option C's specific proposals — analysis-ahead-of-build, spike stories, a tailored definition of done — respect the cadence while protecting quality, routed through the delivery manager as a collaborator with a time-boxed trial. This tests redesigning the interface between practice and process with the process's owner, rather than exempting oneself or escalating a design problem as a personality problem.

**Question 5 (moderate) — The supplier's number**

A supplier's proposal, favoured by the programme director, claims its product will "reduce manual handling by 80%, as achieved at a comparable UK public-sector deployment". Due-diligence analysis finds the referenced deployment processed a far simpler document set, and the supplier's own case study shows 80% applied only to one document category — overall manual handling fell about 35%. The director is preparing to cite the 80% figure at investment committee next week. What is the most effective response?

- A) Let it stand — the director is accountable for what they cite, and 35% is still a good result.
- B) Brief the director promptly and privately with the analysis: the 80% is category-specific and context-dependent, the defensible comparable figure is ~35%, and citing 80% risks committee credibility and a benefits baseline the programme will later be held to — then offer revised wording and to attend as analytical support.
- C) Email the investment committee secretariat directly with the findings, copying the director.
- D) Raise it publicly in the programme's open Slack channel so the record shows it was flagged.

**Correct answer: B**

**Explanation:** A week is enough time to adjust the case gracefully, and a private, prompt, evidence-attached brief with revised wording is stakeholder relationship management doing what it should — using evidence to explain decisions while improving the relationship. The inflated figure risks becoming the programme's contractual benefits baseline, not just an embarrassment on the day. Option C bypasses the director to the committee; option D optimises for visible blamelessness at the director's expense. This tests challenging a number early, privately, with the corrected version in hand.

**Question 6 (moderate) — Scope pressure at the consensus meeting**

Facilitating a final prioritisation workshop, consensus forms around a scope that defers the reporting module. As the workshop closes, the head of finance — who accepted the deferral reluctantly — says: "To be clear, I'll be telling the executive committee that the analysis team decided reporting was unimportant." What is the most effective response?

- A) Let it pass to avoid conflict; correct the record later if it becomes a problem.
- B) Respond immediately and evenly: restate what was actually decided and by whom — the group prioritised against the release capacity using the agreed criteria; reporting was deferred, not judged unimportant; and the deferral was the workshop's consensus, not an analysis-team verdict — then offer to document the decision rationale, including finance's concerns, for exactly such executive conversations.
- C) Reopen the prioritisation discussion so the head of finance can win some scope back.
- D) After the meeting, email the head of finance's line manager about the mischaracterisation.

**Correct answer: B**

**Explanation:** Option B corrects the decision's content, method, and ownership immediately and without heat, then offers a legitimate channel — documented rationale including the concern — for the underlying dissatisfaction. Option A lets a public mischaracterisation stand until it becomes received wisdom; option C rewards the tactic; option D escalates behind a stakeholder's back over words said to the candidate's face. This tests defending a facilitated group decision's accuracy and ownership calmly, in the room.

**Question 7 (moderate) — The mentee's stalled development**

A candidate mentors a junior analyst from another team. Over three months their analysis is consistently sound, but they bring every stakeholder difficulty to be resolved directly — two direct interventions have both worked. Today they ask for attendance at their next stakeholder meeting "because it goes better when you're there". What is the most effective response?

- A) Attend — the meetings do go better, and their project benefits.
- B) Decline all further help so they learn independence the hard way.
- C) Decline the meeting but restructure the help: prepare beforehand (map the stakeholders, rehearse the difficult exchanges, plan their opening), debrief afterwards, and name the pattern honestly — the interventions have been substituting for their skill rather than building it, and the goal now is their capability.
- D) Attend, but sit silently at the back so presence reassures without participating.

**Correct answer: C**

**Explanation:** The gap is stakeholder skill, not analysis, and each successful rescue has deepened the dependence it seemed to solve. Option C converts rescue into scaffolding: preparation and rehearsal transfer teachable techniques, the debrief converts a real meeting into a lesson, and naming the pattern honestly respects the mentee's capacity to hear a development need stated plainly. Option A compounds the problem; option D substitutes a talisman for a skill. This tests measuring mentoring by the mentee's growing independence rather than by short-term smoothness.

**Question 8 (moderate) — The accessibility finding and the launch date**

Two weeks before a public beta launch, an acceptance-criteria review against user research finds no participants used assistive technology, and automated accessibility checks — which pass — are the only accessibility evidence. Assessment is scheduled post-launch. The delivery manager says: "Automated checks pass, the assessment isn't until later, and two weeks is two weeks." What is the most effective response?

- A) Accept the position — automated checks passing is genuine evidence, and the assessment will catch anything real.
- B) Demand the launch be postponed until assistive-technology research is complete.
- C) Set out the risk precisely and propose a proportionate plan: automated checks catch only a fraction of accessibility barriers, so commission assistive-technology testing now — even a small moderated round in the remaining fortnight — brief the service owner on the gap and the evidence status so the launch decision is informed, and prepare a rapid-fix path for what testing finds.
- D) Log the concern in the risk register and take no further action, since accessibility is ultimately the service owner's accountability.

**Correct answer: C**

**Explanation:** Automated checks passing is real but thin evidence for a population the service standard explicitly protects. Option C commissions fast, proportionate testing, briefs the accountable owner so the launch decision is made with the gap visible, and prepares a fix path. Option A treats absence of evidence as evidence of absence; option B spends credibility demanding an outcome that is the service owner's call before the risk is even measured; option D is compliance theatre that protects the process record, not the users. This tests keeping excluded users in the decision, with evidence, through the accountable owner.

**Question 9 (moderate) — The community contribution**

A department's business analysis community is patchy: practice varies between teams, inductions are inconsistent, and a recent quality review criticised requirements artefacts across three programmes. The head of profession, stretched thin, asks for volunteers to improve things. The candidate leads a busy project. What is the most effective response?

- A) Stay focused on the project — community work is discretionary and delivery commitments come first.
- B) Volunteer to personally write a comprehensive best-practice manual covering all analysis activities.
- C) Offer a bounded, high-leverage contribution: propose the community target the quality review's specific findings first, offer to lead one strand — for example, a requirements-quality peer-review circle where analysts across programmes review each other's artefacts — and share the templates and checking methods used on the candidate's own project.
- D) Suggest the head of profession hire an external consultancy to standardise practice.

**Correct answer: C**

**Explanation:** Developing the business analysis community by sharing best practice and mentoring others is a named duty at this level, so option A misreads the job. Option C targets evidenced need, is scoped to survive real workload, and its chosen mechanism builds the community's capability to improve itself. Option B is generous but doomed to arrive late and be read by nobody; option D outsources the one thing that cannot be outsourced. This tests designing mechanisms by which practice spreads rather than either withdrawing or over-committing.

**Question 10 (hard) — Least effective: the failing project a candidate inherited**

A candidate takes over as lead analyst on a struggling project. In the first week they find: the requirements baseline was signed off without validation by operational stakeholders; the traceability matrix has not been maintained for two months; and the previous analyst — now on another project in the same directorate — appears to have known both facts. The delivery manager wants to "look forward, not back". Which response would be **least effective**?

- A) Assess and triage: quantify the validation gap and the matrix decay, size the rework honestly, and give the delivery manager and project sponsor a costed recovery plan with priorities.
- B) Arrange validation sessions with the operational stakeholders whose review was skipped, framed as "confirming the baseline as we resume", and restore the matrix for the highest-risk requirements first.
- C) Circulate a written analysis to the project board attributing the project's difficulties to the previous analyst's specific failures, so accountability is clear before recovery begins.
- D) Privately and without blame, compare notes with the previous analyst to learn the history — what pressures produced the shortcuts, and what undocumented knowledge they hold — and feed anything relevant into the recovery plan.

**Correct answer: C**

**Explanation:** Options A, B and D are the recovery toolkit in natural order: sizing the problem, repairing it with careful framing, and harvesting irreplaceable context without blame. Option C spends the project's first-week momentum on retrospective blame, converts a colleague who holds critical knowledge into a defensive adversary, and hands the board a personalised story that obscures the systemic one. This tests examining the past for causes and knowledge rather than for culprits, and routing any genuine conduct concern through proper line-management channels rather than a board paper.

**Question 11 (hard) — Ranking responses: the discovered dependency**

Mid-project systems analysis uncovers that a critical integration depends on an API owned by another department, scheduled for decommissioning in eight months — before the service's planned go-live. Nobody on the project knew. The other department has offered a replacement API with sparse documentation and unclear coverage of the project's use cases. Rank these responses from most to least effective: (1) analyse the gap now, mapping integration requirements against the replacement API's actual capabilities, engaging the other department's technical team directly, and quantifying what is covered, uncovered, and unknown; (2) raise the dependency at the next risk review with what is known, flagging it as potentially plan-changing and recommending the gap analysis as an urgent action; (3) alert the delivery manager and service owner informally today, so plan-level implications are known while the gap analysis proceeds; (4) redesign the integration approach now to avoid the other department's APIs entirely, before analysing the replacement.

- A) 3, 1, 2, 4
- B) 1, 2, 3, 4
- C) 3, 2, 1, 4
- D) 4, 1, 3, 2

**Correct answer: A**

**Explanation:** Response 4 is worst — redesigning before analysing spends major effort on an assumption either way. Response 3 is best: a discovered plan-threatening dependency has a half-life, and every day the delivery manager and service owner plan without knowing it compounds decisions on a false premise, so a same-day informal alert beats even the excellent gap analysis for first place. Response 1 then precedes response 2, since the analysis is the substance and the risk-review entry is stronger once informed by it, but too slow as a first move on its own. This tests the principle of escalating the existence of a threat immediately and informally, and its measured size formally once known — a common error conflates the two.

**Question 12 (hard) — Competing goods: the truth, the team, and the timing**

A show-and-tell to senior stakeholders is tomorrow morning. This afternoon, validating the team's demo data, a candidate discovers the headline metric the product manager plans to present — "median application time down from 40 to 12 minutes" — is wrong: the 12-minute figure comes from testing with pre-filled data, and the honest current figure with real user input is about 22 minutes. Still a strong improvement, but not the story on the slides. The product manager is in back-to-back meetings until this evening; the team has worked weeks towards tomorrow. What is the most effective response?

- A) Say nothing until after the show-and-tell, then correct the figure quietly for future presentations — the improvement is real, and the team deserves its moment.
- B) Interrupt the product manager's meetings with a message marked urgent: the headline figure is wrong, here is the correct one (40 → 22 minutes, with the pre-fill explanation), here is proposed revised wording that is still a strong story, and offer to be available this evening to update the slides together.
- C) Let the presentation proceed but position to interject with the correction if the metric is questioned.
- D) Email the senior stakeholders tonight with the corrected figure so they arrive informed.

**Correct answer: B**

**Explanation:** Option B preserves both the team's moment and the integrity of what stakeholders are told, since the corrected figure is still a genuine 45% improvement and a strong, honest story achievable with an evening's slide revision. Option A prices the team's comfort above the audience's truth and assumes the figure stops travelling, which quoted headline metrics never do; option C is integrity as ambush insurance; option D bypasses the product manager entirely. This tests the consistent habit of taking an eve-of-publication error to its owner immediately, with the corrected version and help attached.

### Administration tips

- **Score for whether a candidate carries a solution alongside a problem** when raising an issue, rather than raising it naked.
- **Watch for whether a candidate locates ownership** — whose decision, whose relationship, whose error — before choosing a response.
- **Note whether a candidate distinguishes existence-escalation (immediate, informal) from size-escalation (formal, once measured).**
- **Note whether a "least effective" answer identifies structural damage** — destroyed information flow, allies converted to adversaries — rather than only rudeness.
- **Since these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that negotiates a finding to preserve a relationship** rather than negotiating only its framing.
- **Crediting an answer that performs integrity rather than practising it** — public flags or positioned interjections that maximise visible blamelessness while ambushing colleagues.
- **Rewarding an answer that absorbs a decision belonging to someone else** — a facilitator who owns a group's decision, a mentor who attends the meeting forever.
- **Missing when a candidate waits for complete analysis before raising a plan-critical threat.**
- **Rewarding rescue over scaffolding** — an intervention that substitutes a candidate's skill for a colleague's, however successful, should score below one that transfers the skill.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a business analyst: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested testability checks on tidy-looking requirements, deduction that respects the gap between what rules entail and what behaviour proves, critical-path reasoning, segmented reading of operational data, and re-establishing a problem before evaluating solutions. The numeric section tested wrong-base and percentage-point vigilance, weighted averages and target-state ratios, seasonal comparison, staged benefits models with endpoint tests, definitional reconciliation between conflicting reports, and honest sizing of small-sample evidence. The verbal section tested exception-sweeping, conditional permissions, the precise distance between "test the framing" and "the framing is wrong", and synthesis of mixed evidence into board-grade sentences that carry benefit, cost, and limitation at their earned strengths. The situational judgement section tested findings defended and framing negotiated, conflicting directors structured into evidence questions, errors self-reported with impact notes, mentoring that builds capability rather than dependence, and escalation that separates the immediate alarm from the measured analysis.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on a different answer from the model, particularly on the harder items, is a different signal from one who guesses — score for the quality of reasoning shown. A debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can think carefully under independence, work accurately with numbers that travel unaccompanied, read precisely, and exercise sound judgement while managing stakeholders and developing others — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
