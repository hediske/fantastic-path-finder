import { SPEEDS, TILE_WALL_STYLE } from "../../../utils/constants"
import { isRowColEqual, randomNumber, sleep } from "../../../utils/helpers"
import { GridType, TileType, SpeedRate } from "../../../utils/types"
import { runRecursiveDivisionAlgorithm } from "./RecursiveDivision"

export const runVerticalCutAlgorithm = async(
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
    const makeWallAt = col + randomNumber(0,width-1)*2 + 1
    const makePassageAt = row+ randomNumber(0,height)*2

    for (let i = 0; i < 2*height-1; i++) {
        if(makePassageAt !== row + i && !isRowColEqual(row+i,makeWallAt,endTile) && !isRowColEqual(row+i,makeWallAt,startTile) ){
            grid[row+i][makeWallAt].isWall = true
            document.getElementById(`${row+i}-${makeWallAt}`)!.className = `${TILE_WALL_STYLE} no-selector animate-wall`
            await sleep(delay)
        }
    }

    await runRecursiveDivisionAlgorithm({
        grid,
        startTile,
        endTile,
        speed,
        height,
        width:(makeWallAt - col + 1) / 2,
        row,
        col
    })
    await runRecursiveDivisionAlgorithm({
        grid,
        startTile,
        endTile,
        speed,
        height,
        width:width- (makeWallAt - col + 1) / 2,
        row,
        col:makeWallAt + 1
    }) }