# Lead Infrastructure Engineer - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for lead infrastructure engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they use the kinds of artefacts a lead infrastructure engineer genuinely handles — programme plans, supplier contracts and performance data, security-engineered designs, lifecycle standards, test strategies, team workloads, and code and scripts under review — and the kinds of decisions genuinely made: managing third-party provision of infrastructure services, overseeing programmes and projects, designing solutions with security controls engineered in, establishing standards and procedures across the service product life cycle, leading teams in design and support, and leading others in applying modern development standards.

At lead level, a candidate's primary instruments are no longer their own hands but their judgement, their standards, and their people. Accountability is taken for issues that occur, with proactive searching for potential problems. Planning of system and acceptance tests is managed. Expertise turns architectural intent into operational reality across whole programmes. The assessments map directly onto those demands: dissecting a supplier's root-cause report for the flaw it is engineered to hide, quantifying whether a programme's resource plan survives contact with its schedule, reading a contract clause the way a dispute would read it, and choosing well when accountability, delivery, and people pull in different directions.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why employers use it for this role, a mapping of the assessment dimensions to the specific named skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring. Items progress from easy through moderate to hard, and the harder items are deliberately lead-shaped: programme-level trade-offs, supplier management, standards governance, mentoring judgement, and accountability under ambiguity.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. For a lead infrastructure engineer, the materials are those that cross a leader's desk: programme dependency maps, supplier root-cause analyses, security architecture proposals, lifecycle standards awaiting ratification, test strategies, scripts submitted for review, and the competing claims of teams, suppliers, and programmes about the same set of facts.

The typical format is an online, timed test lasting 15 to 30 minutes, with 20 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a comparable level; adaptive difficulty is common, and results usually separate speed from accuracy.

At lead level, the cognitive demand has a distinctive shape: reasoning happens at one remove. The evidence reaching the role has been filtered — by dashboards, by suppliers with commercial interests, by engineers reporting upward, by programmes defending schedules — and the value lies in reconstructing the underlying reality from partial, interested accounts. Reasoning is audited as much as it is produced: a supplier's incident narrative, a team's capacity claim, a test strategy's coverage argument. And decisions cascade: an error in a standard that is ratified replicates across every project that follows it; a flaw missed in a security design ships in every deployment. Employers assess cognition at this level because leads are the last technical filter before problems become programmes' problems.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Ownership and topic** skill — being proactive in searching for potential problems means detecting the weak signals (recurring near-misses, drifting metrics, converging risks) before they become incidents — and to the **Problem management** duty to initiate and monitor investigations into patterns and trends.
- **Logical deduction** maps to the **Information security** skill: designing solutions with security controls specifically engineered to mitigate threats is threat-to-control reasoning — what attack paths exist, what does each control block, what remains. It also maps to the **Systems integration** duty to establish standards and procedures across the life cycle, since standards are general rules whose consequences must be foreseen.
- **Error checking** maps to the **Coding and scripting** skill (interacting with, reading, and writing code, and baseline repair means finding the defect in the diff) and to the **Testing** skill of providing authoritative advice on test planning — auditing coverage claims against reality.
- **Prioritisation** maps to the role-level duty to oversee programmes and projects and the **Systems integration** duty to manage resources so the integration function works effectively: allocation under scarcity is the daily arithmetic of leadership.
- **Applied problem solving** maps to the **Troubleshooting and problem resolution** skill: using lateral thinking to break problems into component parts and diagnose root causes across computing, storage, networking, physical infrastructure, software, COTS, and open source.
- **Auditing others' reasoning** maps to the duty to manage third-party provision: supplier reports, vendor roadmaps, and contractor assurances are arguments to be dissected, not facts to be filed.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern in programme risk data**

Four infrastructure projects are under oversight. Their monthly risk reports show open high-severity risks: Project A: 4, 4, 3, 3. Project B: 2, 2, 2, 2. Project C: 1, 2, 4, 7. Project D: 6, 5, 3, 2. Which project most needs intervention?

- A) Project A — consistently elevated
- B) Project B — risks are not reducing
- C) Project C — risk count is accelerating upward
- D) Project D — highest total across the period

**Correct answer: C**

**Explanation:** Read trajectories, not snapshots. Project C's sequence 1, 2, 4, 7 shows increments of +1, +2, +3 — acceleration, the signature of a project losing control of its risk environment: each month generates more new high-severity risks than it retires. Project D, despite the highest historical numbers, shows the healthiest dynamic: 6, 5, 3, 2 is a project working risks down. Project A drifts gently downward; Project B is static at a low level. Option D's "highest total" reasoning is the classic dashboard error: cumulative history is not current condition. This tests the discrimination the role-level duty to oversee programmes and projects depends on, because leads have attention for one deep intervention at a time and the derivative — the direction and rate of change — is what tells where it belongs.

**Question 2 (easy) — Deduction from a security control design**

A design principle states: "Every administrative pathway to production systems must pass through the privileged access gateway, which enforces multi-factor authentication and session recording. No direct administrative protocol access from user networks is permitted." A review of firewall rules finds a rule permitting SSH from the engineering team's user subnet directly to a production database server, added eight months ago with the comment "temporary - migration support". Which conclusion must be true?

- A) The rule was authorised as an exception at the time.
- B) The rule violates the stated principle as it stands today.
- C) Engineers have been using the rule to bypass the gateway.
- D) The migration is still in progress.

**Correct answer: B**

**Explanation:** Test the rule against the principle's two clauses: administrative pathways must pass through the gateway, and no direct administrative protocol access from user networks. SSH is an administrative protocol; the rule permits it from a user subnet directly to production, bypassing the gateway. Whatever its history, the rule as it stands contradicts the principle: option B, and it is the only conclusion the facts compel. Option A is possible but unestablished — "temporary" comments are not exception records. Option C confuses the existence of a pathway with evidence of its use. Option D is contradicted by nothing but supported by nothing either. This tests the **Information security** skill of auditing whether an engineered state still holds, and the discipline of concluding exactly what the evidence supports — a violation exists — while listing what needs establishing (authorisation, usage, ongoing need), which is what makes an escalation credible rather than alarmist.

**Question 3 (easy) — Error checking a script under review**

An engineer submits this decommissioning script logic for review: "Step 1: read the list of servers marked 'decommission' in the CMDB. Step 2: for each server in the list, disable monitoring. Step 3: for each server in the list, remove from backup schedules. Step 4: for each server in the list, power off. Step 5: after 30 days, for each server powered off in step 4, delete the virtual machine." The team's decommissioning standard requires that services are confirmed migrated before any destructive action, and that backups are retained for 90 days after power-off. Which two defects should the review flag?

- A) Steps 2 and 3 are in the wrong order; step 5 should wait 60 days.
- B) No step confirms migration before power-off, and step 3 removes backup coverage at the start rather than retaining backups for 90 days after power-off.
- C) Step 1 should not trust the CMDB; step 4 should reboot rather than power off.
- D) The script needs error handling; otherwise it is compliant.

**Correct answer: B**

**Explanation:** Audit the script against each clause of the standard. Clause 1: "services confirmed migrated before any destructive action" — the script moves from list-reading to disabling monitoring to power-off with no confirmation step anywhere. Clause 2: "backups retained for 90 days after power-off" — step 3 removes servers from backup schedules before power-off, so the final backups age and expire on the normal retention cycle, and nothing guarantees 90 days of post-power-off retention; the deletion at 30 days (step 5) compounds the exposure. Option B names both. Option A invents an ordering problem and the wrong number. Option C raises speculative concerns the standard does not state. Option D's error handling is a fair review comment but not a compliance defect. This tests the **Coding and scripting** skill deployed as leadership: reading code against the governing standard clause by clause is how automation inherits standards rather than assumptions — and scripted mistakes replicate at scripted speed.

**Question 4 (easy) — Prioritising as a lead**

Four items compete for an afternoon: (1) a supplier's major incident report for last week's network outage has arrived, and an assessment is due to the service owner in three days; (2) an engineer being mentored asks for an hour to talk through a design they must present tomorrow; (3) a programme board meets in two hours and its paper misstates the team's position on a migration dependency — the error favours an unrealistic schedule; (4) the monthly team workload report is due at the end of the week. Which sequence is most defensible?

- A) 1, 3, 2, 4 — the incident report is the most substantive work
- B) 3, 2, 1, 4 — correct the board paper before the meeting, then the time-boxed mentoring, then the report work
- C) 2, 3, 1, 4 — people always come first
- D) 3, 1, 2, 4 — board first, then the report; mentoring can wait until tomorrow

**Correct answer: B**

**Explanation:** Two items have hard near-term deadlines; sequence within them by decay rate. Item 3 expires in two hours: once the board endorses a schedule built on a misstated dependency, unwinding it costs a governance cycle and the team inherits an impossible commitment. Item 2 expires tomorrow morning: the engineer's presentation is fixed, so the mentoring hour is valuable only today. Item 1 has three days and deserves deep reading. Item 4 has the week. Option B sequences by expiry and leverage. Option A treats substance as urgency. Option C applies a slogan where a calendar would do. Option D quietly drops the mentoring, which is how leads teach their teams that development commitments are the flexible ones. This tests whether a candidate orders by when value evaporates — overseeing programmes and managing resources is mostly this.

**Question 5 (moderate) — Auditing a supplier's root-cause narrative**

A supplier's incident report concludes: "Root cause: an unprecedented traffic surge overwhelmed the firewall cluster. The surge exceeded design parameters, and no reasonable capacity planning could have anticipated it. Recommendation: the customer should fund a capacity upgrade." The department's own monitoring shows: traffic at the incident peak was 40% above normal but 10% below the level handled without issue during last year's peak season; the firewall cluster was running a firmware version two releases behind the supplier's own currency standard; and one of the cluster's two nodes had been out of service for maintenance, halving capacity, under the supplier's control. Which assessment is soundest?

- A) Accept the report — the supplier is the expert on its own equipment.
- B) The narrative fails against the evidence: the "surge" was within historically handled levels; the halved capacity (supplier-controlled maintenance) and outdated firmware are omitted contributing causes under the supplier's responsibility; the report shifts remediation cost toward the customer. Challenge it with the evidence and require a revised analysis.
- C) Reject the report and terminate the supplier relationship.
- D) Accept the recommendation but fund the upgrade jointly.

**Correct answer: B**

**Explanation:** Test the narrative's load-bearing claims against independent evidence. "Unprecedented surge": the department's data shows the peak was below last year's handled levels — the adjective collapses. What the report omits is more instructive: a cluster at half capacity due to supplier-scheduled maintenance handles any surge with half its designed headroom, and outdated firmware is a currency failure against the supplier's own standard. The report's structure — external inexplicable cause, customer-funded remedy — is the standard shape of cost-shifting root-cause analysis. Option B responds proportionately: evidence-based challenge and a required revision, which preserves the relationship while refusing the narrative. Option C escalates a correctable report into a procurement crisis. Option D splits a cost the evidence assigns before the corrected analysis exists. This tests the lead-level pattern: never assess a supplier report without laying independent telemetry beside it — precisely why the duty to manage third-party provision requires independent monitoring.

