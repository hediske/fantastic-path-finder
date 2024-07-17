import { MouseEventHandler } from "react"
import { BsFillPlayFill } from "react-icons/bs"
import { CiRedo } from "react-icons/ci";
const PlayButton = ({
    handleRunVisualizer,
    isGraphVisualized,
    isDisabled
}:{
    handleRunVisualizer:MouseEventHandler<HTMLButtonElement>,
    isGraphVisualized:boolean
    isDisabled:boolean
})=>{
    return <button className="w-11 h-inherit rounded-full flex items-center justify-center h-11  dark:bg-[#5d5d5d] bg-[#a19f3c]" onClick={handleRunVisualizer} disabled={isDisabled}>
        {isGraphVisualized ?    <CiRedo size={30} color="white"></CiRedo> : <BsFillPlayFill color="#e4d3d3"  size={30}/> }
    </button>
}
export default PlayButton