<template>
    <div class="TarifCard" v-for="(item, id) in TarifList" :key="id">
        <div class="titre">
            <h3>{{ item.title }}</h3>
            <p>{{ item.presentation }}</p>
        </div>
        <div class="tarif">
            {{ item.tarif }}
        </div>
        <ul>
            <li>Design personnalisé</li>
            <li>Site responsive (mobile / tablette / ordinateur)</li>
            <li>Pages principales (ex : Accueil + 4 pages)</li>
            <li>Formulaire de contact</li>
            <li>SEO de base</li>
            <li v-if="item.formation !== ''">{{ item.formation }}</li>
            <li>Code propre, optimisé, évolutif)</li>
            <li>Assistance technique (3 mois)</li>

        </ul>
        <button>plus ...</button>
    </div>



</template>

<script setup>
import { ref } from 'vue'
const TarifList = ref([
    {
        id: 1,
        title: "Site sur-mesure (Code pur)",
        presentation: "Un site unique, entièrement développé selon vos besoins...",
        tarif: "900€",
        formation: "",
        liplus: ""
    },
    {
        id: 2,
        title: "Site wordpress",
        presentation: "Un site puissant et évolutif, facile à gérer au quotidien.",
        tarif: "600€",
        formation: "Formation à la prise en main WordPress",
        liplus: ""
    },
    {
        id: 3,
        title: "Site Wix",
        presentation: "une solution simple et rapide pour être présent en ligne.",
        tarif: "400€",
        formation: "Formation à la prise en main wix",
        liplus: ""
    },
])

</script>
