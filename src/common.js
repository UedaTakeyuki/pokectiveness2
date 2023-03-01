export default {
  l_lang: function(){
    switch(this.$lang){
      case "fr":
        return "french";
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
/*}  getPokedexItemById: function(pokedex, poke_id){
    return pokedex.filter(function(element){return (element.id == poke_id);})[0]
  },*/
}