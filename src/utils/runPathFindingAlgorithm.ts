import { runBFSAlgorithm } from '../lib/algorithms/pathFinding/BFS';
import { runDijkstraAlgorithm } from '../lib/algorithms/pathFinding/Dijkstra';
import { AlgorithmType, GridType, TileType, SpeedRate } from './types';
export const runPathFindingAlgorithm = ({
    grid,
    startTile,
    endTile,
    speedRate,
    algorithm
    }:
    {
    grid:GridType,
    startTile:TileType,
    endTile:TileType,
    speedRate:SpeedRate,
    algorithm: AlgorithmType,
    }) =>{
        switch (algorithm) {
            case'DIJKSTRA': 
                return runDijkstraAlgorithm({grid,startTile,endTile,speedRate})
            case 'A_STAR':
                break;
            case 'BFS':
                return runBFSAlgorithm({grid,startTile,endTile})
            case 'DFS':
                break;
            default:
                return runBFSAlgorithm({grid,startTile,endTile})

        }
    }

