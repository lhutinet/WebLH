<template>
    <!-- Show banner if user hasn't made a choice or manually reopens -->
    <div v-if="showBanner" class="cookie-banner">
        <div class="cookie-content">
            <p>
                Ce site utilise Google Analytics pour améliorer l’expérience utilisateur.
                <a href="/confidentialite.html" target="_blank" rel="noopener">En savoir plus</a>
            </p>
            <div class="cookie-buttons">
                <button @click="acceptCookies">Accepter</button>
                <button @click="declineCookies">Refuser</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CookieConsent',
    data() {
        return {
            consentGiven: false,
            showBanner: false
        };
    },
    mounted() {
        const consent = this.getCookie('cookieConsent');
        // If no decision, show banner
        if (!consent) {
            this.showBanner = true;
        }
        // If accepted, load Analytics
        if (consent === 'accepted') {
            this.loadAnalytics();
            this.consentGiven = true;
        }
        if (consent === 'declined') {
            this.consentGiven = true;
        }
        // Expose method to reopen banner
        window.showCookiePreferences = this.openBanner;
    },
    methods: {
        acceptCookies() {
            this.setCookie('cookieConsent', 'accepted', 365);
            this.loadAnalytics();
            this.consentGiven = true;
            this.showBanner = false;
        },
        declineCookies() {
            this.setCookie('cookieConsent', 'declined', 365);
            this.consentGiven = true;
            this.showBanner = false;
        },
        openBanner() {
            this.showBanner = true;
        },
        setCookie(name, value, days) {
            const expires = new Date(Date.now() + days * 86400000).toUTCString();
            document.cookie = `${name}=${value}; expires=${expires}; path=/`;
        },
        getCookie(name) {
            return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
        },
        loadAnalytics() {
            if (this._analyticsLoaded) return;
            const script = document.createElement('script');
            script.src = "https://www.googletagmanager.com/gtag/js?id=G-1HHVF5ZPZ0"; // <-- Remplace par ton ID
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-1HHVF5ZPZ0', { anonymize_ip: true }); // <-- Encore ton ID ici

            this._analyticsLoaded = true;
        }
    }
};
</script>

<style scoped>
.cookie-banner {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #222;
    color: white;
    padding: 1rem;
    z-index: 9999;
}

.cookie-content {
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.cookie-buttons button {
    margin-left: 1rem;
    background: #0af;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;
}

.cookie-buttons button:last-child {
    background: #555;
}
</style>
