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
let lastScrollY = 0

const handleScroll = () => {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        isNavHidden.value = true
    } else {
        isNavHidden.value = false
    }
    lastScrollY = currentScrollY
}

onMounted(() => {
    lastScrollY = window.scrollY || 0
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
