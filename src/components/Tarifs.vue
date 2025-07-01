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
                        WordPress bénéficie d’une large communauté : vous avez accès à de nombreuses ressources et
                        supports.
                        <br> ✅
                        C’est un excellent compromis entre flexibilité, coût et rapidité de mise en œuvre.
                    </li>
                </ul>
                <ul v-if="selectedItem.title === 'Site Wix'">
                    <li>Assistance sur l'éditeur Wix</li>
                    <li> ✅Wix est parfait pour un projet simple et rapide à mettre
                        en ligne. <br> ✅Sa plateforme clé-en-main permet de créer un site sans toucher au code grâce à
                        un
                        éditeur
                        en glisser-déposer. <br> ✅ L’hébergement et la maintenance sont inclus, ce qui limite les soucis
                        techniques. <br> ✅C’est une solution accessible à petit budget, idéale pour des sites vitrines,
                        des
                        portfolios ou des projets qui doivent être visibles rapidement.</li>
                </ul>

                <ul v-if="selectedItem.title === 'Site hostinger'">
                    <li>Hostinger Website Builder</li>
                    <li>✅ Interface glisser-déposer facile
                        Créez vos pages en quelques clics : ajoutez textes, images, vidéos et boutons où vous le
                        souhaitez.
                        <br>
                        ✅ Designs modernes et personnalisables
                        Choisissez parmi des centaines de templates professionnels et adaptez-les à votre image :
                        couleurs,
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
                <!-- contenu modal inchangé -->

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
        presentation: 'Un site unique, entièrement développé selon vos besoins...',
        tarif: '750€',
        formation: '',
        liplus: '',
        couleur: '#8eb2bd',
        couleurTrans: 'rgba(142, 178, 189, 0.3)',
    },
    {
        id: 2,
        title: 'Site wordpress',
        presentation: 'Un site puissant et évolutif, facile à gérer au quotidien.',
        tarif: '750€',
        formation: 'Formation à la prise en main WordPress',
        liplus: '',
        couleur: '#66ae98',
        couleurTrans: 'rgba(102, 174, 152, 0.3)',
    },
    {
        id: 3,
        title: 'Site Wix',
        presentation: 'une solution simple et rapide pour être présent en ligne.',
        tarif: '400€',
        formation: 'Formation à la prise en main wix',
        liplus: '',
        couleur: '#5fc0c7',
        couleurTrans: 'rgba(95, 192, 199, 0.3)',
    },
    {
        id: 4,
        title: 'Site hostinger',
        presentation: 'une solution  tres simple et rapide pour être présent en ligne.',
        tarif: '400€',
        formation: 'Formation à la prise en main hostinger',
        liplus: '',
        couleur: '#5f7bc7',
        couleurTrans: 'rgba(95, 123, 199, 0.3)',
    },
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
    currentTranslate.value = -currentIndex.value * cardWidth.value
    prevTranslate.value = currentTranslate.value
}

// Animations frame update for smooth dragging
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
    if (event.type === 'touchstart') {
        startX.value = event.touches[0].clientX
    } else {
        startX.value = event.clientX
    }
    isDragging.value = true
    animationFrame.value = requestAnimationFrame(animation)
}

function dragMove(event) {
    if (!isDragging.value) return
    let currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX
    let deltaX = currentX - startX.value
    currentTranslate.value = prevTranslate.value + deltaX
    // Limit drag boundaries (optionnel, on peut rendre infini en bouclant)
    const maxTranslate = 0
    const minTranslate = -((TarifList.value.length - visibleCards.value) * cardWidth.value)
    if (currentTranslate.value > maxTranslate) {
        currentTranslate.value = maxTranslate
    }
    if (currentTranslate.value < minTranslate) {
        currentTranslate.value = minTranslate
    }
}

function dragEnd() {
    if (!isDragging.value) return
    isDragging.value = false
    cancelAnimationFrame(animationFrame.value)
    // Snap to nearest card index
    currentIndex.value = Math.round(-currentTranslate.value / cardWidth.value)
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
