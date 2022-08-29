/* eslint-disable no-return-await */
import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app
    },
    state: {
        cards: {
            list: []
        },
        current: 0,
        total: 0
    },
    mutations: {
        SET_CARDS_TO_STATE (state, payload) {
            payload.data.items.forEach(item => {
                var date = new Date(item.date)
                var day = date.getDate()
                var year = date.getFullYear()

                if (date.getMonth().toString().length === 1) {
                    var month = `0${date.getMonth() + 1}`
                } else {
                    // eslint-disable-next-line no-redeclare
                    var month = date.getMonth() + 1
                }
                item.date = `${day + '.' + month + '.' + year}`
                item.id = (Date.now() + Math.random()).toString()
                state.cards.list.push(item)
            })
            state.cards.page = payload.data.nav
        },
        SET_CURRENT (state, payload) {
            state.current = payload.data.nav.current
        },
        SET_TOTAL (state, payload) {
            state.total = payload.data.nav.total
        }
    },
    actions: {
        async GET_CARDS_FROM_API (context, payload) {
            await fetch(`/api/news/${payload}`)
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    context.commit('SET_CARDS_TO_STATE', {data: response})
                    context.commit('SET_CURRENT', {data: response})
                    context.commit('SET_TOTAL', {data: response})
                    return response
                }).catch(e => console.log(e))
        }
    },
    getters: {
        getCards (state) {
            return state.cards
        },
        getCurrent (state) {
            return state.current
        },
        getTotal (state) {
            return state.total
        }
    }
})
