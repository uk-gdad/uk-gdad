# Data Ethicist (Data Ethics Lead) - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for data ethics lead, within the UK Government Digital and Data profession. The material is job-specific: it presents what a data ethics lead genuinely handles — ethics review registers, algorithmic impact assessments, training programmes, and policy documents — and the judgements the role turns on, rather than abstract puzzles.

A data ethics lead sits at the intersection of rigorous analysis and human judgement: assessing the societal effects of technology and data, producing recommendations for other data professionals, and enabling colleagues across the organisation to understand data ethics and implement best practice. Every one of those responsibilities draws on the exact capabilities psychometric assessments are designed to measure — analysing complex information quickly, reasoning accurately with numbers and text, and exercising sound judgement in ambiguous, high-stakes situations.

This document is organised around four workplace job-specific assessments:

1. **Cognitive ability** — pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts this role genuinely handles.
2. **Numeric reasoning** — interpreting tables, percentages, ratios, budgets, and performance metrics of the kind that appear in bias audits, survey analyses, and ethics programme reporting.
3. **Verbal reasoning** — reading dense, role-relevant passages (policies, standards, guidance, stakeholder emails) and drawing strictly accurate conclusions from them.
4. **Situational judgement** — realistic workplace dilemmas involving the stakeholders a data ethics lead actually works with: data scientists, policy leads, senior officials, external researchers, and members of the public.

Each section explains what the assessment measures and why it matters at this level, maps the assessment dimensions to the specific skills in the role profile, and then offers a substantial set of items with full worked explanations for use as an answer key, followed by administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief — a candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment is a targeted psychometric test that measures the exact mental processes this role demands. Unlike a generic intelligence test, it uses practical workplace scenarios and artefacts — ethics review registers, algorithmic impact assessments, research findings, training rosters, and policy frameworks — to predict how effectively a candidate will perform on the job.

The format is typically online and timed, usually 15 to 30 minutes, with objective scoring against a norm group of professionals at a comparable level. Many platforms are adaptive, adjusting question difficulty based on previous answers, and most provide short ungraded practice questions first.

Cognitive assessment matters at this level because the role is fundamentally about structured thinking under complexity: reading and interpreting complex documents from a range of sources and distilling what is relevant, spotting flawed assumptions in data science projects, sequencing and prioritising competing ethical reviews, and diagnosing where a process or argument has gone wrong. A well-designed cognitive assessment samples precisely these operations.

### How this assessment maps to the role

The assessment dimensions map directly onto the skills in the role profile:

- **Analysis and synthesis (data ethics)**: the core of the test. Questions require drawing together and evaluating qualitative and quantitative information, quickly reading complex material, and turning data into clear findings.
- **Applied social sciences**: logical deduction questions test whether a candidate can evaluate and challenge assumptions — the same discipline exercised when critiquing the assumptions embedded in a data science project.
- **Data ethics and privacy**: error-checking and consistency questions mirror the work of assessing and constructively challenging proposed data ethics policies, and spotting where a framework contradicts itself or the law.
- **Managing decisions and risks**: prioritisation questions test proportionate reasoning — applying different risk methodologies in proportion to the risk.
- **Problem management**: diagnostic questions test whether a candidate can identify root causes, so the right actions are taken to investigate, resolve, and anticipate problems.
- **Product ownership (data ethics)**: several questions use the artefacts of ethics tooling — checklists, assessment templates, feedback data — testing the ability to translate theoretical principles into practical, coherent instruments.

### Practice questions

Present these to the candidate; roughly a minute per question is a reasonable guide.

**Question 1 (easy) — Pattern recognition in an ethics review register**

A team triages incoming ethics review requests. The register shows the reference codes assigned to the last five completed reviews, in order: ER-A1, ER-B2, ER-C4, ER-D8, ER-E16.

Which reference code comes next?

A) ER-F18
B) ER-F32
C) ER-G32
D) ER-F24

**Correct answer: B**

**Explanation:** Two independent patterns run in parallel. The letters advance one position each time, so F is next. The numbers double each time, so 32 is next. Only option B satisfies both patterns. This tests checking every element of a sequence, not just the most obvious one — the same habit that spots when a dataset's apparent trend hides an inconsistent subgroup.

**Question 2 (easy) — Logical deduction from ethics policy rules**

A data ethics policy contains these rules:

1. Every project that processes personal data must complete an ethics self-assessment.
2. Every project that completes an ethics self-assessment and is rated "high risk" must be reviewed by the data ethics team.
3. Project Kestrel processes personal data and is rated "high risk".

Which conclusion follows with certainty?

A) Project Kestrel has already been reviewed by the data ethics team.
B) Project Kestrel must complete an ethics self-assessment and, once completed, must be reviewed by the data ethics team.
C) Project Kestrel does not need an ethics self-assessment because it will be reviewed directly.
D) The data ethics team must review every project that processes personal data.

**Correct answer: B**

**Explanation:** Rule 1 obliges Kestrel to complete a self-assessment. Rule 2 then obliges review, because Kestrel will have completed a self-assessment and is rated high risk. Option A confuses obligation with completion. Option C invents an exemption. Option D over-generalises. This tests precision about what a rule does and does not entail — exactly the skill exercised when assessing and constructively challenging proposed policies.

**Question 3 (moderate) — Error checking an algorithmic impact assessment summary**

A drafted summary table of four algorithmic impact assessments (AIAs) awaits sign-off. The organisation's rule is: residual risk rating = inherent risk rating reduced by one level for each two mitigations implemented (levels: Critical > High > Medium > Low; a rating cannot fall below Low).

| Project | Inherent risk | Mitigations implemented | Residual risk (drafted) |
|---|---|---|---|
| Osprey | Critical | 4 | Medium |
| Merlin | High | 2 | Medium |
| Swift | Medium | 5 | Low |
| Heron | High | 3 | Low |

Which row contains an error?

A) Osprey
B) Merlin
C) Swift
D) Heron

**Correct answer: D**

**Explanation:** Apply the rule row by row. Osprey: 4 mitigations = 2 reductions; Critical → Medium. Correct. Merlin: 2 mitigations = 1 reduction; High → Medium. Correct. Swift: 5 mitigations = 2 reductions (the odd mitigation earns nothing); Medium → Low, floored. Correct. Heron: 3 mitigations = 1 reduction; High → Medium, not Low. The drafted "Low" overstates the risk reduction by a whole level. This tests methodical row-by-row verification rather than scanning for what "looks wrong" — the reliable strategy in real assurance work.

**Question 4 (moderate) — Prioritising the ethics team's review queue**

Four review requests arrive simultaneously. The triage framework says priority is determined first by potential harm to the public, then by imminence of deployment, then by request date.

- Request 1: A chatbot answering benefits queries; potential harm rated Medium; deploys in 6 weeks; requested Monday.
- Request 2: An automated triage model for social care referrals; potential harm rated High; deploys in 8 weeks; requested Wednesday.
- Request 3: An internal HR dashboard with aggregated, anonymised staff data; potential harm rated Low; deploys in 1 week; requested Monday.
- Request 4: A fraud-detection model flagging benefit claims for investigation; potential harm rated High; deploys in 3 weeks; requested Thursday.

What is the correct review order?

A) 4, 2, 1, 3
B) 2, 4, 1, 3
C) 4, 2, 3, 1
D) 3, 4, 2, 1

**Correct answer: A**

**Explanation:** Apply the criteria strictly in order. Harm first: Requests 2 and 4 are both High, outranking 1 (Medium) and 3 (Low). Between 2 and 4, imminence decides: Request 4 deploys in 3 weeks versus 8 for Request 2, so 4 comes first. Then Request 1 precedes Request 3. Option D reflects the tempting error of letting imminence jump the queue despite the framework subordinating it to harm. This tests applying stated criteria in their stated order even when an urgent-looking item tugs at the reader.

