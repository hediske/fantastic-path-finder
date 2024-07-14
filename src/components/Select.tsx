import { ChangeEvent } from "react"

const Select = ({
    label,
    value,
    onChange,
    options,
    isDisabled
}:{
    label:string,
    value:string|number,
    onChange:(value:ChangeEvent<HTMLSelectElement>) => void,
    options:{name:string,value:any}[],
    isDisabled:boolean
}) =>{
    return <div className="flex flex-col gap-1 items-start"> 
    <label className="text-[12px] ml-2 text-gray-400 " htmlFor={`sel-${label}`}>{label}</label>
        <select value={value} onChange={onChange} className="rounded-lg h-7 cursor:pointer flex items-center justify-center pl-2 pr-4 bg-gray-600 text-white text-[16px] font-[400] transition ease-in active:border-0 active:outline-none active:ring min-w-[200px] sm:min-w-full hover:bg-gray-900 " id={`sel-${label}`} disabled={isDisabled} >
            {options.map((option,index) => {return(
               <option className="bg-red-400 hover:bg-gray-900" value={option.value} key={index}> {option.name} </option>
            )})}
        </select>
    </div> 
}
export default Select