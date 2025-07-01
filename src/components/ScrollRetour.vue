<template>
    <button v-if="showScrollTop" class="scrollTopBtn" @click="scrollToTop">
        <i class="fa-solid fa-arrow-up"></i>
    </button>


</template>
<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const showScrollTop = ref(false);

function handleScroll() {
    showScrollTop.value = window.scrollY > 100;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>


<style>
.scrollTopBtn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;
    z-index: 1000;
}

.scrollTopBtn:hover {
    opacity: 1;
}
</style>