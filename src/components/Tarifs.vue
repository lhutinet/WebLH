<template>
    <div class="TarifCard" v-for="(item, id) in TarifList" :key="id">
        <div class="titre" :style="{ background: item.couleur }">
            <h3>{{ item.title }}</h3>
            <p>{{ item.presentation }}</p>
        </div>
        <div class="tarif" :style="{ color: item.couleur }">
            {{ item.tarif }}
        </div>
        <ul class="colored-list" :style="{ '--color-odd': item.couleurTrans, '--color-even': '#ffffff' }">
            <li>Design personnalisé</li>
            <li>Site responsive (mobile / tablette / ordinateur)</li>
            <li>Pages principales (ex : Accueil + 4 pages)</li>
            <li>Formulaire de contact</li>
            <li>SEO de base</li>
            <li v-if="item.formation !== ''">{{ item.formation }}</li>
            <li>Code propre, optimisé, évolutif)</li>
            <li>Assistance technique (3 mois)</li>

        </ul>
        <button class="btn" @click="openModal(item)" :style="{ background: item.couleur }">plus ...</button>
    </div>
    <!-- Modal -->
    <div v-if="selectedItem" class="modal-overlay" @click.self="closeModal">
        <div :class="['modal-content', getModalClass(selectedItem)]">
            <h3>{{ selectedItem.title }} : Détails</h3>
            <p>{{ selectedItem.presentation }}</p>
            <p><strong>Tarif :</strong> {{ selectedItem.tarif }}</p>
            <ul v-if="selectedItem.title === 'Site sur-mesure (Code pur)'">
                <li>Support API possible</li>
                <li> ✅Un site développé en code pur vous
                    offre un maximum de liberté et de performance.
                    <br> ✅ Vous n’êtes pas limité par les contraintes des
                    plateformes :
                    <br> ✅chaque élément est pensé pour votre projet. Le code est optimisé, ce qui garantit un
                    site plus rapide, plus léger et mieux référencé par les moteurs de recherche. <br> ✅
                    C’est aussi la
                    meilleure option si vous avez des besoins spécifiques <br> ✅
                    fonctionnalités avancées, design unique.
                    Enfin, la sécurité est renforcée car il n’y a pas de dépendance à des plugins
                    externes.
                </li>
            </ul>
            <ul v-if="selectedItem.title === 'Site wordpress'">
                <li>Installation de plugins essentiels</li>
                <li> ✅WordPress est une solution idéale pour un site
                    évolutif et facile à gérer.
                    <br> ✅ Grâce à son interface intuitive, vous pouvez modifier vos contenus
                    (textes, images, articles) sans aucune connaissance technique.
                    <br> ✅ Avec sa vaste bibliothèque de plugins
                    et de thèmes, il permet d’ajouter rapidement des fonctionnalités (blog, boutique, réservation…).
                    <br> ✅
                    WordPress bénéficie d’une large communauté : vous avez accès à de nombreuses ressources et supports.
                    <br> ✅
                    C’est un excellent compromis entre flexibilité, coût et rapidité de mise en œuvre.
                </li>
            </ul>
            <ul v-if="selectedItem.title === 'Site Wix'">
                <li>Assistance sur l'éditeur Wix</li>
                <li> ✅Wix est parfait pour un projet simple et rapide à mettre
                    en ligne. <br> ✅Sa plateforme clé-en-main permet de créer un site sans toucher au code grâce à un
                    éditeur
                    en glisser-déposer. <br> ✅ L’hébergement et la maintenance sont inclus, ce qui limite les soucis
                    techniques. <br> ✅C’est une solution accessible à petit budget, idéale pour des sites vitrines, des
                    portfolios ou des projets qui doivent être visibles rapidement.</li>
            </ul>

            <ul v-if="selectedItem.title === 'Site hostinger'">
                <li>Hostinger Website Builder</li>
                <li>✅ Interface glisser-déposer facile
                    Créez vos pages en quelques clics : ajoutez textes, images, vidéos et boutons où vous le souhaitez.
                    <br>
                    ✅ Designs modernes et personnalisables
                    Choisissez parmi des centaines de templates professionnels et adaptez-les à votre image : couleurs,
                    polices, mise en page… tout est modulable.
                    <br>
                    ✅ Site optimisé pour mobile
                    Chaque design est automatiquement responsive pour s’adapter à tous les écrans.
                    <br>
                    ✅ Fonctionnalités intégrées
                    <br>
                    Formulaire de contact
                    <br>
                    Galerie d’images
                    <br>
                    Blog
                    <br>
                    Boutique en ligne (e-commerce)
                </li>
            </ul>

            <!-- Tu peux ajouter d'autres spécificités ici -->

            <button class="btn" @click="closeModal">Fermer</button>
            <button class="btn" @click="goToContact">Contactez-moi</button>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const TarifList = ref([
    {
        id: 1,
        title: "Site sur-mesure (Code pur)",
        presentation: "Un site unique, entièrement développé selon vos besoins...",
        tarif: "750€",
        formation: "",
        liplus: "",
        couleur: "#8eb2bd",
        couleurTrans: "rgba(142, 178, 189, 0.3)"
    },
    {
        id: 2,
        title: "Site wordpress",
        presentation: "Un site puissant et évolutif, facile à gérer au quotidien.",
        tarif: "750€",
        formation: "Formation à la prise en main WordPress",
        liplus: "",
        couleur: "#66ae98",
        couleurTrans: "rgba(102, 174, 152, 0.3)"
    },
    {
        id: 3,
        title: "Site Wix",
        presentation: "une solution simple et rapide pour être présent en ligne.",
        tarif: "400€",
        formation: "Formation à la prise en main wix",
        liplus: "",
        couleur: "#5fc0c7",
        couleurTrans: "rgba(95, 192, 199, 0.3)"
    },
    {
        id: 4,
        title: "Site hostinger",
        presentation: "une solution  tres simple et rapide pour être présent en ligne.",
        tarif: "400€",
        formation: "Formation à la prise en main hostinger",
        liplus: "",
        couleur: "#5f7bc7",
        couleurTrans: "rgba(95, 123, 199, 0.3)"
    },
])

const selectedItem = ref(null)

function openModal(item) {
    selectedItem.value = item
}

function closeModal() {
    selectedItem.value = null
}

function goToContact() {
    router.push('/contact')
}


const getModalClass = (item) => {
    if (item.title.includes('sur-mesure')) return 'modal-tarif1'
    if (item.title.includes('wordpress')) return 'modal-tarif2'
    if (item.title.includes('Wix')) return 'modal-tarif3'
    return ''

}


</script>
