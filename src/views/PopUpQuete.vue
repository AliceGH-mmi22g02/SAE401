<template>
  <div class="pop-up-quete">
    <div class="contenu-quete">
      <h1>{{ quete.titre }}</h1>
      <h2>{{ quete.description }}</h2>
      <p>{{ quete.contenu }}</p>
      <h3>Objectifs :</h3>
      <ul>
        <li v-for="objectif in quete.objectifs" :key="objectif">{{ objectif }}</li>
      </ul>
      <h3>Quête principale :</h3>
      <p>{{ Array.isArray(quete.quetePrincipale) ? quete.quetePrincipale.join(', ') : quete.quetePrincipale }}</p>
      <h3>Quête secondaire :</h3>
      <p>{{ Array.isArray(quete.queteSecondaire) ? quete.queteSecondaire.join(', ') : quete.queteSecondaire }}</p>
      <a href="InformationView.vue">Commencer la quête</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    quete: Object
  },
  mounted() {
    console.log("Données de la quête reçues :", this.quete);
  }
};
</script>


<style scoped lang="scss">
@import "/public/css/scss_page/_popupquete";
</style>
