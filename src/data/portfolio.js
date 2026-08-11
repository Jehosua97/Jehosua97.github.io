export const identity = {
    name: "Jehosua A. Joya, MCS, MBA, B.Eng.",
    role: "Cloud, Software & Automation Engineer",
    email: "joya.jehosua@gmail.com",
    phoneDisplay: "(437) 878-1645",
    phoneHref: "tel:+14378781645",
    location: "Brampton, Ontario, Canada",
    linkedin: "https://www.linkedin.com/in/jehosua-joya/",
    github: "https://github.com/Jehosua97",
    availability: "Open to freelance projects, consulting engagements, and full-time opportunities.",
}

export const metrics = [
    { value: "5+", label: "Years of industry experience", context: "Across cloud, software, and automation" },
    { value: "100+", label: "Cloud-native workloads supported", context: "Docker and Kubernetes environments" },
    { value: "99.95%", label: "Platform uptime", context: "Contributed to maintaining it" },
    { value: "100+", label: "APIs and integrations developed", context: "Connecting business and technical systems" },
]

export const audiencePaths = [
    {
        eyebrow: "For engineering teams",
        title: "A hands-on engineer who understands the operating context.",
        description: "Cloud platforms, dependable software delivery, APIs, infrastructure automation, and observability—paired with clear communication across technical and business teams.",
        items: ["Cloud & platform engineering", "Software, APIs & integrations", "Infrastructure as Code", "CI/CD & observability"],
        action: "Review engineering experience",
        to: { name: "home", hash: "#experience" },
    },
    {
        eyebrow: "For businesses",
        title: "Practical automation built around your real workflow.",
        description: "Turn repetitive work and disconnected systems into maintainable, traceable workflows—with validation, approvals, and operational visibility designed in.",
        items: ["Process discovery & automation", "API and webhook integration", "Human approval checkpoints", "AI-ready workflow design"],
        action: "Explore automation services",
        to: { name: "home", hash: "#services" },
    },
]

