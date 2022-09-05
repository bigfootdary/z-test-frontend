import { axios } from '@/utils/request'

export function getNews (page) {
    return axios({
        url: `/news/${page}`,
        method: 'get'
    })
}
