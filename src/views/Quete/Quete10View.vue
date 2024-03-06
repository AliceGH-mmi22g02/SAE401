<template>
  <main>
    <h1>Quêtes Quête 10/10</h1>
    <h2> La dégradation et l'épuisement des sols </h2>
    <p>  Les pratiques agricoles intensives, l'utilisation excessive d'engrais et de pesticides, ainsi que la déforestation, mènent à l'érosion des sols, diminuant leur fertilité et leur capacité à soutenir la vie végétale et à stocker le carbone. </p>
    <input type="radio" id="choix1" name="choix" value="choix1">
    <label for="choix1">choix1</label><br>
    <input type="radio" id="choix2" name="choix" value="choix2">
    <label for="choix2">choix2</label><br>
    <input type="radio" id="choix3" name="choix" value="choix3">
    <label for="choix3">choix3</label><br>
    <input type="radio" id="choix4" name="choix" value="choix4">
    <label for="choix4">choix4</label><br>
    <RouterLink to="/">
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
