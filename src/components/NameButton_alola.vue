<template>
  <router-link v-bind:to="path_to_pokemon_with_id(poke_id)">
    <v-btn small>{{pokemons.filter(function(element, index, array){
      return (element.id == poke_id);
      })[0].name[lang]}} アローラのすがた</v-btn>
  </router-link>
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
import pokemons from '../alola';
import types from '@/typeeffectiveness';

export default {
  props: ['poke_id','lang'],
  data: function () {
    return {
      pokemons: pokemons,
      types:types,
    }
  },
  methods: {
    path_to_pokemon_with_id: function(id){
//      return "/pokemon/" + this.props.poke.filter(member => member.name[this.l_lang] == nm)[0].id;
      return "/pokemon_alola/" + id;
    },
  }
}
</script>