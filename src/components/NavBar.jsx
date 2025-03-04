export const NavBar = ({setChoice}) => {
    return (
            <div className="site-navigation">
                <ul>
                    <li onClick={() => setChoice(1)}>Home</li>
                    <li onClick={() => setChoice(2)}>Catalogue</li>
                    <li onClick={() => setChoice(3)}>Search</li>
                </ul>
            </div>
    )
}