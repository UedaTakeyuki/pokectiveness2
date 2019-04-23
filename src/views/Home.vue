<template>
  <div class="home">
    <H1>名前</H1>
    <router-link
      to="/about/イ"
    >
      <v-btn fab small>あ</v-btn>
    </router-link>
    <v-btn fab small>い</v-btn>
    <v-btn fab small>う</v-btn>
    <v-btn fab small>え</v-btn>
    <v-btn fab small>お</v-btn>
    <v-btn fab small>か</v-btn>
    <v-btn fab small>き</v-btn>
    <v-btn fab small>く</v-btn>
    <v-btn fab small>け</v-btn>
    <v-btn fab small>こ</v-btn>
    <H1>種族</H1>
    <v-btn small>ひこう</v-btn>
    <v-btn small>むし</v-btn>
    <v-btn small>むし</v-btn>
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

export default {
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