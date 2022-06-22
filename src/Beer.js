import React from 'react';

export default function Beer({ name, type, maker }) {
  return (
    <div className='beer-object'>
      <h2>{maker}</h2>
      <h4>{name}</h4>
      <p>{type}</p>
    </div>
  );
}

