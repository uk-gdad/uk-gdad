# Junior DevOps Engineer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for junior DevOps engineer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

A psychometric assessment is a structured, standardised set of exercises that measures the thinking skills and workplace behaviours that predict success in a role. The assessments in this guide are job-specific: they are built from materials a junior DevOps engineer genuinely works with — scripts and pipeline configurations, monitoring dashboards, service tickets, maintenance procedures, user stories, and code review comments — and from decisions genuinely faced while learning on the job, building software components, and working under supervision.

This role sits at a busy crossroads: designing, coding, testing, correcting and documenting simple programs and scripts under the direction of others; helping fix service faults following agreed procedures and carrying out maintenance tasks; assisting, as part of a team, in the design of components of larger systems; and learning how systems integrate and why interfaces between them are challenging.

Each of the four sections follows the same pattern: an overview of what it measures and the typical test format; a mapping to the role's named skills — from programming and build to systems integration and user focus; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. At junior level, assessments measure carefulness, clear thinking, and potential — not encyclopaedic knowledge — so score accordingly. Several situational judgement items in this guide deliberately have a "strongest" answer that is asking for help after a genuine attempt, or escalating a risk, rather than acting alone — the calibration being tested is what this role owes the team at this level, which differs from what would score well for a senior engineer. Use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the mental processes this role actually uses, presented through practical workplace scenarios rather than abstract puzzles: script configurations, pipeline stage rules, log extracts, branching conventions, maintenance procedures, and interface specifications.

The typical format is an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a similar career stage, often adaptive.

For a junior DevOps engineer, cognitive assessment is particularly relevant because core daily activities are structured thinking in miniature: holding a specification in mind while coding a simple script under direction, tracing conditions and branches precisely while fixing a fault, and reasoning about how rules and dependencies interact while assisting with component design.

### How this assessment maps to the role

- **Pattern recognition** maps to **Programming and build (software engineering)** and **Service support**: recognising the recurring shapes of healthy code, consistent naming, and normal log output.
- **Logical deduction** maps to **Systems integration** and **Availability and capacity management**: reasoning about dependencies and conditional rules.
- **Error checking** maps to **Modern development standards** and **Programming and build**: comparing a script against its specification, a configuration against team convention.
- **Prioritisation** maps to **Service support** and working under supervision: sequencing work and knowing which deadline genuinely binds.
- **Applied problem solving** maps to **Systems design** and **Prototyping**: reasoning about cause and effect in the development process.

### Practice questions

**Question 1 (easy) — Pattern recognition in branch names**

A team's git branch convention: `<type>/<ticket-number>-<short-description>`, type one of `feature`, `bugfix`, `chore` — e.g. `bugfix/DEV-214-fix-timeout`. Four branches: `feature/DEV-301-add-retry-logic`; `bugfix/DEV-305-null-check`; `DEV-310-update-readme/chore`; `chore/DEV-312-bump-dependencies`. Ask which branch breaks the convention.

- A) Branch 1
- B) Branch 2
- C) Branch 3
- D) Branch 4

**Correct answer: C**

**Explanation:** Branch 3 reverses the structure, placing the ticket and description before the type. This tests component-by-component comparison against a pattern rather than an overall glance, since automation often keys off naming conventions — a malformed name can be silently mishandled.

**Question 2 (easy) — Logical deduction from deployment rules**

Rules: (i) every change must pass automated tests before merging; (ii) every merged change is automatically deployed to test; (iii) only changes in test for at least one day may be promoted to staging. A change was merged this morning. Ask which statement must be true.

- A) The change has passed the automated test suite.
- B) The change is already in staging.
- C) The change will be promoted to staging tomorrow.
- D) The change has been reviewed by a senior engineer.

**Correct answer: A**

**Explanation:** Rule (i) guarantees a merged change passed tests. B is ruled out by rule (iii)'s one-day minimum; C confuses eligibility ("may be promoted") with a scheduled certainty; D introduces an unstated requirement. This tests deducing only what the rules guarantee.

**Question 3 (easy) — Error checking a script against its specification**

Specification: "Read the list of servers from `servers.txt`. For each server, check disk usage. If usage is 90% or above, write the server name to `alerts.txt`. Print a summary count at the end." The draft alerts only when usage is "above 90%". Ask for the discrepancy.

- A) The script reads the wrong file.
- B) The script treats exactly 90% differently from the specification.
- C) The script fails to print a summary.
- D) There is no discrepancy.

**Correct answer: B**

**Explanation:** The specification's "90% or above" includes exactly 90%; the draft's "above 90%" excludes it, missing a server sitting precisely at the threshold. This tests checking boundary conditions clause by clause — "above", "at least", "or above" are the single most common source of small script bugs.

**Question 4 (easy) — Sequencing a maintenance procedure**

Constraints: W (notify the team) must be first; X (stop the collector) must precede Y (rotate the log archive); Z (restart and confirm) must be last. Ask which order satisfies all constraints.

- A) W, Y, X, Z
- B) X, W, Y, Z
- C) W, X, Y, Z
- D) W, X, Z, Y

**Correct answer: C**

**Explanation:** Testing each option against each constraint eliminates B (starts with X), A (Y before X), and D (Y after Z), leaving only C. This tests eliminating options against explicit constraints rather than imagining the whole procedure at once — maintenance runbooks are dependency chains for real safety reasons.

**Question 5 (moderate) — Pattern recognition in error logs**

Log entries over ten minutes: OK at 09:00, 09:01, 09:03, 09:04, 09:06, 09:07, 09:09; TIMEOUT at 09:02, 09:05, 09:08. Ask for the most accurate and useful observation.

- A) Timeouts are random noise and can be ignored.
- B) Timeouts occur every third minute — a regular cycle that suggests a periodic cause, such as a scheduled job competing for resources.
- C) The service is down.
- D) Timeouts are increasing in frequency.

**Correct answer: B**

**Explanation:** Timeouts appear at exactly three-minute intervals — a regularity, not noise (A) and not an increase (D); most checks are OK, so the service is degraded periodically, not down (C). This tests describing a pattern precisely, since strictly periodic failures usually have periodic causes and precise descriptions shorten investigations.

