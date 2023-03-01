package main

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"log"
)

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
	var EdOardoJson interface{}
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
	var towakeyJson interface{}
	err = json.Unmarshal(towakey, &towakeyJson)
	if err != nil {
		log.Println(err)
	} else {
		log.Println("towakeyJson", towakeyJson)
	}

}
