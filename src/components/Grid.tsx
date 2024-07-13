import { usePathProvider } from "../hooks/usePathFinding"
import { MAX_COLS, MAX_ROWS } from "../utils/constants"
import Tile from "./Tile"

const Grid = () => {

    const {grid} = usePathProvider()
    return (
        <section>
            <div className="container">
                <div className= {`flex items-center flex-col justify-center  
                    lg:h-min-[${MAX_ROWS*17}px] md:h-min-[${MAX_ROWS*15}px]  xs:h-min-[${MAX_ROWS*9}px] h-min-[${MAX_COLS*7}px]
                    lg:w-[${MAX_COLS*17}px] md:w-[${MAX_COLS*15}px]  xs:w-[${MAX_COLS*9}px] w-[${MAX_COLS*7}px]
                `}>
                    
                    {grid.map((row,rowIndex) =>(
                        <div className="flex" key={rowIndex}>
                            {row.map((col,colIndex) =>{
                                const {isWall,isStart,isEnd,isTraversed,isPath} = col;
                                return (
                                    <Tile key={colIndex} row={rowIndex} col={colIndex} isWall={isWall} isStart={isStart} isEnd={isEnd} isTraversed={isTraversed} isPath={isPath}></Tile>
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