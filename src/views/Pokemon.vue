<template>
  <div class="pokemon">
    <v-card color="blue-grey darken-2" class="white--text">
      <h3>{{pokemons[$route.params.id - 1].name[l_lang]}}</h3>
      <v-img
          :src="require('@/assets/ProfesseurOak/pokemon-img/normal-animated/'+('000' + $route.params.id ).slice( -3 )+'.gif')"
      >
      </v-img>
      <div>No. {{$route.params.id}}</div>
      <div>日本名：{{pokemons[$route.params.id - 1].name["japanese"]}}</div>
      <div>英語名：{{pokemons[$route.params.id - 1].name["english"]}}</div>
      <div>中国名：{{pokemons[$route.params.id - 1].name["chinese"]}}</div>
      種族：
      <router-link 
        v-for="familyname in pokemons[$route.params.id - 1].type"
        v-bind:to="path_to_types_with_id(familyname)"
        :key="familyname"
      >
        <v-btn small>{{familyname}}</v-btn>
      </router-link>
    </v-card>

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
import types from '../typeeffectiveness';

//module.exports = {
export default {
  props: [],
  data: function () {
    return {
      s_lang: "ja",
      l_lang: "japanese",
      pokemons: pokemons,
      types: types
    }
  },
  methods: {
    path_to_types_with_id: function(id){
      return "/types/" + id;
    },
  },
}
</script>
