import { useEffect, useState } from 'react';
import './App.css'
import { Catalogue } from './pages/Catalogue';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Switch } from './components/Switch';
import { NavBar } from './components/NavBar';

function App() {

  const [choice, setChoice] = useState(3);
  const [collection, setCollection] = useState([]);
  const [illustration, setIllustration] = useState(false);

  useEffect(() => {
    let persisted = sessionStorage.getItem("persistedCollection");
    if(persisted) setCollection(JSON.parse(persisted));
  }, []);

  return (
    <>
    <NavBar setChoice={setChoice}/>
    <Switch choice={choice}>
        <Home value={1}/>
        <Catalogue value={2} collection={collection} setCollection={setCollection}/>
        <Search value={3} collection={collection} setCollection={setCollection}/>
    </Switch>
    </>
  )
}

export default App
