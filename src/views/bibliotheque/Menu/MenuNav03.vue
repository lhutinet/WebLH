<!-- https://youtu.be/ErYsUPYowkI?si=2UEQKio48txNjH4I&t=440 -->

<template>
    <div class="MenuContent03">
        <div class="menu open">
            <button class="action_btn">
                <ion-icon name="share-outline"></ion-icon>
            </button>
            <ul>
                <li style="--i:1; --color:var(--fb-color)">
                    <a href=" #">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li style="--i:1; --color:var(--instagram-color)">
                    <a href=" #">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
                <li style="--i:1; --color:var(--twitter-color)">
                    <a href=" #">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>
                <li style="--i:1 ;--color:var(--linkedin-color)">
                    <a href=" #">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li style="--i:1 ;--color:var(--google-color)">
                    <a href=" #">
                        <ion-icon name="logo-google"></ion-icon>
                    </a>
                </li>
                <li style="--i:1; --color:var(--youtube-color)">
                    <a href=" #">
                        <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                </li>
            </ul>
        </div>


    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

.MenuContent03 {
    width: 500px;
    height: 500px;
    border: 0.5px solid black;
    --bue-color: #4158d0;
    --pink-color: #c850c0;
    --yellow-color: #ffcc70;
    --fb-color: #4267b2;
    --insta-color: #d62976;
    --twiter-color: #1da1f2;
    --linkedin-color: #0077b7;
    --google-color: #f4b400;
    --youtube-color: #ff0000;
    background-color: var(--bue-color);
    background-image: linear-gradient(45deg, var(--bue-color), var(--pink-color), var(--yellow-color));
    display: flex;
    align-items: center;
    justify-content: center;


}

.menu {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #fff; */
}

.menu .action_btn {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.);
    transition: transform 1.2s scale 0.2s ease;
    z-index: 1;
}

.menu .action_btn:hover {

    transform: scale(1.05) rotate(360deg);

}

.menu .action_btn:active {
    transform: scale(0.95) rotate(360deg);
}

.menu.open .action_btn {
    transform: rotate(360deg);
    box-shadow: 0 0 0 2px var(--pink-color), 0 0 0 10px #fff;
}


.menu li {
    list-style: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.menu li a {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.);


}

.menu li:hover a {
    font-size: 2.2rem;
    transition: font-size 0.2s ease;
}
</style>