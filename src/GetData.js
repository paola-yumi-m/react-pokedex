import React from 'react';
import './styles.css';
import { Card } from "./Card";

export const GetData = ({ data, getPokemonId }) => {
    const getPokemons = () => {
        return data.map((pokemon) => getData(pokemon));
    }

    const getData = (pokemon) => {
        const pokemonSrc = pokemon.sprites.other.home.front_default;
        return (
            <Card pokemonSrc={pokemonSrc} pokemon={pokemon} getPokemonId={getPokemonId} />
            );
    }

    return (
        <div className='grid'>
            {getPokemons()}
        </div>
    )
}