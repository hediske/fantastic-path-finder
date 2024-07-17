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
    <label className="text-[12px] ml-2 dark:text-gray-400 text-black  " htmlFor={`sel-${label}`}>{label}</label>
        <select value={value} onChange={onChange} className="rounded-lg h-10  cursor:pointer flex items-center justify-center pl-2 pr-4 bg-purple-500 dark:bg-gray-600 text-black dark:text-white text-[20px] font-[600] transition ease-in active:border-0 active:outline-none active:ring lg:min-w-[200px]  sm:min-w-full dark:hover:bg-gray-900 hover:bg-slate-400" id={`sel-${label}`} disabled={isDisabled} >
            {options.map((option,index) => {return(
               <option className="bg-red-400 dark:bg-[#1e2569]" value={option.value} key={index}> {option.name} </option>
            )})}
        </select>
    </div> 
}
export default Select