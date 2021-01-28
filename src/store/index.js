import Vue from 'vue'
import Vuex from 'vuex'

import logo from './logo'
import app from './app'
import end from './end'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        logo: logo,
        app: app,
        end: end,
    }
})