**Question 6 (moderate) — Deduction about interface compatibility**

Service P sends dates as `DD-MM-YYYY`; Service Q expects `YYYY-MM-DD`; component T converts between them. P is upgraded to send `YYYY-MM-DD` directly, but T is left unchanged. Ask for the most likely result.

- A) Everything works, because P now sends the format Q expects.
- B) T will mangle the already-correct dates — for example reading the year field as a day — so Q receives wrong or invalid dates.
- C) Q will reject the messages because P changed.
- D) T will automatically detect the new format and pass it through.

**Correct answer: B**

**Explanation:** T still applies its old transformation to already-correct data, corrupting it. Option A forgets T exists; D credits it with intelligence it wasn't given. This tests tracing data step by step through each component — a debugging technique as much as a test-taking one, and a demonstration of why interfaces encode assumptions about their neighbours.

**Question 7 (moderate) — Prioritisation under supervision**

9:30am, supervisor out until 1pm (reachable for emergencies). Tasks: (1) a fault ticket promised "by end of day," agreed procedure; (2) a sprint coding task due Thursday (it's Tuesday); (3) a weekly cleanup job that must start before 10am, taking 5 minutes; (4) a "when you get a chance" pull request review request. Ask what to do first.

- A) Start the fault ticket — it has today's deadline.
- B) Kick off the cleanup job now, then work the fault ticket, fit the pull request review into a natural break, and continue the sprint task after that.
- C) Reply to the pull request first — a colleague is waiting on you.
- D) Message your supervisor to ask what to do first.

**Correct answer: B**

**Explanation:** The cleanup job has the nearest hard deadline and lowest cost to satisfy — done first. This tests sequencing by deadline hardness and cost rather than by who is currently waiting, and recognising that a decision this routine belongs at this level, not with the supervisor.

**Question 8 (moderate) — Error checking a pipeline configuration**

Convention: stages `build`, `test`, `deploy` in order; deploy stage must name a target environment; failure notifications go to `#platform-alerts`. A new service's configuration: stages correct and in order; deploy target blank; notifications correct. Ask how many requirements are violated.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Only the blank deploy target violates a requirement; the stage order and notification channel are both correct. This tests auditing each requirement independently rather than missing a blank field because the containing stage exists — a quiet misconfiguration that passes casual review and fails at the worst moment.

**Question 9 (moderate) — Applied problem solving: what changed?**

A script that has run nightly for three weeks fails with "permission denied" writing its output file; the script itself is unchanged. Yesterday: (1) infrastructure applied security hardening tightening directory permissions; (2) a variable was renamed in a *different* script; (3) the nightly backup ran an hour later than usual. Ask what to investigate first.

- A) The variable rename in the other script
- B) The security hardening and the permissions on the output directory
- C) The backup timing
- D) Rewrite the script from scratch

**Correct answer: B**

**Explanation:** The error symptom (permissions) matches directly to the security hardening event; the other script cannot affect this one, and the backup timing shift doesn't produce a permissions error. This tests matching an error message to the most plausible recent change with a real mechanism, and recognising "I changed nothing" never means nothing changed.

**Question 10 (hard) — Multi-constraint scheduling**

Four tasks today (9:00 start, lunch 13:00–13:30): D (1hr, before 4pm demo); M (fixed 12:00–13:00); F (2hrs, must finish before M since M reboots the server F needs); R (30 min, any time). Ask which schedule satisfies every constraint cleanly.

- A) F 9:00–11:00, R 11:00–11:30, M 12:00–13:00, D 13:30–14:30
- B) D 9:00–10:00, F 10:00–12:00, M 12:00–13:00, R 13:30–14:00
- C) R 9:00–9:30, D 9:30–10:30, M 12:00–13:00, F 13:30–15:30
- D) F 9:00–11:00, M 11:00–12:00, D 12:00–13:00, R 14:00–14:30

**Correct answer: A**

**Explanation:** A satisfies all constraints with clean margin. Option B leaves F finishing exactly as M starts — zero margin; C schedules F after M, breaching the dependency; D moves M off its fixed window. This tests preferring a schedule that satisfies constraints cleanly over one that only just satisfies them at the boundary, since zero-margin plans fail the moment anything runs late.

**Question 11 (hard) — Deduction from monitoring rules**

Rules: (i) CPU over 80% for 10 consecutive minutes fires a warning; (ii) memory over 90% at any point fires a critical immediately; (iii) critical alerts always page on-call; (iv) warnings page on-call only outside working hours (9:00–17:00). At 14:20: CPU has been at 85% since 14:05; memory peaked at 92% at 14:12. Ask which pages the on-call engineer has received.

- A) None — it is working hours.
- B) One page, from the critical memory alert at 14:12.
- C) Two pages — one for CPU, one for memory.
- D) One page, from the CPU warning alert at 14:15.

**Correct answer: B**

**Explanation:** The memory critical fired and paged (rules ii, iii); the CPU warning fired at 14:15 but, being inside working hours, did not page (rule iv). This tests tracing layered conditional rules against a timeline exactly — real alerting policies work precisely this way.

**Question 12 (hard) — Evaluating a process change with evidence**

Pipeline runs the full 25-minute test suite on every commit. Proposal: a fast 5-minute subset on every commit, full suite before merge and nightly. Objection: "That means some bugs will be caught later than they are now." Ask for the best evaluation.

- A) The objection is wrong: the fast subset will catch every bug the full suite catches.
- B) The objection is technically true but incomplete: bugs caught only by the full suite surface at merge time or overnight rather than per-commit, yet developers get feedback on most changes 20 minutes sooner, which speeds up the whole loop — the trade-off can still be strongly favourable.
- C) The objection is decisive: any delay in catching any bug makes the proposal unacceptable.
- D) The objection is irrelevant because test timing does not affect development speed.

**Correct answer: B**

**Explanation:** The objection identifies a real cost but ignores the benefit (faster iteration) and the mitigation (full suite still runs before merge). This tests separating what is true in an objection from what follows from it — name the cost, name the benefit, check the mitigations, then judge the balance.

### Administration tips

