# IT Service Manager - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for IT service manager, within the UK Government Digital and Data profession. The material is job-specific: it uses the artefacts an IT service manager genuinely handles — service level agreements (SLAs) and operational level agreements (OLAs), availability and performance reports, service catalogues, change schedules, supplier performance data, and continual service improvement plans — and the decisions genuinely made, such as balancing the demands of a multi-sourced support team across multiple locations, deciding when a change needs stronger governance, and keeping service and support functions responsive to customer needs.

An IT service manager sits at the point where operational detail meets management judgement. They define the SLAs and OLAs every business function relies on, which demands numerical precision and careful drafting. They manage a fully functioning support operation focused on availability and performance, which demands pattern recognition, prioritisation, and calm reasoning when several things go wrong at once. They maintain the service catalogue and knowledge library, ensure reporting standards are met, govern technical change, and drive a programme of continual service improvement — all of which depend on reading data accurately, reading documents precisely, and choosing well under pressure. The four assessment types here — cognitive, numeric reasoning, verbal reasoning, and situational judgement — map directly onto those demands.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental processes this role demands, using practical scenarios rather than abstract puzzles. Instead of asking a candidate to complete number sequences for their own sake, it presents the materials of service management — SLA matrices, change schedules, incident trend data, supplier obligations, catalogue entries, and process documentation — and asks them to reason about them quickly and accurately.

The typical format is an online, timed test lasting 15 to 30 minutes, containing 15 to 30 questions across pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a comparable level; many platforms adapt question difficulty as the candidate progresses, and employers typically receive a profile covering both speed and accuracy.

Why does this kind of test suit IT service managers? Because service management is applied structured thinking. When availability dips, the manager must reason from symptoms through dependencies to likely causes. When a change is proposed, they must deduce its consequences across services, suppliers, and locations. When reports arrive from three suppliers in three formats, they must spot the inconsistencies before those mislead a stakeholder. A well-designed cognitive assessment reproduces those demands in miniature.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Service focus** skill — seeing the bigger picture by taking groups of services and investigating how to get the best of underlying services.
- **Logical deduction** maps to the **Service management framework knowledge** skill — applying framework logic correctly to a novel situation is deduction — and to the duty to ensure that all technical change is communicated and managed with appropriate governance: change rules are conditional logic, and governance failures are usually deduction failures.
- **Error checking** maps to the **Asset and configuration management** skill and the duty to keep the service catalogue and knowledge library accurate: an unnoticed inconsistency in either becomes everyone's misinformation.
- **Prioritisation** maps to the duty to manage a multi-sourced support team focused on service availability and performance, and to the **Ownership and topic** skill.
- **Applied problem solving** maps to the **Business analysis (IT operations)** skill and the duty to ensure a programme of continual service improvement is put in place: improvement begins with correctly diagnosing what is actually wrong.
- Reasoning about goals and trade-offs maps to the **Strategic thinking** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition across service reports**

Monday's morning checks show the following alerts: 08:02 email service — slow response; 08:04 document management — slow response; 08:05 HR portal — slow response; 08:07 print service — normal; 08:09 case management — slow response. Email, document management, HR portal, and case management are all hosted on the shared application platform, while the print service runs on separate local servers. What is the most reasonable initial hypothesis?

- A) Four independent application faults have occurred within seven minutes
- B) The shared application platform is degraded, affecting the services hosted on it
- C) The print service is causing the other services to slow down
- D) The monitoring system is generating false alerts

**Correct answer: B**

**Explanation:** Look at what the affected services share and what the unaffected service does not. All four slow services sit on the shared application platform; the one normal service sits elsewhere. Four independent faults within seven minutes (option A) is possible but far less probable than one shared cause. Option C reverses the evidence: the healthy service is unlikely to be attacking the unhealthy ones. Option D would require the monitoring to be wrong four times and right once, aligned to platform hosting. This tests the service focus skill in miniature: taking a group of services and reasoning about the underlying platform beneath them — diagnosing at the platform level rather than chasing four application teams saves time and lets one accurate communication replace four speculative ones.

**Question 2 (easy) — Logical deduction from a change rule**

A change policy states: "A normal change may be implemented only after approval at the Change Advisory Board (CAB), unless it is a pre-approved standard change listed in the change catalogue." A team lead reports: "We implemented the firewall rule update yesterday. It was not taken to CAB." Based only on the policy and this statement, which conclusion must be true?

- A) The team breached the change policy
- B) The firewall rule update is a pre-approved standard change
- C) Either the update is a listed standard change, or the policy was breached
- D) The update caused no incidents, so no harm was done

**Correct answer: C**

**Explanation:** The policy is a conditional rule with exactly one exception. The facts given establish that the change skipped CAB, but not whether it appears in the change catalogue as a standard change. If it does, the implementation was compliant; if it does not, the policy was breached. Neither A nor B is guaranteed on its own, while D introduces facts not given and confuses outcome with compliance. Only the disjunction in C must be true in every scenario consistent with the facts. This tests deductive discipline in a governance context: before challenging a team for bypassing change management, a strong candidate checks the standard change catalogue — which protects both the process and the working relationship.

**Question 3 (easy) — Error checking a service catalogue entry**

A service catalogue standard requires every entry to state: service name, service owner, support hours, and SLA reference in the format SLA-nnn (three digits). Reviewing this draft entry:

- Service name: Secure File Transfer
- Service owner: Infrastructure Services
- Support hours: 08:00–18:00 working days
- SLA reference: SLA-47

What is wrong with the entry?

- A) The support hours are in the wrong format
- B) The SLA reference does not match the required format
- C) The service owner should be a named individual
- D) Nothing; the entry meets the standard

**Correct answer: B**

**Explanation:** Check each field against the stated standard, one at a time. Service owner is present — the standard as given says "service owner" without requiring a named individual, so option C imports a requirement the standard does not state. Support hours are present and clear. The SLA reference requires SLA-nnn with three digits, and "SLA-47" has only two — so it fails the format check. This tests methodical field-by-field verification, and it maps to the duty to ensure the service catalogue and wider knowledge library are maintained: catalogue errors propagate silently, because every analyst, supplier, and automated tool that reads the entry inherits the mistake.

**Question 4 (easy) — Prioritisation across the service day**

At 08:45 four items await attention:

1. A P2 incident on the payments interface, 90 minutes from SLA breach, with the resolver group asking for approval of an emergency workaround.
2. A supplier's monthly service report, due for review comments by Friday (it is Tuesday).
3. A meeting invitation for 09:00 from a business stakeholder titled "catalogue questions — no urgency, whenever suits".
4. A reminder that the weekly availability report must be distributed by 17:00 today; it takes about an hour to prepare.

Which sequencing is most defensible?

- A) 3, 1, 4, 2 — respond to stakeholders in invitation order
- B) 1, 4, 3, 2 — breach-risk decision first, then today's deadline, then schedule the meeting, then the Friday review
- C) 2, 1, 3, 4 — clear the oldest item first
- D) 4, 1, 2, 3 — reports before incidents, since reporting is a standing duty

**Correct answer: B**

**Explanation:** Item 1 combines urgency (90 minutes to breach) with impact (payments) and a decision only the manager can make — the resolver group is blocked on approval, so every minute of delay is a minute of idleness against the SLA clock. Item 4 is today's hard deadline with a known one-hour cost. Item 3 explicitly states no urgency — the professional response is a brief reply proposing a time. Item 2 has three days of headroom. Option A confuses politeness with priority; option C uses age rather than impact; option D inverts the incident/report relationship. This tests impact-weighted urgency plus a bias toward decisions that unblock other people.

**Question 5 (moderate) — Deduction across SLA and OLA dependencies**

A customer-facing SLA promises resolution of P2 incidents within 8 working hours. Internally, the OLA with the applications team commits them to respond within 2 working hours and resolve their portion within 4; the OLA with the hosting supplier commits investigation within 3 working hours of handover. A P2 incident requires the applications team first, then a handover to the hosting supplier. Assuming every party performs exactly at their OLA limits and handover is instant, what is the earliest point at which the SLA can be certified at risk?

