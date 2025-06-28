import { PKMN_TYPES } from "../constants/types-constants";


export function TypeTag(props) {
  
  //Compare name type to find the good color
  const name = props.name || "";
  const type = PKMN_TYPES.find(type => type.name === name.toLowerCase());
  const bgColor = type ? type.color : "transparent";

  return (
    <p
      className="px-3 py-1 rounded-2xl text-sm text-white"
      style={{ backgroundColor: bgColor }}
    >
      {props.name}
    </p>
  );
}
