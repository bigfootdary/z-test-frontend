import { axios } from '@/utils/request'

const app = {
    namespaced: true,
    state: {
        device: 'desktop',
        news: [],
        newsNav: {
            'current': 1,
            'total': 1
        },
        isLoading: true
    },
    mutations: {
        ToggleDevice: (state, device) => {
            state.device = device
        },
        SetNewsList: (state, news) => {
            state.news = news
        },
        SetNewsPage: (state, newsPage) => {
            state.news.push(...newsPage)
        },
        SetNavState: (state, newsNav) => {
            state.newsNav = newsNav
        },
        SetToggleLoading: (state, bool) => {
            state.isLoading = bool
        },
    },
    actions: {
        ToggleDevice ({ commit }, device) {
            commit('ToggleDevice', device)
        },
        async LoadNewsList ({ commit }) {
            commit('SetToggleLoading', true)

            const news = await axios.get('/news/')
            const formattedNewsList = news.items.map(({
                id, date, image, spotlight, theme, title, url
            }) => {
                const formattedItem = {}

                formattedItem.id = String(id)
                formattedItem.date = String(date) ?? ''
                formattedItem.image = String(image) ?? ''
                formattedItem.spotlight = Boolean(spotlight) ?? false
                formattedItem.theme = Array.isArray(theme) ? theme : []
                formattedItem.title = String(title) ?? ''
                formattedItem.url = String(url) ?? ''

                return formattedItem;
            })

            commit('SetNewsList', formattedNewsList)
            commit('SetNavState', news.nav)
            commit('SetToggleLoading', false)
        },
        async LoadNewsPage ({ commit }, page) {
            commit('SetToggleLoading', true)

            const newsPage = await axios.get(`/news/${page}/`)
            const formattedNewsPageList = newsPage.items.map(({
                id, date, image, spotlight, theme, title, url
            }) => {
                const formattedItem = {}

                formattedItem.id = String(id)
                formattedItem.date = String(date) ?? ''
                formattedItem.image = String(image) ?? ''
                formattedItem.spotlight = Boolean(spotlight) ?? false
                formattedItem.theme = Array.isArray(theme) ? theme : []
                formattedItem.title = String(title) ?? ''
                formattedItem.url = String(url) ?? ''

                return formattedItem;
            })

            commit('SetNewsPage', formattedNewsPageList)
            commit('SetNavState', newsPage.nav)
            commit('SetToggleLoading', false)
        },
    }
}

export default app
