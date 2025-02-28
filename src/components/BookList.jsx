export const BookList = ({data}) => {

   
    return (
        <div id="book-list">
            {data.map(item => {
                return (
                    <div key={item.identifier}>
                        <div>{item.publisher}</div>
                        <div>{item.title}</div>
                        <div>{item.creator}</div>
                    </div>
                )
            })}
        </div>
)
}