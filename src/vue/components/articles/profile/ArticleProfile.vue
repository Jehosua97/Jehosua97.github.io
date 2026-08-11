<template>
    <Article class="article-profile"
             :model="model">
        <h1 class="title display-1 mb-3"
            v-html="title"/>

        <InlineLinkList :items="InlineLinkListLinks"/>

        <div class="items-wrapper py-2 py-lg-3">
            <ArticleProfileItem v-for="item in model.items"
                                :item="item"/>
        </div>

        <div class="cta-button-wrapper pb-3 pb-lg-4">
            <a class="btn btn-primary btn-xl" href="#portfolio">
                <i class="fa-solid fa-diagram-project me-2"/>
                <span v-html="localizeFromStrings('view_selected_work')"/>
            </a>
            <a class="btn btn-outline-primary btn-xl" href="#contact">
                <i class="fa-solid fa-comments me-2"/>
                <span v-html="localizeFromStrings('discuss_automation_project')"/>
            </a>
            <a v-if="resumeHref"
               class="btn btn-outline-dark btn-xl"
               :href="resumeHref"
               download>
                <i class="fa-solid fa-file-pdf me-2"/>
                <span v-html="localizeFromStrings('download_resume')"/>
            </a>
        </div>

        <SocialLinks :items="socialLinks"
                     class="pt-lg-1"
                     size="3"
                     variant="dark"/>
    </Article>
</template>

<script setup>
import {computed, inject} from "vue"
import Article from "/src/vue/components/articles/base/Article.vue"
import ArticleProfileItem from "/src/vue/components/articles/profile/ArticleProfileItem.vue"
import SocialLinks from "/src/vue/components/widgets/SocialLinks.vue"
import InlineLinkList from "/src/vue/components/widgets/InlineLinkList.vue"
import {useUtils} from "/src/composables/utils.js"

const utils = useUtils()

const props = defineProps({
    model: {
        /** @type {Article} **/
        type: Object,
        required: true
    }
})

/** @type {Function} */
const localize = inject("localize")

/** @type {Function} */
const localizeFromStrings = inject("localizeFromStrings")

/** @type {{value:Profile}} */
const profile = inject("profile")

/** @type {{value:Boolean}} */
const isScreenXlOrLarger = inject("isScreenXlOrLarger")

const resumeHref = computed(() => {
    return profile.value.getContactOptionWithId("download_resume")?.href
})

const title = computed(() => {
    return localize(
        props.model.section.locales,
        isScreenXlOrLarger.value ? "title" : "title_short"
    )
})

const InlineLinkListLinks = computed(() => {
    const contactIds = props.model.getSetting("contact_list_ids", [])
    return contactIds.map(contactId => {
        return profile.value.getContactOptionWithId(contactId)
    }).filter(contact => Boolean(contact))
})

const socialLinks = computed(() => {
    const contactIds = props.model.getSetting("contact_circles_ids", [])
    return contactIds.map(contactId => {
        return profile.value.getContactOptionWithId(contactId)
    }).filter(contact => Boolean(contact))
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

h1.title {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    @include media-breakpoint-down($navigation-sidebar-breakpoint) {
        display: none;
    }
}

div.cta-button-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    a.btn-xl {
        @include generate-dynamic-styles-with-hash((
            xxxl: (padding: 1.125rem 2.3rem, font-size: 1.05rem),
            xxl:  (padding: 1rem 2rem, font-size: 1rem),
            lg:   (padding: 1rem 1.5rem, font-size: 0.9rem)
        ));

        border-radius: 4rem;
        font-weight: 400;
        font-family: $headings-font-family;
        text-transform: uppercase;
    }
}
</style>