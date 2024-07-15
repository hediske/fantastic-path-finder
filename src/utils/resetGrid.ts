import { MAX_COLS, MAX_ROWS, TILE_STYLE } from "./constants";
import { isEqual } from "./helpers";
import { GridType, TileType } from "./types";

export const resetGrid = (
    {grid,startTile,endTile} : {
    grid:GridType ,
    startTile:TileType,
    endTile:TileType
}) => {
    for (let row =0 ;row < MAX_ROWS ; row++) {
        for (let col =0 ; col<MAX_COLS;col++){
            const tile = grid[row][col]
            tile.distance=Infinity
            tile.parent=undefined
            tile.isTraversed=false
            tile.isPath=false
            tile.isWall = false
            const tileSelected = document.getElementById(`${tile.row}-${tile.col}`)


            if(!isEqual(tile,startTile!) && !isEqual(tile,endTile!)){
                tileSelected!.className=TILE_STYLE
                tileSelected!.classList.add('no-selector')
            }
            if(tile.row === MAX_ROWS-1){
                tileSelected?.classList.add('border-b')
        }
            if(tile.col === 0){
                    tileSelected?.classList.add('border-l')
            }
        
            grid[row][col] = tile
        }

    }

};
