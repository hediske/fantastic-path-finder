import { MouseEventHandler } from "react"
import { BsFillPlayFill } from "react-icons/bs"
const PlayButton = ({
    handleRunVisualizer,
    isGraphVisualized,
    isDisabled
}:{
    handleRunVisualizer:MouseEventHandler<HTMLButtonElement>,
    isGraphVisualized:boolean
    isDisabled:boolean
})=>{
    return <button onClick={handleRunVisualizer} disabled={isDisabled}>
        {isGraphVisualized ? "loading" : <BsFillPlayFill/> }
    </button>
}
export default PlayButton