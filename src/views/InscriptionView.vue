<template>
  <div class="inscription">
    <div class="inscription-img">
    </div>
    <div class="inscription-formulaire">
    <h1>Inscription</h1>
    <form @submit.prevent="register">
      <div class="inscription-formulaire-champ">
        <label for="nom">Nom</label>
        <input type="text" id="nom" v-model="form.nom" required>
      </div>
      <div class="inscription-formulaire-champ">
        <label for="prenom">Prénom</label>
        <input type="text" id="prenom" v-model="form.prenom" required>
      </div>
      <div class="inscription-formulaire-champ">
        <label for="pseudo">Pseudo</label>
        <input type="text" id="pseudo" v-model="form.pseudo" required>
      </div>
      <div class="inscription-formulaire-champ">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="inscription-formulaire-champ">
        <label for="motdepasse">Mot de passe</label>
        <input type="password" id="motdepasse" v-model="form.motdepasse" required>
      </div>
      <div  class="inscription-formulaire-inscrire">
        <button type="submit">S'inscrire</button>
      </div>
      <router-link to="/Connexion">
        <div class="inscription-formulaire-connectez">
          <a>Vous avez déjà un compte ? Connectez-vous</a>
        </div>
      </router-link>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nom: '',
        prenom: '',
        pseudo: '',
        email: '',
        motdepasse: ''
      }
    };
  },
  methods: {
    async register() {
      try {
        await this.writeDataToIndexedDB();
        alert('Inscription réussie !');
        this.$router.push('/Connexion');
        this.resetForm();
      } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        alert('Une erreur est survenue lors de l\'inscription.');
      }
    },
    resetForm() {
      this.form.nom = '';
      this.form.prenom = '';
      this.form.pseudo ='';
      this.form.email = '';
      this.form.motdepasse = '';
    },
    //CETTE FONCTION VA PERMETTRE D'ECRIRE/ENVOYER LES DONNES VERS LE STORAGE  INDEXEDDB
    async writeDataToIndexedDB() {
      const request = window.indexedDB.open('monApplicationDB', 1);
      return new Promise((resolve, reject) => {
        request.onerror = (event) => {
          reject('Erreur lors de l\'ouverture de la base de données');
        };
        request.onsuccess = (event) => {
          const db = event.target.result;
          const transaction = db.transaction(['utilisateurs'], 'readwrite');
          const store = transaction.objectStore('utilisateurs');
          //CREATION D'UNE NOUVELLE PARTIE DE STRUCTURE DE DONNEES POUR LE INDEXEDDB
          const userData = {
            nom: this.form.nom,
            prenom: this.form.prenom,
            pseudo: this.form.pseudo,
            email: this.form.email,
            motdepasse: this.form.motdepasse
          };
          const addRequest = store.add(userData);
          addRequest.onsuccess = () => {
            resolve();
          };
          addRequest.onerror = () => {
            reject('Erreur lors de l\'ajout des données');
          };
        };
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          db.createObjectStore('utilisateurs', { autoIncrement: true, keyPath: 'id' });
        };
      });
    }
  }
};
</script>
<style lang="scss">
@import "/public/css/scss_page/inscription";
</style>
