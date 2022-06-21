import './App.css';
import { useEffect, useState } from 'react';
import { getBeer } from './services/fetch-utils';
// import your arrays here
import BeerList from './BeerList';
// import CandiesList from './CandiesList';
// import PetsList from './PetsList';
// import SushiList from './SushiList';

function App() {
  const [beer, setBeer] = useState([]);
  // const [candies, setCandies] = useState([]);
  // const [pets, setPets] = useState([]);
  // const [sushi, setSushi] = useState([]);

  
  useEffect(() => {
    async function fetchBeerData() {
      const data = await getBeer();
      setBeer(data);
    }
    fetchBeerData();
  }, []);

  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <BeerList beer={beer} />
    </div>
  );
}

export default App;
