<template>
    <article class="project-card">
        <ProjectVisual :project="project" />
        <div class="project-card-body">
            <div class="project-meta">
                <span>{{ project.number }}</span>
                <span>{{ project.type }}</span>
                <span>{{ project.year }}</span>
            </div>
            <h3>{{ project.name }}</h3>
            <p>{{ project.homeDescription }}</p>
            <div class="project-result">{{ project.shortOutcome }}</div>
            <ul class="tag-list" aria-label="Technologies">
                <li v-for="technology in project.technologies.slice(0, 5)" :key="technology">{{ technology }}</li>
            </ul>
            <div class="project-actions">
                <RouterLink class="text-link" :to="{ name: 'project', params: { slug: project.slug } }">
                    Read case study <span aria-hidden="true">→</span>
                </RouterLink>
                <a v-if="project.repository" class="quiet-link" :href="project.repository" target="_blank" rel="noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                </a>
            </div>
        </div>
    </article>
</template>

<script setup>
import { RouterLink } from "vue-router"
import ProjectVisual from "./ProjectVisual.vue"

defineProps({ project: { type: Object, required: true } })
</script>
