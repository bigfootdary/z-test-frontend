<template src="./index.html"></template>

<script>
export default {
    name: 'list',
    data () {
        return {
            filterInput: '',
            emptyInitListFlag: false
        }
    },
    methods: {
        loadNextChunk () {
            fetch(
                'https://my-json-server.typicode.com/bigfootdary/json-news/news-last-page'
            )
                .then((res) => res.json())
                .then((data) => {
                    this.$store.commit('fetchNextPage', data)
                })
                .catch((er) => console.log(er))
        },
        filterNews () {
            fetch(
                'https://my-json-server.typicode.com/bigfootdary/json-news/news-filtered'
                //, {
                //     method: 'post',
                //     headers: {
                //         Accept: 'application/json',
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         filterInput: this.filterInput
                //     })
                // }
            )
                .then((res) => res.json())
                .then((data) => {
                    this.$store.commit('filterNews', data)
                })
                .catch((er) => console.log(er))
        }
    },
    computed: {
        device () {
            return this.$store.state.app.device
        },
        news: {
            get () {
                return this.$store.state.news
            }
        },
        totalPage: {
            get () {
                return this.$store.state.totalPage
            }
        },
        currentPage: {
            get () {
                return this.$store.state.currentPage
            }
        },
        hideLoadBtn: {
            get () {
                return (
                    this.$store.state.currentPage ===
                    this.$store.state.totalPage
                )
            }
        }
    },
    mounted () {
        fetch('https://my-json-server.typicode.com/bigfootdary/json-news/news')
            .then((res) => res.json())
            .then((data) => {
                !data.list.length && (this.emptyInitListFlag = true)
                this.$store.commit('initialNews', data)
            })
            .catch((er) => {
                this.emptyInitListFlag = true
                console.error(er.message)
            })
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
