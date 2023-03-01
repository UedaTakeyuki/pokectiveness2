<template>
  <router-link v-bind:to="path_to_pokemon_with_id(poke_id)">
    <v-btn small tile>{{nameString(poke_id)}}{{alolaNameString()}}</v-btn>
  </router-link>
</template>

<style>
/* https://stackoverflow.com/questions/47331310/changing-vuetifys-button-width-and-padding */
.v-btn {
  min-width: 0;
  padding-left: 8px!important;
  padding-right: 8px!important;
  font-size: 13px!important;
  letter-spacing: normal!important;
  margin: 0;
}
</style>

<script>
//import pokemons from '../pokedex';
import pokemon_json from '@/assets/johnuberbacher_pokemon.json' // https://raw.githubusercontent.com/johnuberbacher/pokemon_json/main/pokemon.json

//import types from '@/typeeffectiveness';
import common from '../common'; // common routines
import wordings from '../wording'; // wording definitions

export default {
  props: ['poke_id','lang', 'alola'],
  data: function () {
    return {
//      wordings: wordings,
//      pokemons: pokemons,
//      pokemon_json: pokemon_json,
//      types:types,
    }
  },
  methods: {
    path_to_pokemon_with_id: function(id){
//      return "/pokemon/" + this.props.poke.filter(member => member.name[this.l_lang] == nm)[0].id;
      if (this.alola){
        return "/pokemon_alola/" + id;
      } else {
        return "/pokemon/" + id;
      }
    },
    nameString(id){
      return pokemon_json[id - 1].name[this.lang]
    },
    alolaNameString(){
      return this.alola ? wordings.alola_general.alolan_form_str[this.s_lang] : ""
    }
  },
    computed: {
    l_lang: common.l_lang,
    s_lang: common.s_lang,
  }
}
</script>