<template>
    <div :class="announcementClass">
        <h2 class="visually-hidden">Новость.</h2>
        <span class="announcement__date">{{announcement.date | momentFilter}}</span>
        <span v-if="announcement.spotlight" class="announcement__spotlight-title">В центре внимания</span>
        <p :class="textClass">{{ announcement.title }}</p>
        <span v-if="announcement.theme" class="announcement__theme">{{ announcement.theme[0] }}</span>
    </div>
</template>

<script>
import zebra from '../img/zebra.jpg'

export default {
    name: 'announcement-card',
    props: {
        announcement: {
            type: Object
        }
    },
    data () {
        return {
            zebra
        }
    },

    computed: {
        announcementClass () {
            if (this.announcement.spotlight) {
                return 'announcement announcement--spotlight'
            }
            return 'announcement'
        },

        textClass () {
            if (this.announcement.spotlight) {
                return 'announcement__text announcement__text--spotlight'
            }
            return 'announcement__text'
        }
    }
}
</script>
