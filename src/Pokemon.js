import React from 'react';
import img from './img/nopokemon.jpg';
import './Pokemon.css';

export const Pokemon = ({ data }) => {
    const getPokemons = () => {
        return data.map((pokemon, id) => getData(pokemon, id));
    }

    const getData = (pokemon, id) => {
        const pokemonSrc = pokemon.sprites.other.home.front_default;
        return (
            <div className='card' >
                <div className='img-container'>
                    {pokemonSrc ? <img src={pokemonSrc} className='img' /> : <div className='no-img'><p>?</p></div>}
                </div>
                <div className='id' ><p>{id + 1}</p></div>
                <p className='name'>{pokemon.name}</p>
                <p className='type'>Type: {pokemon.types[0].type.name}</p>
            </div>
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