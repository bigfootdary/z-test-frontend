<template>
  <div class="button" v-if="isShow">
    <button :type="type" :name="name" :disabled="isDisabled" :class="!!className ? `${className} button__el` : 'button__el'">
      {{title}}
    </button>
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: String,
        name: String,
        className: String,
        isDisabled: Boolean,
        isShow: Boolean,
        title: String
    },
    data: () => {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 0;
  margin: 0;
}
</style>
