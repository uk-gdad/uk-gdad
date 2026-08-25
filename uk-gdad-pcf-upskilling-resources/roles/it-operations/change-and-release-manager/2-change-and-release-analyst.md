# Change and release analyst - upskill resources

This page focuses on learning and growth resources for the work role of change and release analyst.

- The resources include links to online courses, blogs, research articles, videos, and books.

- These help with job upskilling, work training, professional development, and career advancement.

- These are intended to be good starting points, not a comprehensive catalogue.

At this role level you plan and roll out software, design and carry out the procedures for distributing and installing changes, undertake post-release analysis, and set the plan for upcoming changes. You liaise with DevOps engineers and service designers. The resources below emphasise release and deployment practice, change impact assessment, and the analysis that turns a release into evidence.

We welcome constructive feedback to improve this page and these lists.

- GitHub issues and/or pull requests are welcome.

- The resources are found via AI searches then go through human-in-the-loop proofing.

- For more contact Joel Henderson <joel@joelparkerhenderson.com>

## Coursera courses

- [Continuous Integration and Continuous Delivery (CI/CD)](https://www.coursera.org/learn/continuous-integration-and-continuous-delivery-ci-cd): Replacing manual release steps with automation, covering CI features, branch workflows, and pipeline tooling.

- [Advanced ITSM with ServiceNow: Optimizing IT Operations](https://www.coursera.org/learn/advanced-itsm-with-servicenow-optimizing-it-operations): Change management and the configuration management database alongside incident and problem management.

- [Site Reliability Engineering (SRE) Principles](https://www.coursera.org/learn/site-reliability-engineering-principles): Reliability measurement, automation, and incident response, which is the language your DevOps colleagues will use.

## Udemy courses

- [CI/CD Continuous Integration and Continuous Deployment](https://www.udemy.com/course/cicd-continuous-integration-and-continuous-deployment/): Hands-on pipeline implementation, useful for designing distribution and installation procedures that do not rely on a person remembering steps.

- [Change Management (ITSM ServiceNow)](https://www.udemy.com/course/change-management-itsm-servicenow/): Change management with a focus on the change advisory board and mediating between delivery pressure and risk aversion.

- [CMDB Done Right with ServiceNow](https://www.udemy.com/course/cmdb-done-right-with-servicenow/): Configuration management including baselines, configuration item relationships, and change control, which is what impact assessment depends on.

## Skillsoft courses

- [Service Desk, IT Asset, Service Configuration, and Change Control Management: ITIL](https://www.skillsoft.com/course/service-desk-it-asset-service-configuration-and-change-control-management-2292f3ad-2832-42ed-b23a-014758fa6da3): The asset, configuration and change control practices you work across daily.

- [ITIL 4 Foundation: Service Management Practices (Part 1)](https://www.skillsoft.com/course/itilr-4-foundation-service-management-practices-part-1-0f928009-6b1b-405a-8fd0-367bff17f8e7): Change control alongside availability, capacity, incident, asset, monitoring and problem management.

- [Backup and Recovery: Business Continuity and Disaster Recovery](https://www.skillsoft.com/course/backup-recovery-business-continuity-disaster-recovery-a53ef3a2-f008-46b5-972b-233568bac681): Business impact assessment and system resilience, which supports the continuity principles you need to explain.

## edX courses

- [Continuous Integration and Delivery (CI/CD) (IBM)](https://www.edx.org/learn/continuous-integration/ibm-continuous-integration-and-delivery-ci-cd): An introduction with hands-on labs using real tooling.

- [Introduction to DevOps: Practices and Tools Professional Certificate](https://www.edx.org/professional-certificate/linuxfoundationx-introduction-to-devops-practices-and-tools): Containers, infrastructure as code, deployment pipelines, and observability, which is the environment your releases land in.

- [Introduction to DevOps and Site Reliability Engineering (LinuxFoundationX)](https://www.edx.org/learn/devops/the-linux-foundation-introduction-to-devops-and-site-reliability-engineering): The principles behind how DevOps teams expect change to be handled.

## MIT OpenCourseWare courses

- [6.033 Computer System Engineering](https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/): Modularity, naming, networks, and fault tolerance, which is the material behind most release failures.

- [6.830 Database Systems](https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/): Transactions and schema design, which matters whenever a release includes a data migration.

- [16.660J Introduction to Lean Six Sigma Methods](https://ocw.mit.edu/courses/16-660j-introduction-to-lean-six-sigma-methods-january-iap-2012/): Value stream mapping and root cause analysis, useful for post-release analysis that produces improvement rather than narrative.

## Blog posts

- [Release Engineering, Google SRE Book chapter 8](https://sre.google/sre-book/table-of-contents/): Release treated as an engineering discipline with its own practices and standards.

- [Streamlining change approval, DORA](https://dora.dev/capabilities/streamlining-change-approval/): DORA's research finding that external approval bodies do not reduce change failure rate, and what does. Essential reading for this role.

- [DORA change failure rate: what, why, and how, Swarmia](https://www.swarmia.com/blog/dora-change-failure-rate/): How the metric is defined and measured, which is what post-release analysis should be feeding.

- [Change Advisory Board Best Practices: 15+ Industry Leaders Weigh In, InvGate](https://blog.invgate.com/do-we-still-need-the-change-advisory-board): A genuinely mixed set of views on whether and how the board should operate.

- [Change Advisory Boards Don't Work, Octopus](https://octopus.com/blog/change-advisory-boards-dont-work): The strongest version of the case against the traditional board. Worth reading even if you disagree.

- [IT Change Management Checklist: The Complete ITIL 4 Guide, CheckFlow](https://checkflow.io/blog/it-change-management-checklist): Clarifies that the change advisory board advises rather than authorises, and works through the practice step by step.

- [IT Change Management: ITIL Framework and Best Practices, Atlassian](https://www.atlassian.com/itsm/change-management): Reducing change-caused incidents without making the process an obstacle.

- [Atlassian Asset and Service Configuration Management Handbook](https://www.atlassian.com/whitepapers/it-asset-and-service-configuration-management-in-jira-service-management): Dependency visibility, which is what makes impact assessment more than guesswork.

- [Operate a reliable service, GOV.UK Service Standard point 14](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service): The reliability standard your release scheduling protects.

- [Building, testing and iterating our monitoring and alerting service, GDS](https://technology.blog.gov.uk/2018/11/09/building-testing-and-iterating-our-monitoring-and-alerting-service/): How monitoring was built in government, which is where your post-release evidence comes from.

## Research articles

- [Categorization of Software Release Risks and Its Abatement Strategy](https://www.researchgate.net/publication/276499818_Categorization_of_Software_Release_Risks_and_Its_Abatement_Strategy): Threats associated with release activities and the specific role change management plays in reducing them.

- [Software release management challenges in industry: An exploratory study](https://www.researchgate.net/publication/267369294_Software_release_management_challenges_in_industry_An_exploratory_study): An exploratory study proposing a framework that places the release manager at the centre of the process, based on 27 months of observation.

- [Challenges and problems in release management process: A case study](https://www.researchgate.net/publication/252028734_Challenges_and_problems_in_release_management_process_A_case_study): A case study of what goes wrong in release processes in practice.

- [An empirical study on the implementation and evaluation of a goal-driven software development risk management model](https://www.sciencedirect.com/science/article/abs/pii/S0950584913001328): A goal-driven approach to development risk, applicable to release risk assessment.

- [A Reassessment of Risk Management in Software Projects](https://link.springer.com/content/pdf/10.1007/978-3-319-05915-0_20.pdf): What the empirical research actually shows about risk management and project performance, including barriers to adoption.

- [An empirical study on performance comparisons of different types of DevOps team formations](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1554299/full): Compares team structures against delivery performance, relevant when liaising with DevOps teams.

- [Implementation and impacts of IT Service Management in the IT function](https://www.sciencedirect.com/science/article/abs/pii/S0268401223000099): A systematic review of empirical ITSM implementation research.

- [A Comprehensive Survey on Root Cause Analysis in (Micro) Services](https://arxiv.org/html/2408.00803v1): Root cause analysis across metrics, traces, and logs, which is what post-release investigation needs.

- [Improved Root Cause Analysis Supporting Resilient Production Systems](https://www.sciencedirect.com/science/article/pii/S0278612522001273): Identifies the challenges and enablers of root cause analysis, including data quality and bias.

- [Continual Process Improvement for ITIL Service Operations: A Lean Perspective](https://www.tandfonline.com/doi/full/10.1080/10580530.2019.1587576): A five-step improvement framework, usable directly on a release process.

## Videos

- [Chapter 10: ITIL 4 Change Enablement and Release Management](https://www.youtube.com/watch?v=gZSL3WW-_xg): The two practices treated together, which matches how the work actually runs.

- [IT Success: 4 Steps to Master Change Enablement](https://www.youtube.com/watch?v=6AASMclTMmg): Making change enablement effective rather than ceremonial.

- [ITIL 4 Service Management practices: Change control](https://www.youtube.com/watch?v=iIgQImV768s): Change control as the mechanism keeping the production environment controlled.

- [How Change Enablement in ITIL 4 differs from Change Management in ITIL v3](https://www.youtube.com/watch?v=KHHxpZG4L8o): The differences that matter when translating between the two vocabularies.

- [ServiceNow CMDB Fundamentals: Configuration Management Database Demo](https://www.youtube.com/watch?v=1G5vExjjmy0): The CMDB data model, which is the substrate for impact assessment.

- [Navigating your CMDB: Tips and Tricks from an Implementation Expert](https://www.youtube.com/watch?v=ifi6SoBP13w): Practical advice on keeping configuration data usable.

- [How to Automate Incident Postmortems for Consistent SRE and DevOps Reporting](https://www.youtube.com/watch?v=E53e-3RTU80): Structured reporting from logs, metrics, and timelines, which transfers well to post-release analysis.

- [Postmortem Culture at Google](https://www.youtube.com/watch?v=qgHWzQ2zcqQ): Blameless review, which is the only kind of post-release analysis that yields honest information.

- [Decoupling Observability for Incident Response at Scale](https://www.youtube.com/watch?v=EfdUvwd9rDQ): How observability is structured so that problems after a release are diagnosable.

- [Full-stack Observability](https://www.youtube.com/watch?v=toS5rvET7hg): The signals available to you when judging whether a release went well.

## Books on Amazon

- [Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation](https://www.amazon.com/Continuous-Delivery-Deployment-Automation-Addison-Wesley-ebook/dp/B003YMNVC0): By Jez Humble and David Farley. The deployment pipeline and the configuration, data and governance ecosystem around it. The core text for this role.

- [Implementing ITIL Change and Release Management](https://www.amazon.com/Implementing-ITIL-Change-Release-Management/dp/0138150419): By Larry Klosterboer. Implementation-level detail on the two processes you run.

- [Configuration Management Best Practices: Practical Methods that Work in the Real World](https://www.amazon.com/Configuration-Management-Best-Practices-Practical/dp/0321685865): By Bob Aiello and Leslie Sachs. Source control, build engineering, environment configuration, change control, release engineering, and deployment together.

- [Release It! Design and Deploy Production-Ready Software](https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software-ebook/dp/B0DGX43D9B): By Michael Nygard. Stability and capacity patterns learned from real production failures.

- [Accelerate: The Science of Lean Software and DevOps](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339): By Forsgren, Humble, and Kim. The research behind change failure rate and lead time, and the evidence that heavyweight approval does not help.

- [Implementing ITIL Configuration Management](https://www.amazon.com/Implementing-ITIL-Configuration-Management-Press-ebook/dp/B0054KOLB0): By Larry Klosterboer. The configuration data your impact assessments rely on.

- [The Site Reliability Workbook: Practical Ways to Implement SRE](https://www.amazon.com/Site-Reliability-Workbook-Practical-Implement/dp/1492029505): By Beyer, Murphy, and Rensin. Practical SRE, including how release and reliability negotiate with each other.

- [The Practice of Cloud System Administration: DevOps and SRE Practices for Web Services, Volume 2](https://www.amazon.com/Practice-Cloud-System-Administration-Practices-ebook/dp/B00N7N2CRQ): By Limoncelli, Chalup, and Hogan. Operations at scale, with substantial treatment of deployment.

- [The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business-ebook/dp/B0DPNL8863): By Kim, Behr, and Spafford. A readable account of why change queues form and what they cost.

- [The CMDB Imperative: How to Realize the Dream and Avoid the Nightmares](https://www.amazon.com/CMDB-Imperative-Realize-Dream-Nightmares/dp/0137008376): By O'Donnell and Casanova. Honest about the failure modes of configuration data.

## Professional development tips

- Design distribution and installation procedures so that they are repeatable by someone who did not write them
- Do post-release analysis on successful releases too, since only analysing failures biases what you learn
- Measure change failure rate and lead time, and use the numbers rather than impressions in planning
- Assess impact from dependency data, and be explicit about where that data is unreliable
- Build a working relationship with the DevOps engineers before you need to negotiate a schedule with them
- Learn how service designers describe the service, so that your release plan matches the user journey
- Keep a change calendar that other teams can actually see and plan around
