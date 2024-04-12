<template>
  <main>
    <h1>Résultat</h1>
    <p>Votre score est : {{ score }}/40</p>

    <div v-if="score === 40">
      <p>Félicitations, vous venez de remporter les badges !</p>
      <RouterLink to="/Badges">Vos Badges</RouterLink>
    </div>

    <div v-else>
      <p>Courage, vous pouvez arriver à remporter les badge !</p>
    </div>
    <div v-if="score >= 4">
      <p>Vous avez gagné ces codes promo :</p>
    </div>

    <div v-for="(promo, index) in promos" :key="index">
      <div v-if="score >= promo.requiredScore">
        <p v-if="promo.code">{{ promo.code }}</p>
      </div>
      <div v-else>
        <p>Il vous manque {{ promo.requiredScore - score }} point(s) pour obtenir ce code promo. Soit un Score de : {{ promo.requiredScore }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import store from '../store.js';

const route = useRoute();
const score = store.state.score;

const promos = [
  { requiredScore: 4, code: generatePromoCode() },
  { requiredScore: 8, code: generatePromoCode() },
  { requiredScore: 12, code: generatePromoCode() },
  { requiredScore: 16, code: generatePromoCode() },
  { requiredScore: 20, code: generatePromoCode() },
  { requiredScore: 24, code: generatePromoCode() },
  { requiredScore: 28, code: generatePromoCode() },
  { requiredScore: 32, code: generatePromoCode() },
  { requiredScore: 36, code: generatePromoCode() },
  { requiredScore: 40, code: generatePromoCode() },
];

function generatePromoCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}
</script>

<style lang="scss">
@import "../assets/css/scss_page/resultat";
</style>
