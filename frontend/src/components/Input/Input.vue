<template src="./index.html"></template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Input',
    components: {
    },
    computed: {
        ...mapState(['app'])
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
