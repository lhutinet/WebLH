<template>
    <canvas ref="matrixCanvas" class="matrixCanvas"></canvas>

    <div class="accContent">

        <h1 id="accTitre">
            <img src="/logo-LH-ss-f.png" alt="logo" class="logoImg" />
            Digital
        </h1>
        <h3 id="accText">Conception de sites internet</h3>
        <p>
            <a href="#prestations">Prestations</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#portfolio">Portfolio</a>
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const matrixCanvas = ref(null);

// === ✅ PARAMÈTRES MODIFIABLES ===
const CONFIG = {
    backgroundColor: 'rgba(231, 321, 231, 0.151)',     // Couleur de fond du canvas

    trailOpacity: 0.5,              // Opacité du "voile" de traînée

    syntaxColors: {
        tag: 'rgba(215, 58, 73, 0.2)',
        keyword: 'rgba(0, 92, 197, 0.2)',
        method: 'rgba(111, 66, 193, 0.2)',
        default: 'rgba(36, 41, 46, 0.2)',
    },

    overlayText: 'LH Digital',
    overlayFont: 'bold 60px monospace',

    fontFamily: 'monospace',
    minFontSize: 6,
    maxFontSize: 22,

    moveSpeed: 0.5,             // valeur de base, sera ajustée
    particlesPerFrame: 0.01,
    maxParticleLife: 50
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

    // ✅ Ajustement de la vitesse selon la largeur
    const baseWidth = 1200;
    const speedFactor = width / baseWidth;
    CONFIG.moveSpeed = 0.001 * Math.max(0.7, speedFactor);
    CONFIG.maxParticleLife = Math.floor(50 * Math.min(1.5, 1 / speedFactor));
    // CONFIG.particlesPerFrame = 1 * (width / baseWidth);


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

            if (dist < 0.02 || p.life <= 0) {
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
