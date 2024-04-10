import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/AccueilView.vue";
import Badges from "../views/Badges.vue";
import Quete from "../views/QueteView.vue";
import InformationView from "../views/InformationView.vue";
import TableauQuête from '../views/TableauQueteView.vue';
import Quete2View from "../views/Quete/Quete2View.vue";
import Quete3View from "../views/Quete/Quete3View.vue";
import Quete4View from "../views/Quete/Quete4View.vue";
import Quete5View from "../views/Quete/Quete5View.vue";
import Quete6View from "../views/Quete/Quete6View.vue";
import Quete7View from "../views/Quete/Quete7View.vue";
import Quete8View from "../views/Quete/Quete8View.vue";
import Quete9View from "../views/Quete/Quete9View.vue";
import Quete10View from "../views/Quete/Quete10View.vue";
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
            path: "/Quete",
            component: Quete,
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
            path: "/quete2",
            name: 'Quete2',
            component: Quete2View,
        },

        {
            path: "/quete3",
            name: 'Quete3',
            component: Quete3View,
        },

        {
            path: "/quete4",
            name: 'Quete4',
            component: Quete4View,
        },

        {
            path: "/quete5",
            name: 'Quete5',
            component: Quete5View,
        },

        {
            path: "/quete6",
            name: 'Quete6',
            component: Quete6View,
        },

        {
            path: "/quete7",
            name: 'Quete7',
            component: Quete7View,
        },

        {
            path: "/quete8",
            name: 'Quete8',
            component: Quete8View,
        },

        {
            path: "/quete9",
            name: 'Quete9',
            component: Quete9View,
        },

        {
            path: "/quete10",
            name: 'Quete10',
            component: Quete10View,
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
