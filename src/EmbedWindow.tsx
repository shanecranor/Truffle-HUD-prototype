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
	}: { embedInfo: EmbedInfo }) {
	const [isDragging, setIsDragging] = useState<boolean>(false);
	if(isResizeable){ //todo add resizeable functionality
		console.log("resizeable");
		console.log(id, tooltipDescription)
	}
	// const [isResizing, setIsResizing] = useState<boolean>(false);
	return <Draggable defaultPosition={{ x: 0, y: 0 }}>
		<div
			className="title-bar"
			onMouseDown={() => { setIsDragging(true); }}
			onMouseUp={() => setIsDragging(false)}
			style={{
				background: "black",
				color: "white",
				width: `${dimensions.x}px`,
				padding: "10px",
				boxSizing: "border-box",
			}}
		>
			{title}
		</div>
		<iframe
			src={iframeSrc}
			style={{
				border: "none",
				boxSizing: "border-box",
				width: "100%",
				height: "400px",
				pointerEvents: isDragging ? "none" : "inherit"
			}}
		></iframe>
	</Draggable>


}