- Score for whether the candidate checks boundary conditions ("above" versus "or above", "at least") explicitly.
- Note whether the candidate eliminates schedule or rule options systematically rather than constructing an answer from scratch.
- Watch for whether the candidate traces data or a chain of dependencies step by step through a system.
- Score for whether the candidate sequences competing tasks by deadline hardness and cost rather than by who is asking.
- Note whether the candidate separates a real cost in an argument from what actually follows from it (benefit, mitigation).

### Common pitfalls to watch for when scoring

- Crediting an answer that skims a boundary or quantifier word ("every", "only", "at least", "consecutive").
- Missing when a candidate upgrades an eligibility ("may be promoted") into a certainty ("will be promoted").
- Rewarding a schedule that only just satisfies a constraint at zero margin, over one with genuine clearance.
- Accepting a diagnosis that ignores the symptom-to-cause match in favour of a more recent but unrelated change.
- Missing when a candidate treats any cost in an argument as decisive, without weighing the stated mitigation.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate handles the numbers this role genuinely produces: request error rates, build durations, disk growth, test coverage, ticket queues, and environment costs, using percentages, ratios, averages, rates, and trend-spotting.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions, a compact data set per question, calculator usually provided.

Employers use numeric reasoning tests for DevOps roles because operations runs on numbers: availability as a percentage, capacity as usage against threshold, pipeline health as pass rate and duration, support work as queue length. At junior level, reading a dashboard correctly, computing a rate without help, and sanity-checking figures is expected.

### How this assessment maps to the role

- **Percentages and thresholds** map to **Availability and capacity management**: uptime percentages, usage thresholds, headroom.
- **Averages and rates** map to **Programming and build (software engineering)** and **Service support**: build durations, script run times, fault arrival rates.
- **Ratios and proportions** map to **Modern development standards** and **Systems design**: test coverage proportions, resource allocation splits.
- **Reading tables and charts** maps to **Systems integration** and **Service support**: extracting the right number from an interface error table or monitoring graph.
- **Trend interpretation** maps to **User focus**: reading traffic patterns and error rates experienced by real people correctly.

### Practice questions

**Question 1 (easy) — Reading a deployment table**

Deployments: Monday 4, Tuesday 6, Wednesday 3, Thursday 7, Friday 5. Ask for the weekly total.

- A) 23
- B) 24
- C) 25
- D) 26

**Correct answer: C**

**Explanation:** 4+6+3+7+5=25 — option C. This tests basic addition, with a regrouping check (4+6=10, 3+7=10, +5=25) that doubles as verification.

**Question 2 (easy) — Error rate as a percentage**

2,000 requests, 30 errors. Ask for the error rate.

- A) 0.15%
- B) 1.5%
- C) 3%
- D) 15%

**Correct answer: B**

**Explanation:** 30÷2,000=1.5% — option B. This tests basic percentage calculation, and, in a strong answer, recognising the wrong options are decimal-place slips of the same figure — a ten-second recheck of the decimal point before repeating a number at stand-up.

**Question 3 (easy) — Average script runtime**

Five runs: 12, 15, 11, 18, 14 seconds. Ask for the mean.

- A) 13 seconds
- B) 14 seconds
- C) 15 seconds
- D) 16 seconds

**Correct answer: B**

**Explanation:** 70÷5=14 — option B, sitting between the minimum (11) and maximum (18) as a sense-check. This tests basic averaging and, in a strong answer, quoting the spread alongside the average when documenting a script's typical runtime.

**Question 4 (easy) — Proportion of test types**

150 tests: 90 unit, 45 integration, 15 end-to-end. Ask for the fraction that is integration.

- A) 1/5
- B) 1/4
- C) 3/10
- D) 1/3

**Correct answer: C**

**Explanation:** 45÷150=0.3=3/10 — option C, distinguishable from the close-looking 1/4 (0.25) only by converting to decimals. This tests careful fraction simplification when options are close together, and checking parts sum to the whole (90+45+15=150).

**Question 5 (moderate) — Availability from downtime**

24/7 service, 28-day period, two outages: 3 hours and 45 minutes. Ask for the availability percentage to one decimal place.

- A) 99.1%
- B) 99.4%
- C) 99.6%
- D) 99.8%

**Correct answer: B**

**Explanation:** Total 672 hours; downtime 3.75 hours; availability ≈99.4% — option B. This tests converting minutes to decimal hours before mixing units, and rounding only at the final step — a common slip is typing 45 directly into an hours calculation.

**Question 6 (moderate) — Ratio of environment resources**

20 instances split test:staging in ratio 3:2. Ask how many instances run in staging.

- A) 6
- B) 8
- C) 10
- D) 12

**Correct answer: B**

**Explanation:** 5 parts total; 20÷5=4 per part; staging=2×4=8 — option B (test=3×4=12, checked: 12+8=20). This tests the standard ratio method and, particularly, correctly identifying which side of the ratio (test vs staging) was asked for.

**Question 7 (moderate) — Percentage change in queue length**

Ticket backlog: 64 at month start, 48 at month end. Ask for the percentage fall.

- A) 16%
- B) 20%
- C) 25%
- D) 33%

**Correct answer: C**

**Explanation:** (64−48)÷64=25% — option C. Option D divides by the wrong (new) value. This tests anchoring percentage change on the original value, and a cross-check: a quarter of 64 is 16, landing exactly on 48.

**Question 8 (moderate) — Reading a two-way integration table**

Message failures: Payments→Ledger 12 format/28 timeout; Booking→Notifications 18 format/22 timeout. Ask what percentage of all failures were format errors.

- A) 30%
- B) 35%
- C) 37.5%
- D) 40%

**Correct answer: C**

**Explanation:** Format total 30; grand total 80; 30÷80=37.5% — option C, not a per-interface figure. This tests dividing by the correct base (the grand total across both interfaces) and, in a strong answer, noticing both interfaces fail more by timeout — a genuinely useful operational hint.

**Question 9 (moderate) — Backup window and data growth**

Backup runs at 6 GB/min inside a fixed 60-minute window; store holds 288 GB, grows 12 GB/week. Ask in how many weeks the backup no longer fits.

- A) 4 weeks
- B) 6 weeks
- C) 8 weeks
- D) 12 weeks

**Correct answer: B**

