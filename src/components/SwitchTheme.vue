<template>
  <md-speed-dial class="switch-theme" md-event="click" md-direction="top">
    <md-speed-dial-target class="md-primary">
      <md-icon><i class="fa-solid fa-bars"></i></md-icon>
    </md-speed-dial-target>

    <md-speed-dial-content>
      <md-button @click="switchTheme" class="md-icon-button">
        <md-icon><i class="fa-solid fa-circle-half-stroke"></i></md-icon>
      </md-button>
    </md-speed-dial-content>
  </md-speed-dial>
</template>

<script>
export default {
  name: "SwitchTheme",
  methods: {
    switchTheme() {
      const currentTheme = this.$material.theming.theme;
      if(currentTheme === 'dark') {
        document.body.removeAttribute('dark');
        this.$material.theming.theme = 'light';
      } else {
        document.body.setAttribute('dark', '');
        this.$material.theming.theme = 'dark';
      }
    }
  }
}
</script>

<style scoped lang="scss">
.switch-theme {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
