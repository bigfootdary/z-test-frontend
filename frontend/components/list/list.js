import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  el: "#js-list",
  data: {
    firstArticle: {},
    news: [],
    articlesShown: 0,
    articlesToShow: 0,
    searchValue: '',
    hasError: false,
  },
  mounted() {
    $.get("https://api.myjson.com/bins/m4a6k", data => {
      if (!data.news || (data.news && data.news.length === 0)) {
        this.hasError = true;
      } else {
        this.firstArticle = data.news[0];
        this.articlesShown = data.page.total;
        this.articlesToShow = data.page.total;
        this.news = data.news.slice(1);
      }
    }).fail(err => {
      this.hasError = true;
    });
  },
  methods: {
    loadMore() {
      this.articlesShown *= 2;
    },
  },
  computed: {
    filteredList() {
      // $.get('https://api.myjson.com/bins/jsox8', data => {
      //   console.log(data)
      // }).fail(err => {
      //   console.error(err)
      // })
      const filteredNews = this.news.filter(n => {
        return n.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0;
      });
      console.log(filteredNews)
      if (this.searchValue.length !== 0) {
        return filteredNews;
      }
      else {
        return filteredNews.slice(0, this.articlesShown);
      }
    },
  }
});