**Explanation:** Window capacity 360 GB; headroom 72 GB; 72÷12=6 weeks — option B. This tests the standard "when will it stop fitting?" pattern: convert the constraint into matching units, find the gap, divide by the growth rate.

**Question 10 (hard) — Comparing failure rates fairly**

Interface X: 12,000 messages, 180 failures. Interface Y: 4,000 messages, 100 failures. A colleague says X is worse "nearly twice the failures." Ask for the accurate statement.

- A) The teammate is right: 180 failures is worse than 100.
- B) X's failure rate is 1.5% and Y's is 2.5%, so Y fails proportionally more often, despite fewer total failures.
- C) Both interfaces have the same failure rate.
- D) The rates cannot be compared because the interfaces carry different message types.

**Correct answer: B**

**Explanation:** X: 1.5%; Y: 2.5% — the reverse of the raw-count comparison. This tests converting counts to rates before comparing volumes that differ — the most common analytical slip in operational discussions.

**Question 11 (hard) — Weighted average response time**

Response times: morning 200 requests at 120ms; afternoon 600 at 180ms; evening 200 at 150ms. Ask for the overall average.

- A) 150 ms
- B) 156 ms
- C) 160 ms
- D) 162 ms

**Correct answer: D**

**Explanation:** Weighted: (200×120+600×180+200×150)÷1,000=162ms — option D, not the unweighted 150ms average of averages (A). This tests weighting by group size when groups differ — unweighted averages of averages quietly misreport dashboards whenever traffic isn't evenly split.

**Question 12 (hard) — Multi-step environment cost comparison**

Configuration P: 8 VMs at £0.40/hour, 24/7. Configuration Q: 12 VMs at £0.40/hour, 10 hours/day on 22 working days. Over 30 days, ask for the saving of the cheaper configuration.

- A) £1,190.40
- B) £1,248.00
- C) £1,305.60
- D) £1,382.40

**Correct answer: B**

**Explanation:** P: 5,760 machine-hours=£2,304. Q: 2,640 machine-hours=£1,056. Difference £1,248 — option B, independently verified via the machine-hour gap (3,120×£0.40=£1,248). This tests multi-step cost arithmetic with independent verification via a second route.

### Administration tips

- Score for whether the candidate divides by the correct base (original value for percentage change, grand total for a proportion across groups).
- Note whether the candidate weights an average by group size when the groups differ.
- Watch for consistent units (minutes converted to decimal hours) before a calculation begins.
- Score for whether the candidate verifies a multi-step money calculation by a second, independent route.
- Note whether the candidate rounds only at the final step of a multi-step calculation.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of averages when the underlying groups have different sizes.
- Missing a percentage change divided by the new value instead of the original.
- Rewarding a raw-count comparison across volumes that should have been converted to rates.
- Accepting a unit mismatch (minutes treated as decimal hours incorrectly) in a calculation.
- Missing premature rounding mid-calculation that shifts the final answer.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, interprets and draws conclusions from written material this role actually produces: runbooks and agreed procedures, coding standards, user stories, incident reports, interface documentation, security guidance, and emails between teams.

The most common format presents a passage followed by statements to classify True, False, or Cannot say. Other formats include best-summary selection, identifying what an instruction requires in a specific case, and clear-writing judgement. Tests usually run 15 to 25 minutes with 20 to 30 questions.

The golden rule is: answer only from the passage. Misreading text has operational consequences at this level — coding from written specifications, tracing branch-words in agreed procedures, distinguishing "must" from "should" in standards, reading user story acceptance criteria — so precision in reading and writing is a safety skill.

### How this assessment maps to the role

- **Comprehension of procedures** maps to **Service support**: reading fault-fixing procedures precisely — conditions, order, escape hatches.
- **True/false/cannot-say discipline** maps to **Information security**: representing guidance exactly, neither inflating nor softening it.
- **Inference** maps to **Systems integration** and **Systems design**: connecting stated facts into their guaranteed implications.
- **Understanding user stories** maps to **User focus**: extracting who, what, and why from a story and its acceptance criteria.
- **Clear-writing judgement** maps to **Programming and build (software engineering)** and **Prototyping**: writing that a busy reader understands first time.

### Practice questions

**Question 1 (easy) — True/false/cannot say from a procedure**

Passage: "The database maintenance procedure runs on the first Sunday of each month. During maintenance, the reporting service is unavailable, but the booking service continues to operate normally. Users of the reporting service are notified by email three days in advance."

Statement: "The booking service is unavailable during database maintenance."

- A) True
- B) False
- C) Cannot say
- D) True on Sundays only

**Correct answer: B**

**Explanation:** The passage directly states the booking service "continues to operate normally" — the opposite of the statement: False. This tests locating the single deciding sentence and matching it carefully, rather than assuming maintenance affects everything.

**Question 2 (easy) — What does the standard require here?**

Passage: "All scripts must log their start time, end time, and outcome. Scripts that modify data must additionally log the number of records affected. Read-only scripts are encouraged, but not required, to log the number of records read." A read-only summary script. Ask which logging is required.

- A) Start time, end time, outcome, and records read
- B) Start time, end time, and outcome only
- C) Records read only
- D) No logging, because the script is read-only

**Correct answer: B**

**Explanation:** The universal requirement (start, end, outcome) binds all scripts; the data-modification requirement doesn't apply; the "encouraged, but not required" clause for records read is explicitly non-binding: option B. This tests sorting requirements by which scripts they bind, and not upgrading an encouragement into an obligation (A) or treating "read-only" as exemption from everything (D).

**Question 3 (easy) — Reading a user story**

Passage: "As a caseworker, I need the search results to show each applicant's reference number, so that I can quote it when phoning the applicant. Acceptance criteria: reference numbers appear on every result row; reference numbers can be copied to the clipboard; search speed is not made noticeably slower."

Ask which best describes the user need this story serves.

- A) Caseworkers need faster search.
- B) Caseworkers need to quote reference numbers when phoning applicants.
- C) Applicants need to know their reference numbers.
- D) The team needs the clipboard feature to work.

**Correct answer: B**

**Explanation:** The story's "so that" clause states the need directly. Option A picks up a constraint protecting existing behaviour, not the driving need; C names the wrong "who"; D mistakes an acceptance criterion for the need itself. This tests identifying a user story's who/what/why anatomy and locating the need specifically.

