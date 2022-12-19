import {prettyDOM, render, screen} from "@testing-library/react";
import {Card} from "../Card";
import '@testing-library/jest-dom';

describe('<Card />', function () {
    function renderCard(pokemonSrc, pokemon, getTypesMocked) {
        render(
            <Card
                pokemonSrc={pokemonSrc}
                pokemon={pokemon}
                getPokemonId={jest.fn()}
                getTypes={getTypesMocked}
            />
        );
    }

    const getTypesMocked = jest.fn();
    const pokemon = {
        id: 10,
        name: 'Caterpie'
    };
    const pokemonSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png';

    it('should render pokemon card', function () {
        renderCard(pokemonSrc, pokemon, getTypesMocked);

        const imgElement = screen.getByRole('img');
        const idElement = screen.getByText('10');
        const nameElement = screen.getByText('Caterpie');

        expect(imgElement.src).toBe(pokemonSrc);
        expect(idElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(getTypesMocked).toBeCalledWith(pokemon);
    });

    it('should render a ? when there is no source for the image', function () {
        renderCard(null, pokemon, getTypesMocked);

        const imgElement = screen.queryByRole('img');
        const noImgElement = screen.getByText('?');

        expect(imgElement).not.toBeInTheDocument();
        expect(noImgElement).toBeInTheDocument();
    });
});