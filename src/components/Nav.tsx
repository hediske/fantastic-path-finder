import { ChangeEvent, useState } from 'react';
import { usePathProvider } from '../hooks/usePathFinding';
import { useSpeed } from '../hooks/useSpeed';
import { useTile } from '../hooks/useTile';
import { MazeType } from '../utils/types';
import Select from './Select';
import { MAZE_TYPES } from '../utils/constants';
import { resetGrid } from '../utils/resetGrid';
import { runMazeAlgorithm } from '../utils/runMazeAlgorithm';
const Nav = () => {
    // const {  } = useMode();
    const {speedRate ,setSpeedRate } = useSpeed();
    const {algorithm,setAlgorithm,maze,setMaze,grid,setGrid,setIsGraphVisualized} = usePathProvider();
    const {startTile,setStartTile,endTile,setEndTile} = useTile();
    const [disabled,setDisabled] = useState(false);
    
    
    const handleMazeChange =(mazeType:MazeType) => {
        console.error(mazeType)
        if(mazeType === 'NONE'){
            setMaze(mazeType)
            resetGrid({grid:grid,startTile:startTile,endTile:endTile})
            return;
        }
        setMaze(mazeType)
        runMazeAlgorithm({maze:mazeType,grid:grid,startTile:startTile,endTile:endTile,setIsDisabled:setDisabled,speed:speedRate})
        const newGrid = grid.slice()
        setGrid(newGrid)
        setIsGraphVisualized(false)

    }
    return (
        <section className='  border-sky-800 border-b-4'>
            <div className='containerlg grid grid-cols:3  gap-5 min-w-[764px] '>
                <h1 className='cols-span-2 text-white lg:text-[20px] md:text-[18px] text-[16px] lg:leading-9 leading-6'> PathFinder App </h1>
                <div className='flex flex-start gap-5    lg:gap-8'>
                    <Select label='Maze Type' isDisabled={disabled} value={maze} onChange={(e)=>{handleMazeChange(e.target.value as MazeType)}} options={MAZE_TYPES} ></Select>
                    <Select label='Maze Type' isDisabled={disabled} value={maze} onChange={(e)=>{handleMazeChange(e.target.value as MazeType)}} options={MAZE_TYPES} ></Select>
                </div>
            </div>

        </section>
    )
}
export default Nav;