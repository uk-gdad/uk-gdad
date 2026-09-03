# Principal Infrastructure Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for principal infrastructure engineer, within the UK Government Digital and Data profession — an accomplished technical leader, in the framework's own words. These assessments are job-specific: they use the kinds of artefacts a principal infrastructure engineer genuinely handles — strategic and tactical engineering roadmaps, supplier relationship and contract portfolios, enterprise design authorities' papers, procurement strategies, technology investment cases, and the standards and practices that govern engineering across an area of responsibility — and the kinds of decisions genuinely made: designing systems characterised by high levels of risk, impact, and complexity; controlling system design practice within an enterprise architecture; developing implementation and procurement strategies consistent with business needs; owning operational relationships with suppliers; and ensuring the organisation derives maximum value from its investment in technologies.

Principal work is judgement exercised at enterprise scale, and the abilities these assessments sample — detecting the pattern across a portfolio, reasoning validly from strategy to consequence, reading contracts and governance papers with forensic precision, and choosing well when strategy, suppliers, politics, and engineering truth collide — are precisely the abilities a principal's decisions amplify. A misjudged trend at engineer level costs a ticket; at principal level it misdirects a roadmap and several years of investment.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why employers use it for this role, a mapping of the assessment dimensions to the specific named skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring. Items progress from easy through moderate to hard, and the hard items are deliberately principal-shaped: enterprise trade-offs, strategic ambiguity, supplier portfolio judgement, design authority governance, and the stewardship of engineering culture across teams influenced more than commanded.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. For a principal infrastructure engineer, the materials are those of enterprise technical leadership: multi-year roadmaps and their assumptions, portfolio-level risk and investment data, enterprise architecture principles and the designs that claim compliance with them, supplier ecosystems with interlocking contracts, and the second-order consequences of standards decisions that will bind hundreds of engineers.

The typical format is an online, timed test lasting 15 to 30 minutes, with 20 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a comparable level; adaptive difficulty is standard, and speed and accuracy are usually reported separately.

At principal level, the cognitive demand has three distinctive properties. First, horizon: reasoning is about systems whose failure modes have not happened yet — roadmaps are deductions about futures. Second, indirection: almost everything known arrives through several layers of filtering — programme reporting, supplier account management, architecture papers written to pass review — so reasoning must include reasoning about how the information was produced. Third, leverage: conclusions become other people's premises; an error ratified propagates through every team and supplier that treats the judgement as settled. Employers assess cognition at this level because principals are the point where technical reasoning and organisational consequence meet at maximum amplification.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Service focus** skill — seeing the bigger picture by taking groups of services and investigating how to get the best of underlying services means detecting portfolio-level patterns invisible within any single service — and to the **Ownership and topic** duty to be proactive in searching for potential problems.
- **Logical deduction** maps to the **Systems design** skill: designing systems of high risk, impact, and complexity, controlling design practice within an enterprise architecture, and ensuring adherence to technical strategies and standards all require valid reasoning from principles to consequences at scale. It also maps to the role-level duty to develop strategic and tactical engineering roadmaps that are future-proofed.
- **Error checking** maps to the **Testing** skill (managing testing activities and managing risks within them) and the **Coding and scripting** capability: at principal level, error checking means auditing designs, strategies, and analyses others have certified, including finding the flaw in reasoning presented as finished.
- **Prioritisation** maps to the duty to ensure the organisation derives maximum value from investment in technologies: allocation of finite investment, attention, and engineering capacity across a portfolio is prioritisation with a balance sheet.
- **Applied problem solving** maps to the **Troubleshooting and problem resolution** skill (lateral thinking across computing, storage, networking, physical infrastructure, software, COTS, and open source) and the **Problem management** duty to ensure the right actions are taken to investigate, resolve, and anticipate problems.
- **Strategic reasoning about suppliers and procurement** maps to the role-level duty to own operational relationships with suppliers and the **Systems design** duty to develop effective implementation and procurement strategies consistent with business needs.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Portfolio pattern across service groups**

Annual unplanned-outage minutes for four service groups across three years:

| Service group | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Case management | 420 | 380 | 350 |
| Payments | 120 | 115 | 125 |
| Data platform | 60 | 140 | 310 |
| Corporate services | 800 | 780 | 790 |

Which service group most warrants strategic attention?

- A) Corporate services — consistently the worst absolute figures
- B) Case management — still high despite improvement
- C) Data platform — outage minutes are more than doubling year on year
- D) Payments — any outage in payments is unacceptable

**Correct answer: C**

**Explanation:** Read the portfolio dynamically. Corporate services is bad and stable — a known quantity. Case management improves steadily; payments is flat and low. Data platform's sequence — 60, 140, 310 — is multiplicative growth (roughly ×2.3 per year): compounding degradation is the strategic signal, because by the time it tops the absolute table it will be an emergency. Extrapolated one more year, data platform reaches ~700 minutes — rivalling corporate services — and data platforms sit underneath other services, so their degradation exports failure across the portfolio, exactly the **Service focus** skill's concern. Option A ranks by snapshot; option D substitutes a slogan for the data. This tests whether a candidate reads derivatives and dependencies first, absolutes second — strategic attention goes where the trajectory and the blast radius multiply.

**Question 2 (easy) — Deduction from an architecture principle to a design verdict**

Enterprise architecture principles state: "Principle 4: Services must not depend on any technology component for which no supported exit path exists — every strategic platform choice must have a demonstrated migration route to an alternative." A design submitted to the design authority proposes building a new case-processing service on a niche vendor's proprietary workflow engine, noting: "The vendor's platform is excellent, and we have negotiated a ten-year licence." No migration route is described. Which verdict follows from the principle?

- A) The design complies — a ten-year licence removes the dependency risk.
- B) The design does not comply as submitted: the licence secures access to the platform but is not a migration route, and Principle 4 requires a demonstrated exit path.
- C) The design complies if the vendor is financially stable.
- D) The principle does not apply because the workflow engine is not a strategic platform.

**Correct answer: B**

**Explanation:** Apply the principle's actual test: a demonstrated migration route to an alternative. A ten-year licence answers a different question — continued access on agreed terms — and is arguably the opposite of an exit path: long licences deepen commitment; they do not create the ability to leave. Vendor financial stability (option C) mitigates one trigger of needing an exit while leaving the requirement itself unmet. Option D fails on the design's own facts: a workflow engine underpinning a new case-processing service is a strategic platform choice by any reading. Option B states the compliant verdict and its reasoning: not "rejected" but "does not comply as submitted" — this tests the **Systems design** duty of controlling design practice within an enterprise architecture in miniature: principles are tests, licences are not exits, and a verdict names the missing evidence rather than the offending vendor.

**Question 3 (easy) — Error checking an investment summary**

A paper seeking endorsement summarises a storage refresh: "Replacing the ageing arrays will cost £900,000 and reduce annual support costs from £340,000 to £120,000 — the investment therefore pays back in under three years. In addition, the new arrays' compression typically halves capacity consumption, deferring the £600,000 expansion otherwise needed next year; counting this, effective payback is under 18 months. Decommissioning of the old arrays (£80,000) is excluded from the above for clarity."

Which check most needs making before endorsement?

- A) Whether £900,000 is a fair market price for storage arrays.
- B) The arithmetic and its exclusions: with decommissioning included, the true cost is £980,000 against £220,000 annual savings (payback ~4.5 years, not under three), and the 18-month claim depends on a "typical" compression ratio unverified against this estate's actual data.
- C) Whether the support desk prefers the new vendor's interface.
- D) Whether the paper should be reformatted to departmental template.

**Correct answer: B**

**Explanation:** Audit the claims as stated. Annual saving: £340,000 − £120,000 = £220,000. Payback on the stated £900,000: 900,000 ÷ 220,000 = 4.09 years — the paper's "under three years" is wrong even before the excluded decommissioning; including it gives 4.45 years. "Excluded for clarity" deserves particular attention: exclusions relocate cost out of the headline. The 18-month claim stacks a second issue: "typically halves consumption" is a vendor's cross-customer average, and compression ratios depend entirely on data characteristics. Option A is procurement's question and worth asking, but the paper fails on its own internal arithmetic first. This tests the duty to ensure the organisation derives maximum value from technology investment: recompute every payback from raw figures, price every exclusion back in, and convert every "typically" into a test against the estate's own data.

**Question 4 (easy) — Prioritising principal attention**

Monday morning presents four demands: (1) the design authority meets Wednesday to rule on a contentious platform choice; the papers are circulating and a written view would shape the outcome; (2) a supplier's chief technology officer has offered a strategic briefing slot this week on their roadmap — relevant to a renewal decision eight months away; (3) an engineering lead asks for arbitration today on a disagreement between two of their seniors about subnet design in a project's detailed build; (4) a quarterly technology-radar update for the executive is due in three weeks. What allocation is most defensible?

