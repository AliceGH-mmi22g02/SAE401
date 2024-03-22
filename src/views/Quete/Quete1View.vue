<template>
  <div>
    // MISE EN PLACE DE V-IF AFIN DE POUVOIR AVOIR PLUSEIURS QUESTION
    // LE CURRENTQUESTION VA PERMETTRE DE RECUPERER LE TEXTE ET DE LE CHANGER A CHAQUE ENVOIE
    // LE SELECTEDOPTION VA PERMETTRE LE CHANGEMENT LORS DU CLICK DU BOUTON
    <div v-if="currentQuestion">
      <h1>{{ currentQuestion.title }}</h1>
      <p>{{ currentQuestion.description }}</p>
      <div v-for="(option, optionIndex) in currentQuestion.options" :key="optionIndex">
        <input type="radio" :id="`option-${optionIndex}`" :value="option" :name="`question-${currentQuestionIndex}`" v-model="selectedOption">
        <label :for="`option-${optionIndex}`">{{ option }}</label>
      </div>
      <button @click="envoyerScore" :disabled="!selectedOption">Envoyer</button>
    </div>
    <div v-else>
      <h1>Fin des questions</h1>
      <button @click="goToResult">Voir le résultat</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

const router = useRouter();
const store = useStore();


// MISE EN PLACE D'UN CONST QUESTIONS AFIN DE CONTENIR CHAQUE QUESTION
const questions = [
  {
    title: "Quête 1/10",
    description: "Description de la première question.",
    options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    correctAnswer: "Réponse A"
  },
  {
    title: "Quête 2/10",
    description: "Description de la deuxième question.",
    options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    correctAnswer: "Réponse B"
  },
  {
    title: "Quête 3/10",
    description: "Description de la troisième question.",
    options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    correctAnswer: "Réponse C"
  },

];

let currentQuestionIndex = ref(0); // VA PERMETTRE DE CHANGEZ DE QUESTION
let selectedOption = ref(null);

function envoyerScore() {
  const currentQuestion = questions[currentQuestionIndex.value];

  if (selectedOption.value === currentQuestion.correctAnswer) {
    store.commit('updateScore', 1); // PERMET D'EFFECTUER UN COMMIT SI LA REPONSE EST CORRECTE
  }

  if (currentQuestionIndex.value + 1 < questions.length) {
    currentQuestionIndex.value++; // PASSE A LA QUESTION SUIVANTE
    selectedOption.value = null; // REINTIALISE LA VALEUR POUR LA QUESTIONS (0)
  }
  else {
    goToResult(); // PERMET DE PASSER A LA PAGE RESULTAT
  }
}

function goToResult() {
  router.push({ name: 'Resultat' });
}

// PERMET D'OBTENIR LA QUESTION SELON LA QUETE EN COUR
const currentQuestion = computed(() => questions[currentQuestionIndex.value]);
</script>
