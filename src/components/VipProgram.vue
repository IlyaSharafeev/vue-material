<template>
<div class="vip-program">
  <div class="vip-program__name">VIP Program</div>
  <div class="vip-program__title">When you need more than just a crypto exchange</div>
  <div class="vip-program__description">Access world-class APIs, a lower fee structure and a dedicated Account Manager.</div>
  <div class="md-layout vip-program__advantages">
    <div class="vip-program__advantages-item">
      <img :src="require('@/assets/img/advantages-vip-program/advantage-1.png')" alt="advantage-1"/>
      API integrations
    </div>
    <div class="vip-program__advantages-item">
      <img :src="require('@/assets/img/advantages-vip-program/advantage-2.png')" alt="advantage-2"/>
      Lower fees
    </div>
    <div class="vip-program__advantages-item">
      <img :src="require('@/assets/img/advantages-vip-program/advantage-3.png')" alt="advantage-3"/>
      Dedicated Account Manager
    </div>
  </div>
  <div class="vip-program__button">
    Learn more
  </div>
  <div class="vip-program__banner">
    <img :src="require('@/assets/img/advantages-vip-program/banner.png')" alt="banner-vip-program"/>
  </div>
</div>
</template>

<script>
export default {
  name: "VipProgram"
}
</script>

<style scoped lang="scss">
.vip-program {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 128px;

  &__name {
    font-size: 15px;
  }

  &__title {
    margin-top: 16px;
    line-height: initial;
    font-size: 40px;
    max-width: 527px;
  }

  &__description {
    margin-top: 32px;
    font-size: 15px;
  }

  &__advantages {
    margin-top: 48px;
    display: flex;
    gap: 80px;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__button {
    cursor: pointer;
    margin-top: 90px;
    border: 1px solid #18181B;
    border-radius: 4px;
    padding: 9px 33px;
    font-size: 16px;
  }

  &__banner {
    margin-top: 64px;
  }
}
</style>