**Question 6 (moderate) — Deduction through standards interaction**

Two standards are awaiting ratification. Standard A (draft): "All infrastructure automation code must pass peer review and automated testing in the pipeline before deployment to production." Standard B (existing, security team): "Emergency security patches must be deployed within 24 hours of release for critical vulnerabilities." An engineer objects: "During an emergency patch, there may be no time for peer review — the standards conflict." Which resolution is most sound?

- A) The standards do not interact; dismiss the objection.
- B) Standard B overrides Standard A in emergencies; note nothing.
- C) The objection identifies a genuine interaction: add an emergency pathway to Standard A — expedited review by any available senior engineer, or post-deployment review within a defined period when none is available — so both standards can be satisfied, and the exception is designed rather than improvised.
- D) Withdraw Standard A — it cannot handle emergencies.

**Correct answer: C**

**Explanation:** Model the interacting case concretely: a critical patch released at 02:00 requires automation changes deployed within 24 hours; if no reviewer is available inside that window, an engineer must choose which standard to breach — a real conflict, so option A fails on the facts. Option B resolves it by silent precedence: workable tonight, corrosive over time, because unwritten override rules are applied inconsistently and are invisible to audit. Option D abandons the general good for the exceptional case. Option C is how mature standards are engineered — the **Systems integration** duty to establish standards and procedures across the life cycle, and ensure practitioners adhere to them, depends on standards that survive their edge cases. This tests whether a candidate recognises that the response incorporating the objection also teaches the team that raising problems with draft standards is welcome — standards ratified over objections get complied with resentfully and abandoned quietly.

**Question 7 (moderate) — Error checking a test strategy's coverage claim**

A programme's test strategy, submitted for authoritative review, claims: "Full non-functional coverage is achieved: performance testing will run at 120% of forecast peak load; failover testing will exercise the loss of each component individually; backup restoration will be tested monthly." The system it covers is a two-site design where the stated recovery requirement is continuity through the loss of an entire site, and forecast load grows 40% within the strategy's two-year lifetime. Which gap is most significant?

- A) Performance testing should run at 150% of peak, not 120%.
- B) Component-level failover testing does not exercise whole-site loss — the stated recovery requirement is never tested — and 120% of today's peak is below year-two forecast load.
- C) Monthly backup restoration testing is too frequent.
- D) The strategy fails to name the testing tools.

**Correct answer: B**

**Explanation:** Audit the coverage claim against the stated requirements, not against generic good practice. The recovery requirement is site-loss continuity; the strategy tests component-loss failover — a materially weaker condition, since site loss removes many components simultaneously plus their shared dependencies. The headline requirement is simply never exercised. Secondarily, 120% of today's peak is overtaken by forecast growth of 40% within the strategy's own lifetime — by year two, "120%" tests below expected peak. Option B captures both. Option A proposes a bigger number without the requirement-anchored reasoning. Option C objects to prudence. Option D is administrative. This tests the **Testing** skill at its lead altitude — providing authoritative advice and guidance on test planning means testing the claim "full coverage" against the requirements the way an incident eventually would.

**Question 8 (moderate) — Lateral decomposition of a cross-capability problem**

Users report that large file transfers to a partner organisation fail at almost exactly 10 minutes, regardless of file size or time of day. Small files always succeed. The network team reports the link healthy, the server team reports the transfer service healthy, the security team reports the proxy healthy. The failures continue. As lead, which investigative direction is most promising?

- A) Recheck each component more thoroughly, one team at a time.
- B) The consistent 10-minute cutoff regardless of size or load suggests a timeout somewhere in the end-to-end path — likely a session or idle timeout in a mid-path device (firewall, proxy, load balancer) or at the partner's side; investigate the path as a whole, correlating timestamps, and test with a transfer engineered to exceed 10 minutes at low bandwidth.
- C) Blame the partner organisation's infrastructure, since all components are healthy.
- D) Advise users to split large files into chunks that transfer in under 10 minutes.

**Correct answer: B**

**Explanation:** The signature is the clue: failures locked to elapsed time, invariant to size, load, and time of day, are the fingerprint of a configured timeout, not of capacity, congestion, or intermittent faults — which is why each component, examined in isolation for health, reports healthy: a timeout is healthy behaviour, configured somewhere, interacting with long-lived sessions. Option B reasons laterally — the **Troubleshooting and problem resolution** skill's exact phrasing — from the pattern to the mechanism class, then designs the discriminating test. This tests the structural insight for leads that option A repeats a method that has already failed three times — component-isolation checking cannot find an interaction property, however thoroughly each team rechecks; when every part is healthy and the whole still fails, only someone with cross-team authority can direct a whole-path investigation. Option C asserts without evidence. Option D institutionalises the fault as user procedure.

**Question 9 (moderate) — Resource allocation across the integration function**

The integration function has 5 engineers and three concurrent demands: Programme X needs 3 engineers for 4 weeks (hard regulatory deadline in 5 weeks); Programme Y needs 2 engineers for 6 weeks (deadline in 8 weeks); business-as-usual (BAU) integration support needs 1 engineer continuously, and historically generates an unplanned surge roughly one week in four requiring a second engineer. Which allocation plan is most robust?

- A) X: 3, Y: 2, BAU: 0 — programmes first; BAU can wait five weeks.
- B) X: 3, BAU: 1, Y: 1 — staff the regulatory deadline and BAU fully now; Y starts with 1 engineer and receives 2 more when X completes in week 4, still finishing within its week-8 deadline; BAU surges draw temporarily from Y's single engineer, with the deficit recovered after X releases staff.
- C) X: 2, Y: 2, BAU: 1 — spread evenly and hope X's deadline flexes.
- D) X: 3, Y: 2, BAU: 1 — commit 6 engineers and recruit a contractor immediately to cover the sixth seat.

**Correct answer: B**

**Explanation:** Check each plan against the constraints and the surge reality. Total capacity is 5; demands sum to 6 at peak. Option D resolves the arithmetic with an instant contractor, but procurement, clearance, and onboarding make "immediately" fictional inside a 4-week window. Option A zeroes BAU: integration support demand does not pause because it is unstaffed — it becomes incidents and interruptions that will raid X's staffing anyway. Option C understaffs the one immovable deadline on a hope. Option B does the sequencing arithmetic: X fully staffed completes in week 4, inside the week-5 regulatory line with a week's margin; Y runs weeks 1–4 at reduced pace on 1 engineer, then takes 3 from week 5, meeting the week-8 deadline; BAU keeps its continuous engineer, with the surge borrowing from Y's early-phase flex. This tests the **Systems integration** duty — managing resources so the function works effectively — in its real form: not dividing headcount, but sequencing commitments so every hard constraint is met and the plan states where its slack lives.

**Question 10 (hard) — Deduction across a threat model**

A design exposing an API to partner organisations is under security review. Controls in the design: (i) mutual TLS authenticates partner systems; (ii) an API gateway enforces per-partner rate limits; (iii) all requests are logged with partner identity; (iv) payloads are validated against a strict schema. The threat register lists four threats: (T1) an unauthorised third party calling the API; (T2) a compromised partner system flooding the API; (T3) a compromised partner system submitting malformed payloads to exploit the parser; (T4) a compromised partner system exfiltrating another partner's data through the API. Which threat is not addressed by the stated controls?

- A) T1
- B) T2
- C) T3
- D) T4

**Correct answer: D**

**Explanation:** Map each threat to the control engineered against it. T1 (unauthorised caller): mutual TLS blocks unauthenticated systems — addressed by (i). T2 (flooding from a compromised partner): per-partner rate limits cap the damage — addressed by (ii). T3 (malformed payloads): strict schema validation rejects them before the parser's vulnerable depths — addressed by (iv). T4 (cross-partner data access): authentication proves who is calling, rate limiting bounds how often, logging records that it happened, and schema validation checks the request's shape — but nothing checks whether an authenticated partner is authorised to access the specific data requested. Authentication without per-partner authorisation on data access leaves T4 open. This is the systematic method the **Information security** skill names — controls "specifically engineered to mitigate security threats" implies a threat-by-threat audit, and this tests whether the candidate asks not "are there controls?" but "which threat does each control kill, and which threat does no control touch?" The authenticated-but-unauthorised gap is among the most common in real partner API designs, precisely because four strong controls make the design feel finished.

**Question 11 (hard) — Reconciling contradictory accounts**

A programme escalates: "The infrastructure team's environment delays have cost us three sprints." The team's account: "The programme changed its environment requirements four times; each rebuild was delivered within our five-day standard." The records show: the programme submitted requirement changes on four dates; the team delivered each rebuild in 4–5 working days; but also that the first requirements document sat in the team's intake queue for nine days before work began, and two of the programme's four changes were corrections of misunderstandings from a kickoff meeting the team's representative missed. Which conclusion do the records best support?

- A) The programme's account is correct and the team's is wrong.
- B) The team's account is correct and the programme's is wrong.
- C) Both accounts are selectively true: the team met its per-rebuild standard but contributed the nine-day intake delay and, by missing kickoff, contributed to two avoidable requirement changes; the programme drove four changes but two trace partly to the team's side. The delay is co-produced; fix intake latency, kickoff attendance, and requirements confirmation jointly.
- D) The records are inconclusive; commission an independent review.

**Correct answer: C**

**Explanation:** Audit each account against the record. The team's claim — every rebuild within five days — is true and incomplete: it measures from work-start, silently excluding the nine days of intake queue, which the programme experienced as delay identically to slow delivery. The programme's claim — four requirement changes caused the rebuilds — is true and incomplete: two of the four changes corrected misunderstandings that a kickoff attendee from the team would likely have caught at source. Option C is what the merged record supports, and the remedies (intake latency target, mandatory kickoff coverage, requirements confirmation step) are process fixes, not blame allocations, which is what lets both sides adopt them. Options A and B each accept one frame whole. Option D outsources a reconciliation the records have already performed. This tests taking accountability for issues that occur — the **Ownership and topic** skill — which begins with owning one's own side's contribution before negotiating anyone else's.

**Question 12 (hard) — Baseline repair decision under uncertainty**

An overnight automated deployment has left a configuration baseline in a mixed state: 60 of 200 servers received a new configuration version, 140 did not, and the deployment tool's state database was corrupted mid-run — so its records of which 60 are unreliable. The new configuration is functionally compatible with the old (services run correctly on both), but the mixed estate breaks compliance reporting and the next deployment cannot run until the baseline is coherent. Three options: query every server directly for its actual version (a script the team can write in about 2 hours, then an hour to run); restore the state database from its pre-run backup (10 minutes, but it will claim all 200 are on the old version — wrong for the 60); or re-push the new configuration to all 200 servers (4 hours, makes reality uniform, but re-applies configuration to 140 servers outside any approved change window). Which recovery is soundest?

