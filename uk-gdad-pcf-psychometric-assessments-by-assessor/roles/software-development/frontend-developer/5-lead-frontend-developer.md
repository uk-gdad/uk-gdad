# Lead Frontend Developer - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for lead frontend developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a lead frontend developer, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — cross-team quality dashboards, architecture and standards decisions, accessibility audit programmes, performance budgets spanning multiple services, community talks, governance papers and escalations — and judgements genuinely made by someone setting direction and assuring the quality of development across teams, making and justifying decisions characterised by high levels of risk, impact and complexity, mediating between people and mending relationships, and identifying the appropriate technology and approach from a wide field of options.

At this level, the role is an expert practitioner whose influence extends well beyond any single codebase: leading multiple or highly complex services, providing technical leadership, coaching and mentoring to a community, speaking on behalf of that community to large audiences inside and outside government, and building consensus between highly independent stakeholders. Every one of those responsibilities rests on reasoning accurately about systems and standards at scale, reading numerical evidence well enough to direct investment across teams, and extracting precise meaning from dense documents whose misreading would mislead many people.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for whether a candidate correctly attaches a fact, exemption or condition to the exact entity it governs (a version, a change, a mechanism) rather than a plausible neighbouring one, and for whether a hypothesis is tested against all the given evidence rather than a convenient subset — several items are deliberately built so a locally sound argument fails once checked against the full picture. Situational judgement items at this level often turn on whether a candidate scopes their own involvement deliberately (assurance that catches what matters without becoming a bottleneck) and applies the same scrutiny to their own past decisions and standards as to anyone else's; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract shapes and sequences — standards documents, cross-team dashboards, dependency maps, audit findings, migration plans and governance constraints — that ask a candidate to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

For a lead frontend developer, cognitive ability is relevant at a different scale than more junior levels: reasoning about aggregates and exceptions across teams (which divergence matters, which apparent anomaly is a measurement artefact), multi-criteria decision reasoning under uncertainty when identifying appropriate technology, and dependency graphs spanning organisations and other teams' roadmaps, not just build steps. Because conclusions at this level become other teams' direction, an error in reasoning is multiplied before anyone catches it.

### How this assessment maps to the role

- **Pattern recognition** maps to **Modern development standards** and **Prototyping**: recognising which local variations across many codebases are the same underlying pattern and which are genuine divergence.
- **Logical deduction** maps to **Systems integration (frontend developer)** and **Strategic thinking**: valid reasoning from dependency rules, contracts and configuration to their consequences.
- **Error checking** maps to **Accessibility** and **Programming and build (frontend developer)**: the gap between what teams claim and what artefacts show.
- **Prioritisation** maps to **Leadership and guidance (frontend developer)**: ranking competing demands across a wider field than any one team's backlog.
- **Applied problem solving** maps to **Web performance optimisation** and identifying appropriate technology: structured elimination among options under real constraints.

### Practice questions

**Question 1 (easy) — Pattern recognition across team conventions**

Convention: `@dept/<service>-<type>`, type being `components`, `utils` or `styles`. Package names: (1) `@dept/benefits-components`; (2) `@dept/passports-utils`; (3) `@dept/components-licensing`; (4) `@dept/pensions-styles`; (5) `@dept/grants-utils`. Ask which package name breaks the convention.

- A) Package 2
- B) Package 3
- C) Package 4
- D) Package 5

**Correct answer: B**

**Explanation:** The order is service, then type; package 3 inverts it, putting type before service. This tests a consistency check that matters because tooling and discovery built against the convention silently miss the broken entry — a search for all component packages by suffix never finds package 3.

**Question 2 (easy) — Deduction from a standards policy**

Policy: "Teams may adopt a new frontend framework only if it is on the approved list, or if they hold a written waiver from the lead frontend developer." Team Kestrel has adopted an off-list framework; no waivers have been issued this year, but a predecessor may have issued one. Ask which conclusion must be true.

- A) Team Kestrel has breached the policy.
- B) Team Kestrel holds a waiver issued by the predecessor.
- C) If Team Kestrel holds no written waiver, it has breached the policy.
- D) The approved list is out of date.

**Correct answer: C**

**Explanation:** Compliance now depends entirely on whether a waiver exists, which the facts genuinely leave open; A and B each assert one branch without evidence. This tests concluding only the conditional that holds in every consistent scenario — publicly accusing a team of non-compliance before verifying the waiver register damages trust for the cost of one email.

**Question 3 (easy) — Error checking a quality dashboard**

Quality gate: automated accessibility checks passing; at least 80% unit test coverage; a performance budget check in the pipeline. Dashboard: Licensing (passing, 84%, in pipeline); Grants (passing, 79%, in pipeline); Benefits (passing, 91%, not configured); Passports (passing, 80%, in pipeline). Ask how many services fail the quality gate.

- A) 1
- B) 2
- C) 3
- D) 0

**Correct answer: B**

**Explanation:** Grants fails (79%<80%); Benefits fails (performance check not configured); Licensing and Passports pass, with Passports' exactly-80% included by "at least." This tests applying a gate as a conjunction, uniformly — Benefits' excellent 91% coverage buys nothing against its missing performance check.

**Question 4 (moderate) — Deduction through a migration dependency chain**

Constraints: (i) shared component library v2 must publish before any service migrates; (ii) Benefits cannot migrate until after its major service assessment ends (end of Q2); (iii) Licensing and Grants share a codebase and must migrate in the same quarter; (iv) v2 publishes end of Q1; (v) at most two services can be in migration in any one quarter (Licensing and Grants count as two). Passports has no other constraints. Ask for the earliest quarter by which all four services can have migrated.