- A) The SLA cannot be met even if everyone hits their OLA targets
- B) The SLA can be met with 1 working hour to spare if everyone hits their targets
- C) The SLA and OLA arithmetic exactly matches: 8 hours of commitments against an 8-hour SLA
- D) The OLAs are irrelevant to the SLA calculation

**Correct answer: B**

**Explanation:** Chain the worst-case commitments in sequence. The applications team's binding limit for their end-to-end contribution is 4 hours (resolution within 4 is their obligation). The hosting supplier then investigates within 3 hours of handover. Worst case: 4 + 3 = 7 working hours against an 8-hour SLA, leaving 1 hour of headroom — option B. Doubling response and resolution (2 + 4 + 3 = 9) gives option A wrongly; misreading the supplier commitment might reach C. Option D is wrong: OLAs exist precisely to underpin SLAs. This tests the arithmetic behind defining SLAs and OLAs across business functions, and a strong candidate's answer notes that one hour of headroom across two handovers is thin.

**Question 6 (moderate) — Pattern recognition in change outcomes**

Reviewing last quarter's change records: changes implemented on Tuesday–Thursday have a 96% success rate; changes implemented on Friday have an 82% success rate; failed Friday changes took an average of 9 hours to remediate, compared with 3 hours for mid-week failures. Weekend on-call cover is a single engineer. Which conclusion does the data best support?

- A) Friday changes fail more often and cost more when they fail, so Friday implementation warrants tighter control or rescheduling
- B) Engineers perform worse on Fridays and need retraining
- C) The weekend on-call engineer is causing change failures
- D) The 96% mid-week success rate proves the change process needs no improvement

**Correct answer: A**

**Explanation:** Stay within what the data shows. Friday changes fail at roughly triple the mid-week rate, and Friday failures take three times longer to remediate — plausibly because thin weekend cover slows recovery, though the data does not prove the mechanism. Option A draws only the supported conclusion and converts it into a governance action. Option B leaps from outcome data to a cause the data cannot distinguish from other explanations. Option C confuses remediation conditions with failure causes. Option D misuses a good number: 4% of mid-week changes still fail. This tests data-led change governance: find the pattern, act on the pattern, avoid blaming beyond the evidence.

**Question 7 (moderate) — Error checking a supplier report**

A supplier's monthly report states: "Total incidents assigned to us: 120. Resolved within OLA: 102. OLA achievement: 90%." It later states: "Our OLA achievement has improved for the third consecutive month, from 82% (May) and 85% (June) to this month's figure." Which statement about the report is correct?

- A) The report is internally consistent
- B) The claimed 90% achievement is inconsistent with the resolved/assigned figures, which give 85%
- C) The trend claim is inconsistent because 82% to 85% is not an improvement
- D) The report is wrong because OLA achievement cannot be measured monthly

**Correct answer: B**

**Explanation:** Verify the arithmetic before accepting the narrative. 102 ÷ 120 = 85% — not the 90% claimed. 82% → 85% is genuinely an improvement, so option C is false; and if this month's true figure is 85% the "third consecutive improvement" claim also collapses (85% equals June, not exceeding it), but the primary inconsistency the options offer is the headline arithmetic. Option D invents a measurement rule that does not exist. This tests whether a candidate checks a supplier's own arithmetic before republishing it — a two-second division is the highest-value error check in supplier management.

**Question 8 (moderate) — Prioritising a continual improvement backlog**

A continual service improvement register holds four candidate initiatives, each requiring roughly equal effort:

1. Automate password resets — would remove ~25% of all ticket volume; no stakeholder resistance.
2. Redesign the major incident communications template — major incidents occur ~4 times a year; the current template caused executive complaints during the last one.
3. Migrate the knowledge library to a new platform — benefits unclear; the current platform is disliked but functional.
4. Introduce supplier performance dashboards — would save ~2 hours of manual report assembly per month.

Using benefit relative to effort as the criterion, which initiative should rank first?

- A) Initiative 2, because executive complaints are the most dangerous problem
- B) Initiative 1, because it removes a large, continuous volume of work for the same effort as the alternatives
- C) Initiative 3, because platform modernisation is strategic
- D) Initiative 4, because it directly benefits the service manager

**Correct answer: B**

**Explanation:** With effort held equal, rank by benefit — and quantify where possible. Initiative 1 removes about a quarter of all ticket volume, continuously, freeing capacity that improves every SLA simultaneously. Initiative 2 addresses a real reputational issue but one that materialises about four times a year. Initiative 3 has explicitly unclear benefits — "disliked but functional" is a preference, not a case. Initiative 4 saves two hours a month for one person. Option A over-weights recency and seniority of complaint; C mistakes "strategic-sounding" for strategic; D optimises for the manager. This maps to working with stakeholders to identify objectives and potential benefits, applied to the duty to put continual service improvement in place: improvement programmes earn credibility by delivering the largest verifiable benefit first.

**Question 9 (moderate) — Deduction from availability architecture**

An online licensing service depends on: a web front end (availability 99.5%), an application server (99.5%), and a database cluster (99.9%). The service works only when all three components work, and component failures are independent. Which statement must be true?

- A) The service's availability equals the best component's, 99.9%
- B) The service's availability equals the worst component's, 99.5%
- C) The service's availability is lower than any single component's availability
- D) The service's availability is the average of the three figures

**Correct answer: C**

**Explanation:** When a service requires every component in a chain, availabilities multiply: 0.995 × 0.995 × 0.999 ≈ 0.989, about 98.9% — lower than even the weakest single component. Options A and B assume the chain is as strong as one of its links; D applies a formula with no basis. This tests reasoning about direction (serial dependencies always degrade availability) at the heart of managing an operation "focused on service availability and performance", and a strong candidate's answer notes this explains why an SLA promising 99.5% cannot safely sit on three components each promising 99.5%.

**Question 10 (hard) — Multi-constraint change scheduling**

Three changes must be scheduled in one week, Monday to Friday, at most one change per night. Constraints: (i) the database upgrade (D) must precede the application patch (A), because A depends on the new database version; (ii) the network change (N) cannot occur on the same night as, or the night immediately after, D, because both need the same supplier engineer and the supplier requires a rest gap after database work; (iii) the application team is unavailable Friday; (iv) business stakeholders have vetoed Monday for the network change. If D is scheduled for Monday, on which nights must A and N fall?

- A) A on Tuesday, N on Wednesday
- B) A on Thursday, N on Wednesday
- C) N on Tuesday, A on Wednesday
- D) A on Wednesday, N on Tuesday

**Correct answer: B**

**Explanation:** Fix D on Monday and apply each constraint. Constraint (ii) blocks N from Monday and Tuesday; constraint (iv) also blocks Monday for N. So N ∈ {Wednesday, Thursday}. Constraint (i) puts A after D, and constraint (iii) blocks Friday, so A ∈ {Tuesday, Wednesday, Thursday}. With one change per night and N taking Wednesday (the earliest available slot), A must take a different night; since the new database version needs to be a verified upgrade before the dependent patch runs, and Wednesday is taken by N, A lands on Thursday. This tests multi-constraint scheduling discipline: enumerate what each constraint forbids, place the most-constrained item first, and give dependencies breathing room — the same discipline that keeps a real change calendar from ambushing availability figures.

**Question 11 (hard) — Root cause reasoning across a multi-sourced operation**

Complaints about slow ticket resolution have risen for six weeks. Facts gathered: (i) desk answer times are unchanged; (ii) first-line fix rate is unchanged; (iii) average time-in-queue at the second-line applications supplier has doubled; (iv) that supplier's staffing is unchanged, but their ticket volume from the organisation has risen 60%; (v) six weeks ago, a new CRM system went live for 400 staff. What is the best-supported explanation?

