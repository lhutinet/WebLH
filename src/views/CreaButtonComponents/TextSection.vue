<template>
    <section class="section">
        <header @click="$emit('toggle')">
            <h2>Texte</h2>
            <span>{{ isOpen ? '▼' : '▶' }}</span>
        </header>
        <div v-if="isOpen" class="section-content">
            <label>
                Contenu du bouton :
                <input type="text" v-model="config.text" />
            </label>
            <label>
                Taille du texte (px) :
                <input type="range" min="10" max="40" v-model="config.fontSize" />
                <input type="number" min="10" max="40" v-model.number="config.fontSize" />
            </label>
            <label>
                Police :
                <select v-model="config.fontFamily">
                    <option value="Arial">Arial</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select>
            </label>
            <label>
                Gras :
                <input type="checkbox" v-model="config.bold" />
            </label>

            <!-- Ombre du texte -->
            <fieldset class="text-shadow-fieldset">
                <legend>Ombre du texte</legend>
                <label>
                    Décalage X (px) :
                    <input type="number" v-model.number="config.textShadow.hOffset" />
                </label>
                <label>
                    Décalage Y (px) :
                    <input type="number" v-model.number="config.textShadow.vOffset" />
                </label>
                <label>
                    Flou (px) :
                    <input type="number" v-model.number="config.textShadow.blur" />
                </label>
                <label>
                    Couleur :
                    <input type="color" v-model="config.textShadow.color" />
                </label>
            </fieldset>
        </div>
    </section>
</template>

<script setup>
defineProps({
    config: Object,
    isOpen: Boolean
})
</script>