- A) Take item 3 first — technical disagreements need principal-level resolution.
- B) Write the design-authority view today (item 1), schedule the CTO briefing for later this week (item 2), decline item 3's arbitration while offering the lead a framework for deciding it at their level, and calendar item 4.
- C) Items in numerical order as received.
- D) Item 2 first — supplier CTOs outrank internal deadlines.

**Correct answer: B**

**Explanation:** Allocate by where principal judgement is uniquely required and time-bound. Item 1 qualifies on both axes: a contentious platform ruling on Wednesday is enterprise-consequential, and a written view exists to shape the decision only if it lands before positions harden — today. Item 2 is genuinely principal work but its deadline is soft. Item 3 is the disguised test: subnet design within a project's detailed build is squarely a lead-and-senior-level decision, and the request is an upward delegation — arbitrating it would resolve today's dispute while teaching the lead that disagreements route upward. Item 4 needs calendaring discipline, not attention. This tests altitude control: declining the work that pulls a candidate below their level as deliberately as claiming the work only their level can do.

**Question 5 (moderate) — Pattern in supplier portfolio behaviour**

Across a supplier portfolio, over nine months: Supplier A (network) has begun routing minor contract variations through commercial channels rather than agreeing them informally as before; Supplier B (hosting) has slowed discretionary goodwill work and now quotes for items previously absorbed; Supplier C (storage) has requested early renewal discussions eighteen months before expiry, offering attractive multi-year pricing; Supplier D (support) has raised change-request pricing 15% and become punctilious about scope boundaries. Individually each is explicable. What is the most valuable strategic reading of the pattern?

- A) Coincidence — four suppliers, four unrelated commercial postures.
- B) The suppliers are colluding and should be reported to procurement authorities.
- C) The portfolio-wide hardening of commercial behaviour suggests a shared cause worth investigating — market-wide margin pressure, or these suppliers' shared perception of the department (e.g. as a shrinking, riskier, or late-paying account) — and Supplier C's early-renewal offer should be read in that light: attractive pricing that locks in commitment before whatever the suppliers see materialises.
- D) Normal commercial cycling — respond to each item individually as it arises.

**Correct answer: C**

**Explanation:** Individually explicable events with a common direction are the classic weak-signal pattern — the **Service focus** skill's bigger-picture discipline applied to the commercial layer. Four independent suppliers simultaneously shifting from relationship-mode to contract-mode share a family resemblance: each is what a supplier does when it expects the relationship's future to be tighter, riskier, or shorter. Supplier C's offer is the pattern's most actionable element: early renewals at attractive prices are how incumbents convert information asymmetry into lock-in. Option C converts four commercial annoyances into strategic intelligence and a concrete caution on the renewal. Option A dismisses correlation without investigating it; option B leaps from parallel behaviour to conspiracy; option D handles each tree while missing the forest. This tests exactly the failure mode owning supplier relationships at principal level exists to prevent.

**Question 6 (moderate) — Deduction through a future-proofing constraint set**

A roadmap must select a primary compute platform posture for the next five years. Constraints: (i) departmental policy requires exit capability from any strategic platform within 18 months of a decision to leave; (ii) the flagship case system, which must move to the chosen posture within three years, processes data whose residency is restricted to the UK by legislation; (iii) engineering capacity allows the department to maintain deep operational expertise in at most two platform stacks; (iv) the department already runs, and cannot retire within five years, a mainframe stack that consumes one of the two expertise slots. Which posture conclusion follows from the constraints?

- A) Adopt a multi-cloud posture across three public cloud providers for resilience.
- B) The constraints jointly force a single primary platform (one expertise slot remains), which must offer UK-resident data services for the case system, and whose adoption design must build in demonstrable 18-month exit capability from the outset.
- C) The mainframe should be retired to free the second expertise slot.
- D) The residency constraint rules out all cloud platforms.

**Correct answer: B**

**Explanation:** Propagate the constraints. Constraint (iv) fixes the mainframe in one expertise slot; constraint (iii) caps slots at two: exactly one slot remains, so the primary posture is a single platform — option A's three-provider multi-cloud is arithmetically excluded (three stacks plus mainframe equals four). Constraint (ii) filters the candidate set: the platform must provide UK-resident services adequate to the case system — a filter, not (option D) an elimination. Constraint (i) shapes how adoption is engineered: exit capability retrofitted is exit capability fictional. Option C wishes away a stated constraint ("cannot retire within five years") — roadmaps built on dissolving their own givens are the signature failure of future-proofing. This tests whether a candidate propagates a constraint set honestly rather than debating platform preferences before the givens have already decided most of the answer.

**Question 7 (moderate) — Error checking a resilience claim at design authority**

A high-impact design (national reporting service) presents to the design authority claiming: "The service is resilient to any single failure. Compute: active-active across two zones. Database: primary with synchronous replica, automatic failover. Network ingress: dual load balancers. Dependencies: the identity service and the reference-data service are consumed via their published highly-available endpoints. DNS is provided by the departmental standard service. Backups are taken hourly." A board member asks for a view. Which is the most valuable observation?

- A) The design is sound — every listed layer is redundant.
- B) The claim "resilient to any single failure" is tested only against the layers the paper lists; the design's actual failure surface includes what it consumes silently — the departmental DNS service is named but not analysed, and the two dependencies' "published highly-available endpoints" outsource the resilience claim to other teams' assertions without stated evidence; the claim should be restated as conditional on those dependencies, with their failure modes tested.
- C) Hourly backups are insufficient — they should be continuous.
- D) Active-active compute is wasteful — active-passive would be cheaper.

**Correct answer: B**

**Explanation:** Audit the quantifier. "Resilient to any single failure" is a universal claim; the paper enumerates redundancy for the layers it built and hand-waves the layers it consumes — and consumed dependencies dominate real-world outage statistics precisely because each team's resilience analysis stops at its own boundary. DNS is named with no analysis, and the dependencies' resilience arrives as reputation rather than evidence. Option B converts the universal claim into what design authorities should require: a conditional claim with its conditions named and consumption-side failure modes tested. Options C and D are preferences argued without requirements. This tests controlling system design practice at enterprise level — the **Systems design** skill — largely a discipline of making resilience claims match their evidence, especially at the seams between teams where every large failure lives.

**Question 8 (moderate) — Anticipating problems from weak signals**

A problem-anticipation review surfaces three facts from different sources: (a) the virtualisation platform vendor's latest licensing announcement moves per-socket pricing to per-core, roughly tripling list cost at the estate's core counts on next renewal in 14 months; (b) two of five platform specialists have this quarter mentioned recruiters' approaches in passing; (c) the data platform team has begun deploying new workloads onto the virtualisation estate at roughly double the historical rate, per capacity reports. No incident or request connects them. What do these facts jointly constitute?

- A) Three unrelated operational notes for three separate registers.
- B) A converging strategic squeeze on the virtualisation estate: cost per unit is about to triple (a) exactly as consumption accelerates (c), multiplying the renewal exposure — while the expertise to execute any response is at flight risk (b). Jointly they justify immediate action: model the renewal cost under current growth, open alternatives early, and secure the retention of the specialists any response will need.
- C) A case for immediately migrating off the virtualisation platform.
- D) A staffing issue for HR, a licensing issue for procurement, and a capacity issue for the platform team.

**Correct answer: B**

**Explanation:** The **Problem management** duty at principal level — ensure the right actions are taken to anticipate problems — is precisely the synthesis of signals individually unremarkable and jointly explosive. Renewal cost = price per unit × units, and facts (a) and (c) multiply; fact (b) is the response-capacity term — every available answer requires exactly the specialists being recruited. The 14-month runway is the strategic asset: early modelling quantifies the exposure, and opening alternatives now creates negotiating leverage. Options A and D are the same failure at different altitudes — decomposition into silos is how converging risks stay invisible until they arrive together. Option C overreacts before modelling. This tests multiplying the trends, adding the people, and acting while the runway is still a runway.

**Question 9 (moderate) — Maximum-value reasoning on an ageing estate**

An area runs 60 services on infrastructure of mixed age. Analysis of the oldest tranche (12 services) shows: annual operational cost £1.8M (rising ~10%/year as parts and skills grow scarce); modernisation cost £4.2M over two years; post-modernisation operational cost £0.9M/year. Two of the 12 services are candidates for retirement within three years under a policy programme whose decision is expected next year, and those two account for £600,000 of current annual cost and £1.4M of the modernisation estimate. Which investment posture derives maximum value?

- A) Modernise all 12 services now — the payback arithmetic works on the tranche as a whole.
- B) Modernise none until the retirement decision — avoid all risk of waste.
- C) Modernise the 10 services with certain futures now; defer the two retirement-candidate services, running them as-is pending next year's decision — accepting one year of their rising costs (~£60,000 extra) as the price of avoiding up to £1.4M of potentially wasted modernisation.
- D) Retire all 12 services and rebuild everything as new applications.

