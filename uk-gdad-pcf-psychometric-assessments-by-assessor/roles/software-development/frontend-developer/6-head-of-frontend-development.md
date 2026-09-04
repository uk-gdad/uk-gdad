# Head of Frontend Development - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for head of frontend development. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

The role is an expert practitioner with broad industry experience, either expert across many technical areas or a specialist with very deep knowledge in one. The role summary names defining and assuring best practice while influencing, leading and mentoring others; influencing and developing organisational strategy and priorities in collaboration with counterparts across government; ensuring the right conditions and environment for frontend developers to work effectively; and developing departmental capability through internal mobility, career paths and recruitment. The skills attached to the level are unusually broad: leading strategy for the whole organisation, making and justifying decisions of high risk, impact and complexity, building consensus between organisations and highly independent stakeholders, mediating and coaching the organisation on team dynamics and conflict resolution, and speaking on behalf of and representing the community to large audiences.

A great deal of the role's effect is achieved through other people's willingness — teams adopt standards because they are good and because they trust the person who set them, not because they can be compelled. Accessibility, which sits at the centre of frontend practice in government, is a legal and moral obligation this role is frequently the most senior advocate for in any given room.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for whether a candidate treats non-adoption of a standard, a recurring cross-team defect, or a department-wide behaviour as a structural or design signal rather than a discipline or knowledge failure — several items are built so the intuitive "remind them" or "mandate it" answer is the wrong one. Situational judgement items at this level often reward a candidate who verifies before acting on second-hand information, and who applies the same scrutiny to their own standard, endorsement, or past decision as to anyone else's; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role demands, presented through material drawn from the role — organisational strategy, standards and assurance decisions, capability planning, cross-government coordination, and technical judgements whose consequences are distributed across many teams.

Typical format: 15 to 30 minutes online, covering deduction, pattern recognition, error checking, prioritisation and applied problem solving, scored against a norm group of comparable seniority.

Three things distinguish this section at head-of-profession level: a standard set is paid for by everyone, daily, for as long as it stands, so the question is whether the benefit exceeds the distributed cost of compliance; adoption is a design problem, and a practice that is better but harder to follow loses to one that is worse but easier, every time; and reasoning is usually from second-hand information, filtered through people with a view, so the strong response includes a step to check the picture rather than acting on the version that arrived.

### How this assessment maps to the role

- **Standards and assurance reasoning** maps to defining and assuring best practice, and to **Modern development standards**.
- **Organisational diagnosis** maps to ensuring the right conditions and environment for frontend developers.
- **Strategy reasoning** maps to **Strategic thinking**: leading design and implementation of strategy.
- **Capability reasoning** maps to internal mobility, career paths, and recruitment.
- **Accessibility judgement** maps to **Accessibility**: advocacy and design solutions.
- **Conflict and consensus** map to **Leadership and guidance (frontend developer)** and **Community collaboration**.

### Practice questions

**Question 1 (easy) — Deduction from an assurance rule**

Standard: "A service may not pass its assurance review with any outstanding critical accessibility issue, unless a time-bound remediation plan has been agreed with the accessibility lead." A service passed its review with an outstanding critical issue. Ask which conclusion must be true.

- A) The standard was breached.
- B) A remediation plan was agreed.
- C) Either a time-bound remediation plan was agreed with the accessibility lead, or the standard was breached.
- D) The pass should be revoked.

**Correct answer: C**

**Explanation:** A rule with an exception, plus a fact silent on the exception, licenses only the disjunction; A and B each pick a branch, and D prescribes rather than deduces. This tests concluding only what is guaranteed, with the practical point that if agreed plans are not recorded against the review, the standard cannot be audited at all.

**Question 2 (easy) — Adoption as a design problem**

Accessible component patterns are published; six months on, most teams are still building their own. Ask for the strongest reading.

- A) Teams need reminding that the patterns exist.
- B) Capable teams building their own after the patterns were published indicates that using them is harder than not — most likely they are hard to find, hard to integrate into existing build setups, or missing the variants teams actually need — so the fix is in the friction rather than in the communication.
- C) The patterns should be mandated.
- D) Teams prefer building things.

**Correct answer: B**

**Explanation:** Reuse loses to rebuilding whenever rebuilding is cheaper for the team making the choice. This tests treating persistent non-adoption by capable people as a design signal with three specific, differently-fixable causes, rather than a communication gap (A) or an enforcement gap (C).

**Question 3 (moderate) — A standard's distributed cost**

Considering mandating two hours of manual screen reader testing before every release across fourteen teams. Ask for the strongest analysis.

- A) Mandate it; screen reader testing catches what automated tools miss.
- B) Price it across the volume — fourteen teams releasing, say, twice a week each, at an hour per test, is roughly 1,450 hours a year — and then ask whether the same benefit is available more cheaply, for instance by testing at the component level once rather than at every release of every service.
- C) Mandate it for major releases only.
- D) Recommend rather than mandate it.

**Correct answer: B**

**Explanation:** A's premise is true and does not settle the question, since nobody has computed the large recurring cost. This tests pricing a practice across its actual volume before mandating it, and then asking where in the pipeline the same benefit is available more cheaply.

**Question 4 (moderate) — Second-hand information**

A delivery director says a frontend team is "blocking progress" on a programme. Ask for the strongest first step.

- A) Speak to the team's lead about unblocking it.
- B) Get the team's account before doing anything, because "blocking" is what it looks like from outside when a team is refusing to ship something they believe is unsafe or inaccessible — and if that is what is happening, the useful response is the opposite of unblocking them.
- C) Ask the director what specifically is blocked.
- D) Escalate to the programme's technical lead.

