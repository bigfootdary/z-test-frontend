     <template>
        <div class="news-block">
            <div class="news-list">
               <div class="news-card"
                 :class="{spotlight: post.spotlight}"
                 v-for="post in allPosts" :key="post.id">
                  <div class="news-date">
                    <span class="date">{{ post.date | momentFilter }}</span>
                  </div>
                  <span v-if="post.spotlight">В центре внимания</span>
                  <h2 class="title">{{ post.title }}</h2>
                  <span v-if="post.theme" class="theme-title">{{ post.theme[0] }}</span>
               </div>
            </div>
            <div class="load">
                <button class="load-button"
                 v-if="$store.getters.currentPage !== $store.getters.totalPages" 
                 v-on:click="getNextPage">Загрузить ещё</button>
            </div>
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