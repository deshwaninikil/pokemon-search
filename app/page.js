"use client";
import React from "react";
import PokemonSearchForm from "../components/PokemonSearchForm";
import PokemonCard from "../components/PokemonCard";
import usePokemon from "../hooks/usePokemon";

const Home = () => {
  const { types, filteredPokemons, filterPokemons, loading } = usePokemon();

  return (
    <div className="container mx-auto p-4">
      <PokemonSearchForm types={types} onFilterChange={filterPokemons} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <div>No Pokémon found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
