export default {
    name: 'Card',
    data () {
        return {
            isMobile: false,
            spotlightStyle: {
                background: `linear-gradient(360deg, #414141 0%, rgba(59, 205, 251, 0) 100%), url(${this.image}) no-repeat`
            }
        }
    },
    props: {
        date: String,
        id: String,
        themes: Array | String,
        spotlight: Boolean,
        title: String,
        image: String,
        url: String
    },
    methods: {
        changeResize (e) {
            this.isMobile = e.target.window.innerWidth <= 535
        }
    },
    mounted () {
        this.isMobile = window.innerWidth <= 535
        window.addEventListener('resize', this.changeResize)
    },
    destroyed () {
        window.removeEventListener('resize', this.changeResize)
    }
}
