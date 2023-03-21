import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import "@/scss/globals.scss";
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/vue-material.min.js'
import 'vue-material/dist/theme/prebuilt/default.scss'
import 'vue-material/dist/theme/default-dark.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'


Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
