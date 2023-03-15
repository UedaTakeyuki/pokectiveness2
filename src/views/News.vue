<template>
  <div> 
    <p class="grey--text text-h5 pt-3 pl-3" >News</p>

    <v-card class="ma-1">
      <v-card-title>
        German language supported.
      </v-card-title>
      <v-card-subtitle>
        March 15, 2023
      </v-card-subtitle>
      <v-card-text>
        The german language are supported. Total supported languages are as follows<br>
        - <b>English</b> <br>
        - <b>Français</b> <br>
        - <b>Deutsch</b> <br>
        - <b>日本語</b> <br>
        - <b>汉语</b>
      </v-card-text>
    </v-card>

    <v-card class="ma-1">
      <v-card-title>
        Generation 7 Pokémons images are now moving.
      </v-card-title>
      <v-card-subtitle>
        March 6, 2023
      </v-card-subtitle>
      <v-card-text>
        The images of Generation 7 Pokémons are changed from picture to movie. 
        Now, added moving image from <router-link :to="{name: 'pokemon', params: { id: 722 }}">No. 722</router-link>
        to <router-link :to="{name: 'pokemon', params: { id: 807 }}">No. 807</router-link>.
      </v-card-text>
    </v-card>

    <v-card class="ma-1">
      <v-card-title>
        Generation 9 are now supported.
      </v-card-title>
      <v-card-subtitle>
        March 2, 2023
      </v-card-subtitle>
      <v-card-text>
        The Pokémons of Generation 9 are supported. 
        Now, the supported Pokémons are from <router-link :to="{name: 'pokemon', params: { id: 1 }}">No. 001</router-link>
        to <router-link :to="{name: 'pokemon', params: { id: 1008 }}">No. 1008</router-link>.
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