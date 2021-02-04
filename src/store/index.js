import Vue from 'vue'
import Vuex from 'vuex'

import logo from './modules/logo'
import app from './modules/app'
import end from './modules/end'
import start from './modules/start'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        logo: logo,
        app: app,
        end: end,
        start: start,
    }
})