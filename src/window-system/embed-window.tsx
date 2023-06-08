//react function component boilerplate
import { useState } from 'react';
import Draggable from './draggable';
import { EmbedInfo } from '../types';
import closeIcon from '../assets/close.svg';
import { setEmbedWindowVisibility } from '../state';
export default function EmbedWindow({
  embedInfo: {
    id,
    iframeSrc,
    title,
    tooltipDescription,
    embedWindow: { initialDimensions },
    isResizeable,
    resizeBounds,
  },
  isFocused,
}: {
  embedInfo: EmbedInfo;
  isFocused: boolean;
}) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  tooltipDescription;
  id;
  return (
    <Draggable defaultPosition={{ x: 72, y: 0 }}>
      <div
        className={`addon-window ${isFocused ? 'focused-window' : ''}`}
        id={`${id}-window`}
        onMouseDown={() => {
          setIsDragging(true);
        }}
        onMouseUp={() => setIsDragging(false)}
        style={{
          // display: isOpen ? "block" : "none",
          resize: isResizeable ? 'both' : 'none',
          width: `${initialDimensions.x}px`,
          //if resizebounds isn't passed, just use the defaults set in App.css
          ...(resizeBounds || {}),
        }}
      >
        <div className="title-bar"> {title}
				 <button className='close-window-btn'
					onClick={() => setEmbedWindowVisibility(id, false)}>
					<img src={closeIcon}/>
					</button>
				</div>

        <iframe
          id={`${id}-iframe`}
          src={iframeSrc}
          style={{
            height: `${initialDimensions.y}px`,
            pointerEvents: isDragging || !isFocused ? 'none' : 'inherit',
          }}
        />
      </div>
    </Draggable>
  );
}
