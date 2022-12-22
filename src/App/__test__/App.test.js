import {prettyDOM, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

describe('<App />', function () {
    const axios = require('axios');
    const MockAdapter = require('axios-mock-adapter');
    const mock = new MockAdapter(axios);

    mock.onGet(new RegExp(`https://pokeapi.co/api/v2/pokemon/*`)).reply(200, {
        data: [
            {name: 'bulbasaur'}, {name: 'ivysaur'}
        ]
    });

    it('should render page with title and pokemon selector', async function () {
        render(
            <App/>
        );

        const h1Element = screen.getByText('My PokéDex!');
        const combobox = await screen.findByRole('combobox');
        console.log(prettyDOM(combobox));
        const pokemonsSelector = combobox.options;

        expect(h1Element).toBeInTheDocument();
        expect(pokemonsSelector.length).toBe(11);
        expect(pokemonsSelector[0].innerHTML).toBe('Select Pokémon');
        expect(pokemonsSelector[1].innerHTML).toBe('bulbasaur');
        expect(pokemonsSelector[-1].innerHTML).toBe('caterpie');
    });
});