<template>
    <h1>Générateur de bouton avancé</h1>
    <div class="crea-button-container">
        <div class="creaContainer">
            <!-- Onglets -->
            <div class="tabs">
                <button class="button btnDefaut" :class="{ active: activeTab === 'default' }"
                    @click="setTab('default')">Bouton</button>
                <button class="button btnHover" :class="{ active: activeTab === 'hover' }"
                    @click="setTab('hover')">Hover</button>
                <button class="button btnActive" :class="{ active: activeTab === 'active' }"
                    @click="setTab('active')">Actif</button>
            </div>

            <!-- Sections dynamiques selon l’onglet -->
            <div class="creaContent defaultContent" v-if="activeTab === 'default'">
                <DimensionSection :config="config" :isOpen="isOpen.dimensions" @toggle="toggleSection('dimensions')" />
                <TextSection :config="config" :isOpen="isOpen.texte" @toggle="toggleSection('texte')" />
                <AppearanceSection :config="config" :isOpen="isOpen.apparence" @toggle="toggleSection('apparence')" />
                <BoxShadowSection :config="config" :isOpen="isOpen.ombres" @toggle="toggleSection('ombres')"
                    @add="addShadow(config)" @remove="removeShadow(config)" />
            </div>

            <div class="creaContent hoverContent" v-if="activeTab === 'hover'">
                <section class="section">
                    <header @click="toggleSection('modif')">
                        <h2>Effet Hover (Transform) <span>{{ isOpen.modif ? '▼' : '▶' }}</span></h2>
                    </header>
                    <div v-if="isOpen.modif" class="section-content">
                        Scale :
                        <input type="range" min="0.5" max="1.5" step="0.01" v-model="hoverConfig.transformScale" />
                        <input type="number" min="0.5" max="1.5" step="0.01"
                            v-model.number="hoverConfig.transformScale" />
                        <label>Translate X : <input type="number" v-model.number="hoverConfig.translateX" /></label>
                        <label>Translate Y : <input type="number" v-model.number="hoverConfig.translateY" /></label>
                    </div>
                </section>
                <TextSection :config="hoverConfig" :isOpen="isOpen.texte" @toggle="toggleSection('texte')" />
                <AppearanceSection :config="hoverConfig" :isOpen="isOpen.apparence"
                    @toggle="toggleSection('apparence')" />
                <BoxShadowSection :config="hoverConfig" :isOpen="isOpen.ombres" @toggle="toggleSection('ombres')"
                    @add="addShadow(hoverConfig)" @remove="removeShadow(hoverConfig)" />
            </div>

            <div class="creaContent activeContent" v-if="activeTab === 'active'">
                <section class="section">
                    <header @click="toggleSection('modif')">
                        <h2>Effet Active (Transform) <span>{{ isOpen.modif ? '▼' : '▶' }}</span></h2>
                    </header>
                    <div v-if="isOpen.modif" class="section-content">
                        Scale :
                        <input type="range" min="0.5" max="1.5" step="0.01" v-model="activeConfig.transformScale" />
                        <input type="number" min="0.5" max="1.5" step="0.01"
                            v-model.number="activeConfig.transformScale" />
                        <label>Translate X : <input type="number" v-model.number="activeConfig.translateX" /></label>
                        <label>Translate Y : <input type="number" v-model.number="activeConfig.translateY" /></label>
                    </div>
                </section>
                <TextSection :config="activeConfig" :isOpen="isOpen.texte" @toggle="toggleSection('texte')" />
                <AppearanceSection :config="activeConfig" :isOpen="isOpen.apparence"
                    @toggle="toggleSection('apparence')" />
                <BoxShadowSection :config="activeConfig" :isOpen="isOpen.ombres" @toggle="toggleSection('ombres')"
                    @add="addShadow(activeConfig)" @remove="removeShadow(activeConfig)" />
            </div>
        </div>

        <!-- Aperçu -->
        <section class="visuContent">
            <div class="apercuContent">
                <div class="preview">
                    <button :style="buttonStyle">{{ config.text }}</button>
                </div>
                <button class="reset-button" @click="resetConfig">
                    <ion-icon name="sync-outline"></ion-icon>Réinitialiser
                </button>
            </div>

            <!-- Export HTML / CSS -->
            <div class="copiContainer">
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
        </section>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import DimensionSection from './CreaButtonComponents/DimensionSection.vue'
