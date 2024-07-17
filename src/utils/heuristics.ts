import { GridType, TileType } from "./types"
import { MAX_COLS, MAX_ROWS } from './constants';

const getManhattanDistance = (tile:TileType,endTile:TileType) =>{
    const ManhattanDistance = 1;
    const row = Math.abs(tile.row - endTile.row)
    const col = Math.abs(tile.col - endTile.col)
    return ManhattanDistance * (row + col)
}
export const initHeuristicCosts = ({grid,endTile} : {grid: GridType,endTile:TileType}) =>{
    const heuristicCost =[]
    for (let i = 0; i < MAX_ROWS; i++) {
        const row = []
        for (let j = 0 ; j < MAX_COLS; j++) {
            row.push(getManhattanDistance(grid[i][j],endTile))
        }
        heuristicCost.push(row)
    }
    return heuristicCost
}
