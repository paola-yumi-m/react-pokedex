import React from "react";

export const PokemonSelector = ({ data, getPokemonId }) => {
    function getPokemons() {
        return data.map((pokemon, key) => <option key={key} value={pokemon.id}>{pokemon.name}</option>);
    }

    function handleSelect(e) {
        const id = e.currentTarget.value;
        getPokemonId(id);
    }

    return (
        <div className='select-div'>
            <select name='select' className='custom-select' onChange={handleSelect}>
                <option value='0'>Select Pokémon</option>
                {getPokemons()}
            </select>
        </div>
    )
}