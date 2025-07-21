<template>
    <div class="code-display">
        <div class="code-section">
            <div class="header">
                <h3>HTML</h3>
                <button @click="copyHtml">Copier</button>
            </div>
            <pre><code>{{ htmlCode }}</code></pre>
        </div>

        <div class="code-section">
            <div class="header">
                <h3>CSS</h3>
                <button @click="copyCss">Copier</button>
            </div>
            <pre><code>{{ cssCode }}</code></pre>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    htmlCode: String,
    cssCode: String,
})

const emit = defineEmits(['copy-html', 'copy-css'])

const copyHtml = () => {
    emit('copy-html')
}

const copyCss = () => {
    emit('copy-css')
}
</script>

<style scoped>
.code-display {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.code-section {
    flex: 1 1 45%;
    background: #1e1e1e;
    color: #d4d4d4;
    border-radius: 6px;
    padding: 1rem;
    font-family: monospace;
    position: relative;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

button {
    background: #3b82f6;
    border: none;
    color: white;
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
}

button:hover {
    background: #2563eb;
}

pre {
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-height: 200px;
}
</style>
