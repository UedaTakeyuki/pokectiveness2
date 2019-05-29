export default {
  l_lang: function(){
    switch(this.$lang){
      case "ja":
        return "japanese";
      default:
        return "english";
    }
  }
}