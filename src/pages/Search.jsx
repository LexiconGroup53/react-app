import { useState, useEffect } from "react"
import axios from "axios";
import { BookList } from "../components/BookList";
import { useCollectionStore } from "../stores/collectionStore";
import { useAddReference } from "../queries/refQueries";
//import { useAtom } from "jotai";
//import { collectionAtom } from "../atoms/collectionAtom";

export const Search = () => {
    const [posts, setPosts] = useState(null);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [searchString, setSearchString] = useState("/libris/W.V.+Quine&format=json");
    // const [collection, setCollection] = useAtom(collectionAtom);
    const addRef = useCollectionStore(state => state.addRef);

    const addReference = useAddReference();

    useEffect(() => {
        axios.get(searchString)
        .then(response => setPosts(response.data.xsearch.list))
    }, [searchString]);

    const handleSearch = () => {
            let newSearch= "/libris/";
            if(author === '' && title === '') {
                setErrorMessage(true);
                return;
            }
            if(author !== '') newSearch += `förf:(${author.replaceAll(' ', '+')})`;
            if(title !== '') newSearch += `tit:(${title.replaceAll(' ', '+')})`;
            newSearch += "&format=json";
            console.log(newSearch);
            setSearchString(newSearch);
        }

    const refAction = [
        {
        action: (item) => {
            //let newCollection = [...collection, item];
            //setCollection(newCollection);

            addReference.mutate(item);

            //sessionStorage.setItem("persistedCollection", JSON.stringify(newCollection));
        },
        info: "Add"
        }
    ]

    return (
        <div>
            <h1>Search page</h1>
            <div className="input-card">
                <label >Author</label>
                <input 
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
                              <label >Title</label>
                <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
                <p>{errorMessage ? "At least one value must be submitted" : ""}</p>
            </div>
            {posts !== null && <BookList data={posts} refAction={refAction}/>}
        </div>
    )
}