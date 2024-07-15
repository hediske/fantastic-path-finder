import { MutableRefObject } from 'react'
import Grid from '../components/Grid'
import Nav from '../components/Nav'

const Layer = ({isVisualizationRunningRef} : {isVisualizationRunningRef:MutableRefObject<Boolean>})=> {
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