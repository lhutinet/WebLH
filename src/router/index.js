import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import APropos from '../views/APropos.vue'
import Contact from '../views/Contact.vue'
import AmHTML from '../views/AmHTML.vue'
import AmJS from '@/views/Am-.JS.vue'
import AmCss from '@/views/Am-css.vue'

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/apropos', name: 'APropos', component: APropos },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/AmHTML', name: 'AmHTML', component: AmHTML },
  { path: '/Am-JS', name: 'AmHTML', component: AmJS },
  { path: '/Am-css', name: 'AmHTML', component: AmCss },
  { path: '/AmHTML', name: 'AmHTML', component: AmHTML },
  { path: '/AmHTML', name: 'AmHTML', component: AmHTML },
  { path: '/AmHTML', name: 'AmHTML', component: AmHTML },
  { path: '/AmHTML', name: 'AmHTML', component: AmHTML },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
