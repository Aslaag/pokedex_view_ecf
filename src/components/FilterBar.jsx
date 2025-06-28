export function FilterBar(props) {
  return (
    <div className="flex flex-col md:flex-row justify-center py-4">
      <input 
        type="text" 
        placeholder="Filter Pokemon..." 
        value={props.filter}
        onChange={(e) => props.onFilterChange(e.target.value)}
        className="border-2 border-b-0 md:border-b-2 border-r-2 md:border-r-0 border-lime-500/50 py-1 px-3 rounded-t-xl md:rounded-tr-none md:rounded-l-xl md:w-[85%] text:text-lime-700 placeholder:text-sm placeholder:text-lime-700 hover:bg-lime-50 transition-all transition-300" />
        <select
        value={props.filterMode}
        onChange={(e) => props.onFilterModeChange(e.target.value)}
        className="border-2 border-lime-500/50 py-1 px-3 rounded-b-xl md:rounded-bl-none md:rounded-r-xl text-lime-700 hover:bg-lime-50 transition-all transition-300"
      >
        <option value="both">Name or type</option>
        <option value="name">Name only</option>
        <option value="type">Type only</option>
      </select>
    </div>
    
  )
}