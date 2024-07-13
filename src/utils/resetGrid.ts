import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType } from "./types";

export const resetGrid = (
    {grid} : {
    grid:GridType ,
}) => {
    for (let row =0 ;row < MAX_ROWS ; row++) {
        for (let col =0 ; col<MAX_COLS;col++){
            const tile = grid[row][col]
            tile.distance=Infinity
            tile.parent=undefined
            tile.isTraversed=false
            tile.isPath=false
            tile.isWall = false
            // const tileSelected = document.getElementById(`${tile.row}-${tile.col}`)

            // if(tile.row === MAX_ROWS-1){
            //         tileSelected?.classList.add('border-b')
            // }
            // if(tile.col === 0){
            //         tileSelected?.classList.add('border-l')
            // }
            
            // if(!isEqual(tile,startTile!) && !isEqual(tile,endTile!)){
            //     console.log(`${tile.row}-${tile.col}`,tileSelected?.id)
            //     tileSelected!.className=TILE_STYLE
            //     tileSelected!.classList.add('no-selector')
            // }
            grid[row][col] = tile
        }

    }

};
