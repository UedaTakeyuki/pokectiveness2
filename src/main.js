import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false;
Vue.prototype.$lang = (function(){
  switch(navigator.language.toLowerCase()){
    case "ja-jp":
    case "ja":
      return "ja";
      break;
    default:
      return "en";
      break;
  }
})();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')