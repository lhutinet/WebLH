<template>
    <div class="menuContent">
        <div class="menu">
            <div>
                <input type="radio" id="menu" name="menu">
                <label for="menu-1">
                    <ion-icon name="chatbubbles"></ion-icon><span>Message</span>
                </label>
                <input type="radio" id="menu" name="menu">
                <label for="menu-2">
                    <ion-icon name="images"></ion-icon><span>Images</span>
                </label>
                <input type="radio" id="menu" name="menu">
                <label for="menu-3"><ion-icon name="settings"></ion-icon><span>Settings</span>
                </label>

            </div>
        </div>
    </div>

</template>



<style>
:root {
    --operator: +;
    --brightness: 20%;
    --circle: hsl(0, 0%, var(--brightness));
    --text: hsl(0, 0%, calc((var(--brightness) (var(--operator) 15%))));
    --icon-inactive: hsl(0, 0%, calc((var(--brightness) (var(--operator) 20%))));
    --icon-active: hsl(0, 0%, calc((var(--brightness) (var(--operator) 60%))));
    --main-background: hsl(0, 0%, calc((var(--brightness) (var(--operator) 15%))));
    --background: hsl(0, 0%, calc((var(--brightness) (var(--operator) 15%))));
    --shadow: rgba(0, 0, 0, 0.3)
}

.menuContent {
    min-height: 100vh;
    font-family: Roboto, Arial;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--main-background);
    overflow-y: hidden;
    overflow-x: hidden;

}

.menu {
    border-radius: 12px;
    background: var(--background);
    width: 300px;
}
</style>


<!-- <script>
a copier dans la page html dans le head 
    < script type = "module" src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" ></>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</script> -->