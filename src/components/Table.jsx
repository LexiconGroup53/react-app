import { TableRow } from "./TableRow";

export const Table = ({data, addToCart}) => {

    return (
        <table>
            <tbody>
                {data.map(item => <TableRow key={item.id} rowData={item} addToCart={addToCart}/>)}
                
            </tbody>
        </table>
    )
}