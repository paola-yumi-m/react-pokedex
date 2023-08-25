export const PokemonSelector = ({
  data,
  getPokemonId,
  selectedPokemon,
  setSelectedPokemon,
}) => {
  function getPokemons() {
    return data.map((pokemon, key) => (
      <option
        key={key}
        value={pokemon.pokemonId}
      >
        {pokemon.name}
      </option>
    ));
  }

  function handleSelect(e) {
    const id = e.currentTarget.value;
    getPokemonId(id);
    setSelectedPokemon(id);
  }

  return (
    <div className='select-div'>
      <select
        name='select'
        className='custom-select'
        onChange={handleSelect}
        value={selectedPokemon}
      >
        <option value='0'>Select Pokémon</option>
        {getPokemons()}
      </select>
    </div>
  );
};
