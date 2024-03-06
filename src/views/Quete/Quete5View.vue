<template>
  <main>
    <h1>Quêtes Quête 5/10</h1>
    <h2> Surconsommation des ressources naturelles </h2>
    <p>  L'exploitation excessive des ressources naturelles dépasse la capacité de régénération de la Terre, menant à l'épuisement des matières premières essentielles et à des dommages environnementaux.</p>
    <input type="radio" id="choix1" name="choix" value="choix1">
    <label for="choix1">choix1</label><br>
    <input type="radio" id="choix2" name="choix" value="choix2">
    <label for="choix2">choix2</label><br>
    <input type="radio" id="choix3" name="choix" value="choix3">
    <label for="choix3">choix3</label><br>
    <input type="radio" id="choix4" name="choix" value="choix4">
    <label for="choix4">choix4</label><br>
    <RouterLink to="/quete6">
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
