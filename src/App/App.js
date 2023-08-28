import React from 'react';
import { GetData } from '../GetData/GetData';
import { useState, useEffect } from 'react';
import { ShowCard } from '../ShowCard/ShowCard';
import { PokemonSelector } from '../PokemonSelector/PokemonSelector';
import getDataFromApi from './getDataFromApi';

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(1);
  const [show, setShow] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState('0');

  useEffect(() => {
    getDataFromApi(setError, setData, setLoading);
  }, []);

  const getPokemonId = (pokemonId) => {
    setSelected(pokemonId);
    setShow(true);
  };

  const hideCard = () => {
    setSelectedPokemon('0');
    setShow(false);
  };

  const getTypes = (pokemon) => {
    return pokemon.types.map((type, id) => (
      <li
        className='list-title li-item'
        key={id}
      >
        {type.type.name}
      </li>
    ));
  };

  return (
    <div>
      {error ? (
        <h1>Where did the Pokémons go???</h1>
      ) : loading ? (
        <div className='body'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className='body'>
          <h1>My PokéDex!</h1>
          <PokemonSelector
            data={data}
            getPokemonId={getPokemonId}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
          <GetData
            data={data}
            getPokemonId={getPokemonId}
            getTypes={getTypes}
          />
          {show && selected > 0 ? (
            <ShowCard
              pokemonId={selected}
              data={data}
              hideCard={hideCard}
              getTypes={getTypes}
            />
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
}
