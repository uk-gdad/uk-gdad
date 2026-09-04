# Data Analyst (Principal Data Analyst) - Psychometric Assessments

## Introduction

This document supports an assessor — a line manager, a panel member, or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for the principal data analyst role. It gives you structured, role-specific assessment material calibrated to the seniority of the role, whether you are running an internal promotion board, an external appointment process, a development centre, or a structured interview.

Psychometric assessments are structured, standardised measures of the mental capabilities and behavioural judgement that underpin performance in a role. They matter for a principal-level appointment because the decisions the role holder makes ripple outward: a principal data analyst influences organisational decision making on data analysis, oversees continuous improvement of data practices and management across the organisation, and represents the data analyst community both inside and outside government. This assessment is built to surface evidence that a candidate can interpret complex quantitative material accurately under time pressure, extract precise meaning from dense policy and standards documentation, reason logically about analytical pipelines and data quality problems, and exercise sound professional judgement in situations involving senior stakeholders, ethical tension, and competing priorities — the capabilities the role genuinely demands.

The document is organised into four substantial sections, each covering one assessment type:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts the role genuinely handles: data models, quality dashboards, analytical code, and governance registers.
2. **Workplace job-specific numeric reasoning assessment** — interpretation of tables, percentages, ratios, budgets, capacity figures, and performance metrics of the kind that cross a principal data analyst's desk when leading data teams and quality-assuring statistical outputs.
3. **Workplace job-specific verbal reasoning assessment** — comprehension of dense role-relevant passages: data ethics policies, governance standards, ministerial briefings, and stakeholder correspondence, tested with True / False / Cannot Say and multiple-choice questions.
4. **Workplace job-specific situational judgement assessment** — realistic dilemmas involving the role's real stakeholders: directors, policy leads, junior analysts, and cross-government communities of practice.

Each section explains what the assessment measures, maps its dimensions to the specific skills in the role profile, provides a bank of practice-calibrated items with a worked answer key, and closes with administration guidance and a scoring note on common pitfalls to watch for in candidate answers.

How to administer this fairly: present the same items and hold every candidate to the same time limit for a given round of assessment. Keep the worked answers and explanations back as an answer key — they are not shown to the candidate before or during the assessment, only used by you for scoring and for the debrief afterwards. Brief the candidate on format and timing before you start, run the section under the stated time, and score against the key rather than against impression. Debrief every candidate afterwards, whatever the outcome, using the explanations in this document to talk through their answers. Treat the result as one input among several in your overall judgement — alongside the candidate's application, any interview, and other evidence — never as a standalone verdict; see the advisory below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment is a targeted psychometric test that measures the exact mental processes a role demands, rather than abstract intelligence. Unlike a generic IQ test, it presents practical workplace scenarios and data artefacts drawn from the everyday reality of the job, and it is designed to predict on-the-job performance. For a principal data analyst, that means questions built around analytical data models, data quality dashboards, statistical outputs awaiting quality assurance, reproducible code pipelines, governance registers, and project plans for varied data projects.

Administer it as an online, timed test of 15 to 30 minutes, scored objectively against a benchmark or norm group appropriate to senior analytical roles. The items below are calibrated for validity and to avoid bias, but this is not a piloted, normed instrument — treat the resulting score as indicative rather than authoritative, consistent with the advisory above. Where you can, give the candidate a short, ungraded set of practice questions first so they can get comfortable with the interface before the timed section begins. Record both speed and accuracy rather than a single pass/fail number: a considered, accurate answer is as valuable a signal as a fast one.

At this level, the assessment is less about raw processing speed and more about the quality of reasoning under constraint: can the candidate spot the flaw in a data model before it propagates into every downstream report? Can they deduce which stage of a pipeline introduced an anomaly? Can they prioritise correctly when several urgent analytical requests collide? These are the daily cognitive demands of leading significant areas of work in data analysis, and this section is designed to surface evidence of them.

### What it measures for this role

The cognitive assessment maps directly onto the skills named in the role profile:

- **Applying statistical and analytical tools and techniques.** Logical deduction and error-checking items test the mental habits behind overseeing quality assurance of statistical techniques and analytical outputs. Spotting an inconsistency between a chart and its underlying table is quality assurance in miniature.
- **Data preparation and linkage.** Pattern-recognition items using entity relationships, join keys, and data lineage diagrams mirror the role's responsibility to develop analytical data models using a deep understanding of data sources, and to set data quality standards others follow.
- **Developing code for analysis.** Sequence and logic questions echo the reasoning applied when overseeing coding standards and ensuring reproducibility of code and documentation across the organisation.
- **Data management.** Rule-application questions reflect the role's leadership of data management and governance processes — deducing what a retention schedule or access-control matrix implies for a specific dataset.
- **Managing a data project.** Prioritisation items test the trade-off reasoning applied when overseeing and advising on the planning and implementation of the project life cycle on varied data projects.
- **Delivering business impact through data.** Problem-solving items reward the ability to see which analytical intervention will actually move an organisational objective — the cognitive core of leading others to deliver scalable data products.

### Practice questions

**Question 1 (easy) — Pattern recognition in a data quality dashboard.**
A team's data quality dashboard reports completeness scores for a citizen-contact dataset over six weekly snapshots: 98.2%, 98.0%, 97.9%, 95.1%, 97.8%, 97.7%. Which observation is the most defensible?

A. Completeness is in steady long-term decline and the pipeline should be rebuilt.
B. Week 4 is an outlier against an otherwise gently declining trend, and the week 4 ingestion should be investigated as a one-off incident.
C. The dashboard is faulty because completeness cannot fall then recover.
D. The dataset became 2.7% smaller in week 4.

**Correct answer: B.**
**Explanation:** Five of the six values form a slow, near-linear drift from 98.2% to 97.7% — a decline of about 0.1 percentage points per week. Week 4's 95.1% breaks that pattern by nearly three percentage points and then the series returns to trend, which is the classic signature of a transient ingestion failure rather than a structural problem. Option A over-reacts to a single anomaly; option C wrongly assumes completeness is monotonic; option D confuses completeness (proportion of populated fields) with dataset size. At principal level, distinguishing a one-off incident from a systemic trend determines whether the role holder commissions a fix or a redesign — this item tests exactly that judgement.

**Question 2 (easy) — Rule application in data governance.**
An organisation's data management policy states: "Datasets containing personal data must have a named information asset owner, a completed data protection impact assessment (DPIA) where processing is high risk, and a retention schedule. Datasets that are fully anonymised require only a retention schedule." A new dataset contains pseudonymised case records — individuals are not directly identifiable, but re-identification is possible with a key held elsewhere. Which requirements apply?

A. Only a retention schedule, because the data is not directly identifying.
B. A named information asset owner and a retention schedule; a DPIA only if the processing is high risk.
C. All three requirements automatically, because pseudonymised data is always high risk.
D. None, because the policy does not mention pseudonymised data.

**Correct answer: B.**
**Explanation:** Pseudonymised data remains personal data because re-identification is possible, so the personal-data requirements apply: a named owner and a retention schedule unconditionally, and a DPIA conditionally "where processing is high risk". Option A wrongly treats pseudonymised as anonymised. Option C invents an automatic high-risk classification the policy does not state. Option D fails a basic deduction: the policy covers all datasets containing personal data, and pseudonymised data falls in that class. This is exactly the kind of careful rule-reading a principal data analyst models when championing governance processes across the organisation, and this item tests whether the candidate can apply it.

**Question 3 (moderate) — Logical deduction across a pipeline.**
A nightly analytical pipeline runs four stages in order: (1) extract from three source systems, (2) standardise and link records, (3) apply the analytical data model, (4) publish to the reporting layer. This morning the reporting layer shows duplicate records for roughly 8% of citizens. The candidate establishes these facts: the extract row counts match the source systems exactly; the linkage stage logged a warning that one source system changed its unique identifier format last night; the model stage ran without errors; the publish stage copied exactly what the model stage produced. Where did the duplication most plausibly originate?

A. Stage 1, because three source systems always create duplicates.
B. Stage 2, because a changed identifier format would prevent records for the same person from being matched, leaving them as apparent distinct individuals.
C. Stage 3, because analytical models multiply rows.
D. Stage 4, because publishing is the last stage before the duplicates were seen.

**Correct answer: B.**
**Explanation:** Work the evidence stage by stage. Extract counts match sources, so stage 1 introduced nothing. Stage 2 logged a warning precisely about identifier format — and record linkage depends on identifiers to recognise that two rows describe the same person. If one system's identifiers changed format, its records would fail to match their counterparts and would survive as separate "people": duplication by *failed matching*, not by row multiplication. Stages 3 and 4 are exonerated by clean runs and exact copies. Option D commits the classic error of blaming the point of discovery rather than the point of origin. Diagnosing failures by reasoning over lineage evidence is core to overseeing continuous improvement of data practices.

**Question 4 (moderate) — Error checking a statistical output.**
A junior analyst the candidate mentors submits a report stating: "Median processing time fell from 12 days to 9 days, a 33% improvement. The mean fell from 15 days to 14 days. Since both averages improved, performance improved uniformly across all cases." Which single criticism is the most important quality-assurance challenge?

A. The percentage is wrong: a fall from 12 to 9 is a 25% improvement, not 33%.
B. Medians should never be used for processing times.
C. The conclusion of uniform improvement does not follow: a falling median with a nearly static mean suggests the longest cases barely improved, so improvement was not uniform.
D. Means and medians can never both improve at once.

**Correct answer: C.**
**Explanation:** Option A is a genuine arithmetic error — (12 − 9) / 12 = 25% — and worth correcting, but it is a detail. The most important challenge is C, because the *inference* is unsafe: the median dropped 3 days while the mean dropped only 1, which mathematically requires that the upper tail (the slowest cases) improved far less than the middle. Claiming "uniform" improvement misleads decision makers about precisely the cases they most care about. Options B and D are simply false statements about statistics. The role requires overseeing the quality assurance of analytical outputs — and the highest-value QA catches invalid conclusions, not just wrong numbers, which is what this item tests.

**Question 5 (moderate) — Prioritisation under competing demands.**
It is 09:15 on Monday. Four items await the candidate: (i) a director needs a one-page brief by 12:00 for a board discussion on the data strategy; (ii) a junior analyst is blocked on a data model question and cannot progress today's sprint work without the candidate's steer; (iii) a monthly statistical publication due Thursday has failed an automated quality check overnight; (iv) an external conference has emailed asking them to confirm a speaking slot by Friday. What is the most defensible ordering of the first three actions?

A. (iv), (i), (ii) — clear the quick email first.
B. (ii), (iii), (i) — unblock people, then fix quality, then write the brief.
C. (i), (ii), (iii) — hardest deadline first, then unblock the analyst, then start the quality investigation which has slack until Thursday.
D. (iii), (iv), (i) — quality is always first.

**Correct answer: C.**
**Explanation:** Prioritisation is deadline-and-dependency reasoning, not a fixed hierarchy of virtues. The board brief has the hardest, nearest deadline (12:00 today) and directly serves the role's accountability to influence organisational decision making. Unblocking the analyst comes next: a few minutes of the candidate's time restores a whole day of theirs — high leverage, and the cost of delay compounds hourly. The failed quality check matters greatly but has runway until Thursday; beginning it third still leaves ample time, and a strong candidate might delegate the initial investigation when unblocking the analyst. The conference reply has four days of slack and belongs at the end of the day. Option B undervalues the immovable 12:00 deadline; options A and D order by habit ("quick wins first", "quality always first") rather than by reasoning.

