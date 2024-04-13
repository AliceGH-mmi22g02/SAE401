<template>
  <main>
    <h1>Résultat</h1>
    <p>Votre score est : {{ score }}/40</p>


    <div v-if="getBadgeCount() > 0">
      <p>Vous avez gagné ces badges :</p>
    </div>
    <main id="main-badges">
      <div class="badge-container">
        <div v-for="(badge, index) in getBadgeCount()" :key="index" class="rounded-box">
          <img class="rounded-image" :src="`../../public/badge/Badge${index + 1}.svg`" alt="Image">
          <p class="text">{{ badgeTitles[index] }}</p>
          <p class="text">{{ badgeDescriptions[index] }}</p>
        </div>
      </div>
    </main>


    <div v-if="score === 40">
    </div>

    <div v-else>
      <p>Courage, vous allez y arriver à remporter les badges !</p>
    </div>

    <div v-if="score >= 4">
      <p>
        “Félicitations ! Vous avez gagné ces code promo pour le jeu Terra Nil !<br>
        Rétablissez l'équilibre écologique en reconstruisant des écosystèmes dans ce jeu de stratégie environnementale sur PC.”
      </p>
    </div>

    <div v-for="(promo, index) in promos" :key="index">
      <div v-if="score >= promo.requiredScore">
        <p v-if="promo.code">{{ promo.code }}</p>
      </div>
      <div v-else-if="index === getNextPromoIndex()">
        <p>Bien joué ! Il vous manque seulement  {{ promo.requiredScore - score }} point(s) pour obtenir ce code promo ainsi qu'un nouveau badge. Soit un Score de : {{ promo.requiredScore }}</p>
      </div>
    </div>

  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import store from '../store.js';

const route = useRoute();
const score = store.state.score;

const promos = [
  { requiredScore: 4, code: generatePromoCode() },
  { requiredScore: 8, code: generatePromoCode() },
  { requiredScore: 12, code: generatePromoCode() },
  { requiredScore: 16, code: generatePromoCode() },
  { requiredScore: 20, code: generatePromoCode() },
  { requiredScore: 24, code: generatePromoCode() },
  { requiredScore: 28, code: generatePromoCode() },
  { requiredScore: 32, code: generatePromoCode() },
  { requiredScore: 36, code: generatePromoCode() },
  { requiredScore: 40, code: generatePromoCode() },
];

const badgeTitles = [
  "Gardien de la forêt",
  "Sentinelle du climat",
  "Pompier du climat",
  "Chevalier de la Faune",
  "Protecteur des Richesses Terrestres",
  "Purificateur atmosphérique",
  "La vie protège la vie",
  "Nettoyeur planétaire",
  "Allié des Océans",
  "Cultivateur des Terres Fertiles"
];

const badgeDescriptions = [
  "Ce badge peut être obtenu après avoir fini la quête n°1, 'La lute contre la déforestation'. Il récompense ceux qui contribuent à la préservation des forêts, essentielles pour la biodiversité et le climat de notre planète.",
  "Obtenu après la quête n°2, 'Les dangers des risques climatiques'. Ce badge distingue ceux qui agissent pour atténuer les risques liés aux changements climatiques en améliorant l'efficacité énergétique de leur domicile.",
  "Attribué suite à la quête n°3, 'Les causes du réchauffement climatique'. Il honore l'engagement à réduire les émissions de gaz à effet de serre et à lutter contre le réchauffement de la planète.",
  "Ce badge est décerné après la quête n°4, 'L'augmentation du nombre d'espèces en voie de disparition'. Il souligne les efforts pour protéger les espèces menacées et maintenir la diversité biologique.",
  "Obtenu à l'issue de la quête n°5, 'Surconsommation des ressources naturelles'. Ce badge valorise les actions pour conserver les ressources de la Terre et promouvoir un usage responsable.",
  "Attribué après la quête n°6, 'La crise de la pollution'. Il récompense ceux qui adoptent des pratiques réduisant la pollution et contribuent à un environnement plus sain.",
  "Décerné suite à la quête n°7, 'Menaces sur la biodiversité'. Ce badge est une reconnaissance pour ceux qui s'engagent à préserver la biodiversité par des choix respectueux de l'environnement.",
  "Obtenu après la quête n°8, 'Le défi de la gestion des déchets'. Il met en lumière l'importance du tri et du recyclage pour réduire l'impact environnemental des déchets.",
  "Ce badge est attribué à la fin de la quête n°9, 'La surexploitation des ressources marines'. Il honore ceux qui soutiennent la vie marine et la pêche durable pour protéger les océans.",
  "Décerné après la quête n°10, 'La dégradation et l'épuisement des sols'. Ce badge valorise le soutien à l'agriculture durable et les efforts pour préserver la fertilité des sols."
];

function generatePromoCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

function getNextPromoIndex() {
  for (let i = 0; i < promos.length; i++) {
    if (score < promos[i].requiredScore) {
      return i;
    }
  }
  return -1;
}

function getBadgeCount() {
  return Math.floor(score / 4);
}
</script>

<style lang="scss">
  @import "../assets/css/scss_page/resultat";
  @import "../assets/css/scss_page/badges";
</style>
