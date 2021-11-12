<template src="./index.html"></template>

<script>
import Modal from '../UI/Modal.vue'
export default {
    name: 'scheme',
    components: {
        Modal
    },
    data: () => {
        return {
            content: [
                {
                    id: '00',
                    img: '',
                    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. '
                },
                {
                    id: '01',
                    img: '',
                    text: 'Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. '
                },
                {
                    id: '02',
                    img: '',
                    text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
                },
                {
                    id: '03',
                    img: '',
                    text: 'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию.'
                },
                {
                    id: '04',
                    img: '',
                    text: ' За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты.'
                },
                {
                    id: '05',
                    img: 'https://c.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif',
                    text: ''
                }
            ],
            posX: 0,
            posY: 0,
            image: '',
            text: '',
            color: '',
            isOpen: false
        }
    },
    methods: {
        openModal (event, id) {
            this.isOpen = true
            this.color = event.target.getAttribute('fill')

            this.posX = event.pageX
            this.posY = event.pageY

            this.content.forEach((item) => {
                if (item.id === `0${id}`) {
                    this.text = item.text
                    this.image = item.img
                }
            })
        },
        closeModal (value) {
            this.isOpen = value
        }
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
