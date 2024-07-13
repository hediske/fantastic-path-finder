import { createContext, ReactNode, useState } from 'react';
import { SpeedRate } from '../utils/types';
export interface SpeedContextInterface {
    speedRate : SpeedRate,
    setSpeedRate : (speed:SpeedRate) => void
}

export const SpeedContext = createContext<SpeedContextInterface|undefined>(undefined)
export const SpeedProvider = ({children} : {children:ReactNode}) => {
    const [speedRate,setSpeedRate] = useState<SpeedRate>(1)
    return(
        <SpeedContext.Provider value={{speedRate,setSpeedRate}}>
            {children}
        </SpeedContext.Provider>
    )


}