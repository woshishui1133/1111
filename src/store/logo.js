export default {
    namespaced: true,
    state: {
        token: window.sessionStorage.getItem('token')
    },
    mutations: {
        longinToken(state, token) {
            state.token = token.token;
            window.sessionStorage.setItem("token", token.token)
            console.log(token);
        },
        logoutToken(state) {
            state.token = null;
            window.sessionStorage.removeItem('token');
        }
    }
}