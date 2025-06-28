import { IMG } from "../constants/pokedex-const";

export function ReviewCard(props) {
  return (
    <div className="flex flex-col relative gap-2 border-2 border-dashed border-lime-500/50 py-2 px-4 rounded-xl w-[90%] bg-white/70 transition-all transition-300">
      <img src={IMG.POKEBALL_IMG} alt="" className="absolute w-7 -right-2 -top-2"/>
      <p className="text-lg">{props.content}</p>
      <p className="text-sm font-black">Posted by : {props.author}</p>
    </div>
  )
}