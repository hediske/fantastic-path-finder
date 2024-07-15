

import { getUntraversedNeighbors } from '../../../utils/helpers';
import { isInQueue } from '../../../utils/isInQueue';
import { GridType, TileType, SpeedRate } from '../../../utils/types';

export const runBFSAlgorithm = ({
    grid,
    startTile,
    endTile,
}:{
    grid:GridType,
    startTile:TileType,
    endTile:TileType,
})=>{
    const base :TileType= grid[startTile.row][startTile.col]
    base.distance = 0
    base.isTraversed = true
    const traversedTiles = []
    const UntraversedTiles : TileType[] = [base]
    while(UntraversedTiles.length){
        const tile = UntraversedTiles.shift()!;
        if(tile.isWall) continue
        if(tile.distance === Infinity ) continue

        tile.isTraversed = true 
        traversedTiles.push(tile)

        const untraversedNeighbors = getUntraversedNeighbors(tile,grid)
        for (let neighbour of untraversedNeighbors){
            if(!isInQueue(neighbour,UntraversedTiles)) {
                neighbour.parent = tile
                neighbour.distance = tile.distance + 1
                UntraversedTiles.push(neighbour)
            }
            
        }



    }
    const path = []

    let tile = grid[endTile.row][endTile.col]!

    while(tile){
        tile.isPath = true
        path.unshift(tile)
        tile = tile.parent!

    }
    return { traversedTiles,path  }

}