<template>
  <div class="names">
    <NameButton v-for="poke_id in pokemon_whose_name_start_with($route.params.id).sort(function(a,b){return (a.name[l_lang] >= b.name[l_lang] ? 1: -1);}).map(function(element){return element.id;})"
                :key="poke_id" 
                :poke_id="poke_id" 
                :lang="l_lang"
                :alola="false"
    />
    <NameButton v-for="poke_id in pokemon_alola_whose_name_start_with($route.params.id).sort(function(a,b){return (a.name[l_lang] >= b.name[l_lang] ? 1: -1);}).map(function(element){return element.id;})"
                :key="poke_id" 
                :poke_id="poke_id" 
                :lang="l_lang"
                :alola="true"
    />
  </div>
</template>

<script>
import pokemons from '../pokedex';
import pokemon_json from '@/assets/johnuberbacher_pokemon.json' // https://raw.githubusercontent.com/johnuberbacher/pokemon_json/main/pokemon.json

import pokemons_alola from '../alola';
//let pokemons = require('../pokedex');
import NameButton from '@/components/NameButton';
//import NameButton_alola from '@/components/NameButton_alola';
import common from '../common'; // common routines

// module.exports = { // TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
export default {
  props: [],
//  components: {NameButton, NameButton_alola},
  components: {NameButton},
  data: function () {
    return {
      pokemons: pokemons,
      pokemons_alola: pokemons_alola,
    }
  },
  methods: {
    pokemon_whose_name_start_with(str){
//      return pokemons.filter(member => this.is_start_with(member.name[this.l_lang][0],str));
//      pokemon_json.filter(member => console.log(member.id, member.name[this.l_lang][0], member.name[this.l_lang]));
      return pokemon_json.filter(member => this.is_start_with(member.name[this.l_lang][0],str));
    },
    pokemon_alola_whose_name_start_with(str){
//      return list.filter(member => this.is_start_with(member.name.japanese[0],str));
      return pokemons_alola.filter(member => this.is_start_with(member.name[this.l_lang][0],str));
    },
    is_start_with(c, str){
      for (let i in str.split("")){
        if (c == str[i]){
          return true;
        }
      }
      return false;
    },
  },
  computed: {
    l_lang: common.l_lang,
  }
}
</script>
