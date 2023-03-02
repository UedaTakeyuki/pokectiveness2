<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <v-flex text-xs-center>
        <div  class="grey--text">&copy; 2019 - <a href="https://www.uedasoft.com/">Atelier UEDA</a></div>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
//import pokedex from './pokedex'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {Navbar},
  data () {
    return {
//      poke: pokedex
      //
    }
  }
}
</script>

<style>
.v-footer {
  font-size: 14px;
}
</style>