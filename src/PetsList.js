import React from 'react';
import Pets from './Pets';

export default function PetsList({ pets }) {
  return (
    <div>
      {
        pets.map((pets, i) => {return <Pets {...pets} key={pets.name + i + pets.id}/>;})
      }
    </div>
  );
}