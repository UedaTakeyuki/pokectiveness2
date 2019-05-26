<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light" style="font-family: 'Parisienne', cursive; text-shadow: 4px 4px 4px #aaa; font-size: 110%;">Pokéctiveness2</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat class="grey--text" v-if="$route.name != 'home'" @click="$router.back()">
        <v-icon>arrow_back</v-icon><span>戻る</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list>
        <v-layout column align-center class="white--text">
          <v-flex>
            <v-avatar tile="true" size="100">
              <v-img 
                :src="require('@/assets/qr.png/')"
              >
              </v-img>
            </v-avatar>
          </v-flex>
          このアプリの QRコード
        </v-layout>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="doc_links[this.$lang].route">
          <v-list-tile-action>
            <v-icon class="white--text">{{doc_links[this.$lang].icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{doc_links[this.$lang].text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      drawer: false,
      links: [
        {icon: 'home', text: 'Home', route: '/'},
      ],
      doc_links: {
        en: {icon: '', text: 'How To Use', route: '/docs'},
        ja: {icon: '', text: '使い方', route: '/docs/ja'}
      }
    }
  },
}
</script>
