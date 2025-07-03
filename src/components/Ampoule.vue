<template>
    <div class="light">
        <div class="wire"></div>
        <div class="bulb"><span></span> <span></span></div>
        <div class="switch">
            <div class="btnA" @click="toggleLight"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const isOn = ref(false)

function toggleLight() {
    isOn.value = !isOn.value
}

watch(isOn, (newVal) => {
    if (newVal) {
        document.body.classList.add('on')
    } else {
        document.body.classList.remove('on')
    }
})
</script>

<style scoped>
.light {
    height: 200px;
    width: 400px;
    margin-top: 100px;
    background: #727272;
    position: relative;
    z-index: 1000;


    .bulb {
        position: relative;
        transform: translateX(160px);
        width: 80px;
        height: 80px;
        background: #444;
        border-radius: 50%;
        z-index: 2;

        &::before {
            content: "";
            position: absolute;
            width: 35px;
            height: 80px;
            background: #444;
            left: 22.5px;
            top: -50px;
            border-top: 30px solid #000;
            border-radius: 10px;
        }

        span:nth-child(1) {
            position: absolute;
            top: -16px;
            left: -4px;
            display: block;
            width: 30px;
            height: 30px;
            background: transparent;
            transform: rotate(341deg);
            border-bottom-right-radius: 40px;
            box-shadow: 20px 20px 0 10px #444;
        }

        span:nth-child(2) {
            position: absolute;
            top: -16px;
            right: -4px;
            display: block;
            width: 30px;
            height: 30px;
            background: transparent;
            transform: rotate(17deg);
            border-bottom-left-radius: 40px;
            box-shadow: -20px 20px 0 10px #444;
        }
    }

    .wire {
        position: absolute;
        left: calc(50% - 2px);
        top: -200px;
        width: 4px;
        height: 20vh;
        background: #000;
        z-index: 1;
    }

    .switch {
        position: absolute;
        top: 0px;
        right: 50px;
        width: 80px;
        height: 80px;
        background: linear-gradient(#eee, #ccc, #eee);
        border: 3px solid #000;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .btnA {
            position: relative;
            width: 25px;
            height: 40px;
            background: linear-gradient(#777, #fff, #777);
            border-radius: 6px;
            border: 2px solid #000;
            cursor: pointer;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 85%;
                background: linear-gradient(#fff, #fff);
                border-radius: 4px;
            }
        }
    }
}
</style>

<style>
body.on {
    background: radial-gradient(#555, #111);
    /* Ajoute ici les styles d'éclairage que tu souhaites sur le body */
}
</style>
