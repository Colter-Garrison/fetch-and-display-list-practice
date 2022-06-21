import React from 'react';

export default function Beer({ name, type, maker }) {
  return (
    <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{maker}</p>
    </div>
  );
}

