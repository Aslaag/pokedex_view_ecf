import { IMG } from "../constants/pokedex-const";

export function Logo() {
  return (
    <div className="flex gap-1 items-center">
      <img src={IMG.POKEBALL_IMG} alt="Logo Pokeball" className="h-8 w-8"/>
      <img src={IMG.POKEDEX_IMG} alt="Logo Pokedex" className="h-10"/>
    </div>
  )
}