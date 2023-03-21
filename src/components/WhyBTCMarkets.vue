<template>
<div class="why-btc-markets">
  <div class="why-btc-markets__title">Why BTC Markets?</div>
  <div class="md-layout why-btc-markets__facts">
    <div class="why-btc-markets__fact">
      <div class="why-btc-markets__fact-icon">
        <img :src="require('@/assets/img/facts/fact-1.png')" alt="icon fact"/>
      </div>
      <div class="why-btc-markets__fact-title">Security</div>
      <div class="why-btc-markets__fact-description">
        Multiple layers of account security, 2FA, address whitelisting, Biometrics.
      </div>
    </div>
    <div class="why-btc-markets__fact">
      <div class="why-btc-markets__fact-icon">
        <img :src="require('@/assets/img/facts/fact-2.png')" alt="icon fact"/>
      </div>
      <div class="why-btc-markets__fact-title">Speed</div>
      <div class="why-btc-markets__fact-description">
        Fast trade executions with an industry leading uptime of 99.99%.
      </div>
    </div>
    <div class="why-btc-markets__fact">
      <div class="why-btc-markets__fact-icon">
        <img :src="require('@/assets/img/facts/fact-3.png')" alt="icon fact"/>
      </div>
      <div class="why-btc-markets__fact-title">Support</div>
      <div class="why-btc-markets__fact-description">
        100% Australian-based customer support, OTC desk and VIP Program.
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "WhyBTCMarkets"
}
</script>

<style scoped lang="scss">
.why-btc-markets {
  display: flex;
  flex-direction: column;
  gap: 118px;
  margin-top: 146px;

  &__title {
    display: flex;
    font-size: 46px;
    letter-spacing: 1px;
    color: #000000;
    justify-content: center;
  }

  &__facts {
    display: flex;
    gap: 69px;
    justify-content: center;
    align-items: flex-start;

    .why-btc-markets__fact {
      display: flex;
      flex-direction: column;
      text-align: center;
      max-width: 238px;
      gap: 16px;

      &-icon {
        img {
          padding: 20px 30px;
        }
      }

      &-title {
        font-size: 20px;
      }

      &-description {
        font-size: 16px;
        margin-top: 2px;
      }
    }
  }
}
</style>
