<template>
    <div class="portfolio-container">
        <button class="nav-btn left" @click="prevSlide">‹</button>

        <div class="portfolio-wrapper" ref="sliderWrapper" @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag"
            @mouseleave="endDrag" @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag">
            <div class="portfolio-cards" ref="cardsContainer" :class="{ 'no-transition': noTransition }"
                :style="{ transform: `translateX(-${translateX}px)` }">
                <div class="portfolioCard" v-for="(item, index) in extendedPortfolio" :key="index"
                    :style="{ minWidth: cardWidth + 'px' }">
                    <h3>{{ item.title }}</h3>
                    <div class="imgContent">
                        <Punaise />
                        <img :src="item.img" :alt="item.altP" width="350px" />
                    </div>
                    <a class="btn" :href="item.adress" target="_blank" rel="noopener">Allez voir ... </a>
                </div>
            </div>
        </div>

        <button class="nav-btn right" @click="nextSlide">›</button>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
import portfolioData from '@/data/portfolio.json'
import Punaise from './Punaise.vue'

// Données de base
const portfolio = ref(portfolioData)
const visibleCards = ref(3)
const cardWidth = ref(350)
const currentIndex = ref(0)
const translateX = ref(0)
const noTransition = ref(false)
const sliderWrapper = ref(null)
const cardsContainer = ref(null)

// Portfolio étendu pour boucle infinie
const extendedPortfolio = computed(() => {
    if (portfolio.value.length === 0) return []
    const start = portfolio.value.slice(-visibleCards.value)
    const end = portfolio.value.slice(0, visibleCards.value)
    return [...start, ...portfolio.value, ...end]
})

// Mise à jour de la position (centrage)
function updateTranslateFromIndex(smooth = true) {
    nextTick(() => {
        const containerWidth = sliderWrapper.value.clientWidth
        const offsetIndex = currentIndex.value + visibleCards.value
        const targetTranslate = offsetIndex * cardWidth.value - (containerWidth - cardWidth.value) / 2

        noTransition.value = !smooth
        translateX.value = targetTranslate
    })
}

// Navigation suivante
function nextSlide() {
    currentIndex.value++
    updateTranslateFromIndex()

    if (currentIndex.value >= portfolio.value.length) {
        setTimeout(() => {
            noTransition.value = true
            currentIndex.value = 0
            updateTranslateFromIndex(false)
        }, 300)
    }
}

// Navigation précédente
function prevSlide() {
    currentIndex.value--
    updateTranslateFromIndex()

    if (currentIndex.value < 0) {
        setTimeout(() => {
            noTransition.value = true
            currentIndex.value = portfolio.value.length - 1
            updateTranslateFromIndex(false)
        }, 300)
    }
}

// Mise à jour du nombre de cartes visibles
function updateVisibleCards() {
    visibleCards.value = window.innerWidth < 600 ? 1 : 5
    updateTranslateFromIndex(false)
}

// Gestion du drag
let isDragging = false
let hasMoved = false
let startX = 0
let currentTranslate = 0

function getEventX(event) {
    return event.touches ? event.touches[0].clientX : event.clientX
}

function startDrag(event) {
    console.log('startDrag')
    isDragging = true
    hasMoved = false
    startX = getEventX(event)
    currentTranslate = translateX.value
    document.body.style.userSelect = 'none' // empêche sélection texte pendant drag
}

function onDrag(event) {
    if (!isDragging) return
    console.log('onDrag')
    const x = getEventX(event)
    const delta = startX - x

    if (Math.abs(delta) > 5) hasMoved = true

    translateX.value = currentTranslate + delta
}

function endDrag(event) {
    if (!isDragging) return
    console.log('endDrag')
    isDragging = false
    document.body.style.userSelect = '' // réactive sélection texte

    if (!hasMoved) return // simple clic, pas de drag

    event.preventDefault() // évite scroll/clic parasite

    const containerWidth = sliderWrapper.value.clientWidth
    const currentPos = translateX.value

    let closestIndex = 0
    let minDiff = Infinity
    const totalCards = portfolio.value.length

    for (let i = 0; i < totalCards; i++) {
        const centeredPos = (i + visibleCards.value) * cardWidth.value - (containerWidth - cardWidth.value) / 2
        const diff = Math.abs(centeredPos - currentPos)
        if (diff < minDiff) {
            minDiff = diff
            closestIndex = i
        }
    }

    currentIndex.value = closestIndex
    updateTranslateFromIndex()
}

function globalEndDrag(event) {
    if (isDragging) {
        endDrag(event)
    }
}

function globalOnDrag(event) {
    if (isDragging) {
        onDrag(event)
    }
}

// Montage
onMounted(() => {
    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)

    window.addEventListener('mouseup', globalEndDrag)
    window.addEventListener('touchend', globalEndDrag)
    window.addEventListener('touchcancel', globalEndDrag)

    window.addEventListener('mousemove', globalOnDrag)
    window.addEventListener('touchmove', globalOnDrag)

    nextTick(() => {
        updateTranslateFromIndex(false)
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateVisibleCards)

    window.removeEventListener('mouseup', globalEndDrag)
    window.removeEventListener('touchend', globalEndDrag)
    window.removeEventListener('touchcancel', globalEndDrag)

    window.removeEventListener('mousemove', globalOnDrag)
    window.removeEventListener('touchmove', globalOnDrag)
})
</script>
