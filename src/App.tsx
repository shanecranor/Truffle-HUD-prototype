import './App.css'
import Draggable from './Draggable'
function App() {
  return (
    <>
    <Draggable defaultPosition={{x:0,y:0}}>
      <div style={{background:"black", color:"white", width: "900px", padding: "10px", boxSizing:"border-box"}}>
      🐷 Pigtionary Addon 
      </div>
      <iframe src="https://pigtionary-embed.netlify.app/streamer.html" style={{border:"none", boxSizing:"border-box", width:"100%", height:"400px"}}></iframe>
    </Draggable>
    </>
    
  )
}

export default App
