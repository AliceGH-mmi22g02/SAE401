<script>
import '/public/css/_layout.scss'
import { RouterLink, RouterView } from "vue-router";
import logo from '@/assets/logo.png';

export default {
  name: 'LogoComponent',
  data() {
    return {
      logo: logo
    }
  }
}
</script>

<template>
  <header>
    <div class="nav">
      <nav>
        <hr />
        <img :src="logo" alt="Logo">
        <div class="link">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/Quete">Quêtes</RouterLink>
          <RouterLink to="/Profil">Profil</RouterLink>
          <RouterLink to="/Contact">Contact</RouterLink>
          <RouterLink to="/Inscription">Inscription</RouterLink>
          /
          <RouterLink to="/Connexion">Connexion</RouterLink>
        </div>
        <hr />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
