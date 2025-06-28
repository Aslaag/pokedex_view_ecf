import { IMG } from "../constants/pokedex-const";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 md:pt-0 px-4 h-fit md:h-[800px] bg-contain bg-no-repeat bg-center gap-10"
    style={{ backgroundImage: `url(${IMG.BG_IMG})` }}>
      <h2 className="uppercase font-black">uh oh, no pokemon here...</h2>
      <img src={IMG.IMG_NOT_FOUND} alt="" className="rounded-2xl shadow-2xl" />
    </div>
  )
}