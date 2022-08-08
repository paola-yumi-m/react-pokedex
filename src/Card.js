import React, {useState} from "react";

export const Card = ({ pokemonSrc, pokemonId, pokemon, getPokemonId }) => {

    function handleClick(e) {
        getPokemonId(e.currentTarget.id);
    }

    return (
        <div className='card' onClick={handleClick} id={pokemonId} >
            <div className='img-container' >
                {pokemonSrc ? <img src={pokemonSrc} className='img' /> : <div className='no-img'><p>?</p></div>}
            </div>
            <div className='id' ><p>{pokemonId + 1}</p></div>
            <p className='name'>{pokemon.name}</p>
            <p className='type'>Type: {pokemon.types[0].type.name}</p>
        </div>
    );
}