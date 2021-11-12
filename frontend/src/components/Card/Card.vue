<template>
  <div :class="[themes.length === 0 ? 'card card__withoutTheme' : 'card', spotlight ? 'card card__full' : 'card']" :style="spotlight ? spotlightStyle : null">
    <div class="card__date">
      {{date}}
    </div>
    <div v-if="spotlight" class="card__warning">
      в центре внимания
    </div>
    <div :class="spotlight ? 'card__warningTitle' : 'card__title'">
      {{title}}
    </div>
    <div class="card__themes" v-if="Array.isArray(themes)">
      <div class="card__theme" v-for="(item, i) in themes" :key="i">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    data () {
        return {
            spotlightStyle: {
                background: `linear-gradient(360deg, #414141 0%, rgba(59, 205, 251, 0) 100%), url(${this.image}) no-repeat`
            }
        }
    },
    props: {
        date: String,
        id: String,
        themes: Array | String,
        spotlight: Boolean,
        title: String,
        image: String,
        url: String
    }
}
</script>

<style lang="scss" scoped>
.card {
  width: 31.4%;
  background: #F8F8F8;
  padding: 22px 33px 24px 24px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  margin-right: 24px;
  margin-bottom: 24px;
  float: left;

  &__full {
    width: 64.5% !important;
    min-height: 254px;
    height: 100%;
    background-size: cover;
    border: 1px solid #000000;
    margin-right: 24px;
    margin-top: 0;
    box-sizing: border-box;
    backdrop-filter: blur(100px);
    padding: 28px 24px 16px 24px
  }

  &__withoutTheme {
    display: block;
  }

  &__date {
    padding: 4px 7px;
    width: fit-content;
    margin: 0 0 30px 0;
    background: #97999B;
    border-radius: 2px;
    font: 700 12px/14px Roboto, sans-serif;
    color: #FFFFFF;
  }

  &__warningTitle {
    font: 400 32px/41px Roboto, sans-serif;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  &__title {
    font: 400 24px/28px Roboto, sans-serif;
    color: #000000;
  }

  &__titleWithout {
    margin-bottom: 69px;
  }

  &__warning {
    padding: 4px 4px 2px 4px;
    margin: 70px 0 8px 0;
    width: fit-content;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 2px;
    font: 700 12px/14px Roboto, sans-serif;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  &__themes {
    margin: 23px 0 0 0;
    display: flex;
  }

  &__theme {
    border: 1px solid #D9D9D6;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 4px 6px 2px 6px;
    font: 700 12px/14px Roboto, sans-serif;
    color: #97999B;
  }

  @media (max-width: 1366px) {
    width: 30.3%;

    &__full {
      width: 62.4% !important;
    }
  }

  @media (max-width: 1024px) {
    width: 30.7%;

    &__full {
      width: 100% !important;
    }
  }

  @media (max-width: 960px) {
    width: 47%;
    margin-right: 0;

    &__title {
    font: 400 16px/20px Roboto, sans-serif;
    color: #000000;
    }
  }

  @media (max-width: 535px) {
    width: 100%;
  }
}
</style>
