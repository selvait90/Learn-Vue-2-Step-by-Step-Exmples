import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router' 
window.Vue = Vue
window.axios = axios
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)  
}).$mount('#app')
