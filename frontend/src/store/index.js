import Vue from 'vue'
import Vuex from 'vuex'

import news from './modules/news'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        news,
        app
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters
})
