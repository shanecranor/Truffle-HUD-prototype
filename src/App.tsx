import './App.css'
import { useState } from 'react'
import Draggable from './Draggable'
function App() {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  return (
    <>
    <Draggable defaultPosition={{x:0,y:0}}>
      <div 
      onMouseDown={()=>setIsDragging(true)}
      onMouseUp={()=>setIsDragging(false)}
      style={{background:"black", color:"white", width: "900px", padding: "10px", boxSizing:"border-box"}}
      >
      🐷 Pigtionary Addon 
      </div>
      <iframe src="https://pigtionary-embed.netlify.app/streamer.html" 
      style={{border:"none", boxSizing:"border-box", width:"100%", height:"400px", pointerEvents: isDragging ? "none" : "inherit"}}
      ></iframe>
    </Draggable>
    </>
    
  )
}

export default App
