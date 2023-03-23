<template>
<div class="statistic-markets">
  <md-tabs md-active-tab="top-movers" md-alignment="centered" class="statistic-markets__tabs">
    <md-tab id="most-popular" class="statistic-markets__tabs-item statistic-markets__tabs-item_active" md-label="Most Popular">
      <div class="statistic-markets__list-assets">
        <div class="statistic-markets__list-assets__title md-layout">
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20">Asset</div>
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20 onlyDesktop">Last Price</div>
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20">24hr Change</div>
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20">Market Cap</div>
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20"></div>
        </div>
        <md-divider/>
        <AssetCurrency v-for="(asset, key) of assetsCurrency" :asset="asset" :key="key"/>
      </div>
    </md-tab>
    <md-tab id="top-movers" class="statistic-markets__tabs-item" md-label="Top Movers">
      <div class="statistic-markets__list-assets">
        <div class="statistic-markets__list-assets__title md-layout">
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20">Asset</div>
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20 onlyDesktop">Last Price</div>
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20">24hr Change</div>
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20">Market Cap</div>
          <div class="statistic-markets__list-assets__title-item md-layout-item md-size-20"></div>
        </div>
        <md-divider/>
        <AssetCurrency v-for="(asset, key) of assetsCurrency.slice().reverse()" :asset="asset" :key="key"/>
      </div>
    </md-tab>
  </md-tabs>
  <md-divider/>
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
import { ASSETS_CURRENCY } from "@/data/statisticMarkets";

export default {
  name: "StatisticMarkets",
  components: {AssetCurrency},
  data () {
    return {
      assetsCurrency: ASSETS_CURRENCY,
      showMiddleTab: false,
      showLastTab: false,
      dynamicId: 100
    }
  }
}
</script>

<style scoped lang="scss">
.statistic-markets {
  box-shadow: 0 0 16px var(--shadow);
  border-radius: 8px;

  &__tabs {
    display: flex;
    justify-content: center;

    &-item {
      padding-top: 23px;
      padding-bottom: 26px;
      color: var(--main-slide-description);
    }

    &-item_active {
      color: var(--main-slide-description);
    }
  }

  &__list-assets {
    &__title {


      &-item {
        padding: 15px 32px;
        color: var(--main-slide-title);
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
