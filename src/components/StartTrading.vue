<template>
<div class="start-trading">
  <div class="start-trading__title">Start trading in 3 easy steps</div>
  <div class="md-layout start-trading__steps">
    <div class="md-layout-item start-trading__steps-step">
      <img :src="require('@/assets/img/start-trading/step-for-trading-1.png')" alt="step-for-trading"/>
      <span>1. Create</span>
      <span>Sign up and verify your free account.</span>
    </div>
    <div class="md-layout-item start-trading__steps-step">
      <img :src="require('@/assets/img/start-trading/step-for-trading-2.png')" alt="step-for-trading"/>
      <span>2. Deposit</span>
      <span>Add AUD or crypto to your wallet using our secure methods.</span>
    </div>
    <div class="md-layout-item start-trading__steps-step">
      <img :src="require('@/assets/img/start-trading/step-for-trading-3.png')" alt="step-for-trading"/>
      <span>3. Trade</span>
      <span>You’re all set. Buy, sell and trade crypto immediately.</span>
    </div>
  </div>
  <div class="start-trading__button">Get started</div>
</div>
</template>

<script>
export default {
  name: "StartTrading"
}
</script>

<style scoped lang="scss">
@import "~@/scss/_mixins.scss";

.start-trading {
  display: flex;
  gap: 84px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 122px;

  &__title {
    font-size: 48px;
    color: black;
    max-width: 395px;
    line-height: 48px;
    text-align: center;
  }

  &__steps {
    display: flex;
    gap: 97px;
    justify-content: center;
    align-items: center;

    @include mediaSmall {
      flex-direction: column;
    }

    &-step {
      display: flex;
      flex-direction: column;
      text-align: center;
      max-width: 210px;
      justify-content: center;
      align-items: center;
      gap: 16px;

      img {
        padding: 20px;
        background-color: var(--shadow);
        width: 72px;
        height: 72px;
      }
    }
  }

  &__button {
    cursor: pointer;
    background: #4CFDC7;
    border: 1px solid #4CFDC7;
    border-radius: 4px;
    padding: 9px 33px;
  }
}
</style>
