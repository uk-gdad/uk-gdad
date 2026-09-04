# Security architect - Psychometric Assessments

## Introduction

This document is written for you: an assessor preparing to administer a psychometric assessment to a candidate for security architect within the UK Government Digital and Data (GDAD) profession. It gives you a structured set of job-specific items to present to the candidate, together with the worked answers and explanations that form your answer key — material to hold back from the candidate until scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the thinking skills and judgement that underpin effective performance in a specific role. They are widely used across the Civil Service and the wider public sector because they are fair, evidence-based, and focused on capability rather than background. For a security architect, they matter a great deal: the role asks the postholder to design and review secure system architectures, recommend security controls that support business objectives, advise risk owners on whether risks sit within tolerance, assess new technologies, and communicate security and risk implications clearly to both technical and non-technical stakeholders. Every one of those duties draws on the abilities that psychometric assessments measure — logical analysis, numerical interpretation, precise reading, and sound professional judgement.

This document is organised into four main assessment sections, each matched to the role:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, and prioritisation using the artefacts a security architect genuinely handles: architecture diagrams, firewall rule sets, risk registers, and security patterns.
2. **Workplace job-specific numeric reasoning assessment** — interpreting the numbers of the role's working life: vulnerability metrics, risk scores, security budgets, capacity figures, and remediation rates.
3. **Workplace job-specific verbal reasoning assessment** — drawing accurate conclusions from dense written material such as security policies, standards, risk reports, and stakeholder emails.
4. **Workplace job-specific situational judgement assessment** — realistic workplace dilemmas involving delivery teams, risk owners, senior stakeholders, and suppliers, testing how the candidate inspires, influences, and advises.

Each section explains what the assessment measures, maps it explicitly to the skills in the role profile — Analysis, Communication, Designing secure systems, Enabling and informing risk-based decisions, Research and innovation, Security technology, and Understanding security implications of transformation — and then gives a generous set of practice questions with full worked explanations, which together form your answer key for scoring.

How should you administer it? Present the same items and the same time limit to every candidate you assess for this role level — consistency is what makes the exercise fair and comparable across candidates. Each section notes a rough time per item (for example, around 90 seconds per question for easy cognitive items, up to 3 minutes for hard ones); use this to plan the session and, if you are running the assessment under timed conditions, to time the candidate. Keep the worked answers and explanations back from the candidate until scoring is complete, then use them as the basis for a debrief conversation. Treat the result as one input among several in a hiring or promotion decision, never as the sole basis for one — see the advisory below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment is a targeted psychometric test designed to measure the exact mental processes needed for the security architect role. Unlike a generic IQ test, it uses practical workplace scenarios and data drawn from the day-to-day artefacts of security architecture — system architecture diagrams, firewall rule sets, access control matrices, risk registers, threat models, and architecture patterns — to predict how effectively a candidate will perform on the job.

Typical format and timing: these assessments are usually delivered online and timed, most commonly 15 to 30 minutes for 20 to 30 questions. Questions mimic the everyday tasks and data formats of the actual job, and results are scored objectively against a benchmark or norm group. Candidates usually receive a few short, ungraded practice questions first so they can get used to the interface, and some modern platforms adapt question difficulty based on previous answers. Employers typically receive a breakdown showing speed versus accuracy rather than a single score, so working carefully matters as much as working quickly — worth bearing in mind if you debrief a candidate who answered fewer questions but with high accuracy.

For a security architect, cognitive ability is not an abstract nicety. Designing and reviewing system architectures through the application of patterns and principles is fundamentally an exercise in logical deduction: given these components, these trust boundaries, and these data flows, what can go wrong, and which control closes the gap? Spotting the single misordered firewall rule that undermines an entire network segmentation design is error checking. Deciding which of five vulnerability findings to escalate first, given business impact and exploitability, is prioritisation under constraint. This assessment measures precisely those muscles.

### What it measures for this role

Mapped to the skills in the role profile:

- **Analysis** — the assessment's logical deduction and problem-solving items test whether the candidate can "apply the approach to real problems and consider all relevant information" and "apply appropriate rigour to ensure a full solution is designed and achieves the business outcome". Multi-step reasoning questions reward exactly this rigour: partial solutions that ignore one relevant fact score as wrong answers.
- **Designing secure systems** — pattern recognition items reflect the duty to "design and review system architectures through the application of patterns and principles". Recognising when a design matches, or subtly deviates from, an established security pattern is a core cognitive skill.
- **Security technology** — error-checking and fault-diagnosis items mirror the responsibility to "explain the effect of vulnerabilities on current and future designs". Finding the flaw in a configuration or a design is applied error checking.
- **Enabling and informing risk-based decisions** — prioritisation items reflect advising "on risk impact and whether it's within risk tolerance", where the candidate must weigh several factors at once and order actions proportionately.
- **Understanding security implications of transformation** — problem-solving items set in transformation programmes test whether the candidate can hold policy, business architecture, and technical constraints in mind simultaneously while reasoning to a conclusion.

### Practice questions

Present each question to the candidate before revealing the answer. Suggested pace: about 90 seconds per question for easy items, up to 3 minutes for hard ones.

#### Question 1 (easy) — Pattern recognition in security zones

A department's reference architecture defines four network zones with strictly increasing trust: Zone 1 (public internet), Zone 2 (DMZ), Zone 3 (application tier), Zone 4 (data tier). The zoning principle states: "Traffic may only flow between adjacent zones, and only via an approved control point."

Which of the following data flows complies with the principle?

- A) A web client in Zone 1 connects directly to a database in Zone 4 via an approved API gateway.
- B) A reverse proxy in Zone 2 forwards requests to an application server in Zone 3 via an approved load balancer.
- C) An application server in Zone 3 connects to a third-party service in Zone 1 directly, because the connection is encrypted.
- D) A database in Zone 4 replicates to a reporting server in Zone 2 via an approved replication service.

**Correct answer: B**

**Explanation:** The principle has two conditions: adjacency and an approved control point. Option B satisfies both — Zones 2 and 3 are adjacent, and the flow passes through an approved load balancer. Option A fails adjacency (Zone 1 to Zone 4 skips two zones; an approved gateway does not repair non-adjacency). Option C fails on both counts: Zones 3 and 1 are not adjacent, and encryption is not an approved control point — a classic distractor, because encryption addresses confidentiality, not flow control. Option D fails adjacency (Zone 4 to Zone 2). This item tests the candidate's ability to apply a stated rule exactly as written, resisting plausible-sounding mitigations that do not satisfy the rule.

#### Question 2 (easy) — Error checking a firewall rule set

The candidate is reviewing a firewall change request. Rules are evaluated top to bottom; the first match applies.

1. ALLOW tcp/443 from 10.1.0.0/16 to 10.2.5.10
2. DENY all from any to 10.2.5.0/24
3. ALLOW tcp/22 from 10.1.7.5 to 10.2.5.10
4. DENY all from any to any

The requester says: "This permits HTTPS from the internal estate to the new service at 10.2.5.10 and SSH admin access from the jump host at 10.1.7.5, and blocks everything else."

What is wrong?

- A) Nothing; the rule set behaves as described.
- B) Rule 3 will never match, so SSH admin access is blocked.
- C) Rule 1 is shadowed by rule 2, so HTTPS is blocked.
- D) Rule 4 is redundant and creates a vulnerability.

**Correct answer: B**

**Explanation:** Work the rules in order. HTTPS from 10.1.0.0/16 to 10.2.5.10 matches rule 1 and is allowed — so C is wrong. SSH from 10.1.7.5 to 10.2.5.10 does not match rule 1 (wrong port), but does match rule 2 (any source to 10.2.5.0/24, which contains 10.2.5.10) and is denied before rule 3 is ever reached. Rule 3 is shadowed. Option D is a distractor: a final deny-all is standard good practice and redundancy of a deny rule is not itself a vulnerability. This is the kind of ordering defect a candidate must catch when helping review other people's work — the fix is to move rule 3 above rule 2.

#### Question 3 (moderate) — Logical deduction from control statements

Three statements from an organisation's security standard are all true:

1. All services handling OFFICIAL-SENSITIVE data must use multi-factor authentication (MFA) for administrative access.
2. Any service without MFA for administrative access must not be internet-facing.
3. The Grants Portal is internet-facing.

Which conclusion follows with certainty?

- A) The Grants Portal handles OFFICIAL-SENSITIVE data.
- B) The Grants Portal uses MFA for administrative access.
- C) The Grants Portal does not handle OFFICIAL-SENSITIVE data.
- D) The Grants Portal must be moved off the internet.

**Correct answer: B**

**Explanation:** Statement 2 is logically equivalent to its contrapositive: any internet-facing service must have MFA for administrative access. Since the Grants Portal is internet-facing (statement 3), it must use MFA. Option A cannot be deduced — statement 1 says sensitive data implies MFA, not the reverse; a service can have MFA without handling sensitive data. Option C likewise does not follow: nothing tells us what data the portal handles. Option D contradicts the given facts only if the portal lacked MFA, which we cannot assume. The trap in this question is affirming the consequent — inferring the data classification from the presence of a control. Rigorous deduction of this kind is central to the Analysis skill.

#### Question 4 (moderate) — Prioritisation of security findings

An assurance review of a citizen-facing service produces five findings. The service processes personal data and goes live to the public in six weeks. Which finding should the candidate recommend the team address first?

- A) TLS 1.0 is still enabled on an internal-only test environment.
- B) The public API does not rate-limit authentication attempts, and accounts use passwords only.
- C) Security documentation for the service has not been updated for eight months.
- D) A third-party JavaScript library on the marketing page is two minor versions out of date with no known exploits.
- E) Admin session timeout is set to 12 hours instead of the standard 4 hours.

**Correct answer: B**

**Explanation:** Prioritise by exploitability combined with impact on the live, public-facing attack surface. Finding B enables credential-stuffing and brute-force attacks against real citizen accounts holding personal data — high likelihood, high impact, directly reachable from the internet. Finding A is real but confined to an internal test environment: lower exposure. Finding E matters, but exploiting a long admin session requires an attacker to already have a foothold. Finding D has no known exploits and sits on a low-value page. Finding C is a process weakness — important, but it does not itself open an attack path. A strong candidate articulates this ordering in risk terms: likelihood times impact, weighted by exposure — exactly what "advise on risk impact" requires.

#### Question 5 (moderate) — Pattern recognition: spotting a broken pattern

A published architecture pattern for citizen authentication requires: (i) authentication delegated to the central identity provider; (ii) tokens validated at every service boundary; (iii) no service stores credentials; (iv) all token exchanges over mutually authenticated TLS.

A delivery team presents a design: users authenticate against the central identity provider; the front-end service validates the token, then forwards requests to two backend microservices over one-way TLS, attaching a custom header "X-Authenticated-User: <username>" that the backends trust without validation.

How many of the four pattern requirements does the design breach?

