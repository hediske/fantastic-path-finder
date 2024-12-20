import { getCoordinates, getTileFromCoordinates, getUntraversedNeighbors, isEqual } from '../../../utils/helpers';
import { GridType, TileType, Coordinates } from '../../../utils/types';
import { PriorityQueue } from '../../../utils/HeapClass';

export const runDijkstraAlgorithm = ({
        grid,
        startTile,
        endTile,
    }:{
        grid:GridType,
        startTile:TileType,
        endTile:TileType,
    })=>{
    
    const traversedTiles = []
    const base = grid[startTile.row][startTile.col]
    base.distance = 0
    base.isTraversed = true
    const waitlist  :PriorityQueue<Coordinates,number> = new PriorityQueue('Min')
    waitlist.push({value:getCoordinates(base),priority:0})
    
    console.time("executionTime");
    while(!waitlist.isEmpty()){
        const coords = waitlist.pop()
        if(coords !== undefined){          
            const currentTile = getTileFromCoordinates(coords.value,grid)
            if(currentTile.isWall) continue
            if(currentTile.distance === Infinity) break
            currentTile.isTraversed = true
            traversedTiles.push(currentTile)
            if(isEqual(currentTile,endTile)) break
            const untraversedNeighbors = getUntraversedNeighbors(currentTile,grid)
            untraversedNeighbors.filter(neighbor => neighbor.isWall === false)
            for (let i =0 ; i < untraversedNeighbors.length; i++) {
                if(currentTile.distance + 1 < untraversedNeighbors[i].distance){
                    untraversedNeighbors[i].distance = currentTile.distance + 1
                    untraversedNeighbors[i].parent = currentTile
                    const coordsNeighbor = getCoordinates(untraversedNeighbors[i])
                    const distanceNeighbor = untraversedNeighbors[i].distance
                    if(!waitlist.contains(coordsNeighbor)) 
                        waitlist.push({value:coordsNeighbor,priority:distanceNeighbor})
                    else{
                        waitlist.updatePriority(getCoordinates(untraversedNeighbors[i]),untraversedNeighbors[i].distance)  
                    }
                }
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
    console.timeEnd("executionTime");
    return {path,traversedTiles}
    
}

    

