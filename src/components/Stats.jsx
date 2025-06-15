import { StatBar } from "../components/StatBar"
import { TypeTag } from "../components/TypeTag"

export function Stats(props) {
  return (
    <div>
      <TypeTag/>
      <div>
        <div className="flex flex-col gap-2">
          {Object.entries(props.stats).map(([name, value]) => (
            <StatBar key={name} name={name} value={value}/>
            )
          )}
        </div>
      </div>
    </div>
  )
}