<script>
import { RouterLink, RouterView } from "vue-router";
import logo from '../public/logowhite.svg'
import logo2 from '../public/logocolor.svg';
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
      <img :src="logo" alt="Logo">
    <nav class="sub_menue">
      <RouterLink to="/">{{ $t("app.home") }}</RouterLink>
      <RouterLink to="/TableauQuete">{{ $t("app.quetes") }}</RouterLink>
    </nav>
    <LocaleChanger/>
  </header>

  <RouterView/>

  <footer>
    <img :src="logo2" alt="Logo">
    <p>©2023 - 2024 MMI Troyes | SAE401</p>
    <RouterLink to="/Mentions">{{ $t("app.mentions") }}</RouterLink>
  </footer>
</template>


