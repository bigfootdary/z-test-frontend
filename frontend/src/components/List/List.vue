<template src="./index.html"></template>

<script>
import axios from "axios";

export default {
    name: "list",
    data() {
        return {
            msg: "WELCOME!!",
            firstArticle: {},
            news: [],
            currentPage: 1,
            totalPages: 5,
            searchValue: "",
            isError: false
        };
    },
    mounted() {
        axios
            .get("https://api.myjson.com/bins/m4a6k")
            .then(response => {
                let { data } = response;
                console.log(data);
                if (!data.news || (data.news && data.news.length === 0)) {
                    this.isError = true;
                } else {
                    this.firstArticle = data.news[0];
                    this.currentPage = data.page.current;
                    this.totalPages = data.page.total;
                    this.news = data.news;
                }
            })
            .catch(err => {
                this.isError = true;
            });
    },
    methods: {
        loadMore() {
            axios
                .get("https://api.myjson.com/bins/12o4ss")
                .then(response => {
                    let { data } = response;
                    if (!data.news || (data.news && data.news.length === 0)) {
                        console.log("neews not available^:)");
                    } else {
                        this.news = [...this.news, ...data.news];
                        this.currentPage = data.page.current;
                    }
                })
                .catch(err => {
                    this.isError = true;
                });
        }
    },
    computed: {
        filteredList() {
            const filteredNews = this.news.filter(n => {
                return (
                    n.title
                        .toLowerCase()
                        .indexOf(this.searchValue.toLowerCase()) >= 0
                );
            });
            if (this.searchValue.length !== 0) {
                return filteredNews;
            } else {
                return filteredNews.slice(1);
            }
        }
    }
};
</script>

<style lang="scss" src="./index.scss"></style>
