export type AlgorithmType = 'DIJKSTRA' | 'A_STAR' | 'BFS' | 'DFS'; 
export type MazeType = 'BINARY_TREE'| 'NONE' | "RECURSIVE_DIVISION";
export type GridType = TileType[][];
export type TileType = {
    row:number;
    col:number;
    isWall:boolean;
    isStart:boolean;
    isEnd:boolean;
    isPath:boolean;
    distance:number;
    isTraversed:boolean;
    parent ?: TileType;}

export type SpeedRate = 2 | 1 | 0.5
export type PreferedType = 'LIGHT' | 'DARK'

export interface speedNameInterface   {
    name:string,
    value:SpeedRate
}

export interface mazeNameInterface {
    name:string,
    value:MazeType
}

export interface algorithmsNameInterface {
    name:string,
    value:AlgorithmType
}