- A) One
- B) Two
- C) Three
- D) Four

**Correct answer: B**

**Explanation:** Check each requirement methodically. (i) Authentication is delegated to the central identity provider — satisfied. (ii) Tokens validated at every service boundary — breached: the backends trust an unauthenticated header instead of validating tokens, so two of the three service boundaries perform no validation. (iii) No service stores credentials — satisfied as described; a header naming a user is not a stored credential. (iv) Mutually authenticated TLS for token exchanges — breached: backend calls use one-way TLS. So exactly two requirements are breached. The deeper lesson: the header-trust design reintroduces the "confused deputy" weakness the pattern exists to prevent — any process that can reach a backend can impersonate any user. When reviewing other people's work, counting breaches methodically against the pattern, rather than reacting to the most visible flaw, is the disciplined approach a strong candidate takes.

#### Question 6 (moderate) — Deductive reasoning about risk statements

A risk register contains these entries, all accurate:

- Every risk rated "Critical" has a named risk owner.
- No risk with a named risk owner is unreviewed.
- Risk R-17 is unreviewed.

Which statement must be true?

- A) R-17 is rated Critical.
- B) R-17 is not rated Critical.
- C) R-17 has a named risk owner but the review is overdue.
- D) R-17 should be escalated to the SIRO.

**Correct answer: B**

**Explanation:** Chain the statements. If R-17 were Critical, it would have a named owner (statement 1). If it had a named owner, it would not be unreviewed (statement 2). But R-17 is unreviewed — contradiction. Therefore R-17 cannot be Critical. Option C contradicts statement 2 directly. Option D may be sensible practice, but "should be escalated" is a judgement, not a deduction from the given statements — a cognitive assessment rewards only what strictly follows. Keeping deduction separate from professional instinct is a discipline this item tests; in the verbal reasoning section candidates meet it again as the difference between "False" and "Cannot Say".

#### Question 7 (moderate) — Sequence logic in an incident chain

A post-incident review establishes the following facts about a breach of a legacy case-management system:

- The attacker obtained a valid staff password before accessing the VPN.
- The VPN was accessed before the file server was reached.
- Lateral movement to the database occurred after the file server was reached, but before data was exfiltrated.
- The phishing email that harvested the password was sent on a Tuesday; exfiltration was detected exactly four days later.

If each step occurred on a different consecutive day, on which day did lateral movement to the database occur?

- A) Wednesday
- B) Thursday
- C) Friday
- D) Saturday

**Correct answer: C**

**Explanation:** Order the chain: password harvest (Tuesday, day 0) → VPN access → file server → lateral movement to database → exfiltration. Exfiltration is four days after Tuesday, i.e. Saturday. Five events across consecutive days from Tuesday to Saturday assign one event per day: VPN Wednesday, file server Thursday, lateral movement Friday, exfiltration Saturday. So the answer is Friday. This style of question tests careful sequential reasoning — the same skill a security architect uses to reconstruct attack paths in a threat model or to verify that a kill-chain narrative in a supplier's incident report is internally consistent.

#### Question 8 (hard) — Problem solving with competing constraints

A transformation programme must migrate a citizen records service to the cloud. Constraints:

1. The data must remain encrypted at rest with keys held by the department (policy requirement).
2. The chosen platform's native search feature requires the platform to hold decryption keys.
3. The business outcome requires full-text search of records by caseworkers.
4. A third-party searchable-encryption product is available but adds 9 months to the 12-month programme and is unproven at this scale.
5. An on-premise search index containing only non-sensitive metadata fields could be built in 2 months.

The business asks: "Can we achieve search without breaching policy or the deadline?" Which option best achieves the business outcome within all constraints?

- A) Use the platform's native search and accept the policy breach as a managed risk.
- B) Adopt the searchable-encryption product and extend the programme.
- C) Build the metadata index, confirm with caseworkers whether metadata search meets the core need, and phase full-text search for later evaluation.
- D) Abandon search functionality; the security requirement takes precedence.

**Correct answer: C**

**Explanation:** Test each option against all the constraints, not just some. Option A violates constraint 1 — and "accept the policy breach" is not the candidate's to grant; key custody is a policy requirement, not a discretionary risk. Option B breaks the deadline (constraint 4) and adds unproven-technology risk. Option D abandons the business outcome entirely — remember, the role is to "recommend security controls and identify solutions that support a business objective", not to veto it. Option C is the only route that respects encryption policy, fits the timeline, and pursues the outcome — while gathering evidence (caseworker feedback, product maturity) to inform the next decision. This mirrors the Analysis skill's demand to "ensure a full solution is designed and achieves the business outcome": the rigorous answer is often the phased one that satisfies every constraint actually in play.

#### Question 9 (hard) — Error checking an access control matrix

The candidate is reviewing an access control matrix for a payments system. The design principle is least privilege and strict segregation of duties: no single role may both create and approve a payment, and only auditors may read logs.

| Role | Create payment | Approve payment | Read logs | Administer users |
|---|---|---|---|---|
| Payments officer | Yes | No | No | No |
| Payments manager | No | Yes | No | No |
| System administrator | No | No | Yes | Yes |
| Auditor | No | No | Yes | No |

Which single cell breaches the stated principles?

- A) Payments manager / Approve payment
- B) System administrator / Read logs
- C) Auditor / Read logs
- D) System administrator / Administer users

**Correct answer: B**

**Explanation:** Scan the matrix against each stated rule. Segregation of duties on payments holds: no role has Yes in both Create and Approve. The log rule states "only auditors may read logs" — but the system administrator also has Read logs = Yes, breaching it. Option D is a distractor: administering users is a legitimate administrator function and no stated rule forbids it, though a thorough reviewer might separately note the deeper concern that a user administrator could grant themselves roles — a point worth raising in review, but the question asks which cell breaches the stated principles. Disciplined error checking means auditing against the rules as given, then separately flagging design improvements. Both matter when reviewing other people's work; conflating them weakens written findings.

#### Question 10 (hard) — Deducing the vulnerable component

Four components — the API gateway, the authentication service, the message queue, and the reporting module — were assessed. The candidate is told:

- Exactly one component contains the critical vulnerability.
- If the API gateway is vulnerable, then so is the authentication service (they share the same flawed library).
- The message queue passed all its tests.
- Either the authentication service or the reporting module is vulnerable, but not both.

Which component contains the critical vulnerability?

- A) API gateway
- B) Authentication service
- C) Message queue
- D) Cannot be determined; either B or the reporting module is possible

**Correct answer: D**

**Explanation:** Apply elimination. The message queue is clear (statement 3). If the API gateway were vulnerable, the authentication service would also be vulnerable (statement 2), giving two vulnerable components and contradicting "exactly one" — so the gateway is clear. That leaves the authentication service or the reporting module; statement 4 says exactly one of them is vulnerable but gives no way to tell which. So the honest deduction is that the answer cannot be determined from the information given. This question is deliberately humbling: it tests whether a candidate recognises when the evidence underdetermines the conclusion and says so — the same intellectual honesty needed when advising risk owners, where overclaiming certainty is itself a risk. A candidate who chose B has likely felt pressure to produce a definite answer; both this assessment and real stakeholders reward calibrated conclusions instead.

#### Question 11 (moderate) — Prioritisation across teams

A security architect provides specialist advice across four delivery teams. This week each has asked for their time, but they can fully support only two:

- Team A: choosing between two logging libraries for an internal tool (decision reversible in a day).
- Team B: finalising the authentication design for a new public-facing service; build starts Monday.
- Team C: wants a general "lunch and learn" on security trends, date flexible.
- Team D: has discovered their live service sends citizen data to an analytics supplier without a data-sharing agreement, and asks what to do.

Which two should the candidate prioritise?

- A) A and B
- B) B and D
- C) C and D
- D) A and D

**Correct answer: B**

**Explanation:** Rank by irreversibility, live impact, and time-criticality. Team D describes a live, ongoing exposure of citizen data without a lawful agreement — highest urgency, real harm accruing now. Team B is next: authentication design decisions become expensive to change once build starts Monday, so influence is at its maximum this week and decays sharply after. Team A's decision is cheap to reverse and needs no architect. Team C is valuable but movable. The pattern to look for in a candidate's reasoning: prioritising where security decisions are about to become irreversible or where harm is already occurring. This directly exercises the duty to "provide specialist advice and recommend approaches across teams and various stakeholders" — advice is a scarce resource, and this item tests whether a candidate allocates it rationally.

#### Question 12 (hard) — Pattern generalisation to a new technology

An established pattern for protecting service-to-service secrets has three elements: secrets are never stored in source code; secrets are issued short-lived from a central vault; every issuance is logged and attributable. The department now adopts AI coding assistants, and a team asks how the pattern applies to the assistant's API keys and to prompts that may contain configuration data.

Which application of the pattern is most faithful?

- A) The pattern doesn't apply; AI assistants are a new technology requiring an entirely new approach.
- B) Store the assistant's API key in the team's shared repository for transparency, since issuance logging covers attribution.
- C) Issue assistant API keys short-lived from the vault, log usage attributably, and extend "never in source code" to "never in prompts" for secrets and sensitive configuration.
- D) Ban AI assistants until a new pattern is written.

**Correct answer: C**

**Explanation:** The cognitive skill being tested here is analogical transfer: recognising that a pattern's principles generalise even when the technology is new. Option C maps each element faithfully — vault issuance and logging apply directly, and the "not in source code" principle generalises naturally to "not in prompts", since a prompt sent to an external model is an uncontrolled disclosure channel, just as a public repository is. Option A abandons useful prior art; option D confuses caution with analysis and blocks the business; option B directly violates the first element (a shared repository is source-code storage) and misreads logging as a substitute for secrecy. This mirrors the Research and innovation skill — "identify new technologies and design their use in a business context" — and the duty to develop "security approaches to new technologies": the strongest candidates extend patterns; they neither freeze nor discard them.

### Preparation tips

- **Practising with real artefacts helps.** A candidate who takes a real (suitably sanitised) firewall rule set, access matrix, or architecture diagram and quizzes themselves — what rule shadows what, which cell breaches least privilege — will find the assessment's formats familiar, because they are the formats of the job.
- **Verbalising deductions builds elimination skill.** Candidates who explain out loud why each wrong option is wrong build the habit of elimination, which is faster and more reliable under time pressure than searching for the right answer directly.
- **Fluency with the contrapositive helps.** Many security standards are written as "if X then Y". A candidate fluent in the equivalent "if not Y then not X" — and alert to the invalid "if Y then X" — will find several of these items easier, and read real-world standards more sharply as a result.
- **Time-boxing matters under timed conditions.** In a 25-minute test, a question that has consumed 3 minutes is costing two other questions. If you coach a candidate beforehand, encourage them to flag a difficult question and move on rather than persisting.
- **Rest and readiness affect performance.** Cognitive throughput drops measurably when a candidate is tired. Where you have discretion over scheduling, avoid back-to-back sessions and give the candidate a calm, distraction-free environment.

