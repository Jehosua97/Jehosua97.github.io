<template>
    <button class="nav-toggle-button"
            :class="`${toggled ? 'nav-toggle-button-toggled' : ''}`"
            :aria-label="localizeFromStrings('toggle_navigation')"
            :aria-expanded="String(!toggled)">
        <i :class="faIcon"/>
    </button>
</template>

<script setup>
import {computed, inject} from "vue"

const props = defineProps({
    toggled: Boolean
})

/** @type {Function} */
const localizeFromStrings = inject("localizeFromStrings")

const faIcon = computed(() => {
    return props.toggled ?
        `fa-solid fa-caret-right` :
        `fa-solid fa-caret-left`
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

button.nav-toggle-button {
    background-color: $nav-background;
    color: $nav-contrast-90;

    border: 2px solid lighten($nav-background, 6%);
    border-radius: 100%;
    width: 35px;
    height: 35px;
    font-size: 0.95rem;

    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    &:hover {
        background-color: lighten($nav-background, 6%);
    }

    &:focus-visible {
        outline: 2px solid $accent-teal;
        outline-offset: 2px;
    }

    &-toggled {
        width: 30px;
        height: 30px;
        font-size: 0.85rem;
    }
}
</style>