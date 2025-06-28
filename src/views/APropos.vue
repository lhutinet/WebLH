<template>


    <iframe src="https://mellifluous-kangaroo-e5b604.netlify.app/" frameborder="0"></iframe>
    <MarqueeBanner text="Bienvenue sur notre site –" :speed="20" bgColor="red" textColor="white" :height="60"
        :pauseOnHover="true" />
</template>
<script setup>
import MarqueeBanner from '@/components/MarqueeBanner.vue';




</script>
<style scoped>
iframe {
    width: 100%;
    min-height: 100vh;
}
</style>
