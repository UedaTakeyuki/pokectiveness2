import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false;
Vue.prototype.$lang = (function(){
  const browser_lang = navigator.language.toLowerCase();
  switch(true){
//    case "ja-jp":
//    case "ja":
    case /ja.*/.test(browser_lang):
      return "ja";
    case /zh.*/.test(browser_lang):
      return "zh";
//      break;
//    case "zh-CN"
    default:
      return "en";
//      break;
  }
})();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')