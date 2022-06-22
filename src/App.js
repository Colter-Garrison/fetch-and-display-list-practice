import './App.css';
import { useEffect, useState } from 'react';
import { getBeer } from './services/fetch-utils';
import { getCandies } from './services/fetch-utils';
import { getPets } from './services/fetch-utils';
import { getSushi } from './services/fetch-utils';
// import your arrays here
import BeerList from './BeerList';
import CandiesList from './CandiesList';
import PetsList from './PetsList';
import SushiList from './SushiList';

function App() {
  const [beer, setBeer] = useState([]);
  const [candies, setCandies] = useState([]);
  const [pets, setPets] = useState([]);
  const [sushi, setSushi] = useState([]);

  
  useEffect(() => {
    async function fetchBeerData() {
      const data = await getBeer();
      setBeer(data);
    }
    fetchBeerData();
    async function fetchCandyData() {
      const data = await getCandies();
      setCandies(data);
    }
    fetchCandyData();
    async function fetchPetData() {
      const data = await getPets();
      setPets(data);
    }
    fetchPetData();
    async function fetchSushiData() {
      const data = await getSushi();
      setSushi(data);
    }
    fetchSushiData();
  }, []);

  return (
    <div className="App">
      <BeerList beer={beer} />
      <CandiesList candies={candies} />
      <PetsList pets={pets} />
      <SushiList sushi={sushi} />
    </div>
  );
}

export default App;
