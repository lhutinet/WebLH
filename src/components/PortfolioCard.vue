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
        title: "Marie Laure Hutinet ",
        img: "/img/portfolio/marieLaure.jpg",
        altP: "MarieLaureHutinet.fr",
        adress: "https://marie-laure-hutinet.fr/",
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
        title: "christophe Mounier-Dharley",
        img: "/img/portfolio/christophe.jpg",
        altP: "moondarkproject.netlify.app",
        adress: "https://moondarkproject.netlify.app/",
        index: 4

    },
    {
        title: "Magasin Proxi ",
        img: "/img/portfolio/epicerie.jpg",
        altP: "epicerie.roussillon38/",
        adress: "https://epicerie.roussillon38.fr/",
        index: 5

    },
    {
        title: "Photo club Salasien",
        img: "/img/portfolio/photoclub.jpg",
        altP: "la photo",
        adress: "https://photoclubsalaise38.wixsite.com/site",
        index: 6

    }


])
</script>
