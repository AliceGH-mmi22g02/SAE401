<script>
import '/public/css/_layout.scss';
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
        <img :src="logo" alt="Logo">
        <div class="link">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/Quete">Quêtes</RouterLink>
          <RouterLink to="/Badges">Badges</RouterLink>
          <RouterLink to="/Profil">Profil</RouterLink>
          <RouterLink to="/Contact">Contact</RouterLink>
          <RouterLink to="/Inscription">Inscription</RouterLink>
          /
          <RouterLink to="/Connexion">Connexion</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <h3>Au-delà des récompenses virtuelles, votre participation contribue réellement à la protection de l'environnement.</h3>
    <br>
    <h3>Alors rejoignez l'aventure GREENPLAY ! Apprenez, agissez, et soyez récompensées :)</h3>
  </footer>

</template>

<style scoped></style>
