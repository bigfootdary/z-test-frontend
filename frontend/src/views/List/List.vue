<template>
    <div class="news">
        <h2 v-if="this.news === null">Ошибка при загрузке новостей</h2>
        <div class="news__list" v-else>
            <div class="news__card"
             v-for="(item, index) in this.news"
             v-bind:key="item.id + index"
             v-bind:class="{ 'news__card-spotlight': item.spotlight }">
                <template v-if="item.spotlight">
                    <div class="news__card-date">{{ item.date | moment }}</div>
                    <div class="news__card-bottom">
                        <div class="news__card-subtitle" v-if="item.spotlight">В центре внимания</div>
                        <h3 class="news__card-title">{{ item.title }}</h3>
                    </div>
                </template>
                <template v-else>
                    <div class="news__card-top">
                        <div class="news__card-date">{{ item.date | moment }}</div>
                        <h3 class="news__card-title">{{ item.title }}</h3>
                    </div>
                    <div class="news__card-theme" v-if="item.theme[0]">{{ item.theme[0] }}</div>
                </template>
            </div>
        </div>
        <button
        class="news__button"
        v-if="pagesCurrent < pagesTotal"
        v-on:click="downloadNews">
            Загрузить еще
        </button>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'list',
    data () {
        return {
            news: [],
            pagesCurrent: '',
            pagesTotal: '',
            response: null
        }
    },
    methods: {
        fetchNews: async function () {
            try {
                this.response = await axios.get('/api/news/')
                this.news = this.response.data.items
                this.pagesCurrent = this.response.data.nav.current
                this.pagesTotal = this.response.data.nav.total
            } catch {
                console.log('error fetch')
                this.news = null
            } finally {
                console.log('finally fetch')
            }
        },
        downloadNews: async function () {
            try {
                this.pagesCurrent = this.pagesCurrent + 1
                this.response = await axios.get('/api/news/' + this.pagesCurrent)
                this.response.data.items.forEach((el) => this.news.push(el))
            } catch {
                console.log('error download')
            } finally {
                console.log('finally download')
            }
        }
    },
    filters: {
        moment: function (date) {
            return moment(date).format('DD.MM.YYYY')
        }
    },
    mounted () {
        this.fetchNews()
    }
}
</script>

<style lang="scss" scoped>
.news {
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        margin: 0 0 20px;
    }

    &__card {
        flex: 1 1 calc((100% / 3) - 16px);
        max-width: calc((100% / 3) - 16px);
        background: #F8F8F8;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-date {
            width: 77px;
            height: 21px;
            background: #97999B;
            border-radius: 2px;
            font-weight: 700;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            margin-bottom: 30px;
        }

        &-theme {
            box-sizing: border-box;
            border: 1px solid #D9D9D6;
            border-radius: 2px;
            font-weight: 700;
            font-size: 12px;
            color: #97999B;
            width: fit-content;
            padding: 0 4px;
            height: 21px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 49px;
        }

        &-title {
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            color: #000000;
            margin: 0;
        }

        &-subtitle {
            border: 1px solid #FFFFFF;
            border-radius: 2px;
            padding: 0 4px;
            font-weight: 700;
            font-size: 12px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
            width: fit-content;
            margin-bottom: 10px;
            height: 21px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-spotlight {
            flex: 1 1 calc((100% / 3) * 2 - 8px);
            max-width: calc((100% / 3) * 2 - 8px);
            background: linear-gradient(360deg, #414141 0%, rgba(59, 205, 251, 0) 100%), url("../../../static/spotlight.png") no-repeat center;
            background-size: cover;
            border: 1px solid #000000;
            backdrop-filter: blur(50px);
            color: #FFFFFF;
        }

        &-spotlight &-title {
            font-weight: 400;
            font-size: 32px;
            line-height: 41px;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }

    &__button {
        background: linear-gradient(253.21deg, #3BCDFB 38.41%, #D728F4 78.33%), #C4C4C4;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        width: 180px;
        border: none;
        height: 38px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
}

@media screen and (max-width: 1020px) {
    .news {
        &__card {
            flex: 1 1 calc((100% / 2) - 12px);
            max-width: calc((100% / 2) - 12px);

            &-spotlight {
                flex: 1 1 100%;
                max-width: 100%;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .news {
        &__list {
            gap: 0;
            margin: 0 0 25px;
        }

        &__card {
            background: #FFFFFF;
            flex: 1 1 100%;
            max-width: 100%;
            border-bottom: 1px solid #D9D9D6;
            padding: 20px 0;

            &-spotlight {
                background: #FFFFFF;
                border: none;
                border-bottom: 1px solid #D9D9D6;
            }

            &-title {
                font-size: 16px;
                line-height: 20px;
            }

            &-subtitle {
                display: none;
            }

            &-date {
                width: 68px;
                height: 18px;
                font-size: 10px;
                margin-bottom: 6px;
            }

            &-theme {
                padding: 0 3px;
                margin-top: 15px;
            }

            &-spotlight &-title {
                color: #000000;
                font-size: 16px;
                line-height: 20px;
                text-transform: none;
            }
        }

        &__button {
            color: #FFFFFF;
            width: 100%;
            max-width: 290px;
        }
    }
}
</style>
