<template>
  <button @click="scrollToTop" ref="appButton" class="app-button">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>

<script>
export default {
  name: "ScrollToTop",
  methods: {
    userScroll() {
      if (window.scrollY > 900) {
        this.$refs.appButton.classList.add("showButton");
      } else {
        this.$refs.appButton.classList.remove("showButton");
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.userScroll);
  },
  beforeMount() {
    window.removeEventListener("scroll", this.userScroll);
  },
};
</script>

<style scoped>
.app-button {
  border-radius: 100%;
  height: 50px;
  width: 50px;
  padding: 4px;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  display: none;
  left: 40px;
}
.showButton {
  display: block;
}
</style>