**Correct answer: C**

**Explanation:** Separate the tranche by decision-relevant difference — future certainty — rather than treating it as one investment. For the two retirement candidates, spending £1.4M modernising services that a decision twelve months away may retire risks near-total waste; deferring costs roughly 10% of £600,000, about £60,000, as an option premium — excellent value to keep £1.4M undeployed until uncertainty resolves. Deferral as a priced option, not indecision, is the heart of maximum-value reasoning: value is derived across time under uncertainty, and the discipline is matching investment irreversibility to decision certainty. Option A buys the uncertainty at full price for tidiness. Option B inverts the error, pausing sound investment to protect a smaller genuine uncertainty. Option D answers a question nobody asked. This tests splitting portfolios along their uncertainty seams, pricing the options, and letting each tranche's certainty level choose its posture.

**Question 10 (hard) — Deduction across an enterprise dependency web**

An enterprise runs: identity service I; network core N; data platform D (depends on N); case system C (depends on I, N, and D); reporting service R (depends on D and I); payments gateway P (depends on I and N, and by policy must never share a maintenance window with C). All planned maintenance requires: the maintained component's dependents to be in their maintenance-tolerant mode, which for C and P requires 5 working days' notice to their business owners; and no two components maintained in the same window unless neither depends on the other. N and D must be maintained within the next two weeks. Which plan is valid and minimises business notices?

- A) Maintain N and D together in one window, with notices to C and P for that window.
- B) Maintain N and D in separate windows: N first (notices to C and P), D second (notice to C only) — three notices total.
- C) Maintain D first in one window (notices to C and R's owners as required, C needing 5 days), then N in a second window (notices to C and P) — with C noticed twice and P once; R requires no formal notice as it is not C or P.
- D) Maintain N and D together, since combining windows always minimises notices.

**Correct answer: C**

**Explanation:** Apply the rules mechanically. Can N and D share a window? The co-maintenance rule permits sharing only if neither depends on the other — but D depends on N: options A and D are invalid regardless of notice arithmetic. So two windows are forced. Notices are required only for C and P. Maintaining D: D's dependents are C and R; C requires formal notice, R does not. Maintaining N: N's dependents are D, C, and P; of these, C and P require notice. Total: C twice (once per window, since C depends on both maintained components) and P once (N's window only, since P does not depend on D): three notices. Option C states the valid plan with correct lists. Option B reaches three notices but garbles the dependency reasoning en route. This tests treating enterprise change scheduling as a constraint-satisfaction problem over a dependency graph: draw the graph, derive dependents per window, apply the notice rule to the derived lists — never to intuition.

**Question 11 (hard) — Auditing a strategy paper's causal logic**

A strategy paper requiring endorsement argues: "Departments that adopted Platform Z report 40% lower infrastructure operating costs than departments that did not (survey, n=22). Our operating costs are above average. Therefore adopting Platform Z will reduce our costs by approximately 40%, funding the migration within two years." Which is the strongest analytical objection?

- A) The survey's sample is too small to mean anything.
- B) The argument reads a cross-sectional association as a transferable causal effect: departments that adopted Z likely differ systematically from those that did not (younger estates, stronger engineering, prior consolidation — the same traits that cut costs with or without Z); adopters' 40% advantage therefore bounds nothing about the post-adoption trajectory here, and our above-average costs may stem from causes Z does not touch. The paper needs a causal bridge: which of our cost drivers does Z address, and what did comparable late adopters actually achieve?
- C) Platform Z is probably overpriced, as popular platforms usually are.
- D) Two years is too optimistic; four years would be safer to promise.

**Correct answer: B**

**Explanation:** Name the inferential move: a cross-sectional comparison is being converted into a forward-looking causal promise. The conversion fails twice: selection (adoption is not random, and the 40% gap bundles Z's effect with everything that distinguishes adopters) and transferability (even a real causal effect transfers only through mechanisms, so the honest analysis maps this department's cost structure against Z's mechanisms). Option B also supplies the repair — the causal bridge and the reference class that matters. Option A gestures at n=22 without engaging the deeper structure. Options C and D quibble price and schedule while accepting the broken inference. This tests principal endorsement as underwriting: a signature converts a paper's logic into the organisation's premise, so the audit standard is the inference chain, not the conclusion's plausibility.

**Question 12 (hard) — Root cause at the practice level**

In eight months, an area has had four significant incidents with superficially unrelated causes: a certificate expiry that monitoring did not catch; a failover that did not work because a config change had never been replicated to the standby; a capacity exhaustion that surprised everyone despite being visible in trend data; and a decommissioned dependency that a live service still called. Each incident's review produced a competent specific fix. A fifth incident of similar character is judged likely. What is the principal-level diagnosis?

- A) Four unrelated incidents, each now fixed — the system is healthier after each fix; no further action needed.
- B) The team needs to be more careful; issue a reminder about diligence.
- C) The common cause is a missing practice layer: each incident is a failure of verification-against-reality — assumed monitoring coverage, assumed replica parity, assumed capacity attention, assumed dependency maps — that specific fixes patch one instance at a time. The systemic remedy is engineering the assurance loop itself: continuous verification that claimed states match actual states, plus review practice that asks "what class of assumption failed?" not just "what broke?"
- D) Hire more staff for the operations team, since four incidents indicate under-resourcing.

**Correct answer: C**

**Explanation:** Look at the four incidents at the right altitude. Specifically they share nothing — PKI, replication, capacity, decommissioning. Structurally they are the same event: an assumption about the estate's state that was never verified against reality, discovered false by an incident. Four instances of one structure in eight months is not four problems; it is one practice gap expressing itself through whatever surface is next. Option C names the generator and the remedy at the correct level — assurance loops that continuously reconcile claimed state with actual state, and incident reviews upgraded to extract the assumption class. Option A reads the component layer only. Option B converts a systems diagnosis into a virtue exhortation. Option D buys capacity to run the same practice gap faster. This tests the principal instinct: when incidents rhyme, stop fixing incidents and fix the rhyme.

### Administration tips

- **Watch for whether a candidate reads derivatives and dependencies rather than absolute values** in a portfolio trend item.
- **Score for whether a candidate matches an artefact (licence, certification, SLA) against the actual requirement** rather than accepting it as proof of the thing it merely gestures at.
- **Note whether a candidate synthesises weak signals across silos** rather than filing each one separately.
- **Keep timing consistent** across candidates for this level.
- **Use the causal-inference item (Question 11) to observe whether a candidate names the specific inferential flaw** (selection, transferability) rather than a generic objection.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that ranks by absolute value when trajectory decides.**
- **Accepting a licence, certification, or SLA as equivalent to the exit path, control, or tested resilience it merely gestures at.**
- **Missing when a candidate lets an exclusion or "typical" figure stand unchallenged in an investment summary.**
- **Crediting an answer that arbitrates a decision below the candidate's stated altitude**, rather than returning it with a framework.
- **Rewarding an answer that fixes a specific incident cause while missing a repeated structural pattern across several incidents.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the quantities this role genuinely handles — and at principal level, nearly every quantity is attached to an enterprise consequence: multi-year investment cases, total cost of ownership across platform generations, supplier contract economics at portfolio scale, capacity and demand modelling for roadmaps, availability engineering across composed systems, and the risk arithmetic that underpins procurement and design-authority decisions. The mathematics remains deliberately accessible — percentages, ratios, weighted averages, compound growth, expected values, and reading tables and charts — but the questions are dense with interpretation, and the recurring test is whether a candidate notices what a correct-looking number fails to show.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions, each presenting realistic data followed by a multiple-choice question. Calculators are usually permitted; rough paper is essential; scoring is norm-referenced and often adaptive.

Employers assess numeric reasoning at this level because principal judgement is expressed largely through numbers that other people then rely on. A roadmap's demand model becomes the budget bid; a total-cost comparison becomes the procurement strategy; availability arithmetic becomes the design authority's ruling; a reading of a supplier's pricing model becomes the department's negotiating position. At this altitude, nobody checks the arithmetic — they act on it. Every item below shows its working in full, because at principal level the working is the deliverable — a figure that arrives without its derivation is advocacy, not analysis.

### How this assessment maps to the role

- **Investment and total-cost arithmetic** maps to the role-level duty to ensure the organisation derives maximum value from investment in technologies, and to the **Systems design** duty to develop effective implementation and procurement strategies consistent with business needs.
- **Multi-year modelling and compound growth** map to the duty to develop strategic and tactical engineering roadmaps that are future-proofed: roadmaps are quantitative claims about the future, and their credibility is their arithmetic.
- **Supplier and contract economics** map to the duty to own operational relationships with suppliers, ensuring services and products are delivered and aligned to contractual requirements: pricing models, indexation, credits, and commitment structures are where contracts actually bind.
- **Availability and risk composition** map to the **Systems design** skill (systems of high risk, impact, and complexity) and the **Testing** duty to manage risks and take preventative action when risks become unacceptable: composed availability and expected-loss arithmetic are how "unacceptable" gets a number.
- **Portfolio and capacity statistics** map to the **Service focus** skill: getting the best from groups of underlying services requires weighted, distribution-aware reading of portfolio data.
- **Anticipatory trend arithmetic** maps to the **Problem management** duty to ensure problems are anticipated: quantified trends are anticipation's raw material.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Portfolio-weighted cost per service**

