<script>
import { RouterLink, RouterView } from "vue-router";
import logo from '@/assets/logowhite.svg';
import logo2 from '@/assets/logocolor.svg';
import { recupererUtilisateurs } from '/indexedDB.js';

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      logo: logo,
      logo2:logo2,
      isLoggedIn: false
    };
  },
  // MISE EN PLACE D'UN VERFICATION POUR SAVOIR SI L'UTILISATEUR ST CONNECTER
  async mounted() {
    await this.checkLoggedIn();
  },
  methods: {
    async checkLoggedIn() {
      try {
        //RECUPERATION DES DONNES DEPUIS LA FONCTION RECUPERERUTILISATEUR DU INDEXEDDB
        const users = await recupererUtilisateurs();

        // Vérifier si un utilisateur est présent dans la base de données
        this.isLoggedIn = users.length > 0;
      } catch (error) {
        console.error('Erreur lors de la vérification de la connexion :', error);
      }
    },
    //MISE EN PLUS D'UNE FONCTION DE DECONNECTION DE L'UTILISATEUR
    async logout() {
      try {
        //VIDER LA BASE DE DONNES INDEXEDDB POUR FAIRE DECONNECTER L'UTLISATEUR
        await this.clearIndexedDB();
        this.isLoggedIn = false;
      } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
      }
    },
    //FONCTION POUR VIDER LA BASE DE DONNES INDEXDDB
    async clearIndexedDB() {
    }
  }
}
</script>

<template>
  <header>
    <div class="nav">
      <img :src="logo" alt="Logo">
      <nav>
        <div class="link">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink v-if="!isLoggedIn" to="/Connexion">Connexion</RouterLink>
          <RouterLink v-if="!isLoggedIn" to="/Inscription">Inscription</RouterLink>
          <a v-if="isLoggedIn" @click="logout">Déconnexion</a>
          <RouterLink to="/Contact">Contact</RouterLink>
          <RouterLink v-if="isLoggedIn" to="/Quete">Quêtes</RouterLink>
          <RouterLink to="/TableauQuete">Quêtes</RouterLink>
          <RouterLink v-if="isLoggedIn" to="/Badges">Badges</RouterLink>
          <RouterLink v-if="isLoggedIn" to="/Profil">Profil</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <img :src="logo2" alt="Logo">
    <p>©2023 - 2024 MMI Troyes | SAE401</p>
  </footer>
</template>

