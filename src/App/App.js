import React from 'react';
import { GetData } from '../GetData/GetData';
import { useState, useEffect } from "react";
import { ShowCard } from "../ShowCard/ShowCard";
import { PokemonSelector } from "../PokemonSelector/PokemonSelector";
import axios from "axios";

export default function App() {
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ selected, setSelected ] = useState(1);
    const [ show, setShow ] = useState(false);
    const pokemonNumber = 10    ; //905

    async function getData() {
        for (let id = 1; id <= pokemonNumber; id++) {
            let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            await axios({method: 'get', url: url}).then(function (response) {
                let actualData = response.data;
                setData(data => [...data, actualData]);
                setError(null);
            }).catch(function (error) {
                setError(error);
                setData([]);
            }).then(function () {
                setLoading(false);
            })
        }
    }

    useEffect(async () => {
        await getData();
    }, []);

    const getPokemonId = (pokemonId) => {
        setSelected(pokemonId);
        setShow(true);
    }

    const hideCard = () => {
        setShow(false);
    }

    const getTypes = (pokemon) => {
        return pokemon.types.map((type, id) => <li className='list-title li-item' key={id}>{type.type.name}</li>);
    }

    return (
        <div className='body'>
            <h1>My PokéDex!</h1>
            <PokemonSelector data={data} getPokemonId={getPokemonId} />
            <GetData data={data} getPokemonId={getPokemonId} getTypes={getTypes} />
            {show && selected > 0 ? <ShowCard pokemonId={selected} data={data} hideCard={hideCard} getTypes={getTypes} /> : <p></p>}
        </div>
)
}
