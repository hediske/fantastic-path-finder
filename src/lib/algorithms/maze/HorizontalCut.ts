import { isRowColEqual, randomNumber, sleep } from "../../../utils/helpers"
import { GridType, TileType, SpeedRate } from "../../../utils/types"
import { SPEEDS, TILE_WALL_STYLE } from "../../../utils/constants";
import { runRecursiveDivisionAlgorithm } from "./RecursiveDivision";

export const runHorizontalCutAlgorithm = async(
    {  
    grid,
    startTile,
    endTile,
    speed,
    height,
    width,
    row,
    col
    }:{
    grid:GridType,
    startTile:TileType,
    endTile:TileType,
    speed:SpeedRate,
    height:number,
    width:number,
    row:number,
    col:number
}) => {
    const delay = 10*SPEEDS.find(v=>v.value===speed)!.value-5
    const makeWallAt = row + randomNumber(0,height-1)*2 + 1
    const makePassageAt = col+ randomNumber(0,width)*2

    for (let i = 0; i < 2*width-1; i++) {
        if(makePassageAt !== col + i && !isRowColEqual(makeWallAt,col+i,endTile) && !isRowColEqual(makeWallAt,col+i,startTile) ){
            grid[makeWallAt][col+i].isWall = true
            document.getElementById(`${makeWallAt}-${col+i}`)!.className = `${TILE_WALL_STYLE} no-selector animate-wall`
            await sleep(delay)
        }
    }

    await runRecursiveDivisionAlgorithm({
        grid,
        startTile,
        endTile,
        speed,
        height:(makeWallAt - row + 1) / 2,
        width,
        row,
        col
    })
    await runRecursiveDivisionAlgorithm({
        grid,
        startTile,
        endTile,
        speed,
        height:height - (makeWallAt - row + 1) / 2,
        width,
        row:makeWallAt + 1,
        col
    }) 
}