**Question 6 (moderate) — Pattern recognition in code review.**
Reviewing analytical code for reproducibility, the candidate sees four scripts. Script 1 reads data from a dated, versioned snapshot and sets a random seed. Script 2 reads from the live database "as of now" and sets a random seed. Script 3 reads from a dated snapshot and uses unseeded random sampling. Script 4 reads from the live database and uses unseeded random sampling. Ranked from most to least reproducible, the correct order is:

A. 1, 2, 3, 4
B. 1, 3, 2, 4
C. 2, 1, 4, 3
D. 4, 3, 2, 1

**Correct answer: B.**
**Explanation:** Reproducibility requires both fixed inputs and deterministic processing. Script 1 has both — fully reproducible. Between scripts 2 and 3, consider what actually varies: script 3's input is frozen (a dated snapshot) and only its sampling varies, so re-running it explores a stable dataset and its results can be bounded and re-created in distribution; script 2's *input itself* changes with every run because "as of now" is a moving target, so even its seeded logic operates on different data each time — and the input is the larger source of irreproducibility. Script 4 fixes nothing. Hence 1, 3, 2, 4. Ensuring reproducibility of code across the organisation is an explicit duty at this level, and this item tests whether the candidate recognises which sources of variation dominate.

**Question 7 (moderate) — Deduction from a data model.**
In an analytical data model: every Case links to exactly one Citizen; a Citizen may have many Cases; every Payment links to exactly one Case. An analyst reports that a query counting Payments per Citizen returns more Payments than exist in the Payment table. What is the most plausible cause?

A. Some Citizens have no Cases.
B. The join path from Payment to Case to Citizen was written with a join condition that matches on a non-unique field, fanning out rows.
C. Payments genuinely increased during the query.
D. The Payment table has too few rows.

**Correct answer: B.**
**Explanation:** Under the stated model, Payment→Case is many-to-one and Case→Citizen is many-to-one, so joining along those keys can never inflate the Payment count — each Payment reaches exactly one Citizen. If the count *grew*, the join must not be following the declared keys: joining on a non-unique field (say, a case reference that repeats across years) duplicates payment rows — the classic fan-out. Option A would reduce or leave counts unchanged, never inflate them. Options C and D do not explain inflation relative to the table itself. Reasoning from cardinalities to what is and is not possible is the deep understanding of data sources the role profile demands, and it is precisely what a principal data analyst teaches when mentoring others in data quality and modelling. This item tests whether the candidate reasons the same way.

**Question 8 (moderate) — Problem solving on training capability gaps.**
The candidate has identified a data visualisation capability gap across four teams. A skills audit shows: Team A — strong charting skills, weak accessibility practice; Team B — weak charting, weak accessibility; Team C — strong in both; Team D — strong accessibility, weak charting. Exactly two training modules can be commissioned this quarter: "Accessible visualisation" and "Charting fundamentals". Team C can coach one other team instead of attending training. Which allocation closes the most gaps?

A. Send A and B to Accessible visualisation; send D to Charting fundamentals; Team C coaches B on charting.
B. Send all four teams to both modules.
C. Send A to Charting fundamentals and D to Accessible visualisation.
D. Team C coaches everyone; commission no modules.

**Correct answer: A.**
**Explanation:** List the actual gaps: A needs accessibility; B needs both; D needs charting; C needs nothing. Option A covers A's accessibility gap, B's accessibility gap, and D's charting gap through the two modules, and closes B's remaining charting gap through C's coaching — all five gaps closed. Option B wastes training on teams already strong (and exceeds any sensible budget). Option C trains A and D in the skills they already have — it closes zero gaps. Option D closes at most one team's gaps, since C can coach only one team. Identifying capability gaps and implementing appropriate training is a named duty in the data visualisation skill for this role; this question tests its logical core: matching interventions to actual deficits.

**Question 9 (hard) — Logical deduction on conflicting quality reports.**
Three quality checks run on the same published dataset. Check X (schema validation) passes. Check Y (row-count reconciliation against source) fails, reporting 2,140 fewer rows than source. Check Z (aggregate-total reconciliation) passes, with published totals matching source totals exactly. All three checks are known to be individually reliable. Which conclusion follows most strongly?

A. Check Y is wrong because two checks passed and only one failed.
B. The missing 2,140 rows must all carry zero or null values in the aggregated fields, since their absence changes counts but not totals.
C. The dataset is fine because totals match.
D. The source system deleted rows after extraction.

**Correct answer: B.**
**Explanation:** Treat each check as evidence. Y failing means rows are genuinely missing (Y is reliable). Z passing means the aggregate totals are nonetheless identical. Both can be true simultaneously only if the missing rows contribute nothing to the aggregates — that is, they hold zeros or nulls in the summed fields. Option A resolves the conflict by majority vote, which is not how evidence works: the checks measure different things and are all reliable. Option C ignores that 2,140 records — perhaps representing real citizens — are absent, which could bias any non-total analysis such as counts by region. Option D is speculation with no supporting evidence and does not reconcile Z passing. This deduction pattern — holding multiple true facts together until only one explanation survives — is the reasoning behind overseeing quality assurance and continually improving practices.

**Question 10 (hard) — Prioritisation with strategic trade-offs.**
An organisation's executive committee asks the candidate to recommend one of three data products for immediate investment: (i) a real-time operational dashboard for one directorate, delivering value in 6 weeks to 40 users; (ii) a linked analytical dataset joining three departmental sources, delivering value in 6 months but enabling an estimated 12 future products across the whole organisation; (iii) an automated statistical publication saving 3 analyst-days a month starting in 4 weeks. The organisational data strategy names "building shared, reusable data foundations" as its top priority for the next two years. Which recommendation best serves the candidate's remit?

A. Product (i), because fastest visible value builds credibility for data.
B. Product (iii), because guaranteed efficiency savings are lowest risk.
C. Product (ii), because it is the only option that directly delivers the strategy's stated top priority and multiplies future delivery capacity, and the longer payback should be communicated openly.
D. Split investment three ways to avoid disappointing anyone.

**Correct answer: C.**
**Explanation:** At principal level the role holder is expected to lead others in delivering scalable data products that align to organisational objectives — and the objective here is explicit: shared, reusable foundations. Product (ii) is the only candidate that is foundational and scalable (12 downstream products). Options A and B optimise for local, short-term wins against a strategy that has already made the trade-off the other way; choosing them substitutes personal preference for the organisation's stated priority without argument. Option D avoids the decision — spreading investment thinly typically means nothing reaches usable maturity, and executives asked for *one* recommendation. Note the honest caveat in C about payback: strategically communicating the business impact of data includes communicating its timeline truthfully.

**Question 11 (hard) — Error checking a visualisation against its data.**
A draft slide for the board shows a bar chart titled "Data quality incidents halved this year". The bars show 48 incidents last year and 31 this year. The vertical axis starts at 25 rather than zero. The underlying table also shows that this year has two months remaining. Identify the complete set of problems.

A. Only the axis truncation.
B. Only the incomplete year.
C. The claim "halved" is arithmetically wrong (31 is a 35% reduction, not 50%); the truncated axis visually exaggerates the fall; and the year-to-date figure is compared against a full year, biasing the comparison further in the claim's favour.
D. There are no problems; 31 is roughly half of 48.

**Correct answer: C.**
**Explanation:** Three independent flaws compound in the same direction. First, arithmetic: halving 48 gives 24, and (48 − 31) / 48 ≈ 35.4% — "halved" overstates the improvement. Second, visual integrity: starting the axis at 25 makes the 31 bar appear about a quarter of the height of the 48 bar, dramatising the difference; bar charts encode value by length, so their baseline must be zero. Third, denominator fairness: with two months still to run, this year's count will likely rise, so the comparison flatters the current year. Option D's "roughly half" is exactly the imprecision a principal must challenge before it reaches a board. Setting and advocating standards in data visualisation means catching all three classes of error — numerical, perceptual, and methodological — not just the most visible one.

**Question 12 (hard) — Problem solving across the project life cycle.**
A six-month data project the candidate oversees is at the end of month two. The problem statement, agreed with the sponsoring director, was "identify which service channels drive avoidable contact". The delivery team now reports that the channel-identifier field needed for the analysis is reliably populated in only 30% of records, and backfilling it would take four months. Which option best reflects sound project reasoning?

A. Continue as planned; four months of backfill still fits within six months.
B. Pause and convene the sponsor: present the data limitation, and offer re-scoped options — for example, analysing the reliably-populated 30% with clearly stated caveats about representativeness, or answering a nearby question the data can support — and let the sponsor choose with full knowledge.
C. Quietly switch to analysing the 30% and present the results as if they covered all contact.
D. Cancel the project because the data is inadequate.

**Correct answer: B.**
**Explanation:** Test option A against the timeline: four months of backfill starting at month two consumes the entire remaining schedule, leaving zero time for the actual analysis — it does not fit. Option C is an integrity failure: results from a 30% subset may be systematically unrepresentative (perhaps one channel populates the field far more reliably), and concealing that misleads the decision it was meant to inform. Option D discards recoverable value without consulting the person accountable for it. Option B does what the role profile calls advising on problem statement development and leading stakeholder relationships: surface the constraint early, translate it into decision-ready options, and keep the sponsor in control of the trade-off. Bad news early with options attached is a hallmark of principal-level project judgement.

**Question 13 (hard) — Integrative reasoning on standards adoption.**
The candidate proposes a new organisation-wide standard requiring all analytical code to be version-controlled with peer review before publication. Evidence gathered: Team P adopted it voluntarily and cut published errors by 40%; Team Q says review adds two days to small jobs; Team R publishes daily statistics under statutory deadlines; Team S has no members trained in version control. Which implementation plan reasons correctly from all four facts?

A. Mandate the full standard immediately for all teams; the 40% figure proves it works everywhere.
B. Abandon the standard; Team Q's objection shows it is unworkable.
C. Phase the rollout: mandate it now for routine outputs, create a proportionate lightweight review path for small jobs (addressing Q), agree a pre-approved rapid procedure for statutory daily publications (addressing R), and fund version-control training for S before their compliance date.
D. Apply the standard only to Team P, since only they have proven it works.

**Correct answer: C.**
**Explanation:** Each fact constrains a good plan. P's result supports the standard's value but is one team's experience, not universal proof — so option A over-generalises. Q's two-day cost is a proportionality problem, solved by right-sizing review to job size, not by abandonment — so option B over-corrects from a single objection. R's statutory deadlines demand a designed-in rapid path, otherwise the standard forces a choice between compliance and legal duty. S's skills gap makes immediate mandating unfair and unachievable; training first makes compliance possible. Option D confines the benefit to where it is least needed. Option C is the only plan that answers all four constraints, and it mirrors the role's duties to contribute to coding standards across the organisation, implement training requirements, and share good practice in adapting teams' ways of working.

### Administration guidance

