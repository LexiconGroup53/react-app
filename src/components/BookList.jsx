import { Button } from "@mui/material"

export const BookList = ({data, refAction}) => {

   
   
    return (
        <div id="book-list">
            {data.map(item => {
                return (
                    <div key={item.identifier}>
                        <div>{item.publisher}</div>
                        <div>{item.title}</div>
                        <div>{item.creator}</div>
                        {refAction !== undefined && refAction.map(r => <Button variant="contained" color="success" onClick={() => r.action(item)}>{r.info}</Button>)}
                        
                    </div>
                )
            })}
        </div>
)
}