<template>

    <nav>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/AmHTML">aide HTML</router-link></li>
            <li><router-link to="/AmCss">aide css</router-link></li>
            <li><router-link to="/Amscss">aide scss</router-link></li>
            <li><router-link to="/Amjs">aide javascript</router-link></li>
            <li><router-link to="/Amvue">aide vue</router-link></li>
            <li><router-link to="/Amreact">aide react</router-link></li>
            <li><router-link to="/Amgithub">aide git hub</router-link></li>
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
