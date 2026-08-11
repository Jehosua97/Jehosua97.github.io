<template>
    <Article class="article-tag-groups"
             :model="model">
        <div class="tag-group"
             v-for="item in visibleItems"
             :key="item.id">
            <h6 class="tag-group-title text-3 fw-bold text-light-6"
                v-html="localize(item.locales, 'title')"/>
            <Tags :tags="localize(item.locales, 'tags')"/>
        </div>

        <button v-if="hasMore"
                class="btn btn-outline-primary btn-sm show-more-btn"
                type="button"
                @click="showAll = !showAll">
            <i class="fa-solid me-2" :class="showAll ? 'fa-chevron-up' : 'fa-chevron-down'"/>
            <span v-html="showAll
                ? localizeFromStrings('show_less_categories')
                : localizeFromStrings('show_more_categories').replace('{n}', hiddenCount)"/>
        </button>
    </Article>
</template>

<script setup>
import {computed, inject, ref} from "vue"
import Article from "/src/vue/components/articles/base/Article.vue"
import Tags from "/src/vue/components/widgets/Tags.vue"

const props = defineProps({
    /** @type {Article} **/
    model: {
        type: Object,
        required: true
    }
})

/** @type {Function} */
const localize = inject("localize")

/** @type {Function} */
const localizeFromStrings = inject("localizeFromStrings")

const showAll = ref(false)

const primaryCount = computed(() => {
    return Number(props.model.getSetting("primary_count", 5))
})

const visibleItems = computed(() => {
    if(showAll.value)
        return props.model.items
    return props.model.items.slice(0, primaryCount.value)
})

const hasMore = computed(() => {
    return props.model.items.length > primaryCount.value
})

const hiddenCount = computed(() => {
    return props.model.items.length - primaryCount.value
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.tag-group {
    &:not(:last-child) {
        margin-bottom: 22px;
    }
}

h6.tag-group-title {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
}

button.show-more-btn {
    margin-top: 8px;
    border-radius: 4rem;
    padding: 0.5rem 1.25rem;
}
</style>
