import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
window.Vue = Vue
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)  
}).$mount('#app')
