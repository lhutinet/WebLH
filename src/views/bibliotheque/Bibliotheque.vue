<template>
    <h1>Bibliotheque</h1>
    <p>Clique sur un titre pour déplier la section, puis sur une image pour copier le code</p>

    <!-- ACCORDEON FOND D'ECRAN -->
    <div class="accordeon">
        <h3 @click="toggleFondEcran">
            Fond d'écran animé
            <span>{{ isFondEcranOpen ? '▲' : '▼' }}</span>
        </h3>
        <section v-show="isFondEcranOpen" class="fondEcranContent">
            <div v-for="src in fondEcranSources" :key="src" class="fEcontent" @click="() => copyHtmlFile(src)"
                style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
                <iframe :src="src" style="pointer-events: none;" frameborder="0" height="100%" width="100%"></iframe>
            </div>
        </section>
    </div>

    <!-- ACCORDEON BUTTON -->
    <div class="accordeon">
        <h3 @click="toggleButton">
            Button
            <span>{{ isButtonOpen ? '▲' : '▼' }}</span>
        </h3>
        <section v-show="isButtonOpen" class="buttonContent">
            <BtnOriginal />
            <BtnOriginal />
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BtnOriginal from '@/views/bibliotheque/button/BtnOriginal.vue';

const isFondEcranOpen = ref(false);
const isButtonOpen = ref(false);

const toggleFondEcran = () => {
    isFondEcranOpen.value = !isFondEcranOpen.value;
};

const toggleButton = () => {
    isButtonOpen.value = !isButtonOpen.value;
};

const fondEcranSources = [
    '/bibliotheque/FondEcran/carreFlottant.html',
    '/bibliotheque/FondEcran/cercle-pulsant.html',
    '/bibliotheque/FondEcran/degrade-couleur.html',
    '/bibliotheque/FondEcran/etoiles-scintillantes.html',
    '/bibliotheque/FondEcran/nuages.html',
    '/bibliotheque/FondEcran/particules.html',
    '/bibliotheque/FondEcran/particulesMvt.html',
    '/bibliotheque/FondEcran/pluieCaractere.html',
    '/bibliotheque/FondEcran/pointConnecter.html',
    '/bibliotheque/FondEcran/spiraleTournante.html',
    '/bibliotheque/FondEcran/spirographe.html',
    '/bibliotheque/FondEcran/vagues-fluides.html',
    '/bibliotheque/FondEcran/trait.html'
];

const copyHtmlFile = async (filePath) => {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Erreur de chargement du fichier');
        const text = await response.text();

        await navigator.clipboard.writeText(text);
        alert('Contenu copié dans le presse-papiers !');
    } catch (e) {
        console.error(e);
        alert('Erreur : ' + e.message);
    }
};
</script>

<style scoped>
.accordeon h3 {
    cursor: pointer;
    background-color: #eee;
    padding: 10px;
    border: 1px solid #ccc;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.accordeon h3:hover {
    background-color: #ddd;
}

section {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    overflow: hidden;
    transition: all 0.3s ease;
}

iframe {
    z-index: 0;
}

.fEcontent {
    transition: ease-in-out 0.5s;
    margin: 2px;
}

.fEcontent:hover {
    z-index: 20;
    transform: scale(2);
}

.buttonContent {

    width: 150px;

    align-content: center;
    margin: 10px;
}
</style>
