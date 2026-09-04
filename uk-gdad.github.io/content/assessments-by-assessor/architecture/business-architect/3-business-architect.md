# Business Architect - Psychometric Assessments

## Introduction

This document is written for you: an assessor evaluating a candidate for business architect in the UK Government Digital and Data profession. Whether you are a line manager, a panel member, or a reviewer, this guide gives you a structured, job-specific psychometric assessment you can administer fairly and consistently for hiring, promotion, or internal benchmarking decisions.

A psychometric assessment is a structured, standardised exercise that measures the mental capabilities and behavioural tendencies that predict success in a role. For a business architect, that means far more than abstract puzzles. The assessments described here are job-specific: they use the kinds of artefacts a business architect genuinely handles - capability maps, target operating models, strategy documents, benefits cases, stakeholder communications, and roadmaps - and the kinds of decisions a business architect genuinely makes, such as aligning programme design work with organisational strategy, mediating between senior stakeholders, and turning complex, fragmented information into clear multidimensional views that support executive decision making.

Why does this matter for this role in particular? A business architect sits at the intersection of strategy and delivery, aggregates and disaggregates complex information from across the organisation, communicates that information to stakeholders at every level, and guides other architects in using the right tools and methods. Assessments of cognitive ability, numerical reasoning, verbal reasoning, and situational judgement map directly onto those demands.

This document is organised into four main assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters for this role, a mapping of the assessment dimensions to the specific skills in the business architect capability framework, a substantial set of practice items with full worked explanations, administration tips, and common pitfalls.

Administer this fairly and consistently. Give every candidate for this role level the same items and the same time limit; brief every candidate the same way; and keep the conditions (room, equipment, breaks) as similar as you reasonably can between candidates. The worked answers and explanations below are your answer key: hold them back from the candidate until after the assessment, and use them only for scoring and the debrief that follows.

This is one input among several in a hiring or promotion decision, never the sole basis for one - see the advisory below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Unlike a generic intelligence test, it presents the candidate with the everyday materials of the job - capability models, process hierarchies, strategy-to-delivery traceability matrices, governance papers, and architecture artefacts - and asks them to reason quickly and accurately about them.

Administer this as an online or paper-based, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Score responses objectively against the answer key, and where practical, compare results against a norm group rather than judging performance in isolation. Consider recording speed and accuracy separately, since working both quickly and carefully matters for this role. If your platform offers short, ungraded practice questions before the timed section, use them consistently for every candidate.

For a business architect, cognitive ability is particularly relevant because the role's core professional value is structured thinking: developing an integrated view of an enterprise requires holding many moving parts in mind at once - which capabilities support which strategic outcomes, which programmes affect which business areas, where design decisions contradict agreed principles, and what follows logically when one element of the operating model changes. This assessment simulates precisely those demands in miniature.

### What it measures

The assessment dimensions map directly to the skills in this capability framework:

- **Pattern recognition** maps to the **Business architecture** skill: producing clear multidimensional views of the organisation means recognising recurring structures - duplicated capabilities, common process patterns, repeated dependencies - across large and messy information sets.
- **Logical deduction** maps to **Strategic thinking** and **Strategic design and business change**: defining strategies and evaluating whether current strategies meet business requirements requires reasoning validly from principles, patterns, standards, policies, and roadmaps to their consequences.
- **Error checking** maps to **Methods and tools** and **Business architecture**: building capability in methods and tools and ensuring they are adopted consistently requires spotting inconsistencies between artefacts - a capability map that contradicts a value stream, a roadmap milestone that conflicts with a policy constraint.
- **Prioritisation** maps to **Making and guiding decisions**: making decisions characterised by medium levels of risk and complexity, and recommending decisions as risk and complexity increase, depends on rapidly ranking what matters most.
- **Problem solving** maps to **Consultancy** and the duty to aggregate and disaggregate complex information from across the organisation: stakeholders bring tangled business challenges, and a business architect must decompose them, model them, and recommend next steps.

### Practice questions

**Question 1 (easy) - Pattern recognition in a capability model**

An organisation's business capability model uses a three-level hierarchy. Level 1 capabilities are named with one word (e.g. "Casework"). Level 2 capabilities are named "Level-1 name + colon + function" (e.g. "Casework: Triage"). Level 3 capabilities append a further colon and activity (e.g. "Casework: Triage: Identity verification"). While reviewing a draft model produced by a junior architect, the candidate sees these entries:

1. Payments
2. Payments: Reconciliation
3. Payments: Reconciliation: Exception handling
4. Reconciliation: Payments: Bulk matching
5. Payments: Disbursement

Which entry breaks the naming pattern?

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: C**

**Explanation:** The pattern requires the Level 1 capability name to come first, with each colon adding a deeper level. Entry 4 inverts the hierarchy: "Reconciliation" is a Level 2 function under "Payments", so a Level 3 entry must read "Payments: Reconciliation: Bulk matching". Entries 2, 3 and 5 all follow the rule. This is exactly the kind of consistency check performed when guiding others in using architectural tools and methods: naming conventions look trivial, but broken conventions destroy the traceability that makes a model usable for decision making.

**Question 2 (easy) - Logical deduction from design principles**

An organisation's architecture principles state: "Every citizen-facing service must reuse the departmental identity capability unless a formal exemption is granted by the design authority." A programme team tells the candidate: "Our new benefits application service is citizen-facing and does not use the departmental identity capability." Which one of the following conclusions must be true?

- A) The programme has breached the architecture principles.
- B) The programme holds a formal exemption from the design authority.
- C) Either the programme holds a formal exemption, or it has breached the principles.
- D) The identity capability was unsuitable for the programme's needs.

**Correct answer: C**

**Explanation:** The principle is a conditional rule with one permitted exception. From the facts given, it cannot be told whether an exemption exists, so neither A nor B must be true on its own - each is merely possible. D introduces information not present at all. The only conclusion that must hold in every case consistent with the facts is the disjunction in C. This item rewards a candidate who deduces only what the given information guarantees. In the real role, the same discipline stops an architect accusing a programme of non-compliance before checking the exemptions register - which protects stakeholder relationships as well as the logic.

**Question 3 (moderate) - Error checking a traceability matrix**

The candidate maintains a matrix tracing strategic objectives to the capabilities that deliver them. An extract reads:

| Strategic objective | Supporting capability | Owning programme |
|---|---|---|
| SO1: Reduce processing time | Automated triage | Programme Alpha |
| SO2: Improve data quality | Master data management | Programme Beta |
| SO3: Increase digital uptake | Assisted digital support | Programme Gamma |
| SO1: Reduce processing time | Master data management | Programme Alpha |

The strategy document states: (i) each strategic objective is supported by exactly one capability; (ii) Programme Beta owns all work on master data management. How many rows of the matrix are inconsistent with the strategy document?

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Check each rule. Rule (i): SO1 appears twice (rows 1 and 4) with two different capabilities - but read carefully: rule (i) says each objective is supported by exactly one capability, and SO1 is shown supported by both "Automated triage" and "Master data management", so at least one of rows 1 and 4 is wrong; however, the question asks how many rows are inconsistent with the document, and row 4 violates rule (ii) as well, because it assigns master data management work to Programme Alpha rather than Programme Beta. Row 4 therefore breaches both rules, while rows 1, 2 and 3 each breach neither on their own - row 1 is only rendered problematic by row 4's existence, and removing row 4 restores full consistency. The single defective row is row 4, so the answer is 1. This mirrors real artefact review: a strong candidate locates the minimal correction that restores consistency rather than flagging every symptom as a separate defect.

**Question 4 (moderate) - Prioritisation under governance pressure**

It is Monday morning. Four items compete for the candidate's attention:

1. The design authority meets Wednesday and needs the candidate's review of a programme's target operating model, without which the programme cannot proceed to its funding gate.
2. A junior business architect has asked for feedback on their first capability assessment, due to their line manager Friday.
3. A director has emailed asking for "a quick view" of how a proposed machinery-of-government change would affect the candidate's business area - no deadline stated.
4. The candidate's quarterly update of the enterprise capability model is due at month end, two weeks away.

Which sequencing is most defensible?

- A) 3, 1, 2, 4 - directors outrank all other stakeholders
- B) 1, 3, 2, 4 - gate-blocking review first, then the strategic request, then coaching, then routine maintenance
- C) 1, 2, 3, 4 - strict deadline order
- D) 2, 1, 3, 4 - developing others always comes first

**Correct answer: B**

**Explanation:** This item tests reasoning about impact and urgency together. Item 1 is both urgent (Wednesday) and high impact (it blocks a funding decision affecting delivery of strategy). Item 3 has no stated deadline but concerns a machinery-of-government change - strategically significant and sponsored by a director, so it comes next; a brief scoping reply also manages the director's expectations early. Item 2 matters (guiding others is part of this role level) but has a Friday deadline and can follow. Item 4 is important, routine, and two weeks away. Option A over-weights seniority against a hard governance deadline; C treats the undated director request as lowest priority purely because it lacks a date, which confuses "no deadline" with "no urgency"; D inverts impact ordering. The pattern this item rewards: the strongest answer sequences by impact-weighted urgency, not by any single dimension.

**Question 5 (moderate) - Pattern recognition across operating model documents**

The candidate is consolidating operating model summaries from four business units. Each summary lists functions in a fixed order: Customer contact, Casework, Decision making, Payments, Assurance. They notice the following counts of full-time-equivalent staff (FTE) recorded for "Assurance" as a percentage of each unit's total: Unit A 5%, Unit B 6%, Unit C 19%, Unit D 5%. The four units perform comparable work at comparable volumes. As a business architect, what is the most reasonable first interpretation of Unit C's figure?

- A) Unit C is over-resourced in assurance and should be cut to 5-6% immediately.
- B) The figure is an outlier that warrants investigation - it may reflect a definitional difference, a data error, or a genuine local need.
- C) Units A, B and D are under-resourced in assurance and should rise to 19%.
- D) The figures cannot be compared because the units are different.

**Correct answer: B**

**Explanation:** Recognising an outlier is pattern recognition; deciding what it means requires restraint. Three comparable units cluster at 5-6% and one sits at 19% - more than three times the cluster. But an outlier is a prompt for inquiry, not a conclusion. Common innocent explanations include definitional differences (Unit C may count quality assurance embedded in casework as "Assurance"), data errors, or genuine local drivers such as a recent audit finding. Options A and C leap to resourcing decisions without evidence; option D wrongly abandons comparison despite the stem stating the units are comparable. This item tests whether the candidate validates that they are comparing like with like before treating aggregated information as a basis for decisions.

**Question 6 (moderate) - Logical deduction about change sequencing**

A transformation roadmap contains these dependency rules: (i) the new case management capability cannot go live before the data migration completes; (ii) the data migration cannot start until the legacy data cleansing finishes; (iii) staff training must occur in the same quarter as case management go-live or the quarter immediately before it. Legacy data cleansing finishes at the end of Q2. Data migration takes one full quarter. What is the earliest quarter in which staff training may begin?

