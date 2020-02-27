<template src="./index.html"></template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'list',
    data () {
        return {
            timerId: undefined
        }
    },
    computed: {
        ...mapState({
            news: state => state.news.list,
            currentPage: state => state.news.options.currentPage,
            totalPage: state => state.news.options.total
        })
    },
    methods: {
        ...mapActions([
            'getNews',
            'searchNews'
        ]),
        inputHandler: function (e) {
            if (this.timerId) {
                clearTimeout(this.timerId)
            }
            this.timerId = setTimeout(() => {
                const val = e.target.value
                if (val) {
                    const queryString = `text=${val}`
                    this.searchNews(queryString)
                } else {
                    this.getNews({ action: 'replace', page: 1 })
                }
            }, 1000)
        }
    },
    beforeMount () {
        this.getNews()
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
