le code que je vais te donner est trop long tu a du mal a le modifier , comme je suis en vue.js , il est peut etre
judicieux de le separer en plusieurs template , surtout que la phase suivant est de cree un onglet dans la partie
creation pour mettre un hover et un active , le css est deja cree reste pour cette parti il faut en cree de nouveauau
besoin



<template>
    <h1>Générateur de bouton avancé</h1>
    <div class="crea-button-container">
        <div class="creacontainer">


            <div class="tabs">
                <button :class="{ active: activeTab === 'default' }" @click="activeTab = 'default'">
                    Bouton
                </button>
                <button :class="{ active: activeTab === 'hover' }" @click="activeTab = 'hover'">
                    Hover
                </button>
            </div>
            <!-- -----------------------button------------------------- -->
            <!-- Dimensions -->
            <div v-if="activeTab === 'default'">
                <DimensionSection :config="config" :isOpen="isOpen.dimensions" @toggle="toggleSection('dimensions')" />
                <!-- Texte -->
                <TextSection :config="config" :isOpen="isOpen.texte" @toggle="toggleSection('texte')" />
                <!-- Apparence -->
                <AppearanceSection :config="config" :isOpen="isOpen.apparence" @toggle="toggleSection('apparence')" />
                <!-- Ombres (box-shadow) dynamiques -->
                <BoxShadowSection :config="config" :isOpen="isOpen.ombres" @toggle="toggleSection('ombres')"
                    @add="addShadow" @remove="removeShadow" />
            </div>

            <!-- -----------------------fin------hover---------------------- -->
            <!-- Dimensions -->

            <div v-else-if="activeTab === 'hover'">
                <DimensionSection :config="config" :isOpen="isOpen.dimensions" @toggle="toggleSection('dimensions')" />
                <!-- Texte -->
                <TextSection :config="config" :isOpen="isOpen.texte" @toggle="toggleSection('texte')" />
                <!-- Apparence -->
                <AppearanceSection :config="config" :isOpen="isOpen.apparence" @toggle="toggleSection('apparence')" />
                <!-- Ombres (box-shadow) dynamiques -->
                <BoxShadowSection :config="config" :isOpen="isOpen.ombres" @toggle="toggleSection('ombres')"
                    @add="addShadow" @remove="removeShadow" />

                <!-- -----------------------------hover---------------------- -->

            </div>


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
import { reactive, computed, ref } from 'vue'
import DimensionSection from './CreaButtonComponents/DimensionSection.vue'
import TextSection from './CreaButtonComponents/TextSection.vue'
import AppearanceSection from './CreaButtonComponents/AppearanceSection.vue'
import BoxShadowSection from './CreaButtonComponents/BoxShadowSection.vue'

const activeTab = ref('default')
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
