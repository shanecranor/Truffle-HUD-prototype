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
			isResizeable
		},
		isFocused,
	}: { embedInfo: EmbedInfo, isFocused: boolean }) {
	const [isDragging, setIsDragging] = useState<boolean>(false);
	if (isResizeable) { //todo add resizeable functionality
		console.log("resizeable");
		console.log(id, tooltipDescription)
	}
	// const [isResizing, setIsResizing] = useState<boolean>(false);
	return <Draggable defaultPosition={{ x: 0, y: 0 }}>
		<div className="addon-window"
			onMouseDown={() => { setIsDragging(true); }}
			onMouseUp={() => setIsDragging(false)}
			style={{
				resize: "both",
				display: "flex",
				flexDirection: "column",
				width: `${dimensions.x}px`
			}}
		>
			<div
				className="title-bar"
				style={{  width: "100%"}}
			>
				{title}
			</div>

			<iframe
				src={iframeSrc}
				style={{
					flexGrow:"1",
					width: "100%",
					height: `${dimensions.y}px`,
					pointerEvents: isDragging || !isFocused ? "none" : "inherit",
				}}
			></iframe>
			{/* <div className="resize-y"
			style={{height: "0.5px", background: "red", hover}}/> */}
		</div>
	</Draggable>


}
