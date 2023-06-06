import EmbedWindow from './embed-window.tsx'
import { useStyleSheet } from '../deps/styles.ts'
import styleSheet from './window-system.scss.js';
import { embedList } from '../state.ts'
import { observable } from '@legendapp/state';
import { observer } from "@legendapp/state/react"

function WindowManager() {
  useStyleSheet(styleSheet);
  const draggingId = observable<string|boolean>(false)
  const displayOrder = observable<string[]>(embedList.peek().map(info => info.id));
  return (
    <>
      {embedList.get().map((embedState) => (
        <div className='addon-window-container'
          onMouseDown={
            () => {
              displayOrder.set((oldOrder) => {
                const targetIdx: number = oldOrder.indexOf(embedState.id)
                const targetItem = oldOrder[targetIdx];
                //move to bottom of list when clicked 
                return [...oldOrder.filter((_, i) => i !== targetIdx), targetItem]
              })
            draggingId.set(embedState.id)
            }
          }
          onMouseUp={() => draggingId.set(false)}
          style={{
            zIndex: displayOrder.get().indexOf(embedState.id), 
            userSelect: draggingId.get() === embedState.id ||
                        draggingId.get() === false ? "inherit" : "none",
            visibility: embedState.isOpen ? "visible" : "hidden",
          }}
        >
          <EmbedWindow 
          embedInfo={embedState} 
          isFocused={displayOrder.get().indexOf(embedState.id) === displayOrder.get().length - 1}
          />
        </div>
      ))}
    </>

  )
}

export default observer(WindowManager)
