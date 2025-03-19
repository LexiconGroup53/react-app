import { NavLink } from 'react-router';
import reactIcon from '../assets/react.svg';

export const NavBar = ({setTheme, theme}) => {
    return (
            <div className="site-navigation" >
                <ul>
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="catalogue">Catalogue</NavLink></li>
                    <li> <NavLink to="search">Search</NavLink></li>
                </ul>
                <button onClick={() => setTheme( theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'dark' : 'light'}</button>
                <img src="img/vite.svg" />
                <img src={reactIcon} />
            </div>
    )
}