### Common pitfalls

- **Answering from experience instead of the given facts.** A candidate may know a great deal about security technology, but the test rewards reasoning strictly from the scenario. If the question's rule set says something that runs against instinct, the correct approach is to apply the rule set as given.
- **Stopping at the first plausible flaw.** As in Question 5, a design may breach several requirements. Every condition needs checking methodically before answering "how many" or "which".
- **Falling for authoritative-sounding distractors.** "Because the connection is encrypted" and "logging covers attribution" sound reassuring but do not satisfy the stated rule. These items are written to reward candidates who read past surface plausibility.
- **Time-sink questions.** Getting stuck on a single multi-stage logic puzzle instead of banking easier marks is the pitfall these items most reliably exploit.
- **Overclaiming certainty.** When the evidence supports "cannot be determined", the strongest candidates say so. Both the test and a security architect's risk owners reward calibrated judgement.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make logical decisions using numerical data. It mimics the data-handling demands of the security architect role, focusing on practical business mathematics rather than abstract formulas. Question inputs are the kinds of tables, charts, and figures a security architect genuinely meets: vulnerability scan summaries, risk scores, security programme budgets, licence and control costs, log volumes and storage capacity, patching and remediation rates, availability figures, and incident metrics.

Typical format and timing: most assessments are online, strictly timed (often around a minute to 90 seconds per question), and calculator-friendly — an onscreen calculator is usually provided, because the point is interpretation, not mental arithmetic. Questions focus on percentages, ratios, rates, proportional scaling, and cost-benefit estimations. Candidates are expected to extract the right numbers quickly from a table or chart, apply a short calculation, and select from multiple-choice options where the distractors are the results of common errors (wrong row, wrong base for a percentage, ignored units).

Why does this matter for a security architect? Numbers are the language of risk-based decision making. When advising a risk owner whether a risk is within tolerance, a security architect may be comparing expected loss figures. When recommending security controls that support a business objective, the candidate will often be asked "what does it cost and what does it save?" — a cost-benefit ratio. When assessing the risk of a proposed change, the candidate may need to read patching statistics, capacity forecasts, or availability targets and spot which figure actually matters. Fluency here also protects a candidate's credibility on the job: a security case with a mis-computed percentage is a gift to a sceptical stakeholder.

### What it measures for this role

Mapped to the skills in the role profile:

- **Enabling and informing risk-based decisions** — expected-loss calculations, risk scoring, and tolerance comparisons directly exercise "advise on risk impact and whether it's within risk tolerance" and understanding "the proportionality of risk". Proportionality is, at heart, a quantitative judgement.
- **Analysis** — multi-step problems test whether the candidate "considers all relevant information": the classic numeric-reasoning trap is using a convenient number instead of the correct one.
- **Communication (security architect)** — translating "security and risk implications to technical and non-technical stakeholders" frequently means translating numbers: a finance director hears "£240,000 expected annual loss" far more clearly than "high likelihood, major impact".
- **Security technology** — reading vulnerability data (counts by severity, remediation rates, scan coverage) underpins explaining "the effect of vulnerabilities on current and future designs".
- **Research and innovation** — evaluating a new technology in a business context usually ends in a numbers question: total cost, capacity headroom, performance overhead.

### Practice questions

An onscreen calculator is assumed. Present each question to the candidate before revealing the explanation — the arithmetic is shown in full for scoring.

#### Question 1 (easy) — Vulnerability counts and percentages

A monthly scan of a department's estate reports 1,250 findings: 75 critical, 300 high, 500 medium, 375 low. What percentage of findings are critical or high?

- A) 24%
- B) 30%
- C) 32%
- D) 37.5%

**Correct answer: B**

**Explanation:** Critical + high = 75 + 300 = 375. Percentage = 375 ÷ 1,250 × 100 = 30%. Distractor D (37.5%) is what results from accidentally using the low count (375) as a percentage of 1,000, or dividing 375 by 1,000; distractor A comes from 300 ÷ 1,250 = 24%, forgetting the criticals. This item rewards a candidate who defines the numerator ("critical or high" = both categories) and the denominator (all findings) before touching the calculator.

#### Question 2 (easy) — Remediation rate

Of 300 high-severity vulnerabilities open at the start of the quarter, badged teams remediated 264 within the quarter. The department's standard requires at least 85% of high-severity vulnerabilities to be remediated within a quarter. Did the estate meet the standard, and by what margin?

- A) Yes, by 3 percentage points
- B) Yes, by 5 percentage points
- C) No, short by 3 percentage points
- D) Yes, by 8 percentage points

**Correct answer: A**

**Explanation:** Remediation rate = 264 ÷ 300 × 100 = 88%. The standard is 85%, so the estate met it with a margin of 88 − 85 = 3 percentage points. Note the phrase "percentage points": the difference between two percentages is measured in points, not per cent — a distinction that matters when a security architect writes assurance reports, because "3% above target" (which would be 85% × 1.03 = 87.55%) and "3 percentage points above target" (88%) are different claims.

#### Question 3 (moderate) — Expected annual loss

A security architect is helping a risk owner decide whether a risk is within tolerance. A legacy file-transfer service has an estimated 15% probability per year of a breach. If a breach occurs, the estimated impact is £1.6 million (regulatory penalties, remediation, and service disruption). The department's stated risk tolerance for this service is £200,000 expected annual loss.

What is the expected annual loss, and is it within tolerance?

- A) £160,000 — within tolerance
- B) £240,000 — exceeds tolerance
- C) £240,000 — within tolerance
- D) £1.6 million — exceeds tolerance

**Correct answer: B**

**Explanation:** Expected annual loss = probability × impact = 0.15 × £1,600,000 = £240,000. Tolerance is £200,000, and £240,000 > £200,000, so the risk exceeds tolerance and needs treatment or formal acceptance at a higher level. Distractor A uses 10% instead of 15% (a slip when converting percentages); distractor D confuses impact with expected loss. In practice a candidate would present both figures to the risk owner: the expected loss for comparison against tolerance, and the raw impact so the risk owner understands the worst case — that dual framing is exactly what "advise on risk impact and whether it's within risk tolerance" looks like with numbers.

#### Question 4 (moderate) — Cost-benefit of a control

The same risk owner asks about mitigation. Replacing the legacy file-transfer service with a managed, hardened alternative costs £90,000 per year and is assessed to cut the breach probability from 15% to 3%. Impact if breached stays £1.6 million.

What is the net annual benefit of the control?

- A) £192,000
- B) £102,000
- C) £48,000
- D) £142,000

**Correct answer: B**

**Explanation:** Expected loss before = 0.15 × £1,600,000 = £240,000. Expected loss after = 0.03 × £1,600,000 = £48,000. Risk reduction = £240,000 − £48,000 = £192,000. Net benefit = reduction − control cost = £192,000 − £90,000 = £102,000. Distractor A is the gross reduction (forgetting to subtract the cost); distractor C is the residual expected loss. Also note the residual expected loss of £48,000 is now comfortably within the £200,000 tolerance — a complete recommendation states both the net benefit and the residual position. This is the arithmetic backbone of "recommend security controls and identify solutions that support a business objective".

#### Question 5 (moderate) — Reading a metrics table

The table shows four services a security architect advises on:

| Service | Users | Incidents (12 months) | Security spend (annual) | Data sensitivity |
|---|---|---|---|---|
| Licensing portal | 480,000 | 12 | £360,000 | Medium |
| Grants system | 60,000 | 9 | £270,000 | High |
| Staff intranet | 24,000 | 3 | £96,000 | Low |
| Case management | 150,000 | 6 | £450,000 | High |

Which service has the highest security spend per user?

- A) Licensing portal
- B) Grants system
- C) Staff intranet
- D) Case management

**Correct answer: B**

**Explanation:** Compute spend ÷ users for each. Licensing portal: £360,000 ÷ 480,000 = £0.75 per user. Grants system: £270,000 ÷ 60,000 = £4.50 per user. Staff intranet: £96,000 ÷ 24,000 = £4.00 per user. Case management: £450,000 ÷ 150,000 = £3.00 per user. The grants system is highest at £4.50. The trap is picking case management because its absolute spend is largest — per-unit questions require the division every time. In stakeholder conversations, per-user and per-transaction figures often persuade where absolute budgets alarm; a candidate who is quick with them is demonstrating a communication asset, not just a test skill.

#### Question 6 (moderate) — Log storage capacity

A new protective monitoring design will ingest logs from 320 servers. Each server generates an average of 1.8 GB of logs per day. Policy requires 90 days of logs online. Compressed storage achieves a 4:1 ratio. How much online storage does the design need, to the nearest terabyte? (Use 1 TB = 1,000 GB.)

- A) 13 TB
- B) 52 TB
- C) 26 TB
- D) 18 TB

**Correct answer: A**

**Explanation:** Daily raw volume = 320 × 1.8 GB = 576 GB. Over 90 days: 576 × 90 = 51,840 GB ≈ 51.84 TB raw. Compression at 4:1 divides by 4: 51.84 ÷ 4 = 12.96 TB ≈ 13 TB. Distractor B is the uncompressed figure — the classic "ignored a stated factor" error; distractor C halves instead of quartering. Multi-step capacity questions reward writing the steps down: volume per day, retention multiplier, compression divisor. In a real design review a candidate would also add growth headroom, but the question asks only for the calculation as specified — the correct answer addresses only what is asked.

#### Question 7 (moderate) — Percentage change in incidents

Phishing-related incidents fell from 84 in the previous financial year to 63 this year, following a control programme the candidate recommended. Meanwhile total incidents fell from 240 to 210. Which statement is numerically correct?

- A) Phishing incidents fell 25%, and their share of all incidents fell from 35% to 30%.
- B) Phishing incidents fell 21%, and their share of all incidents was unchanged.
- C) Phishing incidents fell 25%, and their share of all incidents rose.
- D) Phishing incidents fell 33%, and their share of all incidents fell to 25%.

**Correct answer: A**

**Explanation:** Phishing change = (84 − 63) ÷ 84 × 100 = 21 ÷ 84 = 25% reduction. Share before = 84 ÷ 240 = 35%. Share after = 63 ÷ 210 = 30%. So A is correct on both counts. Distractor B computes the change on the wrong base (21 ÷ 100). The subtlety worth savouring: total incidents fell only 12.5% (30 ÷ 240), so phishing fell faster than the total and its share dropped — evidence the control worked beyond the general trend. Presenting both the absolute fall and the share shift is how a security architect demonstrates control effectiveness to a sceptical board.

#### Question 8 (hard) — Budget allocation with a ratio constraint

A security architecture programme has a £1.2 million annual budget. Governance requires spend to be split across prevention, detection, and response in the ratio 3:2:1. Midway through the year, £480,000 has been spent on prevention, £250,000 on detection, and £70,000 on response.

