import React from 'react';

export default function Sushi({ name, ingredients, rating }) {
  return (
    <div className='sushi-object'>
      <h2>{name}</h2>
      <ul>Ingredients: {ingredients.map((ingredients, i) => <li key={ingredients + i}>{ingredients}</li>)}</ul>
      <p>Rating: {rating}/5</p>
    </div>
  );
}