# Principal DevOps Engineer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for principal DevOps engineer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a principal DevOps engineer, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — technology strategies, assurance policies, workforce and skills plans, capacity and cost models spanning multiple teams, emerging-technology evaluations, and papers for boards and directors — and decisions genuinely made by someone who leads and plans development across large or multiple teams and defines the strategic vision for delivery.

At this level, the consequences of a candidate's reasoning are organisational: a misjudged technology evaluation commits many teams to years of a wrong bet, a policy set for security, stability and capacity becomes the operating condition for every engineer in scope, and judgements about skills gaps and dependencies determine what the organisation will be capable of in three years.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for stating conclusions at exactly the strength the evidence supports — several items are built so an over-strong or over-confident conclusion is the wrong answer, and the discipline of stopping at what is actually proven is itself part of what is being tested. Several situational judgement items also reward a candidate who reads a sustained non-compliance or a repeated failure pattern as evidence about a system, rather than as a reason to blame individuals; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles — assurance policies, technology evaluation frameworks, workforce and dependency matrices, investment sequencing decisions, and organisation-wide telemetry — that ask a candidate to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

For a principal DevOps engineer, cognitive ability is particularly relevant because the role concentrates the organisation's hardest structured-thinking problems: defining a strategic vision means reasoning about sequencing and second-order effects years ahead, and evaluating emerging technologies means separating a genuine signal from a well-marketed confound.

### How this assessment maps to the role

- **Pattern recognition** maps to **Availability and capacity management** and the duty to identify important dependencies within technical teams: spotting that many teams' incidents share one cause, or that several roadmaps depend on the same scarce expertise.
- **Logical deduction** maps to **Information security** and **Systems integration**: valid reasoning from policy to consequence, including the contrapositive reasoning that audit and assurance run on.
- **Error checking** maps to **Development process optimisation** and **Modern development standards**: finding the flaw in a proposed policy before the organisation inherits it.
- **Prioritisation** maps to leadership of development across large or multiple teams: allocating attention and organisational capacity across risks with very different blast radii.
- **Applied problem solving** maps to the duty to identify, test and champion emerging technologies: designing pilots and evaluations whose results actually mean something.

### Practice questions

**Question 1 (easy) — Pattern recognition in a technology radar**

A technology radar classifies entries as `<ring>/<quadrant>: <technology>`, ring being Adopt, Trial, Assess, or Hold, and quadrant being Platforms, Tools, Techniques, or Languages. Entries: (1) Adopt/Tools: Terraform; (2) Trial/Platforms: Internal developer portal; (3) Techniques/Assess: Chaos engineering; (4) Hold/Languages: Legacy scripting dialects; (5) Assess/Tools: Policy-as-code scanners. Ask which entry breaks the pattern.

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: B**

**Explanation:** The order is fixed: ring, then quadrant. Entry 3 inverts it — it should read "Assess/Techniques". This tests a consistency check that matters because a report querying "everything in Hold" mechanically misses a miscategorised entry, and a technology meant to be retired lives on unnoticed.

**Question 2 (easy) — Logical deduction from an assurance policy**

Policy: "A service may go live only after passing a service assessment, unless the service is classified as an internal tool, in which case a lightweight peer review suffices." A colleague says: "This service went live without passing a service assessment." Ask which conclusion must be true.

- A) The service is an internal tool.
- B) The go-live breached the assurance policy.
- C) Either the service is an internal tool that received a peer review, or the policy was breached.
- D) The service assessment was failed rather than skipped.

**Correct answer: C**

**Explanation:** The policy permits exactly one route to live without an assessment; the facts do not establish which case applies, so neither A nor B is guaranteed alone, and D invents a detail. Only the disjunction in C must hold. This tests concluding only what the information guarantees, before treating a go-live as a breach — a candidate's public conclusions about compliance carry weight that obliges them to be right the first time.

**Question 3 (easy) — Sequencing an adoption pipeline**

Emerging-technology process: Landscape scan before Shortlisting; Shortlisting before Structured trial; Structured trial before both Pathfinder deployment and Skills planning; Scale-out requires both Pathfinder deployment and Skills planning complete. Ask which stage must occur immediately before Scale-out can start.

- A) Pathfinder deployment
- B) Skills planning
- C) Whichever of Pathfinder deployment and Skills planning finishes later
- D) Structured trial

**Correct answer: C**

**Explanation:** Scale-out has two prerequisites that the rules do not order against each other, so it starts only when the *later* of the two completes — which depends on scheduling choice, not the rules. This tests recognising that a gate opens on the latest of parallel prerequisites, and that the unglamorous branch (skills planning) gates just as hard as the exciting one (the pathfinder).

**Question 4 (moderate) — Error checking a skills and dependency matrix**

Workforce standard: (i) every critical component must have at least two experts; (ii) an engineer may be recorded expert in at most two critical components; (iii) components scheduled for decommission within six months are exempt from rule (i). Matrix: Identity gateway (live, experts Asha and Ben); Artefact registry (live, experts Asha, Chen and Dara); Legacy scheduler (decommission in 4 months, expert Ben only); Secrets platform (live, expert Asha only). Ask what the audit reveals, and what changes bring the matrix into full compliance.

- A) One breach — the Secrets platform needs a second expert; adding one resolves it.
- B) Two separate breaches — the Secrets platform has only one expert (rule i), and Asha is recorded expert on three critical components (Identity gateway, Artefact registry and Secrets platform), breaching rule (ii); resolving fully needs both a second expert added to the Secrets platform and Asha's recorded expertise removed from one of her three components.
- C) One breach — the Legacy scheduler has only one expert; training a second resolves it.
- D) No breaches — the matrix is fully compliant as shown.

**Correct answer: B**

**Explanation:** The Legacy scheduler is exempt under rule (iii), so it is compliant despite having one expert. The Secrets platform breaches rule (i) with only one expert. Separately, counting Asha's recorded components — Identity gateway, Artefact registry, Secrets platform — she is recorded on three, breaching rule (ii)'s limit of two. These are two independent defects requiring two independent fixes; neither fix alone resolves both. This tests enumerating every defect against every rule before proposing a remedy, rather than fixing the first breach found and assuming the matrix is then compliant.