If the ratio must hold across the full year's spend, how much of the remaining budget must go to response?

- A) £130,000
- B) £200,000
- C) £70,000
- D) £120,000

**Correct answer: A**

**Explanation:** Full-year targets: total ratio parts = 3 + 2 + 1 = 6, so one part = £1,200,000 ÷ 6 = £200,000. Targets: prevention 3 × £200,000 = £600,000; detection 2 × £200,000 = £400,000; response 1 × £200,000 = £200,000. Response spend so far is £70,000, so remaining response spend = £200,000 − £70,000 = £130,000. Distractor B is the full-year response target (forgetting spend to date); distractor C is the amount already spent. Sanity check: remaining budget overall = £1,200,000 − £800,000 = £400,000, and remaining targets are £120,000 + £150,000 + £130,000 = £400,000 — it reconciles. Reconciling totals is a ten-second habit that catches most ratio errors, in tests and in real budget papers alike.

#### Question 9 (hard) — Comparing supplier security options

Two suppliers offer a hardware security module (HSM) service for a new digital signing capability expected to process 2.4 million signing operations per year:

- Supplier X: £60,000 fixed per year plus £0.015 per operation.
- Supplier Y: £96,000 fixed per year plus £0.002 per operation.

Which supplier is cheaper at the expected volume, and at what annual volume are the two equal in cost?

- A) X is cheaper; equal at about 1.8 million operations.
- B) Y is cheaper; equal at about 2.77 million operations.
- C) Y is cheaper; equal at about 2.4 million operations.
- D) X is cheaper; equal at about 2.77 million operations.

**Correct answer: D**

**Explanation:** Compute both totals at the stated volume first. X = £60,000 + 0.015 × 2,400,000 = £60,000 + £36,000 = £96,000. Y = £96,000 + 0.002 × 2,400,000 = £96,000 + £4,800 = £100,800. So X is cheaper at the expected 2.4 million operations. Break-even: 60,000 + 0.015V = 96,000 + 0.002V → 0.013V = 36,000 → V = 36,000 ÷ 0.013 ≈ 2,769,231 ≈ 2.77 million operations. The correct pairing is therefore "X is cheaper; equal at about 2.77 million operations". Under time pressure it is tempting to anchor on Y's higher fixed fee and assume it must be dearer everywhere, or to assume the lower per-operation rate must win — a careful candidate does both calculations. Above 2.77 million operations Y becomes cheaper, so if the service is forecast to grow, the recommendation should say so: a one-line sensitivity ("X until ~2.8M ops/year, then Y") is precisely the kind of advice that supports a business objective rather than just answering the immediate question.

#### Question 10 (hard) — Availability and downtime

A citizen identity service under review has an availability target of 99.9% measured over a 30-day month. A proposed security change (inline traffic inspection) is estimated to add 26 minutes of planned downtime per month and to introduce a 0.02% chance-weighted unplanned outage overhead already included in the figures below.

The service currently achieves 99.96% availability. Will the service still meet its 99.9% target after the change? (30 days = 43,200 minutes.)

- A) Yes — total downtime would be about 43 minutes against an allowance of about 43.2 minutes.
- B) No — total downtime would exceed the allowance by about 10 minutes.
- C) Yes — planned downtime does not count against availability targets.
- D) Cannot say without knowing the unplanned outage history.

**Correct answer: A**

**Explanation:** Allowance at 99.9%: 0.1% of 43,200 = 43.2 minutes per month. Current downtime at 99.96%: 0.04% of 43,200 = 17.28 minutes. Add the change's 26 minutes: 17.28 + 26 = 43.28 minutes — right at the allowance, effectively 43 minutes against 43.2. On these figures the service scrapes the target with almost no headroom. Option C is a policy assumption not given in the question; option D ignores that the current achieved figure already summarises history. The honest advisory framing is "technically compliant, zero headroom — one bad incident breaches the SLA", and a strong candidate might recommend scheduling inspection failover to cut planned downtime. Numeric assessments reward the calculation; the role rewards adding the headroom insight.

#### Question 11 (moderate) — Risk score weighting

A department scores risks as: Score = (Likelihood × 0.4) + (Impact × 0.6), each rated 1–5. The change advisory board treats any score of 3.4 or above as "high". A proposed change to the payments API is rated Likelihood 4, Impact 3. A second change to the HR portal is rated Likelihood 2, Impact 5.

Which change(s) classify as high?

- A) Payments API only
- B) HR portal only
- C) Both
- D) Neither

**Correct answer: C**

**Explanation:** Payments API: (4 × 0.4) + (3 × 0.6) = 1.6 + 1.8 = 3.4 — exactly at the threshold, and the rule says "3.4 or above", so it is high. HR portal: (2 × 0.4) + (5 × 0.6) = 0.8 + 3.0 = 3.8 — also high. So both classify as high. A candidate who chooses B has likely mis-read the threshold as "above 3.4" rather than "3.4 or above" — boundary conditions are a favourite test trap and an equally common defect in real risk procedures, so thresholds are worth reading with lawyerly care. When describing "different risk methodologies and how these are applied", weighted scoring versus simple likelihood-times-impact matrices is a standard comparison — note how the 0.6 impact weight made the HR portal's low-likelihood, high-impact profile score higher than intuition might suggest. That is proportionality of risk made visible in arithmetic.

#### Question 12 (moderate) — Patching coverage across an estate

An estate has 2,400 endpoints. A critical patch was released 14 days ago. Deployment reports show: 1,680 endpoints patched automatically, 360 patched manually, 240 awaiting scheduled maintenance windows, and the remainder unreachable (suspected stale records). Policy requires 95% coverage within 14 days.

What is current coverage, and how many endpoints are unreachable?

- A) 85% coverage; 120 unreachable
- B) 87.5% coverage; 96 unreachable
- C) 85% coverage; 96 unreachable
- D) 92.5% coverage; 120 unreachable

**Correct answer: A**

**Explanation:** Patched = 1,680 + 360 = 2,040. Coverage = 2,040 ÷ 2,400 = 0.85 = 85%. Accounted for = 2,040 + 240 = 2,280, so unreachable = 2,400 − 2,280 = 120. Coverage misses the 95% policy target by 10 percentage points. Distractor D counts the endpoints awaiting maintenance windows as covered — they are not patched yet, however good the intention. The advisory nuance: the 120 unreachable endpoints may be stale records (overstating the estate and understating true coverage) or genuinely unmanaged devices (a bigger risk than the unpatched figure suggests). A candidate who interrogates the denominator is asking better questions than one who just reads the headline percentage.

#### Question 13 (hard) — Multi-source data: consolidating monitoring costs

A security architect is evaluating consolidating three legacy monitoring tools into one platform. Current annual costs: Tool 1 licence £42,000 plus £18,000 support; Tool 2 licence £35,000 plus £10,000 support; Tool 3 is open source with £28,000 of annual engineering effort. The consolidated platform costs £88,000 per year all-in, plus a one-off migration cost of £45,000. Ignoring any discount rate, what is the payback period for the migration cost, to the nearest month?

- A) 8 months
- B) 12 months
- C) 15 months
- D) 5 months

**Correct answer: B**

**Explanation:** Current total = 42,000 + 18,000 + 35,000 + 10,000 + 28,000 = £133,000 per year. New cost = £88,000 per year. Annual saving = £45,000. Payback = one-off cost ÷ annual saving = £45,000 ÷ £45,000 = 1 year = 12 months. Distractor A comes from omitting Tool 3's engineering effort (£105,000 − £88,000 = £17,000 saving gives ~32 months — not offered, so a candidate who omits it usually then miscounts another line to reach a listed distractor; the safest protection is to list and tick every cost line before summing). Open-source tooling is a classic hidden-cost line: "free" software with £28,000 of engineering is a £28,000 tool. Including all relevant information is the Analysis skill, in pounds.

#### Question 14 (moderate) — Proportional scaling of a security service

A security operations partner charges the department for protective monitoring in proportion to events processed. Last year the estate generated 1.5 billion events and the charge was £180,000. The transformation programme will onboard two new services: one forecast to add 20% to event volume, the other to add 400 million events per year. Charging remains strictly proportional to volume.

What will the new annual charge be?

- A) £216,000
- B) £264,000
- C) £228,000
- D) £252,000

**Correct answer: B**

**Explanation:** Work in consistent units. Current volume = 1.5 billion = 1,500 million events. The first service adds 20%: 1,500 × 0.20 = 300 million. The second adds 400 million. New total = 1,500 + 300 + 400 = 2,200 million events. Rate per million events = £180,000 ÷ 1,500 = £120. New charge = 2,200 × £120 = £264,000. Equivalently, scale the charge by the volume ratio: £180,000 × (2,200 ÷ 1,500) = £180,000 × 1.4667 = £264,000. Distractor A applies only the 20% increase and forgets the 400 million; distractor D misreads the 400 million as 40% of current volume. The mixed presentation — one increment as a percentage, one as an absolute figure — is deliberate, and common in real programme papers: converting everything to the same unit before adding is the discipline this item tests. Forecasting how transformation changes security running costs is a routine part of assessing "the risk associated with proposed changes", and stakeholders will expect the arithmetic to be exactly right.

### Preparation tips

- **Percentage fluency matters most.** Percentage of, percentage change, percentage points, and reverse percentages cover most questions; candidates who have drilled these tend to move noticeably faster.
- **Naming the numerator and denominator first prevents most errors.** Most wrong answers in numeric tests are right calculations on wrong numbers — a candidate who states "375 out of 1,250" before calculating tends to catch this themselves.
- **Familiarity with real dashboards helps.** Candidates who have practised with vulnerability trends, patching coverage, or availability reports from their own estate will find the formats unsurprising.
- **Working in steps on paper reduces errors.** Multi-step problems (capacity, break-even, payback) go wrong when held in the head; two written lines per step is faster than one re-done calculation.
- **Sanity-checking catches order-of-magnitude slips.** Does 13 TB sound plausible for 320 servers? Does the ratio reconcile to the total budget? A five-second plausibility check catches the kind of slip these items are designed to expose.
- **The calculator is for arithmetic, not for thinking.** Candidates who decide the method first and then compute generally finish faster than those who reach for the calculator before framing the question.

### Common pitfalls

- **Misreading table labels and units.** Confusing monthly with annual figures, GB with TB, or ignoring qualifiers like "in thousands" is the single most common cause of lost marks.
- **Using the wrong base for percentage change.** Change is measured against the original value (21 ÷ 84, not 21 ÷ 63 or 21 ÷ 100).
- **Counting intentions as outcomes.** Endpoints "awaiting maintenance windows" are not patched; budget "committed" is not spent. These items, like audits, count what has happened.
- **Ignoring a stated factor.** Compression ratios, support costs, engineering effort — if the question states it, it is almost certainly needed.
- **Over-calculating.** Sometimes estimation reveals the answer: if three options are under £100,000 and a rough total is clearly above it, precision is wasted effort. Matching effort to what the options require is itself a skill worth noting in a candidate.
- **Time-sink questions.** A stubborn multi-stage problem can consume four questions' worth of time. A candidate who flags, skips, and returns is using time well — the marks are identical wherever they come from.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written business information. It mirrors the exact reading demands of the security architect role: dense security policies, technical standards, risk assessment reports, assurance findings, supplier security statements, and stakeholder emails. Passages use the terminology of the industry, and candidates must answer based strictly on the text provided, deliberately setting aside their own expert knowledge.