- A) Q1
- B) Q2
- C) Q3
- D) Q4

**Correct answer: C**

**Explanation:** Work forwards through the dependencies. Cleansing finishes end of Q2, so migration can occupy Q3 at the earliest and completes at the end of Q3. Case management go-live therefore cannot occur before Q4. Training must fall in the go-live quarter (Q4) or the quarter immediately before it (Q3). The earliest permissible quarter for training is therefore Q3. A tempting wrong answer places training in Q4 by anchoring on go-live; another is Q2 by forgetting migration takes a full quarter. Dependency reasoning of exactly this kind underpins the duty to ensure business change is implemented effectively to meet strategy - a roadmap that trains staff too early wastes the training; too late, it delays benefits.

**Question 7 (moderate) - Error checking a benefits map**

A benefits map submitted to the candidate for review claims: "Enabler: single sign-on → Intermediate benefit: fewer password reset calls → End benefit: reduced contact centre cost → Strategic objective: improved citizen satisfaction." Which link in the chain is logically weakest as drawn?

- A) Single sign-on → fewer password reset calls
- B) Fewer password reset calls → reduced contact centre cost
- C) Reduced contact centre cost → improved citizen satisfaction
- D) All links are equally strong

**Correct answer: C**

**Explanation:** The first link is mechanically plausible: one credential means fewer forgotten passwords. The second is plausible with a caveat about fixed costs, but call volume genuinely drives variable cost. The third link, however, changes category: a cost reduction is an efficiency benefit to the organisation, and nothing in the chain explains how the saving improves citizens' experience. Citizens do not perceive the contact centre's cost base. The map needs either a different end-point (e.g. an efficiency objective) or an added mechanism (e.g. savings reinvested in service improvement). Spotting category errors in causal chains is central to the Strategic design and business change skill - focusing on outcomes rather than solutions means testing whether each claimed outcome genuinely follows, and this item is testing exactly that discipline.

**Question 8 (challenging) - Multi-constraint problem solving**

Three workshops must be scheduled - Vision (V), Capability assessment (C), and Roadmap (R) - across five working days, Monday to Friday, one workshop per day at most. Constraints: (i) V must precede both C and R; (ii) the executive sponsor is only available Monday and Thursday, and must attend V; (iii) C requires outputs from V to be written up, which takes two full working days between the workshops; (iv) R must be on the day immediately after C. On which day must C take place?

- A) Tuesday
- B) Wednesday
- C) Thursday
- D) Friday

**Correct answer: C**

**Explanation:** V must be Monday or Thursday (sponsor availability). If V were Thursday, C and R could not both follow within the week, violating (i). So V is Monday. Constraint (iii) requires two full working days between V and C: Tuesday and Wednesday are the write-up days, so C's earliest slot is Thursday. Constraint (iv) then places R on Friday - which fits. Any later placement of C pushes R beyond Friday. Hence C must be Thursday. The reasoning pattern this item tests - fix the most constrained element first, then propagate - is the same one used when sequencing engagement with hard-to-book executives around governance milestones.

**Question 9 (challenging) - Deduction from a RACI inconsistency**

A programme's RACI chart states: (i) exactly one role is Accountable for each deliverable; (ii) the business architect is Accountable for the target operating model; (iii) the programme director signs off the target operating model, and "sign-off authority always implies accountability". Which statement correctly identifies the flaw?

- A) There is no flaw; directors can sign off documents they are not accountable for.
- B) Statements (ii) and (iii) together violate statement (i), since both the business architect and the programme director would be Accountable for the same deliverable.
- C) Statement (i) is wrong because accountability can always be shared.
- D) Statement (ii) is wrong because architects can never be accountable for deliverables.

**Correct answer: B**

**Explanation:** Treat the three statements as premises and test joint consistency. Premise (iii) makes the programme director accountable for the target operating model (sign-off implies accountability). Premise (ii) makes the business architect accountable for the same artefact. Premise (i) permits exactly one accountable role per deliverable. All three cannot be true together - that is the flaw, and it is a joint inconsistency rather than a defect in any single premise taken alone. Options C and D attack individual premises with outside opinions rather than logic; option A denies premise (iii) rather than working within the given rules. In practice this is resolved by clarifying that the architect is Responsible while the director is Accountable - a conversation a business architect will have often when supporting executive-level work.

**Question 10 (challenging) - Aggregation and disaggregation logic**

The candidate aggregates incident data from three service lines into a single organisational view. Service line X reports incidents per 1,000 transactions; service line Y reports incidents per week; service line Z reports incidents per 1,000 transactions but counts only incidents lasting over one hour. Which single statement best describes what can validly be concluded from a naive sum of the three reported figures?

- A) The sum gives a usable organisational incident rate.
- B) The sum overstates the true rate because Z's threshold inflates its count.
- C) Nothing useful: the figures mix different denominators and definitions, so summing them produces a number with no coherent meaning.
- D) The sum is valid provided all three lines have similar transaction volumes.

**Correct answer: C**

**Explanation:** X and Z share a per-transaction denominator but different incident definitions (Z undercounts by excluding short incidents - note that B claims the opposite direction of bias). Y uses a time denominator, which cannot be added to per-transaction rates at all. No adjustment mentioned in D repairs a definitional mismatch. The only valid conclusion is C: before aggregating, the denominator and the definition must both be normalised. This is the heart of the role-level duty to develop standard and scalable models to collect, aggregate, or disaggregate complex information - the model must enforce common definitions before any roll-up is meaningful.

**Question 11 (challenging) - Prioritising architectural debt**

A capability assessment scores four capabilities on strategic importance (1-5) and current maturity (1-5):

| Capability | Importance | Maturity |
|---|---|---|
| Identity verification | 5 | 2 |
| Correspondence handling | 2 | 2 |
| Fraud analytics | 5 | 4 |
| Internal reporting | 3 | 5 |

Using a standard "invest where importance is high and maturity is low" heuristic, which capability should be recommended as the top investment priority, and which as the clearest candidate for maintain-only?

- A) Invest in fraud analytics; maintain identity verification
- B) Invest in identity verification; maintain internal reporting
- C) Invest in correspondence handling; maintain fraud analytics
- D) Invest in internal reporting; maintain correspondence handling

**Correct answer: B**

**Explanation:** The heuristic targets the largest gap between importance and maturity among important capabilities. Identity verification scores importance 5 against maturity 2 - a gap of 3 on a critical capability - making it the clear investment priority. Internal reporting has moderate importance (3) and the highest maturity (5): it already exceeds need, so maintain-only is appropriate. Fraud analytics is important but already mature (gap of 1); correspondence handling is immature but unimportant, so investment there yields little strategic return. Option A confuses "important" with "needs investment". Presenting this kind of two-dimensional view clearly to decision makers is precisely the "clear multidimensional views" outcome named in the Business architecture skill, and this item tests whether the candidate reaches it methodically.

**Question 12 (challenging) - Spotting the hidden assumption**

A board paper argues: "Our citizen contact volumes fell 12% after we launched the new online service. Therefore the online service successfully diverted contact away from the telephone channel, and we can now reduce contact centre staffing by 12%." As the business architect reviewing this paper, which single unstated assumption is most critical to challenge?

- A) That contact volumes were measured in the same way before and after launch.
- B) That the 12% fall was caused by the online service rather than by other factors, and that staffing needs scale linearly with contact volume.
- C) That the online service is popular with citizens.
- D) That the contact centre staff can be redeployed.

**Correct answer: B**

**Explanation:** The argument makes two silent leaps. First, causation: volumes can fall for seasonal, economic, or policy reasons entirely unrelated to the new service - correlation in time is not attribution. Second, linear scaling: contact centres carry fixed capacity for peaks, statutory response standards, and complex cases, so a 12% volume fall rarely permits a 12% staffing cut. Option A is a fair audit question but less critical than the causal and scaling leaps; C and D concern desirability and implementation, not the argument's validity. Challenging hidden assumptions before they reach the board is core consultancy work, and this item tests whether a candidate's advice and recommendations carry the weight of testing reasoning that others take on trust.

**Question 13 (moderate) - Problem decomposition for a business challenge**

A director tells the candidate: "Casework productivity is down and morale is poor. Fix the operating model." Before proposing any solution, the problem must be decomposed. Which decomposition is most useful as a first structure?

- A) Split the problem by staff grade, since morale varies by seniority.
- B) Split the problem into demand (volume and complexity of cases arriving), capability (people, process, technology available to handle them), and flow (how work moves through the model), then test where the evidence points.
- C) Split the problem into "technology problems" and "people problems" and commission two reviews.
- D) Benchmark against another department first, then copy their operating model.

**Correct answer: B**

**Explanation:** Good decomposition is mutually exclusive and collectively exhaustive relative to the mechanism that produces the outcome. Productivity in a casework operation is a function of what arrives (demand), what capacity and capability exist to process it, and how efficiently work flows between steps - option B covers the whole causal system and defers conclusions until evidence is examined. Option A slices by an attribute that may correlate with the problem but cannot explain it end to end. Option C imposes a false binary that fragments interdependent causes, and commissioning parallel reviews before framing the problem invites contradictory findings. Option D reaches for a solution before understanding the problem - the opposite of the Strategic design and business change skill's instruction to focus on outcomes rather than solutions. This item, like real consultancy work, rewards a candidate who structures the problem before answering it over one who jumps to a familiar remedy.

### Administration tips

- **Encourage the candidate to work from their own kind of artefact for orientation, not for the scored items themselves.** A brief warm-up conversation about a real capability model, roadmap, or RACI can settle nerves, but keep the timed, scored items identical for every candidate.
- **Ask the candidate to verbalise their deductions where practical.** Hearing the inference chain, or seeing it written down, helps distinguish a lucky guess from real understanding when marking, and it is good evidence of the "explain complex business problems" behaviour this role needs.
- **Time-box consistently at roughly one minute per question.** If a candidate is visibly stuck on one item, note it and allow them to move on and return later, consistent with how the section is designed to be timed.
- **Note how a candidate uses elimination.** On multiple-choice items, a strong candidate discards options that introduce facts not given in the stem; this is worth observing when scoring borderline answers.
- **Set fair conditions for an experienced candidate.** Senior candidates may feel assessments are unnecessary; present the exercise professionally, in a quiet, unhurried setting, so the result reflects genuine reasoning rather than irritation at the format.

### Common pitfalls

- **Crediting outside knowledge over the stated premises.** Cognitive items define a miniature world of rules; a candidate's deep organisational knowledge is an asset at work but should not override the stated premises when marking this section.
- **Confusing "consistent with" and "implied by" when marking.** Many candidates select an answer that could be true rather than the one that must be true; check the candidate's reasoning against "does the given information guarantee this?" before crediting an answer.
- **Letting one multi-constraint puzzle consume disproportionate session time.** Getting stuck on a single item and sacrificing several easier ones is the most common score-killer; keep the overall time limit consistent rather than allowing extra time selectively.
- **Missing errors hidden in structure rather than content.** As with the capability naming item above, some items hide errors in hierarchy or labelling rather than in the substance; read the candidate's working with the same care you would give a governance paper.
- **Under-crediting fresh reasoning from an experienced candidate.** Experienced architects sometimes pattern-match to a familiar real-world situation and answer from memory rather than from the stem; mark against what the stem actually states, not against what is usually true in practice.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numerical reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data drawn from the real demands of this role. It is emphatically not a mathematics exam: the arithmetic rarely goes beyond percentages, ratios, weighted averages, and rates of change. What it tests is whether the candidate can extract the right numbers from realistic business material - budget tables, capacity plans, benefits registers, survey results, performance dashboards - and reason with them quickly and correctly.

