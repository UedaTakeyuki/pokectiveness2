<template>
  <nav>
    <v-toolbar color="grey lighten-4" class="elevation-6">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light" style="font-family: 'Parisienne', cursive; text-shadow: 4px 4px 4px #aaa; font-size: 110%;">Pokéctiveness2</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge
        :content="$numberOfUnread"
        color="grey"
        offset-x="15"
        offset-y="15"
        v-if="$numberOfUnread != 0"
      >
        <v-btn text class="grey--text" @click="$router.push('news')">
          News
        </v-btn>
      </v-badge>
      <v-btn text class="grey--text" v-if="$route.name != 'home'" @click="$router.back()">
        <v-icon>{{mdiArrowLeft}}</v-icon><span>{{wordings.navbar.back[s_lang]}}</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list>
        <v-layout column align-center class="white--text">
          <v-flex>
            <v-avatar :tile="true" size="100">
              <v-img 
                :src="require('@/assets/qr.png/')"
              >
              </v-img>
            </v-avatar>
          </v-flex>
          {{wordings.navbar.qr[s_lang]}}
        </v-layout>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{mdiHome}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="doc_links[this.$lang].route">
          <v-list-item-action>
            <v-icon class="white--text">{{doc_links[this.$lang].icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{doc_links[this.$lang].text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="doc_links2[this.$lang].route">
          <v-list-item-action>
            <v-icon class="white--text">{{doc_links2[this.$lang].icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{doc_links2[this.$lang].text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="doc_links3[this.$lang].route">
          <v-list-item-action>
            <v-icon class="white--text">{{doc_links3[this.$lang].icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{doc_links3[this.$lang].text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import common from '../common'; // common routines
import wordings from '../wording'; // wording definitions
// https://knote.dev/post/2021-02-21/vuetify-no-assets/
import { mdiHome, mdiArrowLeft} from "@mdi/js";

export default {
  data(){
    return {
      wordings: wordings,
      drawer: false,
      links: [
        {icon: 'mdiHome', text: 'Home', route: '/'},
      ],
      doc_links: {
        en: {icon: '', text: 'How To Use', route: '/docs'},
        fr: {icon: '', text: 'Comment utiliser', route: '/docs'},
        de: {icon: '', text: 'Wie benutzt man', route: '/docs'},
        ja: {icon: '', text: '使い方', route: '/docs/ja'},
        zh: {icon: '', text: '如何使用', route: '/docs/ja'},
      },
      doc_links2: {
        en: {icon: '', text: 'Preferences', route: '/settings'},
        fr: {icon: '', text: 'Préférences', route: '/settings'},
        de: {icon: '', text: 'Einstellung', route: '/settings'},
        ja: {icon: '', text: '設定', route: '/settings'},
        zh: {icon: '', text: '设定', route: '/settings'},
      },
      doc_links3: {
        en: {icon: '', text: 'Memo', route: '/memo'},
        fr: {icon: '', text: 'Note', route: '/memo'},
        de: {icon: '', text: 'Notiz', route: '/memo'},
        ja: {icon: '', text: 'メモ', route: '/memo'},
        zh: {icon: '', text: '備忘錄', route: '/memo'},
      },
      mdiHome: mdiHome,
      mdiArrowLeft: mdiArrowLeft,
    }
  },
  computed: {
    l_lang: common.l_lang,
    s_lang: common.s_lang,
  }
}
</script>
