package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
)

type EdOardoType map[string]EdOardoBodyType

type EdOardoBodyType struct {
	Name  string   `json:"name"`
	Photo string   `json:"photo"`
	Desc  string   `json:"desc"`
	Types []string `json:"types"`
}

type towakeyType struct {
	Version string            `json:"version"` //"100",
	Update  string            `json:"update"`  //"20230113",
	Pokedex []towakeyBodyType `json:"pokedex"`
}

type towakeyBodyType struct {
	ID             int             `json:"id"`
	Name           towakeyNameType `json:"name"`
	Classification string          `json:"classification"` //"たねポケモン",
	Height         float64         `json:"height"`         //"0.7",
	Weight         float64         `json:"weight"`         //"6.9"
}

type towakeyNameType struct {
	Jpn string `json:"jpn"` //"フシギダネ",
	Eng string `json:"eng"` //"Bulbasaur",
	Ger string `json:"ger"` //"Bisasam",
	Fra string `json:"fra"` //"Bulbizarre",
	Kor string `json:"kor"` //"이상해씨",
	Chs string `json:"chs"` //"妙蛙种子",
	Cht string `json:"cht"` //"妙蛙種子"
}

type pokedexBodyType struct {
	ID   int             `json:"id"` //1,
	Name towakeyNameType `json:"name"`
	Type []string        `json:"type"`
	//	Photo string          `json:"photo"`
	//	Desc  string          `json:"desc"`
}

func main() {

	log.SetFlags(log.LstdFlags | log.Lmicroseconds | log.Lshortfile)

	// read pokedex of EdOardo
	EdOardo, err := ioutil.ReadFile("../src/assets/Ed0ardo/pokedex.json")
	if err != nil {
		log.Println(err)
	} else {
		//		log.Println("EdOardo", EdOardo)
	}

	// unmarshal EdOardo
	var EdOardoJson EdOardoType
	err = json.Unmarshal(EdOardo, &EdOardoJson)
	if err != nil {
		log.Println(err)
	} else {
		//		log.Println("EdOardoJson", EdOardoJson)
	}

	// read pokedex of towakey
	towakey, err := ioutil.ReadFile("../src/assets/towakey/pokedex.json")
	if err != nil {
		log.Println(err)
	} else {
		//		log.Println("EdOardo", EdOardo)
	}

	// trim prefix
	// https://stackoverflow.com/a/31399046/11073131
	towakey = bytes.TrimPrefix(towakey, []byte("\xef\xbb\xbf")) // Or []byte{239, 187, 191}

	// unmarshal towakey
	var towakeyJson towakeyType
	err = json.Unmarshal(towakey, &towakeyJson)
	if err != nil {
		log.Println(err)
	} else {
		//		log.Println("towakeyJson", towakeyJson)
	}

	var pokedex []pokedexBodyType

	for _, towakeyBody := range towakeyJson.Pokedex {
		id := towakeyBody.ID
		log.Println("id", id)
		var idStr string
		if id < 1000 {
			idStr = fmt.Sprintf("%03d", id)
		} else {
			idStr = fmt.Sprintf("%d", id)
		}
		EdOardoBody := EdOardoJson[idStr]
		log.Println("idStr", idStr)
		log.Println("EdOardoBody", EdOardoBody)
		log.Println("towakeyBody", towakeyBody)

		pokedexBody := pokedexBodyType{
			ID:   towakeyBody.ID,
			Name: towakeyBody.Name,
			Type: EdOardoBody.Types, //EdOardoBody.Types,
			//			Photo: EdOardoBody.Photo,
			//			Desc:  EdOardoBody.Desc,
		}
		log.Println("pokedexBody", pokedexBody)

		pokedex = append(pokedex, pokedexBody)
	}

	var pokedexJson []byte
	// https://stackoverflow.com/a/19038873/11073131
	//pokedexJson, err = json.Marshal(pokedex)
	pokedexJson, err = json.MarshalIndent(pokedex, "", "    ")
	if err != nil {
		log.Println(err)
	}
	err = ioutil.WriteFile("pokedex.json", pokedexJson, 0666)
	if err != nil {
		log.Println(err)
	}
}
