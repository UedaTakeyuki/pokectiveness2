<template>
  <div class="types">
    <v-expansion-panels tile>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <div>{{wordings.types.types[s_lang]}}</div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <TypeButton 
            v-for="id in types.ids"
            :type_id="id"
            :lang="s_lang"
            :key="id"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-card color="blue-grey darken-2" class="white--text" tile>
      <v-card-title primary-title >
        <h3>{{types.typename[s_lang][$route.params.id]}}</h3>
      </v-card-title>
     
      <v-card color="blue-grey lighten-4" tile>
        {{types.wording[s_lang].supper}}
      <TypeButton v-for="type_id in types.suppereffective[$route.params.id]" :key="type_id" :type_id="type_id" :lang="s_lang" />
      </v-card>
      
      <v-card color="blue-grey lighten-4" tile>
      {{types.wording[s_lang].not}}
      <TypeButton v-for="type_id in types.notveryeffective[$route.params.id]" :key="type_id" :type_id="type_id" :lang="s_lang" />
      </v-card>
      
      <v-card color="blue-grey lighten-4" tile>
      {{types.wording[s_lang].no}}
        <TypeButton v-for="type_id in types.noeffect[$route.params.id]" :key="type_id" :type_id="type_id" :lang="s_lang" />
      </v-card>

    </v-card>


    <v-expansion-panels tile>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <div >{{wordings.types.thistypes[s_lang]}}</div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <NameButton v-for="poke_id in pokemons.filter(member => member.type.includes($route.params.id)).sort(function(a,b){return (a.name[l_lang] >= b.name[l_lang] ? 1: -1);}).map(function(element){return element.id;})" :key="poke_id" :poke_id="poke_id" :lang="l_lang" :alola="false"/>
          <NameButton v-for="poke_id in pokemons_alola.filter(member => member.type.includes($route.params.id)).sort(function(a,b){return (a.name[l_lang] >= b.name[l_lang] ? 1: -1);}).map(function(element){return element.id;})" :key="poke_id" :poke_id="poke_id" :lang="l_lang" :alola="true"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
//import pokemons from '../pokedex';
import {pokedex} from 'data-for-pokectiveness'
const pokemons = pokedex
import pokemons_alola from '../alola';
import types from '../typeeffectiveness';
import TypeButton from '@/components/TypeButton'
import NameButton from '@/components/NameButton'
//import NameButton_alola from '@/components/NameButton_alola';
import common from '../common'; // common routines
import wordings from '../wording'; // wording definitions

//module.exports = {
export default {
  props: [],
//  components: {TypeButton, NameButton, NameButton_alola},
  components: {TypeButton, NameButton},
  data: function () {
    return {
//      s_lang: "ja",
//      l_lang: "japanese",
      wordings: wordings,
      pokemons: pokemons,
      pokemons_alola: pokemons_alola,
      types: types,
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