- A) Restore the state database from backup — fastest, and the tool will self-correct over time.
- B) Re-push to all 200 immediately — uniform reality is worth the unapproved deployment.
- C) Query the estate for ground truth first (≈3 hours), rebuild the state database from actual server responses, then schedule the completion push for the remaining 140 through the normal change process — services are running correctly meanwhile, so the urgency is coherence, not availability.
- D) Do nothing until the vendor of the deployment tool investigates the corruption.

**Correct answer: C**

**Explanation:** Establish what is actually at stake: services run correctly on both versions, so there is no availability emergency — the damage is epistemic and procedural. That diagnosis orders the options. Option C rebuilds knowledge from ground truth — the servers themselves are the authoritative record of what they run, and three hours of scripted query converts unreliable tool-state into verified fact; the completing push for the 140 goes through the change process it belongs in. This is **Coding and scripting** as the role defines it — baseline repair activities — done in the correct epistemic order: observe, then record, then act. Option A repairs the database by installing a known falsehood. Option B fixes reality by unauthorised mass change. Option D abandons a recoverable estate to a vendor timeline. This tests the lead pattern: when state and reality diverge, reality is the baseline — repair records from it, never it from records.

### Administration tips

- **Watch for whether a candidate reads trajectories rather than snapshots** in a trend item — the direction and rate of change, not the current or historical total.
- **Score for whether a candidate audits a supplier or programme claim against independent evidence** before accepting or rejecting it.
- **Note whether a candidate maps each threat to the specific control that addresses it**, rather than accepting "there are controls" as sufficient.
- **Keep timing consistent** across candidates for this level.
- **Use the contradictory-accounts item (Question 11) to observe whether a candidate audits their own side's account as rigorously as the other's.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that accepts a narrative because it is expert** — suppliers, programmes, and internal teams all present selectively.
- **Crediting an answer that reads a snapshot rather than a trajectory.**
- **Missing when a candidate concludes beyond what the record supports** — a violating rule proves violation, not usage, intent, or authorisation history.
- **Accepting an answer that reviews against good practice rather than the specific stated requirement.**
- **Rewarding an answer that resolves a standards conflict by silent precedence** rather than a designed exception pathway.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the quantities this role genuinely handles — and at lead level, most of those quantities carry money, people, or contractual force. Alongside the engineering staples (capacity, availability, throughput), a candidate's numbers now include supplier service credits and performance penalties, programme resource plans, cost models across options and years, test coverage and defect statistics at programme scale, and the workload arithmetic of the teams led. The underlying mathematics remains accessible — percentages, ratios, weighted averages, rates, compound growth, and reading tables and charts — but the questions demand interpretation, multi-step assembly, and the judgement to notice when a correct number supports an incorrect conclusion.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions, each presenting realistic data — a supplier performance table, a cost comparison, a programme burn-down, a capacity model — followed by a multiple-choice question. Calculators are usually permitted; rough paper is essential; scoring is norm-referenced and often adaptive.

Employers assess numeric reasoning for lead infrastructure engineers because, at this level, arithmetic is contractual and budgetary. Managing third-party provision means service credit calculations and performance measurements are the enforcement mechanism of the contract — and suppliers employ people who compute them carefully in the other direction. Overseeing programmes means resource and schedule arithmetic determines whether commitments made in a lead's name are physically possible. Input to budgets means cost models compete with others' for finite public money. A lead who cannot rapidly verify a weighted figure, a pro-rated credit, or a compound growth projection is negotiating unarmed.

### How this assessment maps to the role

- **Contractual and performance arithmetic** maps to the role-level duty to manage third-party provision of infrastructure services: measuring supplier performance against contracted definitions, verifying service credits, and challenging computed claims are core enforcement numeracy.
- **Programme and resource arithmetic** maps to the duty to oversee programmes and projects and the **Systems integration** duty to manage resources so the function works effectively: schedules, allocations, and burn rates are rate-and-ratio problems with deadlines attached.
- **Cost and investment comparison** maps to the management-path duty to lead teams in the design and implementation of solutions: option papers, total-cost models, and consolidation cases are decided on arithmetic that must be built and audited.
- **Test and quality metrics at scale** map to the **Testing** skill: managing the planning of system and acceptance tests and identifying process improvements requires fluency with pass rates, defect discovery curves, and coverage figures — including their bases.
- **Risk and reliability quantification** maps to the **Information security** and **Ownership and topic** skills: proactive problem-searching is largely trend arithmetic, and security investment cases are probability-times-impact estimates presented honestly.
- **Team workload figures** map to the duty to lead and direct infrastructure specialist teams: sustainable rotas, utilisation, and capacity claims are the numbers behind people decisions.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Service credit calculation**

A supplier contract specifies: availability below 99.5% in a month earns a service credit of 5% of the monthly charge; below 99.0%, the credit is 10%. The monthly charge is £48,000. The supplier delivered 99.2% availability this month. What credit is due?

- A) £4,800
- B) £2,400
- C) £0
- D) £7,200

**Correct answer: B**

**Explanation:** Locate 99.2% in the credit bands: it is below 99.5% (triggering the 5% band) but not below 99.0% (so the 10% band does not apply). Credit = 5% of £48,000 = 0.05 × 48,000 = £2,400 — option B. Option A applies the 10% band; option D applies 15% (credits in tiered structures replace, not stack, unless the contract says otherwise). This tests band-edge care: contracts written "below 99.5%" exclude exactly 99.5%. A strong candidate's answer notes that credits should always be recomputed from raw downtime minutes and the contract's own rounding rules, not from a supplier's pre-banded summary.

**Question 2 (easy) — Programme resource burn**

A 12-week infrastructure project was planned at 3 engineers full-time throughout (36 engineer-weeks total). At the end of week 8, the project has consumed 30 engineer-weeks and completed 60% of its planned work. If the remaining work is completed at the same productivity rate the project has achieved so far, how many more engineer-weeks are needed?

- A) 6
- B) 12
- C) 20
- D) 18

**Correct answer: C**

**Explanation:** Compute achieved productivity first: 60% of the work consumed 30 engineer-weeks, so each 1% of work costs 30 ÷ 60 = 0.5 engineer-weeks. Remaining work is 40%, so at the same rate: 40 × 0.5 = 20 engineer-weeks — option C. Option A is the planned remainder, which assumes the plan's productivity despite eight weeks of evidence against it. This tests earned-value reasoning in its simplest form, and a strong candidate's answer notes the comparison that matters for oversight: the plan allowed 36 engineer-weeks total; the evidence-based forecast is 30 + 20 = 50 — a 39% overrun — and after real evidence exists, forecasts should extrapolate achieved rates, not planned ones.

**Question 3 (easy) — Weighted supplier scorecard**

A supplier scorecard weights: availability 50%, incident response 30%, project delivery 20%. This quarter's scores (out of 100): availability 92, incident response 70, project delivery 85. The contract requires a weighted score of at least 82 to avoid a performance review meeting. What is the weighted score, and is a review triggered?

- A) 82.3 — no review
- B) 84.0 — no review
- C) 79.5 — review triggered
- D) 82.0 — no review (exactly at threshold)

**Correct answer: B**

**Explanation:** Multiply each score by its weight and sum. Availability: 92 × 0.50 = 46.0. Incident response: 70 × 0.30 = 21.0. Project delivery: 85 × 0.20 = 17.0. Weighted score: 46.0 + 21.0 + 17.0 = 84.0 ≥ 82 — no review, option B. Option A is the unweighted mean; option C comes from misassigning the weights. This tests whether a candidate verifies the weights sum to 1.0 before computing, and a strong candidate's answer also notes what the weighting conceals: a 70 in incident response is a poor quarter's performance sheltering under strong availability — scorecards are floors for contractual consequence, not ceilings for management attention.

**Question 4 (easy) — Capacity of a consolidation target**

Three legacy clusters are being consolidated onto one platform. Their current peak utilisations are: Cluster A, 240 vCPU; Cluster B, 310 vCPU; Cluster C, 180 vCPU. Historical data shows their peaks never coincide: the highest combined simultaneous peak observed is 640 vCPU. Policy requires 25% headroom above observed peak. What minimum vCPU capacity must the target platform provide?

- A) 730
- B) 800
- C) 912
- D) 640

**Correct answer: B**

**Explanation:** Use the combined simultaneous peak, not the sum of individual peaks. The individual peaks total 730, but they never coincide; the observed simultaneous peak is 640. Apply the policy headroom: 640 × 1.25 = 800 vCPU — option B. Option A is the non-coincident sum with no headroom; option C applies headroom to that inflated sum; option D forgets the headroom entirely. This tests the statistical point that saves real money in consolidation cases: aggregate demand is not the sum of individual maxima unless the maxima coincide. A strong candidate's answer notes the caveat worth carrying into any business case: "never coincided historically" is evidence, not law, so the headroom is doing real work and monitoring should watch for peak convergence.

**Question 5 (moderate) — Compound growth against a fixed budget**

Storage costs are £200,000 this year and growing at 15% per year compound. The budget line is fixed at £260,000 per year for the next three years. In which year does cost first exceed budget, and by roughly how much? (Year 1 is next year.)

- A) Year 2, by about £4,500
- B) Year 3, by about £44,000
- C) Year 2, by about £14,500
- D) Year 3, by about £30,000

**Correct answer: A**

**Explanation:** Compound forward year by year. Year 1: 200,000 × 1.15 = £230,000 — under budget. Year 2: 230,000 × 1.15 = £264,500 — over budget by £4,500. The first breach is Year 2, by about £4,500 — option A. Options C and D come from simple, non-compound growth. This tests whether a candidate models compound growth as compound and answers exactly the question asked (first breach, not largest) — the compounding difference in Year 2 is precisely what decides which side of the budget line the department lands on, and a strong candidate's answer volunteers the year-by-year table so a budget holder can verify the arithmetic in ten seconds.

**Question 6 (moderate) — Defect discovery and release readiness**

A programme's system testing has run for 6 weeks. New defects found per week: 28, 24, 19, 13, 8, 5. Critical-severity defects among them per week: 4, 3, 2, 1, 0, 0. Exit criteria for release: weekly new-defect discovery below 10, no new critical defects for 2 consecutive weeks, and all previously found critical defects fixed and retested (2 remain open). Which statement is correct?

- A) All exit criteria are met — release can proceed.
- B) The discovery trend (below 10 for two weeks) and critical-discovery criteria (none for two weeks) are met, but 2 open critical defects block release until fixed and retested.
- C) No exit criteria are met — testing must restart.
- D) The trend criteria fail because week 4 found 13 defects.

**Correct answer: B**

**Explanation:** Test each criterion against the data. Criterion 1 — weekly discovery below 10: weeks 5 and 6 found 8 and 5, satisfying the criterion. Week 4's 13 (option D) is history, not current state. Criterion 2 — no new criticals for 2 consecutive weeks: weeks 5 and 6 found 0 and 0 ✔. Criterion 3 — all found criticals fixed and retested: 2 remain open ✗. Two of three criteria pass; the third blocks: option B. This tests reading exit criteria one by one, and a strong candidate's answer notes the shape worth reading as a lead: a falling discovery curve with criticals extinguished first is the classic signature of a product converging to releasable, so the open pair is a completion matter, not a stability concern — the release advice should say exactly that.