- A) Q2
- B) Q3
- C) Q4
- D) Q1

**Correct answer: B**

**Explanation:** Migration cannot start before Q2 (v2 lands end of Q1); Benefits cannot start before Q3; Licensing+Grants can fill Q2's capacity of two; Benefits and Passports fill Q3. This tests finding the binding constraint (Benefits' assessment) and packing remaining capacity around it, rather than defaulting to the first quarter that seems available.

**Question 5 (moderate) — Prioritisation across a portfolio**

Monday morning: (1) a security advisory affecting a JavaScript dependency used by three services, exploitability unclear; (2) a request to speak at a cross-government event in six weeks, decision needed this week; (3) a technical lead's resignation on a team mid-migration, delivery manager wants to discuss cover; (4) review comments on the candidate's own pull request to the shared component library, blocking two teams. Ask which sequencing is most defensible.

- A) 1, 3, 4, 2 — triage the security exposure, stabilise the leaderless team, unblock the waiting teams, then decide the talk
- B) 4, 1, 3, 2 — unblock others first, always
- C) 3, 1, 4, 2 — people problems always precede technical ones
- D) 1, 4, 3, 2 — security, then code, then people, then community

**Correct answer: A**

**Explanation:** Item 1 (potential exploit across three live services) leads under any weighting, and triage — not full remediation — belongs first; item 3 is a compounding delivery and people risk needing a same-day conversation; item 4 unblocks two teams with an hour's focus; item 2 has a real but non-today deadline. This tests portfolio triage by impact-weighted urgency, with extra weight for risks that grow while unattended, rather than a fixed rule of thumb (B, C) or a near-miss ordering that still under-ranks a compounding risk (D).

**Question 6 (moderate) — Pattern recognition in cross-team audit findings**

Top accessibility findings: Licensing — custom select fails keyboard testing; Grants — modal traps focus incorrectly; Benefits — autocomplete announces nothing to screen readers; Passports — date picker unusable without a mouse. Standard GOV.UK-style form elements across all four show near-zero findings. Ask for the most useful conclusion.

- A) The four teams have four unrelated problems requiring four unrelated fixes.
- B) Custom interactive widgets are the systematic weak point; the programme needs shared, accessibility-tested implementations (or design-system alternatives) instead of per-team rebuilds.
- C) The audits are unreliable because they found different things in different services.
- D) Teams should stop using JavaScript for interactive elements.

**Correct answer: B**

**Explanation:** Every failing artefact is a custom-built rich widget, and every near-clean area is standard componentry — one capability gap, not four unrelated defects. This tests reading across findings rather than down them, converting an ongoing per-team risk into a solved-once problem, rather than treating each team's view as the whole picture (A) or overcorrecting into an absurd fix (D).

**Question 7 (moderate) — Error checking a performance budget exception**

Budget: no page ships more than 300KB compressed JavaScript; exceptions require a documented trade-off and remediation date. A team requests: "Our mapping page ships 480KB because the mapping library is 260KB. Without the library the page would be 220KB, under budget, so the exception should be automatic. We propose remediation by Q3." Ask for the flaw in the argument.

- A) There is no flaw; the request is sound.
- B) The arithmetic is wrong: 480−260 is 220, so the library must be bigger than claimed.
- C) "We would be under budget without the thing that puts us over budget" is true of every over-budget page, so it cannot be grounds for an automatic exception; the request must instead justify why this library's value warrants the cost.
- D) The remediation date is too far away.

**Correct answer: C**

**Explanation:** The arithmetic is consistent (480−260=220); the flaw is logical — the observation is vacuously true of any over-budget page and therefore discriminates nothing. This tests spotting a vacuous step in fluent, numerate prose, since a sound exception request must instead argue the actual trade-off the policy asks for.

**Question 8 (moderate) — Deduction about a shared library's blast radius**

Facts: (i) every service uses the shared component library; (ii) services pin versions and upgrade independently; (iii) a bug exists in versions 4.2 and 4.3 only; (iv) Grants is unaffected by the bug. Ask which conclusion must be true.

- A) Grants is not on version 4.2 or 4.3.
- B) Grants is on a version earlier than 4.2.
- C) Most services are unaffected, since Grants is.
- D) Any service on version 4.3 is affected by the bug.

**Correct answer: D**

**Explanation:** D restates fact (iii) at service level; A and B wrongly assume "unaffected" means "not running the buggy version" — a service could run 4.3 and be unaffected because it never exercises the buggy code path, but it still carries the bug. This tests distinguishing "carrying a defect" from "experiencing it" — exposure is defined by what shipped, not by what has been reported.

**Question 9 (hard) — Multi-constraint technology selection**

Recommending one approach for rich data-visualisation across three services, priorities in order: (1) WCAG 2.2 AA accessible including keyboard and screen reader; (2) maintainable by the existing frontend community (HTML/CSS/JavaScript/standard framework); (3) added page weight under 150KB; (4) delivery within one quarter. Candidates: W — canvas-based, 90KB, fast, but bitmap output needs a parallel text alternative built for every chart; X — SVG-based, 120KB, accessible with modest configuration, uses existing skills; Y — vendor hosted platform, 30KB embed, accessible, but configured in a proprietary tool outside code; Z — bespoke in-house SVG layer, fully controllable, two quarters. Ask which recommendation best fits the stated priorities.

- A) W
- B) X
- C) Y
- D) Z

**Correct answer: B**

