import { MinQueue } from 'heapify';
import { SPEEDS } from '../../../utils/constants';
import { getAvailableNeighbors, isEqual } from '../../../utils/helpers';
import { GridType, TileType, SpeedRate } from '../../../utils/types';

export const runDijkstraAlgorithm =async({
        grid,
        startTile,
        endTile,
        speed
    }:{
        grid:GridType,
        startTile:TileType,
        endTile:TileType,
        speed:SpeedRate,
    })=>{
        const delay:number = 10*SPEEDS.find(s=>s.value===speed)!.value-5
        const pivot :TileType= grid[startTile.row][startTile.col]
        pivot.distance = 0

        const waitList = new MinQueue()

        waitList.push()
        
        while (!isEqual(pivot,endTile)) {
            const neightbors = getAvailableNeighbors(pivot,grid)
            for (let neighbor of neightbors) {
                const {row,col} = neighbor
                if(grid[row][col].isTraversed) continue
                if(grid[row][col].distance < pivot.distance+1) continue
                grid[row][col].distance = pivot.distance+1
                grid[row][col].parent = pivot
                waitList.push(grid[row][col])
            }
            grid[pivot.row][pivot.col].isTraversed = true
            grid[pivot.row][pivot.col].isPath = true
            // waitList.splice(waitList.indexOf(pivot),1)
            // pivot = waitList[0]
            // await sleep(delay)

        }

    

}