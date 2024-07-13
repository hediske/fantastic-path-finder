import { useContext } from "react"
import { SpeedContext } from "../context/speedContext";

export const useSpeed = () =>{
    const context = useContext(SpeedContext)
    if(!context){   
        throw new Error('Speed must be used within a SpeedProvider')
    }
    return context;
}