**Correct answer: B**

**Explanation:** "Blocking" describes an effect, and the two most common causes point in opposite directions. This tests getting the missing account before acting on a characterisation — C gets a more detailed version of the same one-sided account, while A assumes the framing is accurate.

**Question 5 (moderate) — Capability development**

Three strong mid-level frontend developers, no senior vacancies, all being approached by other organisations. Ask for the strongest response.

- A) Make a case for creating senior posts.
- B) Be honest with each about what is and is not available here, and work the routes that exist — scope that stretches them, roles elsewhere in the department, secondments across government — because keeping a strong person in the organisation is a much better outcome than losing them, and a head who helps people move internally is told about approaches early.
- C) Focus on retaining the strongest of the three.
- D) Accept it; people move on.

**Correct answer: B**

**Explanation:** This tests widening the frame to the department and government, where genuine opportunities exist, and being honest about the local constraint — which is what makes any offer credible, and what makes people disclose approaches early in future rather than after they have decided.

**Question 6 (moderate) — Reading a pattern across services**

Accessibility audits across nine services find the same three issue types accounting for most findings: unlabelled form controls, insufficient contrast on secondary buttons, modals that do not manage focus. Ask for the strongest conclusion.

- A) Teams need accessibility training.
- B) Three issue types recurring across nine independent teams indicates a supply problem rather than a knowledge problem — the components teams are using do not handle these cases correctly, or the design tooling permits non-compliant colours — so fixing the shared components and the colour palette removes the issues at source.
- C) Audits should be more frequent.
- D) The design system should be mandated.

**Correct answer: B**

**Explanation:** Nine teams independently producing the same three defects is a supply signal with a source-level fix for each. This tests recognising when a recurring cross-team defect is faster and more durably fixed at the source than through training (A) or more frequent detection (C).

**Question 7 (hard) — A cross-government commitment**

Counterparts in three other departments propose a shared component library; the department's existing library works well. Ask for the strongest analysis.

- A) Decline; your library works and migration would be costly.
- B) Weigh what sharing actually buys against what it costs in decision speed — a shared library means your teams' needs compete with three other departments' priorities, which is a real ongoing cost — and look for the middle option of sharing the parts where duplication is genuinely wasteful, such as accessibility-critical components, while keeping departmental control of the rest.
- C) Join; cross-government reuse is the right direction.
- D) Propose that the others adopt yours.

**Correct answer: B**

**Explanation:** The cost that actually decides such arrangements is not migration but ongoing decision speed under shared governance. This tests naming the real cost and identifying the partial-sharing option, where most successful cross-government collaboration lands, rather than accepting a principle without pricing it (C) or declining without exploring the middle (A).

**Question 8 (hard) — An organisational condition problem**

Frontend developers across the department report being brought into projects after designs are finalised. Ask for the strongest response.

- A) Ask delivery managers to involve developers earlier.
- B) Find out what determines when they are brought in — usually a funding or governance stage that releases development resource only after a design phase completes — because if the sequencing is structural then asking people to behave differently within it will not work, and the fix is to change the stage definition or the resourcing model.
- C) Add a design review step involving frontend developers.
- D) Train designers in frontend constraints.

**Correct answer: B**

**Explanation:** A consistent behaviour across a whole department is almost always structural, and the usual structure is a funding or assurance gate. This tests looking for the structural cause rather than asking individuals to act against the incentives they face (A) or adding a step inside the broken sequence (C).

**Question 9 (hard) — Assuring a decision you disagree with**

A service being assured has taken a technical approach considered poor but that meets every standard. Ask for the strongest response.

- A) Pass the assurance and note concerns.
- B) Pass it, because assurance is against the standard and using it to enforce preferences destroys the distinction between what is required and what is preferred — and separately consider whether the gap between the standard and this view means the standard is missing something worth adding.
- C) Pass it conditionally.
- D) Fail it; poor approaches should not pass.

**Correct answer: B**

**Explanation:** Assurance's integrity depends on being predictable; a reviewer who fails compliant work on judgement makes the standard meaningless. This tests holding that line and doing something useful with the disagreement — asking whether the standard should be updated — rather than substituting personal preference for the published rule (D).

**Question 10 (hard) — Competing accounts of a conflict**

Two teams are in conflict over a shared component; each lead has given an incompatible account. Ask for the strongest approach.

- A) Determine which account is accurate.
- B) Treat both accounts as accurate descriptions of each party's experience and look for the structural cause that generates both — most commonly an unclear ownership boundary where each team believes the other is responsible for something — because adjudicating between accounts creates a loser and leaves the generator in place.
- C) Assign ownership to one team.
- D) Bring in a mediator.

**Correct answer: B**

**Explanation:** Incompatible accounts of the same events usually mean two parties experiencing different consequences of one unresolved structural question. This tests looking for the generator (usually an ownership or decision-rights ambiguity) rather than adjudicating between accounts, which produces a verdict, a loser, and a recurrence.

**Question 11 (hard) — A strategy with no exclusions**

Asked to write a frontend strategy for the department. Ask what most determines whether it has any effect.

- A) That it is endorsed by senior leadership.
- B) That it says what the department will not do — which frameworks will not be supported, which patterns are out of scope, which needs will not be met centrally — because a strategy that only affirms good things gives nobody a basis for declining anything and therefore changes no decision.
- C) That it aligns with the wider government service standard.
- D) That teams are consulted in writing it.

