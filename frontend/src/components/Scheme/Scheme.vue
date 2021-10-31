<template src="./index.html"></template>

<script>
export default {
    name: 'scheme',
    methods: {
        hoverOn(event, num) {
            event.target.parentElement.classList.add(`on-hover-scale__${num}`)
            event.target.parentElement.lastChild.style.display = 'none'
        },
        hoverOff(event, num) {
            event.target.parentElement.classList.remove(`on-hover-scale__${num}`)
            event.target.parentElement.lastChild.style.display = 'block'
        },
        mounted() {}
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