**Question 5 (moderate) — Prioritisation at principal level**

Four items compete for attention: (1) a critical vulnerability disclosed in the container base image used by every team; platform leads are assembling and need a call on patching strategy within hours; (2) an engineering strategy paper due to the technology leadership board on Thursday, needing half a day of work; (3) the final interview this afternoon for a hard-to-fill lead DevOps engineer role, chaired personally, with the candidate holding a competing offer expiring this week; (4) a director has emailed asking why last week's outage review has not reached her, referencing "grip." Ask which sequencing is most defensible.

- A) 1, 3, 4, 2 — direct the vulnerability response, keep the interview, send the director a brief holding reply with a firm date, then protect time for the board paper
- B) 4, 1, 3, 2 — a director's displeasure is the most senior issue on the list
- C) 1, 2, 3, 4 — strategy is the principal's core duty after safety
- D) 3, 1, 4, 2 — the interview is the only item that cannot be moved

**Correct answer: A**

**Explanation:** Item 1 is a fleet-wide exposure needing a decision measured in hours; item 3 is genuinely time-fixed with an expiring offer; item 4 needs only a brief, honest holding reply with a committed date; item 2 gets protected time before Thursday. This tests ranking by blast radius and true time-criticality, distinguishing decisions (minutes) from work (hours), and not confusing the loudest stakeholder with the largest risk.

**Question 6 (moderate) — Deduction from investment gate rules**

Investment process: (i) initiatives above £500,000 require a full business case; (ii) a full business case requires a completed technical feasibility assessment; (iii) feasibility assessments are valid for twelve months from completion. An initiative costed at £800,000 is approved this month; its known feasibility assessment was completed fourteen months ago. Ask which conclusion must be true.

- A) The initiative was approved without a full business case.
- B) The process was breached, or a new feasibility assessment was completed within the last twelve months.
- C) The feasibility assessment was renewed at the twelve-month point.
- D) The approval is invalid and must be rescinded.

**Correct answer: B**

**Explanation:** The known assessment is expired; either a newer one exists that has not yet come to light, or the case proceeded on an invalid assessment, breaching the process — that disjunction is B. C asserts the innocent branch as fact; A and D each overreach. This tests the standard shape of assurance review: an apparent breach usually resolves into a disjunction whose branches must be investigated — asking for the record before alleging the breach.

**Question 7 (moderate) — Pattern recognition across organisational incident data**

Eleven teams reported deployment-related incidents this quarter; nine involved certificate expiry, and all nine affected teams use the legacy certificate issuance service, while the organisation's other thirty teams (including the two with non-certificate incidents) migrated to the automated certificate platform last year. Ask for the most reasonable first interpretation.

- A) The nine teams have weak operational discipline and need incident-management training.
- B) The pattern indicates a systemic dependency risk: the legacy issuance service's manual renewal process is generating a predictable incident class, and migrating the remaining nine teams should be prioritised and resourced.
- C) Certificate expiry is an industry-wide problem that all teams will always face.
- D) The other thirty teams are under-reporting incidents.

**Correct answer: B**

**Explanation:** The incident class concentrates entirely in the population still on the legacy service and is absent from the migrated population — a shared dependency, not nine simultaneous team failures. This tests checking a shared dependency before blaming individual teams, and completing the move from pattern to resourced remediation, since the organisation already knows how to fix it — it has done so for thirty teams.

**Question 8 (hard) — Multi-constraint investment sequencing**

Sequencing three platform investments — Observability overhaul (O), Zero-trust networking (Z), and Developer portal (D) — across four quarters, at most one starting per quarter, each taking exactly one quarter. Constraints: (i) Z cannot start before Q2, since it needs the identity workstream, which completes at the end of Q1; (ii) O must complete before D starts; (iii) the central team is committed to a legacy decommission in Q3 and can start no investment that quarter; (iv) all three must complete by end of Q4; (v) the identity workstream's output that Z depends on becomes unusable if Z has not started within one quarter of that output completing, so Z must start no later than Q2. Ask in which quarter Z must start.

- A) Q1
- B) Q2
- C) Q3
- D) Q4

**Correct answer: B**

**Explanation:** Rule (v) forces Z to start no later than Q2, and rule (i) forbids Q1 — so Z must start in Q2. That leaves Q1 and Q4 for O and D; rule (ii) requires O to complete before D starts, so O takes Q1 (completing end of Q1) and D takes Q4. This tests finding the single constraint that actually pins down an otherwise-ambiguous variable, rather than accepting the first schedule that happens to satisfy every rule checked so far.

**Question 9 (hard) — Contrapositive reasoning on security attestations**

Security assurance framework: (i) every internet-facing service must hold a current penetration test attestation; (ii) attestations are issued only after all critical findings from the test are remediated; (iii) issued attestations are recorded in the central assurance register within one working day. The register, audited today, shows no attestation for Service K, and the register process operated correctly. Ask which conclusion must be true.

- A) Service K has unremediated critical findings.
- B) Service K is not internet-facing.
- C) If Service K is internet-facing, it is non-compliant with the framework — and either it was never attested, or attestation was blocked, possibly by unremediated findings.
- D) Service K has never undergone a penetration test.

**Correct answer: C**

**Explanation:** No register entry, with the register reliable, means no attestation has been issued. Rule (i) then bites conditionally: if Service K is internet-facing, it lacks a required attestation, tracing to either never being tested or failing rule (ii)'s gate — the conditional chain in C. A and D each assert one unproven branch; B mistakes the direction of the rule. This tests the pure logic of assurance auditing — registers prove presence, and absence proves only a disjunction whose branches must be investigated in order of consequence.

**Question 10 (hard) — Error checking a proposed continuity policy**

