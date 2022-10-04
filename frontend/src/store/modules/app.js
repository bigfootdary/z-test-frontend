const app = {
    state: {
        device: 'desktop',
        news: [],
        currentPage: 1,
        totalPages: 1,
        targetUrl: './api/news/index.html'
    },
    mutations: {
        ToggleDevice: (state, device) => {
            state.device = device
        },
        updateNews (state, news) {
            state.news = [...state.news, ...news]
        },
        updateTotalPages (state, total) {
            state.totalPages = total
        },
        updateCurrentPage (state, current) {
            state.currentPage = current
        },
        updateTargetUrl (state) {
            state.targetUrl = `./api/news/${state.currentPage + 1}/index.html`
        }
    },
    actions: {
        ToggleDevice ({ commit }, device) {
            commit('ToggleDevice', device)
        },
        async fetchNews (ctx) {
            try {
                const response = await fetch(ctx.state.targetUrl)
                const news = await response.json()
                ctx.commit('updateNews', news.items)
                ctx.commit('updateTotalPages', news.nav.total)
                ctx.commit('updateCurrentPage', news.nav.current)
            } catch (err) {
                throw new Error(err)
            }
        },
        getNext (ctx) {
            ctx.commit('updateTargetUrl')
            this.dispatch('fetchNews')
        }
    },
    getters: {
        allNews (state) {
            return state.news
        },
        total (state) {
            return state.totalPages
        },
        current (state) {
            return state.currentPage
        }
    }
}

export default app
