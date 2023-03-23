<template>
  <div class="main-slide">
    <div class="main-slide__actions-side">
      <div class="main-slide__actions-side-title">
        Buy, sell and trade crypto today
      </div>
      <div class="main-slide__actions-side-description">
        Trade with confidence and build your future with Australia’s fastest crypto exchange.
      </div>
      <div class="main-slide__actions-side-buttons">
        <div class="main-slide__actions-side-buttons__button main-slide__actions-side-buttons_green">Get started</div>
        <div class="main-slide__actions-side-buttons__button">View exchange</div>
      </div>
    </div>
    <div class="main-slide__photo-side">
      <img :src="require('@/assets/phone-display.png')" alt="phone-side"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSlide"
}
</script>

<style scoped lang="scss">
@import "~@/scss/_mixins.scss";

.main-slide {
  display: flex;
  gap: 132px;
  margin-top: 100px;

  @include mediaSmall {
    flex-direction: column;
  }

  &__actions-side {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-title{
      font-size: 71px;
      line-height: 90px;
      letter-spacing: 1px;
      color: var(--main-slide-title);
    }

    &-description {
      max-width: 461px;
      margin-top: 32px;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.1px;
      color: var(--main-slide-description);
    }

    &-buttons {
      display: flex;
      margin-top: 30px;
      gap: 16px;

      &__button {
        cursor: pointer;
        border-radius: 4px;
        padding: 9px 33px;
        border: 1px solid var(--border-button);
      }

      &_green {
        background: #4CFDC7;
        border: 1px solid #4CFDC7;
      }
    }
  }

  &__photo-side {
    min-width: 293px;
    padding-right: 52px;

    @include mediaSmall {
      padding-right: initial;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
