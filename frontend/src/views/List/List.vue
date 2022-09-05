<template>
    <div
        class="list"
    >
        <div v-if="showPosts"
             class="list__wrapper">
            <div
                class="list__cards"
            >
                <NewsCard
                    class="list__item"
                    v-for="post in posts"
                    :key="post.id"
                    :date="post.date"
                    :id="post.id"
                    :title="post.title"
                    :themes="post.theme"
                    :img="post.image"
                    :spotlight="post.spotlight"
                    :href="post.href"
                />
            </div>

            <Button
                v-if="unvisibleButton"
                placeholder="Загрузить еще"
                className="button button--primary"
                @click="getNews(currentPage + 1)"
            />
        </div>

        <div v-else class="list__empty">
            <h3 class="header-2">Новости отсутсвутют...</h3>
        </div>

    </div>
</template>

<script>
import {getNews} from '../../../../api/news'
import NewsCard from '../../components/NewsCard'
import Button from '../../components/Button'

export default {
    name: 'list',
    components: {
        NewsCard,
        Button
    },
    data () {
        return {
            posts: [],
            nav: {},
            currentPage: 1
        }
    },
    methods: {
        getNews (page) {
            getNews(page)
                .then((response) => {
                    if (this.nav.total >= page) {
                        this.posts = [...this.posts, ...response.items]
                        this.currentPage++
                    } else {
                        this.posts = response.items
                    }
                    this.nav = response.nav
                }).catch((err) => {
                    console.log(err)
                })
        }
    },
    computed: {
        unvisibleButton () {
            return this.nav.total !== this.currentPage
        },
        showPosts () {
            return this.posts.length > 0
        }
    },
    mounted () {
        this.getNews(this.currentPage)
    }
}
</script>

<style lang="scss" scoped>
.list__cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 1.25rem;
    column-gap: 1.25rem;

    margin-bottom: 1.5625rem;

    @media screen and (min-width: 767px) {
        flex-direction: row;

        margin-bottom: 1.25rem;
    }
}

.button {
    width: 100%;
}

@media screen and (min-width: 768px){
    .button {
        width: auto;
    }
}

</style>
