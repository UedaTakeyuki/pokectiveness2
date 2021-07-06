// https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7
// https://github.com/firebase/firebase-js-sdk/issues/2241
module.exports = {
//  "transpileDependencies": [
//    "vuetify"
//  ],
  chainWebpack: (config) => {
  // https://qiita.com/uturned0/items/5fdf2d92548274fe56e3
  // https://rinoguchi.net/2020/05/vue-firebase-reduce-bundle-size.html
  // https://stackoverflow.com/questions/66179210/how-to-externalize-a-lib-with-vue-cli
    config.externals({
//      firebase: 'firebase',
//      'firebase/auth': 'firebase',
//      firebaseui: 'firebaseui',
      vue: 'Vue',
      vuetify: 'Vuetify',
//      'vuetify/lib': 'Vuetify',
      'vue-router': 'VueRouter',
    })
  }
}