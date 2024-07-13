import { useContext } from "react"
import { DarkModeContext } from "../context/darkModeContext";


export const useMode = () =>{
    const context = useContext(DarkModeContext)
    if(!context){   
        throw new Error('UseMode must be used within a ModeProvider')
    }
    return context;
}

