<template>
  <div class="pokemon">
    <v-card color="blue-grey darken-2" class="white--text">
      <h3>{{pokemon_json[$route.params.id - 1].name[l_lang]}}{{alolan_form_str}}</h3>
      <v-img
          :src="image_path($route.params.id)"
      >
      </v-img>
<!--
      <h3>{{pokemons[$route.params.id - 1].name[l_lang]}}{{alolan_form_str}}</h3>
      <v-img
          :src="image_path($route.params.id).replace('assets','https://assets.uedasoft.com/Pokemon')"
      >
      </v-img>
-->
      <div>No. {{id+1}}</div>
      <div>和名：{{pokemon_json[id].name.jpn}}{{alola ? ' アローラのすがた' : ''}}</div>
      <div>English：{{pokemon_json[id].name.eng}}{{alola ? ' alolan' : ''}}</div>
      <div>Français：{{pokemon_json[id].name.fra}}{{alola ? ' alolan' : ''}}</div>
      <div>中文：{{pokemon_json[id].name.cht}}{{alola ? ' 阿羅拉的樣子' : ''}}</div>
<!--
      <div>和名：{{pokemons[id].name.japanese}}{{alola ? ' アローラのすがた' : ''}}</div>
      <div>English：{{pokemons[id].name.english}}{{alola ? ' alolan' : ''}}</div>
      <div>Français：{{pokemon_json[id].name.french}}{{alola ? ' alolan' : ''}}</div>
      <div>中文：{{pokemons[id].name.chinese}}{{alola ? ' 阿羅拉的樣子' : ''}}</div>
-->
      {{wordings.pokemon.type[s_lang]}}：
      <TypeButton v-for="type_id in type_list($route.params.id)" :key="type_id" :type_id="type_id" :lang="s_lang" />
      <div v-for="type_id in type_list($route.params.id)" :key="type_id">
        {{weekpoint_str(type_id)}}
        <TypeButton v-for="t in types.suppereffective[type_id]" :key="t" :type_id="t" :lang="s_lang"/>
      </div>
    </v-card>

  </div>
</template>

<script>
import pokemons_alolan from '../alola';
//import pokemons from '../pokedex';
import types from '../typeeffectiveness';
import TypeButton from '@/components/TypeButton'
import common from '../common'; // common routines
import wordings from '../wording'; // wording definitions
//import pokemon_json from '@/assets/johnuberbacher_pokemon.json' // https://raw.githubusercontent.com/johnuberbacher/pokemon_json/main/pokemon.json
//import pokemon_json from '../pokedex'
import {pokedex} from 'data-for-pokectiveness'
const pokemon_json = pokedex
import types_json from '@/assets/johnuberbacher_types.json' // https://raw.githubusercontent.com/johnuberbacher/pokemon_json/main/types.json
import anime from '@/anime' 


//module.exports = {
export default {
  props: ['alola'],
  components: {TypeButton},
  data: function () {
    return {
//     s_lang: "ja",
//      l_lang: "japanese",
      wordings: wordings,
//      pokemons: pokemons,
      pokemons_alolan: pokemons_alolan,
      types: types,
      pokemon_json: pokemon_json,
      types_json: types_json
    }
  },
  methods: {
    getPokedexItemById: common.getPokedexItemById,
    weekpoint_str: function(type_id){
      switch (this.s_lang){
        case "ja":
          return `${this.types.typename[this.s_lang][type_id]}の弱点：`;
        default:
          return `Weakness of ${this.types.typename[this.s_lang][type_id]}：`;
      }
    },
    image_path: function(poke_id){
      if (this.alola) {
//        return 'assets/ProfesseurOak/img/alola/'+poke_id+'.png';
        return 'https://assets.uedasoft.com/Pokemon/ProfesseurOak/pokemon-img/normal-animated/'+('000' + poke_id ).slice( -3 )+'-alola.gif';
      } else {
        if (poke_id <= 719){
          return 'https://assets.uedasoft.com/Pokemon/ProfesseurOak/pokemon-img/normal-animated/'+('000' + poke_id ).slice( -3 )+'.gif';
        } else {
          if (poke_id <= 807){
            return anime.filter(function(element){return (element.id == poke_id);})[0].url
          } else {
            if (poke_id < 1000){
              return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+('000' + poke_id ).slice( -3 )+'.png';
            } else {
              return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+ poke_id +'.png';
            }
          }
//          return 'https://assets.uedasoft.com/Pokemon/pokemon_json/images/pokedex/thumbnails/'+('000' + poke_id ).slice( -3 )+'.png';
        }
/*
        if (poke_id <= 721 || poke_id >= 808){
          return 'assets/ProfesseurOak/pokemon-img/normal-animated/'+('000' + poke_id ).slice( -3 )+'.gif';
        } else {
          return 'assets/pokemon.json/images/'+('000' + poke_id ).slice( -3 )+'.png';
                //  +this.getPokedexItemById(this.pokemons, poke_id).name.english+'.png';
        }
*/
      } 
    },
    type_list: function(poke_id){
      if (this.alola){
        return pokemons_alolan.filter(function(element){return (element.id == poke_id);})[0].type;
      } else {
        return pokemon_json[poke_id - 1].type;
//        return pokemons[poke_id - 1].type;
      }
    },
  },
  computed: {
    l_lang: common.l_lang,
    s_lang: common.s_lang,
    alolan_form_str: function(){
      if (this.alola){
        switch (this.s_lang){
          case "ja":
            return " アローラのすがた";
          case "zh":
            return " 阿羅拉的樣子";
          default:
            return " alolan";
        }
      } else {
        return "";
      }
    },
    id: function(){
      return this.$route.params.id - 1
    }
  }
}
</script>