**Question 5 (moderate) — Spotting the flawed assumption**

A data science team presents this argument for a new model: "Our recidivism-risk model was trained on ten years of historical arrest data. Because the dataset is large and covers a long period, the model's predictions will be fair across demographic groups."

Which unstated assumption does the argument depend on?

A) That ten years is a long enough training period.
B) That the historical arrest data itself reflects unbiased treatment of demographic groups.
C) That the model uses the most modern algorithm available.
D) That the team has permission to use the data.

**Correct answer: B**

**Explanation:** The argument leaps from "large, long-period dataset" to "fair predictions". That leap only works if the underlying data is itself free of biased patterns — but arrest data famously encodes historical enforcement disparities. Option A concerns accuracy rather than fairness. Options C and D raise real concerns but the argument's validity does not rest on them. This tests identifying the load-bearing hidden premise — the essence of evaluating and challenging assumptions in data science projects.

**Question 6 (moderate) — Sequencing a training rollout**

Data ethics training is being rolled out to four directorates. Constraints:

1. The Data Science directorate must be trained before the Policy directorate, because Policy's sessions use case studies drawn from Data Science's projects.
2. The Digital Delivery directorate cannot be trained in the same month as Data Science (shared staff).
3. Operations must be trained last, once all case studies are finalised.
4. Only one directorate can be trained per month, starting in April.

Which schedule satisfies all constraints?

A) April: Data Science; May: Digital Delivery; June: Policy; July: Operations
B) April: Digital Delivery; May: Policy; June: Data Science; July: Operations
C) April: Policy; May: Data Science; June: Digital Delivery; July: Operations
D) April: Data Science; May: Policy; June: Operations; July: Digital Delivery

**Correct answer: A**

**Explanation:** Test each option against the constraints. Option A: Data Science (April) precedes Policy (June); Operations is last; all constraints hold. Option B trains Policy before Data Science, violating constraint 1. Option C also puts Policy before Data Science. Option D puts Operations before Digital Delivery, violating constraint 3. This tests systematic elimination against stated constraints — the approach used for scheduling real training around organisational dependencies.

**Question 7 (moderate) — Diagnosing a recurring problem**

Over three months, five separate project teams have each submitted ethics self-assessments that misclassify special category data as ordinary personal data. The five teams work in different directorates, use different data sources, and were trained by different trainers. All five, however, used version 3 of the self-assessment template, which was updated in the month before the errors began.

What is the most defensible root-cause hypothesis to test first?

A) All five teams are careless and need disciplinary referral.
B) The version 3 template introduced wording that leads teams to misclassify special category data.
C) The trainers are inconsistent and need retraining.
D) Special category data is inherently too difficult for non-specialists to identify.

**Correct answer: B**

**Explanation:** The method is elimination of varying factors: directorate, data source, and trainer all vary, so none can straightforwardly explain a common failure. The template version is the single shared factor, and the timing strengthens the hypothesis. Option A attributes to individuals what the evidence pattern attributes to a system. Option C is contradicted by the fact the trainers differed. This tests problem management in miniature: coordinating investigation towards the factor common to all failures.

**Question 8 (moderate) — Consistency checking across policy documents**

Three documents are under review ahead of a governance board:

- The draft Data Ethics Policy states: "All automated decision systems affecting members of the public must undergo an ethics review before deployment and annually thereafter."
- The Model Deployment Standard states: "Automated decision systems must be reviewed by the ethics team before deployment; subsequent reviews occur only after material changes to the model."
- The board briefing states: "Our policies require ethics reviews of public-facing automated decision systems before deployment, after material changes, and annually."

Which statement best describes the relationship between the documents?

A) All three documents are consistent.
B) The policy and standard conflict on review frequency; the briefing papers over the conflict by merging both requirements.
C) The briefing contradicts both documents.
D) The standard is stricter than the policy.

**Correct answer: B**

**Explanation:** The policy requires annual reviews; the standard requires reviews only after material changes — a genuine conflict about post-deployment frequency. The briefing quietly combines the two, as though no conflict existed. Option D is backwards: the annual requirement is the stricter one. This tests spotting cross-document inconsistency before a board does — a hallmark of the analysis and synthesis skill at lead level.

**Question 9 (hard) — Deduction with incomplete information**

An external researcher states: "Every dataset in the ethics-approved catalogue has a completed privacy assessment. Dataset Q has a completed privacy assessment."

A colleague concludes: "Therefore Dataset Q is in the ethics-approved catalogue."

Which of the following is the best evaluation of the colleague's conclusion?

A) Valid — the conclusion follows from the premises.
B) Invalid — a completed privacy assessment is stated as necessary for catalogue membership, not sufficient.
C) Invalid — the premises contradict each other.
D) Valid — but only if Dataset Q contains personal data.

**Correct answer: B**

**Explanation:** The first premise says catalogue membership implies a privacy assessment (necessary), not that a privacy assessment implies membership (sufficient). The colleague has affirmed the consequent — a common formal fallacy met constantly in assurance conversations ("We did the assessment, so we must be compliant"). This tests naming precisely why an inference fails, rather than just sensing it is wrong — what lets a critique of a colleague's finding stay constructive rather than adversarial.

**Question 10 (hard) — Prioritisation under a resource constraint**

A team of three reviewers has 12 reviewer-days available this month. Five reviews are pending. The framework requires maximising harm-weighted coverage: each completed review earns its harm score; incomplete reviews earn nothing.

| Review | Harm score | Reviewer-days needed |
|---|---|---|
| V | 9 | 6 |
| W | 7 | 5 |
| X | 6 | 4 |
| Y | 5 | 3 |
| Z | 3 | 2 |

Which combination of completed reviews gives the highest total harm score within 12 reviewer-days?

A) V and W (16 points, 11 days)
B) V, Y and Z (17 points, 11 days)
C) W, X and Y (18 points, 12 days)
D) V and X (15 points, 10 days)

**Correct answer: C**

**Explanation:** A: 16 points in 11 days. B: 17 in 11. C: 18 in exactly 12. D: 15 in 10. Option C wins. The instructive point is that the single highest-harm review (V) does not appear in the best answer: its cost crowds out combinations of cheaper reviews that jointly cover more harm. This tests recognising that "always do the biggest risk first" can be inferior to maximising total risk coverage — a proportionality judgement central to managing decisions and risks.

**Question 11 (hard) — Evaluating an evaluation**

A pilot data ethics training module is reported on: "94% of attendees who completed the feedback form rated the training 'useful' or 'very useful'. We should roll it out unchanged organisation-wide."

Attendance records show 200 people attended; 50 completed the feedback form.

Which is the strongest reason to be cautious about the conclusion?

A) 94% is not a high enough satisfaction score.
B) The feedback form respondents are a self-selected 25% of attendees, so satisfied attendees may be over-represented.
C) The training should have been longer.
D) Feedback forms are never reliable.

**Correct answer: B**

**Explanation:** The evidential weak point is non-response bias: only 50 of 200 attendees responded, and people who volunteer feedback tend to differ systematically from those who do not. Options C and D are unsupported assertions. This tests two skills at once: familiarity with feedback and evaluation mechanisms, and turning research data into clear findings that inform decisions rather than flatter them.

**Question 12 (hard) — Odd one out in ethical framing**

Four project descriptions cross the desk. Three share a common ethical failure mode; one does not. Which is the odd one out?

A) A model predicts which neighbourhoods need more housing inspections, trained on past inspection outcomes.
B) A model predicts which job applicants will succeed, trained on the performance ratings of past hires.
C) A model predicts which pupils need reading support, trained on a randomised screening assessment given to all pupils.
D) A model predicts which benefit claims are fraudulent, trained on past investigations that found fraud.

