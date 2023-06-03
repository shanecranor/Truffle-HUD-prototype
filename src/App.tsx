import './App.css'
import { useState } from 'react'
import EmbedWindow from './EmbedWindow'
import { EmbedInfo } from './types'
function App({ inputData }: { inputData: EmbedInfo[] }) {
  const [draggingId, setDraggingId] = useState<string|boolean>(false)
  const [embedStateList] = useState<EmbedInfo[]>(inputData)
  const [displayOrder, setDisplayOrder] = useState<string[]>(inputData.map(info => info.id));
  return (
    <>
      {embedStateList.map((embedState) => (
        <div className='addon-window-container'
          onMouseDown={
            () => {
              setDisplayOrder((oldOrder) => {
                const targetIdx: number = oldOrder.indexOf(embedState.id)
                const targetItem = oldOrder[targetIdx];
                //move to bottom of list when clicked 
                return [...oldOrder.filter((_, i) => i !== targetIdx), targetItem]
              })
            setDraggingId(embedState.id)
            }
          }
          onMouseUp={() => setDraggingId(false)}
          style={{
            position: "absolute",
            zIndex: displayOrder.indexOf(embedState.id), 
            userSelect: draggingId === embedState.id || draggingId === false ? "inherit" : "none",
            pointerEvents: draggingId === embedState.id || draggingId === false ? "inherit" : "none",

          }}
        >
          <EmbedWindow embedInfo={embedState} />
        </div>
      ))}
    </>

  )
}

export default App
