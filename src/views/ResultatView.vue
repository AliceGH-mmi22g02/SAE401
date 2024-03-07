<template>
  <main>
    <h1>Résultat</h1>
    <p>Votre score est : {{ score }}/10</p>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import store from '../store.js';

const route = useRoute();

// RECUPERATION DU SCORE A PARTIR DU VUEX( STORAGE)
const score = store.state.score;

// RECUPRERATION DU SCORE A PARTIR DE LA ROUTE
// const score = route.query.score;

console.log('Score récupéré depuis le store Vuex :', score); // CONSOLE POUR AFFICHER EN CAS DE BUG
</script>