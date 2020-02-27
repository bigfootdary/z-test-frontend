const news = {
    state: {
        list: [],
        options: {
            currentPage: 1,
            total: undefined
        }
    },
    mutations: {
        setNews: (state, data) => {
            if (data.action === 'add') {
                state.list = state.list.concat(data.news)
            } else if (data.action === 'replace') {
                state.list = data.news
            }
        },
        setNewsOptions: (state, data) => {
            const options = {
                currentPage: data.current,
                total: data.total
            }
            state.options = options
        }
    },
    actions: {
        getNews ({ state, commit }, options = { page: 1, action: 'add' }) {
            const { page, action } = options
            let url
            if (page === 1) {
                url = 'https://api.myjson.com/bins/m4a6k'
            } else {
                url = 'https://api.myjson.com/bins/12o4ss'
            }
            fetch(url, {
                method: 'GET'
            })
                .then(
                    response => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error('Request failed!')
                    },
                    networkError => console.log(networkError.message)
                )
                .then(
                    jsonResponse => {
                        commit('setNews', {news: jsonResponse['news'], action: action})
                        commit('setNewsOptions', jsonResponse['page'])
                    }
                )
        },
        searchNews ({ commit }, queryString) {
            const url = `https://api.myjson.com/bins/jsox8?${queryString}`
            fetch(url, {
                method: 'GET'
            })
                .then(
                    response => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error('Request failed!')
                    },
                    networkError => console.log(networkError.message)
                )
                .then(
                    jsonResponse => {
                        commit('setNews', {news: jsonResponse['news'], action: 'replace'})
                        commit('setNewsOptions', jsonResponse['page'])
                    }
                )
        }
    }
}

export default news
