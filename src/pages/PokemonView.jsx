import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavigationArrows } from "../components/NavigationArrows";
import { ReviewsContainer } from "../components/ReviewsContainer";
import { Stats } from "../components/Stats";
import { TypeTag } from "../components/TypeTag";
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
    <section className="flex w-full">
      <img src={IMG.POKEMON_IMG.replace(":id", pokemonId.id)} alt="" />
      <div className="flex flex-col items-center w-full">
        {pokemon && <h2 className="uppercase">{pokemon.name}</h2>}
        {pokemon && <div className="flex gap-2">
          {pokemon.types.map((type) => (
            <TypeTag key={type} name={type}/>
            )
          )}
        </div>}
        {pokemon &&  <Stats stats={pokemon.base}/>}
      </div>
      <div>
        {pokemon &&  <ReviewsContainer id={pokemon.id}/>}
      </div>
    </section>
    </div>
  )
}