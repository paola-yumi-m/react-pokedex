import React from 'react';
import { BsSearch } from 'react-icons/bs';

export const SearchBox = () => {
  return (
    <form className='search-box'>
      <input
        className='custom-select'
        type='text'
        id='pokemonName'
        placeholder='Search by name...'
      />
      <div
        onClick={(e) => {
          console.log(e.target);
        }}
      >
        <BsSearch
          size='30px'
          style={{ cursor: 'pointer' }}
        />
      </div>
    </form>
  );
};