**Correct answer: C**

**Explanation:** A, B, and D all share the feedback-loop failure mode: trained on outcomes generated by prior human selection decisions, so the training data reflects the historical targeting pattern. C is different: the screening assessment was randomised and administered to all pupils, so the training data does not inherit a prior selection bias. This tests classifying problems by their underlying mechanism rather than surface subject matter — what allows demonstrating how to apply ethical principles through case studies, and teaching teams to recognise a failure mode wearing different clothes.

**Question 13 (hard) — Multi-step problem solving on a governance workflow**

An ethics review workflow has four stages: Intake (1 day), Assessment (3 days), Panel (held only on Thursdays), and Decision letter (1 day after Panel). A project submits its request at Intake on a Monday. Stages run on consecutive working days, and a request can only go to the first Panel that falls after Assessment is complete.

On which day is the decision letter issued?

A) The first Friday after submission
B) The second Friday after submission
C) The first Thursday after submission
D) The second Thursday after submission

**Correct answer: B**

**Explanation:** Intake occupies Monday. Assessment takes Tuesday, Wednesday, Thursday. Assessment finishes on that Thursday itself, so that Thursday's panel is too early; the first available Panel is the following Thursday. The decision letter follows one working day later: the second Friday. This tests drawing a quick timeline rather than reasoning purely in the head — a technique for diagnosing where governance processes silently add a week.

### Administration tips

- **Score for whether a candidate checks every element of a pattern or table**, not just the most obvious one.
- **Watch for whether a candidate reads modal verbs precisely** — the difference between "must" and "did", "may" and "must".
- **Note whether a candidate applies stated criteria in their stated order**, even when an urgent-looking item tempts a reorder.
- **Note whether a candidate names precisely why an inference fails**, rather than just sensing it is wrong.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that checks only the salient pattern** in a sequence or table encoding two rules at once.
- **Crediting an answer that slides from obligation to fact.**
- **Missing when a candidate lets urgency trump a stated prioritisation framework.**
- **Missing when a candidate imports outside knowledge** rather than answering from the rules and data given.
- **Letting a time-sink question distort the overall picture.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data. It mimics the data-handling demands of this role: tables, percentages, ratios, budgets, and performance metrics of the kind that appear in bias audits, survey results, training programme reports, and ethics programme budgets. The mathematics itself is rarely advanced, but it is embedded in realistic data that must be read carefully.

Typical format: online, strictly timed (often around a minute to ninety seconds per question), with an on-screen calculator allowed. The emphasis is on interpretation over mental arithmetic.

Numeric reasoning matters at this level because the role requires drawing together, analysing and evaluating qualitative and quantitative data, holding meaningful conversations with data scientists about minimising bias, and critiquing colleagues' findings to assure best practice. Credibly challenging a fairness metric, or spotting that a headline percentage hides an unrepresentative denominator, requires comfort doing the arithmetic directly.

### How this assessment maps to the role

- **Analysis and synthesis (data ethics)**: every question requires drawing quantitative information together and turning it into a clear finding.
- **Communication (data ethics)** and **Communicating between the technical and non-technical**: several questions rehearse the numbers behind conversations about bias rates, demographic representation, and model error rates.
- **Data ethics and privacy**: questions use bias audit tables, consent rates, and data-quality figures, mirroring the work of identifying and addressing ethical and privacy concerns with evidence.
- **Empathy and inclusivity**: representation and disparity calculations test the quantitative underpinning of incorporating views from underrepresented groups.
- **Managing decisions and risks**: budget, capacity, and expected-impact questions test proportionate quantitative judgement.
- **Product ownership (data ethics)**: uptake, completion, and feedback metrics for ethics tools and training test familiarity with evaluation mechanisms.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Training completion rates**

A data ethics training programme has these completion figures for the quarter:

| Directorate | Staff enrolled | Staff completed |
|---|---|---|
| Data Science | 80 | 68 |
| Policy | 120 | 90 |
| Digital Delivery | 150 | 105 |
| Operations | 50 | 42 |

Which directorate has the highest completion rate?

A) Data Science
B) Policy
C) Digital Delivery
D) Operations

**Correct answer: A**

**Explanation:** Data Science 85%; Policy 75%; Digital Delivery 70%; Operations 84%. Data Science's 85% narrowly beats Operations' 84%. The trap is judging by absolute numbers — Digital Delivery completed the most people (105) but has the lowest rate. This tests distinguishing counts from rates, the single most frequent numeric skill in ethics reporting.

**Question 2 (easy) — Percentage change in ethics review demand**

Ethics review requests rose from 240 last year to 312 this year. What is the percentage increase?

A) 23%
B) 30%
C) 33%
D) 72%

**Correct answer: B**

**Explanation:** Increase = 72; percentage increase = 72 ÷ 240 = 30%. Option D mistakes the raw increase for a percentage; option A divides by the new value instead of the original. This tests measuring percentage change against the correct base.

**Question 3 (moderate) — Reading a bias audit table**

A bias audit of a fraud-flagging model:

| Group | Applications processed | Flagged for investigation | Investigations finding fraud |
|---|---|---|---|
| Group A | 10,000 | 800 | 200 |
| Group B | 5,000 | 600 | 150 |

Which statement is correct?

A) Group B's flag rate is 12%, which is 1.5 times Group A's flag rate of 8%.
B) Group A's flag rate is higher than Group B's.
C) Both groups have the same flag rate.
D) Group B's flag rate is 6%.

**Correct answer: A**

**Explanation:** Flag rate = flagged ÷ processed. Group A: 8%. Group B: 12%, 1.5 times Group A's rate. The absolute counts point the other way (800 versus 600), tempting option B. This tests computing rates correctly, and, for a strong candidate's answer, noticing that the "hit rate" among investigations is identical (25% for both groups) — the model finds fraud at the same precision while subjecting Group B to proportionally more investigations.

**Question 4 (moderate) — Survey representativeness**

The population a service serves is 20% from ethnic minority backgrounds. A public attitudes survey receives 1,500 responses, of which 180 are from ethnic minority respondents.

What percentage of survey responses came from ethnic minority respondents, and how does it compare with the population?

A) 12% — under-represented by 8 percentage points
B) 12% — over-represented by 8 percentage points
C) 18% — under-represented by 2 percentage points
D) 20% — representative

**Correct answer: A**

**Explanation:** 180 ÷ 1,500 = 12%, against a 20% benchmark — under-represented by 8 percentage points, meaning findings presented as "public attitudes" would be skewed towards majority-group views. This tests the arithmetic behind incorporating views from underrepresented groups — measuring whether they are in the evidence base at all.

**Question 5 (moderate) — Weighting a risk score**

An ethics triage tool scores projects on three criteria, weighted: potential harm (weight 3), scale of data (weight 2), novelty of technique (weight 1). Each criterion is scored 1–5. A project scores: harm 4, scale 3, novelty 5.

What is its weighted average score, to one decimal place?

A) 4.0
B) 3.8
C) 3.5
D) 4.2

**Correct answer: B**

**Explanation:** Weighted sum = (4×3)+(3×2)+(5×1) = 23; total weight = 6; weighted average = 23 ÷ 6 ≈ 3.8. Option A is the unweighted mean, forgetting the weights entirely. This tests weighted-average calculation, and, for a strong candidate's answer, noting that the weighting itself is a deliberate proportionality choice worth being able to defend or challenge.

**Question 6 (moderate) — Budgeting the ethics programme**

