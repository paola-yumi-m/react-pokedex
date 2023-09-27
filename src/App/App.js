import React from 'react';
import { GetData } from '../GetData/GetData';
import { useState, useEffect } from 'react';
import { ShowCard } from '../ShowCard/ShowCard';
import { PokemonSelector } from '../PokemonSelector/PokemonSelector';
import { getData } from './GetDataFromApi';
import { SearchBox } from '../SearchBox/SearchBox';

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(1);
  const [show, setShow] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState('0');
  const [pokemonList, setPokemonList] = useState([]);
  const [isSearchByName, setIsSearchByName] = useState(true);

  useEffect(() => {
    getData(setError, setData, setLoading);
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
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <div>
            <h1>My PokéDex!</h1>
            <div className='sub-header'>
              <PokemonSelector
                data={data}
                getPokemonId={getPokemonId}
                selectedPokemon={selectedPokemon}
                setSelectedPokemon={setSelectedPokemon}
              />
              <SearchBox
                setPokemonList={setPokemonList}
                setError={setError}
                setIsSearchByName={setIsSearchByName}
              />
            </div>
          </div>
          <div className='body'>
            {isSearchByName ? (
              <GetData
                data={pokemonList}
                getPokemonId={getPokemonId}
                getTypes={getTypes}
              />
            ) : (
              <GetData
                data={data}
                getPokemonId={getPokemonId}
                getTypes={getTypes}
              />
            )}
          </div>
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
        </>
      )}
    </div>
  );
}
