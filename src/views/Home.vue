<template>
  <div class="home d-flex flex-column">
    <v-expansion-panels v-model="openedPanel" multiple accordion tile>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{wordings.home.name[s_lang]}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <router-link 
            v-for="letter in first_letters[this.$lang]"
            v-bind:to="path_to_names_with_id(letter[1])"
            :key="letter[0]"
          >
            <v-btn fab small>{{letter[0]}}</v-btn>
          </router-link>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          {{wordings.home.type[s_lang]}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <TypeButton v-for="type_id in types.ids" :key="type_id" :type_id="type_id" :lang="s_lang" />
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Memo for Raid Battle
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Feed/>
          <Raid/>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>

    <v-card class="mt-auto mb-2 mx-2">
      <v-card-subtitle>hint:</v-card-subtitle>
      <v-card-text>
        <div v-if="$lang == 'en'">
          You can find <b>effective move types</b> against your <b>enemy pokémon</b> as follow:<br>
          1. Select the enemy's name with the <b>Name</b> tab at the top.<br>
          2. So, you can find it, that's it.
        </div>
        <div v-if="$lang == 'ja'">
          対戦相手のポケモンに効果的な技タイプの探し方<br>
          1. 上の<b>名前</b>タブで相手の名前を選びます<br>
          2. 技の相性が表示されます、それだけ<br>
        </div>
        <div v-if="$lang == 'fr'">
        Vous pouvez trouver des <b>types de mouvement efficaces</b> contre votre <b>pokémon ennemi</b> comme suit :<br>
        1. Sélectionnez le nom de l'ennemi avec l'onglet <b>Nom</b> en haut.<br>
        2. Donc, vous pouvez le trouver, c'est tout.
        </div>
        <div v-if="$lang == 'de'">
        Sie können wie folgt wirksame Bewegungsarten gegen Ihre feindlichen Pokémon finden:<br>
        1. Wählen Sie oben auf der Registerkarte Name den <b>Namen</b> des Feindes aus.<br>
        2. Also, du kannst es finden, das war's.
        </div>
        <div v-if="$lang == 'zh'">
        您可以找到對付敵方神奇寶貝的有效招式，如下所示：<br>
        1. 使用頂部的<b>名</b>稱選項卡選擇敵人的名稱<br>
        2. 所以，你可以找到它，就是這樣
        </div>
      </v-card-text>
    </v-card>

  </div>
</template>

<script>
import types from '../typeeffectiveness';
//const types = () => import('../typeeffectiveness')
import TypeButton from '@/components/TypeButton'
//const TypeButton = () => import('@/components/TypeButton')
import common from '../common'; // common routines
import wordings from '../wording'; // wording definitions
import Feed from '@/components/Feed'
//const Feed = () => import(  '@/components/Feed')
import Raid from '@/components/Raid'
//const Raid = () => import( '@/components/Raid')
//import pokemon_json from '@/assets/johnuberbacher_pokemon.json' // https://raw.githubusercontent.com/johnuberbacher/pokemon_json/main/pokemon.json
//import pokemon_json from '../pokedex'
//import {pokedex} from 'data-for-pokectiveness'
import first_letter_cht from '../first_letter_cht.js'
//const first_letter_cht = () => import( '../first_letter_cht.js')

//module.exports = {
export default {
  props: [],
  components: {TypeButton, Feed, Raid},
  data: function () {
    return {
//      pokemon_json: pokemon_json,

//      panel: localStorage.panel,
      openedPanel: [],
      wordings: wordings,
      types: types,
      first_letters: {
/*
      [["あ"],["い"],["う"],["え"],["お"],
       ["か"],["き"],["く"],["け"],["こ"],
       ["さ"],["し"],["す"],["せ"],["そ"],
       ["た"],["ち"],["つ"],["て"],["と"],
       ["な"],["に"],["ぬ"],["ね"],["の"],
       ["は"],["ひ"],["ふ"],["へ"],["ほ"],
       ["ま"],["み"],["む"],["め"],["も"],
       ["や"],["ゆ"],["よ"],
       ["ら"],["り"],["る"],["れ"],["ろ"],
       ["わ"]
      ],
*/
        ja:
//        Array.from(new Set(pokemon_json.map(p => p.name.jpn[0]))).sort(function(x,y){return x.localeCompare(y, 'ja')}).map(p => [p,p]),
//        Array.from(new Set(pokedex.map(p => p.name.jpn[0]))).sort(function(x,y){return x.localeCompare(y, 'ja')}).map(p => [p,p]),

        [["あ","ア"],["い","イ"],["う","ウ"],["え","エ"],["お","オ"],
        ["か","カガ"],["き","キギ"],["く","クグ"],["け","ケゲ"],["こ","コゴ"],
        ["さ","サザ"],["し","シジ"],["す","スズ"],["せ","セゼ"],["そ","ソゾ"],
        ["た","タダ"],["ち","チヂ"],["つ","ツヅ"],["て","テデ"],["と","トド"],
        ["な","ナ"],["に","ニ"],["ぬ","ヌ"],["ね","ネ"],["の","ノ"],
        ["は","ハバパ"],["ひ","ヒビピ"],["ふ","フブプ"],["へ","ヘベペ"],["ほ","ホボポ"],
        ["ま","マ"],["み","ミ"],["む","ム"],["め","メ"],["も","モ"],
        ["や","ヤ"],["ゆ","ユ"],["よ","ヨ"],
        ["ら","ラ"],["り","リ"],["る","ル"],["れ","レ"],["ろ","ロ"],
        ["わ","ワ"]
        ],

        en:
//        Array.from(new Set(pokemon_json.map(p => p.name.eng[0]))).sort(function(x,y){return x.localeCompare(y, 'en')}).map(p => [p,p]),
//        Array.from(new Set(pokedex.map(p => p.name.eng[0]))).sort(function(x,y){return x.localeCompare(y, 'en')}).map(p => [p,p]),

        [["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"],["G","G"],
        ["H","H"],["I","I"],["J","J"],["K","K"],["L","L"],["M","M"],["N","N"],
        ["O","O"],["P","P"],["Q","Q"],["R","R"],["S","S"],["T","T"],["U","U"],
        ["V","V"],["W","W"],["X","X"],["Y","Y"],["Z","Z"]
        ],

        // https://stackoverflow.com/questions/22907288/chinese-sorting-by-pinyin-in-javascript-with-localecompare
        zh:
//        Array.from(new Set(pokemon_json.map(p => p.name.cht[0]))).sort(function(x,y){return x.localeCompare(y, 'zh')}).map(p => [p,p]),
//        Array.from(new Set(pokedex.map(p => p.name.cht[0]))).sort(function(x,y){return x.localeCompare(y, 'zh')}).map(p => [p,p]),
        first_letter_cht,
        fr:
//        Array.from(new Set(pokemon_json.map(p => p.name.fra[0]))).sort(function(x,y){return x.localeCompare(y, 'fr')}).map(p => [p,p])
//        Array.from(new Set(pokedex.map(p => p.name.fra[0]))).sort(function(x,y){return x.localeCompare(y, 'fr')}).map(p => [p,p])
        [["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["É","É"],["F","F"],["G","G"],["H","H"],["I","I"],["J","J"],["K","K"],["L","L"],["M","M"],["N","N"],["O","O"],["P","P"],["Q","Q"],["R","R"],["S","S"],["T","T"],["U","U"],["V","V"],["W","W"],["X","X"],["Y","Y"],["Z","Z"]],
      }
    } 
  },
// https://qiita.com/satetsu888/items/abd67917097ee00d768d
  methods: {   
    hiraToKana: function(str){
      return String.fromCharCode(str.charCodeAt(0) + 0x60)
//      return String.fromCharCode(str[0] +0x60);
    },
    path_to_names_with_id: function(id){
//      return "/names/" + this.hiraToKana(hirakana);
      return "/names/" + id;
    },
    path_to_types_with_id: function(id){
      return "/types/" + id;
    },
  },
  watch: {
    openedPanel: function(newpanel/*, oldpanel*/){
//      console.log("newpanel", newpanel)
      if (newpanel.indexOf(2) != -1){
  //      console.log("panel2 open")
        localStorage.setItem("panel2", "true")
      } else {
//        console.log("pannel2 close")
        localStorage.setItem("panel2", "false")
      }
    }
  },
  computed: {
    l_lang: common.l_lang,
    s_lang: common.s_lang,
  },
  created: function(){
//    console.log("localStorage.panel2",localStorage.getItem("panel2"))
    if (localStorage.getItem("panel2") == "true"){
      this.openedPanel.push(2)
    }
//    this.panel = localStorage.panel
//    console.log("window", window)
  }


}
</script>

<style>
/* https://stackoverflow.com/questions/47331310/changing-vuetifys-button-width-and-padding */
.v-btn {
  min-width: 0;
/*  padding: 0; */
  margin: 0;
}
/* https://github.com/vuetifyjs/vuetify/issues/11925 */
.v-expansion-panel-content__wrap { padding: 0 !important; }
.v-main {
  background-color: #F5F5F5;
}
.v-footer {
  text-align: center;
}
.home {
  height: 100%;
}
</style>