import TextSection from './CreaButtonComponents/TextSection.vue'
import AppearanceSection from './CreaButtonComponents/AppearanceSection.vue'
import BoxShadowSection from './CreaButtonComponents/BoxShadowSection.vue'

const activeTab = ref('default')

const config = reactive({
    width: 150,
    height: 50,
    borderRadius: 0,
    text: 'Aperçu',
    fontSize: 16,
    fontFamily: 'Arial',
    bold: false,
    backgroundColor: '#3498db',
    textColor: '#ffffff',
    border: 'none',
    textShadow: { hOffset: 0, vOffset: 0, blur: 0, color: '#000000' },
    boxShadows: [
        { hOffset: 2, vOffset: 2, blur: 6, spread: 0, color: '#000000', opacity: 0.2, inset: false }
    ]
})

const hoverConfig = reactive({
    backgroundColor: '#3498db',
    textColor: '#ffffff',
    border: 'none',
    fontSize: 16,
    fontFamily: 'Arial',
    bold: false,
    textShadow: { hOffset: 0, vOffset: 0, blur: 0, color: '#000000' },
    boxShadows: [
        { hOffset: 2, vOffset: 2, blur: 6, spread: 0, color: '#000000', opacity: 0.2, inset: false }
    ],
    transformScale: 1,
    translateX: 0,
    translateY: 0,
})

const activeConfig = reactive({
    backgroundColor: '#3498db',
    textColor: '#ffffff',
    border: 'none',
    fontSize: 16,
    fontFamily: 'Arial',
    bold: false,
    textShadow: { hOffset: 0, vOffset: 0, blur: 0, color: '#000000' },
    boxShadows: [
        { hOffset: 2, vOffset: 2, blur: 6, spread: 0, color: '#000000', opacity: 0.2, inset: false }
    ],
    transformScale: 1,
    translateX: 0,
    translateY: 0,
})

const isOpen = reactive({
    dimensions: true,
    texte: true,
    apparence: true,
    ombres: true,
    modif: true,
})

function toggleSection(name) {
    isOpen[name] = !isOpen[name]
}

function addShadow(targetConfig) {
    targetConfig.boxShadows.push({
        hOffset: 0, vOffset: 0, blur: 0, spread: 0,
        color: '#000000', opacity: 1, inset: false
    })
}

function removeShadow(targetConfig, index) {
    targetConfig.boxShadows.splice(index, 1)
}

function rgbaWithOpacity(color, opacity) {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return `rgba(${r},${g},${b},${opacity})`
}

function boxShadowToString(shadow) {
    const rgba = rgbaWithOpacity(shadow.color, shadow.opacity ?? 1)
    return `${shadow.inset ? 'inset ' : ''}${shadow.hOffset}px ${shadow.vOffset}px ${shadow.blur}px ${shadow.spread}px ${rgba}`
}

const buttonStyle = computed(() => {
    const source = activeTab.value === 'hover' ? hoverConfig : activeTab.value === 'active' ? activeConfig : config
    return {
        width: `${config.width}px`,
        height: `${config.height}px`,
        borderRadius: `${config.borderRadius}px`,
        backgroundColor: source.backgroundColor,
        color: source.textColor,
        border: source.border,
        fontSize: `${source.fontSize}px`,
        fontFamily: source.fontFamily,
        fontWeight: source.bold ? 'bold' : 'normal',
        textShadow: `${source.textShadow.hOffset}px ${source.textShadow.vOffset}px ${source.textShadow.blur}px ${source.textShadow.color}`,
        boxShadow: source.boxShadows.map(boxShadowToString).join(', '),
        transition: '0.3s',
        transform: `scale(${source.transformScale || 1}) translate(${source.translateX || 0}px, ${source.translateY || 0}px)`
    }
})

const htmlCode = computed(() => `<button class="custom-button">${config.text}</button>`)