An annual data ethics programme budget is £180,000, allocated: 45% staff training delivery, 30% research and expert advice, 15% tooling, 10% community engagement. Mid-year, £13,500 must be found for an unplanned bias audit by cutting the tooling line only.

What percentage of the original tooling budget remains after the cut?

A) 50%
B) 75%
C) 40%
D) 85%

**Correct answer: A**

**Explanation:** Tooling budget = 15% × £180,000 = £27,000. Cut = £13,500. Remaining = £13,500, which is 50% of the original. This tests writing down the intermediate figure rather than chaining operations mentally on a two-step problem.

**Question 7 (moderate) — Consent rates over time**

A service reports the proportion of users consenting to optional data sharing:

| Quarter | Users asked | Users consenting |
|---|---|---|
| Q1 | 40,000 | 26,000 |
| Q2 | 50,000 | 30,000 |

A colleague says: "Consent went up — 30,000 is more than 26,000, so users are more comfortable with sharing." What does the consent *rate* show?

A) The rate rose from 60% to 65%.
B) The rate fell from 65% to 60%.
C) The rate is unchanged at 65%.
D) The rate fell from 65% to 52%.

**Correct answer: B**

**Explanation:** Q1 rate = 65%. Q2 rate = 60%. The rate fell by five percentage points even though the count rose, because the denominator grew faster than the numerator. This tests challenging a numerically plausible but wrong claim — exactly what "critique colleagues' findings to assure best practice" means in daily life.

**Question 8 (hard) — Model error rates across groups**

A model supporting social care triage has these evaluation figures:

| Group | Cases | Cases needing urgent care | Urgent cases correctly identified |
|---|---|---|---|
| Group X | 2,000 | 400 | 340 |
| Group Y | 1,000 | 250 | 175 |

What are the false negative rates (urgent cases missed) for each group?

A) X: 15%; Y: 30%
B) X: 3%; Y: 7.5%
C) X: 85%; Y: 70%
D) X: 15%; Y: 25%

**Correct answer: A**

**Explanation:** Group X misses 60 of 400 urgent cases (15%); Group Y misses 75 of 250 (30%) — the model misses urgent cases in Group Y at twice the rate of Group X. Option B divides by total cases instead of urgent cases (the wrong denominator); option C gives the complement (sensitivity). This tests choosing the correct denominator and direction of error — the technical fluency needed to say "your headline accuracy hides a doubled miss rate for Group Y".

**Question 9 (hard) — Cost per outcome for training options**

Choosing between two delivery models for ethics training:

- Option 1: E-learning licence at £24,000 per year, expected to reach 800 staff with a 60% completion rate.
- Option 2: Facilitated workshops costing £900 per session, 15 staff per session, 40 sessions planned, with a 95% completion rate.

What is the approximate cost per *completing* member of staff for each option?

A) Option 1: £50; Option 2: £63
B) Option 1: £30; Option 2: £60
C) Option 1: £50; Option 2: £60
D) Option 1: £40; Option 2: £63

**Correct answer: A**

**Explanation:** Option 1: completions = 480; cost per completion = £50. Option 2: total cost = £36,000; completions = 570; cost per completion ≈ £63. Options C and D pair one correct figure with a wrong one. This tests computing both figures fully before selecting, rather than matching on the first calculated.

**Question 10 (hard) — Ratio reasoning on review capacity**

Ethics reviews come in two types: standard (2 reviewer-days) and complex (5 reviewer-days). Historically, standard and complex reviews arrive in the ratio 3:1. A team has 220 reviewer-days available next quarter.

Assuming arrivals follow the historical ratio, how many complex reviews can the team complete if it handles every review that arrives, and demand exactly exhausts capacity?

A) 15
B) 20
C) 25
D) 30

**Correct answer: B**

**Explanation:** One "bundle" of arrivals (3 standard + 1 complex) costs (3×2)+(1×5) = 11 reviewer-days. Bundles within capacity: 220 ÷ 11 = 20, each containing one complex review. This tests converting a ratio into a repeating unit of cost — exactly how to model whether a proposed intake policy is sustainable.

**Question 11 (hard) — Interpreting a percentage-point disparity claim**

A briefing states: "After mitigation, the model's approval rate disparity between the two largest demographic groups narrowed from 12 percentage points (58% vs 46%) to 6 percentage points (52% vs 46%)."

Which is a correct reading of the figures?

A) The disparity halved, achieved entirely by lowering the higher group's approval rate; the lower group saw no improvement.
B) Both groups' approval rates rose.
C) The lower group's approval rate rose by 6 percentage points.
D) The model now approves both groups at the same rate.

**Correct answer: A**

**Explanation:** The gap halved from 12 to 6 points, but the higher group's rate dropped 6 points while the lower group's rate is unchanged at 46% — "levelling down": equality improved without anyone becoming better off. Options B and C claim improvements the data does not show. This tests reading the underlying rates rather than the headline gap — the ethical significance of *how* a disparity narrows.

**Question 12 (hard) — Compound growth in programme reach**

An ethics champions network has 64 members, growing 25% per year. Approximately how many members after three years?

A) 112
B) 125
C) 120
D) 100

**Correct answer: B**

**Explanation:** 64 → 80 → 100 → 125 (compound). Option A comes from simple, non-compounding growth. This tests recognising which growth assumption a multi-year projection uses — a quiet source of over- or under-promising in programme plans.

**Question 13 (moderate) — Sanity-checking a headline figure**

A press summary says: "Ethics reviews prevented harm in 45% of projects this year." Underlying data: 180 projects reviewed; 27 reviews led to material changes that mitigated an identified harm.

What percentage of reviewed projects actually saw harm-mitigating changes?

A) 45%
B) 27%
C) 15%
D) 18%

**Correct answer: C**

**Explanation:** 27 ÷ 180 = 15%. The drafted 45% is unsupported. This tests verifying a published number back to its numerator and denominator before it circulates — a discipline that protects the credibility of an ethics function's own reporting.

**Question 14 (hard) — Opt-out rates and effective sample size**

A research team plans to reuse a service dataset of 60,000 users, offering an opt-out. Overall opt-out is 4%, but users aged over 65 (25% of the dataset) opt out at 10%, while all other users opt out at 2%.

After opt-outs, what proportion of the remaining dataset is aged over 65, to the nearest whole percentage point?

A) 25%
B) 22%
C) 23%
D) 27%

**Correct answer: C**

**Explanation:** Over-65s: 15,000 minus 10% (1,500) = 13,500. Others: 45,000 minus 2% (900) = 44,100. Remaining total = 57,600. Over-65 share = 13,500 ÷ 57,600 ≈ 23%. This tests recognising that a differential opt-out quietly shifts a dataset's composition — a representativeness drift worth flagging when advising a team.

**Question 15 (moderate) — Reading a stacked metric honestly**

A quarterly dashboard reports "ethics engagement": the combined count of training completions, drop-in clinic attendances, and intranet guidance page views. This quarter's figure is 5,200, up from 4,000 last quarter (+30%). The breakdown:

| Component | Last quarter | This quarter |
|---|---|---|
| Training completions | 700 | 560 |
| Clinic attendances | 300 | 240 |
| Guidance page views | 3,000 | 4,400 |

Which statement most accurately characterises the quarter?

A) Engagement rose 30% across the board.
B) The headline rose 30%, but both high-effort engagement types fell by 20%; the rise is entirely from page views.
C) Training completions rose in line with the headline.
D) The figures are internally inconsistent.

**Correct answer: B**

**Explanation:** Training and clinics each fell 20%; page views rose ≈47%. Totals reconcile (4,000 and 5,200), ruling out D, and the headline +30% is genuine but composed entirely of the lowest-effort signal. This tests decomposing an aggregate before trusting it — refusing to let a favourable headline pass unexamined, even one that flatters an ethics programme's own performance.

