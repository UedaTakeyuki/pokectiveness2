<template>
  <div class="types">
    {{$route.params.id}}
    <router-link 
      v-for="(familyname, index) in types.familyname"
      v-bind:to="path_to_names_with_id(index)"
      :key="index"
    >
      <v-btn small>{{familyname}}</v-btn>
    </router-link>

    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title >
        <h3>{{types.typename[s_lang][$route.params.id]}}</h3>
      </v-card-title>
      <v-card>
      <v-card-title primary-title>
        {{types.wording[s_lang].supper}}
      </v-card-title>
      <v-btn v-for="item in types.suppereffective[$route.params.id]" :key="item" v-bind:color="types.chipscolor[item]">
        {{types.typename[s_lang][item]}}
      </v-btn>
      </v-card>
      <v-card>
      <v-card-title primary-title>
      {{types.wording[s_lang].not}}
      </v-card-title>
        <v-btn v-for="item in types.notveryeffective[$route.params.id]" :key="item" v-bind:color="types.chipscolor[item]">
          {{types.typename[s_lang][item]}}
        </v-btn>
      </v-card>
      <v-card>
      <v-card-title primary-title>
      {{types.wording[s_lang].no}}
      </v-card-title>
        <v-btn v-for="item in types.noeffect[$route.params.id]" :key="item" v-bind:color="types.chipscolor[item]">
          {{types.typename[s_lang][item]}}
        </v-btn>
      </v-card>

    </v-card>
    <v-btn small v-for="(pokemon, index) in poke.filter(member => member.type.includes($route.params.id))" :key="index">{{pokemon.name.japanese}}</v-btn>
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
//import dix from '../components/pokedex';

module.exports = {
  props: ['types','poke'],
  data: function () {
    return {
      s_lang: "ja",
    }
  },
  methods: {   
    hiraToKana: function(str){
      return String.fromCharCode(str.charCodeAt(0) + 0x60)
    },
    path_to_names_with_id: function(hirakana){
      return "/names/" + this.hiraToKana(hirakana);
    },
    path_to_types_with_id: function(id){
      return "/types/" + id;
    }
  },

}
</script>
