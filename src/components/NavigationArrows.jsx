import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export function NavigationArrows() {
  return (
    <div className="flex justify-between p-2">
      <button>
        <ArrowBigLeft/>
      </button>
      <button>
        <ArrowBigRight/>
      </button>
    </div>
  )
}