**Correct answer: B**

**Explanation:** A strategy exists to settle questions in advance so individual cases do not have to be argued from scratch, which it can only do by excluding. This tests recognising that endorsement, alignment and consultation (A, C, D) are all necessary conditions for effect, but exclusion is what actually creates it.

**Question 12 (hard) — Representing the community publicly**

Asked to speak publicly about the department's accessibility work; the reality is mixed, strong in some services and poor in others. Ask for the strongest approach.

- A) Present the strong examples; the talk is about what works.
- B) Present the strong work and be specific about what has not worked and why, because an honest account is more useful to the audience, more credible, and protects against the discovery that the poor services exist — and because the candidate's own community will hear it and know whether it described their reality.
- C) Speak in general terms about the challenges.
- D) Decline until the picture improves.

**Correct answer: B**

**Explanation:** Two audiences are listening simultaneously — an external one that can learn most from the failures, and an internal one that will notice immediately if only the good services are described. This tests serving both audiences honestly rather than presenting a partial picture (A), avoiding the risk entirely (C), or forgoing influence indefinitely since the picture is always mixed (D).

### Administration tips

- Score for whether the candidate treats persistent non-adoption, a recurring cross-team defect, or a department-wide behaviour as a structural or design signal rather than a discipline or knowledge failure.
- Note whether the candidate prices a proposed mandate across its actual volume (teams × frequency × duration) before recommending it.
- Watch for whether second-hand information is verified with the missing party before being acted on.
- Score for whether assurance is applied against the published standard consistently, with disagreement channelled into revising the standard rather than the individual decision.
- Note whether the candidate looks for a structural generator behind two incompatible accounts rather than adjudicating between them.

### Common pitfalls to watch for when scoring

- Crediting a response to non-adoption that relies on reminding or mandating rather than diagnosing the friction.
- Missing when a candidate mandates a practice without computing its distributed, recurring cost.
- Rewarding action taken on one party's characterisation of another without seeking the missing account.
- Accepting a failed assurance decision based on personal preference rather than the published standard.
- Missing when a candidate adjudicates between two incompatible accounts rather than identifying their shared structural cause.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment tests whether a candidate can reach a defensible conclusion from data at speed. At head-of-profession level the data is service-wide performance and accessibility metrics, capability and recruitment figures, the cost of standards across many teams, and business cases to support or challenge.

Typical format: 15 to 25 minutes with a calculator, mixing computation with interpretation — interpretation dominating, since most numbers seen at this level were produced by someone making a case.

Three habits are worth naming: percentages of a large public user base are people, and converting one to the other is the single most persuasive thing to do with a number in front of a senior stakeholder; any mandated practice has a cost equal to its per-instance cost multiplied by the number of teams and the frequency, and this level is often the only person in the room likely to compute it; and aggregate service metrics hide the users the role exists to represent — a department-level accessibility score says almost nothing about whether a screen reader user can complete a specific journey.

### How this assessment maps to the role

- **Accessibility metrics** map to **Accessibility**: advocacy for users with access needs.
- **Performance data** maps to **Web performance optimisation**: collecting data from multiple tools.
- **Cost of standards** maps to defining and assuring best practice.
- **Capability and recruitment figures** map to developing departmental capability.
- **Portfolio metrics** map to **Strategic thinking**.
- **Presenting figures** maps to **Communicating information**.

### Practice questions

*Table 1 — Accessibility audit results across six services*

| Service | Annual users | Pages audited | Critical issues | Serious issues |
|---|---|---|---|---|
| Apply | 1,200,000 | 34 | 3 | 18 |
| Check | 480,000 | 12 | 0 | 4 |
| Register | 2,400,000 | 51 | 9 | 41 |
| Renew | 890,000 | 22 | 1 | 11 |
| Report | 160,000 | 18 | 4 | 9 |
| Update | 640,000 | 15 | 2 | 7 |

**Question 1 (easy) — Reading a table**

Ask which service has the most critical issues.

- A) Apply
- B) Register
- C) Report
- D) Update

**Correct answer: B**

**Explanation:** Register has 9, ahead of Report's 4 and Apply's 3. This tests direct table reading, noting Register is also the largest service and has the most pages audited — a larger audit surface tends to produce more findings, addressed in the next question.

**Question 2 (easy) — Total exposure**

Ask approximately how many annual users are served by services with at least one critical issue.

- A) About 5.3 million
- B) About 5.8 million
- C) About 4.4 million
- D) About 2.4 million

**Correct answer: A**

**Explanation:** All services except Check qualify: 1,200,000+2,400,000+890,000+160,000+640,000=5,290,000. This tests converting a count of affected services into a headline figure — the number that gets attention in a governance meeting, more useful than a raw issue count.

**Question 3 (moderate) — Normalising by audit surface**

Ask which service has the highest rate of critical issues per page audited.

- A) Register
- B) Report
- C) Apply
- D) Update

**Correct answer: B**

**Explanation:** Report 4/18≈0.22, ahead of Register's 9/51≈0.18. This tests normalising by audit surface before comparing services — the correct correction changes the answer from Question 1, and Report being the smallest service by users creates a genuine prioritisation tension rather than a contradiction.

**Question 4 (moderate) — Prioritising remediation**

Ask which service should be prioritised for remediation, and on what basis.