- A) The applications supplier has become inefficient and should be penalised under the contract
- B) The CRM go-live has driven a sustained rise in second-line demand that has outstripped unchanged supplier capacity, lengthening their queue
- C) The service desk is misrouting tickets to the wrong supplier
- D) Users have become more demanding since the CRM go-live

**Correct answer: B**

**Explanation:** Assemble the facts into a causal chain and test each explanation against all of them. Facts (i) and (ii) clear the first line: the delay arises downstream. Fact (iii) locates it in the second-line queue. Fact (iv) explains why: volume up 60% against flat staffing — queues grow when arrival rate outpaces service capacity, no inefficiency required. Fact (v) supplies the source of the demand, timed exactly to the six-week window. Option B is the only explanation consistent with every fact. Option A blames the supplier for arithmetic. Option C is neither supported nor refuted by anything given. Option D explains no measured fact. This tests root cause reasoning across an organisational boundary, and a strong candidate's answer notes that the OLA with this supplier may need renegotiating as circumstances change.

**Question 12 (hard) — Problem solving under conflicting evidence**

Two escalations reach a manager simultaneously about the case management service. The business team says: "The service was down all Tuesday morning — caseworkers lost hours." Monitoring shows 100% availability on Tuesday. The supplier's report shows one 40-minute authentication degradation on Tuesday from 09:20. Which reading best reconciles all three sources?

- A) The business team is exaggerating and should be told the service was up
- B) The monitoring is broken and the service was fully down
- C) The monitoring measures server-side availability, which stayed up, while the authentication degradation blocked real users from logging in — so all three accounts can be simultaneously honest, and the availability measure has a blind spot
- D) The supplier caused the outage and concealed it

**Correct answer: C**

**Explanation:** When three credible sources disagree, the best hypothesis is usually one under which nobody is lying — they are measuring different things. Server-side monitoring can report 100% while an authentication fault upstream locks users out. The supplier's 40-minute degradation fits the business experience, and it exposes the real finding: the availability measure does not measure what users experience. Option A weaponises a blind-spot metric against the organisation's own stakeholders. Option B overcorrects: monitoring was not broken, just partial. Option D asserts concealment when the supplier's own report disclosed the fault. This tests reconciling conflicting evidence by finding the hypothesis that makes every source honest, and a strong candidate's answer names the improvement action: user-journey monitoring, and reporting availability from the user's perspective.

### Administration tips

- **Score for whether a candidate diagnoses at the right level** — a shared platform rather than four independent faults, a demand problem rather than a supplier failure.
- **Watch for whether a candidate verifies a supplier's or report's own arithmetic** before accepting its narrative.
- **Note whether a candidate reasons about direction (serial dependencies degrade availability) even without precise computation.**
- **Note whether a candidate reconciles conflicting evidence by finding a hypothesis under which every source is honest**, rather than picking a side.
- **Use the multi-constraint scheduling item (Question 10) to observe whether a candidate enumerates constraints systematically** rather than guessing.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that blames an actor when the system explains the data** — rising queues with flat staffing is arithmetic, not laziness.
- **Crediting an answer that accepts a headline figure without checking the base numbers.**
- **Missing when a candidate imports a rule the question never stated.**
- **Accepting a conclusion stated as certain where the evidence only supports a disjunction.**
- **Rewarding a multi-constraint answer reached by intuition rather than systematic elimination.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the numbers this role genuinely produces and consumes: SLA and OLA achievement percentages, availability figures, ticket volumes and trends, supplier performance data, change success rates, cost-per-ticket calculations, and the quantified benefits cases behind continual service improvement initiatives. The mathematics involved is deliberately not advanced — percentages, ratios, weighted averages, rates, and percentage change — because the real skill being measured is applied: extracting the right figures from a table, performing the right operation on them, and interpreting the result in context.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions, each built around a small table, chart, or data-rich scenario. Calculators are usually permitted, and scoring compares both accuracy and pace against a norm group.

Numeracy matters for this role because the role summary is numerically load-bearing at almost every point. SLAs and OLAs are numbers with contractual and operational consequences, and mis-drafted arithmetic in an OLA chain becomes an unmeetable SLA. Managing a multi-sourced operation means comparing supplier figures on a like-for-like basis and catching the flattering-but-wrong summary. Continual service improvement runs on quantified cases: an improvement backlog ranked without numbers is a wish list.

### How this assessment maps to the role

- **Percentages and achievement rates** map directly to the duty of **defining service level agreements (SLAs) and operational level agreements (OLAs) across all relevant business functions**, and to the duty to ensure adequate reporting and service standards are met.
- **Reading and combining tables** maps to the **IT service reporting** skill. Multi-sourced operations mean multi-source tables, which must be merged with volume-weighting rather than naive averaging.
- **Availability arithmetic** maps to the duty to manage the operation **focused on service availability and performance**.
- **Trend and rate analysis** maps to the **Business analysis (IT operations)** skill and the **User focus** skill.
- **Cost and benefit quantification** maps to the duty to ensure **a programme of continual service improvement** is put in place, and to the **Strategic thinking** skill.
- **Verifying supplier figures** maps to the **Asset and configuration management** skill and the **Stakeholder relationship management (IT operations)** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — SLA achievement percentage**

This month a desk closed 1,250 incidents, of which 1,175 were resolved within SLA. What was the SLA achievement rate?

- A) 92%
- B) 94%
- C) 95%
- D) 96%

**Correct answer: B**

**Explanation:** Achievement = (within SLA ÷ total closed) × 100. 1,175 ÷ 1,250 = 0.94, so 94%. Verification from the complement: breaches = 1,250 − 1,175 = 75; 75 ÷ 1,250 = 6%; 100% − 6% = 94% ✓. This tests basic achievement-rate calculation, and a strong candidate's answer notes the framing this figure creates against a 95% target: a one-point miss, about 12–13 tickets' worth, which frames the improvement conversation.

**Question 2 (easy) — Availability from downtime**

A licensing portal is expected to be available 24 hours a day for a 30-day month (720 hours). This month it suffered 3.6 hours of unplanned downtime. What availability percentage did it achieve?

- A) 99.0%
- B) 99.3%
- C) 99.5%
- D) 99.7%

**Correct answer: C**

**Explanation:** Availability = (total hours − downtime) ÷ total hours × 100. Uptime = 720 − 3.6 = 716.4; 716.4 ÷ 720 = 0.995 = 99.5%. A useful shortcut runs through the downtime side: 3.6 ÷ 720 = 0.5%, so availability = 100% − 0.5% = 99.5% ✓. This tests availability arithmetic, and a strong candidate's answer volunteers the useful equivalence: at 720 hours a month, each 0.1% of availability equals 43.2 minutes, so a 99.9% target permits about 43 minutes of monthly downtime while 99.5% permits three and a half hours.

**Question 3 (easy) — Percentage change in demand**

Ticket volume rose from 4,800 in the first quarter to 5,520 in the second quarter. What was the percentage increase?

- A) 12%
- B) 13%
- C) 15%
- D) 17%

**Correct answer: C**

**Explanation:** Percentage change = (difference ÷ original) × 100. Difference = 720; 720 ÷ 4,800 = 0.15 = 15%. The classic error divides by the later figure (720 ÷ 5,520 ≈ 13%, option B). This tests anchoring on the starting value, and a strong candidate's answer notes the operational significance of a 15% quarterly demand rise — a signal for staffing and OLA capacity conversations.

**Question 4 (easy) — Reading a supplier comparison table**

| Supplier | Tickets assigned | Resolved within OLA |
|---|---|---|
| Alpha Networks | 300 | 279 |
| Beta Applications | 500 | 440 |
| Gamma Hosting | 200 | 190 |

Which supplier achieved the highest OLA percentage?

- A) Alpha Networks
- B) Beta Applications
- C) Gamma Hosting
- D) They are all equal

**Correct answer: C**

