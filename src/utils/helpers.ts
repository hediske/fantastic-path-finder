import { END_TILE_CONFIG, MAX_COLS, MAX_ROWS, START_TILE_CONFIG } from './constants';
import { Coordinates, GridType, TileType } from './types';

export const InitializeGrid = (start:TileType , end:TileType): GridType => {
    const grid:GridType = []
    for(let row =0 ; row<MAX_ROWS ; row++){
        grid.push(createRow(row,start,end))
    }
    return grid
}
function createRow(row: number, start: TileType, end: TileType): TileType[] {
    const col : TileType[] = []
    for(let item =0 ; item<MAX_COLS ; item++){
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

export const checkIfStartOrEnd = (row :  number,col: number) => {
    return checkIsEnd(row,col) || checkIsStart(row,col)
}

export const checkIsStart = (row :  number,col: number) => {
    return row === START_TILE_CONFIG.row && col === START_TILE_CONFIG.col
}
export const checkIsEnd = (row :  number,col: number) => {
    return row === END_TILE_CONFIG.row && col === END_TILE_CONFIG.col
}

export const createAndUpdateGrid = (grid: GridType , row:number, col:number,isWall : boolean)=>{
    if(grid[row][col].isWall===isWall)
        return grid;
    const newGrid = grid.slice()
    const newTile = {...newGrid[row][col], isWall:isWall}
    newGrid[row][col] = newTile
    return newGrid
}
export const isEqual = (t1:TileType,t2:TileType) =>{
    return (t1.row===t2.row && t1.col===t2.col)
}
export const isRowColEqual = (row:number,col:number,t1:TileType) =>{
    return (row===t1.row && col===t1.col)
}

export const sleep = async (ms:number) =>{
    return new Promise(resolver => setTimeout(resolver,ms))
}

export const randomNumber =(start :  number , end: number)=>{
    start =  Math.ceil(start)
    end =  Math.floor(end)
    if(start>=end)
        return -1
    return Math.floor(Math.random()*(end-start)+start
)
}

export const updateTilesWallStatus = async (grid:GridType) => {
    setTimeout(()=>{for(let row of grid){
        for( let tile of row){
            if(document.getElementById(`${tile.row}-${tile.col}`)?.className.includes("bg-wallColor")){
                tile.isWall = true
            }
        }
    }},grid.length*grid[0].length)
}

export const getAvailableNeighbors = (tile:TileType,grid:GridType) => {
    const neighbors : TileType[] = []
    const {row,col} = tile
    if(row>0)
        neighbors.push(grid[row-1][col])
    if(row<MAX_ROWS-1)
        neighbors.push(grid[row+1][col])
    if(col>0)
        neighbors.push(grid[row][col-1])
    if(col<MAX_COLS-1)
        neighbors.push(grid[row][col+1])

    return neighbors.filter(tile => !tile.isWall)
}
export const getUntraversedNeighbors = (tile:TileType,grid:GridType) => {
    const neighbors : TileType[] = []
    const {row,col} = tile
    if(row>0)
        neighbors.push(grid[row-1][col])
    if(row<MAX_ROWS-1)
        neighbors.push(grid[row+1][col])
    if(col>0)
        neighbors.push(grid[row][col-1])
    if(col<MAX_COLS-1)
        neighbors.push(grid[row][col+1])

    return neighbors.filter(tile => !tile.isTraversed)
}

export const getCoordinates : (tile:TileType)=>Coordinates = (tile:TileType) =>{
    return {row:tile.row,col:tile.col}
}
export const getTileFromCoordinates = (coords:Coordinates,grid:GridType) =>{
    return grid[coords.row][coords.col]!
}
