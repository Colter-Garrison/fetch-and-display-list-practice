import './App.css';
import { useEffect, useState } from 'react';
import { getBeer, getCandies, getPets, getSushi } from './services/fetch-utils';
// import your arrays here
import BeerList from './BeerList';
import CandiesList from './CandiesList';
import PetsList from './PetsList';
import SushiList from './SushiList';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
    </div>
  );
}

export default App;
