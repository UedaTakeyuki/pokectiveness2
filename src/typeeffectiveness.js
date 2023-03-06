// https://github.com/UedaTakeyuki/PokemonTypeEffectivenessData/blob/master/typeeffectiveness.json
export default 
{
	ids: [
		"Normal",
		"Fighting",
		"Poison",
		"Ground",
		"Flying",
		"Bug",
		"Rock",
		"Ghost",
		"Steel",
		"Fire",
		"Water",
		"Electric",
		"Grass",
		"Ice",
		"Psychic",
		"Dragon",
		"Dark",
		"Fairy"
	],
  typename: {
    en:{
			Normal: "NORMAL",
			Fighting: "FIGHTING",
			Poison: "POISON",
			Ground: "GROUND",
			Flying: "FLYING",
			Bug: "BUG",
			Rock: "ROCK",
			Ghost: "GHOST",
			Steel: "STEEL",
			Fire: "FIRE",
			Water: "WATER",
			Electric: "ELECTRIC",
			Grass: "GRASS",
			Ice: "ICE",
			Psychic: "PSYCHIC",
			Dragon: "DRAGON",
			Dark: "DARK",
			Fairy: "FAIRY",
		},
    ja:{
			Normal: "ノーマル",
			Fighting: "かくとう",
			Poison: "どく",
			Ground: "じめん",
			Flying: "ひこう",
			Bug: "むし",
			Rock: "いわ",
			Ghost: "ゴースト",
			Steel: "はがね",
			Fire: "ほのお",
			Water: "みず",
			Electric: "でんき",
			Grass: "くさ",
			Ice: "こおり",
			Psychic: "エスパ",
			Dragon: "ドラゴン",
			Dark: "あく",
			Fairy: "フェアリー",
		},
		// https://www.reddit.com/r/TheSilphRoad/comments/5417te/chinese_characters_for_naming_your_pokemon_move/		
		zh:{
			Normal: "普	",
			Fighting: "武",
			Poison: "武",
			Ground: "土",
			Flying: "空",
			Bug: "虫",
			Rock: "石",
			Ghost: "鬼",
			Steel: "钢",
			Fire: "火",
			Water: "水",
			Electric: "电",
			Grass: "草",
			Ice: "冰",
			Psychic: "神",
			Dragon: "龙",
			Dark: "恶 ",
			Fairy: "妖",
		},
		// http://hakadoru000matome.blog.fc2.com/blog-entry-3.html
		fr:{
			Normal: "Normal",
			Fighting: "Combat",
			Poison: "Poison",
			Ground: "Sol",
			Flying: "Vol",
			Bug: "Insecte",
			Rock: "Roche",
			Ghost: "Spectre",
			Steel: "Acier",
			Fire: "Feu",
			Water: "Eau",
			Electric: "Électrik",
			Grass: "Plante",
			Ice: "Glace",
			Psychic: "Psy",
			Dragon: "Dragon",
			Dark: "Ténèbres",
			Fairy: "Fée",
		},
	},
  familyname: {
		Normal: "ノーマル	",
		Fighting: "かくとう",
		Poison: "どく",
		Ground: "じめん",
		Flying: "ひこう",
		Bug: "むし",
		Rock: "いわ",
		Ghost: "ゴースト",
		Steel: "はがね",
		Fire: "ほのお",
		Water: "みず",
		Electric: "でんき",
		Grass: "くさ",
		Ice: "こおり",
		Psychic: "エスパ",
		Dragon: "ドラゴン",
		Dark: "あく",
		Fairy: "フェアリー",
	},
	suppereffective: {
		Normal: ["Fighting"],
		Fighting: ["Flying","Psychic","Fairy"],
		Poison: ["Ground","Psychic"],
		Ground: ["Water","Grass","Ice"],
		Flying: ["Rock","Electric","Ice"],
		Bug: ["Flying","Rock","Fire"],
		Rock: ["Fighting","Ground","Water","Grass"],
		Ghost: ["Ghost","Dark"],
		Steel: ["Fighting","Ground","Steel","Fire"],
		Fire: ["Ground","Rock","Water"],
		Water: ["Electric","Grass"],
		Electric: ["Ground"],
		Grass: ["Poison","Flying","Bug","Fire","Ice"],
		Ice: ["Fighting","Rock","Steel","Fire"],
		Psychic: ["Bug","Ghost","Dark"],
		Dragon: ["Ice","Dragon","Fairy"],
		Dark: ["Fighting","Bug","Fairy"],
		Fairy: ["Poison","Steel"],
	},
	notveryeffective: {
		Normal: [],
		Fighting: ["Bug","Rock","Dark"],
		Poison: ["Fighting","Poison","Bug","Grass","Fairy"],
		Ground: ["Poison","Rock"],
		Flying: ["Fighting","Bug","Grass"],
		Bug: ["Fighting","Ground","Grass"],
		Rock: ["Normal","Poison","Flying","Fire"],
		Ghost: ["Poison","Bug"],
		Steel: ["Normal","Flying","Bug","Rock","Steel","Grass","Ice","Psychic","Dragon","Fairy"],
		Fire: ["Bug","Steel","Fire","Grass","Ice","Fairy"],
		Water: ["Steel","Fire","Water","Ice"],
		Electric: ["Flying","Steel","Electric"],
		Grass: ["Ground","Water","Electric","Grass"],
		Ice: ["Ice"],
		Psychic: ["Fighting","Psychic"],
		Dragon: ["Fire","Water","Electric","Grass"],
		Dark: ["Ghost","Dark"],
		Fairy: ["Fighting","Bug","Dark"],
	},
	noeffect: {
		Normal: ["Ghost"],
		Fighting: [],
		Poison: [],
		Ground: ["Electric"],
		Flying: ["Ground"],
		Bug: [],
		Rock: [],
		Ghost: ["Normal","Fighting"],
		Steel: ["Poison"],
		Fire: [],
		Water: [],
		Electric: [],
		Grass: [],
		Ice: [],
		Psychic: [],
		Dragon: [],
		Dark: ["Psychic"],
		Fairy: ["Dragon"],
	},
	chipscolor: {
		Normal: "gray",
		Fighting: "red",
		Poison: "purple",
		Ground: "amber",
		Flying: "blue",
		Bug: "green",
		Rock: "orange",
		Ghost: "deep-purple",
		Steel: "blue-gray",
		Fire: "orange",
		Water: "blue",
		Electric: "lime",
		Grass: "light-green",
		Ice: "light-blue",
		Psychic: "purple",
		Dragon: "orange",
		Dark: "indigo",
		Fairy: "pink",
	},
	wording: {
		en:{
				opponent: "Enemy: ",
				select: " (Touch here)",
				chose: "Choose Types",
				supper: "Super-effective!",
				not: "Not very effective!",
				no: "No effect!",
		},
		ja:{
				opponent: "相手は",
				select: "(タッチで切り替え)",
				chose: "相手を選択",
				supper: "効果はばつぐん！",
				not: "効果はいまひとつ！",
				no: "効果がない！",
		},
		zh:{
			opponent: "对手",
			select: "(触控切换)",
			chose: "选择对手",
			supper: "超级有效！",
			not: "抗！",
			no: "免疫的！",
		},
		fr:{
			opponent: "Ennemi: ",
			select: " (Touchez ici)",
			chose: "Choose Types",
			supper: "Très Efficace !",
			not: "Résistances !",
			no: "Immunisés !",
		},
	}
}