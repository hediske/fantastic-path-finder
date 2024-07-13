import { MutableRefObject, useState } from "react"
import { usePathProvider } from "../hooks/usePathFinding"
import { MAX_COLS, MAX_ROWS } from "../utils/constants"
import Tile from "./Tile"
import { checkIfStartOrEnd, createAndUpdateGrid } from "../utils/helpers"

const Grid = ({isVisualizationRunningRef} : {isVisualizationRunningRef:MutableRefObject<Boolean>}) => {

    const {grid,setGrid} = usePathProvider()
    
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [wallType,setWalllType] =  useState<boolean|null>(null)
    const onMouseDown =(row:number,col:number) => {
        if(isVisualizationRunningRef.current || checkIfStartOrEnd(row,col))
            return;
        setIsMouseDown(true)
        setWalllType(!grid[row][col].isWall)
        const newGrid = createAndUpdateGrid(grid,row,col,wallType!)
        setGrid(newGrid)
    }

    const onMouseEnter =(row:number,col:number) => {
        if(isVisualizationRunningRef.current || checkIfStartOrEnd(row,col))
            return;
        if(!isMouseDown) 
            return;
        const newGrid = createAndUpdateGrid(grid,row,col,wallType!)
        setGrid(newGrid)
    }

    const onMouseUp =() => {
        if(isVisualizationRunningRef.current){
            return;
        }
        setIsMouseDown(false)
    }

    return (
        <section>
            <div className="container mt-6 lg:mt-10">
                <div className= {`flex items-center flex-col justify-center  
                    lg:h-min-[${MAX_ROWS*17}px] md:h-min-[${MAX_ROWS*15}px]  xs:h-min-[${MAX_ROWS*9}px] h-min-[${MAX_COLS*7}px]
                    lg:w-[${MAX_COLS*17}px] md:w-[${MAX_COLS*15}px]  xs:w-[${MAX_COLS*9}px] w-[${MAX_COLS*7}px]
                `}>
                    
                    {grid.map((row,rowIndex) =>(
                        <div className="flex" key={rowIndex}>
                            {row.map((col,colIndex) =>{
                                const {isWall,isStart,isEnd,isTraversed,isPath} = col;
                                return (
                                    <Tile key={colIndex} row={rowIndex} col={colIndex} isWall={isWall} isStart={isStart} isEnd={isEnd} isTraversed={isTraversed} isPath={isPath} onMouseUp={onMouseUp} onMouseDown={onMouseDown} onMouseEnter={onMouseEnter}></Tile>
                                )
                            })}

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Grid