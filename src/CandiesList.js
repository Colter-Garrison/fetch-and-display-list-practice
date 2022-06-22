
import React from 'react';
import Candies from './Candies';

export default function CandiesList({ candies }) {
  return (
    <div>
      {
        candies.map((candies, i) => {return <Candies {...candies} key={candies.id + i + candies.name}/>;})
      }
    </div>
  );
}
