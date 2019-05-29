<template>
  <div class="types">
    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:actions>
          <v-icon color="primary">$vuetify.icons.expand</v-icon>
        </template>
        <template v-slot:header>
          <div>{{wordings.types.types[s_lang]}}</div>
        </template>
        <TypeButton 
          v-for="id in types.ids"
          :type_id="id"
          :lang="s_lang"
          :key="id"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title >
        <h3>{{types.typename[s_lang][$route.params.id]}}</h3>
      </v-card-title>
     
      <v-card color="blue-grey lighten-4">
        {{types.wording[s_lang].supper}}
      <TypeButton v-for="type_id in types.suppereffective[$route.params.id]" :key="type_id" :type_id="type_id" :lang="s_lang" />
      </v-card>
      
      <v-card color="blue-grey lighten-4">
      {{types.wording[s_lang].not}}
      <TypeButton v-for="type_id in types.notveryeffective[$route.params.id]" :key="type_id" :type_id="type_id" :lang="s_lang" />
      </v-card>
      
      <v-card color="blue-grey lighten-4">
      {{types.wording[s_lang].no}}
        <TypeButton v-for="type_id in types.noeffect[$route.params.id]" :key="type_id" :type_id="type_id" :lang="s_lang" />
      </v-card>

    </v-card>


    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:actions>
          <v-icon color="primary">$vuetify.icons.expand</v-icon>
        </template>
        <template v-slot:header>
          <div >{{wordings.types.thistypes[s_lang]}}</div>
        </template>
        <NameButton v-for="poke_id in pokemons.filter(member => member.type.includes($route.params.id)).map(function(element){return element.id;})" :key="poke_id" :poke_id="poke_id" :lang="l_lang" :alola="false"/>
        <NameButton v-for="poke_id in pokemons_alola.filter(member => member.type.includes($route.params.id)).map(function(element){return element.id;})" :key="poke_id" :poke_id="poke_id" :lang="l_lang" :alola="true"/>
      </v-expansion-panel-content>
    </v-expansion-panel>

  </div>
</template>

<script>
import pokemons from '../pokedex';
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
