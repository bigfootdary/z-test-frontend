const getters = {
    device: state => state.app.device,
    news: state => state.news,
    totalPage: state => state.totalPage,
    currrentPage: state => state.currentPage,
    hideLoadBtn: state => state.totalPage === state.currentPage
}

export default getters