- A) Register, because it has the most critical issues.
- B) Register, because it combines the second-highest defect rate with 2.4 million users — so the number of people encountering a critical barrier is far larger there than anywhere else — although the honest caveat is that neither the table nor issue counts tell you which journeys are blocked, and one critical issue on a mandatory step matters more than five on a rarely-visited page.
- C) Report, because it has the highest defect rate.
- D) All six equally.

**Correct answer: B**

**Explanation:** Combining rate with exposure, Register dominates: a near-worst rate applied to a user base fifteen times larger than Report's. This tests combining two dimensions correctly and naming the genuine limitation (issue counts unweighted by journey criticality) rather than stopping at a single-dimension answer (A, C) or declining to prioritise (D).

**Question 5 (moderate) — Cost of a mandated practice**

Considering mandating two hours of accessibility testing per release; fourteen teams release an average of 90 times a year each. Ask for the approximate annual cost in developer time.

- A) About 1,260 hours
- B) About 2,520 hours
- C) About 630 hours
- D) About 5,040 hours

**Correct answer: B**

**Explanation:** 14×90=1,260 releases; ×2 hours=2,520 hours, roughly 1.4 full-time-equivalents indefinitely. This tests computing the full recurring cost of a mandate before proposing it — the number that needs to be on the table before the conversation can happen honestly.

*Table 2 — Frontend capability, current position*

| Level | Posts | Filled | Average months in post |
|---|---|---|---|
| Junior | 12 | 7 | 9 |
| Mid-level | 26 | 24 | 21 |
| Senior | 14 | 9 | 34 |
| Lead | 5 | 5 | 41 |

**Question 6 (moderate) — Vacancy rate**

Ask for the overall vacancy rate across frontend posts.

- A) About 12%
- B) About 21%
- C) About 28%
- D) About 16%

**Correct answer: B**

**Explanation:** 57 total posts, 45 filled, 12 vacant, 12/57≈21%. This tests basic calculation, and in a strong answer, reading the distribution rather than the total — 42% vacant at junior and 36% at senior, with mid-level nearly full, is a specific and diagnosable shape.

**Question 7 (hard) — What the shape shows**

Ask for the strongest interpretation of the distribution in Table 2.

- A) Recruitment is failing across the board.
- B) The pattern is consistent with a pipeline problem in both directions — junior posts unfilled means nothing is coming in, senior posts unfilled with mid-level nearly full means people are not progressing or are leaving before they do — and the 21-month average at mid-level against 34 at senior suggests mid-level turnover is the pressure point.
- C) Too many posts have been created.
- D) Senior recruitment should be prioritised.

**Correct answer: B**

**Explanation:** The two vacancy concentrations have different causes, connected by the middle bulge; the tenure figures point at mid-level as the pressure point. This tests reading the whole shape of a distribution rather than treating it as uniform (A) or addressing only the symptom (D), which would worsen the underlying tenure problem by recruiting externally into posts internal people could fill.

**Question 8 (hard) — Recruitment arithmetic**

To fill 5 senior vacancies externally, historical data shows 40 applications per post, 6 shortlisted, 1.4 appointable, 0.7 appointments made per campaign. Ask roughly how many campaigns are needed.

- A) 5
- B) 7
- C) 3
- D) 10

**Correct answer: B**

**Explanation:** 5÷0.7≈7.1 campaigns. This tests basic division to a real figure, and in a strong answer, recognising that seven campaigns' consumed panel time and elapsed months makes internal development (promoting from mid-level) a visible, cheaper alternative rather than a vague aspiration.

**Question 9 (hard) — A performance claim**

A supplier claims a 30% LCP improvement across services; current 75th percentile LCP is 4.2s. Ask for the strongest assessment.

- A) That would bring LCP to 2.94s, which passes the 2.5s "good" threshold.
- B) A 30% improvement on 4.2s gives 2.94s, which still fails the 2.5s threshold at the 75th percentile — so even if the claim holds in full, the services would remain in the "needs improvement" band, and the question is whether that partial gain justifies the cost.
- C) The claim cannot be assessed without more information.
- D) A 30% improvement is implausible.

**Correct answer: B**

**Explanation:** 4.2×0.7=2.94s, which is above the 2.5s threshold. This tests knowing and applying the Core Web Vitals thresholds instantly (option A does the arithmetic correctly and misreads the threshold), and drawing the conclusion that a partial gain needs justifying on its own terms.

**Question 10 (hard) — Trend or noise**

Quarterly critical accessibility issue counts: 21, 17, 24, 15, 19, 14. Asked whether accessibility is improving. Ask for the strongest answer.

- A) Yes; the count has fallen from 21 to 14.
- B) The series moves between 14 and 24 with a slight downward drift — the first three average 20.7 and the last three 16 — but the count depends on how much auditing was done each quarter, so without normalising by pages audited the series may be measuring audit activity rather than accessibility.
- C) No; the variation is too large.
- D) Yes, and the trend should continue.

**Correct answer: B**

**Explanation:** This tests naming two separate problems — noisy data barely supporting a modest difference between halves, and a metric ("issues found") confounded with how much auditing occurred — rather than picking two convenient endpoints (A) or extrapolating (D).

**Question 11 (hard) — Users behind a browser decision**

A browser accounts for 0.9% of sessions across services totalling 5.8 million annual users; supporting a feature in it across all six services would take about fifteen developer-days. Ask for the strongest framing.

- A) 0.9% is too small to justify fifteen days.
- B) 0.9% of 5.8 million is about 52,000 users a year, so the decision turns on what those people cannot do without the work — if the baseline experience still lets them complete the task, fifteen days is poor value, and if it does not, 52,000 people annually is a strong case irrespective of the percentage.
- C) All browsers should be supported.
- D) 52,000 users justifies fifteen days.

