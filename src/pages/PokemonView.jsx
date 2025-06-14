import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavigationArrows } from "../components/NavigationArrows";
import { ReviewsContainer } from "../components/ReviewsContainer";
import { Stats } from "../components/Stats";
import { IMG } from "../constants/pokedex-const";
import { fetchPokemon } from "../utils/pokemon-utils";

export function PokemonView() {
  const pokemonId = useParams();

  const [pokemon, setPokemon] = useState(null);
  
    async function loadPokemon() {
      const pokemonData = await fetchPokemon(pokemonId.id);
      setPokemon(pokemonData);
    }
  
    useEffect(() => {
      loadPokemon();
    }, []);
  
    
  return (
    <div>
    <NavigationArrows/>
    <section className="flex flex-col p-2 items-center">
      {pokemon && <h2 className="uppercase">{pokemon.name}</h2>}

      <div className="flex justify-between p-2 w-full">
        <img src={IMG.POKEMON_IMG.replace(":id", pokemonId.id)} alt="" />
        {pokemon &&  <Stats stats={pokemon.base}/>}
        {pokemon &&  <ReviewsContainer id={pokemon.id}/>}
      </div>
    </section>
    </div>
  )
}