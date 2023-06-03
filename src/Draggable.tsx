import { JSX, useEffect, useState } from "react";
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
    //outer div is the full screen div 
    <div
      className="draggable"
      // draggable={true}
      style={{
				width: "100%",
				height: "100%",
				background: "none",
				position: "fixed",
				top: "0",
				left: "0",
			}}
    >
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
					const target: EventTarget = e.target;
					const classes: string = (target as Element).className;
					//prevent dragging by links and any class that has the prevent-drag class
					// console.log(classes);
					//multiple events are fired for some reason, this ignores all events triggered by a certain classname
					if (ignoreClassName && classes.includes(ignoreClassName)) return;
					if (requiredClassName && !classes.includes(requiredClassName)) {
						setDragInfo((old: DragInfo) => ({ ...old, draggable: false }));
					}
					// prevent dragging by links and elements that have the prevent-drag class by default
					if ((target as Element).tagName === "A" || classes.includes("prevent-drag")) {
						setDragInfo((old: DragInfo) => ({ ...old, draggable: false }));
					}
				}}
				onDragStart={(e: DragEvent<HTMLDivElement>) => {
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
				onMouseUp={(e) => {
					setDragInfo((old: DragInfo) => ({
						...old,
						pressed: false,
						draggable: true,
					}));
				}}
      >
        {children}
      </div>
    </div>
  );
}