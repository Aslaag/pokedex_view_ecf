import { useEffect, useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { PokemonCardContainer } from "../components/PokemonCardContainer";
import { fetchPokemonList } from "../utils/pokemon-utils";

export function PokedexHomePage() {
  const [pokemonList, setPokemonList] = useState(null);

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
        <FilterBar/>
      </section>
      <section>
        {pokemonList && (
          <PokemonCardContainer pokemonList={pokemonList}/>
        )}
      </section>
    </div>
  )
}