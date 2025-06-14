import { useNavigate } from "react-router";
import { IMG } from "../constants/pokedex-const";
import { ROUTES } from "../routes/Routes";
import { TypeTag } from "./TypeTag";

export function PokemonCard(props) {
  let navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(ROUTES.POKEMON.replace(":id", props.id))} 
      className="w-[250px] hover:shadow-amber-700 hover:shadow-2xl hover:cursor-pointer">
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