<style lang="scss">
@import "/public/css/scss_page/connexion";
</style>
<template>
  <main>
    <h1>Connexion</h1>
    <div class="form-container">
      <div class="input-container">
        <input v-model="email" type="email" placeholder="Adresse email" />
      </div>
      <div class="password-container">
        <div class="input-container">
          <input v-model="password" type="password" placeholder="Mot de passe" />
        </div>
      </div>
      <div class="connecter">
        <button @click="login">Se connecter</button>
      </div>
      <router-link to="/Inscription">
        <div>
          <a>Vous n'avez pas encore de compte ? Inscrivez-vous</a>
        </div>
      </router-link>
    </div>

    <p class="error-message" v-if="message">{{ message }}</p>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const email = ref('');
const password = ref('');
const message = ref('');

async function login() {
  try {
    const response = await axios.post('/api/login', { email: email.value, password: password.value });
    if (response.data.success) {
      router.push('/profil');
    } else {
      message.value = response.data.message;
    }
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    message.value = 'Une erreur est survenue lors de la connexion.';
  }
}
</script>
