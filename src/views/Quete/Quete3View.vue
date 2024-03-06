<template>
  <main>
    <h1>Quêtes Quête 3/10</h1>
    <h2>Les causes du réchauffement climatique</h2>
    <p> L'accumulation de gaz à effet de serre dans l'atmosphère, principalement due à la consommation des combustibles fossiles, augmentant la température globale de la Terre. Cette hausse cause des changements climatiques dangereux.</p>
    <input type="radio" id="choix1" name="choix" value="choix1">
    <label for="choix1">choix1</label><br>
    <input type="radio" id="choix2" name="choix" value="choix2">
    <label for="choix2">choix2</label><br>
    <input type="radio" id="choix3" name="choix" value="choix3">
    <label for="choix3">choix3</label><br>
    <input type="radio" id="choix4" name="choix" value="choix4">
    <label for="choix4">choix4</label><br>
    <RouterLink to="/quete4">
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