**Correct answer: B**

**Explanation:** Neither the percentage (A) nor the count alone (D) settles it. This tests applying the decisive test — whether affected users can complete their task through the baseline experience — the same reasoning a progressive-enhancement standard exists to make calm rather than an argument about market share.

**Question 12 (hard) — Presenting to a board**

Ten minutes to make the case for accessibility investment to a departmental board. Ask which figure leads best.

- A) The department's average accessibility audit score.
- B) The number of people using services with known critical barriers — around 5.3 million annually — alongside one concrete example of what a barrier means for one person trying to complete one task.
- C) The number of critical and serious issues outstanding.
- D) The legal risk of non-compliance.

**Correct answer: B**

**Explanation:** This tests pairing the number that establishes scale with the example that establishes meaning, which a board needs both of — a count of people without an example is abstract, an example without a count is anecdote — while D, though real, belongs later, since leading with legal risk invites a compliance-minimising response rather than a service-improving one.

### Administration tips

- Score for whether the candidate converts a percentage or rate into an absolute number of affected people before judging its significance.
- Note whether the candidate normalises a count by its natural denominator (audit surface, campaign volume) before comparing across services or teams.
- Watch for whether a proposed mandate's full recurring cost (per-instance cost × volume × frequency) is computed before a recommendation is made.
- Score for whether the candidate reads a distribution's shape (which segments are affected, and how) rather than only its total or average.
- Note whether the candidate recognises when a metric is confounded with a related but different quantity (e.g. issues found confounded with auditing effort).

### Common pitfalls to watch for when scoring

- Crediting a raw count compared across services or teams without normalising by the relevant denominator.
- Missing when a candidate mandates a practice without computing its full recurring cost.
- Rewarding a threshold judgement that computes correctly but misapplies the pass/fail boundary.
- Accepting a trend read from two convenient endpoints rather than the full series, or extrapolated without qualification.
- Missing when a candidate presents an average or aggregate figure as if it described the users most affected.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what written material establishes. At head-of-profession level the material is legislation and regulations, accessibility standards, cross-government agreements, assurance frameworks, and departmental policy.

The commonest format gives a passage and asks statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, and Cannot Say means neither — regardless of what the candidate knows, which is the main hazard at this level, since deep expertise readily supplies from experience what a passage has left unsaid, confidently.

Three specifics matter: accessibility regulations attach obligations with precise scope, timing and exemptions, and this level is frequently relied on to read them correctly; governance documents allocate authority in language that looks interchangeable and is not — approves, endorses, is consulted, is informed, may direct; and cross-government agreements are usually voluntary in their operative clauses however firm their preambles sound.

### How this assessment maps to the role

- **Reading accessibility regulation** maps to **Accessibility**: advocacy and assurance.
- **Reading governance and assurance frameworks** maps to defining and assuring best practice.
- **Reading cross-government agreements** maps to collaborating with counterparts across government.
- **Reading strategy** maps to **Strategic thinking**.
- **Reading employment and capability guidance** maps to developing departmental capability.
- **Precision in public statements** maps to **Communicating information**.

### Practice questions

*Passage A — for Questions 1 to 4*

"Public sector bodies must ensure that their websites meet accessibility requirements and must publish an accessibility statement. Where meeting a particular requirement would impose a disproportionate burden, the body may rely on that exemption, provided it has carried out and documented an assessment of the burden and has stated the reliance in its accessibility statement. The disproportionate burden exemption does not apply to content that is essential to the use of the service. Pre-recorded time-based media published before 23 September 2020 is exempt. The assessment of disproportionate burden must consider the body's size and resources, the estimated costs and benefits, and the needs of disabled users."

**Question 1 (easy)**

Statement: A public sector body must publish an accessibility statement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly and unconditionally — the disproportionate burden exemption relates to meeting requirements, not to publishing the statement. This tests recognising the statement obligation stands regardless, and is where reliance on an exemption must actually be declared.

**Question 2 (moderate)**

Statement: A body relying on the disproportionate burden exemption need not document its assessment provided it states the reliance in its accessibility statement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Both documentation and stated reliance are required conjunctively ("has carried out and documented... and has stated the reliance"). This tests treating a conjunctive condition as fully required, not satisfied by either half alone.

**Question 3 (moderate)**

Statement: A body can rely on the disproportionate burden exemption for a form that users must complete to access the service.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The exemption "does not apply to content that is essential to the use of the service," and a mandatory access form is essential by definition. This tests catching the most consequential clause in the passage, and the one most often overlooked precisely because burden is usually invoked for something core and expensive to fix.

**Question 4 (hard)**

Statement: A video published in 2021 is exempt from accessibility requirements if it is pre-recorded.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The exemption is for media "published before 23 September 2020"; a 2021 publication falls after it. This tests catching a date qualifier attached to an exemption — the statement drops it and keeps only "pre-recorded," exactly how this exemption is misapplied in practice.

*Passage B — for Questions 5 to 8*

"The departmental assurance framework provides that services must pass a service assessment before entering public beta and before entering live. The head of frontend development is a standing member of the assessment panel for services with significant user-facing components, and may nominate a deputy. Panel decisions are reached by consensus; where consensus cannot be reached, the lead assessor decides and must record the dissenting views. A service that does not meet the standard is given a list of required actions and may be reassessed once the actions are complete. There is no limit on the number of reassessments. The framework is reviewed every two years."