An area's three platforms host services as follows: Platform 1 — 40 services at a platform cost of £2.0M/year; Platform 2 — 25 services at £1.5M/year; Platform 3 — 10 services at £1.1M/year. What is the average platform cost per service across the portfolio, and which platform is most expensive per service?

- A) £61,300 average; Platform 3 most expensive per service
- B) £58,000 average; Platform 2 most expensive per service
- C) £61,300 average; Platform 1 most expensive per service
- D) £75,000 average; Platform 3 most expensive per service

**Correct answer: A**

**Explanation:** Portfolio average = total cost ÷ total services. Total cost: 2.0 + 1.5 + 1.1 = £4.6M. Total services: 40 + 25 + 10 = 75. Average: 4,600,000 ÷ 75 ≈ £61,300. Per-platform unit costs: Platform 1: £50,000; Platform 2: £60,000; Platform 3: £110,000 — most expensive per service by a wide margin. Option A. Option C pairs the right average with the biggest absolute spender, the classic absolute-versus-unit confusion; option D averages the three unit costs unweighted. This tests unit economics correctly weighted: Platform 3's £110,000 per service is 2.2 times Platform 1's — the signature of a sub-scale platform whose fixed costs are spread over too few tenants, and standard opening evidence for a consolidation line in a roadmap.

**Question 2 (easy) — Compound demand growth for a roadmap**

A roadmap must state when the data platform's storage demand will double. Current demand is 800 TB, growing at 20% per year compound. Approximately when does demand pass 1,600 TB?

- A) During year 3
- B) During year 4
- C) At exactly year 5
- D) During year 6

**Correct answer: B**

**Explanation:** Compound forward: year 1: 960 TB; year 2: 1,152; year 3: 1,382.4; year 4: 1,658.9 — past 1,600 during year 4. Option B. The useful cross-check is the rule of 72: doubling time ≈ 72 ÷ 20 = 3.6 years — consistent with "during year 4". Option C is the simple-growth error: 20% of the original 800 (160 TB/year flat) reaches 1,600 at exactly year 5 — linear thinking applied to a compounding process, which in roadmap terms means procuring capacity a year late. This tests whether a candidate models growth rates in demand, cost, and technical debt as compounding by default, showing the year-by-year table and flagging the doubling time — executives grasp "doubles every 3.6 years" faster than any table.

**Question 3 (easy) — Contract indexation arithmetic**

A five-year supplier contract starts at £1.2M/year with annual indexation at CPI+1%. Assuming CPI runs at 3% throughout (so 4% total annual uplift), what is the year-5 annual charge, and the approximate total across the five years?

- A) Year 5: £1.40M; total: £6.50M
- B) Year 5: £1.44M; total: £6.24M
- C) Year 5: £1.40M; total: £6.00M
- D) Year 5: £1.46M; total: £6.75M

**Correct answer: A**

**Explanation:** Indexation compounds from year 2: year 1: £1.200M; year 2: £1.248M; year 3: £1.298M; year 4: £1.350M; year 5: £1.404M ≈ £1.40M. Total: £6.500M. Option A. Option C's total is the flat-rate trap: 5 × £1.2M = £6.0M is what the contract costs if only the headline rate is read — the £500,000 difference (8.3% of the naive total) is what indexation quietly adds. This tests whether a candidate models indexation explicitly across the full term before comparing any two contracts, and notes which index a clause names — CPI, RPI, and bespoke labour indices diverge by whole percentage points, and the clause is negotiable exactly once, before signature.

**Question 4 (easy) — Reading an availability composition**

A citizen-facing service chain runs: front-end platform 99.95%, API layer 99.9%, case database 99.9%, identity dependency 99.5% — all in series (each must work), independence assumed. What is the approximate end-to-end availability, and which component dominates the loss?

- A) ~99.25%; the identity dependency
- B) ~99.5%; the front-end platform
- C) ~99.8%; the case database
- D) ~99.95%; nothing dominates

**Correct answer: A**

**Explanation:** Series availability multiplies: 0.9995 × 0.999 × 0.999 × 0.995 ≈ 0.99251 ≈ 99.25%. Option A. The loss budget makes the dominance obvious in unavailability terms: the components contribute 0.05%, 0.1%, 0.1%, and 0.5% of downtime respectively — the identity dependency's 0.5% is half the total 0.75% loss, five times the next contributor. Translating to felt time, 99.25% is over five hours of monthly unavailability, and 162 of those minutes belong to identity. This tests the design-authority conclusions the **Systems design** skill draws from thirty seconds of arithmetic: chains are worse than their weakest link's headline suggests, and resilience investment should target the dominant loss contributor, not the components already near-perfect.

**Question 5 (moderate) — Total cost of ownership across options**

Procurement strategy is being set for a workload with a 6-year horizon. Option 1 (on-premises refresh): £3.0M capital in year 0, £400,000/year operations, and a £500,000 mid-life upgrade in year 3. Option 2 (cloud): no capital, £950,000/year, expected to fall 5% per year as optimisation lands (year 1: £950,000; each subsequent year 95% of the previous). Which option is cheaper over six years (years 1–6, with Option 1's capital in year 0 included), and by roughly how much?

- A) Option 1, by about £250,000
- B) Option 2, by about £870,000
- C) Option 1, by about £750,000
- D) They are equal within £50,000

**Correct answer: B**

**Explanation:** Total each option. Option 1: 3.0M + (6 × 0.4M) + 0.5M = £5.9M. Option 2: sum the declining series (year 1: £950.0k; year 2: £902.5k; year 3: £857.4k; year 4: £814.5k; year 5: £773.8k; year 6: £735.1k), totalling ≈ £5.033M. Option 2 is cheaper by roughly £5.9M − £5.033M ≈ £870,000 — option B. This tests whether a candidate rebuilds a total from raw figures rather than trusting a summary that does not survive re-addition. A strong candidate's answer treats a discrepancy between a computed total and any offered figure as a signal to recheck the arithmetic from scratch, not to bend the calculation toward a plausible-looking answer — at principal level, option papers land on desks with totals that do not survive re-addition, and the gap between the honest sum and a plausible-looking one is the size of error an endorsement would otherwise underwrite.

**Question 6 (moderate) — Expected loss and the price of risk**

A design authority must choose between two designs for a payments-adjacent service. Design X costs £2.4M and has an estimated 0.5% annual probability of a major failure event costing £8M (direct costs, recovery, and service credits). Design Y costs £2.9M and reduces that probability to 0.1%. Over a 10-year life (ignore discounting), which design has the lower total expected cost, and what is the expected-value case for the safer design?

- A) X — £500,000 of extra build cost is not justified by rare events.
- B) X has the lower raw expected cost (£2.8M vs £2.98M: X's expected 10-year failure cost is 10 × 0.005 × £8M = £400,000; Y's is 10 × 0.001 × £8M = £80,000, an £320,000 saving that falls short of Y's £500,000 premium) — but the case for Y rests on risk aversion, tail impact beyond £8M, and confidence intervals on the 0.5% estimate, which the decision should weigh explicitly.
- C) Y — its expected total cost is lower by £320,000.
- D) X and Y are exactly equal in expected cost.

**Correct answer: B**

**Explanation:** Compute both totals. X: £2.4M + (10 × 0.005 × £8M) = £2.8M. Y: £2.9M + (10 × 0.001 × £8M) = £2.98M. On raw expected value, X is cheaper by £180,000 — option C misreads the direction, and option B is correct precisely because it reports this honestly and then names what expected value omits: whether the organisation is risk-neutral about an £8M single event (public bodies rarely are); whether £8M is the mean or the modal loss (tail scenarios shift the calculus toward Y); and the estimate's precision (if X's true probability is 1%, its expected failure cost doubles and Y wins on raw numbers). Option A reaches X's conclusion by refusing the arithmetic rather than doing it. This tests the **Testing** duty — manage risks, take preventative action when risks become unacceptable — in quantitative form: "unacceptable" is a decision about probability, impact, tail, and estimate confidence, and the contribution is doing the expected-value arithmetic and stating what it cannot decide.

**Question 7 (moderate) — Supplier commitment tiers against uncertain demand**