**Question 4 (easy) — Cannot-say discipline**

Passage: "The new deployment tool supports automatic rollback: if the health check fails within five minutes of a deployment, the previous version is restored without manual intervention. The feature is enabled by default in the test environment."

Statement: "The automatic rollback feature is enabled in the staging environment."

- A) True
- B) False
- C) Cannot say
- D) True, because rollback is enabled by default

**Correct answer: C**

**Explanation:** The passage only addresses the test environment's default; staging is not mentioned at all: Cannot say. Option D stretches a scoped statement into a general one. This tests keeping the boundary between False (contradicted) and Cannot say (unaddressed) sharp.

**Question 5 (moderate) — Tracing branches in an agreed procedure**

Passage: "When the queue depth alert fires, first check the consumer service status. If the consumer is stopped, restart it and monitor for ten minutes; if the queue then drains, close the alert. If the consumer is running, or if the queue does not drain after restart, escalate to the platform team with the queue depth graph attached. Do not purge the queue unless the platform team instructs it." Consumer was stopped, restarted, monitored ten minutes; queue has not drained. Ask what the procedure requires next.

- A) Purge the queue to clear the backlog.
- B) Restart the consumer again and monitor for another ten minutes.
- C) Escalate to the platform team, attaching the queue depth graph.
- D) Close the alert, since the consumer is now running.

**Correct answer: C**

**Explanation:** The queue not draining after restart triggers the escalation clause exactly, including the required attachment. Option A violates an explicit prohibition; B invents a retry loop; D closes on the wrong trigger condition. This tests tracing a procedure's branches against the candidate's actual facts precisely.

**Question 6 (moderate) — Inference from interface documentation**

Passage: "The notifications API accepts requests only over the department's private network. Callers must present a valid service token, issued by the platform team, which expires after 90 days. Requests without a valid token receive a 401 response. The booking service calls the notifications API and last renewed its token in early January." It is now mid-April. Ask for the best-supported conclusion.

- A) The booking service's requests are currently receiving 401 responses.
- B) The booking service's token has expired or is about to expire, so if it has not been renewed since January, calls will start failing with 401 responses.
- C) The notifications API is unavailable.
- D) The platform team has failed to issue tokens on time.

**Correct answer: B**

**Explanation:** 90 days from early January lands before mid-April, but the passage only states the *last known* renewal — a more recent one is possible, so the conditional B is better supported than the asserted-as-fact A. This tests calibrated inference: computing the implication while flagging the assumption, rather than asserting current failure as certain.

**Question 7 (moderate) — True/false/cannot say on security guidance**

Passage: "Secrets such as passwords, API keys, and tokens must never be committed to source code repositories. Teams must use the approved secrets management service. Where a secret is accidentally committed, it must be treated as compromised: rotate it immediately and notify the security team. Removing the secret from the repository history is required but is not sufficient on its own."

Statement: "If an accidentally committed secret is removed from the repository history quickly enough, rotation is unnecessary."

- A) True
- B) False
- C) Cannot say
- D) True, if the repository is private

**Correct answer: B**

**Explanation:** The passage explicitly pre-refutes this hope: rotation applies regardless of removal speed, and removal alone "is not sufficient." This tests catching a passage that both states a rule and pre-empts a tempting shortcut — a real-world security pattern ("it was only there for a minute").

**Question 8 (moderate) — Clear-writing judgement in a commit message**

Ask which commit message best lets a reader understand a change without opening the diff.

- A) "Fixed stuff."
- B) "Fix timeout in report script: increase API call timeout from 5s to 30s because the monthly export exceeds 5s on large datasets."
- C) "Various improvements and enhancements were implemented to address the previously observed issues."
- D) "Changed line 47."

**Correct answer: B**

**Explanation:** B states what changed, where, and why — everything needed. A and C say nothing specific; D gives location without reason. This tests judging a message by what a future reader can actually do with it, six months later, mid-incident.

**Question 9 (moderate) — Scope and applicability of a policy**

Passage: "This policy applies to all shared environments: test, staging, and live. Individual developer sandboxes are excluded. In shared environments, configuration changes must be made through the pipeline, not manually. Manual changes are permitted in sandboxes. During a declared major incident, the incident lead may authorise manual changes in any environment; such changes must be recorded and reconciled through the pipeline within 48 hours."

Statement: "A manual configuration change in staging is never permitted."

- A) True
- B) False
- C) Cannot say
- D) True, except in sandboxes

**Correct answer: B**

**Explanation:** The major-incident exception explicitly permits manual changes "in any environment," including staging, contradicting "never." Option D confuses geography (sandboxes are outside the policy entirely). This tests hunting for an exception clause before agreeing with an absolute ("never") statement.

**Question 10 (hard) — Inference across an incident report**

Passage: "At 15:40 the booking confirmation emails stopped sending. The notifications service was healthy, but its message queue showed messages arriving and failing repeatedly. Investigation found that the 14:55 booking service release had changed the date format in messages from `YYYY-MM-DD` to `DD/MM/YYYY`, which the notifications service could not parse. The release had passed all of the booking service's own tests. The fix was deployed at 17:10 and queued messages were reprocessed successfully. Action: add contract tests covering the message format between the two services."

Ask which statement is best supported.

- A) The booking service's test suite was failing at release time.
- B) The booking service's tests did not check the message format contract with the notifications service, which is why the breaking change reached production.
- C) The notifications service caused the incident.
- D) Emails sent between 15:40 and 17:10 were permanently lost.

**Correct answer: B**

**Explanation:** A release passing all its own tests yet breaking the integration, plus an action item adding contract tests, together support B directly. A contradicts "passed all... tests"; C blames the component that behaved consistently; D is contradicted by "reprocessed successfully." This tests careful evidence assembly in an incident report — interfaces fail at boundaries even when each side's own tests are green.

**Question 11 (hard) — Should versus must in a standards extract**

Passage: "Deployments to staging must be performed through the pipeline. Deployments should be scheduled outside the 11:00–14:00 peak testing window. A deployment during the peak window requires the testing coordinator's agreement. All deployments must be announced in the platform channel beforehand, whatever the time."

