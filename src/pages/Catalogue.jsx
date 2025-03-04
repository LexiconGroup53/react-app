import { useState, useEffect } from "react"
import axios from "axios";
import { BookList } from "../components/BookList";

export const Catalogue = ({collection, setCollection}) => {

    return (
        <div>
            
            <h1>Catalogue</h1>
            {collection !== null && <BookList data={collection} />}
        
        </div>
    )
}