A cloud supplier offers three commitment tiers for the coming year: Tier A — pay-as-you-go at £0.10 per unit; Tier B — commit to 8M units at £0.08 (unused commitment forfeited, excess at £0.10); Tier C — commit to 12M units at £0.07 (same terms). Demand forecast: 10M units expected, realistically ranging 8M to 12M. What does each tier cost at 8M, 10M, and 12M usage, and which tier is most robust across the range?

- A) Tier A always — flexibility beats discounts.
- B) Tier B costs £640k / £840k / £1,040k across the range (A: £800k/£1,000k/£1,200k; C: £840k/£840k/£840k throughout) — B is cheapest at low demand, ties C at expected demand, and loses only to C at high demand; at expected demand B saves £160k versus A and ties C, making B the robust choice, with C worth revisiting only if the forecast firms upward.
- C) Tier C always — the lowest unit price wins.
- D) The tiers are equivalent at expected demand.

**Correct answer: B**

**Explanation:** Build the payoff table. Tier A: 8M×0.10=£800k; 10M×0.10=£1,000k; 12M×0.10=£1,200k. Tier B (8M committed at £0.08=£640k floor; excess at £0.10): at 8M: £640k; at 10M: 640k+2M×0.10=£840k; at 12M: 640k+4M×0.10=£1,040k. Tier C: flat £840k at every usage level in range (12M×0.07=£840k, and the commitment covers demand at or below 12M). So B wins at the low end, ties C at the centre, and loses only in the high-demand scenario; C is a bet on demand running high, priced at £200k of extra cost if it runs low. This tests building a payoff table across the demand range and choosing the commitment matched to forecast confidence — never to the unit-price headline alone.

**Question 8 (moderate) — Capacity margin under correlated growth**

Two service groups share a compute pool of 10,000 vCPU. Group 1 currently peaks at 4,200 vCPU, growing 15%/year; Group 2 peaks at 3,300 vCPU, growing 10%/year. Their peaks currently do not coincide — combined observed peak is 6,800 vCPU — but a planned workload change next year will align their peak periods, making peaks additive from year 1 onwards. Policy requires 20% headroom above expected peak. In which year does the pool first breach policy, using year-end figures? (Year 1 = next year.)

- A) Year 1
- B) Year 2
- C) Year 3
- D) The pool never breaches within three years

**Correct answer: A**

**Explanation:** Model the structural change and the growth together. From year 1, peaks are additive, so compute each group's grown peak and sum: Group 1: 4,200 × 1.15 = 4,830; Group 2: 3,300 × 1.10 = 3,630; combined: 8,460 vCPU. Policy ceiling: pool must hold peak × 1.2, i.e. peak must stay below 10,000 ÷ 1.2 ≈ 8,333 vCPU. Year 1's 8,460 exceeds 8,333 — the breach occurs in year 1, option A. This tests whether a candidate models the alignment step change alongside the organic growth rate rather than growth alone: the pre-alignment combined peak (6,800) would grow to only ~7,600 by year 1 on blended growth, comfortably inside policy — modelling growth without the alignment is exactly the error to catch. Structural changes to how demand combines (peak alignment, tenant consolidation, batch rescheduling) frequently dominate organic growth in capacity models, and roadmap arithmetic must model both the step and the slope, or the breach arrives years before the model says.

**Question 9 (moderate) — Weighted risk scoring across a portfolio**

A risk framework scores portfolio risks as probability (1–5) × impact (1–5), and an area's top risks are: R1: legacy platform failure, P4 × I5 = 20; R2: key-supplier insolvency, P2 × I5 = 10; R3: capacity exhaustion, P3 × I3 = 9; R4: security control drift, P3 × I4 = 12. Mitigation funding sufficient for exactly one risk this quarter would change: R1 to P2 (score 10), R2 to P1 (score 5), R3 to P1 (score 3), R4 to P1 (score 4). Which mitigation buys the largest score reduction, and what caveat should accompany a purely score-based choice?

- A) R1 — reduction of 10 points (20→10), the largest available; caveat: linear scores treat a P4×I5 and a P2×I5 as commensurable, but impact-5 events may deserve priority beyond their scores, and score frameworks compress genuinely different risk shapes (likely-moderate versus rare-catastrophic) into single numbers that should inform, not replace, judgement.
- B) R4 — reduction of 8 points, and security always takes priority.
- C) R3 — it achieves the lowest final score (3).
- D) R2 — impact-5 risks must always be mitigated first.

**Correct answer: A**

**Explanation:** Compute each reduction: R1: 20−10=10. R2: 10−5=5. R3: 9−3=6. R4: 12−4=8. R1's 10-point reduction is the largest: option A, whose caveat is the principal-level content. Score frameworks are decision aids with known pathologies: multiplication flattens shape, the P and I scales are ordinal masquerading as cardinal, and impact-5 events arguably warrant attention disproportionate to their score line — which is option D's kernel of truth wrongly absolutised (R2's mitigation buys only 5 points). Option B smuggles a priority rule the framework does not contain; option C optimises the wrong quantity. This tests the **Problem management** anticipation duty: using the arithmetic to rank, stating its compressions explicitly, and letting a board see both the numbers and their limits.

**Question 10 (hard) — Multi-year value model with a step risk**

A roadmap proposes replacing a legacy integration platform. Costs: £1.5M build in year 1, £300,000/year to run from year 2. It replaces a platform costing £700,000/year, whose annual cost rises 10% per year (compounding from £700,000 in year 1), and whose vendor has announced end of support at the end of year 3 — after which departmental policy requires either a paid extended-support contract (£400,000 flat per year, additive to the rising run cost) or migration completion. The new platform go-live completes at the end of year 2 (legacy runs through years 1 and 2; new platform run cost starts year 3; legacy costs cease after year 2). Over years 1–5, what is the net position of proceeding versus retaining the legacy platform with extended support?

- A) Proceeding costs about £3.87M; retaining costs about £5.47M; proceeding is about £1.6M better.
- B) Proceeding costs about £2.4M; retaining costs about £4.3M; proceeding is about £1.9M better.
- C) The options are within £300,000 — effectively neutral.
- D) Retaining is cheaper because build costs exceed run-rate savings.

**Correct answer: A**

**Explanation:** Cost each path over years 1–5. Proceeding: build £1.5M (year 1) + legacy running during transition (year 1: £700k; year 2: £770k, ×1.10) + new platform run £300k/year for years 3–5 (£900k) = 1,500+700+770+900 = £3,870k. Retaining: year 1: £700k; year 2: £770k; year 3: £847k (×1.10) + £400k extended support = £1,247k; year 4: £931.7k + £400k = £1,331.7k; year 5: £1,024.9k + £400k = £1,424.9k; total ≈ £5,473.6k. Difference: proceeding is cheaper by roughly £1.6M — option A. This tests two things: the substantive arithmetic — end-of-support step costs (£400,000/year additive) plus compounding run costs make retention's curve steepen exactly when the alternative's flattens, so "keep the old thing" comparisons must model the step, not just the slope — and the meta-lesson that when a computed total does not match an offered figure, the correct move is to verify from first principles and select on the verified direction and magnitude rather than force-fitting the arithmetic to a plausible answer.

**Question 11 (hard) — Reading a supplier's price benchmark**

At renewal, an incumbent supplier presents: "Independent benchmarking shows our pricing is 8% below the market median for comparable government infrastructure services (benchmark of 14 contracts, conducted by our commissioned analysts)." Procurement asks for a reading. Which is most incisive?

- A) 8% below median is a good position; accept the benchmark as evidence of fair pricing.
- B) The benchmark's force depends on choices the summary conceals: who selected the 14 comparators and by what criteria (comparator selection determines the median); whether "comparable" was tested on service scope, volumes, and service levels or asserted; whether the median is of list prices or achieved prices (negotiated discounts make list-price medians flattering); and what the distribution looks like (8% below a median in a 40%-wide spread is uninformative). Request the comparator criteria, the price basis, and the spread — or commission an independent benchmark — before the figure carries any weight.
- C) Reject the benchmark because supplier-commissioned analysis is always false.
- D) The sample of 14 is too small for any conclusion.

**Correct answer: B**

**Explanation:** Interrogate the figure's construction, not its conclusion. A benchmark's output is determined by four upstream choices, each invisible in the summary: comparator selection, comparability (asserted in one word), price basis (list versus achieved), and dispersion (below-median means little in a wide spread). Option B converts scepticism into the three specific requests that make the evidence testable, plus the independent-benchmark alternative — how the duty to align supplier products and services to contractual requirements and industry best practice operates at renewal: not trusting or dismissing supplier evidence, but specifying the disclosure that would make it admissible. Option A accepts advocacy as audit. Option C inverts it — commissioned analysis is discountable, not automatically false. Option D fixates on n=14 alone. This tests reading benchmarks as arguments wearing the costume of measurements.

**Question 12 (hard) — Deciding under estimate uncertainty**

