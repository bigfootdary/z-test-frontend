<template>
    <div class="news__card"
         :class="{ 'news__card-spotlight': spotlight }">
        <div v-if="spotlight">
            <div class="news__card-top">
                <div class="news__card-date">{{ date | momentFilter('DD.MM.YYYY') }}</div>
            </div>
            <div class="news__card-bottom">
                <div class="news__card-subtitle">В центре внимания</div>
                <h3 class="news__card-title__spotlight">
                    <a :href="url" target="_blank">{{ title }}</a>
                </h3>
            </div>
        </div>
        <div v-else>
            <div class="news__card-top">
                <div class="news__card-date">{{ date | momentFilter('DD.MM.YYYY') }}</div>
                <h3 class="news__card-title">
                    <a :href="url" target="_blank">{{ title }}</a>
                </h3>
            </div>
            <div class="news__card-bottom">
                <span class="news__card-theme" v-if="theme[0]">{{ theme[0] }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'news-card',
    props: {
        id: {
            type: String,
            required: true
        },
        spotlight: {
            type: Boolean,
            required: true
        },
        date: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        theme: {
            type: String | Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.news {
    &__card {
        //flex: 1 1 100%;
        max-width: calc(100% / 3 - 25px);
        background: #F8F8F8;
        margin-bottom: 24px;
        margin-right: 24px;
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
            border: 1px solid #D9D9D6;
            border-radius: 2px;
            font-weight: 700;
            font-size: 12px;
            color: #97999B;
            padding: 0 4px;
            height: 21px;
            align-items: center;
            justify-content: center;
            margin-top: 49px;
            width: max-content;
            display: inline-flex;
        }
        &-title {
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            color: #000000;
            margin: 0;
            a {
                text-decoration: none;
                color: #000000;
            }
            &__spotlight {
                a {
                    text-decoration: none;
                    color: #FFFFFF;
                }
            }
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
            margin-bottom: 10px;
            height: 21px;
            align-items: center;
            justify-content: center;
            width: max-content;
            display: inline-flex;
        }
        &-spotlight {
            //flex: 1 1 100%;
            max-width: calc(100% / 3 * 2 - 25px);
            background: linear-gradient(360deg, #414141 0%, rgba(59, 205, 251, 0) 100%), url("../../static/spotlight.png") no-repeat center;
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
}
@supports (gap: 24px) {
    .news {
        &__card {
            max-width: calc(100% / 3 - 16px);
            margin-bottom: 0;
            margin-right: 0;
            &-spotlight {
                flex: 1 1 100%;
                max-width: calc(100% / 3 * 2 - 8px);
            }
        }
    }
}
@media screen and (max-width: 1020px) {
    .news {
        &__card {
            //flex: 1 1 calc(100% / 2 - 24px);
            max-width: calc(100% / 2 - 24px);
            &-spotlight {
                //flex: 1 1 100%;
                max-width: 100%;
            }
        }
    }
    @supports (gap: 24px) {
        .news__card-spotlight {
            max-width: calc(100% - 24px);
        }
    }
}
@media screen and (max-width: 768px) {
    .news {
        &__card {
            background: #FFFFFF;
            //flex: 1 1 100%;
            max-width: 100%;
            border-bottom: 1px solid #D9D9D6;
            padding: 20px 0;
            &-spotlight {
                background: #FFFFFF;
                border: none;
                border-bottom: 1px solid #D9D9D6;
            }
            &-title {
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #000000;
                margin: 0;
                a {
                    text-decoration: none;
                    color: #000000;
                }
                &__spotlight {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 20px;
                    margin: 0;
                    a {
                        text-decoration: none;
                        color: #000000;
                    }
                }
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
        &__card:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>
