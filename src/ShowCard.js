import React from "react";

export const ShowCard = ({ data, pokemonId, hideCard }) => {
    const pokemon = data[pokemonId-1];
    const pokemonSrc = pokemon.sprites.other.home.front_default;
    const getHabilities = () => {
        return pokemon.abilities.map((ability, key) => <li key={key} className='ability li-ability'>{ability.ability.name}</li>);
    }

    const handleClick = () => {
        hideCard();
    }

    return (
        <div className='faded-bg'>
            <div className='show-card' id={pokemonId} >
                <button className='exit' onClick={handleClick}>X</button>
                <div className='img-container' >
                    {pokemonSrc ? <img src={pokemonSrc} className='img' /> : <div className='no-img'><p>?</p></div>}
                </div>
                <div className='id' ><p>{pokemon.id}</p></div>
                <p className='name'>{pokemon.name}</p>
                <div className='infos'>
                    <p className='info'>Type: {pokemon.types[0].type.name}</p>
                    <p className='info'>Height: {pokemon.height}</p>
                    <p className='info'>Weight: {pokemon.weight}</p>
                    <div className='ability-container'>
                        <p className='ability'>Abilties:</p>
                        <div className='abilities'>
                            <ul className='ul-abilties'>{getHabilities()}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}