Administer this as a strictly timed test, often 20 to 30 minutes for 15 to 25 questions, with an onscreen calculator allowed or provided consistently for every candidate. The priority is interpretation over mental arithmetic: the hard part is choosing what to calculate, reading scale qualifiers such as "in thousands" or "FTE", and avoiding traps like mixing monthly and annual figures. Question inputs mimic the data formats of the target role, so for a business architect they will look like the spreadsheets and dashboards that cross the desk every week.

Numerical fluency matters more to this role than the job title might suggest. A business architect develops standard and scalable models to collect, aggregate, or disaggregate complex information - and most of that information is quantitative: headcount by function, cost by capability, benefit by programme, demand by channel. When supporting executive-level work, the postholder is often the person who must notice that a business case's numbers do not add up, that a capacity plan assumes an impossible productivity gain, or that two directorates are reporting the same saving twice. Executives make real decisions on the figures a business architect presents, so this is a matter of professional credibility worth testing directly.

### What it measures

- **Interpreting cost and budget tables** maps to the **Business architecture** skill: multidimensional views of the organisation routinely combine money, headcount, and volume, and decision makers rely on the postholder to keep the dimensions honest.
- **Percentage change, ratios, and rates** map to **Strategic thinking**: evaluating whether current strategies meet business requirements means testing quantitative claims - uptake targets, efficiency trajectories, benefit forecasts - against evidence.
- **Capacity and demand arithmetic** maps to **Strategic design and business change**: understanding business issues and their short to long term impact frequently reduces to whether capacity will meet demand under stated assumptions.
- **Benefit aggregation and double counting checks** map to **Making and guiding decisions**: recommending decisions as risk and complexity increase requires verifying that the numbers underpinning a recommendation are internally consistent.
- **Survey and stakeholder data interpretation** maps to **Stakeholder relationship management** and **Communicating information**: measuring stakeholder sentiment, engagement coverage, and communication reach all require careful handling of percentages and base sizes.

### Practice questions

**Question 1 (easy) - Percentage of budget**

A directorate's transformation budget is £8.4 million. The business architecture practice is allocated 3.5% of it. How much is the practice's allocation?

- A) £240,000
- B) £294,000
- C) £336,000
- D) £394,000

**Correct answer: B**

**Explanation:** 3.5% of £8,400,000 = 0.035 × 8,400,000 = £294,000. A quick sanity check: 1% is £84,000, so 3.5% is 3.5 × £84,000 = £294,000. Option C is 4% and option A is roughly 2.9% - both catch a candidate who misplaces the decimal or estimates carelessly. Even at this easy level, the habit of checking with a second method (1% scaling) is worth crediting when visible in a candidate's working.

**Question 2 (easy) - Headcount ratio**

A target operating model proposes 480 caseworkers supported by 60 quality assurance staff. What is the ratio of caseworkers to quality assurance staff, in simplest form?

- A) 6:1
- B) 8:1
- C) 10:1
- D) 12:1

**Correct answer: B**

**Explanation:** 480 ÷ 60 = 8, so the ratio is 8:1. Ratios appear constantly in operating model design - spans of control, support-to-frontline ratios, licence-per-user counts - and this item rewards a candidate who picks the right two numbers, since a single division answers the question. The distractors correspond to dividing by the wrong support figure, so this item tests whether the candidate confirms which two populations the question compares.

**Question 3 (moderate) - Percentage change in demand**

Monthly digital applications rose from 42,500 in April to 51,000 in July. What is the percentage increase?

- A) 15%
- B) 17%
- C) 20%
- D) 25%

**Correct answer: C**

**Explanation:** Increase = 51,000 − 42,500 = 8,500. Percentage increase = 8,500 ÷ 42,500 = 0.20 = 20%. The classic error is dividing by the new figure: 8,500 ÷ 51,000 ≈ 16.7%, which rounds to option B - a distractor placed deliberately. Percentage change always uses the original (earlier) value as the denominator. When a business architect evaluates strategy against uptake targets, this distinction changes whether a channel-shift target is reported as met or missed - so this item is worth checking carefully in a candidate's working.

**Question 4 (moderate) - Weighted average maturity score**

A capability assessment covers three business areas. Area 1 has 12 capabilities with an average maturity of 2.5; Area 2 has 8 capabilities averaging 3.0; Area 3 has 20 capabilities averaging 2.0. What is the organisation-wide average maturity per capability?

- A) 2.35
- B) 2.50
- C) 2.20
- D) 2.60

**Correct answer: A**

**Explanation:** Weight each average by its capability count: (12 × 2.5) + (8 × 3.0) + (20 × 2.0) = 30 + 24 + 40 = 94. Total capabilities = 12 + 8 + 20 = 40. Weighted average = 94 ÷ 40 = 2.35. Option B is the trap: the simple average of 2.5, 3.0 and 2.0 ignores that the areas contain different numbers of capabilities. When aggregating assessment scores into an organisational view, unweighted averages silently distort the picture towards small business areas - exactly the kind of aggregation error the role's standard models must prevent, and this item tests whether the candidate avoids it.

**Question 5 (moderate) - Benefits realisation shortfall**

A programme forecast annual benefits of £2.75 million. The benefits realisation report shows £1.98 million achieved. By what percentage did realised benefits fall short of forecast?

- A) 22%
- B) 28%
- C) 32%
- D) 39%

**Correct answer: B**

**Explanation:** Shortfall = £2,750,000 − £1,980,000 = £770,000. As a percentage of forecast: 770,000 ÷ 2,750,000 = 0.28 = 28%. Note the denominator is the forecast, because the question asks how far short of forecast the programme fell. Dividing by realised benefits instead gives 770,000 ÷ 1,980,000 ≈ 39% - option D, another deliberate trap. In benefits work, the base should always be stated explicitly: "28% below forecast" and "forecast was 39% above outturn" describe the same numbers and sound very different in a governance paper, so this item tests precision that matters professionally.

**Question 6 (moderate) - Capacity versus demand**

A future-state operating model assumes each caseworker completes 9 cases per day and works 210 days per year. Forecast demand is 1,050,000 cases per year. How many caseworker FTE does the model require?

- A) 500
- B) 525
- C) 556
- D) 600

**Correct answer: C**

**Explanation:** Annual cases per caseworker = 9 × 210 = 1,890. Required FTE = 1,050,000 ÷ 1,890 ≈ 555.6, which rounds up to 556 - a fraction of a person cannot be employed, and rounding down would leave demand unmet. Option A comes from using 10 cases per day; option B from using a 200-day year then rounding oddly. Two lessons this item tests: building the per-person annual rate first, and always rounding staffing up in capacity planning. Recomputing one headline figure like this is a fast, high-value assurance check when reviewing a programme's operating model.

**Question 7 (moderate) - Reading a budget table with scale qualifiers**

A finance extract (figures in £ thousands) shows the change programme's spend:

| Category | Q1 | Q2 |
|---|---|---|
| Staff | 1,240 | 1,310 |
| Technology | 830 | 745 |
| Consultancy | 460 | 552 |

By how much, in pounds, did total quarterly spend change from Q1 to Q2?

- A) Increased by £77,000
- B) Decreased by £77,000
- C) Increased by £77
- D) Increased by £177,000

**Correct answer: A**

**Explanation:** Q1 total = 1,240 + 830 + 460 = 2,530. Q2 total = 1,310 + 745 + 552 = 2,607. Change = 2,607 − 2,530 = 77 - but the table is in £ thousands, so the change is £77,000, an increase. Option C punishes ignoring the scale qualifier; option B punishes subtracting in the wrong direction. This item includes a deliberate "in thousands/millions" trap, as real finance packs often do - reading the units line is the first thing a strong candidate does with any table, in an assessment or in a board paper.

**Question 8 (challenging) - Double counting in aggregated benefits**

The candidate aggregates benefits claims from three programmes: Programme A claims £1.2m per year from reduced contact volume; Programme B claims £0.9m per year, of which its business case notes "£0.4m arises from the same contact-volume reduction claimed by Programme A"; Programme C claims £0.6m per year, all independent. What is the correct total annual benefit for the portfolio view presented to the executive committee?

- A) £2.7m
- B) £2.3m
- C) £2.1m
- D) £1.9m

**Correct answer: B**

**Explanation:** A naive sum is 1.2 + 0.9 + 0.6 = £2.7m (option A). But £0.4m of Programme B's claim duplicates benefit already counted in Programme A's £1.2m, so it must be removed once: 2.7 − 0.4 = £2.3m. Option C wrongly removes the overlap twice (from both A and B); option D removes B's entire claim. Double counting is one of the most common defects in portfolio-level benefit statements, and detecting it is a signature contribution of the business architect who sees across programmes when each programme sees only itself. A strong candidate's answer notes that the gross figures and the de-duplication adjustment should be shown explicitly, so the executive committee can see the working.

**Question 9 (challenging) - Cost per transaction across channels**

Annual figures: the telephone channel handles 800,000 contacts at a total cost of £6.0m; the digital channel handles 2,400,000 transactions at a total cost of £1.8m. The strategy targets shifting 200,000 contacts from telephone to digital next year. Assuming the channels' cost-per-unit rates stay constant and costs are fully variable, what annual saving would the shift deliver?

- A) £1,500,000
- B) £1,350,000
- C) £750,000
- D) £150,000

**Correct answer: B**

**Explanation:** Telephone cost per contact = £6,000,000 ÷ 800,000 = £7.50. Digital cost per transaction = £1,800,000 ÷ 2,400,000 = £0.75. Each shifted contact saves £7.50 − £0.75 = £6.75. For 200,000 contacts: 200,000 × £6.75 = £1,350,000. Option A ignores the cost of handling the shifted volume digitally; option D subtracts the rates in a muddled way. Note also the assumption the stem grants the candidate - fully variable costs - which real life rarely does: in a genuine business case, a strong candidate would flag that exact assumption for challenge, as telephone channels carry fixed costs that do not fall linearly with volume. This item gives the assumption; the follow-up discussion at debrief is a good place to see whether the candidate would test it.

**Question 10 (challenging) - Stakeholder survey base sizes**

An annual stakeholder survey shows: of 120 senior stakeholders invited, 45% responded; of 400 operational stakeholders invited, 30% responded. Among senior respondents, 50% rated architecture engagement "good or better"; among operational respondents, 45% did. How many respondents in total rated engagement "good or better"?

- A) 54
- B) 81
- C) 174
- D) 247

