import "@testing-library/jest-dom";
import {act, prettyDOM, render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react";
import axios from "axios";
import App from "../App";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

const GET_POKEMONS_URL = `https://pokeapi.co/api/v2/pokemon/1`;
const pokemon =
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
    };

describe("<App />", () => {
    it("should render page with title and pokemon selector", async function () {
        axios.get.mockResolvedValueOnce({ data: pokemon });

        render(<App />);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(GET_POKEMONS_URL);
        });
        await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
        expect(screen.queryByText('Where did the Pokémons go??')).not.toBeInTheDocument();
        const h1Element = screen.getByText('My PokéDex!');
        expect(h1Element).toBeInTheDocument();
        const pokemonsSelector = screen.getByRole('combobox');
        expect(pokemonsSelector.length).toBe(2);
        expect(pokemonsSelector[0].innerHTML).toBe('Select Pokémon');
        expect(pokemonsSelector[1].innerHTML).toBe('bulbasaur');
    });

    it('should render error message when get fails', async function () {
        axios.get.mockRejectedValueOnce(new Error('Not found'));

        render(<App/>);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(GET_POKEMONS_URL);
        });
        await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
        expect(screen.getByText('Where did the Pokémons go???')).toBeInTheDocument();
        const h1Element = screen.queryByText('My PokéDex!');
        expect(h1Element).not.toBeInTheDocument();
        const pokemonsSelector = screen.queryByRole('combobox');
        expect(pokemonsSelector).not.toBeInTheDocument();
    });

    it('should show individual card when card is clicked', async function () {
        axios.get.mockResolvedValueOnce({data: pokemon});

        render(<App/>);

        const card = await screen.findByTestId('pokemon-card');
        userEvent.click(card);
        const heightInfo = screen.getByText('Height: 7');

        expect(heightInfo).toBeInTheDocument();
    });

    it('should close card when X button is clicked', async function () {
        axios.get.mockResolvedValueOnce({data: pokemon});

        render(<App/>);

        const card = await screen.findByTestId('pokemon-card');
        userEvent.click(card);
        const heightInfoBeforeClick = screen.getByText('Height: 7');

        expect(heightInfoBeforeClick).toBeInTheDocument();

        const closeButton = screen.getByRole('button', { name: 'X' });
        userEvent.click(closeButton);
        const heightInfoAfterClick = screen.queryByText('Height: 7');

        expect(heightInfoAfterClick).not.toBeInTheDocument();
    });
});
