<template>
  <div class="types">
    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:actions>
          <v-icon color="primary">$vuetify.icons.expand</v-icon>
        </template>
        <template v-slot:header>
          <div>種族一覧</div>
        </template>

    <router-link 
      v-for="(familyname, id) in types.familyname"
      v-bind:to="path_to_types_with_id(id)"
      :key="id"
    >
      <v-btn small>{{familyname}}</v-btn>
    </router-link>

      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title >
        <h3>{{types.typename[s_lang][$route.params.id]}}</h3>
      </v-card-title>
      <v-card color="blue-grey lighten-4">
      <v-card-title primary-title>
        {{types.wording[s_lang].supper}}
      </v-card-title>
      <v-btn v-for="item in types.suppereffective[$route.params.id]" :key="item" v-bind:color="types.chipscolor[item]">
        {{types.typename[s_lang][item]}}
      </v-btn>
      </v-card>
      <v-card color="blue-grey lighten-4">
      <v-card-title primary-title>
      {{types.wording[s_lang].not}}
      </v-card-title>
        <v-btn v-for="item in types.notveryeffective[$route.params.id]" :key="item" v-bind:color="types.chipscolor[item]">
          {{types.typename[s_lang][item]}}
        </v-btn>
      </v-card>
      <v-card color="blue-grey lighten-4">
      <v-card-title primary-title>
      {{types.wording[s_lang].no}}
      </v-card-title>
        <v-btn v-for="item in types.noeffect[$route.params.id]" :key="item" v-bind:color="types.chipscolor[item]">
          {{types.typename[s_lang][item]}}
        </v-btn>
      </v-card>

    </v-card>


    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:actions>
          <v-icon color="primary">$vuetify.icons.expand</v-icon>
        </template>
        <template v-slot:header>
          <div >この種族のポケモン</div>
        </template>

    <router-link 
      v-for="(pokemon, index) in pokemons.filter(member => member.type.includes($route.params.id))"
      v-bind:to="path_to_pokemon_with_id(pokemon.id)"
      :key="index"
    >
      <v-btn small>{{pokemon.name[l_lang]}}</v-btn>
    </router-link>

      </v-expansion-panel-content>
    </v-expansion-panel>

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
      types: types,
    }
  },
  methods: {
    path_to_types_with_id: function(id){
      return "/types/" + id;
    },
    path_to_pokemon_with_id: function(id){
//      return "/pokemon/" + this.props.poke.filter(member => member.name[this.l_lang] == nm)[0].id;
      return "/pokemon/" + id;
    },

  },

}
</script>
