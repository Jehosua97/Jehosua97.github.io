<template>
    <header class="site-header" :class="{ 'menu-is-open': menuOpen }">
        <div class="container header-inner">
            <RouterLink class="brand" :to="{ name: 'home' }" aria-label="Jehosua A. Joya, MCS, MBA, B.Eng. — home">
                <span class="brand-mark" aria-hidden="true">JJ</span>
                <span class="brand-copy">
                    <strong>Jehosua A. Joya, MCS, MBA, B.Eng.</strong>
                    <small>Cloud · Software · Automation</small>
                </span>
            </RouterLink>

            <button
                class="menu-toggle"
                type="button"
                :aria-expanded="menuOpen"
                aria-controls="primary-navigation"
                :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
                @click="menuOpen = !menuOpen"
            >
                <span></span><span></span>
            </button>

            <nav id="primary-navigation" class="primary-nav" aria-label="Primary navigation">
                <RouterLink v-for="link in links" :key="link.label" :to="link.to">{{ link.label }}</RouterLink>
                <a class="nav-resume" href="/pdf/Jehosua-A-Joya-Resume.pdf" download>Résumé <span aria-hidden="true">↘</span></a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue"
import { RouterLink, useRoute } from "vue-router"

const route = useRoute()
const menuOpen = ref(false)

const links = [
    { label: "Work", to: { name: "home", hash: "#work" } },
    { label: "Services", to: { name: "home", hash: "#services" } },
    { label: "Experience", to: { name: "home", hash: "#experience" } },
    { label: "About", to: { name: "home", hash: "#about" } },
    { label: "Contact", to: { name: "home", hash: "#contact" } },
]

watch(() => route.fullPath, () => { menuOpen.value = false })
watch(menuOpen, (isOpen) => document.body.classList.toggle("nav-open", isOpen))

const closeOnEscape = (event) => {
    if (event.key === "Escape") menuOpen.value = false
}

onMounted(() => document.addEventListener("keydown", closeOnEscape))
onBeforeUnmount(() => {
    document.removeEventListener("keydown", closeOnEscape)
    document.body.classList.remove("nav-open")
})
</script>
