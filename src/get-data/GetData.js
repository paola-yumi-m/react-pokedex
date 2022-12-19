import React from 'react';
import '../styles.css';
import { Card } from "../Card/Card";

export const GetData = ({ data, getPokemonId, getTypes }) => {
    const getPokemons = () => {
        return data.map((pokemon) => getData(pokemon));
    }

    const getData = (pokemon) => {
        const pokemonSrc = pokemon.sprites.other.home.front_default;
        return (
            <Card pokemonSrc={pokemonSrc} pokemon={pokemon} getPokemonId={getPokemonId} getTypes={getTypes} />
            );
    }

    return (
        <div className='grid'>
            {getPokemons()}
        </div>
    )
}