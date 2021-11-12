<template>
  <div class="input">
    <label class="input__label" :for="id">
      <input
      :type="type"
        :id="id"
        v-model.trim="value"
        @focus="focusInput"
        @input="changeValue"
        @blur="blurInput"
        class="input__el"
        :placeholder="placeholder" />
      <IconSearch v-if="!!icon" class="input__icon" />
    </label>
  </div>
</template>

<script>
import IconSearch from '../UI/Icons/IconSearch.vue'
export default {
    name: 'Input',
    components: {
        IconSearch
    },
    props: {
        type: String,
        id: String,
        placeholder: String,
        icon: Boolean
    },
    data: () => {
        return {
            value: ''
        }
    },
    methods: {
        changeValue () {
            this.$emit('onChange', this.value)
        },
        focusInput () {
            this.$emit('onFocus')
        },
        blurInput () {
            this.$emit('onBlur')
        }
    }
}
</script>

<style lang="scss">
.input {

  &__label {
    position: relative;
  }

  &__el {
    max-width: 412px;
    width: 100%;
    height: 48px;
    border-bottom: 2px solid #D9D9D6;
    padding: 12px 12px 12px 48px;
  }

  &__icon {
    position: absolute;
    top: 0;
    left: 15px;
  }
}
</style>
