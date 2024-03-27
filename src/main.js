import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import { initDB, recupererUtilisateurs } from '/indexedDB';



// Importer les traductions
import fr from './locales/fr.json';
import en from './locales/en.json';

// Configurer i18n
const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: { fr, en },
});

const app = createApp(App);

// Utiliser les plugins et montez l'application
(async () => {
    try {
        await initDB(); // Initialiser la base de données

        const users = await recupererUtilisateurs();
        const user = users.find(u => u.isLoggedIn);

        if (user) {
            store.commit('setLoggedIn', true);
        }

        app.use(store).use(router).use(i18n).mount('#app');
        console.log('La base de données est initialisée avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données :', error);
    }
})();
