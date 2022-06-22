import React from 'react';
import Sushi from './Sushi';

export default function SushiList({ sushi }) {
  return (
    <div>
      {
        sushi.map((sushi, i) => {return <Sushi {...sushi} key={sushi.id + i + sushi.rating}/>;})
      }
    </div>
  );
}