- **Give the candidate time to settle.** Before the timed section, run the ungraded practice questions so the candidate is comfortable with the format and any interface, and confirm they understand how to flag and return to a question.
- **State the time limit up front and hold it consistently.** With 15 to 30 minutes total, tell every candidate the same limit and the same rough pace (a minute or two per question), and apply it identically across candidates for a given round.
- **Score speed and accuracy separately.** A considered, correct answer is as valuable a signal as a fast one; record both so a candidate who works carefully is not penalised against one who rushes and errs.
- **Watch for evidence-first reasoning, not guessing.** In pipeline and diagnosis items (Questions 3 and 9), a strong candidate lists the established facts and eliminates the stages or causes they exonerate, rather than naming the most familiar culprit.
- **Note whether a candidate reads every option before answering.** At this level the distractors are plausible, and the best answer often differs from a good answer only in completeness (Questions 11 and 13) — a candidate who answers before reading every option risks missing that.
- **Provide a quiet, properly equipped setting.** A stable connection and an undisturbed room remove environmental noise from the score, and are your responsibility to arrange, not the candidate's to guess at.

### Scoring guidance: common pitfalls to watch for

- **Blaming the point of discovery rather than the point of origin.** As in Question 3, errors surface downstream of where they are created; watch for candidates who trace lineage backwards before concluding, rather than pointing at the last stage they saw.
- **Answering from habit rather than from the scenario.** "Quality first" or "quick wins first" are slogans, not reasoning; a strong answer reasons from the specific deadlines and dependencies given rather than from a fixed rule.
- **Stopping at the first flaw found.** Senior-level items often contain multiple compounding problems (Question 11); note whether the candidate's answer captures the complete set the question asks for.
- **Over-calculating when deduction suffices.** Many cognitive items yield to elimination — establishing what the stated rules make impossible — faster than to computation; this is a useful thing to listen for in how a candidate talks through their reasoning at debrief.
- **Losing time to one stubborn item.** One multi-stage problem can consume the time budget for three easier ones; if a candidate appears stuck, this is useful debrief material even though you should not intervene during the timed section itself.
- **Assuming access to real-world workarounds.** In the assessment the candidate cannot email a colleague or query the database; scoring is based only on what the item provides, and it is worth explaining this constraint clearly before the section starts.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make logical decisions using numerical data presented in the formats the role genuinely handles. It mimics the data-handling demands of the job, focusing on applied business mathematics — percentages, ratios, rates, budget allocations, and cost-benefit estimations — rather than abstract formulae. Question inputs are typically graphs, tables, budget statements, capacity plans, and performance dashboards.

For a principal data analyst this is home territory, so do not mistake familiarity for an easy pass: the assessment tests careful extraction and manipulation of figures under a strict time limit, usually less than ninety seconds per question. Provide an on-screen or physical calculator, because the intent is to measure interpretation and reasoning rather than mental arithmetic. Expect multi-step questions: read a value from a table, adjust it by a percentage, combine it with a second value, and compare the result against a threshold or a rival option.

At this level the numerical content skews towards the figures a principal data analyst stewards rather than produces: team budgets and day rates, publication performance metrics, data quality percentages, capacity and demand projections, weighted survey results, and the cost cases behind data products. This is the same reasoning the role applies when quality-assuring a junior analyst's workings or challenging a benefits estimate in a business case — performed quickly, accurately, and without help, which is what this section is designed to test.

### What it measures for this role

- **Applying statistical and analytical tools and techniques.** Percentage change, weighted averages, rates, and index numbers are the raw material of the statistical insights and reports the role oversees; the assessment checks a candidate manipulates them flawlessly at speed, which underpins credible quality assurance of others' outputs.
- **Delivering business impact through data.** Cost-benefit items — payback periods, savings projections, benefit-per-pound comparisons — test the numeracy behind strategically communicating the business impact of data and deciding when to pivot investment.
- **Managing a data project.** Budget burn rates, resource day calculations, and schedule arithmetic reflect the oversight of planning and implementation across the project life cycle on varied data projects.
- **Data preparation and linkage.** Reconciliation arithmetic — row counts, match rates, completeness percentages — mirrors the data quality standards the role sets and the linkage work it supervises.
- **Data visualisation.** Reading values accurately from charts and tables, including scale qualifiers such as "in thousands", is the quantitative bedrock of the visualisation standards the role advocates.
- **Communicating between the technical and non-technical.** Several items ask the candidate to select the correct plain-English statement of a numerical result — the translation task performed for stakeholders at all levels.

### Practice questions

**Question 1 (easy) — Percentage change in a performance metric.**
A team's monthly statistical publication was downloaded 12,400 times in April and 14,880 times in May. What was the percentage increase?

A. 15%  B. 20%  C. 24.8%  D. 25%

**Correct answer: B.**
**Explanation:** Increase = 14,880 − 12,400 = 2,480. Percentage increase = 2,480 ÷ 12,400 = 0.20 = 20%. A common error is dividing by the *new* figure: 2,480 ÷ 14,880 ≈ 16.7%, which is not offered but shows why the denominator matters — percentage change is always measured against the starting value. Distractor C comes from misreading 2,480 as a percentage of 10,000.

**Question 2 (easy) — Data quality match rate.**
A record linkage exercise attempts to match 68,000 hospital records to a population register. 61,200 match automatically, 4,080 match after clerical review, and the remainder fail to match. What proportion of records ultimately failed to match?

A. 4%  B. 6%  C. 10%  D. 2,720 records cannot be expressed as a proportion

**Correct answer: A.**
**Explanation:** Total matched = 61,200 + 4,080 = 65,280. Unmatched = 68,000 − 65,280 = 2,720. Proportion = 2,720 ÷ 68,000 = 0.04 = 4%. Distractor B is the clerical-review share (4,080 ÷ 68,000 = 6%); distractor C is the total non-automatic share (6,800 ÷ 68,000 = 10%). Read the question stem precisely: it asks about *ultimate* failures, after both matching passes. Setting data quality standards means knowing exactly which denominator and numerator each published rate uses.

**Question 3 (easy) — Team budget arithmetic.**
A data analysis team has an annual staffing budget of £840,000. Contractor day rates average £600 and each contractor works 220 days per year. If 25% of the budget is allocated to contractors, how many full-time-equivalent contractors can be funded?

A. 1.4  B. 1.59  C. 2.1  D. 3.18

**Correct answer: B.**
**Explanation:** Contractor budget = 25% × £840,000 = £210,000. Annual cost per contractor = £600 × 220 = £132,000. Number fundable = £210,000 ÷ £132,000 ≈ 1.59 FTE. Distractor D doubles the answer by taking 50% of budget; distractor A uses a 200-day year. In practice this would round to a hiring decision, but the assessment wants the exact quotient — check whether the candidate's working shows they noticed what the question actually asks for.

**Question 4 (moderate) — Weighted average across teams.**
Three teams respond to a data maturity survey. Team A: 20 staff, average score 3.6. Team B: 35 staff, average score 2.8. Team C: 15 staff, average score 4.0. What is the organisation-wide average score, weighted by staff numbers?

A. 3.30  B. 3.47  C. 3.26  D. 3.13

**Correct answer: C.**
**Explanation:** Weighted sum = (20 × 3.6) + (35 × 2.8) + (15 × 4.0) = 72 + 98 + 60 = 230. Total staff = 20 + 35 + 15 = 70. Weighted average = 230 ÷ 70 ≈ 3.26. Distractor B is the unweighted mean of the three team scores ((3.6 + 2.8 + 4.0) ÷ 3 ≈ 3.47), the single most common weighting error and one a candidate at this level must catch instantly when quality-assuring analytical outputs: the largest team scored lowest, so the true average sits below the naive mean.

**Question 5 (moderate) — Reading a table with scale qualifiers.**
A capacity table shows monthly records processed (in thousands): January 310, February 288, March 342. A pipeline's contracted capacity is 3.6 million records per quarter. By how many records did Q1 processing fall short of, or exceed, contracted capacity?

A. Exceeded by 340,000  B. Fell short of by 2,660,000  C. Fell short of by 340,000  D. Exceeded by 940 records

**Correct answer: B.**
**Explanation:** Q1 total = (310 + 288 + 342) thousand = 940 thousand = 940,000 records. Contracted capacity = 3,600,000. Shortfall = 3,600,000 − 940,000 = 2,660,000 records. The trap is the "in thousands" qualifier: reading 940 as raw records (distractor D) or mixing units between the table (thousands) and the contract (millions) produces distractors A and C. A candidate should normalise all figures to the same unit before comparing — the classic chart-label pitfall named in assessment guidance.

**Question 6 (moderate) — Cost-benefit of automation.**
Automating a statistical publication costs £45,000 to build and £500 per month to run. It saves 3 analyst-days per month, and an analyst-day is costed at £350. Approximately how many months until cumulative savings equal cumulative costs?

A. 43 months  B. 82 months  C. 30 months  D. Never — running costs exceed savings

**Correct answer: B.**
**Explanation:** Monthly saving = 3 × £350 = £1,050. Net monthly benefit = £1,050 − £500 = £550. Payback = £45,000 ÷ £550 ≈ 81.8, so about 82 months. Distractor A ignores running costs (£45,000 ÷ £1,050 ≈ 43). Distractor C misreads analyst-days as analyst-weeks. This is the arithmetic behind deciding when to pivot: a seven-year payback on a tool with a plausible five-year life is a case a principal data analyst should challenge, however attractive "automation" sounds — exactly the constructive challenge the role applies to proposed investments.

**Question 7 (moderate) — Percentage points versus percentages.**
Completeness of a key dataset improved from 84% to 91%. Which statement is numerically correct?

A. Completeness improved by 7%.
B. Completeness improved by 7 percentage points, an 8.3% relative improvement.
C. Completeness improved by 8.3 percentage points.
D. Completeness improved by 91%.

**Correct answer: B.**
**Explanation:** The absolute change is 91 − 84 = 7 percentage points. The relative change is 7 ÷ 84 ≈ 0.083 = 8.3%. Option A commits the pervasive conflation of points with percent; option C swaps the two figures. As the person who oversees quality assurance of statistical outputs and communicates between the technical and non-technical, a principal data analyst must both compute and phrase this correctly — this item tests whether the candidate does. A minister told "7%" when the truth is "7 percentage points" has been misinformed, and the distinction routinely changes headlines.

**Question 8 (moderate) — Project burn rate.**
A 30-week data project has a budget of £360,000. At week 12, £168,000 has been spent and the project is 35% complete by earned value. If spending continues at the current weekly rate, and the remaining work proceeds at the current rate of completion, will the project finish within budget, and roughly when will the work complete?

A. Within budget, completing at week 30.
B. Over budget by about £120,000, completing around week 34.
C. Over budget by about £60,000, completing around week 32.
D. Under budget by £24,000, completing at week 28.

**Correct answer: B.**
**Explanation:** Current spend rate = £168,000 ÷ 12 = £14,000 per week. Completion rate = 35% ÷ 12 ≈ 2.917% per week, so 100% takes 100 ÷ 2.917 ≈ 34.3 weeks. Total forecast cost = 34.3 × £14,000 ≈ £480,000, which is about £120,000 over the £360,000 budget, finishing around week 34. Distractor A assumes plan equals reality; distractor C halves the overrun by projecting cost over 30 weeks but time over 34 — an inconsistent hybrid. Overseeing the project life cycle means running exactly this forecast the moment actuals diverge from plan, not at week 29.

**Question 9 (moderate) — Ratios in team composition.**
Best practice in an organisation recommends a ratio of one senior analyst to every four analysts, and one principal to every three seniors. A growing directorate will have 48 analysts next year. How many seniors and principals does the recommended structure imply?

