import { useState } from "react";
import { Table } from "../components/Table";
import { Cart } from '../components/Cart';

export const Home = ({choice}) => {
    const [buy, setBuy] = useState([]);
    
    const data = [{id: 1, name: "Pernilla", age: 23}, {id: 2, name: "Agneta", age: 27}];

    const handleFlip = () => {
       // setChoice(!choice);
      }

    const handleFlipVers = () => {
    setIllustration(!illustration);
    }


    return (
        <>
            {choice ? <Table data={data} addToCart={setBuy}/> : <Cart buy={buy}/>}  
            <button onClick={handleFlip}>Flip</button> 
            <button onClick={handleFlipVers}>Flip version</button>  
            {/* <form>
                <input {...register("first_name", required: true)}/>
                {first_name.error && <p>First name is required</p>}
            </form> */}

        </>
    )
}