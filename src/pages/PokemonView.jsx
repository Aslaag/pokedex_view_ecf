import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { NavigationArrows } from "../components/NavigationArrows";
import { ReviewsContainer } from "../components/ReviewsContainer";
import { Stats } from "../components/Stats";
import { TypeTag } from "../components/TypeTag";
import { IMG } from "../constants/pokedex-const";
import { ROUTES } from "../routes/Routes";
import { fetchPokemon, updatePokemon } from "../utils/pokemon-utils";


export function PokemonView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [likes, setLikes] = useState(null)
  const [isPrevDisabled, setIsPrevDisabled] = useState(false)
  const [isNextDisabled, setIsNextDisabled] = useState(false)

  const currentId = parseInt(id, 10);

  const goToNext = () => {
    if (currentId < 151) navigate(`/pokemon/${currentId + 1}`);;
  };
  const goToPrev = () => {
    if (currentId > 1) navigate(`/pokemon/${currentId - 1}`);;
  };

  async function addLike() {
    const newLikes = (likes || 0) + 1;
    setLikes(newLikes);

    try {
      await updatePokemon(pokemon.id, newLikes);
    } catch (error) {
      console.error("error : ", error);
      setLikes(likes);
    }
  }
  
  useEffect(() => {
    async function loadPokemon() {
      try {
        const pokemonData = await fetchPokemon(id);
        if (!pokemonData) {
          navigate(ROUTES.NOT_FOUND);
          return;
        }
        setPokemon(pokemonData);
      } catch (error) {
        console.error("error : ", error)
        navigate(ROUTES.NOT_FOUND);
      }
    }

    loadPokemon();
  }, [id]);

     useEffect(() => {
      if (pokemon) {
        setLikes(pokemon.like)
      }
    }, [pokemon]);

    useEffect(() => {
    setIsPrevDisabled(currentId === 1);
    setIsNextDisabled(currentId === 151);
  }, [currentId]);
  
  return (
    <div className="pt-5">
      <NavigationArrows isNextDisabled={isNextDisabled} isPrevDisabled={isPrevDisabled} goToPrev={goToPrev} goToNext={goToNext}/>
      <section 
      className="flex flex-col md:flex-row justify-around gap-10 px-10 pt-20 bg-contain bg-center bg-no-repeat h-[700px]"
      style={{ backgroundImage: `url(${IMG.BG_IMG})` }}>
        <div className="md:w-1/3 h-full justify-center flex">
          <img src={IMG.POKEMON_IMG.replace(":id", id)} alt="" />
        </div>
        <div className="flex flex-col items-center md:w-1/3 gap-10">
          <div className="flex flex-col md:flex-row w-full justify-start">
            <div className="flex flex-col mx-auto gap-10 items-center">
              {pokemon && <h2 className="text-5xl">{pokemon.name}</h2>}
              {pokemon && <div className="flex gap-2">
                {pokemon.types.map((type) => (
                  <TypeTag key={type} name={type}/>
                  )
                )}
              </div>}
            </div>
            <div className="flex justify-center pt-5 items-center gap-1">
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
        <div className="md:w-1/3">
          {pokemon &&  <ReviewsContainer id={pokemon.id}/>}
        </div>
      </section>
    </div>
  )
}