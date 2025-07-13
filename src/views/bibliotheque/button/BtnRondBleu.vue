<template>
    <div class="btnCont tooltip ">
        <button class="btnRondBleu " @click="copyCode">CM
        </button><span class="tooltip-text">Btn Rond bleu</span>
    </div>
</template>

<script setup>
const codeToCopy = `
<body>
   <div class="btnRondBleu">Click Me!</div>
</body>

<style>
.btnRondBleu {
    position: relative;
    overflow: hidden;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 60%, #66d9ff, #007acc 80%);
    /* border: 6px solid #aaaaaa80; */
    border: none;
    box-shadow:
        0 0 2px 3px rgba(19, 19, 19, 0.753),
        0 0 4px 1px rgba(255, 255, 255, 0.753),
        0 0 0 10px rgba(187, 187, 187, 1),
        inset 0 10px 5px rgba(255, 255, 255, 0.6),
        inset 0 -5px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;

}

.btnRondBleu::after {
    content: "";
    position: absolute;
    top: 5%;
    left: 20%;
    width: 60%;
    height: 35%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transform: rotate(-20deg);
    filter: blur(4px);
    z-index: 0;
}

.btnRondBleu>* {
    position: relative;
    z-index: 1;
}

.btnRondBleu:hover {
    background: rgba(226, 1, 1, 0.642);
    width: 66px;
    height: 66px;

    box-shadow:
        0 0 2px 5px rgba(19, 19, 19, 0.753),
        0 0 4px 1px rgba(255, 255, 255, 0.753),
        0 0 0 12px rgba(187, 187, 187, 1),
        inset 0 10px 5px rgba(255, 255, 255, 0.6),
        inset 0 -5px 10px rgba(0, 0, 0, 0.1);
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
.btnRondBleu {
    position: relative;
    overflow: hidden;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 60%, #66d9ff, #007acc 80%);
    /* border: 6px solid #aaaaaa80; */
    border: none;
    box-shadow:
        0 0 2px 3px rgba(19, 19, 19, 0.753),
        0 0 4px 1px rgba(255, 255, 255, 0.753),
        0 0 0 10px rgba(187, 187, 187, 1),
        inset 0 10px 5px rgba(255, 255, 255, 0.6),
        inset 0 -5px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

}

.btnRondBleu::after {
    content: "";
    position: absolute;
    top: 5%;
    left: 20%;
    width: 60%;
    height: 35%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transform: rotate(-20deg);
    filter: blur(4px);
    z-index: 0;
}

.btnRondBleu>* {
    position: relative;
    z-index: 1;
}

.btnRondBleu:hover {
    background: radial-gradient(circle at 50% 60%, #ff6666, #cc0000 80%);
    width: 66px;
    height: 66px;

    box-shadow:
        0 0 2px 5px rgba(19, 19, 19, 0.753),
        0 0 4px 1px rgba(255, 255, 255, 0.753),
        0 0 0 12px rgba(187, 187, 187, 1),
        inset 0 10px 5px rgba(255, 255, 255, 0.6),
        inset 0 -5px 10px rgba(0, 0, 0, 0.1);

}
</style>
