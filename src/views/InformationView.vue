<template>
  <div>
    <section class="info1">
      <div>
        <h1>Conclusion</h1>
        <p>La lutte contre la déforestation est un défi majeur qui nous concerne tous. En adoptant des pratiques durables, en soutenant les initiatives de restauration et en sensibilisant votre entourage, nous pouvons inverser la tendance et protéger les forêts, joyaux précieux de notre planète.</p>
        <br>
        <p>Pour valider cette quête et tester vos connaissances, nous vous invitons à répondre au questionnaire suivant.</p>
      </div>
      <button @click="startQuestionnaire1">Commencer le questionnaire</button>
    </section>
    <section v-if="showQuestionnaire1 && currentQuestions && currentQuestions[currentQuestionIndex]">
      <div>
        <h1>{{ currentQuestions[currentQuestionIndex].title }}</h1>
        <p>{{ currentQuestions[currentQuestionIndex].description }}</p>
        <div v-for="(option, optionIndex) in currentQuestions[currentQuestionIndex].options" :key="optionIndex">
          <input type="radio" :id="`option-${optionIndex}`" :value="option" :name="`question-${currentQuestionIndex}`" v-model="selectedOption">
          <label :for="`option-${optionIndex}`">{{ option }}</label>
        </div>
        <button @click="envoyerScore" :disabled="!selectedOption">Envoyer</button>
      </div>
    </section>
    <section class="info2">
      <div>
        <h1>Conclusion</h1>
        <p>La lutte contre les risques climatiques est un enjeu majeur qui nécessite une action collective et des changements profonds dans notre manière de vivre et de consommer. En prenant des mesures pour réduire notre impact sur le climat et en nous préparant aux changements inévitables, nous pouvons protéger notre planète pour les générations futures.</p>
        <br>
        <p>Pour valider cette quête et tester vos connaissances, nous vous invitons à répondre au questionnaire suivant.</p>
      </div>
      <button @click="startQuestionnaire2">Commencer le questionnaire</button>
    </section>
    <section v-if="showQuestionnaire2 && currentQuestions && currentQuestions[currentQuestionIndex]">
      <div>
        <h1>{{ currentQuestions[currentQuestionIndex].title }}</h1>
        <p>{{ currentQuestions[currentQuestionIndex].description }}</p>
        <div v-for="(option, optionIndex) in currentQuestions[currentQuestionIndex].options" :key="optionIndex">
          <input type="radio" :id="`option-${optionIndex}`" :value="option" :name="`question-${currentQuestionIndex}`" v-model="selectedOption">
          <label :for="`option-${optionIndex}`">{{ option }}</label>
        </div>
        <button @click="envoyerScore" :disabled="!selectedOption">Envoyer</button>
      </div>
    </section>
    <section class="info3">
      <div class="partieinfo">
        <h1>Conclusion</h1>
        <p>Le réchauffement climatique est un défi majeur pour notre génération. Il exige une transformation profonde de nos modes de vie et de nos économies. En devenant un Pompier du climat, à travers des gestes quotidiens et des décisions éclairées, vous pouvez contribuer à la lutte contre le réchauffement climatique et œuvrer pour un avenir plus durable pour tous.</p>
        <br>
        <p>Pour valider cette quête et tester vos connaissances, nous vous invitons à répondre au questionnaire suivant.</p>
      </div>
      <button @click="startQuestionnaire3">Commencer le questionnaire</button>
    </section>
    <section v-if="showQuestionnaire3 && currentQuestions && currentQuestions[currentQuestionIndex]">
      <div>
        <h1>{{ currentQuestions[currentQuestionIndex].title }}</h1>
        <p>{{ currentQuestions[currentQuestionIndex].description }}</p>
        <div v-for="(option, optionIndex) in currentQuestions[currentQuestionIndex].options" :key="optionIndex">
          <input type="radio" :id="`option-${optionIndex}`" :value="option" :name="`question-${currentQuestionIndex}`" v-model="selectedOption">
          <label :for="`option-${optionIndex}`">{{ option }}</label>
        </div>
        <button @click="envoyerScore" :disabled="!selectedOption">Envoyer</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';
import { computed } from 'vue';

const router = useRouter();
const store = useStore();

let showQuestionnaire1 = ref(false);
let showQuestionnaire2 = ref(false);
let showQuestionnaire3 = ref(false);
let selectedOption = ref(null);
let currentQuestions = null;
let currentQuestionIndex = ref(0);
let currentQuestionSet = ref(null);

const questionsInfo1 = [
  {
    title: "Quête 1/10",
    description: "Description de la première question de la section 1.",
    options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    correctAnswer: "Réponse A"
  },
  {
    title: "Quête 2/10",
    description: "Description de la deuxième question de la section 1.",
    options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    correctAnswer: "Réponse A"
  },
  {
    title: "Quête 3/10",
    description: "Description de la troisième question de la section 1.",
    options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    correctAnswer: "Réponse A"
  },
  {
    title: "Quête 4/10",
    description: "Description de la quatrième question de la section 1.",
    options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    correctAnswer: "Réponse A"
  }
];