**Question 7 (moderate) — Pro-rated credit with an exclusion clause**

A supplier's monthly charge is £60,000. The contract: unavailability earns a credit of 2% of monthly charge per full hour of downtime, capped at 20% of the monthly charge; downtime during customer-requested emergency changes is excluded from the calculation. This month's downtime: one 6.5-hour outage (supplier fault) and one 3-hour outage during an emergency change the department requested. What credit is due?

- A) £12,000
- B) £7,200
- C) £11,400
- D) £10,800

**Correct answer: B**

**Explanation:** Apply the exclusion first: the 3-hour emergency-change outage is excluded, leaving the 6.5-hour supplier-fault outage. Apply the "per full hour" definition: 6.5 hours contains 6 full hours. Credit: 6 × 2% = 12% of £60,000 = £7,200 — option B, under the 20% (£12,000) cap. Every wrong option is a defensible-looking misreading of one clause (ignoring the exclusion, ignoring the full-hour rule, or both). This tests computing a credit from the contract's exact words in sequence — exclusion, then full-hour counting, then cap — which is exactly how supplier credit disputes arise and are resolved: a strong candidate's answer shows the sequence, so the number arrives with its reasoning attached.

**Question 8 (moderate) — Team utilisation and the cost of interruptions**

A 6-engineer team logs its time for a month (each engineer: 160 hours, 960 team hours total): project work 480 hours; BAU operations 240 hours; unplanned interruptions (incident pulls, ad-hoc requests) 144 hours; improvement work 48 hours; training 48 hours. A programme asks for a commitment of "half your team" (480 hours/month) to a new project while "keeping everything else running". What does the arithmetic show?

- A) The commitment fits — 480 hours of project work is already happening, so the new project simply replaces it.
- B) The commitment fits if training is cancelled.
- C) The commitment cannot fit alongside existing obligations: non-project demands (240 + 144 + 48 + 48 = 480 hours) already consume half the team's hours, and the existing 480 project hours presumably serve current commitments — so the new project requires either dropping existing project work, reducing BAU/interruption load, or additional people; present these options with the data.
- D) The commitment fits because interruptions can be eliminated by refusing ad-hoc requests.

**Correct answer: C**

**Explanation:** Sum the non-project demand: BAU 240 + interruptions 144 + improvement 48 + training 48 = 480 hours — exactly half the team's 960. The other 480 is current project work, serving existing commitments that do not vanish because a new programme asks. So the request needs 1,440 hours from a 960-hour team: arithmetically impossible without change — option C, whose second half is the lead skill: the answer is not "no" but an options table with the time data attached. Option A assumes existing project commitments are free to cancel. Option B recovers 48 hours against a 480-hour gap while spending the team's development. Option D prices interruptions at zero. This tests whether a candidate begins resourcing negotiation with a truthful hours ledger — the **Systems integration** duty of managing resources so the function works effectively.

**Question 9 (moderate) — Reading a trend with seasonality**

Monthly incident counts for a service over 12 months (January to December): 82, 78, 80, 76, 74, 71, 69, 72, 88, 92, 95, 90. A stakeholder says: "Incidents rose 10% over the year (82 → 90), and the autumn numbers show the service deteriorating rapidly." Last year showed the same autumn shape (September–December well above summer). What is the soundest reading?

- A) The stakeholder is right: the autumn rise shows accelerating deterioration.
- B) The year shows a gentle underlying improvement (January's 82 to August's 72, a downward drift) overlaid with a recurring autumn seasonal peak also present last year; compare autumn to last autumn, not to summer, before concluding deterioration.
- C) The data shows no pattern at all.
- D) Incidents fell 12% (82 → 72), so the service improved and autumn can be ignored.

**Correct answer: B**

**Explanation:** Decompose trend from seasonality. January through August drifts downward, a genuine underlying improvement. September–December jumps well above the drift line, but last year showed the same autumn shape: a recurring seasonal pattern. The valid deterioration test is year-on-year like-for-like: this autumn against last autumn — data the stakeholder's summer-versus-autumn comparison ignores. Option B states both components and names the correct comparison. Option A reads seasonality as trend — the most common error in operational reporting. Option D cherry-picks the drift's endpoints and dismisses autumn. Option C gives up on visibly structured data. This tests the decomposition that the proactive problem-searching duty (**Ownership and topic**) runs on: the underlying drift tells whether prevention is working; the seasonal component tells when to pre-position capacity; confusing them wastes both budgets.

**Question 10 (hard) — Cost model with utilisation-dependent pricing**

Two support models for a 400-server estate are being evaluated. Model 1: fixed £180,000/year covering unlimited incidents. Model 2: £96,000/year base plus £150 per incident. Historical incident volume is 40 incidents per month, but a reliability programme completing this year is forecast (with reasonable confidence) to reduce volume by 30% from month 1 of the contract. The contract runs 24 months. Which model is cheaper over the contract, and what does the decision most depend on?

- A) Model 1, by £4,800 — and the decision is insensitive to incident volume.
- B) Model 2, by about £67,000 if the 30% reduction materialises; but if volume stays at 40/month, Model 2 saves only about £24,000 — Model 2 is cheaper either way, though the margin varies substantially with the forecast.
- C) Model 2, by about £24,000 regardless of the reduction.
- D) Model 1, because unlimited cover always beats per-incident pricing at this scale.

**Correct answer: B**

**Explanation:** Cost both models at both volumes over 24 months. Model 1: £180,000 × 2 = £360,000 regardless of volume. Model 2 at reduced volume (28/month): cost = (£96,000 × 2) + (672 × £150) = £292,800; saving = £67,200. Model 2 at unreduced volume (40/month): cost = £192,000 + £144,000 = £336,000; saving = £24,000. In both scenarios Model 2 is cheaper — robust to whether the reliability programme delivers — but the margin ranges from £24,000 to £67,200: option B. Options A and D assert Model 1 without arithmetic; option C fixes the margin at its worst case. This tests the lead-level method: costing options under both the forecast and its failure, finding the break-even, and reporting the decision's sensitivity — "cheaper either way; margin depends on the reliability programme" is a recommendation a budget holder can sign.

**Question 11 (hard) — Availability of serial and parallel compositions**

A service chain has three stages: a load-balanced web tier (two independent nodes, each 99.0% available — the tier works if either node works), a single application server (99.5% available), and a database cluster (99.9% available). Stages are in series: the service works only if all three stages work. Assuming independence, what is the approximate end-to-end availability?

- A) 99.90%
- B) 99.39%
- C) 98.41%
- D) 99.99%

**Correct answer: B**

**Explanation:** Compute the parallel tier first, then multiply the series. Web tier: both nodes fail simultaneously with probability 0.01 × 0.01 = 0.0001, so tier availability = 99.99%. Series composition: 0.9999 × 0.995 × 0.999 ≈ 0.99391 ≈ 99.39% — option B. Option A quotes the best component; option D quotes the redundant tier alone; option C treats the redundant web nodes as serial dependencies rather than parallel. This tests two composition rules: redundancy multiplies failure probabilities (making a redundant tier nearly perfect), while series chains multiply availabilities (making the whole worse than its weakest link — here the single 99.5% application server dominates the loss). A strong candidate's answer draws the immediate engineering conclusion: the next pound of resilience investment belongs at the application server, not the already-redundant web tier.

**Question 12 (hard) — Reconciling a programme's schedule claim**

A programme reports: "Environment builds are 75% complete (18 of 24 environments delivered), consistent with the 75% elapsed schedule (week 9 of 12), so delivery is on track." Records show the 18 delivered environments were the simple ones (average build effort 2 engineer-days each); the remaining 6 are the complex integration environments (average 8 engineer-days each). The build team has 4 engineers, each contributing 4 build-days per week. Is the programme on track, and what is the soundest correction to its arithmetic?

- A) On track — 75% complete at 75% elapsed is the definition of on schedule.
- B) Not on track: measured by effort, the programme is 36 of 84 engineer-days from completion (43% of effort remains); the remaining 48 engineer-days at 16 build-days/week needs 3 weeks exactly — schedule-feasible only if nothing slips, with zero contingency; measured properly, the programme is at high risk, not "on track".
- C) Not on track: the remaining work needs 6 weeks, so the programme will finish 3 weeks late.
- D) On track, because the complex environments can be descoped.

**Correct answer: B**

**Explanation:** Recompute progress in effort, the unit that predicts time. Total effort: (18 × 2) + (6 × 8) = 84 engineer-days. Completed: 36 of 84 = 42.9% — not 75%; the count-based figure flatters because the easy units were built first. Remaining: 48 engineer-days. Capacity: 4 engineers × 4 build-days = 16 engineer-days/week. Time required: 48 ÷ 16 = 3 weeks — exactly the 3 weeks remaining. So the arithmetic says feasible with zero slack. Option B's verdict — schedule-feasible, zero contingency, high risk, and the unit-of-measure correction — is the full truthful picture. Option A accepts the flattering unit. Option C overshoots without support. Option D resolves the schedule by discarding scope nobody has agreed to discard. This tests whether a candidate recognises that progress percentages are only as honest as their units — recomputing in effort, then stating the contingency explicitly, is the central pattern for overseeing programmes.

### Administration tips

- **Score for whether a candidate applies a contract's exclusions, counting rules, and caps in the correct order** before computing a credit.
- **Watch for whether a candidate forecasts from achieved productivity rather than planned rates** once real evidence exists.
- **Note whether a candidate uses observed simultaneous peaks** rather than summing individual maxima in a consolidation or capacity item.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.
- **Use the schedule-reconciliation item (Question 12) to observe whether a candidate recomputes progress in the unit that predicts time** (effort) rather than accepting a count-based percentage.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that stacks tiered credits or ignores an exclusion clause.**
- **Crediting a forecast built from planned rates after real evidence exists** that contradicts them.
- **Missing when a candidate sums non-coincident peaks** rather than using observed simultaneous demand.
- **Accepting a simple-growth answer where compounding decides** which side of a threshold a figure lands on.
- **Rewarding a single reported number with no sensitivity or contingency stated**, where the honest form states both a best and worst case.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate understands, evaluates, and acts on written information of the kind a lead infrastructure engineer handles: supplier contracts and their schedules, programme governance papers, security architecture documents, lifecycle standards authored and ratified, escalations written to persuade, and the technical writing of the engineers led. The dominant formats are True/False/Cannot say judgements against a passage, supported-inference questions, best-summary items, argument evaluation, and clear-writing judgements — with the passages at this level longer, more interested, and more consequential than earlier in a career.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions. The governing rule remains: judge strictly from the passage, not from expertise or expectation — and at lead level a second discipline joins it: detecting what a passage is doing as well as what it says, because much of what is read is written to persuade of something its author needs.

Employers use verbal reasoning tests at this level because the role runs on high-stakes text in both directions. Inbound: contracts whose clauses are enforced against suppliers, programme papers whose claims are endorsed or challenged at boards, incident narratives engineered to relocate cost, and standards whose interactions must be foreseen before ratifying. Outbound: standards and procedures are established that practitioners across the life cycle must follow — text that fails only when someone follows it exactly and reaches the wrong place. At lead level, careful reading is due diligence, and clear writing is governance.

