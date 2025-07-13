<template>
    <div class="btnCont tooltip ">
        <button class="buttonBarre " @click="copyCode"> Copie moi!
        </button><span class="tooltip-text">Btn barre curve</span>
    </div>



</template>

<script setup>
const codeToCopy = `
<body>
   <div class="buttonBarre">Click Me!</div>
</body>

<style>
.buttonBarre {
    background-color: #f0f0f0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 0.5px solid rgba(128, 128, 128, 0.241);
    text-shadow:
        0px 0px 6px rgba(43, 43, 43, 0.338),
        0px 0px 12px rgb(231, 231, 231);
    color: rgba(78, 78, 78, 0.725);
    min-width: 180px;
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow:
        /* Ombres extérieures pour l'effet flottant */
        6px 6px 6px 2px rgba(0, 0, 0, 0.3),
        6px 12px 6px 2px rgba(0, 0, 0, 0.4),
        -6px -6px 12px 2px rgba(255, 255, 255, 0.6),
        -6px -12px 12px 2px rgba(255, 255, 255, 0.8),
        inset 2px 4px 4px 2px rgba(0, 0, 0, 0.4),
        inset 2px 10px 10px 2px rgba(0, 0, 0, 0.1),
        inset -2px -4px 8px 2px rgba(255, 255, 255, 0.7),
        inset -2px -2px 4px 2px rgba(255, 255, 255, 0.8);
}

.buttonBarre:hover {
    color: rgba(0, 0, 0, 0.642);
    box-shadow:
        6px 6px 6px 2px rgba(0, 0, 0, 0.3),
        6px 12px 6px 2px rgba(0, 0, 0, 0.4),
        -6px -6px 12px 2px rgba(255, 255, 255, 0.6),
        -6px -12px 12px 2px rgba(255, 255, 255, 0.8),
        inset 2px 4px 2px 2px rgba(0, 0, 0, 0.4),
        inset 2px 4px 0px 2px rgba(0, 0, 0, 0.1),
        inset -2px -4px 8px 2px rgba(255, 255, 255, 0.7),
        inset -2px -2px 4px 2px rgba(255, 255, 255, 0.8);

    transform: translate(1px, 2px);
}
</style>
`;

const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(codeToCopy.trim());
        alert('Code copié dans le presse-papiers !');
    } catch (e) {
        console.error(e);
        alert('Erreur : ' + e.message);
    }
};
</script>

<style scoped>
/* ----------------a copier ----------------- */
.buttonBarre {
    background-color: #f0f0f0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 0.5px solid rgba(128, 128, 128, 0.241);
    text-shadow:
        0px 0px 6px rgba(43, 43, 43, 0.338),
        0px 0px 12px rgb(231, 231, 231);
    color: rgba(78, 78, 78, 0.725);
    min-width: 180px;
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow:
        /* Ombres extérieures pour l'effet flottant */
        6px 6px 6px 2px rgba(0, 0, 0, 0.3),
        6px 12px 6px 2px rgba(0, 0, 0, 0.4),
        -6px -6px 12px 2px rgba(255, 255, 255, 0.6),
        -6px -12px 12px 2px rgba(255, 255, 255, 0.8),
        inset 2px 4px 4px 2px rgba(0, 0, 0, 0.4),
        inset 2px 10px 10px 2px rgba(0, 0, 0, 0.1),
        inset -2px -4px 8px 2px rgba(255, 255, 255, 0.7),
        inset -2px -2px 4px 2px rgba(255, 255, 255, 0.8);
}

.buttonBarre:hover {
    color: rgba(0, 0, 0, 0.642);
    box-shadow:
        6px 6px 6px 2px rgba(0, 0, 0, 0.3),
        6px 12px 6px 2px rgba(0, 0, 0, 0.4),
        -6px -6px 12px 2px rgba(255, 255, 255, 0.6),
        -6px -12px 12px 2px rgba(255, 255, 255, 0.8),
        inset 2px 4px 2px 2px rgba(0, 0, 0, 0.4),
        inset 2px 4px 0px 2px rgba(0, 0, 0, 0.1),
        inset -2px -4px 8px 2px rgba(255, 255, 255, 0.7),
        inset -2px -2px 4px 2px rgba(255, 255, 255, 0.8);

    transform: translate(1px, 2px);
}

/* ----------fin a copier--------------- */
</style>
