export const MAX_ROWS = 39
export const MAX_COLS = 49
export const START_TILE_CONFIG ={
    row:1,
    col:1,
    isWall:false,
    isEnd:false,
    isPath:false,
    isStart:false,
    distance:0,
    isTraversed:false,
    parent : undefined
}
export const END_TILE_CONFIG ={
    row : MAX_ROWS-2,
    col : MAX_COLS-2,
    isWall:false,
    isEnd:false,
    isPath:false,
    isStart:false,
    distance:0,
    isTraversed:false,
    parent : undefined
}