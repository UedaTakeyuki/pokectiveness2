<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light" style="font-family: 'Parisienne', cursive; text-shadow: 4px 4px 4px #aaa; font-size: 110%;">Pokéctiveness</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat class="grey--text" v-if="$route.name != 'home'" @click="$router.back()">
        <span>戻る</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app>
      test
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    
}
</script>
