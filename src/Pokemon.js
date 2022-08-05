import React from 'react';
import img from './img/nopokemon.jpg'

export const Pokemon = ({ data }) => {
    const getPokemons = () => {
        return data.map((pokemon) => <li>{pokemon.name}{getImages(pokemon)}</li>);
    }

    const getImages = (pokemon) => {
        const pokemonSrc = pokemon.sprites.other.home.front_default;
        return <img src={pokemonSrc ? pokemonSrc : img}/>;
    }

    return (
        <div>
            <h1>My Pokédex!</h1>
            <ul>{getPokemons()}</ul>
        </div>
    )
}