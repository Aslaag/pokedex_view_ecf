import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export function NavigationArrows(props) {

  //Manage disabled Arrows with id
  let prevClass = "hover:fill-lime-800/60 hover:cursor-pointer transition-colors duration-300";
  let nextClass = "hover:fill-lime-800/60 hover:cursor-pointer transition-colors duration-300";

  if (props.isPrevDisabled) {
    prevClass = "opacity-40";
  }

  if (props.isNextDisabled) {
    nextClass = "opacity-40";
  }

  return (
    <div className="flex justify-between p-2">
      <button onClick={props.goToPrev}>
        <ArrowBigLeft 
          size="35px" 
          color="#414c30" 
          className={`${prevClass}`}
        />
      </button>
      <button onClick={props.goToNext}>
        <ArrowBigRight 
          size="35px" 
          color="#414c30" 
          className={`${nextClass}`}
        />
      </button>
    </div>
  )
}