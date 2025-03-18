import { NavLink } from 'react-router';

export const NavBar = ({setTheme, theme}) => {
    return (
            <div className="site-navigation" >
                <ul>
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="catalogue">Catalogue</NavLink></li>
                    <li> <NavLink to="search">Search</NavLink></li>
                </ul>
                <button onClick={() => setTheme( theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'dark' : 'light'}</button>
            </div>
    )
}