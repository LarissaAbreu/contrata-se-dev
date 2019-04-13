import React from 'react';

export default function SearchInput({ placeholder, onChange }) {
  return (
    <input type='text' className='search-input' placeholder={placeholder} onChange={onChange} />
  );
}
