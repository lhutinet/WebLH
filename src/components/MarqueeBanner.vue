<template>
    <div class="marquee" v-if="isVisible" :style="{
        backgroundColor: bgColor,
        height: height + 'px'

    }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="hideBanner">
        <div class="track"
            :style="[trackStyle, { color: textColor, animationPlayState: isPaused ? 'paused' : 'running' }]">
            <span>{{ repeatedText }}</span>
            <span>{{ repeatedText }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps([
    'text',
    'speed',
    'bgColor',
    'textColor',
    'height',
    'pauseOnHover'
])

// Valeurs par défaut
const text = props.text ?? 'Page en construction – Page en construction – Page en construction –'
const speed = props.speed ?? 40
const bgColor = props.bgColor ?? 'red'
const textColor = props.textColor ?? 'white'
const height = props.height ?? 50
const pauseOnHover = props.pauseOnHover ?? false

// Gestion pause au survol
const isPaused = ref(false)

const handleMouseEnter = () => {
    if (pauseOnHover) isPaused.value = true
}
const handleMouseLeave = () => {
    if (pauseOnHover) isPaused.value = false
}
const isVisible = ref(true)

const hideBanner = () => {
    isVisible.value = false
}
// Texte répété
const repeatedText = computed(() => {
    return Array(3).fill(text).join(' ')
})

// Style dynamique
const trackStyle = computed(() => ({
    animationDuration: `${speed}s`
}))
</script>

<style scoped>
.marquee {
    position: absolute;
    left: 0;
    top: 10%;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
}

.track {
    display: flex;
    white-space: nowrap;
    animation-name: marquee;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.track span {
    font-size: 2rem;
    padding-right: 2rem;
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>



<!--
================================================
📌 USAGE

<MarqueeBanner
  text="Attention – Attention –"
  :speed="20"
  bgColor="orange"
  textColor="black"
  :height="60"
  :pauseOnHover="true"
/>

✅ PROPS
- text : String - Texte à afficher
- speed : Number - Vitesse de défilement (s)
- bgColor : String - Couleur de fond
- textColor : String - Couleur du texte
- height : Number - Hauteur du bandeau (px)
- pauseOnHover : Boolean - Pause au survol

================================================
-->