export const projects = [
    {
        number: "01",
        slug: "sustainable-telecom-churn",
        name: "Sustainable Telecom Churn & E-Waste ML",
        type: "Applied Machine Learning",
        year: "2025",
        shortOutcome: "80.62% optimized accuracy · 0.61 churn recall",
        summary: "An end-to-end machine learning workflow connecting telecom churn prediction with a wider sustainability and e-waste analysis.",
        homeDescription: "Compared four model families, handled class imbalance, tuned decision thresholds, and connected the selected model to a sustainability question.",
        repository: "https://github.com/Jehosua97/ML-customer-churn-prediction",
        theme: "teal",
        technologies: ["Python", "scikit-learn", "XGBoost", "SMOTE", "GridSearchCV", "Logistic Regression", "SVM", "MLP"],
        problem: "Telecom churn creates both a commercial retention problem and a potential sustainability cost when customer turnover contributes to premature equipment replacement. The project needed a repeatable way to compare predictive approaches while keeping the analysis interpretable.",
        approach: [
            "Prepared and transformed the IBM Telco Customer Churn dataset, including missing-value handling, encoding, tenure bands, and skewed-variable transformations.",
            "Applied SMOTE to the training data and compared Logistic Regression, SVM, XGBoost, and Multilayer Perceptron models.",
            "Used cross-validated parameter search and decision-threshold tuning, then connected predicted churn to an e-waste estimation model.",
        ],
        outcomes: [
            { value: "80.62%", label: "Optimized Logistic Regression accuracy" },
            { value: "0.61", label: "Recall for the churn class" },
            { value: "4", label: "Model families evaluated" },
        ],
        considerations: [
            "Accuracy alone is not enough for an imbalanced churn problem; recall and interpretability shaped the model choice.",
            "SMOTE was applied only to training data to avoid contaminating evaluation results.",
            "The environmental estimate is an analytical lens, not a production lifecycle assessment or a commercial guarantee.",
        ],
        artifacts: [
            { type: "image", src: "/images/projects/churn/original-churn-distribution.png", alt: "Notebook output showing the original imbalance between non-churn and churn customers", caption: "Original class distribution · notebook output" },
            { type: "image", src: "/images/projects/churn/class-distribution-after-smote.png", alt: "Notebook output showing balanced classes after SMOTE was applied to training data", caption: "Training distribution after SMOTE · notebook output" },
            { type: "image", src: "/images/projects/churn/baseline-logistic-regression.png", alt: "Confusion matrix for the baseline Logistic Regression model", caption: "Baseline Logistic Regression · notebook output" },
            { type: "image", src: "/images/projects/churn/optimized-logistic-regression.png", alt: "Confusion matrix for the improved Logistic Regression model", caption: "Improved Logistic Regression · notebook output" },
            { type: "image", src: "/images/projects/churn/contract-type-ewaste.png", alt: "Predicted e-waste generation by telecom contract type", caption: "Predicted e-waste by contract type · published project result" },
            { type: "image", src: "/images/projects/churn/logistic-regression-comparison.png", alt: "Table comparing contract type, churn rate, and estimated e-waste per year", caption: "Churn and e-waste comparison · published project result" },
        ],
        artifactNote: "These figures are direct outputs embedded in the project's public Jupyter notebooks.",
    },
    {
        number: "02",
        slug: "business-ai-automation-hub",
        name: "Business AI Automation Hub",
        type: "Business Automation Architecture",
        year: "Open source",
        shortOutcome: "Modular · validated · human-controlled",
        summary: "A security-conscious automation monorepo with typed services, n8n workflows, data contracts, structured logging, and human approval gates.",
        homeDescription: "Designed service boundaries and workflow controls that keep sensitive actions reviewable, observable, and ready for future integrations.",
        repository: "https://github.com/Jehosua97/n8nMultiServiceAutomation",
        theme: "blue",
        technologies: ["TypeScript", "n8n", "Docker", "PostgreSQL", "REST APIs", "JSON Schema", "Vitest", "Webhooks"],
        problem: "Small-business workflows often span messaging, scheduling, lead handling, and data updates. Connecting them quickly can create fragile automations, unsafe auto-send behavior, and unclear accountability.",
        approach: [
            "Separated orchestration, deterministic business logic, HTTP/data access, and conversational behavior into clear monorepo boundaries.",
            "Defined importable n8n workflows, JSON Schema contracts, typed services, validation, webhook verification, and structured logging.",
            "Kept outbound communication behind draft and approval states, with official provider integrations intentionally disabled until credentials, policy, and opt-in requirements are met.",
        ],
        outcomes: [
            { value: "5", label: "Importable n8n workflow definitions" },
            { value: "4", label: "Clear architectural boundaries" },
            { value: "2", label: "Human-controlled approval modes" },
        ],
        considerations: [
            "The current MVP uses deterministic services and sample data; it does not claim complete production LLM integrations.",
            "Sensitive actions remain draft-only or require human approval before an official channel can send them.",
            "Production readiness still requires authentication, durable persistence, retries, backups, privacy rules, and end-to-end testing.",
        ],
        artifacts: [
            {
                type: "workflow",
                eyebrow: "Real n8n workflow definition",
                title: "ConfortPlace — Rental Lead Agent (MVP)",
                nodes: ["Messenger Webhook", "Normalize + Extract", "Match Rooms", "Generate Reply + Update Stage"],
                status: "Inactive by default · draft pending approval",
                href: "https://github.com/Jehosua97/n8nMultiServiceAutomation/blob/main/workflows/n8n/rental-lead-agent.workflow.json",
            },
            {
                type: "code",
                eyebrow: "Real repository boundary",
                title: "Typed automation services",
                lines: [
                    "workflows/n8n   → orchestration",
                    "services/shared → deterministic rules",
                    "services/api    → validation + HTTP",
                    "data/schemas    → structured contracts",
                    "agents          → prompts + safety limits",
                ],
                href: "https://github.com/Jehosua97/n8nMultiServiceAutomation/blob/main/docs/architecture.md",
            },
        ],
        artifactNote: "The workflow names, states, and repository boundaries shown here come directly from the public project files.",
    },
    {
        number: "03",
        slug: "hybrid-cloud-monitoring-platform",
        name: "Hybrid Cloud Monitoring & Automation Platform",
        type: "Conestoga College Capstone",
        year: "2025",
        shortOutcome: "Recognized for innovation & technical robustness",
        summary: "A hybrid cloud monitoring and automation platform combining Infrastructure as Code, Python automation, alerting, and visualization dashboards.",
        homeDescription: "Designed a reproducible monitoring platform that connects infrastructure provisioning, automated alerting, and operational visibility.",
        repository: null,
        theme: "navy",
        technologies: ["AWS", "Terraform", "Docker", "Python", "Grafana", "Infrastructure as Code", "Alerting", "Dashboards"],
        problem: "Hybrid environments can become difficult to reproduce and operate when infrastructure, monitoring, and response workflows are configured separately and maintained by hand.",
        approach: [
            "Designed repeatable cloud infrastructure using Terraform and containerized supporting services with Docker.",
            "Used Python automation to connect operational tasks with automated alerting and monitoring workflows.",
            "Created Grafana dashboard views to make platform health and operational signals easier to understand.",
        ],
        outcomes: [
            { value: "IaC", label: "Repeatable infrastructure foundation" },
            { value: "Python", label: "Operational automation layer" },
            { value: "Faculty", label: "Recognition for innovation and robustness" },
        ],
        considerations: [
            "Monitoring is most useful when alerts map to actionable operating decisions, not simply more notifications.",
            "Infrastructure and dashboards should evolve together so new services remain observable by default.",
            "A public repository and approved screenshots have not been provided, so none are represented as available.",
        ],
        artifacts: [
            {
                type: "diagram",
                eyebrow: "Documented system scope",
                title: "Provision → Observe → Respond",
                nodes: ["Terraform", "AWS + Docker", "Python automation", "Alerting", "Grafana"],
                caption: "A simplified diagram based only on the documented capstone scope—not a product screenshot.",
            },
            {
                type: "placeholder",
                title: "Approved capstone screenshot pending",
                caption: "Replace this panel with a real Grafana dashboard or architecture capture once publication approval is confirmed.",
            },
        ],
        artifactNote: "No public repository or approved screenshot was supplied for this academic capstone.",
    },
]

