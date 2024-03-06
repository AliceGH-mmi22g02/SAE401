<template>
  <main>
    <h1>Quêtes Quête 6/10</h1>
    <h2> La crise de la pollution</h2>
    <p>  La contamination de l'air, de l'eau, et du sol par des substances toxiques affecte gravement la santé humaine, dégrade les écosystèmes et réduit la biodiversité.</p>
    <input type="radio" id="choix1" name="choix" value="choix1">
    <label for="choix1">choix1</label><br>
    <input type="radio" id="choix2" name="choix" value="choix2">
    <label for="choix2">choix2</label><br>
    <input type="radio" id="choix3" name="choix" value="choix3">
    <label for="choix3">choix3</label><br>
    <input type="radio" id="choix4" name="choix" value="choix4">
    <label for="choix4">choix4</label><br>
    <RouterLink to="/quete7">
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
