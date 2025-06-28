import { useEffect, useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { PokemonCardContainer } from "../components/PokemonCardContainer";
import { fetchPokemonList } from "../utils/pokemon-utils";

export function PokedexHomePage() {
  const [pokemonList, setPokemonList] = useState(null);
  const [pokemonFilter, setPokemonFilter] = useState('');
  const [filterMode, setFilterMode] = useState('both');

  const filteredPokemonList = pokemonFilter
    ? pokemonList.filter(pokemon => {
        const nameMatch = pokemon.name.toLowerCase().includes(pokemonFilter.toLowerCase());
        const typeMatch = pokemon.types.some(type =>
          type.toLowerCase().includes(pokemonFilter.toLowerCase()));
        
        if (filterMode === "name") return nameMatch;
        if (filterMode === "type") return typeMatch;
        return nameMatch || typeMatch; // both
      })
    : pokemonList;

  async function loadPokemonList() {
    const pokemonListData = await fetchPokemonList();
    setPokemonList(pokemonListData);
  }

  useEffect(() => {
    loadPokemonList();
  }, []);

  return (
    <div className="flex flex-col px-4">
      <section className="">
        <FilterBar 
          filter={pokemonFilter} 
          onFilterChange={setPokemonFilter}
          filterMode={filterMode}
          onFilterModeChange={setFilterMode}
          />

        {filteredPokemonList?.length === 0 && (
          <p className="pl-10">Aucun résultat pour la recherche {pokemonFilter}</p>
          )}
      </section>
      <section>
        {pokemonList && (
          <PokemonCardContainer pokemonList={filteredPokemonList}/>
        )}
      </section>
    </div>
  )
}