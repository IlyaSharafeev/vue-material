<template>
  <div :style="{paddingTop: `${top}px`, paddingBottom: `${bottom}px`}">
    <md-divider/>
  </div>
</template>

<script>
export default {
  name: "Divider",
  props: ['top', 'bottom'],

}
</script>