Typical format and timing: the candidate reads a passage, then answers questions in one of two formats. The most common is True / False / Cannot Say — is the statement definitely true from the passage, definitely false from the passage, or is there insufficient information to decide? The second is multiple-choice comprehension: identifying the best summary, the author's stance, or what a specific clause requires. Timing is tight, usually under a minute per question, to simulate workplace reading under deadline pressure.

For a security architect this is arguably the most job-realistic assessment of the four. The role requires the postholder to "interpret and apply an understanding of policy and process, business architecture, and legal and political implications" — interpretation of authoritative text is literally in the job description. When reviewing a supplier's security claims, the difference between "data is encrypted" and "data is encrypted at rest in our primary data centre" is a contract dispute waiting to happen. When translating security implications for non-technical stakeholders, a security architect must first extract precisely what a policy does and does not require — adding nothing, losing nothing. And when a candidate "successfully responds to challenges", the rebuttal is only as strong as the reading of the document being challenged.

### What it measures for this role

Mapped to the skills in the role profile:

- **Understanding security implications of transformation** — passages drawn from policy and legal-style text test the candidate's ability to "interpret and apply an understanding of policy and process... and legal and political implications". True/False/Cannot Say discipline is exactly the discipline of policy interpretation.
- **Communication (security architect)** — comprehension items test whether the candidate can "effectively translate and accurately communicate security and risk implications": accurate translation is not possible without accurate reading. Identifying a passage's precise claim is step one of stakeholder communication.
- **Analysis** — "consider all relevant information" appears here as reading every clause, including the exceptions and conditions where the meaning usually lives.
- **Enabling and informing risk-based decisions** — risk report passages test whether the candidate can separate what a document establishes from what it merely suggests — the foundation of honest advice to risk owners.
- **Designing secure systems** — standards and pattern documents are the role's design inputs; misreading a "must" as a "should" produces a non-compliant architecture, however elegant.

### Practice questions

For each passage, present the statement or question to the candidate and require an answer strictly from the text. For True/False/Cannot Say: True means the statement must be true given the passage; False means it must be false given the passage; Cannot Say means the passage does not provide enough information either way.

#### Passage A — Extract from a departmental cloud security policy

"All new services processing personal data must complete a security architecture review before their public beta phase. Services classified as high risk must, in addition, obtain approval from the Chief Security Officer before entering public beta. A service is classified as high risk if it processes special category data, or if it is expected to serve more than one million users annually. Services that entered public beta before 1 April this year are exempt from the review requirement until their next major release. Encryption of personal data in transit is mandatory in all cases; encryption at rest is mandatory unless a documented exception has been approved by the risk owner and recorded in the risk register."

#### Question 1 (easy) — True / False / Cannot Say

Statement: "A new service processing personal data and expecting 1.2 million users annually requires the Chief Security Officer's approval before public beta."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A (True)**

**Explanation:** The passage states a service is high risk if it is "expected to serve more than one million users annually" — 1.2 million qualifies. High-risk services "must, in addition, obtain approval from the Chief Security Officer before entering public beta." Both links in the chain are explicit in the text, so the statement is True. The reasoning is purely textual: no knowledge of real CSO approval processes is needed to answer it.

#### Question 2 (moderate) — True / False / Cannot Say

Statement: "A service that entered public beta in February this year does not need to encrypt personal data in transit until its next major release."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B (False)**

**Explanation:** The exemption for services that entered public beta before 1 April applies to "the review requirement" only. The passage then states encryption in transit "is mandatory in all cases" — an unqualified, universal requirement. The statement is therefore contradicted by the text: False. This is a scope-of-exception question, the single most common trap in policy reading: an exemption attached to one requirement quietly gets extended, in a careless reading, to all requirements. Real-world parallel: teams regularly cite a legacy exemption to dodge an unrelated control — quoting the exact scope of the exception is what "successfully respond to challenges" looks like in practice, and is exactly what this item tests.

#### Question 3 (moderate) — True / False / Cannot Say

Statement: "Special category data may be stored unencrypted if the risk owner approves and records a documented exception."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A (True)**

**Explanation:** The passage's encryption-at-rest requirement is "mandatory unless a documented exception has been approved by the risk owner and recorded in the risk register." The passage places no data-type restriction on that exception route — nothing says special category data is excluded from it. So, from the text alone, the statement is True. Many strong security professionals get this wrong by answering from professional instinct ("surely special category data would never be exempted!") rather than from the passage. That instinct is admirable in day-to-day practice and penalised in this test format — and noticing the gap is itself valuable: it points to the policy as drafted being weaker than it should be, which is exactly the kind of observation a security architect feeds back to policy owners.

#### Question 4 (moderate) — True / False / Cannot Say

Statement: "The security architecture review must be repeated at every major release."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C (Cannot Say)**

**Explanation:** The passage says pre-April services are exempt "until their next major release" — implying the requirement resumes then for those services — but it says nothing about whether reviews recur at every major release for any service. The statement might be true under a fuller policy, but this text neither establishes nor contradicts it: Cannot Say. The line between False and Cannot Say is worth drawing carefully here: False needs a contradiction in the text; absence of support is Cannot Say. This item is designed to catch candidates who blur exactly that line.

#### Passage B — Email from a programme director

"Thanks for your risk paper on the identity platform migration. I accept your assessment that the residual risk of running the legacy and new platforms in parallel is medium, and I'm content to proceed on that basis for up to six months. However, I do not accept the recommendation to delay the pensioner-facing channel; the Minister has committed publicly to a June launch. I'd like your team to propose compensating controls for the June launch by the end of this month. To be clear, my acceptance of the parallel-running risk does not extend to any risks arising from the compressed testing schedule, which I expect to be assessed separately."

#### Question 5 (easy) — Multiple choice

Which best describes the programme director's position?

- A) They reject the risk paper and demand a new assessment.
- B) They accept the parallel-running risk for a limited period, decline one recommendation for political-commitment reasons, and commission compensating controls.
- C) They accept all risks associated with the migration, including testing risks.
- D) They defer all decisions until compensating controls are proposed.

**Correct answer: B**

**Explanation:** Track each element. The director "accept[s] your assessment... content to proceed... for up to six months" (limited-period acceptance); rejects the delay because "the Minister has committed publicly to a June launch" (political commitment); and asks the team to "propose compensating controls" (commissioning). Option C is defeated by the final sentence, which explicitly carves out testing-schedule risks. Options A and D contradict the accepting, decisive tone of the text. This is exactly the kind of stakeholder email a security architect must parse precisely: what has been accepted, what has not, for how long, and with what conditions — because "manage stakeholder expectations" starts with recording their decisions accurately.

#### Question 6 (moderate) — True / False / Cannot Say

Statement: "The programme director has accepted the risks arising from the compressed testing schedule."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B (False)**

**Explanation:** The final sentence states directly: "my acceptance of the parallel-running risk does not extend to any risks arising from the compressed testing schedule". The statement asserts the opposite of what the text says, so it is False — not Cannot Say. When a passage explicitly negates a statement, the answer is False; Cannot Say would only apply if the email had been silent on testing risks. In risk governance terms, this distinction is the difference between "risk accepted by the SIRO" and "risk not yet accepted" — a line no security architect can afford to blur in a risk register.

#### Question 7 (hard) — True / False / Cannot Say

Statement: "The pensioner-facing channel will launch in June."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C (Cannot Say)**

**Explanation:** The director declines to delay the channel and cites the Minister's public commitment to June, and commissions compensating controls "for the June launch". But an intention, even a firm one, is not an outcome: the text cannot tell the reader that the launch will in fact happen in June — projects slip for many reasons. The statement is about a future fact the passage cannot guarantee: Cannot Say. This mirrors a subtle professional discipline: a stakeholder's stated intent is evidence of a plan, not of a result — the same distinction between "likely outcome" and "fact" that catches many candidates.

#### Passage C — Extract from a supplier's security assurance statement

"All customer data is encrypted at rest using AES-256 within our primary UK data centres. Backups are replicated to a secondary site. Access to production systems is restricted to a named group of engineers who have completed background checks; access is reviewed quarterly. Our platform has been assessed against ISO 27001, and our certification covers our hosting operations. Penetration testing is performed annually by an independent CREST-accredited provider, and all critical findings from the most recent test have been remediated."

#### Question 8 (hard) — True / False / Cannot Say

Statement: "Backup data held at the secondary site is encrypted at rest."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C (Cannot Say)**

**Explanation:** The encryption claim is precise: data is encrypted at rest "within our primary UK data centres". Backups are "replicated to a secondary site" — but the passage never states the secondary site's data is encrypted, nor that it is not. The statement can be neither confirmed nor contradicted: Cannot Say. This is the signature skill of supplier-statement review: assurance documents are often drafted so that true, specific claims create a broader impression than they support. Spotting that the encryption claim is scoped to the primary data centres — and asking the follow-up question about backups — is precisely how a security architect reviews supplier claims in real procurement. The same reading discipline earns the mark here.

#### Question 9 (moderate) — True / False / Cannot Say

Statement: "The most recent independent penetration test found at least one critical finding."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A (True)**

**Explanation:** The passage says "all critical findings from the most recent test have been remediated". Remediating critical findings presupposes that critical findings existed — nothing can be remediated that was never found. Strictly, "all" statements can be vacuously true of an empty set in formal logic, but verbal reasoning tests follow ordinary business English, where this sentence plainly communicates that findings existed and were fixed. Test conventions expect the natural reading. If the passage had said "no critical findings were identified, and any findings would be remediated", the answer would differ — which is exactly why, in real assurance reviews, a security architect should ask suppliers for the finding counts, not just the remediation claim.

#### Question 10 (hard) — Multiple choice

Which of the following would be the most accurate summary of the supplier statement's assurance coverage, as written?

- A) The supplier provides comprehensive, independently verified security across all operations and all data locations.
- B) The supplier makes specific, partly independently verified claims about encryption at the primary sites, access control, and testing, with notable silences on backup encryption and the scope of quarterly reviews.
- C) The supplier's certification proves that customer data is secure end to end.
- D) The statement demonstrates that no security risks remain in the supplier's platform.

**Correct answer: B**

