import React from 'react';
import { GetData } from '../GetData/GetData';
import { useState, useEffect } from "react";
import { ShowCard } from "../ShowCard/ShowCard";
import { PokemonSelector } from "../PokemonSelector/PokemonSelector";
import axios from "axios";

let url = `https://pokeapi.co/api/v2/pokemon`;

export default function App() {
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ selected, setSelected ] = useState(1);
    const [ show, setShow ] = useState(false);
    const pokemonNumber = 1    ; //905

    async function getData() {
        const pokemons = []
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
    }

    useEffect(() => {
        getData();
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
        <div>
            {
                error ?
                    <h1>Where did the Pokémons go???</h1> :
                        loading ?
                            <div className='body'>
                                <h1>Loading...</h1>
                            </div> :
                            <div className='body'>
                                <h1>My PokéDex!</h1>
                                <PokemonSelector data={data} getPokemonId={getPokemonId}/>
                                <GetData data={data} getPokemonId={getPokemonId} getTypes={getTypes}/>
                                {show && selected > 0 ?
                                    <ShowCard pokemonId={selected} data={data} hideCard={hideCard}
                                              getTypes={getTypes}/> : <p></p>}
                            </div>
            }
        </div>
)
}
