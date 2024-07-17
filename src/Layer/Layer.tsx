import { MutableRefObject, useEffect } from 'react'
import Grid from '../components/Grid'
import Nav from '../components/Nav'
import { useMode } from '../hooks/useMode'

const Layer = ({isVisualizationRunningRef} : {isVisualizationRunningRef:MutableRefObject<Boolean>})=> {
    
    
    const {modeType}= useMode()
    
    useEffect(() =>{
        document.querySelector('html')!.classList.remove('dark','light')
        document.querySelector('html')!.classList.add(modeType)
        localStorage.setItem('theme', modeType)
    } ,[modeType])


    return (
        <section>
            <div className="containerLg">
                <Nav isVisualizationRunningRef={isVisualizationRunningRef}></Nav>
                <Grid isVisualizationRunningRef={isVisualizationRunningRef}/>
            </div>
        </section>
    )
}
export default Layer