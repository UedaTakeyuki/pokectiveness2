import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
//import './registerServiceWorker';
import numberOfNews from './numberOfNews'

Vue.config.productionTip = false;
//Vue.prototype.$lang = (function(){
const get_browser_lang = () => {
  // refer https://stackoverrun.com/ja/q/4348592#16010881 for checking if exists
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
      case /fr.*/.test(browser_lang):
        return "fr";
    //      break;
      case /de.*/.test(browser_lang):
        return "de"
      default:
        return "en";
  //      break;
    }
  }
};
//})();

// number of News
//const numberOfNews = 1

// https://stackoverflow.com/questions/49256765/change-vue-prototype-variable-in-all-components
let globalData = new Vue({
  data: {
    $lang: get_browser_lang(),
    $numberOfUnread: numberOfNews - localStorage.getItem('numberOfReadNews')
  }
});
Vue.mixin({
  computed: {
    $lang: {
      get: function () { return globalData.$data.$lang },
      set: function (newLang) { globalData.$data.$lang = newLang; }
    },
    $numberOfUnread:{
      get: function () { return globalData.$data.$numberOfUnread },
      set: function (newVal) { globalData.$data.$numberOfUnread = newVal; }
    }
  }
})
//Vue.prototype.$lang = globalData.$lang;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')