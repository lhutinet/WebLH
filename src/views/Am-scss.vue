<template>
	<h1>🎨 Aide-mémoire SCSS</h1>
	<div class="columns">
		<div class="column">
			<h2>🔤 Variables</h2>
			<pre><code>$couleur-primaire: #3498db;
$taille-font: 16px;
body {
  font-size: $taille-font;
  color: $couleur-primaire;
}</code></pre>

			<h2>📦 Imbrication</h2>
			<pre><code>nav {
  ul {
    li {
      a {
        color: red;
      }
    }
  }
}</code></pre>

			<h2>🧠 Mixins</h2>
			<pre><code>@mixin centre {
  display: flex;
  justify-content: center;
  align-items: center;
}
.boite {
  @include centre;
}</code></pre>

			<h2>🔁 Boucles</h2>
			<pre><code>@for $i from 1 through 3 {
  .col-#{$i} {
    width: 100px * $i;
  }
}</code></pre>

			<h2>🔂 Conditions</h2>
			<pre><code>@if $theme == light {
  background: white;
} @else {
  background: black;
}</code></pre>
		</div>

		<div class="column">
			<h2>📚 Fonctions</h2>
			<pre><code>@function em($pixels, $base: 16) {
  @return #{$pixels / $base}em;
}
body {
  font-size: em(18);
}</code></pre>

			<h2>🧬 Héritage</h2>
			<pre><code>%bouton-base {
  padding: 10px;
  border-radius: 5px;
}
.bouton {
  @extend %bouton-base;
  background: blue;
}</code></pre>

			<h2>🛠️ Outils utiles</h2>
			<ul>
				<li><strong>Live Sass Compiler</strong> : extension VSCode</li>
				<li><strong>Dart Sass</strong> : compilateur officiel</li>
				<li><strong>stylelint</strong> : linter SCSS</li>
			</ul>

			<h2>📁 Organisation recommandée</h2>
			<pre><code>scss/
├── base/
│   └── reset.scss
├── components/
│   └── bouton.scss
├── layout/
│   └── header.scss
├── utils/
│   └── variables.scss
└── main.scss</code></pre>

			<h2>📋 Bonnes pratiques</h2>
			<ul>
				<li>Nommer clairement ses variables et mixins</li>
				<li>Limiter la profondeur d’imbrication</li>
				<li>Modulariser avec <code>@import</code> ou <code>@use</code></li>
			</ul>
		</div>
	</div>
</template>
