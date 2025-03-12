import { NavLink } from 'react-router';

export const NavBar = () => {
    return (
            <div className="site-navigation" >
                <ul>
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="catalogue">Catalogue</NavLink></li>
                    <li> <NavLink to="search">Search</NavLink></li>
                </ul>
            </div>
    )
}