


import { runBinaryTreeAlgorithm } from '../lib/algorithms/maze/BinaryTree';
import { runRecursiveDivisionAlgorithm } from '../lib/algorithms/maze/RecursiveDivision';
import { SPEEDS } from './constants';
import { constructBorder } from './constractBorder';
import { SpeedRate, MazeType, GridType, TileType } from './types';


export  const runMazeAlgorithm = async (
    {
        maze,
        grid,
        startTile,
        endTile,
        setIsDisabled,
        speed
    }:{
        maze:MazeType,
        grid:GridType,
        startTile:TileType,
        endTile:TileType,
        setIsDisabled:(isDisabled:boolean) => void,
        speed:SpeedRate
    }) =>{
        setIsDisabled(true)
        switch(maze){
            case 'NONE':
                break;
            case 'BINARY_TREE':
                await runBinaryTreeAlgorithm({grid,startTile,endTile,setIsDisabled,speed})
                break;
            case 'RECURSIVE_DIVISION':
                await constructBorder({grid,startTile,endTile,speed})
                await runRecursiveDivisionAlgorithm({
                    grid,
                    startTile,
                    endTile,
                    speed,
                    height:Math.floor((grid.length-1)/2),
                    width:Math.floor((grid[0].length-1)/2),
                    row:1,
                    col:1
                })
                const currSpeed =SPEEDS.find(s => s.value===speed)!.value ?? 2
                setTimeout(() => {setIsDisabled(false)}, 800*currSpeed) 

                break;
        }
        
    }