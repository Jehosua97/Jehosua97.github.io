<template>
    <footer class="site-footer">
        <div class="container footer-grid">
            <div>
                <span class="brand-mark footer-mark" aria-hidden="true">JJ</span>
                <p class="footer-name">Jehosua A. Joya, MCS, MBA, B.Eng.</p>
                <p>Cloud, Software & Automation Engineer</p>
            </div>
            <nav aria-label="Footer navigation">
                <RouterLink :to="{ name: 'projects' }">Selected work</RouterLink>
                <RouterLink :to="{ name: 'home', hash: '#services' }">Services</RouterLink>
                <RouterLink :to="{ name: 'home', hash: '#contact' }">Contact</RouterLink>
            </nav>
            <div class="footer-social">
                <a :href="identity.linkedin" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                <a :href="identity.github" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                <a :href="`mailto:${identity.email}`">Email</a>
            </div>
        </div>
        <div class="container footer-base">
            <p>© {{ year }} Jehosua A. Joya, MCS, MBA, B.Eng.</p>
            <p>Engineered for clarity, access, and fast loading.</p>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from "vue-router"
import { identity } from "../data/portfolio.js"

const year = new Date().getFullYear()
</script>
