<template>
	<h1>🐙 Aide-mémoire Git & GitHub</h1>
	<div class="columns">
		<div class="column">
			<h3>⚙️ Configuration initiale</h3>
			<pre><code>git config --global user.name "Votre Nom"
git config --global user.email "email@example.com"
</code></pre>

			<h3>📁 Créer un dépôt</h3>
			<pre><code>git init
# ou cloner un dépôt
git clone https://github.com/nom/repo.git</code></pre>

			<h3>📦 Suivi des fichiers</h3>
			<pre><code>git status
# ajouter au suivi
git add .
# valider les modifications
git commit -m "Message"</code></pre>

			<h3>🔄 Historique</h3>
			<pre><code>git log
# version condensée
git log --oneline --graph</code></pre>

			<h3>🪄 Ignorer des fichiers</h3>
			<pre><code>.gitignore
node_modules/
.env</code></pre>

			<h3>🧪 Annuler</h3>
			<pre><code>git restore nom_fichier
# ou tout annuler (pas commité)
git reset --hard</code></pre>
		</div>

		<div class="column">
			<h3>🌍 Travailler avec GitHub</h3>
			<pre><code>git remote add origin https://github.com/nom/repo.git
git push -u origin main</code></pre>

			<h3>🚀 Synchronisation</h3>
			<pre><code>git pull origin main
# ou envoyer les commits
git push</code></pre>

			<h3>🌱 Branches</h3>
			<pre><code>git branch ma-branche
# se déplacer
git checkout ma-branche
# créer + switcher
git checkout -b nouvelle-branche</code></pre>

			<h3>🔀 Fusion & conflits</h3>
			<pre><code>git merge nom-branche
# en cas de conflit, éditer puis :
git add fichier_conflit
# puis :
git commit</code></pre>

			<h3>📋 Commandes utiles</h3>
			<table>
				<thead>
					<tr>
						<th>Commande</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>git stash</td>
						<td>Met de côté les modifs</td>
					</tr>
					<tr>
						<td>git diff</td>
						<td>Voir les changements</td>
					</tr>
					<tr>
						<td>git tag</td>
						<td>Créer un tag version</td>
					</tr>
					<tr>
						<td>git reflog</td>
						<td>Historique avancé</td>
					</tr>
				</tbody>
			</table>


			<h3>🛠️ Outils utiles</h3>
			<ul>
				<li><strong>GitHub Desktop</strong> : interface graphique</li>
				<li><strong>GitKraken</strong> : gestion visuelle</li>
				<li><strong>VS Code Git</strong> : intégré à l’éditeur</li>
				<li><strong>Actions GitHub</strong> : CI/CD automatisé</li>
			</ul>
		</div>
	</div>
</template>
