<template src="./index.html"></template>

<script>
export default {
    name: 'scheme',
    methods: {
        addHoverHandler: () => {
            const nodeList = document.querySelectorAll('.scheme__item')
            const list = Array.prototype.slice.call(nodeList, 0)

            list.forEach(
                function (item) {
                    const trigger = item.querySelector('.scheme-item__trigger')
                    trigger.addEventListener('mouseover', function (e) {
                        item.classList.add('scheme-item_active')
                    })
                    trigger.addEventListener('mouseout', function (e) {
                        item.classList.remove('scheme-item_active')
                    })
                }
            )
        }
    },
    mounted () {
        this.addHoverHandler()
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
