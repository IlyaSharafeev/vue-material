<template>
<div class="news-crypto">
  <div class="news-crypto__title">
    Find out the latest crypto news
  </div>
  <div class="news-crypto__cards">
    <NewsCard v-for="(card, key) in newsCards" :card="card" :key="key"/>
  </div>
  <div class="news-crypto__description">
    Check out more of our crypto news
  </div>
  <div class="news-crypto__socials">
    <div class="news-crypto__socials-item">
      <img :src="require('@/assets/img/socials/twitter-icon.png')" alt="icon-socials" />
      Twitter
    </div>
    <div class="news-crypto__socials-item">
      <img :src="require('@/assets/img/socials/facebook-icon.png')" alt="icon-socials" />
      Facebook
    </div>
    <div class="news-crypto__socials-item">
      <img :src="require('@/assets/img/socials/linkedin-icon.png')" alt="icon-socials" />
      LinkedIn
    </div>
    <div class="news-crypto__socials-item">
      <img :src="require('@/assets/img/socials/telegram-icon.png')" alt="icon-socials" />
      Telegram
    </div>
    <div class="news-crypto__socials-item">
      <img :src="require('@/assets/img/socials/instagram-icon.png')" alt="icon-socials" />
      Instagram
    </div>
  </div>
</div>
</template>

<script>
import NewsCard from "@/components/NewsCryptoComponents/NewsCard";
import {NEWS_CARDS} from "@/data/newsCards";

export default {
  name: "NewsCrypto",
  components: {NewsCard},
  data () {
    return {
      newsCards: NEWS_CARDS,
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/scss/_mixins.scss";

.news-crypto {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;

  &__title {
    font-size: 31px;
    display: flex;
  }

  &__cards {
    display: flex;
    gap: 32px;

    @include mediaSmall {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__description {
    font-size: 15px;
  }

  &__socials {
    display: flex;
    gap: 33px;
    justify-content: center;
    flex-wrap: wrap;

    &-item {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        max-width: 16px;
        max-height: 16px;
      }
    }
  }
}
</style>