### How this assessment maps to the role

- **Contract-grade comprehension** maps to the role-level duty to manage third-party provision of infrastructure services: obligations, exclusions, measurement definitions, and remedy clauses assemble across separated text, and enforcement depends on assembling them correctly.
- **Auditing persuasive claims** maps to the duty to oversee programmes and projects and the **Ownership and topic** accountability: board papers, supplier narratives, and escalations arrive framed; reading must separate what is established from what is asserted.
- **Standards drafting and interaction analysis** maps to the **Systems integration** duty to establish standards and procedures across the service product life cycle and ensure practitioners adhere to them — text that is ratified becomes behaviour, including its ambiguities.
- **Security document precision** maps to the **Information security** skill: threat models, control descriptions, and advisory language carry exact scopes and conditions that designs must honour.
- **Reviewing and developing others' writing** maps to the duty to lead teams and to lead others in applying **Modern development standards**: review comments and worked examples are how the team's documentation standard is actually set.
- **Test documentation judgement** maps to the **Testing** skill: authoritative advice on test planning includes reading strategies, exit criteria, and results reports for what they claim versus what they demonstrate.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — True/False/Cannot say on a contract schedule**

Passage (contract schedule): "The supplier shall provide 24/7 monitoring of the managed infrastructure. Alerts classified as critical shall be actioned within 15 minutes at all times. Alerts classified as major shall be actioned within 1 hour during core hours (07:00–19:00, Monday to Friday) and within 4 hours outside core hours. Classification of alerts is performed by the supplier's monitoring platform according to Annex F."

Statement: "A major alert raised at 21:00 on a Wednesday must be actioned by 22:00."

- A) True
- B) False
- C) Cannot say
- D) True, because monitoring is 24/7

**Correct answer: B**

**Explanation:** Classify the case, then apply its rule. The alert is major, raised at 21:00 Wednesday — outside core hours (which end at 19:00). The applicable obligation is the outside-core-hours term: actioned within 4 hours, so by 01:00 Thursday. The statement claims a 1-hour obligation, importing the core-hours term into a non-core case: contradicted, so False. Option D confuses monitoring coverage (24/7 watching) with response obligation (time-banded actioning). This tests the lead-level habit that contracts define obligations as a matrix (severity × time window × sometimes site or service tier), and enforcement means locating the exact cell before citing a breach — escalating a "missed" 1-hour response that the contract prices at 4 hours spends credibility precisely where it is needed most.

**Question 2 (easy) — What a standards clause actually requires**

Passage (from a standard awaiting ratification): "All infrastructure changes should be tested in a representative environment before production deployment. Where no representative environment exists, teams must document the gap and the compensating verification performed. Teams must review their environments' representativeness annually."

Statement: "The standard makes pre-production testing in a representative environment mandatory for all infrastructure changes."

- A) True
- B) False
- C) Cannot say
- D) True, because the annual review enforces it

**Correct answer: B**

**Explanation:** Read the modal verbs with drafting-grade precision. The first sentence says "should" — a recommendation, not an obligation; the mandatory terms ("must") attach only to documenting the gap and compensating verification when no representative environment exists, and to the annual review. So the standard does not mandate representative-environment testing; it recommends it and mandates the fallback discipline: the statement is False. Option D confuses reviewing representativeness with requiring testing. This tests the should/must discipline central to the duty to establish standards and ensure practitioners adhere to them: a "should" cannot be enforced as a "must", and a "must" drafted as "should" is a control believed to exist that does not — a strong candidate's answer identifies this as a drafting defect to fix before ratification.

**Question 3 (easy) — Cannot say on a programme board paper**

Passage (board paper): "The migration programme completed Tranche 1 on schedule. Stakeholder feedback has been positive. The programme team has identified efficiencies that will be applied to Tranche 2. The infrastructure workstream reports no open risks."

Statement: "Tranche 2 will complete on schedule."

- A) True
- B) False
- C) Cannot say
- D) True, because Tranche 1 did and efficiencies have been identified

**Correct answer: C**

**Explanation:** The paper reports Tranche 1's history, unquantified sentiment, an intention about efficiencies, and a risk-register snapshot. None of these is a claim about Tranche 2's completion: the statement is neither supported nor contradicted — Cannot say. Option D performs the inference the paper is composed to invite — past success plus positive-sounding intentions read as future assurance — exactly how optimistic board papers work on hurried readers. This tests the lead-level reading skill of noticing what a paper does not say: no Tranche 2 baseline, no dependency status, no quantified efficiency. The duty to oversee programmes means reading board papers this way: crediting exactly what is established, and turning the gaps into the meeting's questions.

**Question 4 (easy) — Judging a standard's worked example**

A standard on secrets management is being drafted and must include a worked example. Which example text best serves practitioners?

- A) "Secrets must be handled appropriately in pipelines, as described conceptually above."
- B) "Example: a deployment pipeline needs a database password. Compliant: the pipeline requests the password at run time from the approved vault using its pipeline identity; the password is never written to logs, code, or variables files. Non-compliant: the password stored in the pipeline's variables file, even marked 'secret' — because it leaves the vault's rotation and audit scope. If the vault is unavailable, the pipeline fails closed and alerts; it does not fall back to cached credentials."
- C) "Example: do not do bad things with passwords, such as putting them where they should not be."
- D) "For examples, consult your team lead."

**Correct answer: B**

**Explanation:** A worked example earns its place by resolving the cases practitioners actually face, and option B does the three jobs examples exist for: a concrete compliant path, a concrete non-compliant path with the reason, and the edge case with its required behaviour (vault down → fail closed, no cached fallback). That third element is the mark of lead-grade drafting: standards fail at their edges. Option A defers to concepts practitioners have already found insufficient. Option C is exhortation without content. Option D converts a standard into a queue for individual attention, with inconsistent oral rulings besides. This tests the **Systems integration** standards duty and **Modern development standards** leadership in one artefact: practitioners adhere to what they can unambiguously follow.

**Question 5 (moderate) — Assembling obligations across contract clauses**

Passage (contract extracts): "Clause 7.2: The supplier shall remedy any security vulnerability classified Critical under Annex D within 5 working days of notification. Clause 7.6: Where remediation requires a change to customer-side configuration, the remediation period is suspended from the date the supplier notifies the customer of the required change until the customer confirms completion. Clause 7.9: Failure to remedy within the applicable period entitles the customer to engage a third party to remediate at the supplier's reasonable cost."

The customer notified a Critical vulnerability on Monday 1st. On Wednesday 3rd, the supplier notified the customer that remediation required a customer-side firewall change; the customer confirmed completion on Tuesday 9th. The supplier completed remediation on Monday 15th. (Assume all weekdays are working days, no holidays.) Did the supplier remedy within the contractual period?

- A) No — 5 working days from Monday 1st expired on Monday 8th, and suspension is irrelevant.
- B) No — the clock ran 2 working days (Tuesday 2nd and Wednesday 3rd), was suspended until the customer's confirmation on Tuesday 9th, then resumed with 3 working days remaining, expiring Friday 12th; completion on Monday 15th missed the deadline by one working day.
- C) Yes — once suspension is applied, the deadline was Monday 15th and the supplier met it exactly.
- D) Cannot be determined without Annex D.

**Correct answer: B**

**Explanation:** Run the clock day by day with the suspension. Days 1 and 2 are Tuesday 2nd and Wednesday 3rd; the supplier's Wednesday notification suspends the clock with 3 of 5 working days remaining. Suspension runs until the customer confirms on Tuesday 9th. The clock resumes Wednesday 10th, and the three remaining working days are Wednesday 10th, Thursday 11th, and Friday 12th — the deadline. Completion on Monday 15th is one working day late — option B. Option A ignores Clause 7.6 entirely. Option C applies suspension but miscounts the resumed period. Option D hides behind Annex D, which governs only classification. This tests the lead-level computation that suspension and pause clauses are where supplier deadlines are won and lost — a strong candidate's answer works the day-by-day arithmetic on paper before citing a breach.

**Question 6 (moderate) — Detecting the pivot in a supplier's escalation response**

Passage (supplier letter): "We acknowledge the service issues experienced in recent months and take them seriously. Our engineers have worked tirelessly, often beyond contracted hours, to maintain service. It is worth noting that the customer's environment has grown 30% since the contract was signed, and that several recent incidents originated in components outside our managed scope. We remain committed to service excellence and propose a joint workshop to redefine the service baseline."

Which is the most accurate reading of the letter's substance?

- A) The supplier accepts responsibility and will fix the issues at no change to terms.
- B) The letter concedes nothing specific: it acknowledges "issues" without accepting causation, repositions the cause toward customer growth and out-of-scope components, and its concrete proposal — redefining the baseline — is an opening move toward renegotiating scope or price.
- C) The supplier is declaring the contract void.
- D) The letter is a routine courtesy with no operational significance.

**Correct answer: B**

**Explanation:** Parse what is admitted, what is asserted, and what is proposed. Admitted: "issues experienced" — experience acknowledged, causation not. Asserted: 30% growth and out-of-scope origins — both may be true and deserve verification, but their function in the letter is causal relocation. Proposed: a "joint workshop to redefine the service baseline" — the only concrete action, and redefining a baseline is how scope grows or price rises through a side door. Option B reads all three layers. Option A mistakes tone for content. Option C over-reads considerably. Option D under-reads a time-sensitive, operationally significant proposal. This tests the inbound half of managing third-party provision: supplier correspondence is often drafted to appear responsive while repositioning cost.

**Question 7 (moderate) — Argument evaluation in a governance paper**

Passage (from a paper to be endorsed or challenged at a programme board): "We recommend accepting the residual risk of single-site operation for the reporting service. The service is internal-only, and its users have tolerated planned maintenance outages of up to four hours without business impact. Dual-site provision would cost £150,000 per year. No incident has yet caused an unplanned outage exceeding four hours. Therefore the risk is acceptable and the saving should be taken."

Which is the strongest challenge to the argument?

- A) £150,000 is a small amount for a government department, so cost should not be considered.
- B) The argument prices the mitigation but never quantifies the risk: tolerance of planned four-hour outages does not establish tolerance of unplanned multi-day loss — the realistic single-site failure mode (site loss with rebuild-from-backup recovery) — and "no incident yet" is survivorship evidence, not a probability. The comparison the decision needs (likelihood × duration × business cost of site loss versus £150,000/year) is absent.
- C) All services must be dual-site as a matter of principle, regardless of cost.
- D) Internal-only services do not need risk assessment.

**Correct answer: B**

**Explanation:** Audit what the argument compares. It offers user tolerance of planned, bounded outages; an absence of severe incidents to date; and a mitigation cost. The decision requires the unplanned failure distribution — single-site's defining exposure is site loss, with recovery measured in days — its business cost, and its likelihood. The argument substitutes tolerance of the mild, planned case for tolerance of the severe, unplanned one, and offers "no incident yet" where a rate belongs. Option B names both defects and states the missing comparison — the constructive form of challenge. Option A dismisses cost. Options C and D replace analysis with absolutes. This tests the endorsement duty of overseeing programmes: a lead's name at a board attaches to the argument's quality, not just its conclusion.

