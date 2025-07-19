<template>
    <section class="section">
        <header @click="$emit('toggle')">
            <h2>Ombres (box-shadow)</h2>
            <span>{{ isOpen ? '▼' : '▶' }}</span>
        </header>
        <div v-if="isOpen" class="section-content shadows-list">
            <div v-for="(shadow, index) in config.boxShadows" :key="index" class="shadow-item">
                <h4>Ombre #{{ index + 1 }}</h4>
                <label>
                    Décalage X (px) :
                    <input type="number" v-model.number="shadow.hOffset" />
                </label>
                <label>
                    Décalage Y (px) :
                    <input type="number" v-model.number="shadow.vOffset" />
                </label>
                <label>
                    Flou (px) :
                    <input type="number" v-model.number="shadow.blur" />
                </label>
                <label>
                    Étendue (spread, px) :
                    <input type="number" v-model.number="shadow.spread" />
                </label>
                <label>
                    Opacité (0 à 1) :
                    <input type="range" min="0" max="1" step="0.01" v-model.number="shadow.opacity" />
                    <input type="number" min="0" max="1" step="0.01" v-model.number="shadow.opacity" />
                </label>
                <label>
                    Couleur :
                    <input type="color" v-model="shadow.color" />
                </label>
                <label>
                    Inset :
                    <input type="checkbox" v-model="shadow.inset" />
                </label>
                <button @click="$emit('remove', index)" class="btn-remove-shadow">
                    Supprimer
                </button>
                <hr />
            </div>

            <button @click="$emit('add')" class="btn-add-shadow">
                + Ajouter une ombre
            </button>
        </div>
    </section>
</template>

<script setup>
defineProps({
    config: Object,
    isOpen: Boolean,
})
defineEmits(['add', 'remove', 'toggle'])
</script>
