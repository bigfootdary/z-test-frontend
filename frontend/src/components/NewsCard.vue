<template>
    <div class="news-card"
    :class="{spotlight: news.spotlight}"
    :style="news.image ? `background: url(${background}) center/cover no-repeat`: ``">
        <div class="news">
            <div class="news-date">
                <div class="date">{{news.date | momentFilter}}</div>
            </div>
            <div class="spotlight-tag" v-if="news.spotlight">В центре внимания</div>
            <div class="title">{{news.title}}</div>
        </div>
        <div class="theme">
            <div class="theme-title" v-if="theme">{{theme}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        news: {
            type: Object
        }
    },
    setup(props) {
        const theme = props.news.theme[0]
        const background = require('@/assets/img/background.png')
        return {
            theme, background
        }
    },
}
</script>

