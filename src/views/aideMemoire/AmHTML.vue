<template>
    <h1>📄 Aide-mémoire HTML</h1>
    <div class="columns">
        <div class="column">
            <h3>⚖️ Structure de base</h3>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;Titre&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
Contenu ici
&lt;/body&gt;
&lt;/html&gt;</code></pre>

            <h3>📄 Balises principales</h3>
            <ul>
                <li>Titres:<code>&lt;h1&gt; à &lt;h6&gt;</code> </li>
                <li>Paragraphe:<code>&lt;p&gt;</code> </li>
                <li>Lien<code>&lt;a href=""&gt;</code> </li>
                <li> Image<code>&lt;img src="" alt=""&gt;</code> </li>
                <li>Listes<code>&lt;ul&gt;/&lt;ol&gt;/&lt;li&gt;</code> </li>
                <li>Tableau<code>&lt;table&gt;</code> </li>
                <li>
                    Conteneurs:<code>&lt;div&gt;</code><code>&lt;span&gt;</code>
                </li>
            </ul>

            <h3>🎨 Attributs essentiels</h3>
            <ul>
                <li><code>class</code><code>id</code></li>
                <li><code>href</code><code>src</code><code>alt</code></li>
                <li><code>title</code><code>target</code><code>rel</code></li>
                <li><code>type</code><code>value</code><code>placeholder</code></li>
            </ul>

            <h3>🔢 Formulaires</h3>
            <pre><code>&lt;form action="#" method="post"&gt;
&lt;input type="text" name="nom" /&gt;
&lt;input type="submit" value="Envoyer" /&gt;
&lt;/form&gt;</code></pre>
            <ul>
                <li>
                    <code>&lt;input&gt;</code><code>&lt;textarea&gt;</code>
                    <code>&lt;select&gt;</code>

                    Types : <code>text</code><code>email</code>
                    <code>checkbox</code><code>radio</code><code>password</code>
                </li>
            </ul>
        </div>

        <div class="column">
            <h3>🗃️ Tableaux</h3>
            <pre><code>&lt;table&gt;
&lt;thead&gt;&lt;tr&gt;&lt;th&gt;Nom&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;Alice&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;
&lt;/table&gt;</code></pre>

            <h3>📊 Sémantique</h3>
            <ul>
                <li>
                    <code>&lt;header&gt;</code><code>&lt;footer&gt;</code>
                    <code>&lt;main&gt;</code>

                    <code>&lt;article&gt;</code><code>&lt;section&gt;</code>
                    <code>&lt;aside&gt;</code><code>&lt;nav&gt;</code>
                </li>
            </ul>



            <h3>⏩ Meta & SEO</h3>
            <pre><code>&lt;meta name="description" content="..."&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>

            <h3>🚀 Accessibilité</h3>
            <ul>
                <pre><code>  <li>alt sur les images</li>
                <li>Structure claire des titres</li>
                <li>Utilisation d'ARIA si nécessaire </li></code></pre>
            </ul>

            <h3>📅 Bonnes pratiques</h3>
            <ul>
                <li>Valider le HTML (W3C)</li>
                <li>Respecter la structure sémantique</li>
                <li>
                    Optimiser les balises <code>img</code> (taille, <code>alt</code>)
                </li>
            </ul>
        </div>
    </div>
    <ScrollRetour />
</template>
<script setup>
import ScrollRetour from '@/components/ScrollRetour.vue'

</script>