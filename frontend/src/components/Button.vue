<template>
    <button
        :class="className"
        disable="disable"
        @click="$emit('click')"
    >
        {{ placeholder }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        placeholder: {
            type: String,
            default () {
                return ''
            }
        },
        disable: {
            type: Boolean,
            default () {
                return false
            }
        },
        className: {
            type: String,
            default () {
                return ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
