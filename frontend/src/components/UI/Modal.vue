<template>
  <div class="modal" v-if="isOpened" :style="img === '' ? { top: `${y}px`, left: `${x}px`} : { top: `${y - 210}px`, left: `${x}px`}">
    <div class="modal__content">
      <span v-if="img === '' && text !== ''" class="modal__text">{{text}}</span>
      <div v-else className="modal__image">
        <img :src="img" alt="img" />
      </div>
    </div>
    <div class="modal__close" :style="{backgroundColor: color}" @click="closeModal"/>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    data: () => {
        return {
            isOpen: false
        }
    },
    props: {
        isOpened: Boolean,
        text: String,
        img: String,
        color: String,
        x: Number,
        y: Number
    },
    methods: {
        closeModal () {
            this.$emit('onClose', false)
        }
    },
    created () {
        this.isOpen = this.isOpened
    }
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  padding: 22px 18px;
  width: 300px;
  background: #F8F8F8;
  box-shadow: 0px 4px 12px rgba(35, 31, 32, 0.2);

  &__content {
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__text {
    font: 400 16px/24px Roboto, sans-serif;
    color: #231F20;
  }

  &__close {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
