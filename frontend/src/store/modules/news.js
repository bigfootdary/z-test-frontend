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
     concatePosts(state,Newposts) {
      let arr1 = Newposts.items;
      let arr2 = state.posts;
      arr2 = [...arr2, ...arr1];
      state.posts = arr2
      state.nav.current = state.nav.current + 1
     },
  },
  actions: { 
  async fetchPosts({ commit }, currentPage = 1) {
    return fetch("http://localhost:8081/api/news/" + currentPage)
    .then((response) => response.json())
    .then((posts) => {
      commit("updatePosts", posts);
    })
    .catch((err) => console.error(err));      
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