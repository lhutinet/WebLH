<template>
    <div class="contactContainer">
        <h2>Contact</h2>
        <h3>Laurent Hutinet</h3>
        <div class="adressContent">
            <div class="coordContent">
                <div class="logoCoo"><img src="/appel.png" alt="telephone"></div>
                <p>
                    Tél : <a href="tel:+33662316823">06 62 31 68 23</a>
                </p>
            </div>

            <div class="coordContent">
                <div class="logoCoo"><img src="/e-mail.png" alt="mail"></div>
                <p>Email : <a href="mailto:contact@digitalh.fr">contact@digitalh.fr</a></p>
            </div>
            <div class="coordContent">
                <div class="logoCoo"><img src="/adresse-du-domicile.png" alt="adresse postale"></div>
                <p>3 grande rue</p>
                <p>38150 Roussillon</p>
            </div>

        </div>
        <div class="contactContent">


            <div class="coordonneesContent">
                <form name="contact" method="POST" data-netlify="true" @submit.prevent="submitForm">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="nom" placeholder=" nom" required />
                    <input type="text" name="prenom" placeholder=" prénom" required />
                    <input type="email" name="email" placeholder=" email" required />
                    <input type="tel" name="telephone" placeholder=" téléphone" required />
                    <textarea name="demande" placeholder="Votre demande" required></textarea>
                    <button type="submit">Envoyer</button>
                </form>



            </div>
            <div class="map-wrapper">
                <iframe class="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.3758545756065!2d4.811471304314831!3d45.372766769427834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5229bf7078ab5%3A0xe87af3ba43f65dfa!2s3%20Rue%20Grande!5e0!3m2!1sfr!2sfr!4v1750798385170!5m2!1sfr!2sfr"
                    style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    demande: ''
})

function submitForm(event) {
    const formEl = event.target;

    // Laisse Netlify soumettre normalement
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(formEl)).toString(),
    })
        .then(() => {
            alert("Merci pour votre message !");
            // Vide le formulaire
            formEl.reset();
        })
        .catch(() => alert("Une erreur est survenue."));

}

</script>
