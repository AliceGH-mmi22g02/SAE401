<script>
import { RouterLink, RouterView } from "vue-router";
import logo from '@/assets/logowhite.svg';
import logo2 from '@/assets/logocolor.svg';
import LocaleChanger from "@/components/LocaleChanger.vue";
export default {
  name: 'App',
  components: {
    LocaleChanger,
    RouterLink,
    RouterView
  },
  data() {
    return {
      logo: logo,
      logo2: logo2,
      isLoggedIn: false
    };
  }
}
</script>

<template>
  <header>
    <div class="main_menue">
      <img :src="logo" alt="Logo">
      <LocaleChanger/>
    </div>
    <nav class="sub_menue">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/Quete">Pop Up Quêtes</RouterLink>
      <RouterLink to="/TableauQuete">Quêtes</RouterLink>
      <RouterLink to="/Badges">Badges</RouterLink>
    </nav>
  </header>

  <RouterView/>

  <footer>
    <img :src="logo2" alt="Logo">
    <p>©2023 - 2024 MMI Troyes | SAE401</p>
  </footer>
</template>


