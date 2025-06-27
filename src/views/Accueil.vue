<template>
    <section class="accContainer">
        <canvas ref="matrixCanvas" class="matrixCanvas"></canvas>
        <div class="accContent">
            <h1 id="accTitre">
                <img src="/logo-LH-ss-f.png" alt="logo" class="logoImg" />
                Digital
            </h1>
            <h3 id="accText">Conception de sites internet</h3>
            <p>
                <a href="#prestations">prestations</a>
                <a href="#tarifs">tarifs</a>
                <a href="#portfolio">portfolio</a>
            </p>
        </div>
    </section>

    <section class="propositionContainer" id="prestations">
        <h2>Mes prestations</h2>
        <div class="propositionContent">
            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/logo.png" alt="logo graphique" />
                </div>
                <h3>Création graphique sur mesure</h3>
                <p>
                    Je conçois des visuels uniques et personnalisés : logos, flyers,
                    affiches, brochures ou encore chartes graphiques complètes.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/internet.png" alt="logo graphique" />
                </div>
                <h3>Sites web & boutiques en ligne</h3>
                <p>
                    Je développe des sites web clairs, esthétiques et faciles à
                    administrer.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/seo.png" alt="logo graphique" />
                </div>
                <h3>Visibilité & référencement (SEO)</h3>
                <p>
                    Je vous aide à mieux apparaître sur Google grâce à une optimisation naturelle.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/qualitative-research.png" alt="logo graphique" />
                </div>
                <h3>Réactivité & qualité</h3>
                <p>
                    Une fois le projet lancé, je travaille rapidement tout en gardant une
                    attention particulière à la qualité.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/distance-mentoring.png" alt="logo graphique" />
                </div>
                <h3>Travail à distance, en toute simplicité</h3>
                <p>
                    La distance ne freine pas la collaboration : je m’appuie sur des
                    outils efficaces pour des échanges fluides.
                </p>
            </div>
        </div>
    </section>

    <section class="tarifContainer" id="tarifs">
        <h2>TARIFS</h2>
        <div class="tarifContent">
            <Tarifs />
        </div>
    </section>

    <section class="portfolioContainer" id="portfolio">
        <h2>PORTFOLIO</h2>
        <div class="portfolioContent">
            <PortfolioCard />
        </div>
    </section>
</template>

<!-- -------------------------------------------------------------
----------------------fin template----------------------------
----------------------------------------------------------- -->
<script setup>
import { ref, onMounted } from 'vue';
import PortfolioCard from '@/components/PortfolioCard.vue';
import Tarifs from '@/components/Tarifs.vue';

const matrixCanvas = ref(null);

// === ✅ PARAMÈTRES MODIFIABLES ===
// Tu peux tout personnaliser ici.
const CONFIG = {
    backgroundColor: 'rgba(231, 321, 231, 0.151)',     // Couleur de fond du canvas (blanc de base)

    trailOpacity: 0.5,              // Opacité du "voile" de traînée (0 = pas de traînée, 1 = opaque)

    syntaxColors: {                 // Couleurs par type de mot
        tag: 'rgba(215, 58, 73, 0.2)',      // balises HTML
        keyword: 'rgba(0, 92, 197, 0.2)',   // mots-clés JS
        method: 'rgba(111, 66, 193, 0.2)',  // méthodes et propriétés
        default: 'rgba(36, 41, 46, 0.2)',   // autres
    },

    overlayText: 'LH Digital',      // Mot ou phrase à dessiner
    overlayFont: 'bold 60px monospace',  // Style pour le calque de points cibles

    fontFamily: 'monospace',        // Police pour les particules
    minFontSize: 6,                // Taille minimale des mots
    maxFontSize: 22,                // Taille maximale des mots

    moveSpeed: 0.001,               // Vitesse d’approche des particules vers la cible
    particlesPerFrame: 1,           // Nombre de particules créées par frame
    maxParticleLife: 50           // Durée de vie max (en frames) avant suppression forcée
};

// === ✅ LISTE DES MOTS AFFICHÉS
const codeWords = [
    '<html>', '<body>', '<div>', '<section>', '<header>', '<footer>',
    'const', 'let', 'function', 'return', 'if', 'else', 'for', 'while',
    'document.querySelector', 'window.addEventListener', 'Math.random()',
    'console.log', 'import', 'export', 'props', 'data', 'setup', 'methods',
    '</html>', '</body>', '</div>', '</section>'
];

// === ✅ SCRIPT PRINCIPAL
onMounted(() => {
    const canvas = matrixCanvas.value;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    const particles = [];
    const targetPoints = [];

    // === ✅ Génération des cibles pour "LH Digital"
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.font = CONFIG.overlayFont;
    tempCtx.textAlign = 'center';
    tempCtx.textBaseline = 'middle';
    tempCtx.fillStyle = '#000';
    tempCtx.fillText(CONFIG.overlayText, width / 2, height / 2);

    const imageData = tempCtx.getImageData(0, 0, width, height);
    for (let y = 0; y < height; y += 4) {
        for (let x = 0; x < width; x += 4) {
            const index = (y * width + x) * 4;
            if (imageData.data[index + 3] > 128) {
                targetPoints.push({ x, y });
            }
        }
    }

    function getSyntaxColor(word) {
        if (word.startsWith('<') && word.endsWith('>')) return CONFIG.syntaxColors.tag;
        if (['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while'].includes(word)) return CONFIG.syntaxColors.keyword;
        if (word.includes('.')) return CONFIG.syntaxColors.method;
        return CONFIG.syntaxColors.default;
    }

    function getRandomTarget() {
        return targetPoints[Math.floor(Math.random() * targetPoints.length)];
    }

    function createParticle() {
        const target = getRandomTarget();
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            targetX: target.x,
            targetY: target.y,
            word: codeWords[Math.floor(Math.random() * codeWords.length)],
            fontSize: CONFIG.minFontSize + Math.random() * (CONFIG.maxFontSize - CONFIG.minFontSize),
            life: CONFIG.maxParticleLife
        };
    }

    function animate() {
        // === ✅ Effet de traînée
        ctx.fillStyle = `rgba(231, 231, 231, ${CONFIG.trailOpacity})`;
        ctx.fillRect(0, 0, width, height);

        // Ajouter quelques nouvelles particules par frame
        for (let i = 0; i < CONFIG.particlesPerFrame; i++) {
            particles.push(createParticle());
        }

        // Dessiner et mettre à jour les particules
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];

            const dx = p.targetX - p.x;
            const dy = p.targetY - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 2 || p.life <= 0) {
                // ✅ SUPPRESSION
                particles.splice(i, 1);
                continue;
            }

            p.x += dx * CONFIG.moveSpeed;
            p.y += dy * CONFIG.moveSpeed;
            p.life--;

            ctx.fillStyle = getSyntaxColor(p.word);
            ctx.font = `${p.fontSize}px ${CONFIG.fontFamily}`;
            ctx.fillText(p.word, p.x, p.y);
        }

        requestAnimationFrame(animate);
    }

    // === ✅ PREMIER NETTOYAGE BLANC PUR
    ctx.fillStyle = CONFIG.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    requestAnimationFrame(animate);
});
</script>