**Explanation:** Alpha: 279 ÷ 300 = 93%. Beta: 440 ÷ 500 = 88%. Gamma: 190 ÷ 200 = 95%. Gamma leads on percentage despite handling the fewest tickets, and Beta trails despite resolving the most tickets in absolute terms. This tests reading a table both ways — rate and volume — and a strong candidate's answer notes that Beta's 88% across 500 tickets represents 60 breached tickets, the largest absolute pool of user pain, so Beta is where improvement effort belongs even though Gamma "wins" on the rate alone.

**Question 5 (moderate) — Weighted overall performance**

Using the table from Question 4, what was the overall percentage of tickets resolved within OLA across all three suppliers?

- A) 92.0%
- B) 90.9%
- C) 89.5%
- D) 93.3%

**Correct answer: B**

**Explanation:** Combine totals, not percentages. Total resolved = 279 + 440 + 190 = 909; total assigned = 300 + 500 + 200 = 1,000; 909 ÷ 1,000 = 90.9%. The tempting error averages the three supplier percentages — (93 + 88 + 95) ÷ 3 = 92% (option A) — wrong because it gives Gamma the same weight as Beta, which handled two and a half times the volume. This tests the rule for every combined figure in service reporting: return to the raw counts, sum, then divide.

**Question 6 (moderate) — Allowable downtime from an availability target**

Drafting an SLA for a service required 24/7. The business wants 99.8% monthly availability. In a 30-day month (43,200 minutes), what is the maximum unplanned downtime the target permits?

- A) About 43 minutes
- B) About 86 minutes
- C) About 130 minutes
- D) About 173 minutes

**Correct answer: B**

**Explanation:** Permitted downtime = total minutes × (100% − target). 100% − 99.8% = 0.2%; 43,200 × 0.002 = 86.4 minutes. Option A corresponds to 99.9%, option D to 99.6% — anchoring on the wrong "nines" is the common slip. This tests converting a target into its downtime allowance explicitly, and a strong candidate's answer notes that before committing to 99.8%, the underlying components, OLAs, and change windows must realistically keep total monthly disruption under 86 minutes.

**Question 7 (moderate) — Cost per ticket across channels**

An operation's monthly costs are: staffing £48,000, tooling £6,000, telephony £2,000. The desk handled 8,000 tickets: 5,000 by phone and 3,000 by self-service portal. Treating all costs as shared across all tickets, what was the average cost per ticket?

- A) £6.00
- B) £7.00
- C) £8.00
- D) £9.60

**Correct answer: B**

**Explanation:** Total cost = 48,000 + 6,000 + 2,000 = £56,000; cost per ticket = 56,000 ÷ 8,000 = £7.00. This tests basic per-unit costing, and a strong candidate's answer notes what the channel split hints at for later analysis: if a fuller costing showed phone tickets costing multiples of portal tickets, the benefits case for shifting demand to self-service writes itself.

**Question 8 (moderate) — Change success rate with categories**

Last quarter, 250 changes were implemented: 150 standard changes with a 98% success rate, 80 normal changes with a 90% success rate, and 20 emergency changes with an 80% success rate. How many changes failed in total?

- A) 16
- B) 15
- C) 21
- D) 27

**Correct answer: B**

**Explanation:** Standard failures = 150 × 2% = 3. Normal failures = 80 × 10% = 8. Emergency failures = 20 × 20% = 4. Total = 15. Cross-check via successes: 147 + 72 + 16 = 235; 250 − 235 = 15 ✓. This tests category-by-category computation, and a strong candidate's answer draws the governance conclusion: emergency changes fail at roughly ten times the standard-change rate, an argument for tightening the criteria by which changes qualify as emergencies.

**Question 9 (moderate) — Interpreting a trend table for a report**

Monthly SLA achievement and ticket volume:

| Month | Volume | SLA achievement |
|---|---|---|
| April | 4,000 | 96% |
| May | 4,400 | 95% |
| June | 4,900 | 93% |
| July | 5,500 | 90% |

Which statement most accurately characterises the data?

- A) Performance is falling for no identifiable reason
- B) As volume has risen each month (about 37% overall), achievement has fallen steadily (6 points), consistent with demand outgrowing capacity
- C) The desk's staff have become less capable since April
- D) July's figure is an anomaly that can be ignored

**Correct answer: B**

**Explanation:** Volume: 4,000 → 5,500 is a 37.5% rise. Achievement: 96% → 90% is a 6-point fall, declining every month in step with rising volume. "Consistent with demand outgrowing capacity" names the pattern without overclaiming causation. Option A ignores the volume column; option C leaps to an unsupported capability explanation; option D discards the clearest data point in the series. This tests characterising a trend precisely enough to trigger the right conversation without overstating what the data proves.

**Question 10 (hard) — Benefits case for an improvement initiative**

Password-related tickets run at 400 per month, each costing an average of £7 to handle. A self-service reset tool costs £12,000 to implement plus £500 per month to run, and is expected to deflect 75% of password tickets. Ignoring other factors, in how many months after go-live does the tool break even?

- A) About 4 months
- B) About 5 months
- C) About 7 months
- D) About 10 months

**Correct answer: C**

**Explanation:** Tickets deflected = 400 × 75% = 300. Gross monthly saving = 300 × £7 = £2,100. Net monthly saving = £2,100 − £500 = £1,600. Break-even = £12,000 ÷ £1,600 = 7.5 months. Option A and B forget or misapply the running cost. This tests the standard shape of a continual service improvement benefits case — deflected volume, gross saving, net saving after running costs, then payback — and a strong candidate's answer notes what "ignoring other factors" concedes: real cases add softer benefits that strengthen but should never replace the core arithmetic.

**Question 11 (hard) — Reconciling two measurement bases**

A supplier reports 97% OLA achievement for October. An organisation's own tooling shows 89% of the same tickets resolved within target. Investigating, the supplier excludes tickets that were "on hold awaiting customer" from their calculation, while the tooling includes total elapsed time. Of 300 tickets, the supplier excluded 45; of those excluded, 36 breached on total elapsed time. Approximately how many tickets does each side count as within target?

- A) Supplier: 247 of 255; tooling: 267 of 300
- B) Supplier: 247 of 255; tooling: 267 of 300 — and the two figures are actually consistent
- C) Supplier: 247 of 255 counted tickets within target; tooling: about 267 of 300 within target — both arithmetically correct from different bases
- D) One of the two systems must be miscounting

**Correct answer: C**

**Explanation:** Supplier: 300 − 45 = 255 counted tickets; 97% of 255 ≈ 247 within target. Tooling: 89% of 300 = 267 within target. Neither side is miscounting — they answer different questions: "how did the supplier perform on time within their control?" versus "how long did users actually wait?" Options A and B state the same arithmetic, but B's "actually consistent" glosses over the fact the figures answer different questions and should not be presented interchangeably; C's precise framing is correct. Option D assumes disagreement implies error. This tests recognising that measurement basis — clock-stop rules, exclusions, rounding — must be agreed in the OLA itself, because every unagreed definition eventually becomes a dispute.

**Question 12 (hard) — Capacity arithmetic for a service transition**

A new service goes live in eight weeks and is forecast to add 600 tickets per month. Current operation: 10 analysts, each handling an average of 320 tickets per month, with current demand of 3,000 tickets per month. The target is to keep average utilisation at or below 90% of handling capacity. How many additional analysts (whole people) must be recruited to stay within the utilisation target after go-live?

- A) 1
- B) 2
- C) 3
- D) 0 — current capacity is sufficient

**Correct answer: C**

**Explanation:** Post-go-live demand = 3,000 + 600 = 3,600. Required capacity so demand is at most 90% of it: capacity ≥ 3,600 ÷ 0.90 = 4,000. Analysts needed = 4,000 ÷ 320 = 12.5, rounding up to 13 (rounding down would leave capacity below 4,000, breaching the utilisation target). Additional analysts = 13 − 10 = 3. Option B skips the 90% headroom; option D stops at noting current capacity exceeds current demand. This tests the arithmetic behind keeping support functions responsive to customer needs — responsiveness is bought in advance, with capacity planning done before the demand arrives — and a strong candidate's answer notes why the 90% ceiling matters: queues are non-linear, and operations run above ~90% utilisation lose the slack that absorbs demand spikes, leave, and training.

