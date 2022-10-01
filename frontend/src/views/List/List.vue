<template>
    <div class="page-news">
        <div class="page-news__wrap">
            <div class="page-news__list">
                <CardNewsItem
                    v-for="card of cardList"
                    :key="card.id"
                    :id="card.id"
                    :spotlight="card.spotlight"
                    :date="card.date"
                    :image="card.image"
                    :themes="card.theme"
                    :title="card.title"
                    :url="card.url" />
            </div>

            <Button>Загрузить еще</Button>
        </div>
    </div>
</template>

<script>
import Button from '@/components/UI/Button.vue'
import CardNewsItem from '@/components/CardNewsItem.vue'
export default {
    name: 'list',
    components: {
        Button,
        CardNewsItem
    },
    data: () => ({
        cardList: []
    })
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
