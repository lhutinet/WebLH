<template>
  <h1>📜 Aide-mémoire JavaScript</h1>
  <div class="columns">
    <div class="column">
      <h2>🌤️ Bases & syntaxe</h2>
      <ul>
        <li>déclarations: <code>let</code> <code>const</code> <code>var</code></li>
        <li>
          <code>function nom(param) { ... }</code> ou
          <code>const f = () => {}</code>
        </li>
        <li>
          Types : <code>string</code> <code>number</code> <code>boolean</code> <code>null</code>
          <code>undefined</code> <code>object</code> <code>array</code>
        </li>
        <li>Commentaires : <code>//</code> et <code>/* ... */</code></li>
      </ul>

      <h2>⚙️ Contrôle de flux</h2>
      <pre><code>if (condition) {
  // code
} else if (autreCondition) {
  // code
} else {
  // code
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (condition) {
  // code
}</code></pre>

      <h2>🧹 Fonctions</h2>
      <pre><code>function addition(a, b) {
  return a + b;
}

const mult = (a, b) => a * b;</code></pre>
      <ul>
        <li>Arguments par défaut : <code>function f(x=5) {}</code></li>
        <li>Fonctions anonymes, callbacks</li>
      </ul>

      <h2>📆 Objets & tableaux</h2>
      <pre><code>const obj = { nom: 'Alice', age: 25 };
const arr = [1, 2, 3];

console.log(obj.nom);
console.log(arr[0]);</code></pre>
      <ul>
        <li>Destructuration : <code>const {nom} = obj;</code></li>
        <li>
          Méthodes tableaux : <code>map</code> <code>filter</code>
          <code>reduce</code>
        </li>
      </ul>
    </div>

    <div class="column">
      <h2>🔄 Asynchronicité</h2>
      <pre><code>async function fetchData() {
  const response = await fetch('url');
  const data = await response.json();
  return data;
}</code></pre>
      <ul>
        <li><code>Promises</code> et <code>async/await</code></li>
        <li><code>.then()</code> et <code>.catch()</code></li>
      </ul>

      <h2>🧠 Manipulation DOM</h2>
      <pre><code>const el = document.getElementById('monId');
el.textContent = 'Hello';

const btn = document.querySelector('button');
btn.addEventListener('click', () => alert('clic !'));</code></pre>

      <h2>⚠️ Gestion d'erreurs</h2>
      <pre><code>try {
  // code potentiellement risqué
} catch (e) {
  console.error(e);
} finally {
  // toujours exécuté
}</code></pre>

      <h2>🎯 ES6+ fonctionnalités</h2>
      <ul>
        <li>Template literals : <code>`Bonjour ${nom}`</code></li>
        <li>Spread/rest : <code>...array</code></li>
        <li>Modules : <code>import/export</code></li>
        <li>Classes : <code>class MaClasse {}</code></li>
      </ul>

      <h2>🛠️ Outils utiles</h2>
      <ul>
        <li><strong>MDN Web Docs</strong> : documentation officielle</li>
        <li><strong>ESLint</strong> : linter JS</li>
        <li><strong>Prettier</strong> : formatteur de code</li>
      </ul>

      <h2>📋 Bonnes pratiques</h2>
      <ul>
        <li>Utiliser <code>const</code> par défaut, <code>let</code> si modifiable</li>
        <li>Ne pas polluer l’espace global</li>
        <li>Éviter les callbacks imbriqués (favoriser Promises)</li>
        <li>Commenter clairement</li>
      </ul>



      <ul>
        <li>Modulaire : export/import ES6</li>
        <li>Création dynamique du DOM</li>
        <li>Facile à intégrer dans une SPA ou un site statique</li>
      </ul>
    </div>
  </div>
</template>
