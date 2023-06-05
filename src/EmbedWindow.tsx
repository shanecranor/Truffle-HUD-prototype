//react function component boilerplate
import { useState } from "react";
import "./App.css";
import Draggable from "./Draggable";
import { EmbedInfo } from "./types";

//TODO: background windows should be differentiated somehow
export default function EmbedWindow(
	{
		embedInfo: {
			id,
			iframeSrc,
			title,
			tooltipDescription,
			dimensions,
			isResizeable,
			resizeBounds
		},
		isFocused,
	}: { embedInfo: EmbedInfo, isFocused: boolean }) {
	const [isDragging, setIsDragging] = useState<boolean>(false);
	tooltipDescription; id;
	console.log(resizeBounds)
	// const [isResizing, setIsResizing] = useState<boolean>(false);
	return <Draggable defaultPosition={{ x: 0, y: 0 }}>
		<div className="addon-window"
			onMouseDown={() => { setIsDragging(true); }}
			onMouseUp={() => setIsDragging(false)}
			style={{
				resize: isResizeable ? "both" : "none",
				width: `${dimensions.x}px`,
				//if resizebounds isn't passed, just use the defaults set in App.css
				...(resizeBounds || {}), 
			}}
		>
			<div className="title-bar"> {title} </div>

			<iframe
				src={iframeSrc}
				style={{
					height: `${dimensions.y}px`,
					pointerEvents: isDragging || !isFocused ? "none" : "inherit",
				}}
			></iframe>
			{/* <div className="resize-y"
			style={{height: "0.5px", background: "red", hover}}/> */}
		</div>
	</Draggable>


}
