<template>
  <div class="pokemon">
    {{s_lang}}{{$lang}}{{lang}}
    <v-card>
      <v-select
        v-model="lang"
        :items="langs"
        :label="wordings.settings.lang[s_lang]"
      ></v-select>
    </v-card>
  </div>
</template>

<script>
import common from '../common'; // common routines
import wordings from '../wording'; // wording definitions

//module.exports = {
export default {
  props: [],
  data: function () {
    return {
      wordings: wordings,
      langs: ['English','Français','Deutsch','日本語', '汉语'],
      lang: "",
//      lang: this.lang_setting2selectmenu(this.$lang),
//      ↑ dont workd, this.$lang is not ready before created.
    }
  },
  methods: {
    lang_setting2selectmenu: (lang) =>{
      let result = "あほー";
      switch (lang){
        case 'en':
          result = 'English';
          break;
        case 'fr':
          result = 'Français';
          break;
        case 'de':
          result = 'Deutsch'
          return
        case 'ja':
          result = '日本語'
          break;
        case 'zh':
          result = '汉语'
          break;
        default:
          break;
      }
//      console.log(lang)
//      console.log(result)
      return result;
    },
    lang_selectmenu2setting: (lang) =>{
      let result = "";
      switch (lang){
        case 'English':
          result = 'en';
          break;
        case 'Français':
          result = 'fr';
          break;
        case 'Deutsch':
          result = 'de';
          break;
        case '日本語':
          result = 'ja'
          break;
        case '汉语':
          result = 'zh'
          break;
        default:
          break;
      }
      return result;
    }
  },
  created: function() {
    this.lang = this.lang_setting2selectmenu(this.$lang)
  },
  watch: {
    // eslint no-unused-vars
    lang: function (newlang/*, oldlang*/) {
    // set to global
    this.$lang=this.lang_selectmenu2setting(newlang);
    // set to localStorage
    localStorage.$lang=this.$lang;
    }
  },
  computed: {
    l_lang: common.l_lang,
    s_lang: common.s_lang,
  }
}
</script>