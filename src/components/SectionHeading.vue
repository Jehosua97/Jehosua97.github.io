<template>
    <header class="section-heading" :class="{ 'section-heading--light': light }">
        <p class="eyebrow">{{ eyebrow }}</p>
        <div class="section-heading-grid">
            <h2 :id="headingId || undefined">{{ title }}</h2>
            <p v-if="description">{{ description }}</p>
        </div>
    </header>
</template>

<script setup>
defineProps({
    eyebrow: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    light: { type: Boolean, default: false },
    headingId: { type: String, default: "" },
})
</script>
