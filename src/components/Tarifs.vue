<template>
    <div class="carousel-container">
        <button class="carousel-btn prev" @click="prev">&#10094;</button>

        <div class="carousel-wrapper" ref="carouselWrapper">
            <div class="carousel-track" ref="track" :style="{
                transform: `translateX(${currentTranslate}px)`,
                transition: isDragging ? 'none' : 'transform 0.4s ease-in-out',
            }" @mousedown="dragStart" @mousemove="dragMove" @mouseup="dragEnd" @mouseleave="dragEnd"
                @touchstart.prevent="dragStart" @touchmove.prevent="dragMove" @touchend="dragEnd">
                <div class="TarifCard" v-for="(item, id) in TarifList" :key="item.id"
                    :style="{ minWidth: cardWidth + 'px' }">
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
        </div>

        <button class="carousel-btn next" @click="next">&#10095;</button>

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
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const TarifList = ref([
    {
        id: 1,
        title: 'Site sur-mesure (Code pur)',
        presentation: 'Un site unique, entièrement développé selon vos besoins.',
        tarif: '750€ ',
        formation: '',
        liplus: '',
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
    //     {
    //         id: 2,
    //         title: 'Tarifs à la page - Code pur',
    //         presentation: 'Détails des tarifs pour les pages supplémentaires sur un site sur-mesure (code pur).',
    //         tarif: 'Dés 150€',
    //         formation: '',
    //         liplus: '',
    //         couleur: '#8eb2bd',
    //         couleurTrans: 'rgba(142, 178, 189, 0.3)',
    //         caracteristiques: `
    //     ✅Forfait de base (site simple, jusqu'à 5 pages) : 750 €<br>
    //     ✅Pages supplémentaires :<br>
    //     ✅ Page simple (texte, images, mise en page standard) : 150 € / page<br>
    //     ✅Page avec fonctionnalités spécifiques (formulaire, animation, sections dynamiques) : 250 € / page<br>
    //     ✅ Page très complexe (intégration API, espace client, fonctionnalités avancées) : devis personnalisé à partir de 300 € / page<br><br>
    //     <strong>Nom de domaine :</strong> à partir de ~3 €/an (OVH .com) ou ~10 €/an (.fr)<br>
    //     <strong>Hébergement conseillé :</strong> environ 50 – 100 €/an, facturé séparément<br><br>
    //     <em>Contactez-moi pour un devis personnalisé adapté à votre projet.</em>
    //   `
    //     },


    {
        id: 3,
        title: 'Site wordpress',
        presentation: 'Deux solutions possibles selon vos besoins : auto-hébergé ou WordPress.com.',
        tarif: '750€',
        formation: 'Formation à la prise en main WordPress',
        liplus: '',
        couleur: '#66ae98',
        couleurTrans: 'rgba(102, 174, 152, 0.3)',
        caracteristiques: '✅ Option 1 – WordPress auto-hébergé (Hostinger, OVH, o2switch…)<br>- Plus puissant et évolutif<br>- Accès complet aux plugins, thèmes et au code<br>- Design sur mesure et meilleur contrôle<br>- Environ 3&euro; à 10&euro;/mois pour l’hébergement + ≈ 12&euro;/an pour le nom de domaine<br><br>✅ Recommandé si vous souhaitez un site évolutif et sur mesure.<br><br>✅ Option 2 – WordPress.com<br>- Hébergement inclus, mises à jour automatiques<br>- Interface simplifiée en ligne<br>- Idéal pour débuter sans technique<br>- Version gratuite limitée (.wordpress.com et publicités)<br>- Abonnement payant (≈ 5&euro; à 25&euro;/mois) pour un nom de domaine personnalisé et des options avancées<br><br>✅ Je vous accompagne pour choisir la meilleure option selon vos besoins.'

    },

    {
        id: 4,
        title: 'Site Wix',
        presentation: 'Une solution simple et rapide pour être visible en ligne.',
        tarif: '400€',
        formation: 'Formation à la prise en main Wix',
        liplus: '',
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
        liplus: '',
        couleur: '#5f7bc7',
        couleurTrans: 'rgba(95, 123, 199, 0.3)',
        caracteristiques: '✅ Éditeur intuitif en glisser-déposer, facile à utiliser<br>✅ Hébergement, maintenance et sécurité inclus<br>✅ Templates modernes et personnalisables<br>✅ Design responsive adapté à tous les écrans<br>✅ Fonctionnalités intégrées : formulaire, galerie, blog, boutique<br>✅ Formation à la prise en main incluse<br><br>⚠️ Moins de liberté pour des fonctionnalités complexes ou très spécifiques<br>⚠️ Nécessite un abonnement payant (environ 6&euro; à 12&euro;/mois) si vous souhaitez un nom de domaine personnalisé (.fr, .com, etc.)'

    }


])


const selectedItem = ref(null)
const currentIndex = ref(0)
const visibleCards = ref(3)
const cardWidth = ref(280)

// Drag state
const isDragging = ref(false)
const startX = ref(0)
const currentTranslate = ref(0)
const prevTranslate = ref(0)
const animationFrame = ref(null)
const carouselWrapper = ref(null)
const track = ref(null)

function updateVisibleCards() {
    if (window.innerWidth < 600) {
        visibleCards.value = 1
        cardWidth.value = 320
    } else {
        visibleCards.value = 3
        cardWidth.value = 280
    }
    clampIndex()
    updateTranslateFromIndex()
}

function clampIndex() {
    const maxIndex = TarifList.value.length - visibleCards.value
    if (currentIndex.value > maxIndex) {
        currentIndex.value = maxIndex
    }
    if (currentIndex.value < 0) {
        currentIndex.value = 0
    }
}

function updateTranslateFromIndex() {
    if (!carouselWrapper.value) return

    const containerWidth = carouselWrapper.value.clientWidth
    let targetTranslate = -currentIndex.value * cardWidth.value + (containerWidth - cardWidth.value) / 2

    const maxTranslate = 0
    const minTranslate = -((TarifList.value.length - 1) * cardWidth.value)
    if (targetTranslate > maxTranslate) targetTranslate = maxTranslate
    if (targetTranslate < minTranslate) targetTranslate = minTranslate

    currentTranslate.value = targetTranslate
    prevTranslate.value = currentTranslate.value
    setTranslate(currentTranslate.value)
}

function animation() {
    setTranslate(currentTranslate.value)
    if (isDragging.value) {
        animationFrame.value = requestAnimationFrame(animation)
    }
}

function setTranslate(x) {
    if (track.value) {
        track.value.style.transform = `translateX(${x}px)`
    }
}

function dragStart(event) {
    startX.value = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX
    isDragging.value = true
    animationFrame.value = requestAnimationFrame(animation)
}

function dragMove(event) {
    if (!isDragging.value) return
    const currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX
    const deltaX = currentX - startX.value
    currentTranslate.value = prevTranslate.value + deltaX

    const maxTranslate = (carouselWrapper.value.clientWidth - cardWidth.value) / 2
    const minTranslate = -((TarifList.value.length - 1) * cardWidth.value) + (carouselWrapper.value.clientWidth - cardWidth.value) / 2

    if (currentTranslate.value > maxTranslate) currentTranslate.value = maxTranslate
    if (currentTranslate.value < minTranslate) currentTranslate.value = minTranslate
}

function dragEnd() {
    if (!isDragging.value) return
    isDragging.value = false
    cancelAnimationFrame(animationFrame.value)
    if (!carouselWrapper.value) return

    const containerWidth = carouselWrapper.value.clientWidth
    let closestIndex = 0
    let minDistance = Infinity
    for (let i = 0; i < TarifList.value.length; i++) {
        const cardCenterPosition = -i * cardWidth.value + (containerWidth - cardWidth.value) / 2
        const distance = Math.abs(cardCenterPosition - currentTranslate.value)
        if (distance < minDistance) {
            minDistance = distance
            closestIndex = i
        }
    }

    currentIndex.value = closestIndex
    clampIndex()
    updateTranslateFromIndex()
}

onMounted(() => {
    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateVisibleCards)
})

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

function next() {
    currentIndex.value++
    if (currentIndex.value > TarifList.value.length - visibleCards.value) {
        currentIndex.value = 0
    }
    updateTranslateFromIndex()
}

function prev() {
    currentIndex.value--
    if (currentIndex.value < 0) {
        currentIndex.value = TarifList.value.length - visibleCards.value
    }
    updateTranslateFromIndex()
}
</script>
