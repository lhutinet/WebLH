<template>

    <section class="accContainer">

        <div class="accContent">
            <video class="accBackground" autoplay muted loop playsinline>
                <source src="/banniere.mp4" type="video/mp4">
                Ton navigateur ne supporte pas les vidéos HTML5.
            </video>

            <h1 id="accTitre"><img src="/logo-LH-ss-f.png" alt="logo" width=100px;> Digital</h1>
            <h3 id="accText">Conception de sites internet</h3>
            <p>
                <a href="#prestations" style>prestations</a>
                <a href="#tarifs">tarifs</a>
                <a href="#portfolio">portfolio</a>
            </p>
        </div>
        <!-- <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" class="shape-fill">
            </path>
        </svg> -->
    </section>
    <!-- fin presentation ------------------ -->

    <section class="propositionContainer" id="prestations">
        <h2>Mes prestations</h2>

        <div class="propositionContent">
            <div class="propositionCard">
                <div class="propositionLogo"><img src="/logo.png" alt="logo graphique"></div>
                <h3>Création graphique sur mesure</h3>
                <p>Je conçois des visuels uniques et personnalisés : logos, flyers, affiches, brochures ou encore
                    chartes
                    graphiques complètes. Chaque projet est pensé pour refléter votre identité avec soin et créativité.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo"><img src="/internet.png" alt="logo graphique"></div>
                <h3>Sites web & boutiques en ligne</h3>
                <p>Je développe des sites web clairs, esthétiques et faciles à administrer — que ce soit pour présenter
                    une
                    activité, vendre en ligne ou simplement se démarquer sur le web..</p>
            </div>
            <div class="propositionCard">
                <div class="propositionLogo"><img src="/seo.png" alt="logo graphique"></div>
                <h3>Visibilité & référencement (SEO)</h3>
                <p>Je vous aide à mieux apparaître sur Google et les moteurs de recherche grâce à une optimisation
                    naturelle
                    de vos contenus et une structure technique bien pensée.
                </p>
            </div>
            <div class="propositionCard">
                <div class="propositionLogo"><img src="/qualitative-research.png" alt="logo graphique"></div>
                <h3>Réactivité & qualité</h3>
                <p>Une fois le projet lancé, je travaille rapidement tout en gardant une attention particulière à la
                    qualité. L’objectif : un rendu professionnel, dans les délais
                </p>
            </div>
            <div class="propositionCard">
                <div class="propositionLogo"><img src="/distance-mentoring.png" alt="logo graphique"></div>
                <h3>Travail à distance, en toute simplicité</h3>
                <p>La distance ne freine pas la collaboration : je m’appuie sur des outils efficaces pour des échanges
                    fluides, même à distance.
                </p>



            </div>


        </div>


    </section>
    <!-- fin proposition content ----------- -->

    <section class="tarifContainer" id="tarifs">
        <h2>TARIFS</h2>
        <div class="tarifContent">
            <Tarifs />
        </div>

    </section>
    <!-- fin tarif ------------------------- -->

    <section class="portfolioContainer" id="portfolio">
        <h2>PORTFOLIO</h2>
        <div class="porfolioContent">
            <PortfolioCard />
        </div>
    </section>

</template>
<script setup>
import PortfolioCard from "@/components/PortfolioCard.vue";
import Tarifs from "@/components/Tarifs.vue";
</script>