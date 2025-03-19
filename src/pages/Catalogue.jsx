import { useAtom } from "jotai";
import { collectionAtom } from "../atoms/collectionAtom";
import { BookList } from "../components/BookList";
import { AddRef } from "../components/AddRef";
import { ReactTable } from "../components/ReactTable";

export const Catalogue = () => {
    const [collection, setCollection] = useAtom(collectionAtom);

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
            {collection !== null && <ReactTable data={collection} />}
        </div>
    )
}