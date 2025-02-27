import { useState } from 'react';
import './App.css'
import { Table } from './components/Table';
import { Cart } from './components/Cart';

function App() {
  const data = [{id: 1, name: "Pernilla", age: 23}, {id: 2, name: "Agneta", age: 27}];
  // let choice = true;
  const [choice, setChoice] = useState(false);
  const [buy, setBuy] = useState([]);

  const handleFlip = () => {
    setChoice(!choice);
  }

  return (
    <>
      {choice ? <Table data={data} addToCart={setBuy}/> : <Cart buy={buy}/>}  
      <button onClick={handleFlip}>Flip</button>    
    </>
  )
}

export default App
