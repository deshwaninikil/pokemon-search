"use client";
import { useState, useEffect } from "react";

const usePokemon = () => {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const data = await response.json();
      setTypes(data.results);
    };

    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const data = await response.json();
      const fullData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemons(fullData);
      setFilteredPokemons(fullData);
      setLoading(false);
    };

    fetchTypes();
    fetchPokemons();
  }, []);

  const filterPokemons = (type, search) => {
    let filtered = pokemons;
    if (type) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((t) => t.type.name === type)
      );
    }
    if (search) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.includes(search.toLowerCase())
      );
    }
    setFilteredPokemons(filtered);
  };

  return { types, filteredPokemons, filterPokemons, loading };
};

export default usePokemon;
