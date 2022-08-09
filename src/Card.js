import React from "react";

export const Card = ({ pokemonSrc, pokemon, getPokemonId }) => {

    function handleClick(e) {
        getPokemonId(e.currentTarget.id);
    }

    return (
        <div className='card' onClick={handleClick} id={pokemon.id} >
            <div className='img-container' >
                {pokemonSrc ? <img src={pokemonSrc} className='img' /> : <div className='no-img'><p>?</p></div>}
            </div>
            <div className='id' ><p>{pokemon.id}</p></div>
            <p className='name'>{pokemon.name}</p>
            <p className='type'>Type: {pokemon.types[0].type.name}</p>
        </div>
    );
}