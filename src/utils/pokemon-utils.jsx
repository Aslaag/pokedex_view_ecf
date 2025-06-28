import { API } from "../api/api-const";

// Fetch the list of all 151 pokemons in the database
export async function fetchPokemonList() {
  try {
    const response = await fetch(`${API.POKEDEX_API}`)
    const pokemonListData = await response.json()
    return pokemonListData
  }
  catch{(error) => {
    console.error("Fetch error :", error);
  }};
}

// Fetch the pokemon via a certain id
export async function fetchPokemon(id) {
  try {
    const response = await fetch(`${API.POKEMON_API.replace(":id", id)}`)
    const pokemonData = await response.json()
    return pokemonData
  }
  catch{(error) => {
    console.error("Fetch error :", error);
  }};
}

// Modify the like data of a certain pokemon via id
export async function updatePokemon(id, likes) {
  try {
    await fetch(`${API.POKEMON_API.replace(":id", id)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
    "like": likes
      }),
    })
  }
  catch{(error) => {
    console.error("Fetch error :", error);
  }};
}

// Fetch all the reviews linked to a pokemon via id
export async function fetchReviews(id) {
  try {
    const response = await fetch(`${API.REVIEWS_API}`)
    const reviewsData = await response.json()
    const reviewsSelectedPokemon =  reviewsData.filter((review) => String(review.pokemonId) === String(id));
    return reviewsSelectedPokemon
  }
  catch{(error) => {
    console.error("Fetch error :", error);
  }};
}

// Add a review linked to a pokemon via id
export async function addReview(id, content) {
  try {
    await fetch(`${API.REVIEWS_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
    pokemonId: id,
    author: "Me",
    content: content,
      }),
    })
  }
  catch{(error) => {
    console.error("Fetch error :", error);
  }};
}
