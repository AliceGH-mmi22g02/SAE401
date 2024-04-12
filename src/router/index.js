import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/AccueilView.vue";
import Badges from "../views/Badges.vue";
import InformationView from "../views/InformationView.vue";
import TableauQuête from '../views/TableauQueteView.vue';
import Resultat from "../views/ResultatView.vue";
import MentionView from "../views/MentionView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Accueil,
        },

        {
            path: "/Badges",
            component: Badges,
        },


        {
            path: "/Information",
            name: 'Information',
            component: InformationView,
        },

        {
            path: "/TableauQuete",
            name: 'TableauQuete',
            component: TableauQuête,
        },
        {
            path: "/Resultat",
            name: 'Resultat',
            component: Resultat,
        },

        {
            path: "/Mention",
            name: 'Mention',
            component: MentionView,
        },

    ],
});
export default router;
