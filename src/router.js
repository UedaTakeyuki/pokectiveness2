import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Types from './views/Types.vue'
import Pokemon from './views/Pokemon.vue'
import News from './views/News.vue'
//import Pokemon_alola from './views/Pokemon_alola.vue'
import ga from 'vue-ga'
//import pokedex from './pokedex'
//import types from './typeeffectiveness'

Vue.use(Router);

//export default new Router({
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: {}
    },
    {
      path: '/types/:id',
      name: 'types',
      component: Types,
      props: {}
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: Pokemon,
      props: {
        alola: false,
      }
    },
    {
      path: '/pokemon_alola/:id',
      name: 'pokemon_alola',
//      component: Pokemon_alola,
      component: Pokemon,
      props: {
        alola: true,
      }
    },
    {
      path: '/names/:id',
      name: 'names',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Names.vue'),
      props: {}
//      props: {poke: name_a}
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue'),
      props: {}
//      props: {poke: name_a}
    },
    {
      path: '/memo',
      name: 'memo',
      component: () => import(/* webpackChunkName: "about" */ './views/Memo.vue'),
      props: {}
//      props: {poke: name_a}
    },
// refer https://stackoverflow.com/questions/50633001/vuejs-vue-router-linking-an-external-website
    {
      path: '/docs',
      name: 'docs',
      beforeEnter() {location.href = '/docs'}
    },
    {
      path: '/docs/ja',
      name: 'docs/ja',
      beforeEnter() {location.href = '/docs/ja'}
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      props: {}
//      props: {poke: name_a}
    },

  ]
})

ga(router, 'UA-43410269-6');

export default router;

