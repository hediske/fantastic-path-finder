import { isEqual } from "./helpers"
import { TileType } from "./types"

export const isInQueue = (tile:TileType,queue:TileType[]) => {
    return queue.some(t=>isEqual(t,tile))
}