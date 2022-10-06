<template>
    <button
        class="button"
        v-show="currentPage < totalPages && !noNews"
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
@import '@/styles/base/_a-mixins.scss';
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    border: none;
    height: 38px;
    font-weight: 700;
    font-size: $default-font-size;
    color: $white;
    background: linear-gradient(253.21deg, #3BCDFB 38.41%, #D728F4 78.33%), #C4C4C4;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

@include breakpoint(mobile) {
    .button {
        color: $white;
        width: 100%;
        max-width: 290px;
    }
}
</style>
