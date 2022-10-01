<template>
    <button class="button button--load-more">
        <slot />
    </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button{
    &--load-more {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
        background: linear-gradient(253.21deg, #3BCDFB 38.41%, #D728F4 78.33%), #C4C4C4;
        mix-blend-mode: normal;
        transition: background .4s ease-out;

        &:hover {
            background: linear-gradient(330deg, #3BCDFB 38.41%, #D728F4 78.33%), #C4C4C4;
            transition: background .4s ease-in;
        }
    }
}
</style>
