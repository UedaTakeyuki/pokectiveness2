export default {
  l_lang: function(){
    switch(this.$lang){
      case "ja":
        return "japanese";
      case "zh":
        return "chinese";
      default:
        return "english";
    }
  },
  s_lang: function(){
    return this.$lang;
  },
}