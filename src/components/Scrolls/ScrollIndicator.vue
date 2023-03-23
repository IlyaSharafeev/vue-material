<template>
  <div class="header">
    <div v-show="this.showScroll" class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollIndicator",
  mounted() {
    window.addEventListener("scroll", () => {
      this.showScroll = window.scrollY > 0;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    });
  },
  data() {
    return {
      showScroll: false,
    }
  }
}
</script>

<style scoped lang="scss">
/* Style the header: fixed position (always stay at the top) */
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
}

/* The progress container (grey background) */
.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

/* The progress bar (scroll indicator) */
.progress-bar {
  height: 8px;
  border-radius: 0 4px 4px 0;
  background: #04AA6D;
  width: 0%;
}
</style>
