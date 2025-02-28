import { TableRow } from "./TableRow";

export const Table = ({data}) => {

    return (
        <table>
            <tbody>
                {data.map(item => <TableRow key={item.id} rowData={item}/>)}
                
            </tbody>
        </table>
    )
}