Draft continuity policy: (1) all platform infrastructure must be recoverable from configuration held in the central Git service; (2) recovery procedures must be executable within four hours; (3) recovery credentials must be stored in the platform secrets service; (4) the central Git service and the platform secrets service are themselves platform infrastructure and must follow this policy; (5) annual recovery exercises must test at least one critical component end to end. Ask for the most serious flaw.

- A) Four hours is an unrealistic recovery target for complex platforms.
- B) Rules 1, 3 and 4 are circular: recovering the Git service requires configuration held in the Git service, and recovering the secrets service requires credentials held in the secrets service — so a total loss of either is unrecoverable under the policy.
- C) Rule 5 tests only one component per year, which is insufficient coverage.
- D) The policy does not name an owner for the recovery procedures.

**Correct answer: B**

**Explanation:** Applying rule 4 to rules 1 and 3 makes each foundational service depend on its own availability to be recovered — invisible in a partial outage, fatal in the total-loss scenario continuity policy exists for. A, C and D are legitimate but non-fatal review comments. This tests tracing a self-referential case through a policy's own scope, because policies written for a whole fleet almost always include their own enforcement infrastructure — and circular dependencies at the foundation are the class of flaw no amount of compliance elsewhere can compensate for.

**Question 11 (hard) — Evaluating an emerging-technology pilot**

A team piloting an AI-assisted code review tool for one quarter reports: review turnaround halved, defect escape rate unchanged, developer satisfaction up strongly, and recommends organisation-wide adoption. Additional facts: (a) the pilot team volunteered enthusiastically; (b) during the pilot the team also moved to smaller pull requests, at the candidate's own prior urging; (c) organisation-wide licensing would cost the equivalent of two engineers; (d) turnaround data comes from the tool's own dashboard. Ask for the soundest next step.

- A) Champion organisation-wide adoption — a halved review turnaround with stable quality justifies two engineers' cost.
- B) Reject the tool — the pilot is confounded by the pull-request change and the team's enthusiasm, so its results are worthless.
- C) Run a second, tighter evaluation: two or three non-volunteer teams, pull-request practices held stable, turnaround measured from the version control system rather than the vendor dashboard, with defect escape tracked over a longer window — and decide against pre-agreed thresholds.
- D) Adopt the tool but only for the pilot team, indefinitely.

**Correct answer: C**

**Explanation:** Two confounds — a simultaneous process change known to reduce turnaround, and a self-selected enthusiastic team — mean the halving cannot be attributed to the tool, and the headline metric comes from the vendor. C removes each specific weakness and pre-commits decision criteria; A commits budget on confounded, vendor-measured data; B discards a technology whose real signal (the satisfaction result) may still merit adoption; D creates a permanent unjustified exception. This tests experimental hygiene at organisational stakes — identifying confounds, redesigning to exclude them, and pre-committing decision criteria.

**Question 12 (hard) — Deduction about concentrated dependencies**

Dependency review establishes: (i) every deployment flows through the shared pipeline service; (ii) only the platform enablement team can modify it; (iii) within that team, only two named engineers hold the production access needed to apply modifications; (iv) both engineers are rostered on the same rotation, which permits simultaneous leave. Ask which statement must be true.

- A) The organisation's ability to modify its deployment pipeline in production can lapse entirely during permitted leave overlaps.
- B) Deployments will stop whenever both engineers are on leave.
- C) The pipeline service is unreliable.
- D) The rotation policy breaches the workforce standard.

**Correct answer: A**

**Explanation:** All modification capability sits with two people who can be simultaneously absent — permitted states exist in which nobody can modify the production pipeline, which is A. B overreaches: routine deployments continue flowing through the service; only the ability to change or fix it lapses. C and D require facts not stated. This tests stating a dependency risk at exactly the strength the facts support — "we cannot fix the deployment path if it breaks during a leave overlap" is both true and actionable, while "deployments will stop" is refutable and will be refuted.

### Administration tips

- Score for whether the candidate enumerates every defect against every rule before proposing a fix, rather than stopping at the first one found.
- Note whether the candidate states a deduction at exactly the strength the evidence supports, neither stronger nor weaker.
- Watch for whether the candidate checks a shared dependency or systemic cause before attributing a pattern to individual failure.
- Score for whether the candidate identifies the single constraint that actually resolves an otherwise-ambiguous scheduling question.
- Note whether the candidate traces a self-referential or circular case through a proposed policy's own scope.

### Common pitfalls to watch for when scoring

- Crediting a conclusion one notch stronger than the evidence actually supports.
- Missing when a candidate blames individuals for a pattern the evidence attributes to a shared system.
- Rewarding a fix that resolves the first defect found while leaving a second, independent defect unaddressed.
- Accepting a schedule that satisfies the constraints checked so far without testing it against every stated constraint.
- Missing when a candidate accepts vendor- or interested-party-measured evidence without independent confirmation.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment tests whether a candidate can reach a defensible conclusion from operational data at speed. At principal level the data is availability and error budgets, pipeline and build metrics, capacity models, infrastructure cost, and the volumetrics of systems being designed.

Typical format: 15 to 25 minutes with a calculator, mixing computation with interpretation.

Three habits distinguish a strong candidate at this level: knowing that availability composes multiplicatively across serial dependencies, before a design is committed rather than after an incident; sizing capacity on peak with a component lost, not on average utilisation; and keeping infrastructure cost (what is provisioned) and utilisation (what is used) as separate conversations, since conflating them is how a cost-saving exercise causes an outage.

### How this assessment maps to the role

- **Availability and error budgets** maps to ensuring correct implementation of availability and capacity standards.
- **Capacity modelling and remediation** maps to identifying capacity issues and initiating remedial action.
- **Pipeline metrics** maps to **Development process optimisation**.
- **Cost arithmetic** maps to managing resources so the integration function works effectively.
- **Volumetrics** maps to **Systems design** and **Systems integration**.
- **Security risk quantification** maps to **Information security**.

### Practice questions

*Table 1 — Service components, measured availability last quarter*

| Component | Availability | Position |
|---|---|---|
| Ingress | 99.99% | In request path |
| Auth | 99.95% | In request path |
| Application tier | 99.9% | In request path |
| Cache | 99.6% | In request path, fails open |
| Datastore | 99.95% | In request path |

