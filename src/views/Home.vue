<template>
  <div class="home">
    <H1>名前</H1>

    <router-link 
      v-for="letter in first_letters"
      v-bind:to="letter[1]"
      :key="letter[0]"
    >
      <v-btn fab small>{{letter[0]}}</v-btn>
    </router-link>
    <H1>種族</H1>
    <v-btn small>ノーマル</v-btn>
    <v-btn small>かくとう</v-btn>
    <v-btn small>どく</v-btn>
    <v-btn small>じめん</v-btn>
    <v-btn small>ひこう</v-btn>
    <v-btn small>むし</v-btn>
    <v-btn small>いわ</v-btn>
    <v-btn small>ゴースト</v-btn>
    <v-btn small>はがね</v-btn>
    <v-btn small>ほのお</v-btn>
    <v-btn small>みず</v-btn>
    <v-btn small>でんき</v-btn>
    <v-btn small>くさ</v-btn>
    <v-btn small>こおり</v-btn>
    <v-btn small>エスパ</v-btn>
    <v-btn small>ドラゴン</v-btn>
    <v-btn small>あく</v-btn>
    <v-btn small>フェアリー</v-btn>  
  </div>
</template>

<script>

module.exports = {
  data: function () {
    return {
      first_letters:
      [["あ","/about/ア"],["い","/about/イ"],["う","/about/ウ"],["え","/about/エ"],["お","/about/オ"],
       ["か","/about/カ"],["き","/about/キ"],["く","/about/ク"],["け","/about/ケ"],["こ","/about/コ"],
       ["さ","/about/サ"],["し","/about/シ"],["す","/about/ス"],["せ","/about/セ"],["そ","/about/ソ"],
       ["た","/about/タ"],["ち","/about/チ"],["つ","/about/ツ"],["て","/about/テ"],["と","/about/ト"],
       ["な","/about/ナ"],["に","/about/二"],["ぬ","/about/ヌ"],["ね","/about/ネ"],["の","/about/ノ"],
       ["た","/about/タ"],["ち","/about/チ"],["つ","/about/ツ"],["て","/about/テ"],["と","/about/ト"],
       ["た","/about/タ"],["ち","/about/チ"],["つ","/about/ツ"],["て","/about/テ"],["と","/about/ト"],
       ["た","/about/タ"],["ち","/about/チ"],["つ","/about/ツ"],["て","/about/テ"],["と","/about/ト"],
       ["た","/about/タ"],["ち","/about/チ"],["つ","/about/ツ"],["て","/about/テ"],["と","/about/ト"],
       ["わ","/about/タ"]
      ],
    } 
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
</style>