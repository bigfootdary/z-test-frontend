<template>
    <div class="news">
        <h2 v-if="noNews">Новостей нет:(</h2>
        <div v-else class="news__list">
            <news-card
                v-for="item in news"
                :key="item.id + Math.random()"
                :id="item.id"
                :spotlight="item.spotlight"
                :date="item.date"
                :url="item.url"
                :title="item.title"
                :theme="item.theme"
            />
        </div>
        <my-button/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import NewsCard from '@/components/NewsCard'
import MyButton from '@/components/MyButton'
export default {
    name: 'list',
    components: {
        MyButton,
        NewsCard
    },
    computed: mapGetters(['news', 'noNews']),
    methods: mapActions(['fetchNews', 'downloadNews']),
    mounted () {
        this.fetchNews()
    }
}
</script>

<style lang="scss" scoped>
.news {
    margin: 0 auto;
    &__list {
        display: flex;
        flex-wrap: wrap;
    }
}
@supports (gap: 24px) {
    .news {
        margin: 0;
        &__list {
            gap: 24px;
            margin: 0 0 20px;
        }
    }
}
@media screen and (max-width: 768px) {
    .news {
        &__list {
            gap: 0;
            margin: 0 0 25px;
        }
        &__button {
            color: #FFFFFF;
            width: 100%;
            max-width: 290px;
        }
    }
}
</style>
