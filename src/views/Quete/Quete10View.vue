<template>
  <main>
    <h1>Quêtes Quête 10/10</h1>
    <h2> La dégradation et l'épuisement des sols </h2>
    <p>  Les pratiques agricoles intensives, l'utilisation excessive d'engrais et de pesticides, ainsi que la déforestation, mènent à l'érosion des sols, diminuant leur fertilité et leur capacité à soutenir la vie végétale et à stocker le carbone. </p>
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
const nextRoute = '/Resultat';

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
  const scoreQuete10 = calculateScore(choixUtilisateur);

  // MISE EN PLACE D'UN COMMIT POUR METTRE A JOUR LE SCORE SUR LE LOCAL VUEX
  store.commit('updateScore', scoreQuete10);

  // REMPLACER LE ROUTEUR LING POUR NAVIQUER VERS LA QUETE SUIVANTE ET CONSERVER LE SCORE
  router.push({ name: 'Resultat', query: { score: scoreQuete10 } });
}
</script>