### Administration tips

- **Score for whether a candidate identifies the denominator first** before computing a percentage.
- **Watch for whether a candidate writes intermediate figures down** on multi-step problems.
- **Note whether a candidate distinguishes counts from rates.**
- **Note whether a candidate chooses the denominator matching what the question actually asks** (e.g. false negative rate against actual positives, not all cases).
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that misreads labels or units** — quarterly confused with annual, or a missed scale qualifier.
- **Missing when a candidate treats a bigger count as a higher rate.**
- **Crediting an answer using the wrong denominator for an error rate.**
- **Rewarding over-calculation** where estimation would identify the answer faster.
- **Missing when a candidate confuses percentage points with percent.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws strictly correct conclusions from written material. It mirrors the exact reading demands of this role: dense policy documents, standards, legal-adjacent guidance, stakeholder emails, and research reports. Passages use relevant terminology, and questions typically require judging statements as True, False, or Cannot Say — based only on the text provided.

The format is time-pressured, often under a minute per question, simulating the reality of skimming a forty-page framework the morning before a governance board.

Verbal reasoning may be the most job-relevant assessment of the four for this role. The role profile explicitly requires quickly reading and interpreting complex documents from a range of sources and distilling what is relevant. It requires assessing and constructively challenging proposed data ethics policies, which demands forensic attention to what a policy's words actually commit the organisation to. And because the role mediates between technical and non-technical audiences, it constantly translates texts for others — a translation that is only trustworthy if the underlying reading is exact.

### How this assessment maps to the role

- **Analysis and synthesis (data ethics)**: the entire test is this skill's reading component.
- **Data ethics and privacy**: passages are drawn from the genre this role inhabits, and the questions test whether a candidate can extract precisely what a policy requires, permits, and stays silent about.
- **Communication (data ethics)** and **Communicating between the technical and non-technical**: comprehension questions test identifying a text's core claim and tone.
- **Applied social sciences**: some passages present research findings and arguments; the questions test separating what a study found from what its authors speculate.
- **Stakeholder relationship management**: email and briefing passages test reading between formal lines without inventing content.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage A — Draft ethics framework clause (Questions 1–4)**

> "All projects developing or procuring automated decision-making systems must complete an Algorithmic Impact Assessment (AIA) before the system processes live data. Projects rated 'limited impact' in the AIA may proceed with annual self-certification thereafter. Projects rated 'significant impact' must obtain approval from the Data Ethics Board before deployment and after any material change to the system's purpose, data inputs, or model logic. The Board may, at its discretion, require an independent external audit for systems affecting access to public services. Nothing in this framework removes obligations arising under data protection legislation."

**Question 1 (easy)** — True, False, or Cannot Say: "A project rated 'limited impact' must obtain Data Ethics Board approval before deployment."

**Correct answer: False**

**Explanation:** The passage assigns Board approval only to "significant impact" projects; limited-impact projects follow a different route (annual self-certification). This tests answering False because the text establishes otherwise, not because of outside knowledge of how a real organisation does it.

**Question 2 (moderate)** — True, False, or Cannot Say: "An external audit is mandatory for all systems affecting access to public services."

**Correct answer: False**

**Explanation:** The Board "may, at its discretion, require" an audit — permissive, not mandatory. This tests reading modal verbs exactly, since they carry the legal and operational weight of a framework.

**Question 3 (moderate)** — True, False, or Cannot Say: "A significant-impact system that changes its data inputs materially requires fresh Board approval even if its purpose is unchanged."

**Correct answer: True**

**Explanation:** The clause requires approval "after any material change to the system's purpose, data inputs, or model logic" — a disjunctive list, so any one trigger suffices. This tests reading a list as disjunctive rather than conjunctive.

**Question 4 (hard)** — True, False, or Cannot Say: "Complying with this framework ensures a project also complies with data protection legislation."

**Correct answer: False**

**Explanation:** The final sentence states the framework does not remove obligations under data protection legislation — an explicit disclaimer that framework compliance and legal compliance are separate. This tests recognising that a disclaimer sentence is decisive, not filler — the sentence a strong candidate would point to when a team assumes an ethics sign-off is a legal sign-off.

**Passage B — Email from a directorate head (Questions 5–7)**

> "Thanks for your team's review of our proposed analytics platform. We accept the recommendation to exclude the sensitive attributes from the model's inputs, and we will implement this before the pilot. However, we do not agree that the pilot should be delayed until the fairness metrics are re-run: the pilot is limited to 500 volunteer users who have given explicit consent, and we believe this contains any risk. We would welcome a follow-up session with your team during the pilot, and we will share the re-run metrics as soon as they are available. Could you confirm whether your team's concerns would prevent sign-off at the December gateway?"

**Question 5 (easy)** — True, False, or Cannot Say: "The directorate has agreed to implement one of the review's recommendations before the pilot."

**Correct answer: True**

**Explanation:** Directly matched: "we accept the recommendation... and we will implement this before the pilot." This tests locating a sentence and confirming it says what the statement says, no more.

**Question 6 (moderate)** — True, False, or Cannot Say: "The re-run fairness metrics will be available before the pilot begins."

**Correct answer: False**

**Explanation:** The email refuses to delay the pilot "until the fairness metrics are re-run" and promises to share them "as soon as they are available" with a follow-up session during the pilot — together establishing the pilot proceeds without waiting for the metrics. This tests recognising that a refusal to delay "until X" implies X is not yet ready.

**Question 7 (hard)** — Which of the following best describes what the directorate head is asking of the ethics team?

A) To withdraw the recommendation about sensitive attributes.
B) To state whether their outstanding concerns would block December gateway sign-off.
C) To approve the pilot's expansion beyond 500 users.
D) To re-run the fairness metrics themselves.

**Correct answer: B**

**Explanation:** The email's only question matches option B exactly. Option A reverses what happened; option C invents an expansion never mentioned; option D misassigns the work. This tests identifying the actual "ask" buried at the end of a diplomatically worded email.

**Passage C — Research report extract (Questions 8–10)**

> "Our review of 42 public sector algorithmic transparency reports found that 31 disclosed the categories of data used, but only 9 described how the system's outputs were monitored after deployment. Interviewees from publishing bodies most frequently cited resource constraints as the reason for limited post-deployment reporting. The authors consider it plausible that mandatory reporting templates would increase disclosure consistency, though the study did not test this. No relationship was found between organisation size and disclosure completeness."

**Question 8 (easy)** — True, False, or Cannot Say: "Fewer than a quarter of the reviewed reports described post-deployment monitoring of outputs."

**Correct answer: True**

**Explanation:** 9 of 42 is fewer than a quarter (10.5). This tests doing the small calculation rather than eyeballing a figure close to the threshold.

**Question 9 (moderate)** — True, False, or Cannot Say: "Mandatory reporting templates increase disclosure consistency."

**Correct answer: Cannot Say**

**Explanation:** The authors "consider it plausible" but "the study did not test this" — flagged speculation, neither confirmed nor contradicted. This tests the single most examined distinction in verbal reasoning: what a text asserts as finding versus what it offers as conjecture.

**Question 10 (moderate)** — True, False, or Cannot Say: "Larger organisations produced more complete disclosures than smaller ones."

**Correct answer: False**

**Explanation:** The passage states no relationship was found between organisation size and disclosure completeness — a reported negative finding, which is still a finding, contradicting the statement. This tests distinguishing "investigated and found nothing" (False) from "not investigated" (Cannot Say).

**Passage D — Proposed policy wording (Questions 11–13)**

