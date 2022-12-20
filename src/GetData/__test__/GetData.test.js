import {prettyDOM, render, screen} from "@testing-library/react";
import {GetData} from "../GetData";
import '@testing-library/jest-dom';

describe('<GetData />', function () {
    it('should render pokemon cards', function () {
        render(
            <GetData
                data={[
                    {
                        name: 'bulbasaur',
                        sprites: {other: {home: {front_default: ''}}}
                    },
                    {
                        name: 'charmander',
                        sprites: {other: {home: {front_default: ''}}}
                    }
                ]}
                getPokemonId={jest.fn()}
                getTypes={jest.fn()}
            />
        );

        const bulbasaurCard = screen.getByText('bulbasaur');
        const charmanderCard = screen.getByText('charmander');

        expect(bulbasaurCard).toBeInTheDocument();
        expect(charmanderCard).toBeInTheDocument();
    });
});