**Question 1 (easy) — Availability in minutes**

Ask how much downtime 99.95% availability allows in a 30-day month.

- A) About 43 minutes
- B) About 22 minutes
- C) About 4.3 minutes
- D) About 2 hours

**Correct answer: B**

**Explanation:** 43,200 × 0.0005 = 21.6 minutes. This tests holding the standard conversions instantly — 99.9% ≈ 43 minutes, 99.95% ≈ 22, 99.99% ≈ 4.3, 99.5% ≈ 3.6 hours, the last being the figure people most often underestimate.

**Question 2 (easy) — The weakest link**

Ask which component contributes most unavailability.

- A) Ingress
- B) Cache
- C) Application tier
- D) Auth

**Correct answer: B**

**Explanation:** The cache at 99.6% is least available (roughly 2.9 hours a month), but it fails open, so it may not be in the critical path for availability if that behaviour is tested. This tests reading a table's qualifier column, not just its headline figures.

**Question 3 (moderate) — Composed availability**

Ask for the approximate composed availability of the four components that do not fail open.

- A) About 99.79%
- B) About 99.9%
- C) About 99.6%
- D) About 99.95%

**Correct answer: A**

**Explanation:** 0.9999 × 0.9995 × 0.999 × 0.9995 ≈ 99.79%, about 91 minutes a month — worse than any individual component, since serial dependencies multiply. This tests computing a composed system's availability rather than quoting its best or worst component, and noting that if the cache's fail-open path were untested, the figure worsens to about 99.39%.

**Question 4 (moderate) — Error budget burn**

A service has a 99.9% monthly target. Twenty days into a 30-day month it has consumed 34 minutes of downtime. Ask whether it is on track.

- A) Yes; the budget is about 43 minutes and 34 have been used.
- B) No — the budget is 43.2 minutes and 34 minutes in 20 days is a burn rate of 1.7 minutes a day, projecting to about 51 minutes over the month, which overshoots by roughly 18%.
- C) Yes, comfortably.
- D) There is not enough information.

**Correct answer: B**

**Explanation:** 34 minutes in 20 days projects to 51 minutes over 30 — the service is 67% through the month but has used 79% of its budget. This tests measuring a running total against elapsed proportion of the window, not against the full-month threshold alone.

**Question 5 (moderate) — Capacity headroom**

A service runs on 9 instances at 48% average CPU, and peak is 2.1 times average. Ask for the approximate CPU per instance at peak with one instance unavailable.

- A) About 108%
- B) About 113%
- C) About 96%
- D) About 87%

**Correct answer: B**

**Explanation:** Total work at average: 432 percentage-points; at peak: 907; across 8 surviving instances: 113%. Over capacity — the service cannot absorb an instance loss at peak, and is already marginal (101%) at peak without a failure. This tests sizing capacity on peak-with-failure rather than average, since the comfortable-looking 48% average is what conceals the risk.

**Question 6 (moderate) — Remediation sizing**

Using the same figures, ask how many instances should be provisioned to run at no more than 80% at peak with one instance unavailable.

- A) 12
- B) 13
- C) 14
- D) 11

**Correct answer: B**

**Explanation:** 907 ÷ 80 = 11.34, rounding up to 12 surviving instances, plus one to absorb a failure: 13 provisioned. Checking: 907 ÷ 12 = 75.6%, under 80%. This tests the method — divide peak work by target utilisation, round up, then add the failure allowance, in that order.

**Question 7 (hard) — Pipeline throughput**

A build pipeline runs 1,400 builds a month at a mean 14 minutes; a proposed change cuts mean build time to 9 minutes. Ask for the annual machine-time saving.

- A) About 1,400 hours
- B) About 700 hours
- C) About 2,800 hours
- D) About 350 hours

**Correct answer: A**

**Explanation:** 5 minutes saved × 16,800 builds/year = 84,000 minutes = 1,400 hours. This tests distinguishing machine time from engineer time — presenting the saving as recovered staff effort overstates the case and is the version that gets challenged.

**Question 8 (hard) — Compound pipeline pass rate**

A pipeline has four stages with failure rates of 3%, 8%, 12%, and 2%. Ask for the proportion of runs that complete successfully.

- A) About 75%
- B) About 78%
- C) About 82%
- D) About 71%

**Correct answer: B**

**Explanation:** 0.97 × 0.92 × 0.88 × 0.98 ≈ 77%, closest to B. Adding the failure rates (25%) approximates well only because these rates are small; the two methods diverge as rates grow. This tests knowing which method is correct, and the substantive finding — nearly a quarter of runs do not complete.

**Question 9 (hard) — Cost against utilisation**

A service runs 30 instances at £140/month each, averaging 26% CPU; a proposal cuts to 18 instances. Ask for the strongest assessment.

- A) It saves £1,680 a month and raises average utilisation to about 43%, which is still comfortable.
- B) It saves £1,680 a month and the relevant check is peak with a failure, not average — at 26% average the total work is 780 percentage-points, so at a peak factor of 2 that is 1,560, and across 17 surviving instances that is 92%, which leaves almost no margin.
- C) It saves £1,680 and should be adopted.
- D) It saves £2,520 a month.

**Correct answer: B**

**Explanation:** The saving is £1,680; A computes the new average correctly but treats average as the criterion, which is the error. B applies the test that actually predicts failure and shows the result is marginal. This tests recognising that right-sizing on average utilisation is a reliable way to cause an outage while reporting a cost saving.

**Question 10 (hard) — Diagnosing from a metric shift**

After a release, mean response time is unchanged but the 99th percentile has risen from 800ms to 3,200ms. Ask for the strongest reading.

- A) The release had no significant effect; the mean is unchanged.
- B) A stable mean with a fourfold rise at the 99th percentile indicates a new tail — a subset of requests now taking far longer, characteristic of a slow path being introduced, a lock, a cache miss route or an unindexed query — and the mean conceals it because the affected requests are a small proportion.
- C) The service has become slower overall.
- D) The percentile measurement is unreliable.

