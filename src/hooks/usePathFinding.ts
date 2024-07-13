import { useContext } from "react";
import { PathFindingContext, PathFindingContextInterface } from "../context/pathFindingContext";
export const usePathProvider : () => PathFindingContextInterface = () => {
    const context = useContext(PathFindingContext)
    if(!context){
        throw new Error('usePathProvider must be used within a PathFindingProvider')
    }
    return context
}