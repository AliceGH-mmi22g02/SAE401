<template>
  <main>
    <h1>Quêtes Quête 4/10</h1>
    <h2>L’augmentation du nombre d’espèces en voie de disparition</h2>
    <p> La perte d'habitat, la chasse excessive, la pollution, et le changement climatique contribuent à l'extinction accélérée de nombreuses espèces animales et végétales.</p>
    <input type="radio" id="choix1" name="choix" value="choix1">
    <label for="choix1">choix1</label><br>
    <input type="radio" id="choix2" name="choix" value="choix2">
    <label for="choix2">choix2</label><br>
    <input type="radio" id="choix3" name="choix" value="choix3">
    <label for="choix3">choix3</label><br>
    <input type="radio" id="choix4" name="choix" value="choix4">
    <label for="choix4">choix4</label><br>
    <RouterLink to="/quete5">
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
