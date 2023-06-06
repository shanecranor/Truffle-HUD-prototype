import './window-system.css'
import { useState } from 'react'
import EmbedWindow from './embed-window'
import { EmbedInfo } from '../types'
function WindowManager({ embedList }: { embedList: EmbedInfo[] }) {
  const [draggingId, setDraggingId] = useState<string|boolean>(false)
  const [embedStateList] = useState<EmbedInfo[]>(embedList)
  const [displayOrder, setDisplayOrder] = useState<string[]>(embedList.map(info => info.id));
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
            zIndex: displayOrder.indexOf(embedState.id), 
            userSelect: draggingId === embedState.id || draggingId === false ? "inherit" : "none",
          }}
        >
          <EmbedWindow 
          embedInfo={embedState} 
          isFocused={displayOrder.indexOf(embedState.id) === displayOrder.length - 1}
          />
        </div>
      ))}
    </>

  )
}

export default WindowManager