const questionsInfo2 = [
  {
    title: "Quête 5/10",
    description: "Description de la première question de la section 2.",
    options: ["Ecole", "Maison", "Bonjour", "Test"],
    correctAnswer: "Maison"
  },
  {
    title: "Quête 6/10",
    description: "Description de la deuxième question de la section 2.",
    options: ["Ecole", "Maison", "Bonjour", "Test"],
    correctAnswer: "Ecole"
  },
  {
    title: "Quête 7/10",
    description: "Description de la troisième question de la section 2.",
    options: ["Ecole", "Maison", "Bonjour", "Test"],
    correctAnswer: "Bonjour"
  },
  {
    title: "Quête 8/10",
    description: "Description de la quatrième question de la section 2.",
    options: ["Ecole", "Maison", "Bonjour", "Test"],
    correctAnswer: "Test"
  }
];

const questionsInfo3 = [
  {
    title: "Quête 9/10",
    description: "Description de la première question de la section 3.",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 1"
  },
  {
    title: "Quête 10/10",
    description: "Description de la deuxième question de la section 3.",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 2"
  },
  {
    title: "Quête 11/10",
    description: "Description de la troisième question de la section 3.",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 3"
  },
  {
    title: "Quête 12/10",
    description: "Description de la quatrième question de la section 3.",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 4"
  }
];
const currentQuestion = computed(() => getCurrentQuestion());

function getCurrentQuestion() {
  const sectionIndex = Math.floor(currentQuestionIndex.value / 4);
  const questionIndexInSection = currentQuestionIndex.value % 4;
  const questions = currentQuestionSet.value === 1 ? questionsInfo1 :
      currentQuestionSet.value === 2 ? questionsInfo2 :
          questionsInfo3;

  console.log('sectionIndex:', sectionIndex);
  console.log('questions:', questions);

  // Vérifier si la question actuelle existe dans la liste des questions
  if (Array.isArray(questions[sectionIndex]) && questionIndexInSection < questions[sectionIndex].length) {
    return questions[sectionIndex][questionIndexInSection];
  } else {
    return null;
  }
}


function envoyerScore() {
  const question = currentQuestion.value;

  // Récupérer les questions en fonction de currentQuestionSet
  let questions;

  switch (currentQuestionSet.value) {
    case 1:
      questions = questionsInfo1;
      break;
    case 2:
      questions = questionsInfo2;
      break;
    case 3:
      questions = questionsInfo3;
      break;
    default:
      console.error("currentQuestionSet.value n'est pas défini correctement.");
      return;
  }

  // Assurez-vous que la variable sectionIndex est correctement définie
  const sectionIndex = Math.floor(currentQuestionIndex.value / 4);
  console.log('sectionIndex:', sectionIndex);

  // Assurez-vous que currentQuestionIndex.value est correct
  console.log('currentQuestionIndex.value:', currentQuestionIndex.value);

  // Assurez-vous que currentQuestionSet.value est correct
  console.log('currentQuestionSet.value:', currentQuestionSet.value);

  // Vérifiez si questions[sectionIndex] est un tableau
  if (!Array.isArray(questions[sectionIndex])) {
    console.error('questions[sectionIndex] n\'est pas un tableau.');
  }

  // Vérifier si une réponse a été sélectionnée
  if (!selectedOption.value) {
    console.log("Aucune réponse sélectionnée.");
    return; // Sortir de la fonction si aucune réponse n'a été sélectionnée
  }

  // Vérifier si la réponse sélectionnée est correcte
  if (question && selectedOption.value === question.correctAnswer) {
    store.commit('updateScore', 1);
    console.log("Réponse correcte !");
  }

  // Passer à la question suivante ou à la section suivante
  if (question && currentQuestionIndex.value + 1 < questions[sectionIndex].length) {
    console.log("Passer à la question suivante dans la même section");
    currentQuestionIndex.value++; // Passer à la question suivante dans la même section
    selectedOption.value = null;
  } else if (sectionIndex + 1 < questions.length) {
    console.log("Passer à la première question de la section suivante");
    currentQuestionIndex.value = (sectionIndex + 1) * 4; // Passer à la première question de la section suivante
    selectedOption.value = null;
  } else {
    console.log("Toutes les questions ont été répondues, passer au résultat");
    router.push({ name: 'Resultat' }); // Si toutes les questions ont été répondues, passer au résultat
  }
}




function startQuestionnaire1() {
  showQuestionnaire1.value = true;
  showQuestionnaire2.value = false; // Réinitialiser les autres variables
  showQuestionnaire3.value = false;
  currentQuestionIndex.value = 0;
  currentQuestions = questionsInfo1; // Mettre à jour les questions actuelles avec les questions de la première section
  currentQuestionSet.value = 1;
}

function startQuestionnaire2() {
  showQuestionnaire1.value = false; // Réinitialiser les autres variables
  showQuestionnaire2.value = true;
  showQuestionnaire3.value = false;
  currentQuestionIndex.value = 0;
  currentQuestions = questionsInfo2; // Mettre à jour les questions actuelles avec les questions de la deuxième section
  currentQuestionSet.value = 2;
}

function startQuestionnaire3() {
  showQuestionnaire1.value = false; // Réinitialiser les autres variables
  showQuestionnaire2.value = false;
  showQuestionnaire3.value = true;
  currentQuestionIndex.value = 0;
  currentQuestions = questionsInfo3; // Mettre à jour les questions actuelles avec les questions de la troisième section
  currentQuestionSet.value = 3;
}


</script>

<style lang="scss">
@import "/public/css/scss_page/information";
</style>