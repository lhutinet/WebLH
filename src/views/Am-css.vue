<template>
	<h1>🎨 Aide-mémoire CSS</h1>
	<div class="columns">
		<div class="column">
			<h2>🔤 Sélecteurs de base</h2>
			<ul>
				<li>Sélecteur universel:<code>*</code></li>
				<li>Balise spécifique:<code>p</code></li>
				<li>Classe:<code>.classe</code></li>
				<li>ID:<code>#id</code></li>
				<li>Enfant direct:<code>div > p</code></li>
				<li>Descendant:<code>div p</code></li>
				<li>Frère immédiat:<code>p + span</code></li>
				<li>Frères généraux:<code>p ~ span</code></li>
			</ul>

			<h2>🎯 Propriétés essentielles</h2>
			<ul>
				<li><code>color</code><code>background</code></li>
				<li><code>font-size</code><code>font-weight</code></li>
				<li><code>padding</code><code>margin</code><code>border</code></li>
				<li><code>width</code><code>height</code></li>
				<li><code>display</code><code>position</code><code>z-index</code></li>
				<li>
					<code>overflow</code><code>visibility</code><code>opacity</code>
				</li>
			</ul>

			<h2>🧱 Box model</h2>
			<pre><code>div {
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
  box-sizing: border-box;
}</code></pre>

			<h2>📦 Flexbox</h2>
			<pre><code>display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;</code></pre>
			<ul>
				<li><code>justify-content</code> : Alignement horizontal</li>
				<li><code>align-items</code> : Alignement vertical</li>
				<li><code>flex-wrap</code><code>gap</code></li>
			</ul>

			<h2>🔲 Grid</h2>
			<pre><code>display: grid;
grid-template-columns: 1fr 2fr;
gap: 10px;</code></pre>
			<ul>
				<li><code>grid-template-rows/columns</code></li>
				<li><code>grid-area</code><code>grid-column</code></li>
			</ul>
		</div>

		<div class="column">
			<h2>🖼️ Positionnement</h2>
			<pre><code>position: relative;
position: absolute;
top: 10px;
left: 50px;</code></pre>

			<h2>🌀 Transitions & animations</h2>
			<pre><code>transition: all 0.3s ease;

@keyframes glisse {
  from { left: 0; }
  to { left: 100px; }
}</code></pre>

			<h2>🔧 Responsive Design</h2>
			<pre><code>@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}</code></pre>
			<ul>
				<li>
					Utiliser des unités relatives : <code>em</code><code>rem</code>,
					<code>%</code>
				</li>
				<li>Grilles fluides + <code>media queries</code></li>
			</ul>

			<h2>🧩 Pseudo-classes & éléments</h2>
			<ul>
				<li>
					<code>:hover</code><code>:focus</code><code>:nth-child()</code>
				</li>
				<li><code>::before</code><code>::after</code></li>
			</ul>
			<pre><code>a::after {
  content: ' →';
  color: red;
}</code></pre>

			<h2>🛠️ Outils utiles</h2>
			<ul>
				<li><strong>CanIUse</strong> : compatibilité navigateurs</li>
				<li><strong>CSS Tricks</strong> : documentation claire</li>
				<li><strong>Autoprefixer</strong> : préfixes auto</li>
			</ul>

			<h2>📋 Bonnes pratiques</h2>
			<ul>
				<li>Utiliser un reset CSS (<code>normalize.css</code>)</li>
				<li>Modulariser avec BEM ou utilitaires</li>
				<li>Limiter la spécificité excessive</li>
			</ul>
		</div>
	</div>
</template>
