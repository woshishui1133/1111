import Vue from 'vue'
import Vuex from 'vuex'

import app from './app'
Vue.use(Vuex)

export default new Vuex.Store({
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
    },
    actions: {},
    modules: {
        app: app
    }
})