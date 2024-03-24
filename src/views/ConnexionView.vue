<template>
  <div class="connexion">
    <div class="connexion-img">
    </div>
    <div class="connexion-formulaire">
      <h1>Connexion</h1>
      <div class="connexion-formulaire-champ">
        <label for="email">Adresse Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="connexion-formulaire-champ">
        <label for="motdepasse">Mot de passe:</label>
        <input type="password" id="motdepasse" v-model="form.motdepasse" required>
      </div>
      <div class="connexion-formulaire-connecter">
        <button type="submit" @click="login">Connexion</button>
      </div>
      <router-link to="/Inscription">
        <div class="connexion-formulaire-inscrire">
          <a>Vous n'avez pas encore de compte ? Inscrivez-vous</a>
        </div>
      </router-link>
      <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { recupererUtilisateurs } from '../../indexedDB.js';

export default {
  data() {
    return {
      form: {
        email: '',
        motdepasse: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const users = await recupererUtilisateurs();
        const user = users.find(u => u.email === this.form.email && u.motdepasse === this.form.motdepasse);
        if (user) {
          alert('Connexion réussie !');
          await this.$router.push('/'); //MISE EN PLACE D'UN AWAIT POUR PERMETTRE D'ACTUALISER ET DE DIRIGER VERS LA PAGE ACCUEIL EN MEME TEMPS
        } else {
          this.errorMessage = 'Adresse email ou mot de passe incorrect.';
        }
      } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        this.errorMessage = 'Une erreur est survenue lors de la connexion.';
      } finally { // VA PERMETTRE D'ACTUALISER ET DE DIRIGER VERS LA PAGE ACCUEIL EN MEME TEMPS
        this.$router.go(0); // PERMET D'ACTUALISER LA PAGE POUR PRENDRE EN COMPTE LA CONNEXION
      }
    }
  }
};
</script>
<style lang="scss">
@import "/public/css/scss_page/connexion";
</style>