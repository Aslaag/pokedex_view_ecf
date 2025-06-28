import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { NavigationArrows } from "../components/NavigationArrows";
import { ReviewsContainer } from "../components/ReviewsContainer";
import { Stats } from "../components/Stats";
import { TypeTag } from "../components/TypeTag";
import { IMG } from "../constants/pokedex-const";
import { fetchPokemon, updatePokemon } from "../utils/pokemon-utils";


export function PokemonView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [likes, setLikes] = useState(null)

  const currentId = parseInt(id, 10);
  const goToNext = () => {
    if (currentId < 151) navigate(`/pokemon/${currentId + 1}`);
  };
  const goToPrev = () => {
    if (currentId > 1) navigate(`/pokemon/${currentId - 1}`);
  };

  async function addLike() {
    const newLikes = (likes || 0) + 1;
    setLikes(newLikes);

    try {
      await updatePokemon(pokemon.id, newLikes);
    } catch (error) {
      console.error("Erreur lors de la mise à jour des likes :", error);
      setLikes(likes);
    }
  }
  
    async function loadPokemon() {
      const pokemonData = await fetchPokemon(id);
      setPokemon(pokemonData);
    }
  
    useEffect(() => {
      loadPokemon();
    }, [id]);

     useEffect(() => {
      if (pokemon) {
        setLikes(pokemon.like)
      }
    }, [pokemon]);
  
  return (
    <div>
    <NavigationArrows goToPrev={goToPrev} goToNext={goToNext}/>
    <section className="grid grid-cols-3 gap-10 p-5">
      <img src={IMG.POKEMON_IMG.replace(":id", id)} alt="" />
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
            <button
              type="button"
              className="hover:cursor-pointer" 
              onClick={(e) => {
                e.preventDefault();
                addLike();
              }}>
              <Heart fill="red"/>
            </button>
          </div>
        </div>
        {pokemon &&  <Stats id={pokemon.id} stats={pokemon.base}/>}
      </div>
      <div>
        {pokemon &&  <ReviewsContainer id={pokemon.id}/>}
      </div>
    </section>
    </div>
  )
}