// components/PokemonSearchForm.js

import React, { useState } from "react";

const PokemonSearchForm = ({ types, onFilterChange }) => {
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    onFilterChange(selectedType, search);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    onFilterChange(type, search);
  };

  return (
    <div className="p-4 bg-gray-200">
      <div className="flex flex-col items-start">
        <div className="w-full md:w-1/3 md:mr-4 mb-4 md:mb-0">
          <select
            id="type"
            value={type}
            onChange={handleTypeChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            {types.map((typeItem) => (
              <option key={typeItem.name} value={typeItem.name}>
                {typeItem.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:flex-1">
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              id="search"
              value={search}
              onChange={handleSearchChange}
              className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Pokémon name"
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonSearchForm;
