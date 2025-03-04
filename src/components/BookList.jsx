export const BookList = ({data, refAction}) => {

   
    return (
        <div id="book-list">
            {data.map(item => {
                return (
                    <div key={item.identifier}>
                        <div>{item.publisher}</div>
                        <div>{item.title}</div>
                        <div>{item.creator}</div>
                        <button onClick={() => refAction(item)}>Add</button>
                    </div>
                )
            })}
        </div>
)
}