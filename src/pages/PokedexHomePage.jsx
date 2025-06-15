import { useEffect, useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { PokemonCardContainer } from "../components/PokemonCardContainer";
import { fetchPokemonList } from "../utils/pokemon-utils";

export function PokedexHomePage() {
  const [pokemonList, setPokemonList] = useState(null);
  const [pokemonFilter, setPokemonFilter] = useState('');
  const filteredPokemonList = pokemonFilter
    ? pokemonList.filter(pokemon => 
      pokemon.name.toLowerCase()
      .includes(pokemonFilter.toLowerCase()) 
      || pokemon.types.some(type =>
        type.toLowerCase().includes(pokemonFilter.toLowerCase())))
    : pokemonList;

  async function loadPokemonList() {
    const pokemonListData = await fetchPokemonList();
    setPokemonList(pokemonListData);
  }

  useEffect(() => {
    loadPokemonList();
  }, []);

  return (
    <div>
      <section className="">
        <FilterBar filter={pokemonFilter} onFilterChange={setPokemonFilter}/>
        {filteredPokemonList?.length === 0 && (<p className="pl-10">Aucun résultat pour la recherche {pokemonFilter}</p>)}
      </section>
      <section>
        {pokemonList && (
          <PokemonCardContainer pokemonList={filteredPokemonList}/>
        )}
      </section>
    </div>
  )
}