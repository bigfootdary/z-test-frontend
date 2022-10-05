import { axios } from '@/utils/request'

const app = {
    state: {
        device: 'desktop',
        news: [],
        currentPage: '',
        totalPages: ''
    },
    mutations: {
        ToggleDevice: (state, device) => {
            state.device = device
        },
        setNews: (state, news) => {
            state.news = news
        },
        setCurrentPage: (state, currentPage) => {
            state.currentPage = currentPage
        },
        setTotalPages: (state, totalPages) => {
            state.totalPages = totalPages
        },
        fetchNews: (state, newNews) => {
            state.news.push(...newNews)
        }
    },
    actions: {
        ToggleDevice ({ commit }, device) {
            commit('ToggleDevice', device)
        },
        async fetchNews ({commit}) {
            try {
                const response = await axios.get('/news/')
                const news = response.items
                const currentPage = response.nav.current
                const totalPages = response.nav.total
                commit('setNews', news)
                commit('setCurrentPage', currentPage)
                commit('setTotalPages', totalPages)
            } catch (e) {
                commit('setNews', null)
            }
        },
        async downloadNews ({commit}, page) {
            try {
                commit('setCurrentPage', page)
                const response = await axios.get(`/news/${page}`)
                commit('fetchNews', response.items)
            } catch {
                console.log('error download')
            }
        }
    }
}

export default app
