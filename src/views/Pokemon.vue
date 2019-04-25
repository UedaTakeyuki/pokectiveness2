<template>
  <div class="pokemon">
    <v-card color="blue-grey darken-2" class="white--text">
      <v-img
          :src="require('@/assets/ProfesseurOak/pokemon-img/normal-animated/'+('000' + $route.params.id ).slice( -3 )+'.gif')"
      ></v-img>
      <v-card-title primary-title >
        <h3>{{poke[$route.params.id - 1].name[l_lang]}}</h3>
      </v-card-title>
    </v-card>
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
  props: ['poke', 'types'],
  data: function () {
    return {
      s_lang: "ja",
      l_lang: "japanese",
    }
  },
  methods: {
  },
}
</script>
