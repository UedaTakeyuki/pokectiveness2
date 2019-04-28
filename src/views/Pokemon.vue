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
      <TypeButton v-for="type_id in pokemons[$route.params.id - 1].type" :key="type_id" :type_id="type_id" :lang="s_lang" />
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
import TypeButton from '@/components/TypeButton'

//module.exports = {
export default {
  props: [],
  components: {TypeButton},
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
