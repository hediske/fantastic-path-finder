import { MAX_COLS, MAX_ROWS, TILE_WALL_STYLE } from "./constants"
import { isRowColEqual, sleep } from './helpers';
import { GridType, SpeedRate, TileType } from "./types"

export const constructBorder = async ({
    grid,
    startTile,
    endTile,
    speed
}:{
    grid:GridType,
    startTile:TileType, 
    endTile:TileType,
    speed:SpeedRate
}) => {
    const dir = [
        {row:1,col:0},
        {row:0,col:1},
        {row:-1,col:0},
        {row:0,col:-1}]

    let row = 0
    let col = 0
    
    for(let i =0;i<4;i++){
        const direction = dir[i]
        while(row+direction.row >=0 && row+direction.row <MAX_ROWS && col+direction.col>=0 && col+direction.col<MAX_COLS){
            row=row+direction.row
            col=col+direction.col

            if(!isRowColEqual(row,col,endTile) && !isRowColEqual(row,col,startTile)){
            {
                const tile = document.getElementById(`${row}-${col}`)!
                tile.className = `${TILE_WALL_STYLE} animate-wall no-selector`
                if(row===MAX_ROWS-1){
                    tile.classList.add('border-b')
                }
                if(col===0){
                    tile.classList.add('border-l')
                }
                grid[row][col].isWall = true
                await sleep(speed*6)
            }
        }
    }

    }
}