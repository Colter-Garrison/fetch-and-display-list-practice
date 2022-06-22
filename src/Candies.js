import React from 'react';

export default function Candies({ name, type, maker }) {
  return (
    <div className='candy-object'>
      <h2>{maker}</h2>
      <h4>{name}</h4>
      <p>{type}</p>
    </div>
  );
}

