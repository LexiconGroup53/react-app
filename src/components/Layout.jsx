import { Outlet } from "react-router"
import { NavBar } from './NavBar';
import { ThemeContext } from '../contexts/ThemeContext';
import { useState } from "react";


export const Layout = () => {

    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <NavBar setTheme={setTheme} theme={theme}/>
                <Outlet />
            </div>
        </ThemeContext.Provider>
    )
}