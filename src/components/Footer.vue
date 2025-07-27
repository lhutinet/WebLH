<template>



    <footer class="site-footer">
        <!-- Bouton pour réouvrir la bannière de cookies -->
        <button @click="showCookiePrefs" class="cookie-prefs-btn">
            Préférences cookies
        </button>

        <div class="footer-content">
            <div class="footer-logo">
                <img src="/logo-LH-ss-f.png" alt="Logo" />
                <p>© 2025 LH Digital</p>
            </div>



            <div class="footer-contact">
                <h4>Contact</h4>
                <p>Email : <a href="mailto:contact@digitalh.fr">contact@digitalh.fr</a></p>
                <p>Tél : 06 62 31 68 23</p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>Mentions légales |<a href="/confidentialite.html" target="_blank" rel=" noopener">Politique de
                    confidentialité</a> </p>
        </div>
    </footer>










</template>

<script setup>
function showCookiePrefs() {
    if (typeof window.showCookiePreferences === 'function') {
        window.showCookiePreferences();
    }
}
</script>

<style scoped>
.cookie-prefs-btn {

    margin-top: 1rem;
    background: none;
    border: none;
    color: #007bff48;
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.9rem;
}
</style>