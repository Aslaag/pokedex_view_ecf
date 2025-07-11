import { MAX_STAT } from "../constants/stats-constants";

export function StatBar(props) {

  //normalize names
  const statTraduction = {
    "HP": "hp",
    "Attack": "attack",
    "Defense": "defense",
    "Special attack": "specialAttack",
    "Special defense": "specialDefense",
    "Speed": "speed",
  }

  //fill the stat bar
  const fillBar = props.value * 100 / `${MAX_STAT[statTraduction[props.name]]}`;

  return (
    <div className="flex gap-1">
      <div className="flex gap-4 w-full">
        <p className="w-1/3">{props.name}</p>
        <div className="w-2/3 flex items-center gap-1">
          <p>{props.value}</p>
          <span className="relative w-52 h-3 border-1 bg-gray-200 rounded-2xl overflow-hidden">
            <span 
              className="absolute h-2.5 bg-lime-600/70 rounded-l-2xl rounded-r-lg transition-all transition-500"
              style={{ width: `${fillBar}%` }}/>
          </span>
        </div>
      </div>
      
    </div>
  )
}