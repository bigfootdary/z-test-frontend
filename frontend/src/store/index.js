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
            list: [],
            page: {}
        }
    },
    mutations: {
        SET_CARDS_TO_STATE (state, payload) {
            payload.data.list.forEach(item => {
                item.id = (Date.now() + Math.random()).toString()
                state.cards.list.push(item)
            })
            state.cards.page = payload.data.page
        },
        CLEAR_STATE (state) {
            state.cards.list = []
            state.cards.page = {}
        }
    },
    actions: {
        async GET_CARDS_FROM_API (context, payload) {
            await fetch(payload.url)
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    context.commit('SET_CARDS_TO_STATE', {data: response})
                    return response
                }).catch(e => console.log(e))
        }
    },
    getters: {
        getCards (state) {
            return state.cards
        }
    }
})