**Explanation:** Option B matches the text's actual epistemic weight: the claims are specific (AES-256 at primary sites, named engineer group, quarterly access review, ISO 27001 covering hosting operations, annual CREST testing) and it is accurate to note the silences (backup-site encryption, as established in Question 8). Options A, C, and D all overstate: "all operations and all data locations" exceeds the certification's stated scope ("covers our hosting operations"); certification never "proves" data is secure; and no document can demonstrate that "no risks remain". Summarising a document at its true strength — neither inflating nor discounting — is the core of accurately communicating "security and risk implications to technical and non-technical stakeholders".

#### Passage D — Extract from a government security standard

"Departments should adopt multi-factor authentication for all user accounts. Departments must enforce multi-factor authentication for accounts with privileged access. Where legacy systems cannot technically support multi-factor authentication, departments must document the limitation, apply compensating controls, and include the system in their published remediation roadmap. This standard applies to all systems processing government data at OFFICIAL, including OFFICIAL-SENSITIVE. Systems operating at higher classifications are subject to separate requirements and are out of scope for this standard."

#### Question 11 (easy) — Multiple choice

According to the passage, what is a department's obligation regarding multi-factor authentication for ordinary (non-privileged) user accounts?

- A) It is mandatory in all cases.
- B) It is recommended but not mandated by this standard.
- C) It is mandatory unless a legacy exception is documented.
- D) It is out of scope for this standard.

**Correct answer: B**

**Explanation:** The passage uses "should" for all user accounts and "must" for privileged accounts. In standards drafting, "should" denotes a recommendation and "must" an obligation — and the passage's own contrast between the two sentences confirms the distinction is deliberate. So for ordinary accounts, MFA is recommended, not mandated: option B. Option C wrongly transplants the legacy-exception mechanism, which the text attaches to situations where systems "cannot technically support" MFA — and note that even that route carries three obligations (document, compensate, roadmap). Must/should discrimination is bread-and-butter for a security architect: an architecture that treats a "should" as optional without justification may still fail assurance, but one that treats a "must" as a "should" fails immediately.

#### Question 12 (moderate) — True / False / Cannot Say

Statement: "A system processing SECRET data must comply with this standard's multi-factor authentication requirements."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B (False)**

**Explanation:** The passage states that "systems operating at higher classifications are subject to separate requirements and are out of scope for this standard." SECRET is a higher classification than OFFICIAL (this is given contextually by the passage's structure: it names OFFICIAL and OFFICIAL-SENSITIVE as in scope and everything higher as out of scope). A SECRET system therefore is not subject to this standard — the statement is False as written. Careful: the SECRET system may well face equivalent or stricter MFA requirements under those separate rules, but the statement asked specifically about "this standard's" requirements. Answering True because "surely SECRET systems need MFA too" imports outside knowledge — the cardinal sin of verbal reasoning tests and of policy citation alike: cite the instrument that actually applies.

#### Question 13 (hard) — True / False / Cannot Say

Statement: "A department running a legacy OFFICIAL system that cannot technically support multi-factor authentication for privileged accounts is in breach of the standard if it applies compensating controls but does not publish the system in a remediation roadmap."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A (True)**

**Explanation:** The legacy provision imposes three conjunctive obligations: "document the limitation, apply compensating controls, and include the system in their published remediation roadmap". The scenario satisfies the compensating-controls limb but omits the roadmap limb (and is silent on documentation, but the roadmap omission alone is decisive). Failing any one limb of a conjunctive requirement is non-compliance, so the department is in breach: True. The word "and" is doing heavy lifting — requirements joined by "and" must all be met; had the text said "or", one would suffice. Reading conjunctions and disjunctions precisely is one of the most transferable skills between verbal reasoning tests and a security architect's daily work of interpreting policy for delivery teams.

#### Passage E — Extract from an internal risk assessment report

"The assessment identified that the document management system relies on a software component that reached end of vendor support in March. No security patches will be issued for newly discovered vulnerabilities in this component. Two vulnerabilities rated high severity were identified during the assessment; one has been mitigated by disabling the affected module, which reduced but did not eliminate the exposure. The system is scheduled for decommissioning within eighteen months. In the assessors' view, the residual risk is tolerable only if network access to the system is restricted to the case-working team and monitoring of the component is enhanced within three months."

#### Question 14 (moderate) — True / False / Cannot Say

Statement: "Both high-severity vulnerabilities identified during the assessment remain fully unmitigated."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B (False)**

**Explanation:** The passage states that "one has been mitigated by disabling the affected module, which reduced but did not eliminate the exposure". So at least one vulnerability has been (partially) mitigated — the claim that both remain "fully unmitigated" contradicts the text and is False. Be careful with the double qualifier: the mitigation is real but incomplete. A statement saying "one vulnerability has been fully resolved" would also be False ("reduced but did not eliminate"), and a statement about the second vulnerability's mitigation status would be Cannot Say, since the passage does not address it. Three different statements, three different answers, one sentence of text — this is why slow, surgical reading beats fast, impressionistic reading.

#### Question 15 (hard) — Multiple choice

According to the passage, under what conditions do the assessors consider the residual risk tolerable?

- A) If the system is decommissioned within eighteen months.
- B) If network access is restricted to the case-working team and component monitoring is enhanced within three months.
- C) If either network access is restricted or monitoring is enhanced.
- D) The assessors consider the residual risk intolerable in all circumstances.

**Correct answer: B**

**Explanation:** The final sentence sets out the assessors' view: tolerable "only if network access to the system is restricted to the case-working team and monitoring of the component is enhanced within three months". Both conditions are required — the "and" makes them conjunctive, defeating option C. Option A confuses the decommissioning schedule (a stated fact about plans) with the tolerability conditions (the assessors' stated requirements); decommissioning context may have informed their view, but the passage attaches tolerability to the two named conditions. The phrase "only if" is also worth respect: it states the conditions are necessary, which is what the question asks. This passage is a model worth a candidate copying when drafting risk advice — explicit conditions, explicit timescales — because it lets a risk owner make a genuinely informed decision, which is the whole point of "enabling and informing risk-based decisions".

### Preparation tips

- **Reading the statement before re-reading the passage helps.** Identifying exactly what the statement claims, then hunting for the specific clause that confirms or contradicts it, is faster than absorbing everything and hoping.
- **The False versus Cannot Say boundary is where most marks are lost.** False requires the passage to contradict the statement; missing information is always Cannot Say. This distinction is worth drilling until it is reflexive.
- **Expertise is a hazard as often as an asset here.** A candidate who knows a great deal about security can be tempted to answer from what they know rather than from the passage. The discipline this item rewards is: only the text counts — the same discipline used when reviewing a supplier's claims for what has actually been said, not what should be true.
- **Scope words carry the meaning.** "All", "only", "unless", "in addition", "does not extend to", "should" versus "must", "and" versus "or" — a candidate whose eye snags on these will read policy and passages alike more accurately.
- **Practice on real documents builds the skill from the inside.** Taking a paragraph from a security standard or a supplier assurance statement and writing three statements about it — one True, one False, one Cannot Say — teaches the format well.
- **The clock rewards one careful read over three anxious ones.** Under a minute per question means one careful read of the relevant clause. A question that resists should be marked and revisited, not laboured over.

### Common pitfalls

- **Importing outside knowledge.** The most common error for experts: answering what the candidate knows rather than what the passage says. The test measures reading, not security knowledge — paradoxically, expertise is the main hazard.
- **Extending exceptions beyond their scope.** An exemption from one requirement is not an exemption from all (Passage A, Question 2). Matching every exception to the exact requirement it modifies is the discipline this tests.
- **Confusing intent with fact.** A committed launch date is a plan, not an outcome (Passage B, Question 7). "Likely" in the text never becomes "certain" in the correct answer.
- **Being seduced by impressive-sounding claims.** Assurance language is drafted to reassure; scoped claims create unscoped impressions (Passage C). Every conclusion needs anchoring to quoted words.
- **Skimming the small words.** Must/should, and/or, all/only, unless — the difference between compliance and breach lives there, in tests and in architecture reviews alike.
- **Spending too long reading passages up front.** Reading the question first, then scanning for keywords, serves candidates better than whole-passage immersion, which the clock rarely affords.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill, and professional conduct. Unlike logic or numeric tests, it presents realistic workplace dilemmas to see how well the candidate's behavioural choices align with the values of the organisation and the demands of the security architect role. Scenarios are short, hypothetical situations — a delivery team pushing back on a control, a risk owner minded to accept a risk assessed as intolerable, a colleague's design containing a serious flaw — and the candidate is asked either to select the most effective and least effective responses, or to rank or rate all options from best to worst.

Typical format and timing: these assessments are usually untimed or generously timed, because they measure natural judgement rather than speed. There is rarely a single objectively "right" answer; several options may be defensible, but one best reflects effective professional behaviour in context. For UK public sector roles, that context includes the values running through government digital delivery: meeting user needs, transparency, collaboration across disciplines, accessibility and inclusion, and evidence-based, proportionate decision-making.

For a security architect, situational judgement is arguably where careers are made or stalled. The role profile is dense with interpersonal duties: "provide specialist advice and recommend approaches across teams and various stakeholders", "communicate widely with other stakeholders", "inspire and influence others to execute security principles", "manage stakeholder expectations and be flexible, adapting to stakeholder reactions to reach consensus", "work with risk owners to advise and give feedback", and "help review other people's work". None of these is a technical act; all of them are judgement acts. The scenarios below are built directly from those duties.

### What it measures for this role

Mapped to the skills in the role profile:

- **Communication (security architect)** — most scenarios test whether the candidate can "effectively translate and accurately communicate security and risk implications to technical and non-technical stakeholders", "successfully respond to challenges", and "manage stakeholder expectations... adapting to stakeholder reactions to reach consensus". The best options are almost always the ones that communicate early, honestly, and in the audience's language.
- **Enabling and informing risk-based decisions** — scenarios involving risk owners test whether the candidate informs decisions rather than making them for others, and respects governance while still giving candid advice.
- **Designing secure systems** and reviewing others' work — scenarios test how the candidate delivers difficult review feedback in a way that improves the design and strengthens the relationship.
- **Research and innovation** — scenarios about new technologies test whether the candidate enables safe adoption rather than defaulting to refusal.
- **Understanding security implications of transformation** — scenarios embed legal, political, and business-architecture pressures, testing proportionate judgement rather than purist positions.

### Practice questions

Present each scenario to the candidate before revealing the commentary. Where the format is "most/least effective", the candidate chooses one of each.

#### Scenario 1 (moderate) — The team that wants to skip the review

A delivery team building a new benefits-application service tells the security architect they intend to go to public beta next week without the security architecture review the department's standards require. The product manager says: "We're behind schedule, the Service Standard assessment is booked, and your review process takes three weeks. We'll do it right after launch, promise."

Options:

