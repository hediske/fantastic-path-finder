


import { runBinaryTreeAlgorithm } from '../lib/algorithms/maze/BinaryTree';
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
                // await runRecursiveDivisionAlgorithm({grid,startTile,endTile,setIsDisabled,speed})
                break;
        }
    }