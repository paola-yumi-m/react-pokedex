import React from "react";

export const ShowCard = ({ data, pokemonId, hideCard, getTypes }) => {
    const pokemon = data[pokemonId-1];
    const pokemonSrc = pokemon.sprites.other.home.front_default;
    const getHabilities = () => {
        return pokemon.abilities.map((ability, key) => <li key={key} className='list-title li-item'>{ability.ability.name}</li>);
    }

    const handleClick = () => {
        hideCard();
    }

    return (
        <div className='faded-bg'>
            <div className='show-card' id={pokemonId} >
                <button className='exit-button' onClick={handleClick}>X</button>
                <div className='img-container' >
                    {pokemonSrc ? <img src={pokemonSrc} className='img' /> : <div className='no-img'><p>?</p></div>}
                </div>
                <div className='id' ><p>{pokemon.id}</p></div>
                <p className='name'>{pokemon.name}</p>
                <div className='infos'>
                    <p className='info'>Height: {pokemon.height}</p>
                    <p className='info'>Weight: {pokemon.weight}</p>
                    <div className='list-container'>
                        <p className='list-title'>Type:</p>
                        <ul className='ul-items'>
                            {getTypes(pokemon)}
                        </ul>
                    </div>
                    <div className='list-container'>
                        <p className='list-title'>Abilties:</p>
                        <div className='ul-container'>
                            <ul className='ul-items'>{getHabilities()}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}