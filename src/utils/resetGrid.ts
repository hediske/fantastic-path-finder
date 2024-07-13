import { MAX_COLS, MAX_ROWS } from "./constants";
import { isEqual } from "./helpers";
import { GridType, TileType } from "./types";

export const resetGrid = (
    {grid  ,
    startTile,
    endTile} : {
    grid:GridType ,
    startTile?:TileType,
    endTile?:TileType
}) => {
    for (let row =0 ;row < MAX_ROWS ; row++) {
        for (let col =0 ; col<MAX_COLS;col++){
            const tile = grid[row][col]
            tile.distance=Infinity
            tile.parent=undefined
            tile.isEnd=false
            tile.isPath=false
            tile.isWall = false
            if(!isEqual(tile,startTile!) && !isEqual(tile,endTile!)){
                const tileSelected = document.getElementById(`${tile.row}-${tile.col}`)
                if(tileSelected)
                    tileSelected.className='TILE_STYLE'
                if(tile.row === MAX_ROWS-1){
                    tileSelected?.classList.add('border-b')
                }
                if(tile.col === 0){
                    tileSelected?.classList.add('border-l')
                }

            }
        }

    }
};
