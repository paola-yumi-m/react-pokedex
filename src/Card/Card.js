import React from "react";

export const Card = ({ pokemonSrc, pokemon, getPokemonId, getTypes }) => {

    function handleClick(e) {
        getPokemonId(e.currentTarget.id);
    }

    return (
        <div className='card' onClick={handleClick} id={pokemon.pokemonId} data-testid='pokemon-card' >
            <div className='img-container' >
                {pokemonSrc ? <img src={pokemonSrc} className='img' alt='a pokemon' /> : <div className='no-img'><p>?</p></div>}
            </div>
            <div className='id' ><p>{pokemon.pokemonId}</p></div>
            <p className='name'>{pokemon.name}</p>
            <div className='list-container'>
                <p className='list-title'>Type:</p>
                <ul className='ul-items'>
                    {getTypes(pokemon)}
                </ul>
            </div>
        </div>
    );
}