### Administration tips

- **Score for whether a candidate identifies the correct base or population** before computing a percentage or rate.
- **Watch for whether a candidate combines figures by summing raw counts** rather than averaging percentages across unequal groups.
- **Note whether a candidate reconciles two disagreeing figures by finding the difference in measurement basis**, rather than assuming one side is wrong.
- **Note whether a candidate rounds a capacity or headcount requirement upward**, not to the nearest whole number.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an average of percentages across unequal groups.**
- **Crediting an answer that divides by the wrong period or population** — the original value for percentage change, the full population for combined rates.
- **Missing when a candidate ignores running costs in a benefits or payback case.**
- **Accepting a rounded-down capacity or headcount figure** where rounding up is required to meet the stated target.
- **Rewarding an answer that treats a lockstep trend as proof of a specific cause** without acknowledging what would confirm it.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets, and draws conclusions from written material, using documents of the kind this role turns on: SLA and OLA clauses, change management policies, supplier contracts and service reports, incident review documents, stakeholder emails, and extracts from service management standards. The dominant format presents a passage followed by statements to classify as **True** (the passage supports it), **False** (the passage contradicts it), or **Cannot say** (the passage provides insufficient information either way).

The typical format is an online, timed test of 15 to 25 minutes covering 20 to 30 statements across several passages. The governing rule: answer from the passage alone. A candidate's professional knowledge of ITIL, contracts, and typical organisational practices must be set aside for the duration.

Verbal precision matters for this role because service management is substantially a contractual and documentary discipline. Defining SLAs and OLAs means every clause creates or removes obligations, where the difference between "must", "should", and "may" is measured in money and reputation. A manager who misreads an exclusion clause inherits an argument; a manager who writes an ambiguous SLA clause bequeaths one.

### How this assessment maps to the role

- **Precise comprehension of agreements** maps directly to the core duty of **defining SLAs and OLAs across all relevant business functions**.
- **True/False/Cannot say discipline** maps to the **Business analysis (IT operations)** skill — distinguishing what the evidence establishes from what it merely suggests.
- **Inference** maps to the **Service management framework knowledge** skill.
- **Reading supplier and stakeholder communications accurately** maps to the **Stakeholder relationship management (IT operations)** skill.
- **Clear-writing judgement** maps to the **IT service reporting** skill and the duty to ensure **all technical change is communicated** effectively.
- **Understanding strategy and policy extracts** maps to the **Strategic thinking** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

For Questions 1 to 5, the candidate reads this passage, then answers using only the passage.

> **Extract from the ICT Services Agreement, Schedule 2 (Service Levels)**
> The Supplier shall resolve Priority 1 incidents within four hours of logging. The Supplier shall resolve Priority 2 incidents within eight working hours of logging. Where the Customer's own actions or omissions prevent the Supplier from progressing an incident, the Supplier may suspend the resolution clock, provided the suspension and its reason are recorded in the incident record at the time. Service credits become payable when monthly achievement against either priority target falls below 92%. Service credits are the Customer's sole financial remedy for service level failures, except where a failure results from the Supplier's wilful default.

**Question 1 (easy) — True, False, or Cannot say**

Statement: "The Supplier must resolve Priority 1 incidents within four hours of logging."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage's first sentence states this obligation directly. "Shall" creates a binding obligation, and the statement's "must" faithfully restates it — same actor, same action, same time limit, same trigger. This tests recognising a clean paraphrase of an explicit clause, and a strong candidate's answer notes the professional habit it builds: anchoring every claimed obligation to its exact clause, since in supplier review meetings the person who can point to the sentence wins the discussion.

**Question 2 (easy) — True, False, or Cannot say**

Statement: "The Priority 1 and Priority 2 resolution targets are both measured in working hours."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Compare the two clauses word by word. Priority 2: "within eight *working* hours". Priority 1: "within four hours" — no "working" qualifier. The passage draws a distinction: P1 runs on elapsed clock hours, while P2 pauses outside working hours. The statement claims both are working-hours measures, contradicted by the P1 clause's wording. This tests noticing which qualifiers appear where — the presence or absence of one word roughly triples the effective stringency of the P1 target across nights and weekends.

**Question 3 (moderate) — True, False, or Cannot say**

Statement: "If the Customer delays providing access needed for an incident, the Supplier's resolution clock stops automatically."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The clause grants a conditional permission, not an automatic effect: the Supplier *may* suspend the clock, *provided* the suspension and its reason are recorded in the incident record at the time. "May" makes suspension a choice, and the recording proviso is a precondition — an unrecorded suspension is not a valid suspension under this clause. This tests distinguishing "may, subject to conditions" from "shall, automatically" — a supplier claiming retrospective clock-stops for undocumented customer delays is asking for what the contract withheld.

**Question 4 (moderate) — True, False, or Cannot say**

Statement: "If monthly Priority 2 achievement is 90%, the Customer can claim damages in court for its business losses."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** At 90%, achievement is below 92%, so service credits become payable. Service credits are the Customer's sole financial remedy for service level failures, except where the failure results from wilful default. Whether this failure involved wilful default is a fact the passage does not give, so the honest answer is Cannot say. This tests recognising that an exception clause converts a would-be False into a Cannot say, because the exception opens a path the facts neither confirm nor close.

**Question 5 (moderate) — Inference**

Which of the following can properly be inferred from the passage?

- A) The Supplier drafted the agreement to favour itself
- B) A suspension recorded a week after the delay it describes would not satisfy the clause's conditions
- C) Service credits are calculated as a percentage of monthly charges
- D) Priority 1 incidents are rarer than Priority 2 incidents

**Correct answer: B**

**Explanation:** Option A speculates about drafting motives the passage never addresses. Option C describes a calculation mechanism the passage never mentions. Option D imports outside experience the passage does not support. Option B follows necessarily from the clause's own words: suspension is valid "provided the suspension and its reason are recorded in the incident record *at the time*" — a record made a week later fails that stated condition. This tests inference at the standard the test rewards: a conclusion forced by the text, not merely consistent with it.

For Questions 6 to 8, the candidate reads this passage.

> **Email from the Head of Casework Operations**
> Subject: Concerns ahead of the case management system upgrade
> Thank you for the change notice about next Thursday's upgrade. I have three concerns. First, Thursday is our statutory reporting deadline, and the notice says the system will be unavailable from 18:00 to 22:00; my teams often work until 20:00 on deadline day. Second, the notice says training materials for the new version "will follow", but my staff need them at least three working days before go-live to schedule team walkthroughs. Third, last year's upgrade overran its window by four hours, and we had no way of getting status updates during the evening. If the date cannot move, I need a commitment on the training materials, a named contact for the evening, and hourly status updates from 18:00. I am copying my director, who shares these concerns.

**Question 6 (easy) — Detail retrieval**

By when does the Head of Casework Operations say staff need the training materials?

- A) By the evening of the upgrade
- B) At least three working days before go-live
- C) One week before go-live
- D) The email does not say

**Correct answer: B**

**Explanation:** The email states it directly: staff "need them at least three working days before go-live to schedule team walkthroughs." This tests extracting a requirement with its own deadline and rationale from a multi-point email — a candidate whose reply addresses two of three concerns reads, to the sender and the copied director, as though the email was not fully read.

**Question 7 (moderate) — True, False, or Cannot say**

Statement: "The Head of Casework Operations is demanding that the upgrade be postponed."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The email's closing logic states: "If the date cannot move, I need a commitment on the training materials, a named contact for the evening, and hourly status updates from 18:00." The sender explicitly contemplates the date standing and states acceptable conditions for that case — a negotiating position, not an ultimatum. This tests reading stakeholder positions at their actual strength: treating this email as an ultimatum escalates a solvable situation; treating it as mere grumbling ignores a genuine, addressable concern.

