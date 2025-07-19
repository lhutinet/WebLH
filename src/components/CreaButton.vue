<template>
    <h1>Générateur de bouton avancé</h1>
    <div class="crea-button-container">

        <!-- Dimensions -->
        <section class="section">
            <header @click="toggleSection('dimensions')" class="section-header">
                <h3>Dimensions</h3>
                <span>{{ isOpen.dimensions ? '▼' : '▶' }}</span>
            </header>
            <div v-if="isOpen.dimensions" class="section-content">
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

        <!-- Texte -->
        <section class="section">
            <header @click="toggleSection('texte')" class="section-header">
                <h2>Texte</h2>
                <span>{{ isOpen.texte ? '▼' : '▶' }}</span>
            </header>
            <div v-if="isOpen.texte" class="section-content">
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

                <!-- Ombre texte simple -->
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

        <!-- Apparence -->
        <section class="section">
            <header @click="toggleSection('apparence')" class="section-header">
                <h2>Apparence</h2>
                <span>{{ isOpen.apparence ? '▼' : '▶' }}</span>
            </header>
            <div v-if="isOpen.apparence" class="section-content">
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

        <!-- Ombres (box-shadow) dynamiques -->
        <section class="section">
            <header @click="toggleSection('ombres')" class="section-header">
                <h2>Ombres (box-shadow)</h2>
                <span>{{ isOpen.ombres ? '▼' : '▶' }}</span>
            </header>
            <div v-if="isOpen.ombres" class="section-content shadows-list">
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
                        Couleur :
                        <input type="color" v-model="shadow.color" />
                    </label>
                    <label>
                        Inset :
                        <input type="checkbox" v-model="shadow.inset" />
                    </label>
                    <button @click="removeShadow(index)" class="btn-remove-shadow">Supprimer</button>
                    <hr />
                </div>

                <button @click="addShadow" class="btn-add-shadow">+ Ajouter une ombre</button>
            </div>
        </section>

        <!-- Aperçu -->
        <div class="preview">
            <button :style="buttonStyle">{{ config.text }}</button>
        </div>

        <!-- Codes HTML & CSS -->
        <div class="copiContainer">
            <div class="code-section">
                <div class="code-block">
                    <h3>HTML</h3>
                    <pre>{{ htmlCode }}</pre>
                    <button @click="copyToClipboard(htmlCode)">Copier HTML</button>
                </div>

                <div class="code-block">
                    <h3>CSS</h3>
                    <pre>{{ cssCode }}</pre>
                    <button @click="copyToClipboard(cssCode)">Copier CSS</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const config = reactive({
    width: 150,
    height: 50,
    borderRadius: 5,

    text: 'Aperçu',
    fontSize: 16,
    fontFamily: 'Arial',
    bold: false,

    backgroundColor: '#3498db',
    textColor: '#ffffff',
    border: 'none',

    textShadow: {
        hOffset: 0,
        vOffset: 0,
        blur: 0,
        color: '#000000',
    },

    boxShadows: [
        {
            hOffset: 2,
            vOffset: 2,
            blur: 6,
            spread: 0,
            color: 'rgba(0,0,0,0.2)',
            inset: false,
        },
    ],
})

const isOpen = reactive({
    dimensions: true,
    texte: true,
    apparence: true,
    ombres: false,
})

function toggleSection(name) {
    isOpen[name] = !isOpen[name]
}

const boxShadowToString = (shadow) => {
    return `${shadow.inset ? 'inset ' : ''}${shadow.hOffset}px ${shadow.vOffset}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
}

const buttonStyle = computed(() => {
    return {
        width: config.width + 'px',
        height: config.height + 'px',
        borderRadius: config.borderRadius + 'px',

        backgroundColor: config.backgroundColor,
        color: config.textColor,
        border: config.border,

        fontSize: config.fontSize + 'px',
        fontFamily: config.fontFamily,
        fontWeight: config.bold ? 'bold' : 'normal',

        textShadow: `${config.textShadow.hOffset}px ${config.textShadow.vOffset}px ${config.textShadow.blur}px ${config.textShadow.color}`,

        boxShadow: config.boxShadows.length
            ? config.boxShadows.map(boxShadowToString).join(', ')
            : 'none',
    }
})

const htmlCode = computed(() => `<button class="custom-button">${config.text}</button>`)

const cssCode = computed(() => {
    const shadowsCss = config.boxShadows.length
        ? config.boxShadows.map(boxShadowToString).join(', ')
        : 'none'

    const textShadowCss = `${config.textShadow.hOffset}px ${config.textShadow.vOffset}px ${config.textShadow.blur}px ${config.textShadow.color}`

    return `
.custom-button {
  width: ${config.width}px;
  height: ${config.height}px;
  border-radius: ${config.borderRadius}px;
  background-color: ${config.backgroundColor};
  color: ${config.textColor};
  border: ${config.border};
  font-size: ${config.fontSize}px;
  font-family: ${config.fontFamily};
  font-weight: ${config.bold ? 'bold' : 'normal'};
  text-shadow: ${textShadowCss};
  box-shadow: ${shadowsCss};
}
  `.trim()
})

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copié !')
    }).catch(() => {
        alert('Échec de la copie.')
    })
}

function addShadow() {
    config.boxShadows.push({
        hOffset: 0,
        vOffset: 0,
        blur: 0,
        spread: 0,
        color: '#000000',
        inset: false,
    })
}

function removeShadow(index) {
    config.boxShadows.splice(index, 1)
}
</script>

<style scoped lang="scss">
.crea-button-container {
    max-width: 600px;
    margin: auto;
    font-family: Arial, sans-serif;
}

.section {
    border: 1px solid #ddd;
    margin-bottom: 1rem;
    border-radius: 6px;
}

.section-header {
    cursor: pointer;
    background: #f5f5f5;
    padding: 0.5rem 1rem;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section-content {
    padding: 1rem;
}

label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
}

input[type='range'] {
    flex-grow: 1;
    max-width: 150px;
}

input[type='number'],
input[type='text'],
select,
input[type='color'] {
    width: 90px;
}

.preview {
    text-align: center;
    margin: 2rem 0;
}

button {
    cursor: pointer;
}

.copiContainer {
    border-top: 1px solid #ccc;
    padding-top: 1rem;
}

.code-section {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.code-block {
    flex: 1 1 280px;
    background: #1e1e1e;
    color: #ddd;
    padding: 1rem;
    border-radius: 6px;
    position: relative;
}

pre {
    white-space: pre-wrap;
    word-break: break-word;
    font-family: monospace;
    margin-bottom: 0.5rem;
    max-height: 200px;
    overflow-y: auto;
}

.btn-add-shadow {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
}

.btn-remove-shadow {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    margin-top: 0.25rem;
}

.text-shadow-fieldset {
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 4px;
}

.text-shadow-fieldset label {
    margin-bottom: 0.25rem;
    width: 100%;
}
</style>
