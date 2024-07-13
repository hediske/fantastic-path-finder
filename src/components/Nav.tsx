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
    const {algorithm,setAlgorithm,maze,setMaze,grid,setGrid} = usePathProvider();
    const {startTile,setStartTile,endTile,setEndTile} = useTile();
    const [disabled,setDisabled] = useState(false);
    
    
    const handleMazeChange =(mazeType:MazeType) => {
        if(mazeType === 'NONE'){
            setMaze(mazeType)
            resetGrid({grid:grid})
            return;
        }
        setMaze(mazeType)
        runMazeAlgorithm({maze:maze,grid:grid,startTile:startTile,endTile:endTile,setIsDisabled:setDisabled,speed:speedRate})
        //TODO: add algo implementation


    }
    return (
        <section className='  border-sky-800 border-b-4'>
            <div className='containerlg flex flex-row items-center  gap-5 min-w-[764px] '>
                <h1 className='text-headingColor lg:text-[20px] md:text-[18px] text-[16px] lg:leading-9 leading-6'> PathFinder App </h1>
                <div>
                <Select label='Maze Type' isDisabled={disabled} value={maze} onChange={(e)=>{handleMazeChange(e.target.value as MazeType)}} options={MAZE_TYPES} ></Select>
                </div>
            </div>

        </section>
    )
}
export default Nav;