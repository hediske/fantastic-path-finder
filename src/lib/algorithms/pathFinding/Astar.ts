import { PriorityQueue } from '../../../utils/HeapClass';
import { getCoordinates, getTileFromCoordinates, isEqual, getUntraversedNeighbors } from '../../../utils/helpers';
import { initHeuristicCosts } from '../../../utils/heuristics';
import { GridType, TileType, Coordinates, PriorityQueueValue } from '../../../utils/types';

interface AStarCostInterface {
    distance: number,
    fonctionCost:number
}

export const runAStarAlgorithm = ({
    grid,
    startTile,
    endTile,
    
}:{
    grid:GridType,
    startTile:TileType,
    endTile:TileType,
    
})=>{

    const traversedTiles : TileType[] = [];
    const heuristicCost = initHeuristicCosts({grid, endTile});
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;
    const comparator = (a:PriorityQueueValue<Coordinates,AStarCostInterface>,b : PriorityQueueValue<Coordinates,AStarCostInterface>) => {
        if(a.priority.fonctionCost! === b.priority.fonctionCost!){
            return a.priority.distance! < b.priority.distance!
        }   
        return a.priority.fonctionCost!>b.priority.fonctionCost!
    }
    const untraversedTiles : PriorityQueue<Coordinates,AStarCostInterface>= new PriorityQueue(undefined,comparator);
    untraversedTiles.push({
        value: getCoordinates(base),
        priority: {
            distance: base.distance,
            fonctionCost: base.distance + heuristicCost[base.row][base.col],
        }
    })
    while(!untraversedTiles.isEmpty()){
        const coords = untraversedTiles.pop()
        if(coords){

            const currentTile = getTileFromCoordinates(coords.value , grid);
            console.log(currentTile)
            if(currentTile.isWall) continue
            if(currentTile.distance === Infinity) break
            currentTile.isTraversed = true
            traversedTiles.push(currentTile)
            if(isEqual(currentTile,endTile)) break

            const neighbors = getUntraversedNeighbors(currentTile,grid)
            neighbors.filter(neighbor => neighbor.isWall === false)
            for (let i =0 ; i < neighbors.length; i++) {
                const distanceToNeighbor = currentTile.distance + 1
                if(distanceToNeighbor< neighbors[i].distance){
                    const coordinates = getCoordinates(neighbors[i])
                    const newDistance = distanceToNeighbor
                    const newFunctionCost = newDistance + heuristicCost[neighbors[i].row][neighbors[i].col]
                    const newPriority = {
                        distance: newDistance,
                        fonctionCost: newFunctionCost
                    }
                    neighbors[i].distance = newDistance
                    neighbors[i].parent = currentTile
                    if(!untraversedTiles.contains(coordinates)){
                        untraversedTiles.push({
                            value: coordinates,
                            priority: newPriority
                        })
                    }else{
                        untraversedTiles.updatePriority(coordinates,newPriority)
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
    return {path,traversedTiles}
    

}