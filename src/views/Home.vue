<template>
  <div class="home">
    <H1>名前</H1>
    <router-link 
      v-for="letter in first_letters"
      v-bind:to="path_to_names_with_id(letter[0])"
      :key="letter[0]"
    >
      <v-btn fab small>{{letter[0]}}</v-btn>
    </router-link>
    <H1>種族</H1>
    <router-link 
      v-for="(type, key) in types.typename.ja"
      v-bind:to="path_to_types_with_id(key)"
      :key="key"
    >
      <v-btn small v-bind:color="types.chipscolor[key]">{{type}}</v-btn>
    </router-link>
  </div>
</template>

<script>

module.exports = {
  props: ['types'],
  data: function () {
    return {
      first_letters:
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
    } 
  },
// https://qiita.com/satetsu888/items/abd67917097ee00d768d
  methods: {   
    hiraToKana: function(str){
      return String.fromCharCode(str.charCodeAt(0) + 0x60)
//      return String.fromCharCode(str[0] +0x60);
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

<style>
/* https://stackoverflow.com/questions/47331310/changing-vuetifys-button-width-and-padding */
.v-btn {
  min-width: 0;
/*  padding: 0; */
  margin: 0;
}
</style>