import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  el: "#js-list",
  data: {
    firstArticle: {},
    news: [],
    articlesShown: 0,
    articlesToShow: 0,
    searchValue: "",
    hasError: false,
    serverFilteredNews: [],
    errorMessage: 'Ни чего нет :(',
    formSubmitted: false
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
    onSubmit() {
      if (this.searchValue.length !== 0) {
        $.get("https://api.myjson.com/bins/jsox8", data => {
          const serverFilteredNews = data.news.filter(n => (
            n.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0
          ));
          this.formSubmitted = true;
          this.serverFilteredNews = serverFilteredNews;
        }).fail(err => {
          this.hasError = true;
        });
      }
    }
  },
});
