<template>
    <h1>📄 Aide-mémoire HTML</h1>
    <div class="columns">
        <div class="column">
            <h3>Telechargement de base vide </h3>
            <a href="https://github.com/lhutinet/depart/archive/refs/heads/main.zip">
                Télécharger le projet en ZIP
            </a>

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
                <li>Titres <code>&lt;h1&gt; à &lt;h6&gt;</code> – <em>&lt;h1&gt;Bonjour&lt;/h1&gt;</em></li>
                <li>Paragraphe <code>&lt;p&gt;</code> – <em>&lt;p&gt;Ceci est un paragraphe.&lt;/p&gt;</em></li>
                <li>Lien <code>&lt;a href=""&gt;</code> – <em>&lt;a href="https://exemple.com"&gt;Voir le
                        site&lt;/a&gt;</em></li>
                <li>Image <code>&lt;img src="" alt=""&gt;</code> – <em>&lt;img src="chat.jpg" alt="Un chat
                        mignon"&gt;</em></li>
                <li>Listes <code>&lt;ul&gt;/&lt;ol&gt;/&lt;li&gt;</code> –
                    <em>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</em>
                </li>
                <li>Tableau <code>&lt;table&gt;</code> –
                    <em>&lt;table&gt;&lt;tr&gt;&lt;td&gt;Cellule&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</em>
                </li>
                <li>Conteneurs <code>&lt;div&gt;</code> <code>&lt;span&gt;</code> – <em>&lt;div
                        class="box"&gt;Contenu&lt;/div&gt;</em></li>
            </ul>

            <h3>🎨 Attributs essentiels</h3>
            <ul>
                <li><code>class</code> – <em>&lt;div class="menu"&gt;</em> <code>id</code> – <em>&lt;p
                        id="intro"&gt;</em></li>
                <li><code>href</code> – <em>&lt;a href="page.html"&gt;</em> <code>src</code> – <em>&lt;img
                        src="photo.jpg"&gt;</em> <code>alt</code> – <em>&lt;img alt="description"&gt;</em></li>
                <li><code>title</code> – <em>&lt;a title="Aller au site"&gt;</em> <code>target</code> – <em>&lt;a
                        target="_blank"&gt;</em> <code>rel</code> – <em>&lt;a rel="noopener"&gt;</em></li>
                <li><code>type</code> – <em>&lt;input type="email"&gt;</em> <code>value</code> – <em>&lt;input
                        value="Jean"&gt;</em> <code>placeholder</code> – <em>&lt;input placeholder="Votre nom"&gt;</em>
                </li>
            </ul>

            <h3>🔢 Formulaires</h3>
            <pre><code>&lt;form action="#" method="post"&gt;
&lt;input type="text" name="nom" /&gt;
&lt;input type="submit" value="Envoyer" /&gt;
&lt;/form&gt;</code></pre>
            <ul>
                <li>
                    <code>&lt;input&gt;</code> <code>&lt;textarea&gt;</code> <code>&lt;select&gt;</code> –
                    <em>&lt;textarea name="message"&gt;&lt;/textarea&gt;</em><br />
                    Types <code>text</code> <code>email</code>
                    <code>checkbox</code> <code>radio</code> <code>password</code> –
                    <em>&lt;input type="checkbox" name="ok"&gt;</em>
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
                    <code>&lt;header&gt;</code> <code>&lt;footer&gt;</code> <code>&lt;main&gt;</code>
                    <code>&lt;article&gt;</code> <code>&lt;section&gt;</code>
                    <code>&lt;aside&gt;</code> <code>&lt;nav&gt;</code> –
                    <em>&lt;nav&gt;&lt;a href="index.html"&gt;Accueil&lt;/a&gt;&lt;/nav&gt;</em>
                </li>
            </ul>

            <h3>⏩ Meta & SEO</h3>
            <pre><code>&lt;meta name="description" content="Mon site"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>

            <h3>🚀 Accessibilité</h3>
            <ul>
                <li><code>alt</code> sur les images – <em>&lt;img src="chien.jpg" alt="Chien qui court"&gt;</em></li>
                <li>Structure claire des titres – <em>&lt;h1&gt; puis &lt;h2&gt; &lt;h3&gt; etc.</em></li>
                <li>Utilisation d'ARIA si nécessaire – <em>&lt;button aria-label="Fermer"&gt;✖&lt;/button&gt;</em></li>
            </ul>

            <h3>📅 Bonnes pratiques</h3>
            <ul>
                <li>Valider le HTML (W3C)</li>
                <li>Respecter la structure sémantique</li>
                <li>
                    Optimiser les balises <code>img</code> – <em>taille réduite attribut <code>alt</code> formats
                        modernes (WebP)</em>
                </li>
            </ul>
        </div>
    </div>
    <ScrollRetour />
</template>

<script setup>
import ScrollRetour from '@/components/ScrollRetour.vue'
</script>