**Explanation:** Applying priorities in order eliminates W (structurally fragile accessibility, a perpetual parallel-build obligation), Y (proprietary configuration sits outside the community's skills, code review and version control), and Z (breaches the one-quarter constraint) — X alone survives every filter. This tests sequential elimination against stated priorities rather than holistic judgement, and documenting which requirement eliminated each candidate, which is what makes a recommendation defensible and teachable later.

**Question 10 (hard) — Applied problem solving on a cross-service regression**

After a Tuesday library release: Licensing's metrics degrade sharply from Tuesday; Grants' metrics unchanged; Benefits' metrics degraded, but starting the previous Friday; Passports has not taken the new version and is unchanged. Ask which hypothesis best fits all the evidence.

- A) The library release degraded performance for every service that took it.
- B) The library release likely degraded Licensing; Benefits' degradation has a different, earlier cause; Grants may not exercise the affected code path.
- C) The library release is innocent, since Grants took it and is unaffected.
- D) Benefits' degradation proves the problem predates the library and therefore Licensing's issue is unrelated to the release.

**Correct answer: B**

**Explanation:** A is falsified by Grants; Benefits' degradation began four days before the release existed in its build, ruling out the release as its cause; C treats one unaffected consumer (compatible with path-dependence) as exoneration; D lets an unrelated earlier problem launder away a genuine same-day coincidence at Licensing. This tests fitting a hypothesis to every service's own timeline before aggregating, since shared infrastructure produces correlated symptoms that must still be read individually.

**Question 11 (hard) — Prioritising standards effort by leverage**

Capacity for one standards initiative this quarter across ten teams. Evidence: (a) three teams lack automated accessibility checks, with roughly four times the manual-audit defect rate of the other seven; (b) all ten teams format code inconsistently, generating low-heat review comments; (c) two teams use an outdated build tool, adding roughly five minutes per build; (d) one team has a user-harming performance issue on its most-used page, fixable with two days of guided pairing. Ask for the most defensible allocation of the quarter.

- A) Initiative (b) — it touches all ten teams, the widest reach.
- B) Spend two days on (d) immediately, then drive (a) as the quarter's initiative.
- C) Initiative (c) — build speed compounds across every developer's day.
- D) Initiative (a) alone, declining (d) as one team's local problem.

**Correct answer: B**

**Explanation:** (d) is cheap, urgent and user-facing — triage, not a quarter's initiative, and declining it (D) mistakes tidiness for leadership. Among real initiatives, (a) targets a four-times defect-rate gap durably, outranking (b)'s wide-but-shallow reach and (c)'s modest benefit. This tests weighing leverage as reach multiplied by depth of harm addressed, not reach alone, and sequencing an urgent small fix ahead of a strategic initiative rather than choosing between them.

**Question 12 (hard) — Deduction under governance constraints**

Rules: (i) any shared design system change requires a published RFC open for comment at least ten working days; (ii) security fixes are exempt from (i) but must be disclosed to all teams within 24 hours of release; (iii) breaking changes additionally require a major version bump and migration guide. On the 3rd, a release removed a deprecated component (breaking) and patched an XSS vulnerability in another component; no RFC was published; a migration guide and major version bump shipped with the release; all teams were notified on the 4th. Ask which statement is correct.

- A) The release was fully compliant: the security exemption covers the whole release.
- B) The security patch was compliant, but the component removal breached rule (i): the exemption attaches to the security fix, not to unrelated changes shipped alongside it, though rule (iii) was satisfied.
- C) The release breached rule (ii) because notification arrived a day after release.
- D) The release breached rule (iii) because breaking changes also require an RFC.

**Correct answer: B**

**Explanation:** The security exemption attaches to the security fix specifically, not to the release vehicle as a whole, so the unrelated breaking change still needed its ten-day RFC; rule (iii)'s requirements (bump, guide) were both met; notification on the 4th for a release on the 3rd sits within 24 hours as far as the facts show (C overreaches without timestamps); D invents an RFC requirement rule (iii) does not contain. This tests parsing exactly which obligations attach to which entity — exemptions attach to changes, not to the release that carries them.

### Administration tips

- Score for whether the candidate attaches a fact, exemption, or condition to the exact entity it governs rather than a plausible neighbouring one.
- Note whether a hypothesis or conclusion is tested against every piece of given evidence, not a convenient subset.
- Watch for whether the candidate applies a quality gate or threshold as a strict conjunction, uniformly, regardless of a team's excellence on other criteria.
- Score for whether sequential elimination against stated priorities is used explicitly in multi-criteria decisions, with each eliminated candidate's reason named.
- Note whether the candidate distinguishes "carrying" a defect or condition from "experiencing" or "reporting" its symptom.

### Common pitfalls to watch for when scoring

- Crediting a conclusion that fits some of the given evidence (services, rows, timelines) but not all of it.
- Missing when a candidate lets one unaffected or clean case exonerate a cause that is genuinely path-dependent.
- Rewarding a quality-gate judgement where excellence on one criterion is allowed to offset failure on another.
- Accepting an exemption or condition applied to an entity broader than the one it actually attaches to.
- Missing a vacuous argument (one that would justify anything, and therefore justifies nothing) accepted at face value.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace numeric reasoning assessment measures how accurately a candidate interprets, manipulates and draws sound conclusions from numerical information of the kind this role actually produces — coverage percentages, defect rates, Core Web Vitals percentiles, audit finding counts, capacity converted into schedules, and costs compared over sensible time horizons.

Typical format: an online, timed test of 20 to 30 minutes with 15 to 25 questions, each hung on a short table, chart, or data statement. A calculator is usually permitted.

For a lead frontend developer, numeric reasoning sits at the aggregation layer, where data behaves counterintuitively: averages across teams of different sizes mislead unless weighted, a metric can improve in every segment while worsening overall (a mix effect), and a percentage change on a small base can look more dramatic than a larger absolute change elsewhere. Because teams quote a lead's numbers onward, an arithmetic slip does not stay a slip.

