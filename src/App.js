import React from 'react';
import { GetData } from './GetData';
import { useState, useEffect } from "react";
import { ShowCard } from "./ShowCard";

export default function App() {
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ selected, setSelected ] = useState(1);
    const [ show, setShow ] = useState(false);
    const pokemonNumber = 10;

    useEffect(() => {
        const getData = async () => {
            for (let id = 1; id <= pokemonNumber; id++) {
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

    const getPokemonId = (pokemonId) => {
        setSelected(pokemonId);
        setShow(true);
    }

    const hideCard = () => {
        setShow(false);
    }

    return (
        <div>
            <GetData data={data} getPokemonId={getPokemonId}/>
            {show ? <ShowCard pokemonId={selected} data={data} hideCard={hideCard} /> : <p></p>}
        </div>
)
}
