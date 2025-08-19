<template>
    <h1>🧠 Aide-mémoire Nuxt (Nuxt 3+)</h1>
    <div class="columns">
        <div class="column">
            <h3>Telechargement de base vide </h3>
            <a href="https://github.com/lhutinet/departNuxt/archive/refs/heads/master.zip">
                Télécharger le projet en ZIP
            </a>
            <br>
            <br>
            <h3>⚙️ Installation d’un projet Nuxt</h3>
            <pre><code>npx nuxi init mon-projet
cd mon-projet
npm install
npm run dev
npm run build
npm run preview</code></pre>

            <h3>📆 Structure de base</h3>
            <pre><code>mon-projet/
  ├─ pages/        # Pages de l’app
  ├─ components/   # Composants réutilisables
  ├─ layouts/      # Layouts globaux
  ├─ plugins/      # Plugins Vue/Nuxt
  ├─ middleware/   # Middleware navigation
  ├─ server/       # API côté serveur
  └─ app.vue       # Entrée principale</code></pre>

            <h3>🧹 Exemple simple</h3>
            <pre><code>&lt;!-- pages/index.vue --&gt;
&lt;template&gt;
  &lt;div&gt;{{ message }}&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const message = ref('Bonjour Nuxt !')
&lt;/script&gt;

&lt;style scoped&gt;
div { color: green; }
&lt;/style&gt;</code></pre>

            <h3>🎯 Spécificités Nuxt</h3>
            <ul>
                <li><code>pages/</code> → génère automatiquement le routing</li>
                <li><code>&lt;NuxtPage/&gt;</code> → rendu des pages</li>
                <li><code>&lt;NuxtLayout/&gt;</code> → wrapper de layouts</li>
                <li><code>&lt;NuxtLink to="/about"&gt;</code> → navigation interne</li>
                <li><code>useHead()</code> → gérer meta & SEO</li>
                <li><code>useRoute()</code>, <code>useRouter()</code> → routing</li>
            </ul>

            <h3>🔹 Cycle de vie Nuxt</h3>
            <pre><code>onMounted(() => console.log('Monté client'))
onUnmounted(() => console.log('Détruit client'))

// Coté serveur
onServerPrefetch(async () => {
  await fetch('...')
})
</code></pre>
        </div>

        <div class="column">
            <h3>🛠️ Composants</h3>
            <pre><code>&lt;!-- components/Hello.vue --&gt;
&lt;template&gt;&lt;p&gt;Hello {{ nom }}!&lt;/p&gt;&lt;/template&gt;

&lt;script setup&gt;
defineProps({ nom: String })
&lt;/script&gt;</code></pre>

            <h3>🚦 Routing automatique</h3>
            <pre><code>pages/
  index.vue       → /
  about.vue       → /about
  blog/[id].vue   → /blog/123
  users/[...all].vue → /users/toto/edit</code></pre>

            <h3>🧲 Données & API</h3>
            <pre><code>&lt;script setup&gt;
// Fetch côté serveur et client
const { data, pending, error } = await useFetch('/api/hello')

// Appel API externe
const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')
&lt;/script&gt;</code></pre>

            <h3>🔧 Fonctions Nuxt utiles</h3>
            <table>
                <thead>
                    <tr>
                        <th>Fonction</th>
                        <th>Rôle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>useHead()</td>
                        <td>Meta, SEO, balises head</td>
                    </tr>
                    <tr>
                        <td>useRuntimeConfig()</td>
                        <td>Accès aux variables runtime</td>
                    </tr>
                    <tr>
                        <td>useRoute()</td>
                        <td>Infos sur la route active</td>
                    </tr>
                    <tr>
                        <td>useRouter()</td>
                        <td>Navigation programmatique</td>
                    </tr>
                    <tr>
                        <td>defineNuxtPlugin()</td>
                        <td>Créer un plugin global</td>
                    </tr>
                    <tr>
                        <td>definePageMeta()</td>
                        <td>Options spécifiques d’une page</td>
                    </tr>
                </tbody>
            </table>

            <h3>🌟 Exemple de layout</h3>
            <pre><code>&lt;!-- layouts/default.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;nav&gt;
      &lt;NuxtLink to="/"&gt;Accueil&lt;/NuxtLink&gt; |
      &lt;NuxtLink to="/about"&gt;À propos&lt;/NuxtLink&gt;
    &lt;/nav&gt;
    &lt;main&gt;
      &lt;NuxtPage /&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>
    </div>
    <ScrollRetour />
</template>

<script setup>
import ScrollRetour from '@/components/ScrollRetour.vue'
</script>
