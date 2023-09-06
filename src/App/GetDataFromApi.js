import axios from 'axios';

let url = `http://localhost:8080/api/v1/pokemons`;

export async function getData(setError, setData, setLoading) {
  try {
    const response = await axios.get(`${url}`);
    setData(response?.data);
    setError(null);
  } catch (error) {
    setError(error);
    setData([]);
  } finally {
    setLoading(false);
  }
}
