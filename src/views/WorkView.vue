<template>
    <div class="inner-page work-page">
        <section class="page-hero page-hero--work">
            <div class="hero-grid-overlay" aria-hidden="true"></div>
            <div class="container page-hero-grid">
                <div>
                    <p class="eyebrow eyebrow--bright">Selected engineering work</p>
                    <h1>Systems built with clear boundaries and measurable intent.</h1>
                </div>
                <div class="page-hero-side">
                    <p>Applied machine learning, business workflow automation, and cloud monitoring—documented through the problem, approach, outcome, and engineering decisions.</p>
                    <RouterLink class="text-link text-link--light" :to="{ name: 'home', hash: '#contact' }">Start a conversation <span aria-hidden="true">→</span></RouterLink>
                </div>
            </div>
        </section>

        <section class="section work-index" aria-labelledby="all-work-title">
            <div class="container">
                <div class="work-index-head">
                    <div><p class="eyebrow">Case studies</p><h2 id="all-work-title">Three ways of solving complex work.</h2></div>
                    <p>Each case study separates demonstrated results from future opportunities and links to public source material where available.</p>
                </div>
                <div class="projects-grid projects-grid--index">
                    <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
                </div>
            </div>
        </section>

        <section class="section comparison-section" aria-labelledby="comparison-title">
            <div class="container">
                <SectionHeading
                    eyebrow="At a glance"
                    title="Different problem spaces. One operating standard."
                    description="The common thread is dependable engineering: validate inputs, define boundaries, preserve human control, and make outcomes observable."
                    light
                    heading-id="comparison-title"
                />
                <div class="project-comparison" role="table" aria-label="Project comparison">
                    <div class="comparison-row comparison-row--head" role="row">
                        <span role="columnheader">Project</span><span role="columnheader">Primary lens</span><span role="columnheader">Evidence</span><span role="columnheader">Source</span>
                    </div>
                    <div v-for="project in projects" :key="project.slug" class="comparison-row" role="row">
                        <strong role="cell">{{ project.name }}</strong>
                        <span role="cell">{{ project.type }}</span>
                        <span role="cell">{{ project.shortOutcome }}</span>
                        <span role="cell"><a v-if="project.repository" :href="project.repository" target="_blank" rel="noreferrer">Public repository ↗</a><em v-else>Not publicly available</em></span>
                    </div>
                </div>
            </div>
        </section>

        <section class="section evidence-index" aria-labelledby="evidence-title">
            <div class="container">
                <SectionHeading
                    eyebrow="Project evidence"
                    title="A closer look at the artifacts."
                    description="These visuals come from public notebooks or repository definitions. The capstone placeholder is intentionally marked until an approved screenshot is supplied."
                    heading-id="evidence-title"
                />
                <div class="evidence-samples">
                    <figure>
                        <img src="/images/projects/churn/original-churn-distribution.png" alt="Original churn distribution from the project notebook" loading="lazy" />
                        <figcaption><span>Notebook output</span> Original churn distribution</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/projects/churn/optimized-logistic-regression.png" alt="Improved Logistic Regression confusion matrix from the project notebook" loading="lazy" />
                        <figcaption><span>Notebook output</span> Improved Logistic Regression</figcaption>
                    </figure>
                    <article class="evidence-flow">
                        <div><span>Webhook</span><i>→</i><span>Validate</span><i>→</i><span>Approve</span><i>→</i><span>Log</span></div>
                        <h3>Rental Lead Agent workflow</h3>
                        <p>Node sequence reflected from the public n8n workflow definition.</p>
                        <a class="text-link" href="https://github.com/Jehosua97/n8nMultiServiceAutomation/blob/main/workflows/n8n/rental-lead-agent.workflow.json" target="_blank" rel="noreferrer">Inspect source <span aria-hidden="true">↗</span></a>
                    </article>
                </div>
            </div>
        </section>

        <section class="compact-cta">
            <div class="container compact-cta-inner">
                <div><p class="eyebrow eyebrow--bright">Have a related challenge?</p><h2>Let’s turn it into a system that is easier to operate.</h2></div>
                <RouterLink class="button button--primary" :to="{ name: 'home', hash: '#contact' }">Discuss the problem <span aria-hidden="true">→</span></RouterLink>
            </div>
        </section>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router"
import ProjectCard from "../components/ProjectCard.vue"
import SectionHeading from "../components/SectionHeading.vue"
import { projects } from "../data/portfolio.js"
</script>
