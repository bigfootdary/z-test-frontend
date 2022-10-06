<template>
    <div class="news__card"
         :class="{ 'news__card-spotlight': spotlight }">
        <div>
            <div class="news__card-top">
                <div class="news__card-date">
                    {{ date | momentFilter('DD.MM.YYYY') }}
                </div>
                <div v-if="!spotlight">
                    <h3 class="news__card-title">
                        <a :href="url" target="_blank">{{ title }}</a>
                    </h3>
                </div>
            </div>
            <div class="news__card-bottom">
                <div v-if="spotlight"><div class="news__card-des">В центре внимания</div>
                    <h3 class="news__card-title__spotlight">
                        <a :href="url" target="_blank">{{ title }}</a>
                    </h3></div>
                <div v-else>
                    <span class="news__card-theme" v-if="theme">{{ theme }}</span>
                </div>
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
@import '@/styles/base/_a-mixins.scss';
.news {
    &__card {
        display: flex;
        flex-direction: column;
        max-width: calc(100% / 3 - 16px);
        background: $alabaster;
        margin-bottom: 0;
        margin-right: 0;
        padding: 24px;
        &-date {
            display: flex;
            align-items: center;
            justify-content: center;
            background: $oslo-gray;
            color: $white;
            width: 77px;
            height: 21px;
            border-radius: 2px;
            font-weight: 700;
            font-size: 12px;
            margin-bottom: 30px;
        }
        &-theme {
            display: inline-flex;
            padding: 0 4px;
            margin-top: 49px;
            color: $oslo-gray;
            border: 1px solid $quill-gray;
            border-radius: 2px;
            font-weight: 700;
            font-size: 12px;
        }
        &-title {
            margin: 0;
            color: $black;
            font-weight: 400;
            font-size: 24px;
            a {
                text-decoration: none;
                color: $black;
            }
            &__spotlight {
                a {
                    text-decoration: none;
                    color: $white;
                }
            }
        }
        &-des {
            display: inline-flex;
            height: 21px;
            color: $white;
            border: 1px solid $white;
            padding: 0 4px;
            margin-bottom: 10px;
            font-weight: 700;
            font-size: 12px;
            text-transform: uppercase;
        }
        &-spotlight {
            flex: 1 1 100%;
            max-width: calc(100% / 3 * 2 - 8px);
            background: linear-gradient(360deg, #414141 0%, rgba(59, 205, 251, 0) 100%), url("../../static/spotlight.png") no-repeat center;
            background-size: cover;
            border: 1px solid $black;
            backdrop-filter: blur(50px);
            color: $white;
        }
        &-spotlight &-title {
            font-weight: 400;
            font-size: $default-font-size * 2;
            color: $white;
        }
    }
}
@include breakpoint(tablet) {
    .news {
        &__card {
            max-width: calc(100% / 2 - 24px);
            &-spotlight {
                max-width: 100%;
            }
        }
    }
}
@include breakpoint(mobile) {
    .news {
        &__card {
            background: $white;
            max-width: 100%;
            border-bottom: 1px solid $quill-gray;
            padding: 20px 0;
            &-spotlight {
                border: none;
                border-bottom: 1px solid $quill-gray;
            }
            &-title {
                font-weight: 400;
                font-size: $default-font-size;
                line-height: 20px;
                color: $black;
                margin: 0;
                a {
                    text-decoration: none;
                    color: $black;
                }
                &__spotlight {
                    font-size: $default-font-size;
                    font-weight: 400;
                    line-height: 20px;
                    margin: 0;
                    a {
                        text-decoration: none;
                        color: $black;
                    }
                }
            }
            &-des {
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
                color: $black;
                font-size: $default-font-size;
                line-height: 20px;
                text-transform: none;
            }
        }
    }
}
</style>
