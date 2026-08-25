<template>
    <Article class="article-contact-form"
             :model="model">
        <form id="contact-form"
              ref="form"
              @submit="_onFormSubmit">
            <ArticleContactFormFields v-if="shouldDisplayFormFields"
                                      :error-message="errorMessage"
                                      :info-message="mailtoNoticeMessage"
                                      @input="_onInput"/>

            <ArticleContactFormThankYou v-else
                                        :title="localize(model.locales, 'contact_thank_you')"
                                        :description="localize(model.locales, 'contact_thank_you_description')"
                                        :info="localize(model.locales, 'contact_thank_you_reply').replaceAll('{email}', email || '')"
                                        @reset="_onFormReset"/>
        </form>
    </Article>
</template>

<script setup>
import {computed, inject, onMounted, ref} from "vue"
import {useEmails} from "/src/composables/emails.js"
import {useUtils} from "/src/composables/utils.js"
import Article from "/src/vue/components/articles/base/Article.vue"
import ArticleContactFormFields from "/src/vue/components/articles/contact/ArticleContactFormFields.vue"
import ArticleContactFormThankYou from "/src/vue/components/articles/contact/ArticleContactFormThankYou.vue"

const emails = useEmails()
const utils = useUtils()

const props = defineProps({
    /** @type {Article} **/
    model: {
        type: Object,
        required: true
    }
})

/** @type {Function} */
const setSpinnerEnabled = inject("setSpinnerEnabled")

/** @type {Function} */
const localize = inject("localize")

/** @type {Function} */
const localizeFromStrings = inject("localizeFromStrings")

/** @type {Function} */
const scrollToTopOfCurrentSection = inject("scrollToTopOfCurrentSection")

/** @type {{value:Profile}} */
const profile = inject("profile")

const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const apiResponse = ref(null)
const validationError = ref(null)
const isEmailjsConfigured = ref(false)
const mailtoNoticeVisible = ref(false)

const shouldDisplayFormFields = computed(() => {
    return !apiResponse.value || !apiResponse.value.success
})

const errorMessage = computed(() => {
    if(apiResponse.value && !apiResponse.value.success)
        return localizeFromStrings("error_sending_message")

    if(validationError.value)
        return localizeFromStrings(validationError.value)

    return null
})

const mailtoNoticeMessage = computed(() => {
    if(!mailtoNoticeVisible.value)
        return null
    return localizeFromStrings("mailto_fallback_notice")
})

onMounted(() => {
    // JSON content settings take priority; VITE_EMAILJS_* env vars (see .env.example)
    // are the fallback so credentials can be supplied at build time via CI secrets
    // without editing tracked content files.
    const publicKey = props.model.getSetting("contact_js_public_key") || import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const serviceId = props.model.getSetting("contact_js_service_id") || import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = props.model.getSetting("contact_js_template_id") || import.meta.env.VITE_EMAILJS_TEMPLATE_ID

    if(publicKey && serviceId && templateId) {
        emails.init(publicKey, serviceId, templateId)
        isEmailjsConfigured.value = true
    }
})

const _onInput = (field, value) => {
    switch (field) {
        case "name": name.value = value; break
        case "email": email.value = value; break
        case "subject": subject.value = value; break
        case "message": message.value = value; break
    }
}

const _onFormSubmit = async (e) => {
    e.preventDefault && e.preventDefault()

    _validate()
    if(validationError.value) {
        scrollToTopOfCurrentSection()
        return
    }

    _submit().then(r => {})
}

const _onFormReset = () => {
    name.value = ""
    email.value = ""
    subject.value = ""
    message.value = ""
    apiResponse.value = null
    validationError.value = null
}

const _validate = () => {
    validationError.value = null
    if(!name.value.length || !email.value.length || !subject.value.length || !message.value.length) {
        validationError.value = "error_fill_all_fields"
    }
    if(!utils.isValidEmail(email.value)) {
        validationError.value = "error_invalid_email"
    }
}

const _submit = async () => {
    if(!isEmailjsConfigured.value) {
        _submitViaMailto()
        return
    }

    setSpinnerEnabled && setSpinnerEnabled(true, localizeFromStrings('sending_message'))

    const success = await emails.sendContact(name.value, email.value, subject.value, message.value)
    apiResponse.value = {success: success}

    scrollToTopOfCurrentSection()
    setSpinnerEnabled && setSpinnerEnabled(false)
}

/**
 * Fallback used whenever no EmailJS credentials are configured for this article.
 * Opens the visitor's own e-mail client with the form fields pre-filled instead
 * of silently failing or pretending the message was received by a server.
 */
const _submitViaMailto = () => {
    const to = profile.value.getContactOptionWithId("email")?.getStaticValue(false) || ""
    const mailSubject = encodeURIComponent(subject.value)
    const mailBody = encodeURIComponent(`${message.value}\n\n— ${name.value} (${email.value})`)

    mailtoNoticeVisible.value = true
    window.location.href = `mailto:${to}?subject=${mailSubject}&body=${mailBody}`
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

#contact-form {
    display: flex;
    width: 100%;
}
</style>