A. 12 seniors and 4 principals
B. 12 seniors and 3 principals
C. 16 seniors and 4 principals
D. 8 seniors and 2 principals

**Correct answer: A.**
**Explanation:** Seniors = 48 ÷ 4 = 12. Principals = 12 ÷ 3 = 4. Distractor B rounds the principal calculation down incorrectly (12 ÷ 3 is exactly 4); distractor C inverts the first ratio as 1:3. Ratio chains like this appear whenever a principal data analyst advises on workforce plans or training requirements — set out each link explicitly and the arithmetic stays honest. It is worth checking whether a candidate's working shows a sanity check on the whole structure (48 + 12 + 4 = 64 staff, ratios 4:1 and 3:1 — consistent).

**Question 10 (hard) — Comparing options per unit of benefit.**
Two data products compete for funding. Product X costs £96,000 and is forecast to serve 1,600 users, saving each 45 minutes per month. Product Y costs £150,000 and is forecast to serve 3,000 users, saving each 30 minutes per month. Valuing staff time at £30 per hour, which product has the better first-year return per pound invested?

A. Product X, returning about £4.50 per £1.
B. Product Y, returning about £3.60 per £1.
C. Product X, returning about £2.70 per £1.
D. They are equal.

**Correct answer: A.**
**Explanation:** Work each product through the same four steps: value per user per month, total per month, total per year, return per pound. Product X: 45 minutes = 0.75 hours; 0.75 × £30 = £22.50 per user per month; × 1,600 users = £36,000 per month; × 12 = £432,000 per year; ÷ £96,000 cost = £4.50 returned per £1 invested. Product Y: 30 minutes = 0.5 hours; 0.5 × £30 = £15 per user per month; × 3,000 users = £45,000 per month; × 12 = £540,000 per year; ÷ £150,000 = £3.60 per £1. So X wins on return per pound even though Y delivers the larger absolute annual benefit (£540,000 versus £432,000) — the question asks for return *per pound invested*, and reading the required metric precisely is half the item. Distractor B is Y's genuine figure, tempting if a candidate stops after noticing Y's bigger gross benefit; distractor C understates X by mishandling the minutes-to-hours conversion (using 0.45 hours instead of 0.75). When communicating the business impact of data, being able to say "Y saves more in total, but X returns 25% more per pound" is exactly the framing that helps executives decide — and in a funding round with limited capital, the per-pound view usually governs.

**Question 11 (hard) — Sampling and confidence in a quality audit.**
A candidate audits a 250,000-record dataset by sampling 2,000 records; 96 contain errors. The business asks: "So about how many records in the full dataset are wrong?" Which reply is the most accurate and honest?

A. "Exactly 12,000 records are wrong."
B. "Around 4.8% — roughly 12,000 records — subject to sampling uncertainty of about plus or minus 1 percentage point, so plausibly between about 9,500 and 14,500."
C. "96 records are wrong."
D. "We cannot say anything without checking all 250,000."

**Correct answer: B.**
**Explanation:** Sample error rate = 96 ÷ 2,000 = 4.8%. Scaled to the population: 4.8% × 250,000 = 12,000. But a sample estimate carries uncertainty: the standard error of a 4.8% proportion on n = 2,000 is √(0.048 × 0.952 ÷ 2000) ≈ 0.48 percentage points, so a 95% interval spans roughly ±0.94 points — about 3.9% to 5.7%, or 9,650 to 14,350 records; option B's rounded range is a fair plain-English rendering. Option A presents an estimate as an exact count — the kind of false precision a principal data analyst exists to challenge. Option C confuses the sample with the population; option D wrongly claims sampling tells us nothing. Communicating between the technical and non-technical means giving decision makers the estimate *and* its uncertainty in words they can use.

**Question 12 (hard) — Index numbers and real-terms budgets.**
A data team's budget was £500,000 in 2023-24 and is £530,000 in 2025-26. The relevant deflator index rose from 100 to 109 over the same period. In real (2023-24) terms, what has happened to the budget?

A. Increased by 6% in real terms.
B. Increased by £30,000 in real terms.
C. Decreased by about 2.8% in real terms.
D. Unchanged in real terms.

**Correct answer: C.**
**Explanation:** Deflate the later budget to 2023-24 prices: £530,000 × (100 ÷ 109) ≈ £486,239. Real change = (£486,239 − £500,000) ÷ £500,000 ≈ −2.75%, a real-terms cut of about 2.8% despite the £30,000 cash increase. Distractors A and B report the nominal change; D assumes the cash uplift exactly offsets inflation (it would need to be £545,000 to do so). When influencing organisational decision making on the use of data, distinguishing cash from real terms is essential — a "budget increase" headline can mask a genuine reduction in what the team can deliver.

**Question 13 (hard) — Multi-source reconciliation.**
Three source systems feed a linked analytical dataset. This month: System 1 supplied 142,000 records of which 3.5% failed validation; System 2 supplied 88,500 records of which 2.0% failed; System 3 supplied 66,000 records of which 6.5% failed. Records failing validation are excluded from linkage. How many records entered linkage, and what was the overall exclusion rate?

A. 285,470 records; 3.7% excluded
B. 296,500 records; 4.0% excluded
C. 284,640 records; 4.0% excluded
D. 285,470 records; 4.2% excluded

**Correct answer: A.**
**Explanation:** Compute each system's failures separately, because the failure rates differ. System 1: 142,000 × 0.035 = 4,970 (split it as 142,000 × 0.03 = 4,260 plus 142,000 × 0.005 = 710 if that is easier under pressure). System 2: 88,500 × 0.02 = 1,770. System 3: 66,000 × 0.065 = 4,290. Total failures = 4,970 + 1,770 + 4,290 = 11,030. Total supplied = 142,000 + 88,500 + 66,000 = 296,500. Records entering linkage = 296,500 − 11,030 = 285,470. Overall exclusion rate = 11,030 ÷ 296,500 ≈ 3.72%, which rounds to 3.7%. Distractor B pairs the *supplied* total with a rate built from the naive average of the three failure rates ((3.5 + 2.0 + 6.5) ÷ 3 = 4.0%) — wrong twice over, because the systems contribute very different volumes and the low-failure System 1 is the largest; this is the same unweighted-average error as Question 4 in different clothing. Distractor C applies that flawed 4.0% rate to compute the surviving records; distractor D has the right count but a rate using only Systems 1 and 3. The habit this item rehearses is the reconciliation arithmetic behind the data quality standards a principal data analyst sets: totals, exclusions, and rates must all derive from the same weighted calculation, and any published rate should be re-derivable from its published numerator and denominator.

**Question 14 (hard) — Interpreting a performance dashboard for a decision.**
A dashboard shows four data products' quarterly figures. Product P: 4,200 active users, up 5% on last quarter, cost £30,000 per quarter. Product Q: 1,100 users, up 40%, cost £22,000. Product R: 6,800 users, down 3%, cost £41,000. Product S: 300 users, up 2%, cost £28,000. The executive committee will retire one product. On cost per active user and trajectory combined, which product is the strongest candidate for retirement?

A. Product P (£7.14 per user, growing)
B. Product Q (£20.00 per user, growing fast)
C. Product R (£6.03 per user, declining slightly)
D. Product S (£93.33 per user, near-flat)

**Correct answer: D.**
**Explanation:** Compute cost per active user: P = £30,000 ÷ 4,200 ≈ £7.14; Q = £22,000 ÷ 1,100 = £20.00; R = £41,000 ÷ 6,800 ≈ £6.03; S = £28,000 ÷ 300 ≈ £93.33. S costs four to fifteen times more per user than the others and its 2% growth offers no realistic path to efficiency. Q's £20 looks high, but 40% quarterly growth means its cost per user is falling rapidly — next quarter at similar cost and 1,540 users it would be about £14.29. R's slight decline merits investigation, not retirement, at the portfolio's best unit cost. The principal-level lesson: unit economics and trajectory together, not either alone, drive portfolio decisions — this is how a principal data analyst strategically communicates the business impact of data and leads decisions about where to pivot.

**Question 15 (hard) — Compound growth in demand forecasting.**
Requests to a data team have grown 8% per quarter for the past year and stand at 1,250 this quarter. Each request takes an average of 0.6 analyst-days, and the team has 14 analysts each with 55 productive days per quarter. If growth continues at 8% per quarter, in roughly how many quarters will demand exceed team capacity?

A. Demand already exceeds capacity.
B. About 1 quarter.
C. About 4 quarters.
D. About 9 quarters.

**Correct answer: B.**
**Explanation:** Capacity = 14 × 55 = 770 analyst-days per quarter. Current demand = 1,250 × 0.6 = 750 analyst-days — just under capacity, so option A fails (although the 97% utilisation should already be a warning sign). Next quarter's demand = 750 × 1.08 = 810 analyst-days, which exceeds 770 — so capacity is breached in about one quarter. Distractor C comes from comparing request *counts* (1,250) against capacity in *days* (770) and growing the wrong quantity; distractor D assumes linear growth of 8% of the original value each quarter and a much larger buffer. Two habits matter here: converting demand and capacity into the same unit (analyst-days) before comparing, and respecting compounding — 8% quarterly is roughly 36% a year, not 32%. This is precisely the forward look needed when influencing organisational decision making on resourcing data analysis: a team that looks 97% "fine" today is over capacity within twelve weeks.

### Administration guidance

- **Provide the calculator the candidate will use, in advance if possible.** An unfamiliar on-screen calculator can cost time that has nothing to do with numeric reasoning; let the candidate try it during any practice items.
- **State the unit-normalisation expectation, not the answer.** Where a table uses "in thousands" against a contract stated in millions (Question 5), a strong candidate's working shows them converting to a common unit before comparing — worth noting for the debrief.
- **Watch for estimation before calculation.** A rough order-of-magnitude check ("about 4% of 250,000 is about 10,000") is a strong-candidate habit that catches keying errors; its absence is a useful debrief point even where the final answer is right.
- **Note whether the candidate's method is visible in steps.** For multi-stage items, a candidate who narrates or writes out each step (extract, adjust, combine, compare) is easier to score fairly on partial understanding if your process allows for it.
- **Hold the time limit consistently.** Multi-step items can absorb disproportionate time; if you allow candidates to move between questions, apply the same rule to everyone.
- **Score reasoning, not calculator speed.** A candidate who works methodically and finishes with time to spare is not weaker than one who rushes; record accuracy alongside pace.

### Scoring guidance: common pitfalls to watch for

- **Misreading chart and table labels.** Watch for candidates confusing monthly with quarterly data, or ignoring scale qualifiers such as "in thousands" or "in millions" (Question 5).
- **Averaging rates without weighting.** Whenever groups differ in size, the naive mean of their rates is wrong (Questions 4 and 13); check whether the candidate's working shows weights applied.
- **Confusing percentage points with percentages.** A change from 84% to 91% is 7 points but 8.3% (Question 7) — worth probing explicitly at debrief given how often this distinction reaches published material.
- **Using the wrong base for percentage change.** Dividing the change by the new value instead of the original value flatters or understates every comparison.
- **Over-calculating.** Performing precise long division when estimation or elimination would reveal the answer faster is not itself an error, but it costs time a candidate may need elsewhere.
- **Time-sink questions.** One five-step forecasting item can consume the time of three simpler ones; if a candidate runs out of time, check whether it was lost on one item.
- **Presenting sample estimates as exact counts.** As in Question 11, false precision is a numerical *and* a communication error; a strong candidate hedges the estimate honestly rather than stating a false-precise figure.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written business information. It mirrors the exact reading demands of the role: dense passages drawn from policy documents, governance standards, official reports, and stakeholder correspondence, followed by questions that test whether a given statement is **True** (definitely follows from the passage), **False** (definitely contradicts the passage), or **Cannot Say** (the passage provides insufficient information either way), plus some multiple-choice comprehension items.