**Correct answer: B**

**Explanation:** A change affecting 1% of requests moves the 99th percentile dramatically while barely moving the mean. This tests naming the mechanism and the usual candidates rather than stopping at the observation, since the conclusion the mean invites (A) is precisely wrong.

**Question 11 (hard) — Batch volumetrics**

A nightly integration processes 5.4 million records in a 6-hour window; each worker handles 60 records/second. Ask how many workers are needed to give 30% headroom.

- A) About 6
- B) About 9
- C) About 11
- D) About 14

**Correct answer: A**

**Explanation:** Required throughput 5,400,000 ÷ 21,600s = 250/s; at 60/worker that is 4.17 workers with no headroom; × 1.3 = 5.4, rounding to 6. This tests applying the headroom factor before rounding, since rounding first and adding headroom afterwards gives a different, wrong answer.

**Question 12 (hard) — Quantifying a resilience investment**

A resilience change costs £120,000 to build and £24,000/year to run; it would prevent an outage class occurring three times in four years, each costing an estimated £250,000. Ask for the strongest analysis.

- A) Adopt it; £250,000 exceeds the build cost.
- B) The expected annual loss is about £187,500 (three events in four years at £250,000), against £24,000 annual running cost and £120,000 one-off — so it recovers its cost within the first year and saves roughly £163,000 a year thereafter, though both the frequency and the impact are estimates and the case should say so.
- C) Reject it; £120,000 is a large capital cost.
- D) There is not enough information.

**Correct answer: B**

**Explanation:** 0.75 events/year × £250,000 = £187,500 expected annual loss, recovering the investment within the first year. This tests computing expected annual loss against total cost of ownership, and stating the underlying assumptions openly rather than letting an unstated one be found by a reviewer.

### Administration tips

- Score for whether the candidate composes availability multiplicatively across serial dependencies, not by quoting the weakest or strongest component alone.
- Note whether capacity is sized on peak with a failure, rather than on average utilisation.
- Watch for whether an error budget is measured against elapsed proportion of its window, not the full-period total.
- Score for whether the candidate distinguishes machine time from engineer time, and cost from utilisation, in the same calculation.
- Note whether assumptions behind a business case are stated openly rather than left implicit.

### Common pitfalls to watch for when scoring

- Crediting a capacity or cost conclusion based on average utilisation where peak-with-failure was the relevant test.
- Missing when a candidate compares a running error-budget total to the full-period threshold without accounting for elapsed time.
- Rewarding a composed-availability answer that matches the weakest or strongest single component rather than the correct product.
- Accepting a machine-time saving presented as recovered engineer effort.
- Missing an unstated assumption in a business case that a reviewer would immediately challenge.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what a piece of written material establishes. At principal level the material is standards and procedures the candidate would set and enforce, change and security policy, supplier and platform documentation, and incident and problem records used to diagnose complex faults.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, Cannot Say means neither — regardless of what the candidate may know from running comparable systems.

Deep operational experience is the main hazard at this level, since a candidate's own operational reading tends to become the organisation's reading once they set standards from it. Three specifics matter particularly: a standard misread is a standard that will be enforced wrongly across many teams; incident and problem records must be read for what they establish rather than what they suggest, since separating evidence from plausible inference is the diagnostic skill itself; and platform or supplier documentation defines behaviour and support narrowly, so a guarantee for one configuration does not extend to a neighbouring one.

### How this assessment maps to the role

- **Reading standards precisely** maps to establishing standards and ensuring practitioners adhere to them.
- **Reading incident and problem records** maps to identifying, locating and fixing complex service faults.
- **Reading security standards** maps to **Information security**.
- **Reading platform documentation** maps to **Systems integration** and **Systems design**.
- **Reading service agreements** maps to **Availability and capacity management** and **Service support**.
- **Precise written advice** maps to advising others on methodologies and types of service support.

### Practice questions

*Passage A — for Questions 1 to 4*

"Secrets used by production services must be stored in the approved secrets management service and must be rotated at least every 90 days. Secrets used only in non-production environments must be stored in the approved service but are not subject to the rotation requirement, provided that no non-production environment holds production data. Where a non-production environment holds production data, it is treated as production for the purposes of this standard. Access to production secrets is granted on the approval of the service owner and reviewed quarterly. A secret that has been exposed must be rotated immediately and the exposure reported to the security team within 24 hours."

**Question 1 (easy)**

Statement: Secrets used in non-production environments must be stored in the approved secrets management service.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly — non-production secrets "must be stored in the approved service", with only rotation conditionally lifted. This tests distinguishing which specific obligation an exemption touches, since the questions that follow turn on that distinction.

**Question 2 (moderate)**

Statement: A test environment containing a copy of production data must have its secrets rotated every 90 days.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The reclassification clause — "where a non-production environment holds production data, it is treated as production for the purposes of this standard" — pulls it under the production rotation requirement. This tests catching a clause that quietly pulls in a different set of controls, which is the case an assessor at this level will most often have to explain when enforcing the standard.

**Question 3 (moderate)**

Statement: Secrets used only in non-production environments are exempt from the rotation requirement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The exemption is conditional ("provided that no non-production environment holds production data"), and the statement asserts it unconditionally; the passage does not say whether the condition is met, and the proviso's scope — *no* non-production environment, not merely the one in question — is stricter than a quick reading suggests. This tests reading a conditional exemption as conditional, not as a blanket rule.

**Question 4 (hard)**

Statement: Access to non-production secrets is reviewed quarterly.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage addresses only "production secrets" for the quarterly review, and says nothing about non-production access governance — genuine silence, not an implied negative. This tests not carrying a rule stated for one case across a gap into a case the passage never addresses, in contrast to Question 3, where the passage explicitly created a conditional exemption for the other case.

*Passage B — for Questions 5 to 8*

