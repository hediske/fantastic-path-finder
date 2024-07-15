import { twMerge } from 'tailwind-merge';
import { TILE_END_STYLE, TILE_START_STYLE, TILE_TRAVERSED_STYLE, TILE_WALL_STYLE, TILE_STYLE, TILE_PATH_STYLE, MAX_ROWS } from '../utils/constants';
const Tile = ({
    row,
    col,
    isWall,
    isStart,
    isEnd,
    isTraversed,
    isPath,
    onMouseUp,
    onMouseEnter,
    onMouseDown
}:{
        row:number,
        col:number,
        isWall:boolean,
        isStart:boolean,
        isEnd:boolean,
        isTraversed:boolean,
        isPath:boolean,
        onMouseUp:() => void,
        onMouseEnter:(row:number,col:number) => void,
        onMouseDown:(row:number,col:number) => void
    })  => {
    let tileTypeStyle =""
    if(isStart){
        tileTypeStyle= TILE_START_STYLE
    }else if(isEnd){
        tileTypeStyle = TILE_END_STYLE
    }else if(isPath){
        tileTypeStyle = TILE_PATH_STYLE
    }else if(isWall){
        tileTypeStyle = TILE_WALL_STYLE
    }else if(isTraversed){
        tileTypeStyle = TILE_TRAVERSED_STYLE
    }else {
        tileTypeStyle=TILE_STYLE
    }


    const borderStyle = row === MAX_ROWS-1  ? 'border-b' : col === 0 ? 'border-l' : ''
    const edgeStyle = row === MAX_ROWS-1 && col === 0 ? 'border-l' :  ''



        return (
        <div  className={twMerge(tileTypeStyle,edgeStyle,borderStyle,"no-selector")} 
              id={`${row}-${col}`}
              onMouseUp={onMouseUp}
              onMouseDown={() => {onMouseDown(row,col)}}
              onMouseEnter={() => {onMouseEnter(row,col)}}
        >
        </div>
        )
    }

export default Tile