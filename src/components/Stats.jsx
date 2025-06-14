import { StatBar } from "../components/StatBar"
import { TypeTag } from "../components/TypeTag"

export function Stats() {
  return (
    <div>
      <TypeTag/>
      <div>
        <StatBar/>
      </div>
    </div>
  )
}