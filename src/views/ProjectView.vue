<template>
    <div v-if="project" class="inner-page project-page">
        <section class="project-hero">
            <div class="hero-grid-overlay" aria-hidden="true"></div>
            <div class="container">
                <nav class="breadcrumbs" aria-label="Breadcrumb">
                    <RouterLink :to="{ name: 'projects' }">Work</RouterLink><span aria-hidden="true">/</span><span aria-current="page">{{ project.name }}</span>
                </nav>
                <div class="project-hero-grid">
                    <div class="project-hero-copy">
                        <div class="project-meta project-meta--hero"><span>{{ project.number }}</span><span>{{ project.type }}</span><span>{{ project.year }}</span></div>
                        <h1>{{ project.name }}</h1>
                        <p>{{ project.summary }}</p>
                        <div class="project-hero-actions">
                            <a v-if="project.repository" class="button button--primary" :href="project.repository" target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
                            <RouterLink class="button button--secondary" :to="{ name: 'home', hash: '#contact' }">Discuss related work</RouterLink>
                        </div>
                        <p v-if="!project.repository" class="source-note"><span aria-hidden="true">ⓘ</span> No verified public repository has been provided for this project.</p>
                    </div>
                    <ProjectVisual :project="project" large />
                </div>
            </div>
        </section>

        <section class="project-outcomes" aria-label="Project outcomes">
            <div class="container project-outcomes-grid">
                <article v-for="outcome in project.outcomes" :key="outcome.label"><strong>{{ outcome.value }}</strong><span>{{ outcome.label }}</span></article>
            </div>
        </section>

        <section class="section case-study" aria-labelledby="case-study-title">
            <div class="container case-study-layout">
                <aside class="case-study-nav">
                    <p class="eyebrow">Case study</p>
                    <a href="#problem">Problem</a>
                    <a href="#approach">Approach</a>
                    <a href="#outcome">Outcome</a>
                    <a href="#artifacts">Artifacts</a>
                    <a href="#technology">Technology</a>
                </aside>
                <div class="case-study-content">
                    <h2 id="case-study-title" class="visually-hidden">{{ project.name }} case study</h2>
                    <article id="problem" class="case-block">
                        <span class="case-number">01</span>
                        <div><p class="eyebrow">Problem</p><h2>What needed to be understood or improved.</h2><p class="case-lead">{{ project.problem }}</p></div>
                    </article>
                    <article id="approach" class="case-block">
                        <span class="case-number">02</span>
                        <div><p class="eyebrow">Approach</p><h2>How the system was shaped.</h2><ol class="approach-list"><li v-for="(step, index) in project.approach" :key="step"><span>0{{ index + 1 }}</span><p>{{ step }}</p></li></ol></div>
                    </article>
                    <article id="outcome" class="case-block">
                        <span class="case-number">03</span>
                        <div><p class="eyebrow">Outcome & considerations</p><h2>What the work demonstrates—and where its boundaries are.</h2><ul class="consideration-list"><li v-for="item in project.considerations" :key="item"><span aria-hidden="true">→</span><p>{{ item }}</p></li></ul></div>
                    </article>
                </div>
            </div>
        </section>

        <section id="artifacts" class="section project-artifacts-section" aria-labelledby="artifacts-title">
            <div class="container">
                <SectionHeading
                    eyebrow="Project artifacts"
                    title="Evidence from the work."
                    :description="project.artifactNote"
                    light
                    heading-id="artifacts-title"
                />
                <ProjectArtifacts :project="project" />
            </div>
        </section>

        <section id="technology" class="section project-tech-section" aria-labelledby="tech-title">
            <div class="container project-tech-layout">
                <div><p class="eyebrow">Technology</p><h2 id="tech-title">Tools used to deliver this work.</h2></div>
                <ul class="project-tech-list"><li v-for="technology in project.technologies" :key="technology">{{ technology }}</li></ul>
            </div>
        </section>

        <section class="next-project">
            <div class="container next-project-grid">
                <div><p class="eyebrow eyebrow--bright">Next case study</p><h2>{{ nextProject.name }}</h2><p>{{ nextProject.summary }}</p></div>
                <RouterLink class="button button--primary" :to="{ name: 'project', params: { slug: nextProject.slug } }">View project {{ nextProject.number }} <span aria-hidden="true">→</span></RouterLink>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, watchEffect } from "vue"
import { RouterLink } from "vue-router"
import ProjectArtifacts from "../components/ProjectArtifacts.vue"
import ProjectVisual from "../components/ProjectVisual.vue"
import SectionHeading from "../components/SectionHeading.vue"
import { identity, projects } from "../data/portfolio.js"

const props = defineProps({ slug: { type: String, required: true } })
const project = computed(() => projects.find((item) => item.slug === props.slug))
const nextProject = computed(() => {
    const currentIndex = projects.findIndex((item) => item.slug === props.slug)
    return projects[(currentIndex + 1) % projects.length]
})

watchEffect(() => {
    if (!project.value) return
    let script = document.getElementById("project-structured-data")
    if (!script) {
        script = document.createElement("script")
        script.id = "project-structured-data"
        script.type = "application/ld+json"
        document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: project.value.name,
        description: project.value.summary,
        author: { "@type": "Person", name: identity.name, url: "https://jehosua97.github.io/" },
        codeRepository: project.value.repository || undefined,
        programmingLanguage: project.value.technologies,
        url: `https://jehosua97.github.io/projects/${project.value.slug}/`,
    })
})

onBeforeUnmount(() => document.getElementById("project-structured-data")?.remove())
</script>
