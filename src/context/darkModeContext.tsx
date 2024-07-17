import { createContext, ReactNode, useState } from 'react';
import { PreferedType } from '../utils/types';
export interface DarkModeInterface {
    modeType : PreferedType,
    setMode : (mode:PreferedType) => void
}

export const DarkModeContext = createContext<DarkModeInterface|undefined>(undefined)
export const DarkModeProvider = ({children} : {children:ReactNode}) => {
    let preferred
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        preferred = 'dark'
      } else {
        preferred = 'light'
      }
    
    localStorage.setItem('theme', preferred)
      
    const [modeType,setMode] = useState<PreferedType>(preferred as PreferedType)
    return(
        <DarkModeContext.Provider value={{modeType,setMode}}>
            {children}
        </DarkModeContext.Provider>
    )


}