export const API = Object.freeze({
  POKEDEX_API: `${import.meta.env.VITE_POKEMON}`,
  POKEMON_API: `${import.meta.env.VITE_POKEMON}/:id`,
  REVIEWS_API: `${import.meta.env.VITE_REVIEWS}`,
  POKEMON_IMG_API: `${import.meta.env.VITE_POKEMON_IMG}/:id.svg`
})