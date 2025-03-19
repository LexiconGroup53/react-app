import { useState } from "react";
import {getCoreRowModel, useReactTable, flexRender} from "@tanstack/react-table";
import { useAtom } from "jotai";
import { collectionAtom } from "../atoms/collectionAtom";

export const ReactTable = () => {
    const [collection, setCollection] = useAtom(collectionAtom);
    const [data, setData] = [collection, setCollection];
    const columns = [
        {
            accessorKey: "publisher",
            header: "Publisher",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: "title",
            header: "Title",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: "creator",
            header: "Author",
            cell: (props) => <p>{props.getValue()}</p>
        },
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
});

    

    return (
        <table>
            <thead>
            {table.getHeaderGroups().map(headerGroup =>
                <tr key={headerGroup.id}>
               {headerGroup.headers.map(header =>
                        <th key={header.id}>
                            {header.column.columnDef.header}
                        </th>
                    )}
                </tr>
            )}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => 
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell =>
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        )}
                    </tr>
                )}
            </tbody>
        
        </table>
    )
}