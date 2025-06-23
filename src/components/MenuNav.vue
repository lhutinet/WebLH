<template>
    <nav :class="{ hidden: hidden }">
        <ul class="menu">
            <li>
                <router-link to="/">
                    <img src="/logo-LH-ss-f.png" alt="logoWeblh" style="width: 40px;">
                </router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>

            <li>
                <router-link to="/apropos">À propos</router-link>
            </li>
            <li class="dropdown">
                <span class="dropdown-toggle">tech</span>
                <ul class="dropdown-content">
                    <li><router-link to="/AmHTML">Aide HTML</router-link></li>
                    <li><router-link to="/AmCss">Aide CSS</router-link></li>
                    <li><router-link to="/Amscss">Aide SCSS</router-link></li>
                    <li><router-link to="/Amjs">Aide JavaScript</router-link></li>
                    <li><router-link to="/Amvue">Aide Vue</router-link></li>
                    <li><router-link to="/Amreact">Aide React</router-link></li>
                    <li><router-link to="/Amgithub">Aide GitHub</router-link></li>
                </ul>
            </li>





        </ul>
        <slot />
    </nav>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    hidden: Boolean
})
</script>