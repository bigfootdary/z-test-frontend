import { axios } from "../utils/request"

const api_url = '/api/news'

class DataService {
    async getNews(page) {
        return await axios.get(`/news/${page}`)
    }
}

export default new DataService()
