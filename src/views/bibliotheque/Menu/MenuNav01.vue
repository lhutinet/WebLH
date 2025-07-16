<template>
    <div class="menu1Content">
        <div class="menu tooltip">
            <div>
                <input type="radio" id="menu-1" name="menu" checked>
                <label for="menu-1">
                    <ion-icon name="chatbubbles"></ion-icon>
                    <span>Message</span>
                </label>
                <input type="radio" id="menu-2" name="menu">
                <label for="menu-2">
                    <ion-icon name="images"></ion-icon>
                    <span>Images</span>
                </label>
                <input class="tooltip" type="radio" id="menu-3" name="menu">
                <label for="menu-3" @click="copyCode">
                    <ion-icon name="settings"></ion-icon>
                    <span>Settings</span>
                </label>

                <span class="highlight"></span>
            </div>

            <span class="tooltip-text">BtnRond</span>
        </div>
    </div>
</template>
<script setup>
const codeToCopy = `
<body>
     <div class="menu1Content">
        <div class="menu">
            <div>
                <input type="radio" id="menu-1" name="menu" checked>
                <label for="menu-1">
                    <ion-icon name="chatbubbles"></ion-icon>
                    <span>Message</span>
                </label>
                <input type="radio" id="menu-2" name="menu">
                <label for="menu-2">
                    <ion-icon name="images"></ion-icon>
                    <span>Images</span>
                </label>
                <input type="radio" id="menu-3" name="menu">
                <label for="menu-3">
                    <ion-icon name="settings"></ion-icon>
                    <span>Settings</span>
                </label>
                <span class="highlight"></span>
            </div>
        </div>
    </div>
</body>

<style >
.menu1Content {
    min-height: 200px;
    width: 400px;
    font-family: Roboto, Arial;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
}

.menu {
    border-radius: 12px;
    background: #bebebe;
    width: 300px;
    height: 64px;
    padding: 0 12px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.295);
    outline: 5px rgb(206, 206, 206) solid;
}

.menu>div {
    display: flex;
    height: 100%;
    position: relative;
}

.menu>div label {
    flex: 0 0 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    z-index: 1;
}

.menu>div label ion-icon {
    width: 30px;
    height: 30px;
    margin: auto;
    color: #8f8f8f;
    transform-origin: 50% 50%;
}

.menu>div label span {
    font-size: 10px;
    font-weight: 500;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 0;
    opacity: 0;
    color: rgb(46, 46, 46);
    transform-origin: 50% 0;
    transition: transform 0.9s cubic-bezier(0.6, 0.64, 0.48, 1.12), opacity 0.7s ease, color 0.7s ease;
    transform: translateY(var(--y)) scale(var(--s));
}

.menu>div input {
    display: none;
}

.menu>div .highlight {
    --x: 0;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 33.33%;
    transition: transform 0.7s cubic-bezier(1, -0.58, 0.43, 1.23);
    transform: translateX(var(--x));
}

.menu>div .highlight::after {
    content: "";
    width: 55px;
    height: 55px;
    display: block;
    background: rgb(53, 53, 53);
    position: absolute;
    left: 44%;
    top: 0;
    box-shadow: 0 2px 8px rgba(44, 44, 44, 0.295);
    margin: -20px 0 0 -22px;
    border-radius: 50%;
}

.menu>div input:nth-of-type(1):checked+label+input+label+input+label+.highlight {
    --x: 0;
}

.menu>div input:nth-of-type(2):checked+label+input+label+.highlight {
    --x: 100%;
}

.menu>div input:nth-of-type(3):checked+label+.highlight {
    --x: 200%;
}

.menu>div input:checked+label ion-icon {
    --y: -24px;
    --s: 1;
    color: rgb(228, 228, 228);
}


.menu>div label ion-icon {
    transition: transform 0.9s cubic-bezier(0.6, 0.64, 0.48, 1.12), opacity 0.7s ease, color 0.7s ease;
    transform: translateY(var(--y, 0)) scale(var(--s, 1));
}

.menu>div>input:checked+label span {
    --s: 1;
    --y: -14px;
    opacity: 1;
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
.menu1Content {
    min-height: 200px;
    width: 400px;
    font-family: Roboto, Arial;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
    background: red;
}

.menu {
    border-radius: 12px;
    background: #bebebe;
    width: 300px;
    height: 64px;
    padding: 0 12px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.295);
    outline: 5px rgb(206, 206, 206) solid;
}

.menu>div {
    display: flex;
    height: 100%;
    position: relative;
}

.menu>div label {
    flex: 0 0 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    z-index: 1;
}

.menu>div label ion-icon {
    width: 30px;
    height: 30px;
    margin: auto;
    color: #8f8f8f;
    transform-origin: 50% 50%;
}

.menu>div label span {
    font-size: 10px;
    font-weight: 500;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 0;
    opacity: 0;
    color: rgb(46, 46, 46);
    transform-origin: 50% 0;
    transition: transform 0.9s cubic-bezier(0.6, 0.64, 0.48, 1.12), opacity 0.7s ease, color 0.7s ease;
    transform: translateY(var(--y)) scale(var(--s));
}

.menu>div input {
    display: none;
}

.menu>div .highlight {
    --x: 0;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 33.33%;
    transition: transform 0.7s cubic-bezier(1, -0.58, 0.43, 1.23);
    transform: translateX(var(--x));
}

.menu>div .highlight::after {
    content: "";
    width: 55px;
    height: 55px;
    display: block;
    background: rgb(53, 53, 53);
    position: absolute;
    left: 44%;
    top: 0;
    box-shadow: 0 2px 8px rgba(44, 44, 44, 0.295);
    margin: -20px 0 0 -22px;
    border-radius: 50%;
}

.menu>div input:nth-of-type(1):checked+label+input+label+input+label+.highlight {
    --x: 0;
}

.menu>div input:nth-of-type(2):checked+label+input+label+.highlight {
    --x: 100%;
}

.menu>div input:nth-of-type(3):checked+label+.highlight {
    --x: 200%;
}

.menu>div input:checked+label ion-icon {
    --y: -24px;
    --s: 1;
    color: rgb(228, 228, 228);
}


.menu>div label ion-icon {
    transition: transform 0.9s cubic-bezier(0.6, 0.64, 0.48, 1.12), opacity 0.7s ease, color 0.7s ease;
    transform: translateY(var(--y, 0)) scale(var(--s, 1));
}

.menu>div>input:checked+label span {
    --s: 1;
    --y: -14px;
    opacity: 1;
}
</style>