**Question 8 (moderate) — Precision in a security architecture document**

Passage: "The platform enforces network segmentation between tenant environments. Traffic between tenants is denied by default. Exceptions require a documented data-sharing agreement between the tenant owners and are implemented as one-directional flows on named ports. Exception flows are reviewed quarterly; flows without a current data-sharing agreement at review are removed. Intra-tenant traffic is not restricted by the platform and is the tenant's responsibility."

Statement: "If Tenant A has a documented data-sharing agreement with Tenant B, the platform permits traffic between them in both directions on the agreed ports."

- A) True
- B) False
- C) Cannot say
- D) True, because the agreement covers both parties

**Correct answer: B**

**Explanation:** The exception mechanism is specified as "one-directional flows on named ports": an agreement enables the creation of directional exceptions, and bidirectional traffic would require two one-directional flows — nothing says an agreement automatically yields both directions. The statement claims bidirectional permission on the agreement alone: contradicted, so False. Option D imports a social inference (the agreement's symmetry between parties) into a technical specification, exactly the substitution security reviews exist to catch. This tests directionality as a deliberate control at documentary grain — a candidate's answer should identify that one-directional flow design means Tenant A pushing data to B does not entitle B to reach into A, and the review question for every exception is which direction, which ports, under which agreement, until which review.

**Question 9 (moderate) — Best summary of a lifecycle standards passage**

Passage: "Standards earn adherence through three properties. They must be findable: a standard practitioners cannot locate at the moment of decision does not exist operationally. They must be decidable: a practitioner reading the standard with their actual case in hand must be able to determine what it requires without interpretation escalating to its author. And they must be maintained: a standard contradicted by the current toolchain teaches practitioners that standards in general are optional. Publication ceremonies, mandatory-reading emails, and compliance attestations do not substitute for these properties; they measure exposure to the text, not the text's operational force."

Which summary best captures the passage?

- A) Standards require better publicity: ceremonies, emails, and attestations drive adherence.
- B) Standards gain operational force from being findable at the point of decision, decidable for real cases without author escalation, and maintained against toolchain reality — properties that exposure mechanisms cannot substitute for.
- C) Standards are generally ignored and the effort of writing them is wasted.
- D) Standards should be short.

**Correct answer: B**

**Explanation:** The passage's architecture: three named properties, each with its operational rationale, followed by an explicit anti-claim — exposure mechanisms measure contact with the text, not its force. Option B reproduces all three properties with their point-of-use framing and preserves the anti-claim. Option A asserts what the final sentence denies. Option C converts a theory of adherence into cynicism the passage does not contain. Option D invents a property. This tests the comprehension exercise directly, and a strong candidate's answer connects the content to the **Systems integration** duty to establish standards and ensure adherence — a working checklist for auditing a current estate of standards against the three properties.

**Question 10 (hard) — Interaction between a policy and a contract**

Passage: "Departmental security policy SP-8: Cryptographic keys protecting departmental data must be generated, stored, and used within hardware security modules (HSMs) under departmental control. Supplier contract clause 14.3: The supplier shall encrypt all customer data at rest using keys managed in the supplier's key management service, which holds a current certification under the applicable international standard. Contract clause 2.1: In the event of conflict between this contract and the customer's published security policies referenced in Schedule 1, the customer's policies prevail. Schedule 1 lists SP-1 through SP-9."

Statement: "For departmental data held by this supplier, encryption keys managed solely in the supplier's key management service satisfy the contractual arrangements as a whole."

- A) True — clause 14.3 expressly provides for it.
- B) False — SP-8 is in Schedule 1's range, so it prevails over clause 14.3 under clause 2.1; keys must be under departmental HSM control, and the supplier's KMS-only arrangement conflicts with the prevailing policy.
- C) Cannot say — the certification status resolves the conflict.
- D) True — certification under the international standard satisfies SP-8's intent.

**Correct answer: B**

**Explanation:** Three texts interact; establish the hierarchy first. Clause 2.1 is a precedence clause, and Schedule 1 lists SP-1 through SP-9, which includes SP-8. Test for conflict: SP-8 requires keys under departmental control; clause 14.3 places key management in the supplier's KMS. Supplier-controlled KMS is not departmental control: the texts conflict, the precedence clause activates, and SP-8 prevails — the KMS-only arrangement fails the contractual arrangements as a whole: False, option B. Option A reads clause 14.3 in isolation, ignoring the precedence structure. Option D substitutes certification (a quality dimension) for control (a who-holds-the-keys dimension). Option C makes certification a resolver the texts nowhere appoint. This tests the lead-level practice of building the document hierarchy before assessing any single clause when managing third-party provision.

**Question 11 (hard) — Evaluating an escalation that must be forwarded**

Passage (escalation from an engineer, addressed to a programme director, sent for forwarding): "The programme's decision to compress environment testing from three weeks to one is reckless and shows a complete disregard for engineering reality. My team has repeatedly warned about this. When the deployment fails, the record will show whose fault it was. I want this escalation formally noted."

The underlying technical concern is agreed with. Which response best fulfils the role?

- A) Forward it unchanged — the concern is valid and the anger is understandable.
- B) Refuse to escalate — the tone makes the concern unraisable.
- C) Rework the escalation with the engineer: keep the substantive claim, replace accusation with evidence (what three weeks of testing covers that one week cannot, with the specific risks left unexamined and their plausible cost), state the requested decision (restore the window, or formally accept the named risks), and send it under joint names — teaching, in the process, why this form is more likely to change the decision.
- D) Send a soft note asking the programme to "consider testing implications when convenient".

**Correct answer: C**

**Explanation:** Separate the concern (valid, and worth championing) from the instrument (built to assign blame, not to change a decision). The draft's failure is functional: it positions the programme director as an adversary preparing for an inquiry, and the predictable response is defensive entrenchment. Option C converts the escalation into decision-grade form: the evidence gap, the consequence estimate, and the decision requested — restoring accountability through governance rather than grievance. Doing the rework with the engineer, not to them, is the leadership half. Option A spends the concern's validity on the draft's tone. Option B protects the relationship by silencing the risk. Option D raises it in a form engineered to be ignorable. This tests whether a candidate edits anger into influence — the concern deserves to win, and form is what determines whether it can.

**Question 12 (hard) — Reading exit criteria the way a dispute would**

Passage (from a programme's test completion report): "System testing is complete. 1,847 of 1,900 planned tests were executed, a 97.2% execution rate. Of executed tests, 96.1% passed. The 53 unexecuted tests relate to the payments reconciliation module, whose test environment was unavailable throughout the test phase; these will be executed in production during the first live reconciliation cycle, under enhanced monitoring. All severity-1 defects are closed. The programme therefore certifies the exit criteria as met: 'execution of the test plan with a pass rate exceeding 95%, and no open severity-1 defects.'"

Which reading should be put to the programme?

- A) The certification is sound: 97.2% execution and 96.1% pass both exceed 95%.
- B) The certification does not withstand the criteria's own words: "execution of the test plan" is not satisfied by 97.2% when the entire unexecuted remainder is one module — the plan is unexecuted for payments reconciliation specifically, and "testing in production during the first live cycle" means the module goes live untested; the pass-rate and severity-1 criteria are met, but the certification conceals a concentrated, unmitigated gap behind aggregate percentages.
- C) The certification fails because the pass rate should be measured against planned, not executed, tests.
- D) The certification is sound because enhanced monitoring compensates for the unexecuted tests.

**Correct answer: B**

**Explanation:** Read the criteria as written, then read the aggregates for what they conceal. The criterion says "execution of the test plan" — completion, not a percentage; the passage concentrates all 53 unexecuted tests in one module: payments reconciliation is 0% executed. Aggregation is doing the concealing — 97.2% is true and materially misleading. "Executed in production during the first live reconciliation cycle" is a euphemism for going live untested on a payments module, with monitoring offered in the place of testing. Option D accepts that substitution; option B names it. Option C invents a measurement basis the criteria do not state. This tests the **Testing** skill's authoritative-advice duty: exit criteria are contracts, aggregates are advocacy, and a lead's question is always where the unexecuted is concentrated.

### Administration tips

- **Score for whether a candidate locates the exact obligation-matrix cell** before citing a contractual breach — severity, window, and any exclusion.
- **Note whether a candidate distinguishes "should" from "must"** with drafting-grade precision.
- **Watch for whether a candidate reads a persuasive passage in layers** — admitted, asserted, proposed.
- **Keep timing consistent** across candidates for this level.
- **Use the exit-criteria item (Question 12) to observe whether a candidate hunts concentration behind an aggregate percentage.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that imports the wrong matrix cell** — core-hours terms applied to out-of-hours cases, or similar.
- **Accepting "should" read as "must"**, or vice versa.
- **Crediting an answer that accepts an invited inference** an optimistic paper assembles from adjacent true sentences.
- **Missing when a candidate reads a clause in isolation**, ignoring a precedence provision or referenced policy that defeats it.
- **Rewarding an answer that treats certification, monitoring, or attestation as if it were the control, testing, or adherence it substitutes for.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement test (SJT) presents realistic workplace scenarios and asks the candidate to evaluate possible responses — most effective, most and least effective, full ranking, or independent effectiveness ratings. Scoring reflects the consensus of experienced professionals and the organisation's valued behaviours. The typical format is an online test of 15 to 25 minutes with 10 to 20 scenarios, usually generously timed, because judgement, not speed, is the construct.

At lead level, the scenarios assume technical mastery and probe leadership judgement: exercising accountability that cannot be delegated, managing suppliers whose interests diverge from the department's, developing engineers through failures as well as successes, enforcing standards authored personally against people liked, and behaving well when programme pressure, team welfare, security risk, and reputation pull in four directions. The distractors are correspondingly senior: options that are decisive but unaccountable, supportive but standardless, compliant but cowardly, or technically right and organisationally ruinous.

Employers use SJTs for lead infrastructure engineers because the role summary is composed almost entirely of judgement-laden duties: take accountability for issues that occur and be proactive in searching for potential problems; achieve excellent user outcomes; manage third-party provision; oversee programmes and projects; lead teams and departments in design, implementation, administration, and support; establish standards and ensure practitioners adhere to them; lead others in applying modern development standards. None of these has a technical answer sheet. The behaviours that score well are stable and observable: accountability owned personally and early; users protected before reputations; suppliers held to standards through evidence and process, not temper; people developed deliberately, including through hard conversations; standards applied consistently, including to oneself; and bad news delivered upward at the speed good news travels.

### How this assessment maps to the role

