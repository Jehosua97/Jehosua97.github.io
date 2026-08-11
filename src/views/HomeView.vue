<template>
    <div class="home-page">
        <section class="hero">
            <div class="hero-grid-overlay" aria-hidden="true"></div>
            <div class="hero-orbit hero-orbit--one" aria-hidden="true"></div>
            <div class="hero-orbit hero-orbit--two" aria-hidden="true"></div>
            <div class="container hero-layout">
                <div class="hero-copy">
                    <p class="eyebrow eyebrow--bright">Cloud <span>•</span> Software <span>•</span> Automation</p>
                    <p class="hero-name">Jehosua A. Joya, MCS, MBA, B.Eng.</p>
                    <h1>I build reliable systems and intelligent automations that create measurable business value.</h1>
                    <p class="hero-description">
                        I am a Cloud, Software & Automation Engineer with 5+ years of experience building APIs, cloud-native platforms, delivery pipelines, and business process automations. My MCS, MBA, and Computer Engineering background helps me connect technical execution with operational and customer priorities.
                    </p>
                    <div class="hero-actions">
                        <RouterLink class="button button--primary" :to="{ name: 'projects' }">View selected work <span aria-hidden="true">→</span></RouterLink>
                        <RouterLink class="button button--secondary" :to="{ name: 'home', hash: '#contact' }">Discuss an automation project</RouterLink>
                        <a class="button button--text-light" href="/pdf/Jehosua-A-Joya-Resume.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
                    </div>
                    <div class="hero-status">
                        <div><span class="status-dot" aria-hidden="true"></span><strong>{{ identity.availability }}</strong></div>
                        <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>{{ identity.location }}</div>
                    </div>
                </div>

                <div class="hero-portrait-wrap">
                    <div class="portrait-frame">
                        <div class="portrait-accent" aria-hidden="true"></div>
                        <img
                            src="/images/profile/jehosua-joya.jpg"
                            width="960"
                            height="960"
                            alt="Professional portrait of Jehosua A. Joya, MCS, MBA, B.Eng."
                            fetchpriority="high"
                        />
                        <div class="portrait-caption">
                            <span class="mono-label">01 / Profile</span>
                            <strong>Engineering depth.<br />Business perspective.</strong>
                        </div>
                    </div>
                    <div class="hero-stack-card" aria-hidden="true">
                        <span>BUILDING AT THE INTERSECTION OF</span>
                        <div>Cloud infrastructure</div>
                        <div>Software systems</div>
                        <div>Process automation</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="impact-strip" aria-labelledby="impact-title">
            <div class="container">
                <div class="impact-intro">
                    <p id="impact-title" class="eyebrow">Selected career impact</p>
                    <p>Documented results from professional experience—not guarantees of future commercial outcomes.</p>
                </div>
                <div class="metrics-grid">
                    <article v-for="metric in metrics" :key="metric.label" class="metric-card">
                        <strong>{{ metric.value }}</strong>
                        <h2>{{ metric.label }}</h2>
                        <p>{{ metric.context }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="section audience-section" aria-labelledby="audience-title">
            <div class="container">
                <SectionHeading
                    eyebrow="Two ways I can help"
                    title="One engineering profile. Two clear outcomes."
                    description="Whether the goal is strengthening an engineering team or improving a business workflow, the work begins with the problem—not a predetermined tool."
                    heading-id="audience-title"
                />
                <div class="audience-grid">
                    <article v-for="(path, index) in audiencePaths" :key="path.title" class="audience-card">
                        <div class="audience-card-top">
                            <span class="card-index">0{{ index + 1 }}</span>
                            <p class="eyebrow">{{ path.eyebrow }}</p>
                        </div>
                        <h3>{{ path.title }}</h3>
                        <p>{{ path.description }}</p>
                        <ul class="check-list">
                            <li v-for="item in path.items" :key="item"><span aria-hidden="true">✓</span>{{ item }}</li>
                        </ul>
                        <RouterLink class="text-link" :to="path.to">{{ path.action }} <span aria-hidden="true">→</span></RouterLink>
                    </article>
                </div>
            </div>
        </section>

        <section id="work" class="section work-section" aria-labelledby="work-title">
            <div class="container">
                <SectionHeading
                    eyebrow="Selected work"
                    title="Proof through systems, experiments, and outcomes."
                    description="Three projects that show applied machine learning, responsible workflow automation, and cloud reliability thinking."
                    light
                    heading-id="work-title"
                />
                <div class="projects-grid">
                    <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
                </div>
                <div class="section-action">
                    <RouterLink class="button button--light" :to="{ name: 'projects' }">Explore all case studies <span aria-hidden="true">→</span></RouterLink>
                </div>
            </div>
        </section>

        <section class="section artifact-section" aria-labelledby="artifact-title">
            <div class="container">
                <SectionHeading
                    eyebrow="Inside the work"
                    title="Real artifacts. Clear engineering decisions."
                    description="Notebook outputs and repository definitions are shown as evidence of the work—without stock dashboards or simulated results."
                    heading-id="artifact-title"
                />
                <div class="artifact-showcase">
                    <figure class="artifact-feature">
                        <div class="artifact-image-wrap">
                            <img src="/images/projects/churn/optimized-logistic-regression.png" width="590" height="390" loading="lazy" alt="Improved Logistic Regression confusion matrix from the churn project notebook" />
                        </div>
                        <figcaption>
                            <span class="mono-label">VERIFIED NOTEBOOK OUTPUT</span>
                            <strong>Improved Logistic Regression evaluation</strong>
                            <p>Directly extracted from the public project notebook.</p>
                        </figcaption>
                    </figure>
                    <div class="artifact-workflow">
                        <div class="artifact-workflow-head">
                            <span class="mono-label">PUBLIC N8N WORKFLOW</span>
                            <span class="artifact-live"><i></i> Inactive by design</span>
                        </div>
                        <h3>Rental Lead Agent (MVP)</h3>
                        <div class="mini-flow" aria-label="Workflow nodes: Messenger Webhook, Normalize and Extract, Match Rooms, Generate Reply and Update Stage">
                            <div v-for="(node, index) in workflowNodes" :key="node">
                                <span>0{{ index + 1 }}</span>
                                <strong>{{ node }}</strong>
                                <i v-if="index < workflowNodes.length - 1" aria-hidden="true">→</i>
                            </div>
                        </div>
                        <p>Sensitive communication remains a draft pending human approval. Future provider and LLM connections are represented as boundaries—not as completed production integrations.</p>
                        <a class="text-link" href="https://github.com/Jehosua97/n8nMultiServiceAutomation/blob/main/workflows/n8n/rental-lead-agent.workflow.json" target="_blank" rel="noreferrer">Inspect the real workflow definition <span aria-hidden="true">↗</span></a>
                    </div>
                </div>
            </div>
        </section>

        <section id="services" class="section services-section" aria-labelledby="services-title">
            <div class="container">
                <SectionHeading
                    eyebrow="Automation & engineering services"
                    title="Make operational work more reliable."
                    description="I help businesses identify repetitive operational work and turn it into reliable, maintainable, and observable workflows."
                    heading-id="services-title"
                />
                <div class="services-grid">
                    <article v-for="service in services" :key="service.title" class="service-card">
                        <span class="service-number">{{ service.number }}</span>
                        <h3>{{ service.title }}</h3>
                        <p>{{ service.description }}</p>
                        <ul>
                            <li v-for="example in service.examples" :key="example">{{ example }}</li>
                        </ul>
                    </article>
                    <article class="service-card service-card--cta">
                        <span class="service-number">06</span>
                        <h3>Have a workflow in mind?</h3>
                        <p>Start with a focused conversation about the process, constraints, and outcome you need.</p>
                        <RouterLink class="button button--primary" :to="{ name: 'home', hash: '#contact' }">Discuss your project <span aria-hidden="true">→</span></RouterLink>
                    </article>
                </div>

                <div class="process-block">
                    <div class="process-intro">
                        <p class="eyebrow">A practical delivery process</p>
                        <h3>From bottleneck to observable workflow.</h3>
                    </div>
                    <ol class="process-list">
                        <li v-for="step in process" :key="step.number">
                            <span>{{ step.number }}</span>
                            <div><strong>{{ step.title }}</strong><p>{{ step.description }}</p></div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="experience" class="section experience-section" aria-labelledby="experience-title">
            <div class="container">
                <SectionHeading
                    eyebrow="Professional experience"
                    title="Five-plus years turning complexity into dependable delivery."
                    description="Hands-on engineering across cloud operations, software delivery, APIs, infrastructure, observability, product work, and automation."
                    light
                    heading-id="experience-title"
                />
                <div class="experience-list">
                    <article v-for="(job, index) in experience" :key="job.company" class="experience-item">
                        <div class="experience-marker"><span>0{{ index + 1 }}</span></div>
                        <div class="experience-meta">
                            <p class="eyebrow">{{ job.period }}</p>
                            <h3>{{ job.company }}</h3>
                            <p>{{ job.location }}</p>
                        </div>
                        <div class="experience-content">
                            <h4>{{ job.role }}</h4>
                            <p class="experience-summary">{{ job.summary }}</p>
                            <ul>
                                <li v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</li>
                            </ul>
                            <div class="tag-row"><span v-for="tag in job.tags" :key="tag">{{ tag }}</span></div>
                        </div>
                    </article>
                </div>
                <p class="results-note"><span aria-hidden="true">ⓘ</span> All metrics above describe documented past professional results and are not projections or guarantees for future engagements.</p>
            </div>
        </section>

        <section class="section education-section" aria-labelledby="education-title">
            <div class="container">
                <SectionHeading
                    eyebrow="Education & credentials"
                    title="Technical depth, strengthened by business perspective."
                    description="Graduate education in computer science, cloud computing, and business supports decisions that work technically and make sense operationally."
                    heading-id="education-title"
                />
                <div class="education-layout">
                    <div class="education-grid">
                        <article v-for="degree in education" :key="degree.program" class="education-card" :class="{ 'education-card--accent': degree.accent }">
                            <div class="education-card-head">
                                <span class="mono-label">{{ degree.period }}</span>
                                <span v-if="degree.status" class="status-pill">{{ degree.status }}</span>
                            </div>
                            <h3>{{ degree.program }}</h3>
                            <p class="education-school">{{ degree.school }}</p>
                            <p class="education-location">{{ degree.location }}</p>
                            <p v-if="degree.note" class="education-note">{{ degree.note }}</p>
                        </article>
                    </div>

                    <aside class="credentials-panel" aria-label="Professional credentials">
                        <div class="credential-group">
                            <p class="eyebrow">Certifications</p>
                            <article v-for="credential in credentials.inProgress" :key="credential.name" class="credential-row">
                                <div><strong>{{ credential.name }}</strong><span>{{ credential.issuer }}</span></div>
                                <em>{{ credential.status }}</em>
                            </article>
                        </div>
                        <div class="credential-group">
                            <p class="eyebrow">Google Cloud Skill Badges</p>
                            <a v-for="badge in credentials.skillBadges" :key="badge.name" class="credential-row credential-link" :href="badge.href" target="_blank" rel="noreferrer">
                                <div><strong>{{ badge.name }}</strong><span>{{ badge.date }}</span></div>
                                <span aria-hidden="true">↗</span>
                            </a>
                            <p class="credential-disclaimer">Google Cloud Skill Badges are hands-on learning credentials, not Google Cloud professional certifications. Each link opens Jehosua's public, individual Credly credential.</p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <section class="section toolkit-section" aria-labelledby="toolkit-title">
            <div class="container">
                <SectionHeading
                    eyebrow="Technical toolkit"
                    title="Tools selected for the system—not the other way around."
                    description="A focused view of the technologies used most often, followed by the complete capability map for deeper review."
                    light
                    heading-id="toolkit-title"
                />
                <div class="featured-toolkit">
                    <span v-for="tool in featuredTools" :key="tool">{{ tool }}</span>
                </div>
                <details class="toolkit-details">
                    <summary>View complete technical toolkit <span aria-hidden="true">+</span></summary>
                    <div class="toolkit-groups">
                        <article v-for="group in toolkit" :key="group.category">
                            <h3>{{ group.category }}</h3>
                            <ul><li v-for="tool in group.all" :key="tool">{{ tool }}</li></ul>
                        </article>
                    </div>
                </details>
            </div>
        </section>

        <section id="about" class="section about-section" aria-labelledby="about-title">
            <div class="container about-layout">
                <div class="about-lead">
                    <p class="eyebrow">About</p>
                    <h2 id="about-title">Engineering is most valuable when it changes how work gets done.</h2>
                    <div class="about-principle">
                        <span aria-hidden="true">“</span>
                        <p>I build reliable cloud platforms and intelligent automations that turn complex operations into measurable business outcomes.</p>
                    </div>
                </div>
                <div class="about-copy">
                    <p>I am a multidisciplinary engineer who enjoys working where software, cloud infrastructure, automation, and business strategy meet. Over more than five years, I have helped build APIs, web applications, cloud delivery systems, infrastructure automation, and reliable operational platforms.</p>
                    <p>My background includes a Master of Computer Science, an MBA, a Bachelor of Computer Engineering, and specialized graduate education in Virtualization & Cloud Computing. This combination helps me understand both how a system should be engineered and why it matters to the organization using it.</p>
                    <p>I am especially interested in eliminating repetitive work, connecting fragmented systems, improving cloud reliability, and designing automation that remains observable, maintainable, and accountable.</p>
                    <div class="about-facts">
                        <div><span>Based in</span><strong>{{ identity.location }}</strong></div>
                        <div><span>Available for</span><strong>Freelance · Consulting · Full-time</strong></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="section contact-section" aria-labelledby="contact-title">
            <div class="container">
                <div class="contact-heading">
                    <p class="eyebrow eyebrow--bright">Contact</p>
                    <h2 id="contact-title">Let’s build something useful.</h2>
                    <p>Whether you are hiring for a cloud or software engineering role, looking for consulting support, or ready to automate a business process, I would be happy to learn about the problem you are trying to solve.</p>
                    <p class="contact-availability"><span class="status-dot" aria-hidden="true"></span>{{ identity.availability }}</p>
                </div>
                <div class="contact-layout">
                    <aside class="contact-options" aria-label="Direct contact options">
                        <a :href="`mailto:${identity.email}`">
                            <span>Email</span><strong>{{ identity.email }}</strong><i aria-hidden="true">↗</i>
                        </a>
                        <a :href="identity.phoneHref">
                            <span>Phone</span><strong>{{ identity.phoneDisplay }}</strong><i aria-hidden="true">↗</i>
                        </a>
                        <a :href="identity.linkedin" target="_blank" rel="noreferrer">
                            <span>LinkedIn</span><strong>Connect professionally</strong><i aria-hidden="true">↗</i>
                        </a>
                        <a :href="identity.github" target="_blank" rel="noreferrer">
                            <span>GitHub</span><strong>Review public repositories</strong><i aria-hidden="true">↗</i>
                        </a>
                        <a href="/pdf/Jehosua-A-Joya-Resume.pdf" download>
                            <span>Résumé</span><strong>Download PDF</strong><i aria-hidden="true">↓</i>
                        </a>
                    </aside>
                    <ContactForm />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router"
import ContactForm from "../components/ContactForm.vue"
import ProjectCard from "../components/ProjectCard.vue"
import SectionHeading from "../components/SectionHeading.vue"
import {
    audiencePaths,
    credentials,
    education,
    experience,
    featuredTools,
    identity,
    metrics,
    process,
    projects,
    services,
    toolkit,
} from "../data/portfolio.js"

const workflowNodes = ["Messenger Webhook", "Normalize + Extract", "Match Rooms", "Reply + Update Stage"]
</script>
