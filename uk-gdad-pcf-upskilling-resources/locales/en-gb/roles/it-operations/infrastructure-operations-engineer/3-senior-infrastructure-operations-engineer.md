# Senior infrastructure operations engineer - upskill resources

This page focuses on learning and growth resources for the work role of senior infrastructure operations engineer.

- The resources include links to online courses, blogs, research articles, videos, and books.

- These help with job upskilling, work training, professional development, and career advancement.

- These are intended to be good starting points, not a comprehensive catalogue.

At this role level you act as second or third line support for incidents, problems and changes, provide specialist technical support to projects including delivery of non-functional requirements, and coach and mentor junior team members. The resources below emphasise deeper diagnosis, performance and capacity work, change impact assessment, and mentoring.

We welcome constructive feedback to improve this page and these lists.

- GitHub issues and/or pull requests are welcome.

- The resources are found via AI searches then go through human-in-the-loop proofing.

- For more contact Joel Henderson <joel@joelparkerhenderson.com>

## Coursera courses

- [Site Reliability Engineering (SRE) Principles](https://www.coursera.org/learn/site-reliability-engineering-principles): Automation, monitoring, incident response and reliability measurement as one discipline.

- [Advanced Prometheus Alerting and Monitoring](https://www.coursera.org/learn/advanced-prometheus-alerting-and-monitoring): PromQL, exporters, Alertmanager and Grafana integration, at the depth needed for third line work.

- [DevOps Pro: Linux, Docker, Kubernetes, CI/CD and IaC](https://www.coursera.org/specializations/devops-linux-docker-kubernetes-ci-cd-iac): Every layer of the stack with production-like labs, useful for filling gaps across a broad remit.

## Udemy courses

- [Successful ITSM Incident and Major Incident Management ITIL](https://www.udemy.com/course/successful-itil-incident-and-major-incident-management/): Incident management from logging to resolution, including P1 and P2 handling and post-incident analysis.

- [Mastering ITIL Problem Management and Optimization in ITSM](https://www.udemy.com/course/mastering-problem-management-and-optimization-in-itsm/): Identifying and resolving root causes of recurring incidents, and investigating patterns and trends.

- [The Complete Terraform with Ansible Bootcamp](https://www.udemy.com/course/terraform-and-ansible/): Provisioning and configuration together, which is where routine work becomes reproducible.

## Skillsoft courses

- [ITIL 4 Foundation: Service Management Practices (Part 1)](https://www.skillsoft.com/course/itilr-4-foundation-service-management-practices-part-1-0f928009-6b1b-405a-8fd0-367bff17f8e7): Availability, capacity and performance, change control, incident, asset, monitoring and problem management.

- [Courses for SQL Database Administration](https://www.skillsoft.com/channel/sql-database-administration-d3de6ea0-e197-11e6-91a7-0242c0a80704): Backup strategy, auditing, data protection and administration, matching the routine database configuration work at this level.

- [Courses for Infrastructure Support Engineer to CloudOps Engineer](https://www.skillsoft.com/journey/infrastructure-support-engineer-to-cloudops-engineer-ad448a45-f6fb-483d-8052-639db011e8e4): Including hybrid deployment with AWS Outposts and Azure Arc, which is the shape of most real estates.

## edX courses

- [Reliable Google Cloud Infrastructure: Design and Process (GoogleCloud)](https://www.edx.org/learn/computer-programming/google-cloud-reliable-google-cloud-infrastructure-design-and-process): Design and process for reliable infrastructure, useful for the non-functional requirements you support projects on.

- [Introduction to Kubernetes and Cloud Native Technologies Professional Certificate](https://www.edx.org/professional-certificate/linuxfoundationx-introduction-to-kubernetes-and-cloud-native-technologies): Containers, software-defined networking and storage, aimed at administrators and architects.

- [Continuous Integration and Delivery (CI/CD) (IBM)](https://www.edx.org/learn/continuous-integration/ibm-continuous-integration-and-delivery-ci-cd): Pipelines with hands-on labs, which is how changes reach production reliably.

## MIT OpenCourseWare courses

- [6.033 Computer System Engineering](https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/): Fault tolerance through replication, transactions and isolation, plus performance and networks.

- [6.830 Database Systems](https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/): Query optimisation, transactions, and schema design, which is what performance investigation actually needs.

- [6.824 Distributed Computer Systems Engineering](https://ocw.mit.edu/courses/6-824-distributed-computer-systems-engineering-spring-2006/): Distributed systems techniques including naming, storage, and fault tolerance.

## Blog posts

- [Monitoring Distributed Systems, Google SRE Book chapter 6](https://sre.google/sre-book/monitoring-distributed-systems/): The four golden signals and rules on what deserves to page a human.

- [Embracing Risk, Google SRE Book chapter 3](https://sre.google/sre-book/embracing-risk/): Error budgets, which give you shared vocabulary with delivery teams about non-functional requirements.

- [Release Engineering, Google SRE Book chapter 8](https://sre.google/sre-book/table-of-contents/): Release as an engineering discipline with its own standards.

- [Monitoring and Alerting Best Practices to Reduce Alert Fatigue, OneUptime](https://oneuptime.com/blog/post/2026-02-20-monitoring-alerting-best-practices/view): Refining alerting policies and thresholds, which is a second line responsibility as much as a first line complaint.

- [What Is Root Cause Analysis? The Complete RCA Guide, Splunk](https://www.splunk.com/en_us/blog/learn/root-cause-analysis.html): RCA as a structured, data-driven process, covering several techniques including Pareto analysis and Six Sigma methods.

- [Building, testing and iterating our monitoring and alerting service, GDS](https://technology.blog.gov.uk/2018/11/09/building-testing-and-iterating-our-monitoring-and-alerting-service/): Building shared monitoring for many teams and iterating it honestly.

- [IT Change Management: ITIL Framework and Best Practices, Atlassian](https://www.atlassian.com/itsm/change-management): Assessing change impact and reducing change-caused incidents.

- [Atlassian Asset and Service Configuration Management Handbook](https://www.atlassian.com/whitepapers/it-asset-and-service-configuration-management-in-jira-service-management): Dependency visibility, which is what makes impact assessment more than guesswork.

- [Secure design principles, NCSC](https://www.ncsc.gov.uk/collection/cyber-security-design-principles): The design principles behind the controls you support and advise on.

- [Operate a reliable service, GOV.UK Service Standard point 14](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service): The reliability standard the projects you support are assessed against.

## Research articles

- [A Comprehensive Survey on Root Cause Analysis in (Micro) Services](https://arxiv.org/html/2408.00803v1): Root cause analysis across metrics, traces, logs, and multi-model data.

- [Improved Root Cause Analysis Supporting Resilient Production Systems](https://www.sciencedirect.com/science/article/pii/S0278612522001273): 14 challenges and 17 enablers including expertise gaps, bias and data quality.

- [A Survey of Time Series Anomaly Detection Methods in the AIOps Domain](https://arxiv.org/abs/2308.00393): The detection methods behind your alerting, and where they mislead.

- [AIOps for log anomaly detection in the era of LLMs: A systematic literature review](https://www.sciencedirect.com/science/article/pii/S2667305325001346): Where log anomaly detection has reached, including recent approaches.

- [Capacity and availability management by quantitative project management in the IT service industry](https://www.emerald.com/ajq/article-abstract/13/2/163/60850/Capacity-and-availability-management-by): A quantitative approach to capacity and availability tracking.

- [Leveraging Infrastructure-as-Code Automation to Establish Standardized, Reliable, and Reproducible Cloud Infrastructure](https://zenodo.org/records/19452393): Configuration drift and deployment variability as the problems to solve.

- [Infrastructure as code: A paradigm shift in cloud resource management and deployment automation](https://www.researchgate.net/publication/391453229_Infrastructure_as_code_A_paradigm_shifts_in_cloud_resource_management_and_deployment_automation): Empirical outcomes across organisations.

- [Enhancing reliability in AI inference services: An empirical study on real production incidents](https://arxiv.org/pdf/2511.07424): 156 high-impact production incidents analysed, with lessons that generalise.

- [Site Reliability Engineering (SRE) and Observations on SRE Process to Make Tasks Easier](https://arxiv.org/html/2505.01926v1): Practitioner observations on process friction.

- [Continual Process Improvement for ITIL Service Operations: A Lean Perspective](https://www.tandfonline.com/doi/full/10.1080/10580530.2019.1587576): A five-step improvement framework, usable on your own operational process.

## Videos

- [Decoupling Observability for Incident Response at Scale](https://www.youtube.com/watch?v=EfdUvwd9rDQ): Structuring observability so response scales beyond the people who built the system.

- [Full-stack Observability](https://www.youtube.com/watch?v=toS5rvET7hg): Observability across the stack at the depth third line work needs.

- [How to Automate Incident Postmortems for Consistent SRE and DevOps Reporting](https://www.youtube.com/watch?v=E53e-3RTU80): Structured reporting from logs, metrics, traces, and timelines.

- [Postmortem Culture at Google](https://www.youtube.com/watch?v=qgHWzQ2zcqQ): Blameless review, which is where escalated problems turn into prevention.

- [Chapter 10: ITIL 4 Change Enablement and Release Management](https://www.youtube.com/watch?v=gZSL3WW-_xg): Change and release together, which is what you assess impact against.

- [Enhancing Platform Teams Workflow with Infrastructure as Code](https://www.youtube.com/watch?v=iRw-YvSGr8I): How IaC changes a team's workflow rather than only its scripts.

- [EKS and Infrastructure as Code: Terraform comparison](https://www.youtube.com/watch?v=gUqAcCIcFAM): A comparison of approaches for managed Kubernetes.

- [ITIL 4 Practitioner: Service Configuration Management](https://www.youtube.com/playlist?list=PLp5yhJ4S9EuszpFImv2gbkvGQGEpQn2i5): Configuration management at practitioner depth.

- [SRE and Observability Interview Questions and Answers](https://www.youtube.com/watch?v=01HfmX3KUPY): A useful self-test of the depth expected at senior level.

- [PagerDuty Guide: On-Call and Incident Management Best Practices](https://www.youtube.com/watch?v=McBrUhz9Ia4): Practices worth modelling for the people you mentor.

## Books on Amazon

- [The Practice of Cloud System Administration, Volume 2](https://www.amazon.com/Practice-Cloud-System-Administration-Practices-ebook/dp/B00N7N2CRQ): By Limoncelli, Chalup, and Hogan. Distributed service operations, including operational readiness reviews for projects.

- [Observability Engineering: Achieving Production Excellence](https://www.amazon.com/Observability-Engineering-Achieving-Production-Excellence/dp/1492076449): By Majors, Fong-Jones, and Miranda. Debugging failures nobody predicted, which is what reaches third line.

- [Release It! Design and Deploy Production-Ready Software](https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software-ebook/dp/B0DGX43D9B): By Michael Nygard. Stability and capacity patterns, and a concrete checklist for non-functional requirements.

- [Designing Data-Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321): By Martin Kleppmann. Replication, partitioning and consistency, which is what deep storage problems reduce to.

- [The Site Reliability Workbook: Practical Ways to Implement SRE](https://www.amazon.com/Site-Reliability-Workbook-Practical-Implement/dp/1492029505): By Beyer, Murphy, and Rensin. Practical SRE including capacity planning and toil reduction.

- [Terraform: Up and Running: Writing Infrastructure as Code](https://www.amazon.com/Terraform-Running-Writing-Infrastructure-Code/dp/1098116747): By Yevgeniy Brikman. Module design and state management, which is where infrastructure code needs seniority.

- [Root Cause Analysis: The Core of Problem Solving and Corrective Action](https://www.amazon.com/Root-Cause-Analysis-Problem-Corrective-ebook/dp/B0BQJQQZ8C): By Duke Okes. A disciplined method for the trend and pattern work expected here.

- [Incident Management for Operations](https://www.amazon.com/Incident-Management-Operations-Rob-Schnepp-ebook/dp/B072YZ8W2R): By Schnepp, Vidal, and Hawley. The incident command system, useful when you are the escalation.

- [The Practice of System and Network Administration, Volume 1](https://www.amazon.com/Practice-System-Network-Administration-Enterprise-ebook/dp/B01MFCSNQZ): By Limoncelli, Hogan, and Chalup. Standards, documentation, and team practice at enterprise scale.

- [Implementing ITIL Change and Release Management](https://www.amazon.com/Implementing-ITIL-Change-Release-Management/dp/0138150419): By Larry Klosterboer. The change processes you document and action.

## Professional development tips

- Insist on non-functional requirements being specified early, since they are what fails after go-live
- Investigate patterns across incidents rather than closing each one on its own merits
- Use management system tooling and logical schemata to gather evidence rather than argue from experience
- Mentor by explaining your reasoning, including the paths you ruled out and why
- Define test conditions from requirements, and be explicit about what is not covered
- Consult specialists early and record what they told you, so the knowledge outlives the ticket
- Push routine work into automation so that your specialist time goes to the problems only you can solve
