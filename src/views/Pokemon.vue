<template>
  <div class="pokemon">
    <v-card color="blue-grey darken-2" class="white--text">
      <v-img
          :src="require('@/assets/ProfesseurOak/pokemon-img/normal-animated/'+('000' + $route.params.id ).slice( -3 )+'.gif')"
      ></v-img>
      <v-card-title primary-title >
        <h3>{{pokemons[$route.params.id - 1].name[l_lang]}}</h3>
      </v-card-title>
      <p>英語名：{{pokemons[$route.params.id - 1].name["english"]}}</p>
      <p>中国名：{{pokemons[$route.params.id - 1].name["chinese"]}}</p>
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
  },
}
</script>
