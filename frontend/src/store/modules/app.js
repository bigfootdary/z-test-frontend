const app = {
    state: {
        device: 'desktop',
        news: []
    },
    mutations: {
        ToggleDevice: (state, device) => {
            state.device = device
        },
        updateNews (state, news) {
            state.news = news
        }
    },
    actions: {
        ToggleDevice ({ commit }, device) {
            commit('ToggleDevice', device)
        },
        async fetchNews (ctx) {
            const response = await fetch('../../../../api/news/index.html')
            const news = await response.json()
            this.news = news
            ctx.commit('updateNews', news)
        }
    },
    getters: {
        allNews (state) {
            return state.news
        }
    }
}

export default app