"The incident record states that the payment service began returning errors at 14:06. Monitoring alerted at 14:09. The on-call engineer identified elevated queue depth on the message broker and restarted the consumer group at 14:31, after which error rates returned to baseline within three minutes. A configuration change increasing consumer prefetch from 20 to 200 had been deployed at 13:52. No load testing was carried out against the new value. The broker's configured maximum unacknowledged message limit is 5,000, shared across six consumer groups."

**Question 5 (easy)**

Statement: Monitoring alerted three minutes after the errors began.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** 14:06 to 14:09 is three minutes, established by direct arithmetic on the two given times. This tests doing the subtraction rather than eyeballing a timeline, since incident timelines are where much diagnostic reasoning starts.

**Question 6 (moderate)**

Statement: The prefetch configuration change caused the incident.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The evidence is strong — a tenfold prefetch increase fourteen minutes before failure, elevated queue depth, a shared unacknowledged-message limit — but the passage never states causation. This tests marking a well-evidenced cause as Cannot Say when causation is not stated, while noting that restarting the consumer group resolved the symptom without reverting the configuration — a detail worth catching when diagnosing the fault properly.

**Question 7 (moderate)**

Statement: The six consumer groups together could exceed the broker's unacknowledged message limit.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage gives the payment service's new prefetch (200) and the broker limit (5,000) but nothing about the other five groups' settings or consumer counts, and prefetch is per consumer rather than per group. This tests recognising when a near-certain-feeling claim still requires figures the passage does not supply.

**Question 8 (hard)**

Statement: The incident was resolved by 14:34.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The restart was at 14:31 and error rates returned to baseline "within three minutes" — a bound, placing resolution somewhere between 14:31 and 14:34, with 14:34 as the upper end of the range rather than an established fact. This tests treating a hedged bound ("within") as a maximum rather than a precise duration.

*Passage C — for Questions 9 to 12*

"The managed database service guarantees a monthly uptime percentage of at least 99.95% for multi-availability-zone deployments. Single-zone deployments are not covered by the uptime guarantee. Uptime is calculated excluding downtime during customer-initiated maintenance and excluding unavailability caused by customer configuration. Automated backups are retained for 35 days; point-in-time recovery is available within the retention period to any second. Major version upgrades are the customer's responsibility and are not performed automatically. The provider will notify customers 90 days before a major version reaches end of support."

**Question 9 (moderate)**

Statement: A single-zone deployment of the database is guaranteed 99.95% uptime.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Directly contradicted — "single-zone deployments are not covered by the uptime guarantee." This tests noticing a scope condition that is easy to lose between a procurement decision and an architecture: a service designed on a single-zone deployment has no contractual availability commitment at all.

**Question 10 (moderate)**

Statement: Data can be recovered to any point within the last 35 days.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Established by combining two clauses — 35-day retention and point-in-time recovery "to any second" within that period. This tests joining two clauses that together establish a claim, while noting what remains uncovered: data deleted more than 35 days ago.

**Question 11 (moderate)**

Statement: A major version upgrade will be applied automatically when the current version reaches end of support.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Directly contradicted — "major version upgrades are the customer's responsibility and are not performed automatically"; the 90-day notification is a warning, not an action. This tests the planning consequence: an unsupported major version keeps running, receiving no fixes, unless someone actively upgrades it.

**Question 12 (hard)**

Statement: Downtime caused by a misconfigured connection limit set by the customer's own team would count against the uptime guarantee.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Uptime excludes "unavailability caused by customer configuration", which a self-set connection limit is — contradicted. This tests catching an exclusion clause, while noting what the passage does not address: who determines whether an outage was caused by customer configuration — the point where such disputes actually happen in practice.

### Administration tips

- Score for whether the candidate identifies which specific obligation a conditional exemption touches, rather than treating the exemption as blanket.
- Note whether the candidate catches a reclassification clause that pulls a case under a different set of controls.
- Watch for whether well-evidenced but unstated causation is marked Cannot Say rather than True.
- Score for whether the candidate recognises when a claim needs figures the passage does not supply.
- Note whether hedged or bounding language ("within", "at least") is read as a bound rather than a precise value.

### Common pitfalls to watch for when scoring

- Crediting a conditional exemption read as unconditional.
- Missing when a candidate fails to notice a reclassification clause pulling a case under stricter controls.
- Rewarding a well-evidenced but unstated cause marked True.
- Accepting a computed answer that relies on figures the passage does not supply.
- Missing when a candidate treats a scope-limited guarantee (e.g. multi-zone only) as covering a case outside its stated scope.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. At principal level the scenarios involve diagnosing complex faults, setting and enforcing standards across many teams, capacity remediation, and leading a team of experts whose best work is often invisible.

The commonest formats ask for the most and least effective response, or for ratings, scored against a key derived from experienced practitioners at comparable seniority.

Three patterns run through the strong answers: restoration and diagnosis are separate activities, and mixing them costs users during an incident and costs honest accounts afterwards; a standard is paid for by every team on every change for as long as it stands, so adherence is achieved far more reliably by making the compliant path the easy one than by enforcing harder; and a principal's deepest value sits in the faults nobody else can diagnose, which makes them a bottleneck unless that depth is deliberately transferred.

### How this assessment maps to the role

- **Complex fault diagnosis** maps to identifying, locating and fixing complex service faults.
- **Standards and adherence** maps to establishing standards and ensuring practitioners adhere to them.
- **Capacity remediation** maps to identifying capacity issues and initiating remedial action.
- **Process optimisation** maps to **Development process optimisation**.
- **Developing experts** maps to leading and developing a team of experts.
- **Security judgement** maps to **Information security**.

### Practice questions

**Question 1 (easy) — During an incident**

A major incident is running. Two engineers are debating the root cause while the service stays degraded. Ask for the most and least effective response.

- A) Let them continue; the cause is what matters.
- B) Redirect to restoration — revert what is revertible, fail over what can fail over — and hold the cause discussion afterwards with the evidence preserved, because the debate can be settled later and the degradation cannot.
- C) Decide the cause personally and direct the fix.
- D) Bring more engineers onto the call.

**Most effective: B. Least effective: D.**

