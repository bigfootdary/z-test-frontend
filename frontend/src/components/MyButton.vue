<template>
    <button
        class="news__button"
        v-if="currentPage < totalPages && !noNews"
        @click="downloadNews(2)">
        Загрузить еще
    </button>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'my-button',
    computed: mapGetters(['totalPages', 'currentPage', 'noNews']),
    methods: mapActions(['downloadNews'])
}
</script>

<style lang="scss" scoped>
.news {
    &__button {
        background: linear-gradient(253.21deg, #3BCDFB 38.41%, #D728F4 78.33%), #C4C4C4;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        width: 180px;
        border: none;
        height: 38px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
}
@media screen and (max-width: 768px) {
    .news {
        &__button {
            color: #FFFFFF;
            width: 100%;
            max-width: 290px;
        }
    }
}
</style>
