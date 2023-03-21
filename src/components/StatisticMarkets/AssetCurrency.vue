<template>
  <div>
    <div class="md-layout asset-currency">
      <div class="md-layout-item md-small-size-25 md-medium-size-20 asset-currency__asset">
        <img :src="asset.img" alt="asset-image"/>
        {{asset.currency}}
      </div>
      <div class="md-layout-item md-small-size-25 md-medium-size-20 asset-currency__price onlyDesktop">
        {{asset.price}}
        <span>AUD</span>
      </div>
      <div class="md-layout-item md-small-size-25 md-medium-size-20 asset-currency__change">
        <span :class="{'asset-currency__change_positive': isPositiveValue(asset.change), 'asset-currency__change_negative': !isPositiveValue(asset.change)}">{{asset.change}}%</span>
        <img :src="require('@/assets/img/arrow-diagonal.png')" alt="asset-change">
      </div>
      <div class="md-layout-item md-small-size-25 md-medium-size-20 asset-currency__market-cap">
        ${{asset.marketCap}}B
      </div>
      <div class="md-layout-item md-small-size-25 md-medium-size-20 asset-currency__buy-button">
        <span>buy</span>
      </div>
    </div>
    <md-divider/>
  </div>
</template>

<script>
export default {
  name: "AssetCurrency",
  props: [
      'asset'
  ],
  methods: {
    isPositiveValue(value) {
      return value > 0;
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/scss/_mixins.scss";

.asset-currency {
  &__asset {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 15px 32px;
    font-size: 15px;
  }

  &__price {
    display: flex;
    gap: 3px;
    align-items: center;
    padding: 15px 32px;
    font-size: 15px;

    span {
      color: #A1A1AA;
    }
  }

  &__change {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 15px 32px;

    &_positive {
      color: #10B981;
    }

    &_negative {
      color: #F43F5E;
    }
  }

  &__market-cap {
    display: flex;
    align-items: center;
    padding: 15px 32px;
    font-size: 16px;
  }

  &__buy-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 32px;

    span {
      background: #4CFDC7;
      border: 1px solid #4CFDC7;
      border-radius: 4px;
      padding: 9px 17px;
    }
  }
}
</style>