**Correct answer: B**

**Explanation:** Work through each group separately, in counts rather than percentages. Senior respondents = 120 × 0.45 = 54; of these, 50% rated good or better = 54 × 0.50 = 27. Operational respondents = 400 × 0.30 = 120; of these, 45% rated good or better = 120 × 0.45 = 54. Total = 27 + 54 = 81. Option A counts only the operational group; option C adds the two respondent totals (54 + 120) without applying the rating percentages; option D applies the rating percentages to invited populations rather than respondents. The professional lesson this item tests is real: percentages of percentages are meaningless until converted back to counts, and base sizes change at every step. When reporting survey findings to stakeholders, a strong candidate's answer would show the underlying counts alongside the percentages - a "50% good or better" headline from 54 senior respondents carries very different evidential weight from the same percentage across the whole organisation.

**Question 11 (challenging) - Roadmap cost phasing**

A three-year roadmap phases investment as follows: Year 1 = £2.4m; Year 2 = Year 1 plus 25%; Year 3 = Year 2 minus 40%. What is the total three-year investment?

- A) £7.2m
- B) £7.8m
- C) £6.6m
- D) £7.5m

**Correct answer: A**

**Explanation:** Year 2 = £2.4m × 1.25 = £3.0m. Year 3 = £3.0m × 0.60 = £1.8m. Total = 2.4 + 3.0 + 1.8 = £7.2m. The essential technique is that successive percentage changes multiply - Year 3 is 60% of Year 2, not "Year 1 minus 15%" or any additive shortcut. Option B comes from applying the 40% reduction to Year 1; option D from adding rather than compounding. Roadmap papers a business architect reviews will phase costs exactly like this, and the ability to recompute the profile quickly makes for a sharper reviewer in governance meetings - this item tests that fluency directly.

**Question 12 (challenging) - Productivity assumption stress test**

A business case claims: "Automation will raise caseworker productivity by 15% in Year 1 and a further 10% in Year 2, so by the end of Year 2 the 500-strong caseworker workforce can be reduced by 125 FTE while handling the same demand." Is the claimed reduction arithmetically consistent with the stated productivity gains?

- A) Yes — 15% + 10% = 25%, and 25% of 500 is 125.
- B) No — compound productivity growth is 26.5%, so the required workforce is about 395 FTE, a reduction of about 105, not 125.
- C) No — the correct reduction is 130 FTE.
- D) Cannot be determined from the information given.

**Correct answer: B**

**Explanation:** Productivity gains compound: 1.15 × 1.10 = 1.265, a 26.5% productivity increase. If each caseworker handles 26.5% more, the workforce needed for constant demand is 500 ÷ 1.265 ≈ 395.3, so about 395 FTE - a reduction of roughly 105, not 125. The business case makes two errors: adding percentages that should multiply, and applying the productivity percentage directly to headcount (a 26.5% productivity gain does not permit a 26.5% headcount cut, because the remaining staff each do more - the correct factor is 1 − 1/1.265 ≈ 20.9%). Option A reproduces the flawed reasoning. This is a high-value item for this role: business cases that overstate headcount savings through exactly this arithmetic slip past many governance boards, and a candidate who catches it demonstrates the kind of scrutiny that protects both the organisation's strategy and its people.

**Question 13 (challenging) - Disaggregating a blended figure**

The organisation reports a blended average cost per case of £42 across two case types. Simple cases cost £25 each; complex cases cost £110 each. What proportion of cases are complex?

- A) 10%
- B) 20%
- C) 25%
- D) 32%

**Correct answer: B**

**Explanation:** Let p be the proportion of complex cases. Then 25(1 − p) + 110p = 42. So 25 + 85p = 42, giving 85p = 17 and p = 0.20 = 20%. Check: 80% × £25 + 20% × £110 = £20 + £22 = £42. This is disaggregation in its purest form - recovering the hidden mix behind a blended average - and it matters because strategy decisions often hinge on the mix, not the average. If complex cases are growing as a share, the blended cost will rise even when both unit costs are flat, and a candidate who can decompose the average is demonstrating the exact skill that explains a "cost problem" which is really a demand-mix change.

**Question 14 (moderate) - Licence consolidation saving**

A methods and tools review finds three teams separately licensing modelling software: Team 1 pays £18,000 per year for 30 licences, Team 2 pays £26,400 per year for 40 licences, and Team 3 pays £9,600 per year for 12 licences. A consolidated enterprise agreement would cover all current users at £540 per licence per year. What annual saving would consolidation deliver?

- A) £4,720
- B) £9,720
- C) £14,280
- D) £16,200

**Correct answer: B**

**Explanation:** Current total cost = 18,000 + 26,400 + 9,600 = £54,000. Total licences = 30 + 40 + 12 = 82. Consolidated cost = 82 × £540 = £44,280. Saving = 54,000 − 44,280 = £9,720. Option C is the consolidated cost minus £30,000 (a misread of Team 1's figure); option D applies £540 to only 30 licences of savings. A useful professional observation this item invites: the three teams currently pay very different unit rates (£600, £660, and £800 per licence), and surfacing that spread is often more persuasive to stakeholders than the headline saving - a strong candidate's answer might note this, demonstrating why consistent adoption of methods and tools has financial as well as quality benefits.

**Question 15 (challenging) - Interpreting a performance trend with a baseline change**

A dashboard shows "cases completed within service standard": Year 1 = 78%, Year 2 = 82%, Year 3 = 88%. A footnote states that from Year 3 the service standard was relaxed from 10 working days to 15 working days. Which statement is the most defensible reading of the trend?

- A) Performance improved steadily across all three years.
- B) Performance improved from Year 1 to Year 2 on a consistent basis; the Year 3 figure is not comparable because the measurement standard changed.
- C) Performance declined in Year 3 once the standard change is accounted for.
- D) The dashboard shows no useful information.

**Correct answer: B**

**Explanation:** The Year 1 to Year 2 comparison uses a constant 10-day standard, so the 4-point improvement is genuine on its own terms. The Year 3 figure is measured against a 15-day standard - a lower bar - so its 88% cannot be compared with earlier years: some, all, or more than all of the apparent 6-point gain could be an artefact of the easier target. Option A ignores the footnote; option C overreaches in the opposite direction, since Year 3 performance against the old standard cannot be computed from the data given; option D throws away the valid Year 1-2 comparison. Baseline changes are endemic in public sector performance data, and this item tests whether the candidate reads footnotes before headlines - a habit that serves every governance pack reviewed in this role.

**Question 16 (challenging) - Full-cost comparison of operating model options**

Two future-state options are costed over three years. Option 1: £1.5m transition cost in Year 1, then running costs of £4.2m per year for all three years. Option 2: £3.0m transition cost in Year 1, then running costs of £3.8m per year for all three years. Ignoring discounting, in which year does Option 2's cumulative cost first fall below Option 1's, if ever within the three years?

- A) Year 1
- B) Year 2
- C) Year 3
- D) Never within three years

**Correct answer: D**

**Explanation:** Build cumulative totals year by year. Option 1: Year 1 = 1.5 + 4.2 = £5.7m; Year 2 = 5.7 + 4.2 = £9.9m; Year 3 = 9.9 + 4.2 = £14.1m. Option 2: Year 1 = 3.0 + 3.8 = £6.8m; Year 2 = 6.8 + 3.8 = £10.6m; Year 3 = 10.6 + 3.8 = £14.4m. Option 2 saves £0.4m per year in running costs but starts £1.5m behind on transition, so it closes the gap by only £0.4m annually: the gap is £1.1m after Year 1, £0.7m after Year 2, £0.3m after Year 3 - still positive, so the crossover has not happened within the horizon (it would occur during Year 4). The general technique this item tests - computing the break-even period as extra upfront cost divided by annual saving, 1.5 ÷ 0.4 = 3.75 years - allows rapid answers to such questions. Options appraisal of exactly this shape sits at the heart of the strategic design work this role leads, and the appraisal horizon chosen can silently decide which option "wins" - worth probing at debrief if a candidate does not spot it.

**Question 17 (moderate) - Workshop coverage rate**

A stakeholder engagement plan requires every one of the organisation's 14 business units to attend at least one capability-mapping workshop this quarter. Attendance records show 5 workshops held, attended by 9, 7, 8, 6, and 10 business units respectively, with 11 distinct units having attended at least once. What percentage of business units has the plan reached so far, to the nearest whole percent?

- A) 71%
- B) 79%
- C) 86%
- D) 100%

**Correct answer: B**

**Explanation:** The coverage measure is distinct units reached divided by total units: 11 ÷ 14 = 0.7857 ≈ 79%. The per-workshop attendance figures (9, 7, 8, 6, 10) are deliberate noise - summing them gives 40 attendances, which double counts units that attended several workshops and cannot exceed a meaningful percentage of anything. Option C (12 ÷ 14) and option A (10 ÷ 14) punish miscounting. The distinction between attendances and distinct attendees is the events version of double counting, and it matters when reporting engagement coverage to a head of practice: "40 attendances" sounds impressive, while "3 of 14 business units still unengaged" is the number that actually drives a communications strategy - this item tests whether the candidate reaches for the right measure.

### Administration tips

- **Confirm the denominator convention before marking.** The majority of numerical reasoning errors - in this assessment and in real benefit reports - are denominator errors; when reviewing an incorrect answer, check whether the candidate used the wrong base.
- **Provide the same calculator to every candidate.** It removes arithmetic strain but cannot choose the right numbers for the candidate; extracting the figures and planning the calculation is what is actually being tested.
- **Look for evidence of estimation before precise calculation.** A candidate who visibly estimates ("about £1.3m") before computing precisely is demonstrating strong numeric judgement, mirroring the professional habit of sense-checking figures in governance papers - credit this rather than reading it as uncertainty.
- **Check whether rounding was carried through correctly.** As Question 10 shows, rounding intermediate values compounds into wrong answers; a candidate's working should carry full precision through the chain until the final step.
- **At this level, note whether a candidate flags the stated assumptions.** Senior-calibrated items often hide the real test in a stated assumption (fully variable costs, constant productivity); a strong candidate answers the question as posed but also notes professionally which assumptions they would challenge in real life - this is worth probing in the debrief.

### Common pitfalls

- **Missing chart and table label errors when marking.** Confusing monthly with annual data, or ignoring qualifiers like "in thousands" or "FTE", is the single most common failure mode in numerical assessments; check the candidate's working against the units before marking an answer wrong outright.
- **Penalising a sensible estimation or scaling shortcut.** A candidate who uses a scaling shortcut (1% of £8.4m is £84k) rather than a long exact computation is showing good numeric fluency, not cutting corners.
- **Letting one multi-stage item consume disproportionate session time.** Encourage the candidate to bank easy marks first and return to a hard multi-stage problem if time allows, consistent with how the section is designed to be timed for every candidate.
- **Missing a candidate who adds percentages that should compound.** "Plus 15% then plus 10%" is 26.5%, never 25%; this is a specific, teachable error worth flagging when reviewing incorrect answers.
- **Confusing the base used for change versus shortfall.** Percentage change divides by the original value; shortfall divides by the forecast; check which base the candidate used before marking.
- **Missing double counting on aggregation.** When a candidate combines figures from multiple sources, check whether they asked whether any component was claimed twice, exactly as in portfolio benefit views.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written business information. It mirrors the exact reading demands of this role: passages use relevant terminology from strategy papers, standards, policy documents, governance emails, and review reports, and the candidate must answer based strictly on the text provided, setting aside anything they happen to know from outside it.

