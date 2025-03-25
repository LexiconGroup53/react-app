// import { useEffect, useState } from 'react';
import './App.css';
import { Catalogue } from './pages/Catalogue';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Route, Routes, BrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';


function App() {
  const queryClient =  new QueryClient();
 // const [collection, setCollection] = useState([]);

/*   useEffect(() => {
    let persisted = sessionStorage.getItem("persistedCollection");
    if(persisted) setCollection(JSON.parse(persisted));
  }, []); */

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter >
        <Routes>
          <Route element={<Layout/>}>      
              <Route path="/" element={<Home />} />
              <Route path="catalogue" element={<Catalogue />} />
              <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
