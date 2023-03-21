<template>
  <div class="news-card">
    <div class="news-card__image">
      <img :src="require('@/assets/img/news-card/card-cover.png')" alt="card cover"/>
    </div>
    <div class="news-card__content">
      <div class="news-card__content-subtitle">
        <div class="news-card__content-subtitle__billet">Newsletter</div>
        <div class="news-card__content-subtitle__date">Jan 19th 2023</div>
      </div>
      <div class="news-card__content-title">
        This Week in Crypto: 19th January 2023
      </div>
      <div class="news-card__content-button">
        Read more
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard"
}
</script>

<style scoped lang="scss">
.news-card {
  background-color: #fcf4f1;

  &__image {

    img {
      width: 100%;
    }
  }

  &__content {
    padding-top: 16px;
    padding-left: 16px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-subtitle {
      display: flex;
      align-items: center;
      gap: 16px;

      &__billet {
        background: #BDFFEB;
        padding: 6px 8px;
      }

      &__date {
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 1px;
      }
    }

    &-title {
      font-size: 24px;
      line-height: 30px;
      color: #18181B;
    }

    &-button {
      cursor: pointer;
      font-size: 16px;
      line-height: 20px;
      margin-top: 16px;
      color: #18181B;
    }
  }
}
</style>
