<template>
   <div :class="`${className} icon`">
    <svg>
      <use :href="`${sprite}#${view}`" />
    </svg>
  </div>
</template>

<script>

export default {
    name: 'Icon',
    props: {
        sprite: String,
        view: String
    }
}
</script>

<style lang="scss">
  .icon {
    svg {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
