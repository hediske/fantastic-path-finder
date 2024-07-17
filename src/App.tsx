
import './App.css'
import { PathFindingProvider } from './context/pathFindingContext';
import { TileProvider } from './context/tileContext';
import { SpeedProvider } from './context/speedContext';
import Layer from './Layer/Layer.tsx'
import { DarkModeProvider } from './context/darkModeContext';
import { useRef } from 'react';
function App() {

  const isVisualizationRunningRef  = useRef<Boolean>(false)
  return (
    
    <div className='container dark:bg-[#1f1f1f] bg-white'>
      <PathFindingProvider>
        <TileProvider>
          <SpeedProvider>
            <DarkModeProvider>
            <Layer isVisualizationRunningRef={isVisualizationRunningRef}></Layer>
            </DarkModeProvider>
          </SpeedProvider>
        </TileProvider>
      </PathFindingProvider>
    </div>
  )
}

export default App
