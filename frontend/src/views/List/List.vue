<template>
    <div class="list">
        <div class="list__cards" v-if="news.length !== 0">
            <Card
                v-for="card in news"
                :key="card.id"
                :date="card.date"
                :id="card.id"
                :themes="card.theme"
                :spotlight="card.spotlight"
                :title="card.title"
                :image="card.image"
                :url="card.url"
            />
        </div>
        <div class="list__cards" v-else>
            <h3 class="list__cards--silence">Новости отсутствуют...</h3>
        </div>
        <div class="list__buttonLoaded" v-if="news.length !== 0">
            <Button
                type="button"
                name="loadCards"
                :isShow="!isShow"
                className="list__button"
                title="Загрузить ещё"
                @click.native="setCurrent"
            />
        </div>
    </div>
</template>

<script>
import Card from '../../components/Card/Card.vue'
import Button from '../../components/UI/Button/Button.vue'

export default {
    name: 'list',
    data: () => {
        return {
            cards: [],
            count: 1
        }
    },
    components: {
        Card, Button
    },
    methods: {
        setCurrent () {
            if (this.count !== this.total) {
                this.count++
            } else this.count = this.total
        }
    },
    watch: {
        count (val) {
            this.$store.dispatch('GET_CARDS_FROM_API', val)
        }
    },
    computed: {
        news () {
            return this.$store.getters.getCards.list
        },
        current () {
            return this.$store.getters.getCurrent
        },
        total () {
            return this.$store.getters.getTotal
        },
        isShow () {
            return this.$store.getters.getCurrent === this.$store.getters.getTotal
        }
    },
    mounted () {
        this.$store.dispatch('GET_CARDS_FROM_API', this.count)
    }
}
</script>

<style lang="scss">
.list {
  width: 100%;

  &__cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 30px;
    margin-bottom: -4px;
  }

  &__button {
    width: 180px;
    height: 38px;
    background: linear-gradient(253.21deg, #3BCDFB 38.41%, #D728F4 78.33%), #C4C4C4;
    mix-blend-mode: normal;
    font: 700 16px/19px Roboto, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    border: none;
    outline: none;
  }

  @media (max-width: 960px) {
    &__cards {
      justify-content: space-between;
    }
  }

  @media (max-width: 535px) {
    &__buttonLoaded {
        margin-top: 25px;
    }
  }
}
</style>