**Question 8 (hard) — Best response judgement**

Which reply best serves the situation described in the email?

- A) "Thanks for your email. The change has been approved by CAB and will proceed as planned. Rest assured we follow best practice."
- B) "Thanks for flagging these concerns — we'll definitely take them on board and circle back soon."
- C) "Thank you — these are fair concerns. Taking them in turn: we can move the outage start to 20:30 on Thursday, keeping your teams covered until 20:00; training materials will be issued by Monday, three working days ahead; and I'll act as your named contact on the evening, sending status updates hourly from the start of the window. I've also built in a checkpoint at 21:30 so we can invoke rollback before your Friday morning start if needed. Happy to talk today if any of this doesn't work."
- D) "These operational details are for the supplier performing the upgrade — I've forwarded your email to them to respond."

**Correct answer: C**

**Explanation:** Judge each reply against what the email needs: each concern answered specifically, risk to the statutory deadline managed, and confidence restored after last year's overrun. Option C addresses the timing conflict concretely, meets the training deadline with a date, provides the named contact and update cadence requested, and adds an unrequested but relevant safeguard. Option A answers a question nobody asked and dismisses the substance. Option B is content-free. Option D outsources a stakeholder relationship that belongs to the manager. This tests answering every point, in the sender's order, with specifics.

For Questions 9 to 12, the candidate reads this passage.

> **Extract from the departmental Service Management Policy**
> Each live service must have a designated service owner and a current entry in the service catalogue. Services without a catalogue entry may not be offered to new users. The service catalogue must be reviewed quarterly; entries not reviewed within two consecutive quarters are marked dormant. Dormant services remain available to existing users but are excluded from service level reporting until reinstated. Reinstatement requires a completed review and the service owner's confirmation that support arrangements remain adequate. The annual service report presented to the departmental board covers all services except dormant services and services retired during the year.

**Question 9 (moderate) — True, False, or Cannot say**

Statement: "A service whose catalogue entry has not been reviewed for one quarter is marked dormant."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The policy specifies the trigger precisely: entries "not reviewed within *two consecutive quarters* are marked dormant." One missed quarter does not meet the stated threshold. This tests reading a numeric trigger exactly — thresholds are where verbal reasoning tests concentrate their traps because they are where real operational disputes concentrate too.

**Question 10 (moderate) — True, False, or Cannot say**

Statement: "Dormant services are unavailable to all users."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The policy states the opposite: "Dormant services *remain available to existing users* but are excluded from service level reporting until reinstated." Dormancy is a reporting and governance status, not an operational shutdown. This tests reading a defined term at its actual defined meaning rather than an everyday intuition of the word — a manager who assumes dormant means dead might decommission something citizens still use.

**Question 11 (hard) — Inference**

Which conclusion about the annual service report can properly be drawn?

- A) The report understates the department's true service estate if any services are dormant at year end
- B) Dormant services are excluded from the report because their performance is poor
- C) The report includes services retired during the year, for completeness
- D) The board is unaware that dormant services exist

**Correct answer: A**

**Explanation:** Dormant services remain available to existing users, yet the annual report "covers all services except dormant services and services retired during the year." Whenever dormant services exist at year end, live, used services are absent from the report — forced by the text. Option B invents a rationale: exclusion follows from review status, not performance. Option C directly contradicts the exception clause. Option D overreaches beyond what the passage establishes. This tests drawing the conclusion the text forces, and a strong candidate's answer notes this is also the finding a sharp service manager would raise in governance.

**Question 12 (hard) — Clear-writing judgement**

A change notice for a four-hour evening outage of the expenses system needs drafting. Which version is best?

- A) "Please be advised that scheduled essential maintenance activities will be undertaken in respect of the expenses system infrastructure, with an associated service interruption anticipated during the relevant maintenance window."
- B) "The expenses system will be unavailable on Thursday 14 March, 18:00–22:00, while we apply a security update. Claims submitted before 18:00 will be processed normally. If the work finishes early, service will resume early; a status update will be posted at 20:00 on the IT status page. Contact the service desk on ext. 3000 with any concerns."
- C) "Expenses down Thurs evening for patching — should be back by 10ish. Apologies for any inconvenience!"
- D) "The expenses system will undergo a scheduled outage. Users are advised to plan accordingly. Further details are available on request."

**Correct answer: B**

**Explanation:** A change notice succeeds when a busy reader can answer, without replying: what is affected, when exactly, why, what should they do, and where do updates come from. Option B answers all five in plain words. Option A is officialese that never states the date or times. Option C has the right brevity instinct but is fatally imprecise. Option D makes readers do the work the notice exists to remove. This tests whether a candidate produces the draft engineered to prevent the incidents and calls it exists to avoid.

### Administration tips

- **Score for whether a candidate answers from the passage** rather than from outside knowledge of ITIL or typical organisational practice.
- **Watch for whether a candidate treats a conditional permission as an automatic effect.**
- **Note whether a candidate spots the distinction a qualifier creates between parallel clauses** — one carrying "working hours", its neighbour not.
- **Note whether a candidate reads a stakeholder's stated position at its actual strength** rather than inflating or softening it.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from professional experience rather than the passage.**
- **Missing when a candidate treats "may, provided" as an automatic effect.**
- **Crediting an answer that misses an exception clause converting a False into a Cannot Say.**
- **Missing when a candidate converts a negotiating position into an ultimatum, or vice versa.**
- **Rewarding a reply chosen for politeness over completeness of the specific commitments requested.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace dilemmas and asks the candidate to judge the effectiveness of possible responses. Formats vary: choose the most effective response, choose the least effective, rank all responses from best to worst, or rate each response independently. For an IT service manager, the scenarios are drawn from the genuine pressure points of the role: an SLA breach with a stakeholder demanding answers, a supplier underperforming against an OLA, a change that went wrong, a team conflict across locations, a reporting figure someone wants "presented more positively", an improvement initiative meeting resistance.

The typical format is an online assessment of 15 to 30 scenarios, usually generously timed, because it measures judgement rather than speed. Scoring compares choices against the judgements of experienced practitioners and the organisation's professional behaviours — user focus, ownership, collaboration, honest communication, appropriate escalation, and inclusion. SJTs at management level test management judgement: not whether the candidate can fix the incident, but whether they protect the service, the users, the team, the supplier relationship, and the truth simultaneously.

### How this assessment maps to the role

- **Customer-centric choices** map to the duty to ensure that all service and support functions **remain responsive to customer needs**, and to the **User focus** skill.
- **Ownership choices** map to the **Ownership and topic** skill: owning an issue until a new owner has been found or the problem has been mitigated or resolved.
- **Governance choices** map to the duty to ensure **all technical change is communicated and managed, with appropriate governance**.
- **Supplier and stakeholder choices** map to the **Stakeholder relationship management (IT operations)** skill.
- **Reporting integrity choices** map to the **IT service reporting** skill and the duty to ensure adequate reporting standards.
- **Improvement and team choices** map to the **continual service improvement** duty and the **Business analysis (IT operations)** skill.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The stakeholder demanding an instant answer**

A director calls 20 minutes into a P1 outage of the grants system: "I have a ministerial submission due — tell me right now when this will be fixed." The resolver group has not yet diagnosed the fault. What is the most effective response?

- A) Give a confident estimate — "two hours" — to reassure the director, and hope the team beats it
- B) Explain that diagnosis is under way, state what is known and being done, commit to a specific next update ("I will call you personally at 11:00 or sooner"), and ask about the submission deadline so the workaround options can be judged against it
- C) State that the incident cannot be discussed while it is being worked on
- D) Transfer the call to the resolver group's engineer so the director hears it first-hand

**Correct answer: B**

