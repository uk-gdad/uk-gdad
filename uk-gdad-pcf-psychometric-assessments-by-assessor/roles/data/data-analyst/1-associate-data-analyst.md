# Data Analyst (Associate Data Analyst) - Psychometric Assessments

## Introduction

This document is written for you: an assessor evaluating a candidate for associate data analyst in UK government digital and data. It is a structured, workplace job-specific psychometric assessment resource — four sections of items, each with a worked answer key — that you administer to a candidate as one input into a hiring or promotion decision.

First, a quick word on what this kind of assessment is. A psychometric assessment is a structured, standardised way of measuring how a candidate thinks, reasons, and makes decisions. It is not a test of what they have memorised, and it is not a judgement of their worth as a person or a professional. It looks at the mental skills that matter in the role: spotting patterns in data, checking figures carefully, reading policies and reports accurately, and making sensible judgements when working with colleagues and stakeholders.

Why does this matter for this particular role? An associate data analyst supports the development and delivery of data analysis and data projects. Day to day, that means spotting patterns in datasets, noticing when a value looks wrong, following logical steps in an analytical approach, and deciding what to work on first. Every one of those tasks draws on the exact abilities this assessment measures. Employers use assessments like this because they are a fair, consistent way to see how ready a candidate is for the reasoning demands of a role.

This document is organised into four main assessment sections, each matched to the role:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the data files, quality checks, and analytical tasks an associate data analyst really handles.
2. **Workplace job-specific numeric reasoning assessment** — tables, percentages, and performance figures like those the role prepares and checks under supervision.
3. **Workplace job-specific verbal reasoning assessment** — passages drawn from data governance policies, stakeholder emails, and project briefs, with True / False / Cannot Say questions.
4. **Workplace job-specific situational judgement assessment** — realistic dilemmas involving the team, the supervisor, and the people who rely on the candidate's analysis.

Each section explains what the assessment measures, maps it to the specific skills named for the role (data preparation and linkage, applying statistical and analytical tools and techniques, data visualisation, data management, data ethics and privacy, and managing a data project, among others), and gives a set of items with full worked answers and explanations — your answer key. Each section finishes with notes to help you administer a session and read the results, and a list of common pitfalls to watch for in a candidate's answers.

How to administer this fairly. Present the same items and hold to the same time limit for every candidate you assess for this role level, so results are comparable across candidates. Each section's practice questions carry a rough time-per-item — about 90 seconds for cognitive, a minute to 90 seconds for numeric reasoning, under a minute per statement for verbal reasoning, and a generous or open allowance for situational judgement — useful for planning how long a session will take. Keep the worked answers and explanations back as your answer key: do not share them with the candidate before or during the assessment. Give the candidate the same short, informal orientation to the format before you start, and let them try a question or two ungraded if the platform or paper format allows it, so unfamiliarity with the format does not distort the result. Once you have scored the responses, debrief the candidate: walk through what the assessment covered, where their answers were strong, and where they were not, using the explanations below as your script.

Treat a result from this assessment as one input among several — alongside the interview, any work sample, and the candidate's application — never as the sole basis for a hiring or promotion decision. At associate level in particular, remember that the candidate is early in their data career; calibrate your expectations, and the benchmark you compare them against, accordingly.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment is a targeted test that measures the exact mental processes a candidate needs in the role of associate data analyst. Unlike a general intelligence test, it uses practical workplace scenarios and real-looking data, so every question feels like a small slice of the actual job. It typically covers pattern recognition, logical deduction, error checking, prioritisation, and problem solving.

The format is usually timed, most often 15 to 30 minutes online, with multiple-choice questions. Before the real test begins, a candidate is normally given a few short, ungraded practice questions to get used to the interface. Some modern platforms are adaptive, meaning the questions get slightly harder or easier depending on previous answers — if you administer an adaptive platform, tell the candidate in advance, so rising difficulty is read as a sign of doing well rather than as a bad sign. Scoring is objective: results are compared against a benchmark group, and many employers look at both speed and accuracy rather than a single overall number.

Why does this matter for this role? An associate data analyst supports the development and delivery of data analysis and data projects. That means much of the day is spent spotting patterns in datasets, noticing when a value looks wrong, following logical steps in an analytical approach, and deciding what to work on first. A cognitive assessment measures precisely these habits of mind. A strong candidate can identify data quality issues, follow a data preparation process carefully, and reason clearly about problem statements — all things the role's summary asks of it.

### What it measures for this role

Each cognitive dimension maps directly onto skills named in the role:

- **Pattern recognition** connects to the skill of **data preparation and linkage**: identifying data quality issues means noticing when values break an expected pattern, such as a date column that suddenly changes format halfway through a file.
- **Logical deduction** connects to **applying statistical and analytical tools and techniques** and **developing code for analysis**: designing an analytical approach, even simple code, means reasoning step by step from inputs to outputs.
- **Error checking** connects to **data preparation and linkage** and the quality assurance elements of **applying statistical and analytical tools and techniques**: a candidate at this level is expected to explain the value of quality assurance and to prepare and cleanse data under supervision, contributing to making it fit for purpose.
- **Prioritisation** connects to **managing a data project**: understanding a problem statement, explaining the intended outcome, and adapting ways of working to deliver different project outcomes and requirements.
- **Problem solving** connects to **delivering business impact through data**: aligning data and analysis to meet business requirements means working out which analytical route actually answers the organisation's question.

### Practice questions

Present these items to the candidate under timed conditions; about 90 seconds per question is a realistic budget for this level.

#### Question 1 (easy) - Pattern recognition in a reference dataset

The candidate is helping a senior analyst tidy a reference table of local authority codes. The first column follows a pattern:

E06000001, E06000002, E06000003, E06000005, E06000006

Which value appears to be missing from the sequence?

- A. E06000000
- B. E06000004
- C. E06000007
- D. E06000005

**Correct answer: B**

**Explanation:** The codes increase by one each time: 001, 002, 003, then the sequence jumps to 005. The value E06000004 is missing. This is exactly the kind of data quality issue an associate data analyst is expected to identify: a gap in an expected sequence. In real work, the candidate would be expected to flag this to a supervisor and check whether the record was deleted deliberately (some codes are retired) or lost during a data move between systems. Notice that option D is a value already present in the list - a common distractor designed to catch a candidate who skims.

#### Question 2 (easy) - Spotting a format inconsistency

The candidate is preparing a dataset of service completion dates for cleansing, under supervision. A sample of the date column reads:

12/03/2026, 15/03/2026, 2026-03-18, 21/03/2026, 24/03/2026

What is the data quality issue?

- A. One date is in the future
- B. One date uses a different format from the others
- C. The dates are not in chronological order
- D. There are duplicate dates

**Correct answer: B**

**Explanation:** Four dates use the UK day/month/year format, but the third value (2026-03-18) uses the ISO year-month-day format. Mixed date formats are one of the most common data quality issues this role meets when identifying, collecting and moving data between a range of systems, because different systems store dates differently. The dates are actually in chronological order (12, 15, 18, 21, 24 March), there are no duplicates, and whether a date is "in the future" depends on today's date, which the question does not give. A good cleansing step would be to standardise every date to a single agreed format before analysis.

#### Question 3 (moderate) - Logical deduction about a data pipeline

A team moves survey data through three steps every week: Extract (from the survey platform), Transform (cleansing and recoding), and Load (into the reporting database). The following facts are known:

1. If Extract fails, Transform does not run.
2. If Transform does not run, the reporting database is not updated.
3. This week, the reporting database was updated.

Which conclusion must be true?

- A. Extract succeeded this week
- B. Transform found no data quality issues this week
- C. The survey platform had no downtime this week
- D. The reporting database contains no errors

**Correct answer: A**

**Explanation:** Work backwards through the chain. The database was updated (fact 3). Fact 2 says that if Transform does not run, the database is not updated - so Transform must have run. Fact 1 says that if Extract fails, Transform does not run - so Extract must have succeeded. That is option A. The other options go beyond the facts: Transform running does not mean it found zero issues (B); Extract succeeding does not rule out brief platform downtime (C); and an updated database can still contain errors (D). This step-by-step "if-then" reasoning is the same logic this role uses when designing an analytical approach or writing simple code with support.

#### Question 4 (moderate) - Error checking a summary table

A colleague asks the candidate to double-check a summary before it goes to the service owner. The table shows the number of digital service applications processed by a casework team:

| Week | Applications received | Applications processed | Backlog change |
|------|----------------------|------------------------|----------------|
| 1    | 400                  | 380                    | +20            |
| 2    | 420                  | 430                    | -10            |
| 3    | 450                  | 425                    | +35            |
| 4    | 410                  | 415                    | -5             |

Backlog change should equal applications received minus applications processed. Which row contains an error?

- A. Week 1
- B. Week 2
- C. Week 3
- D. Week 4

**Correct answer: C**

**Explanation:** Check each row. Week 1: 400 - 380 = +20, correct. Week 2: 420 - 430 = -10, correct. Week 3: 450 - 425 = +25, but the table says +35, so this row is wrong. Week 4: 410 - 415 = -5, correct. Careful row-by-row checking like this is the heart of quality assurance in statistical and analytical outputs. A candidate who guesses after checking only one or two rows is likely to miss it: the error is deliberately placed in the third or fourth position, which is where checking often stops early.

#### Question 5 (moderate) - Prioritisation under a deadline

It is 14:00 on Thursday. The candidate's supervisor is out at meetings until tomorrow. They have four tasks:

1. Refresh a chart for a briefing pack the deputy director needs by 16:00 today (about 30 minutes of work).
2. Investigate a data quality issue a colleague flagged this morning, needed for Monday (about 2 hours).
3. Respond to a stakeholder email asking when the quarterly report will be published (about 10 minutes).
4. Continue writing documentation for their analytical approach, due next Friday (ongoing).

What is the most sensible order to tackle them?

- A. 4, 2, 1, 3
- B. 1, 3, 2, 4
- C. 3, 1, 2, 4
- D. 2, 1, 3, 4

**Correct answer: C**

**Explanation:** Both C and B put the two urgent items first, which is right. The best answer is C because the stakeholder email takes only 10 minutes, and clearing it first means the stakeholder is not kept waiting while 30 minutes of chart work follows - and the chart is still finished well before 16:00 (10 + 30 = 40 minutes, done by about 14:40). This is a classic "quick win first when it does not endanger the deadline" pattern. The data quality investigation matters but is not due until Monday, and the documentation has the longest runway. Prioritising like this reflects this role's requirement to adapt ways of working to deliver different project outcomes and requirements.

