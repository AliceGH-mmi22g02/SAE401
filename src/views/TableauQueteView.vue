<script setup>
import { useRouter } from 'vue-router';

import { ref, watch } from 'vue';
import PopUpQuete from './PopUpQuete.vue'

const router = useRouter();
const quetes = {
  1: {
    titre: "Quête 1",
    description: "La lutte contre la déforestation",
    contenu: "Les forêts sont les poumons de notre planète, mais elles sont coupées à un rythme alarmant pour faire place à l'agriculture et à l'urbanisation. La déforestation menace la biodiversité et accentue le changement climatique. Chaque année, des millions d'hectares de forêts disparaissent.",
    objectifs: ["Objectif 1", "Objectif 2", "Objectif 3"],
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },
  2: {
    titre: "Quête 2",
    description: "Ceci est la description de la quête 2",
    contenu: "Ceci est le contenu de la quête 2.",
    objectifs: ["Objectif 1", "Objectif 2"],
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },

  3: {
    titre: "Quête 3",
    description: "Ceci est la description de la quête 2",
    contenu: "Ceci est le contenu de la quête 2.",
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },

  4: {
    titre: "Quête 4",
    description: "Ceci est la description de la quête 2",
    contenu: "Ceci est le contenu de la quête 2.",
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },

  5: {
    titre: "Quête 5",
    description: "Ceci est la description de la quête 2",
    contenu: "Ceci est le contenu de la quête 2.",
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },

  6: {
    titre: "Quête 6",
    description: "Ceci est la description de la quête 2",
    contenu: "Ceci est le contenu de la quête 2.",
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },

  7: {
    titre: "Quête 7",
    description: "Ceci est la description de la quête 2",
    contenu: "Ceci est le contenu de la quête 2.",
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },

  8: {
    titre: "Quête 8",
    description: "Ceci est la description de la quête 2",
    contenu: "Ceci est le contenu de la quête 2.",
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },

  9: {
    titre: "Quête 9",
    description: "Ceci est la description de la quête 2",
    contenu: "Ceci est le contenu de la quête 2.",
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },

  10: {
    titre: "Quête 10",
    description: "Ceci est la description de la quête 2",
    contenu: "Ceci est le contenu de la quête 2.",
    quetePrincipale: "Ceci est la quête principale",
    queteSecondaire: "Ceci est la quête secondaire"
  },

};

const isPopUpVisible = ref(false);
const selectedQuete = ref(null);

const handleClick = (image) => {
  const idQuete = image.dataset.quete;
  selectedQuete.value = quetes[idQuete];
  isPopUpVisible.value = true;
};

watch(selectedQuete, () => {
  // Code à exécuter lorsque la quête sélectionnée change
});

</script>

<template>
  <main>
    <img src="/src/assets/tableau_quete2.png" class="tableau" alt="Logo">
    <img class="quete1" src="/src/assets/quete1.png" alt="Quête 1" data-quete="1" @click="handleClick">
    <img class="quete2" src="/src/assets/quete2.png" alt="Quête 2" data-quete="2" @click="handleClick">
    <img class="quete3" src="/src/assets/quete3.png" alt="Quête 3" data-quete="3" @click="handleClick">
    <img class="quete4" src="/src/assets/quete4.png" alt="Quête 4" data-quete="4" @click="handleClick">
    <img class="quete5" src="/src/assets/quete5.png" alt="Quête 5" data-quete="5" @click="handleClick">
    <img class="quete6" src="/src/assets/quete6.png" alt="Quête 6" data-quete="6" @click="handleClick">
    <img class="quete7" src="/src/assets/quete7.png" alt="Quête 7" data-quete="7" @click="handleClick">
    <img class="quete8" src="/src/assets/quete8.png" alt="Quête 8" data-quete="8" @click="handleClick">
    <img class="quete9" src="/src/assets/quete9.png" alt="Quête 9" data-quete="9" @click="handleClick">
    <img class="quete10" src="/src/assets/quete10.png" alt="Quête 10" data-quete="10">
    <PopUpQuete v-if="isPopUpVisible" :titre="quete.titre" :description="quete.description" :contenu="quete.contenu" :objectifs="quete.objectifs" :quetePrincipale="quete.quetePrincipale" :queteSecondaire="quete.queteSecondaire"></PopUpQuete>
  </main>
</template>

<style scoped lang="scss">
@import "/public/css/scss_page/tableauquete";
</style>