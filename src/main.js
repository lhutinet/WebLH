import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'

import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(router)

app.use(
  VueGtag,
  {
    config: { id: 'G-1HHVF5ZPZ0' },
  },
  router,
)

app.mount('#app')
