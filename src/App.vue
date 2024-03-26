<template>
  <header>
    <div class="nav">
      <nav>
        <img :src="logo" alt="Logo">
        <div class="link">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink v-if="!isLoggedIn" to="/Connexion">Connexion</RouterLink>
          <RouterLink v-if="!isLoggedIn" to="/Inscription">Inscription</RouterLink>
          <a v-if="isLoggedIn" @click="logout">Déconnexion</a>
          <RouterLink to="/Contact">Contact</RouterLink>
          <RouterLink v-if="isLoggedIn" to="/Quete">Quêtes</RouterLink>
          <RouterLink v-if="isLoggedIn" to="/Badges">Badges</RouterLink>
          <RouterLink v-if="isLoggedIn" to="/Profil">Profil</RouterLink>
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

<script>
import { RouterLink, RouterView } from "vue-router";
import logo from '@/assets/logo.png';
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