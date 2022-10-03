<template>
    <div>
        <ul v-for="post in posts">
            <li key="post.id">
                <div>{{ post.date, 'DD.MM.YYYY' | momentFilter }}</div>
                <div>{{ post.title }}</div>
                <div>{{ post.theme[0] }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import {axios} from '@/utils/request'

export default {
    name: 'list',
    data: function () {
        return {
            posts: []
        }
    },
    methods: {
        fetchPosts: async function () {
            try {
                const response = await axios.get('http://localhost:8081/api/news/')
                this.posts = response.items
                console.log(this.posts)
            } catch (e) {
                alert(e)
            }
        }
    },
    mounted () {
        this.fetchPosts()
    }
    // filters: momentFilter
}
</script>

<style lang="scss">
</style>