Administer this as a short passage (100-300 words) followed by statements the candidate must classify as **True** (the passage guarantees it), **False** (the passage contradicts it), or **Cannot Say** (the passage provides insufficient information either way), plus some multiple-choice comprehension items asking for the best summary, the author's main point, or the precise scope of a rule. Time this section tightly - often under a minute per question - deliberately simulating workplace deadlines, and apply the same time limit to every candidate.

For a business architect, verbal precision is not a nice-to-have; it is the substance of the job. The postholder translates between the language of strategy and the language of delivery, reads vision statements, policies, and standards, and must extract exactly what they commit the organisation to - no more and no less. When communicating complex information about the organisation to stakeholders, a single overstated conclusion ("the strategy requires X" when it merely permits X) can misdirect a programme for months. And when mediating between stakeholders, the ability to pin down precisely what a document does and does not say is often what dissolves the disagreement.

### What it measures

- **Reading precision on rules and standards** maps to the **Business architecture** and **Strategic design and business change** skills: supporting the definition of principles, patterns, standards, policies, roadmaps and vision statements demands exact comprehension of normative language - must, should, may, unless.
- **Distinguishing fact from inference** maps to **Consultancy**: this role's advice carries authority, so the postholder must separate what the evidence states from what they are adding by judgement, and label each honestly.
- **Summarising and identifying the main point** maps to **Communicating information**: representing complex positions to large audiences requires compressing text without distorting it.
- **Detecting tone, hedging, and commitment level** maps to **Stakeholder relationship management** and **Making and guiding decisions**: sensing what a carefully worded email is really saying - and what it deliberately avoids saying - is daily work when managing senior stakeholder expectations.
- **Applying written rules to cases** maps to **Methods and tools**: ensuring methods are adopted consistently means reading a standard and judging accurately whether a given piece of work complies.

### Practice questions

**Passage A (for Questions 1-4) - Extract from a departmental target operating model standard**

"All programmes delivering business change must produce a target operating model (TOM) before their second funding gate. The TOM must describe, as a minimum, the future-state capabilities, organisation design, and key processes affected by the change. Programmes whose change affects fewer than 50 staff may instead produce a light-touch operating model summary, subject to written approval from the head of business architecture. TOMs must be reviewed by the business architecture practice, which will assess alignment with the enterprise capability model. A TOM review does not constitute approval of the programme's business case, which remains the responsibility of the investment committee. Where a programme revises its TOM after review, the revised version must be resubmitted unless the changes are editorial only."

**Question 1 (easy) - True / False / Cannot Say**

Statement: "Every programme delivering business change must produce a full target operating model before its second funding gate."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage's first sentence appears to support the statement, but the third sentence creates an explicit exception: programmes affecting fewer than 50 staff may produce a light-touch summary instead (with approval). "Every programme... must produce a full TOM" is therefore contradicted by the passage - the correct classification is False. This is the most common verbal reasoning trap at professional level: a general rule stated early, qualified later. This item tests whether the candidate reads the whole passage before answering, exactly as they would need to read a whole standard before advising a programme.

**Question 2 (easy) - True / False / Cannot Say**

Statement: "A TOM review by the business architecture practice does not amount to approval of the programme's business case."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage states this almost verbatim: "A TOM review does not constitute approval of the programme's business case, which remains the responsibility of the investment committee." When the text directly asserts the statement, the answer is True. Note the professional significance of that sentence: it protects a practice from scope creep, ensuring an architecture review is not misrepresented to a board as investment endorsement - a distinction a business architect may need to restate often when supporting executive-level governance.

**Question 3 (moderate) - True / False / Cannot Say**

Statement: "The head of business architecture reviews all target operating models."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says TOMs are reviewed by "the business architecture practice", and separately that the head of business architecture gives written approval for light-touch summaries. It never states who within the practice conducts TOM reviews. The head might review all of them, some, or none - the text simply does not say. Choosing True here would import an organisational assumption from outside experience; choosing False would wrongly treat "the passage doesn't say so" as "the passage denies it". Cannot Say is the disciplined answer, and this discipline - refusing to let plausibility masquerade as evidence - is the single most tested skill in verbal reasoning.

**Question 4 (moderate) - Multiple choice, rule application**

A programme affecting 45 staff produced a light-touch operating model summary with emailed approval from the head of business architecture. After the practice's review, the programme corrected two typographical errors and reworded one heading without changing meaning. According to the passage, must the programme resubmit?

- A) Yes — all revised versions must be resubmitted.
- B) No — the changes are editorial only, so resubmission is not required.
- C) Yes — light-touch summaries cannot be revised.
- D) Cannot be determined — the passage does not cover light-touch summaries being revised.

**Correct answer: B**

**Explanation:** The resubmission rule states revised versions must be resubmitted "unless the changes are editorial only". Typographical corrections and a meaning-preserving heading reword are editorial, so the exception applies and resubmission is not required. Option A ignores the exception clause; option C invents a rule the passage never states. Option D is the subtle distractor: the resubmission sentence refers to "a programme" revising "its TOM", and a candidate could argue a light-touch summary is not a TOM - but the passage treats the summary as the instrument produced "instead", within the same regime, and the strongest reading applies the same revision rule; this item expects the best-supported answer, not the most contrarian one. In real standards work, this drafting ambiguity would be worth noting and fixing - precisely the "define guidance" contribution the Consultancy skill describes.

**Passage B (for Questions 5-8) - Email from a programme director to the business architect**

"Thanks for your review of our future-state design. We accept most of the findings. However, I want to be candid: we cannot adopt the enterprise case management capability in this phase without slipping our legislative deadline of 1 April, which is fixed by statute. We therefore propose to proceed with our interim solution and to include convergence to the enterprise capability in our next-phase roadmap, subject to funding. I should add that the minister has taken a personal interest in this programme's timeline. We would welcome the practice's support at the design authority next week, where we intend to present this as an agreed position."

**Question 5 (moderate) - True / False / Cannot Say**

Statement: "The programme director has agreed to adopt the enterprise case management capability in the next phase."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Read the commitment level exactly: the director proposes "to include convergence to the enterprise capability in our next-phase roadmap, subject to funding". That is not an agreement to adopt; it is a proposal to put convergence on a roadmap, conditional on funding. Two hedges - "propose" and "subject to funding" - separate the statement from the passage. Since the statement claims a firmer commitment than the text contains, and the text's actual position is materially different from (and inconsistent with) the claimed agreement, the statement is False as a description of what the email says. Reading commitment levels precisely is core stakeholder management: roadmap entries "subject to funding" evaporate quietly, and an architect who recorded this as "agreed" would have no recourse later - this item tests whether the candidate spots the gap.

**Question 6 (moderate) - True / False / Cannot Say**

Statement: "The programme's legislative deadline cannot be moved by the department."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The email states the deadline "is fixed by statute". A deadline fixed by statute is, by the text's own assertion, not movable by the department - changing it would require legislation, not departmental discretion. The statement is a fair paraphrase of what the passage asserts, so it is True. Contrast this with Question 5: there the statement went beyond the text; here it restates the text in different words. This item tests whether the candidate can feel that difference - paraphrase versus extension - which is the heart of True/False/Cannot Say technique.

**Question 7 (challenging) - True / False / Cannot Say**

Statement: "The minister supports the programme's proposal to proceed with the interim solution."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The email says only that "the minister has taken a personal interest in this programme's timeline". Interest in the timeline tells the reader nothing about the minister's view of the interim-solution proposal - the minister may not even know of it. The sentence is doing rhetorical work: it is placed to make refusal feel risky, inviting the reader to infer ministerial backing that is never claimed. This item tests whether the candidate resists precisely this inference, which is also a real governance skill: when hosting or moderating discussions about high-risk decisions, separating documented positions from implied pressure protects both the decision and the relationships around it.

**Question 8 (challenging) - Multiple choice, main purpose**

Which of the following best describes the primary purpose of the email in Passage B?

- A) To reject the findings of the architecture review in full.
- B) To secure the practice's public support for a deviation from the enterprise capability, framed as a temporary, deadline-driven necessity.
- C) To request additional funding for the next phase.
- D) To escalate a complaint about the review to the minister.

**Correct answer: B**

**Explanation:** Assemble the moves the email makes: accept most findings (goodwill), assert an immovable statutory deadline (necessity), propose an interim solution with conditional future convergence (deviation made palatable), reference ministerial interest (pressure), and request support at the design authority "as an agreed position" (the ask). Together these amount to option B. Option A is contradicted by "we accept most of the findings"; option C misreads "subject to funding", which is a hedge, not a request; option D has no textual basis. Notice especially the phrase "present this as an agreed position" - the email seeks to convert attendance into endorsement. This item tests whether a candidate recognises the architecture of persuasive text, which is as important to this role as writing it.

**Passage C (for Questions 9-12) - Extract from a strategy evaluation report**

"The digital strategy set three measurable ambitions for the period: 80% of transactions through digital channels, a 25% reduction in average cost per transaction, and user satisfaction of at least 85%. At the close of the period, digital channel share reached 83%, average cost per transaction fell by 19%, and user satisfaction averaged 86% across services, although two high-volume services recorded satisfaction below 75%. The evaluation concludes that the strategy substantially achieved its ambitions, while noting that cost reduction was constrained by higher-than-forecast demand for assisted digital support. The evaluation recommends that the next strategy period include an explicit ambition for assisted digital provision, and that satisfaction targets be set at service level rather than as a single average."

**Question 9 (easy) - True / False / Cannot Say**

Statement: "The strategy met or exceeded two of its three measurable ambitions."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Check each ambition against outturn: digital channel share 83% against an 80% ambition - exceeded; cost per transaction fell 19% against a 25% ambition - missed; user satisfaction 86% average against an 85% ambition - met. Two of three were met or exceeded, so the statement is True. The arithmetic is trivial; the skill this item tests is systematic checking. In evaluation work, headline conclusions ("substantially achieved") often summarise a mixed scorecard, and a strong candidate's value lies in being able to reproduce the detail behind the summary on demand.

**Question 10 (moderate) - True / False / Cannot Say**

Statement: "Every individual service achieved user satisfaction of at least 85%."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states that satisfaction "averaged 86% across services, although two high-volume services recorded satisfaction below 75%". The statement is directly contradicted: at least two services fell below 85% (indeed below 75%). This is the average-versus-distribution trap in verbal form - the same trap Question 13 of the numeric section showed in numbers. The evaluation itself draws the professional conclusion: set targets at service level rather than as a single average, because averages let poor experiences for many users hide behind good experiences elsewhere. This item tests whether a candidate champions that kind of measurement honesty, which is part of sharing the value of business architecture with the organisation.

