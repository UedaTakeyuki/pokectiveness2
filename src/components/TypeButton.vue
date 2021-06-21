<template>
  <router-link 
  v-bind:to="path_to_types_with_id(type_id)"
  >
  <v-btn small v-bind:color="types.chipscolor[type_id]" tile>{{types.typename[lang][type_id]}}</v-btn>
  </router-link>  
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
import types from '@/typeeffectiveness';

export default {
  props: ['type_id','lang'],
  data: function () {
    return {
      types:types,
    }
  },
  methods: {
    path_to_types_with_id: function(id){
      return "/types/" + id;
    },
  }
}
</script>
