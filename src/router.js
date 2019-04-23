import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import pokedex from './pokedex'

Vue.use(Router)

//const name_a = pokedex.filter(member => member.name.japanese[0] == "ア");

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      props: {poke: pokedex}
//      props: {poke: name_a}
    }
  ]
})
