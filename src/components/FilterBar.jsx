export function FilterBar(props) {
  return (
    <div className="flex justify-center py-4">
      <input 
        type="text" 
        placeholder="Filter Pokemon..." 
        value={props.filter}
        onChange={(e) => props.onFilterChange(e.target.value)}
        className="border-2 border-lime-400 py-1 px-3 rounded-xl w-[95%] text:text-lime-700 placeholder:text-sm placeholder:text-lime-700 hover:bg-lime-50 transition-all transition-300" />
    </div>
  )
}