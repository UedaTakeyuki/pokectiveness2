import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import pokedex from './pokedex'


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log(pokedex[0])