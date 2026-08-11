<template>
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <SiteHeader />
    <main id="main-content" tabindex="-1">
        <RouterView />
    </main>
    <SiteFooter />
</template>

<script setup>
import { RouterView } from "vue-router"
import SiteHeader from "./components/SiteHeader.vue"
import SiteFooter from "./components/SiteFooter.vue"
</script>
