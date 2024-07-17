import ReactSwitch from "react-switch"
import { useMode } from "../hooks/useMode"

const ThemeToggle = ()  =>{
    const onChangeBtn = () =>{
        setMode(modeType === 'dark' ? 'light' : 'dark')
    }

    const {modeType,setMode}= useMode()
    return (
        <div className="containerlg flex justify-end items-center">
            <div className="flex flex-row gap-[15px] ml-3">
            <h2 className="text-grey text-[16px] text-black dark:text-white"> Dark Mode </h2>
            <ReactSwitch checked={modeType === 'dark'} onChange={onChangeBtn}></ReactSwitch>
        </div>
        </div>
    )
}
export default ThemeToggle