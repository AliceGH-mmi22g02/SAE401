import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';



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


            store.commit('setLoggedIn', true);

        app.use(store).use(router).use(i18n).mount('#app');
