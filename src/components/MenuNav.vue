<template>
    <nav :class="{ hidden: hidden }">
        <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
            <span :class="{ open: isOpen }"></span>
            <span :class="{ open: isOpen }"></span>
            <span :class="{ open: isOpen }"></span>
        </button>
        <ul :class="['menu', { open: isOpen }]">
            <li>
                <router-link to="/" @click="closeAll">
                    <img src="/logo-LH-ss-f.png" alt="logoWeblh" style="width: 40px;">
                </router-link>
            </li>
            <li>
                <router-link to="/contact" @click="closeAll">Contact</router-link>
            </li>
            <li>
                <router-link to="/apropos" @click="closeAll">À propos</router-link>
            </li>
            <li class="dropdown" @mouseenter="openDropdown" @mouseleave="closeDropdown">
                <span class="dropdown-toggle" @click.prevent.stop="toggleDropdown">Tech</span>
                <ul class="dropdown-content" :class="{ open: dropdownOpen }">
                    <li><router-link to="/AmHTML" @click="closeAll">Aide HTML</router-link></li>
                    <li><router-link to="/AmCss" @click="closeAll">Aide CSS</router-link></li>
                    <li><router-link to="/Amscss" @click="closeAll">Aide SCSS</router-link></li>
                    <li><router-link to="/Amjs" @click="closeAll">Aide JavaScript</router-link></li>
                    <li><router-link to="/Amvue" @click="closeAll">Aide Vue</router-link></li>
                    <li><router-link to="/Amreact" @click="closeAll">Aide React</router-link></li>
                    <li><router-link to="/Amgithub" @click="closeAll">Aide GitHub</router-link></li>
                    <li><router-link to="/Amform" @click="closeAll">Aide form </router-link></li>
                </ul>

            </li>

        </ul>
        <slot />

    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'


defineProps({
    hidden: Boolean
})

const isOpen = ref(false)
const dropdownOpen = ref(false)

function toggleMenu() {
    isOpen.value = !isOpen.value
    if (!isOpen.value) dropdownOpen.value = false
}

function toggleDropdown() {
    // toggle dropdown uniquement sur petits écrans
    if (window.innerWidth <= 768) {
        dropdownOpen.value = !dropdownOpen.value
    }
}

function openDropdown() {
    if (window.innerWidth > 768) {
        dropdownOpen.value = true
    }
}

function closeDropdown() {
    if (window.innerWidth > 768) {
        dropdownOpen.value = false
    }
}

// ferme le menu et dropdown au clic sur un lien
function closeAll() {
    isOpen.value = false
    dropdownOpen.value = false
}
</script>
