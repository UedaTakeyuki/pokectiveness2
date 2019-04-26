<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <v-flex text-xs-center>
        <div fixed class="grey--text">&copy; 2019 - Atelier UEDA</div>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import pokedex from './pokedex'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {Navbar},
  data () {
    return {
      poke: pokedex
      //
    }
  }
}
</script>
