import { render, screen } from '@testing-library/react';
import { ShowCard } from '../ShowCard';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('<ShowCard />', function () {
  const getPokemons = (pokemonSrc) => {
    return [
      {
        name: 'bulbasaur',
        pokemonId: 0,
        height: 7,
        weight: 69,
        sprites: { other: { home: { front_default: pokemonSrc } } },
        abilities: [
          { ability: { name: 'overgrow' } },
          { ability: { name: 'chlorophyll' } },
        ],
      },
    ];
  };

  it('should call hideCard() when exit button is clicked', function () {
    const hideCardMock = jest.fn();
    render(
      <ShowCard
        data={getPokemons('')}
        pokemonId={1}
        hideCard={hideCardMock}
        getTypes={jest.fn()}
      />
    );

    const exitButton = screen.getByRole('button', { name: 'X' });
    userEvent.click(exitButton);

    expect(hideCardMock).toBeCalledTimes(1);
  });

  it('should render a ? when pokemonSrc does not exist', function () {
    render(
      <ShowCard
        data={getPokemons('')}
        pokemonId={1}
        hideCard={jest.fn()}
        getTypes={jest.fn()}
      />
    );

    const imgElement = screen.queryByRole('img');
    const pElement = screen.getByText('?');

    expect(imgElement).not.toBeInTheDocument();
    expect(pElement).toBeInTheDocument();
  });

  it('should render card with info', function () {
    const getTypesMock = jest.fn();
    const pokemons = getPokemons(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'
    );
    render(
      <ShowCard
        data={pokemons}
        pokemonId={1}
        hideCard={jest.fn()}
        getTypes={getTypesMock}
      />
    );

    const exitButton = screen.getByRole('button', { name: 'X' });
    const imgElement = screen.getByRole('img');
    const pokemonId = screen.getByText('0');
    const pokemonName = screen.getByText('bulbasaur');
    const pokemonHeight = screen.getByText('Height: 7');
    const pokemonWeight = screen.getByText('Weight: 69');
    const abilities = screen.getAllByRole('listitem');

    expect(exitButton).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'
    );
    expect(pokemonId).toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonHeight).toBeInTheDocument();
    expect(pokemonWeight).toBeInTheDocument();
    expect(getTypesMock).toBeCalledWith(pokemons[0]);
    expect(abilities.length).toBe(2);
    expect(abilities[0].innerHTML).toBe('overgrow');
    expect(abilities[1].innerHTML).toBe('chlorophyll');
  });
});
