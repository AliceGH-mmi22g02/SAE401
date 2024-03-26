<template>
  <div>
    <div v-if="currentQuestionIndex === 0">
      <div class="titreinfo">
        <h1>La lutte contre la déforestation</h1>
      </div>
      <p>Véritables poumons de la planète, les forêts regorgent d'une vie foisonnante, abritant plus de la moitié des espèces terrestres connues et offrant à plus d'1,6 milliard d'habitants un abri et des ressources vitales. En tant que gardiens du climat, elles piègent 40% du carbone terrestre, luttant contre le réchauffement climatique. Mais cette précieuse ressource est menacée. La déforestation continue à un rythme effréné, fragilisant les écosystèmes et les populations qui en dépendent. Depuis des siècles, les forêts reculent pour laisser place à l'expansion humaine. Mais depuis les années 1970, ce phénomène s'est accéléré de manière alarmante. Chaque année, environ 15 millions d'hectares de forêt disparaissent, soit l'équivalent de la superficie de la Belgique. L'agriculture est le principal moteur de cette déforestation, avec l'expansion des cultures tropicales comme le soja et l'huile de palme. Les conséquences sont multiples et graves : perte de biodiversité, augmentation des émissions de gaz à effet de serre, et impact sur les populations locales qui dépendent des forêts pour leur survie. Entre 2004 et 2017, 43 millions d'hectares de forêt ont été perdus, un chiffre qui montre l'urgence d'agir pour freiner ce processus destructeur.</p>
      <div class="partieinfo">
        <h1>Causes</h1>
      </div>
      <div class="grid">
        <div class="grid-forme">
          <div class="grid-forme-fond">
          </div>
          <h3>Expansion agricole</h3>
          <p>- Réponse à la croissance des besoins alimentaires et à la production de biocarburants.<br> - Transformation des forêts en terres cultivables.</p>
        </div>
        <div class="grid-forme">
          <div class="grid-forme-fond">
          </div>
          <h3>Exploitation forestière</h3>
          <p>- Alimentée par la demande en bois et en papier. <br> - Destruction des arbres.</p>
        </div>
        <div class="grid-forme">
          <div class="grid-forme-fond">
          </div>
          <h3>Urbanisation et développement d'infrastructures</h3>
          <p>- Envahissement de l'espace forestier pour la croissance des villes et la construction de routes.<br> - Pression accrue sur les forêts.</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-forme">
          <div class="grid-forme-fond">
          </div>
          <h3>Exploitation minière</h3>
          <p>- Destruction des forêts pour extraire des ressources naturelles.</p>
        </div>
        <div class="grid-forme">
          <div class="grid-forme-fond">
          </div>
          <h3>Commerce illégal du bois</h3>
          <p>- Menace les efforts de conservation</p>
        </div>
        <div class="grid-forme">
          <div class="grid-forme-fond">
          </div>
          <h3>Plantations de palmiers à huile</h3>
          <p>- Remplacent les forêts tropicales, en particulier en Asie du Sud-Est. <br> - Exacerbent la perte de biodiversité et le changement climatique.</p>
        </div>
      </div>
      <div class="grid2">
        <div class="grid2-forme">
          <div class="grid2-forme-fond">
          </div>
          <h3>Facteurs aggravant</h3>
          <p>- Demande globale croissante en produits forestiers et agricoles.<br> - Urgence de développer des stratégies durables pour la gestion des forêts.</p>
        </div>
        <div class="grid2-forme">
          <div class="grid2-forme-fond">
          </div>
          <h3>Le Cercle vicieux</h3>
          <p>Destruction des forêts -> Affecte l'environnement et la biodiversité -> Fragilise les populations qui en dépendent -> Accentue la pression sur les ressources naturelles.</p>
        </div>
      </div>
      <div class="partieinfo">
        <h1>Conséquences</h1>
        <h3>Conséquences environnementales</h3>
      </div>
      <div class="grid">
        <div class="grid-forme">
          <div class="grid-forme-fond">
          </div>
          <h3>Perte de biodiversité</h3>
          <p>- Disparition d'espèces animales et végétales à un rythme alarmant.<br> - Destruction de l'habitat naturel de millions d'êtres vivants.<br> - Fragilisation de l'équilibre des écosystèmes.<br>- Destruction des forêts pour extraire des ressources naturelles.</p>
        </div>
        <div class="grid-forme">
          <div class="grid-forme-fond">
          </div>
          <h3>Changement climatique</h3>
          <p>- Exacerbation du réchauffement climatique.<br> - Destruction des arbres, qui absorbent le carbone et luttent contre l'accumulation de gaz à effet de serre.<br> - Libération de CO2 dans l'atmosphère.</p>
        </div>
        <div class="grid-forme">
          <div class="grid-forme-fond">
          </div>
          <h3>Perturbation du cycle de l'eau</h3>
          <p>- Dérégulation du débit des rivières.<br>- Augmentation des risques d'inondations et de sécheresses.<br>- Déstabilisation des ressources hydriques.<br> - Remplacent les forêts tropicales, en particulier en Asie du Sud-Est. <br> - Exacerbent la perte de biodiversité et le changement climatique.</p>
        </div>
      </div>
      <div class="partieinfo">
        <h3>Conséquences socio-économiques</h3>
      </div>
      <div class="grid2">
        <div class="grid2-forme">
          <div class="grid2-forme-fond">
          </div>
          <h3>Impact sur les populations locales</h3>
          <p>- Perte de ressources naturelles et de moyens de subsistance.<br>- Pauvreté et insécurité alimentaire accrues.</p>
        </div>
        <div class="grid2-forme">
          <div class="grid2-forme-fond">
          </div>
          <h3>Impact sur les industries</h3>
          <p>- Menace pour les industries dépendantes des ressources forestières (bois, papier, etc.).<br>- Perturbation des chaînes d'approvisionnement.<br>- Pertes économiques.</p>
        </div>
      </div>
      <div class="partieinfo">
        <h1>Conseil et Recommandation</h1>
        <p>La déforestation a des conséquences dévastatrices sur l'environnement et les sociétés. Il est crucial de prendre des mesures pour enrayer ce phénomène et protéger les forêts, qui sont des ressources vitales pour la planète.</p>
      </div>
      <div class="grid3">
        <div class="grid3-forme">
          <h3>Combattre la déforestation à la source : repenser l'agriculture</h3>
          <p>- Transition vers des pratiques agricoles durables.<br>- Freiner l'expansion des cultures intensives.<br>- Promouvoir l'agroforesterie.</p>
        </div>
        <div class="grid3-forme">
          <h3>Restaurer les écosystèmes forestiers, agir concrètement</h3>
          <p>- Soutenir les initiatives de reforestation et de restauration.<br>- Replanter des arbres et régénérer les sols.<br>- Améliorer les conditions de vie des populations locales.</p>
        </div>
        <div class="grid3-forme">
          <h3>Renforcer la gouvernance et la responsabilisation</h3>
          <p>- Renforcer la législation sur l'exploitation forestière.<br>- Combattre le commerce illégal du bois.<br>- Encourager l'utilisation de produits certifiés FSC.</p>
        </div>
      </div>
      <div class="grid3">
        <div class="grid3-forme">
          <h3>Agir au quotidien,  des gestes simples pour un impact collectif</h3>
          <p>- Réduire sa consommation de produits liés à la déforestation (huile de palme).<br>- Privilégier les produits certifiés durables.<br>- Soutenir les initiatives de reforestation.</p>
        </div>
        <div class="grid3-forme">
          <h3>Adopter un mode de vie durable</h3>
          <p>- Réduire, réutiliser et recycler.<br>- Opter pour des plantes natives dans son jardin.</p>
        </div>
        <div class="grid3-forme">
          <h3>Sensibiliser et mobiliser pour un avenir durable</h3>
          <p>- Informer et sensibiliser le public sur l'importance des forêts.<br>- Partager ses connaissances et encourager son entourage à agir.</p>
        </div>
      </div>
      <div class="partieinfo">
        <h1>Conclusion</h1>
        <p>La lutte contre la déforestation est un défi majeur qui nous concerne tous. En adoptant des pratiques durables, en soutenant les initiatives de restauration et en sensibilisant votre entourage, nous pouvons inverser la tendance et protéger les forêts, joyaux précieux de notre planète.</p>
        <br>
        <p>Pour valider cette quête et tester vos connaissances, nous vous invitons à répondre au questionnaire suivant.</p>
      </div>
    </div>
    <div v-else-if="currentQuestionIndex === 1">
      <h1>TEST2</h1>
    </div>
    <div v-else-if="currentQuestionIndex === 2">
      <h1>TEST3</h1>
    </div>
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

let currentQuestionIndex = ref(0);
let selectedOption = ref(null);

function envoyerScore() {
  const currentQuestion = questions[currentQuestionIndex.value];

  if (selectedOption.value === currentQuestion.correctAnswer) {
    store.commit('updateScore', 1);
  }

  if (currentQuestionIndex.value + 1 < questions.length) {
    currentQuestionIndex.value++;
    selectedOption.value = null;
  }
  else {
    goToResult();
  }
}

function goToResult() {
  router.push({ name: 'Resultat' });
}

const currentQuestion = computed(() => questions[currentQuestionIndex.value]);
</script>
<style lang="scss">
@import "/public/css/scss_page/information";
</style>
