import React from 'react';
import Beer from './Beer';

export default function BeerList({ beer }) {
  return (
    <div>
      {
        beer.map((beer, i) => {return <Beer {...beer} key={beer.name + i + beer.id}/>;})
      }
    </div>
  );
}
