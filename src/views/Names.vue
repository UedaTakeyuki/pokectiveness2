<template>
  <div class="names">
    <NameButton v-for="poke_id in pokemon_whose_name_start_with($route.params.id).sort(function(a,b){return (a.name[l_lang] >= b.name[l_lang] ? 1: -1);}).map(function(element){return element.id;})"
                :key="poke_id" 
                :poke_id="poke_id" 
                :lang="l_lang"
    />
  </div>
</template>

<script>
import pokemons from '../pokedex';
//let pokemons = require('../pokedex');
import NameButton from '@/components/NameButton'

// module.exports = { // TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
export default {
  props: [],
  components: {NameButton},
  data: function () {
    return {
      pokemons: pokemons,
    }
  },
  methods: {
    pokemon_whose_name_start_with(str){
//      return list.filter(member => this.is_start_with(member.name.japanese[0],str));
      return pokemons.filter(member => this.is_start_with(member.name[this.l_lang][0],str));
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
    l_lang: function(){
      switch(this.$lang){
        case "ja":
          return "japanese";
        default:
          return "english";
      }
    }
  }
}
</script>
