<template>
    <form ref="form" class="contact-form" novalidate @submit.prevent="submitForm">
        <div class="form-heading">
            <p class="eyebrow">Start a conversation</p>
            <h3>Tell me what you are working on.</h3>
            <p>Share only what is necessary. A short outline is enough to get started.</p>
        </div>

        <div class="form-grid">
            <label>
                <span>Name <b aria-hidden="true">*</b></span>
                <input v-model.trim="fields.name" name="name" type="text" autocomplete="name" required maxlength="100" />
            </label>
            <label>
                <span>Company</span>
                <input v-model.trim="fields.company" name="company" type="text" autocomplete="organization" maxlength="120" />
            </label>
            <label>
                <span>Work email <b aria-hidden="true">*</b></span>
                <input v-model.trim="fields.email" name="email" type="email" autocomplete="email" required maxlength="160" />
            </label>
            <label>
                <span>How can I help? <b aria-hidden="true">*</b></span>
                <select v-model="fields.intent" name="intent" required>
                    <option value="" disabled>Select one</option>
                    <option>Full-time opportunity</option>
                    <option>Freelance project</option>
                    <option>Consulting engagement</option>
                    <option>Other</option>
                </select>
            </label>
            <label class="form-wide">
                <span>What process or technical problem are you trying to solve? <b aria-hidden="true">*</b></span>
                <textarea v-model.trim="fields.problem" name="problem" rows="4" required minlength="20" maxlength="1200"></textarea>
            </label>
            <label>
                <span>Expected timeline</span>
                <select v-model="fields.timeline" name="timeline">
                    <option value="">Not sure yet</option>
                    <option>As soon as possible</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>3+ months</option>
                </select>
            </label>
            <label>
                <span>Additional context</span>
                <input v-model.trim="fields.message" name="message" type="text" maxlength="400" />
            </label>
        </div>

        <label class="honeypot" aria-hidden="true">
            Website
            <input v-model="fields.website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </label>

        <label class="consent-row">
            <input v-model="fields.consent" name="consent" type="checkbox" required />
            <span>I consent to Jehosua using these details only to respond to this inquiry. <b aria-hidden="true">*</b></span>
        </label>

        <div class="form-footer">
            <button class="button button--primary" type="submit" :disabled="submitting">
                {{ submitting ? "Sending…" : "Send inquiry" }} <span aria-hidden="true">→</span>
            </button>
            <p class="privacy-note">
                <template v-if="endpointConfigured">Protected by validation and a honeypot. Your message is sent to Jehosua's configured form service.</template>
                <template v-else>Your email app will open to send the message directly; no form data is stored by this site.</template>
            </p>
        </div>
        <p v-if="status.message" class="form-status" :class="`form-status--${status.type}`" role="status" aria-live="polite">
            {{ status.message }}
        </p>
    </form>
</template>

<script setup>
import { computed, reactive, ref } from "vue"
import { identity } from "../data/portfolio.js"

const form = ref(null)
const submitting = ref(false)
const startedAt = Date.now()
const endpoint = (import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "").trim()
const endpointConfigured = computed(() => Boolean(endpoint))
const status = reactive({ type: "", message: "" })
const initialFields = () => ({ name: "", company: "", email: "", intent: "", problem: "", timeline: "", message: "", website: "", consent: false })
const fields = reactive(initialFields())

const resetFields = () => Object.assign(fields, initialFields())

const mailtoBody = () => [
    `Name: ${fields.name}`,
    `Company: ${fields.company || "Not provided"}`,
    `Email: ${fields.email}`,
    `Inquiry type: ${fields.intent}`,
    `Timeline: ${fields.timeline || "Not provided"}`,
    "",
    "Problem or goal:",
    fields.problem,
    "",
    "Additional context:",
    fields.message || "Not provided",
].join("\n")

const submitForm = async () => {
    status.message = ""
    if (!form.value?.reportValidity()) return
    if (fields.website || Date.now() - startedAt < 1500) {
        status.type = "error"
        status.message = "Please wait a moment and try again."
        return
    }

    if (!endpointConfigured.value) {
        const subject = encodeURIComponent(`${fields.intent} — portfolio inquiry from ${fields.name}`)
        const body = encodeURIComponent(mailtoBody())
        window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`
        status.type = "info"
        status.message = "Your email app was opened. Please send the prepared message to complete your inquiry."
        return
    }

    submitting.value = true
    try {
        const payload = new FormData(form.value)
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: payload,
        })
        if (!response.ok) throw new Error("The contact service returned an error.")
        status.type = "success"
        status.message = "Thank you—your message was sent. Jehosua will respond as soon as possible."
        resetFields()
    } catch (error) {
        status.type = "error"
        status.message = `The message could not be sent. Please email ${identity.email} directly.`
    } finally {
        submitting.value = false
    }
}
</script>
