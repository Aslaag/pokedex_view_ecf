import { PokemonCard } from "./PokemonCard";

export function PokemonCardContainer(props) {
  return (
    <div className="flex gap-5 flex-wrap">
      {props.pokemonList.map((pokemon) => (
        <PokemonCard 
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
        />
        )
      )}
    
  </div>
  )
}