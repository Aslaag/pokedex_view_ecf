import { IMG } from "../constants/pokedex-const";

export function NotFound() {
  return (
    <div className="flex flex-col items-center pt-10 gap-2">
      <h2 className="uppercase">uh oh, no pokemon here...</h2>
      <img src={IMG.IMG_NOT_FOUND} alt="" className="rounded-2xl shadow-2xl" />
    </div>
  )
}