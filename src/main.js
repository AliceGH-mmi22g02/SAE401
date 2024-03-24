import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { initDB, recupererUtilisateurs } from '/indexedDB';


(async () => {
    try {
        await initDB();

        const users = await recupererUtilisateurs();
        const user = users.find(u => u.isLoggedIn);

        const app = createApp(App);


        if (user) {
            store.commit('setLoggedIn', true);
        }

        app.use(store).use(router).mount('#app');
        console.log('La base de données est initialisée avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données :', error);
    }
})();
