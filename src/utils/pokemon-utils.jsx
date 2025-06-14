import { API } from "../api/api-const";

export async function fetchPokemonList() {
    try {
     const response = await fetch(`${API.POKEDEX_API}`) // VA chercher l'url
     const pokemonListData = await response.json() //Transforme en .json
    return pokemonListData // retourne le résultat
    }
    catch{(error) => {
      console.error("Fetch error :", error);
    }};
  }

  export async function fetchPokemon(id) {
    try {
     const response = await fetch(`${API.POKEMON_API.replace(":id", id)}`) // VA chercher l'url
     const pokemonData = await response.json() //Transforme en .json
    return pokemonData // retourne le résultat
    }
    catch{(error) => {
      console.error("Fetch error :", error);
    }};
  }