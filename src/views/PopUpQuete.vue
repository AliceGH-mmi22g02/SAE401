<template>
  <div class="pop-up-quete">
    <div class="contenu-quete">
      <h1>{{ titre }}</h1>
      <h2>{{ description }}</h2>
      <p>{{ contenu }}</p>
      <h3>Objectif :</h3>
      <h3>Quête principale :</h3>
      <VCheckbox v-model="quetePrincipaleComplete">{{ quetePrincipale }}</VCheckbox>
      <h3>Quête secondaire :</h3>
      <VCheckbox v-model="queteSecondaireComplete">{{ queteSecondaire }}</VCheckbox>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  contenu: {
    type: String,
    required: true
  },
  objectifs: {
    type: Array,
    required: true
  },
  quetePrincipale: {
    type: String,
    required: true
  },
  queteSecondaire: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
@import "/public/css/scss_page/_popupquete";
</style>
