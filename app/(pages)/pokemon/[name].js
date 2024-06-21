// pages/pokemon/[name].js

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const PokemonDetails = ({ pokemon }) => {
  const router = useRouter();
  const { name } = router.query;

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <nav className="breadcrumb">
        <Link href="/">Home</Link> / <span>{name}</span>
      </nav>
      <h1 className="text-3xl font-bold mt-4">{capitalizeFirstLetter(name)}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mt-4"
      />
      {/* Additional details can be added here */}
    </div>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getServerSideProps(context) {
  const { name } = context.params;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data for ${name}: ${res.statusText}`);
    }
    const pokemon = await res.json();
    return {
      props: { pokemon },
    };
  } catch (error) {
    console.error(error.message);
    return {
      notFound: true,
    };
  }
}

export default PokemonDetails;
