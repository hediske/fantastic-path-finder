import { SPEEDS } from '../../../utils/constants';
import {  getUntraversedNeighbors, isEqual } from '../../../utils/helpers';
import { GridType, TileType, SpeedRate } from '../../../utils/types';
import { PriorityQueue } from '../../../utils/HeapClass';

export const runDijkstraAlgorithm =async({
        grid,
        startTile,
        endTile,
        speedRate
    }:{
        grid:GridType,
        startTile:TileType,
        endTile:TileType,
        speedRate:SpeedRate,
    })=>{
        const delay:number = 10*SPEEDS.find(s=>s.value===speedRate)!.value-5
        const base :TileType= grid[startTile.row][startTile.col]
        base.distance = 0
        base.isTraversed = true
        const waitList = new PriorityQueue<TileType>('Min')
        waitList.push({value:pivot,priority:0})
        while (!isEqual(pivot,endTile)) {
            const neightbors = getUntraversedNeighbors(pivot,grid)
            for (let neighbor of neightbors) {
                const {row,col} = neighbor
                if(grid[row][col].distance < pivot.distance+1) {
                    grid[row][col].distance += 1
                    continue
                }
                grid[row][col].distance = pivot.distance+1
                grid[row][col].parent = pivot
                if(waitList.contains(grid[row][col])) {}else{}
            }
            grid[pivot.row][pivot.col].isTraversed = true
            grid[pivot.row][pivot.col].isPath = true
            // waitList.splice(waitList.indexOf(pivot),1)
            // pivot = waitList[0]
            // await sleep(delay)

        }

    

}