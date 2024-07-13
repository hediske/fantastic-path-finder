import { createContext,ReactNode, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { InitializeGrid } from "../utils/helpers";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utils/constants";


export interface PathFindingContextInterface {  
    algorithm : AlgorithmType;
    setAlgorithm : (algorithm: AlgorithmType) => void;
    maze : MazeType;
    setMaze : (maze: MazeType) => void;
    grid : GridType;
    setGrid : (grid: GridType) => void;
    isGraphVisualized : boolean;
    setIsGraphVisualized : (isGraphVisualized: boolean) => void;
}

export const PathFindingContext = createContext<PathFindingContextInterface|undefined>(undefined)

export const PathFindingProvider = ({ children }:{children :ReactNode}) => {
    const [algorithm,setAlgorithm] = useState<AlgorithmType>('DFS')
    const [maze,setMaze] = useState<MazeType>('NONE')
    const [grid,setGrid] = useState<GridType>(
        InitializeGrid(START_TILE_CONFIG,END_TILE_CONFIG))
    const [isGraphVisualized,setIsGraphVisualized] = useState<boolean>(false)
        return (
            <PathFindingContext.Provider value={{algorithm,setAlgorithm,maze,setMaze,grid,setGrid,isGraphVisualized,setIsGraphVisualized}}>
                {children}
            </PathFindingContext.Provider>
        )
}