- A) Tell the product manager that launching without the review breaches departmental standards, and that the candidate will escalate to the programme board if they proceed.
- B) Offer a rapid, risk-focused review of the highest-impact areas (authentication, personal data flows, internet-facing components) this week, and agree a scheduled full review with the team's delivery plan.
- C) Agree to the post-launch review, since maintaining a good relationship with the team will make future security engagement easier.
- D) Say nothing to the team but privately note the non-compliance in the risk register so there is an audit trail.

**Most effective: B. Least effective: D.**

**Explanation:** Option B embodies the role at its best: it protects users and the business objective simultaneously, adapts the review process to the team's real constraints, and keeps the relationship collaborative — "recommend security controls and identify solutions that support a business objective" in action. It also reflects proportionality: the riskiest elements get scrutiny before launch. Option A may become necessary if collaboration fails, but leading with escalation is heavy-handed and forfeits influence; it is a second move, not a first. Option C sacrifices citizen data protection for relationship comfort — a relationship purchased at that price will not survive the first incident. Option D is the least effective: it protects the candidate while protecting no one else, withholds the very advice the team needs, and weaponises the risk register as a blame ledger rather than a decision tool. Transparency and collaboration — core public sector values — are absent from it entirely.

#### Scenario 2 (moderate) — The risk owner who wants to accept everything

A senior risk owner is minded to formally accept the risk of continuing to run an unsupported operating system on servers processing citizen correspondence, because migration funding was deferred. The security architect assesses the risk as significantly above the department's stated tolerance. The risk owner says: "It's my risk to accept — just record my acceptance."

Options:

- A) Record the acceptance as instructed; risk acceptance is the risk owner's prerogative and the candidate's role is to advise, not decide.
- B) Refuse to record the acceptance and escalate immediately to the Chief Security Officer.
- C) Acknowledge their authority, then set out in writing the specific impacts, the tolerance breach, and low-cost interim mitigations (segmentation, enhanced monitoring, restricted access), and ask them to confirm acceptance in light of that advice — noting that acceptance above tolerance requires sign-off at a higher governance level if the framework says so.
- D) Tell the risk owner that if an incident occurs, they will be held personally responsible, so they should reconsider.

**Most effective: C. Least effective: D.**

**Explanation:** Option C is the full expression of "work with risk owners to advise and give feedback" and "advise on risk impact and whether it's within risk tolerance": it respects the risk owner's authority, ensures the decision is genuinely informed, offers proportionate mitigations that reduce the risk without the deferred funding, and correctly invokes governance where tolerance is exceeded — transparency without insubordination. Option A abdicates the advisory duty: recording an uninformed acceptance is not neutrality, it is silent consent to a tolerance breach. Option B jumps the governance chain and treats escalation as a substitute for advice; escalation may follow, but only after the risk owner has had written advice and the framework's own route has been used. Option D is the least effective: it converts professional advice into personal threat, poisons the relationship, and — worse — frames risk management as blame allocation rather than decision quality. Influence built on fear does not survive contact with the next dilemma.

#### Scenario 3 (hard) — The flawed design from a respected colleague

A security architect is reviewing the architecture for a data-sharing integration designed by a well-liked, senior colleague from another team. The review finds a serious flaw: the design exposes an internal API to a partner organisation without per-request authorisation, relying solely on network allow-listing. The design has already been socialised with senior stakeholders as "approved in principle", and the colleague asks the candidate to "keep the review light — it's basically done."

Options:

- A) Raise the flaw directly with the colleague first, explain the exploit path and its consequences, and offer to work together on a fix before the review is finalised — making clear the written review must record the finding honestly.
- B) Keep the review light as requested; the colleague is senior and the design is already approved in principle, so raising the flaw now would embarrass everyone.
- C) Record the flaw in the written review without speaking to the colleague, and let the governance process surface it to stakeholders.
- D) Mention the flaw informally but agree to leave it out of the written review, provided the colleague promises to fix it later.

**Most effective: A. Least effective: B.**

**Explanation:** Option A does everything the role demands: it "helps review other people's work" with rigour, treats the colleague with respect by going to them first, offers collaboration on the remedy, and preserves the integrity of the written record — which is what senior stakeholders and future assurance depend on. This is also how a candidate "inspires and influences others to execute security principles": by modelling that findings are fixable problems, not accusations. Option C gets the record right but the relationship wrong: ambushing a colleague via a governance paper converts an ally into an adversary and teaches the organisation to hide designs from the security function. Option D corrupts the review record — an unwritten finding is an unmanaged risk, and "approved with a secret defect" is indefensible in any post-incident review. Option B is the least effective: it fails the users whose data the flaw exposes, fails the stakeholders relying on the review, and fails the colleague, who deserves the chance to fix the design before it hardens into production. Social comfort is not a security control.

#### Scenario 4 (moderate) — Explaining a vulnerability to the board

A critical vulnerability in a widely used software library affects several of the department's citizen-facing services. Patching is underway but will take ten days. The digital director asks the security architect to brief the executive board tomorrow: "Fifteen minutes, no jargon, they need to decide whether we keep services online."

Options:

- A) Prepare a technical deep-dive on the vulnerability's mechanism so the board fully understands the engineering, with a slide on exploit code seen in the wild.
- B) Prepare a plain-language briefing: what could happen in citizen and service terms, likelihood based on current threat intelligence, what is already mitigated, the options (stay online with enhanced monitoring, restrict features, take offline) with the risks and impacts of each, and a recommendation — then answer questions in the board's language.
- C) Advise the board that this is a technical matter that security and engineering should decide, and ask them simply to endorse the plan.
- D) Present worst-case scenarios prominently so the board takes the threat seriously and cannot later say they were not warned.

**Most effective: B. Least effective: C.**

**Explanation:** Option B is the Communication skill made concrete: "effectively translate and accurately communicate security and risk implications to... non-technical stakeholders". It gives the board what a governing body needs — consequences, likelihood, options, recommendation — in decision-ready form, and respects their authority to make the service-availability call, which is a business decision informed by security, not a security decision. Option A mistakes completeness for clarity; boards do not need exploit mechanics, and jargon obscures the decision. Option D is manipulation dressed as candour: overweighting worst cases distorts the decision and spends the candidate's credibility — the next briefing will be discounted. Option C is the least effective because it inverts governance: keeping citizen services online is exactly the kind of decision boards exist to own, and asking for rubber-stamp endorsement denies them informed choice while concentrating accountability on the security architect. Transparency means giving decision-makers real information and real options.

#### Scenario 5 (hard) — The minister's deadline versus the pen test

A high-profile service must launch on a date a minister has announced publicly. Five days before launch, the independent penetration test reports one critical finding (an authentication bypass on an admin interface) and several medium findings. The fix for the critical finding is estimated at eight days. The programme director asks the security architect: "Can we launch and fix it in week two?"

Options:

- A) Say no launch is possible until every finding is remediated, regardless of the announcement.
- B) Assess whether the critical finding can be neutralised by a compensating control for launch — for example, taking the admin interface off the internet and restricting it to the internal network with additional monitoring — verify the mitigation with the testers, and present the risk owner with the evidenced options and residual risk for a formal decision.
- C) Agree to launch and fix in week two; the political commitment outweighs a vulnerability that attackers may not find quickly.
- D) Tell the programme director the decision is theirs and decline to give a view, since the pressure is political rather than technical.

**Most effective: B. Least effective: C.**

**Explanation:** Option B demonstrates the mature centre of the role: neither purist refusal nor capitulation, but engineering a path that honours both the business objective and the security principle. Compensating controls that remove the exposed attack surface, verified by the original testers, can legitimately change the risk position — and the formal decision then sits, properly evidenced, with the risk owner. This is "understanding security implications of transformation" under political pressure, and "adapting to stakeholder reactions to reach consensus" without surrendering the analysis. Option A treats all findings as equal and ignores that the mediums may be tolerable for launch — disproportionate, and it burns influence on an unwinnable absolute. Option D abdicates: political context makes specialist advice more necessary, not less. Option C is the least effective: hoping attackers are slow is not a control, and an unmitigated critical authentication bypass on a high-profile, publicly announced service is precisely the finding attackers look for in week one. If it is exploited, the political damage will dwarf a launch adjustment — the advice fails even on its own political terms.

#### Scenario 6 (moderate) — The AI tool the teams are already using

A security architect discovers that three delivery teams have been using a consumer AI assistant to help write code and, in at least one case, have pasted configuration snippets containing internal hostnames into it. There is no departmental policy on AI coding assistants yet. The head of profession asks for a recommendation.

Options:

- A) Recommend an immediate ban on all AI assistants until a policy exists, with disciplinary consequences for further use.
- B) Recommend a short-term position that channels the demand safely: approve an enterprise-grade assistant with contractual data protections for general use, publish interim guidance on what must never be shared (credentials, citizen data, sensitive configuration), brief the three teams without blame, and start policy work with the teams as contributors.
- C) Take no action until formal policy is agreed, since acting without policy sets a bad precedent.
- D) Quietly ask the three teams to stop, without wider communication, to avoid drawing attention to the gap.

**Most effective: B. Least effective: D.**

**Explanation:** Option B reflects "research and innovation" as the role defines it: "identify new technologies and design their use in a business context" — the demand for AI assistance is real and productive, so the security answer is a safe channel, not a dam. It pairs enablement with immediate harm reduction (interim guidance on disclosures), treats the teams as partners rather than offenders (which protects future transparency — teams who fear blame hide behaviour), and builds durable policy from real use. Option A is disproportionate: bans on useful tools breed shadow usage that cannot be seen or secured, and punishing people for breaching a policy that did not exist is unjust and corrosive. Option C confuses process with safety — the disclosures are happening now. Option D is the least effective: it addresses three teams while leaving every other team exposed to the same mistake, communicates nothing, records nothing, and treats an organisational learning opportunity as an embarrassment to be managed. Openness about emerging risks is precisely how a security culture matures.

#### Scenario 7 (moderate) — The accessibility versus security clash

A service team is implementing the security architect's recommended authentication pattern, which includes a time-limited one-time code. The team's accessibility specialist raises that the 90-second code expiry fails some users — including users of assistive technology and users with motor or cognitive impairments — and cites user research showing task failure. A developer suggests "just turning off the timeout for everyone".

Options:

- A) Hold the 90-second expiry: security requirements take precedence, and exceptions create weakness.
- B) Accept the developer's suggestion and remove the timeout; user needs come first in government services.
- C) Work with the accessibility specialist and the team to redesign the mechanism so it is both secure and accessible — for example, longer expiry with compensating controls, resend flows, or alternative verified channels — testing options with the affected users, and update the pattern so every future service benefits.
- D) Grant this service a documented exception to the pattern and move on.

**Most effective: C. Least effective: A.**