**Question 11 (challenging) - True / False / Cannot Say**

Statement: "Higher-than-forecast demand for assisted digital support was the main reason the cost reduction ambition was missed."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says cost reduction "was constrained by" higher-than-forecast assisted digital demand. "Constrained by" identifies a contributing factor; it does not say it was the main reason, nor the only one. Other factors could have contributed more - the passage is silent. The statement adds a ranking ("the main reason") that the text does not support or deny, so Cannot Say is correct. This item tests attention to intensity upgrades in statements: "a factor" becoming "the main factor", "may" becoming "will", "constrained" becoming "caused". Assessment writers rely on them, and so, less innocently, do some business cases.

**Question 12 (challenging) - Multiple choice, best summary**

Which option best summarises the evaluation's overall message?

- A) The strategy failed because the cost ambition was missed.
- B) The strategy largely succeeded, but the next strategy should plan explicitly for assisted digital demand and measure satisfaction per service.
- C) The strategy succeeded completely and should be repeated unchanged.
- D) Digital channel share is the only metric that matters for the next period.

**Correct answer: B**

**Explanation:** A faithful summary must carry both the headline judgement ("substantially achieved its ambitions") and the forward-looking recommendations (an explicit assisted digital ambition; service-level satisfaction targets). Option B does exactly this. Option A overweights the single missed ambition into overall failure; option C erases both the missed ambition and the recommendations; option D invents an emphasis the passage never makes. Summarisation items reward proportionality - reflecting the source's own weighting rather than the reader's reaction to it. This is the same discipline exercised when compressing a forty-page evaluation into three bullet points for an executive committee: the compression must preserve the balance of the original, or the message has changed while appearing merely to shorten it.

**Question 13 (challenging) - Multiple choice, precise scope of a rule**

A draft architecture principle reads: "Business capabilities should be reused across services; duplication of capabilities must be approved by the design authority and should be recorded in the capability register." According to this sentence, which of the following is a strict requirement rather than a recommendation?

- A) Reusing business capabilities across services.
- B) Obtaining design authority approval for duplication.
- C) Recording duplication in the capability register.
- D) Both B and C equally.

**Correct answer: B**

**Explanation:** Normative drafting distinguishes "must" (mandatory) from "should" (recommended). Reuse is a "should" - a strong steer, not an absolute rule. Approval for duplication is a "must" - the only strict requirement in the sentence. Recording in the register is another "should", making option C and therefore option D wrong. Reading modal verbs with legal precision is essential when supporting the definition of principles, patterns, standards, and policies: a principle whose "must" and "should" are placed carelessly will be enforced unevenly, argued over in every design authority, and quietly ignored where it is weakest. This item tests exactly that precision, since many governance disputes dissolve once everyone reads the actual modal verb in the actual sentence.

**Passage D (for Questions 14-16) - Extract from a machinery-of-government briefing note**

"Following the announcement, responsibility for the licensing function will transfer from the Department to the new Executive Agency on 1 October. Staff currently employed in the licensing directorate will transfer under existing terms. The Department will retain policy ownership for licensing, while the Agency assumes operational delivery. Shared corporate services, including the case management platform, will continue to be provided by the Department for a transition period of no more than 18 months, after which the Agency is expected to have established its own arrangements. No decision has yet been taken on the future of the fraud investigation team, which currently supports both licensing and non-licensing casework."

**Question 14 (moderate) - True / False / Cannot Say**

Statement: "After the transfer, the Department will no longer have any responsibility for licensing."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage explicitly splits responsibility: "The Department will retain policy ownership for licensing, while the Agency assumes operational delivery." Retaining policy ownership is a continuing responsibility for licensing, so the claim that the Department will have no responsibility is contradicted - False. The distractor logic here trades on the opening sentence ("responsibility for the licensing function will transfer"), which sounds absolute until the later sentence partitions it. This policy/delivery split is exactly the boundary a business architect analysing machinery-of-government change would model first, because it determines which capabilities, data flows, and accountabilities must cross organisational lines and which must not - this item tests whether the candidate finds it.

**Question 15 (moderate) - True / False / Cannot Say**

Statement: "The Agency must stop using the Department's case management platform within 18 months of the transfer."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage states shared corporate services, explicitly including the case management platform, "will continue to be provided by the Department for a transition period of no more than 18 months". "No more than 18 months" sets a hard upper bound on the Department's provision, so by the end of that period the Agency can no longer be using the Department-provided platform - the statement follows from the text. The softer phrase "is expected to have established its own arrangements" describes the Agency's readiness, not the deadline, and some candidates seize on "expected" to answer Cannot Say; but the ceiling on provision is stated with "no more than", which is categorical. Distinguishing a categorical bound from a hedged expectation within the same sentence pair is precisely the reading skill that separates strong verbal reasoning performances - and strong transition planning.

**Question 16 (challenging) - True / False / Cannot Say**

Statement: "The fraud investigation team will transfer to the Executive Agency."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states plainly that "no decision has yet been taken on the future of the fraud investigation team". The team's destination is undetermined by the text: it might transfer, stay, or split. Answering False would claim the passage rules out a transfer, which it does not; answering True would treat one possible outcome as settled. Cannot Say is the only verdict the text supports. Note the professional resonance: a team that "supports both licensing and non-licensing casework" is a shared capability straddling the new organisational boundary - precisely the kind of unresolved dependency a strong candidate would flag in a target operating model as a decision the executive must make before cutover, with options and impacts set out for each.

### Administration tips

- **Answer strictly from the passage when marking, never from outside knowledge of how TOM standards usually work.** The candidate's expertise is an asset in the role but should be set aside for this section; mark against the text alone.
- **Time this section tightly and consistently.** Verbal reasoning items are typically answered in under a minute each; apply the same overall time limit to every candidate.
- **Watch for the qualifying clause.** Professional-level passages state a rule and qualify it later ("unless", "except", "subject to"); when reviewing an incorrect answer, check whether the candidate missed a qualifier later in the passage.
- **Calibrate the three verdicts consistently when marking.** True = the passage guarantees it. False = the passage contradicts it. Cannot Say = neither. A candidate who reasons "well, it's probably true in practice" should be marked as having drifted into Cannot Say territory, not True.
- **Note whether a candidate overthinks a well-supported answer.** At senior level, some candidates argue themselves away from the best-supported answer by constructing exotic readings; the assessment expects the answer the passage best supports, and this pattern is worth exploring in the debrief rather than simply marking down.

### Common pitfalls

- **Crediting an answer built on assumptions rather than the text.** Importing personal or organisational knowledge instead of relying only on the text is the most common candidate error; the Cannot Say option exists precisely to catch this, so mark accordingly.
- **Missing an intensity-upgrade misreading.** A candidate who treats "constrained by" as "caused by", a proposal as an agreement, or a likely outcome as a stated fact has made a specific, identifiable error worth flagging.
- **Marking from the first relevant sentence rather than the whole passage.** Early general rules are often qualified by later exceptions; the correct answer usually lives in the interaction between two sentences, so check the whole passage before confirming a mark.
- **Allowing insufficient time for scanning versus reading.** A candidate who spends too long absorbing the whole text before looking at the statements may run out of time; this is a pacing issue worth distinguishing from a comprehension one when reviewing results.
- **Under-crediting a candidate who avoids contrarian overthinking.** At senior level, choosing the best-supported answer over an exotic alternative reading is itself a sign of strength, not a lack of rigour - the assessment rewards the reading the passage best supports.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision making, interpersonal skill, and professional conduct through realistic workplace dilemmas. Unlike the reasoning tests, it has no purely objective right answers: several responses to each scenario may seem reasonable, and the assessment measures how well the candidate's behavioural choices align with the values of the organisation and the demands of the role. For UK public sector roles, that means alignment with values such as meeting user needs, transparency, collaboration, accessibility, and inclusion, alongside the professional standards of the Government Digital and Data framework.

Present short scenarios (100-200 words) describing a workplace conflict, ethical tension, or operational challenge, followed by three to five possible responses. Ask the candidate either to select the **most effective** and **least effective** actions, or to rank or rate all the options. Administer this section untimed or generously timed, because it targets natural judgement rather than speed.

For a business architect, situational judgement is arguably the most role-relevant assessment of the four. This role's framework skills are dominated by human dynamics: mediating between people and mending relationships, managing stakeholder expectations in high-risk discussions under constrained timescales, building consensus between services or independent stakeholders, guiding other architects, and advising executives. The technically correct architecture answer delivered without judgement about people, timing, and trust routinely fails; this assessment simulates exactly those moments where what the candidate does next matters more than what they know.

### What it measures

- **Mediation and relationship repair** maps directly to **Communicating information**: "mediate between people and mend relationships, communicating with stakeholders at all levels" is a literal line in this role's skill description, and several scenarios below test it.
- **Managing expectations under pressure** maps to **Stakeholder relationship management** and **Communicating information**: hosting and moderating discussions about high risk and complexity, even within constrained timescales.
- **Consensus building and escalation judgement** maps to **Making and guiding decisions**: making medium-risk decisions independently, recommending rather than deciding as risk and complexity increase, and knowing which is which.
- **Guiding and developing others** maps to the role-level duty to support and guide other business architects and to build capability in **Methods and tools**.
- **Advising with integrity** maps to **Consultancy** and **Strategic design and business change**: giving advice grounded in evidence, focusing on outcomes rather than solutions, and protecting the organisation's strategy even when that is uncomfortable.

### Practice questions

**Question 1 (moderate) - The programme that bypassed review**

The candidate discovers that a major programme has taken its future-state operating model to its funding gate without the required business architecture review, and the gate approved it. The design contains a capability duplication their practice would have challenged. The programme director is influential and known to regard architecture governance as bureaucracy.

- Option A: Email the investment committee stating the gate decision is invalid because the mandatory review was skipped, and request the approval be rescinded.
- Option B: Arrange a conversation with the programme director: acknowledge the gate has passed, explain the specific duplication risk and its cost, and propose a rapid review focused only on that risk, while separately asking the gate secretariat to tighten the checklist for future gates.
- Option C: Let it go — the gate has passed, and challenging it now would damage the relationship.
- Option D: Raise the missed review at the next design authority in the director's presence, to make an example of the programme.

**Most effective: B. Least effective: D.**

**Explanation:** Option B addresses both the substance (the duplication risk, scoped tightly so it is proportionate) and the system (the gate checklist), while treating the director as a partner rather than an offender - consistent with mending relationships and managing expectations. Option A is procedurally arguable but maximally adversarial: it spends the practice's credibility on invalidating a decision rather than fixing a risk, and will entrench the "bureaucracy" narrative. Option C abandons the duty to ensure design work aligns with strategy; the duplication cost will surface later and reflect on the practice. Option D is the least effective: public shaming builds neither consensus nor compliance, and weaponising a governance forum corrodes the collaboration and transparency the forum exists to serve. Note the general pattern in strong answers: fix the risk, fix the process, preserve the relationship - in that order of visibility.

