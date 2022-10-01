<template>
    <div class="page-news">
        <div class="page-news__wrap">
            <div class="page-news__list">
                <div v-if="emptyNews" class="page-news__list-empty">
                    <h2>Нет новостей</h2>
                </div>
                <CardNewsItem
                    v-for="card of news"
                    :key="card.id"
                    :id="card.id"
                    :spotlight="card.spotlight"
                    :date="card.date"
                    :image="card.image"
                    :themes="card.theme"
                    :title="card.title"
                    :url="card.url" />
            </div>

            <Button
                v-if="!emptyNews"
                :class="{'button--disabled' :isLoading}"
                :disabled="isLoading"
                @click.native="onLoadNextPage"
            >Загрузить еще</Button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from '@/components/UI/Button.vue'
import CardNewsItem from '@/components/CardNewsItem.vue'
export default {
    name: 'list',
    components: {
        Button,
        CardNewsItem
    },
    data: () => ({
        currentPage: 1
    }),
    mounted () {
        this.fetchPage(this.currentPage)
    },
    computed: {
        ...mapState('app', ['isLoading', 'news', 'newsNav']),
        emptyNews () {
            return !this.isLoading && this.news.length === 0
        }
    },
    methods: {
        ...mapActions('app', ['LoadNewsPage']),
        fetchPage (page) {
            this.LoadNewsPage(page)
        },
        onLoadNextPage () {
            if (this.currentPage < this.newsNav.total) {
                this.currentPage += 1
                this.fetchPage(this.currentPage)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/styles/base/_a-mixins.scss';
    .page-news {
        &__wrap {
            max-width: $site-max-width;
            margin: 0 auto;
            padding: $horizontal-padding;
        }
        &__list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            margin-bottom: 20px;
        }
        &__list-empty {
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            text-decoration: none;
            color: $black;
        }

        @include breakpoint(mobile) {

            &__wrap {
                padding: 12px 16px 0;
            }

            &__list {
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;

                margin-bottom: 25px;
            }
        }
    }
</style>
