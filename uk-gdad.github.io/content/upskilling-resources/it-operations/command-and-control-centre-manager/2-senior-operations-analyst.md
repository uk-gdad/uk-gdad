# Senior operations analyst - upskill resources

This page focuses on learning and growth resources for the work role of senior operations analyst.

- The resources include links to online courses, blogs, research articles, videos, and books.

- These help with job upskilling, work training, professional development, and career advancement.

- These are intended to be good starting points, not a comprehensive catalogue.

At this role level you prioritise incoming messages for the team, ensure correct information flow, record keeping and data capture, and conduct monitor checks. You may be on call outside working hours in emergencies, and in some organisations you oversee the virtual environment. The resources below emphasise triage and prioritisation, diagnosing incidents rather than only registering them, and the monitoring stack itself.

We welcome constructive feedback to improve this page and these lists.

- GitHub issues and/or pull requests are welcome.

- The resources are found via AI searches then go through human-in-the-loop proofing.

- For more contact Joel Henderson <joel@joelparkerhenderson.com>

## Coursera courses

- [Advanced Prometheus Alerting and Monitoring](https://www.coursera.org/learn/advanced-prometheus-alerting-and-monitoring): Building a complete monitoring stack with Prometheus and Grafana, including PromQL, exporters, and Alertmanager rules.

- [Site Reliability Engineering (SRE) Principles](https://www.coursera.org/learn/site-reliability-engineering-principles): Automation, monitoring, incident response and reliability measurement as one discipline.

- [Advanced ITSM with ServiceNow: Optimizing IT Operations](https://www.coursera.org/learn/advanced-itsm-with-servicenow-optimizing-it-operations): Incident, problem, change, and configuration management in a working platform.

## Udemy courses

- [Prometheus: The Complete Hands-On for Monitoring and Alerting](https://www.udemy.com/course/prometheus-course/): Alerting rules, recording rules, and query practice, which is what monitor checks depend on.

- [Successful ITSM Incident and Major Incident Management ITIL](https://www.udemy.com/course/successful-itil-incident-and-major-incident-management/): Incident management from logging to resolution, including P1 and P2 handling, validation and communication.

- [Mastering network monitoring with ManageEngine OpManager](https://www.udemy.com/course/mastering-network-monitoring-with-manageengine-opmanager/): Real-time topology and device status views, and fault detection workflow in a commercial monitoring product.

## Skillsoft courses

- [Event, Incident, and Problem Management: ITIL](https://www.skillsoft.com/course/event-incident-and-problem-management-0fe6c829-bdd7-4921-9a23-d8a7365ae359): Monitoring and event management, incident management and problem management as a connected sequence.

- [ITIL 4 Foundation: Service Management Practices (Part 1)](https://www.skillsoft.com/course/itilr-4-foundation-service-management-practices-part-1-0f928009-6b1b-405a-8fd0-367bff17f8e7): The practices you work across, including availability, capacity, change control and asset management.

- [Service Desk, IT Asset, Service Configuration, and Change Control Management: ITIL](https://www.skillsoft.com/course/service-desk-it-asset-service-configuration-and-change-control-management-2292f3ad-2832-42ed-b23a-014758fa6da3): The asset and configuration practices behind verifying the location and state of IT assets.

## edX courses

- [Introduction to DevOps: Practices and Tools Professional Certificate](https://www.edx.org/professional-certificate/linuxfoundationx-introduction-to-devops-practices-and-tools): Containers, infrastructure as code, deployment pipelines, and observability systems, which is the virtual environment you may be overseeing.

- [Reliable Google Cloud Infrastructure: Design and Process (GoogleCloud)](https://www.edx.org/learn/computer-programming/google-cloud-reliable-google-cloud-infrastructure-design-and-process): Reliable cloud infrastructure design, useful for understanding what you are monitoring.

- [Introduction to DevOps and Site Reliability Engineering (LinuxFoundationX)](https://www.edx.org/learn/devops/the-linux-foundation-introduction-to-devops-and-site-reliability-engineering): The principles behind how live services are run and measured.

## MIT OpenCourseWare courses

- [6.033 Computer System Engineering](https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/): Networks, performance, fault tolerance and recovery, which is the material behind most of what you diagnose.

- [6.824 Distributed Computer Systems Engineering](https://ocw.mit.edu/courses/6-824-distributed-computer-systems-engineering-spring-2006/): Distributed systems techniques including naming, storage, and fault tolerance.

- [15.760B Introduction to Operations Management](https://ocw.mit.edu/courses/15-760b-introduction-to-operations-management-spring-2004/): Process, capacity, and cycle time analysis, which is the general theory behind prioritising a queue.

## Blog posts

- [Monitoring Distributed Systems, Google SRE Book chapter 6](https://sre.google/sre-book/monitoring-distributed-systems/): The four golden signals and firm rules on what should page a human.

- [Monitoring and Alerting Best Practices to Reduce Alert Fatigue, OneUptime](https://oneuptime.com/blog/post/2026-02-20-monitoring-alerting-best-practices/view): Refining alerting policies, smarter thresholds, and silencing non-critical alerts without losing visibility.

- [Alert Fatigue Is Killing Your NOC Efficiency, Techmonarch](https://techmonarch.com/blog/alert-fatigue-is-killing-your-noc-efficiency-heres-what-actually-works/): On runbooks and automation removing whole classes of alert from the human queue.

- [On-call best practices: handoffs, schedules, and alert fatigue, incident.io](https://incident.io/blog/on-call-best-practices-guide-2026): Handover quality and schedule design, which is where information flow succeeds or fails.

- [Network Operations Center Best Practices, PagerDuty](https://www.pagerduty.com/resources/insights/learn/noc-best-practices/): Running a control centre function rather than only staffing one.

- [Being On-Call, PagerDuty](https://response.pagerduty.com/oncall/being_oncall/): What on-call actually requires, including handover and escalation.

- [Call Etiquette, PagerDuty Incident Response Documentation](https://response.pagerduty.com/before/call_etiquette/): Small practical rules that make an incident bridge usable rather than chaotic.

- [Monitoring the GOV.UK infrastructure](https://technology.blog.gov.uk/2016/03/30/monitoring-the-gov-uk-infrastructure/): Alerting and on-call arrangements for a large public service.

- [Building, testing and iterating our monitoring and alerting service, GDS](https://technology.blog.gov.uk/2018/11/09/building-testing-and-iterating-our-monitoring-and-alerting-service/): How a government monitoring and alerting service was built on Prometheus and iterated.

- [What Is Root Cause Analysis? The Complete RCA Guide, Splunk](https://www.splunk.com/en_us/blog/learn/root-cause-analysis.html): RCA as a structured, data-driven process, covering several techniques including Pareto analysis and Six Sigma methods.

## Research articles

- [A Survey of Time Series Anomaly Detection Methods in the AIOps Domain](https://arxiv.org/abs/2308.00393): The detection methods behind modern alerting, and where they produce false positives.

- [AIOps for log anomaly detection in the era of LLMs: A systematic literature review](https://www.sciencedirect.com/science/article/pii/S2667305325001346): Where log anomaly detection has reached, including large language model approaches.

- [Alert Fatigue in Security Operations Centres: Research Challenges and Opportunities](https://dl.acm.org/doi/10.1145/3723158): An ACM Computing Surveys review of alert fatigue, directly transferable to a control centre.

- [Quantifying the effectiveness of an alarm management system through human factors studies](https://www.sciencedirect.com/science/article/abs/pii/S0098135414000945): Evaluating alarm systems by operator interaction rather than by specification.

- [Predicting operators reliability for control room alarm management using knowledge-based Bayesian networks](https://www.sciencedirect.com/science/article/abs/pii/S0951832026000773): Operator reliability under alarm load, from process control research.

- [A Comprehensive Survey on Root Cause Analysis in (Micro) Services](https://arxiv.org/html/2408.00803v1): Root cause analysis across metrics, traces, logs, and multi-model data.

- [Improved Root Cause Analysis Supporting Resilient Production Systems](https://www.sciencedirect.com/science/article/pii/S0278612522001273): Challenges and enablers in root cause analysis, including poor data quality and bias.

- [Site Reliability Engineering (SRE) and Observations on SRE Process to Make Tasks Easier](https://arxiv.org/html/2505.01926v1): Practitioner observations on the SRE process and its friction points.

- [Ensuring Efficient IT Service Management to Increase Information Systems Availability](https://www.researchgate.net/publication/337847919_Ensuring_Efficient_IT_Service_Management_to_Increase_Information_Systems_Availability): Service management practice connected to measured availability.

- [Continual Process Improvement for ITIL Service Operations: A Lean Perspective](https://www.tandfonline.com/doi/full/10.1080/10580530.2019.1587576): A five-step framework for improving the operations process you work inside.

## Videos

- [Full-stack Observability](https://www.youtube.com/watch?v=toS5rvET7hg): Observability across the stack at the depth a senior analyst needs.

- [Decoupling Observability for Incident Response at Scale](https://www.youtube.com/watch?v=EfdUvwd9rDQ): Structuring observability so incident response scales beyond individual knowledge.

- [PagerDuty Guide: On-Call and Incident Management Best Practices](https://www.youtube.com/watch?v=McBrUhz9Ia4): Practices that survive contact with a bad night.

- [How to Automate Incident Postmortems for Consistent SRE and DevOps Reporting](https://www.youtube.com/watch?v=E53e-3RTU80): Generating structured reports from logs, metrics, traces, and incident timelines.

- [Postmortem Culture at Google](https://www.youtube.com/watch?v=qgHWzQ2zcqQ): Blameless review in an organisation that relies on it working.

- [Performing Postmortems and Postmortem Templates](https://www.youtube.com/watch?v=Y-vY2iCoyTU): Templates, which are the difference between a postmortem habit and a postmortem intention.

- [ITIL 4 Service Management practices: Change control](https://www.youtube.com/watch?v=iIgQImV768s): Change control, which is what you are assessing impact against.

- [ServiceNow CMDB Fundamentals: Configuration Management Database Demo](https://www.youtube.com/watch?v=1G5vExjjmy0): The CMDB data model, which determines what you can verify about an asset.

- [SRE and Observability Interview Questions and Answers](https://www.youtube.com/watch?v=01HfmX3KUPY): A useful self-test of monitoring and reliability depth.

- [A Beginner's Guide to SRE](https://www.youtube.com/watch?v=czA9lK-MP5Q): A refresher on reliability principles, useful before moving towards a manager role.

## Books on Amazon

- [Observability Engineering: Achieving Production Excellence](https://www.amazon.com/Observability-Engineering-Achieving-Production-Excellence/dp/1492076449): By Majors, Fong-Jones, and Miranda. Debugging unfamiliar failures rather than watching for known ones.

- [The Site Reliability Workbook: Practical Ways to Implement SRE](https://www.amazon.com/Site-Reliability-Workbook-Practical-Implement/dp/1492029505): By Beyer, Murphy, and Rensin. Practical SRE including on-call load, alerting policy and toil reduction.

- [Incident Management for Operations](https://www.amazon.com/Incident-Management-Operations-Rob-Schnepp-ebook/dp/B072YZ8W2R): By Schnepp, Vidal, and Hawley. The incident command system applied to IT, which is the model for prioritising a busy queue.

- [The Practice of Cloud System Administration: DevOps and SRE Practices for Web Services, Volume 2](https://www.amazon.com/Practice-Cloud-System-Administration-Practices-ebook/dp/B00N7N2CRQ): By Limoncelli, Chalup, and Hogan. Operating distributed services, with case studies from large operators.

- [The Practice of System and Network Administration, Volume 1](https://www.amazon.com/Practice-System-Network-Administration-Enterprise-ebook/dp/B01MFCSNQZ): By Limoncelli, Hogan, and Chalup. The enterprise operations reference, worth rereading as your scope grows.

- [Hands-on Site Reliability Engineering](https://www.amazon.com/Hands-Site-Reliability-Engineering-Capability/dp/9391030327): By Farooqui and Chikoti. Designing, deploying, monitoring, and sustaining systems at scale.

- [Incident Management for Newbies: Expert Guidance for Beginners](https://www.amazon.com/Incident-Management-Newbies-Guidance-Beginners-ebook/dp/B0146UK2L6): By William Edwards. The ITIL incident management practice, useful for the Level 3 qualification.

- [Problem Management for Newbies: Expert Guidance for Beginners](https://www.amazon.com/Problem-Management-Newbies-Guidance-Beginners-ebook/dp/B00PNNZ4LY): By William Edwards. Problem management techniques including Kepner-Tregoe analysis.

- [Root Cause Analysis: The Core of Problem Solving and Corrective Action](https://www.amazon.com/Root-Cause-Analysis-Problem-Corrective-ebook/dp/B0BQJQQZ8C): By Duke Okes. A disciplined method for the pattern and trend work expected at this level.

- [Site Reliability Engineering Tidbits: Learn SRE Principles and Techniques](https://www.amazon.com/Site-Reliability-Engineering-Tidbits-Observability-ebook/dp/B09QZHZYPC): By Daniel Mican. Short pieces on observability, SLOs, resilience, and debugging.

## Professional development tips

- Prioritise by user impact rather than by which alert arrived loudest
- Make handover a written artefact, because information flow fails most often between shifts
- Tune the alerts that never matter, since silencing them protects the ones that do
- Diagnose before escalating where you safely can, and record what you ruled out
- Learn the virtual environment well enough to distinguish a platform problem from an application problem
- Track patterns across your shifts, since trends are visible to you before they are visible to anyone else
- Protect your recovery time after on-call, because degraded judgement is an operational risk
