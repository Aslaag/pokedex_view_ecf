import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavigationArrows } from "../components/NavigationArrows";
import { ReviewsContainer } from "../components/ReviewsContainer";
import { Stats } from "../components/Stats";
import { TypeTag } from "../components/TypeTag";
import { IMG } from "../constants/pokedex-const";
import { fetchPokemon, updatePokemon } from "../utils/pokemon-utils";

export function PokemonView() {
  const pokemonId = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [likes, setLikes] = useState(null)

  async function addLike(e) {
    e.preventDefault();
    const newLikes = likes + 1;
    setLikes(newLikes)
    await updatePokemon(pokemon.id, newLikes)
  }
  
    async function loadPokemon() {
      const pokemonData = await fetchPokemon(pokemonId.id);
      setPokemon(pokemonData);
    }
  
    useEffect(() => {
      loadPokemon();
    }, []);

     useEffect(() => {
      if (pokemon) {
        setLikes(pokemon.like)
      }
    }, [pokemon]);
  
  return (
    <div>
    <NavigationArrows/>
    <section className="grid grid-cols-3 gap-10 p-5">
      <img src={IMG.POKEMON_IMG.replace(":id", pokemonId.id)} alt="" />
      <div className="flex flex-col items-center">
        <div className="flex w-full justify-start">
          <div className="flex flex-col mx-auto">
            {pokemon && <h2 className="uppercase">{pokemon.name}</h2>}
            {pokemon && <div className="flex gap-2">
              {pokemon.types.map((type) => (
                <TypeTag key={type} name={type}/>
                )
              )}
            </div>}
          </div>
          <div className="flex items-center gap-1">
            <p className="flex">{likes}</p>
            <Heart onClick={addLike} fill="red"/>
          </div>
        </div>
        {pokemon &&  <Stats stats={pokemon.base}/>}
      </div>
      <div>
        {pokemon &&  <ReviewsContainer id={pokemon.id}/>}
      </div>
    </section>
    </div>
  )
}