**Explanation:** Restoration and diagnosis are different activities, and doing them in the wrong order costs users directly; B redirects and preserves evidence for later diagnosis. D is least effective: adding people to a live incident raises coordination cost sharply, one of the most reliably counterproductive instincts in incident management. C commits to a hypothesis on partial evidence; A lets a debate run while users are affected.

**Question 2 (easy) — A fault only the candidate can diagnose**

A complex intermittent fault has defeated two engineers, and the candidate can probably find it. Ask for the most and least effective approach.

- A) Diagnose it personally; it is what the role is for.
- B) Work through it with one of them rather than alone — narrating what is being checked and why — because the diagnostic reasoning is the thing worth transferring, and a fault of this kind will recur in a form the candidate is not available for.
- C) Give them a list of things to check.
- D) Let them keep going; they will learn more.

**Most effective: B. Least effective: D.**

**Explanation:** B does the diagnosis and the development in one pass — narrating the reasoning is the mechanism, since expert reasoning is otherwise invisible. D is least effective: they have already been defeated by it, so letting them continue costs more time and teaches less than working alongside them. C transfers a checklist rather than the reasoning that generated it; A solves it fastest and leaves capability exactly where it was.

**Question 3 (moderate) — A standard nobody follows**

A standard set eighteen months ago is widely ignored across teams. Ask for the most and least effective response.

- A) Enforce it through the change process.
- B) Find out why first, because a standard ignored by capable teams for eighteen months is usually unworkable, unclear in scope, or more expensive than the alternative — and if it is the last, the fix is to supply the tooling that makes the compliant path the easy one.
- C) Remind teams of the standard.
- D) Withdraw it.

**Most effective: B. Least effective: C.**

**Explanation:** Sustained non-compliance by capable people is evidence about the standard, and adherence is achieved far more reliably by removing friction than by enforcement. C is least effective: a reminder about an unworkable standard buys a fortnight of compliance and teaches everyone the standard is advisory. A enforces before diagnosing, producing malicious compliance; D discards a possibly-real need.

**Question 4 (moderate) — Capacity remediation nobody wants to fund**

Analysis shows a service will exhaust headroom in about four months; the service owner says there is no budget. Ask for the most and least effective response.

- A) Note the risk and move on; budget is their decision.
- B) Put the consequence and the date in writing to the service owner and their accountable superior, with the options — additional capacity, reducing load, or accepting a degradation risk from roughly a stated date — so the decision is made explicitly by someone able to make it.
- C) Escalate immediately to senior management.
- D) Find efficiencies to defer the problem.

**Most effective: B. Least effective: A.**

**Explanation:** Where the remedy needs funding, initiating remedial action means getting the decision made by someone who can — B's written record with a specific date turns a warning into a decision. A is least effective: a foreseeable outage nobody was told about in an actionable form will not be seen afterwards as somebody else's problem. C skips the owner's chance to act first; D is worth doing alongside but dangerous alone, since deferring the wall removes urgency without removing the problem.

**Question 5 (moderate) — A team working around the candidate's standard**

A team has been bypassing a deployment standard for two months. Ask for the most and least effective response.

- A) Require immediate compliance.
- B) Find out why before anything else — two months of workaround by a capable team usually means the standard does not fit their case, such as a stage that fails unpredictably or a delay incompatible with an urgent fix — because enforcing without fixing that just moves the workaround somewhere less visible.
- C) Report it as a compliance breach.
- D) Add technical controls preventing the bypass.

**Most effective: B. Least effective: C.**

**Explanation:** Sustained workaround by competent people is information about the standard, and B's likely findings — a missing emergency path, a flaky stage, unneeded approvals — are actionable. C is least effective: treating it as a compliance matter before understanding it guarantees the next workaround stays hidden. D is probably part of the eventual answer but forces a team into something that does not work if applied first; A is the same error more gently.

**Question 6 (moderate) — A design that will be hard to operate**

An architect's design is sound but would be difficult for the candidate's teams to support. Ask for the most and least effective response.

- A) Raise it as an operational concern in the design review.
- B) Set out concretely what makes it hard — what happens at 3am, what the diagnostic path is, what skills it needs that the team does not have — and work with the architect on changes preserving the architectural intent, because "hard to operate" is not actionable until it is specific.
- C) Accept it; architecture is the architect's responsibility.
- D) Ask for the design to be reworked.

**Most effective: B. Least effective: C.**

**Explanation:** B is specific enough for an architect to act on, and most such problems have solutions that preserve the design's intent once the operational constraint is understood. C is least effective: accepting a design the candidate's teams cannot support guarantees the cost lands on them for years, and the candidate is best placed to prevent it. D asks for rework without saying what would fix it; A raises the issue in a form that is easy to note and hard to act on.

**Question 7 (hard) — Pressure to accept a risk**

A programme wants to go live on infrastructure the candidate considers under-provisioned for expected peak; delay is costly. Ask for the most and least effective response.

- A) Refuse to approve the go-live.
- B) Quantify the risk — expected peak against capacity, what fails first, how long recovery takes — and put the options to whoever owns the service risk, including reduced scope at launch, temporary additional capacity, or accepting a degradation risk from a stated date.
- C) Approve it; the programme owns its delivery.
- D) Approve it and record the risk.

**Most effective: B. Least effective: C.**

**Explanation:** B converts an engineering judgement into a decision an accountable person can take, and temporary capacity in particular is frequently available and frequently unconsidered. C is least effective: treating a visible risk as someone else's problem will not be viewed that way afterwards. D is close but weaker, since a recorded risk with no owner and no decision changes nothing while looking like diligence; A removes the risk owner from their own decision.

**Question 8 (hard) — Recurring failures with different causes**

A platform has had four significant outages in a year with different immediate causes: a certificate expiry, a full disk, a misconfigured limit, and a dependency timeout. Ask for the most and least effective response.

- A) Fix each cause thoroughly.
- B) Look for the shared property — all four are conditions that develop observably before they fail, and none was detected in advance — because four different causes with the same consequence usually indicate one missing capability rather than four unrelated faults.
- C) Add more alerting.
- D) Increase the frequency of maintenance checks.

