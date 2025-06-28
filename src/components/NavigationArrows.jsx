import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export function NavigationArrows(props) {
  return (
    <div className="flex justify-between p-2">
      <button onClick={props.goToPrev}>
        <ArrowBigLeft 
          size="35px" 
          color="#414c30" 
          className="hover:fill-lime-800/60 hover:cursor-pointer transition-colors transition-300"
        />
      </button>
      <button onClick={props.goToNext}>
        <ArrowBigRight 
          size="35px" 
          color="#414c30" 
          className="hover:fill-lime-800/60 hover:cursor-pointer transition-colors transition-300"
        />
      </button>
    </div>
  )
}