<template>
  <h1>🧠 Aide-mémoire Vue.js (Vue 3+)</h1>
  <div class="columns">
    <div class="column">
      <h2>⚙️ Installation</h2>
      <pre><code>npm install vue
npm create vite@latest mon-projet -- --template vue
cd mon-projet
npm install
npm run dev</code></pre>

      <h2>📆 Structure de base</h2>
      <pre><code>&lt;template&gt;
  &lt;div&gt;{{ message }}&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const message = ref('Bonjour Vue!')
&lt;/script&gt;

&lt;style scoped&gt;
div { color: blue; }
&lt;/style&gt;</code></pre>

      <h2>🧹 Réactivité</h2>
      <pre><code>import { ref, reactive } from 'vue'
const compteur = ref(0)
compteur.value++
const utilisateur = reactive({ nom: 'Marie', age: 30 })
utilisateur.age++</code></pre>

      <h2>🎯 Directives</h2>
      <ul>
        <li>Liaison d'attribut:<code>v-bind</code> <code>:</code></li>

        <li>Liaison bi-directionnelle:<code>v-model</code></li>

        <li>Affichage conditionnel: <code>v-if</code> <code>v-else</code></li>

        <li>Boucle:<code>v-for</code></li>

        <li>Événements:<code>@</code> ou <code>v-on</code></li>

        <li>Masque sans détruire:<code>v-show</code></li>
        <li>Liaison CSS:<code>:class</code> <code>:style</code></li>
      </ul>

      <h2>🔹 Cycle de vie</h2>
      <pre><code>onMounted(() => console.log('Monté'))
onUnmounted(() => console.log('Détruit'))</code></pre>
    </div>

    <div class="column">
      <h2>🛠️ Composants</h2>
      <pre><code>// Parent.vue
&lt;Enfant :msg="message" @envoyer="recoitMsg" /&gt;

// Enfant.vue
&lt;template&gt;
  &lt;button @click="$emit('envoyer', 'Salut!')"&gt;Envoyer&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
defineProps(['msg'])
&lt;/script&gt;</code></pre>

      <h2>🔁 Événements</h2>
      <pre><code>&lt;button @click="incrementer"&gt;Cliquez-moi&lt;/button&gt;

&lt;script setup&gt;
const compteur = ref(0)
function incrementer() {
  compteur.value++
}
&lt;/script&gt;</code></pre>

      <h2>🧲 Computed & Watch</h2>
      <pre><code>const nom = ref('Alice')
const nomMaj = computed(() => nom.value.toUpperCase())
watch(nom, (nouv, anc) => {
  console.log('Changement :', anc, '->', nouv)
})</code></pre>

      <h2>🔧 Fonctions utiles</h2>
      <table>
        <tr>
          <th>Fonction</th>
          <th>Rôle</th>
        </tr>
        <tr>
          <td>ref()</td>
          <td>Valeur réactive</td>
        </tr>
        <tr>
          <td>reactive()</td>
          <td>Objet réactif</td>
        </tr>
        <tr>
          <td>computed()</td>
          <td>Valeur dérivée</td>
        </tr>
        <tr>
          <td>watch()</td>
          <td>Surveillance de changements</td>
        </tr>
        <tr>
          <td>defineProps()</td>
          <td>Props dans &lt;script setup&gt;</td>
        </tr>
        <tr>
          <td>defineEmits()</td>
          <td>Événements émis</td>
        </tr>
      </table>

      <h2>🛠️ Outils utiles</h2>
      <ul>
        <li><strong>Vue Devtools</strong> : debug navigateur</li>
        <li><strong>Vite</strong> : serveur de dev rapide</li>
        <li><strong>Pinia</strong> : store réactif moderne</li>
        <li><strong>Vue Router</strong> : navigation SPA</li>
      </ul>

      <h2>🚀 Utilisation dans App.vue</h2>
      <pre><code>
          npm run serve npm
         install vue-router
        </code></pre>

      <pre><code>&lt;!-- App.vue --&gt;
      &lt;template&gt;
        &lt;Navigation :links="navLinks" /&gt;
      &lt;/template&gt;
      
      &lt;script&gt;
      import Navigation from './Navigation.vue';
      
      export default {
        name: 'App',
        components: {
          Navigation
        },
        data() {
          return {
            navLinks: [
              { label: 'Accueil', href: '#home' },
              { label: 'Contact', href: '#contact' },
              { label: 'À propos', href: '#about' }
            ]
          }
        }
      }
      &lt;/script&gt;</code></pre>

      <h2>🌟 Exemple de navigation complète</h2>
      <pre><code>&lt;!-- MainLayout.vue --&gt;
      &lt;template&gt;
        &lt;div&gt;
          &lt;Navigation :links="navLinks" /&gt;
          &lt;router-view /&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      
      &lt;script&gt;
      import Navigation from './Navigation.vue';
      
      export default {
        name: 'MainLayout',
        components: {
          Navigation
        },
        data() {
          return {
            navLinks: [
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' }
            ]
          }
        }
      }
      &lt;/script&gt;</code></pre>
    </div>
  </div>
</template>
