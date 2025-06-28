import { StatBar } from "../components/StatBar"

export function Stats(props) {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-4">
          {Object.entries(props.stats).map(([name, value]) => (
            <StatBar key={name} name={name} value={value}/>
            )
          )}
        </div>
      </div>
    </div>
  )
}