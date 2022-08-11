import { axios } from '../utils/request'

class DataService {
    async getNews(page) {
        const news = await axios.get(`/news/${page}`)
        return news
    }
}

export default new DataService()