Two rules define the format. First, fact-based logic: the candidate must answer based strictly on the text provided, setting aside their own expertise — a discipline that can feel counter-intuitive for an experienced candidate who knows the real policy landscape well, and worth flagging before the section starts. Second, time pressure: allow less than a minute per question, simulating the reality of absorbing a briefing minutes before a meeting.

For this role the passages will feel familiar to the candidate: data ethics and privacy policies, data management standards, publication protocols, project governance documents, and emails from directors and external partners. The skill under test is the precise reading that underpins the job — assessing and constructively challenging proposed data ethics policies, mediating between stakeholders who have each read the same document differently, and representing the profession's position accurately in high-stakes forums. A principal who misreads "should" as "must", or treats a proposal as a decision, propagates that error across an entire organisation — this section is designed to surface whether the candidate does.

### What it measures for this role

- **Data ethics and privacy.** Passages modelled on ethics frameworks and privacy policies test whether the candidate can extract exactly what a policy requires, permits, and stays silent on — the foundation of working with stakeholders to identify and address ethical and privacy concerns, and of constructively challenging proposed policies.
- **Data management.** Standards and governance texts test the rule-precise reading behind championing and leading data management and governance processes, and defining data management responsibilities.
- **Communicating between the technical and non-technical.** Comprehension items about tone, audience, and main message test the translation instinct the role uses when mediating between people and moderating difficult discussions about high-risk topics.
- **Managing a data project.** Project documentation passages test the candidate's ability to spot what a problem statement actually commits to — central to advising on problem statement development and ensuring standards are met.
- **Applying statistical and analytical tools and techniques.** Passages about methodology and quality assurance test whether the candidate can distinguish what a report claims, assumes, and merely suggests — the reading half of overseeing the quality assurance of analytical outputs.
- **Data visualisation.** Text about visualisation and accessibility standards tests the careful reading behind setting and advocating new standards in inclusive, accessible data visualisation.

### Practice questions

**Passage A — Data ethics policy extract (for Questions 1-4).**
"All new data projects must complete an ethics self-assessment before any personal data is processed. Where the self-assessment identifies a high ethical risk, the project must be referred to the Data Ethics Board, which meets monthly. The Board may approve the project, approve it with conditions, or reject it. Projects using only anonymised or synthetic data are exempt from the self-assessment requirement, although teams are encouraged to complete one as good practice. The Board's decisions are published internally, except where publication would itself create a privacy risk. This policy does not apply to projects that began before 1 April, which remain governed by the previous framework until their next major change."

**Question 1 (easy).** True, False, or Cannot Say: "A new project using only synthetic data is required to complete an ethics self-assessment."

**Correct answer: False.**
**Explanation:** The passage states that projects using only anonymised or synthetic data "are exempt from the self-assessment requirement". Encouragement as good practice is not a requirement — the passage explicitly separates the two ("although teams are encouraged"). The statement asserts a requirement that the passage directly contradicts, so it is False, not Cannot Say.

**Question 2 (easy).** True, False, or Cannot Say: "The Data Ethics Board meets every week."

**Correct answer: False.**
**Explanation:** The passage says the Board "meets monthly". "Every week" directly contradicts this stated frequency. A careless reader might mark Cannot Say on the grounds that extra meetings are conceivable, but the scoring convention is that a direct factual statement in the passage ("meets monthly") makes a contradictory statement False; score strictly from the text as written.

**Question 3 (moderate).** True, False, or Cannot Say: "Most projects referred to the Data Ethics Board are approved with conditions."

**Correct answer: Cannot Say.**
**Explanation:** The passage lists the Board's three possible outcomes — approve, approve with conditions, reject — but gives no information whatsoever about how often each occurs. "Most" is a frequency claim the text neither supports nor contradicts. This is the archetypal Cannot Say: plausible in the real world, completely undetermined by the passage. A candidate's professional experience of ethics boards must not fill the gap — that is precisely the discipline this format tests, and it is worth watching for in how a candidate justifies their answer at debrief.

**Question 4 (moderate).** True, False, or Cannot Say: "A project that began in March and has not undergone a major change is not required to complete the ethics self-assessment described in this policy."

**Correct answer: True.**
**Explanation:** The final sentence states the policy "does not apply to projects that began before 1 April... until their next major change". A project that began in March began before 1 April; with no major change yet, it remains under the previous framework, so this policy's self-assessment requirement does not apply to it. Note the careful chain: the conclusion follows from two explicit conditions joined exactly as the statement joins them. Whether the *previous* framework demands something similar is irrelevant — the statement is limited to "described in this policy".

**Passage B — Data management standard (for Questions 5-7).**
"Each information asset must have a designated data steward responsible for data quality within that asset. Data stewards must review their asset's quality metrics at least quarterly and must report any metric falling below its agreed threshold to the Data Governance Committee within ten working days of discovery. The Committee may commission a remediation plan, which the relevant data steward is responsible for delivering. Where a steward is responsible for more than five assets, the Chief Data Officer should consider appointing an additional steward. Training in quality metrics is mandatory for new stewards and refresher training is recommended every two years thereafter."

**Question 5 (moderate).** True, False, or Cannot Say: "If a steward oversees seven information assets, the Chief Data Officer must appoint an additional steward."

**Correct answer: False.**
**Explanation:** The passage says the CDO "should consider appointing" an additional steward — an obligation to *consider*, not to *appoint*. The statement upgrades "should consider" to "must appoint", which contradicts the text's carefully weaker wording. Modal verbs — must, should, may, should consider — are the load-bearing words of standards documents, and this distinction is exactly what a principal data analyst polices when defining data management responsibilities and leading governance processes.

**Question 6 (moderate).** True, False, or Cannot Say: "A data steward who discovers a below-threshold metric on 1 May and reports it to the Data Governance Committee on 20 May has complied with the reporting requirement, assuming no public holidays and a Monday 1 May."

**Correct answer: False.**
**Explanation:** The requirement is reporting "within ten working days of discovery". From Monday 1 May, counting working days (Mon-Fri), ten working days end on Friday 12 May; even counting generously from the day after discovery, the deadline is Monday 15 May. A report on 20 May falls outside ten working days on any reasonable counting, so compliance fails. The item tests whether the candidate converts calendar spans to working-day spans — a small numeracy step embedded in verbal material, common in senior-level tests and in real governance casework alike.

**Question 7 (hard).** True, False, or Cannot Say: "Refresher training in quality metrics is mandatory for all data stewards every two years."

**Correct answer: False.**
**Explanation:** The passage draws a precise distinction: training is "mandatory for new stewards" while refresher training is "recommended every two years thereafter". The statement asserts that the refresher is mandatory, contradicting "recommended". This sentence blurs two different obligation levels in close proximity — a common trap, since document drafters and test writers alike often place a mandatory and a recommended requirement side by side precisely where the distinction matters.

**Passage C — Email from a policy director (for Questions 8-10).**
"Thanks for your team's analysis of appeal outcomes. The findings are striking, and I would like to include the headline figure in next month's white paper. However, my officials tell me the underlying dataset excludes appeals lodged online, which they believe may account for around a third of the total volume. Before we publish anything, I need your view on whether the headline conclusion would survive the inclusion of online appeals. I should say the Permanent Secretary is keen that the white paper is evidence-led, and the drafting deadline is the 14th. If your team cannot re-run the analysis by then, we will need to caveat the figure heavily or drop it."

**Question 8 (moderate).** True, False, or Cannot Say: "The director has decided to drop the headline figure from the white paper."

**Correct answer: False.**
**Explanation:** The email presents a conditional decision tree, not a decision: publish if the conclusion survives, or "caveat the figure heavily or drop it" if the re-run cannot be done by the 14th. Dropping the figure is one branch of a contingency, and even then one of two stated alternatives. Reading a conditional as a settled outcome is one of the most common — and most consequential — misreadings in stakeholder correspondence, and the kind of thing a principal data analyst corrects when managing stakeholder expectations.

**Question 9 (moderate).** True, False, or Cannot Say: "Online appeals account for around a third of total appeal volume."

**Correct answer: Cannot Say.**
**Explanation:** The email reports what the director's officials "believe may account for around a third" — a hedged, second-hand estimate, not an established fact. The passage gives no data confirming or refuting it. Note the two layers of hedging: "they believe" and "may". A statement of fact about the true proportion is therefore undetermined by this text. Treating stakeholder beliefs as verified facts is exactly what a candidate's quality-assurance instincts should flag, in this assessment and in practice.

**Question 10 (hard) — Multiple choice.** Which of the following best characterises what the director is asking the analyst team to provide before the 14th?

A. A complete re-analysis including online appeals, with no alternative acceptable.
B. A professional judgement on whether the headline conclusion is robust to including online appeals, with a re-run of the analysis if feasible within the deadline.
C. Permission to publish the original figure unaltered.
D. A recommendation on whether the white paper should be published.

**Correct answer: B.**
**Explanation:** The direct request is "I need your view on whether the headline conclusion would survive the inclusion of online appeals" — a judgement — followed by a conditional about re-running the analysis by the 14th, with fallbacks (caveat or drop) if not. Option A overstates: the email explicitly contemplates not re-running ("If your team cannot re-run..."). Option C inverts the email's caution. Option D inflates scope from one figure to the whole white paper. Extracting the *actual ask* from senior correspondence — neither more nor less — is the essence of communicating between the technical and non-technical at this level.

**Passage D — Accessibility standard for data visualisation (for Questions 11-12).**
"Published visualisations must not rely on colour as the only means of conveying information. All charts must include alternative text describing the main message, and interactive dashboards must be fully operable by keyboard. Where a chart cannot be made accessible, the same information must be provided in an accessible table. Teams should test visualisations with users of assistive technology at least once per release cycle. These requirements apply to all external publications; for internal management information they are strongly encouraged but assessed case by case."

**Question 11 (moderate).** True, False, or Cannot Say: "An internal management dashboard that is not keyboard-operable necessarily breaches this standard."

**Correct answer: False.**
**Explanation:** The final sentence limits the mandatory requirements to "all external publications"; for internal management information they are "strongly encouraged but assessed case by case". So an internal dashboard failing keyboard operability does not *necessarily* breach the standard — it may or may not, depending on the case-by-case assessment. The word "necessarily" in the statement is what makes it False rather than Cannot Say: the passage explicitly establishes that internal cases are not automatic breaches. As the person who sets and advocates for standards in inclusive, accessible data visualisation, a principal data analyst must know exactly where a standard's hard edge lies — this item tests whether the candidate does.

**Question 12 (hard).** True, False, or Cannot Say: "A published external chart that relies solely on red and green colouring to distinguish two trend lines, but which includes alternative text, complies with the standard."