**Question 5 (easy)**

Statement: Services must pass a service assessment before entering live.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly. This tests straightforward direct extraction.

**Question 6 (moderate)**

Statement: The head of frontend development can block a panel decision they disagree with.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Decisions are by consensus, and absent consensus "the lead assessor decides and must record the dissenting views" — a standing member's dissent is recorded, not a veto. This tests recognising the mechanism is designed precisely so one member cannot block a decision.

**Question 7 (moderate)**

Statement: The head of frontend development must personally attend assessments for services with significant user-facing components.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Standing membership plus the power to nominate a deputy contradicts a requirement of personal attendance. This tests distinguishing standing membership from a personal duty — the deputy clause exists specifically to prevent that reading.

**Question 8 (hard)**

Statement: A service that fails an assessment twice cannot proceed to live.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** "There is no limit on the number of reassessments" directly contradicts a two-strikes bar. This tests noticing a clause that closes exactly this inference — the framework has no failure ceiling, so a service is stopped by running out of time or appetite, not by the rules themselves.

*Passage C — for Questions 9 to 12*

"Departments participating in the cross-government frontend community agree to share reusable components where doing so does not conflict with departmental security requirements. Participation is voluntary and may be withdrawn on notice. The community maintains a register of shared components; inclusion in the register does not imply assurance by any department other than the contributing one. Departments are encouraged to align their frontend standards with the community's published guidance, and to notify the community where they diverge. The community's guidance is advisory and does not override departmental policy. Community meetings are held monthly and are open to all participating departments."

**Question 9 (moderate)**

Statement: A participating department must share its reusable components.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Sharing is conditioned on the department's own security assessment, and participation itself is voluntary and exitable on notice. This tests recognising that a conditional, exitable arrangement is not the unqualified "must" the statement asserts.

**Question 10 (moderate)**

Statement: A component in the register has been assured by the community.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** "Inclusion in the register does not imply assurance by any department other than the contributing one" directly contradicts this. This tests catching a clause that exists precisely to close this reading — a team adopting a registered component relies on the contributor's assurance, not a shared one.

**Question 11 (moderate)**

Statement: A department must notify the community when it diverges from the community's guidance.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Departments "are encouraged to align... and to notify," with one verb ("encouraged") governing both clauses. This tests recognising that encouragement is not obligation, in a passage that elsewhere uses stronger, clearly obligatory language ("agree to," "does not imply") by deliberate contrast.

**Question 12 (hard)**

Statement: A department could adopt frontend standards that conflict with the community's guidance without breaching the agreement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Alignment is encouraged rather than required, and "the community's guidance is advisory and does not override departmental policy." This tests recognising when a passage explicitly settles a priority between two sources of authority, making a statement True rather than Cannot Say — the passage does not merely fail to mention the case, it resolves it.

### Administration tips

- Score for whether the candidate treats a conjunctive condition ("and", both halves) as fully required rather than satisfied by either part alone.
- Note whether a date, scope, or category qualifier attached to an exemption is checked in full, not just its headline subject.
- Watch for whether the candidate distinguishes a standing role or membership from a personal duty of attendance or a power of veto.
- Score for whether "encouraged" or similarly soft language is read as non-binding, distinct from "must" or "agree to" elsewhere in the same passage.
- Note whether the candidate correctly identifies when a passage explicitly resolves a priority between two authorities (True) versus merely leaving it unaddressed (Cannot Say).

### Common pitfalls to watch for when scoring

- Crediting a conjunctive condition treated as satisfied by only one of its required parts.
- Missing when a candidate applies an exemption to content the passage explicitly excludes from it (e.g. essential content).
- Rewarding a reading that drops a date or scope qualifier attached to an exemption.
- Accepting a standing panel seat or membership read as conferring a veto or personal-attendance requirement.
- Missing when a candidate treats "encouraged" language as equivalent to a binding obligation.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. At head-of-profession level the scenarios involve influence without direct authority, mediation between teams and departments, advocacy for users who are not in the room, and representing a community whose members will hear what was said.

The commonest formats ask for the most and least effective response, or a rating, scored against a key derived from experienced practitioners at comparable seniority.

Three patterns run through the strong answers: authority at this level is mostly borrowed, and every time it is spent on something trivial there is less for something that matters; this level is frequently the only person present who represents users with access needs, so silence is read as consent; and a community watches how the difficult cases are handled — defending a team under pressure, telling an uncomfortable truth publicly, holding a standard when holding it is expensive — which determines whether anyone brings a problem next time.

### How this assessment maps to the role

- **Advocacy for users with access needs** maps to **Accessibility**.
- **Mediation and conflict resolution** maps to **Leadership and guidance** and **Community collaboration**.
- **Consensus across organisations** maps to building consensus between independent stakeholders.
- **Representing the community** maps to **Communicating information**.
- **Capability and career development** maps to internal mobility and career paths.
- **Standards leadership** maps to defining and assuring best practice.

### Practice questions

**Question 1 (easy) — A team under pressure from a programme**

A frontend team is refusing to ship a component they say is inaccessible; a programme director is escalating. Ask for the most and least effective response.

- Option A: Ask the team to ship it and fix it afterwards.
- Option B: Get the specifics from the team, verify the claim quickly, and if they are right, back them publicly and take the conversation with the programme director personally — because a team that holds a line correctly and is then overruled will not hold one again.
- Option C: Tell the programme director it is the team's decision.
- Option D: Broker a compromise.

