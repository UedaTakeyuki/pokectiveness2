<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import pokedex from './pokedex'

export default {
  name: 'App',
  data () {
    return {
      poke: pokedex
      //
    }
  }
}
</script>
