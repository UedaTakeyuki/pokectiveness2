<template>
  <div class="about">
<!--    <v-btn small>{{poke.filter(member => member.name.japanese[0] == $route.params.id)[0].name.japanese}}</v-btn> -->
    <v-btn small v-for="(pokemon, index) in poke.filter(member => member.name.japanese[0] == $route.params.id)" :key="index">{{pokemon.name.japanese}}</v-btn>
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
