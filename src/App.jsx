import { useState } from 'react';
import './App.css'
import { Table } from './components/Table';
import { Cart } from './components/Cart';
import { Catalogue } from './pages/Catalogue';

function App() {
  const data = [{id: 1, name: "Pernilla", age: 23}, {id: 2, name: "Agneta", age: 27}];
  // let choice = true;
  const [choice, setChoice] = useState(false);
  const [buy, setBuy] = useState([]);
  const [illustration, setIllustration] = useState(false);

  const handleFlip = () => {
    setChoice(!choice);
  }

  const handleFlipVers = () => {
    setIllustration(!illustration);
  }
  return (
    <>
      {choice ? <Table data={data} addToCart={setBuy}/> : <Cart buy={buy}/>}  
      <button onClick={handleFlip}>Flip</button> 
      <button onClick={handleFlipVers}>Flip version</button>     
      <Catalogue choice={choice} />
    </>
  )
}

export default App
