import { useEffect, useState } from 'react';
import './App.css';
import { Catalogue } from './pages/Catalogue';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Route, Routes, BrowserRouter } from 'react-router';
import { Layout } from './components/Layout';


function App() {

  const [collection, setCollection] = useState([]);

  useEffect(() => {
    let persisted = sessionStorage.getItem("persistedCollection");
    if(persisted) setCollection(JSON.parse(persisted));
  }, []);

  return (
    
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>      
              <Route path="/" element={<Home />} />
              <Route path="catalogue" element={<Catalogue collection={collection} setCollection={setCollection}/>} />
              <Route path="search" element={<Search collection={collection} setCollection={setCollection}/>} />
          </Route>
        </Routes>
      </BrowserRouter>

  )
}

export default App
