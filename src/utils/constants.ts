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

export const TILE_STYLE = "lg:w-[17px] md:w-[15px]  xs:w-[9px] w-[7px] lg:h-[17px] md:h-[15px]  xs:h-[9px] h-[7px] border-r border-t border-sky-300"
export const TILE_START_STYLE = TILE_STYLE+" bg-startColor"
export const TILE_END_STYLE = TILE_STYLE+" bg-endColor"
export const TILE_WALL_STYLE = TILE_STYLE+" bg-wallColor"
export const TILE_TRAVERSED_STYLE = TILE_STYLE+" bg-traversedColor"
export const TILE_PATH_STYLE = TILE_STYLE+" bg-pathColor"
