<template>
    <section class="section">
        <header @click="$emit('toggle')">
            <h2>Dimensions</h2>
        </header>
        <div v-if="isOpen" class="section-content">
            <label>
                Largeur (px) :
                <input type="range" min="50" max="400" v-model="config.width" />
                <input type="number" min="50" max="400" v-model.number="config.width" />
            </label>
            <label>
                Hauteur (px) :
                <input type="range" min="20" max="150" v-model="config.height" />
                <input type="number" min="20" max="150" v-model.number="config.height" />
            </label>
            <label>
                Rayon des bords (px) :
                <input type="range" min="0" max="50" v-model="config.borderRadius" />
                <input type="number" min="0" max="50" v-model.number="config.borderRadius" />
            </label>
        </div>
    </section>
</template>

<script setup>
defineProps(['config', 'isOpen'])
</script>
