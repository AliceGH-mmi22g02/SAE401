<template>
  <main>
    <h1>Quêtes Quête 2/10</h1>
    <h2>Les dangers des risques climatiques</h2>
    <p> Les changements dans la composition de l'atmosphère terrestre, dus principalement aux émissions de gaz à effet de serre résultant de l'activité humaine, ont modifié les modèles climatiques. Cela a entraîné une augmentation des phénomènes météorologiques extrêmes, tels que des tempêtes, des inondations et des canicules, mettant en péril les écosystèmes, les habitations, et la sécurité alimentaire.</p>
    <input type="radio" id="choix1" name="choix" value="choix1">
    <label for="choix1">choix1</label><br>
    <input type="radio" id="choix2" name="choix" value="choix2">
    <label for="choix2">choix2</label><br>
    <input type="radio" id="choix3" name="choix" value="choix3">
    <label for="choix3">choix3</label><br>
    <input type="radio" id="choix4" name="choix" value="choix4">
    <label for="choix4">choix4</label><br>
    <RouterLink to="/quete3">
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
