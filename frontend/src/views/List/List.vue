<template>
    <div class="announcement-container">
        <div class="list" v-if="announcements.length">
            <announcement-card v-for="(item, i) in announcements" :key="i" :announcement="item" />
        </div>
        <div v-if="!isError && !announcements.length">Новостей нет</div>
        <div v-if="isError">Ошибочка</div>
        <button v-if="isButton" class="button button--primary" @click="buttonHandler">Загрузить еще</button>
    </div>
</template>

<script>
import AnnouncementCard from '../../components/announcement-card.vue'
import {axios} from '../../utils/request'

export default {
    name: 'list',
    components: {
        AnnouncementCard
    },

    data () {
        return {
            currentPage: '',
            totalPages: '',
            announcements: [],
            isError: false
        }
    },

    mounted () {
        this.getAnnouncements()
    },

    computed: {
        isButton () {
            return this.currentPage !== this.totalPages
        }
    },

    methods: {
        async getAnnouncements () {
            const announcements = await axios.get(`/news/${this.currentPage}`)
                .then((response) => response)
                .catch(() => {
                    this.isError = true
                    return []
                })

            this.currentPage = announcements.nav.current
            this.totalPages = announcements.nav.total
            this.announcements.push(...announcements.items)
        },

        buttonHandler () {
            this.currentPage++
            this.getAnnouncements()
        }
    }
}
</script>

<style lang="scss">
.announcement-container {
    display: flex;
    flex-direction: column;
}

@media (min-width: 1440px) {
    .announcement-container {
        display: block;
    }
}
</style>