#### Question 6 (moderate) - Pattern recognition in code output

The candidate runs a simple script that counts records per month in a dataset covering a full year. The output is:

Jan: 1,021  Feb: 987  Mar: 1,044  Apr: 998  May: 1,033  Jun: 12  Jul: 1,019  Aug: 1,002  Sep: 976  Oct: 1,041  Nov: 1,008  Dec: 995

What is the most likely explanation that should be investigated first?

- A. June genuinely had almost no activity
- B. Records for June may be missing or failed to load
- C. The script counted July twice
- D. The dataset covers only eleven months

**Correct answer: B**

**Explanation:** Eleven months cluster tightly around 1,000 records, and June shows only 12 - a value about 99% below the pattern. The most likely explanation for such an extreme outlier in operational data is a data loading or extraction problem, so B is the first thing to investigate. Option A is possible in principle, but a good analyst checks the data pipeline before concluding that reality changed dramatically. Option C is not supported (July's figure looks normal), and option D is contradicted by the output, which shows twelve months. The habit here - "check the data before trusting the surprise" - is central to identifying data quality issues and providing possible solutions.

#### Question 7 (moderate) - Logical deduction about joining datasets

The candidate wants to link a training-records dataset to a staff dataset. They know:

1. Every training record has a staff ID.
2. Some staff have no training records.
3. A few staff IDs in the training records belong to staff who have since left, and leavers are removed from the staff dataset.

If the two datasets are joined keeping only rows that match in both, which statement must be true?

- A. Every staff member will appear in the result
- B. Training records for leavers will not appear in the result
- C. The result will contain more rows than the training dataset
- D. Staff with no training will appear with blank training fields

**Correct answer: B**

**Explanation:** A "keep only matches" join (an inner join) keeps rows only where the staff ID exists in both datasets. Leavers are absent from the staff dataset (fact 3), so their training records cannot match and will be dropped - that is option B. Option A fails because staff with no training records (fact 2) have nothing to match against. Option D describes a different kind of join (a left join from the staff side). Option C is wrong because an inner join cannot produce more rows than the smaller matching set here. Understanding what happens to unmatched records is a core part of data preparation and linkage, and this item tests whether a candidate can reason it through logically.

#### Question 8 (moderate) - Problem solving with incomplete information

A policy colleague asks: "Can you tell me how many users abandoned the online application form last month?" The candidate looks at the analytics data and finds: total form starts, total form completions, and total form errors. Abandonments cannot be directly seen. What is the most defensible first step?

- A. Report form errors as the abandonment figure, since errors cause abandonment
- B. Estimate abandonments as form starts minus form completions, and clearly state this assumption
- C. Tell the colleague the question cannot be answered
- D. Report total form starts, since that is the largest available number

**Correct answer: B**

**Explanation:** Starts minus completions is a reasonable proxy for abandonment, provided the assumption is stated openly (for example, some users may complete the form in a later month, so the estimate is approximate). This shows problem solving: aligning the available data to the business requirement while being honest about limits. Option A confuses one possible cause with the outcome - not every error leads to abandonment and not every abandonment follows an error. Option C gives up too early, and option D answers a different question entirely. In this role, contributing to data products that deliver business impact often means constructing a careful, clearly-caveated answer from imperfect data — always with a supervisor's review.

#### Question 9 (challenging) - Deduction from data model rules

A team's data model for a grants system has these rules:

1. Every application belongs to exactly one applicant.
2. An applicant may have many applications.
3. Every payment is linked to exactly one application.
4. An application may have zero, one, or many payments.

A report shows 5,000 applicants, 8,200 applications, and 7,900 payments. Which statement must be true?

- A. Some applicants have more than one application
- B. Some applications have no payments
- C. Every applicant has at least one application
- D. Some payments are not linked to an application

**Correct answer: A**

**Explanation:** There are 8,200 applications and only 5,000 applicants, and each application belongs to exactly one applicant (rule 1). If every applicant had at most one application, there could be at most 5,000 applications. Since there are more, at least some applicants must hold multiple applications - option A must be true. Option B is tempting because 7,900 payments is fewer than 8,200 applications, but rule 4 allows an application to have many payments, so 7,900 payments could in theory be concentrated on fewer applications; there is no certainty some applications have none - and equally no certainty they all have some - so B is possible but not guaranteed. Option C is not guaranteed either: the applicant table could contain applicants with zero applications. Option D contradicts rule 3. This question rewards understanding the importance of data models and their uses - exactly what this role is expected to explain.

#### Question 10 (challenging) - Multi-step problem solving

The candidate is asked to check whether a dashboard figure is plausible. The dashboard says: "Average processing time in July: 3 days." The following is known:

1. The team processed 600 cases in July.
2. 500 cases took 2 days each.
3. 100 cases were complex and took much longer.

What is the minimum average time the 100 complex cases must have taken for the dashboard figure to be correct?

- A. 5 days
- B. 8 days
- C. 10 days
- D. 3 days

**Correct answer: B**

**Explanation:** If the overall average is 3 days across 600 cases, the total processing time is 600 × 3 = 1,800 case-days. The 500 straightforward cases account for 500 × 2 = 1,000 case-days. That leaves 1,800 - 1,000 = 800 case-days for the 100 complex cases, which is 800 ÷ 100 = 8 days each on average. This kind of sense-check - working backwards from a published average to see whether the underlying numbers hold together - is a valuable quality assurance habit for statistical outputs. If the complex cases were known to average, say, 15 days, the dashboard figure would be known to be wrong, and a candidate in this role would be expected to raise it with a supervisor.

#### Question 11 (challenging) - Prioritising conflicting quality checks

The candidate has one hour before a dataset must be handed to the analysis stage. Only some of these checks can be run in the time available:

1. Duplicate check (10 minutes) - duplicates were found in each of the last three deliveries.
2. Column name check (5 minutes) - the supplier has never changed column names in two years.
3. Full manual review of all 200,000 rows (6 hours) - the most thorough option.
4. Missing values check on the five fields used in the analysis (15 minutes) - these fields drive the final report.
5. Spelling review of a free-text comments field not used in the analysis (45 minutes).

Which combination makes the best use of the hour?

- A. Checks 1, 2, and 4
- B. Check 3 only, delivered late
- C. Checks 2 and 5
- D. Checks 1 and 5

**Correct answer: A**

**Explanation:** Checks 1, 2, and 4 take 10 + 5 + 15 = 30 minutes, fit comfortably in the hour, and target the highest risks: duplicates have a strong recent history of occurring, and missing values in the five analysis-critical fields would directly damage the final report. The column check is cheap insurance even though the risk is low. Option B sacrifices the deadline for thoroughness that is not proportionate to the risk. Options C and D spend 45 minutes on a spelling review of a field the analysis does not even use - effort in the wrong place. Risk-based prioritisation of quality assurance is a mark of maturing analytical judgement, and it reflects this role's emphasis on adapting ways of working to project requirements.

#### Question 12 (challenging) - Diagnosing a broken analytical output

Last month a monthly script produced a report showing about 2,000 service users per region. This month the same script shows exactly double - about 4,000 per region - for every single region. Nothing about the service suggests usage doubled. Which explanation best fits the evidence?

- A. Each region genuinely grew by 100%
- B. The input data was accidentally loaded twice, duplicating every record
- C. One region's data was misallocated to another region
- D. The script's percentage calculation has a rounding error

**Correct answer: B**

**Explanation:** The clue is that every region doubled by the same factor. Genuine growth (A) almost never affects all regions identically and simultaneously. Misallocation between regions (C) would make some regions rise and others fall, not all double. A rounding error (D) would produce small distortions, not a clean doubling of counts. A double-load of the input file, duplicating every record, would exactly double every region's count - matching the evidence perfectly. The practical next step would be to run a duplicate check on a unique identifier and, if confirmed, reload the data. Reasoning from the shape of an anomaly to its most likely cause is a core cognitive skill for anyone who prepares and cleanses data.

#### Question 13 (moderate) - Following a documented analytical approach

A team's documentation for the monthly performance analysis says the steps must run in this order: (1) remove test records, (2) remove duplicates, (3) calculate completion rates, (4) round rates to one decimal place. A new colleague ran the steps in the order 1, 3, 2, 4 and got a completion rate of 87.3% instead of the expected 84.1%. Why does the order matter here?

- A. Rounding before calculating always inflates results
- B. Calculating rates before removing duplicates lets duplicate records distort the rate
- C. Removing test records is optional so the order is irrelevant
- D. The documentation is wrong because the steps are independent

**Correct answer: B**

**Explanation:** The colleague calculated completion rates at step 3 while duplicates were still in the data, then removed duplicates afterwards - too late to fix the rate already computed. If completed cases are more likely to be duplicated (for example, because completion events are logged twice by the system), the rate is pushed upwards, which fits the inflated 87.3% figure. Option A describes a different mistake (and the colleague did not round early anyway). Options C and D dismiss the documentation, but the differing results prove the steps are not independent. This item shows why this role values maintaining analytical approach documentation: a written, ordered method means everyone gets the same, correct answer — and when results differ, the documentation helps establish why.

### Administration tips

- **Brief the candidate on the format before starting**, and let them try a short ungraded question first if the platform or paper format allows it, so unfamiliarity does not distort the result.
- **Hold a consistent time budget.** About 90 seconds per question is realistic for this level; give every candidate for this role level the same limit.
- **Explain adaptive scoring in advance, if the platform uses it.** A candidate who sees questions getting harder can read that as failing rather than doing well; telling them beforehand keeps the experience fair.
- **Watch for the common distractor patterns** described in the explanations above — a repeated number from the question, a plausible but unsupported claim, a value already present elsewhere in the item — and use them to judge whether a wrong answer reflects a rushed read or a genuine reasoning gap.
- **Schedule the session so the candidate is not sitting it exhausted.** Cognitive assessments measure processing speed as well as accuracy, and tiredness affects both.
- **Calibrate your benchmark to associate level.** This is an entry-level role: steady, careful checking matters more than speed, and the items are written with that in mind.

### Common pitfalls

- **Rushed reading.** Many wrong answers come from answering the question the candidate expected rather than the one asked - watch for this especially on the final sentence of a question, which usually states exactly what is wanted.
- **Stopping checks too early.** As in Question 4, the error is often planted late in a table; a candidate who answers after checking only the first row or two is likely to miss it.
- **Getting stuck on one hard question.** A single question carries no more weight than any other. A candidate who visibly struggles on one question and moves on, rather than exhausting the time budget on it, is applying a sound strategy rather than showing weakness.
- **Assuming the dramatic explanation.** When data looks surprising, as in Question 6, a less experienced candidate tends to assume reality changed; a stronger candidate first suspects the pipeline.
- **Reading rising difficulty as failure.** On an adaptive platform, a candidate who becomes visibly anxious as questions get harder may be misreading a sign of doing well - worth clarifying at debrief if it seems to have affected performance.
- **Weighing speed against accuracy.** Note both figures if the platform reports them separately: a candidate who guesses to finish quickly is not stronger than one who is careful but a little slower, and vice versa.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make logical decisions using numerical data. It mimics the data-handling demands of the role, focusing on practical business maths rather than abstract formulas. The question inputs look like the material an associate data analyst handles every day: performance tables, budget figures, capacity numbers, survey results, and dashboard extracts.

The typical format is multiple choice with a strict time limit - often around 20 to 25 minutes for 15 to 20 questions, so roughly a minute to 90 seconds per question. Most assessments allow or provide an onscreen calculator, because the point is interpretation, not mental arithmetic gymnastics. The maths itself is deliberately accessible: percentages, ratios, averages, differences, and simple projections. What makes it challenging is extracting the right numbers quickly and knowing which calculation to perform.

For an associate data analyst, this assessment is arguably the most directly job-relevant of the four. The role requires supporting the development of statistical and analytical insights and reports, identifying data quality issues, and preparing and managing data. All of those tasks rest on numerical fluency: noticing that a percentage does not match its underlying counts, calculating a completion rate correctly, or sense-checking a monthly total. Numeric reasoning results carry real weight for data roles precisely because the fit is this direct. Numeric reasoning is also one of the most coachable assessment types, so a candidate's score here can genuinely reflect deliberate preparation rather than raw aptitude alone - worth bearing in mind when weighing it against the other sections.

### What it measures for this role

- **Percentages, rates and changes** map to **applying statistical and analytical tools and techniques**: supporting statistical insights and reports under supervision means calculating and checking rates, proportions, and period-on-period changes.
- **Reading tables and charts accurately** maps to **data visualisation** and **data preparation and linkage**: before a visualisation can tell a meaningful story, the right figures must be extracted from the source data - and a figure that looks wrong must be spotted.
- **Averages and distributions** map to quality assurance within **applying statistical and analytical tools and techniques**: sense-checking whether an average is plausible given the underlying data is a daily quality assurance habit.
- **Budgets, capacity and simple projections** map to **delivering business impact through data** and **managing a data project**: understanding a problem statement often means quantifying it - how many users, how much backlog, what capacity is needed.
- **Ratios and proportional reasoning** map to **data preparation and linkage**: sampling, weighting, and checking that linked datasets have sensible match rates all rely on ratio thinking.

### Practice questions

An onscreen calculator is normally allowed for this assessment. What matters is the candidate choosing the right calculation and reading the data carefully; the arithmetic is shown in full in every explanation below, for checking a candidate's working line by line.

#### Question 1 (easy) - Percentage of a total

A team's user survey received 1,250 responses. Of these, 350 came from users of assisted digital channels (for example, telephone support). What percentage of responses came from assisted digital users?

- A. 22%
- B. 28%
- C. 32%
- D. 35%

**Correct answer: B**

**Explanation:** Divide the part by the whole and multiply by 100: 350 ÷ 1,250 = 0.28, and 0.28 × 100 = 28%. Option D (35%) is a classic trap: it simply reuses the "350" from the question as a percentage. The reliable approach is to do the division rather than pattern-match digits. Reporting channel splits like this is exactly the kind of figure a candidate in this role would prepare for a survey insights report under supervision.

#### Question 2 (easy) - Reading a table correctly

The table shows digital service transactions (in thousands) by quarter:

| Service | Q1 | Q2 | Q3 | Q4 |
|---------|-----|-----|-----|-----|
| Licence renewals | 120 | 135 | 128 | 142 |
| Address updates | 95 | 88 | 102 | 99 |
| New registrations | 60 | 72 | 75 | 81 |

How many address update transactions were there in Q3?

- A. 102
- B. 102,000
- C. 75,000
- D. 128,000

**Correct answer: B**

**Explanation:** The cell for address updates in Q3 reads 102, but the table header says figures are in thousands, so the true count is 102,000. Option A ignores the scale qualifier - one of the most common numeric reasoning mistakes and one the assessment deliberately tests. Option C reads the wrong row (new registrations) and option D reads the wrong row and column. In this role, scale qualifiers like "in thousands" or "£m" appear constantly in government management information, so checking units is a habit worth watching for in a candidate's working.

#### Question 3 (easy) - Percentage change

A digital service handled 48,000 applications in June and 54,000 in July. What was the percentage increase from June to July?

- A. 6%
- B. 11.1%
- C. 12.5%
- D. 89%

**Correct answer: C**

**Explanation:** Percentage change = (new - old) ÷ old × 100. So (54,000 - 48,000) ÷ 48,000 = 6,000 ÷ 48,000 = 0.125 = 12.5%. Option A confuses the absolute difference (6 thousand) with a percentage. Option B divides by the new value instead of the old one (6,000 ÷ 54,000 ≈ 11.1%) - a very common error, so the rule worth remembering is to divide by the starting value. Option D is the ratio of June to July expressed the wrong way round. Month-on-month change figures like this appear in almost every performance report an associate data analyst helps prepare.

#### Question 4 (moderate) - Completion rates

An online form was started 8,400 times last month. 6,090 of those starts ended in successful completion. A service standard target is a completion rate of at least 75%. Which statement is correct?

- A. The completion rate is 72.5%, below target
- B. The completion rate is 72.5%, above target
- C. The completion rate is 76.1%, above target
- D. The completion rate is 27.5%, below target

**Correct answer: A**

**Explanation:** Completion rate = completions ÷ starts × 100 = 6,090 ÷ 8,400 = 0.725 = 72.5%. The target is 75%, and 72.5% is below 75%, so option A is right. Option C miscalculates. Option D gives the abandonment rate (100% - 72.5% = 27.5%) rather than the completion rate. This two-part structure - calculate, then compare with a target - mirrors real service performance reporting, where getting the comparison right matters as much as the arithmetic.

#### Question 5 (moderate) - Averages and sense-checking

Five caseworkers processed the following numbers of cases in a week: 42, 38, 45, 40, and 15 (the fifth caseworker was on leave for three days). What is the mean number of cases processed per caseworker, and what should be noted when reporting it?

- A. Mean 36; note that one value is unusually low due to leave
- B. Mean 40; no notes needed
- C. Mean 41.25; note that one caseworker was excluded
- D. Mean 45; report the maximum for a fair picture

**Correct answer: A**

**Explanation:** The mean is (42 + 38 + 45 + 40 + 15) ÷ 5 = 180 ÷ 5 = 36. But a good analyst also notices that the mean is dragged down by one atypical value: four of the five caseworkers processed 38 or more, so 36 understates typical performance. Reporting the mean with a note about the leave - or also giving the mean of the four full-time weeks, (42 + 38 + 45 + 40) ÷ 4 = 165 ÷ 4 = 41.25 - gives a fairer picture. Option C's arithmetic is right for the four-person calculation but wrongly claims a caseworker was excluded from the official figure. This question tests both calculation and the quality assurance mindset this role is expected to develop: numbers need context to be honest.

#### Question 6 (moderate) - Ratios in data linkage

The candidate links a dataset of 12,000 benefit applications to an address register. 10,200 records match automatically, 900 match after manual cleaning, and the rest do not match at all. What is the ratio of total matched records to unmatched records, in simplest form?

- A. 34 : 3
- B. 17 : 3
- C. 37 : 3
- D. 12 : 1

**Correct answer: C**

**Explanation:** Total matched = 10,200 + 900 = 11,100. Unmatched = 12,000 - 11,100 = 900. The ratio is 11,100 : 900. Divide both sides by 300: 11,100 ÷ 300 = 37 and 900 ÷ 300 = 3, giving 37 : 3. Option A uses only the automatic matches (10,200 : 900 = 34 : 3) and forgets the manual ones - a realistic mistake when a dataset has more than one match route. Match-rate reporting like this is bread and butter for data preparation and linkage work, and it directly affects how much confidence users can place in linked analysis.

#### Question 7 (moderate) - Budget proportions

A data team's annual tooling budget is £48,000. It is allocated as: analysis software 35%, visualisation licences 25%, cloud compute 30%, and training 10%. How much more is spent on cloud compute than on visualisation licences?

- A. £2,400
- B. £4,800
- C. £14,400
- D. £12,000

**Correct answer: A**

**Explanation:** Cloud compute = 30% of £48,000 = 0.30 × 48,000 = £14,400. Visualisation licences = 25% of £48,000 = 0.25 × 48,000 = £12,000. The difference is £14,400 - £12,000 = £2,400. A faster route: the difference in percentages is 30% - 25% = 5%, and 5% of £48,000 = £2,400. Option C and option D are the individual amounts, not the difference - always reread what the question actually asks. The shortcut method (work with the percentage difference directly) is a great time-saver in timed tests.

#### Question 8 (moderate) - Data storage capacity

A reporting database currently holds 3.2 terabytes of data and grows by roughly 80 gigabytes per month. The infrastructure team plans an upgrade when the database reaches 4 terabytes. Assuming 1 terabyte = 1,000 gigabytes, in how many months will the database reach the upgrade threshold?

- A. 8 months
- B. 10 months
- C. 12 months
- D. 40 months

**Correct answer: B**

**Explanation:** The remaining headroom is 4 TB - 3.2 TB = 0.8 TB = 800 GB. At 80 GB per month, that takes 800 ÷ 80 = 10 months. Option A might come from misreading 0.8 TB as 640 GB or a rushed division; option D divides 3,200 by 80, which answers a different question ("how long did the current data take to accumulate at this rate?"). Unit conversion followed by a simple division is a very common two-step pattern in numeric tests. The safer order is to convert first and note it down, since losing track of the conversion under time pressure is a common source of error.

#### Question 9 (moderate) - Weighted figures across regions

A national digital service reports user satisfaction by region:

| Region | Survey responses | Satisfaction |
|--------|------------------|--------------|
| North  | 2,000            | 80%          |
| Midlands | 1,000          | 74%          |
| South  | 3,000            | 70%          |

What is the overall satisfaction rate across all responses?

- A. 74.7%
- B. 74.0%
- C. 73.7%
- D. 76.0%

**Correct answer: B**

**Explanation:** The three percentages cannot simply be averaged, because the regions have different numbers of responses. Work out the satisfied users in each region: North 80% of 2,000 = 1,600; Midlands 74% of 1,000 = 740; South 70% of 3,000 = 2,100. Total satisfied = 1,600 + 740 + 2,100 = 4,440. Total responses = 2,000 + 1,000 + 3,000 = 6,000. Overall rate = 4,440 ÷ 6,000 = 0.74 = 74.0%. This can be verified: 6,000 × 0.74 = 4,440. The unweighted average (80 + 74 + 70) ÷ 3 = 74.7% (option A) looks plausible but is wrong because it ignores the response volumes - the South, with the most responses and the lowest satisfaction, pulls the true figure down. Weighted averages are essential whenever rates are combined across groups of different sizes - a daily task when supporting statistical reports under supervision.

#### Question 10 (challenging) - Percentage points versus percentages

A service's digital take-up rose from 60% of all transactions in 2024 to 72% in 2025. Which two statements are both correct?

- A. Take-up rose by 12 percentage points, which is a 20% relative increase
- B. Take-up rose by 12%, which is 12 percentage points
- C. Take-up rose by 20 percentage points, which is a 12% relative increase
- D. Take-up rose by 72% overall

**Correct answer: A**

**Explanation:** The difference between 72% and 60% is 12 percentage points. As a relative change, 12 ÷ 60 = 0.20 = a 20% increase. Both parts of option A are correct. Option B muddles the two concepts: "rose by 12%" would mean 60% × 1.12 = 67.2%, not 72%. Confusing percentages with percentage points is one of the most common errors in government reporting, and analysts are often the last line of defence against it. A candidate who can explain this distinction clearly is demonstrating exactly the communication skill the role framework names.

#### Question 11 (challenging) - Projecting a backlog

A casework team has a backlog of 5,400 cases. Each week the team receives 1,200 new cases and can process 1,500 cases. If these rates stay constant, how many weeks will it take to clear the backlog completely?

- A. 3.6 weeks
- B. 4.5 weeks
- C. 18 weeks
- D. 27 weeks

**Correct answer: C**

**Explanation:** The backlog shrinks by the net difference each week: 1,500 processed - 1,200 received = 300 cases of net reduction per week. Time to clear = 5,400 ÷ 300 = 18 weeks. Option A divides the backlog by processing capacity alone (5,400 ÷ 1,500 = 3.6), forgetting that new cases keep arriving - the most tempting wrong answer. This "net rate" structure appears constantly in operational analysis: queues, backlogs, and storage all fill and drain at the same time, and the analysis must use the difference between the rates.

#### Question 12 (challenging) - Sampling for a quality check

The candidate needs to manually quality-check a sample from a dataset of 24,000 records. A team's practice is to check 2.5% of records, sampled evenly across the dataset's four source systems, which contributed records in the ratio 3 : 3 : 4 : 2. How many records should be checked from the largest source system?

- A. 600
- B. 200
- C. 150
- D. 250

**Correct answer: B**

**Explanation:** First find the total sample: 2.5% of 24,000 = 0.025 × 24,000 = 600 records. The ratio 3 : 3 : 4 : 2 has 3 + 3 + 4 + 2 = 12 parts, so each part is 600 ÷ 12 = 50 records. The largest system has 4 parts: 4 × 50 = 200 records. Option A stops after the first step (the whole sample, not the largest system's share). Option C is a 3-part share and option D has no basis. Multi-step questions like this reward writing down intermediate results - total sample, parts, per-part size - so each step stays simple.

#### Question 13 (challenging) - Interpreting a performance dashboard

A dashboard shows these metrics for an online licensing service in October:

- Transactions: 40,000 (September: 32,000)
- Failure rate: 2.5% (September: 3.0%)
- Average cost per transaction: £1.90 (September: £2.10)

Which statement is supported by the figures?

- A. The number of failed transactions fell from September to October
- B. The number of failed transactions rose from September to October
- C. Total transaction costs fell from September to October
- D. The service processed fewer transactions but more cheaply

**Correct answer: B**

**Explanation:** A falling failure rate does not guarantee fewer failures when volume rises. September failures: 3.0% of 32,000 = 960. October failures: 2.5% of 40,000 = 1,000. Failures actually rose from 960 to 1,000, so B is supported and A is contradicted. For option C, total costs were September: 32,000 × £2.10 = £67,200 and October: 40,000 × £1.90 = £76,000 - costs rose, so C is wrong. Option D is wrong because transactions increased. This is a superb example of why analysts must multiply rates by volumes before drawing conclusions - dashboards full of improving rates can still hide rising absolute numbers, and spotting that is the kind of insight that delivers real business impact.

#### Question 14 (challenging) - Reconciling two data sources

Two systems record completed applications for the same service. System A (the case management system) shows 18,240 completions for the quarter. System B (the payments system) shows 17,556 completions. A supervisor asks: "What percentage of System A's figure is unaccounted for in System B?"

- A. 3.75%
- B. 3.9%
- C. 6.84%
- D. 96.25%

**Correct answer: A**

**Explanation:** The gap is 18,240 - 17,556 = 684 records. As a percentage of System A's figure: 684 ÷ 18,240 = 0.0375 = 3.75%. Option B divides by System B's figure instead (684 ÷ 17,556 ≈ 3.9%) - close enough to look right, which is why the question asks specifically "of System A's figure". Option D is the proportion accounted for, not unaccounted for. Reconciliation gaps like this one are a classic data quality issue: the follow-up in real work would be investigating whether the 684 records are timing differences (completions not yet paid), genuine errors, or duplicates in System A.

#### Question 15 (challenging) - Cost-benefit of automation

A team spends 6 hours per week manually preparing a weekly report. A colleague proposes writing a script that would take 30 hours to build and reduce the manual work to 1 hour per week. Ignoring other costs, after how many weeks of use does the time invested in the script pay for itself?

- A. 5 weeks
- B. 6 weeks
- C. 30 weeks
- D. 4 weeks

**Correct answer: B**

**Explanation:** The script saves 6 - 1 = 5 hours per week. The build cost is 30 hours. Break-even = 30 ÷ 5 = 6 weeks. After six weeks the cumulative saving (6 × 5 = 30 hours) equals the build investment, and every week after that is pure gain. Option A divides by the original 6 hours; option C forgets that some manual work remains. This simple payback calculation is a persuasive way to explain the importance of coding for analysis to non-technical decision-makers - a skill the role framework explicitly names - because it turns a technical proposal into a business case.

#### Question 16 (moderate) - Checking a chart against its source data

The candidate is quality-assuring a colleague's bar chart for a report. The chart shows complaint volumes of roughly 300, 450, and 600 for three service channels, and the caption says "Telephone complaints are three times webchat complaints." The source table reads: webchat 298, post 452, telephone 597. Which quality assurance conclusion is right?

- A. The chart and caption are both consistent with the source data
- B. The chart matches the data but the caption overstates the ratio, which is closer to two to one
- C. The caption is right but the chart bars are in the wrong order
- D. Both the chart and the caption are wrong

**Correct answer: B**

**Explanation:** Check the chart first: 298, 452, and 597 round naturally to roughly 300, 450, and 600, so the bars fairly represent the source. Now check the caption's claim: telephone (597) divided by webchat (298) = 597 ÷ 298 ≈ 2.0, so telephone complaints are about twice webchat complaints, not three times. The caption overstates the relationship, so option B is correct. Nothing in the question states the intended bar order, so option C has no basis. This two-part check - do the visuals match the data, and does the written claim match the arithmetic? - is precisely the quality assurance this role is expected to value in statistical and analytical outputs, and captions are where errors most often hide, because they are written last and checked least.

#### Question 17 (moderate) - Converting between reporting periods

A service reports 1,680 support tickets in a 28-day reporting period. A stakeholder asks: "Roughly how many tickets should we expect in a full 12-month year, assuming the rate stays constant?" Which estimate is best?

- A. About 20,160 tickets
- B. About 21,900 tickets
- C. About 61,320 tickets
- D. About 6,720 tickets

**Correct answer: B**

**Explanation:** First find the daily rate: 1,680 ÷ 28 = 60 tickets per day. A year has 365 days, so 60 × 365 = 21,900 tickets. Option A comes from multiplying the 28-day figure by 12 (1,680 × 12 = 20,160), treating a 28-day period as a month - but twelve 28-day periods cover only 336 days, so this undercounts by about a month. Option D multiplies by only 4, and option C has no sensible basis. Period conversions like this arise constantly in government reporting, where operational systems often use 28-day cycles but boards want monthly or annual views - and the 28-day-versus-calendar-month distinction is a genuine source of real-world reporting errors, not just a test trick. When rates are involved, the safe habit is to go down to a common unit (per day) before scaling up.

### Administration tips

- **Watch for the core four operations** — percentages, percentage change, averages, and ratios — since almost every item is one of these or a two-step combination; a candidate fluent in these should move steadily through the section.
- **Note whether the candidate checks units and scale qualifiers** before calculating. Missing a "£m" or "in thousands" qualifier, as in Question 2, is one of the most common - and most instructive - errors to see in a candidate's working.
- **Ask to see intermediate working where possible.** Multi-step questions (Questions 12 and 15) are much clearer to mark when a candidate has written down each stage rather than working entirely in their head.
- **Provide a calculator, and make clear it is expected.** The section tests interpretation and choice of operation, not mental arithmetic; withholding a calculator changes what is being measured.
- **Hold a consistent time budget** — roughly a minute to 90 seconds per question — and apply it to every candidate for this role level.
- **Look for estimation as a checking habit.** A candidate who visibly sense-checks an answer ("that should be a bit above 70%") before committing to it is showing exactly the quality assurance instinct this role needs.

### Common pitfalls

- **Misreading chart and table labels.** Confusing monthly with annual data, or missing a scale qualifier like "in thousands", is the single most common source of wrong answers - and of real errors in government reporting.
- **Dividing by the wrong base.** Percentage change uses the starting value; "percentage of A's figure" means dividing by A's figure. Questions 3 and 14 both test this deliberately, and it is one of the more diagnostic mistakes to see repeated.
- **Averaging percentages without weighting.** As Question 9 shows, rates from groups of different sizes must be weighted by group size; the unweighted average is almost always among the wrong options, and choosing it is worth noting.
- **Over-calculating.** A candidate who performs a five-step calculation where a one-step shortcut existed (Question 7) is not necessarily wrong, but is working less efficiently than the item allows for.
- **Time-sink questions.** One stubborn multi-stage problem can absorb several minutes. A candidate who sets a personal limit, commits to a best answer, and moves on is applying good judgement rather than giving up.
- **Confusing rates with absolute numbers.** An improving failure rate can hide rising failures when volumes grow (Question 13). A candidate who answers from the rate alone, without checking the underlying counts, has missed the point of the item.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written workplace information. It mirrors the exact reading demands of the role: data governance policies, quality standards, project briefs, stakeholder emails, and analytical reports. The passages use real industry terminology, and the questions test whether a candidate can work strictly from what the text says.

The most common format gives the candidate a passage followed by statements to judge as **True** (the passage says or logically guarantees this), **False** (the passage contradicts this), or **Cannot Say** (the passage gives insufficient information either way). Some tests add multiple-choice comprehension questions about the passage's meaning, tone, or main point. Timing is tight - often less than a minute per question - because the test simulates workplace reading under deadline pressure.

The single most important rule for a candidate to apply: answer only from the text provided, setting outside knowledge aside. Even where a candidate knows from experience that something is usually true in government data work, if the passage does not say it, the correct answer may be Cannot Say. This can feel strange at first, but it measures a genuinely important professional skill: reading precisely what a policy, standard, or specification actually commits to, rather than what it is assumed to mean.

For an associate data analyst, this matters enormously. The role requires explaining the importance of data governance policies, following appropriate standards and practices, understanding problem statements, and communicating data and conclusions in appropriate formats. Every one of those duties starts with accurate reading. Misreading a retention policy, a data sharing agreement, or a project brief can cause real harm, which is why employers test this skill carefully.

### What it measures for this role

- **Precise comprehension of policy text** maps to **data management** and **data ethics and privacy**: explaining the importance of data governance policies requires reading exactly what those policies do and do not require.
- **Distinguishing stated facts from assumptions** maps to **applying statistical and analytical tools and techniques**: quality-assured analysis reports claim only what the data supports - the same discipline True/False/Cannot Say questions train.
- **Understanding problem statements** maps to **managing a data project**: the role requires understanding a problem statement and explaining the intended outcome; verbal reasoning tests whether a candidate extracts requirements accurately from a brief.
- **Reading stakeholder communications** maps to **communicating between the technical and non-technical**: knowing the types of communication used with internal and external stakeholders starts with interpreting their messages correctly.
- **Identifying main points and tone** maps to **data visualisation** and storytelling: telling a meaningful story with data requires recognising what the key message of a document actually is.

### Practice questions

Present each passage to the candidate, who should judge the statements strictly on the text. A candidate who reads the passage once for structure, then returns to it to verify each statement against the exact wording, is usually working efficiently.

#### Passage A - Data retention policy extract

*"Under this department's data retention policy, personal data collected for service improvement research must be deleted or fully anonymised within 24 months of collection, unless a documented exemption is approved by the Data Protection Officer. Pseudonymised data, where identifiers are replaced with codes but a key exists, is treated as personal data for the purposes of this policy. Teams must record all retention decisions in the departmental data catalogue. Aggregated statistics that cannot identify any individual fall outside the scope of this policy."*

#### Question 1 (easy)

True, False, or Cannot Say: Pseudonymised research data must be deleted or fully anonymised within 24 months unless an exemption is approved.

**Correct answer: True**

**Explanation:** The policy says pseudonymised data "is treated as personal data for the purposes of this policy", and personal data "must be deleted or fully anonymised within 24 months of collection, unless a documented exemption is approved". Chaining the two sentences gives the statement exactly. This kind of two-step reading - applying a definition from one sentence to a rule in another - is very common in policy documents, and in verbal tests.

#### Question 2 (easy)

True, False, or Cannot Say: Aggregated statistics that cannot identify any individual must be recorded in the departmental data catalogue.

**Correct answer: False**

**Explanation:** The final sentence says such aggregated statistics "fall outside the scope of this policy". The catalogue requirement is a rule of this policy, so it does not apply to out-of-scope data. Watch for this: the passage says teams must record "all retention decisions", which sounds sweeping, but the scope sentence limits the whole policy. Reading a document's scope statement first is a habit worth noting favourably in a candidate.

#### Question 3 (moderate)

True, False, or Cannot Say: The Data Protection Officer approves most exemption requests within one month.

**Correct answer: Cannot Say**

**Explanation:** The passage says exemptions must be "approved by the Data Protection Officer" but gives no information about how many requests are approved or how quickly. A candidate's workplace experience might suggest a typical timescale, but the text is silent, so the only defensible answer is Cannot Say. Resisting the pull of plausible outside knowledge is the core skill this format measures.

#### Question 4 (moderate)

True, False, or Cannot Say: Personal data collected for purposes other than service improvement research may be kept for longer than 24 months.

**Correct answer: Cannot Say**

**Explanation:** The policy extract covers only "personal data collected for service improvement research". It says nothing about data collected for other purposes - other rules may exist, but they are not in this text. Notice the statement is not False: the passage does not contradict it; it simply does not address it. The False/Cannot Say boundary is exactly this: False needs a contradiction in the text, Cannot Say needs only silence.

#### Passage B - Email from a policy stakeholder

*"Hi team - thanks for the draft dashboard. The regional breakdown is useful, but the minister's office has asked that Thursday's pack focuses on national trends only. Please also note that the figures for the North East still look implausibly low; until the data supplier confirms the fix they promised us last week, we should not publish any regional figures externally. Internal circulation for quality assurance purposes is fine. Could you have a national-only version ready by Wednesday noon so we have time for sign-off?"*

#### Question 5 (easy)

True, False, or Cannot Say: The stakeholder wants a national-only version of the dashboard by Wednesday noon.

**Correct answer: True**

**Explanation:** The final sentence asks directly: "Could you have a national-only version ready by Wednesday noon". Although phrased politely as a question - very common in UK workplace emails - it is a clear request with a clear deadline. Reading polite phrasing as a firm requirement is part of the communicating with stakeholders skill this role names.

#### Question 6 (moderate)

True, False, or Cannot Say: Regional figures must not be circulated internally.

**Correct answer: False**

**Explanation:** The email says "we should not publish any regional figures externally. Internal circulation for quality assurance purposes is fine." The statement contradicts the text's explicit permission for internal circulation, so it is False. Watch for the external/internal distinction: a rushed reader sees "should not publish any regional figures" and stops before the qualifier. In real data work, exactly this kind of misreading causes teams to either over-share or over-restrict data.

#### Question 7 (moderate)

True, False, or Cannot Say: The data supplier has fixed the North East data issue.

**Correct answer: Cannot Say**

**Explanation:** The email says the supplier "promised" a fix last week and that regional figures should be held back "until the data supplier confirms the fix". A promise of a fix is not confirmation that the fix has happened - the email treats it as pending. But equally the text does not say the fix has failed. The truthful position is that the outcome is not yet known, so Cannot Say. Distinguishing a "likely or promised outcome" from a "stated fact" is one of the most heavily tested skills in verbal reasoning.

#### Question 8 (moderate) - Multiple choice

Which of the following best summarises the main request in the stakeholder's email?

- A. Investigate why the North East figures are implausibly low
- B. Produce a national-trends-only dashboard version by Wednesday noon for sign-off
- C. Stop all circulation of the dashboard until further notice
- D. Add more regional breakdowns to Thursday's pack

**Correct answer: B**

**Explanation:** The email's central, actionable request is the national-only version by Wednesday noon (option B). The North East issue (A) is context and a caution about publication, not a request for the analyst to investigate - the fix sits with the data supplier. Option C overstates the restriction (internal circulation is fine), and option D reverses the instruction. Identifying the main point among surrounding detail is precisely what this role requires when understanding a problem statement in a data project.

#### Passage C - Data quality standard extract

*"All datasets loaded to the corporate analytical platform must pass automated validation before use. Validation checks completeness of mandatory fields, conformity of formats to the published data dictionary, and referential integrity against master reference lists. A dataset failing any check is quarantined. Quarantined datasets may be released for analysis only when the data owner documents the failure's cause and either corrects the data or accepts the risk in writing. Analysts must not bypass quarantine, even for urgent requests. Where a reference list is itself out of date, the analyst should raise a reference data change request rather than amending the list directly."*

#### Question 9 (moderate)

True, False, or Cannot Say: A dataset that fails only the format conformity check will be quarantined.

**Correct answer: True**

**Explanation:** The standard says "a dataset failing any check is quarantined". Format conformity is one of the listed checks, and "any" means one failure is enough. The word "only" in the statement may prompt hesitation, but it does not change the logic: failing one check triggers quarantine regardless of the others passing. Quantifier words - any, all, only, some - carry most of the logical weight in standards documents, and in these tests.

#### Question 10 (challenging)

True, False, or Cannot Say: An analyst may release a quarantined dataset for analysis if the request is urgent and the analyst documents the failure's cause.

**Correct answer: False**

**Explanation:** Two parts of the text defeat this statement. First, release requires the **data owner** - not the analyst - to document the cause and either correct the data or accept the risk in writing. Second, "analysts must not bypass quarantine, even for urgent requests". The statement swaps the responsible role and invokes urgency the standard explicitly rules out, so it contradicts the text and is False. Role-based rules ("who may do what") are a favourite trap: check the actor, not just the action.

#### Question 11 (challenging)

True, False, or Cannot Say: Reference lists on the platform are updated every month.

**Correct answer: Cannot Say**

**Explanation:** The passage acknowledges that a reference list can be "out of date" and describes what an analyst should do about it (raise a change request), but it never states how often lists are updated. No schedule is given, so Cannot Say. Notice how a text can discuss a topic - here, reference data currency - without providing the specific fact a statement claims. Proximity of topic is not evidence.

#### Question 12 (challenging) - Multiple choice

According to the passage, what should an analyst do if they find the master reference list itself is out of date?

- A. Amend the reference list directly so validation passes
- B. Bypass the quarantine because the failure is not the dataset's fault
- C. Raise a reference data change request
- D. Ask the data owner to accept the risk in writing

**Correct answer: C**

**Explanation:** The final sentence addresses this exact situation: "the analyst should raise a reference data change request rather than amending the list directly". Option A is explicitly ruled out by that sentence, and option B is ruled out by the no-bypass rule. Option D is the release route for a quarantined dataset generally, but the passage prescribes a more specific action for the out-of-date reference list case. When a passage offers both a general rule and a specific rule, the specific rule answers the specific question.

#### Passage D - Extract from an analytical report

*"Digital applications rose 14% year on year, while paper applications fell 9%. The research team attributes most of the digital growth to the simplified sign-in process introduced in April, although the concurrent marketing campaign may also have contributed. Satisfaction among digital applicants averaged 4.2 out of 5, compared with 3.8 for paper applicants. However, respondents using assistive technology reported lower satisfaction (3.4), and the sample for this group was small, so this figure should be treated with caution. The team recommends further research with assistive technology users before drawing conclusions about accessibility barriers."*

#### Question 13 (moderate)

True, False, or Cannot Say: The simplified sign-in process caused the entire increase in digital applications.

**Correct answer: False**

**Explanation:** The report attributes "most" - not all - of the growth to the sign-in change, and explicitly says the marketing campaign "may also have contributed". Claiming the sign-in change caused the entire increase contradicts the report's carefully hedged wording. Analytical reports are written with precision about causation, and the item checks whether hedging words ("most", "may", "attributes") are read as carefully as they were written. This mirrors the quality assurance standard expected of the role's own reports.

#### Question 14 (moderate)

True, False, or Cannot Say: The satisfaction figure for assistive technology users is based on a small sample.

**Correct answer: True**

**Explanation:** The report states directly: "the sample for this group was small, so this figure should be treated with caution". The statement restates the text almost exactly. Not every question is a trap; some simply reward accurate reading. A confident True answer is right when the text is explicit — a candidate who talks themselves into Cannot Say despite plain text is overthinking the item.

#### Question 15 (challenging)

True, False, or Cannot Say: Paper applicants were less satisfied than digital applicants because the paper process is slower.

**Correct answer: Cannot Say**

**Explanation:** The satisfaction gap is stated (3.8 versus 4.2), so the comparison itself is true - but the statement goes further and asserts a *reason*: "because the paper process is slower". The passage never mentions processing speed at all. A statement that bundles a true fact with an unsupported explanation cannot be judged True; and since the text does not contradict the explanation either, the answer is Cannot Say. Read compound statements clause by clause - a single unsupported clause changes the answer.

#### Question 16 (challenging) - Multiple choice

What is the report's position on accessibility barriers in the digital service?

- A. It concludes that accessibility barriers exist and must be fixed urgently
- B. It concludes there are no accessibility barriers because overall satisfaction is high
- C. It notes a cautionary signal from a small sample and recommends further research before drawing conclusions
- D. It makes no reference to users with accessibility needs

**Correct answer: C**

**Explanation:** The report flags lower satisfaction (3.4) among assistive technology users, immediately cautions that the sample was small, and "recommends further research... before drawing conclusions about accessibility barriers". That is precisely option C: a signal, a caveat, and a next step. Options A and B both overstate - in opposite directions - what the evidence supports, and option D is contradicted by the passage. This measured position is a model for the role's own practice: an associate data analyst is expected to develop inclusive, accessible outputs that recognise different user needs, and that starts with taking signals like this one seriously without exaggerating them.

#### Passage E - Project brief for a new data product

*"The Channel Insight project will build a monthly data product showing how users move between the department's contact channels: web, telephone, webchat, and post. Phase one covers web and telephone only; webchat and post will be added in phase two, subject to a data sharing agreement with the outsourced contact centre provider. The product's primary users are operational managers, who need channel volumes within five working days of month end. The project board has agreed that no individual-level data will be included in the product; all outputs will be aggregated to channel, region, and week. An associate data analyst will support the build under the direction of a senior data analyst, with responsibility for preparing and validating the monthly source extracts."*

#### Question 17 (moderate)

True, False, or Cannot Say: Phase one of the product will include webchat data.

**Correct answer: False**

**Explanation:** The brief states plainly: "Phase one covers web and telephone only; webchat and post will be added in phase two". The statement directly contradicts this, so it is False. Note the practical importance: an associate analyst who misread the phasing might spend days chasing webchat extracts that are not needed yet - and are not even covered by a data sharing agreement. Accurate reading of a brief's scope is the first act of understanding a problem statement.

#### Question 18 (challenging)

True, False, or Cannot Say: The data sharing agreement with the contact centre provider has been signed.

**Correct answer: Cannot Say**

**Explanation:** The brief says phase two is "subject to a data sharing agreement with the outsourced contact centre provider". "Subject to" signals that the agreement is a condition - but not whether it is signed, in negotiation, or not yet started. The text neither confirms nor denies its status, so Cannot Say. Compare this carefully with Question 7 in Passage B: conditional and pending language ("subject to", "promised", "planned") is one of the most reliable sources of Cannot Say answers, because it describes a dependency without reporting its outcome.

#### Question 19 (challenging) - Multiple choice

According to the brief, which of the following is part of the associate data analyst's stated responsibility?

- A. Directing the build of the data product
- B. Negotiating the data sharing agreement with the provider
- C. Preparing and validating the monthly source extracts
- D. Deciding which aggregation levels the outputs will use

**Correct answer: C**

**Explanation:** The final sentence assigns the associate "responsibility for preparing and validating the monthly source extracts", under the direction of a senior data analyst - so option C matches the text exactly. Option A inverts the reporting relationship: the senior analyst directs, the associate supports. Option B involves the provider agreement, which the brief attaches to phase two and to no named individual. Option D is settled already: the project board has agreed the aggregation (channel, region, and week), so it is not a decision left open for any analyst. This is the same actor-checking discipline as Question 10 - and it maps directly onto the role's real duty to understand roles within a multi-disciplinary team, including the analyst's own.

#### Question 20 (moderate)

True, False, or Cannot Say: Operational managers need channel volumes within five working days of month end.

**Correct answer: True**

**Explanation:** The brief states this requirement word for word: the primary users "need channel volumes within five working days of month end". When a statement matches the text this directly, True is the confident answer, and time is better spent on harder questions. In real work, this sentence would drive the whole monthly timetable for the analyst preparing the extracts - requirements about timing are among the most operationally important details to extract accurately from any brief.

#### Question 21 (challenging)

True, False, or Cannot Say: The data product will show which individual users switched from telephone to web.

**Correct answer: False**

**Explanation:** The board "has agreed that no individual-level data will be included in the product; all outputs will be aggregated to channel, region, and week". Showing which individual users switched channels would require exactly the individual-level data the brief rules out, so the statement contradicts the text and is False. This is a subtle one: the project's stated purpose is to show "how users move between... channels", which sounds individual - but the aggregation sentence means movement will be visible only in aggregate patterns, not per person. When two sentences seem to pull in different directions, the more specific and restrictive one usually governs, and here it also reflects the privacy-by-design thinking the data ethics and privacy skill asks the role to value.

### Administration tips

- **Use realistic passages.** GOV.UK service standards, data policies, and published statistical bulletins make good source material if you want to build further items in this style beyond the ones given here.
- **Watch for how a candidate handles hedged language.** Quantifiers (all, any, some, only, most), modal verbs (must, may, should), and hedges (attributes, suggests, likely) decide most answers; a candidate who reads past them tends to answer confidently but wrongly.
- **Check whether the candidate tracks the actor as well as the action.** Standards assign duties to specific roles - data owner, analyst, Data Protection Officer. Question 10 shows how swapping the actor flips the correct answer, and a candidate who misses this is worth a closer look at debrief.
- **Hold a consistent, tight time limit** — under a minute per statement is typical for this format — applied equally to every candidate for this role level.
- **Score False and Cannot Say separately from wrong Trues where you can.** A candidate who confuses False with Cannot Say is making a different kind of error from one who misreads an explicit statement, and the distinction is worth noting for debrief.
- **Remember this skill transfers directly to the job.** Accurate reading of policy, briefs, and stakeholder messages is central to the role, so this section is a strong predictor and worth weighting accordingly.

### Common pitfalls

- **Bringing in outside knowledge.** A candidate may know how retention policies usually work, but the item asks only about the passage given. If the text is silent, Cannot Say is correct regardless of real-world experience.
- **Confusing False with Cannot Say.** False requires the passage to contradict the statement; silence is not contradiction. Questions 4 and 11 both sit on this boundary, and are useful for spotting the confusion.
- **Misreading hedged language as fact.** "Promised a fix" is not "fixed" (Question 7); "attributes most" is not "caused all" (Question 13). A candidate who treats a hedge as a firm claim is missing a genuinely tested skill.
- **Missing qualifiers.** External versus internal, personal versus aggregated, urgent versus routine - a single qualifying word can reverse the meaning of a sentence, as in Question 6.
- **Poor time management.** A candidate who spends too long absorbing the full passage before reaching the questions often runs out of time; skimming for structure first, then hunting for keywords per statement, is the faster approach.
- **Overthinking explicit statements.** When the passage says the thing plainly (Question 14), the confident True answer is correct. Second-guessing clear text into Cannot Say costs time and marks, and is worth flagging as a pattern if it recurs.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skills, and professional conduct. Instead of testing logic or maths, it presents realistic workplace dilemmas - the kind an associate data analyst genuinely meets in a UK government team - and asks how the candidate would respond. It measures how well a candidate's choices align with the values and behaviours the organisation needs: user focus, transparency, collaboration, accessibility, inclusion, and integrity with data.

The format usually presents a short scenario followed by three to five possible responses. A candidate is asked either to pick the **most effective** and **least effective** responses, or to rank or rate all the options. Timing is generous or absent, because the assessment cares about a candidate's natural judgement, not their speed. Importantly, there is often no perfectly right answer - several options may be reasonable - but there is usually a best answer for the role and culture, and usually one clearly weakest option.

For this level, scenarios typically explore: knowing when to work independently and when to seek supervision; handling data ethics and privacy concerns; communicating honestly about errors and uncertainty; working in a multi-disciplinary team; and balancing stakeholder pressure against quality standards. At associate level, a candidate is not expected to solve everything alone - in fact, options that show sensible use of supervision often score higher than heroic solo efforts. Equally, options that dodge responsibility, hide problems, or ignore user needs should score poorly.

The public sector context matters. UK government organisations place strong weight on the Civil Service values of integrity, honesty, objectivity, and impartiality, alongside digital and data principles: meeting user needs, working in the open, protecting personal data, and making services accessible and inclusive. Keep these in mind when judging each option and scoring a candidate's choices.

### What it measures for this role

- **Escalation judgement** maps to **data ethics and privacy** ("identify appropriate channels to discuss ethical issues, with support") and to working "under supervision" across the role's skills: knowing when and how to involve others is a scored behaviour, not a weakness.
- **Honest communication about data** maps to **communicating between the technical and non-technical** and quality assurance in **applying statistical and analytical tools and techniques**: how a candidate handles errors, caveats, and uncertainty under pressure.
- **Team collaboration** maps to the role-level duty to "work with others to understand roles within a multi-disciplinary team and how data analysts work with them".
- **User focus and inclusion** map to **data visualisation** ("develop inclusive, accessible data visualisations that recognise different user needs") and **delivering business impact through data**.
- **Adaptability** maps to **managing a data project**: "adapt your ways of working to deliver different project outcomes and requirements".

### Practice questions

Present each scenario to the candidate and ask them to decide which option is most effective and which is least effective before hearing the explanation. There is real value in a candidate committing to an answer first — it reveals their instincts, which is exactly what the assessment measures.

#### Question 1 (easy) - A mistake in published figures

The candidate notices that a chart they prepared last week, already circulated to the policy team, used the wrong month's data. The error makes performance look slightly better than it was. Nobody else has noticed. What should they do?

- A. Say nothing; the difference is small and the next report will use correct data anyway.
- B. Quietly correct the file in the shared folder so future viewers see the right version.
- C. Tell the supervisor promptly, explain the error and its size, and offer to send a correction to the policy team.
- D. Email the policy team directly with a correction before telling anyone in the candidate's own team.

**Most effective: C. Least effective: A.**

**Explanation:** Option C shows integrity, transparency, and appropriate use of supervision - the three things this scenario tests. The candidate owns the error, quantifies it, and proposes the fix, while letting a supervisor help judge the communication route: exactly right for an associate. Option A is the least effective because concealing a known error in circulated figures breaches honesty and objectivity, and small errors that surface later damage trust far more than prompt corrections do. Option B fixes the artefact but hides the fact that wrong figures informed readers - a silent correction is still concealment. Option D has honest intent but bypasses the team: a supervisor may know about downstream uses, and a correction sent without context can cause confusion. Promptness plus openness plus supervision is the pattern to look for.

#### Question 2 (easy) - An unclear request

A policy colleague asks the candidate to "pull together some numbers on service usage for a meeting tomorrow". They are not sure which service, which time period, or what the meeting needs to decide. Their supervisor is available. What should they do?

- A. Ask the colleague two or three quick clarifying questions about the decision, service, and period before starting.
- B. Compile every usage statistic that can be found so that whatever they need is somewhere in the pack.
- C. Guess the most likely interpretation and produce a focused summary based on it.
- D. Tell the colleague that help cannot be given without a properly written requirements document.

**Most effective: A. Least effective: D.**

**Explanation:** Option A treats the request as a problem statement to understand - which this role explicitly requires - and a few sharp questions ("What decision is the meeting making? Which service? Which months?") take minutes and prevent wasted hours. Option B produces an unfocused data dump that pushes the analytical work onto the reader; it feels safe but serves nobody, and it is the classic trap for new analysts. Option C at least produces something usable, but guessing when clarification was freely available is an unnecessary risk. Option D is the least effective: hiding behind process to refuse a reasonable colleague damages collaboration, and multi-disciplinary teamwork - a named duty at this level - means meeting people partway, not demanding paperwork for a simple query.

#### Question 3 (moderate) - Pressure to remove a caveat

A stakeholder reviewing the candidate's draft analysis asks them to delete the caveat noting that one region's data is incomplete, saying "it makes the report look weak and the gap is only small". Their supervisor is on leave today; the report is due tomorrow. What should they do?

- A. Remove the caveat; the stakeholder knows the audience better than the candidate does.
- B. Keep the caveat, explain briefly why it protects the analysis and its readers, and offer to reword it more concisely if that helps.
- C. Refuse outright and escalate to the stakeholder's manager about pressure to alter analysis.
- D. Remove the caveat from the main page but leave the detail in a technical annex nobody reads.

**Most effective: B. Least effective: A.**

**Explanation:** Option B holds the professional line - honesty about data limitations is central to quality-assured statistical output - while staying collaborative: offering a tighter wording addresses the stakeholder's legitimate concern about presentation without sacrificing accuracy. Option A is least effective: silently dropping a known limitation misleads readers and, once discovered, undermines both the candidate's credibility and the team's. Option D is a subtler version of the same problem: burying a material caveat where readers will not see it is presentation-by-concealment. Option C jumps two steps too far - treating a first request as misconduct escalates conflict unnecessarily; escalation becomes right only if pressure continues after a reasoned refusal, and the natural first escalation would be to the candidate's own supervisor on their return, or a senior analyst on the day if the deadline forces the issue.

#### Question 4 (moderate) - A privacy concern in a shared dataset

While preparing a dataset for a colleague in another team, the candidate notices it contains full names and dates of birth, although the analysis they described needs only age bands and regions. What should they do?

- A. Send the dataset as it is; the colleague works for the same department, so sharing is fine.
- B. Remove the identifying fields, send the minimised dataset with age bands and regions, and note what was removed and why.
- C. Decline to share anything until a full data protection impact assessment is completed.
- D. Send the full dataset but ask the colleague to delete the name and date of birth columns after receiving it.

**Most effective: B. Least effective: D.**

**Explanation:** Option B applies data minimisation - share only what the purpose needs - which is the heart of practical data ethics and privacy, a named skill for this role. Noting what was removed keeps the process transparent and invites correction if the colleague genuinely needs more (in which case the extra need can be justified properly). Option D is least effective because it transfers identifiable data unnecessarily and then relies on the recipient to fix the exposure after the fact - the risk has already happened by the time anything is deleted. Option A wrongly assumes internal sharing needs no thought; purpose limitation applies inside organisations too. Option C is disproportionate for a straightforward minimisation case and blocks legitimate work; where a candidate is unsure, the proportionate step is a quick check with a supervisor or data protection contact - the "appropriate channels, with support" the skill description mentions.

#### Question 5 (moderate) - Disagreement in a multi-disciplinary team

In a sprint planning meeting, a user researcher says the candidate's proposed chart for the service dashboard "won't work for the people we interviewed - they found similar charts confusing". The candidate spent significant time on the design and believes it is technically sound. What should they do?

- A. Defend the design firmly; the user researcher is not a data visualisation specialist.
- B. Ask the researcher what specifically confused users, and offer to test a revised version against those findings.
- C. Withdraw the chart entirely and let the researcher decide what replaces it.
- D. Agree in the meeting to keep the peace, but submit the original design unchanged.

**Most effective: B. Least effective: D.**

**Explanation:** Option B does what a strong multi-disciplinary team member does: treats user research as evidence, gets specific about the problem, and proposes an evidence-based iteration. It also directly serves the skill requirement to develop visualisations that recognise different user needs - the researcher is handing exactly that insight to the candidate. Option D is least effective because it is dishonest to the team and wastes the research: false agreement followed by unilateral action breaks trust in a way that is hard to repair. Option A treats specialism as territory; user evidence about confusion outranks technical elegance when the goal is a usable dashboard. Option C swings too far the other way - abandoning expertise rather than combining it with the researcher's. Collaboration means both specialists contribute, and option B is the only choice where that happens.

#### Question 6 (moderate) - Struggling with an assigned task

The candidate was asked to write a simple analysis script - a stretch task for them - and after a day and a half they are stuck. The script is due in three days. Their team includes a senior data analyst and a data engineer who both offered help when they started. What should they do?

- A. Keep working alone; asking for help now would show the candidate was not ready for the task.
- B. Ask the senior analyst for a short pairing session, showing them what has been tried and where the block is.
- C. Ask the data engineer to write the script for the candidate so the deadline is met.
- D. Tell the supervisor the task is impossible and ask for it to be reassigned.

**Most effective: B. Least effective: A.**

**Explanation:** Option B is exactly how this role level is designed to work: "develop analytical approaches... under supervision" and "work closely with other data professionals". Bringing what has already been tried shows initiative and makes the help session efficient - the candidate finishes the task, learns, and keeps ownership. Option A is least effective because it risks the deadline to protect the candidate's image; struggling silently for days is one of the most common and most damaging habits in early-career analysts, and this item specifically tests for it. Option C meets the deadline but transfers the work and the learning - the candidate would be no more capable next time. Option D declares defeat prematurely: the task was assigned as a stretch with support available, and escalating to reassignment before using that support wastes a development opportunity. Asking for help early and well is a strength at every level - especially this one.

#### Question 7 (challenging) - Conflicting priorities from two seniors

The candidate's supervisor asked them to spend today finishing data cleansing for a project milestone. Mid-morning, a different senior manager messages them directly, asking them to produce urgent figures for a parliamentary question by 15:00. They cannot do both today. What should they do?

- A. Do the parliamentary question work; it sounds more senior and urgent, and explain to the supervisor tomorrow.
- B. Continue the cleansing as originally instructed; the senior manager should route requests through the candidate's supervisor.
- C. Tell the supervisor immediately about the new request, and let them agree the priority call with the senior manager.
- D. Try to do both by rushing the cleansing and cutting the quality checks.

**Most effective: C. Least effective: D.**

**Explanation:** Option C surfaces the conflict to the person accountable for the candidate's workload, quickly, so the two seniors can make an informed trade-off - which may well favour the parliamentary question, but that is their call to make with full information. This is textbook adaptability within managing a data project: priorities change, and the professional response is transparent re-planning, not silent guessing. Option D is least effective because it sacrifices quality assurance on milestone work while probably still rushing the urgent figures - the option that "does both" by degrading both is a recurring trap in situational items. Option A makes a unilateral priority decision and leaves the supervisor exposed for a day; option B honours the original instruction but ignores a genuinely urgent organisational need and hides the conflict rather than raising it. When two legitimate demands collide, the strong answer escalates the collision immediately, not tomorrow.

#### Question 8 (challenging) - An accessibility shortcut under deadline

A team is finalising a dashboard for launch tomorrow. The candidate realises the colour scheme fails colour-contrast guidance and several charts rely on colour alone to distinguish categories - a barrier for colour-blind users. Fixing it properly needs about a day. The delivery manager wants to ship on time. What should they do?

- A. Ship as planned and add accessibility to the backlog for a future iteration.
- B. Raise the issue with the delivery manager and supervisor today, explain the user impact and the fix's size, and recommend either a one-day slip or shipping with the fixable elements corrected now.
- C. Stay silent and fix the charts quietly after launch when there is more time.
- D. Refuse to let the dashboard launch and tell the team accessibility law makes shipping illegal.

**Most effective: B. Least effective: C.**

**Explanation:** Option B treats accessibility as what it is in UK government digital work: a genuine user need and public sector obligation, not a nice-to-have - while respecting that the ship/slip decision belongs to the delivery manager and supervisor once they have the facts. Recommending options (slip, or partial fix now) shows exactly the constructive, evidence-based behaviour the skill in inclusive, accessible data visualisation calls for. Option C is least effective: staying silent lets an avoidable barrier ship without the decision-makers ever knowing there was a choice - and quiet post-launch fixes may never happen. Option A at least is honest, but treating a known exclusion of users as backlog material undervalues inclusion; it might be the eventual team decision, but it should not be the candidate's opening recommendation. Option D raises a real concern in the worst way - as an ultimatum with a legal claim the candidate is not placed to make; that damages credibility even when the underlying point is sound.

#### Question 9 (challenging) - A tempting but doubtful finding

Exploring service data, the candidate finds a striking pattern: complaints appear to drop 40% in areas where a new process was piloted. Their team would love this to be true, and the programme board meets on Friday. But they notice the pilot areas also had a recording system change mid-period, which might explain some of the drop. What should they do?

- A. Present the 40% finding on Friday; it is what the data shows, and boards need good news.
- B. Present the finding alongside the recording-system caveat, and propose a quick check of the recording change's impact before firm conclusions are drawn.
- C. Withhold the finding entirely until a full evaluation is complete, telling the board nothing.
- D. Present the finding and mention the caveat only if someone asks about data quality.

**Most effective: B. Least effective: A.**

**Explanation:** Option B is honest, useful, and proportionate: the board hears the promising signal, understands the confounding factor, and gets a concrete plan to firm the evidence up. This is quality assurance in statistical insight - and it also serves business impact, because decisions made on inflated evidence eventually rebound on the service. Option A is least effective: presenting a figure the candidate already doubts, without its known caveat, crosses from optimism into misleading analysis - the confound is not a technicality; it could explain much of the effect. Option D makes transparency conditional on being asked, which is concealment with a fig leaf. Option C errs in the opposite direction: boards can handle preliminary findings when they are labelled as such, and withholding everything delays learning. The professional pattern - show the signal, show the doubt, show the next step - is one of the most valuable habits for a candidate to build early in their career.

#### Question 10 (challenging) - Credit and visibility in a team

A senior analyst presents the candidate's data preparation and visualisation work to the directorate, describing it as "the team's analysis" without mentioning them. A colleague urges them to complain to their supervisor about stolen credit. The candidate had actually agreed the presentation content with the senior analyst beforehand. What should they do?

- A. Follow the colleague's advice and raise a formal concern about credit.
- B. Do nothing at all; visibility does not matter at this level.
- C. Reflect on whether "the team's analysis" was actually unfair, and if visibility matters to development, ask the senior analyst or the supervisor how their contributions can be seen - for example, presenting a section next time.
- D. Add the candidate's name prominently to all future outputs before anyone reviews them.

**Most effective: C. Least effective: A.**

**Explanation:** Option C starts with perspective: team framing of collaborative work is normal and often right in government, and the presentation content was agreed in advance - so "stolen credit" is a strong reading of a routine event. But the option does not stop at acceptance: it channels the legitimate underlying need (development and visibility) into a constructive request, such as presenting next time - which also grows communication skills. Option A is least effective because escalating a formal grievance over an agreed, conventional team presentation would damage the candidate's most important development relationship over a misreading - and taking a colleague's indignation as evidence is not objective judgement. Option B swallows the feeling without addressing the development need; visibility does matter for growth, pursued the right way. Option D addresses the symptom unilaterally and slightly passive-aggressively. Situational items often include a scenario like this to see whether a candidate distinguishes genuine mistreatment from ordinary teamwork - and whether they can advocate for themselves without unnecessary conflict.

#### Question 11 (challenging) - Discovering a possible ethics issue

The candidate is asked to link two datasets for an analysis of service uptake. During the work they realise the linkage would let analysts see individuals' benefit status alongside their health-related service use - a combination that feels more intrusive than the project described. They are not sure whether this was considered when the project was approved. What should they do?

- A. Complete the linkage as instructed; approval is someone else's responsibility.
- B. Pause that part of the work and raise the concern with the supervisor, asking whether the combination was covered by the project's approval.
- C. Anonymously report the project to the Information Commissioner's Office.
- D. Quietly leave the sensitive fields out of the linkage without telling anyone, so the issue disappears.

**Most effective: B. Least effective: C.**

**Explanation:** Option B is precisely what the data ethics and privacy skill describes: "identify appropriate channels to discuss ethical issues, with support". A candidate is not expected to rule on the ethics alone - they are expected to notice, pause proportionately, and ask the right person. Most likely the combination was considered and documented, and the candidate will learn how such approvals work; if it was not, they have caught something important early. Option C is least effective: leaping to an external regulator before any internal question has been asked skips every appropriate channel, and would be seriously disproportionate for what may be a fully approved design. Option A ignores a legitimately noticed concern - "not my responsibility" is exactly the attitude ethics training tries to prevent. Option D unilaterally changes an approved analytical design in secret, which creates a different integrity problem: the analysis no longer matches its specification and nobody knows why. Notice and ask - with support - is the associate-level gold standard.

#### Question 12 (moderate) - Handling a repeated data quality problem

For the third month running, the extract the candidate receives from a partner organisation arrives with the same formatting faults, and they spend half a day fixing them each time. Their fixes work, so nobody else is aware. What should they do?

- A. Keep fixing it each month; it works and it is only half a day.
- B. Document the recurring faults and the fixes, tell the supervisor, and suggest raising the issue with the partner so it is fixed at source.
- C. Email the partner organisation's team a complaint about their poor data quality.
- D. Stop fixing the faults so the problem becomes visible to everyone.

**Most effective: B. Least effective: D.**

**Explanation:** Option B turns silent heroics into system improvement: documentation captures the knowledge (a named value in this role - maintaining analytical approach documentation), the supervisor gains visibility of a recurring cost, and fixing at source could permanently recover half a day a month. This is "identify data quality issues and provide possible solutions" done properly. Option D is least effective: deliberately letting known-bad data flow onward to make a point harms the analysis and its users - manufacturing a failure is never the right way to gain attention for a problem. Option A is the quiet martyr option: it works today but hides a recurring cost and leaves the process fragile (what happens when the candidate is on leave?). Option C addresses the right target with the wrong approach - cross-organisation data quality issues should go through agreed channels with the supervisor's knowledge, and a complaint framed without documentation invites defensiveness rather than a fix.

### Administration tips

- **Score against the organisation's values, not just the framework.** The Civil Service values (integrity, honesty, objectivity, impartiality) and the Government Digital Service standards on user needs and accessibility sit behind most of the keyed answers above.
- **Look for the "surface it early" instinct.** Across almost every scenario, the strong option involves promptly telling the right person the true situation. A candidate who consistently prefers waiting or working around a problem is showing a pattern worth exploring at debrief.
- **If discussing scenarios live, invite the candidate to describe a real dilemma from their own experience** and how they handled it - this can supplement the written items usefully, particularly at debrief.
- **Score the substance of the answer, not whether it matches the wording here exactly.** A candidate answering honestly and consistently, with public sector values in mind, should not be penalised for phrasing an equivalent answer differently.
- **Calibrate to associate level.** Options involving supervision, pairing, and asking good questions are strengths at this level, not weaknesses - this is not an assessment of whether a candidate can solve everything alone.
- **Read every option fully before scoring any.** Options are often designed in near-pairs (fix quietly versus fix openly); the differences between them are where the scoring lives.

### Common pitfalls

- **Idealistic over practical answers.** "Refuse until a full impact assessment is complete" sounds principled but blocks legitimate work (Question 4). A candidate favouring this kind of answer may be underweighting proportionality.
- **Passive options.** Saying nothing, waiting to be asked, adding it to the backlog, or hoping the next report fixes it - a candidate consistently drawn to passive choices is a pattern worth noting, since these options leave the problem alive and hidden.
- **Confusing escalation with alarm.** Raising an issue with a supervisor is almost always strong; leaping to formal complaints, regulators, or ultimatums (Questions 3, 10, 11) as a first move is almost always weak.
- **Protecting image over outcomes.** Struggling alone rather than asking for help (Question 6) and silently correcting one's own errors (Question 1) both put appearance ahead of what users and colleagues need - worth flagging if a candidate favours this pattern repeatedly.
- **Missing the culture context.** UK public sector scoring weights honesty, user needs, accessibility, and collaboration heavily. A candidate who chooses an option that hits a deadline by hiding a caveat or shipping a known barrier is unlikely to be the strongest fit.
- **Rushed reading of scenario detail.** Details such as who offered help, what was already agreed, or who is accountable change which option is best - in Question 10, whether the presentation content was agreed beforehand changes the whole scenario, and a candidate who misses that detail may answer the wrong question.

## Conclusion

You have now worked through all four sections of this assessment: cognitive, numeric reasoning, verbal reasoning, and situational judgement, each mapped to the skills the framework names for associate data analyst.

**Scoring.** Mark each item against the correct answer, or the most/least-effective key, given above, and use the explanations as your rubric for borderline or partial responses — particularly in the situational judgement section, where a candidate's reasoning can matter as much as the option chosen. Look for patterns across sections rather than scoring each item in isolation: a candidate who is strong on error-checking but weak on Cannot Say discipline, for instance, is telling you something specific worth exploring further at debrief or interview.

**Debrief.** Once scoring is complete, sit down with the candidate and walk through the assessment together. Share which sections were strong and which were weaker, using the explanations above as your script, and be specific rather than only giving an overall impression — a candidate benefits far more from "the missing local authority code in question 1 was spotted correctly, and the weighted-average calculation in question 9 is worth another look" than from a single score. At associate level in particular, remember that the candidate is early in their data career: frame the debrief around genuine development rather than a bare pass or fail, since every ability this assessment measures is learnable with practice and support.

**Records and consistency.** Keep the completed answer sheets, your scoring notes, and a record of the time given, so that the same items and the same conditions can be shown to have applied to every candidate assessed for this role level. Administer the same sections, in the same way, with the same time limit, to every candidate compared against each other in a recruitment or promotion round — a change part-way through undermines the fairness this document is meant to support.

**One input among several.** Treat the result as one part of a wider picture, alongside the interview, any work sample, and the candidate's application — never as the sole basis for a hiring or promotion decision. Calibrate your expectations to someone early in their data career: the strongest candidates at this level are not the ones who know everything, but the ones who read carefully, check their work, communicate honestly, and use the support around them well.
