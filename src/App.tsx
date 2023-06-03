import './App.css'
import { useState } from 'react'
import Draggable from './Draggable'
import EmbedWindow from './EmbedWindow'
import { EmbedInfo } from './types'
function App({inputData}: {inputData: EmbedInfo[]}) {
  const [embedStateList, setEmbedStateList] = useState<EmbedInfo[]>(inputData)
  const [displayOrder, setDisplayOrder] = useState<string[]>(inputData.map(info => info.id));
  
  return (
    <>
    {embedStateList.map((embedState, index) => (
      <div className='addon-window-container'
      onMouseDown={
        //move to top of list when clicked 
        () => {setDisplayOrder((oldOrder) =>
          {
            const targetIdx: number = oldOrder.indexOf(embedState.id)
            const targetItem = oldOrder[targetIdx];
            return [...oldOrder.filter((_,i)=>i!==targetIdx), targetItem] 
          });
        }

      }
      style={{
        position: "absolute",
        zIndex: displayOrder.indexOf(embedState.id)
      }}   
      >
        <EmbedWindow {...embedState}/>
       </div>
    ))}
    {/* <Draggable defaultPosition={{x:0,y:0}}>
    <div 
      onMouseDown={()=>setIsDragging(true)}
      onMouseUp={()=>setIsDragging(false)}
      style={{background:"black", color:"white", width: "550px", padding: "10px", boxSizing:"border-box"}}
      >
      Some other addon
      </div>
    <iframe border={0} frameborder={0} height={250} width={550}
 src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>
    </Draggable> */}
    </>
    
  )
}

export default App
