<template>
  <div class="names">
<!--    <router-link 
      v-for="(pokemon, index) in poke.filter(member => member.name.japanese[0] == $route.params.id)"
      v-bind:to="path_to_types_with_id(pokemon.id)"
      :key="index"
    >-->
    <router-link 
      v-for="(pokemon, index) in pokemon_whose_name_start_with($route.params.id)" 
      v-bind:to="path_to_pokemon_with_id(pokemon.id)"
      :key="index"
    >
<!--      <v-btn small v-for="(pokemon, index) in poke.filter(member => member.name.japanese[0] == $route.params.id)" :key="index">{{pokemon.name.japanese}}</v-btn> -->
      <v-btn small>{{pokemon.name[l_lang]}}</v-btn>
    </router-link>
  </div>
</template>

<style>
/* https://stackoverflow.com/questions/47331310/changing-vuetifys-button-width-and-padding */
.v-btn {
  min-width: 0;
/*  padding: 0; */
  margin: 0;
}
</style>

<script>
import pokemons from '../pokedex';
//let pokemons = require('../pokedex');

// module.exports = { // TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
export default {
  props: [],
  data: function () {
    return {
      s_lang: "ja",
      l_lang: "japanese",
      pokemons: pokemons,
    }
  },
  methods: {
    pokemon_whose_name_start_with(str){
//      return list.filter(member => this.is_start_with(member.name.japanese[0],str));
      return pokemons.filter(member => this.is_start_with(member.name.japanese[0],str));
    },
    is_start_with(c, str){
      for (let i in str.split("")){
        if (c == str[i]){
          return true;
        }
      }
      return false;
    },
    path_to_pokemon_with_id: function(id){
//      return "/pokemon/" + this.props.poke.filter(member => member.name[this.l_lang] == nm)[0].id;
      return "/pokemon/" + id;
    },
  },
}
</script>
