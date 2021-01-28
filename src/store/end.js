export default {
    namespaced: true,
    state: {
        boStop: false
    },
    mutations: {
        moveEnd(state) {
            state.boStop = true
        },
        moveStart(state) {
            state.boStop = false
        }
    }
}