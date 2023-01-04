import {fireEvent, prettyDOM, render, screen} from "@testing-library/react";
import {PokemonSelector} from "../PokemonSelector";
import userEvent from "@testing-library/user-event";

describe('<PokemonSelector />', function () {
    const getPokemonIdMock = jest.fn();
    function renderPokemonSelector() {
        render(
            <PokemonSelector
                data={[
                    {
                        name: 'bulbasaur',
                        id: 1
                    },
                    {
                        name: 'ivysaur',
                        id: 2
                    }
                ]}
                getPokemonId={getPokemonIdMock}
            />
        );
    }

    it('should render pokemons in a select box with the first option being "Select pokémon"', function () {
        renderPokemonSelector();

        const selectBox = screen.getByRole('combobox');
        const options = selectBox.options;

        expect(options[0].innerHTML).toBe('Select Pokémon');
        expect(options[1].innerHTML).toBe('bulbasaur');
        expect(options[2].innerHTML).toBe('ivysaur');
    });

    it('should call getPokemonId with the selected pokemon id', function () {
        renderPokemonSelector();

        const selectBox = screen.getByRole('combobox');
        fireEvent.change(selectBox, {target: {value: 2 }});
        fireEvent.change(selectBox, {target: {value: 1 }});

        expect(getPokemonIdMock).toHaveBeenNthCalledWith(1, "2");
        expect(getPokemonIdMock).toHaveBeenNthCalledWith(2, "1");
    });

});