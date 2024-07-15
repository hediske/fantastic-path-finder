import { MouseEventHandler } from "react"
import { BsFillPlayFill } from "react-icons/bs"
import { ClipLoader } from "react-spinners"
const PlayButton = ({
    handleRunVisualizer,
    isGraphVisualized,
    isDisabled
}:{
    handleRunVisualizer:MouseEventHandler<HTMLButtonElement>,
    isGraphVisualized:boolean
    isDisabled:boolean
})=>{
    return <button className="w-11 h-inherit rounded-full flex items-center justify-center h-11  bg-[#5d5d5d]" onClick={handleRunVisualizer} disabled={isDisabled}>
        {isGraphVisualized ? <ClipLoader color="white"></ClipLoader> : <BsFillPlayFill color="#e4d3d3"  size={24}/> }
    </button>
}
export default PlayButton