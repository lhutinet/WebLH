<template>

    <nav>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/AmHTML">Aide HTML</router-link></li>
            <li><router-link to="/AmCss">Aide css</router-link></li>
            <li><router-link to="/Amscss">Aide scss</router-link></li>
            <li><router-link to="/Amjs">Aide javascript</router-link></li>
            <li><router-link to="/Amvue">Aide vue</router-link></li>
            <li><router-link to="/Amreact">Aide react</router-link></li>
            <li><router-link to="/Amgithub">Aide git hub</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/apropos">À propos</router-link></li>
        </ul>
    </nav>

</template>

<style scoped>
nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
}

nav a {
    text-decoration: none;
    color: #333;
}

nav a.router-link-exact-active {
    font-weight: bold;
    color: #6fd1a5;
}
</style>
