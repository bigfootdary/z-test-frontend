<template>
    <div class="card-news" :class="{'card-news--spotlight': spotlight}" :style="mainNewsStyles">
        <div class="card-news__tag-date" :class="{'card-news__tag-date--spotlight': spotlight}">
            <span class="card-news__tag-date-value">{{ date | momentFilter('MM.DD.YYYY') }}</span>
        </div>

        <div class="card-news__center">
            <div v-if="spotlight" class="card-news__tag-spotlight">
                <span class="card-news__tag-spotlight-value">В центре внимания</span>
            </div>

            <h2 class="card-news__title" :class="{'card-news__title--spotlight': spotlight}">
                <a :href="url" class="card-news__link" :class="{'card-news__link--spotlight': spotlight}">{{ title }}</a>
            </h2>
        </div>

        <div v-if="hasThemes" class="card-news__themes">
            <span
            v-for="(theme, index) of themes"
            :key="index"
            class="card-news__theme">
                {{ theme }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardNewsItem',
    props: {
        id: {
            type: String,
            default: '',
            required: true
        },
        date: {
            type: String,
            default: '',
            required: true
        },
        image: {
            type: String,
            default: ''
        },
        spotlight: {
            type: Boolean,
            default: false
        },
        themes: {
            type: Array,
            default: () => ([])
        },
        title: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        }
    },
    computed: {
        mainNewsStyles () {
            if (this.spotlight) {
                const bgZebra = this.image || require('@/assets/images/bg-zebra.png')
                return {
                    'background-image': `url(${bgZebra})`
                }
            }
            return {}
        },
        hasThemes () {
            return (!this.spotlight && this.themes.length > 0)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/base/_a-mixins.scss';
.card-news {
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    width: 32%;
    min-width: 300px;
    min-height: 254px;

    padding: 24px;

    border: 1px solid transparent;
    background-color: $alabaster;
    margin-bottom: $grid-margin;
    margin-right: 4px;

    &--spotlight {
        width: 66%;
        padding-top: 32px;
        border: 1px solid $black;
        background: linear-gradient(360deg, #414141 0%, rgba(59, 205, 251, 0) 100%);
        backdrop-filter: blur(50px);
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
    }

    &__tag-date {
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        color: $white;

        margin-bottom: 30px;
    }

    &__tag-date-value {
        display: inline-block;
        background-color: $oslo-gray;
        padding: 8px;
        border-radius: 2px;

        &--spotlight {
            background-color: rgba(151, 153, 155, 0.5);
        }
    }

    &__tag-spotlight {
        margin-top: auto;

        margin-bottom: 8px;
    }

    &__tag-spotlight-value {
        display: inline-block;

        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        text-transform: uppercase;
        color: $white;

        padding: 4px;

        border: 1px solid $white;
        border-radius: 2px;
    }

    &__title {
        margin: 0;
        margin-top: auto;
        margin-bottom: 24px;

        &--spotlight {
            margin-bottom: 0;
        }
    }

    &__link {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-decoration: none;
        color: $black;

        &:hover {
            color: $lightning-yellow
        }

        &--spotlight {
            font-size: 32px;
            line-height: 41px;
            text-transform: uppercase;
            color: $white;
        }
    }

    &__themes {
        display: flex;

        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        color: $oslo-gray;
    }

    &__theme {
        display: inline-block;
        border: 1px solid $quill-gray;
        border-radius: 2px;

        padding: 4px;
    }

    @include breakpoint(tablet) {
        width: 48%;
        &--spotlight {
            width: 100%;
        }
    }

    @include breakpoint(mobile) {
        width: 100%;
        padding: 20px 0;
        border-bottom: 2px solid $quill-gray;
        background-color: $white;

        margin-bottom: 0;

        &--spotlight {
            display: none;
        }

        &__tag-date {
            margin-bottom: 6px;
        }

        &__tag-date-value {
            font-size: 10px;
            line-height: 12px;
        }
        &__title {
            margin-bottom: 15px;
        }
        &__link {
            font-size: 16px;
            line-height: 20px;
        }
    }

}
</style>
