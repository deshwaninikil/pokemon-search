import React from "react";
import Link from "next/link";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="border p-4 m-2 cursor-pointer bg-white border-black text-center relative group">
      <img
        className="mx-auto"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h3 className="mt-2 mb-4 text-lg font-bold text-left">
        {capitalizeFirstLetter(pokemon.name)}
      </h3>
      <p className="text-green-500 text-left">
        <Link href={`/pokemon/${pokemon.name}`}>Detail</Link>
      </p>
    </div>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default PokemonCard;