Ask which statement accurately reflects the standards.

- A) Deploying to staging at 12:00 is forbidden.
- B) Deploying to staging at 12:00 is permitted with the testing coordinator's agreement, and it must still go through the pipeline and be announced beforehand.
- C) Deployments outside the peak window need no announcement.
- D) The testing coordinator must agree to every staging deployment.

**Correct answer: B**

**Explanation:** "Should" is a recommendation with a sanctioned exception route (coordinator agreement); "must be announced... whatever the time" has no time exception; agreement is required only for peak-window deployments. This tests distinguishing "must" (absolute) from "should" (recommendation with an exception route) across a passage's separate clauses.

**Question 12 (hard) — Evaluating an argument about prototyping**

Passage: "We should prototype the new dashboard layout before building it properly. Last quarter we built the alerts page straight to production standard, and users found the layout confusing; reworking it cost three sprints. A rough prototype shown to five caseworkers would have surfaced the confusion in days. Prototyping the dashboard will likewise save us rework."

Ask which fact, if true, would most weaken the argument.

- A) Prototyping tools have improved this year.
- B) The dashboard's layout is tightly constrained by an accessibility-approved departmental template, so its layout decisions — unlike the alerts page's free-form design — are already fixed and user-validated.
- C) Some caseworkers enjoyed giving feedback on the alerts page rework.
- D) The alerts page rework took three sprints rather than two.

**Correct answer: B**

**Explanation:** B attacks the argument's bridge — if the dashboard's layout is already fixed and validated, the specific risk prototyping would mitigate barely exists for this case, breaking the analogy. Options A, C and D are irrelevant or supportive. This tests weakening an argument by attacking the analogy connecting evidence to conclusion, not just disputing the conclusion generally.

### Administration tips

- Score for whether the candidate circles modal and absolute words ("must," "should," "never," "unless") before answering.
- Watch for whether the candidate distinguishes False (actively contradicted) from Cannot say (simply unaddressed).
- Note whether the candidate traces a procedure's exact branch for the given facts, rather than the gist.
- For argument-evaluation items, score on whether the candidate attacks the evidence-to-conclusion bridge specifically.
- Score summaries and rewrites on whether they preserve every load-bearing fact, not on length or confident tone.

### Common pitfalls to watch for when scoring

- Crediting a statement marked True or False on the strength of outside workplace knowledge the passage does not state.
- Missing when a candidate marks False a statement the passage is merely silent on.
- Rewarding a candidate who upgrades a recommendation ("should," "encouraged") into a requirement, or the reverse.
- Missing when a candidate fails to find an exception clause that defeats an absolute ("never," "always") statement.
- Accepting the most professional-sounding or polished option over the one actually supported by the passage.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace dilemmas and asks the candidate to judge the effectiveness of different responses. Formats include most effective, least effective, or ranking all options.

Typical format: 15 to 25 scenarios, usually untimed or generously timed (30 to 45 minutes). Scoring compares judgements against experienced professionals and the behaviours the organisation values — user focus, collaboration, honesty and ownership, sensible escalation, and inclusion.

Strong junior responses usually involve: following agreed procedures and standards, even under friendly pressure; being honest immediately about mistakes, uncertainty, and slipping timescales; timeboxing struggle — trying properly, then asking a well-formed question rather than sinking silently; raising risks and observations despite being junior; and protecting shared environments by defaulting to the cautious option when an action is irreversible. Asking for help after a genuine attempt is a strength at this level, not a weakness.

### How this assessment maps to the role

- **Following agreed procedures under pressure** maps to **Service support**: scenarios where speed, seniority, or friendliness tempt skipping steps.
- **Working well under supervision** maps to the role level: when to persist alone, when to ask, and how to ask well.
- **Security vigilance** maps to **Information security**: credentials in the wrong place, suspicious requests, accidental exposure.
- **Collaboration and code review behaviour** maps to **Programming and build (software engineering)** and **Prototyping**: receiving feedback constructively, giving observations respectfully.
- **User focus in everyday choices** maps to **User focus**: remembering real users behind tickets and stories.
- **Speaking up about design and integration risks** maps to **Systems design** and **Systems integration**: voicing observations even as the least experienced person present.

### Practice questions

**Question 1 (easy) — Your merged change broke the test environment**

A merged script change, which passed the pipeline yesterday, is found this morning causing the test environment's data load job to fail on an edge case not previously considered. Nobody has noticed yet; the team is busy preparing a demo. Ask for the most effective response.

- A) Quietly revert your change and say nothing, since the revert fixes it.
- B) Post in the team channel: your change broke the data load, you are reverting it now, and you will bring a fixed version back through review — flagging it before the demo in case anyone was relying on fresh data.
- C) Wait to see whether anyone else notices; the demo might not need the data load anyway.
- D) Start fixing the edge case immediately and merge the fix as fast as possible to cover the gap.

**Correct answer: B**

**Explanation:** B combines prompt honesty, immediate mitigation (revert first), and process respect (fix returns through review). Option A hides information others need; C gambles the demo; D leaves the environment broken while perfecting a fix, and rushes a merge. This tests restoring a shared environment first while disclosing immediately, rather than hiding a self-caused problem or rushing a fix without disclosure.

**Question 2 (easy) — Stuck on a task: when to ask**

Stuck on a configuration error for nearly two hours after re-reading documentation, searching the wiki, and trying two plausible fixes; the next idea involves settings not fully understood. The supervisor is at their desk. Ask for the most effective response.

- A) Keep going alone — asking now would show you cannot work independently.
- B) Try the settings change; you can always undo it if it goes wrong.
- C) Ask your supervisor now, showing what you tried: the error, the docs you checked, the two fixes attempted and their results, and your untested next idea.
- D) Post the raw error message in the team channel with "anyone seen this?" and wait.

**Correct answer: C**

**Explanation:** C is a well-formed question after a genuine, structured attempt, showing working that lets the supervisor teach efficiently. Option A confuses independence with isolation; B risks a change on settings not understood, reassured by an undo that may not work cleanly; D is a vague, context-free broadcast. This tests the timebox-then-ask pattern: try properly, then ask promptly with your working shown.

