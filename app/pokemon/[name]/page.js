"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function PokemonDetails({ params }) {
  const { name } = params;
  let pokemon;

  try {
    pokemon = await getPokemon(name);
  } catch (error) {
    console.error(error.message);
    return <div className="text-center">Error fetching data</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4 text-left">
        <Link
          href="/"
          className="text-white bg-green-500 hover:bg-green-600 p-2 rounded"
        >
          Back
        </Link>
      </nav>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-4 mb-4 text-center">
          {capitalizeFirstLetter(name)}
        </h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mt-4 mb-4 w-64 h-64"
        />
        <div className="details mt-4 p-4 border rounded shadow-lg bg-white w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">
            Name: {capitalizeFirstLetter(pokemon.name)}
          </h2>
          <h3 className="text-xl font-semibold mb-2">Type:</h3>
          <ul className="list-disc pl-5 mb-4">
            {pokemon.types.map((type) => (
              <li key={type.type.name}>
                {capitalizeFirstLetter(type.type.name)}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Stats:</h3>
          <ul className="list-disc pl-5 mb-4">
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Abilities:</h3>
          <ul className="list-disc pl-5 mb-4">
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>
                {capitalizeFirstLetter(ability.ability.name)}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Some Moves:</h3>
          <ul className="list-disc pl-5 mb-4">
            {pokemon.moves.slice(0, 5).map((move) => (
              <li key={move.move.name}>
                {capitalizeFirstLetter(move.move.name)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