Two teams have independently estimated the annual cost of an area's unplanned outages, to support an investment case. Team 1 (bottom-up): counted incidents, multiplied by average duration and per-minute business cost — £1.9M ± 0.3M. Team 2 (top-down): surveyed service owners' estimates of productivity and transaction losses — £4.1M ± 1.5M. The investment being justified costs £2.5M and is claimed to eliminate half of outage costs. Which reading best supports a sound decision?

- A) Average the two estimates (£3.0M): half is £1.5M/year saved, so the £2.5M investment pays back in under two years.
- B) Use Team 1's figure — it is more precise, so the case fails (half of £1.9M = £950k/year; payback 2.6 years).
- C) The estimates differ by more than 2:1, which is itself the finding: they are measuring different things (bottom-up captures recorded incidents at modelled rates and typically misses unrecorded degradation and downstream effects; top-down captures perceived total impact and typically double-counts and anchors high). Before averaging anything, reconcile them — decompose what each includes and excludes. The investment case should then be stated across the reconciled range: at the low end payback is ~2.6 years, at the high end ~1.2 years — and whether that range justifies £2.5M is the board's call, made with the uncertainty visible.
- D) Use Team 2's figure — service owners know their businesses best; payback is ~1.2 years.

**Correct answer: C**

**Explanation:** A 2.2× disagreement between two competent estimates is information, not noise to be averaged away. The methods have known, opposite biases: bottom-up incident accounting floors the truth (blind to what was never recorded); top-down owner surveys ceiling it (double-counting shared losses and anchoring on memorable bad days). Averaging (option A) launders two different quantities into one falsely-precise number, and the ±ranges do not even overlap — the formal warning that they measure different constructs. Options B and D each pick a bias and call it rigour or wisdom. Option C does what principal-level numeracy actually is: reconcile before computing, then present the decision across the range with the uncertainty explicit. This tests whether a candidate recognises that maximum value from technology investment is derived, ultimately, from exactly this honesty about what the numbers know.

### Administration tips

- **Score for whether a candidate rebuilds a total from raw figures** rather than trusting a paper's or a benchmark's summary.
- **Watch for whether a candidate compounds what compounds** (indexation, demand growth, cost escalation) rather than applying linear shortcuts.
- **Note whether a candidate models a step change alongside a growth rate** — end-of-support charges, peak alignments, and tier boundaries frequently dominate smooth growth.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.
- **Use the estimate-reconciliation item (Question 12) to observe whether a candidate reconciles conflicting figures before averaging them**, rather than picking one on the strength of its precision or its source's authority.

### Common pitfalls to watch for when scoring

- **Rewarding an answer confusing biggest spender with worst unit economics.**
- **Accepting a flat-rate reading of an indexed contract.**
- **Crediting a netted comparison without verifying the netting is symmetric across options.**
- **Missing when a candidate treats a tight confidence interval as evidence of accuracy** rather than checking what the precise number fails to include.
- **Rewarding a single point-estimate answer where a reconciled range is the honest form.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what a piece of written material establishes. At principal level the material is supplier contracts and service level agreements, security standards, change and design governance, regulatory requirements and technical documentation — writing that creates obligations and allocates authority, and which a candidate is often the person others rely on to read correctly.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, and Cannot Say means it settles neither — regardless of what the candidate knows from running these systems.

Deep operational experience is the main hazard. A candidate will know how these arrangements usually work while the passage describes this one, and a confident wrong reading of a contract term is expensive in a way that a confident wrong reading of a puzzle is not.

Three specifics matter particularly at this level.

The first is that service level agreements define availability with precise measurement methods and exclusions — planned maintenance, customer-caused outages, force majeure — and those exclusions determine what a headline percentage actually promises. The role names owning operational supplier relationships, which makes this reading a core part of the job rather than a legal nicety.

The second is that security and design standards attach obligations to classifications and environments, and a control required in one context is frequently not required in a neighbouring one.

The third is that governance documents allocate authority in language that looks interchangeable and is not: approves, endorses, is consulted, may direct, must consult.

### How this assessment maps to the role

- **Reading supplier agreements** maps to owning operational relationships with suppliers and ensuring alignment to contractual requirements.
- **Reading service level definitions** maps to **Service focus** and availability reasoning.
- **Reading security standards** maps to **Information security**.
- **Reading design governance** maps to **Systems design** and working with technical architects.
- **Reading change and problem records** maps to **Problem management** and **Troubleshooting and problem resolution**.
- **Reading technical documentation** maps to **IT infrastructure** and **Systems integration**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

*Passage A — for Questions 1 to 4*

"The supplier warrants monthly availability of at least 99.9%, measured as the proportion of five-minute intervals in which the service responded successfully to the monitoring probe. Availability is calculated excluding planned maintenance windows notified at least five working days in advance, and excluding periods of unavailability caused by the customer's own systems or network. Planned maintenance may not exceed eight hours in any calendar month. Where availability falls below the warranted level, the customer is entitled to a service credit calculated in accordance with Schedule 4. Service credits are the customer's sole remedy for availability failures, except in the case of a failure below 95% in any month, where the customer may additionally terminate on 30 days' notice."

**Question 1 (easy)**

Statement: Eight hours of properly notified planned maintenance would reduce the reported availability figure.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: availability is calculated "excluding planned maintenance windows notified at least five working days in advance". Properly notified maintenance is outside the measurement entirely. This tests noticing the practical significance — eight hours is roughly 1.1% of a month, so a service could be down for eight notified hours plus 43 minutes of unplanned outage and still report 99.9%. The exclusion depends on the notice being given; maintenance taken at shorter notice is not excluded.

**Question 2 (moderate)**

Statement: If availability falls to 96% in a month, the customer may terminate the agreement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this. Service credits are "the customer's sole remedy for availability failures, except in the case of a failure below 95% in any month", where termination becomes available. 96% is above 95%, so the exception is not triggered and credits remain the sole remedy. This tests both halves together — finding the exception without checking the threshold, or reading "sole remedy" without finding the exception, each produces a wrong answer.

**Question 3 (moderate)**

Statement: The reported availability figure reflects what users actually experienced.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage defines availability as the proportion of five-minute intervals in which the service "responded successfully to the monitoring probe", excluding notified maintenance and customer-caused outages. A service can be badly degraded for real users while answering a probe every five minutes, and users experience notified maintenance as downtime regardless of the contractual treatment. The measurement definition contradicts the statement rather than merely failing to support it. This is the most useful thing the passage tests: the number a candidate is contractually owed and the number users experience are different numbers, and knowing that is what allows negotiating the next agreement properly.

**Question 4 (harder)**

Statement: A period of unavailability caused by a failure in the customer's network would trigger a service credit.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Such periods are excluded from the availability calculation, so they cannot cause the measured figure to fall below the warranted level, and service credits are triggered by availability falling below that level. The passage therefore contradicts the statement through the interaction of two clauses rather than by stating it. This tests noticing what the passage does not address: who determines causation — in practice that is where these disputes actually happen, and the passage's silence on it is worth noting for whoever will be arguing the point.

*Passage B — for Questions 5 to 8*

"Standard changes are pre-approved and may be implemented by any authorised engineer without further approval, provided they are recorded within one working day. Normal changes require approval by the change advisory board, which meets weekly. Emergency changes may be implemented with the approval of the on-call incident manager, and must be presented to the next change advisory board for retrospective review. A change may be classified as standard only where it has been implemented successfully at least five times as a normal change and has an approved implementation procedure. The board reviews the standard change catalogue quarterly and may remove a change type from it."

**Question 5 (easy)**

Statement: Standard changes require approval before implementation.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: standard changes "are pre-approved and may be implemented by any authorised engineer without further approval". The pre-approval is the entire point of the category. This tests distinguishing the recording obligation within one working day — a separate duty — from prior approval, which it is not.

**Question 6 (moderate)**

Statement: A change implemented successfully four times as a normal change can be reclassified as standard.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage requires "at least five times", so four falls short. This also tests noticing that the five-implementation requirement is one of two conjunctive conditions — there must also be an approved implementation procedure — so even five successes would not suffice alone. The statement fails on the first condition without needing the second.

**Question 7 (moderate)**

Statement: An emergency change does not require change advisory board involvement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: emergency changes "must be presented to the next change advisory board for retrospective review". The board's involvement is deferred rather than removed. This tests the natural error of reading an emergency route as bypassing governance entirely — the retrospective review is precisely what makes an emergency route safe to have.

**Question 8 (harder)**

Statement: A change type will remain in the standard catalogue unless it causes an incident.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says the board "reviews the standard change catalogue quarterly and may remove a change type from it", without stating any grounds for removal. Removal could follow an incident, a technology retirement, a procedural change, or the board's judgement. The statement attaches a specific condition to a discretionary power the passage leaves unconditioned. This tests distinguishing an unconditioned discretion from a conditioned one — a team relying on "they only remove things that cause incidents" may lose a standard change classification without warning.

