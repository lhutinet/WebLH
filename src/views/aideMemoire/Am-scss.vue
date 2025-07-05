<template>
	<h1>🎨 Aide-mémoire SCSS</h1>
	<div class="columns">
		<div class="column">
			<h3>🔤 Variables</h3>
			<pre><code>$couleur-primaire: #3498db;
$taille-font: 16px;
body {
  font-size: $taille-font;
  color: $couleur-primaire;
}</code></pre>

			<h3>📦 Imbrication</h3>
			<pre><code>nav {
  ul {
    li {
      a {
        color: red;
      }
    }
  }
}</code></pre>

			<h3>🧠 Mixins</h3>
			<pre><code>@mixin centre {
  display: flex;
  justify-content: center;
  align-items: center;
}
.boite {
  @include centre;
}</code></pre>

			<h3>🔁 Boucles</h3>
			<pre><code>@for $i from 1 through 3 {
  .col-#{$i} {
    width: 100px * $i;
  }
}</code></pre>

			<h3>🔂 Conditions</h3>
			<pre><code>@if $theme == light {
  background: white;
} @else {
  background: black;
}</code></pre>
		</div>

		<div class="column">
			<h3>📚 Fonctions</h3>
			<pre><code>@function em($pixels, $base: 16) {
  @return #{$pixels / $base}em;
}
body {
  font-size: em(18);
}</code></pre>

			<h3>🧬 Héritage</h3>
			<pre><code>%bouton-base {
  padding: 10px;
  border-radius: 5px;
}
.bouton {
  @extend %bouton-base;
  background: blue;
}</code></pre>

			<h3>🛠️ Outils utiles</h3>
			<ul>
				<li><strong>Live Sass Compiler</strong> : extension VSCode</li>
				<li><strong>Dart Sass</strong> : compilateur officiel</li>
				<li><strong>stylelint</strong> : linter SCSS</li>
			</ul>

			<h3>📁 Organisation recommandée</h3>
			<pre><code>scss/
├── base/
│   └── settinges.scss
├── components/
│   └── bouton.scss
├── layout/
│   └── header.scss
├── utils/
│   └── variables.scss
└── main.scss</code></pre>

			<h3>📋 Bonnes pratiques</h3>
			<ul>
				<li>Nommer clairement ses variables et mixins</li>
				<li>Limiter la profondeur d’imbrication</li>
				<li>Modulariser avec <code>@import</code> ou <code>@use ==> ajout @use './settings' as *; </code></li>
			</ul>
		</div>
	</div>
	<ScrollRetour />
</template>
<script setup>
import ScrollRetour from '@/components/ScrollRetour.vue'

</script>
