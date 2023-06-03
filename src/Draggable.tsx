import { useEffect, useState } from "react";
import React from "react";
import { Vector, DragInfo } from "./types";
export default function Draggable(
	{ children, defaultPosition, requiredClassName, ignoreClassName }:
		{
			children: React.ReactNode;
			defaultPosition: Vector;
			requiredClassName?: string;
			ignoreClassName?: string;
		},
) {
	const [dragInfo, setDragInfo] = useState<DragInfo>(
		{
			current: defaultPosition,
			start: { x: 0, y: 0 },
			pressed: false,
			draggable: true,
		},
	);

	useEffect(() => {
		const handleWindowMouseMove = (event: MouseEvent) => {
			setDragInfo((old: DragInfo) => (
				{
					...old,
					current: {
						x: (event.clientX) - old.start.x,
						y: (event.clientY) - old.start.y,
					},
				}
			));
		};
		if (dragInfo.pressed) {
			window.addEventListener("mousemove", handleWindowMouseMove);
		} else {
			window.removeEventListener("mousemove", handleWindowMouseMove);
		}
		return () => (window.removeEventListener(
			"mousemove",
			handleWindowMouseMove,
		));
	}, [dragInfo.pressed]);


	return (
		<div
			draggable={true}
			style={{
				//set position of child container
				width: "fit-content",
				position: "absolute",
				top: dragInfo.current.y + "px",
				left: dragInfo.current.x + "px",
				//disable text selection while dragging
				"user-select": dragInfo.pressed ? "none" : "inherit",
			} as React.CSSProperties}
			onMouseDown={(e: React.MouseEvent<HTMLElement>) => {
				const target = e.target as HTMLElement;
				const classes: string = target.className;
				//prevent dragging by links and any class that has the prevent-drag class
				//console.log(classes);
				//sometimes multiple events are fired, this ignores all events triggered by a certain classname
				if (ignoreClassName && classes.includes(ignoreClassName)) return;
				if (requiredClassName && !classes.includes(requiredClassName)) {
					setDragInfo((old: DragInfo) => ({ ...old, draggable: false }));
				}
				// prevent dragging by links and elements that have the prevent-drag class by default
				if (target.tagName === "A" || classes.includes("prevent-drag")) {
					setDragInfo((old: DragInfo) => ({ ...old, draggable: false }));
				}
			}}
			onDragStart={(e: React.DragEvent<HTMLElement>) => {
				e.preventDefault();
				if (dragInfo.draggable) {
					setDragInfo((old: DragInfo) => ({
						...old,
						pressed: true,
						start: {
							x: (e.clientX) - old.current.x,
							y: (e.clientY) - old.current.y,
						},
					}));
				}
			}}
			onMouseUp={() => {
				setDragInfo((old: DragInfo) => ({
					...old,
					pressed: false,
					draggable: true,
				}));
			}}
		>
			{children}
		</div>
	);
}