**Question 2 (moderate) - Two directors, one capability**

Two directors each claim ownership of the customer correspondence capability in the future-state model. Director One runs the operational teams that use it daily; Director Two owns the digital channel strategy it must align with. Both have asked the candidate to record their directorate as the owner in the capability model, and each has hinted they will escalate if the model shows otherwise. Their head of practice is on leave.

- Option A: Record joint ownership and move on — the model field accepts multiple values.
- Option B: Facilitate a short session with both directors to agree what "ownership" means for this capability (accountability for performance, for change, for standards), propose a split of those specific accountabilities, and record whatever they jointly agree with a note of the rationale.
- Option C: Wait for their head of practice to return and decide.
- Option D: Record Director One as owner, since operational usage is the stronger claim, and inform Director Two by email.

**Most effective: B. Least effective: D.**

**Explanation:** The dispute is really a definitional ambiguity - "ownership" bundles several accountabilities that can legitimately sit in different places. Option B dissolves the conflict by disaggregating the concept (a very business-architect move: aggregate and disaggregate complex information), builds consensus between independent stakeholders, and leaves an auditable rationale. Option A avoids the conversation: joint ownership without defined accountabilities is where capabilities go to be neglected, and both directors will discover the fudge eventually. Option C is unnecessarily passive for a medium-risk decision squarely within this role level - deferring everything upward undermines the candidate's standing as someone who supports management of the practice. Option D decides unilaterally on a contestable criterion and communicates the loss by email - the least effective way to deliver an unwelcome outcome to a senior stakeholder, and a reliable way to convert a definitional problem into a political one.

**Question 3 (challenging) - The executive who wants the answer changed**

The candidate has completed a capability assessment showing that the organisation's readiness for a flagship transformation is low in three critical areas. The executive sponsor, presenting to the board next week, asks them to "soften" the three low scores because "the board only needs the headline, and this level of detail will derail the funding decision".

- Option A: Refuse outright and tell the sponsor the findings will be presented to the board directly if necessary.
- Option B: Keep the scores as evidenced, but work with the sponsor on the presentation: pair each low score with the mitigation plan and the funding it requires, so the message becomes "credible plan facing known risks" rather than "not ready".
- Option C: Soften the scores as asked — the sponsor owns the board relationship and understands the audience better than the candidate does.
- Option D: Keep the scores but add a caveat slide noting that assessments are subjective and other interpretations exist.

**Most effective: B. Least effective: C.**

**Explanation:** Option B holds the evidential line - the scores are the candidate's professional assessment and altering them on request would corrupt the very decision-support this role exists to provide - while genuinely helping the sponsor with their legitimate concern about framing. Transparency does not require presenting risk without context; pairing risks with mitigations is better communication, not spin. Option C is the least effective: it sacrifices integrity, misleads the board into an under-informed funding decision, and creates a precedent that the candidate's assessments are negotiable - after which they are worthless as evidence. Option A protects integrity but through confrontation and threat, damaging a relationship the candidate needs and skipping the collaborative options entirely. Option D looks like integrity but functions as C in slow motion: an unprompted "subjectivity" caveat invites the board to discount the findings, achieving the softening by other means. The strong pattern this item rewards: never trade the evidence; always help with the framing.

**Question 4 (moderate) - The struggling junior architect**

A junior business architect the candidate guides has produced a capability assessment for a delivery team. The team's product manager emails the candidate directly: the assessment misses two capabilities, uses an outdated template, and the workshop the junior ran "was chaotic and wasted an hour of my team's time". The junior does not know about the email and is presenting the assessment to the delivery team's leadership tomorrow.

- Option A: Reply to the product manager copying the junior, so everything is transparent from the start.
- Option B: Take over: redo the assessment yourself tonight and present it tomorrow in the junior's place, then discuss afterwards.
- Option C: Speak with the junior today: share the feedback constructively, help them correct the assessment and workshop approach for tomorrow, and reply to the product manager confirming the issues are being addressed and thanking them for the direct feedback. Postpone only if the corrections cannot be made in time.
- Option D: Tell the product manager that criticism of the practice's staff should come through the candidate in future, and defend the junior's work.

**Most effective: C. Least effective: B.**

**Explanation:** Option C develops the junior (this role level explicitly includes guiding other business architects), repairs the stakeholder relationship quickly, and protects tomorrow's outcome - with a sensible fallback if quality cannot be reached in time. Option B is the least effective despite feeling helpful: it humiliates the junior by silent replacement, teaches them nothing, signals to the product manager that the practice's quality depends on one person, and is unsustainable as a leadership pattern. Option A prizes transparency but ambushes the junior with raw criticism in front of a stakeholder - feedback should reach them from their guide, framed for learning. Option D treats legitimate quality feedback as a protocol violation; defending flawed work costs the practice more credibility than the flaws themselves. Guiding others means letting them carry the work while the guide carries the safety net - the pattern this item is testing.

**Question 5 (challenging) - Constrained timescale, high-risk discussion**

A ministerial commitment requires a decision within five working days on which of two business units will operate a new service. The units' leaders disagree strongly, each has produced their own analysis, and the programme has asked the candidate to moderate a decision workshop in two days. The candidate privately believes one option is clearly better, but their analysis is one input among several.

- Option A: Circulate the candidate's own analysis beforehand marked "recommended option", so the workshop starts from the right answer.
- Option B: Design the workshop around agreed decision criteria: circulate both units' analyses plus the candidate's own in advance, open by agreeing the criteria (user needs, cost, risk, time to implement), assess each option against the criteria together, and record the decision and dissent transparently for the accountable executive.
- Option C: Advise the programme that two days is insufficient for a proper decision and recommend the deadline be moved.
- Option D: Meet each unit leader separately beforehand, broker a compromise between them, and use the workshop to announce it.

**Most effective: B. Least effective: A.**

**Explanation:** Option B is textbook moderation of a high-risk, high-complexity discussion within a constrained timescale - a literal phrase from the Communicating information skill. Agreeing criteria before assessing options is the classic mechanism for converting positional conflict into joint problem-solving, and transparent recording of dissent respects both losers and the accountable executive. It also correctly positions the candidate as recommending rather than deciding, matching the decision-making skill's escalation gradient. Option A is least effective: pre-anointing one's own answer destroys neutrality as moderator, invites both units to attack the process rather than engage with criteria, and converts a decision workshop into a ratification exercise that will not hold. Option C may occasionally be right, but a statutory-style ministerial deadline was given as fixed; recommending delay without attempting a structured decision reads as avoidance. Option D can work for minor disputes, but here it manufactures consent behind closed doors for a decision that needs open legitimacy - and if either leader balks at the "announcement", the candidate has spent their credibility on a deal that failed.

**Question 6 (moderate) - The strategy that no longer fits**

Six months into delivery, evidence accumulates that a key assumption in the organisation's target operating model - that 70% of demand would shift to the digital channel - is wrong: the shift has plateaued at 45%, and assisted digital demand is far higher than planned. The strategy was signed off by the executive committee, and several programmes are building to it.

- Option A: Continue as planned — the strategy is approved, and changing course now would undermine confidence in architecture.
- Option B: Quietly advise individual programmes to build extra contact-centre capacity as contingency, without reopening the strategy.
- Option C: Bring the evidence to their head of practice and the strategy owner: propose a formal review of the affected assumption, model the impact of the observed demand pattern on the operating model, and prepare options (adjust capacity plans, invest in assisted digital, revise the channel-shift approach) for the executive committee.
- Option D: Present the evidence at the executive committee yourself at the next opportunity, recommending the strategy be withdrawn.

**Most effective: C. Least effective: B.**

**Explanation:** The Strategic design and business change skill says it directly: help to develop, maintain or update strategy in response to feedback and findings. Option C does exactly that, through the right owners, with modelled impact and options rather than alarm - evidence-led, proportionate, and respectful of governance. Option B is the least effective, and worth dwelling on: it feels pragmatic, but it fragments the organisation's response, creates unfunded shadow plans, hides material evidence from the decision makers accountable for the strategy, and fails the transparency value at its core; when the divergence surfaces - and plateaued channel-shift always surfaces - the question will be who knew and said nothing. Option A confuses loyalty to a document with loyalty to the strategy's outcomes; strategies exist to be maintained against evidence. Option D has the right instinct but the wrong altitude and remedy: bypassing the strategy owner and the head of practice, and recommending withdrawal rather than adjustment, maximises drama and minimises the chance of a good decision.

**Question 7 (moderate) - The consensus that excludes**

The candidate is finalising cross-organisation agreement on a new capability model. Eleven of twelve business units have agreed. The twelfth — a small unit delivering services to users with complex accessibility needs — objects that the model's "customer contact" capability assumes digital-first contact and makes their assisted, face-to-face provision invisible. A senior colleague suggests proceeding: "eleven out of twelve is consensus; we can note their objection".

- Option A: Proceed with eleven agreements and record the twelfth unit's objection in the decision log.
- Option B: Delay the whole model until unanimous agreement is reached, however long that takes.
- Option C: Work with the twelfth unit to understand the gap, adjust the contact capability to represent assisted and face-to-face channels explicitly (a change the other units are unlikely to contest), and then confirm the model with all twelve.
- Option D: Escalate the disagreement to the design authority to rule on whether the objection is valid.

**Most effective: C. Least effective: A.**

**Explanation:** The objection is not obstruction - it identifies a genuine representational defect that would make an inclusion-critical service invisible in the organisation's core decision-making artefact. Option C treats it that way: the fix is small, benefits the model's accuracy for everyone, and converts the dissenter into a co-author. That is consensus building as the skill framework means it - not vote counting. Option A is least effective in this context because the noted objection concerns accessibility and inclusion: proceeding embeds a model that systematically under-represents users with the greatest needs, contradicting core public sector values, and teaches small units that consensus processes are majoritarian theatre. Option B overcorrects - unanimity as a universal bar would let any unit veto indefinitely; the reason to engage here is the merit of the objection, not the mere fact of it. Option D outsources to governance a conversation the candidate is equipped to resolve faster and more collaboratively; escalation is for genuine impasses, not first resort.

**Question 8 (challenging) - The vendor-shaped roadmap**

Reviewing a programme's draft roadmap, the candidate notices its phasing exactly mirrors the module release schedule of the incumbent software vendor, and several "business capabilities" in the future-state model are named after vendor products. The programme's architect — a contractor whose engagement is funded through the same vendor's partner network — argues this is pragmatic alignment with delivery reality.

- Option A: Accept the roadmap — aligning to vendor releases is genuinely pragmatic, and renaming capabilities is cosmetic.
- Option B: Require the model to be reworked capability-first: express future states as business outcomes independent of vendor products, then map vendor modules to capabilities as one delivery option, and flag the contractor's potential conflict of interest to the programme director through the proper channel.
- Option C: Publicly question the contractor's independence at the next design review.
- Option D: Rework the model yourself and issue it as the practice's corrected version.

**Most effective: B. Least effective: C.**

