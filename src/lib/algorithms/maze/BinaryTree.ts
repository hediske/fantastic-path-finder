import { MAX_COLS, MAX_ROWS } from '../../../utils/constants';
import { createWall } from '../../../utils/createWall';
import { destroyWall } from '../../../utils/destoryWall';
import { randomNumber, sleep, updateTilesWallStatus } from '../../../utils/helpers';
import { GridType, TileType, SpeedRate } from '../../../utils/types';
export const runBinaryTreeAlgorithm = async  (
    {
        grid,
        startTile,
        endTile,
        setIsDisabled,
        speed
    }:{
        grid:GridType,
        startTile:TileType,
        endTile:TileType,
        setIsDisabled:(isDisabled:boolean) => void,
        speed:SpeedRate
    }
)=>{
    createWall(startTile,endTile,speed)
    await sleep(MAX_COLS*MAX_ROWS*speed)
    for( let row =1 ; row<MAX_ROWS ; row+=2){
        for(let col =1 ; col<MAX_COLS ; col +=2){
            if(row === MAX_ROWS-2 && col === MAX_COLS-2){
                continue
            }else if(row === MAX_ROWS-2){//last row
                await destroyWall(grid,row,col,1,speed)
            }
            else if(col === MAX_COLS-2){
                await destroyWall(grid,row,col,0,speed)
            }
            else {
                await destroyWall(grid,row,col,randomNumber(0,2),speed)
            }
        }
    }
    await updateTilesWallStatus(grid)
    setIsDisabled(false)
}

