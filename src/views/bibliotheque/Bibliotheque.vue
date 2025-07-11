<template>
    <div>
        <h1>Bibliotheque</h1>
        <h3>fond ecran 1</h3>

        <div @click="copyHtmlFile"
            style="cursor: pointer; border: 2px solid red; display: inline-block; z-index: 10;height:150px; width:150px;">
            <iframe src=" /bibliotheque/carreFlottant.html" frameborder="0" width="100%" height="100%
            "></iframe>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        async copyHtmlFile() {
            alert('Click détecté !');  // vérification minimale

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
iframe {
    z-index: 0;
}
</style>
