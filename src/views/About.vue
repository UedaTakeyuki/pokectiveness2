<template>
  <div class="about">
    <H1>名前</H1>
    <v-btn fab small>a</v-btn>
    <v-btn fab small>b</v-btn>
    <v-btn fab small>c</v-btn>
    <v-btn fab small>d</v-btn>
    <v-btn fab small>e</v-btn>
    <v-btn fab small>f</v-btn>
    <v-btn fab small>g</v-btn>
    <v-btn fab small>h</v-btn>
    <v-btn fab small>i</v-btn>
    <v-btn fab small>j</v-btn>
    <H1>種族</H1>
    <v-btn small>{{poke[0].name.chinese}}</v-btn>
    <v-btn small>{{ $route.params.id}}</v-btn>
    <v-btn small>{{poke.filter(member => member.name.japanese[0] == $route.params.id)[0].name.japanese}}</v-btn>
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
  props: ['poke'],
  data: function () {
    return {
    }
  }
}
</script>
