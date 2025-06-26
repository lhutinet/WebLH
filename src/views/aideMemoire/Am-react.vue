<template>
  <h1>⚛️ Aide-mémoire React</h1>
  <div class="columns">
    <div class="column">
      <h3>⚙️ Installation</h3>
      <pre><code>npx create-react-app mon-app
cd mon-app
npm start</code></pre>

      <h3>📦 Structure d’un composant</h3>
      <pre><code>function Bonjour(props) {
  return &lt;h1&gt;Bonjour, {props.nom}!&lt;/h1&gt;
}

export default Bonjour</code></pre>

      <h3>🔁 useState</h3>
      <pre><code>import { useState } from 'react'
const [compteur, setCompteur] = useState(0)
setCompteur(compteur + 1)</code></pre>

      <h3>🎯 JSX</h3>
      <ul>
        <li>Un seul élément parent</li>
        <li><code>className</code> au lieu de <code>class</code></li>
        <li>Utiliser <code>{ }</code> pour insérer du JS</li>
        <li>Les événements : <code>onClick</code>, <code>onChange</code></li>
      </ul>

      <h3>🧠 Props</h3>
      <pre><code>function Salut({ nom }) {
  return &lt;p&gt;Salut {nom}!&lt;/p&gt;
}</code></pre>

      <h3>🔄 useEffect</h3>
      <pre><code>import { useEffect } from 'react'
useEffect(() => {
  console.log("Composant monté")
  return () => console.log("Composant démonté")
}, [])</code></pre>
    </div>

    <div class="column">
      <h3>🧩 Composants imbriqués</h3>
      <pre><code>function App() {
  return &lt;Bienvenue nom="Jean" /&gt;
}</code></pre>

      <h3>🧲 useMemo & useCallback</h3>
      <pre><code>const valeurMemo = useMemo(() => calculLourd(x), [x])
const memoCallback = useCallback(() => faireAction(), [])</code></pre>

      <h3>📋 Formulaires</h3>
      <pre><code>const [texte, setTexte] = useState("")
&lt;input value={texte} onChange={e => setTexte(e.target.value)} /&gt;</code></pre>

      <h3>🧰 Outils utiles</h3>
      <ul>
        <li><strong>React Developer Tools</strong> : debug</li>
        <li><strong>Vite</strong>, <strong>CRA</strong> : scaffolding</li>
        <li><strong>React Router</strong> : navigation SPA</li>
        <li><strong>Redux / Zustand</strong> : gestion d’état</li>
      </ul>

      <h3>🛠️ Fonctions React</h3>
      <table>
        <thead>
          <tr>
            <th>Hook</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>useState</td>
            <td>État local</td>
          </tr>
          <tr>
            <td>useEffect</td>
            <td>Effets secondaires</td>
          </tr>
          <tr>
            <td>useMemo</td>
            <td>Mémoïsation</td>
          </tr>
          <tr>
            <td>useCallback</td>
            <td>Fonction mémoïsée</td>
          </tr>
          <tr>
            <td>useRef</td>
            <td>Référence persistante</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
