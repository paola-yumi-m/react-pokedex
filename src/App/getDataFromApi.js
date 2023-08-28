import axios from 'axios';

let url = `http://localhost:8080/api/v1/pokemons`;
let pokemonNumber = 10; //905

async function getDataFromApi(setError, setData, setLoading) {
  const pokemons = [];
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

export default getDataFromApi;
