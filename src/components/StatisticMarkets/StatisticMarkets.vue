<template>
<div class="statistic-markets">
  <div class="statistic-markets__tabs">
    <div class="statistic-markets__tabs-item statistic-markets__tabs-item_active">Most Popular</div>
    <div class="statistic-markets__tabs-item">Top Movers</div>
  </div>
  <md-divider/>
  <div class="statistic-markets__list-assets">
    <div class="statistic-markets__list-assets__title md-layout">
      <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20">Asset</div>
      <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20 onlyDesktop">Last Price</div>
      <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20">24hr Change</div>
      <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20">Market Cap</div>
      <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20"></div>
    </div>
    <md-divider/>
    <AssetCurrency v-for="(asset, key) of assetsCurrencies" :asset="asset" :key="key"/>
  </div>
  <div class="statistic-markets__footer">
    <img :src="require('@/assets/img/assets-currencies/asset-currencies-1.png')" alt="asset-currencies"/>
    <img :src="require('@/assets/img/assets-currencies/asset-currencies-2.png')" alt="asset-currencies"/>
    <img :src="require('@/assets/img/assets-currencies/asset-currencies-3.png')" alt="asset-currencies"/>
    <img :src="require('@/assets/img/assets-currencies/asset-currencies-4.png')" alt="asset-currencies"/>
    View all markets
    <img :src="require('@/assets/img/arrow-right.png')" alt="arrow-right" />
  </div>
</div>
</template>

<script>
import AssetCurrency from "@/components/StatisticMarkets/AssetCurrency";
export default {
  name: "StatisticMarkets",
  components: {AssetCurrency},
  data() {
    return {
      assetsCurrencies: [
        {
          currency: "XRP",
          img: require('@/assets/img/assets-currencies/asset-currencies-1.png'),
          price: "$0.5617",
          change: "1.57",
          marketCap: "28",
        },
        {
          currency: "Bitcoin",
          img: require('@/assets/img/assets-currencies/asset-currencies-2.png'),
          price: "$30,165.43",
          change: "-0.08",
          marketCap: "582",
        },
        {
          currency: "Ethereum",
          img: require('@/assets/img/assets-currencies/asset-currencies-3.png'),
          price: "$2,215.50",
          change: "-1.08",
          marketCap: "267",
        },
        {
          currency: "Tether",
          img: require('@/assets/img/assets-currencies/asset-currencies-4.png'),
          price: "$1.4544",
          change: "2.36",
          marketCap: "96",
        },
        {
          currency: "Enjin Coin",
          img: require('@/assets/img/assets-currencies/asset-currencies-5.png'),
          price: "$0.6129",
          change: "16.41",
          marketCap: "629",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.statistic-markets {
  box-shadow: 0 0 16px rgba(9, 24, 26, 0.04);
  border-radius: 8px;

  &__tabs {
    display: flex;
    justify-content: center;
    gap: 32px;

    &-item {
      padding-top: 23px;
      padding-bottom: 26px;
      color: #71717A;
    }

    &-item_active {
      color: #18181B;
    }
  }

  &__list-assets {
    &__title {


      &-item {
        padding: 15px 32px;
        color: #18181B;
        font-size: 14px;
      }
    }
  }

  &__footer {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 22px;

    img:not(:last-child) {
      width: 24px;
      height: 24px;
    }

    img:not(:first-child):not(:last-child) {
      margin-left: -20px;
    }
  }
}
</style>
