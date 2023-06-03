import { useState } from 'react'

import './App.css'
import Draggable from './Draggable'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Draggable defaultPosition={{x:0,y:0}}>
      <div style={{background:"red"}}>
        test :)
      </div>
    </Draggable>
    </>
    
  )
}

export default App
