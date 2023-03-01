package main

import (
	"io/ioutil"
	"log"
)

func main() {

	// read pokedex of EdOardo
	EdOardo, err := ioutil.ReadFile("../src/assets/Ed0ardo/pokedex.json")
	if err != nil {
		log.Println(err)
	} else {
		log.Println("EdOardo", EdOardo)
	}
}