**Most effective: B. Least effective: A.**

**Explanation:** B verifies before defending, then provides the specific value this level adds — a robust exchange with a programme director that a team lead cannot have. A is least effective: it overrules a correct call and teaches the team that raising accessibility concerns produces trouble for them. This tests verifying before backing and taking direct ownership of the difficult conversation rather than leaving the team exposed (C) or presuming a middle ground exists before checking (D).

**Question 2 (easy) — A standard nobody follows**

A coding standard published eighteen months ago is widely ignored. Ask for the most and least effective response.

- Option A: Remind teams of the standard.
- Option B: Find out why it is not being followed before doing anything, since a standard ignored by capable teams for eighteen months is usually unworkable, unclear in scope, or more expensive than the alternative — and each of those has a different fix.
- Option C: Add it to the assurance criteria.
- Option D: Withdraw it.

**Most effective: B. Least effective: A.**

**Explanation:** B diagnoses the cause before choosing a remedy — an unclear standard needs rewriting, an unworkable one needs relaxing, an expensive one needs its cost removed. A is least effective: a reminder about an unworkable standard buys a fortnight of compliance and teaches everyone that standards are advisory.

**Question 3 (moderate) — Conflict between two departments**

Departments are in dispute over a shared component, escalated to this level, both sides dug in. Ask for the most and least effective response.

- Option A: Propose that this department maintains it.
- Option B: Get both parties to state what they each need the component to do, rather than what they want the arrangement to be — because entrenched positions about ownership usually conceal two sets of requirements that were never compared, and comparing them often shows the dispute is about something resolvable.
- Option C: Propose a shared maintenance arrangement.
- Option D: Suggest both departments maintain their own.

**Most effective: B. Least effective: D.**

**Explanation:** B moves both parties from positions to requirements, where the ownership question frequently dissolves or becomes tractable. D is least effective: forking costs both departments permanently while looking like a resolution.

**Question 4 (moderate) — Accessibility in a room that has moved on**

A senior meeting is quickly taking a decision that will make a service harder for screen reader users; nobody else has raised it and the meeting is running late. Ask for the most and least effective response.

- Option A: Raise it now, briefly and specifically.
- Option B: Raise it now with the specific consequence and an estimate of what addressing it would cost — because silence is taken as professional endorsement, the affected people have no other representative in the room, and a decision taken now is far cheaper to influence than one revisited later.
- Option C: Raise it afterwards with the decision owner.
- Option D: Note it and address it during implementation.

**Most effective: B. Least effective: D.**

**Explanation:** B adds a cost estimate that turns an objection into a decision the meeting can actually take in the time it has, one step stronger than A. D is least effective: "address it during implementation" for a decision that creates the barrier means designing around it at much greater cost, or not addressing it at all.

**Question 5 (moderate) — A strong developer wants to leave the department**

An excellent senior developer says they are leaving because the work has stopped being interesting. Ask for the most and least effective response.

- Option A: Offer them different work.
- Option B: Take the reason seriously and explore honestly what is available — different services, a cross-government secondment, a piece of community or standards work — and if nothing here genuinely fits, help them find the right thing elsewhere in government rather than losing them entirely.
- Option C: Ask what would keep them.
- Option D: Accept it and start recruitment.

**Most effective: B. Least effective: D.**

**Explanation:** B treats keeping someone in government, even outside the department, as a real success, and is honest about whether a genuine fit exists locally. D is least effective: starting recruitment before exploring anything both loses a strong person and signals to everyone else that departures are administrative events.

**Question 6 (moderate) — Being asked to endorse something you have not seen**

A director asks for a name to be added to a public statement about accessibility maturity, without having seen the underlying evidence. Ask for the most and least effective response.

- Option A: Add your name; the director has asked.
- Option B: Ask to see the evidence first and say plainly that you will endorse what it supports — because your name on an accessibility claim is the department's main assurance that it is true, and it is worth exactly as much as your willingness to withhold it.
- Option C: Decline.
- Option D: Add your name with a caveat.

**Most effective: B. Least effective: A.**

**Explanation:** B is constructive — willing to endorse what turns out to be true — while making checking the condition rather than an obstacle. A is least effective: it converts professional standing into a rubber stamp, exposed the first time a claim is challenged.

**Question 7 (hard) — A cross-government commitment you cannot keep**

Counterparts are converging on a commitment the department cannot realistically meet this year, with this candidate the only hesitation. Ask for the most and least effective response.

- Option A: Agree; a commitment is aspirational and others are in the same position.
- Option B: Say plainly what the department can commit to and by when, and why the fuller commitment is not achievable this year — because a commitment known to be missed costs more than the awkwardness of saying so, and at least one other department is likely in the same position, waiting for someone to say it first.
- Option C: Abstain from the commitment.
- Option D: Ask for the timeline to be extended.

**Most effective: B. Least effective: A.**

**Explanation:** B offers a real, honest commitment that is more useful to the group than unanimous agreement nobody meets. A is least effective: it produces a collective agreement that quietly fails, eroding the credibility of the whole forum.

**Question 8 (hard) — Mediating between team members**

Two senior developers are in a public and increasingly personal disagreement in a shared channel. Ask for the most and least effective response.

- Option A: Ask them both to stop and take it offline.
- Option B: Move it out of the channel immediately and then deal with the two things separately — the technical question, which is probably resolvable, and the conduct, which needs addressing on its own terms and does not become acceptable because the technical disagreement was genuine.
- Option C: Resolve the technical question so the argument ends.
- Option D: Speak to each of them privately.

