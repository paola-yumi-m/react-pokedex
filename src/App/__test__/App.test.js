import {prettyDOM, render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const GET_POKEMONS_URL = `https://pokeapi.co/api/v2/pokemon/1`;

describe('<App />', function () {

    const mockAdapter = new MockAdapter(axios);

    beforeEach(() => {
        mockAdapter.onGet(GET_POKEMONS_URL).reply(200, [{ name: "bulbasaur" }]);
    });

    it('should render page with title and pokemon selector', async function () {
        render(
            <App/>
        );

        const h1Element = screen.getByText('My PokéDex!');

        expect(h1Element).toBeInTheDocument();
        await waitFor(() => {
              expect(mockAdapter.history.get.length).toBe(1);
            });
        // expect(pokemonsSelector.length).toBe(11);
        // expect(pokemonsSelector[0].innerHTML).toBe('Select Pokémon');
        // expect(pokemonsSelector[1].innerHTML).toBe('bulbasaur');
        // expect(pokemonsSelector[-1].innerHTML).toBe('caterpie');
    });
});