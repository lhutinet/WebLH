<template>
    <div class="portfolioCard" v-for="(item, index) in portfolio" :key="index">
        <h3>{{ item.title }}</h3>

        <a :href="item.adress" target="_blank" rel="noopener">
            <div class="imgContent">
                <img :src="item.img" :alt="item.altP" width="350px">
            </div>
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const portfolio = ref([
    {
        title: "Cottage saint emilie",
        img: "/img/portfolio/saintemilie.jpg",
        altP: "la photo",
        adress: "http://cottagesaintemilie.fr",
        index: 1

    },
    {
        title: "christophe",
        img: "/img/portfolio/christophe.jpg",
        altP: "la photo",
        adress: "https://www.artliquidephotographie.fr",
        index: 2

    },
    {
        title: "ArtLiquidePhotographie",
        img: "/img/portfolio/artliquide.jpg",
        altP: "artliquide",
        adress: "https://www.artliquidephotographie.fr",
        index: 3

    },
    {
        title: "marie",
        img: "/img/portfolio/saintemilie.jpg",
        altP: "portrait de marie",
        adress: "https://www.marie-portfolio.com",
        index: 4
    }
])
</script>
