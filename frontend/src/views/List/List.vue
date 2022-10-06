<template>
    <div class="news-page">
        <div v-if="!noNews" class="news-page__list">
            <news-card
                v-for="item in news"
                :key="item.id + Math.random()"
                :id="item.id"
                :spotlight="item.spotlight"
                :date="item.date"
                :url="item.url"
                :title="item.title"
                :theme="item.theme[0]"
            />
        </div>
        <my-button/>
        <div v-if="noNews" class="news-page__empty">Новостей нет:(</div>
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
@import '@/styles/base/_a-mixins.scss';
.news-page {
    margin: 0;
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        margin: 0 0 20px;
    }
    &__empty {
        font-weight: 400;
        font-size: $gamma-size;
        line-height: 28px;
        text-decoration: none;
        color: $black;
    }
    @include breakpoint(mobile) {
        .news-page {
            padding: 12px 16px 0;
        }
        &__list {
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            margin: 0 0 20px;
        }
    }
}
</style>
