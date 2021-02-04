export default {
    namespaced: true,
    state: {
        //分数
        NaScore: 0,
        BoScore: false

    },
    mutations: {
        newgame(state) {
            state.BoScore = true;
        },
        Bonewgame(state) {
            state.BoScore = false;
        }
    }
}