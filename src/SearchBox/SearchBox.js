import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { getPokemonIdsByName } from './GetPokemonIdsByName';

export const SearchBox = ({ setPokemonList, setError, setIsSearchByName }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleSearchPokemonByName = async () => {
    const pokemonList = await getPokemonIdsByName(pokemonName, setError);
    setPokemonList(pokemonList);
    setIsSearchByName(true);
  };

  const handleChange = (e) => {
    setPokemonName(e.currentTarget.value);
  };

  return (
    <form className='search-box'>
      <input
        className='custom-select'
        type='text'
        id='pokemonName'
        placeholder='Search by name...'
        value={pokemonName}
        onChange={handleChange}
      />
      <div onClick={handleSearchPokemonByName}>
        <BsSearch
          size='30px'
          style={{ cursor: 'pointer' }}
        />
      </div>
    </form>
  );
};
