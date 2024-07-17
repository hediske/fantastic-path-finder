import { EXTENDED_SPEED, SPEED, SPEEDS, TILE_PATH_STYLE, TILE_TRAVERSED_STYLE } from "./constants";
import { isEqual } from "./helpers";
import {  SpeedRate, TileType } from "./types";

export const setAnimatePath = async ({
    startTile,
    endTile,
    traversedTiles,
    path,
    speedRate}:
{   
    startTile:TileType,
    endTile:TileType,
    traversedTiles:TileType[],
    path:TileType[],
    speedRate:SpeedRate
}) =>{
    for(let i=0;i<traversedTiles.length;i++){
        const traversed = traversedTiles[i]
        const delay =  i * SPEED *  SPEEDS.find(s=>s.value===speedRate)!.value
        setTimeout(()=>{
            if(!isEqual(traversed,startTile) && !isEqual(traversed,endTile)){
                document.getElementById(`${traversed.row}-${traversed.col}`)!.className = `${TILE_TRAVERSED_STYLE} no-selector dark:animate-traversedDark animate-traversed`
            }

        },delay)
    }
    setTimeout(()=>{

        for(let i=0;i<path.length;i++){
            const tile = path[i]
            const delay = i * EXTENDED_SPEED * SPEEDS.find(s=>s.value===speedRate)!.value
            setTimeout(()=>{
            if(!isEqual(tile,startTile) && !isEqual(tile,endTile)){
                document.getElementById(`${tile.row}-${tile.col}`)!.className = `${TILE_PATH_STYLE} no-selector animate-path`
            }},delay)
        }

    },SPEEDS.find(s=>s.value===speedRate)!.value * SPEED *traversedTiles.length)
}