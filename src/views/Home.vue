<template>
  <div class="home">
    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:actions>
          <v-icon color="primary">$vuetify.icons.expand</v-icon>
        </template>
        <template v-slot:header>
          <div>名前</div>
        </template>
        <router-link 
          v-for="letter in first_letters[this.$lang]"
          v-bind:to="path_to_names_with_id(letter[1])"
          :key="letter[0]"
        >
          <v-btn fab small>{{letter[0]}}</v-btn>
        </router-link>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:actions>
          <v-icon color="primary">$vuetify.icons.expand</v-icon>
        </template>
        <template v-slot:header>
          <div>種族</div>
        </template>
        <TypeButton v-for="type_id in types.ids" :key="type_id" :type_id="type_id" :lang="s_lang" />
      </v-expansion-panel-content>
    </v-expansion-panel>

  </div>
</template>

<script>
import types from '../typeeffectiveness';
import TypeButton from '@/components/TypeButton'

//module.exports = {
export default {
  props: [],
  components: {TypeButton},
  data: function () {
    return {
      s_lang: "ja",
      l_lang: "japanese",
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
        ["あ","ア"],["い","イ"],["う","ウ"],["え","エ"],["お","オ"],
        ["か","カガ"],["き","キギ"],["く","クグ"],["け","ケゲ"],["こ","コゴ"],
        ["さ","サザ"],["し","シジ"],["す","スズ"],["せ","セぜ"],["そ","ソゾ"],
        ["た","タダ"],["ち","チヂ"],["つ","ツヅ"],["て","テデ"],["と","トド"],
        ["な","ナ"],["に","ニ"],["ぬ","ヌ"],["ね","ネ"],["の","ノ"],
        ["は","ハバパ"],["ひ","ヒビピ"],["ふ","フブプ"],["へ","ヘベペ"],["ほ","ホボポ"],
        ["ま","マ"],["み","ミ"],["む","ム"],["め","メ"],["も","モ"],
        ["や","ヤ"],["ゆ","ユ"],["よ","ヨ"],
        ["ら","ラ"],["り","リ"],["る","ル"],["れ","レ"],["ろ","ロ"],
        ["わ","ワ"]
        ],
        en:
        [["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"],["G","G"],
        ["H","H"],["I","I"],["J","J"],["K","K"],["L","L"],["M","M"],["N","N"],
        ["O","O"],["P","P"],["Q","Q"],["R","R"],["S","S"],["T","T"],["U","U"],
        ["V","V"],["W","W"],["X","X"],["Y","Y"],["Z","Z"]
        ],
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
    }
  },
}

</script>

<style>
/* https://stackoverflow.com/questions/47331310/changing-vuetifys-button-width-and-padding */
.v-btn {
  min-width: 0;
/*  padding: 0; */
  margin: 0;
}
</style>