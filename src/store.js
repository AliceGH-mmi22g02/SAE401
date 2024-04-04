import { createStore } from 'vuex';

export default createStore({ // CREATION D'UN STORE AFIN DE CONTENIR LE REPONSE
    state() {
        return {
            score: 0, // SCORE PAR DEFAUT
        };
    },
    mutations: {
        // MUTATION AFIN DE METTRE A JOUT LE SCORE
        updateScore(state, payload) {
            state.score += payload; // ENVOIE DU SCORE DE LA QUÊTE SUR LE SCORE GLOBAL
        },
        setCurrentQuestions(state, payload) { // AJOUT DE LA SETUCURRENTQUESTIONS
            state.currentQuestions = payload; // MIS A JOUR DES QUESTIONS
        }
    },
});
