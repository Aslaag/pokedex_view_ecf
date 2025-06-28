import { useNavigate } from "react-router";
import { IMG } from "../constants/pokedex-const";
import { ROUTES } from "../routes/Routes";
import { TypeTag } from "./TypeTag";

export function PokemonCard(props) {
  let navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(ROUTES.POKEMON.replace(":id", props.id))} 
      className="flex flex-col w-[250px] items-center py-4 px-8 rounded-4xl shadow-lg border border-lime-200 hover:bg-lime-50 hover:shadow-lime-800/30 hover:shadow-2xl hover:cursor-pointer ">
        <img src={IMG.POKEMON_IMG.replace(":id", props.id)} alt="" className="w-56 h-56" />
        <p>#{props.id} {props.name}</p>
        <div className="flex gap-2">
          {props.types.map((type) => (
            <TypeTag key={type} name={type}/>
            )
          )}
        </div>
    </div>
  )
}