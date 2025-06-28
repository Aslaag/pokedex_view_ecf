import { PKMN_TYPES } from "../constants/types-constants";


export function TypeTag(props) {
  const name = props.name || "";
  const typeObj = PKMN_TYPES.find(type => type.name === name.toLowerCase());
  const bgColor = typeObj ? typeObj.color : "#ccc";

  return (
    <p
      className="border px-2 rounded-2xl text-sm text-white"
      style={{ backgroundColor: bgColor }}
    >
      {props.name}
    </p>
  );
}