> "Staff may reuse datasets collected by other teams for new analytical purposes provided that: (a) the reuse is compatible with the purpose for which the data was originally collected; (b) a reuse record is logged in the data catalogue before analysis begins; and (c) where the dataset contains personal data, the data protection team confirms the lawful basis for reuse. The data ethics team should be consulted where the reuse may affect vulnerable groups, and must be consulted where the reuse involves automated decision-making. Consultation with the data ethics team does not substitute for condition (c)."

**Question 11 (moderate)** — True, False, or Cannot Say: "A team reusing a dataset containing no personal data must obtain confirmation from the data protection team."

**Correct answer: False**

**Explanation:** Condition (c) is expressly conditional on the dataset containing personal data; without personal data, its trigger is absent. This tests reading the scope of a qualifying clause ("where...") precisely.

**Question 12 (hard)** — True, False, or Cannot Say: "A reuse involving automated decision-making that affects vulnerable groups requires data ethics team consultation."

**Correct answer: True**

**Explanation:** The mandatory "must" clause for automated decision-making applies on its own; the vulnerable-groups element adds an advisory reason but is not needed to establish the requirement. This tests the should/must distinction — a sharp drafting convention that sloppy readers treat as synonyms.

**Question 13 (hard)** — Which of the following best summarises the *purpose* of the final sentence ("Consultation with the data ethics team does not substitute for condition (c)")?

A) To make ethics consultation optional in all cases.
B) To prevent teams treating an ethics conversation as if it satisfied the separate legal requirement for a lawful basis confirmation.
C) To subordinate the data protection team to the data ethics team.
D) To remove condition (c) for reuses that have had ethics consultation.

**Correct answer: B**

**Explanation:** The sentence anticipates a predictable failure mode: a team consults the ethics team, feels "cleared", and skips the data protection confirmation. This tests recognising why a sentence exists — the misreading it is designed to block.

**Question 14 (moderate)** — Standalone comprehension

A minister's foreword to a data strategy states: "We will be transparent by default about how we use the public's data, withholding details only where disclosure would enable fraud or compromise security."

True, False, or Cannot Say: "The strategy commits to publishing all details of public data use."

**Correct answer: False**

**Explanation:** The commitment is transparency by default with two stated exceptions; "all details" admits no exceptions. This tests catching absolute words ("all", "never", "only", "every") inserted into statements about qualified text.

**Passage E — Internal audit finding on ethics governance (Questions 15–18)**

> "The audit examined whether ethics review recommendations were implemented by project teams. Of the 60 recommendations sampled, 44 were implemented in full, 10 in part, and 6 not at all. In four of the six unimplemented cases, project documentation recorded a reasoned decision to accept the associated risk; in the remaining two, no record of any decision was found. The audit did not assess whether the recommendations themselves were proportionate. The ethics team's tracking spreadsheet was found to be accurate in all sampled cases. The audit rates the overall control environment as 'moderate', noting that the absence of a decision record in any unimplemented case is inconsistent with the organisation's governance manual, which requires all departures from ethics recommendations to be documented and approved at deputy director level."

**Question 15 (easy)** — True, False, or Cannot Say: "More than 70% of sampled recommendations were implemented in full."

**Correct answer: True**

**Explanation:** 44 ÷ 60 = 73.3%, exceeding 70%. This tests computing rather than estimating near a marginal threshold.

**Question 16 (moderate)** — True, False, or Cannot Say: "The two undocumented unimplemented recommendations breached the organisation's governance manual."

**Correct answer: True**

**Explanation:** Chaining two pieces of text: the manual requires all departures to be documented, and the two cases have no record of any decision — an undocumented departure fails the requirement. This tests assembling premises from different sentences — a step up from single-sentence matching.

**Question 17 (hard)** — True, False, or Cannot Say: "Some of the ethics team's recommendations were disproportionate."

**Correct answer: Cannot Say**

**Explanation:** The audit "did not assess whether the recommendations themselves were proportionate" — explicitly silent, neither confirming nor contradicting. This tests distinguishing "investigated and found nothing" from "never examined".

**Question 18 (moderate)** — Which of the following best summarises the audit's overall message?

A) The ethics team's tracking is unreliable and its recommendations are widely ignored.
B) Implementation is largely good and tracking is accurate, but the failure to document risk-acceptance decisions in a minority of cases is a governance weakness.
C) The organisation's governance manual is too demanding for project teams to follow.
D) All departures from ethics recommendations were properly approved.

**Correct answer: B**

**Explanation:** Option B captures the balance: strong implementation, accurate tracking, a "moderate" rating, and one identified control weakness. Option A contradicts the text twice. This tests weighing all the evidence in proportion — the difference between briefing a board accurately and briefing it alarmingly.

**Question 19 (hard)** — Standalone inference

A supplier's transparency statement reads: "We never sell customer data. Aggregated, anonymised insights derived from customer data may be shared with commercial partners under licence."

True, False, or Cannot Say: "The supplier provides commercial partners with material derived from customer data in exchange for payment."

**Correct answer: True**

**Explanation:** The first sentence rules out selling raw customer data; the second confirms derived insights are shared "under licence" — a licence to commercial partners is the standard textual signal of a commercial arrangement. This tests reading what a carefully lawyered sentence does not deny, and choosing the best-supported reading rather than retreating to Cannot Say whenever any interpretive step is required.

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate reads modal verbs and qualifiers forensically** — may/must/should, "by default", "where", "at its discretion".
- **Note whether a candidate scans the statement first and hunts the passage**, rather than reading the whole passage cold.
- **Note whether a candidate treats a reported negative finding as decisive** rather than as silence.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from expert outside knowledge** rather than the passage — a particular risk for a candidate who already knows UK GDPR, the Data Ethics Framework, and ICO guidance well.
- **Missing when a candidate treats conjecture as finding.**
- **Missing the force of a disclaimer sentence** — decisive statements, not filler.
- **Crediting an absolute-word trap** — "all", "always", "mandatory", "every" added to qualified text.
- **Missing should/must blindness** — treating the two as synonyms.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment (SJT) evaluates a candidate's decision-making, interpersonal skill, and professional conduct through realistic workplace dilemmas. There is usually no single objectively right answer: several responses may seem reasonable, and the test measures how well behavioural choices align with the values of the organisation and the demands of the role. Response formats vary — most commonly identifying the most effective and least effective actions from a set, or ranking or rating every option. Timing is generous or absent.

For a data ethics lead, the SJT is where the role's essence is examined. The work is almost entirely situational: mediating between parts of the organisation, hosting difficult discussions, helping people ask questions and express concerns, building consensus among independent stakeholders, and constructively challenging colleagues without losing their trust. The scoring logic reflects UK public sector values: serving user needs, transparency, honesty and objectivity, collaboration, accessibility, and inclusion. At lead level, assessors also look for judgement about escalation — knowing what to resolve directly, what to take to the head of data ethics, and what must go to formal governance.

### How this assessment maps to the role

- **Communicating between the technical and non-technical**: scenarios test managing expectations, handling active and reactive communication, and supporting or hosting difficult discussions with diverse senior stakeholders.
- **Communication (data ethics)**: several dilemmas turn on translating a technical concern so a non-technical decision-maker grasps its weight.
- **Data ethics and privacy**: the dilemmas embed genuine ethical and privacy trade-offs.
- **Empathy and inclusivity**: scenarios involve underrepresented groups, community engagement, and bias.
- **Managing decisions and risks**: options are differentiated by proportionality.
- **Problem management**: some scenarios present recurring or systemic failures, testing whether root causes are fixed rather than symptoms.
- **Product ownership (data ethics)** and **Stakeholder relationship management**: scenarios about tools, training, feedback, and long-term relationships test whether both the work and the relationships it depends on are protected.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (moderate) — The deadline-pressured data science team**