**Correct answer: False.**
**Explanation:** The standard imposes multiple independent requirements. The first — "must not rely on colour as the only means of conveying information" — is breached by a chart that distinguishes its two lines solely by colour, regardless of red-green colour blindness considerations a candidate might add from professional knowledge. Alternative text satisfies a *different* requirement; compliance with one clause does not cure breach of another. The scoring convention: a statement claiming compliance is False if the passage establishes any requirement the described artefact violates. Requirements in standards are conjunctive unless stated otherwise — the same reading applied when assessing proposed policies.

**Passage E — Extract from a project problem statement (for Questions 13-15).**
"This project will identify the drivers of late submissions to the grant programme, quantify their relative contribution, and recommend interventions. It will use administrative data from the grants platform covering the last three complete financial years. The project will not evaluate the effectiveness of any interventions subsequently adopted, which would require a separate evaluation exercise. Success will be measured by the delivery of a prioritised, evidence-based list of interventions accepted by the programme board. The analysis phase is scheduled for eight weeks, subject to data access being granted by week two."

**Question 13 (easy).** True, False, or Cannot Say: "The project will evaluate whether the recommended interventions worked."

**Correct answer: False.**
**Explanation:** The passage states this explicitly and in terms: "The project will not evaluate the effectiveness of any interventions subsequently adopted". The statement directly contradicts a sentence of the passage. Scope exclusions are drafted precisely so that nobody later claims the work promised something it did not — when advising on problem statement development, the "will not" sentences are as important as the "will" sentences.

**Question 14 (moderate).** True, False, or Cannot Say: "The analysis will use survey data collected from grant applicants."

**Correct answer: Cannot Say.**
**Explanation:** The passage says the project "will use administrative data from the grants platform". It does not say this is the *only* data source, nor does it mention surveys at all. The statement is neither confirmed (no survey is mentioned) nor contradicted (the passage never says "only administrative data"). This is a subtle Cannot Say: the temptation is to answer False because surveys are unmentioned, but absence of mention is not denial. Contrast with Question 13, where the passage contains an explicit negative.

**Question 15 (hard).** True, False, or Cannot Say: "If data access is granted in week three, the eight-week analysis schedule no longer applies as stated."

**Correct answer: True.**
**Explanation:** The schedule is "subject to data access being granted by week two". "Subject to" makes the eight-week commitment conditional on that event; access arriving in week three means the stated condition is unmet, so the schedule *as stated* — an unconditional eight weeks — no longer holds. Note what does not follow: the passage does not say the project fails or the schedule lengthens by any particular amount, only that the stated commitment was conditioned on week-two access. The statement is carefully worded to claim exactly what the condition implies, no more — which is why it is True rather than Cannot Say. Conditional commitments are the connective tissue of project governance documents, and reading them precisely is how a principal data analyst keeps stakeholder expectations honest.

**Passage F — Methodology note from a statistical report (for Questions 16-18).**
"Estimates in this release are derived from a matched sample of administrative records. Records were matched using a deterministic algorithm; where deterministic matching failed, probabilistic matching was applied with a threshold chosen to keep the estimated false-match rate below 0.5%. Around 6% of records could not be matched by either method and are excluded from all estimates. Analysis of excluded records suggests they are disproportionately drawn from the youngest age groups, and users should exercise caution when interpreting estimates for those groups. Comparisons with the previous release are affected by an improvement to the matching algorithm; a consistent back series is provided in Table 7. All figures are provisional and subject to revision when the annual reconciliation is completed."

**Question 16 (moderate).** True, False, or Cannot Say: "The false-match rate of the probabilistic matching was 0.5%."

**Correct answer: False.**
**Explanation:** The passage says the threshold was "chosen to keep the estimated false-match rate below 0.5%". The statement asserts equality with 0.5%, but the text establishes the rate was *below* that bound — a bound is not a value. Additionally, the passage describes an *estimated* rate, while the statement asserts the rate itself. Either mismatch alone is enough to make the statement unsupported; the explicit "below" makes it contradicted, hence False. Thresholds, bounds, and point values are distinct objects — a distinction enforced daily when quality-assuring statistical outputs.

**Question 17 (moderate).** True, False, or Cannot Say: "Estimates for the youngest age groups are less reliable than estimates for other age groups."

**Correct answer: Cannot Say.**
**Explanation:** The passage says excluded records are "disproportionately drawn from the youngest age groups" and that users "should exercise caution" with those estimates. That is a warning about potential bias, not a determination of relative reliability — the passage never compares reliability across groups directly, and caution-worthy is not the same as established-as-less-reliable. The statement goes one inferential step beyond the text. It is a tempting True for any statistician, which is precisely the point: the format tests whether a candidate can hold their own valid professional inference apart from what the document actually asserts.

**Question 18 (hard) — Multiple choice.** A colleague wants to compare this release's headline figure directly with the figure published in the previous release. According to the passage, what should the candidate advise?

A. The comparison is straightforward because both figures come from the same administrative source.
B. The comparison is affected by a matching-algorithm improvement, so they should use the consistent back series in Table 7 rather than comparing published headlines directly.
C. No comparison is possible until the annual reconciliation is completed.
D. The comparison is valid provided the 6% of unmatched records are added back in.

**Correct answer: B.**
**Explanation:** The passage states that "comparisons with the previous release are affected by an improvement to the matching algorithm" and immediately offers the remedy: "a consistent back series is provided in Table 7". Option B reproduces exactly this advice. Option A ignores the stated discontinuity. Option C over-reads "provisional and subject to revision" — provisionality qualifies the figures' finality, but the passage does not prohibit comparison, and it explicitly provides a tool for making one. Option D invents a remedy the passage never mentions and which is methodologically incoherent (unmatched records cannot simply be "added back"). Advising colleagues on exactly this kind of question — what a methodology note licenses and forbids — is part of representing good analytical practice across the organisation.

### Administration guidance

- **Brief the candidate on the text-only discipline before starting.** Explain plainly that answers are scored strictly against the passage, not against background knowledge — a discipline that experienced candidates often find counter-intuitive, and one worth naming up front so it is not itself a source of the error.
- **Hold the time limit consistently.** Under a minute per question simulates absorbing a briefing before a meeting; apply the same limit to every candidate for a given round.
- **Score the three verdicts distinctly.** True needs positive support in the text; False needs direct contradiction; Cannot Say covers everything else, including anything merely plausible or unstated (Questions 3, 9, 14 are Cannot Say; Question 13 is an explicit False). Keep this distinction sharp when marking borderline answers.
- **Watch for modal-verb precision in how a candidate justifies an answer.** Must, should, may, "should consider", "are encouraged" carry different obligation strengths, and most senior-level items turn on the difference (Questions 5 and 7).
- **Note quantifier sensitivity.** Words like "all", "only", "most", "necessarily" and "always" change a statement's truth conditions (Questions 3 and 11); a candidate's debrief explanation should show they noticed the word doing the work.
- **Offer a short practice passage before the timed section, if your process allows.** Familiarity with the True / False / Cannot Say format matters more here than in most verbal formats, and a brief warm-up keeps the timed score about reasoning rather than about format unfamiliarity.

### Scoring guidance: common pitfalls to watch for

- **Bringing in professional knowledge instead of the passage.** The number-one failure mode for experienced candidates on this format; watch for justifications that cite GDPR, ethics boards, or accessibility law rather than the text (Questions 3, 9).
- **Confusing "likely" with "certain".** A passage reporting that officials "believe" something "may" be true does not establish it as fact (Question 9).
- **Treating absence of mention as denial.** Unmentioned is Cannot Say, not False (Question 14); a candidate marking this False has over-read the passage.
- **Proximity reading.** Letting an obligation word from one clause attach to a different requirement in the next (Question 7); worth probing in debrief if a candidate's answer suggests it.
- **Reading conditionals as decisions.** "If X, we will do Y" commits to nothing until X occurs (Questions 8 and 15).
- **Spending the time budget reading passages in full before seeing the question.** Targeted scanning after reading the statement is the intended method under this time limit, and worth explaining if a candidate runs out of time.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill, and professional conduct through realistic workplace dilemmas. Unlike logic or numerical tests, there is no formula to apply: each scenario presents a short, plausible conflict or challenge, and the candidate evaluates a set of possible responses. There is deliberately no single objectively "right" answer — several options may seem reasonable — but one typically fits the role's responsibilities and the organisation's values best. Ask the candidate to select the **most effective** and **least effective** actions, or to rank or rate all options from best to worst. Timing can be generous or absent, since this measures natural judgement rather than speed.

For a principal data analyst in UK government, the scenarios involve the role's real stakeholder landscape: directors wanting figures faster than quality allows, junior analysts making honest mistakes, policy teams proposing ethically questionable data uses, cross-government communities, and delivery pressures that strain governance. Strong answers consistently express UK public sector values — evidence-led decision making, transparency, user needs, accessibility and inclusion, collaboration across professions, and proportionate, honest handling of risk. Strong answers at *principal* level additionally show leadership: addressing root causes rather than symptoms, developing people rather than bypassing them, and protecting long-term trust over short-term convenience.

### What it measures for this role

- **Communicating between the technical and non-technical.** Scenarios test whether the candidate mediates between people, adopts the right communication method for each stakeholder, manages expectations, and moderates difficult discussions about high-risk topics within constrained timescales.
- **Data ethics and privacy.** Dilemmas probe whether the candidate identifies and addresses ethical and privacy concerns with stakeholders, and constructively challenges proposed uses of data rather than either rubber-stamping or obstructing them.
- **Data management.** Situations involving governance breaches and quality failures test how the candidate champions data management processes while keeping delivery moving.
- **Managing a data project.** Scenarios about scope, risk, and stakeholder relationships test the role's oversight of the project life cycle and its development of stakeholder relationships for the team's projects.
- **Delivering business impact through data.** Options are often separated by whether they serve organisational objectives or merely local convenience — the judgement behind deciding when to pivot and championing the role of data.
- **Applying statistical and analytical tools and techniques.** Several dilemmas turn on defending analytical quality under pressure — the behavioural face of overseeing quality assurance.
- **Leadership duties of this level.** Influencing organisational decision making, overseeing continuous improvement, mentoring, and representing the data analyst community all appear as scenario material.

### Practice questions

**Question 1 (moderate) — The director wants the number today.**
A director calls the candidate at 16:00. She needs a single headline figure — the percentage of service users affected by a proposed change — for a ministerial meeting at 09:30 tomorrow. The team has a draft figure, but it has not completed its quality assurance process, and last month a similar unchecked figure had to be corrected after release. Rate the options.

A. Provide the draft figure now, without comment, to be helpful under deadline.
B. Refuse: explain that nothing leaves the team before full QA, and the QA queue means Thursday.
C. Explain the figure's status, run a rapid proportionate check on the single figure this evening, and provide it with a clear confidence statement and any necessary caveat in writing by 08:30.
D. Suggest the director use last year's published figure instead, since it is already assured.

**Most effective: C. Least effective: A.**
**Explanation:** Option C serves the real need (a defensible figure for a ministerial discussion) while managing risk proportionately: QA effort scales to a single number overnight, and the written caveat protects both the director and the evidence base — this is managing stakeholder expectations and moderating high-risk discussions within constrained timescales, exactly as the role profile describes. Option A is least effective: it repeats last month's known failure mode, transfers unquantified risk to a minister, and surrenders the quality assurance duty precisely when it matters most. Option B treats process as an end in itself and fails the organisation at its moment of need — governance exists to make evidence trustworthy, not unavailable. Option D is honest but may answer the wrong question; an out-of-date figure can mislead as surely as an unchecked one, though as a stopgap it is less damaging than A.

