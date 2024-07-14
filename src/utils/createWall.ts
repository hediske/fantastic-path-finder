import { MAX_ROWS, SPEEDS, MAX_COLS, TILE_WALL_STYLE } from './constants';
import { isRowColEqual } from './helpers';
import { SpeedRate, TileType } from "./types";

export const createWall = (
    startTile: TileType,
    endTile: TileType,
    speed : SpeedRate
)=>{
    const p= 4
    const b= 1
    const delay = p* SPEEDS.find(s => s.value === speed)!.value - b
    for(let row=0 ; row<MAX_ROWS ; row++){
        setTimeout( () => 
            {
            for(let col=0; col< MAX_COLS ; col++){
                if(row % 2 === 0 || col % 2 === 0){
                    if(!isRowColEqual(row,col,endTile) && !isRowColEqual(row,col,startTile))
                    {
                        setTimeout(() => {
                            const tile = document.getElementById(`${row}-${col}`)
                            tile!.className=`${TILE_WALL_STYLE} no-selector animate-wall`
                        },delay*col)
                    }
                }   
            }
        }
        ,delay * row *( MAX_ROWS / 2)
        )

    }

 }