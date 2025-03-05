import { useState, useEffect } from "react"
import axios from "axios";
import { BookList } from "../components/BookList";
import { AddRef } from "../components/AddRef";

export const Catalogue = ({collection, setCollection}) => {

    const refAction = [
        {
            action: (item) => setCollection(collection.filter(ref =>
                ref.identifier !== item.identifier)),
            info: "remove"
        }
    ]
    return (
        <div>
            
            <h1>Catalogue</h1>
            <AddRef collection={collection} setCollection={setCollection}/>
            {collection !== null && <BookList data={collection} refAction={refAction}/>}
        
        </div>
    )
}