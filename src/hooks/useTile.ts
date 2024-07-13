import { useContext } from "react"
import { TileContext } from "../context/tileContext"

export const useTile = () =>{
    const context = useContext(TileContext)
    if(!context){   
        throw new Error('UseTile must be used within a TileProvider')
    }
    return context;
}