**Most effective: B. Least effective: C.**

**Explanation:** B stops the public damage first, then treats the technical and conduct issues as two separate problems requiring different handling. C is least effective: settling the technical question rewards the escalation and leaves both parties believing the conduct worked.

**Question 9 (hard) — Evidence against your own standard**

Data shows a testing standard introduced across fourteen teams costs substantial time and has not measurably reduced defects. Ask for the most and least effective response.

- Option A: Improve the measurement; some benefits are hard to capture.
- Option B: Publish the finding, including that it is this candidate's own standard, and narrow it to where the benefit is demonstrable or withdraw it — because fourteen teams paying daily for an unmeasurable benefit is a real cost, and withdrawing one's own standard on evidence makes every remaining standard more credible.
- Option C: Retain it; testing standards prevent problems that never appear in defect data.
- Option D: Reduce its scope quietly.

**Most effective: B. Least effective: C.**

**Explanation:** B allows the right resolution and earns credibility that only comes from doing it openly. C is least effective: it is unfalsifiable, keeping every unproductive standard in place indefinitely.

**Question 10 (hard) — A supplier's inaccessible product**

A department-wide product being procured has significant accessibility problems; procurement is well advanced and the business case is strong on other grounds. Ask for the most and least effective response.

- Option A: Raise the accessibility problems as a reason to stop the procurement.
- Option B: Set out the specific failures, what they mean for affected staff or users, and what the department's obligations are — then work the routes that exist at this stage, which are contractual remediation commitments with dates, an accessibility statement that reflects reality, and a documented decision by whoever accepts the risk.
- Option C: Accept it; the business case is strong.
- Option D: Escalate to the accessibility lead.

**Most effective: B. Least effective: C.**

**Explanation:** B works the levers that genuinely exist this late — contractual remediation commitments and a named, accountable risk acceptance. C is least effective: it accepts an unmet legal obligation without recording it anywhere.

**Question 11 (hard) — Speaking publicly about a failure**

A service has been publicly criticised for accessibility failures; asked to speak about it at a cross-government event. Ask for the most and least effective response.

- Option A: Decline; it would be inappropriate while the issues are being fixed.
- Option B: Speak, and be specific about what went wrong and why — what the process missed and what has changed — because a candid account of a failure is the most useful thing anyone can offer that audience, and evasion in front of colleagues who already know what happened costs more than the failure did.
- Option C: Speak in general terms about accessibility challenges.
- Option D: Speak, focusing on the remediation work.

**Most effective: B. Least effective: C.**

**Explanation:** B treats the failure as material other departments can genuinely learn from, since concealment is not actually an option — the audience already knows. C is least effective: vague talk in front of people who know the specifics reads as evasion and damages standing more than the original failure.

**Question 12 (hard) — A senior colleague dismisses accessibility**

A peer characterises accessibility requirements as "gold-plating" that slows delivery, in a leadership meeting. Ask for the most and least effective response.

- Option A: Correct them firmly; accessibility is a legal requirement.
- Option B: Respond with the substance rather than the framing — what proportion of users are affected, what the legal position actually is, and the observation that most accessibility cost comes from retrofitting rather than building accessibly — and follow up privately, since a peer who says this in a meeting is likely to act on it in decisions where the candidate is not present.
- Option C: Let it go; arguing in the meeting will not help.
- Option D: Raise it with their line manager.

**Most effective: B. Least effective: D.**

**Explanation:** B answers with facts in the room (where an unanswered remark becomes the meeting's position) and follows up privately on the durable problem. D is least effective: escalating to a peer's line manager over a remark, before having the direct conversation, is disproportionate.

### Administration tips

- Score for whether a candidate verifies a team's or a claim's position before publicly defending it or endorsing it.
- Note whether a decision or dispute is moved from positions or preferences to underlying requirements or costs before being resolved.
- Watch for whether the candidate applies the same scrutiny to their own standard, endorsement, past commitment, or architecture as to anyone else's.
- Score for whether accessibility consequences are raised with a concrete cost or consequence attached, at the point a decision is actually being made, rather than deferred.
- Note whether escalation or public correction is reserved for cases where a direct, private route genuinely failed or was unavailable.

### Common pitfalls to watch for when scoring

- Crediting a response that overrules or exposes a team that held a correct, verified position.
- Missing when a candidate responds to non-adoption of a standard with a reminder rather than a diagnosis.
- Rewarding a fork or split arrangement that resolves a dispute by avoiding it rather than addressing its cause.
- Accepting an endorsement, agreement, or commitment given without verifying the underlying claim or its feasibility first.
- Missing when a candidate stays silent on a consequential accessibility issue at the point a decision is actually being made.

## Conclusion

This guide has worked through standards and mandates priced across their true recurring cost, non-adoption and cross-team patterns diagnosed structurally rather than through reminders or training, second-hand accounts verified before being acted on, and strategy and assurance decisions read for what they actually exclude or permit; numeracy that converts percentages into people, normalises counts by their proper denominator, and reads a capability or trend shape rather than a single total or endpoint; the discipline of reading regulation, governance documents and cross-government agreements at the precision their conjunctions, exemptions and modal language demand; and the situational judgement calls that define head-of-profession work — verifying before defending publicly, moving disputes from positions to requirements, raising a consequence with its cost attached at the moment a decision is made, and applying the same scrutiny to one's own standard, endorsement and past decisions as to anyone else's.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around what a condition or fact actually attaches to, and whether a signal is read as structural or individual. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