**Question 2 (moderate) — A junior analyst's public mistake.**
A junior analyst on the candidate's team discovers they made a coding error in a statistical release published three weeks ago: a filter excluded one region, understating the national total by about 2%. They come to the candidate anxious, having told no one else. Rate the options.

A. Thank them for coming forward, initiate the organisation's published-error correction process immediately, inform the release's owner and users transparently, and afterwards review with the team how the error escaped QA — treating it as a process failure, not a personal one.
B. Quietly fix the code so future releases are correct, but leave the published release alone since 2% is within normal revision ranges.
C. Correct the release but avoid naming any cause publicly, and privately note the analyst's error in their next performance review.
D. Escalate to the director first and take no other action until instructed.

**Most effective: A. Least effective: B.**
**Explanation:** Option A does everything the situation requires: correction, transparency to users (a core public sector value — people may have made decisions on the wrong number), protection of the person who spoke up, and continuous improvement of the process — the role's duty to oversee quality assurance and improve practices. Option B is least effective: it knowingly leaves a wrong statistic in the public domain, corrodes trust if discovered, and teaches the team that concealment is acceptable — the opposite of the culture a principal must build. Option C corrects the number but punishes the messenger, guaranteeing the next error stays hidden; blame-centred responses destroy the psychological safety that quality depends on. Option D is not wrong to involve the director, but making it the *only* action delays a correction the candidate already has authority and duty to begin; a principal informs upwards while acting, not instead of acting.

**Question 3 (hard) — The ethically questionable data request.**
A policy team asks the candidate's team to link benefits data with library-membership data to identify individuals "unlikely to be engaging with services", so the individuals can be contacted proactively. The policy intent is genuinely supportive, but the request troubles the candidate: the purposes seem incompatible with what citizens were told when their data was collected, and no ethics assessment has been done. The policy lead says the deadline is tight and asks the candidate to start the linkage while the paperwork catches up. Rate the options.

A. Start the linkage as asked; the intent is benign and the paperwork is a formality.
B. Decline to start, explain specifically why — purpose compatibility and the missing ethics assessment — and offer to help the policy team complete the ethics self-assessment rapidly and explore designs that could achieve the policy aim with less intrusion, such as aggregate-level targeting.
C. Refuse outright and report the policy team to the information governance team for attempting to bypass process.
D. Start preparing the datasets separately (without linking) so no time is lost, while the ethics assessment is completed.

**Most effective: B. Least effective: A.**
**Explanation:** Option B embodies the data ethics and privacy skill expected at principal level: identify and address the concern with the stakeholder, explain how the ethical issue fits the wider organisational context, and constructively challenge — while staying in partnership with the policy aim and offering a route to yes. Note that B also demonstrates the professional maturity to distinguish the *aim* (legitimate) from the *method* (premature). Option A is least effective: "start now, paperwork later" inverts the entire purpose of ethical assessment, and benign intent does not cure incompatible purpose — if the assessment later finds the linkage unjustifiable, the intrusion has already happened. Option C treats a collaborative stakeholder as an adversary; escalation may become appropriate, but as a first move it destroys the relationship the role depends on and teaches policy teams to avoid consulting data professionals. Option D sounds like a pragmatic middle path but pre-commits resources and momentum to an approach that may be rejected, and "preparing" datasets for an unapproved purpose already processes personal data for that purpose — a subtler version of A.

**Question 4 (moderate) — Two teams, one truth.**
Two directorates publish dashboards showing "active users" of the same service, using different definitions: one counts monthly logins, the other counts completed transactions. A board member has noticed the figures differ by 40% and asks the candidate, as the senior data professional, "which number is right?". Rate the options.

A. Explain that both are right by their own definitions, and leave the directorates to continue as they are since each definition suits its own purpose.
B. Recommend the board adopt whichever figure is larger, since it better demonstrates the service's reach.
C. Explain why the figures differ, then lead the two directorates to an agreed shared definition (or an agreed pair of clearly-labelled measures) recorded in a common data dictionary, so the organisation reports consistently from now on.
D. Ask the two directorates to reconcile the numbers themselves and report back to the board.

**Most effective: C. Least effective: B.**
**Explanation:** Option C answers the immediate question honestly *and* fixes the systemic cause: undefined shared language. Leading the organisation to common definitions is data management leadership — championing governance processes and enabling continuous improvement — and it converts a moment of board-level embarrassment into a durable asset (the data dictionary). Option B is least effective and fails integrity outright: choosing figures for advocacy value rather than accuracy is precisely what a principal exists to prevent, and a board that later discovers the choice will discount everything the profession publishes. Option A is analytically correct but abdicates leadership; "both are right" without convergence guarantees the same confusion at the next board. Option D delegates a coordination problem that has already failed to self-resolve — the directorates produced the divergence; resolving it needs the neutral authority a principal carries.

**Question 5 (hard) — The struggling high-performer the candidate mentors.**
A talented senior analyst the candidate mentors has led the data modelling on a high-profile project. In review, the candidate finds their new analytical data model contains a design flaw: it hard-codes assumptions that will break when a key source system migrates next year. The analyst has already presented the model to stakeholders as finished, and correcting it means visibly reopening "completed" work. The analyst asks the candidate to let it stand, promising to fix it quietly during the migration. Rate the options.

A. Agree — the flaw is not currently causing errors, the analyst is trusted, and morale matters.
B. Overrule them and assign the redesign to a different analyst to ensure objectivity.
C. Require the correction now, but coach the analyst through leading it themselves: help them frame the change to stakeholders as a strengthening found in review, and use the episode to teach how models are designed for known future change.
D. Let the model stand but document the objection in writing so responsibility is clear.

**Most effective: C. Least effective: D.**
**Explanation:** Option C fixes the artefact, develops the person, and models the standard: the role profile makes a principal data analyst responsible for ensuring data models align with modelling standards *and* for mentoring others in data quality and modelling — C is the only option that does both. Reframing review findings as strengthening (which they are) also teaches the analyst that revisiting work is professional, not shameful. Option A knowingly ships a model that will break on a foreseeable event; "fix it quietly later" defers the cost to the moment of maximum disruption (mid-migration) and normalises concealment. Option B fixes the model but at the price of publicly stripping the analyst of their work — a mentoring failure that teaches the team's best people that honesty about flaws means losing ownership. Option D is least effective because it is self-protection dressed as governance: the organisation still gets the broken model, the analyst still learns evasion works, and the written objection helps no one but its author. A principal's job is to prevent foreseeable failures, not to be provably blameless when they occur.

**Question 6 (moderate) — Representing the profession under fire.**
At a cross-government event, a senior official from another department states in open session that "data analysts slow everything down with quality theatre — policy teams should just use the numbers they have". The candidate is on the panel representing the data analyst community. Rate the options.

A. Respond with a concrete, brief story of a decision improved (or a costly error prevented) by proportionate quality assurance, acknowledge that assurance must be proportionate to the decision at hand, and offer to continue the conversation with their department afterwards.
B. Rebut firmly with a list of the official's department's recent data errors to demonstrate why assurance is needed.
C. Let the comment pass to keep the panel collegial, and raise it privately later.
D. Agree that assurance is often disproportionate and commit publicly to lighter-touch processes across government.

**Most effective: A. Least effective: B.**
**Explanation:** Option A does what representing the community to large audiences requires: it defends the profession's value with evidence rather than assertion, concedes the legitimate kernel in the criticism (proportionality — a real principle of good assurance), and converts a public challenge into a working relationship. Option B is least effective: publicly humiliating another department wins the exchange and loses the relationship, confirms the "adversarial analyst" stereotype, and will follow a principal into every future cross-government negotiation. Option C leaves a false characterisation standing before an audience of exactly the people whose cooperation the community needs — silence reads as concession when a principal holds the community's brief. Option D capitulates: it trades away standards a principal is appointed to uphold for momentary approval, and commits the whole profession without mandate. The panel format is the point: at principal level this is tested on judgement *in public*, where both aggression and appeasement carry lasting costs.

**Question 7 (hard) — Pivot or persevere.**
Four months into a six-month project to build a predictive model for service demand, interim results show the model performs only marginally better than the simple baseline already in use, though it is far more complex to maintain. The team is invested and believes two more months could improve it. The sponsoring director has been enthusiastically telling colleagues about "the AI project". Meanwhile, the same team's exploratory work has revealed a data quality problem whose fix would demonstrably improve operational decisions within weeks. Rank the options from most to least effective.

A. Continue the model build as planned; changing course now would embarrass the sponsor.
B. Present the sponsor with the interim evidence, the honest probability that two more months yields marginal gains, and the alternative of redirecting effort to the data quality fix — with a recommendation to pivot and a plan for communicating the change constructively.
C. Pivot the team to the data quality work immediately and inform the sponsor at the next scheduled monthly meeting.
D. Split the team in half to pursue both workstreams simultaneously.

**Most effective ranking: B, D, C, A.**
**Explanation:** Option B is the textbook expression of partnering with others to decide when to pivot for business impact: evidence first, sponsor engaged as a partner in the decision, and the reputational dimension managed openly rather than driven covertly. Option D is second — it hedges and dilutes, and two half-teams often deliver less than one focused team, but it is at least honest and keeps both options alive pending a fuller decision. Option C ranks third: the pivot itself may well be right, but executing it before telling the sponsor converts a defensible evidence-led decision into a trust breach — sponsors forgive changed plans far more readily than surprises, and "influence organisational decision making" means bringing decision makers along, not presenting them with faits accomplis. Option A is least effective: it knowingly spends two months of public money on work the evidence says is marginal, to protect a narrative — the exact inversion of evidence-led government. Sunk cost plus sponsor embarrassment is the most common real-world reason bad projects continue; this option is included to see whether a candidate recognises it as a reason to communicate carefully, not a reason to continue.

**Question 8 (moderate) — The inaccessible flagship dashboard.**
An organisation's flagship performance dashboard, built by a contractor and championed by the candidate's directorate, wins internal praise. A colleague who uses a screen reader tells the candidate privately that it is unusable with assistive technology, and they have stopped raising it "because nobody acts". External publication is planned next month. Rate the options.

A. Thank the colleague, verify the issues, and require an accessibility remediation plan (and interim accessible alternative, such as a structured data table) as a condition of external publication — using the standards-setting role to make assistive-technology testing a standing requirement for all future releases.
B. Log the issue in the backlog for the contractor's next development cycle after publication, since the deadline is fixed.
C. Advise the colleague to raise a formal complaint through the proper channel so the issue is officially recorded.
D. Delay publication indefinitely until the dashboard is fully rebuilt to be accessible.

**Most effective: A. Least effective: B.**
**Explanation:** Option A treats accessibility as what it is — a requirement, not a preference — while remaining proportionate: an interim accessible alternative can make publication viable, the remediation plan fixes the product, and the standing testing requirement addresses the systemic failure the colleague described ("nobody acts"). This is the data visualisation duty in action at this level: setting and advocating for standards in inclusive, accessible visualisation. Option B is least effective: publishing externally a product known to exclude disabled users is a legal risk (public sector accessibility regulations), a values failure, and a signal to the colleague that raising issues is indeed pointless. Option C outsources to the person with least power what a principal has most power to fix, and formalises a relationship problem that could be resolved by acting. Option D over-corrects: it treats the issue as binary when interim alternatives exist, and indefinite delay punishes the organisation without a plan — proportionate remediation with a firm condition beats both extremes.