**Explanation:** Vendor-shaped architecture is a strategic risk, not a style issue: capabilities named after products make the vendor's roadmap the organisation's strategy by default, foreclose alternative delivery options, and weaken future commercial negotiations. Option B fixes the artefact on principle (outcomes before solutions - the Strategic design and business change skill verbatim), preserves the legitimate insight that delivery must sequence somehow, and handles the conflict-of-interest concern factually and through proper channels rather than as accusation. Option C is least effective: raising a personal-integrity question publicly, before establishing facts, is unjust to the contractor if innocent and procedurally ruinous if guilty - it converts a governance issue into a grievance. Option A mistakes structural capture for pragmatism; naming is how models think. Option D fixes the document but not the programme: imposed artefacts get shelved, the contractor learns nothing, and the conflict-of-interest question is left unexamined.

**Question 9 (moderate) - The tool nobody uses**

A practice standardised on a modelling tool and repository a year ago, but the candidate discovers that three of the five architects they guide still maintain their models in slide decks, exporting to the repository "when governance asks". The repository is therefore incomplete, and a director was recently given an out-of-date capability view drawn from it.

- Option A: Mandate immediate compliance: all models in the repository by Friday, and non-compliance reported to line managers.
- Option B: Ask the architects why they avoid the tool, fix the obstacles that can be fixed (training, templates, workflow fit), agree a realistic migration plan with dates, and make the repository the single source for all governance reporting so the incentive to bypass it disappears.
- Option C: Accept the mixed economy — output quality matters more than tooling consistency.
- Option D: Escalate to their head of practice that the tool adoption has failed and recommend procurement of a different tool.

**Most effective: B. Least effective: C.**

**Explanation:** The Methods and tools skill is explicit: build capability in methods and tools, ensuring they are adopted consistently and used effectively. Option B does all three - it diagnoses before prescribing (avoidance at this scale usually signals real friction, not laziness), invests in capability, and re-engineers the incentive structure so the compliant path is the easy path. Option C is the least effective here because the scenario has already shown the cost of the mixed economy: a director acted on stale information; fragmented sources are not a tooling preference issue but a data-integrity failure that will recur and compound. Option A may achieve Friday compliance and lasting resentment: mandates without diagnosis push the behaviour underground (exports will be as stale as before, just more frequent). Option D skips both diagnosis and remedy - replacing a tool because it was never properly adopted commonly reproduces the same failure at new licence cost.

**Question 10 (challenging) - The reorganisation rumour**

While facilitating a workshop, a trusted operational manager tells the candidate, in confidence, that their director is quietly planning to restructure two teams in a way that contradicts the target operating model the executive committee approved three months ago. Nothing is public; the manager fears being identified as the source. The candidate's capability model and several programme designs depend on the approved structure.

- Option A: Say nothing and wait — it is a rumour, and acting on it would betray a confidence.
- Option B: Confront the director directly, saying the candidate has heard they are planning to breach the approved operating model.
- Option C: Without referencing the rumour or its source, use a scheduled review touchpoint with the director to walk through the approved operating model and its dependencies, ask openly whether any structural changes are being considered — creating a legitimate opening for disclosure — and remind them of the change process that exists for updating the model.
- Option D: Report the rumour to the executive committee secretariat so it is on the record.

**Most effective: C. Least effective: B.**

**Explanation:** Option C threads the needle: it protects the source completely, gives the director a dignified, legitimate route to surface a genuine intention, reinforces that the model has a change process (structure changes are not forbidden - unmanaged ones are), and positions the candidate as steward rather than enforcer. If the director discloses, the change is channelled properly; if they deny it, the dependencies and the process are documented anyway. Option B is least effective: it burns the source (the director will hunt for who talked), converts a manageable governance conversation into an accusation, and rests credibility on an unverified rumour. Option A mistakes confidentiality for inaction - the source is owed anonymity, not paralysis; the dependencies at risk are a professional responsibility. Option D escalates hearsay into formal record without verification, harming both the director (if false) and the source (if traced), and skipping the direct professional relationship that could resolve it quietly.

**Question 11 (moderate) - Ranking: the impossible week**

The candidate's head of practice is seconded elsewhere for a month, leaving them to support executive-level work in their place. In the same week: (1) the executive committee requests a one-page view of transformation dependencies for Thursday; (2) a programme demands sign-off of their operating model by Wednesday "or we miss our gate"; (3) a fellow architect asks the candidate to co-review their first executive paper, presentable any time this month; (4) an external government community has asked the candidate to speak on business architecture next month and needs a title by Friday. Rank the four demands in the order they should be addressed.

- A) 2, 1, 3, 4
- B) 1, 2, 4, 3
- C) 2, 1, 4, 3
- D) 1, 3, 2, 4

**Most effective ranking: C.**

**Explanation:** Demand 2 comes first: it has the earliest hard deadline (Wednesday) and a gate miss carries real delivery cost - though note a strong candidate would also test whether "sign-off" can be scoped, since rubber-stamping under pressure is its own risk. Demand 1 is second: Thursday deadline, highest-ranking audience, and exactly the executive support this role level describes. Demand 4's Friday deadline is trivial in effort (a title) but real - a two-minute task with a fixed date beats an undated task, so it slots third; sequencing by deadline does not mean sequencing by effort. Demand 3 is genuinely important (guiding others) but explicitly flexible ("any time this month"), so it comes last this week and gets protected time later - deprioritising is not dropping. Option A forgets that demand 4 has this week's deadline while demand 3 does not; option B and D under-rank the gate-blocking sign-off. This item tests whether a candidate can hold urgency, impact, effort, and audience in one judgement - the everyday arithmetic of a practice leader's week.

**Question 12 (challenging) - The accessibility corner-cut**

A programme under severe deadline pressure proposes descoping the assisted digital support journey from its first release: "it affects under 4% of users, and we will add it in release two, three months later". The service's users include a higher-than-average proportion of older people and people with disabilities. The programme asks the candidate, as the reviewing architect, to endorse the descope as "aligned with the phased roadmap".

- Option A: Endorse it — 4% is small, release two is close, and phasing is a legitimate delivery technique.
- Option B: Decline endorsement, and set out why: the affected group depends on this route (for them the service is not degraded but absent), the change conflicts with the organisation's accessibility obligations and service standard, and "phasing" that defers a legal-and-values obligation is a descope requiring executive risk acceptance, not an architect's sign-off. Offer to help find alternatives: a supported interim route, partial automation, or resequencing other scope.
- Option C: Endorse it, but attach a written note raising concerns about accessibility.
- Option D: Refuse and report the programme to the accessibility compliance team.

**Most effective: B. Least effective: A.**

**Explanation:** The percentage framing is the trap: 4% of users is not 4% of the service for the people concerned - it is 100% of their access, and they are disproportionately the users public services exist to reach. Option B refuses cleanly but constructively: it names the real decision (executive risk acceptance of a legal and values-based obligation, which is above an architect's sign-off - matching the escalation gradient of recommending as risk increases), and it helps the programme solve its underlying schedule problem, which is legitimate. Option A is least effective because it launders a values-and-compliance breach through architectural vocabulary - "phased roadmap" - lending professional authority to exactly the corner-cut governance relies on the postholder to catch. Option C is A with a paper trail: endorsement is the operative act, and a filed concern protects the candidate, not the users. Option D leaps to enforcement before dialogue, forfeiting the chance to fix the problem collaboratively and casting the practice as police - sometimes necessary eventually, never optimal first.

### Administration tips

- **Do not impose a tight time limit, but keep whatever time allowance you offer consistent across candidates.** Situational judgement items measure natural judgement, not speed.
- **Ask the candidate to articulate their reasoning, not just state their answer.** For each item, the reasoning behind a choice is as informative as the choice itself, and articulation also mirrors a genuine job demand at this level - explaining decisions to executives and panels.
- **Present every option before asking for a judgement.** Most/least and ranking items are comparative; reading only part of the option set before answering distorts the result.
- **Look for a pattern across several scenarios rather than judging on one answer.** A single strong or weak answer is less informative than a consistent pattern of the same kind across multiple items.
- **Watch the level being tested.** Senior candidates fail these items in two symmetrical ways: doing the junior's job (taking over work, fixing artefacts personally) or over-escalating (sending upward what should be resolved directly). Check each answer against the actual role level being assessed.

### Common pitfalls

- **Rewarding idealistic-sounding answers over effective ones.** The perfect-world answer ("simply get everyone to agree") differs from the effective answer in a real organisation with deadlines, politics, and history; mark for what would actually work.
- **Under-weighting passive options as merely "safe".** Waiting, hoping, noting concerns for the record, and deferring to absent seniors all score poorly - they delay action, pass the problem on, or ignore the root cause. Even when escalation is right, active escalation with options beats passive referral.
- **Discounting the organisation's values.** In UK public sector contexts, options that compromise accessibility, inclusion, or transparency are almost never "most effective", whatever their short-term pragmatism, and should be marked down accordingly.
- **Rewarding confrontation as if it were strength.** Public challenges, ultimatums, and unilateral corrections read as decisive but score as relationship damage. The framework's own language - mediate, mend, build consensus - tells you what the scoring key values.
- **Rewarding self-protective answers over outcome-focused ones.** Options built around documentation of concerns, covering emails, and formal records of dissent optimise for blamelessness rather than effectiveness; mark for outcome, not self-protection.
- **Guessing at the "least effective" half of a question.** Weak options cluster around passivity, public humiliation, evidence-tampering, and unilateralism; learn these clusters so marking the second half of each item is as reliable as the first.

## Conclusion

You have now worked through a substantial set of practice materials covering all four assessment types most relevant to business architect: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement, each built to exercise the skills this role demands: business architecture, communicating information, consultancy, making and guiding decisions, methods and tools, stakeholder relationship management, strategic design and business change, and strategic thinking.

To score the assessment, work back through each section against the answer key, and note not just whether the candidate reached the correct answer but whether their explanation or reasoning shows what the item was built to test - many of the explanations above flag exactly what a strong versus a weak answer demonstrates. Recording strengths and gaps by skill area is often more useful to a hiring or development decision than a single overall score.

When debriefing the candidate, give an honest and constructive account of how they did and what it suggests about their readiness for the role, without necessarily working through every question and correct answer, since this material may be reused with future candidates. Where useful, connect the debrief to recurring patterns - denominators, qualifiers, modal verbs, the fix-the-problem-and-the-system heuristic - so a candidate who is not yet ready leaves with a concrete sense of what would help their development.

Keep a record of how and when you administered the assessment, and administer it consistently across every candidate for this role level: the same items, the same time limits, the same conditions, and the same standard when scoring. This is what makes a comparison between candidates fair, and what protects your organisation if a decision is ever challenged. Remember throughout that this is one input among several in a hiring or promotion decision, never the sole basis for one - see the advisory above.

For further support, talk to your organisation's human resources or people development colleagues about how this fits into your wider selection process, and consider asking an experienced business architect to sense-check whether the scenarios and standards used here reflect how the role is actually practised locally.