A data science team is due to deploy a model that prioritises housing repair requests. Two days before deployment, their own testing reveals the model performs noticeably worse for households where English is not the first language. The delivery manager says: "We've got a hard ministerial deadline. Can we deploy now and fix the disparity in the next sprint?"

A) Agree to deployment, since the team has been transparent and has committed to a fix.
B) Refuse outright and inform the minister's office that the team attempted to deploy a biased model.
C) Convene the delivery manager and the head of data ethics the same day, quantify the disparity and its harm, and jointly agree either a mitigation that can ship with the model (for example, human review of affected cases) or a short, defensible delay with clear communication to the senior owner of the deadline.
D) Say it is the team's decision, since the ethics team is advisory.

**Most effective: C. Least effective: B.**

**Explanation:** Option C acts at the speed of the problem, uses evidence rather than assertion, involves the right level of authority, and searches for a proportionate path rather than a binary fight. Option A converts transparency into a free pass. Option D abdicates: advisory does not mean indifferent. Option B is least effective: it mischaracterises the team (who disclosed the issue themselves), bypasses the head of data ethics, and turns a solvable timing problem into a political incident. This tests pairing decisive action with proportionality, and treating a deadline's owner as a stakeholder to be communicated with rather than an obstacle.

**Question 2 (moderate) — The dismissive senior stakeholder**

At a programme board, a senior director interrupts a presentation on ethical risks in a data-sharing initiative: "This ethics stuff is slowing us down. The public expects us to deliver. Can we take this offline?"

A) Accept moving it offline, then follow up with a concise one-page brief linking each ethical risk to a delivery risk the director cares about, and request a short one-to-one before the next board.
B) Insist on finishing the slides, stating that ethics cannot be an afterthought.
C) Say nothing further at the board and quietly log the risks in the risk register.
D) Move it offline, and additionally ask the board chair to record a decision that the initiative proceeds with ethical risks unreviewed.

**Most effective: A. Least effective: C.**

**Explanation:** Option A reads the room without surrendering the substance, and the follow-up translates ethical risks into the director's own currency — the heart of communicating between the technical and non-technical. Option B risks entrenching an "ethics = friction" narrative by forcing a confrontation at the board. Option D is defensible governance but as the most combative move should follow, not precede, an attempt at persuasion. Option C is least effective: silent logging is passive and ensures the risks influence nothing. This tests choosing the ground for a difficult discussion rather than either forcing or avoiding it.

**Question 3 (hard) — The colleague's flawed bias audit**

A well-respected data scientist circulates a bias audit concluding a recruitment-screening model is "fair across all groups". Review shows the audit tested only gender, ignored ethnicity and disability, and used a sample too small to detect meaningful disparities for smaller groups.

A) Reply-all to the circulation list correcting the audit's flaws so no one is misled.
B) Speak with the data scientist privately first, walk through the gaps, and offer to co-design an extended audit — then ensure the circulated conclusion is corrected to the same audience once agreed.
C) Say nothing, since criticising the audit could damage the relationship the team depends on.
D) Raise it at the next ethics board as an example of inadequate audit practice.

**Most effective: B. Least effective: C.**

**Explanation:** Option B is private first, specific and technical, constructive, and it still ensures the incorrect conclusion is corrected for the audience it reached. Option A gets the correction right and the relationship wrong. Option D uses a governance forum for what a conversation could fix. Option C is least effective and the most seductively rationalised: it privileges a comfortable relationship over people who could face discriminatory screening. This tests empathy for affected people first, and preserving the trust that keeps colleagues disclosing candidly.

**Question 4 (moderate) — The community consultation shortfall**

Consulting on a new data-sharing scheme, analysis of responses shows almost no participation from disabled people and low-income households — two groups the scheme would affect most. The policy lead says: "We've met the statutory consultation requirement. Extending would cost six weeks we don't have."

A) Accept the position; the statutory requirement is met and the timetable is fixed.
B) Propose targeted, faster engagement — working through disability organisations and community groups, offering accessible formats and small-group sessions — to gather the missing perspectives within the existing timetable, and note in the consultation report which voices remain under-heard.
C) Publicly state that the consultation is invalid.
D) Extend the consultation by six weeks regardless of the policy lead's objection.

**Most effective: B. Least effective: C.**

**Explanation:** Option B distinguishes the legal floor from the ethical standard and designs a proportionate way to close the gap within real constraints. Option A treats compliance as the ceiling. Option D lacks the authority to impose it and sacrifices consensus-building. Option C is least effective: not the candidate's to declare, probably wrong in law, and converts a fixable inclusion gap into a public credibility crisis. This tests proportionate response within real constraints, and recording residual gaps for transparency.

**Question 5 (hard) — The anxious whistleblower**

A junior analyst asks to speak confidentially, believing their team is linking datasets beyond what users consented to, but fears being seen as a troublemaker since their line manager designed the approach. They ask for confidentiality.

A) Promise absolute confidentiality and investigate quietly, never revealing that anyone raised a concern.
B) Thank them, explain honestly what can and cannot be kept confidential, and agree a route that protects them — for example, the ethics team "routinely" reviewing the data-linking practice as part of its work programme so no individual is identifiable as the source — while making sure the concern is properly examined.
C) Tell them to raise it with their line manager first, since that is the proper channel.
D) Report the team to the data protection officer immediately, naming the analyst as the source so the concern is on the record.

**Most effective: B. Least effective: D.**

**Explanation:** Option B is honest about the limits of confidentiality, engineers genuine protection, and ensures the substantive question is investigated. Option A's promise of absolute secrecy is a trap that may not survive a serious finding. Option C sends a frightened junior back to the manager who designed the practice. Option D is least effective: it maximises exposure against the analyst's express wishes and poisons the well permanently. This tests making it safe to raise a concern while still ensuring the concern is examined.

**Question 6 (moderate) — The vendor's opaque algorithm**

A procurement team asks for sign-off on a contract for a third-party fraud-analytics product. The vendor refuses to disclose how its risk scores are calculated, citing commercial confidentiality. The product performs well in trials, the price is good, and procurement wants to close this week.

A) Sign off; trial performance is what matters, and vendors are entitled to protect their intellectual property.
B) Refuse sign-off and recommend the organisation build its own system instead.
C) Withhold sign-off for now and negotiate concrete transparency mechanisms into the contract — access to feature-level explanations for individual decisions, rights to audit for bias, documentation of training data provenance, and exit provisions if audits fail — accepting the deal only with enforceable safeguards.
D) Sign off but write a memo recording concerns about opacity.

**Most effective: C. Least effective: D.**

**Explanation:** Option C treats the impasse as a design problem: audit rights, explanation interfaces, and exit clauses give accountability without demanding source code — translating theoretical principles into practice. Option A confuses trial accuracy with accountability. Option B is disproportionate — a multi-year answer to a question the contract can solve. Option D is least effective: pure self-protection that changes nothing for the citizens scored by an unaccountable system. This tests negotiating enforceable safeguards rather than either accepting or refusing outright.

**Question 7 (moderate) — The training programme nobody attends**

Mandatory data ethics training for data practitioners sits at 40% completion. Directors send apologies; teams cite delivery pressure. The head of data ethics asks for uptake to be fixed.

A) Ask the executive committee to enforce completion, with non-compliance reported to directors quarterly.
B) Investigate why people are not attending — timing, length, format, perceived relevance — redesign the offer around what is learned (shorter, role-specific, embedded in existing team rituals), pilot the redesign with a sceptical directorate, and pair it with visible senior sponsorship.
C) Reduce the training requirement so the completion statistics improve.
D) Email all staff reminding them the training is mandatory.

**Most effective: B. Least effective: C.**

