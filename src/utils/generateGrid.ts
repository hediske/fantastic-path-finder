import { resetGrid } from "./resetGrid";
import { GridType, MazeType, TileType } from "./types";

export const updateGridLayout = ({grid , startTile,endTile, mazeType} : {
    grid:GridType,
    startTile:TileType,
    endTile:TileType,
    mazeType:MazeType
})  => {
    switch(mazeType){
        case 'NONE':
            resetGrid({grid,startTile,endTile});
            break;
        case "BINARY_TREE":
            break;
        case "RECURSIVE_DIVISION":
            break;
    }
    
}