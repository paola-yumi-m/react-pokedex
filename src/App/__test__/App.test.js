import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../App";

jest.mock("axios");

const GET_POKEMONS_URL = `https://pokeapi.co/api/v2/pokemon/1`;
const pokemons = [
    {
        id: 1,
        name: "bulbasaur",
        weight: 69,
        height: 7,
        types: [
            {
                slot: 1,
                type: { name: "poison" },
            },
            {
                slot: 2,
                type: { name: "grass" },
            },
        ],
        abilities: [
            {
                ability: {
                    name: "overgrow",
                },
            },
            {
                ability: {
                    name: "chlorophyll",
                },
            },
        ],
        sprites: {
            other: {
                home: {
                    front_default: "image",
                },
            },
        },
    },
];

describe("<App />", () => {
    it("should render page with title and pokemon selector", async function () {
        axios.get.mockResolvedValueOnce({ data: pokemons });

        render(<App />);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(GET_POKEMONS_URL);
        });

        // const h1Element = screen.getByText('My PokéDex!');
        //
        // expect(h1Element).toBeInTheDocument();
        // expect(pokemonsSelector.length).toBe(11);
        // expect(pokemonsSelector[0].innerHTML).toBe('Select Pokémon');
        // expect(pokemonsSelector[1].innerHTML).toBe('bulbasaur');
        // expect(pokemonsSelector[-1].innerHTML).toBe('caterpie');
    });
});
