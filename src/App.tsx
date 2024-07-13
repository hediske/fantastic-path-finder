
import './App.css'
import { PathFindingProvider } from './context/pathFindingContext';
import { TileProvider } from './context/tileContext';
import { SpeedProvider } from './context/speedContext';
import Layer from './Layer/Layer.tsx'
function App() {

  return (
    
    <div className='container'>
      <PathFindingProvider>
        <TileProvider>
          <SpeedProvider>
            <Layer></Layer>
          </SpeedProvider>
        </TileProvider>
      </PathFindingProvider>
    </div>
  )
}

export default App