### How this assessment maps to the role

- **Percentages and proportional change** map to **Web performance optimisation** and **Modern development standards**: budgets, regressions, savings and adoption rates.
- **Weighted averages and mix effects** map to assuring quality across teams and **Strategic thinking**: portfolio metrics weighted correctly before they mean anything.
- **Ratios, rates and capacity arithmetic** map to **Leadership and guidance (frontend developer)**: converting team capacity into credible timelines.
- **Cost comparison over time** maps to making and justifying high-impact decisions: comparing cost shapes over a sensible horizon.
- **Reading tables and percentiles** maps to **Communicating information**: reading a percentile table correctly the first time, and translating it faithfully.

### Practice questions

**Question 1 (easy) — Migration progress percentage**

180 components in a design-system migration; 45 migrated so far. Ask for the percentage complete.

- A) 20%
- B) 25%
- C) 30%
- D) 40%

**Correct answer: B**

**Explanation:** 45÷180=25%. This tests basic part-whole percentage calculation, and in a strong answer, noting that "25% of components" and "25% of the effort" can differ if components vary in cost.

**Question 2 (easy) — Mean of a portfolio metric**

Five services' 75th-percentile LCP: 2.8, 2.4, 3.0, 2.2, 2.6 seconds. Ask for the mean.

- A) 2.5 s
- B) 2.55 s
- C) 2.6 s
- D) 2.7 s

**Correct answer: C**

**Explanation:** Sum 13.0 ÷ 5 = 2.6. This tests basic averaging, and in a strong answer, recognising this unweighted mean treats a high-traffic and a low-traffic service equally — fine for a quick glance, misleading for an investment decision.

**Question 3 (easy) — Splitting effort by ratio**

A 40-day quarter split between bug fixes, new components and maintenance in ratio 2:3:5. Ask how many days go to new components.

- A) 8
- B) 10
- C) 12
- D) 20

**Correct answer: C**

**Explanation:** 10 parts total, 4 days/part, new components=3×4=12. This tests the standard ratio method, checkable by summing all three categories back to 40.

**Question 4 (moderate) — Percentage points across a portfolio**

Average frontend test coverage rises from 72% to 81% over two quarters. Ask which statement is accurate.

- A) Coverage rose 9%, a modest gain.
- B) Coverage rose 9 percentage points, a relative increase of 12.5%.
- C) Coverage rose 12.5 percentage points.
- D) Coverage rose 9 percentage points, a relative increase of 9%.

**Correct answer: B**

**Explanation:** Absolute change 9 points; relative change 9÷72=12.5%. This tests keeping percentage-point and relative change distinct — a lead presenting portfolio trends is expected to state both, correctly labelled, resisting both understatement (A) and unlabelled figures.

**Question 5 (moderate) — Weighted defect rate across teams**

Team A: 40 points, 2.0 defects/10 points. Team B: 60 points, 1.5/10. Team C: 100 points, 1.0/10. Ask for the programme's overall defect rate per 10 story points.

- A) 1.5
- B) 1.35
- C) 1.17
- D) 1.25

**Correct answer: B**

**Explanation:** Total defects (8+9+10)=27; total points 200; rate 27÷20=1.35. This tests re-deriving an aggregate rate from counts over totals, rather than averaging the three rates unweighted (1.5, option A) — the largest team's better quality carries the true rate down.

**Question 6 (moderate) — Comparing tooling costs over time**

Tool A: £15/developer/month for 40 developers. Tool B: £5,000/year flat plus a one-off £50/developer onboarding in year one. Ask which is cheaper over two years, and by how much.

- A) Tool A, by £2,400
- B) Tool B, by £2,400
- C) Tool B, by £4,400
- D) They cost the same

**Correct answer: B**

**Explanation:** Tool A: £14,400 over 2 years. Tool B: £10,000+£2,000=£12,000. Difference £2,400. This tests computing both totals fully, including a one-off cost easy to forget (the trap in C), and in a strong answer, noting the horizon changes the margin's size, which matters when a board probes sensitivity.

**Question 7 (moderate) — Reading a Core Web Vitals table**

Pass rule: p75 LCP ≤ 2.5s. Licensing p75 2.3; Grants 2.6; Benefits 2.4; Passports 2.9 (p50 and p95 also given but irrelevant to the rule). Ask how many services fail the loading metric.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: B**

**Explanation:** Grants and Passports fail; Licensing and Benefits pass. This tests reading only the column a stated rule actually names — Benefits' alarming p95 tempts an extra failure the rule does not test for.

**Question 8 (moderate) — Sequential percentage changes**

500 active community members; +10% in H1, then −10% in H2. Ask for the year-end total.

- A) 500
- B) 495
- C) 505
- D) 490

**Correct answer: B**

**Explanation:** 500×1.10×0.90=495. This tests recognising that a percentage rise and fall of equal size do not cancel, since the fall applies to the larger, already-grown base.

**Question 9 (hard) — Reverse percentage on a performance win**

"After optimisation, the payload is 208KB — a 35% reduction." Ask for the original payload.

- A) 280.8 KB
- B) 297 KB
- C) 320 KB
- D) 343 KB

**Correct answer: C**

**Explanation:** 208÷0.65=320, checked forwards (320×0.65=208). This tests dividing by (1−rate) rather than adding the rate to the reduced figure (208×1.35=280.8, the classic reverse-percentage error), a reflex worth having ready in a show-and-tell.

**Question 10 (hard) — Capacity into a credible timeline**

