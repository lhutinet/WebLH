<template>

    <div class="tarif-list">
        <div class="TarifCard" v-for="item in TarifList" :key="item.id" :style="{ borderColor: item.couleur }">
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
            <button class="btn" @click="openModal(item)" :style="{ background: item.couleur }">
                Plus ...
            </button>
        </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedItem" class="modal-overlay" @click.self="closeModal">
        <div :class="['modal-content', getModalClass(selectedItem)]">
            <h3>{{ selectedItem.title }} : Détails</h3>
            <p>{{ selectedItem.presentation }}</p>
            <p><strong>Tarif :</strong> {{ selectedItem.tarif }}</p>

            <ul v-if="selectedItem.title === 'Site sur-mesure (Code pur)'">
                <li>Support API possible</li>
                <li v-if="selectedItem.caracteristiques !== ''" v-html="selectedItem.caracteristiques"></li>
            </ul>
            <ul v-if="selectedItem.title === 'Tarifs à la page - Code pur'">
                <li>Support API possible</li>
                <li v-if="selectedItem.caracteristiques !== ''" v-html="selectedItem.caracteristiques"></li>
            </ul>

            <ul v-if="selectedItem.title === 'Site wordpress'">
                <li>Installation de plugins essentiels</li>
                <li v-if="selectedItem.caracteristiques !== ''" v-html="selectedItem.caracteristiques"></li>
            </ul>
            <ul v-if="selectedItem.title === 'Site Wix'">
                <li>Assistance sur l'éditeur Wix</li>
                <li v-if="selectedItem.caracteristiques !== ''" v-html="selectedItem.caracteristiques"></li>
            </ul>

            <ul v-if="selectedItem.title === 'Site hostinger'">
                <li>Hostinger Website Builder</li>
                <li v-if="selectedItem.caracteristiques !== ''" v-html="selectedItem.caracteristiques"></li>
            </ul>

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
        title: 'Site sur-mesure (Code pur)',
        presentation: 'Un site unique, entièrement développé selon vos besoins.',
        tarif: '750€ ',
        formation: '',
        couleur: '#8eb2bd',
        couleurTrans: 'rgba(142, 178, 189, 0.3)',
        caracteristiques: `
      ✅ Liberté totale sur le design et les fonctionnalités<br>
      ✅ Code optimisé, plus rapide et léger<br>
      ✅ Meilleur potentiel de référencement (SEO)<br>
      ✅ Pas de dépendance à des plugins ou plateformes externes<br>
      ✅ Sécurité renforcée et adaptée à votre projet<br>
      ✅ Idéal pour des besoins spécifiques ou des fonctionnalités avancées<br><br>
      ⚠️ Temps de développement plus long<br>
      ⚠️ Évolutions futures nécessitent un développeur<br>
      ⚠️ Moins adapté si vous souhaitez tout modifier vous-même sans aide<br><br>
    `
    },
    {
        id: 4,
        title: 'Site Wix',
        presentation: 'Une solution simple et rapide pour être visible en ligne.',
        tarif: '400€',
        formation: 'Formation à la prise en main Wix',
        couleur: '#5fc0c7',
        couleurTrans: 'rgba(95, 192, 199, 0.3)',
        caracteristiques: '✅ Plateforme tout-en-un très facile à utiliser<br>✅ Éditeur en glisser-déposer : vous placez vos éléments sans coder <br>✅ Mise en ligne rapide, idéale pour des projets urgents<br>✅ Hébergement, maintenance et sécurité inclus<br>✅ Design responsive adapté à tous les écrans<br>✅ Idéal pour les sites vitrines, portfolios ou petits projets <br>✅ Formation à la prise en main incluse<br> <br>⚠️ Moins de liberté sur le design ou les fonctionnalités avancées <br>⚠️ Fonctionnalités limitées pour des projets complexes ou très évolutifs<br>⚠️ Référencement (SEO) plus limité qu’avec du code ou WordPress<br>⚠️ Abonnement payant obligatoire (environ 17€ / mois) uniquement si vous souhaitez un nom de domaine personnalisé (.fr, .com, etc.)'
    },
    {
        id: 5,
        title: 'Site hostinger',
        presentation: 'Une solution simple et rapide pour être visible en ligne.',
        tarif: '400€',
        formation: 'Formation à la prise en main Hostinger',
        couleur: '#5f7bc7',
        couleurTrans: 'rgba(95, 123, 199, 0.3)',
        caracteristiques: '✅ Éditeur intuitif en glisser-déposer, facile à utiliser<br>✅ Hébergement, maintenance et sécurité inclus<br>✅ Templates modernes et personnalisables<br>✅ Design responsive adapté à tous les écrans<br>✅ Fonctionnalités intégrées : formulaire, galerie, blog, boutique<br>✅ Formation à la prise en main incluse<br><br>⚠️ Moins de liberté pour des fonctionnalités complexes ou très spécifiques<br>⚠️ Nécessite un abonnement payant (environ 6&euro; à 12&euro;/mois) si vous souhaitez un nom de domaine personnalisé (.fr, .com, etc.)'
    }
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

function getModalClass(item) {
    if (item.title.includes('sur-mesure')) return 'modal-tarif1'
    if (item.title.includes('wordpress')) return 'modal-tarif2'
    if (item.title.includes('Wix')) return 'modal-tarif3'
    return ''
}
</script>
