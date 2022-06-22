import React from 'react';

export default function Pets({ name, type, age }) {
  return (
    <div className='pets-object'>
      <h2>{name}</h2>
      <h4>{type}</h4>
      <p>Age: {age}</p>
    </div>
  );
}