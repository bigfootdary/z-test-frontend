export default {
  state: {
      posts: [],
      nav: {},
  },
  mutations: {
    updatePosts(state, posts) {
       state.posts = posts.items;
       state.nav = posts.nav;
    },
     concatePosts(state,Newposts,nav) {
      let arr1 = Newposts.items;
      let arr2 = state.posts;
      arr2 = [...arr2, ...arr1];
      state.posts = arr2
      state.nav.current = state.nav.current + 1
     }
  },
  actions: { 
  async fetchPosts({ commit }, currentPage = 1) {
    const res = await fetch (
      "http://localhost:8081/api/news/" + currentPage 
  );
    const posts = await res.json();
    commit('updatePosts', posts)
   },
   async getNextPage({ commit, getters }) {
    const res = await fetch (
      "http://localhost:8081/api/news/" + (parseInt(getters.currentPage) + 1) 
  );
    const Newposts = await res.json();
    commit('concatePosts', Newposts)
  }
  },
  getters: {
    allPosts(state) {
     return state.posts;
    },
    currentPage(state) {
      return state.nav.current;
    },
    totalPages(state) {
      return state.nav.total;
    }
  }
}