export const services = [
    {
        number: "01",
        title: "Business Process Automation",
        description: "Analyze repetitive workflows and build practical automations with n8n, Python, APIs, webhooks, validation, and approval steps.",
        examples: ["Data entry and routing", "Notifications and approvals", "Scheduled operational tasks"],
    },
    {
        number: "02",
        title: "API & System Integration",
        description: "Connect business systems through REST APIs, webhooks, structured data contracts, PostgreSQL, and focused integration services.",
        examples: ["System synchronization", "Webhook pipelines", "Reliable data exchange"],
    },
    {
        number: "03",
        title: "Cloud & Delivery Automation",
        description: "Improve deployment consistency with Terraform, CloudFormation, Docker, Kubernetes, and CI/CD pipelines.",
        examples: ["Repeatable infrastructure", "Delivery pipelines", "Environment consistency"],
    },
    {
        number: "04",
        title: "Monitoring & Reliability",
        description: "Create monitoring, alerting, dashboards, and operational visibility with Datadog, Grafana, and Zabbix.",
        examples: ["Operational dashboards", "Alert design", "Issue diagnosis"],
    },
    {
        number: "05",
        title: "AI-Ready Workflow Design",
        description: "Identify responsible AI-assisted steps while preserving validation, approvals, traceability, security boundaries, and operational control.",
        examples: ["Opportunity assessment", "Human-in-the-loop design", "Integration boundaries"],
    },
]

export const process = [
    { number: "01", title: "Discover", description: "Understand the workflow, systems, bottlenecks, risks, and desired business outcome." },
    { number: "02", title: "Design", description: "Define boundaries, data contracts, integrations, controls, and success criteria." },
    { number: "03", title: "Build", description: "Implement the workflow, APIs, infrastructure, and supporting services." },
    { number: "04", title: "Validate", description: "Test expected behavior, errors, security controls, approvals, and contracts." },
    { number: "05", title: "Monitor & Improve", description: "Add operational visibility and refine the workflow based on measurable results." },
]

export const experience = [
    {
        company: "Solera Holdings",
        role: "Software Configuration Management Engineer I",
        period: "October 2022 — Present",
        location: "Remote · Mexico City, Mexico",
        summary: "Cloud operations, delivery automation, Infrastructure as Code, and observability for globally distributed application and engineering teams.",
        highlights: [
            "Deployed, operated, and troubleshot 100+ business-critical Docker and Kubernetes workloads while contributing to 99.95% uptime.",
            "Automated delivery pipelines for 40+ AWS applications with Jenkins, GitLab CI, Terraform, and related tooling.",
            "Reduced deployment failures by 30% and shortened release cycles by 20% through repeatable delivery practices.",
            "Standardized AWS infrastructure with Terraform and CloudFormation and supported monitoring with Datadog, Grafana, and Zabbix.",
            "Supported IAM optimization, vulnerability scanning, secrets management, and GDPR-aligned engineering practices.",
        ],
        tags: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Observability"],
    },
    {
        company: "Huawei",
        role: "IT Solutions & Product Manager Jr · Full Stack Developer · Intern",
        period: "October 2020 — September 2022",
        location: "Mexico City, Mexico",
        summary: "Software delivery, systems integration, product work, and process automation across business, technical, and operational stakeholders.",
        highlights: [
            "Developed 100+ APIs and system integrations, improving cross-platform data throughput by 40%.",
            "Developed 40+ web applications using JavaScript technologies.",
            "Automated approximately 30% of manual workflows with Python, Bash, and Selenium.",
            "Saved 20+ hours per week per department through workflow automation.",
            "Received the Best Intern, Top Minds Mexico recognition in 2021.",
        ],
        tags: ["APIs", "JavaScript", "Python", "Automation", "Product"],
    },
]

