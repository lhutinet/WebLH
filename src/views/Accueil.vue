<template>
    <section class="accContainer">
        <Banniere />
        <!-- <Ampoule /> -->
    </section>

    <section class="propositionContainer" id="prestations">
        <h2>Mes prestations</h2>
        <div class="propositionContent">
            <!-- <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/logo.png" alt="logo graphique" />
                </div>
                <h3>Création graphique sur mesure</h3>
                <p>
                    Je conçois des visuels uniques et personnalisés : logos, flyers,
                    affiches, brochures ou encore chartes graphiques complètes.
                </p>
            </div> -->

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/internet.png" alt="logo graphique" />
                </div>
                <h3>Sites web & boutiques en ligne</h3>
                <p>
                    Je développe des sites web clairs, esthétiques et faciles à
                    administrer.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/seo.png" alt="logo graphique" />
                </div>
                <h3>Visibilité & référencement (SEO)</h3>
                <p>
                    Je vous aide à mieux apparaître sur Google grâce à une optimisation naturelle.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/qualitative-research.png" alt="logo graphique" />
                </div>
                <h3>Réactivité & qualité</h3>
                <p>
                    Une fois le projet lancé, je travaille rapidement tout en gardant une
                    attention particulière à la qualité.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/distance-mentoring.png" alt="logo graphique" />
                </div>
                <h3>Travail à distance, en toute simplicité</h3>
                <p>
                    La distance ne freine pas la collaboration : je m’appuie sur des
                    outils efficaces pour des échanges fluides.
                </p>
            </div>
        </div>
    </section>

    <section class="tarifContainer" id="tarifs">
        <h2>TARIFS</h2>
        <div class="tarifContent">
            <Tarifs />
        </div>
    </section>

    <section class="portfolioContainer" id="portfolio">
        <h2>PORTFOLIO</h2>
        <div class="portfolioContent">
            <PortfolioCard />
        </div>
    </section>
    <ScrollRetour />

</template>

<!-- -------------------------------------------------------------
----------------------fin template----------------------------
----------------------------------------------------------- -->
<script setup>

import PortfolioCard from '@/components/PortfolioCard.vue';
import Tarifs from '@/components/Tarifs.vue';
import Banniere from '@/components/Banniere.vue';
import ScrollRetour from '@/components/ScrollRetour.vue'
import Ampoule from '@/components/Ampoule.vue';


</script>
