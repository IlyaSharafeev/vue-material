<template>
  <div class="md-layout header">
    <div class="md-layout-item md-size-20 md-medium-hide">
      <img :src="require('@/assets/btc-markets-logo.png')" alt="btc-markets-logo">
    </div>
    <div class="md-layout-item md-medium-size-100 menu">
      <div class="menu-item">
        <span>Products</span>
        <i class="arrow down"></i>
      </div>
      <div class="menu-item">
        <span>Prices</span>
      </div>
      <div class="menu-item">
        <span>Buy</span>
        <i class="arrow down"></i>
      </div>
      <div class="menu-item">
        <span>OTC</span>
      </div>
      <div class="menu-item">
        <span>Learn</span>
        <i class="arrow down"></i>
      </div>
      <div class="menu-item">
        <span>Help</span>
        <i class="arrow down"></i>
      </div>
      <div class="buttons">
        <div class="button button-log-in">Log in</div>
        <div class="button button-sign-up">Sign up</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
@import "~@/scss/_mixins.scss";

.header {
  height: 66px;
  display: flex;
  align-items: baseline;
  gap: 200px;

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 32px;

    @include mediaMedium {
      justify-content: center;
    }

    .menu-item {
      display: flex;
      align-items: flex-start;

      i {
        border: solid black;
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 3px;

        &.arrow {
          margin-top: 5px;
          margin-left: 8px;
        }

        &.down {
          transform: rotate(45deg);
        }
      }
    }

    .buttons {
      display: flex;
      gap: 7px;

      @include mediaSmall {
        display: none;
      }

      .button {
        cursor: pointer;
        padding: 9px 17px;
      }

      .button-log-in {
        border: 1px solid #18181B;
        border-radius: 4px;
      }

      .button-sign-up {
        background: #4CFDC7;
        border: 1px solid #4CFDC7;
        border-radius: 4px;
      }
    }
  }
}
</style>
