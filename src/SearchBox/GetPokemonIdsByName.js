import axios from 'axios';

export const getPokemonIdsByName = async (pokemonName, setError) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/pokemons?name=${pokemonName}`
    );
    setError(null);
    return response?.data;
  } catch (error) {
    setError(error);
  }
};
