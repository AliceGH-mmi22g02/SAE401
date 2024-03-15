import { createApp } from 'vue';
import {createI18n} from "vue-i18n";
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/main.css';

//importer les trads
import fr from './locales/fr.json';
import en from './locales/en.json';

//configurer i18n
const i18n = createI18n({
    locale:'fr',
    fallbackLocale:'fr',
    messages:{fr,en},
});

const app = createApp(App);

app.use(router);
app.use(store);

app.use(i18n);
app.mount('#app');