<template>
    <h1>Générateur de bouton avancé</h1>
    <div class="crea-button-container">
        <div class="creacontainer">

            <!-- Dimensions -->
            <section class="section">
                <header @click="toggleSection('dimensions')" class="section-header">
                    <h2>Dimensions</h2>
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
                        <button @click="removeShadow(index)" class="btn-remove-shadow">Supprimer</button>
                        <hr />
                    </div>

                    <button @click="addShadow" class="btn-add-shadow">+ Ajouter une ombre</button>
                </div>
            </section>

            <!-- Hover Settings -->
            <section class="section">
                <header @click="toggleSection('hover')" class="section-header">
                    <h2>Hover</h2>
                    <span>{{ isOpen.hover ? '▼' : '▶' }}</span>
                </header>
                <div v-if="isOpen.hover" class="section-content">

                    <!-- Texte Hover -->
                    <fieldset>
                        <legend>Texte (hover)</legend>
                        <label>
                            Couleur du texte :
                            <input type="color" v-model="hoverConfig.textColor" />
                        </label>
                        <label>
                            Taille du texte (px) :
                            <input type="range" min="10" max="40" v-model="hoverConfig.fontSize" />
                            <input type="number" min="10" max="40" v-model.number="hoverConfig.fontSize" />
                        </label>
                        <label>
                            Gras :
                            <input type="checkbox" v-model="hoverConfig.bold" />
                        </label>
                        <label>
                            Police :
                            <select v-model="hoverConfig.fontFamily">
                                <option value="Arial">Arial</option>
                                <option value="Verdana">Verdana</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Courier New">Courier New</option>
                                <option value="Times New Roman">Times New Roman</option>
                            </select>
                        </label>
                        <!-- Ombre texte simple hover -->
                        <fieldset class="text-shadow-fieldset">
                            <legend>Ombre du texte (hover)</legend>
                            <label>
                                Décalage X (px) :
                                <input type="number" v-model.number="hoverConfig.textShadow.hOffset" />
                            </label>
                            <label>
                                Décalage Y (px) :
                                <input type="number" v-model.number="hoverConfig.textShadow.vOffset" />
                            </label>
                            <label>
                                Flou (px) :
                                <input type="number" v-model.number="hoverConfig.textShadow.blur" />
                            </label>
                            <label>
                                Couleur :
                                <input type="color" v-model="hoverConfig.textShadow.color" />
                            </label>
                        </fieldset>
                    </fieldset>

                    <!-- Apparence Hover -->
                    <fieldset>
                        <legend>Apparence (hover)</legend>
                        <label>
                            Couleur de fond :
                            <input type="color" v-model="hoverConfig.backgroundColor" />
                        </label>
                        <label>
                            Bordure (CSS) :
                            <input type="text" v-model="hoverConfig.border" placeholder="ex: 2px solid #000" />
                        </label>
                    </fieldset>

                    <!-- Ombres (box-shadow) dynamiques hover -->
                    <section class="section">
                        <h3>Ombres (box-shadow) hover</h3>
                        <div class="section-content shadows-list">
                            <div v-for="(shadow, index) in hoverConfig.boxShadows" :key="index" class="shadow-item">
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
                                <button @click="removeShadowHover(index)" class="btn-remove-shadow">Supprimer</button>
                                <hr />
                            </div>

                            <button @click="addShadowHover" class="btn-add-shadow">+ Ajouter une ombre</button>
                        </div>
                    </section>

                </div>
            </section>

        </div>

        <!-- Aperçu -->
        <div class="preview">
            <button :style="buttonStyle" class="custom-button">{{ config.text }}</button>
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
import { reactive, computed } from 'vue'

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
            color: '#000000',
            opacity: 0.2,
            inset: false,
        },
    ],
})

const hoverConfig = reactive({
    textColor: '#ffffff',
    fontSize: 16,
    fontFamily: 'Arial',
    bold: false,

    backgroundColor: '#2980b9',
    border: 'none',

    textShadow: {
        hOffset: 0,
        vOffset: 0,
        blur: 0,
        color: '#000000',
    },

    boxShadows: [
        {
            hOffset: 0,
            vOffset: 0,
            blur: 8,
            spread: 0,
            color: '#000000',
            opacity: 0.3,
            inset: false,
        },
    ],
})

const isOpen = reactive({
    dimensions: true,
    texte: true,
    apparence: true,
    ombres: false,
    hover: false,
})

function toggleSection(name) {
    isOpen[name] = !isOpen[name]
}

function rgbaWithOpacity(color, opacity) {
    if (!color) return color
    if (color.startsWith('rgba')) {
        return color.replace(/rgba?\(([^)]+)\)/, (match, content) => {
            const parts = content.split(',')
            return `rgba(${parts[0]},${parts[1]},${parts[2]},${opacity})`
        })
    }
    if (color.startsWith('rgb')) {
        return color.replace(/rgb\(([^)]+)\)/, (match, content) => {
            return `rgba(${content},${opacity})`
        })
    }
    const hex = color.replace('#', '')
    if (hex.length !== 6) return color
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return `rgba(${r},${g},${b},${opacity})`
}

const boxShadowToString = (shadow) => {
    const colorWithOpacity = rgbaWithOpacity(shadow.color, shadow.opacity ?? 1)
    return `${shadow.inset ? 'inset ' : ''}${shadow.hOffset}px ${shadow.vOffset}px ${shadow.blur}px ${shadow.spread}px ${colorWithOpacity}`
}

const buttonStyle = computed(() => ({
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
}))

const htmlCode = computed(() => `<button class="custom-button">${config.text}</button>`)

const cssCode = computed(() => {
    const shadowsCss = config.boxShadows.length
        ? config.boxShadows.map(boxShadowToString).join(', ')
        : 'none'

    const textShadowCss = `${config.textShadow.hOffset}px ${config.textShadow.vOffset}px ${config.textShadow.blur}px ${config.textShadow.color}`

    const hoverShadowsCss = hoverConfig.boxShadows.length
        ? hoverConfig.boxShadows.map(boxShadowToString).join(', ')
        : 'none'

    const hoverTextShadowCss = `${hoverConfig.textShadow.hOffset}px ${hoverConfig.textShadow.vOffset}px ${hoverConfig.textShadow.blur}px ${hoverConfig.textShadow.color}`

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
  transition: all 0.3s ease;
}
.custom-button:hover {
  background-color: ${hoverConfig.backgroundColor};
  color: ${hoverConfig.textColor};
  border: ${hoverConfig.border};
  font-size: ${hoverConfig.fontSize}px;
  font-family: ${hoverConfig.fontFamily};
  font-weight: ${hoverConfig.bold ? 'bold' : 'normal'};
  text-shadow: ${hoverTextShadowCss};
  box-shadow: ${hoverShadowsCss};
}
`.trim()
})

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('Copié dans le presse-papiers !'))
        .catch(() => alert('Erreur lors de la copie'))
}

function addShadow() {
    config.boxShadows.push({
        hOffset: 0,
        vOffset: 0,
        blur: 0,
        spread: 0,
        color: '#000000',
        opacity: 1,
        inset: false,
    })
}

function removeShadow(index) {
    config.boxShadows.splice(index, 1)
}

function addShadowHover() {
    hoverConfig.boxShadows.push({
        hOffset: 0,
        vOffset: 0,
        blur: 0,
        spread: 0,
        color: '#000000',
        opacity: 1,
        inset: false,
    })
}

function removeShadowHover(index) {
    hoverConfig.boxShadows.splice(index, 1)
}
</script>
