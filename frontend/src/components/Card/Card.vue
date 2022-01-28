<template src="./index.html"></template>

<script>
import { Tag } from '../Tag'
export default {
    name: 'Card',
    components: {
        Tag
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        main: {
            type: Boolean,
            default: false
        },
        tags: {
            type: [Array, String],
            default: () => []
        },
        date: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes () {
            return {
                'card--main': this.main
            }
        },
        tagsFormated () {
            let result = []
            if ('tags' in this && Array.isArray(this.tags)) {
                result = this.tags
            }
            return result
        },
        dateFormated () {
            let date = new Date(this.date)
            let day = ('0' + (date.getDate())).slice(-2)
            let month = ('0' + (date.getMonth() + 1)).slice(-2)
            return `${day}.${month}.${date.getFullYear()}`
        }
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