- **Accountability and proactive ownership** map to the **Ownership and topic** skill: taking accountability for issues that occur — including those caused by a team, standards, or past decisions — and hunting problems before they surface is the behavioural spine of the lead role.
- **Supplier and third-party judgement** maps to the role-level duty to manage third-party provision of infrastructure services: scenarios probe evidence-based challenge, contractual awareness, relationship preservation, and proportionate escalation.
- **Programme judgement** maps to the duty to oversee programmes and projects and to work with technical architects in operationalising designs: scenarios test how schedule pressure, dependency truth-telling, and go-live risk are handled.
- **Team leadership and development** maps to the duty to lead and direct infrastructure specialist teams and to lead others in applying **Modern development standards**: scenarios test delegation, mentoring, performance conversations, and credit flows.
- **Standards governance** maps to the **Systems integration** duty to establish standards and procedures and ensure practitioners adhere to them: scenarios test consistent enforcement, designed exceptions, and how a candidate responds when their own standard is the obstacle.
- **Security and user-outcome judgement** maps to the **Information security** skill and the duty to achieve excellent user outcomes: scenarios test whether engineered controls and user interests survive deadline and seniority pressure.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A candidate's own standard blocks their team's deadline**

A team is completing a migration due Friday. On Wednesday, an engineer shows that finishing on time requires deploying automation that has not passed the peer-review step mandated by the deployment standard the candidate authored and ratified. The engineer suggests: "You wrote the standard — you can waive it for us this once." What is the most effective response?

- A) Waive it — the author of a standard is best placed to judge when it can be skipped.
- B) Apply the standard to this team exactly as to any other: use its designed expedited pathway if one exists, or find reviewer capacity today; if neither closes the gap, the deadline moves, not the review — and tell the programme now.
- C) Let the deployment proceed unreviewed but review it retrospectively next week.
- D) Waive it, but tell the team to keep the waiver quiet to avoid setting a precedent.

**Correct answer: B**

**Explanation:** The scenario tests the single most-watched property of standards governance: whether the author obeys their own rule under personal cost. Option B holds the line while working the problem — expedited pathways, reviewer capacity today, and if the gap will not close, early honest notice to the programme that Friday moves. Option A states the exact inversion of the truth: authorship is a conflict of interest in waiver decisions, not a qualification. Option C is the unreviewed deployment with paperwork added later. Option D adds concealment, the one element that makes a bad precedent worse. This tests leading others in applying standards at the exact moment a candidate's own team asks for the shortcut: the answer given is the standard.

**Question 2 (easy) — A supplier's engineer reports a problem the candidate's team caused**

A third-party engineer, on site to service storage hardware, quietly reports that a team's cabling in two racks deviates from the design documents in ways that will cause cooling problems within months — adding, "I'm not trying to get anyone in trouble; I just thought you should know." What is the most effective response?

- A) Thank them genuinely, verify the observation with the team, fix what is confirmed, and feed the finding into how the cabling work was checked — treating the supplier's candour as the valuable behaviour it is.
- B) Point out that cabling is not within their contracted scope and the observation is not their concern.
- C) Thank them, then quietly fix it without involving the team, to avoid embarrassment.
- D) Ask them to document it formally through their company so there is an official record before anything is done.

**Correct answer: A**

**Explanation:** Strip the scenario to its assets: a probably-true early warning about a future cooling incident, and a supplier relationship in which an engineer felt safe telling unwelcome truth. Option A protects both — verification, fix, and the process question of how deviating cabling passed whatever checking exists, turning one caught instance into systemic prevention. Option B punishes exactly the behaviour that should be repeated. Option C fixes the copper and wastes the lesson. Option D processes the gift into a bureaucratic liability. This tests whether a candidate recognises that excellent user outcomes are built from exactly these unglamorous saves, and that field engineers choose, visit by visit, whether to volunteer information outside their ticket.

**Question 3 (easy) — Delegating a visible failure recovery**

A programme-critical environment build, led by one of the most promising senior engineers, has failed visibly: the programme board knows, and recovery will take a focused week. The engineer is competent to lead the recovery, though it could be led faster personally. The board's chair suggests "the lead engineer should take personal charge". What is the most effective response?

- A) Take personal charge as suggested — the board needs confidence and the lead is fastest.
- B) Keep the engineer leading the recovery with active, visible support: agree the recovery plan with them, review it daily, take personal accountability for the outcome to the board, and let them rebuild their credibility by delivering the fix.
- C) Keep the engineer leading but distance from the recovery in case it fails again.
- D) Replace the engineer with a different team member to give the board a fresh face.

**Correct answer: B**

**Explanation:** Distinguish accountability from activity — the distinction the chair's suggestion blurs and option B restores. Personal accountability goes to the board (a named owner who answers for the outcome), while the engineer retains the work, because the recovery is precisely where their development and credibility live. Option A is faster this week and expensive for years. Option C is delegation without accountability. Option D treats the board's comfort as the objective and personnel as scenery. This tests leading teams through failure as an allocation: accountability up, work and recovery down, support flowing continuously between.

**Question 4 (easy) — Discovering a dormant risk during unrelated work**

While reviewing firewall changes for a project, it is noticed that the estate's out-of-band management network — used for emergency access to servers when the main network fails — has its only switch located in a rack scheduled for power maintenance next month, and no analysis appears to have considered that the maintenance will sever emergency access while it runs. Nothing has failed; nobody has asked for this to be looked at. What is the most effective response?

- A) Note it for the next architecture review cycle in two months.
- B) Raise it now with the maintenance planner and the on-call function: quantify the exposure window, and ensure either the maintenance plan gains a compensating measure (temporary alternative access, rescheduling, or accepted risk with on-call briefed) before it proceeds.
- C) Do nothing — power maintenance rarely goes wrong, and the main network will almost certainly stay up.
- D) Send a general email to the team noting the observation, and leave it with them.

**Correct answer: B**

**Explanation:** This is the role summary verbatim — "be proactive in searching for potential problems" — and the design point is that the risk is conditional and dormant: the exposure only materialises if two events coincide. That coincidence is exactly what out-of-band access exists for, so scheduling its single switch dark without compensating measures silently deletes the department's safety net for the duration. Option B routes the finding to the people who can change the outcome, with the exposure quantified, and is agnostic about the remedy. Option A files a live, dated exposure into a cycle that arrives after the maintenance does. Option C prices the safety net at the probability of needing it. Option D discharges the observation without transferring ownership. This tests whether a candidate recognises the timing stakes: found now, this costs a conversation; found during the coincident failure, it is an incident report's first paragraph.

**Question 5 (moderate) — Supplier performance declining behind personable account management**

Over two quarters, a managed-network supplier's performance has drifted: minor SLA misses, slower responses, two postponed service improvements. The account manager is responsive, likeable, apologises well in meetings, and always has a plausible story for each item. Engineers grumble, but every individual miss is small enough that formal escalation feels heavy-handed. What is the most effective response?

- A) Continue as now — the relationship is good, each miss is minor, and formal steps would sour a workable partnership.
- B) Compile the pattern: aggregate the misses, response-time drift, and postponed improvements into a single evidenced trend; present it at the next service review as a performance pattern requiring a recovery plan with dates; invoke the contract's performance mechanisms if the plan is not delivered — while keeping the personal relationship courteous throughout.
- C) Escalate immediately to contract termination proceedings — the drift proves the supplier has failed.
- D) Have engineers work around the supplier's slowness by absorbing tasks into the team.

**Correct answer: B**

**Explanation:** Name the mechanism first: personable account management is functioning as a pattern-dissolver — each miss arrives with its own story, is apologised for individually, and is forgotten before the next. Option B reassembles what the charm disassembles: aggregated, dated evidence converts eight forgivable anecdotes into one unarguable trajectory. Courtesy throughout separates the relationship (worth preserving) from the performance (requiring correction). Option A mistakes the pleasantness of meetings for the health of the service. Option C spends the ultimate remedy on a correctable decline. Option D is the quiet catastrophe: absorbing supplier work masks the decline from the record and pays twice. This tests whether a candidate keeps evidence assembled even when — especially when — the account management is good enough to keep it scattered.

**Question 6 (moderate) — An engineer challenges a candidate's technical decision in front of the team**

In a team design session, a decision on the storage architecture for a major programme is presented. A mid-level engineer challenges it directly and publicly, arguing the choice handles the programme's write-burst pattern poorly and proposing an alternative. Their argument is partially right — the burst issue had been considered and mitigated in a way they have not noticed, but their alternative also has genuine merit that had been underweighted. The team is watching. What is the most effective response?

- A) Defend the decision fully and move on — leads who get publicly overruled lose authority.
- B) Concede entirely and adopt their alternative to reward the challenge.
- C) Engage the substance on the spot: credit the challenge, show the mitigation they missed, acknowledge the merit that was underweighted, and either resolve the trade-off there with the team or take a time-boxed action to evaluate the hybrid — modelling that decisions here survive scrutiny and improve under it.
- D) Close the discussion and speak to the engineer privately about the appropriate way to raise concerns.

**Correct answer: C**

**Explanation:** A lead's authority is not the decision; it is the quality of the process the team watches run — and option C runs it publicly, which is the point. Crediting the challenge prices dissent as valuable; showing the missed mitigation restores confidence; acknowledging the underweighted merit demonstrates that being right matters more than having been right. What the team learns is the durable asset: challenges here are welcome, examined on substance, and change outcomes when they deserve to. Option A teaches the opposite lesson. Option B overcorrects into standardlessness. Option D treats a substantive, professionally delivered challenge as a conduct issue. This tests being most visibly rigorous exactly when scrutiny is pointed at oneself.

**Question 7 (moderate) — Programme pressure to accept a third party's untested handover**

A programme depends on a specialist contractor completing a network build. The contractor declares the build complete and their engineers are due to roll off Friday. Acceptance testing — required by established standards — has found nothing yet but is only 40% through; completing it needs another week, during which the contractor's roll-off means any defects found will cost far more to fix. The programme director wants to accept the handover now: "Testing has found nothing, the contractor is confident, and holding their engineers costs £30,000 a week." What is the most effective response?

- A) Accept the handover — 40% testing with zero findings is a good sample, and £30,000 a week is real money.
- B) Refuse to accept until 100% of testing completes, whatever the cost — standards are standards.
- C) Reframe the decision with the real numbers and options: quantify what the remaining 60% of testing covers (typically the complex cases scheduled last), the cost of post-roll-off defect remediation versus £30,000 of retention, and offer risk-based options — e.g. one retained week prioritising the highest-risk remaining tests, or acceptance with a defect-liability holdback agreed with the contractor — and put the choice, with a recommendation, to the programme director and service owner as a formally recorded risk decision.
- D) Accept the handover but quietly continue testing and log any findings as new work for a future contract.

**Correct answer: C**

**Explanation:** Both raw positions are wrong in instructive ways. Option A's sampling logic fails because acceptance test plans are not random samples — the straightforward tests run first, so "40% complete, nothing found" says little about the integration edge cases scheduled last. Option B is the standard wielded as a wall rather than a control, avoiding the risk arithmetic that authority consists of. Option C does the actual job: making the risk decidable, designing intermediate options professionals genuinely use, and routing the decision, recorded, to those who own the money and the risk together. Option D accepts formally while disbelieving privately, converting the contractor's defects into future departmental costs. This tests turning "accept now versus test fully" into a priced, optioned, recorded decision.

