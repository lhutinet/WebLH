<template>
    <div class="aideMemoire">
        <h1>Aide-mémoire : Déploiement Netlify (Vue 3 + Vite) avec Formulaire Netlify</h1>

        <ol>
            <li>
                <strong>Créer ton projet :</strong><br>
                <code>npm create vite@latest mon-projet -- --template vue</code><br>
                <code>cd mon-projet</code><br>
                <code>npm install</code>
            </li>

            <li>
                <strong>Configurer vue-router :</strong><br>
                <code>npm install vue-router</code>
            </li>

            <li>
                <strong>Dans ton router :</strong><br>
                Utiliser <code>createWebHistory</code> (pas hash) :<br>
                <code>createRouter({ history: createWebHistory(), routes })</code>
            </li>

            <li>
                <strong>Créer le formulaire :</strong><br>
                Exemple :
                <pre><code>&lt;form name="contact" method="POST" data-netlify="true"&gt;
    &lt;input type="hidden" name="form-name" value="contact" /&gt;
    &lt;input type="text" name="nom" required /&gt;
    &lt;input type="email" name="email" required /&gt;
    &lt;textarea name="message" required&gt;&lt;/textarea&gt;
    &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
  &lt;/form&gt;
  </code></pre>
            </li>

            <li>
                <strong>Créer un fichier <code>_redirects</code> à la racine de <code>public/</code> (ou ajouter dans
                    <code>dist/</code> après build) :</strong><br>
                <pre><code>/* /index.html 200</code></pre>
            </li>

            <li>
                <strong>Si tu préfères, un <code>netlify.toml</code> :</strong><br>
                <pre><code>[build]
    publish = "dist"
    command = "npm run build"
  
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  </code></pre>
            </li>

            <li>
                <strong>Déployer :</strong><br>
                - Pousser ton repo sur GitHub<br>
                - Lier le repo dans Netlify<br>
                - Build command : <code>npm run build</code><br>
                - Publish directory : <code>dist</code>
            </li>

            <li>
                <strong>Vérifier :</strong><br>
                - Ton formulaire fonctionne (Netlify détecte automatiquement)<br>
                - Les routes fonctionnent (pas de 404 en navigation directe)
            </li>
        </ol>

        <p><strong>⚠ Points d’attention :</strong></p>
        <ul>
            <li>Toujours un <code>_redirects</code> ou <code>netlify.toml</code> sinon tes routes plantent en direct
            </li>
            <li>Chaque champ de formulaire doit avoir un <code>name</code></li>
            <li>Pas besoin d’activer/désactiver la détection de formulaire manuellement</li>
            <li>Si tu ajoutes des inputs : ajoute le <code>name</code></li>
        </ul>
    </div>
    <ScrollRetour />
</template>
<script setup>
import ScrollRetour from '@/components/ScrollRetour.vue'

</script>

<!-- <script setup> -->
<!-- // Pas besoin de JS spécifique : c'est purement un aide-mémoire affiché -->
<!-- </script> -->

<!-- <style scoped>
.aideMemoire {
    max-width: 800px;
    margin: auto;
    padding: 1rem;
    font-family: sans-serif;
    line-height: 1.6;
}

code {
    background: #eee;
    padding: 0 0.2rem;
}

pre {
    background: #f8f8f8;
    padding: 0.5rem;
    overflow: auto;
}
</style> -->
