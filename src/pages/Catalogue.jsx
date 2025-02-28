import { useState, useEffect } from "react"
import axios from "axios";
import { BookList } from "../components/BookList";

export const Catalogue = ({choice}) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios.get("http://libris.kb.se/xsearch?query=W.V.+Quine&format=json")
        .then(response => setPosts(response.data.xsearch.list))
    }, []);

    return (
        <div>
            {posts !== null && <BookList data={posts} />}
            <h1>Catalogue</h1>
        </div>
    )
}