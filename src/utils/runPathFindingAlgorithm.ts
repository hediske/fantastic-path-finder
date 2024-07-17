import { runAStarAlgorithm } from '../lib/algorithms/pathFinding/Astar';
import { runBFSAlgorithm } from '../lib/algorithms/pathFinding/BFS';
import { runDFSAlgorithm } from '../lib/algorithms/pathFinding/DFS';
import { runDijkstraAlgorithm } from '../lib/algorithms/pathFinding/Dijkstra';
import { AlgorithmType, GridType, TileType } from './types';
export const runPathFindingAlgorithm = ({
    grid,
    startTile,
    endTile,
    algorithm
    }:
    {
    grid:GridType,
    startTile:TileType,
    endTile:TileType,
    algorithm: AlgorithmType,
    }) =>{
        switch (algorithm) {
            case'DIJKSTRA': 
                return runDijkstraAlgorithm({grid,startTile,endTile})
                return null
            case 'A_STAR':
                return runAStarAlgorithm({grid,startTile,endTile})
                break;
            case 'BFS':
                return runBFSAlgorithm({grid,startTile,endTile})
            case 'DFS':
                return runDFSAlgorithm({grid,startTile,endTile})
                break;
            default:
                return runBFSAlgorithm({grid,startTile,endTile})

        }
    }