**Question 3 (easy) — A credential in the wrong place**

While fixing an urgent, due-today fault, a plainly visible database password is found in a two-year-old wiki troubleshooting guide, added by someone who has since left. Ask for the most effective response.

- A) Finish your fault fix first and mention the password at next week's team meeting.
- B) Delete the password from the page yourself and carry on — problem solved.
- C) Report it now to your supervisor or security channel — a quick message with the link — so the password can be rotated and the page cleaned up, then carry on with your fault fix.
- D) Ignore it; a two-year-old password has probably been changed already.

**Correct answer: C**

**Explanation:** C reports fast (barely pausing the due-today fix), reaches people who can rotate and check for misuse, and treats it as the team-level issue it is. Option B fixes the symptom but not the exposure (no rotation); D gambles on "probably"; A leaves a live credential exposed for a week for no benefit. This tests recognising that a security finding needs immediate reporting to owners who can act fully, regardless of the credential's apparent age.

**Question 4 (easy) — Receiving blunt code review feedback**

A senior engineer's terse review: "Wrong approach. Don't parse this manually — use the standard library. Also breaks on empty input. Rework." Two days of work feel dismissed. Ask for the most effective response.

- A) Rework it as instructed without replying — seniors know best.
- B) Reply thanking them for the catch on empty input, ask which standard library module they would recommend, rework it, and add a test for the empty-input case.
- C) Defend your approach in the review thread — manual parsing gives you more control, and the empty-input case is unlikely.
- D) Ask your supervisor to assign future reviews to a friendlier reviewer.

**Correct answer: B**

**Explanation:** B extracts full value from correct-but-blunt feedback: acknowledges the bug, asks a precise follow-up, and adds a test so the fix sticks. Option A misses the chance to learn *why*; C defends sunk cost over the codebase's needs; D routes around discomfort at the cost of a good learning source. This tests separating feedback content from tone and mining correct criticism for learning, rather than defending or avoiding it.

**Question 5 (moderate) — Pressure to skip the agreed procedure**

A reporting service outage in test blocks the testing team. The agreed procedure (pipeline restart, 20 minutes, fully logged) is known; a developer urges an unlogged direct SSH restart ("takes two minutes, I do it all the time"). The supervisor is at lunch. Ask for the most effective response.

- A) Do the direct restart — the testing team is blocked, and the developer is experienced.
- B) Start the pipeline restart now, tell the developer you would rather stay inside the procedure, and message your supervisor so they know the state of things — mentioning the "I do it all the time" comment only if it comes up again.
- C) Refuse to do anything until your supervisor returns.
- D) Do the direct restart, but write up afterwards exactly what you did.

**Correct answer: B**

**Explanation:** B starts the safe fix immediately, declines the deviation kindly, and keeps the supervisor informed without escalating a colleague's habit on a first occasion. Option A outsources judgement to a peer's seniority; D preserves honesty but not the pipeline's safeguards; C mistakes paralysis for prudence when an agreed procedure exists precisely to allow action without the supervisor present. This tests holding an agreed procedure under social pressure while still acting promptly on the underlying problem.

**Question 6 (moderate) — You spot a risk in a design discussion**

In a design session, the proposed design calls an external API synchronously on every user request; the candidate recalls the API's response times spike during monthly reporting periods, and the discussion is moving on. Ask for the most effective response.

- A) Say nothing — the seniors have presumably considered it, and you might be wrong.
- B) Say briefly: "One thing before we move on — I read that this API slows down badly during monthly reporting. If we call it synchronously on every request, would our users feel those spikes? Should we consider caching or an async pattern?"
- C) Stay quiet in the meeting but raise it privately with your supervisor afterwards.
- D) Interrupt with: "This design won't work — that API is too slow."

**Correct answer: B**

**Explanation:** B raises the observation while the decision can still be shaped, states its evidence and mechanism, and frames it as a question rather than a verdict. Option A's "presumably considered" is the assumption behind many shipped defects; C loses timing value; D is a verdict without evidence, phrased to trigger defensiveness. This tests contributing a design-relevant observation promptly and constructively, regardless of seniority in the room.

**Question 7 (moderate) — The story is going to be late**

Building a part of a complex story due Thursday, the remaining work turns out to be at least two days beyond estimate by Tuesday afternoon; the supervisor is optimistic in stand-ups and hasn't asked for detail. Ask for the most effective response.

- A) Work late without telling anyone and hope to close the gap by Thursday.
- B) Say nothing until Thursday, then explain the interface complexity at the review.
- C) Tell your supervisor now: what is done, what remains, why the interface cost more than estimated, and your realistic completion date — asking whether to reduce scope, get help, or move the review item.
- D) Quietly cut the fiddly interface handling to hit the date, and raise a follow-up ticket later.

**Correct answer: C**

**Explanation:** C surfaces the risk while options still exist, with a structured account that turns a confession into a planning conversation the supervisor is positioned to act on. Option A bets the sprint on heroics; B ambushes the team when options have run out; D silently descopes exactly the part that likely matters, misleading the team about what actually works. This tests surfacing a schedule slip at the first credible signal, with facts and options, rather than absorbing or hiding it.

**Question 8 (moderate) — A user-focus tension in a small decision**

Fixing a crash in a citizen-facing form's error message; the agreed, minimal fix keeps the generic "An error occurred," but testing reveals the failure is nearly always an oversized file — a clearer message would help, but content changes are meant to involve the content designer and are beyond the ticket's scope. Ask for the most effective response.

- A) Ship the minimal fix and move on — scope is scope.
- B) Change the message yourself to "Your file is too big. Upload a file under 10MB." — it obviously helps users.
- C) Ship the minimal fix now, and flag to your supervisor and the content designer that upload-size failures dominate this error, suggesting a clearer message as a fast follow-up.
- D) Hold the fix back until the message question is resolved, so users get the complete improvement at once.

**Correct answer: C**

**Explanation:** C ships the fix, and passes the genuine user-facing insight to the people who own content decisions and can phrase guidance accessibly and accurately. Option A drops a real insight on the floor; B bypasses accessibility and accuracy checks with an unverified limit; D holds a working fix hostage to a nice-to-have. This tests delivering within scope while surfacing evidence to the right owner, rather than overstepping or dropping the insight.

