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

    <!-- fin presentation ------------------ -->

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
                    affiches, brochures ou encore chartes graphiques complètes. Chaque
                    projet est pensé pour refléter votre identité avec soin et
                    créativité.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/internet.png" alt="logo graphique" />
                </div>
                <h3>Sites web & boutiques en ligne</h3>
                <p>
                    Je développe des sites web clairs, esthétiques et faciles à
                    administrer — que ce soit pour présenter une activité, vendre en
                    ligne ou simplement se démarquer sur le web.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/seo.png" alt="logo graphique" />
                </div>
                <h3>Visibilité & référencement (SEO)</h3>
                <p>
                    Je vous aide à mieux apparaître sur Google et les moteurs de recherche
                    grâce à une optimisation naturelle de vos contenus et une structure
                    technique bien pensée.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/qualitative-research.png" alt="logo graphique" />
                </div>
                <h3>Réactivité & qualité</h3>
                <p>
                    Une fois le projet lancé, je travaille rapidement tout en gardant une
                    attention particulière à la qualité. L’objectif : un rendu
                    professionnel, dans les délais.
                </p>
            </div>

            <div class="propositionCard">
                <div class="propositionLogo">
                    <img src="/distance-mentoring.png" alt="logo graphique" />
                </div>
                <h3>Travail à distance, en toute simplicité</h3>
                <p>
                    La distance ne freine pas la collaboration : je m’appuie sur des
                    outils efficaces pour des échanges fluides, même à distance.
                </p>
            </div>
        </div>
    </section>
    <!-- fin proposition content ----------- -->

    <section class="tarifContainer" id="tarifs">
        <h2>TARIFS</h2>
        <div class="tarifContent">
            <Tarifs />
        </div>
    </section>
    <!-- fin tarif ------------------------- -->

    <section class="portfolioContainer" id="portfolio">
        <h2>PORTFOLIO</h2>
        <div class="porfolioContent">
            <PortfolioCard />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PortfolioCard from '@/components/PortfolioCard.vue';
import Tarifs from '@/components/Tarifs.vue';

const matrixCanvas = ref(null);

onMounted(() => {
    const canvas = matrixCanvas.value;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    const codeWords = [
        '<html>', '<body>', '<div>', '<section>', '<header>', '<footer>', '<script>',
        'const', 'let', 'function', 'return', 'if', 'else', 'for', 'while',
        'document.querySelector', 'window.addEventListener', 'Math.random()',
        'console.log', 'import', 'export', 'props', 'data', 'setup', 'methods',
        '</html>', '</body>', '</div>', '</section>', '</script>'
];

const particles = [];
const maxParticles = 300;
const particlesPerFrame = 2;
const targetPoints = [];

// Draw "LH Digital" in black on a temp canvas
const tempCanvas = document.createElement('canvas');
tempCanvas.width = width;
tempCanvas.height = height;
const tempCtx = tempCanvas.getContext('2d');
tempCtx.font = 'bold 60px monospace';
tempCtx.textAlign = 'center';
tempCtx.textBaseline = 'middle';
tempCtx.fillStyle = '#000';
tempCtx.fillText('LH Digital', width / 2, height / 2);

const imageData = tempCtx.getImageData(0, 0, width, height);
for (let y = 0; y < height; y +=4) { for (let x=0; x < width; x +=4) { const index=(y * width + x) * 4; if
    (imageData.data[index + 3]> 128) {
    targetPoints.push({ x, y });
    }
    }
    }

    function getSyntaxColor(word) {
    if (word.startsWith('<') && word.endsWith('>')) return 'rgba(215, 58, 73, 0.4)'; // red tags
        if (['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while'].includes(word)) return 'rgba(0,
        92, 197, 0.4)'; // blue keywords
        if (word.includes('.')) return 'rgba(111, 66, 193, 0.4)'; // purple methods
        return 'rgba(36, 41, 46, 0.4)'; // dark gray default
        }

        function createParticle() {
        const startX = Math.random() * width;
        const startY = Math.random() * height;
        const target = targetPoints[Math.floor(Math.random() * targetPoints.length)];
        return {
        x: startX,
        y: startY,
        targetX: target.x,
        targetY: target.y,
        word: codeWords[Math.floor(Math.random() * codeWords.length)],
        life: 1,
        fontSize: 12 + Math.random() * 10
        };
        }

        function animate() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < particlesPerFrame; i++) { if (particles.length < maxParticles) {
            particles.push(createParticle()); } } for (const p of particles) { const dx=p.targetX - p.x; const
            dy=p.targetY - p.y; p.x +=dx * 0.005; p.y +=dy * 0.005; ctx.fillStyle=getSyntaxColor(p.word);
            ctx.font=`${p.fontSize}px monospace`; ctx.fillText(p.word, p.x, p.y); if (Math.hypot(dx, dy) < 5) { p.life
            -=0.02; } if (p.life <=0) { const newP=createParticle(); p.x=newP.x; p.y=newP.y; p.targetX=newP.targetX;
            p.targetY=newP.targetY; p.word=newP.word; p.life=1; p.fontSize=newP.fontSize; } }
            requestAnimationFrame(animate); } requestAnimationFrame(animate); }); </script>