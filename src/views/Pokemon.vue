<template>
  <div class="pokemon">
    <v-card color="blue-grey darken-2" class="white--text">
      <h3>{{pokemons[$route.params.id - 1].name[l_lang]}}</h3>
      <v-img
          :src="require('@/assets/ProfesseurOak/pokemon-img/normal-animated/'+('000' + $route.params.id ).slice( -3 )+'.gif')"
      >
      </v-img>
      <div>No. {{$route.params.id}}</div>
      <div>和名：{{pokemons[$route.params.id - 1].name["japanese"]}}</div>
      <div>English：{{pokemons[$route.params.id - 1].name["english"]}}</div>
      <div>中文：{{pokemons[$route.params.id - 1].name["chinese"]}}</div>
      種族：
      <TypeButton v-for="type_id in pokemons[$route.params.id - 1].type" :key="type_id" :type_id="type_id" :lang="s_lang" />
      <div v-for="type_id in pokemons[$route.params.id - 1].type" :key="type_id">
        {{types.typename[s_lang][type_id]}}の弱点：
        <TypeButton v-for="t in types.suppereffective[type_id]" :key="t" :type_id="t" :lang="s_lang"/>
      </div>
    </v-card>

  </div>
</template>

<script>
import pokemons from '../pokedex';
import types from '../typeeffectiveness';
import TypeButton from '@/components/TypeButton'
import common from '../common'; // common routines

//module.exports = {
export default {
  props: [],
  components: {TypeButton},
  data: function () {
    return {
//     s_lang: "ja",
//      l_lang: "japanese",
      pokemons: pokemons,
      types: types
    }
  },
  methods: {
  },
  computed: {
    l_lang: common.l_lang,
    s_lang: common.s_lang,
  }
}
</script>
