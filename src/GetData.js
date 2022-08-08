import React from 'react';
import './styles.css';
import {Card} from "./Card";

export const GetData = ({ data, getPokemonId }) => {
    const getPokemons = () => {
        return data.map((pokemon, id) => getData(pokemon, id));
    }

    const getData = (pokemon, id) => {
        const pokemonSrc = pokemon.sprites.other.home.front_default;
        return (
            <Card pokemonSrc={pokemonSrc} pokemonId={id} pokemon={pokemon} getPokemonId={getPokemonId} />
            );
    }

    return (
        <div className='body'>
            <h1>My PokéDex!</h1>
            <div className='grid'>
                {getPokemons()}
            </div>
        </div>
    )
}