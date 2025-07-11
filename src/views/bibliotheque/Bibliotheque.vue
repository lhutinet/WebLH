<template>

    <h1>Bibliotheque</h1>
    <p>clique sur l'image pour copier le code </p>
    <h3>fond ecran 1</h3>


    <section class="fondEcranContent">


        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/carreFlottant.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/cercle-pulsant.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/degrade-couleur.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/etoiles-scintillantes.html" style="pointer-events: none;" frameborder="0"
                height="100%" width="100%">
            </iframe>
        </div>
        <!-- <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/grille.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div> -->
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/nuages.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/particules.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/particulesMvt.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/pluieCaractere.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/pointConnecter.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/spiraleTournante.html" style="pointer-events: none;" frameborder="0"
                height="100%" width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/spirographe.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/vagues-fluides.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/trait.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
        <!-- <div class="fEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/coeur.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div> -->

    </section>

    <section class="buttonContent">
        <div class="btnEcontent" @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; height:150px; width:150px;">
            <iframe src="/bibliotheque/vagues-fluides.html" style="pointer-events: none;" frameborder="0" height="100%"
                width="100%">
            </iframe>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        async copyHtmlFile() {
            // alert('Click détecté !');  

            try {
                const response = await fetch('/bibliotheque/carreFlottant.html');
                if (!response.ok) throw new Error('Erreur de chargement du fichier');
                const text = await response.text();

                await navigator.clipboard.writeText(text);
                alert('Contenu copié dans le presse-papiers !');
            } catch (e) {
                console.error(e);
                alert('Erreur : ' + e.message);
            }
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-wrap: wrap;

}

iframe {
    z-index: 0;
}

.fEcontent {
    transition: ease-in-out 0.5s;

    margin: 2px;

    &:hover {
        z-index: 20;
        transform: scale(2);
    }

}
</style>