**Explanation:** Option C treats accessibility and security as joint constraints to be co-designed, not ranked — which is both the letter of UK public sector values (services must be accessible and inclusive; they must also protect users) and good security thinking, since excluded users are pushed to insecure workarounds like phone-based proxies or shared credentials. Updating the pattern is the mark of a real architect: the fix scales beyond one service, which is what "develops architecture patterns and security approaches" means. Option D solves one team's Tuesday but leaves the flawed pattern to injure the next ten services. Option B swings to the other pole: removing the control entirely for all users trades one harm for another without analysis. Option A is the least effective in a government context: "security trumps users" fails the population the service exists to serve, contradicts the Service Standard's foundation of user needs, and is analytically lazy — the dichotomy is false, as option C demonstrates. Security that users cannot pass through is not security; it is exclusion with an audit trail.

#### Scenario 8 (hard) — The supplier who won't answer

A security architect is working on a procurement. The preferred bidder — strongly favoured by the commercial lead for price, and by the business for functionality — has returned vague answers to the security questionnaire: "industry-standard encryption", "regular testing", no evidence for data-location or sub-processor questions. Contract award is expected next week. The commercial lead says: "Don't blow this up — they're 30% cheaper."

Options:

- A) Sign off the security assessment; the market will have driven the supplier to reasonable practice, and price benefits citizens too.
- B) Formally object to the award and state the candidate will not sign off the assessment under any circumstances.
- C) Convert the unanswered questions into specific, time-boxed pre-award requirements — evidence of encryption standards, latest penetration test summary, named sub-processors and data locations, contractual security schedule with audit rights — and brief the commercial lead and SRO on exactly which risks remain unpriced until answered, so the award decision is made knowingly.
- D) Sign off now but plan a thorough security audit six months after the contract is signed.

**Most effective: C. Least effective: A.**

**Explanation:** Option C converts a confrontation into a process: it gives the supplier a fair, fast route to demonstrate adequacy (vague answers sometimes hide adequate practice poorly described — and sometimes hide the absence of practice), gives the commercial lead a path that protects the price advantage if the evidence comes back well, and ensures the SRO decides with eyes open if it does not. Note the framing "risks remain unpriced" — translating security gaps into commercial language is exactly "communicate security and risk implications to non-technical stakeholders". Option B may become necessary, but as an opening move it is a refusal where the situation still allows a requirement — and "under any circumstances" abandons the flexibility the role profile explicitly asks for. Option D is backwards: negotiating leverage evaporates at signature, and six months of citizen data will have flowed before the audit. Option A is the least effective: it substitutes hope for evidence, and "the market ensures good practice" is exactly the assumption that supplier breach post-mortems begin with. Cheap becomes very expensive when the data-location answer turns out to be a country the legal framework cannot accept.

#### Scenario 9 (moderate) — The junior colleague's shaky review

A security architect has been asked to help review other people's work, and a junior security colleague has produced their first solo architecture review of a low-risk internal tool. Their written report misses a moderate finding the candidate spots quickly (overly broad database permissions) and overstates a minor one. The report is due with the service team tomorrow.

Options:

- A) Rewrite the report tonight and send it out; the deadline matters and the fix is quick.
- B) Sit with the colleague, walk through how the missed finding was spotted and how to calibrate the overstated one, have them revise the report, and agree a light-touch checking pattern for their next few reviews.
- C) Let the report go out as written — the tool is low-risk, and the colleague's confidence matters more than a moderate finding.
- D) Send the report back with tracked-change corrections and a note listing the errors.

**Most effective: B. Least effective: C.**

**Explanation:** Option B invests an hour where it compounds: the colleague learns the method (how the miss was spotted, how to weigh severity), keeps ownership of their work, and the service team still gets an accurate report — mentorship and quality in one move. This is "inspire and influence others to execute security principles" applied inward, to the profession itself, and it is how review capability scales beyond any one architect. Option A hits the deadline but teaches nothing and quietly tells the colleague their work is replaceable; do that three times and the reviewer ends up owning every review forever. Option D corrects the artefact but not the practitioner — tracked changes show what was wrong, not how to see it next time, and a cold list of errors on a first solo review can do real damage to a developing professional. Option C is the least effective: it knowingly sends an inaccurate report to a service team, mis-teaches the colleague that findings are optional, and misunderstands confidence — professionals build durable confidence from being helped to be right, not from being allowed to be wrong. Low risk is not no risk, and the review record's integrity is the profession's currency.

#### Scenario 10 (hard) — The legacy discovery during transformation

Midway through a major transformation programme, a security architect's review of the current-state architecture uncovers that a "temporary" data feed, set up years ago, has been copying case data nightly to an unaccredited server run by another business unit — outside every diagram, register, and accreditation. Turning it off immediately would break a statutory reporting process the other unit runs. The programme wants to ignore it as "out of scope for transformation".

Options:

- A) Turn off the feed immediately; unaccredited processing of case data cannot continue, and the reporting process must find another way.
- B) Agree it is out of scope and note it for a future programme; the transformation has enough to deliver.
- C) Ensure the exposure is formally logged and owned: get interim safeguards onto the server (access restriction, monitoring, encryption where feasible), inform the data protection officer given the nature of the data, and take a costed options paper to programme governance for remediating or properly rebuilding the feed within the transformation — since the transformation is the funded vehicle that can actually fix it.
- D) Report the other business unit to internal audit for running an unaccredited system.

**Most effective: C. Least effective: B.**

**Explanation:** Option C holds all the tensions the role profile describes — "interpret and apply an understanding of policy and process, business architecture, and legal and political implications to assist the development of technical solutions". It respects the statutory dependency (so no abrupt shutdown), triggers the legal obligations that personal-data exposure may carry (the data protection officer), reduces harm now with interim safeguards, and — crucially — routes the permanent fix into the funded programme rather than an unfunded someday. Option A honours the security instinct but breaks a statutory process on the candidate's own authority: that decision belongs to governance, informed by specialist advice, and there were safer intermediate steps available. Option D treats a systemic legacy failure as individual misconduct; audit may eventually have a role, but leading with blame guarantees the next hidden feed stays hidden. Option B is the least effective: "out of scope" is how this feed survived unexamined for years, and consciously re-burying a known exposure of case data is worse than never having found it — discovery creates a duty. Transformation programmes are precisely when such archaeology surfaces; a security architect's job is to make the finding fixable, not to make it disappear.

#### Scenario 11 (moderate) — The challenge in the open forum

At a cross-government architecture community session, a principal engineer from another team publicly challenges the security architect's published zero-trust network pattern: "This is cargo-cult security — it adds latency and complexity, and half these controls are theatre." Thirty colleagues are watching, including several who use the pattern.

Options:

- A) Defend the pattern point by point, firmly, and note that it went through formal governance that the engineer did not attend.
- B) Thank them for the challenge, respond substantively to the points that can be addressed (with the evidence and threat model behind the pattern), acknowledge any point that lands (perhaps the latency cost is real and worth quantifying), and offer a follow-up session to work through their analysis — then actually update the pattern if their critique holds.
- C) Suggest taking it offline immediately, as public disagreement undermines confidence in security architecture.
- D) Concede quickly to defuse the situation and promise to revisit the pattern.

**Most effective: B. Least effective: D.**

**Explanation:** "Successfully respond to challenges" is written into the Communication skill, and option B is what it looks like: engaging on the merits, in the open, with the evidence — while modelling that patterns are living artefacts improved by critique. Acknowledging a valid point in public costs nothing and buys enormous credibility; the thirty watching colleagues learn that the candidate's patterns are defended by reasoning, not by rank. Option A leans on governance as authority — "it was approved" answers a process question, not a technical challenge, and the audience will notice. Option C wastes the moment: the community exists for exactly this exchange, and rushing disagreement behind closed doors reads as having something to hide. Option D is the least effective: conceding points that have not been examined abandons the users of the pattern and teaches the community that pressure beats evidence — the opposite of inspiring others to execute security principles. Consensus is reached through the argument, not instead of it.

### Preparation tips

- **The strongest options inform, enable, and collaborate.** They rarely unilaterally decide, threaten, or conceal. A useful test for any option is: "Whose decision is this, and does the option equip them to make it well?"
- **Options that serve the user and the objective together tend to rank highest.** In UK government contexts, options that protect citizens while supporting the business outcome nearly always outrank purist refusals and quiet capitulations alike.
- **Passive options are reliably weak.** Options that delay, defer, hide, or hand the problem away untreated — and options that protect the candidate personally (audit trails, blame notes) while protecting no one else — score poorly.
- **Rehearsing real dilemmas builds the judgement being tested.** A candidate who takes situations from their own work — a resisted control, a tense review — and writes four options of varying quality, then ranks them and explains the ranking aloud, builds exactly the judgement this assessment samples.
- **Reading every option before rating any matters.** Most/least formats are comparative: an option that seems fine in isolation may be clearly second-best next to its neighbour.
- **Ambiguity is expected, not a flaw in the item.** These scenarios contain genuinely arguable situations. The strongest answer is usually the behaviour a candidate could defend to a risk owner, a service user, and a colleague simultaneously.

### Common pitfalls

- **Answering idealistically rather than effectively.** "Refuse until perfect" sounds principled but often abandons users and the business outcome. Effective options manage the risk while the work of government continues.
- **Selecting passive or self-protective options.** Logging a risk without telling anyone, deferring to future policy, quiet words without record — these consistently score poorly because they treat security as personal cover rather than shared protection.
- **Ignoring organisational values.** UK public sector scenarios reward transparency, collaboration, accessibility, and proportionality. An option that wins the argument but hides information or excludes users is weaker than it looks.
- **Overusing escalation.** Escalation is a legitimate tool with a place in the sequence — after advice, evidence, and collaboration, not instead of them. First-move escalation reads as influence failure.
- **Forgetting whose decision it is.** Security architects advise; risk owners and boards decide. Options where a candidate seizes or abdicates that boundary — deciding for others, or declining to advise — sit at the weak ends of the scale.
- **Choosing to avoid embarrassment.** Several scenarios test whether the candidate will trade integrity of records or reviews for social comfort. The assessment — like a post-incident review — always finds that trade.

## Conclusion

This concludes the assessment material for security architect. Score each section against the answer key above, noting not just whether an answer was correct but the quality of the candidate's reasoning where the format allows for it — a partially correct multi-step answer, or a well-argued situational judgement choice that did not quite match the model answer, can still be informative.

Once scoring is complete, debrief the candidate. Share what the assessment covered, where they performed strongly, and where the discussion might usefully go deeper — the explanations above give you the reasoning to draw on for that conversation. A debrief is often as valuable as the score itself, both for the candidate's development and for surfacing context the assessment alone cannot capture.

Keep a record of how the assessment was administered and scored for each candidate, and administer it consistently: the same items, the same time limit, and the same scoring approach for every candidate you assess for this role level. Consistency is what makes any comparison between candidates fair, and it is what protects the process if it is ever challenged.

Finally, remember the advisory above: this material is not validated, not normed, and not checked for adverse impact. Use it as one input among several — alongside interview, reference, and evidence of past work — and consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues before relying on the result for a hiring, promotion, pay, performance or disciplinary decision.
