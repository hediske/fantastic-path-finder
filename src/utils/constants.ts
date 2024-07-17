import { algorithmsNameInterface, mazeNameInterface, speedNameInterface } from "./types"

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
export const TILE_START_STYLE = TILE_STYLE+" bg-startColor dark:bg-startColorDark"
export const TILE_END_STYLE = TILE_STYLE+" bg-endColor dark:bg-endColorDark"
export const TILE_WALL_STYLE = TILE_STYLE+" bg-wallColor dark:bg-wallColorDark"
export const TILE_TRAVERSED_STYLE = TILE_STYLE+" bg-traversedColor dark:bg-traversedColorDark"
export const TILE_PATH_STYLE = TILE_STYLE+" bg-pathColor dark:bg-pathColorDark"


export const MAZE_TYPES : mazeNameInterface[] = [
    {
        name:"Binary Tree",
        value:'BINARY_TREE'
    },
    {
        name:"Recursive Division",
        value:'RECURSIVE_DIVISION'
    },
    {
        name:"No Maze",
        value:'NONE'
    }
]

export const SPEEDS :speedNameInterface[]= [
    {
        name:"Slow",
        value:2
    },
    {
        name:"Medium",
        value:1
    },
    {
        name:"Fast",
        value:0.5
    }
]

export const ALGORITHM_TYPES :algorithmsNameInterface[]= [
    {
        name:"Dijkstra",
        value:'DIJKSTRA'
    },
    {
        name:"A Star",
        value:'A_STAR'
    },
    {
        name:'Breadth First Search',
        value:"BFS"
    },{
        name:"Depth First Search",
        value:'DFS'
    }
]

export const SPEED  = 6
export const EXTENDED_SPEED  = 30