import { createContext, ReactNode, useState } from 'react';
import { PreferedType } from '../utils/types';
export interface DarkModeInterface {
    modeType : PreferedType,
    setMode : (mode:PreferedType) => void
}

export const DarkModeContext = createContext<DarkModeInterface|undefined>(undefined)
export const DarkModeProvider = ({children} : {children:ReactNode}) => {
    const [modeType,setMode] = useState<PreferedType>('DARK')
    return(
        <DarkModeContext.Provider value={{modeType,setMode}}>
            {children}
        </DarkModeContext.Provider>
    )


}