**Question 8 (moderate) — A team member's flaw in work you already assured**

Reviewing an unrelated incident, a resilience configuration deployed three months ago — personally assured to the service owner as complete — is discovered to have a flaw: failover works for component failures but was never configured for whole-site failure, one of the scenarios the assurance covered. No incident has yet exposed it. The engineer who built it has since been promoted on the strength of that project. What is the most effective response?

- A) Fix the configuration quietly; the assurance was given in good faith and no incident occurred.
- B) Tell the service owner the assurance was partially wrong, fix the gap urgently, review how the verification relied on missed it, and speak with the engineer so they learn the lesson — without converting one flaw in good work into a re-litigation of their promotion.
- C) Tell the service owner, and formally revisit the engineer's promotion since it rested on flawed work.
- D) Fix the gap and update the original assurance document to match what was actually delivered.

**Correct answer: B**

**Explanation:** Order the obligations: the exposure gets fixed urgently; the assurance — a signature on "complete" — gets corrected with its recipient, because an assurance known false by its giver and left standing becomes a misrepresentation from the moment it is known; the verification process that allowed an untested scenario to be assured gets examined. This is the accountability the **Ownership and topic** skill assigns, not transferable to the engineer who made the error. The conversation with the engineer is developmental and proportionate. Option A repairs the estate and leaves the assurance falsely intact. Option C would teach the whole team that admitted flaws are career events. Option D is record falsification in the passive voice. This tests the lead pattern: fix the risk, correct the record with its audience, repair the process, develop the person — in that order.

**Question 9 (moderate) — Standards adherence versus a struggling team**

An infrastructure team in another department, which must follow lifecycle standards established personally, is visibly struggling: their recent submissions fail standards checks repeatedly, their lead privately reports they are three engineers short, and their programme is threatening to escalate "standards bureaucracy" as the cause of their delays. Authority exists over the standards but not over their staffing. What is the most effective response?

- A) Hold the line silently — their staffing is not the concern, and the standards are non-negotiable.
- B) Grant their team a standing exemption from the standards until their staffing recovers.
- C) Keep the standards intact but attack the real problem: offer targeted help (pre-submission reviews, templates, a clinic), distinguish which failures are capacity versus comprehension, and make the staffing gap visible in the right forum — countering the "bureaucracy" narrative with evidence that the standards are checkable and the constraint is people.
- D) Quietly lower the checking rigour for their submissions to reduce the friction.

**Correct answer: C**

**Explanation:** Diagnose before choosing: the failures have a stated cause (three engineers short), a threatened misattribution, and two paths of least resistance — rigidity and erosion — both of which lose. Option C separates the standard from the struggle: practical help lowers the compliance cost without lowering the bar, and doing it through one's own team gives ground truth on whether the failures are capacity or comprehension. Making the staffing gap visible in the right forum converts "your standards delay us" into "understaffing produces non-compliant work" — true and actionable by someone. Option A wins the compliance argument and loses the estate. Option B creates a two-tier estate. Option D is B with the honesty removed. This tests recognising that ensuring practitioners adhere to standards includes making adherence achievable.

**Question 10 (hard) — Security finding versus programme go-live, with a candidate's own accountability engaged**

Two weeks before a major programme go-live, a penetration test of infrastructure that was built finds that an internal administrative interface, required by a security design to be reachable only from the management network, is in fact reachable from the general staff network — a control that was specified, assured, and reported as implemented. Exploitation requires valid staff credentials plus moderate skill, and no exposure to the public internet exists. Fixing it properly requires network changes estimated at three weeks; go-live in two weeks does not itself widen the exposure. The programme board asks for a recommendation. What is the most effective response?

- A) Recommend delaying go-live until the control is properly implemented — the specified control is absent, and going live would endorse the gap.
- B) Recommend proceeding: quantify the actual risk (internal-only, credentialed, moderate-skill), note that go-live does not widen it, propose interim mitigations deployable before go-live (interface access logging and alerting, credential hardening, accelerated partial segmentation), commit to the full fix on a dated plan — and state plainly to the board that the control's absence is a failure of implementation and assurance under personal accountability, now corrected in both estate and process.
- C) Recommend proceeding and describe the finding as a routine hardening item to avoid alarming the board.
- D) Recommend proceeding, and note that the penetration testers' report overstates a theoretical issue.

**Correct answer: B**

**Explanation:** Work the risk logic before the accountability logic. The exposure is real but bounded, and the decision-relevant fact is that go-live does not widen it: the gap exists today and will exist for three weeks on any path, so delaying go-live purchases no risk reduction. Option A misreads principle for analysis. Option B does what accountable engineering advice looks like: honest quantification, mitigations that genuinely narrow the window, a dated commitment to the real fix, and the unprompted statement that the specified control was assured and was not there — the **Ownership and topic** accountability engaged before anyone asks, plus the process correction. Options C and D both proceed on the same recommendation as B while corrupting the information. This tests whether the go-live answer's integrity survives the discovery that its framing was engineered — a board can be told "proceed, with a bounded risk I created and am fixing", and the lead who says it becomes the adviser believed thereafter.

**Question 11 (hard) — Two of a candidate's teams in conflict over an operational failure**

A production incident traced to a botched handover has two teams publicly blaming each other: the build team says operations ignored the runbook; operations says the runbook was missing the critical steps and the build team refused a walkthrough when asked. Fragments of evidence support both claims. The teams' leads have stopped cooperating, work items between them are stalling, and members of each team have begun escalating grievances separately. What is the most effective response?

- A) Investigate personally, determine which team was more at fault, and announce the finding to settle the matter.
- B) Run a blameless post-incident review with both teams jointly: establish the factual timeline first, extract the systemic failures (runbook completeness standards, handover verification, the declined walkthrough), assign forward-looking fixes owned jointly, and separately make clear to both leads that the public blame exchange ends now and cross-team escalation goes through the two of them together.
- C) Restructure so the teams no longer need to hand over to each other.
- D) Let it burn out — inter-team friction after incidents is normal and self-correcting.

**Correct answer: B**

**Explanation:** Two distinct problems wear one incident: a systems failure and a behavioural failure. Option B addresses each with its proper instrument, in the right order. The blameless joint review attacks the systems problem — shared facts are the only exit from competing narratives — then systemic extraction, then jointly-owned fixes, whose joint ownership repairs the working relationship. "Blameless" is the load-bearing choice: "which team was more at fault" is precisely the wrong question, since the answer would be contested whatever it was and would teach both teams that incidents are trials. The behavioural line is drawn separately and privately with the leads. Option C spends an architecture change to avoid a conversation. Option D mistakes festering for healing. This tests whether a candidate fixes systems jointly and blamelessly while correcting behaviour privately and unambiguously — never mixing the two.

**Question 12 (hard) — An inherited commitment believed to be undeliverable**

Moving into the lead role, a programme commitment made by the predecessor is inherited: the teams will deliver a data-centre network refresh by March, a date already announced to the departmental board. Within three weeks, the resource arithmetic and dependency analysis conclude that March is not credible — September is realistic; a heroic-assumptions version lands in June. The head of service, who co-announced the date, says: "The board announcement stands. Find a way — that's what leads do." What is the most effective response?

- A) Accept the challenge and drive the teams toward March — inherited commitments bind, and leads deliver.
- B) Present the head of service with the full analysis: the resource and dependency arithmetic behind September, what the June version assumes and what it sacrifices, and the options (rescope, resource, re-date, or accept a defined slip risk); recommend correcting the board's expectation now with a credible revised plan, and make clear that while presentation is theirs to choose, progress will not be reported against a date the analysis shows to be unachievable — reporting will track the real trajectory.
- C) Publicly commit to March while privately planning to September, managing the gap month by month as it emerges.
- D) Escalate directly to the departmental board with the analysis, bypassing the head of service before they can entrench further.

**Correct answer: B**

**Explanation:** The commitment's origin is analytically irrelevant: dates bind to evidence, not to their announcers. Option B does every part of the lead's duty in order: the analysis lands with the head of service first, the options are genuine, and the final clause is the professional line that makes the rest credible — presentation is legitimately the head of service's craft, but reporting will track reality. Option A converts arithmetic into loyalty theatre. Option C is the same collision with deception added. Option D detonates the relationship to deliver information one conversation could have delivered properly. This tests taking accountability for issues including inherited ones: the predecessor set the date, but from the moment the analysis is complete, the knowledge belongs to the current lead — and knowledge owned silently becomes complicity on a schedule.

### Administration tips

- **Score for whether a candidate applies their own standard to their own team** under deadline pressure, rather than self-exempting.
- **Watch for whether a candidate's accountability response, when their own assurance proved wrong, corrects the record with its recipient** rather than quietly repairing only the estate.
- **Note whether a candidate separates a systems fix from a behavioural correction** in a team-conflict item, rather than adjudicating fault.
- **Because these scenarios reward quantified, optioned recommendations**, check whether a candidate routes a risk decision to its rightful owner rather than deciding it unilaterally or abdicating it.
- **Use the inherited-commitment item (Question 12) to observe whether a candidate reports the real trajectory** rather than deferring to an announced date they know to be wrong.

### Common pitfalls to watch for when scoring

- **Rewarding a self-exemption** — the author-waiver, the retrospective review, the confidential exception — even when concealment is absent.
- **Missing when a candidate's response punishes a messenger** — a supplier engineer, a challenging team member, a struggling peer team — for surfacing unwelcome truth.
- **Accepting an answer that seizes a risk decision belonging to a board or service owner**, or one that abdicates a recommendation entirely.
- **Crediting an answer that manages perception rather than information** — a minimised finding, an impeached tester, a softened assurance.
- **Rewarding an answer that lets relationship quality substitute for performance data**, rather than assembling evidence regardless of how meetings feel.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a lead infrastructure engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement, calibrated to lead-level texture throughout.

The cognitive section tests reading trajectories instead of snapshots, auditing a supplier's root-cause narrative against independent telemetry, finding the threat no control touches, reconciling two selectively true accounts of the same delay, and repairing a corrupted baseline from ground truth rather than convenient records. The numeric section tests computing service credits through exclusions and caps in contractual order, extrapolating programme forecasts from achieved rates, pricing options under both a forecast and its failure, composing availability through serial and parallel structures, and exposing the concentrated work hiding behind a flattering percentage. The verbal section tests locating the exact cell of an obligation matrix, parsing "should" from "must" with drafting-grade care, reading a supplier's letter in three layers, building a document hierarchy before judging any clause, and turning an angry escalation into a decision instrument. The situational judgement section tests the judgement that defines the level: applying a standard to one's own team, taking accountability for assurances that proved wrong, holding suppliers to evidence while preserving relationships, developing engineers through visible failures, and refusing to report green against arithmetic known to be red.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score, and at this level connects naturally to real development conversations about standards governance, supplier management, and delegation.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can hold the integrity of the interface between evidence and action — for suppliers, programmes, standards, and people — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