**Question 9 (moderate) — Conflicting demands on the team's roadmap.**
Three stakeholders each insist their need tops the candidate's team's next quarter: the finance director wants automated monthly reporting (moderate value, low effort); an operations head wants a demand-forecasting analysis (high value, high effort); a policy team wants exploratory analysis for a bill in parliament next quarter (uncertain value, hard deadline, modest effort). The team can deliver at most two. Rate the options.

A. Take all three and ask the team to stretch; disappointing a stakeholder damages relationships.
B. Choose the two with clearest value — finance and operations — and tell the policy team their timing is unfortunate.
C. Assess the three against organisational priorities and deadline rigidity; propose delivering the parliamentary analysis (immovable deadline, modest effort) and the finance automation (quick, frees future capacity), while scheduling the forecasting work next quarter with the operations head involved in that decision — then communicate the rationale to all three together.
D. Ask the director to choose, since stakeholder prioritisation is above the team's remit.

**Most effective: C. Least effective: A.**
**Explanation:** Option C reasons rather than reacts: the parliamentary deadline is genuinely immovable (parliament does not reschedule for analytical capacity) and the effort is modest; the finance automation is cheap and *creates* capacity; the high-effort forecasting work is valuable but schedulable — and involving the deferred stakeholder in the scheduling preserves the relationship. Communicating one rationale to all three treats them as adults and demonstrates the transparent prioritisation this role models. Option A is least effective: over-commitment is the dishonest option that feels polite — it converts one difficult conversation now into three broken promises later, and burns out the team. Option B applies a defensible value lens but ignores deadline rigidity (the policy window closes permanently) and delivers the news without partnership. Option D delegates upwards a judgement squarely within a principal's remit — advising on prioritisation of data work *is* influencing organisational decision making; escalation is for genuine ties on organisational priority, after analysis, with a recommendation attached.

**Question 10 (hard) — The community the candidate represents disagrees with them.**
The candidate is leading the adoption of a new organisation-wide standard for reproducible analytical pipelines. In the data analyst community of practice — which they chair and represent — a vocal group of experienced analysts argues the standard is bureaucratic overreach and is quietly encouraging teams to ignore it. The candidate believes the standard is right, and its adoption is part of their objectives. Rate the options.

A. Use the position to instruct teams to comply, and remove the dissenting analysts from community leadership roles.
B. Host a structured session where the dissenters present their objections concretely; adjust the standard where their criticisms identify genuine disproportion, publish what changed and what did not with reasons, and ask the community's respected sceptics to co-own the revised rollout.
C. Bypass the community and secure a mandate from the executive committee making the standard compulsory.
D. Pause the standard indefinitely until the community reaches consensus.

**Most effective: B. Least effective: A.**
**Explanation:** Option B reflects how standards actually take hold: through legitimacy. Experienced dissenters usually hold real information — about disproportionate burden on small jobs, missing tooling, unrealistic timelines — and harvesting it improves the standard (continuous improvement of practices is literally the role's duty); publishing what changed *and what did not, with reasons* shows challenge is heard without pretending it always wins; converting credible sceptics into co-owners is the oldest and best adoption strategy. Option A is least effective: it uses positional power to suppress professional dissent inside the very community a principal exists to represent — compliance will be performative, the community's trust in its representative collapses, and the best analysts disengage or leave. Option C wins the mandate and loses the profession: an executive edict against the community's visible opposition makes the standard "management's rule", ensuring minimum compliance forever; it also signals that the role holder could not carry their own community. Option D mistakes consensus for legitimacy — full consensus among strong-minded experts may never come, and indefinite pause abandons an improvement believed to be right; leadership sometimes means deciding after genuine consultation, not instead of it.

**Question 11 (moderate) — The overheard shortcut.**
The candidate learns that a team elsewhere in the organisation is regularly emailing spreadsheets of case-level personal data to an external evaluation partner, because "the secure transfer system is too slow". The team does not report to the candidate, and their head of profession is a peer of the candidate's. Rate the options.

A. Since the team is outside the candidate's line, note it and take no action — their management chain owns their risks.
B. Contact the peer directly and promptly: describe what has been learned without accusation, ensure the transfers stop immediately, ensure the incident is assessed under the organisation's data-incident process (which may involve mandatory reporting), and jointly sponsor a fix for the underlying cause — the unusable secure transfer route.
C. Report the team anonymously to the data protection officer and let the formal process run its course.
D. Email the team directly instructing them to stop, copying their entire management chain.

**Most effective: B. Least effective: A.**
**Explanation:** Option B does the three things the situation demands, in the right order: stops ongoing harm fast (peer-to-peer contact is the quickest credible route), ensures proper incident handling (personal data sent insecurely and repeatedly may meet reporting thresholds — that assessment is not optional and not the discoverer's to waive), and fixes the root cause, because a security control that is too slow to use is a defect that will breed workarounds forever — championing data management and governance across the organisation means across, not just within, the reporting line. Option A is least effective: data protection failures do not respect organisational charts, the role holder now knows about ongoing risk to citizens' data, and "not my team" is indefensible for the organisation's senior data professional — knowledge creates responsibility at this level. Option C ensures the issue is eventually handled but chooses the slowest honest route while transfers continue, and anonymity spends none of the role holder's standing to accelerate the fix. Option D stops the practice but by publicly humiliating a peer team not managed by the candidate — creating a profession-level rift and teaching teams to hide workarounds, when workarounds surfacing early is exactly what good governance culture produces.

**Question 12 (hard) — Quality versus the legislative clock.**
Analysis the candidate's team produced will underpin a regulatory impact assessment laid before parliament next week. At the final check, the candidate finds the central estimate is sound but a supporting sensitivity analysis contains an error: fixing it will likely move one secondary figure by an unknown amount, and the fix needs four days barely available. The policy team suggests publishing as-is and correcting quietly in a future version "if anyone asks". Rate the options.

A. Publish as-is; the central estimate is sound and the error is secondary.
B. Fix the error before laying, informing the policy team and, through them, the responsible senior owner of the timing risk, so the choice between a short delay and a corrected-on-time document is made explicitly at the right level with full information.
C. Publish as-is but proactively disclose the known error and its expected correction in the document itself.
D. Publish as-is and adopt the policy team's plan to correct it quietly later if raised.

**Most effective: B. Least effective: D.**
**Explanation:** Work through what each option does with the four days. Option B uses them to fix the error while ensuring the schedule-versus-accuracy trade-off is decided by those accountable for the parliamentary timetable — with full information. It may still end in publishing with disclosure, but that becomes an informed decision, not a default. Option D is least effective — note it is materially worse than C, which looks similar: D's "quietly, if anyone asks" is concealment of a *known* error in evidence before parliament, the most serious transparency failure available here; discovery would damage not just this assessment but the credibility of the organisation's evidence generally. Option C at least meets the transparency standard — a known limitation, disclosed — and in genuine immovable-deadline cases disclosure is the honest fallback; it ranks second or third depending on whether four days truly exist. Option A publishes a known error silently through negligence framing ("secondary") rather than active concealment, barely better than D. The principal-level discrimination this item is built to surface: B versus C turns on using available time; C versus D turns on disclosure — and disclosure is never optional once an error is known.

### Administration guidance

- **Score against public sector values, not cleverness.** Credited answers reward transparency, user focus, evidence-led decisions, accessibility, and collaboration; when two options seem close, ask which one the candidate could defend to a select committee, a service user, and their own team.
- **Look for answers that fix the system, not just the incident.** At principal level, the credited answer typically pairs an immediate remedy with a process improvement (Questions 2, 4, 8, 11); an answer that only firefights should generally rank below one that also prevents recurrence.
- **Note how a candidate treats the people in the scenario.** Options that develop, protect, or partner with colleagues generally outrank options that bypass, expose, or punish them, even where the bypass is faster (Questions 5, 10, 11).
- **Distinguish constructive challenge from rubber-stamping or obstruction.** For ethics and governance dilemmas the credited option is almost always a route to yes with conditions attached (Question 3); pure refusal and pure compliance both usually rank poorly.
- **Match your scoring to the response format you set.** "Most and least effective" questions score two judgements; ranking questions score the full ordering. In rating formats, judge each option on its own merits rather than relative to a favourite.
- **Score honest answers, not aspirational ones.** Coached "perfect" answers can misjudge which option is actually credited; brief the candidate to answer as they would genuinely act, and treat that as the more useful signal.

### Scoring guidance: common pitfalls to watch for

- **Idealistic but impractical answers.** "Stop everything until it is perfect" options (Questions 1B, 8D) sound principled but fail the organisation practically; the credited option is usually principled *and* workable.
- **Passive answers.** Choices that delay action, defer wholly to others, or merely document concerns (Questions 2D, 5D, 9D) consistently rank low; this level is scored on acting with judgement, not on being provably blameless.
- **Protecting relationships by avoiding the truth.** Over-commitment (Question 9A), letting a false statement stand (Question 6C), and quiet non-correction (Question 2B) all trade long-term trust for short-term comfort, and should be scored accordingly.
- **Escalating as a first resort.** Involving seniors is often right, but where escalation *replaces* the candidate's own available action (Questions 2D, 9D) it scores poorly; the stronger pattern is informing upwards while acting within one's authority.
- **Punishing honesty.** Any option that penalises a person for surfacing a problem (Questions 2C, 5B) damages the reporting culture the role depends on, and should rarely be credited.
- **Ignoring the public sector context.** Choices acceptable in a commercial setting, such as selecting the flattering figure (Question 4B) or a quiet correction (Question 12D), are disqualifying where parliament, ministers, and citizens rely on the numbers.

## Conclusion

You have now worked through a complete set of assessment material built around the principal data analyst role: a cognitive assessment testing the pattern recognition, deduction, error checking, and prioritisation the role applies to data models, pipelines, and portfolios; a numeric reasoning assessment covering the percentages, weighted averages, budgets, forecasts, and unit economics the role stewards; a verbal reasoning assessment grounded in the ethics policies, governance standards, and stakeholder correspondence the role reads with professional precision; and a situational judgement assessment drawn from the genuine dilemmas of leading data analysis in UK government — quality under deadline pressure, ethical challenge, mentoring, standards adoption, and representing the profession in public.

To score: mark each item against the worked answer key, and where a response format allows for it (most/least effective, ranking), use the explanation to judge how close a candidate's reasoning came, not only whether they landed on the credited option. Keep a written record of scores and your rationale for each candidate — this supports a fair comparison across candidates and gives you something concrete to draw on at debrief.

Debrief every candidate, whatever the outcome. Walk through a sample of their answers using the explanations in this document, and let the conversation run both ways: a strong candidate's reasoning may reveal something the item did not anticipate, and a debrief is also where a candidate can raise concerns about a specific item's fairness or clarity. Treat the debrief as a development opportunity for the candidate, not only a formality closing out the process.

Administer this consistently: the same items, the same time limits, and the same scoring approach for every candidate assessed for this role level in a given round. Keep your records, and remember the advisory above — this assessment is not validated, not normed, and must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Use it as one structured input alongside the rest of your process, and consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues before relying on it.
