<template>
    <div class="artifact-gallery">
        <template v-for="(artifact, index) in project.artifacts" :key="`${artifact.type}-${index}`">
            <figure v-if="artifact.type === 'image'" class="artifact-panel artifact-panel--image">
                <a :href="artifact.src" target="_blank" :aria-label="`Open full-size image: ${artifact.caption}`">
                    <img :src="artifact.src" :alt="artifact.alt" loading="lazy" />
                </a>
                <figcaption><span class="mono-label">REAL PROJECT ARTIFACT</span>{{ artifact.caption }}</figcaption>
            </figure>

            <article v-else-if="artifact.type === 'workflow'" class="artifact-panel artifact-panel--workflow">
                <div class="artifact-panel-head"><span class="mono-label">{{ artifact.eyebrow }}</span><span class="artifact-state"><i></i>{{ artifact.status }}</span></div>
                <h3>{{ artifact.title }}</h3>
                <div class="artifact-node-flow">
                    <div v-for="(node, nodeIndex) in artifact.nodes" :key="node">
                        <span>0{{ nodeIndex + 1 }}</span><strong>{{ node }}</strong><i v-if="nodeIndex < artifact.nodes.length - 1" aria-hidden="true">→</i>
                    </div>
                </div>
                <a class="text-link" :href="artifact.href" target="_blank" rel="noreferrer">Open source artifact <span aria-hidden="true">↗</span></a>
            </article>

            <article v-else-if="artifact.type === 'code'" class="artifact-panel artifact-panel--code">
                <span class="mono-label">{{ artifact.eyebrow }}</span>
                <h3>{{ artifact.title }}</h3>
                <pre><code><span v-for="line in artifact.lines" :key="line">{{ line }}
</span></code></pre>
                <a class="text-link" :href="artifact.href" target="_blank" rel="noreferrer">Read architecture notes <span aria-hidden="true">↗</span></a>
            </article>

            <article v-else-if="artifact.type === 'diagram'" class="artifact-panel artifact-panel--diagram">
                <span class="mono-label">{{ artifact.eyebrow }}</span>
                <h3>{{ artifact.title }}</h3>
                <div class="system-diagram" :aria-label="artifact.nodes.join(' to ')">
                    <div v-for="(node, nodeIndex) in artifact.nodes" :key="node">
                        <span>{{ node }}</span><i v-if="nodeIndex < artifact.nodes.length - 1" aria-hidden="true">→</i>
                    </div>
                </div>
                <p>{{ artifact.caption }}</p>
            </article>

            <article v-else class="artifact-panel artifact-panel--placeholder">
                <div class="placeholder-icon" aria-hidden="true"><span></span></div>
                <div><span class="mono-label">REPLACEMENT ASSET NEEDED</span><h3>{{ artifact.title }}</h3><p>{{ artifact.caption }}</p></div>
            </article>
        </template>
    </div>
</template>

<script setup>
defineProps({ project: { type: Object, required: true } })
</script>
