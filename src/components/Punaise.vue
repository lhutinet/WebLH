<template>
    <div class="punaise">
        <div class="tete"></div>
        <div class="corps"></div>
        <div class="pointe"></div>
    </div>
</template>
<style scoped>
.punaise {
    width: 40px;
    height: 100px;
    transform: rotate(25deg) scale(0.4);
    transform-origin: top center;
    filter: drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.3));
    position: absolute;
    right: -5px;
    top: -20px;
    z-index: 10;

    &:hover .tete,
    &:hover .corps {
        background: radial-gradient(circle at 30% 30%, #ff694f56, #d4550059);

    }


}

/* Tête bombée */
.tete {
    width: 45px;
    height: 25px;
    background: radial-gradient(circle at 30% 30%, #ffec4f, #d4af00);
    border-radius: 50% 50% 40% 40%;
    box-shadow: inset -2px -2px 3px rgba(0, 0, 0, 0.2);
    z-index: 2;
    position: relative;


}

/* Corps cylindrique + effet 3D */
.corps {
    width: 18px;
    height: 45px;
    background: linear-gradient(to bottom, #ffe100, #d4af00);
    margin: -5px auto 0;
    border-radius: 50px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
}

/* Pointe en métal */
.pointe {
    width: 4px;
    height: 30px;
    background: linear-gradient(to bottom, #666, #ccc);
    margin: -6px auto 0;
    border-radius: 2px;
    position: relative;
    z-index: 0;
    box-shadow: 20px -1px 50px 20px rgba(0, 0, 0, 0.199);
}
</style>