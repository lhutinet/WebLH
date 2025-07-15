<template>
    <h1>Bibliothèque</h1>
    <p>Clique sur un titre pour déplier la section, puis sur une image pour copier le code</p>

    <!-- ACCORDEON FOND D'ECRAN -->
    <div class="accordeon">
        <h3 @click="toggleSection('fondEcran')">
            Fond d'écran animé
            <span>{{ openSection === 'fondEcran' ? '▲' : '▼' }}</span>
        </h3>
        <section v-show="openSection === 'fondEcran'" class="fondEcranContent">
            <div v-for="src in fondEcranSources" :key="src" class="fEcontent" @click="() => copyHtmlFile(src)"
                style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
                <iframe :src="src" style="pointer-events: none;" frameborder="0" height="100%" width="100%"></iframe>
            </div>
        </section>
    </div>

    <!-- ACCORDEON BUTTON -->
    <div class="accordeon">
        <h3 @click="toggleSection('button')">
            Button
            <span>{{ openSection === 'button' ? '▲' : '▼' }}</span>
        </h3>
        <section v-show="openSection === 'button'" class="buttonContent">
            <BtnOriginal />
            <BtnRond />
            <BtnBarreIncurve />
            <BtnRondBleu />
            <!-- <Btn3d /> -->
        </section>
    </div>
    <!-- ACCORDEON MENU , -->
    <div class="accordeon">
        <h3 @click="toggleSection('menu')">
            Menu icon
            <span>{{ openSection === 'menu' ? '▲' : '▼' }}</span>
        </h3>
        <section v-show="openSection === 'menu'" class="menuContent">
            <MenuNav01 />

        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BtnOriginal from '@/views/bibliotheque/button/BtnOriginal.vue';
import BtnRond from './button/BtnRond.vue';
import BtnBarreIncurve from './button/BtnBarreIncurve.vue';
import BtnRondBleu from './button/BtnRondBleu.vue';
import Btn3d from './button/Btn3d.vue';
import MenuNav01 from './Menu/MenuNav01.vue';

// Stocke la section ouverte : 'fondEcran', 'button', etc.
const openSection = ref(null);

// Fonction générique pour ouvrir/fermer une section
const toggleSection = (sectionName) => {
    openSection.value = openSection.value === sectionName ? null : sectionName;
};

const fondEcranSources = [
    '/bibliotheque/FondEcran/carreFlottant.html',
    '/bibliotheque/FondEcran/cercle-pulsant.html',
    '/bibliotheque/FondEcran/degrade-couleur.html',
    '/bibliotheque/FondEcran/etoiles-scintillantes.html',
    '/bibliotheque/FondEcran/nuages.html',
    '/bibliotheque/FondEcran/particules.html',
    // '/bibliotheque/FondEcran/particulesMvt.html',
    '/bibliotheque/FondEcran/pluieCaractere.html',
    '/bibliotheque/FondEcran/pointConnecter.html',
    '/bibliotheque/FondEcran/spiraleTournante.html',
    '/bibliotheque/FondEcran/spirographe.html',
    '/bibliotheque/FondEcran/vagues-fluides.html',
    '/bibliotheque/FondEcran/trait.html',
    '/bibliotheque/FondEcran/coeur.html'
];

// Copie le contenu du fichier HTML dans le presse-papiers
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
