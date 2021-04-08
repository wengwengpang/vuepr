import Vue from 'vue'
import App1 from './App1.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import 'normalize.css/normalize.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App1)
}).$mount('#app')
