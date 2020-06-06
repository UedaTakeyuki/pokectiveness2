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
      lang:this.$lang,
    }
  },
  watch: {
    // no-unused-vars
    lang: function (newlang, oldlang) {
      console.log(newlang)
      switch (newlang){
        case 'English':
          console.log("en")
          this.$lang='en';
          break;
        case '日本語':
          console.log("ja")
          this.$lang='ja';
          break;
        default:
          break;
      }
    }
  },
  computed: {
    l_lang: common.l_lang,
    s_lang: common.s_lang,
  }
}
</script>