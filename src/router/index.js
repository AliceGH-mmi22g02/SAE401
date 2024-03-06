import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/AccueilView.vue";
import Quete from "../views/QueteView.vue";
import Profil from "../views/ProfilView.vue";
import Quete1 from "../views/Quete/Quete1View.vue";
import Quete2 from "../views/Quete/Quete2View.vue";
import Quete3 from "../views/Quete/Quete3View.vue";
import Quete4 from "../views/Quete/Quete4View.vue";
import Quete5 from "../views/Quete/Quete5View.vue";
import Quete6 from "../views/Quete/Quete6View.vue";
import Quete7 from "../views/Quete/Quete7View.vue";
import Quete8 from "../views/Quete/Quete8View.vue";
import Quete9 from "../views/Quete/Quete9View.vue";
import Quete10 from "../views/Quete/Quete10View.vue";




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
            path: "/Profil",
            component: Profil,
        },

        {
            path: "/Quete1",
            component: Quete1,
        },

        {
            path: "/Quete2",
            component: Quete2,
        },

        {
            path: "/Quete3",
            component: Quete3,
        },

        {
            path: "/Quete4",
            component: Quete4,
        },

        {
            path: "/Quete5",
            component: Quete5,
        },

        {
            path: "/Quete6",
            component: Quete6,
        },

        {
            path: "/Quete7",
            component: Quete7,
        },

        {
            path: "/Quete8",
            component: Quete8,
        },

        {
            path: "/Quete9",
            component: Quete9,
        },

        {
            path: "/Quete10",
            component: Quete10,
        },



    ],
});

export default router;
