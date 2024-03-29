<style lang="scss">
@import "public/css/scss_page/profile";
</style>
<template>
  <section>
    <h1>Profil de l'utilisateur</h1>
    <div>
      <p><span><strong>{{ utilisateur.pseudo }}</strong></span></p>
      <p><span>{{ utilisateur.prenom }} {{ utilisateur.nom }}</span></p>
    </div>
  </section>
  <div class="profil-view">
    <!-- Section du logo -->
    <div class="logo-section">
      <!-- Insérez ici le code pour le logo -->
    </div>

    <!-- Section du pseudo -->
    <div class="pseudo-section">
      <!-- Insérez ici le code pour le pseudo -->
      <span class="pseudo">{{ pseudo }}</span>
    </div>

    <div class="experience-section">
      <div class="experience-label">Expérience</div>
      <div class="experience-bar">
        <div class="progress-bar" :style="{ width: experienceWidth }"></div>
      </div>
      <div class="experience-level">Niveau {{ experienceLevel }}</div>
    </div>

    <!-- Zone des informations personnelles -->
    <div class="informations-section">
      <!-- Insérez ici le code pour les informations personnelles -->
      <div class="personal-info">
        <div class="info-item">
          <label for="lastName">Nom :</label>
          <input type="text" id="lastName" v-model="lastName" :disabled="!editing">
        </div>
        <div class="info-item">
          <label for="firstName">Prénom :</label>
          <input type="text" id="firstName" v-model="firstName" :disabled="!editing">
        </div>
        <div class="info-item">
          <label for="pseudo">Pseudo :</label>
          <input type="text" id="pseudo" v-model="pseudo" :disabled="!editing">
        </div>
        <div class="info-item">
          <label for="email">Email :</label>
          <input type="email" id="email" v-model="email" :disabled="!editing">
        </div>
        <div class="info-item">
          <label for="currentPassword">Mot de passe actuel :</label>
          <input type="password" id="currentPassword" v-model="currentPassword" :disabled="!editing">
        </div>
        <div class="info-item">
          <label for="newPassword">Nouveau mot de passe :</label>
          <input type="password" id="newPassword" v-model="newPassword" :disabled="!editing">
        </div>
      </div>
      <button class="edit-button" @click="toggleEditing">{{ editing ? 'Enregistrer' : 'Modifier' }}</button>
    </div>

    <!-- Section des récompenses -->
    <div class="rewards-section">
      <!-- Insérez ici le code pour les récompenses -->
      <h2>Vos récompenses</h2>
      <div class="rewards-container">
        <!-- Ajoutez ici les images de récompenses -->
      </div>
    </div>

    <!-- Section des badges -->
    <div class="badges-section">
      <!-- Insérez ici le code pour les badges -->
      <h2>Vos Badges</h2>
      <div class="badges-container">
        <!-- Ajoutez ici les images de badges -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { recupererUtilisateurs } from '../../indexedDB.js';

const utilisateur = ref({});
const editing = ref(false); // Variable pour indiquer si l'utilisateur est en train de modifier ses informations
let lastName = ref('');
let firstName = ref('');
let pseudo = ref('');
let email = ref('');
let currentPassword = ref('');
let newPassword = ref('');
let confirmNewPassword = ref('');

const toggleEditing = () => {
  if (editing.value) {
    // Enregistrer les modifications
    // Effectuer des actions de validation si nécessaire
    // Réinitialiser les champs de mot de passe
    currentPassword.value = '';
    newPassword.value = '';
    confirmNewPassword.value = '';
  }
  editing.value = !editing.value;
};

// Récupérer les informations de l'utilisateur
recupererUtilisateurs()
    .then((utilisateurs) => {
      // Utilisation du premier utilisateur (à modifier selon votre logique)
      utilisateur.value = utilisateurs[0];
      // Initialiser les champs avec les informations de l'utilisateur
      lastName.value = utilisateur.value.nom;
      firstName.value = utilisateur.value.prenom;
      pseudo.value = utilisateur.value.pseudo;
      email.value = utilisateur.value.email;
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des informations de l'utilisateur:", error);
    });

</script>
