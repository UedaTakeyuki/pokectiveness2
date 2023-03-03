<template>
  <div>
    <p class="grey--text text-h5 pt-3 pl-3" >News</p>
    <v-card>
      <v-card-title>
        Generation 9 are now supported.
      </v-card-title>
      <v-card-subtitle>
        March 2, 2023
      </v-card-subtitle>
      <v-card-text>
        The Pokémons of Generation 9 are supported. 
        Now, the supported Pokémons are from <router-link :to="{name: 'pokemon', params: { id: 1 }}">#0001</router-link>
        to <router-link :to="{name: 'pokemon', params: { id: 1008 }}">1008</router-link>.
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import numberOfNews from '../numberOfNews'

export default {
  mounted(){
    localStorage.setItem("numberOfReadNews", numberOfNews)
    this.$numberOfUnread = 0
  }
}
</script>