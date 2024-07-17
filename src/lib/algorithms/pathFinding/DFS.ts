import { getUntraversedNeighbors, isEqual } from '../../../utils/helpers';
import { isInQueue } from '../../../utils/isInQueue';
import { GridType, TileType } from '../../../utils/types';

export const runDFSAlgorithm = ({
    grid,
    startTile,
    endTile,
}:{
    grid:GridType,
    startTile:TileType,
    endTile:TileType,
})=>{

    const traversedTiles =[]
    const base = grid[startTile.row][startTile.col]
    base.distance = 0
    base.isTraversed=true
    const untraversedTiles = [base]
    while(untraversedTiles.length){
        const currentTile = untraversedTiles.pop()!
        if(currentTile.isWall) continue
        if(currentTile.distance === Infinity) break

        currentTile.isTraversed = true
        traversedTiles.push(currentTile)
        if(isEqual(currentTile,endTile)) break

        const untraversedNeighbors = getUntraversedNeighbors(currentTile,grid)
        for (let neighbor of untraversedNeighbors) {
            if(!isInQueue(neighbor,untraversedTiles)) {
                neighbor.parent = currentTile
                neighbor.distance = currentTile.distance + 1
                untraversedTiles.push(neighbor)
             }
        }


    }

    const path =[]
    let tile = grid[endTile.row][endTile.col]!
    while(tile){
        tile.isPath = true
        path.unshift(tile)
        tile = tile.parent!
    }

    return {
        traversedTiles,
        path}

}