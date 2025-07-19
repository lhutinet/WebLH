import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import APropos from '../views/APropos.vue'
import Contact from '../views/Contact.vue'
import AmHTML from '../views/aideMemoire/AmHTML.vue'
import AmJS from '@/views/aideMemoire/Am-JS.vue'
import AmCss from '@/views/aideMemoire/Am-css.vue'
import AmReact from '@/views/aideMemoire/Am-react.vue'
import AmScss from '@/views/aideMemoire/Am-scss.vue'
import AmVue from '@/views/aideMemoire/Am-vue.vue'
import AmGitHub from '@/views/aideMemoire/AmGitHub.vue'
import Amform from '@/views/aideMemoire/Am-form.vue'
import bibliotheque from '@/views/bibliotheque/Bibliotheque.vue'
import creaButton from '@/views/CreaButton.vue'

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/apropos', name: 'APropos', component: APropos },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/amHTML', name: 'AmHTML', component: AmHTML },
  { path: '/amJS', name: 'amjs', component: AmJS },
  { path: '/amcss', name: 'Amcss', component: AmCss },
  { path: '/amreact', name: 'Amreact', component: AmReact },
  { path: '/amscss', name: 'Amscss', component: AmScss },
  { path: '/amvue', name: 'Amvue', component: AmVue },
  { path: '/amgithub', name: 'Amgithub', component: AmGitHub },
  { path: '/amform', name: 'Amform', component: Amform },
  { path: '/bibliotheque', name: 'bibliotheque', component: bibliotheque },
  { path: '/creaButton', name: 'creaButton', component: creaButton },

  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Restaure la position si l'utilisateur utilise "précédent"/"suivant"
      return savedPosition
    } else {
      // Sinon, toujours remonter en haut de la page
      return { top: 0 }
    }
  },
})

export default router