*Passage C — for Questions 9 to 12*

"Secrets used by production services must be stored in the approved secrets management service and must be rotated at least every 90 days. Secrets used only in non-production environments must be stored in the approved service but are not subject to the rotation requirement, provided that no non-production environment holds production data. Where a non-production environment holds production data, it is treated as production for the purposes of this standard. Access to production secrets is granted on the approval of the service owner and is reviewed quarterly. A secret that has been exposed must be rotated immediately and the exposure reported to the security team within 24 hours."

**Question 9 (moderate)**

Statement: Secrets used only in non-production environments are exempt from the 90-day rotation requirement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The exemption exists and is conditional: non-production secrets are exempt "provided that no non-production environment holds production data". The statement asserts the exemption without the condition, and the passage does not establish whether the condition is met in any particular case. This tests noticing how broad the proviso is — it refers to *no* non-production environment holding production data, not merely the one in question, which is stricter than a quick reading suggests and in most organisations is not satisfied.

**Question 10 (moderate)**

Statement: A test environment containing a copy of production data must have its secrets rotated every 90 days.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage establishes this: "Where a non-production environment holds production data, it is treated as production for the purposes of this standard", and production secrets must be rotated at least every 90 days. This tests catching the reclassification clause, the clause most often missed — teams copy production data into test environments as a matter of routine and rarely notice that doing so changes the environment's classification and pulls in a set of controls.

**Question 11 (moderate)**

Statement: An exposed secret must be reported to the security team before it is rotated.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage requires immediate rotation and reporting within 24 hours. That strongly implies rotation happens first, and it does not state an order — both obligations are compatible with reporting first if the report takes a moment. The passage establishes two duties and their deadlines without establishing a sequence, so a statement asserting a required order is neither supported nor contradicted.

**Question 12 (harder)**

Statement: Access to non-production secrets is reviewed quarterly.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says "access to production secrets is granted on the approval of the service owner and is reviewed quarterly", and says nothing about access governance for non-production secrets. There may be a quarterly review, a different arrangement, or none at all. The scoping word is "production", and the passage's silence about the other case is genuine silence rather than an implied negative. This tests contrasting with Question 9, where the passage explicitly addressed non-production and created a conditional exemption — the drafting speaks to non-production in one place and not the other, and a rule cannot be carried across the gap.

### Administration tips

- **Score for whether a candidate checks how availability is measured and what is excluded** before treating a headline percentage as a promise.
- **Watch for whether a candidate finds the threshold attached to an exception to a sole remedy.**
- **Note whether a candidate reads a deferred approval as approval**, not as a bypass of governance.
- **Keep timing consistent** across candidates for this level.
- **Use the reclassification items (Questions 9–10) to observe whether a candidate finds a clause that changes which rules apply to an environment.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that reads a warranted availability figure as what users experienced.**
- **Missing when a candidate overlooks the threshold on a termination right.**
- **Accepting an answer that treats an emergency change route as bypassing governance** rather than deferring it.
- **Crediting an answer that reads a conditional exemption as unconditional.**
- **Missing when a candidate infers a sequence from two independent deadlines**, or extends a rule stated for production to non-production without support.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. At principal level the scenarios involve supplier relationships, roadmap decisions with multi-year consequences, incident leadership, translating architecture into something operable, and leading specialist teams whose best work is invisible.

The commonest formats ask for the most and least effective response, or for ratings. Scoring is against a key derived from experienced practitioners at comparable seniority.

Three patterns run through the strong answers.

The first is that during an incident the priority is restoration and afterwards it is learning, and mixing the two degrades both. Diagnosing while users are affected costs users; looking for a responsible individual afterwards costs the next honest account.

The second is that a principal is frequently the person saying that something will not work, to people who want it to. The effective form of that is making the consequence visible and the decision explicit, not refusing.

The third is that infrastructure work is noticed only when it fails. A large part of the job is making the value of things that did not happen legible to people who will otherwise never see it.

### How this assessment maps to the role

- **Supplier management** maps to owning operational relationships with suppliers.
- **Roadmap decisions** maps to developing strategic and tactical engineering roadmaps.
- **Working with architects** maps to translating architectural designs into operations.
- **Incident and problem leadership** maps to **Problem management** and **Troubleshooting and problem resolution**.
- **Team leadership** maps to leading and directing infrastructure specialist teams.
- **Security judgement** maps to **Information security**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — During an incident**

A major incident is in progress and two engineers are debating the root cause while the service stays degraded. What is the most effective response?

- A) Let them continue; identifying the cause will resolve it.
- B) Redirect to restoration — revert what is revertible, fail over what can fail over — and hold the cause discussion afterwards with the evidence preserved, because the debate can be settled at leisure and the degradation cannot.
- C) Decide the root cause personally.
- D) Bring in more people.

**Correct answer: B. Least effective: D**

**Explanation:** Restoration and diagnosis are different activities and the wrong order costs users directly. Option B redirects and preserves the evidence, which is what keeps the later diagnosis possible. Option D is least effective: adding people to a live incident increases coordination cost, and a crowded bridge is slower than a small one. Option C makes a call on incomplete information and may send effort in the wrong direction. Option A lets a debate run while the service is down.

**Question 2 (easy) — After an incident**

A post-incident review is drifting towards identifying who made the mistake. What is the most effective response?

- A) Let it run; accountability matters.
- B) Redirect to the conditions that made the mistake possible and consequential — what made the wrong action easy, what let it reach production, why it was not caught — because a review that finds a person stops there, and the same conditions will produce the same outcome with a different person.
- C) Move the discussion to a private setting.
- D) Remind everyone the review is blameless.

**Correct answer: B. Least effective: A**

**Explanation:** Option B redirects and supplies the questions that produce systemic findings, which is the part that makes it work — "blameless" as a stated value does nothing without them. Option A is least effective because a review that identifies an individual changes nothing about the system and reliably ensures the next incident is described less honestly. Option D names the principle without the alternative and tends to be ignored within two minutes. Option C removes the discussion from the people who would learn from it.

**Question 3 (moderate) — A supplier missing its commitments**

A supplier is repeatedly missing response times. The contract provides service credits. What is the most effective response?

- A) Claim the service credits.
- B) Establish why they are missing — capability, resourcing, or a contract that pays for something other than what is needed — and address that, because service credits compensate for a failure without changing it, and a supplier resourcing the work thinly because the contract rewards it will keep doing so through any number of credit claims.
- C) Escalate to the supplier's account director.
- D) Begin planning to replace the supplier.

**Correct answer: B. Least effective: D**

**Explanation:** The three causes need different remedies, and the contractual one is both common and untouched by escalation or credits. Option B diagnoses before acting. Option D is least effective as a first move: replacing an infrastructure supplier is a multi-year undertaking with substantial risk, and starting it before knowing whether the problem is fixable is disproportionate. Option A takes the compensation and leaves the service as it is. Option C is reasonable once the substance of the escalation is known.

**Question 4 (moderate) — An architecture that will be hard to operate**

A technical architect's design is sound architecturally but would be difficult for the teams to operate and support. What is the most effective response?

- A) Raise it as an operational concern in the design review.
- B) Set out concretely what makes it hard to operate — what would happen at 3am, what the diagnostic path is, what skills it needs that the team does not have — and work with the architect on changes that keep the architectural intent, because the role is translating designs into operations and "hard to operate" is not actionable until it is specific.
- C) Accept it; architecture is the architect's responsibility.
- D) Ask for the design to be reworked.

**Correct answer: B. Least effective: C**

**Explanation:** The role summary names working with technical architects to translate designs into operations, and option B does exactly that — the specifics are what make the concern something an architect can act on, and most such problems have solutions that preserve the design's intent. Option C is least effective: accepting a design the teams cannot operate guarantees the cost lands on them for years. Option D asks for rework without saying what would fix it. Option A raises it in a form that is easy to note and hard to act on.

**Question 5 (moderate) — A roadmap decision with a long tail**

A choice is being made between two infrastructure platforms. One is technically stronger; the other is one the organisation already has skills in. What is the most effective analysis?

- A) Choose the technically stronger platform.
- B) Treat operability by the people who will actually run it as a design criterion rather than a compromise — so the real comparison is between the familiar platform and the stronger one plus a credible, funded plan to build the capability, and the familiar one usually wins unless those skills are strategically valuable.
- C) Choose the familiar platform.
- D) Run both and decide later.

**Correct answer: B. Least effective: D**

**Explanation:** A platform nobody in the organisation can debug at 3am is a bad platform regardless of its architecture, and option B frames that as part of the assessment rather than an obstacle to it. It also keeps the stronger option live under the one condition that would make it viable. Option D is least effective: running two infrastructure platforms doubles the operational surface, splits scarce skills, and defers a decision that gets harder as both accumulate dependencies. Option C reaches the usual answer without the reasoning and misses the case where building capability is right. Option A weighs one dimension.

