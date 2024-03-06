<template>
  <main>
    <h1>Quêtes Quête 1/10</h1>
    <h2>La lutte contre la déforestation</h2>
    <p>Les forêts sont les poumons de notre planète, mais elles sont coupées à un rythme alarmant pour faire place à l'agriculture et à l'urbanisation. La déforestation menace la biodiversité et accentue le changement climatique. Chaque année, des millions d'hectares de forêts disparaissent.</p>
    <!-- Options de réponse -->
    <input type="radio" id="choix1" name="choix" value="choix1">
    <label for="choix1">choix1</label><br>
    <input type="radio" id="choix2" name="choix" value="choix2">
    <label for="choix2">choix2</label><br>
    <input type="radio" id="choix3" name="choix" value="choix3">
    <label for="choix3">choix3</label><br>
    <input type="radio" id="choix4" name="choix" value="choix4">
    <label for="choix4">choix4</label><br>
    <RouterLink to="/quete2">
      <button @click="Envoyer">Envoyer</button>
    </RouterLink>
  </main>
</template>

<script setup>
const Envoyer = () => {
  const selectedChoix = document.querySelector('input[name="choix"]:checked').value;
  console.log('Votre choix est :', selectedChoix);
};
</script>
