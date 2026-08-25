# Senior application operations engineer - upskill resources

This page focuses on learning and growth resources for the work role of senior application operations engineer.

- The resources include links to online courses, blogs, research articles, videos, and books.

- These help with job upskilling, work training, professional development, and career advancement.

- These are intended to be good starting points, not a comprehensive catalogue.

At this role level you deal with more complex issues and are responsible for code deployment and co-ordinating change-based activities such as taking services live. The resources below emphasise release and deployment practice, change impact assessment, database and performance work, and defining test conditions rather than only executing them.

We welcome constructive feedback to improve this page and these lists.

- GitHub issues and/or pull requests are welcome.

- The resources are found via AI searches then go through human-in-the-loop proofing.

- For more contact Joel Henderson <joel@joelparkerhenderson.com>

## Coursera courses

- [Continuous Integration and Continuous Delivery (CI/CD)](https://www.coursera.org/learn/continuous-integration-and-continuous-delivery-ci-cd): Covers replacing manual release processes with automation, key CI features, branch workflows, and CI tooling. Directly relevant to owning code deployment.

- [Site Reliability Engineering (SRE) Principles](https://www.coursera.org/learn/site-reliability-engineering-principles): Operating reliable systems at scale, combining automation, monitoring, incident response and reliability measurement.

- [DevOps and Site Reliability Engineering Mastery Certification](https://www.coursera.org/specializations/devops-and-site-reliability-engineering-mastery-certification): A specialisation covering CI/CD pipelines, infrastructure automation and observability tooling including Prometheus, Grafana and the ELK stack.

## Udemy courses

- [CI/CD Continuous Integration and Continuous Deployment](https://www.udemy.com/course/cicd-continuous-integration-and-continuous-deployment/): Hands-on pipeline implementation, useful if your deployment work is still largely manual.

- [Successful ITSM Incident and Major Incident Management ITIL](https://www.udemy.com/course/successful-itil-incident-and-major-incident-management/): Covers P1 and P2 handling, communication, post-incident analysis and governance, which is where senior engineers get pulled in.

- [Mastering ITIL Problem Management and Optimization in ITSM](https://www.udemy.com/course/mastering-problem-management-and-optimization-in-itsm/): Identifying, analysing and resolving the root causes of recurring incidents, including trend and pattern work.

## Skillsoft courses

- [ITIL 4 Foundation: Service Management Practices (Part 1)](https://www.skillsoft.com/course/itilr-4-foundation-service-management-practices-part-1-0f928009-6b1b-405a-8fd0-367bff17f8e7): Availability, capacity and performance, change control, incident, IT asset, monitoring, event, and problem management in one pass.

- [Courses for SQL Database Administration](https://www.skillsoft.com/channel/sql-database-administration-d3de6ea0-e197-11e6-91a7-0242c0a80704): Covers backup strategy, auditing, data protection and administration at beginner through expert level, matching the routine database configuration work at this level.

- [Software Quality Assurance](https://www.skillsoft.com/course/software-quality-assurance-63cc19d0-f9e0-4809-b96a-ca14fab12298): Grounding in quality assurance practice, which is what defining test conditions actually rests on.

## edX courses

- [Continuous Integration and Delivery (CI/CD) (IBM)](https://www.edx.org/learn/continuous-integration/ibm-continuous-integration-and-delivery-ci-cd): An introduction to CI/CD with hands-on labs using real tooling.

- [Reliable Google Cloud Infrastructure: Design and Process (GoogleCloud)](https://www.edx.org/learn/computer-programming/google-cloud-reliable-google-cloud-infrastructure-design-and-process): Design and process for reliable cloud infrastructure, aimed at architects, SREs and IT managers.

- [Introduction to DevOps and Site Reliability Engineering (LinuxFoundationX)](https://www.edx.org/learn/devops/the-linux-foundation-introduction-to-devops-and-site-reliability-engineering): The principles and practices used to change how organisations build and operate services.

## MIT OpenCourseWare courses

- [6.033 Computer System Engineering](https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/): Fault tolerance through replication, transactions and isolation, plus performance and networking. The material behind most complex production failures.

- [6.830 Database Systems](https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/): Query optimisation, transactions, and schema design, which is what performance forecasting and tuning actually require.

- [6.824 Distributed Computer Systems Engineering](https://ocw.mit.edu/courses/6-824-distributed-computer-systems-engineering-spring-2006/): Abstractions and implementation techniques for distributed systems, including naming, storage, and fault tolerance.

## Blog posts

- [Release Engineering, Google SRE Book chapter 8](https://sre.google/sre-book/table-of-contents/): Treats releasing as an engineering discipline with its own practices, rather than as an activity that happens after engineering.

- [Monitoring Distributed Systems, Google SRE Book chapter 6](https://sre.google/sre-book/monitoring-distributed-systems/): The four golden signals and clear rules on what deserves to page a human.

- [Embracing Risk, Google SRE Book chapter 3](https://sre.google/sre-book/embracing-risk/): Error budgets and the argument that a hundred per cent reliability is the wrong target. Useful language for change conversations.

- [Operate a reliable service, GOV.UK Service Standard point 14](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service): The reliability expectation your change and release work has to satisfy.

- [Incident Response, Google SRE Workbook](https://sre.google/workbook/incident-response/): The practical chapter on running incident response, including command structure, role separation, and communication.

- [IT Change Management: ITIL Framework and Best Practices, Atlassian](https://www.atlassian.com/itsm/change-management): How to reduce incidents from change while keeping the process agile.

- [The Atlassian Incident Management Handbook](https://www.atlassian.com/incident-management/handbook): An openly published handbook covering roles, severity, communication, and review.

- [A day in the life of a GDS Site Reliability Engineer](https://gds.blog.gov.uk/2022/06/10/a-day-in-the-life-of-a-gds-site-reliability-engineer-sre/): Describes building tooling and pipelines that let developers change services rapidly and safely.

- [What Is Root Cause Analysis? The Complete RCA Guide, Splunk](https://www.splunk.com/en_us/blog/learn/root-cause-analysis.html): RCA as a structured, data-driven process, covering several techniques including Pareto analysis and Six Sigma methods.

- [Atlassian Asset and Service Configuration Management Handbook](https://www.atlassian.com/whitepapers/it-asset-and-service-configuration-management-in-jira-service-management): Dependency visibility between applications, services, and infrastructure, which is what change impact assessment depends on.

## Research articles

- [A Comprehensive Survey on Root Cause Analysis in (Micro) Services](https://arxiv.org/html/2408.00803v1): A structured review of RCA techniques across metrics, traces, logs, and multi-model data in microservice systems.

- [Improved Root Cause Analysis Supporting Resilient Production Systems](https://www.sciencedirect.com/science/article/pii/S0278612522001273): Identifies 14 challenges and 17 enablers in RCA, including expertise gaps, bias, and poor data quality.

- [A Survey of Time Series Anomaly Detection Methods in the AIOps Domain](https://arxiv.org/abs/2308.00393): The detection methods underneath modern alerting, and their failure modes.

- [AIOps for log anomaly detection in the era of LLMs: A systematic literature review](https://www.sciencedirect.com/science/article/pii/S2667305325001346): Where log anomaly detection has reached, including large language model approaches.

- [Capacity and availability management by quantitative project management in the IT service industry](https://www.emerald.com/ajq/article-abstract/13/2/163/60850/Capacity-and-availability-management-by): A quantitative approach to capacity and availability tracking from baselined data.

- [An empirical study on performance comparisons of different types of DevOps team formations](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1554299/full): Compares team structures against delivery performance, relevant when you are arguing for how deployment responsibility should sit.

- [Enhancing reliability in AI inference services: An empirical study on real production incidents](https://arxiv.org/pdf/2511.07424): Analyses 156 high-impact production incidents, with findings that generalise beyond the AI context.

- [Continual Process Improvement for ITIL Service Operations: A Lean Perspective](https://www.tandfonline.com/doi/full/10.1080/10580530.2019.1587576): A five-step improvement framework for service operations built from Lean.

- [Site Reliability Engineering (SRE) and Observations on SRE Process to Make Tasks Easier](https://arxiv.org/html/2505.01926v1): Practitioner observations on the SRE process and its friction points.

- [Minimizing Incident Response Time Using Quantum Computing](https://link.springer.com/article/10.1007/s11219-023-09632-6): A Software Quality Journal paper on minimising response time at scale. Speculative, but a good example of framing response time as an optimisation problem.

## Videos

- [Chapter 10: ITIL 4 Change Enablement and Release Management](https://www.youtube.com/watch?v=gZSL3WW-_xg): Covers change enablement and release management together, which is how they actually operate.

- [How Change Enablement in ITIL 4 differs from Change Management in ITIL v3](https://www.youtube.com/watch?v=KHHxpZG4L8o): Useful when your organisation runs v3-shaped processes under v4 names.

- [IT Success: 4 Steps to Master Change Enablement](https://www.youtube.com/watch?v=6AASMclTMmg): A practical treatment of making change enablement work rather than merely exist.

- [Decoupling Observability for Incident Response at Scale](https://www.youtube.com/watch?v=EfdUvwd9rDQ): An SREday talk on structuring observability so incident response scales.

- [Postmortem Culture at Google](https://www.youtube.com/watch?v=qgHWzQ2zcqQ): Running blameless postmortems in an organisation where they carry real weight.

- [How to Automate Incident Postmortems for Consistent SRE and DevOps Reporting](https://www.youtube.com/watch?v=E53e-3RTU80): Generating structured reports from logs, metrics, traces, and incident timelines.

- [Full-stack Observability](https://www.youtube.com/watch?v=toS5rvET7hg): Observability across the stack, at the level of depth a senior engineer needs.

- [ITIL 4 Practitioner: Service Configuration Management](https://www.youtube.com/playlist?list=PLp5yhJ4S9EuszpFImv2gbkvGQGEpQn2i5): A fuller treatment of configuration management as a practice.

- [Incident Postmortems: Creating a Blameless SRE Culture](https://www.youtube.com/watch?v=Wv4loyVa048): How to run reviews that produce change rather than defensiveness.

- [SRE and Observability Interview Questions and Answers](https://www.youtube.com/watch?v=01HfmX3KUPY): A useful self-test of the depth expected in senior reliability roles.

## Books on Amazon

- [Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation](https://www.amazon.com/Continuous-Delivery-Deployment-Automation-Addison-Wesley-ebook/dp/B003YMNVC0): By Jez Humble and David Farley. Introduces the deployment pipeline and the infrastructure, data and configuration management needed around it.

- [Release It! Design and Deploy Production-Ready Software](https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software-ebook/dp/B0DGX43D9B): By Michael Nygard. Stability and capacity patterns and antipatterns, written from real production failures. The single most useful book for taking services live.

- [The Site Reliability Workbook: Practical Ways to Implement SRE](https://www.amazon.com/Site-Reliability-Workbook-Practical-Implement/dp/1492029505): By Beyer, Murphy, and Rensin. How to put SRE practices in place in an existing organisation.

- [The Practice of Cloud System Administration: DevOps and SRE Practices for Web Services, Volume 2](https://www.amazon.com/Practice-Cloud-System-Administration-Practices-ebook/dp/B00N7N2CRQ): By Limoncelli, Chalup, and Hogan. Distributed service operations with case studies from large operators.

- [Observability Engineering: Achieving Production Excellence](https://www.amazon.com/Observability-Engineering-Achieving-Production-Excellence/dp/1492076449): By Majors, Fong-Jones, and Miranda. Debugging unfamiliar failures rather than only watching known ones.

- [Implementing ITIL Change and Release Management](https://www.amazon.com/Implementing-ITIL-Change-Release-Management/dp/0138150419): By Larry Klosterboer. Implementation-level guidance on the processes you co-ordinate.

- [Accelerate: The Science of Lean Software and DevOps](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339): By Forsgren, Humble, and Kim. The research linking deployment practice to delivery and stability outcomes, which is useful evidence in change conversations.

- [Chaos Engineering: System Resiliency in Practice](https://www.amazon.com/Chaos-Engineering-System-Resiliency-Practice/dp/1492043869): By Casey Rosenthal and Nora Jones. Deliberately testing resilience rather than waiting to discover it.

- [Hands-on Site Reliability Engineering](https://www.amazon.com/Hands-Site-Reliability-Engineering-Capability/dp/9391030327): By Farooqui and Chikoti. Designing, deploying, monitoring, and sustaining enterprise systems at scale.

- [Root Cause Analysis: The Core of Problem Solving and Corrective Action](https://www.amazon.com/Root-Cause-Analysis-Problem-Corrective-ebook/dp/B0BQJQQZ8C): By Duke Okes. A disciplined method for the trend and pattern investigation expected at this level.

## Professional development tips

- Make deployment boring by automating it, then measure how often it succeeds first time
- Assess change impact against real dependency data rather than against the change requester's opinion
- Write test conditions from requirements, and be explicit about what is not covered
- Rehearse rollback as carefully as you rehearse release
- Investigate patterns across incidents rather than closing each one in isolation
- Consult specialists early and record what they told you, so the knowledge outlives the ticket
- Build the evidence base for capacity forecasts before you are asked for one
