<template>
    <div class="quete">
      <h1>Quêtes 1</h1>
      <h2>La lutte contre la déforestation</h2>
      <p>Les forêts sont les poumons de notre planète, mais elles sont coupées à un rythme alarmant pour faire place à l'agriculture et à l'urbanisation. La déforestation menace la biodiversité et accentue le changement climatique. Chaque année, des millions d'hectares de forêts disparaissent.</p>
    </div>
    <h3>Objectif :</h3>


    <h3>Quête principale :</h3>

    <div>
      <label>
        <input type="radio" name="questSelection" value="/Quete1" v-model="questRoute"> Quête 1
      </label>
    </div>
    <h3>Quête secondaire :</h3>
    <div>
      <label>
        <input type="radio" name="questSelection" value="/Information" v-model="questRoute"> Information
      </label>
    </div>
    <RouterLink :to="questRoute">Commencer la quête</RouterLink>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, watch } from 'vue';

  const router = useRouter();
  const questRoute = ref('');

  watch(questRoute, (newValue, oldValue) => {
    console.log('Quest route changed:', newValue);
  });
</script>