**Question 9 (moderate) — Maintenance task meets an obstacle**

Following a monthly maintenance runbook (stop collector, archive logs, clear buffer directory, restart), the clear step fails: unfamiliar files with recent timestamps, not mentioned in the runbook, refuse to delete. The collector is currently stopped. Ask for the most effective response.

- A) Force-delete the unfamiliar files — the runbook says to clear the directory, and clearing is what you are doing.
- B) Restart the collector (returning the system to a safe, running state), then report the unfamiliar files to your supervisor with names and timestamps, and pause the maintenance until someone confirms what they are.
- C) Leave the collector stopped while you research what the files might be.
- D) Skip step three entirely, restart the collector, and mark the maintenance complete.

**Correct answer: B**

**Explanation:** B makes the system safe first (a stopped collector is quietly losing logs), then escalates with specifics that let the supervisor identify the files. Option A applies force where the runbook's authors never anticipated the situation; C leaves the system degraded while researching; D restores safety but falsifies the completion record. This tests defaulting to a safe system state before investigating, and reporting an unanticipated obstacle honestly rather than forcing through it or hiding it.

**Question 10 (hard) — Credit and visibility**

A caching suggestion that shaped a final design goes unmentioned when a senior engineer presents it at a show-and-tell; a teammate who was in the original session privately says "that was your idea, you should say something." Ask for the most effective response.

- A) Say nothing to anyone and let it go entirely; ideas belong to the team.
- B) Mention it lightly to the senior engineer afterwards ("glad the caching idea worked out!"), record the contribution in your own development notes, and raise it with your supervisor only if unacknowledged contributions become a pattern.
- C) Email the show-and-tell attendees clarifying that the caching approach was your suggestion.
- D) Raise it at the next retrospective as a team-culture issue.

**Correct answer: B**

**Explanation:** B fits the scale of a likely-careless single omission — a light comment, personal record-keeping regardless, escalation reserved for a real pattern. Option A erases evidence useful to the candidate's own development; C spends disproportionate social capital on a footnote; D inflates one ambiguous moment into a public agenda item. This tests calibrating a response to the actual scale of a minor slight, rather than either over- or under-reacting.

**Question 11 (hard) — A suspicious request with a plausible wrapper**

An email, apparently from a project manager elsewhere, asks for a new SSH public key to be added to the shared build server "for a contractor starting today... your supervisor said you could help." The supervisor is in meetings all morning. Ask for the most effective response.

- A) Add the key — onboarding delays are a bad first impression for a contractor.
- B) Reply asking the sender to confirm they are genuine.
- C) Do not act on the email; verify through independent channels — message your supervisor directly and check with the platform team via their official channel — and report the email as suspicious if either fails to confirm it.
- D) Forward the email to a teammate who has done key additions before and let them decide.

**Correct answer: C**

**Explanation:** C recognises the red flags (access-granting action, urgency, unverifiable authority claim, bypass of the normal owner) and verifies independently — never through the requesting channel — reporting if verification fails. Option A performs a permanent access grant on one email's say-so; B asks a possible attacker to vouch for themselves; D relocates the decision without adding verification. This tests recognising social engineering patterns and verifying through an independently trusted channel before acting.

**Question 12 (hard) — Least effective: the flaky test**

A pipeline test fails intermittently (roughly one run in five) for two weeks; people habitually click "re-run" without investigating. Ask which response would be LEAST effective.

- A) Raise a ticket describing the flakiness with dates, frequency, and links to failing runs, and mention it at stand-up so it gets prioritised.
- B) Ask your supervisor for time to investigate, and try to reproduce the failure locally to narrow the cause.
- C) Add a retry wrapper around the flaky test yourself and merge it quietly, so the pipeline stops bothering people.
- D) Propose at the retrospective that the team adopt a rule: flaky tests are fixed or quarantined within a sprint, because habitual re-running trains everyone to ignore red pipelines.

**Correct answer: C**

**Explanation:** A silent retry wrapper institutionalises the flakiness rather than fixing it — the underlying cause continues undetected, and the team never even chose the trade-off. Options A, B and D all strengthen the situation by surfacing, investigating, or systemically fixing the problem. This tests recognising that responses which silence a problem (especially silently) rank below responses that surface or genuinely fix it.

### Administration tips

- Score for the recurring behaviour pattern: restore safety first, disclose early with specifics, hold procedures kindly under pressure, timebox struggle then ask well, verify before acting, route insights to their owners.
- For "least effective" items, check the candidate answered the question actually asked, not its opposite.
- Note whether the candidate calibrates a response to the scale of an issue — a quiet word for a minor slight, formal escalation for a genuine pattern or risk.
- Score for whether the candidate discloses mistakes or slipping timescales promptly and plainly rather than delaying, softening, or working around them silently.
- Watch for whether the candidate defaults to the cautious, reversible option when facing an irreversible or ambiguous action on shared infrastructure.

### Common pitfalls to watch for when scoring

- Crediting silence as an acceptable response to a noticed problem — a mistake, a slipping deadline, a spotted risk, an exposed credential.
- Rewarding solo action beyond supervision on shared systems (force-deleting files, freelance restarts, unverified script execution) over asking or verifying first.
- Missing when a candidate defers to another's seniority as a substitute for following an agreed procedure.
- Accepting a response that makes a dashboard or metric look better without addressing the underlying reality (marking incomplete work complete, silently masking a flaky test).
- Missing the user-facing consequence of a decision when comparing otherwise similar options.

## Conclusion

This guide has worked through pipeline and branch-naming pattern checks, deduction from deployment and monitoring rules, error checking against specifications and conventions, and multi-constraint scheduling; error rates, availability percentages, backup windows against data growth, fair failure-rate comparisons, and weighted averages; the true/false/cannot-say discipline, should-versus-must, procedure branch tracing, and clear commit-message writing; and the situational moments that shape an early career — owning a broken merge before a demo, asking for help with working shown, declining a procedure bypass kindly, flagging a schedule slip while options remain, and spotting a social-engineering attempt.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational judgement items reward recognising what this role's supervised, learning position actually calls for, which is often to ask, verify, or escalate rather than act alone. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
