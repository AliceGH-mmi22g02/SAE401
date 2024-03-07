<template>
  <main>
    <h1>Quêtes Quête 5/10</h1>
    <h2> Surconsommation des ressources naturelles </h2>
    <p>  L'exploitation excessive des ressources naturelles dépasse la capacité de régénération de la Terre, menant à l'épuisement des matières premières essentielles et à des dommages environnementaux.</p>
    <input type="radio" id="choix1" name="choix" value="choix1" @change="updateChoix('choix1')">
    <label for="choix1">choix1</label><br>
    <input type="radio" id="choix2" name="choix" value="choix2" @change="updateChoix('choix2')">
    <label for="choix2">choix2</label><br>
    <input type="radio" id="choix3" name="choix" value="choix3" @change="updateChoix('choix3')">
    <label for="choix3">choix3</label><br>
    <input type="radio" id="choix4" name="choix" value="choix4" @change="updateChoix('choix4')">
    <label for="choix4">choix4</label><br>
    <RouterLink :to="nextRoute">
      <button @click="envoyerScore(choixUtilisateur)">Envoyer</button>
    </RouterLink>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

// DEFINISEMENT DE LA ROUTE POUR LA PROCHAINE PAGE
const nextRoute = '/quete6';

// CETTE VARIABLE EST UTILISER POUR STOCKER LE CHOIX DE L'UTILISATEUR
let choixUtilisateur = '';

// FONCTION POUR METTRE A JOUR LE CHOIX DE L'UTILISATEUR
async function updateChoix(choix) {
  choixUtilisateur = choix;
}

// FONCTION POUR CALCULER LE SCORE SELON LA REPONSE
function calculateScore(choixUtilisateur) {
  const bonneReponse = 'choix1'; // INDIQUATION DE LE BONNE REPONSE

  // CONDITION POUR VALIDER LA REPONSE
  if (choixUtilisateur === bonneReponse) {
    return 1; // SI REPONSE CORRECTE = 1
  } else {
    return 0; // SINON = 0
  }
}

// FONCTION POUR ENVOYER LE SCORE
function envoyerScore(choixUtilisateur) {
  // CONST POUR CONFIRMER LA QUÊTE ET CALCULER LE SCORE
  const scoreQuete5 = calculateScore(choixUtilisateur);

  // MISE EN PLACE D'UN COMMIT POUR METTRE A JOUR LE SCORE SUR LE LOCAL VUEX
  store.commit('updateScore', scoreQuete5);

  // REMPLACER LE ROUTEUR LING POUR NAVIQUER VERS LA QUETE SUIVANTE ET CONSERVER LE SCORE
  router.push({ name: 'Quete6', query: { score: scoreQuete5 } });
}
</script>
