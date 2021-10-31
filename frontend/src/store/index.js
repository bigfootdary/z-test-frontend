import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app
    },
    state: {
        news: [],
        totalPage: 0,
        currentPage: 0
    },
    mutations: {
        initialNews: (state, data) => {
            data.list.forEach((element) => {
                state.news.push(element)
            })
            state.totalPage = data.page.total
            state.currentPage = data.page.current
        },
        fetchNextPage: (state, data) => {
            data.list.forEach((element) => {
                state.news.push(element)
            })
            state.totalPage = data.page.total
            state.currentPage = data.page.current
        },
        filterNews: (state, data) => {
            state.news = data.list
            state.totalPage = data.page.total
            state.currentPage = data.page.current
        }
    },
    actions: {},
    getters
})
