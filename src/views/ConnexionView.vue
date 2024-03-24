<template>
  <div>
    <div>
      <h1>Connexion</h1>
      <div>
        <label for="email">Adresse Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="motdepasse">Mot de passe:</label>
        <input type="password" id="motdepasse" v-model="form.motdepasse" required>
      </div>
      <div>
        <button type="submit" @click="login">Se connecter</button>
      </div>
      <router-link to="/Inscription">
        <div>
          <a>Vous n'avez pas encore de compte ? Inscrivez-vous</a>
        </div>
      </router-link>
    </div>

    <p v-if="errorMessage">{{ errorMessage }}</p>
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
