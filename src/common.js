export default {
  l_lang: function(){
    switch(this.$lang){
      case "fr":
        return "fra";
      case "ja":
        return "jpn";
      case "zh":
        return "cht";
      default:
        return "eng";
    }
  },
  s_lang: function(){
    return this.$lang;
  },
  getPokedexItemById: function(pokedex, poke_id){
    return pokedex.filter(function(element){return (element.id == poke_id);})[0]
  },
}