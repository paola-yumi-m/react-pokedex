import axios from 'axios';
import { getPokemonNumber } from './GetPokemonNumber';

let url = `http://localhost:8080/api/v1/pokemons`;

export async function getData(setError, setData, setLoading) {
  const pokemons = [];
  let pokemonNumber = getPokemonNumber();
  for (let id = 1; id <= pokemonNumber; id++) {
    try {
      const response = await axios.get(`${url}/${id}`);
      let actualData = response?.data;
      pokemons.push(actualData);
      setError(null);
    } catch (error) {
      setError(error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }
  setData(pokemons);
  console.log(pokemons);
}
