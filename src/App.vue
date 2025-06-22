<template>
    <div>
        <MenuNav :hidden="isNavHidden" />
        <router-view />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MenuNav from './components/MenuNav.vue'

const isNavHidden = ref(false)
let lastScrollY = window.scrollY

const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll vers le bas
        isNavHidden.value = true
    } else {
        // Scroll vers le haut
        isNavHidden.value = false
    }
    lastScrollY = currentScrollY
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