const cssCode = computed(() => {
    const hoverDiffs = getDiffCSS(config, hoverConfig).join('\n  ')
    const activeDiffs = getDiffCSS(config, activeConfig).join('\n  ')

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
  text-shadow: ${config.textShadow.hOffset}px ${config.textShadow.vOffset}px ${config.textShadow.blur}px ${config.textShadow.color};
  box-shadow: ${config.boxShadows.map(boxShadowToString).join(', ')};
  transition: all 0.3s ease;
  cursor: pointer;
}

.custom-button:hover {
  ${hoverDiffs}
}

.custom-button:active {
  ${activeDiffs}
}`.trim()
})

function resetConfig() {
    Object.assign(config, {
        width: 150,
        height: 50,
        borderRadius: 0,
        text: 'Aperçu',
        fontSize: 16,
        fontFamily: 'Arial',
        bold: false,
        backgroundColor: '#3498db',
        textColor: '#ffffff',
        border: 'none',
        textShadow: { hOffset: 0, vOffset: 0, blur: 0, color: '#000000' },
        boxShadows: [
            { hOffset: 2, vOffset: 2, blur: 6, spread: 0, color: '#000000', opacity: 0.2, inset: false }
        ]
    })

    Object.assign(hoverConfig, {
        backgroundColor: '#3498db',
        textColor: '#ffffff',
        border: 'none',
        fontSize: 16,
        fontFamily: 'Arial',
        bold: false,
        textShadow: { hOffset: 0, vOffset: 0, blur: 0, color: '#000000' },
        boxShadows: [
            { hOffset: 2, vOffset: 2, blur: 6, spread: 0, color: '#000000', opacity: 0.2, inset: false }
        ],
        transformScale: 1,
        translateX: 0,
        translateY: 0,
    })

    Object.assign(activeConfig, {
        backgroundColor: '#3498db',
        textColor: '#ffffff',
        border: 'none',
        fontSize: 16,
        fontFamily: 'Arial',
        bold: false,
        textShadow: { hOffset: 0, vOffset: 0, blur: 0, color: '#000000' },
        boxShadows: [
            { hOffset: 2, vOffset: 2, blur: 6, spread: 0, color: '#000000', opacity: 0.2, inset: false }
        ],
        transformScale: 1,
        translateX: 0,
        translateY: 0,
    })
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('Copié dans le presse-papiers !'))
        .catch(() => alert('Erreur lors de la copie'))
}

function setTab(tabName) {
    activeTab.value = tabName
}

function getDiffCSS(base, variant) {
    const diffs = []
    if (variant.backgroundColor !== base.backgroundColor) diffs.push(`background-color: ${variant.backgroundColor};`)
    if (variant.textColor !== base.textColor) diffs.push(`color: ${variant.textColor};`)
    if (variant.border !== base.border) diffs.push(`border: ${variant.border};`)
    if (variant.fontSize !== base.fontSize) diffs.push(`font-size: ${variant.fontSize}px;`)
    if (variant.fontFamily !== base.fontFamily) diffs.push(`font-family: ${variant.fontFamily};`)
    if (variant.bold !== base.bold) diffs.push(`font-weight: ${variant.bold ? 'bold' : 'normal'};`)
    if (variant.transformScale !== 1 || variant.translateX !== 0 || variant.translateY !== 0)
        diffs.push(`transform: scale(${variant.transformScale || 1}) translate(${variant.translateX || 0}px, ${variant.translateY || 0}px);`)

    const t1 = base.textShadow
    const t2 = variant.textShadow
    if (t1.hOffset !== t2.hOffset || t1.vOffset !== t2.vOffset || t1.blur !== t2.blur || t1.color !== t2.color)
        diffs.push(`text-shadow: ${t2.hOffset}px ${t2.vOffset}px ${t2.blur}px ${t2.color};`)

    const b1 = base.boxShadows.map(boxShadowToString).join(', ')
    const b2 = variant.boxShadows.map(boxShadowToString).join(', ')
    if (b1 !== b2) diffs.push(`box-shadow: ${b2};`)

    return diffs
}
</script>
