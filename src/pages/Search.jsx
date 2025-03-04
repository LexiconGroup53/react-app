import { useState, useEffect } from "react"
import axios from "axios";
import { BookList } from "../components/BookList";

export const Search = ({collection, setCollection}) => {
    const [posts, setPosts] = useState(null);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [searchString, setSearchString] = useState("http://libris.kb.se/xsearch?query=W.V.+Quine&format=json")

    useEffect(() => {
        axios.get(searchString)
        .then(response => setPosts(response.data.xsearch.list))
    }, [searchString]);

    const handleSearch = () => {
            let newSearch= "http://libris.kb.se/xsearch?query=";
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

    const addReference = (item) => {
        setCollection([...collection, item]);
    }

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
            {posts !== null && <BookList data={posts} refAction={addReference}/>}
        </div>
    )
}