import { SPEEDS, TILE_STYLE } from "./constants";
import { sleep } from "./helpers";
import { GridType, SpeedRate } from "./types";

export const destroyWall =async (
    grid:GridType,
    row:number,
    col:number,
    directionRight : number ,// 0 means remove the upper wall / 1 means remove the right  wall 
    speed:SpeedRate
) =>{
    const p = 15
    const d = 5
    const delay = p * SPEEDS.find(s => s.value===speed)!.value - d
    if(directionRight === 1 && grid[row][col+1]){
         await removeWall(row,col+1,delay)
    }
    else if(directionRight ===0 && grid[row+1][col]){
       await  removeWall(row+1,col,delay)
    }else{
       await  removeWall(row,col,delay)
    }
}

const removeWall = async(row :number , col :number,delay:number )=>{
    document.getElementById(`${row}-${col}`)!.className =`${TILE_STYLE} "no-selector"`
    await sleep(delay)
    
}   