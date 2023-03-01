import pokemon_json from '@/assets/johnuberbacher_pokemon.json' // https://raw.githubusercontent.com/johnuberbacher/pokemon_json/main/pokemon.json

export default {
  methods: {
    pokemon_whose_name_start_with(str){
//      return pokemons.filter(member => this.is_start_with(member.name[this.l_lang][0],str));
//      pokemon_json.filter(member => console.log(member.id, member.name[this.l_lang][0], member.name[this.l_lang]));
      return pokemon_json.filter(member => this.is_start_with(member.name[this.l_lang][0],str[0]));
    },
    pokemon_alola_whose_name_start_with(str){
//      return list.filter(member => this.is_start_with(member.name.japanese[0],str));
      return pokemons_alola.filter(member => this.is_start_with(member.name[this.l_lang][0],str[0]));
    },
    is_start_with(c, str){
      /*
      for (let i in str.split("")){
        if (c == str[i]){
          return true;
        }
      }
      return false;
      */
      return c === str
    },
  },
  computed: {
    // return ""
    l_lang: common.l_lang,
  }
}