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
const cardWidth = ref(350) // largeur fixe des cartes
const sliderWrapper = ref(null)

let isDragging = false
let startX = 0
let currentTranslate = 0

function maxIndex() {
    return portfolio.value.length - visibleCards.value
}

function clampIndex() {
    if (currentIndex.value > maxIndex()) currentIndex.value = maxIndex()
    if (currentIndex.value < 0) currentIndex.value = 0
}

function updateTranslateFromIndex() {
    const containerWidth = sliderWrapper.value.clientWidth
    let targetTranslate = currentIndex.value * cardWidth.value - (containerWidth - cardWidth.value) / 2
    if (targetTranslate < 0) targetTranslate = 0
    if (targetTranslate > maxIndex() * cardWidth.value) targetTranslate = maxIndex() * cardWidth.value
    translateX.value = targetTranslate
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

    const maxTranslate = maxIndex() * cardWidth.value
    if (nextTranslate < 0) nextTranslate = 0
    if (nextTranslate > maxTranslate) nextTranslate = maxTranslate

    translateX.value = nextTranslate
}

function endDrag(event) {
    if (!isDragging) return
    isDragging = false
    const x = getEventX(event)
    const delta = startX - x

    const containerWidth = sliderWrapper.value.clientWidth
    const totalCards = portfolio.value.length
    let currentPos = translateX.value

    // Trouver l'index dont la position centrée est la plus proche
    let closestIndex = 0
    let minDiff = Infinity
    for (let i = 0; i < totalCards; i++) {
        let centeredPos = i * cardWidth.value - (containerWidth - cardWidth.value) / 2
        if (centeredPos < 0) centeredPos = 0
        if (centeredPos > maxIndex() * cardWidth.value) centeredPos = maxIndex() * cardWidth.value

        const diff = Math.abs(centeredPos - currentPos)
        if (diff < minDiff) {
            minDiff = diff
            closestIndex = i
        }
    }

    if (closestIndex > maxIndex()) closestIndex = maxIndex()
    currentIndex.value = closestIndex

    // Snap à la position centrée
    translateX.value = currentIndex.value * cardWidth.value - (containerWidth - cardWidth.value) / 2
    if (translateX.value < 0) translateX.value = 0
    if (translateX.value > maxIndex() * cardWidth.value) translateX.value = maxIndex() * cardWidth.value
}

onMounted(() => {
    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateVisibleCards)
})
</script>
