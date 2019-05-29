<template>
  <div class="pokemon_alola">
    <v-card color="blue-grey darken-2" class="white--text">
      <h3>{{pokemons.filter(function(element, index, array){
      return (element.id == $route.params.id);
      })[0].name[l_lang]}}</h3>
      <v-img
          :src="require('@/assets/ProfesseurOak/img/alola/'+$route.params.id+'.png')"
      >
      </v-img>
      <div>No. {{$route.params.id}}</div>
      <div>和名：{{pokemons.filter(function(element, index, array){
        return (element.id == $route.params.id);
      })[0].name["japanese"]}} アローラのすがた</div>
      <div>English：{{pokemons.filter(function(element, index, array){
        return (element.id == $route.params.id);
      })[0].name["english"]}} alolan</div>
      <div>中文：{{pokemons.filter(function(element, index, array){
        return (element.id == $route.params.id);
      })[0].name["chinese"]}} 阿羅拉的樣子</div>
      種族：
      <TypeButton v-for="type_id in pokemons.filter(function(element, index, array){
        return (element.id == $route.params.id);
      })[0].type" :key="type_id" :type_id="type_id" :lang="s_lang" />
      <div v-for="type_id in pokemons.filter(function(element, index, array){
        return (element.id == $route.params.id);
      })[0].type" :key="type_id">
        {{types.typename[s_lang][type_id]}}の弱点：
        <TypeButton v-for="t in types.suppereffective[type_id]" :key="t" :type_id="t" :lang="s_lang"/>
      </div>
    </v-card>

  </div>
</template>

<script>
import pokemons from '../alola';
import types from '../typeeffectiveness';
import TypeButton from '@/components/TypeButton';
import common from '../common'; // common routines

//module.exports = {
export default {
  props: [],
  components: {TypeButton},
  data: function () {
    return {
      s_lang: "ja",
//      l_lang: "japanese",
      pokemons: pokemons,
      types: types
    }
  },
  methods: {
  },
  computed: {
    l_lang: common.l_lang,
  }
}
</script>
