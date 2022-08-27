<template>
    <div class="news-list">
        <NewsCard v-for="(news, i) in newsList" :key="i" :news="news"/>
        <div class="load"><button class="load-button" @click="loadMoreNews" v-if="loadBtn">Загрузить ещё</button></div>
        <div class="error" v-if="error">Произошла какая-то ошибка, но мы скоро всё поправим!</div>
    </div>
</template>

<script>
import NewsCard from '@/components/NewsCard'
import { ref } from 'vue'
import DataService from '@/services/DataService'
export default {
    components: {
        NewsCard
    },
    name: 'list',
    setup () {
        const page = ref(1)
        const total = ref()
        const newsList = ref()
        const loadBtn = ref(false)
        const error = ref(false)

        const handleError = () => {
            error.value = true
            loadBtn.value = false
        }

        const loadMoreNews = () => {
            if (page.value > total.value) {
                return
            }
            page.value++
            DataService.getNews(page.value).then((res) => {
                newsList.value = [...newsList.value, ...res.items]
                loadBtn.value = page.value !== total.value
            }).catch(handleError)
        }

        DataService.getNews(page.value).then((res) => {
            newsList.value = res.items
            console.log(res)
            total.value = res.nav.total
            loadBtn.value = true
        }).catch(handleError)

        return {
            newsList, loadMoreNews, loadBtn, error
        }
    }

}
</script>
