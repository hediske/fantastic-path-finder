import { MAX_ROWS } from './constants';
import { GridType, TileType } from './types';

export const InitializeGrid = (start:TileType , end:TileType): GridType => {
    const grid:GridType = []
    for(let row =0 ; row<MAX_ROWS ; row++){
        grid.push(createRow(row,start,end))
    }
    return grid
}
function createRow(row: number, start: TileType, end: TileType): TileType[] {
    const col : TileType[] = []
    for(let item =0 ; item<MAX_ROWS ; item++){
        col.push(createTile(row,item,start,end))
    }
    return col
}

function createTile(row: number, col: number, start: TileType, end: TileType): TileType {
    return {
        row:row,
        col:col,
        isWall:false,
        isStart:row===start.row && col===start.col,
        isEnd:row===end.row && col===end.col,
        isPath:false,
        distance:Infinity,
        isTraversed:false,
        parent : undefined
    }
}

