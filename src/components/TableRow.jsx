
export const TableRow = ({ rowData, addToCart }) => {
    return (
        <tr>
            <td>{rowData.name}</td>
            <td>{rowData.age}</td>
            <td>{() => addToCart(rowData.id)}</td>
        </tr>
    )
}