<template>
  <div>
    <h1>Profil de l'utilisateur</h1>
    <div>
      <p><strong>Nom:</strong> <span>{{ utilisateur.nom }}</span></p>
      <p><strong>Prénom:</strong> <span>{{ utilisateur.prenom }}</span></p>
      <p><strong>Pseudo:</strong> <span>{{ utilisateur.pseudo }}</span></p>
      <p><strong>Email:</strong> <span>{{ utilisateur.email }}</span></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { recupererUtilisateurs } from '../../indexedDB.js';

const utilisateur = ref({}); //UTILISATION DES REF COMME REFERENCE AU INFO

onMounted(() => {
  recupererUtilisateurs() //RECUPARATION DES DONNEE UTILISATEUR
      .then(utilisateurs => {
        // UTILISATION DU PREMIER ID(SI VOUS UNE MEILLEUR IDDEZ N'ESHITEZ PAS
        utilisateur.value = utilisateurs[0];
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des informations de l'utilisateur:", error);
      });
});
</script>
