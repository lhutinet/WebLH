<template>
    <section class="section">
        <header @click="$emit('toggle')">
            <h2>Apparence</h2>
            <span>{{ isOpen ? '▼' : '▶' }}</span>
        </header>
        <div v-if="isOpen" class="section-content">
            <label>
                Couleur de fond :
                <input type="color" v-model="config.backgroundColor" />
            </label>
            <label>
                Couleur du texte :
                <input type="color" v-model="config.textColor" />
            </label>
            <label>
                Bordure (CSS) :
                <input type="text" v-model="config.border" placeholder="ex: 2px solid #000" />
            </label>
        </div>
    </section>
</template>

<script setup>
defineProps({
    config: Object,
    isOpen: Boolean
})
</script>
