import React from 'react';
import img from './img/nopokemon.jpg';
import { imgStyle, idStyle, imgContainerStyle,
    cardStyle, nameStyle, typeStyle,
    bodyStyle, gridStyle, h1Style,
    noImgStyle } from "./style";

export const Pokemon = ({ data }) => {
    const getPokemons = () => {
        return data.map((pokemon, id) => getData(pokemon, id));
    }

    const getData = (pokemon, id) => {
        const pokemonSrc = pokemon.sprites.other.home.front_default;
        return (
            <div style={cardStyle}>
                <div style={imgContainerStyle}>
                    {pokemonSrc ? <img src={pokemonSrc} style={imgStyle} /> : <div style={noImgStyle}><p>?</p></div>}
                </div>
                <div style={idStyle} ><p>{id + 1}</p></div>
                <p style={nameStyle}>{pokemon.name}</p>
                <p style={typeStyle}>Type: {pokemon.types[0].type.name}</p>
            </div>
            );
    }

    return (
        <div style={bodyStyle}>
            <h1 style={h1Style}>POKEDEX</h1>
            <div style={gridStyle}>
                {getPokemons()}
            </div>
        </div>
    )
}