<template>
    <div class="portfolio-container">
        <button class="nav-btn left" @click="prevSlide">‹</button>

        <div class="portfolio-wrapper" ref="sliderWrapper" @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag"
            @mouseleave="endDrag" @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag">
            <div class="portfolio-cards" :style="{ transform: `translateX(-${translateX}px)` }">
                <div class="portfolioCard" v-for="(item, index) in portfolio" :key="index"
                    :style="{ minWidth: cardWidth + 'px' }">
                    <h3>{{ item.title }}</h3>
                    <div class="imgContent">
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import portfolioData from '@/data/portfolio.json'

const portfolio = ref(portfolioData)

const translateX = ref(0)
const currentIndex = ref(0)
const visibleCards = ref(3)
const cardWidth = ref(350) // largeur fixe des cartes (tu peux adapter)

// refs pour la gestion du drag
const sliderWrapper = ref(null)
let isDragging = false
let startX = 0
let currentTranslate = 0

// Calculer max index en fonction du nombre de cartes et visibles
function maxIndex() {
    return portfolio.value.length - visibleCards.value
}

function clampIndex() {
    if (currentIndex.value > maxIndex()) currentIndex.value = maxIndex()
    if (currentIndex.value < 0) currentIndex.value = 0
}

function updateTranslateFromIndex() {
    translateX.value = currentIndex.value * cardWidth.value
}

function nextSlide() {
    currentIndex.value++
    if (currentIndex.value > maxIndex()) {
        currentIndex.value = 0
    }
    updateTranslateFromIndex()
}

function prevSlide() {
    currentIndex.value--
    if (currentIndex.value < 0) {
        currentIndex.value = maxIndex()
    }
    updateTranslateFromIndex()
}

function updateVisibleCards() {
    if (window.innerWidth < 600) {
        visibleCards.value = 1
        cardWidth.value = 320
    } else {
        visibleCards.value = 3
        cardWidth.value = 350
    }
    clampIndex()
    updateTranslateFromIndex()
}

// Drag / swipe handlers

function getEventX(event) {
    if (event.touches) return event.touches[0].clientX
    return event.clientX
}

function startDrag(event) {
    isDragging = true
    startX = getEventX(event)
    currentTranslate = translateX.value
    event.preventDefault()
}

function onDrag(event) {
    if (!isDragging) return
    const x = getEventX(event)
    const delta = startX - x
    let nextTranslate = currentTranslate + delta

    // limiter le scroll aux extrêmes avec un peu de rebond possible
    const maxTranslate = maxIndex() * cardWidth.value
    if (nextTranslate < 0) nextTranslate = 0
    if (nextTranslate > maxTranslate) nextTranslate = maxTranslate

    translateX.value = nextTranslate
}

function endDrag(event) {
    if (!isDragging) return
    isDragging = false
    // Déterminer si on a glissé suffisamment pour changer de slide
    const x = getEventX(event)
    const delta = startX - x

    if (delta > cardWidth.value / 4) {
        // glissé vers la gauche => next
        nextSlide()
    } else if (delta < -cardWidth.value / 4) {
        // glissé vers la droite => prev
        prevSlide()
    } else {
        // revenir à la position initiale
        updateTranslateFromIndex()
    }
}

onMounted(() => {
    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateVisibleCards)
})
</script>
