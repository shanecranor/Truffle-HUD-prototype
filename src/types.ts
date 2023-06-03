export interface Vector {
  x: number;
  y: number;
}

export interface DragInfo {
  current: Vector;
  start: Vector;
  pressed: boolean;
  draggable: boolean;
}

export interface EmbedInfo {
	id: string,
	iframeSrc: string,
	title: string,
	tooltipDescription: string,
	dimensions: Vector,
	isResizeable: boolean
}