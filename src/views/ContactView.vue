<template>
  <div class="contact">
    <div class="contact-img">
    </div>
    <div class="contact-formulaire">
      <h1>Contact</h1>
      <div class="contact-formulaire-champ">
        <div class="nom-prenom">
          <div class="nom">
            <label for="nom">Nom</label>
            <input type="text" required>
          </div>
          <div class="prenom">
            <label for="prenom">Prénom</label>
            <input type="text" required>
          </div>
        </div>
      </div>
      <div class="contact-formulaire-champ">
        <label for="email">Email</label>
        <input type="email" required>
      </div>
      <div class="contact-formulaire-champ">
        <label for="message">Message</label>
        <input class="message" type="text" required>
      </div>
      <div class="contact-formulaire-envoyer">
        <button type="submit">Envoyer</button>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="scss">
@import "/public/css/scss_page/contact";
</style>
