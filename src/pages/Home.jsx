import { Drag } from "../components/Drag"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const Home = () => {
    const theme = useContext(ThemeContext);


    return (
        <>
            <h1 className={theme === 'light' ? "lightList" : "darkList"}>Welcome to the reference app</h1>
            <Drag />
        </> 
    )
}