180 components to migrate; 3 teams, each 12 components/2-week sprint at full capacity, but 25% of every team's capacity is reserved for live-service support. Ask how many sprints and weeks the migration will take.

- A) 5 sprints — 10 weeks
- B) 6 sprints — 12 weeks
- C) 7 sprints — 14 weeks
- D) 8 sprints — 16 weeks

**Correct answer: C**

**Explanation:** Usable capacity 3×12×0.75=27/sprint; 180÷27=6.67, rounding up to 7 sprints, 14 weeks. This tests applying the capacity reservation before dividing and rounding partial sprints up rather than down — the difference between a defensible timeline and a credibility problem in week three.

**Question 11 (hard) — Valuing an automation initiative**

Manual audits currently find 4.8 defects/audit across three teams; embedded-check teams find 1.2/audit; 10 audits/year total. Ask for the projected reduction in audit-stage defects per year if all three teams reach the embedded rate.

- A) 12
- B) 36
- C) 48
- D) 3.6

**Correct answer: B**

**Explanation:** Current 48/year, projected 12/year, reduction 36. This tests the arithmetic, and in a strong answer, flagging the causal caveat — the 1.2 rate is an observed comparison, not a guaranteed transfer, so "up to roughly 36" is the honest phrasing for a business case.

**Question 12 (hard) — A mix effect in redesign results**

Desktop: old 8,000/10,000 (80%), new 4,100/5,000 (82%). Mobile: old 2,000/5,000 (40%), new 4,200/10,000 (42%). A stakeholder says overall completion fell from 66.7% to 55.3%, so the redesign failed. Ask what the data actually shows.

- A) The stakeholder is right: completion fell overall, so the redesign performs worse.
- B) The redesign improved completion within both segments (desktop 80% to 82%, mobile 40% to 42%); the overall fall is explained by the traffic mix shifting toward mobile, which completes at a lower rate on any design.
- C) The data is contradictory and unusable.
- D) Desktop improved but mobile declined, and the two roughly cancelled.

**Correct answer: B**

