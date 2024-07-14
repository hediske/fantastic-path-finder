import { runDijkstraAlgorithm } from '../lib/algorithms/pathFinding/Dijkstra';
import { AlgorithmType, GridType, TileType, SpeedRate } from './types';
export const runPathFindingAlgorithm = async ({
    grid,
    startTile,
    endTile,
    speed,
    algorithm
    }:
    {
    grid:GridType,
    startTile:TileType,
    endTile:TileType,
    speed:SpeedRate,
    algorithm: AlgorithmType,
    }) =>{
        switch (algorithm) {
            case'DIJKSTRA': 
                await runDijkstraAlgorithm({grid,startTile,endTile,speed})
                break;
            case 'A_STAR':
                break;
            case 'BFS':
                break;
            case 'DFS':
                break;
            default:
                break;   
        }
    }

