<template src="./index.html"></template>

<script>
import Input from '../UI/Input.vue'
import Button from '../UI/Button.vue'
import Card from '../Card/Card.vue'

export default {
    name: 'list',
    data: () => {
        return {
            cards: [],
            page: {},
            loaded: false,
            value: '',
            onShow: true
        }
    },
    components: {
        Input, Card, Button
    },
    computed: {
        searchHandler () {
            return this.cards.filter(elem => {
                return elem.title.toLowerCase().includes(this.value)
            })
        }
    },
    methods: {
        searchCards (value) {
            this.value = value
        },
        setData () {
            this.cards = this.$store.getters.getCards.list
            this.loaded = this.$store.getters.getCards.loaded
            this.page = this.$store.getters.getCards.page
        },
        getDataFromStore (url, clear, isShowButton) {
            if (clear) {
                this.$store.commit('CLEAR_STATE')
                this.setData()
            };
            this.$store.dispatch('GET_CARDS_FROM_API', {
                url: url
            })
            if (this.cards.length === 0 && !clear) {
                this.onShow = false
            } else {
                this.onShow = isShowButton
            }
        }
    },
    created () {
        this.getDataFromStore('https://my-json-server.typicode.com/bigfootdary/json-news/news', true, true)
    },
    mounted () {
        this.setData()
    },
    updated () {
        this.setData()
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