export const education = [
    {
        school: "Algoma University",
        program: "Master of Computer Science",
        period: "September 2025 — August 2026",
        location: "Brampton, Ontario, Canada",
        status: "Expected August 2026",
        accent: false,
    },
    {
        school: "Autonomous Technological Institute of Mexico, ITAM",
        program: "Master of Business Administration, MBA",
        period: "January 2023 — July 2024",
        location: "Mexico City, Mexico",
        status: "WES Evaluated",
        accent: true,
        note: "A strategic foundation for process analysis, stakeholder communication, technical tradeoffs, and measurable business outcomes.",
    },
    {
        school: "Conestoga College",
        program: "Ontario College Graduate Certificate in Virtualization & Cloud Computing",
        period: "September 2024 — April 2025",
        location: "Waterloo, Ontario, Canada",
        status: null,
        accent: false,
    },
    {
        school: "National Autonomous University of Mexico, UNAM",
        program: "Bachelor of Computer Engineering",
        period: "January 2016 — January 2021",
        location: "Mexico City, Mexico",
        status: "WES Evaluated",
        accent: false,
    },
]

export const credentials = {
    inProgress: [
        { name: "AWS Certified Solutions Architect — Associate", issuer: "Amazon Web Services", status: "In Progress" },
        { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", status: "In Progress" },
    ],
    skillBadges: [
        {
            name: "Set Up an App Dev Environment on Google Cloud",
            issuer: "Google Cloud Skill Badge",
            date: "Issued February 14, 2025",
            href: "https://www.credly.com/badges/84744f72-da7c-421a-a65a-2c92efad7240",
        },
        {
            name: "Set Up a Google Cloud Network",
            issuer: "Google Cloud Skill Badge",
            date: "Issued February 14, 2025",
            href: "https://www.credly.com/badges/e4d3ee79-8341-4c47-a8e6-618b81cd5232",
        },
    ],
}

export const toolkit = [
    { category: "Cloud & Platforms", featured: ["AWS", "Kubernetes", "Docker"], all: ["AWS", "EC2", "S3", "IAM", "VPC", "Lambda", "AWS CDK", "Google Cloud foundations", "Kubernetes", "Docker", "Cloud-native applications"] },
    { category: "Infrastructure as Code", featured: ["Terraform", "CloudFormation"], all: ["Terraform", "CloudFormation", "Ansible"] },
    { category: "CI/CD & Delivery", featured: ["Jenkins", "GitLab CI", "GitHub Actions"], all: ["Jenkins", "GitLab CI", "GitHub Actions", "Git", "Nexus", "CI/CD", "Agile", "Scrum", "Jira"] },
    { category: "Programming", featured: ["Python", "TypeScript", "JavaScript"], all: ["Python", "TypeScript", "JavaScript", "Bash", "Groovy", "SQL"] },
    { category: "APIs & Data", featured: ["REST APIs", "Webhooks", "PostgreSQL"], all: ["REST APIs", "Webhooks", "System integration", "PostgreSQL", "JSON Schema", "Cross-platform data exchange"] },
    { category: "Automation", featured: ["n8n", "Selenium"], all: ["n8n", "Selenium", "Python automation", "Bash automation", "Workflow orchestration", "Human-in-the-loop controls", "Validation", "Vitest", "Structured logging"] },
    { category: "Machine Learning", featured: ["scikit-learn", "XGBoost"], all: ["scikit-learn", "Logistic Regression", "SVM", "XGBoost", "Multilayer Perceptron", "SMOTE", "GridSearchCV", "Data preprocessing", "Model comparison", "Model evaluation", "Threshold tuning"] },
    { category: "Monitoring & Reliability", featured: ["Datadog", "Grafana", "Zabbix"], all: ["Datadog", "Grafana", "Zabbix", "Monitoring", "Alerting", "Troubleshooting", "Issue triage", "High availability", "Operational visibility"] },
    { category: "Security Practices", featured: [], all: ["IAM policy design", "Vulnerability scanning", "Secrets management", "GDPR-aligned engineering practices", "Approval gates", "Webhook verification"] },
    { category: "Business & Consulting", featured: [], all: ["Stakeholder engagement", "Requirements analysis", "Process improvement", "Product management", "Business and technology alignment", "Technical solution delivery", "Cross-functional collaboration", "Customer-focused problem solving", "Technical communication"] },
]

export const featuredTools = toolkit.flatMap((group) => group.featured)
