<template>
    <div class="MenuContent02">
        <div class="navigation tooltip ">
            <ul>
                <li class="list active ">
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="text">Home</span>

                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span class="text">Profile</span>

                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span class="text">Message</span>

                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="camera-outline"></ion-icon>
                        </span>
                        <span class="text">Photo</span>

                    </a>
                </li>
                <li class="list" @click="copyCode">
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span class="text">Copies</span>

                    </a>
                </li>
                <div class="indicator"></div>
            </ul>
            <span class="tooltip-text">BtnRond</span>
        </div>





    </div>

</template>






<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;

}



.MenuContent02 {
    --clr: #222327;
    width: 500px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--clr);
}

.navigation {
    width: 400px;
    height: 70px;
    background: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

}

.navigation ul {
    display: flex;
    width: 350px;
}

.navigation ul li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.navigation ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
}

.navigation ul li a .icon {

    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s ease;
    color: var(--clr);
}

.navigation ul li.active a .icon {

    transform: translateY(-32px);

}

.navigation ul li a .text {
    position: absolute;
    color: var(--clr);
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s ease;
    opacity: 0;
    transform: translateY(20px);
}

.navigation ul li.active a .text {

    opacity: 1;
    transform: translateY(10px);
}

.indicator {
    position: absolute;
    top: -50%;
    width: 60px;
    height: 60px;
    left: 25px;
    background: #29fd53;
    border-radius: 50%;
    border: 6px solid var(--clr);
    transition: 0.5s ease;
}

.indicator::before {
    content: "";
    position: absolute;
    top: 49%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0 -10px 0 0 var(--clr);

}

.indicator::after {
    content: "";
    position: absolute;
    top: 49%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0 -10px 0 0 var(--clr);

}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const list = document.querySelectorAll('.list')
    const indicator = document.querySelector('.indicator')

    function handleHover(event) {
        list.forEach(item => item.classList.remove('active'))
        const current = event.currentTarget
        current.classList.add('active')

        // Déplacement de l'indicateur
        const index = Array.from(list).indexOf(current)
        indicator.style.left = `${25 + index * 70}px`
    }

    list.forEach(item => {
        item.addEventListener('mouseover', handleHover)
    })
})

async function copyCode() {
    try {
        const response = await fetch('/bibliotheque/menu/MenuNav02.html')
        if (!response.ok) throw new Error('Fichier introuvable.')

        const text = await response.text()
        await navigator.clipboard.writeText(text)
        alert('Contenu copié avec succès !')
    } catch (err) {
        console.error(err)
        alert('Erreur lors de la copie : ' + err.message)
    }
}

// const copyCode = async () => {
//     try {
//         await navigator.clipboard.writeText(codeToCopy.trim());
//         alert('Code copié dans le presse-papiers !');
//     } catch (e) {
//         console.error(e);
//         alert('Erreur : ' + e.message);
//     }
// };

</script>