**Explanation:** Both segments genuinely improved; the aggregate fell only because mobile sessions doubled while desktop halved, shifting the mix toward the harder-to-complete segment. This tests recognising a mix effect (Simpson's paradox) — decomposing an alarming aggregate into segments before accepting a stakeholder's headline conclusion.

### Administration tips

- Score for whether the candidate re-derives an aggregate rate from counts and totals rather than averaging rates unweighted.
- Note whether percentage-point change and relative percentage change are kept distinct and both correctly labelled.
- Watch for whether the candidate reads only the column a stated rule actually names, resisting an alarming neighbouring figure.
- Score for whether a capacity or reverse-percentage calculation accounts for a reserved allowance or one-off cost easy to overlook.
- Note whether an aggregate trend that contradicts its segments is decomposed (checked for a mix effect) before being accepted.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of rates across teams or services of unequal size.
- Missing confusion between percentage-point change and relative percentage change.
- Rewarding a threshold judgement based on a column the stated rule does not reference.
- Accepting a capacity or cost calculation that omits a reserved allowance or one-off fee.
- Missing when a candidate accepts an alarming aggregate figure without checking whether a mix effect explains it.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what a piece of written material establishes. At lead level the material is accessibility regulation, design system and technical governance, service standards, supplier documentation and research reports — writing that allocates obligations and authority, which a lead is frequently relied upon to read correctly.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, Cannot Say means neither — regardless of what the candidate knows professionally, which is the principal hazard at this level, since a confident wrong answer in this format is the same shape as a confident wrong answer in a governance meeting.

Three specifics matter: "must", "should" and "may" are terms of art in service standards, and reading one as another means blocking permitted work or waiving a requirement; governance documents allocate authority precisely, and approves, endorses, is consulted, may direct and is informed describe genuinely different arrangements; and an exception for one thing establishes that a rule applies to everything else, saying nothing about a neighbouring case.

### How this assessment maps to the role

- **Reading accessibility regulation precisely** maps to **Accessibility**: championing it to internal and external stakeholders.
- **Reading standards** maps to **Modern development standards**: advising on how standards apply.
- **Reading governance and authority** maps to **Leadership and guidance (frontend developer)**.
- **Reading supplier and interface documentation** maps to **Systems integration (frontend developer)**.
- **Reading strategy** maps to **Strategic thinking**.
- **Reading research** maps to **User focus (frontend developer)**.

### Practice questions

*Passage A — for Questions 1 to 4*

"Services must work without JavaScript for all essential functions, unless the departmental technical design authority has agreed an exemption. Where an exemption is agreed, the service must still work with assistive technologies and must degrade gracefully when JavaScript fails to load. Services should be tested on the browsers used by at least 95% of the service's users, and must be tested with at least one screen reader on at least one desktop and one mobile platform. Testing on a physical device is preferred to emulation. Where a service is used predominantly on mobile, mobile testing should be prioritised accordingly."

**Question 1 (easy)**

Statement: A service with an agreed exemption need not work when JavaScript fails to load.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Even with an exemption, the service "must degrade gracefully when JavaScript fails to load." This tests recognising the second sentence closes exactly this inference — an exemption from working without JavaScript is distinct from an exemption from degrading gracefully when it fails.

**Question 2 (moderate)**

Statement: A service must be tested on the browsers used by at least 95% of its users.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage uses "should" for browser coverage and "must" for screen reader testing in the same sentence, a deliberate contrast. This tests reading a modal verb precisely — browser coverage is negotiable under delivery pressure and screen reader testing is not, and a lead reading them as equivalent trades away the wrong one.

**Question 3 (moderate)**

Statement: Emulated device testing does not satisfy the mobile screen reader requirement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** "Preferred to emulation" ranks two acceptable options; it does not establish exclusion of the lesser one. This tests distinguishing a preference from a prohibition — professional confidence that emulated screen reader testing is nearly worthless does not change what the passage states.

**Question 4 (hard)**

Statement: A service used predominantly on desktop must still be tested with a mobile screen reader.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The screen reader requirement is unconditional; the prioritisation clause adjusts emphasis between two required activities, not the baseline obligation. This tests recognising a prioritisation clause as ranking rather than excluding — the same shape of error as reading a preference as a prohibition.

*Passage B — for Questions 5 to 8*

"The technical design authority approves architectural decisions affecting more than one service. Decisions confined to a single service are made by that service's lead developer, who must notify the authority where the decision departs from a published pattern. The authority may direct that a single-service decision be brought to it for approval where in its view the decision sets a precedent. The head of engineering endorses the authority's decisions and may return a decision for reconsideration once, with reasons; a decision returned and reaffirmed by the authority stands."

**Question 5 (easy)**

Statement: A decision confined to a single service is made by that service's lead developer.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly, with two qualifications that do not change who makes the decision by default. This tests straightforward direct extraction.

**Question 6 (moderate)**

Statement: The head of engineering can overturn a decision of the technical design authority.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The head of engineering has a single power of return, with reasons, once — and "a decision returned and reaffirmed by the authority stands" closes the inference explicitly. This tests distinguishing endorsement plus a limited return power from a veto.

**Question 7 (moderate)**

Statement: A lead developer making a single-service decision that follows a published pattern has no obligation to notify the authority.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The notification duty is conditioned on departing from a published pattern; following the pattern means the condition is not met. This tests reading a qualified obligation correctly, while noting the authority's independent call-in power (based on precedent-setting, not notification) is unaffected.

**Question 8 (hard)**

Statement: The authority can require a single-service decision to come to it only where the decision departs from a published pattern.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The call-in power is conditioned on the authority's own view that a decision "sets a precedent" — an independent test from departing from a pattern. This tests catching when a condition attached to one mechanism (notification) is wrongly imported into a separate mechanism (call-in) — a common and consequential misreading of governance text.

*Passage C — for Questions 9 to 12*

"A study of 62 participants compared two error-handling patterns on a benefits application form. Pattern A displayed errors inline beside each field; pattern B displayed an error summary at the top of the page with links to each field, and also displayed errors inline. Screen reader users completed the form more often with pattern B, at 88% against 61%. Sighted users showed no significant difference between patterns. The study did not measure completion time. Participants were recruited to include a range of assistive technology users. The research team recommends pattern B."

**Question 9 (moderate)**

Statement: Screen reader users completed the form more often with pattern B.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly with figures (88% vs 61%). This tests direct extraction, noting the passage separately and carefully scopes this finding to screen reader users, which the following questions turn on respecting.

**Question 10 (moderate)**

Statement: Pattern B is better for all users.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** "No significant difference" for sighted users is not evidence of benefit for them, so "better for all users" overreaches what the passage supports. This tests the more precise, defensible claim (a large benefit for one group, no detriment to the other) against a broader one the evidence does not establish.

**Question 11 (moderate)**

Statement: Pattern B takes longer to complete than pattern A.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states explicitly that completion time was not measured. This tests recognising and reproducing a study's own stated boundary rather than letting it quietly disappear when the finding is cited elsewhere.

**Question 12 (hard)**

Statement: The 27-point difference for screen reader users was statistically significant.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Significance testing is reported for the sighted-user comparison ("no significant difference") but not for the screen reader figures, which appear as raw percentages. This tests noticing an asymmetry — a test applied to one comparison and not another — exactly where an over-strong claim tends to get built.

### Administration tips

- Score for whether the candidate distinguishes "must", "should" and "may" precisely, especially where two appear in the same sentence with deliberate contrast.
- Note whether a candidate distinguishes a preference or ranking from a prohibition or exclusion.
- Watch for whether a condition attached to one governance mechanism is correctly kept separate from a different, neighbouring mechanism.
- Score for whether "no significant difference" is read as absence of evidence for one group, not evidence of equal benefit across all groups.
- Note whether a candidate reproduces a study's own stated boundaries (what was and was not measured or tested) when citing a finding.

### Common pitfalls to watch for when scoring

- Crediting a reading that treats an exemption from one obligation as an exemption from all related obligations.
- Missing when a candidate reads "should" as mandatory in a passage that deliberately uses both "should" and "must".
- Rewarding a reading of "is preferred to" as excluding the less-preferred alternative.
- Accepting an inference that a condition attached to one governance power (e.g. notification) also governs a separate power (e.g. call-in).
- Missing when a candidate assumes a reported percentage difference was significance-tested when the passage does not say so.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. At lead level the scenarios involve setting direction across teams not directly managed, assuring quality without becoming a bottleneck, mentoring, resolving disputes among peers, and advocating for users who are not in the room.

The commonest formats ask for the most and least effective response, or a rating, scored against a key derived from experienced practitioners at comparable levels.

Three patterns run through the strong answers: authority at this level is largely borrowed, since teams follow direction because they respect the reasoning, and spending that credibility on a preference leaves less for something that matters; a lead is frequently the most senior person present who understands what a design decision does to users with access needs, and silence is read as endorsement; and assurance across teams fails in one of two ways — too light changes nothing, too heavy makes the lead the queue everything waits in.

### How this assessment maps to the role

- **Setting direction across teams** maps to setting direction and assuring quality of development across teams.
- **Resolving disputes** maps to **Leadership and guidance (frontend developer)**: building consensus among independent stakeholders.
- **Mentoring and community** maps to **Community collaboration** and coaching and mentoring.
- **Accessibility advocacy** maps to **Accessibility**.
- **Technology judgement** maps to identifying appropriate technology and approaches.
- **Strategy** maps to **Strategic thinking**.

### Practice questions

**Question 1 (easy) — Accessibility under a deadline**

Two days before release, a component across three services is found not to be keyboard operable; fixing it properly means restructuring it. Ask for the most and least effective response.

- Option A: Release and fix in the next sprint.
- Option B: State plainly what it means — keyboard and screen reader users cannot use this part of three services — and put the options to the service owners, including releasing without the component, releasing a simpler accessible version, or delaying.
- Option C: Refuse to release.
- Option D: Add keyboard handlers as a quick patch.

**Most effective: B. Least effective: A.**

**Explanation:** B puts a plainly stated consequence and real options to the accountable owners, including a middle option frequently overlooked under pressure. A is least effective, releasing a known barrier across three services with a poor track record for "next sprint" fixes. This tests routing an accessibility trade-off to its owner rather than resolving it unilaterally (C) or patching it superficially (D).

**Question 2 (easy) — A team's technology choice**

A team wants to adopt a framework the lead would not have chosen, with sound reasoning. Ask for the most and least effective response.

- Option A: Direct them to the organisation's usual choice.
- Option B: Ask what problem it solves that the usual choice does not, and weigh the answer against the costs that fall on others — recruitment, shared components, support at 3am — because a defensible decision made by the team that will live with it is a good outcome even when it differs from the lead's own.
- Option C: Let them proceed; it is their service.
- Option D: Ask them to trial it first.

**Most effective: B. Least effective: A.**

**Explanation:** B tests the one thing genuinely the lead's business — costs landing outside the team. A is least effective: overruling sound reasoning with the default teaches the team that direction means guessing what the lead would have picked, yielding less honest reasoning next time.

**Question 3 (moderate) — Becoming the bottleneck**

Teams have started routing every frontend decision through the candidate for approval, who is now the delay on several. Ask for the most and least effective response.

- Option A: Work through the queue faster.
- Option B: Define what genuinely needs the candidate's involvement — usually cross-cutting patterns, accessibility-critical components and shared code, not internal implementation choices — and publish that, so teams can proceed on their own for most decisions.
- Option C: Delegate approvals to senior developers in each team.
- Option D: Stop approving and let teams decide.

**Most effective: B. Least effective: A.**

**Explanation:** B addresses the structural cause by making the boundary explicit, telling teams what they are trusted with. A is least effective: working faster confirms the arrangement, and the queue reforms at the new speed.

**Question 4 (moderate) — A dispute between two teams**

Two teams have built different components for the same purpose and each defends theirs; it has become slightly personal. Ask for the most and least effective response.

- Option A: Pick the better component and require both to use it.
- Option B: Get them together and establish what each component was built to do, because two teams defending positions usually have two different requirements that were never compared — and address the personal element separately, since it does not become acceptable because the technical disagreement was real.
- Option C: Let each keep its own.
- Option D: Escalate to their delivery managers.

**Most effective: B. Least effective: C.**

**Explanation:** B treats both the technical disagreement (usually a comparison never made) and the conduct issue as separate problems needing separate treatment. C is least effective: it accepts permanent duplication and leaves the relationship damaged.

**Question 5 (moderate) — Adapting feedback**

A developer being mentored has not acted on feedback given twice. Ask for the most and least effective response.

- Option A: Give the feedback again more firmly.
- Option B: Ask what has made it hard to act on — disagreement not voiced, a lack of concrete understanding, or a team constraint — because feedback given twice without effect is usually a problem with the feedback rather than with willingness.
- Option C: Raise it with their line manager.
- Option D: Stop giving that feedback.

**Most effective: B. Least effective: C.**

**Explanation:** B names three realistic causes, each with a different remedy, treating a second failure as information about how the feedback is being given. C is least effective: escalating a mentoring conversation to a line manager converts a developmental relationship into a performance issue and ends the mentoring.

**Question 6 (moderate) — A design that cannot be built accessibly**

A designer has produced an interaction that would be difficult to make accessible. Ask for the most and least effective response.

- Option A: Build it as specified and note the accessibility risk.
- Option B: Go to them early with the specific problem — which users would struggle and why — and work on an alternative together, because the interaction is usually achievable in a different form and a design change costs a fraction of a built-code change.
- Option C: Build a different interaction that is accessible.
- Option D: Ask them to redesign it.

**Most effective: B. Least effective: A.**

**Explanation:** B is early, specific and collaborative — the combination that actually gets designs changed, while the design remains cheap to alter. A is least effective: it knowingly builds a barrier and records the fact, changing nothing for users while reading as covering oneself.

**Question 7 (hard) — Assuring a decision you disagree with**

A team's approach meets every set standard but is not what the candidate would have done. Ask for the most and least effective response.

- Option A: Pass it and record concerns.
- Option B: Pass it, because assurance is against the standard and using it to enforce preference destroys the distinction between what is required and what is preferred — and separately consider whether the gap means the standard is missing something worth adding.
- Option C: Pass it conditionally.
- Option D: Ask them to change it.

**Most effective: B. Least effective: D.**

**Explanation:** B holds the integrity of assurance — predictability depends on assuring against the standard, not personal preference — and does the useful thing with the disagreement by asking whether the standard itself needs updating. D is least effective: it uses assurance authority to impose preference, which teaches teams to optimise for the reviewer rather than the standard.

**Question 8 (hard) — Pressure to drop a standard**

A delivery manager asks whether teams could move faster by dropping the progressive enhancement baseline, noting "almost everyone has JavaScript." Ask for the most and least effective response.

- Option A: Explain that it is a government service standard requirement.
- Option B: Answer the speed question honestly — for some components the baseline costs real time, for many it costs almost nothing — and set against it the sessions where scripts fail for reasons unrelated to whether users "have JavaScript," with what those users would be unable to do.
- Option C: Explain that JavaScript fails more often than people think.
- Option D: Agree, provided critical journeys keep a baseline.

**Most effective: B. Least effective: A.**

**Explanation:** B answers honestly, including where the baseline genuinely costs time, and correctly reframes the risk as network and error failures rather than user choice. A is least effective: answering a cost question with an authority claim invites a search for an exemption instead of a real answer.

**Question 9 (hard) — Evidence against your own standard**

Data suggests a testing standard introduced across four teams costs significant time and has not measurably reduced defects. Ask for the most and least effective response.

- Option A: Improve the measurement; some benefits are hard to capture.
- Option B: Publish the finding, including that it is the candidate's own standard, and narrow it to where the benefit is demonstrable or withdraw it — because four teams paying daily for an unmeasurable benefit is a real cost, and withdrawing on evidence makes every remaining standard more credible.
- Option C: Retain it; testing standards prevent problems that never appear in defect data.
- Option D: Reduce its scope quietly.

**Most effective: B. Least effective: C.**

**Explanation:** B allows the right resolution and earns the credibility that only comes from doing it openly. C is least effective, since it is unfalsifiable and would keep any unproductive standard in place indefinitely.

**Question 10 (hard) — Contradicting a senior stakeholder**

In a large meeting, a director makes a wrong technical claim that will lead to a poor decision. Ask for the most and least effective response.

- Option A: Correct it immediately; the decision matters.
- Option B: Add the correcting information without framing it as a correction — supplying the relevant fact and its implication — and follow up directly afterwards if the decision is still heading the wrong way, because the goal is the decision rather than the record of who was right.
- Option C: Say nothing and raise it afterwards.
- Option D: Ask a question that leads them to the correct position.

**Most effective: B. Least effective: C.**

**Explanation:** B gets the information into the room without a public contradiction that hardens the position. C is least effective: large meetings are frequently where decisions are actually made, and "afterwards" often means reopening something already settled.

**Question 11 (hard) — A community that has stopped sharing**

The frontend community of practice convened has become quiet, with few contributors. Ask for the most and least effective response.

- Option A: Ask people to contribute more.
- Option B: Find out what changed — whether sessions stopped being useful, the format rewards a few confident voices, or people are too busy to prepare something — because a community that went quiet has a cause, and each cause has a different fix.
- Option C: Reduce the frequency of sessions.
- Option D: Present more personally to restart momentum.

**Most effective: B. Least effective: A.**

**Explanation:** B diagnoses before acting, naming three usual causes each with a distinct remedy. A is least effective: asking busy people to contribute more, without changing anything, produces guilt rather than contributions.

**Question 12 (hard) — Your own architectural decision has aged**

An architecture set two years ago is now the main source of friction for three teams; a newer developer proposes replacing it. Ask for the most and least effective response.

- Option A: Defend it; it was right at the time.
- Option B: Engage with the proposal on its merits, say plainly that the original assumptions have not held, quantify what the friction is costing, and get someone other than the original decision-maker to assess the options, because a view of one's own architecture carries a discount that cannot be argued away.
- Option C: Agree to the replacement.
- Option D: Ask them to write a full proposal.

**Most effective: B. Least effective: A.**

**Explanation:** B is honest about the decision's history, quantifies the current cost, and removes the credibility problem by handing the recommendation to an independent assessor. A is least effective: it usually wins on authority alone and teaches three teams that raising problems is pointless.

### Administration tips

- Score for whether the candidate scopes their own involvement deliberately (what genuinely needs assurance, what does not) rather than either accelerating a bottleneck or abandoning oversight.
- Note whether a decision or dispute is moved from positions or preferences to underlying requirements or costs before being resolved.
- Watch for whether the candidate applies the same scrutiny to their own standard, architecture, or past decision as to anyone else's.
- Score for whether feedback that has not landed is treated as information about the feedback itself, not solely about the recipient's willingness.
- Note whether escalation or public correction is used only where a direct, private route has genuinely failed or was unavailable.

### Common pitfalls to watch for when scoring

- Crediting a response that patches or hides an accessibility failure so it appears resolved.
- Missing when a candidate overrules sound reasoning with a default preference rather than testing it against actual cross-team costs.
- Rewarding a response that resolves an approval queue by working faster rather than by scoping what needs the candidate's involvement.
- Accepting a public correction of a colleague or stakeholder where a private, less confrontational route was available and untried.
- Missing when a candidate defends their own standard or architecture on unfalsifiable or unexamined grounds that would not be accepted from anyone else.

## Conclusion

This guide has worked through pattern recognition across teams and codebases, deduction under governance constraints and stated exceptions, multi-constraint scheduling that surfaces a binding external factor, and applied problem solving that fits a hypothesis to every piece of evidence rather than a convenient subset; portfolio-level numeracy — weighted rates, mix effects, capacity converted honestly into timelines, and costs compared over a stated horizon; the discipline of reading standards, governance documents and research reports at the precision their modal verbs, exceptions and stated boundaries demand; and the situational judgement calls that define lead-level work — scoping assurance so it catches what matters without becoming a bottleneck, moving disputes from positions to requirements, and applying the same scrutiny to one's own standard, feedback and past decisions as to anyone else's.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around what a fact or condition actually attaches to, and whose decision a scenario belongs to. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
