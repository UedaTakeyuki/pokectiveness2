import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Types from './views/Types.vue'
import Pokemon from './views/Pokemon.vue'
//import pokedex from './pokedex'
//import types from './typeeffectiveness'

Vue.use(Router);

export default new Router({
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
      props: {}
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

  ]
})