**Explanation:** During an undiagnosed outage, the honest inventory is: what happened, what is being done, and when the next reliable information will arrive. Option B delivers all three and converts an open-ended demand into a bounded commitment, and asks about the deadline — because the director's real need is the submission, not the ETA, and a workaround may solve the actual problem before the system recovers. Option A trades reassurance now for credibility later. Option C is procedurally wrong. Option D dumps an anxious senior stakeholder onto an engineer mid-diagnosis. This tests honest communication under pressure, ownership of stakeholder management, and user-need focus beneath the stated demand.

**Question 2 (easy) — The supplier who missed an OLA target**

Monthly figures show an applications supplier resolved 84% of tickets within OLA against a 90% commitment — their first miss in a year, coinciding with a documented 40% volume spike from a new system go-live. The service review with them is tomorrow. What is the most effective approach?

- A) Open the review by invoking the contract's remediation clauses to establish seriousness
- B) Skip the topic — one bad month after a good year does not merit discussion
- C) Present the data, acknowledge the volume spike the organisation generated, ask for the supplier's analysis, and agree a joint plan covering both the demand surge and their capacity — while noting the miss formally so the record is accurate
- D) Ask the supplier informally to "smooth things over" in their report so the miss does not surface at the governance board

**Correct answer: C**

**Explanation:** Effective supplier management distinguishes performance problems from demand problems, and this data points substantially to demand the organisation itself created. Option C puts evidence on the table, honestly acknowledges the organisation's contribution, invites the supplier's analysis, agrees a joint plan, and formally records the miss even while the relationship stays collaborative. Option A reaches for contractual escalation against a partner with a year of good performance and a mitigating cause. Option B avoids conflict at the price of governance. Option D corrupts the record. This tests evidence-based fairness, consensus building, ownership of the organisation's own contribution, and reporting integrity.

**Question 3 (easy) — The two-location tension**

A support team spans two sites. Analysts at the smaller northern site complain that the rota concentrates unsocial evening shifts on them, that they hear about process changes late, and that the last two promotions went to the southern site "as always". What is the most effective first action?

- A) Explain that shift allocation follows the rota tool's output, so it is fair by definition
- B) Review the rota data and communication patterns to establish the facts, visit the northern site to hear the concerns directly, and correct anything the evidence supports — starting with including both sites simultaneously in all change communications
- C) Rotate the team leaders between sites so each experiences the other location
- D) Tell the northern team that hybrid working means location no longer matters

**Correct answer: B**

**Explanation:** Complaints of unfairness across locations contain factual claims that can be checked, and checking them is both respectful and protective. Option B establishes facts, hears people in person, fixes what the evidence supports, and implements the one correction that costs nothing and is almost certainly warranted — simultaneous communication. Option A hides behind a tool. Option C investigates nothing. Option D dismisses lived experience with a slogan. This tests inclusion, evidence before judgement, visible fairness, and team ownership across locations.

**Question 4 (moderate) — The change that skipped governance**

An infrastructure engineer implemented an unauthorised firewall change on Friday evening to "quickly fix" a recurring fault. The change worked — the fault is gone — and no incident resulted. The engineer is well-regarded and openly discloses what they did. What is the most effective response?

- A) Take no action — the outcome was good, and punishing success discourages initiative
- B) Formally discipline the engineer to deter future bypassing
- C) Acknowledge the intent and the transparency, but require a retrospective change record and review; explain specifically what could have gone wrong unreviewed on a Friday evening; and examine why the legitimate route felt too slow for a recurring fault — fixing the process gap that invited the bypass
- D) Quietly ask the engineer not to do it again and mention it to no one, avoiding paperwork for everyone

**Correct answer: C**

**Explanation:** Change governance exists to manage risk, and its authority survives only if bypasses are addressed — but how they are addressed determines whether people keep telling the truth. Option C corrects the record retrospectively, explains the risk concretely, preserves the engineer's honesty as an asset, and asks the system question: a recurring fault with no problem record and a change process experienced as too slow is a process gap. Option A converts luck into precedent. Option B punishes transparency. Option D falsifies the configuration record. This tests proportionate governance, honesty-preserving accountability, root-cause thinking about process, and record integrity.

**Question 5 (moderate) — The knowledge library nobody updates**

Audit sampling shows 30% of knowledge library articles for a key service are outdated, and two recent incidents were prolonged by analysts following obsolete articles. Team leads report their analysts have no time for documentation between tickets. What is the most effective approach?

- A) Email all analysts reminding them that knowledge maintenance is mandatory
- B) Build maintenance into the operating model: make article review part of ticket closure for affected services, allocate rota'd time for it, measure article accuracy alongside ticket metrics, and retire or flag the worst articles immediately so they stop causing harm
- C) Assign the newest analyst to update all articles, since seniors are too busy
- D) Commission a supplier to rewrite the library as a one-off project

**Correct answer: B**

**Explanation:** "No time between tickets" is the diagnostic clue: this is a system design problem, not a diligence problem, and reminders (option A) fail against system problems. Option B redesigns the system so maintenance happens as a by-product of work people already do, and triages the harmful articles immediately. Option C combines the least knowledge with the highest documentation risk. Option D buys a snapshot that begins decaying on delivery day. This tests systemic problem solving and continual improvement embedded in process rather than campaigns.

**Question 6 (moderate) — The uncomfortable number**

Preparing the quarterly service report for the departmental board, availability for the tax processing service was 98.1% against a 99.5% target — the worst figure in two years, driven by one long outage. A senior colleague suggests reporting the six-month rolling average (99.2%) instead, "for better context". What is the most effective response?

- A) Use the rolling average — it is a legitimate statistic and reads better
- B) Report the quarterly figure against target as the standard requires, include the rolling average as clearly labelled additional context, and accompany the miss with cause, remediation, and recovery trajectory
- C) Report the quarterly figure but omit the target so the shortfall is less obvious
- D) Ask the service owner to decide, since it is their service

**Correct answer: B**

**Explanation:** The test is whether "context" becomes a euphemism for substitution. Option B reports the required measure against its target, adds honest context, and gives the board what it actually needs: why, what is being done, and when recovery is expected. Option A substitutes a flattering figure for the standard measure in the quarter it looks worst. Option C manipulates by omission. Option D outsources an integrity question that sits squarely in the reporting-standards duty. This tests reporting integrity, constructive transparency, and stakeholder respect.

**Question 7 (moderate) — Least effective: the improvement that threatens jobs**

An automation initiative will deflect 30% of routine tickets. Analysts are anxious it means redundancies; two team leads are quietly slowing the rollout. Which response is the LEAST effective?

- A) Hold an open session explaining what the freed capacity will be used for — reduced backlog, project work, development time — and involve the anxious teams in choosing which tickets automate first
- B) Talk privately with the two team leads to understand their concerns and win their sponsorship of the change
- C) Accelerate the rollout quietly and let the results speak for themselves once it is done
- D) Share the demand-growth data showing rising volumes will absorb the freed capacity, and commit publicly that no roles will be lost to this initiative if that is the organisation's actual position

**Correct answer: C**

**Explanation:** Option C accelerates a change because it faces resistance, and does so quietly, confirming the teams' worst interpretation and converting anxious compliance into active opposition. Options A, B, and D are all effective in complementary ways: giving the future shape and sharing control, addressing the actual blockers respectfully, and deploying evidence with a truthful commitment. This tests whether a candidate identifies the response that ignores the human system through which every improvement must pass.

**Question 8 (moderate) — The catalogue request that hides a shadow service**

A business unit asks for "their" case-tracking tool to be added to the service catalogue. Investigating reveals they built it themselves on an unsupported platform, it holds citizen data, 60 staff already depend on it daily, and it has no backups, no support arrangements, and no security assessment. What is the most effective response?

- A) Refuse catalogue entry and instruct the unit to stop using the tool immediately
- B) Add it to the catalogue as requested — 60 users make it a de facto service already
- C) Treat the request as the disclosure opportunity it is: get the security and data risks assessed urgently, put interim safeguards in place (backups first), and work with the unit on a route to either proper adoption or managed migration — while ensuring the data risk is formally reported
- D) Decline involvement, since the tool was built outside IT and is the unit's responsibility