**Most effective: B. Least effective: A.**

**Explanation:** All four develop gradually and visibly before causing an outage, and none was seen coming — one systemic property, one fix. A is least effective as a whole response: it resolves four specific faults and leaves the property that let them become outages entirely intact. C is directionally right but unspecific; D substitutes human vigilance for instrumentation.

**Question 9 (hard) — A security check that gets bypassed**

Pipeline security scanning blocks deployments on findings that teams frequently override. Ask for the most and least effective response.

- A) Remove the override capability.
- B) Look at what the overridden findings actually are — usually unreachable code paths or third-party dependencies with no available fix — and re-scope what blocks to a small set of high-confidence findings, reporting the rest without blocking, because a check that produces unactionable findings gets bypassed and takes the actionable ones with it.
- C) Require justification for each override.
- D) Accept the overrides; teams know their code.

**Most effective: B. Least effective: A.**

**Explanation:** Automated checks fail for one dominant reason — flooding teams with unactionable findings — and B fixes the design so the block means something. A is least effective: removing overrides on a check producing unactionable findings stops deployments entirely and will be reversed within a week, having damaged standing meanwhile. C adds friction without improving signal; D abandons the control.

**Question 10 (hard) — Becoming the bottleneck**

Teams increasingly route difficult technical decisions through the candidate, who is now the delay on several. Ask for the most and least effective response.

- A) Work through the queue faster.
- B) Define what genuinely needs the candidate's involvement — usually cross-cutting patterns, security-critical components and shared infrastructure, not internal implementation choices — and publish that, so teams can proceed on their own for most decisions.
- C) Delegate to senior engineers in each team.
- D) Stop reviewing and let teams decide.

**Most effective: B. Least effective: A.**

**Explanation:** Being consulted on everything is a structural problem no personal throughput fixes. B addresses the cause by making the boundary explicit, telling teams what they are trusted with. A is least effective: working faster confirms the arrangement and the queue reforms at the new speed. C is a good complement but alone distributes the bottleneck without defining what needs deciding; D removes assurance rather than scoping it.

**Question 11 (hard) — Recognising invisible work**

An engineer has spent months on monitoring and automation; incidents in their area have fallen sharply, and the work appears in no delivery metric. Ask for the most and least effective response.

- A) Thank them and record it in their appraisal.
- B) Make the value countable — incidents avoided at the previous rate, engineer hours not spent, user-facing minutes not lost — and put it in front of the people who decide promotion and resourcing, because prevented incidents are invisible unless someone converts them into a number.
- C) Give them credit publicly at a team meeting.
- D) Move them onto more visible work.

**Most effective: B. Least effective: D.**

**Explanation:** Success in this work looks like nothing happening, disadvantaging the person in every process that counts outputs. B produces the count that serves them and protects the work from deprioritisation. D is least effective — it solves the visibility problem by ending the valuable work, signalling prevention is a career dead end. A and C are good but reach nobody who makes resourcing decisions.

**Question 12 (hard) — Evidence against the candidate's own standard**

Data shows a testing standard introduced across several teams costs significant time and has not measurably reduced defects. Ask for the most and least effective response.

- A) Improve the measurement; prevented defects are hard to count.
- B) Publish the finding, including that it is the candidate's own standard, and narrow it to where the benefit is demonstrable or withdraw it — because teams paying daily for an unmeasurable benefit is a real cost, and withdrawing on evidence makes every remaining standard more credible.
- C) Retain it; testing standards prevent problems that never appear in defect data.
- D) Reduce its scope quietly.

**Most effective: B. Least effective: C.**

**Explanation:** The cost is certain, distributed and daily; the benefit is unmeasured. B allows the right resolution — narrowing rather than abandoning — and earns credibility that only comes from doing it openly. C is least effective, since it is unfalsifiable and keeps every unproductive standard in place indefinitely. D reaches a defensible outcome by a route that looks like concealment once noticed; A is legitimate in principle but indistinguishable from motivated reasoning when the person improving the measurement owns the standard.

### Administration tips

- Score for whether the candidate separates restoration from diagnosis during a live incident, sequencing the two rather than mixing them.
- Note whether a sustained non-compliance or repeated failure pattern is read as evidence about a system rather than a reason to blame individuals.
- Watch for whether the candidate converts a risk or a piece of invisible work into a countable, dated form that an accountable decision-maker can act on.
- Score for whether the candidate scopes their own involvement or a control's scope explicitly, rather than absorbing more of either than necessary.
- Note whether the candidate applies the same scrutiny to a standard they personally introduced as to anyone else's.

### Common pitfalls to watch for when scoring

- Crediting a response that adds people or resources to a live incident rather than reducing coordination overhead.
- Missing when a candidate enforces a standard or reports a workaround as a compliance breach before understanding why it exists.
- Rewarding a response that solves a visibility or bottleneck problem by removing the valuable work rather than by making it legible.
- Accepting a recorded-but-undecided risk as equivalent to a risk actually routed to an accountable decision-maker.
- Missing when a candidate defends their own standard on an unfalsifiable basis that would not be accepted from anyone else.

## Conclusion

This guide has worked through classification and dependency reasoning at organisational scale, defects enumerated fully rather than stopped at the first one found, deductions stated at exactly the strength the evidence supports, and self-referential flaws traced through a proposed policy's own scope; availability composed across serial dependencies, capacity sized on peak with a failure, error budgets measured against elapsed window, and the diagnostic read of a stable mean against a rising tail; conditional exemptions, reclassification clauses, and guarantees scoped to one deployment shape read precisely rather than generously; and the situational judgement calls that define principal-level technical leadership — separating restoration from diagnosis, transferring diagnostic reasoning rather than hoarding it, reading sustained non-compliance as evidence about a system, and applying the same scrutiny to a candidate's own standard as to anyone else's.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around evidential strength, systemic diagnosis, and whether a response makes invisible risk or invisible work legible to a decision-maker. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
