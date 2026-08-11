<template>
    <div class="project-visual" :class="[`project-visual--${project.theme}`, { 'project-visual--large': large }]" aria-hidden="true">
        <template v-if="project.slug === 'sustainable-telecom-churn'">
            <div class="chart-window">
                <div class="window-bar"><span></span><span></span><span></span><small>model_evaluation.ipynb</small></div>
                <div class="mini-matrix">
                    <span class="matrix-a">906</span><span class="matrix-b">129</span>
                    <span class="matrix-c">144</span><span class="matrix-d">230</span>
                </div>
                <div class="chart-legend"><i></i> Improved Logistic Regression</div>
            </div>
            <div class="visual-stat"><strong>80.62%</strong><span>optimized accuracy</span></div>
        </template>

        <template v-else-if="project.slug === 'business-ai-automation-hub'">
            <div class="workflow-canvas">
                <div class="workflow-node node-trigger"><span>01</span>Webhook</div>
                <i class="workflow-line line-one"></i>
                <div class="workflow-node node-validate"><span>02</span>Validate</div>
                <i class="workflow-line line-two"></i>
                <div class="workflow-node node-approve"><span>03</span>Approval</div>
                <i class="workflow-line line-three"></i>
                <div class="workflow-node node-log"><span>04</span>Log</div>
                <div class="workflow-badge">Human in the loop</div>
            </div>
        </template>

        <template v-else>
            <div class="monitor-window">
                <div class="window-bar"><span></span><span></span><span></span><small>hybrid-cloud / overview</small></div>
                <div class="monitor-grid">
                    <div class="monitor-chart"><i v-for="height in bars" :key="height" :style="{ height: `${height}%` }"></i></div>
                    <div class="monitor-health"><span></span><strong>Systems observable</strong><small>AWS · Docker · Grafana</small></div>
                </div>
            </div>
            <div class="cloud-orbit"><i></i><i></i><i></i></div>
        </template>
    </div>
</template>

<script setup>
defineProps({
    project: { type: Object, required: true },
    large: { type: Boolean, default: false },
})

const bars = [32, 58, 46, 72, 61, 86, 68, 92, 78, 96]
</script>
