import {  MutableRefObject, useState } from 'react';
import { usePathProvider } from '../hooks/usePathFinding';
import { useSpeed } from '../hooks/useSpeed';
import { useTile } from '../hooks/useTile';
import { AlgorithmType, MazeType, PriorityQueueType, SpeedRate } from '../utils/types';
import Select from './Select';
import { ALGORITHM_TYPES, EXTENDED_SPEED, MAZE_TYPES, SPEED, SPEEDS } from '../utils/constants';
import { resetGrid } from '../utils/resetGrid';
import { runMazeAlgorithm } from '../utils/runMazeAlgorithm';
import PlayButton from './PlayButton';
import { PriorityQueue } from '../utils/HeapClass';
import { runPathFindingAlgorithm } from '../utils/runPathFindingAlgorithm';
import { setAnimatePath } from '../utils/setAnimatePath';
import { clearGrid } from '../utils/clearGrid';
const Nav = ({isVisualizationRunningRef} : {isVisualizationRunningRef:MutableRefObject<Boolean>}) => {
    // const {  } = useMode();
    const {speedRate ,setSpeedRate } = useSpeed();
    const {algorithm,setAlgorithm,maze,setMaze,grid,setGrid,isGraphVisualized,setIsGraphVisualized} = usePathProvider();
    const {startTile,endTile} = useTile();
    const [disabled,setDisabled] = useState(false);
    
    
    const handleMazeChange =(mazeType:MazeType) => {
        resetGrid({grid:grid,startTile:startTile,endTile:endTile})
        if(mazeType === 'NONE'){
            setMaze(mazeType)
            return;
        }
        setMaze(mazeType)
        runMazeAlgorithm({maze:mazeType,grid:grid,startTile:startTile,endTile:endTile,setIsDisabled:setDisabled,speed:speedRate})
        const newGrid = grid.slice()
        setGrid(newGrid)
        setIsGraphVisualized(false)

    }

    const handleRunVisualizer =  () => {
        if(isGraphVisualized){
            setIsGraphVisualized(false)
            clearGrid({grid:grid.slice(),startTile:startTile,endTile:endTile})
            isVisualizationRunningRef.current=false
            return 
        }
        //run the algorithm
        const {traversedTiles,path} = runPathFindingAlgorithm({grid,startTile,endTile,algorithm})!
        setDisabled(true)
        isVisualizationRunningRef.current=true
        setAnimatePath({grid,startTile,endTile,traversedTiles,path,speedRate})
        setTimeout(()=>{
            const newGrid = grid.slice()
            setGrid(newGrid)
            setIsGraphVisualized(true)
            setDisabled(false)
        },(SPEEDS.find(s=>s.value===speedRate)!.value * SPEED *traversedTiles.length) + SPEEDS.find(s=>s.value===speedRate)!.value * EXTENDED_SPEED *path.length)
 
    }


    const handleAlgorithmChange =(algoType:AlgorithmType) => {
        setAlgorithm(algoType)
    }

    const handleSpeedChange = (speed:SpeedRate)=>{
        setSpeedRate(speed)
        const heap = new PriorityQueue<string>('Max' as PriorityQueueType)
        heap.push({value:"low",priority:4})
        heap.push({value:"very low",priority:1})
        heap.push({value:"mid",priority:8})
        heap.push({value:"high",priority:9})
        heap.push({value:"very high",priority:7})
        heap.updatePriority("very high",15)
        heap.removeElement("very low")
        while (!heap.isEmpty() ) {
            console.log(heap.pop());
        }
    }

    return (
        <section className='  border-sky-800 border-b-4'>
            <div className='containerlg flex items-center justify-center gap-5 min-w-[764px] '>
                <h1 className='w-1/2 text-white lg:text-[20px] md:text-[18px] text-[16px] lg:leading-9 leading-6'> PathFinder App </h1>
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