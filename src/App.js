import React from 'react';
import { Pokemon } from './Pokemon';
import { useState, useEffect } from "react";

export default function App() {
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const pokemonNumber = 905;

    useEffect(() => {
        const getData = async () => {
            for (let id = 895; id <= pokemonNumber; id++) {
                try {
                    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(
                            `HTTP Error: ${response.status}`
                        )
                    }
                    let actualData = await response.json();
                    setData(data => [...data, actualData]);
                    setError(null);
                } catch (error) {
                    setError(error);
                    setData([]);
                } finally {
                    setLoading(false);
                }
            }
        }
        getData();
    }, []);

    return (
        <Pokemon data={data} />
    )
}
