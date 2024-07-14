import { GridType, TileType, SpeedRate } from '../../../utils/types';
import { runHorizontalCutAlgorithm } from './HorizontalCut';
import { runVerticalCutAlgorithm } from './VerticalCut';
export const  runRecursiveDivisionAlgorithm = async  ({
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
        if(height<=1 || width<=1) return;
        if(height>width){
            await runHorizontalCutAlgorithm({grid,startTile,endTile,speed,height,width,row,col})
        }
        else {
            await runVerticalCutAlgorithm({grid,startTile,endTile,speed,height,width,row,col})
            
        }
        
    }

