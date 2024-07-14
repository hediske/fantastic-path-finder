import { ChangeEvent, useState } from 'react';
import { usePathProvider } from '../hooks/usePathFinding';
import { useSpeed } from '../hooks/useSpeed';
import { useTile } from '../hooks/useTile';
import { AlgorithmType, MazeType, SpeedRate } from '../utils/types';
import Select from './Select';
import { ALGORITHM_TYPES, MAZE_TYPES, SPEEDS } from '../utils/constants';
import { resetGrid } from '../utils/resetGrid';
import { runMazeAlgorithm } from '../utils/runMazeAlgorithm';
import PlayButton from './PlayButton';
const Nav = () => {
    // const {  } = useMode();
    const {speedRate ,setSpeedRate } = useSpeed();
    const {algorithm,setAlgorithm,maze,setMaze,grid,setGrid,isGraphVisualized,setIsGraphVisualized} = usePathProvider();
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

    const handleRunVisualizer = () => {
        if(isGraphVisualized){
            setIsGraphVisualized(false)
            resetGrid({grid:grid.slice(),startTile:startTile,endTile:endTile})
        }
        //run the algorithm
    }


    const handleAlgorithmChange =(algoType:AlgorithmType) => {
        console.error(algoType)
        setAlgorithm(algoType)
    }

    const handleSpeedChange = (speed:SpeedRate)=>{
        console.error(speed)
        setSpeedRate(speed)
    }

    return (
        <section className='  border-sky-800 border-b-4'>
            <div className='containerlg flex items-center justify-center gap-5 min-w-[764px] '>
                <h1 className='w-[300px] text-white lg:text-[20px] md:text-[18px] text-[16px] lg:leading-9 leading-6'> PathFinder App </h1>
                <div className='flex flex-start gap-5  items-center   lg:gap-8'>
                    <Select label='Maze Type' isDisabled={disabled} value={maze} onChange={(e)=>{handleMazeChange(e.target.value as MazeType)}} options={MAZE_TYPES} ></Select>
                    <Select label='Algorithm' isDisabled={disabled} value={algorithm} onChange={(e)=>{handleAlgorithmChange(e.target.value as AlgorithmType)}} options={ALGORITHM_TYPES} ></Select>
                    <Select label='Speed' isDisabled={disabled} value={speedRate} onChange={(e)=>{handleSpeedChange(parseFloat(e.target.value) as SpeedRate)}} options={SPEEDS} ></Select>
                    <PlayButton isGraphVisualized={isGraphVisualized} handleRunVisualizer={handleRunVisualizer} isDisabled={disabled}></PlayButton>
                </div>
            </div>

        </section>
    )
}
export default Nav;