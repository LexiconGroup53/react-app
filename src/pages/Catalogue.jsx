//import { useAtom } from "jotai";
//import { collectionAtom } from "../atoms/collectionAtom";
import { BookList } from "../components/BookList";
import { AddRef } from "../components/AddRef";
import { ReactTable } from "../components/ReactTable";
import { useCollectionStore } from "../stores/collectionStore";
import { useGetAllReferences } from "../queries/refQueries";

export const Catalogue = () => {

    const refQuery = useGetAllReferences();

   // const [collection, setCollection] = useAtom(collectionAtom);
    const {collection, addRef} = useCollectionStore();
    const refAction = [
        {
/*             action: (item) => setCollection(collection.filter(ref =>
                ref.identifier !== item.identifier)),
            info: "remove" */
        }
    ]
    return (
        <div>
            
            <h1>Catalogue</h1>
            {/* <AddRef collection={collection} setCollection={setCollection}/> */}
            {refQuery.data !== undefined && <BookList data={refQuery.data} refAction={refAction}/>}
            {refQuery.data !== undefined && <ReactTable data={refQuery.data} />}
        </div>
    )
}