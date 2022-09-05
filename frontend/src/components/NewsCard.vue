<template>
    <a
        class="card"
        :href="href"
        :class="spotlight ? 'card__spotlight' : ''"
        :style="spotlight ? backgroundImage : ''"
    >
        <div
            class="card__info"
        >
            <div
                class="card__top"
                :class="spotlight ? 'card__top--spotlight': ''"
            >
                <div class="card__date">
                    <span class="card__time">{{ data | momentFilter('MM.DD.YYYY') }}</span>
                </div>
            </div>
            <div v-if="spotlight" class="card__attention">
                <span class="card__attention-text">В центре внимания</span>
            </div>
            <h3
                class="card__title header-3"
                :class="spotlight ? 'card__title--spotlight' : ''"
            >{{ title }}</h3>
            <div
                class="card__bottom"
                v-if="Array.isArray(themes)"
            >
                <div
                    class="card__themes"
                >
                    <div
                        v-for="(theme, index) in themes"
                        :key="index"
                        class="card__theme"
                    >
                        {{ theme }}
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'NewsCard',
    props: {
        data: {
            type: String,
            default () {
                return ''
            }
        },
        title: {
            type: String,
            default () {
                return ''
            }
        },
        spotlight: {
            type: Boolean,
            default () {
                return false
            }
        },
        href: {
            type: String,
            default () {
                return ''
            }
        },
        themes: {
            type: Array | String,
            default () {
                return [] | ''
            }
        },
        img: {
            type: String,
            default () {
                return ''
            }
        }
    },
    computed: {
        backgroundImage () {
            return `background: linear-gradient(360deg, #414141 0%, rgba(59, 205, 251, 0) 100%), url(${this.img})`
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;

    min-height: 254px;
    width: 100%;

    color: $black;
    text-decoration: none;
    border-bottom: 1px solid $quill-gray;

    @media screen and (min-width: 767px){
        width: 32%;

        flex-grow: 1;
        background: $alabaster;
        border-bottom: none;
    }
}

.card__info {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2.0625rem 1.5rem 1.5rem;
}

.card__top {
    display: flex;
}

.card__date {
    background-color: $oslo-gray;
    padding: 0 0.4rem;
    border-radius: 0.125rem ;
}

.card__time {
    display: inline-block;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: $white;
}

.card__bottom {
    display: flex;
    margin-top: auto;
}

.card__spotlight {
    display: none;
}

@media screen and (min-width: 768px){
    .card__spotlight {
        display: flex;
        width: 65.5%;
    }
}

.card__top--spotlight {
    margin-bottom: auto;
}

.card__title--spotlight {
    align-self: flex-end;

    font-weight: 400;
    font-size: 32px;
    line-height: 41px;
    text-transform: uppercase;
    color: $white;
}

.card__themes {
    padding: 0.125rem 0.3rem;

    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    border-radius: 0.125rem ;
    color: $oslo-gray;
    outline: 1px solid $oslo-gray;
}

.card__attention {
    display: flex;

    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    color: $white;
}

.card__attention-text {
    padding: 0.125rem 0.3rem;
    border-radius: 0.125rem ;

    outline: 1px solid white;
}

</style>
