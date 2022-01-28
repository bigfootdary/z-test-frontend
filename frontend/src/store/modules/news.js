import axios from 'axios'

const news = {
    // initial state
    state: {
        page: {},
        items: []
    },

    // getters
    getters: {},

    // actions
    actions: {
        getNews ({ commit }, page) {
            const params = page ? `-last-page` : ''
            axios.get(`https://my-json-server.typicode.com/bigfootdary/json-news/news${params}`)
                .then(response => {
                    commit('addNews', response.data)
                })
        },
        getFilteredNews ({ commit }, filter) {
            const params = filter ? `-filtered` : ''
            axios.get(`https://my-json-server.typicode.com/bigfootdary/json-news/news${params}`)
                .then(response => {
                    commit('fillNews', response.data)
                })
        }
    },

    // mutations
    mutations: {
        addNews (state, news) {
            state.items.push(...news.list)
            state.page = news.page
        },
        fillNews (state, news) {
            state.items = news.list
            state.page = news.page
        }
    }
}

export default news
