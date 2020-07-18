import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;
//Vue.prototype.$lang = (function(){
const get_browser_lang = () => {
  if (localStorage.$lang){
    return localStorage.$lang
  } else {
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
  }
};
//})();

// https://stackoverflow.com/questions/49256765/change-vue-prototype-variable-in-all-components
let globalData = new Vue({
  data: { $lang: get_browser_lang()}
});
Vue.mixin({
  computed: {
    $lang: {
      get: function () { return globalData.$data.$lang },
      set: function (newLang) { globalData.$data.$lang = newLang; }
    }
  }
})
//Vue.prototype.$lang = globalData.$lang;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')