**Explanation:** Option B treats low uptake as a product problem: gather feedback, redesign, pilot, iterate, while recognising enforcement without a better product breeds resentful, box-ticking compliance. Option A is a valid component but leads with the symptom rather than the cause. Option D is a weaker version of A. Option C is least effective: it games the metric instead of improving the outcome — precisely the practice a data ethicist exists to challenge in others.

**Question 8 (hard) — Mediating between privacy and public benefit**

Two parts of the organisation are deadlocked. A health-analytics team wants access to linked administrative data to target support at families at risk of homelessness. The privacy team objects: the linkage repurposes data collected for benefits administration, and affected families never consented. Both sides have escalated, and both regard the data ethics lead as their ally.

A) Side with the privacy team; consent is fundamental and the linkage should not proceed.
B) Side with the analytics team; preventing homelessness clearly outweighs a technical consent objection.
C) Convene a structured deliberation: get both sides to agree the facts, map the harms of proceeding and of not proceeding, explore middle designs — minimised datasets, pseudonymisation, an opt-out with meaningful notice, external ethics scrutiny, a time-limited pilot with published evaluation — and take a documented recommendation weighing both duties to the appropriate decision-maker.
D) Decline to get involved, since the ethics team should stay neutral in interdepartmental disputes.

**Most effective: C. Least effective: D.**

**Explanation:** Option C's strength is procedural before substantive: mapping the harms of inaction alongside the harms of action is the mark of mature ethical analysis, and exploring middle designs frequently dissolves the dilemma. Options A and B pick a winner before doing the work. Option D is least effective: neutrality between positions does not mean absence from the process — convening this exact conversation is the job. This tests structured deliberation over premature judgement, and routing the final recommendation to an accountable decision-maker.

**Question 9 (moderate) — The AI-generated briefing error**

A widely circulated internal briefing about an ethics programme, drafted by a colleague using a generative AI tool, contains a fabricated statistic: it claims "external research shows our framework reduced data incidents by 60%". No such research exists.

A) Quietly correct only the candidate's own conference materials; the internal briefing is the author's responsibility.
B) Alert the colleague, help them issue a correction to everyone who received the briefing, and propose a light-weight verification step for AI-assisted drafting so it does not recur.
C) Email the colleague's director to report misuse of AI tools.
D) Raise the incident at the all-staff meeting as a cautionary tale, without naming the colleague.

**Most effective: B. Least effective: A.**

**Explanation:** Option B pairs the immediate fix (correction to the actual audience) with the systemic fix (a verification step) — resolve, then prevent — and treats the colleague as a partner in the correction. Option C escalates a good-faith error into a disciplinary matter prematurely. Option D fixes nothing for the briefing's recipients. Option A is least effective: it is knowing complicity — presenting accurate figures externally while a falsehood circulates internally under the programme's name.

**Question 10 (hard) — The head of data ethics is away**

The head of data ethics is on leave and unreachable for two weeks. A newspaper contacts the press office with detailed, partially accurate claims that a pilot algorithm disadvantaged single parents, and asks for comment within 48 hours. The press office asks the senior ethics person available what the organisation should say.

A) Advise the press office to deny the claims, since they are partially inaccurate.
B) Advise saying nothing until the head of data ethics returns.
C) Rapidly verify what the pilot's records actually show, brief the press office and the relevant senior owner on what is accurate and what is not, and support a response that acknowledges what is true, corrects what is false, and states what the organisation is doing about the genuine issue — flagging the matter for the head of data ethics on their return.
D) Speak to the journalist directly to explain the technical detail.

**Most effective: C. Least effective: A.**

**Explanation:** Option C is lead-level deputising: grounding the response in verified fact, working through proper channels, and ensuring continuity. Option B mistakes absence for paralysis against a 48-hour deadline. Option D violates channel discipline. Option A is least effective: advising a denial known to be partially false is not merely unwise but dishonest — the fastest way for an ethics function to forfeit its authority.

**Question 11 (moderate) — The external academic's request**

An academic collaborator asks for access to internal ethics review case files "to advance the field", offering co-authorship. The files contain candid, sometimes unflattering details about internal projects and the concerns teams raised in confidence.

A) Share the files; the research benefit is real, academic collaboration is in the role, and the academic promises to anonymise everything.
B) Decline all engagement to avoid any risk.
C) Explore a governed route: agree the research value, then work through what could be shared under what safeguards — formally anonymised or synthesised case summaries, an information-sharing agreement, internal review before release, and consent from teams whose cases would feature — declining the raw files.
D) Share the files but ask the academic to keep their use discreet.

**Most effective: C. Least effective: D.**

**Explanation:** Option C preserves the collaboration, protects the confidence teams spoke under, and applies the organisation's own data ethics standards to its own data. Option B wastes genuine value. Option A outsources the duty of care to the academic's promise. Option D is least effective because it adds concealment to the breach — asking for discretion while sharing sensitive material signals awareness that it is wrong.

**Question 12 (moderate) — Ranking under a live incident**

A dashboard published three days ago inadvertently allows small groups of identifiable individuals to be singled out when filters are combined (a re-identification risk). It is being discussed on social media. Rank these four actions in the order to take them:

1. Get the dashboard's publishing team to remove or fix the affected feature immediately.
2. Establish exactly which data combinations create the risk and who could be affected.
3. Notify the data protection officer so breach-assessment obligations are met.
4. Commission a review of pre-publication checks so the failure mode is caught in future.

**Correct ranking: 1, 3, 2, 4 (with 1 and 3 effectively simultaneous).**

**Explanation:** Stopping ongoing harm dominates: every hour the feature stays up, more combinations can be tried, so takedown comes first. Notifying the DPO comes essentially in parallel: a re-identification risk plausibly engages statutory breach-assessment clocks, and delaying notification to "understand it fully first" is a recognised failure pattern. The detailed analysis (2) then informs the DPO's assessment and the fix's completeness. The preventive review (4) is essential but last. This tests sequencing under a live incident: candidates commonly over-rank analysis before action, or under-rank DPO notification as bureaucracy rather than a legal clock already ticking.

### Administration tips

- **Score for whether a candidate's response pairs action with relationship** — fixing the substance while protecting the trust, the escalation route, or the safe channel.
- **Watch for whether a candidate addresses root cause** where a scenario hints at recurrence, rather than symptoms or gaming the measure.
- **Note whether a candidate calibrates escalation** — the right level, channel, and moment, neither premature nor absent.
- **Note whether a candidate's answer serves affected citizens or users first**, rather than institutional or personal comfort.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding the idealistic option over the effective one** — "refuse and report to the minister" ignores channels, proportionality, and relationships.
- **Crediting a passive option** — quietly logging risks, writing memos-to-file, waiting for someone senior to return.
- **Missing when a candidate spends the ethics function's influence cheaply** — a public correction that humiliates an ally, a sign-off refusal where negotiation would deliver safeguards.
- **Rewarding a decisive but unilateral answer over one that is decisive and consensual.**
- **Missing when a candidate over-consults** on something needing action today — convening a working group for a live incident rather than a training redesign.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a data ethics lead: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested structured thinking under complexity: pattern recognition, deduction under stated rules, root-cause diagnosis, and proportionate prioritisation. The numeric section tested the denominator discipline that catches a misleading fairness statistic — rates versus counts, correct weighting, and verifying a headline back to its numerator. The verbal section tested reading policy, research, and correspondence with precision — separating finding from conjecture, reading modal verbs exactly, and resisting the pull of expert outside knowledge. The situational judgement section tested the essence of the role: mediating between stakeholders, protecting the people who disclose concerns, and pairing decisive action with the relationships the work depends on.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can reason precisely under pressure, read dense material for exactly what it does and does not establish, and mediate ethical dilemmas without losing the trust of the people they work with — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
