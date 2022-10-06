const getters = {
    device: state => state.app.device,
    totalPages: state => state.app.totalPages,
    currentPage: state => state.app.currentPage,
    news: state => state.app.news,
    noNews: state => state.app.news.length === 0
}

export default getters
