     <template>
        <div class="news-block">
            <div class="news-list">
               <div class="news-card" v-for="post in allPosts" :key="post.id">
                  <span>{{ post.date | momentFilter }}</span>
                  <span v-if="post.spotlight">В центре внимания</span>
                  <h2>{{ post.title }}</h2>
               </div>
            </div>
            <button v-if="$store.getters.currentPage !== $store.getters.totalPages" 
             v-on:click="getNextPage">Next{{ currentPage }}</button>
        </div>
    </template>

    <script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "app",
        computed: mapGetters (["allPosts", "currentPage", "totalPages"]),
        methods: mapActions (["fetchPosts", "getNextPage"]),
        async mounted() {
            this.fetchPosts();
        },
    }
    </script>
    
    <style scoped>
    </style>