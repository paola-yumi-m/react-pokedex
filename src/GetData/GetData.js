import React from 'react';
import '../styles.css';
import { Card } from '../Card/Card';

export const GetData = ({ data, getPokemonId, getTypes }) => {
  const getPokemons = () => {
    return data.map((pokemon, key) => getData(pokemon, key));
  };

  const getData = (pokemon, key) => {
    const pokemonSrc = pokemon.sprites.other.home.front_default;
    return (
      <Card
        key={key}
        pokemonSrc={pokemonSrc}
        pokemon={pokemon}
        getPokemonId={getPokemonId}
        getTypes={getTypes}
      />
    );
  };

  return (
    <div>
      {data.length === 0 ? (
        <div style={{ fontSize: '2rem' }}>{'No pokémons found!'}</div>
      ) : (
        <div className='grid'>{getPokemons()}</div>
      )}
    </div>
  );
};