**Correct answer: C**

**Explanation:** Shadow IT scenarios test whether risk reduction is optimised for over being right. Citizen data with no backups and no security assessment is the urgent risk; abrupt shutdown (option A) creates an operational crisis and teaches every unit that disclosing shadow tools gets them punished. Option B confers legitimacy the tool has not earned. Option D abandons ownership with a jurisdictional excuse. Option C sequences by risk: assess, safeguard, report, then solve the service question properly. This tests risk-first sequencing, ownership across boundaries, governance without punishment of honesty, and user protection.

**Question 9 (hard) — The conflicting SLA commitments**

Drafting SLAs for a new shared platform reveals marketing was promised 99.9% availability by an account manager during onboarding, but the platform's architecture — confirmed by OLA analysis — can support at most 99.5%. Marketing has already built the 99.9% figure into their campaign planning. A head of division would prefer this "not become a thing". What is the most effective action?

- A) Draft the SLA at 99.9% to honour the promise, and hope the platform overperforms
- B) Draft the SLA at 99.5%, tell marketing the account manager's figure was unofficial, and proceed
- C) Take the discrepancy to marketing directly and early: explain what the platform can actually commit to and why, quantify the difference in real terms (about 3 hours versus 43 minutes of monthly downtime), explore whether their campaign-critical windows can be protected by other means, and brief the head of division that a corrected commitment now is far cheaper than a breached one later
- D) Draft the SLA at 99.7% as a compromise between the two figures

**Correct answer: C**

**Explanation:** An SLA is a promise the operation must keep month after month; drafting one the architecture cannot support (option A) schedules its public breaking. Option D treats an engineering constraint as a negotiating position — the platform does not know a compromise was reached, and 99.7% breaches almost as reliably as 99.9%. Option B has the right number and the wrong method. Option C does the whole job: early, direct, quantified honesty; creative protection of the stakeholder's underlying need; and managing upward with the true cost comparison. This tests integrity under hierarchical pressure, evidence-based negotiation, and stakeholder need beneath stakeholder position.

**Question 10 (hard) — The major incident retrospective that points at the manager**

The post-incident review of last week's four-hour payroll outage finds the primary cause was a change the manager personally approved: the risk assessment they signed off underestimated the blast radius, and the testing evidence they accepted was thinner than their own change standard requires. The review lands on the manager's desk before wider circulation. What is the most effective action?

- A) Soften the findings' wording before circulation — the facts remain, but "approved against standard" becomes "approved under time pressure"
- B) Circulate the review unedited, add a personal account taking responsibility for the approval decision, and propose the specific control improvements it implies — a blast-radius checklist and a minimum-evidence gate that cannot be waived alone — then present it at the service review
- C) Circulate it but add no comment
- D) Delay circulation until the improvements are already implemented, so the story has a happy ending

**Correct answer: B**

**Explanation:** How a manager handles findings against themselves sets the honesty ceiling for their whole operation. Option B preserves the review process's integrity, converts the document from an accusation into an act of leadership, and proposes controls that address the actual failure mode — concentrated discretion, not bad luck. Option A is quiet corruption of the record. Option C is transparency without ownership. Option D holds the truth hostage to a remediation timetable. This tests accountability, modelling a blame-free-but-responsible culture, and courage — owning issues the manager caused, not only issues others caused.

**Question 11 (hard) — Ranking: the Friday afternoon cascade**

At 15:30 on Friday, four situations land simultaneously: (1) monitoring shows early signs of degradation on the benefits-claim service, the pattern matching the prelude to last month's P1; (2) a supplier emails that their overnight maintenance tonight now needs an extended window, requiring approval within the hour; (3) an analyst reports a colleague may have shared their admin password with a contractor "to save time"; (4) a director asks for a summary of October's SLA figures by Monday morning. Rank the order in which these should be addressed:

- A) 1, 3, 2, 4
- B) 3, 1, 2, 4
- C) 2, 1, 4, 3
- D) 1, 2, 3, 4

**Correct answer: B**

**Explanation:** Rank by irreversibility and blast radius, not noise. Item 3 leads: a shared admin credential is a live security exposure, and containment cannot wait. Item 1 is second: a recognised pre-P1 pattern on a citizen-facing service demands immediate engagement while there is still time to prevent rather than manage an outage. Item 2 is a bounded, time-boxed decision that can be made properly slightly later, informed by item 1's assessment. Item 4 schedules into Monday morning. Option D leaves the security exposure open longest, the one mistake with disciplinary, audit, and citizen-data implications. This tests risk-based prioritisation, security seriousness, and resistance to seniority-driven sequencing.

**Question 12 (hard) — The consensus that excludes the users**

Chairing a working group defining support arrangements for a new casework service: IT, the supplier, and finance have converged on a support model with 09:00–17:00 coverage. Late in the process, user research data arrives showing 30% of caseworkers regularly work 07:30–09:00, including the service's heaviest data-entry period. The group wants to sign off today; reopening coverage hours would delay the launch by two weeks. What is the most effective action?

- A) Sign off the model — consensus among the professional stakeholders is what the working group exists to produce, and the users can adapt
- B) Put the user data in front of the group before sign-off, quantify the exposure, and recommend either adjusted hours or an explicit, risk-accepted interim with committed review — making the group decide with the evidence rather than without it
- C) Sign off today, and plan to fix the hours quietly in a later review once launch pressure has passed
- D) Escalate to a head of division to overrule the group's preferred model

**Correct answer: B**

**Explanation:** Consensus derives its value from what it is consensus about — agreement reached by excluding material evidence is collective oversight, not consensus, and it fails at the worst time. Option B tables the evidence, quantifies the exposure, and offers legitimate paths that let the group decide with full information. Option C makes the same choice undocumented, a quiet bet with citizens' casework. Option A dissolves the purpose of support arrangements into administrative convenience. Option D escalates before the group has even seen the evidence. This tests user advocacy with evidence, honest governance of trade-offs, and escalation as a last resort rather than a first.

### Administration tips

- **Score for whether a candidate pairs a difficult decision with a concrete communication or record**, rather than resolving it silently.
- **Watch for whether a candidate's answer preserves an honest record even when the truth is unflattering to them personally** (the retrospective item, Question 10, is designed to surface this).
- **Note whether a candidate treats a technical or architectural constraint as non-negotiable**, resisting the "split the difference" trap.
- **Note whether a candidate distinguishes ownership of a system-level fix from individual blame** when a process failure surfaces.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding operational speed over stakeholder honesty** — an invented ETA, a softened finding, a "smoothed" figure.
- **Crediting an answer that punishes disclosure instead of the underlying risk.**
- **Missing when a candidate blames an individual for a system-shaped problem** rather than fixing the system.
- **Rewarding a pure-enforcement or pure-flexibility answer to a governance bypass**, rather than one that holds the line and asks why the bypass happened.
- **Missing when a candidate lets seniority reorder a priority ranking** that risk and irreversibility should govern instead.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to an IT service manager: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested the structured thinking that underpins a well-run service: reasoning from shared platforms to likely causes, applying change governance rules with deductive precision, checking catalogue entries and supplier reports against their own arithmetic, sequencing a demanding morning by impact-weighted urgency, and untangling multi-constraint change schedules. The numeric section tested the native mathematics of service management: SLA achievement, availability conversions, weighted supplier performance, change failure analysis, benefits cases, and capacity planning. The verbal section tested SLA clauses, supplier reports, stakeholder emails, and policy extracts read with contractual precision. The situational judgement section tested the defining dilemmas of the role: honest communication during outages, fairness across sites and suppliers, governance that preserves honesty, reporting integrity under pressure, and user advocacy inside consensus-driven groups.

The thread running through all four sections is the same professional posture: verify before trusting, quantify before arguing, own the issue across boundaries, and tell stakeholders the truth with a plan attached.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can resolve a situation, protect the honest record, and strengthen the system that will face the situation's successor — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