**Question 6 (moderate) — A capability concentrated in one person**

Only one engineer understands the configuration of a platform underpinning several services. What is the most effective response?

- A) Ask them to document it.
- B) Reduce the dependency by having someone else do the work with them — making a change, handling an incident — because the risk lives in what the expert does without thinking, which documentation systematically misses, and only doing transfers it.
- C) Recruit a second specialist.
- D) Simplify the platform.

**Correct answer: B. Least effective: C**

**Explanation:** Documentation is worth having and is reliably incomplete precisely where it matters, because the expert cannot see which of their own actions are non-obvious. Option B transfers capability by exercising it. Option C is least effective as the primary response: it is slow, uncertain, expensive, and ends with concentrated knowledge in two heads rather than distributed capability. Option D is frequently the best long-term answer — a platform only one person understands is usually too complicated — and does nothing about the next three months.

**Question 7 (harder) — Pressure to accept a risk**

A programme wants to go live on infrastructure judged under-provisioned for its expected peak. Delaying is costly. What is the most effective response?

- A) Refuse to approve the go-live.
- B) Quantify the risk — expected peak against capacity, what fails first, how long recovery takes — and put the options to whoever owns the service risk, including going live with reduced scope, additional temporary capacity, or accepting a degradation risk from a stated date.
- C) Approve it; the programme owns its delivery.
- D) Approve it and record the risk.

**Correct answer: B. Least effective: C**

**Explanation:** Option B converts an engineering judgement into a decision someone accountable can take, and the three options are the ones that actually exist at that stage — temporary capacity in particular is frequently available and frequently unconsidered. Option C is least effective: treating a visible risk as somebody else's problem is not how it will be viewed afterwards. Option D is close and weaker, since a recorded risk with no owner and no decision changes nothing while looking like diligence. Option A removes the risk owner from their own decision.

**Question 8 (harder) — A security finding nobody wants to fund**

A significant vulnerability in a platform component requires a migration the organisation has no appetite for. What is the most effective response?

- A) Escalate until it is funded.
- B) Set out the exposure concretely — what an attacker could do, what access they would need, what is reachable — and the options with costs, including interim mitigations that reduce the risk without the migration, then get a named risk acceptance from whoever is accountable if nothing is done.
- C) Implement interim mitigations and move on.
- D) Record it on the risk register.

**Correct answer: B. Least effective: D**

**Explanation:** Option B does the three available things: makes the risk evaluable, offers the middle path that usually exists, and ensures a decision to accept the risk is made explicitly by someone accountable rather than by inertia. The named acceptance is the part most often skipped and the part that converts a warning into a decision. Option D is least effective: a register entry with no owner and no decision is where findings go to be forgotten, and it will be rediscovered after an incident. Option C is useful and leaves the residual risk unowned. Option A escalates before quantifying.

**Question 9 (harder) — Recurring failures with different causes**

A platform has had four significant outages in a year, each with a different immediate cause: a certificate expiry, a full disk, a misconfigured limit, and a dependency timeout. What is the most effective response?

- A) Fix each cause thoroughly.
- B) Look for the shared property — most likely that all four were conditions that develop observably before they fail and none was detected in advance — because four different causes with the same consequence usually indicate one missing capability rather than four unrelated faults.
- C) Add more alerting.
- D) Increase the frequency of maintenance checks.

**Correct answer: B. Least effective: A**

**Explanation:** Each of the four is a condition that develops gradually and visibly before it causes an outage, and in every case nobody saw it coming. That is a single systemic property — no leading indicators, no alerting on approach to a threshold — with one fix that covers all four and the next four. Option A is least effective as the whole response: it resolves four specific faults and leaves the property that let them become outages entirely intact. Option C is directionally right and unspecific. Option D substitutes human vigilance for instrumentation.

**Question 10 (harder) — Recognising invisible work**

An engineer has spent months on resilience improvements. There have been no incidents in their area and their contribution appears in no delivery metric. What is the most effective response?

- A) Thank them and note it in their appraisal.
- B) Make the value legible — what failure classes are now impossible, what incidents would have occurred at the previous rate, what that is worth — and put it in front of the people who make promotion and resourcing decisions, because invisible work stays invisible unless someone converts it into something countable.
- C) Give them public credit at a team meeting.
- D) Move them onto more visible work.

**Correct answer: B. Least effective: D**

**Explanation:** Success in resilience work looks like nothing happening, which disadvantages the person doing it in every process that counts outputs. Option B produces the count, which serves them and also protects the work from being deprioritised. Option D is least effective — it solves their visibility problem by stopping the valuable work, and tells everyone that resilience work is a career dead end. Options A and C are good and insufficient: neither reaches the people making decisions about promotion or headcount.

**Question 11 (harder) — Evidence against a candidate's own roadmap decision**

A platform choice made three years ago is now the main source of operational toil for several teams. What is the most effective response?

- A) Defend it; the decision was right given what was known.
- B) Quantify what the toil is costing — hours a month, incidents attributable, what teams cannot do — say plainly that the original assumptions have not held, and get someone other than the original decision-maker to assess the options, because a recommendation about one's own decision carries a discount that cannot be argued away.
- C) Propose a migration.
- D) Invest in reducing the toil on the current platform.

**Correct answer: B. Least effective: A**

**Explanation:** Option B quantifies the problem, is honest about the decision, and handles the credibility issue by removing the original decision-maker from the recommendation — which is what makes the analysis actionable, since whatever is recommended about one's own choice will be read as defensiveness or guilt. Option A is least effective: probably true and beside the point, since the question is what to do now, and defending it teaches several teams that the toil is permanent. Options C and D are plausible outcomes that should come from the independent assessment rather than being decided unilaterally.

**Question 12 (harder) — Reporting honestly**

A director asks for a summary of infrastructure reliability for a board paper. Availability figures are good; time to restore is poor. What is the most effective response?

- A) Report availability; it is the headline metric.
- B) Report both and interpret them — the platform rarely fails and takes a long time to recover when it does, which is a specific and fixable problem — because a board given only the favourable metric will not fund the work the unfavourable one points at.
- C) Report availability and mention restore time if asked.
- D) Describe the picture as mixed.

**Correct answer: B. Least effective: A**

**Explanation:** Option B reports honestly and does the more valuable thing, which is to interpret: high availability with slow recovery is a recognisable pattern with known remedies — runbooks, faster rollback, better observability — and naming it turns two numbers into a proposal. Option A is least effective because it earns thanks now and leaves the restore-time problem unfunded until it causes a serious incident, at which point the board will ask what was known. Option C is the same omission with a fallback. Option D characterises without informing.

### Administration tips

- **Score for whether a candidate separates restoration from diagnosis during a live incident item**, and redirects a post-incident review toward systemic conditions rather than an individual.
- **Watch for whether a candidate diagnoses why a supplier is underperforming** before claiming compensation or escalating.
- **Note whether a candidate makes a risk concrete enough for a named, accountable person to accept it**, rather than recording it without a decision.
- **Use the invisible-work item (Question 10) to observe whether a candidate converts resilience work into something countable** for decision-makers, rather than only offering thanks or public credit.
- **Because these scenarios reward untimed, considered judgement**, allow generous time and note whether a candidate's reasoning, not just their choice, reflects the level.

### Common pitfalls to watch for when scoring

- **Rewarding an option that adds people to a live incident** rather than redirecting to restoration.
- **Crediting an option that lets a post-incident review identify an individual.**
- **Accepting service credits alone as an adequate response to poor supplier performance.**
- **Missing when a candidate accepts a design the operating teams cannot support.**
- **Rewarding an option that records a risk without securing a named decision from its accountable owner.**

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a principal infrastructure engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section kept returning to systems rather than components: four outages with four causes are usually one missing detection capability, a design that is architecturally sound and operationally unworkable is not sound, and the question worth asking of any automation or platform change is what bounds the damage when it goes wrong, rather than how well it performs when it does not. The numeric section tested the arithmetic that decides infrastructure work: availability composing across dependencies, peak headroom rather than average utilisation, lifetime cost rather than build cost, and volumetrics done at design time rather than discovered in the first full-volume run. The verbal section tested the documents that define what an organisation is owed and what it is permitted: a warranted availability figure excluding notified maintenance promises considerably less than it appears to; an emergency change route defers governance rather than removing it; and copying production data into a test environment reclassifies that environment under most security standards. The situational judgement section tested standing between delivery pressure and operational reality: restoring before diagnosing, diagnosing why a supplier was failing rather than claiming compensation for it, making risks concrete enough to be accepted by someone accountable, and treating a candidate's own past platform decision with the same scrutiny as anyone else's.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score, and at this level connects naturally to how a candidate would actually lead supplier relationships, roadmap decisions, and design authority governance.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can exercise judgement at enterprise scale — where an error is amplified through every team and supplier that treats the judgement as settled — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
