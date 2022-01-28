<template src="./index.html"></template>

<script>
import Card from '../Card'
import UiButton from '../Button'
import UiInput from '../Input'
import { mapState } from 'vuex'

export default {
    name: 'list',
    components: {
        Card,
        UiButton,
        UiInput
    },
    computed: {
        ...mapState(['news', 'app']),
        nextPage () {
            return this.news.page.current + 1
        }
    },
    methods: {
        loadMore () {
            this.$store.dispatch('getNews', this.nextPage)
        },
        filterNews (filter) {
            console.log(filter)
            this.$store.dispatch('getFilteredNews', filter)
        }
    },
    mounted () {
        this.$store.dispatch('getNews')
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
