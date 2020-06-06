<template>
  <div class="pokemon">
    <v-select
      v-model="lang"
      :items="langs"
      :label="wordings.settings.lang[s_lang]"
    ></v-select>
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
      langs: ['English','日本語'],
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
        case 'ja':
          result = '日本語'
          break;
        default:
          break;
      }
      console.log(lang)
      console.log(result)
      return result;
    },
    lang_selectmenu2setting: (lang) =>{
      let result = "";
      switch (lang){
        case 'English':
          result = 'en';
          break;
        case '日本語':
          result = 'ja'
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
    lang: function (newlang, oldlang) {
      this.$lang=this.lang_selectmenu2setting(newlang);
    }
  },
  computed: {
    l_lang: common.l_lang,
    s_lang: common.s_lang,
  }
}
</script>